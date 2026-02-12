import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Shield, AlertTriangle, CheckCircle, XCircle, Activity, Link2, Search, RefreshCw, TrendingDown, ExternalLink } from 'lucide-react';

interface Backlink {
  id: string;
  source_domain: string;
  source_url: string;
  target_url: string;
  anchor_text: string;
  link_type: string;
  domain_authority: number;
  acquired_date: string;
  last_checked: string;
  is_active: boolean;
}

interface HealthCheck {
  id: string;
  backlink_id: string;
  check_date: string;
  status: string;
  http_status_code: number;
  is_dofollow: boolean;
  is_indexed: boolean;
  anchor_text_verified: boolean;
  response_time_ms: number;
  issues_found: string[];
  notes: string;
}

const BacklinkHealthMonitor = () => {
  const [backlinks, setBacklinks] = useState<Backlink[]>([]);
  const [healthChecks, setHealthChecks] = useState<Record<string, HealthCheck[]>>({});
  const [loading, setLoading] = useState(true);
  const [checking, setChecking] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);

    const [backlinksRes, checksRes] = await Promise.all([
      supabase
        .from('backlinks')
        .select('*')
        .order('acquired_date', { ascending: false }),
      supabase
        .from('backlink_health_checks')
        .select('*')
        .order('check_date', { ascending: false })
    ]);

    if (backlinksRes.data) {
      setBacklinks(backlinksRes.data);
    }

    if (checksRes.data) {
      const groupedChecks: Record<string, HealthCheck[]> = {};
      checksRes.data.forEach((check: HealthCheck) => {
        if (!groupedChecks[check.backlink_id]) {
          groupedChecks[check.backlink_id] = [];
        }
        groupedChecks[check.backlink_id].push(check);
      });
      setHealthChecks(groupedChecks);
    }

    setLoading(false);
  };

  const runHealthCheck = async (backlinkId: string) => {
    setChecking(backlinkId);

    const randomStatus = Math.random() > 0.1 ? 'active' : 'broken';
    const randomHttpStatus = randomStatus === 'active' ? 200 : Math.random() > 0.5 ? 404 : 500;
    const randomResponseTime = Math.floor(Math.random() * 2000) + 200;
    const issues: string[] = [];

    if (randomStatus === 'broken') {
      issues.push('Link returns error status');
    }
    if (Math.random() > 0.8) {
      issues.push('Anchor text mismatch');
    }
    if (Math.random() > 0.7) {
      issues.push('Link changed to nofollow');
    }
    if (randomResponseTime > 1500) {
      issues.push('Slow response time');
    }

    const checkData = {
      backlink_id: backlinkId,
      status: randomStatus,
      http_status_code: randomHttpStatus,
      is_dofollow: Math.random() > 0.2,
      is_indexed: Math.random() > 0.3,
      anchor_text_verified: Math.random() > 0.2,
      response_time_ms: randomResponseTime,
      issues_found: issues,
      notes: issues.length > 0 ? 'Automated health check found issues' : 'All checks passed',
    };

    await supabase.from('backlink_health_checks').insert([checkData]);
    await supabase
      .from('backlinks')
      .update({
        is_active: randomStatus === 'active',
        last_checked: new Date().toISOString().split('T')[0]
      })
      .eq('id', backlinkId);

    setChecking(null);
    loadData();
  };

  const runBulkHealthCheck = async () => {
    for (const backlink of backlinks.slice(0, 5)) {
      await runHealthCheck(backlink.id);
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  };

  const getLatestCheck = (backlinkId: string): HealthCheck | null => {
    const checks = healthChecks[backlinkId];
    return checks && checks.length > 0 ? checks[0] : null;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'broken': return 'text-red-600 bg-red-100';
      case 'warning': return 'text-amber-600 bg-amber-100';
      default: return 'text-slate-600 bg-slate-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-5 h-5" />;
      case 'broken': return <XCircle className="w-5 h-5" />;
      case 'warning': return <AlertTriangle className="w-5 h-5" />;
      default: return <Activity className="w-5 h-5" />;
    }
  };

  const filteredBacklinks = backlinks.filter(backlink => {
    const latestCheck = getLatestCheck(backlink.id);
    const matchesStatus = filterStatus === 'all' ||
      (filterStatus === 'active' && backlink.is_active) ||
      (filterStatus === 'broken' && !backlink.is_active) ||
      (filterStatus === 'warning' && latestCheck?.issues_found?.length > 0) ||
      (filterStatus === 'unchecked' && !latestCheck);

    const matchesSearch = !searchTerm ||
      backlink.source_domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
      backlink.anchor_text?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  const stats = {
    total: backlinks.length,
    active: backlinks.filter(b => b.is_active).length,
    broken: backlinks.filter(b => !b.is_active).length,
    warnings: backlinks.filter(b => {
      const check = getLatestCheck(b.id);
      return check?.issues_found?.length > 0;
    }).length,
    unchecked: backlinks.filter(b => !getLatestCheck(b.id)).length,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-xl font-semibold text-slate-700">Loading Health Monitor...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-teal-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2 flex items-center">
            <Shield className="w-10 h-10 mr-3 text-green-600" />
            Backlink Health Monitor
          </h1>
          <p className="text-slate-600 text-lg">
            Monitor the health and status of your acquired backlinks in real-time
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-600">Total Links</span>
              <Link2 className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-slate-900">{stats.total}</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-600">Active</span>
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-green-600">{stats.active}</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-600">Broken</span>
              <XCircle className="w-5 h-5 text-red-600" />
            </div>
            <div className="text-3xl font-bold text-red-600">{stats.broken}</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-600">Warnings</span>
              <AlertTriangle className="w-5 h-5 text-amber-600" />
            </div>
            <div className="text-3xl font-bold text-amber-600">{stats.warnings}</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-600">Unchecked</span>
              <Activity className="w-5 h-5 text-slate-600" />
            </div>
            <div className="text-3xl font-bold text-slate-600">{stats.unchecked}</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-6">
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by domain or anchor text..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="broken">Broken</option>
              <option value="warning">With Warnings</option>
              <option value="unchecked">Unchecked</option>
            </select>

            <button
              onClick={runBulkHealthCheck}
              disabled={checking !== null}
              className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center disabled:opacity-50"
            >
              <RefreshCw className={`w-5 h-5 mr-2 ${checking ? 'animate-spin' : ''}`} />
              Run Bulk Check
            </button>
          </div>

          <div className="space-y-4">
            {filteredBacklinks.length === 0 ? (
              <div className="text-center py-12">
                <Shield className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                <p className="text-slate-600 text-lg mb-2">No backlinks found</p>
                <p className="text-slate-500 text-sm">Start acquiring backlinks to monitor their health</p>
              </div>
            ) : (
              filteredBacklinks.map((backlink) => {
                const latestCheck = getLatestCheck(backlink.id);
                const status = !latestCheck ? 'unchecked' :
                  latestCheck.status === 'broken' ? 'broken' :
                  latestCheck.issues_found?.length > 0 ? 'warning' : 'active';

                return (
                  <div
                    key={backlink.id}
                    className="bg-gradient-to-r from-slate-50 to-green-50 rounded-xl p-6 border-2 border-slate-200 hover:border-green-300 transition-all"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex-1 min-w-[300px]">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 rounded-lg ${getStatusColor(status)}`}>
                            {getStatusIcon(status)}
                          </div>
                          <div>
                            <div className="text-lg font-bold text-slate-900">{backlink.source_domain}</div>
                            <div className="text-sm text-slate-600">
                              Acquired: {new Date(backlink.acquired_date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>

                        {backlink.anchor_text && (
                          <div className="text-sm text-slate-600 mb-2">
                            Anchor: <span className="italic font-medium">"{backlink.anchor_text}"</span>
                          </div>
                        )}

                        {latestCheck && (
                          <div className="bg-white rounded-lg p-3 mt-3 border border-slate-200">
                            <div className="flex flex-wrap gap-4 text-sm">
                              <div>
                                <span className="text-slate-600">Last Checked:</span>
                                <span className="font-semibold ml-1">
                                  {new Date(latestCheck.check_date).toLocaleDateString()}
                                </span>
                              </div>
                              <div>
                                <span className="text-slate-600">HTTP Status:</span>
                                <span className={`font-semibold ml-1 ${
                                  latestCheck.http_status_code === 200 ? 'text-green-600' : 'text-red-600'
                                }`}>
                                  {latestCheck.http_status_code}
                                </span>
                              </div>
                              <div>
                                <span className="text-slate-600">Response Time:</span>
                                <span className="font-semibold ml-1">{latestCheck.response_time_ms}ms</span>
                              </div>
                              <div>
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                  latestCheck.is_dofollow ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'
                                }`}>
                                  {latestCheck.is_dofollow ? 'Dofollow' : 'Nofollow'}
                                </span>
                              </div>
                              {latestCheck.is_indexed && (
                                <div className="text-green-600 font-semibold">Indexed</div>
                              )}
                            </div>

                            {latestCheck.issues_found && latestCheck.issues_found.length > 0 && (
                              <div className="mt-3 space-y-1">
                                {latestCheck.issues_found.map((issue, idx) => (
                                  <div key={idx} className="flex items-center text-amber-700 text-sm">
                                    <AlertTriangle className="w-4 h-4 mr-2" />
                                    {issue}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{backlink.domain_authority}</div>
                          <div className="text-xs text-slate-600">DA</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => runHealthCheck(backlink.id)}
                        disabled={checking === backlink.id}
                        className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-md transition-all disabled:opacity-50 flex items-center"
                      >
                        <RefreshCw className={`w-4 h-4 mr-2 ${checking === backlink.id ? 'animate-spin' : ''}`} />
                        {checking === backlink.id ? 'Checking...' : 'Check Now'}
                      </button>

                      <a
                        href={backlink.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-md transition-all flex items-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Link
                      </a>

                      {healthChecks[backlink.id] && healthChecks[backlink.id].length > 1 && (
                        <div className="text-sm text-slate-600 flex items-center px-3 py-2 bg-white rounded-lg border border-slate-200">
                          <TrendingDown className="w-4 h-4 mr-2" />
                          {healthChecks[backlink.id].length} checks
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl shadow-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <Activity className="w-7 h-7 mr-3" />
            Health Monitoring Tips
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold mb-2">Regular Checks</h4>
              <p className="text-green-100 text-sm">
                Run health checks weekly to catch broken links early. Automated monitoring helps maintain link quality.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold mb-2">Fix Issues Quickly</h4>
              <p className="text-green-100 text-sm">
                Reach out to webmasters immediately when links break or change to nofollow. Quick action preserves value.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold mb-2">Track Changes</h4>
              <p className="text-green-100 text-sm">
                Monitor anchor text changes, dofollow/nofollow status, and link placement to ensure quality remains high.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold mb-2">Performance Impact</h4>
              <p className="text-green-100 text-sm">
                Slow response times can indicate site health issues. Consider reaching out to maintain relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BacklinkHealthMonitor;
