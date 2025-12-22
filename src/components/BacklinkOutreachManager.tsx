import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Mail, Send, CheckCircle, Clock, AlertCircle, Copy, ExternalLink, TrendingUp, Target, Users, MessageSquare, Plus, Filter } from 'lucide-react';

interface OutreachTemplate {
  id: string;
  name: string;
  category: string;
  subject_line: string;
  body: string;
  success_rate: number;
  times_used: number;
}

interface BacklinkOpportunity {
  id: string;
  domain: string;
  url: string;
  domain_authority: number;
  niche_relevance: string;
  contact_email: string;
  opportunity_type: string;
  priority: string;
  status: string;
  notes: string;
}

interface BacklinkOutreach {
  id: string;
  opportunity_id: string;
  outreach_date: string;
  subject_line: string;
  message: string;
  response_received: boolean;
  outcome: string;
}

const BacklinkOutreachManager = () => {
  const [opportunities, setOpportunities] = useState<BacklinkOpportunity[]>([]);
  const [templates, setTemplates] = useState<OutreachTemplate[]>([]);
  const [outreachHistory, setOutreachHistory] = useState<BacklinkOutreach[]>([]);
  const [selectedOpportunity, setSelectedOpportunity] = useState<BacklinkOpportunity | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<OutreachTemplate | null>(null);
  const [showEmailGenerator, setShowEmailGenerator] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [customVariables, setCustomVariables] = useState({
    YOUR_NAME: 'Your Name',
    THEIR_NAME: '',
    THEIR_SITE: '',
    THEIR_ARTICLE: '',
    TOPIC: '',
    YOUR_URL: 'https://topcasinowagers.ca',
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [oppsRes, templatesRes, outreachRes] = await Promise.all([
      supabase.from('backlink_opportunities').select('*').order('priority', { ascending: false }),
      supabase.from('outreach_templates').select('*').order('success_rate', { ascending: false }),
      supabase.from('backlink_outreach').select('*').order('outreach_date', { ascending: false }),
    ]);

    if (oppsRes.data) setOpportunities(oppsRes.data);
    if (templatesRes.data) setTemplates(templatesRes.data);
    if (outreachRes.data) setOutreachHistory(outreachRes.data);
  };

  const generateEmail = (template: OutreachTemplate) => {
    let subject = template.subject_line;
    let body = template.body;

    Object.entries(customVariables).forEach(([key, value]) => {
      const placeholder = `{${key}}`;
      subject = subject.replace(new RegExp(placeholder, 'g'), value);
      body = body.replace(new RegExp(placeholder, 'g'), value);
    });

    return { subject, body };
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const sendOutreach = async () => {
    if (!selectedOpportunity || !selectedTemplate) return;

    const { subject, body } = generateEmail(selectedTemplate);

    const { error } = await supabase.from('backlink_outreach').insert({
      opportunity_id: selectedOpportunity.id,
      subject_line: subject,
      message: body,
      outreach_date: new Date().toISOString().split('T')[0],
    });

    if (!error) {
      await supabase
        .from('backlink_opportunities')
        .update({ status: 'contacted' })
        .eq('id', selectedOpportunity.id);

      await supabase
        .from('outreach_templates')
        .update({ times_used: selectedTemplate.times_used + 1 })
        .eq('id', selectedTemplate.id);

      loadData();
      setShowEmailGenerator(false);
      setSelectedOpportunity(null);
      setSelectedTemplate(null);
    }
  };

  const filteredOpportunities = opportunities.filter(opp => {
    if (filterStatus !== 'all' && opp.status !== filterStatus) return false;
    if (filterPriority !== 'all' && opp.priority !== filterPriority) return false;
    return true;
  });

  const stats = {
    total: opportunities.length,
    contacted: opportunities.filter(o => o.status === 'contacted').length,
    responded: outreachHistory.filter(o => o.response_received).length,
    responseRate: outreachHistory.length > 0
      ? ((outreachHistory.filter(o => o.response_received).length / outreachHistory.length) * 100).toFixed(1)
      : '0.0',
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-blue-600 bg-blue-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'new': return 'text-green-600 bg-green-50';
      case 'contacted': return 'text-blue-600 bg-blue-50';
      case 'responded': return 'text-purple-600 bg-purple-50';
      case 'success': return 'text-emerald-600 bg-emerald-50';
      case 'rejected': return 'text-red-600 bg-red-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2 flex items-center">
            <Mail className="w-10 h-10 mr-3 text-blue-600" />
            Backlink Outreach Manager
          </h1>
          <p className="text-slate-600 text-lg">
            Automated email templates and outreach tracking for building quality backlinks
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <Target className="w-8 h-8 text-blue-600" />
              <span className="text-3xl font-bold text-slate-900">{stats.total}</span>
            </div>
            <div className="text-sm text-slate-600">Total Opportunities</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <Send className="w-8 h-8 text-green-600" />
              <span className="text-3xl font-bold text-slate-900">{stats.contacted}</span>
            </div>
            <div className="text-sm text-slate-600">Emails Sent</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <MessageSquare className="w-8 h-8 text-purple-600" />
              <span className="text-3xl font-bold text-slate-900">{stats.responded}</span>
            </div>
            <div className="text-sm text-slate-600">Responses Received</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-amber-600" />
              <span className="text-3xl font-bold text-slate-900">{stats.responseRate}%</span>
            </div>
            <div className="text-sm text-slate-600">Response Rate</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                  <Target className="w-6 h-6 mr-2 text-blue-600" />
                  Backlink Opportunities
                </h2>
                <div className="flex gap-2">
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-3 py-1 border border-slate-300 rounded-lg text-sm"
                  >
                    <option value="all">All Status</option>
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="responded">Responded</option>
                  </select>
                  <select
                    value={filterPriority}
                    onChange={(e) => setFilterPriority(e.target.value)}
                    className="px-3 py-1 border border-slate-300 rounded-lg text-sm"
                  >
                    <option value="all">All Priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {filteredOpportunities.map((opp) => (
                  <div
                    key={opp.id}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      selectedOpportunity?.id === opp.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-slate-200 hover:border-blue-300 bg-white'
                    }`}
                    onClick={() => {
                      setSelectedOpportunity(opp);
                      setCustomVariables({
                        ...customVariables,
                        THEIR_SITE: opp.domain,
                        THEIR_NAME: opp.contact_email ? opp.contact_email.split('@')[0] : '',
                      });
                    }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 mb-1">{opp.domain}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getPriorityColor(opp.priority)}`}>
                            {opp.priority.toUpperCase()}
                          </span>
                          <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getStatusColor(opp.status)}`}>
                            {opp.status}
                          </span>
                          <span className="text-xs text-slate-500">DA: {opp.domain_authority}</span>
                        </div>
                      </div>
                      <a
                        href={opp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-sm text-slate-600 mb-2">{opp.notes}</p>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Mail className="w-3 h-3" />
                      {opp.contact_email || 'No email provided'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-2 text-purple-600" />
                Email Templates
              </h2>

              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      selectedTemplate?.id === template.id
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-slate-200 hover:border-purple-300 bg-white'
                    }`}
                    onClick={() => setSelectedTemplate(template)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">{template.name}</h3>
                        <span className="px-2 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700">
                          {template.category.replace('_', ' ')}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{template.success_rate}%</div>
                        <div className="text-xs text-slate-500">Success Rate</div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 mb-2">
                      <strong>Subject:</strong> {template.subject_line}
                    </p>
                    <div className="text-xs text-slate-500">
                      Used {template.times_used} times
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {selectedOpportunity && selectedTemplate && (
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white mb-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Send className="w-8 h-8 mr-3" />
              Generate Outreach Email
            </h2>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Customize Variables</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(customVariables).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-sm font-medium mb-1">{key.replace('_', ' ')}</label>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => setCustomVariables({ ...customVariables, [key]: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50"
                      placeholder={key.replace('_', ' ')}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 text-slate-900 mb-6">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-semibold text-slate-700">Subject Line</label>
                  <button
                    onClick={() => copyToClipboard(generateEmail(selectedTemplate).subject)}
                    className="text-blue-600 hover:text-blue-700 flex items-center text-sm"
                  >
                    <Copy className="w-4 h-4 mr-1" />
                    Copy
                  </button>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg font-medium">
                  {generateEmail(selectedTemplate).subject}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-semibold text-slate-700">Email Body</label>
                  <button
                    onClick={() => copyToClipboard(generateEmail(selectedTemplate).body)}
                    className="text-blue-600 hover:text-blue-700 flex items-center text-sm"
                  >
                    <Copy className="w-4 h-4 mr-1" />
                    Copy
                  </button>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg whitespace-pre-wrap text-sm">
                  {generateEmail(selectedTemplate).body}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={sendOutreach}
                className="flex-1 bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Mark as Sent
              </button>
              <button
                onClick={() => {
                  setSelectedOpportunity(null);
                  setSelectedTemplate(null);
                }}
                className="px-6 bg-white/20 backdrop-blur py-3 rounded-xl font-bold hover:bg-white/30 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center">
            <AlertCircle className="w-6 h-6 mr-2" />
            Outreach Pro Tips
          </h3>
          <ul className="space-y-2 text-amber-900">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
              <span><strong>Personalize every email:</strong> Mention specific articles or content from their site to show you've done your research.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
              <span><strong>Follow up strategically:</strong> Send a polite follow-up 7 days after the initial email. 80% of responses come from follow-ups.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
              <span><strong>Provide value first:</strong> Offer something useful (data, guest post, resource) before asking for a link.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
              <span><strong>Track everything:</strong> Log all outreach attempts, responses, and outcomes to improve your success rate.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
              <span><strong>Quality over quantity:</strong> 10 personalized emails to relevant sites beat 100 generic blasts.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BacklinkOutreachManager;
