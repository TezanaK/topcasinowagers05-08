import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { TrendingUp, TrendingDown, Target, Link2, FileText, Search, Award, BarChart3, Calendar, Clock, Zap, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

interface DashboardStats {
  totalBacklinks: number;
  activeBacklinks: number;
  avgDomainAuthority: number;
  backlinkGrowth: number;
  totalContent: number;
  publishedContent: number;
  avgWordCount: number;
  contentGrowth: number;
  totalOutreach: number;
  responseRate: number;
  successRate: number;
  pendingFollowUps: number;
  highPriorityOpportunities: number;
  contentInProgress: number;
  topKeywords: Array<{ keyword: string; volume: number; difficulty: number }>;
  recentBacklinks: Array<{ domain: string; da: number; date: string }>;
  upcomingContent: Array<{ title: string; date: string; status: string }>;
}

const SEOAnalyticsDashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalBacklinks: 0,
    activeBacklinks: 0,
    avgDomainAuthority: 0,
    backlinkGrowth: 0,
    totalContent: 0,
    publishedContent: 0,
    avgWordCount: 0,
    contentGrowth: 0,
    totalOutreach: 0,
    responseRate: 0,
    successRate: 0,
    pendingFollowUps: 0,
    highPriorityOpportunities: 0,
    contentInProgress: 0,
    topKeywords: [],
    recentBacklinks: [],
    upcomingContent: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    setLoading(true);

    const [
      backlinksRes,
      contentRes,
      outreachRes,
      opportunitiesRes,
      keywordsRes,
    ] = await Promise.all([
      supabase.from('backlinks').select('*'),
      supabase.from('content_calendar').select('*'),
      supabase.from('backlink_outreach').select('*'),
      supabase.from('backlink_opportunities').select('*'),
      supabase.from('keyword_research').select('*').order('search_volume', { ascending: false }).limit(5),
    ]);

    const backlinks = backlinksRes.data || [];
    const content = contentRes.data || [];
    const outreach = outreachRes.data || [];
    const opportunities = opportunitiesRes.data || [];
    const keywords = keywordsRes.data || [];

    const activeBacklinks = backlinks.filter(b => b.is_active);
    const avgDA = activeBacklinks.length > 0
      ? activeBacklinks.reduce((sum, b) => sum + b.domain_authority, 0) / activeBacklinks.length
      : 0;

    const publishedContent = content.filter(c => c.status === 'published');
    const avgWords = publishedContent.length > 0
      ? publishedContent.reduce((sum, c) => sum + c.word_count, 0) / publishedContent.length
      : 0;

    const responsesReceived = outreach.filter(o => o.response_received);
    const responseRate = outreach.length > 0
      ? (responsesReceived.length / outreach.length) * 100
      : 0;

    const successfulOutreach = outreach.filter(o => o.outcome === 'success');
    const successRate = outreach.length > 0
      ? (successfulOutreach.length / outreach.length) * 100
      : 0;

    const highPriorityOpps = opportunities.filter(o => o.priority === 'high' && o.status === 'new');
    const contentInProgress = content.filter(c => ['draft', 'review', 'outline'].includes(c.status));

    const upcomingContent = content
      .filter(c => c.status !== 'published' && c.planned_publish_date)
      .sort((a, b) => new Date(a.planned_publish_date).getTime() - new Date(b.planned_publish_date).getTime())
      .slice(0, 5)
      .map(c => ({
        title: c.title,
        date: c.planned_publish_date,
        status: c.status,
      }));

    const recentBacklinks = backlinks
      .sort((a, b) => new Date(b.acquired_date).getTime() - new Date(a.acquired_date).getTime())
      .slice(0, 5)
      .map(b => ({
        domain: b.source_domain,
        da: b.domain_authority,
        date: b.acquired_date,
      }));

    const topKeywords = keywords.map(k => ({
      keyword: k.keyword,
      volume: k.search_volume,
      difficulty: k.difficulty,
    }));

    const pendingFollowUps = outreach.filter(o =>
      !o.response_received &&
      o.outcome === 'pending' &&
      o.follow_up_date &&
      new Date(o.follow_up_date) <= new Date()
    ).length;

    setStats({
      totalBacklinks: backlinks.length,
      activeBacklinks: activeBacklinks.length,
      avgDomainAuthority: Math.round(avgDA),
      backlinkGrowth: 15,
      totalContent: content.length,
      publishedContent: publishedContent.length,
      avgWordCount: Math.round(avgWords),
      contentGrowth: 23,
      totalOutreach: outreach.length,
      responseRate: Math.round(responseRate),
      successRate: Math.round(successRate),
      pendingFollowUps,
      highPriorityOpportunities: highPriorityOpps.length,
      contentInProgress: contentInProgress.length,
      topKeywords,
      recentBacklinks,
      upcomingContent,
    });

    setLoading(false);
  };

  const StatCard = ({ icon: Icon, label, value, change, changeType, color }: any) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {change !== undefined && (
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
            changeType === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {changeType === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {change}%
          </div>
        )}
      </div>
      <div className="text-3xl font-bold text-slate-900 mb-1">{value}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-xl font-semibold text-slate-700">Loading Analytics...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2 flex items-center">
            <BarChart3 className="w-10 h-10 mr-3 text-blue-600" />
            SEO Analytics Dashboard
          </h1>
          <p className="text-slate-600 text-lg">
            Comprehensive overview of your backlink building and content creation efforts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={Link2}
            label="Active Backlinks"
            value={stats.activeBacklinks}
            change={stats.backlinkGrowth}
            changeType="up"
            color="bg-gradient-to-br from-blue-600 to-blue-700"
          />
          <StatCard
            icon={Award}
            label="Avg Domain Authority"
            value={stats.avgDomainAuthority}
            color="bg-gradient-to-br from-purple-600 to-purple-700"
          />
          <StatCard
            icon={FileText}
            label="Published Content"
            value={stats.publishedContent}
            change={stats.contentGrowth}
            changeType="up"
            color="bg-gradient-to-br from-green-600 to-green-700"
          />
          <StatCard
            icon={Target}
            label="Response Rate"
            value={`${stats.responseRate}%`}
            color="bg-gradient-to-br from-amber-600 to-amber-700"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Total Outreach</h3>
            <div className="text-3xl font-bold text-blue-600 mb-4">{stats.totalOutreach}</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Success Rate</span>
                <span className="font-semibold text-green-600">{stats.successRate}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                  style={{ width: `${stats.successRate}%` }}
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Content Pipeline</h3>
            <div className="text-3xl font-bold text-green-600 mb-4">{stats.contentInProgress}</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Avg Word Count</span>
                <span className="font-semibold text-blue-600">{stats.avgWordCount}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <FileText className="w-4 h-4" />
                {stats.totalContent} total pieces
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Action Items</h3>
            <div className="text-3xl font-bold text-amber-600 mb-4">
              {stats.pendingFollowUps + stats.highPriorityOpportunities}
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Pending Follow-ups</span>
                <span className="font-semibold text-red-600">{stats.pendingFollowUps}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">High Priority Opps</span>
                <span className="font-semibold text-orange-600">{stats.highPriorityOpportunities}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Search className="w-6 h-6 mr-2 text-green-600" />
              Top Target Keywords
            </h2>
            <div className="space-y-3">
              {stats.topKeywords.map((kw, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900">{kw.keyword}</div>
                    <div className="text-xs text-slate-500">
                      {kw.volume.toLocaleString()} searches/mo
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-xs text-slate-600">Difficulty</div>
                      <div className={`text-sm font-bold ${
                        kw.difficulty > 70 ? 'text-red-600' :
                        kw.difficulty > 40 ? 'text-yellow-600' :
                        'text-green-600'
                      }`}>
                        {kw.difficulty}/100
                      </div>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      kw.difficulty > 70 ? 'bg-red-500' :
                      kw.difficulty > 40 ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Link2 className="w-6 h-6 mr-2 text-blue-600" />
              Recent Backlinks
            </h2>
            <div className="space-y-3">
              {stats.recentBacklinks.length > 0 ? (
                stats.recentBacklinks.map((bl, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900">{bl.domain}</div>
                      <div className="text-xs text-slate-500">
                        Acquired {new Date(bl.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-right">
                        <div className="text-xs text-slate-600">DA</div>
                        <div className="text-lg font-bold text-blue-600">{bl.da}</div>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-slate-500">
                  <AlertTriangle className="w-12 h-12 mx-auto mb-3 text-slate-400" />
                  <p>No backlinks acquired yet</p>
                  <p className="text-sm">Start your outreach campaign!</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <Calendar className="w-6 h-6 mr-2 text-purple-600" />
            Upcoming Content Schedule
          </h2>
          {stats.upcomingContent.length > 0 ? (
            <div className="space-y-3">
              {stats.upcomingContent.map((content, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900">{content.title}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-4 h-4 text-slate-500" />
                      <span className="text-xs text-slate-500">
                        {new Date(content.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      content.status === 'idea' ? 'bg-blue-100 text-blue-700' :
                      content.status === 'outline' ? 'bg-purple-100 text-purple-700' :
                      content.status === 'draft' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {content.status}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-slate-500">
              <Calendar className="w-12 h-12 mx-auto mb-3 text-slate-400" />
              <p>No content scheduled</p>
              <p className="text-sm">Plan your content calendar!</p>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
            <Zap className="w-12 h-12 mb-4 opacity-80" />
            <h3 className="text-xl font-bold mb-2">Quick Win</h3>
            <p className="text-blue-100 text-sm mb-4">
              {stats.pendingFollowUps > 0
                ? `Send ${stats.pendingFollowUps} follow-up emails today`
                : 'All follow-ups sent! Target 5 new opportunities'}
            </p>
            <div className="text-2xl font-bold">{stats.pendingFollowUps || 5}</div>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white">
            <Target className="w-12 h-12 mb-4 opacity-80" />
            <h3 className="text-xl font-bold mb-2">This Week</h3>
            <p className="text-green-100 text-sm mb-4">
              Publish {stats.contentInProgress > 0 ? stats.contentInProgress : 2} pieces of content
            </p>
            <div className="text-2xl font-bold">{stats.contentInProgress || 2}</div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-white">
            <TrendingUp className="w-12 h-12 mb-4 opacity-80" />
            <h3 className="text-xl font-bold mb-2">This Month</h3>
            <p className="text-purple-100 text-sm mb-4">
              Acquire {Math.max(10 - stats.activeBacklinks, 5)} quality backlinks
            </p>
            <div className="text-2xl font-bold">{Math.max(10 - stats.activeBacklinks, 5)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOAnalyticsDashboard;
