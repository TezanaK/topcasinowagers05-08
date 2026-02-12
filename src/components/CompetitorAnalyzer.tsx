import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Target, TrendingUp, Search, Plus, ExternalLink, Link2, BarChart, Filter, X, CheckCircle } from 'lucide-react';

interface CompetitorBacklink {
  id: string;
  competitor_domain: string;
  backlink_source: string;
  source_domain_authority: number;
  link_type: string;
  anchor_text: string;
  target_url: string;
  discovered_date: string;
  relevance_score: number;
  opportunity_status: string;
  notes: string;
}

const CompetitorAnalyzer = () => {
  const [competitors, setCompetitors] = useState<CompetitorBacklink[]>([]);
  const [filteredCompetitors, setFilteredCompetitors] = useState<CompetitorBacklink[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterMinDA, setFilterMinDA] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    competitor_domain: '',
    backlink_source: '',
    source_domain_authority: 50,
    link_type: 'dofollow',
    anchor_text: '',
    target_url: '',
    relevance_score: 70,
    opportunity_status: 'new',
    notes: '',
  });

  useEffect(() => {
    loadCompetitors();
  }, []);

  useEffect(() => {
    filterData();
  }, [competitors, filterStatus, filterMinDA, searchTerm]);

  const loadCompetitors = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('competitor_backlinks')
      .select('*')
      .order('source_domain_authority', { ascending: false });

    if (!error && data) {
      setCompetitors(data);
    }
    setLoading(false);
  };

  const filterData = () => {
    let filtered = [...competitors];

    if (filterStatus !== 'all') {
      filtered = filtered.filter(c => c.opportunity_status === filterStatus);
    }

    if (filterMinDA > 0) {
      filtered = filtered.filter(c => c.source_domain_authority >= filterMinDA);
    }

    if (searchTerm) {
      filtered = filtered.filter(c =>
        c.competitor_domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.backlink_source.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.anchor_text?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredCompetitors(filtered);
  };

  const handleAdd = async () => {
    const { error } = await supabase
      .from('competitor_backlinks')
      .insert([formData]);

    if (!error) {
      setShowAddForm(false);
      setFormData({
        competitor_domain: '',
        backlink_source: '',
        source_domain_authority: 50,
        link_type: 'dofollow',
        anchor_text: '',
        target_url: '',
        relevance_score: 70,
        opportunity_status: 'new',
        notes: '',
      });
      loadCompetitors();
    }
  };

  const handleStatusUpdate = async (id: string, status: string) => {
    await supabase
      .from('competitor_backlinks')
      .update({ opportunity_status: status })
      .eq('id', id);
    loadCompetitors();
  };

  const handleConvertToOpportunity = async (competitor: CompetitorBacklink) => {
    const { error } = await supabase
      .from('backlink_opportunities')
      .insert([{
        domain: competitor.backlink_source,
        url: competitor.target_url,
        domain_authority: competitor.source_domain_authority,
        opportunity_type: 'competitor_analysis',
        priority: competitor.source_domain_authority > 60 ? 'high' : 'medium',
        status: 'new',
        notes: `Found via competitor analysis of ${competitor.competitor_domain}. Original anchor: ${competitor.anchor_text}`,
      }]);

    if (!error) {
      handleStatusUpdate(competitor.id, 'converted');
    }
  };

  const stats = {
    total: competitors.length,
    new: competitors.filter(c => c.opportunity_status === 'new').length,
    pursuing: competitors.filter(c => c.opportunity_status === 'pursuing').length,
    converted: competitors.filter(c => c.opportunity_status === 'converted').length,
    avgDA: competitors.length > 0
      ? Math.round(competitors.reduce((sum, c) => sum + c.source_domain_authority, 0) / competitors.length)
      : 0,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-xl font-semibold text-slate-700">Loading Competitor Analysis...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2 flex items-center">
            <Target className="w-10 h-10 mr-3 text-cyan-600" />
            Competitor Backlink Analyzer
          </h1>
          <p className="text-slate-600 text-lg">
            Discover and analyze competitor backlinks to find high-quality link building opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-600">Total Backlinks</span>
              <BarChart className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-slate-900">{stats.total}</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-600">New Opportunities</span>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-green-600">{stats.new}</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-600">Pursuing</span>
              <Target className="w-5 h-5 text-amber-600" />
            </div>
            <div className="text-3xl font-bold text-amber-600">{stats.pursuing}</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-600">Avg DA</span>
              <Link2 className="w-5 h-5 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-purple-600">{stats.avgDA}</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-6">
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search competitors, sources, or anchor text..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-slate-600" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="pursuing">Pursuing</option>
                <option value="converted">Converted</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-600">Min DA:</span>
              <input
                type="number"
                value={filterMinDA}
                onChange={(e) => setFilterMinDA(parseInt(e.target.value) || 0)}
                min="0"
                max="100"
                className="w-20 px-3 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <button
              onClick={() => setShowAddForm(true)}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Backlink
            </button>
          </div>

          {showAddForm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">Add Competitor Backlink</h2>
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Competitor Domain</label>
                    <input
                      type="text"
                      value={formData.competitor_domain}
                      onChange={(e) => setFormData({ ...formData, competitor_domain: e.target.value })}
                      placeholder="competitor-site.com"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Backlink Source</label>
                    <input
                      type="text"
                      value={formData.backlink_source}
                      onChange={(e) => setFormData({ ...formData, backlink_source: e.target.value })}
                      placeholder="high-authority-site.com"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Domain Authority</label>
                      <input
                        type="number"
                        value={formData.source_domain_authority}
                        onChange={(e) => setFormData({ ...formData, source_domain_authority: parseInt(e.target.value) })}
                        min="0"
                        max="100"
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Link Type</label>
                      <select
                        value={formData.link_type}
                        onChange={(e) => setFormData({ ...formData, link_type: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="dofollow">Dofollow</option>
                        <option value="nofollow">Nofollow</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Anchor Text</label>
                    <input
                      type="text"
                      value={formData.anchor_text}
                      onChange={(e) => setFormData({ ...formData, anchor_text: e.target.value })}
                      placeholder="Click here to learn more"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Target URL</label>
                    <input
                      type="text"
                      value={formData.target_url}
                      onChange={(e) => setFormData({ ...formData, target_url: e.target.value })}
                      placeholder="https://competitor.com/page"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Relevance Score: {formData.relevance_score}</label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={formData.relevance_score}
                      onChange={(e) => setFormData({ ...formData, relevance_score: parseInt(e.target.value) })}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Notes</label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <button
                    onClick={handleAdd}
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all"
                  >
                    Add Competitor Backlink
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {filteredCompetitors.length === 0 ? (
              <div className="text-center py-12">
                <Target className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                <p className="text-slate-600 text-lg mb-2">No competitor backlinks found</p>
                <p className="text-slate-500 text-sm">Start analyzing your competitors to discover link opportunities</p>
              </div>
            ) : (
              filteredCompetitors.map((competitor) => (
                <div
                  key={competitor.id}
                  className="bg-gradient-to-r from-slate-50 to-cyan-50 rounded-xl p-6 border-2 border-slate-200 hover:border-cyan-300 transition-all"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex-1 min-w-[300px]">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-lg font-bold text-slate-900">{competitor.backlink_source}</div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          competitor.opportunity_status === 'new' ? 'bg-green-100 text-green-700' :
                          competitor.opportunity_status === 'pursuing' ? 'bg-amber-100 text-amber-700' :
                          competitor.opportunity_status === 'converted' ? 'bg-blue-100 text-blue-700' :
                          'bg-slate-100 text-slate-700'
                        }`}>
                          {competitor.opportunity_status}
                        </span>
                      </div>
                      <div className="text-sm text-slate-600 mb-1">
                        Competitor: <span className="font-semibold">{competitor.competitor_domain}</span>
                      </div>
                      {competitor.anchor_text && (
                        <div className="text-sm text-slate-600 mb-2">
                          Anchor: <span className="italic">"{competitor.anchor_text}"</span>
                        </div>
                      )}
                      {competitor.notes && (
                        <div className="text-sm text-slate-500 mt-2">{competitor.notes}</div>
                      )}
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{competitor.source_domain_authority}</div>
                        <div className="text-xs text-slate-600">DA</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{competitor.relevance_score}</div>
                        <div className="text-xs text-slate-600">Relevance</div>
                      </div>
                      <div className={`px-3 py-2 rounded-lg text-xs font-semibold ${
                        competitor.link_type === 'dofollow'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {competitor.link_type}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {competitor.opportunity_status === 'new' && (
                      <>
                        <button
                          onClick={() => handleConvertToOpportunity(competitor)}
                          className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-md transition-all flex items-center"
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Convert to Opportunity
                        </button>
                        <button
                          onClick={() => handleStatusUpdate(competitor.id, 'pursuing')}
                          className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-md transition-all"
                        >
                          Mark as Pursuing
                        </button>
                      </>
                    )}
                    <a
                      href={competitor.target_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-md transition-all flex items-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Link
                    </a>
                    {competitor.opportunity_status !== 'rejected' && (
                      <button
                        onClick={() => handleStatusUpdate(competitor.id, 'rejected')}
                        className="bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-200 transition-all"
                      >
                        Reject
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitorAnalyzer;
