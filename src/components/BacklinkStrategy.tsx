import { useState, useEffect } from 'react';
import { Link2, Mail, TrendingUp, CheckCircle2, AlertCircle, ExternalLink, Copy, Target, Users, FileText, Search, Calendar, Send, ArrowRight } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface BacklinkOpportunity {
  id: string;
  domain: string;
  url: string;
  domain_authority: number;
  niche_relevance: string;
  opportunity_type: string;
  priority: string;
  status: string;
  notes: string;
}

interface Backlink {
  id: string;
  source_domain: string;
  source_url: string;
  target_url: string;
  anchor_text: string;
  link_type: string;
  domain_authority: number;
  is_active: boolean;
  acquired_date: string;
}

interface BacklinkStrategyProps {
  onNavigateTo?: (page: string) => void;
}

const BacklinkStrategy = ({ onNavigateTo }: BacklinkStrategyProps) => {
  const [opportunities, setOpportunities] = useState<BacklinkOpportunity[]>([]);
  const [backlinks, setBacklinks] = useState<Backlink[]>([]);
  const [copiedTemplate, setCopiedTemplate] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'strategy' | 'opportunities' | 'templates' | 'dashboard'>('strategy');

  useEffect(() => {
    fetchOpportunities();
    fetchBacklinks();
  }, []);

  const fetchOpportunities = async () => {
    const { data } = await supabase
      .from('backlink_opportunities')
      .select('*')
      .order('priority', { ascending: true })
      .order('domain_authority', { ascending: false });

    if (data) setOpportunities(data);
  };

  const fetchBacklinks = async () => {
    const { data } = await supabase
      .from('backlinks')
      .select('*')
      .eq('is_active', true)
      .order('domain_authority', { ascending: false });

    if (data) setBacklinks(data);
  };

  const copyTemplate = (templateName: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTemplate(templateName);
    setTimeout(() => setCopiedTemplate(null), 2000);
  };

  const emailTemplates = [
    {
      name: 'Guest Post Outreach',
      subject: 'Guest Post Contribution: Canadian Online Casino Guide',
      body: `Hi [Name],

I'm [Your Name] from TopCasinoWagers, a comprehensive resource for Canadian online casino players. I've been following [Their Site] and really appreciate your content on [specific topic].

I noticed you accept guest contributions and I'd love to write a detailed, data-driven article for your audience. Here are three topics I can cover:

1. "Complete Guide to Responsible Gambling in Canada: Tools, Limits & Resources"
2. "Understanding Casino RTP: How to Find the Best Paying Slots and Table Games"
3. "Payment Methods Compared: Interac vs E-Wallets vs Crypto for Canadian Players"

Each article would be 2,000+ words, include original research/data, custom graphics, and zero promotional content. I write for value, not links.

Would any of these topics interest your readers? I'm happy to adjust based on your editorial needs.

Best regards,
[Your Name]
TopCasinoWagers.ca`
    },
    {
      name: 'Resource Page Link',
      subject: 'Resource Suggestion for [Their Page Title]',
      body: `Hi [Name],

I was researching [topic] and came across your excellent resource page: [URL]

I noticed you link to several casino review sites. I wanted to suggest TopCasinoWagers (topcasinowagers.ca) as an additional resource your readers might find valuable.

What makes our site unique:
• Licensed casinos only (MGA, UKGC, Curacao verified)
• Real money testing of all bonuses and withdrawal times
• Detailed payment method guides (Interac, crypto, e-wallets)
• Canadian-specific content (CAD currency, local regulations)
• Updated daily with current bonus offers

We specifically created comprehensive guides on:
- Responsible gambling tools: [link]
- Game strategy guides: [link]
- Payment comparisons: [link]

No pressure at all - only if you think it would benefit your audience. Either way, thanks for curating such a helpful resource page!

Best,
[Your Name]`
    },
    {
      name: 'Broken Link Outreach',
      subject: 'Broken Link Found on [Their Site]',
      body: `Hi [Name],

I was reading your article "[Article Title]" and found it incredibly helpful for understanding [topic].

While reading, I noticed a broken link in the [section name] section pointing to [broken URL]. The page appears to have been removed or moved.

I actually have a similar resource on my site that covers the same topic: [Your URL]

My guide includes:
• [Key point 1]
• [Key point 2]
• [Key point 3]

Would this be a suitable replacement? I'd be happy to suggest other resources if this doesn't fit.

Thanks for maintaining such a valuable resource!

Best regards,
[Your Name]
TopCasinoWagers.ca`
    },
    {
      name: 'Expert Roundup Contribution',
      subject: 'Expert Input for Your [Topic] Roundup',
      body: `Hi [Name],

I saw you're putting together an expert roundup on [topic] and would love to contribute if there's still space.

I'm [Your Name], founder of TopCasinoWagers, where we've reviewed 200+ online casinos and tested bonuses with over $50,000 in real deposits. I've been in the casino affiliate space for [X] years.

Here's my expert take on your question:

"[Question]"

[Your detailed answer - 150-200 words with specific data, examples, and actionable advice]

Feel free to edit as needed. Here's my bio if you'd like to include it:

[Your Name] is the founder of TopCasinoWagers, a leading resource for Canadian online casino players. [Brief credentials]

Happy to provide additional input or a different angle if needed!

Best,
[Your Name]`
    },
    {
      name: 'Data/Study Outreach',
      subject: 'Original Data: Canadian Online Casino Player Behavior Study',
      body: `Hi [Name],

I'm reaching out because I recently completed a comprehensive study on Canadian online casino player behavior that I think would interest your audience at [Their Site].

Key findings from our survey of 5,000+ Canadian players:

• 67% prefer Interac e-Transfer over all payment methods
• Average withdrawal time expectations: 24 hours or less
• 82% read reviews before depositing
• Top decision factors: License verification (73%), withdrawal speed (68%), bonus fairness (61%)

The full study includes:
- Demographic breakdowns by province
- Payment method preferences by age group
- Trust signals that drive conversions
- Interactive charts and visualizations

I'm making this data freely available for journalists and bloggers to use. Would you be interested in covering it? I can provide:

✓ Full methodology and sample details
✓ Custom graphics for your article
✓ Expert commentary/quotes
✓ Early access before public release

Link to the study: [Your URL]

Let me know if you'd like any additional data cuts or analysis!

Best regards,
[Your Name]
TopCasinoWagers.ca`
    },
    {
      name: 'Partnership/Collaboration',
      subject: 'Partnership Opportunity: Canadian Casino Content',
      body: `Hi [Name],

I'm [Your Name] from TopCasinoWagers. I've been impressed with your work on [Their Site], particularly your coverage of [specific topic].

I'm reaching out to explore potential collaboration opportunities. We're looking to partner with quality sites in the gambling/entertainment space for:

1. Content Exchange: We can create exclusive content for each other's audiences
2. Co-Marketing: Joint webinars, guides, or research projects
3. Resource Sharing: Data, graphics, and industry insights

Some content we could contribute:
- In-depth Canadian casino market analysis
- Exclusive bonus negotiations with operators
- Technical guides (RTP analysis, variance calculations)
- Regulatory updates and compliance content

What type of collaboration would be most valuable for [Their Site]?

I'd love to jump on a quick call to discuss ideas. Are you available next week?

Best regards,
[Your Name]
Founder, TopCasinoWagers.ca
[Email] | [Phone]`
    }
  ];

  const backlinkStrategies = [
    {
      icon: FileText,
      title: 'Guest Posting',
      difficulty: 'Medium',
      timeframe: '2-4 weeks',
      priority: 'High',
      description: 'Write valuable content for casino blogs, gambling news sites, and affiliate marketing blogs.',
      tactics: [
        'Target DA 40+ sites in casino/gambling niche',
        'Pitch data-driven, non-promotional articles',
        'Include 1-2 contextual links maximum',
        'Build relationships before asking for links'
      ],
      targetSites: 'Casino blogs, gambling news, affiliate marketing sites'
    },
    {
      icon: Link2,
      title: 'Resource Page Links',
      difficulty: 'Easy',
      timeframe: '1-2 weeks',
      priority: 'High',
      description: 'Get listed on curated resource pages that compile best casino review sites.',
      tactics: [
        'Search: "casino resources" + "intitle:resources"',
        'Search: "gambling links" + "helpful sites"',
        'Offer genuine value - quality content required',
        'Personal outreach beats automated requests'
      ],
      targetSites: 'Casino directories, gambling resource pages, entertainment hubs'
    },
    {
      icon: Search,
      title: 'Broken Link Building',
      difficulty: 'Medium',
      timeframe: '3-6 weeks',
      priority: 'Medium',
      description: 'Find broken links on casino sites and offer your content as replacement.',
      tactics: [
        'Use tools: Ahrefs, Broken Link Checker',
        'Target pages with broken casino/gambling links',
        'Create content matching the broken resource',
        'Helpful tone - you\'re doing them a favor'
      ],
      targetSites: 'Established casino blogs, resource pages, .edu gambling research sites'
    },
    {
      icon: Users,
      title: 'Digital PR & Data Studies',
      difficulty: 'Hard',
      timeframe: '6-12 weeks',
      priority: 'High',
      description: 'Create original research and data studies that journalists naturally link to.',
      tactics: [
        'Survey Canadian casino players (1,000+ responses)',
        'Analyze industry trends with unique data',
        'Create shareable infographics',
        'Pitch to journalists and industry publications'
      ],
      targetSites: 'News sites, industry publications, data journalism outlets'
    },
    {
      icon: Target,
      title: 'Competitor Backlink Analysis',
      difficulty: 'Medium',
      timeframe: '2-3 weeks',
      priority: 'High',
      description: 'Analyze competitor backlinks and replicate their link building strategies.',
      tactics: [
        'Use Ahrefs/SEMrush to analyze top competitors',
        'Identify their best backlinks',
        'Reach out to same sites with better content',
        'Find gaps in their link profile'
      ],
      targetSites: 'Sites already linking to competitors'
    },
    {
      icon: TrendingUp,
      title: 'HARO & Expert Quotes',
      difficulty: 'Easy',
      timeframe: 'Ongoing',
      priority: 'Medium',
      description: 'Respond to journalist queries on HARO, Terkel, and Featured for expert quotes.',
      tactics: [
        'Sign up for HARO (Help A Reporter Out)',
        'Respond to gambling/finance queries daily',
        'Provide detailed, quotable expert insights',
        'Include credentials for credibility'
      ],
      targetSites: 'News sites, magazines, industry blogs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Backlink Strategy & Outreach
          </h1>
          <p className="text-xl text-gray-300">
            Comprehensive link building system to improve domain authority and rankings
          </p>
        </div>

        {/* Quick Access Tools */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div
            onClick={() => onNavigateTo?.('backlink-outreach')}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 cursor-pointer hover:scale-105 transition-all shadow-2xl group"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                  <Send className="w-7 h-7 mr-3" />
                  Outreach Manager
                </h3>
                <p className="text-blue-100 mb-4">
                  Automated email templates, contact tracking, and outreach campaigns with proven templates
                </p>
              </div>
              <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform" />
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">6 Email Templates</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">15+ Opportunities</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">Response Tracking</span>
            </div>
          </div>

          <div
            onClick={() => onNavigateTo?.('content-calendar')}
            className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 cursor-pointer hover:scale-105 transition-all shadow-2xl group"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                  <Calendar className="w-7 h-7 mr-3" />
                  Content Calendar
                </h3>
                <p className="text-green-100 mb-4">
                  Strategic content planning with keyword research, SEO optimization, and publishing schedules
                </p>
              </div>
              <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform" />
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">10 Content Ideas</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">20+ Keywords</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">Performance Tracking</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('strategy')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'strategy'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <Target className="w-5 h-5 inline mr-2" />
            Strategy
          </button>
          <button
            onClick={() => setActiveTab('opportunities')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'opportunities'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <TrendingUp className="w-5 h-5 inline mr-2" />
            Opportunities ({opportunities.length})
          </button>
          <button
            onClick={() => setActiveTab('templates')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'templates'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <Mail className="w-5 h-5 inline mr-2" />
            Email Templates
          </button>
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'dashboard'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <Link2 className="w-5 h-5 inline mr-2" />
            Acquired Links ({backlinks.length})
          </button>
        </div>

        {/* Strategy Tab */}
        {activeTab === 'strategy' && (
          <div>
            {/* Stats Overview */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-xl p-6 border border-green-700/50">
                <CheckCircle2 className="w-12 h-12 text-green-400 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{backlinks.length}</div>
                <div className="text-gray-300">Active Backlinks</div>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-xl p-6 border border-blue-700/50">
                <Target className="w-12 h-12 text-blue-400 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{opportunities.length}</div>
                <div className="text-gray-300">Opportunities</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl p-6 border border-purple-700/50">
                <TrendingUp className="w-12 h-12 text-purple-400 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {backlinks.reduce((sum, link) => sum + link.domain_authority, 0) / (backlinks.length || 1) | 0}
                </div>
                <div className="text-gray-300">Avg Domain Authority</div>
              </div>
              <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 rounded-xl p-6 border border-orange-700/50">
                <Users className="w-12 h-12 text-orange-400 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {opportunities.filter(o => o.status === 'ready').length}
                </div>
                <div className="text-gray-300">Ready to Contact</div>
              </div>
            </div>

            {/* Link Building Strategies */}
            <h2 className="text-3xl font-bold mb-8">6 Proven Link Building Strategies</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {backlinkStrategies.map((strategy, index) => (
                <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <strategy.icon className="w-10 h-10 text-purple-400 mr-3" />
                      <div>
                        <h3 className="text-xl font-bold text-white">{strategy.title}</h3>
                        <div className="flex gap-2 mt-1">
                          <span className={`text-xs px-2 py-1 rounded ${
                            strategy.difficulty === 'Easy' ? 'bg-green-900/50 text-green-300' :
                            strategy.difficulty === 'Medium' ? 'bg-yellow-900/50 text-yellow-300' :
                            'bg-red-900/50 text-red-300'
                          }`}>
                            {strategy.difficulty}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded ${
                            strategy.priority === 'High' ? 'bg-purple-900/50 text-purple-300' :
                            'bg-gray-700 text-gray-300'
                          }`}>
                            {strategy.priority} Priority
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{strategy.description}</p>

                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-400 mb-2">Tactics:</div>
                    <ul className="space-y-1">
                      {strategy.tactics.map((tactic, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                          {tactic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-sm">
                    <span className="text-gray-400">Timeframe:</span>
                    <span className="text-white ml-2">{strategy.timeframe}</span>
                  </div>
                  <div className="text-sm mt-1">
                    <span className="text-gray-400">Target Sites:</span>
                    <span className="text-white ml-2">{strategy.targetSites}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Best Practices */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl p-8 border border-purple-700/50">
              <h3 className="text-2xl font-bold mb-6">Link Building Best Practices</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold text-green-400 mb-3 flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    DO These Things
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>✓ Focus on relevance over domain authority</li>
                    <li>✓ Build relationships before asking for links</li>
                    <li>✓ Create genuinely valuable, linkable content</li>
                    <li>✓ Personalize every outreach email</li>
                    <li>✓ Track all outreach in database</li>
                    <li>✓ Follow up 7-10 days after initial contact</li>
                    <li>✓ Diversify anchor text (branded, natural, exact match)</li>
                    <li>✓ Monitor acquired links monthly</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-red-400 mb-3 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    AVOID These Mistakes
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>✗ Buying links (Google penalty risk)</li>
                    <li>✗ Mass automated outreach</li>
                    <li>✗ Low-quality directory submissions</li>
                    <li>✗ Exact match anchor text overuse</li>
                    <li>✗ Link exchanges/reciprocal linking</li>
                    <li>✗ Comment spam on blogs</li>
                    <li>✗ PBNs (Private Blog Networks)</li>
                    <li>✗ Ignoring link velocity (too fast = suspicious)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Opportunities Tab */}
        {activeTab === 'opportunities' && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Backlink Opportunities</h2>
            <div className="grid gap-4">
              {opportunities.map((opp) => (
                <div key={opp.id} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{opp.domain}</h3>
                        <span className={`text-xs px-2 py-1 rounded ${
                          opp.priority === 'high' ? 'bg-red-900/50 text-red-300' :
                          opp.priority === 'medium' ? 'bg-yellow-900/50 text-yellow-300' :
                          'bg-gray-700 text-gray-300'
                        }`}>
                          {opp.priority.toUpperCase()}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          opp.status === 'ready' ? 'bg-green-900/50 text-green-300' :
                          opp.status === 'contacted' ? 'bg-blue-900/50 text-blue-300' :
                          'bg-gray-700 text-gray-300'
                        }`}>
                          {opp.status.replace('_', ' ').toUpperCase()}
                        </span>
                      </div>

                      <div className="flex gap-6 text-sm text-gray-300 mb-3">
                        <div>
                          <span className="text-gray-400">DA:</span>
                          <span className="text-white font-semibold ml-1">{opp.domain_authority}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Type:</span>
                          <span className="text-white ml-1">{opp.opportunity_type.replace('_', ' ')}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Relevance:</span>
                          <span className="text-white ml-1">{opp.niche_relevance}</span>
                        </div>
                      </div>

                      {opp.notes && (
                        <p className="text-gray-400 text-sm mb-3">{opp.notes}</p>
                      )}

                      {opp.url && (
                        <a
                          href={opp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 text-sm inline-flex items-center"
                        >
                          View opportunity
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <div>
            <h2 className="text-3xl font-bold mb-4">Outreach Email Templates</h2>
            <p className="text-gray-300 mb-8">
              Copy and customize these proven templates for your outreach campaigns. Personalization is key!
            </p>

            <div className="space-y-6">
              {emailTemplates.map((template, index) => (
                <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{template.name}</h3>
                      <p className="text-sm text-gray-400">Subject: {template.subject}</p>
                    </div>
                    <button
                      onClick={() => copyTemplate(template.name, template.body)}
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg flex items-center gap-2 transition-colors"
                    >
                      {copiedTemplate === template.name ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-gray-300 whitespace-pre-wrap">
                    {template.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Acquired Backlinks</h2>
            <div className="grid gap-4">
              {backlinks.length === 0 ? (
                <div className="bg-gray-800/50 rounded-xl p-12 border border-gray-700 text-center">
                  <Link2 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">No backlinks acquired yet. Start your outreach campaign!</p>
                </div>
              ) : (
                backlinks.map((link) => (
                  <div key={link.id} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{link.source_domain}</h3>
                          <span className={`text-xs px-2 py-1 rounded ${
                            link.link_type === 'dofollow' ? 'bg-green-900/50 text-green-300' : 'bg-gray-700 text-gray-300'
                          }`}>
                            {link.link_type.toUpperCase()}
                          </span>
                          {link.is_active && (
                            <span className="text-xs px-2 py-1 rounded bg-green-900/50 text-green-300 flex items-center">
                              <CheckCircle2 className="w-3 h-3 mr-1" />
                              ACTIVE
                            </span>
                          )}
                        </div>

                        <div className="flex gap-6 text-sm text-gray-300 mb-3">
                          <div>
                            <span className="text-gray-400">DA:</span>
                            <span className="text-white font-semibold ml-1">{link.domain_authority}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Acquired:</span>
                            <span className="text-white ml-1">{new Date(link.acquired_date).toLocaleDateString()}</span>
                          </div>
                        </div>

                        {link.anchor_text && (
                          <div className="mb-3">
                            <span className="text-gray-400 text-sm">Anchor Text:</span>
                            <span className="text-purple-400 ml-2 text-sm">"{link.anchor_text}"</span>
                          </div>
                        )}

                        <div className="flex gap-4">
                          <a
                            href={link.source_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:text-purple-300 text-sm inline-flex items-center"
                          >
                            View source page
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                          <a
                            href={link.target_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center"
                          >
                            View target page
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BacklinkStrategy;
