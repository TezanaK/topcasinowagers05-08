import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  User, 
  Clock, 
  Tag,
  Search,
  Filter,
  ChevronRight,
  Star,
  TrendingUp,
  Shield,
  DollarSign,
  Crown,
  Sparkles,
  Play,
  Trophy,
  Target,
  Heart,
  CheckCircle,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

interface BlogsPageProps {
  onNavigateHome?: () => void;
  onNavigateTo?: (page: string) => void;
}

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  image: string;
  metaDescription: string;
  keywords: string[];
}

const BlogsPage: React.FC<BlogsPageProps> = ({ onNavigateHome, onNavigateTo }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Top 10 Online Casino Bonuses in Canada for 2024",
      slug: "top-10-casino-bonuses-canada-2024",
      excerpt: "Discover the most generous casino bonuses available to Canadian players in 2024, including exclusive no-deposit offers and massive welcome packages.",
      content: `
        <h2>The Best Casino Bonuses for Canadian Players</h2>
        <p>Canadian online casino players have access to some of the most generous bonuses in the world. In 2024, we've seen casinos competing fiercely for Canadian players with increasingly attractive offers.</p>
        
        <h3>1. NEOSPIN - 100% up to CA$500 + 100 Free Spins</h3>
        <p>NEOSPIN leads our list with their incredible welcome package. New Canadian players can claim a 100% match bonus up to CA$500 plus 100 free spins on popular slots. The wagering requirement is a reasonable 35x, and the bonus is valid for 30 days.</p>
        
        <h3>2. CASINOMATE - 285% up to CA$7,500 + 285 Free Spins</h3>
        <p>CASINOMATE offers one of the highest percentage bonuses available to Canadian players. With a massive 285% match bonus and 285 free spins, this offer provides exceptional value for high-rolling players.</p>
        
        <h3>3. ONLUCK.COM - 285% up to CA$9,000 + 225 Free Spins</h3>
        <p>ONLUCK.COM takes the crown for the highest bonus amount, offering up to CA$9,000 in bonus funds. This makes it perfect for players who want to maximize their playing time and winning potential.</p>
        
        <h3>How to Choose the Right Bonus</h3>
        <p>When selecting a casino bonus, consider these factors:</p>
        <ul>
          <li>Wagering requirements (lower is better)</li>
          <li>Game restrictions (more games = more flexibility)</li>
          <li>Time limits (longer validity periods are preferable)</li>
          <li>Maximum bet limits during bonus play</li>
        </ul>
        
        <h3>Bonus Terms to Watch Out For</h3>
        <p>Always read the fine print before claiming any bonus. Pay attention to maximum cashout limits, restricted games, and country restrictions.</p>
      `,
      author: "Sarah Mitchell",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      category: "Bonuses",
      tags: ["casino bonuses", "welcome offers", "free spins", "Canada"],
      featured: true,
      image: "/IMG_0128.jpeg",
      metaDescription: "Discover the top 10 casino bonuses for Canadian players in 2024. Compare welcome offers, free spins, and exclusive deals from top-rated casinos.",
      keywords: ["casino bonuses Canada", "welcome bonus", "free spins", "online casino offers", "Canadian casino bonuses 2024"]
    },
    {
      id: 2,
      title: "Complete Guide to Online Slots in Canada: RTP, Volatility, and Winning Strategies",
      slug: "complete-guide-online-slots-canada",
      excerpt: "Master online slots with our comprehensive guide covering RTP rates, volatility levels, and proven strategies for Canadian players.",
      content: `
        <h2>Understanding Online Slots: A Canadian Player's Guide</h2>
        <p>Online slots are the most popular casino games among Canadian players, accounting for over 70% of all online casino activity. Understanding how they work can significantly improve your gaming experience.</p>
        
        <h3>What is RTP (Return to Player)?</h3>
        <p>RTP represents the percentage of wagered money that a slot machine returns to players over time. For example, a slot with 96% RTP will theoretically return CA$96 for every CA$100 wagered over millions of spins.</p>
        
        <h3>Best RTP Slots for Canadian Players</h3>
        <ul>
          <li>Mega Joker (NetEnt) - 99% RTP</li>
          <li>Blood Suckers (NetEnt) - 98% RTP</li>
          <li>Starmania (NextGen) - 97.87% RTP</li>
          <li>White Rabbit (Big Time Gaming) - 97.72% RTP</li>
        </ul>
        
        <h3>Understanding Volatility</h3>
        <p>Volatility (or variance) determines how often and how much a slot pays out:</p>
        <ul>
          <li><strong>Low Volatility:</strong> Frequent small wins</li>
          <li><strong>Medium Volatility:</strong> Balanced frequency and size of wins</li>
          <li><strong>High Volatility:</strong> Rare but large wins</li>
        </ul>
        
        <h3>Winning Strategies for Canadian Players</h3>
        <p>While slots are games of chance, these strategies can help maximize your enjoyment and potential returns:</p>
        <ol>
          <li>Choose slots with high RTP (96%+)</li>
          <li>Set a budget and stick to it</li>
          <li>Take advantage of free spins bonuses</li>
          <li>Try games in demo mode first</li>
          <li>Understand the paytable before playing</li>
        </ol>
      `,
      author: "Mike Thompson",
      publishDate: "2024-01-12",
      readTime: "12 min read",
      category: "Game Guides",
      tags: ["online slots", "RTP", "volatility", "slot strategy"],
      featured: true,
      image: "/IMG_0129.jpeg",
      metaDescription: "Complete guide to online slots for Canadian players. Learn about RTP, volatility, and winning strategies for popular slot games.",
      keywords: ["online slots Canada", "slot RTP", "slot volatility", "slot strategy", "Canadian slot games"]
    },
    {
      id: 3,
      title: "Ontario's iGaming Market: What Canadian Players Need to Know",
      slug: "ontario-igaming-market-guide",
      excerpt: "Everything you need to know about Ontario's regulated online gambling market, including licensed operators and player protections.",
      content: `
        <h2>Ontario's Revolutionary iGaming Market</h2>
        <p>On April 4, 2022, Ontario launched its regulated online gambling market, becoming the first Canadian province to offer a comprehensive legal framework for online casinos, poker, and sports betting.</p>
        
        <h3>What is iGaming Ontario?</h3>
        <p>iGaming Ontario (iGO) is the regulatory body overseeing Ontario's online gambling market. It operates under the Alcohol and Gaming Commission of Ontario (AGCO) and ensures fair play, player protection, and responsible gambling.</p>
        
        <h3>Licensed Operators in Ontario</h3>
        <p>As of 2024, over 30 operators have received licenses to operate in Ontario, including major international brands and local favorites. These operators must meet strict standards for:</p>
        <ul>
          <li>Player fund segregation</li>
          <li>Responsible gambling tools</li>
          <li>Fair gaming practices</li>
          <li>Anti-money laundering compliance</li>
        </ul>
        
        <h3>Benefits for Ontario Players</h3>
        <p>The regulated market offers several advantages:</p>
        <ul>
          <li>Enhanced player protection</li>
          <li>Guaranteed payouts</li>
          <li>Access to dispute resolution</li>
          <li>Responsible gambling support</li>
          <li>Tax-free winnings for recreational players</li>
        </ul>
        
        <h3>Offshore vs. Ontario-Licensed Sites</h3>
        <p>While Ontario residents can still access offshore sites, licensed operators offer additional protections and contribute to the provincial economy through revenue sharing.</p>
        
        <h3>Future of Ontario's Market</h3>
        <p>The Ontario market continues to grow, with new operators launching regularly and existing ones expanding their offerings. This competition benefits players through better bonuses, more games, and improved services.</p>
      `,
      author: "Jennifer Walsh",
      publishDate: "2024-01-10",
      readTime: "10 min read",
      category: "Regulations",
      tags: ["Ontario", "iGaming", "regulation", "legal gambling"],
      featured: false,
      image: "/IMG_0130.jpeg",
      metaDescription: "Complete guide to Ontario's regulated iGaming market. Learn about licensed operators, player protections, and benefits for Canadian players.",
      keywords: ["Ontario iGaming", "regulated online gambling", "iGaming Ontario", "Ontario casino licenses", "Canadian gambling laws"]
    },
    {
      id: 4,
      title: "Blackjack Basic Strategy for Canadian Players: Reduce the House Edge",
      slug: "blackjack-basic-strategy-canada",
      excerpt: "Learn the mathematically optimal blackjack strategy to minimize the house edge and maximize your winning potential at Canadian online casinos.",
      content: `
        <h2>Mastering Blackjack Basic Strategy</h2>
        <p>Blackjack offers one of the lowest house edges in the casino, but only if you play with perfect basic strategy. Canadian players can reduce the house edge to as low as 0.5% by following these proven strategies.</p>
        
        <h3>Understanding Basic Strategy</h3>
        <p>Basic strategy is a mathematically calculated set of decisions that tells you the optimal play for every possible hand combination against every dealer upcard.</p>
        
        <h3>Hard Hand Strategy</h3>
        <p>Hard hands are hands without an Ace or where the Ace counts as 1:</p>
        <ul>
          <li><strong>8 or less:</strong> Always hit</li>
          <li><strong>9:</strong> Double vs 3-6, otherwise hit</li>
          <li><strong>10:</strong> Double vs 2-9, hit vs 10/A</li>
          <li><strong>11:</strong> Double vs 2-10, hit vs A</li>
          <li><strong>12:</strong> Stand vs 4-6, hit vs 2-3, 7-A</li>
          <li><strong>13-16:</strong> Stand vs 2-6, hit vs 7-A</li>
          <li><strong>17+:</strong> Always stand</li>
        </ul>
        
        <h3>Soft Hand Strategy</h3>
        <p>Soft hands contain an Ace that can count as 11:</p>
        <ul>
          <li><strong>A,2-A,3:</strong> Double vs 5-6, otherwise hit</li>
          <li><strong>A,4-A,5:</strong> Double vs 4-6, otherwise hit</li>
          <li><strong>A,6:</strong> Double vs 3-6, otherwise hit</li>
          <li><strong>A,7:</strong> Stand vs 2,7,8; Double vs 3-6; Hit vs 9,10,A</li>
          <li><strong>A,8-A,9:</strong> Always stand</li>
        </ul>
        
        <h3>Pair Splitting Strategy</h3>
        <ul>
          <li><strong>A,A and 8,8:</strong> Always split</li>
          <li><strong>10,10:</strong> Never split</li>
          <li><strong>9,9:</strong> Split vs 2-9 except 7</li>
          <li><strong>7,7:</strong> Split vs 2-7</li>
          <li><strong>6,6:</strong> Split vs 2-6</li>
          <li><strong>5,5:</strong> Never split (treat as 10)</li>
          <li><strong>4,4:</strong> Hit (or split vs 5-6 if DAS allowed)</li>
          <li><strong>3,3 and 2,2:</strong> Split vs 2-7</li>
        </ul>
        
        <h3>Common Mistakes to Avoid</h3>
        <ul>
          <li>Taking insurance (never take insurance)</li>
          <li>Playing hunches instead of basic strategy</li>
          <li>Splitting 10s</li>
          <li>Standing on soft 17</li>
        </ul>
        
        <h3>Best Blackjack Games for Canadians</h3>
        <p>Look for games with favorable rules:</p>
        <ul>
          <li>Dealer stands on soft 17</li>
          <li>Double after split allowed</li>
          <li>Surrender allowed</li>
          <li>3:2 blackjack payouts (avoid 6:5 games)</li>
        </ul>
      `,
      author: "David Chen",
      publishDate: "2024-01-08",
      readTime: "15 min read",
      category: "Game Guides",
      tags: ["blackjack", "basic strategy", "card games", "casino strategy"],
      featured: false,
      image: "/IMG_0131.jpeg",
      metaDescription: "Master blackjack basic strategy to reduce the house edge. Complete guide for Canadian players with optimal playing decisions.",
      keywords: ["blackjack strategy", "basic strategy", "blackjack Canada", "card counting", "casino blackjack"]
    },
    {
      id: 5,
      title: "Responsible Gambling: Setting Limits and Recognizing Warning Signs",
      slug: "responsible-gambling-guide-canada",
      excerpt: "Learn how to gamble responsibly with practical tips for setting limits, recognizing problem gambling signs, and accessing help resources in Canada.",
      content: `
        <h2>The Importance of Responsible Gambling</h2>
        <p>Gambling should be an entertaining activity, not a way to make money or escape problems. Canadian players have access to excellent resources and tools to ensure their gambling remains fun and safe.</p>
        
        <h3>Setting Effective Limits</h3>
        <p>Before you start gambling, establish clear boundaries:</p>
        <ul>
          <li><strong>Time Limits:</strong> Decide how long you'll play before starting</li>
          <li><strong>Money Limits:</strong> Only gamble with money you can afford to lose</li>
          <li><strong>Loss Limits:</strong> Set a maximum loss amount and stick to it</li>
          <li><strong>Win Limits:</strong> Decide when to stop if you're ahead</li>
        </ul>
        
        <h3>Warning Signs of Problem Gambling</h3>
        <p>Be aware of these red flags:</p>
        <ul>
          <li>Gambling with money needed for essentials</li>
          <li>Chasing losses with bigger bets</li>
          <li>Lying about gambling activities</li>
          <li>Feeling anxious when not gambling</li>
          <li>Neglecting work, family, or social obligations</li>
          <li>Borrowing money to gamble</li>
        </ul>
        
        <h3>Casino Tools for Responsible Gambling</h3>
        <p>Reputable Canadian casinos offer these tools:</p>
        <ul>
          <li><strong>Deposit Limits:</strong> Daily, weekly, or monthly limits</li>
          <li><strong>Session Time Limits:</strong> Automatic logout after set time</li>
          <li><strong>Loss Limits:</strong> Stop playing after reaching loss threshold</li>
          <li><strong>Self-Exclusion:</strong> Temporary or permanent account closure</li>
          <li><strong>Reality Checks:</strong> Pop-up reminders about time spent</li>
        </ul>
        
        <h3>Canadian Support Resources</h3>
        <p>Help is available across Canada:</p>
        <ul>
          <li><strong>Problem Gambling Helpline:</strong> 1-888-230-3505 (24/7)</li>
          <li><strong>Responsible Gambling Council:</strong> www.responsiblegambling.org</li>
          <li><strong>Gamblers Anonymous:</strong> Local support groups</li>
          <li><strong>ConnexOntario (Ontario):</strong> 1-866-531-2600</li>
        </ul>
        
        <h3>Tips for Healthy Gambling</h3>
        <ul>
          <li>Never gamble when upset or under the influence</li>
          <li>Take regular breaks during gaming sessions</li>
          <li>Don't use gambling as a way to make money</li>
          <li>Keep gambling in perspective - it's entertainment</li>
          <li>Talk to friends and family about your gambling</li>
        </ul>
        
        <h3>When to Seek Help</h3>
        <p>If gambling is causing problems in your life, don't wait. Professional help is available, confidential, and effective. Many Canadians have successfully overcome gambling problems with proper support.</p>
      `,
      author: "Dr. Lisa Rodriguez",
      publishDate: "2024-01-05",
      readTime: "11 min read",
      category: "Responsible Gaming",
      tags: ["responsible gambling", "problem gambling", "gambling addiction", "help resources"],
      featured: false,
      image: "/IMG_0132.jpeg",
      metaDescription: "Learn responsible gambling practices, recognize warning signs, and access Canadian support resources. Essential guide for safe gambling.",
      keywords: ["responsible gambling", "problem gambling Canada", "gambling addiction help", "gambling limits", "Canadian gambling support"]
    },
    {
      id: 6,
      title: "Live Dealer Games: The Ultimate Casino Experience from Home",
      slug: "live-dealer-games-guide-canada",
      excerpt: "Experience the thrill of real casino action with live dealer games. Our guide covers the best live casinos, games, and tips for Canadian players.",
      content: `
        <h2>The Evolution of Live Dealer Gaming</h2>
        <p>Live dealer games have revolutionized online gambling, bringing the authentic casino atmosphere directly to Canadian players' homes. These games combine the convenience of online play with the social interaction and trust of land-based casinos.</p>
        
        <h3>How Live Dealer Games Work</h3>
        <p>Live dealer games are streamed in real-time from professional studios or actual casinos. Professional dealers operate real equipment while players participate via their computers or mobile devices.</p>
        
        <h3>Popular Live Dealer Games</h3>
        <ul>
          <li><strong>Live Blackjack:</strong> Multiple variants with side bets</li>
          <li><strong>Live Roulette:</strong> European, American, and specialty wheels</li>
          <li><strong>Live Baccarat:</strong> Classic and speed versions</li>
          <li><strong>Live Poker:</strong> Caribbean Stud, Three Card Poker</li>
          <li><strong>Game Shows:</strong> Monopoly Live, Dream Catcher, Crazy Time</li>
        </ul>
        
        <h3>Top Live Dealer Providers</h3>
        <ul>
          <li><strong>Evolution Gaming:</strong> Industry leader with innovative games</li>
          <li><strong>Pragmatic Play Live:</strong> High-quality streams and dealers</li>
          <li><strong>NetEnt Live:</strong> Premium studio environments</li>
          <li><strong>Playtech Live:</strong> Wide variety of games and limits</li>
        </ul>
        
        <h3>Benefits of Live Dealer Games</h3>
        <ul>
          <li>Real dealers and equipment</li>
          <li>Social interaction via chat</li>
          <li>Transparent gameplay</li>
          <li>Professional casino atmosphere</li>
          <li>Multiple camera angles</li>
          <li>Various betting limits</li>
        </ul>
        
        <h3>Tips for Live Dealer Success</h3>
        <ul>
          <li>Ensure stable internet connection</li>
          <li>Learn basic strategies before playing</li>
          <li>Start with lower stakes tables</li>
          <li>Use chat feature respectfully</li>
          <li>Take advantage of side bets carefully</li>
        </ul>
        
        <h3>Best Live Casinos for Canadians</h3>
        <p>Top-rated casinos offering live dealer games:</p>
        <ul>
          <li>CASINOMATE - Premium Evolution Gaming tables</li>
          <li>VICIBET - Wide variety of live games</li>
          <li>NEOSPIN - High-quality streaming</li>
        </ul>
        
        <h3>Mobile Live Gaming</h3>
        <p>Most live dealer games are optimized for mobile play, allowing Canadian players to enjoy authentic casino action on smartphones and tablets with the same quality as desktop.</p>
      `,
      author: "Amanda Foster",
      publishDate: "2024-01-03",
      readTime: "9 min read",
      category: "Game Guides",
      tags: ["live dealer", "live casino", "real dealers", "streaming games"],
      featured: false,
      image: "/IMG_0133.jpeg",
      metaDescription: "Complete guide to live dealer games for Canadian players. Learn about the best live casinos, games, and strategies for authentic casino action.",
      keywords: ["live dealer games", "live casino Canada", "real dealer games", "live blackjack", "live roulette"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'Bonuses', name: 'Casino Bonuses', count: blogPosts.filter(p => p.category === 'Bonuses').length },
    { id: 'Game Guides', name: 'Game Guides', count: blogPosts.filter(p => p.category === 'Game Guides').length },
    { id: 'Regulations', name: 'Regulations', count: blogPosts.filter(p => p.category === 'Regulations').length },
    { id: 'Responsible Gaming', name: 'Responsible Gaming', count: blogPosts.filter(p => p.category === 'Responsible Gaming').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 5);

  if (selectedPost) {
    const post = blogPosts.find(p => p.id === selectedPost);
    if (post) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          {/* SEO Meta Tags for Blog Post */}
          <div style={{ display: 'none' }}>
            <title>{post.title} | TopCasinoWagers Canada</title>
            <meta name="description" content={post.metaDescription} />
            <meta name="keywords" content={post.keywords.join(', ')} />
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.metaDescription} />
            <meta property="og:type" content="article" />
            <meta property="article:author" content={post.author} />
            <meta property="article:published_time" content={post.publishDate} />
            <link rel="canonical" href={`https://topcasinowagers.ca/blog/${post.slug}`} />
          </div>

          {/* Header */}
          <header className="glass sticky top-0 z-50 border-b border-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                <button 
                  onClick={onNavigateHome}
                  className="flex items-center cursor-pointer"
                >
                  <div className="flex items-center space-x-2">
                    <div className="relative animate-logo-glow">
                      <div className="w-16 h-16 relative">
                        <div className="absolute inset-0 gradient-primary rounded-3xl blur-sm opacity-60"></div>
                        <div className="relative w-16 h-16 gradient-primary rounded-3xl flex items-center justify-center shadow-modern transform hover:scale-110 transition-all duration-500 border-2 border-green-400/30">
                          <Crown className="w-9 h-9 text-white animate-crown-rotate filter drop-shadow-lg" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 gradient-accent rounded-full flex items-center justify-center animate-sparkle-burst">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold animate-text-shimmer text-modern tracking-tight">
                        TopCasinoWagers
                      </div>
                      <div className="text-xs text-green-600 font-bold tracking-widest animate-pulse">CANADA'S PREMIER GUIDE</div>
                    </div>
                  </div>
                </button>
                <nav className="hidden md:flex space-x-8">
                  <button 
                    onClick={onNavigateHome}
                    className="text-slate-700 hover:text-green-600 transition-colors font-medium"
                  >
                    Home
                  </button>
                  <span className="text-green-600 font-semibold font-medium">
                    Blog
                  </span>
                  <button 
                    onClick={() => onNavigateTo?.('reviews')}
                    className="text-slate-700 hover:text-green-600 transition-colors font-medium"
                  >
                    Reviews
                  </button>
                </nav>
              </div>
            </div>
          </header>

          {/* Blog Post Content */}
          <article className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <button
                onClick={() => setSelectedPost(null)}
                className="mb-8 flex items-center text-green-600 hover:text-green-700 font-medium"
              >
                ← Back to Blog
              </button>

              <div className="modern-card shadow-modern p-8">
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <span className="gradient-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    {post.title}
                  </h1>
                  
                  <div className="flex items-center text-slate-600 mb-6">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{new Date(post.publishDate).toLocaleDateString()}</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover rounded-xl mb-8"
                  />
                </div>

                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Related Articles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {blogPosts
                    .filter(p => p.id !== post.id && p.category === post.category)
                    .slice(0, 2)
                    .map((relatedPost) => (
                      <div key={relatedPost.id} className="modern-card shadow-modern-hover cursor-pointer" onClick={() => setSelectedPost(relatedPost.id)}>
                        <div className="p-6">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title}
                            className="w-full h-32 object-cover rounded-lg mb-4"
                          />
                          <h4 className="text-lg font-semibold text-slate-900 mb-2">{relatedPost.title}</h4>
                          <p className="text-slate-600 text-sm mb-3">{relatedPost.excerpt}</p>
                          <div className="flex items-center text-slate-500 text-xs">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span>{new Date(relatedPost.publishDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Blog Page Meta Tags */}
      <div style={{ display: 'none' }}>
        <title>Casino Blog - Expert Tips, Strategies & News | TopCasinoWagers Canada</title>
        <meta name="description" content="Expert casino blog with tips, strategies, game guides, and industry news for Canadian players. Stay updated with the latest casino trends and winning strategies." />
        <meta name="keywords" content="casino blog, gambling tips, casino strategies, game guides, casino news Canada, online gambling blog" />
      </div>
      
      {/* Header */}
      <header className="glass sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button 
              onClick={onNavigateHome}
              className="flex items-center cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <div className="relative animate-logo-glow">
                  <div className="w-16 h-16 relative">
                    <div className="absolute inset-0 gradient-primary rounded-3xl blur-sm opacity-60"></div>
                    <div className="relative w-16 h-16 gradient-primary rounded-3xl flex items-center justify-center shadow-modern transform hover:scale-110 transition-all duration-500 border-2 border-green-400/30">
                      <Crown className="w-9 h-9 text-white animate-crown-rotate filter drop-shadow-lg" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 gradient-accent rounded-full flex items-center justify-center animate-sparkle-burst">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold animate-text-shimmer text-modern tracking-tight">
                    TopCasinoWagers
                  </div>
                  <div className="text-xs text-green-600 font-bold tracking-widest animate-pulse">CANADA'S PREMIER GUIDE</div>
                </div>
              </div>
            </button>
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={onNavigateHome}
                className="text-slate-700 hover:text-green-600 transition-colors font-medium"
              >
                Home
              </button>
              <span className="text-green-600 font-semibold font-medium">
                Blog
              </span>
              <button 
                onClick={() => onNavigateTo?.('reviews')}
                className="text-slate-700 hover:text-green-600 transition-colors font-medium"
              >
                Reviews
              </button>
              <button 
                onClick={() => onNavigateTo?.('bonuses')}
                className="text-slate-700 hover:text-green-600 transition-colors font-medium"
              >
                Bonuses
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="glass-dark rounded-2xl px-6 py-3 border border-white/20">
                <div className="flex items-center">
                  <BookOpen className="w-8 h-8 text-blue-400 mr-3" />
                  <span className="text-lg font-bold">EXPERT INSIGHTS</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-modern">
              <span className="text-blue-300 animate-neon-pulse">Casino</span>
              <br />
              <span className="text-white">Blog</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto text-modern">
              📚 Expert tips, strategies, and insights for Canadian casino players. 
              Stay ahead with the latest trends and winning techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Featured Articles</h2>
            <p className="text-xl text-slate-600">Our most popular and comprehensive guides</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <div key={post.id} className="modern-card shadow-modern-hover cursor-pointer" onClick={() => setSelectedPost(post.id)}>
                <div className="p-8">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-xl mb-6"
                  />
                  <div className="flex items-center mb-4">
                    <span className="gradient-primary text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                      {post.category}
                    </span>
                    <Star className="w-4 h-4 text-yellow-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{post.title}</h3>
                  <p className="text-slate-600 mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-slate-500 text-sm">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center text-green-600 font-medium">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="text-slate-600">
              Showing {filteredPosts.length} articles
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white shadow-modern'
                    : 'glass border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="modern-card shadow-modern-hover cursor-pointer" onClick={() => setSelectedPost(post.id)}>
                <div className="p-6">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <div className="flex items-center mb-3">
                    <span className="gradient-secondary text-white px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-slate-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-green-600 text-sm font-medium">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-12 opacity-90">
            Get the latest casino tips, strategies, and exclusive bonuses delivered to your inbox.
          </p>
          <div className="glass-dark rounded-2xl p-8 border border-white/20 shadow-modern">
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
              <button className="btn-gold rounded-xl py-3 px-6 font-semibold">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-slate-300 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;