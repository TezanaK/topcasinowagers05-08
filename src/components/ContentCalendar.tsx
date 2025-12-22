import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Calendar, Plus, Edit, Trash2, CheckCircle, Clock, Lightbulb, FileText, TrendingUp, Target, BarChart3, Search } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  slug: string;
  content_type: string;
  target_keyword: string;
  secondary_keywords: string[];
  planned_publish_date: string;
  actual_publish_date: string | null;
  status: string;
  author: string;
  word_count: number;
  meta_title: string;
  meta_description: string;
  internal_links: number;
  external_links: number;
  notes: string;
  priority: string;
  created_at: string;
}

interface KeywordData {
  id: string;
  keyword: string;
  search_volume: number;
  difficulty: number;
  cpc: number;
  current_position: number | null;
  target_position: number | null;
  category: string;
  priority: string;
  status: string;
  notes: string;
}

const ContentCalendar = () => {
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);
  const [keywords, setKeywords] = useState<KeywordData[]>([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content_type: 'blog_post',
    target_keyword: '',
    secondary_keywords: '',
    planned_publish_date: '',
    status: 'idea',
    author: '',
    word_count: 1500,
    meta_title: '',
    meta_description: '',
    notes: '',
    priority: 'medium',
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [contentRes, keywordsRes] = await Promise.all([
      supabase.from('content_calendar').select('*').order('planned_publish_date', { ascending: true }),
      supabase.from('keyword_research').select('*').order('search_volume', { ascending: false }),
    ]);

    if (contentRes.data) setContentItems(contentRes.data);
    if (keywordsRes.data) setKeywords(keywordsRes.data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      ...formData,
      secondary_keywords: formData.secondary_keywords.split(',').map(k => k.trim()).filter(Boolean),
      slug: formData.slug || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    };

    if (editingItem) {
      await supabase.from('content_calendar').update(data).eq('id', editingItem.id);
    } else {
      await supabase.from('content_calendar').insert(data);
    }

    loadData();
    resetForm();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Delete this content item?')) {
      await supabase.from('content_calendar').delete().eq('id', id);
      loadData();
    }
  };

  const handleEdit = (item: ContentItem) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      slug: item.slug,
      content_type: item.content_type,
      target_keyword: item.target_keyword,
      secondary_keywords: item.secondary_keywords?.join(', ') || '',
      planned_publish_date: item.planned_publish_date,
      status: item.status,
      author: item.author,
      word_count: item.word_count,
      meta_title: item.meta_title,
      meta_description: item.meta_description,
      notes: item.notes,
      priority: item.priority,
    });
    setShowAddForm(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      content_type: 'blog_post',
      target_keyword: '',
      secondary_keywords: '',
      planned_publish_date: '',
      status: 'idea',
      author: '',
      word_count: 1500,
      meta_title: '',
      meta_description: '',
      notes: '',
      priority: 'medium',
    });
    setEditingItem(null);
    setShowAddForm(false);
  };

  const filteredContent = contentItems.filter(item => {
    if (filterStatus !== 'all' && item.status !== filterStatus) return false;
    if (filterPriority !== 'all' && item.priority !== filterPriority) return false;
    return true;
  });

  const stats = {
    total: contentItems.length,
    published: contentItems.filter(i => i.status === 'published').length,
    inProgress: contentItems.filter(i => ['draft', 'review'].includes(i.status)).length,
    ideas: contentItems.filter(i => i.status === 'idea').length,
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'idea': return 'bg-blue-100 text-blue-700';
      case 'outline': return 'bg-purple-100 text-purple-700';
      case 'draft': return 'bg-yellow-100 text-yellow-700';
      case 'review': return 'bg-orange-100 text-orange-700';
      case 'published': return 'bg-green-100 text-green-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'low': return 'bg-blue-100 text-blue-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const contentTypeOptions = [
    { value: 'blog_post', label: 'Blog Post' },
    { value: 'casino_review', label: 'Casino Review' },
    { value: 'game_guide', label: 'Game Guide' },
    { value: 'comparison', label: 'Comparison' },
    { value: 'listicle', label: 'Listicle' },
    { value: 'guide', label: 'Complete Guide' },
    { value: 'educational', label: 'Educational' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2 flex items-center">
            <Calendar className="w-10 h-10 mr-3 text-blue-600" />
            Content Calendar & Planning
          </h1>
          <p className="text-slate-600 text-lg">
            Strategic content planning with SEO optimization and keyword targeting
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <FileText className="w-8 h-8 text-blue-600" />
              <span className="text-3xl font-bold text-slate-900">{stats.total}</span>
            </div>
            <div className="text-sm text-slate-600">Total Content Items</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <span className="text-3xl font-bold text-slate-900">{stats.published}</span>
            </div>
            <div className="text-sm text-slate-600">Published</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <Edit className="w-8 h-8 text-yellow-600" />
              <span className="text-3xl font-bold text-slate-900">{stats.inProgress}</span>
            </div>
            <div className="text-sm text-slate-600">In Progress</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <Lightbulb className="w-8 h-8 text-purple-600" />
              <span className="text-3xl font-bold text-slate-900">{stats.ideas}</span>
            </div>
            <div className="text-sm text-slate-600">Content Ideas</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Content Pipeline</h2>
            <div className="flex gap-3">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-lg text-sm"
              >
                <option value="all">All Status</option>
                <option value="idea">Idea</option>
                <option value="outline">Outline</option>
                <option value="draft">Draft</option>
                <option value="review">Review</option>
                <option value="published">Published</option>
              </select>
              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-lg text-sm"
              >
                <option value="all">All Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-bold hover:shadow-lg transition-all flex items-center"
              >
                <Plus className="w-5 h-5 mr-2" />
                New Content
              </button>
            </div>
          </div>

          {showAddForm && (
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-6 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {editingItem ? 'Edit Content Item' : 'Add New Content'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Title *</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Slug</label>
                    <input
                      type="text"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                      placeholder="Auto-generated from title"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Content Type</label>
                    <select
                      value={formData.content_type}
                      onChange={(e) => setFormData({ ...formData, content_type: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                    >
                      {contentTypeOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Status</label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                    >
                      <option value="idea">Idea</option>
                      <option value="outline">Outline</option>
                      <option value="draft">Draft</option>
                      <option value="review">Review</option>
                      <option value="published">Published</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Priority</label>
                    <select
                      value={formData.priority}
                      onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                    >
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Target Keyword</label>
                    <input
                      type="text"
                      value={formData.target_keyword}
                      onChange={(e) => setFormData({ ...formData, target_keyword: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                      placeholder="Primary SEO keyword"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Secondary Keywords (comma-separated)</label>
                    <input
                      type="text"
                      value={formData.secondary_keywords}
                      onChange={(e) => setFormData({ ...formData, secondary_keywords: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                      placeholder="keyword1, keyword2, keyword3"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Planned Publish Date</label>
                    <input
                      type="date"
                      value={formData.planned_publish_date}
                      onChange={(e) => setFormData({ ...formData, planned_publish_date: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Author</label>
                    <input
                      type="text"
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Target Word Count</label>
                    <input
                      type="number"
                      value={formData.word_count}
                      onChange={(e) => setFormData({ ...formData, word_count: parseInt(e.target.value) })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Meta Title</label>
                  <input
                    type="text"
                    value={formData.meta_title}
                    onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                    maxLength={60}
                    placeholder="SEO title (max 60 chars)"
                  />
                  <div className="text-xs text-slate-500 mt-1">{formData.meta_title.length}/60 characters</div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Meta Description</label>
                  <textarea
                    value={formData.meta_description}
                    onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                    rows={2}
                    maxLength={160}
                    placeholder="SEO meta description (max 160 chars)"
                  />
                  <div className="text-xs text-slate-500 mt-1">{formData.meta_description.length}/160 characters</div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Notes</label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                    rows={3}
                    placeholder="Planning notes, outline, key points to cover..."
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-bold hover:shadow-lg transition-all"
                  >
                    {editingItem ? 'Update Content' : 'Add Content'}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="bg-slate-200 text-slate-700 px-6 py-2 rounded-xl font-bold hover:bg-slate-300 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="space-y-4">
            {filteredContent.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(item.priority)}`}>
                        {item.priority}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                        {item.content_type.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-sm mb-3">
                  <div>
                    <div className="flex items-center text-slate-600 mb-1">
                      <Target className="w-4 h-4 mr-2 text-green-600" />
                      <strong>Target Keyword:</strong> <span className="ml-1">{item.target_keyword || 'Not set'}</span>
                    </div>
                    {item.secondary_keywords && item.secondary_keywords.length > 0 && (
                      <div className="flex items-start text-slate-600">
                        <Search className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                        <div>
                          <strong>Secondary:</strong> {item.secondary_keywords.join(', ')}
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center text-slate-600 mb-1">
                      <Calendar className="w-4 h-4 mr-2 text-purple-600" />
                      <strong>Planned:</strong> <span className="ml-1">{item.planned_publish_date || 'Not scheduled'}</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <FileText className="w-4 h-4 mr-2 text-orange-600" />
                      <strong>Word Count:</strong> <span className="ml-1">{item.word_count} words</span>
                    </div>
                  </div>
                </div>

                {item.notes && (
                  <div className="bg-slate-50 rounded-lg p-3 text-sm text-slate-700">
                    <strong>Notes:</strong> {item.notes}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Search className="w-6 h-6 mr-2 text-green-600" />
              High-Opportunity Keywords
            </h2>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {keywords.slice(0, 15).map((kw) => (
                <div
                  key={kw.id}
                  className="p-4 border border-slate-200 rounded-xl hover:border-green-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900">{kw.keyword}</h3>
                      <div className="text-xs text-slate-500">{kw.category}</div>
                    </div>
                    <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                      kw.priority === 'high' ? 'bg-red-100 text-red-700' :
                      kw.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {kw.priority}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-blue-50 rounded-lg p-2">
                      <div className="text-slate-600">Volume</div>
                      <div className="font-bold text-blue-700">{kw.search_volume.toLocaleString()}/mo</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-2">
                      <div className="text-slate-600">Difficulty</div>
                      <div className="font-bold text-orange-700">{kw.difficulty}/100</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-2">
                      <div className="text-slate-600">CPC</div>
                      <div className="font-bold text-green-700">${kw.cpc.toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg border-2 border-green-200 p-6">
            <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center">
              <Lightbulb className="w-6 h-6 mr-2" />
              Content Creation Pro Tips
            </h3>
            <ul className="space-y-3 text-green-900">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
                <span><strong>Keyword research first:</strong> Plan content around high-volume, low-competition keywords for faster ranking.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
                <span><strong>Strategic publishing:</strong> Publish 2-3 comprehensive guides per week for consistent growth.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
                <span><strong>Content clusters:</strong> Create topic clusters with pillar pages linking to related content for SEO boost.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
                <span><strong>Internal linking:</strong> Link 5-10 internal pages in every article to boost crawlability and rankings.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
                <span><strong>Word count matters:</strong> Aim for 1,500-2,500 words for guides. Longer content ranks better for competitive terms.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
                <span><strong>Update regularly:</strong> Refresh top-performing content every 6 months to maintain rankings.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
                <span><strong>Meta optimization:</strong> Write compelling meta titles (50-60 chars) and descriptions (150-160 chars) for higher CTR.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCalendar;
