import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  User, 
  Clock, 
  Star,
  TrendingUp,
  Target,
  DollarSign,
  Crown,
  Sparkles,
  Play,
  Trophy,
  Shield,
  Gamepad2,
  Heart,
  Award,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Tag,
  Eye,
  ThumbsUp,
  Share2,
  MessageCircle,
  Bookmark
} from 'lucide-react';

interface BlogPageProps {
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
  views: number;
  likes: number;
  image: string;
}

const BlogPage: React.FC<BlogPageProps> = ({ onNavigateHome, onNavigateTo }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogMetadata = {
    title: "Casino Blog Canada 2024 - Expert Tips, Strategies & Industry News | TopCasinoWagers",
    description: "Latest casino news, winning strategies, game guides & expert tips for Canadian players. Stay updated with industry trends & maximize your winnings.",
    keywords: "casino blog Canada, gambling strategies, casino tips, slot strategies, blackjack guide, casino news, Canadian gambling"
  };

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'strategies', name: 'Game Strategies', count: 8 },
    { id: 'reviews', name: 'Casino Reviews', count: 6 },
    { id: 'news', name: 'Industry News', count: 5 },
    { id: 'guides', name: 'How-to Guides', count: 5 }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Ultimate Slot Machine Strategy Guide 2024: How to Win Big at Canadian Casinos",
      slug: "ultimate-slot-machine-strategy-guide-2024",
      excerpt: "Master the art of slot machines with proven strategies that Canadian players use to maximize their winnings. Learn RTP selection, bankroll management, and bonus hunting techniques.",
      content: `
        <h2>Understanding Slot Machine Mechanics</h2>
        <p>Slot machines are the most popular casino games in Canada, accounting for over 70% of casino revenue. Understanding how they work is crucial for developing winning strategies.</p>
        
        <h3>Return to Player (RTP) - Your Most Important Metric</h3>
        <p>RTP represents the percentage of wagered money a slot returns to players over time. Canadian players should always choose slots with RTP above 96%:</p>
        <ul>
          <li><strong>Excellent RTP (98%+):</strong> Blood Suckers (98%), Mega Joker (99%)</li>
          <li><strong>Good RTP (96-98%):</strong> Starburst (96.09%), Gonzo's Quest (95.97%)</li>
          <li><strong>Avoid Low RTP (&lt;94%):</strong> Most progressive jackpot slots</li>
        </ul>
        
        <h3>Volatility and Your Bankroll</h3>
        <p>Volatility determines payout frequency and size:</p>
        <ul>
          <li><strong>Low Volatility:</strong> Frequent small wins, perfect for longer sessions</li>
          <li><strong>High Volatility:</strong> Rare but large wins, requires bigger bankroll</li>
          <li><strong>Medium Volatility:</strong> Balanced approach, ideal for most players</li>
        </ul>
        
        <h3>Advanced Bankroll Management</h3>
        <p>Professional Canadian slot players follow the 5% rule: never bet more than 5% of your total bankroll on a single spin. For a CA$1,000 bankroll, maximum bet is CA$50.</p>
        
        <h3>Bonus Hunting Strategy</h3>
        <p>Canadian casinos offer various bonuses that smart players exploit:</p>
        <ul>
          <li>Free spins with no wagering requirements</li>
          <li>Cashback bonuses (10-20% of losses)</li>
          <li>Reload bonuses for existing players</li>
        </ul>
        
        <h3>Best Times to Play</h3>
        <p>While slots use RNG, many Canadian players report better results during off-peak hours (2-6 AM EST) when fewer players are online.</p>
      `,
      author: "Claire Thompson",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      category: "strategies",
      tags: ["slots", "strategy", "RTP", "bankroll management"],
      featured: true,
      views: 15420,
      likes: 342,
      image: "/IMG_0128.jpeg"
    },
    {
      id: 2,
      title: "Blackjack Basic Strategy Chart for Canadian Players: Cut House Edge to 0.5%",
      slug: "blackjack-basic-strategy-chart-canadian-players",
      excerpt: "Master blackjack with our comprehensive basic strategy guide. Learn when to hit, stand, double down, and split to minimize the house edge to just 0.5%.",
      content: `
        <h2>Why Basic Strategy Works</h2>
        <p>Blackjack is the only casino game where skill significantly affects the outcome. Using basic strategy reduces the house edge from 2-3% to just 0.5%.</p>
        
        <h3>The Complete Basic Strategy Chart</h3>
        <p>This chart tells you the mathematically optimal play for every possible hand combination:</p>
        
        <h4>Hard Hands (No Ace or Ace counted as 1)</h4>
        <ul>
          <li><strong>8 or less:</strong> Always Hit</li>
          <li><strong>9:</strong> Double vs 3-6, otherwise Hit</li>
          <li><strong>10:</strong> Double vs 2-9, otherwise Hit</li>
          <li><strong>11:</strong> Double vs 2-10, Hit vs Ace</li>
          <li><strong>12:</strong> Stand vs 4-6, Hit vs 2-3, 7-Ace</li>
          <li><strong>13-16:</strong> Stand vs 2-6, Hit vs 7-Ace</li>
          <li><strong>17+:</strong> Always Stand</li>
        </ul>
        
        <h4>Soft Hands (Ace counted as 11)</h4>
        <ul>
          <li><strong>A,2-A,3:</strong> Double vs 5-6, otherwise Hit</li>
          <li><strong>A,4-A,5:</strong> Double vs 4-6, otherwise Hit</li>
          <li><strong>A,6:</strong> Double vs 3-6, otherwise Hit</li>
          <li><strong>A,7:</strong> Stand vs 2,7,8; Double vs 3-6; Hit vs 9,10,A</li>
          <li><strong>A,8-A,9:</strong> Always Stand</li>
        </ul>
        
        <h4>Pairs</h4>
        <ul>
          <li><strong>A,A and 8,8:</strong> Always Split</li>
          <li><strong>10,10:</strong> Never Split</li>
          <li><strong>9,9:</strong> Split vs 2-9 except 7</li>
          <li><strong>7,7:</strong> Split vs 2-7</li>
          <li><strong>6,6:</strong> Split vs 2-6</li>
          <li><strong>5,5:</strong> Never Split (treat as 10)</li>
          <li><strong>4,4:</strong> Hit vs all</li>
          <li><strong>3,3 and 2,2:</strong> Split vs 2-7</li>
        </ul>
        
        <h3>Canadian Casino Variations</h3>
        <p>Most Canadian online casinos use these rules:</p>
        <ul>
          <li>Dealer stands on soft 17</li>
          <li>Double after split allowed</li>
          <li>Surrender not available</li>
          <li>Blackjack pays 3:2</li>
        </ul>
        
        <h3>Bankroll Management for Blackjack</h3>
        <p>Professional players recommend having at least 100 betting units. For CA$10 hands, you need a CA$1,000 bankroll.</p>
      `,
      author: "Peter Jacobs",
      publishDate: "2024-01-12",
      readTime: "10 min read",
      category: "strategies",
      tags: ["blackjack", "basic strategy", "house edge", "card counting"],
      featured: true,
      views: 12850,
      likes: 298,
      image: "/IMG_0129.jpeg"
    },
    {
      id: 3,
      title: "Live Dealer Casino Games: The Ultimate Guide for Canadian Players 2024",
      slug: "live-dealer-casino-games-guide-canadian-players",
      excerpt: "Experience real casino atmosphere from home with live dealer games. Learn about the best live casinos, game variations, and strategies for Canadian players.",
      content: `
        <h2>What Are Live Dealer Games?</h2>
        <p>Live dealer games stream real dealers from professional studios directly to your device. You play against real people, not computer algorithms, creating an authentic casino experience.</p>
        
        <h3>Popular Live Dealer Games in Canada</h3>
        
        <h4>Live Blackjack</h4>
        <ul>
          <li><strong>Classic Blackjack:</strong> Standard rules, 7 seats per table</li>
          <li><strong>Infinite Blackjack:</strong> Unlimited players, everyone gets same cards</li>
          <li><strong>Speed Blackjack:</strong> Faster gameplay, 27-second decision time</li>
          <li><strong>VIP Blackjack:</strong> Higher limits (CA$2,500+ per hand)</li>
        </ul>
        
        <h4>Live Roulette</h4>
        <ul>
          <li><strong>European Roulette:</strong> Single zero, 2.7% house edge</li>
          <li><strong>Lightning Roulette:</strong> Random multipliers up to 500x</li>
          <li><strong>Immersive Roulette:</strong> Multiple camera angles, slow-motion ball</li>
          <li><strong>Auto Roulette:</strong> No dealer, compressed air launches ball</li>
        </ul>
        
        <h4>Live Baccarat</h4>
        <ul>
          <li><strong>Classic Baccarat:</strong> Traditional gameplay</li>
          <li><strong>Speed Baccarat:</strong> 27-second rounds</li>
          <li><strong>Squeeze Baccarat:</strong> Dramatic card reveals</li>
        </ul>
        
        <h4>Game Shows</h4>
        <ul>
          <li><strong>Crazy Time:</strong> Wheel of fortune with bonus rounds</li>
          <li><strong>Monopoly Live:</strong> Based on the board game</li>
          <li><strong>Dream Catcher:</strong> Simple money wheel game</li>
        </ul>
        
        <h3>Best Live Dealer Casinos for Canadians</h3>
        <p>Top-rated casinos offering live dealer games:</p>
        <ul>
          <li><strong>Evolution Gaming Studios:</strong> Industry leader, 600+ tables</li>
          <li><strong>Pragmatic Play Live:</strong> Growing selection, good bonuses</li>
          <li><strong>NetEnt Live:</strong> High-quality streams, professional dealers</li>
        </ul>
        
        <h3>Live Dealer Etiquette</h3>
        <ul>
          <li>Be respectful in chat</li>
          <li>Don't blame dealers for losses</li>
          <li>Tip dealers for good service</li>
          <li>Make decisions quickly</li>
        </ul>
        
        <h3>Technical Requirements</h3>
        <p>For optimal experience:</p>
        <ul>
          <li>Stable internet (5+ Mbps)</li>
          <li>Modern browser or mobile app</li>
          <li>Good device speakers/headphones</li>
        </ul>
      `,
      author: "Jessica Meyer",
      publishDate: "2024-01-10",
      readTime: "7 min read",
      category: "guides",
      tags: ["live dealer", "streaming", "real dealers", "casino atmosphere"],
      featured: false,
      views: 9640,
      likes: 187,
      image: "/IMG_0130.jpeg"
    },
    {
      id: 4,
      title: "Canadian Online Casino Industry Report 2024: Market Trends & Player Insights",
      slug: "canadian-online-casino-industry-report-2024",
      excerpt: "Comprehensive analysis of Canada's online gambling market, including revenue growth, popular games, payment methods, and regulatory changes affecting players.",
      content: `
        <h2>Market Overview</h2>
        <p>Canada's online gambling market reached CA$31.2 billion in 2024, representing 15% growth from 2023. Ontario's regulated market accounts for 40% of national revenue.</p>
        
        <h3>Key Statistics</h3>
        <ul>
          <li><strong>Total Players:</strong> 2.8 million active online gamblers</li>
          <li><strong>Average Spend:</strong> CA$1,847 per player annually</li>
          <li><strong>Mobile Usage:</strong> 78% of players use mobile devices</li>
          <li><strong>Popular Games:</strong> Slots (65%), Live Dealer (18%), Sports Betting (12%)</li>
        </ul>
        
        <h3>Provincial Breakdown</h3>
        <ul>
          <li><strong>Ontario:</strong> CA$12.5B (40% of market)</li>
          <li><strong>Quebec:</strong> CA$6.2B (20% of market)</li>
          <li><strong>British Columbia:</strong> CA$4.7B (15% of market)</li>
          <li><strong>Alberta:</strong> CA$3.9B (12.5% of market)</li>
          <li><strong>Other Provinces:</strong> CA$3.9B (12.5% of market)</li>
        </ul>
        
        <h3>Payment Method Preferences</h3>
        <ul>
          <li><strong>Interac e-Transfer:</strong> 67% of transactions</li>
          <li><strong>Credit/Debit Cards:</strong> 23% of transactions</li>
          <li><strong>E-wallets:</strong> 8% of transactions</li>
          <li><strong>Cryptocurrency:</strong> 2% of transactions</li>
        </ul>
        
        <h3>Regulatory Changes</h3>
        <p>Ontario's iGaming market launched April 2022, generating CA$1.8B in first year. Other provinces considering similar regulation:</p>
        <ul>
          <li><strong>Alberta:</strong> Consultation phase for 2025 launch</li>
          <li><strong>British Columbia:</strong> Reviewing current monopoly model</li>
          <li><strong>Quebec:</strong> Maintaining provincial monopoly</li>
        </ul>
        
        <h3>Player Demographics</h3>
        <ul>
          <li><strong>Age 25-34:</strong> 35% of players</li>
          <li><strong>Age 35-44:</strong> 28% of players</li>
          <li><strong>Age 45-54:</strong> 22% of players</li>
          <li><strong>Gender Split:</strong> 58% male, 42% female</li>
        </ul>
        
        <h3>Future Outlook</h3>
        <p>Industry experts predict 20% annual growth through 2027, driven by:</p>
        <ul>
          <li>Provincial regulation expansion</li>
          <li>Mobile gaming improvements</li>
          <li>Live dealer game popularity</li>
          <li>Cryptocurrency adoption</li>
        </ul>
      `,
      author: "Claire Thompson",
      publishDate: "2024-01-08",
      readTime: "12 min read",
      category: "news",
      tags: ["industry report", "market analysis", "statistics", "regulation"],
      featured: false,
      views: 8320,
      likes: 156,
      image: "/IMG_0131.jpeg"
    },
    {
      id: 5,
      title: "Progressive Jackpot Slots: How to Win Life-Changing Money at Canadian Casinos",
      slug: "progressive-jackpot-slots-win-life-changing-money",
      excerpt: "Learn the secrets of progressive jackpot slots and how Canadian players have won millions. Discover the best jackpot games, optimal betting strategies, and timing tips.",
      content: `
        <h2>Understanding Progressive Jackpots</h2>
        <p>Progressive jackpots grow with every bet placed across a network of casinos until someone wins. The largest jackpot ever won by a Canadian was CA$7.5 million on Mega Moolah.</p>
        
        <h3>Types of Progressive Jackpots</h3>
        
        <h4>Standalone Progressives</h4>
        <ul>
          <li>Single machine jackpot</li>
          <li>Smaller prizes (CA$1,000-50,000)</li>
          <li>Better odds of winning</li>
        </ul>
        
        <h4>Local Area Progressives</h4>
        <ul>
          <li>Connected machines in one casino</li>
          <li>Medium prizes (CA$50,000-500,000)</li>
          <li>Moderate odds</li>
        </ul>
        
        <h4>Wide Area Progressives</h4>
        <ul>
          <li>Connected across multiple casinos</li>
          <li>Massive prizes (CA$1M+)</li>
          <li>Lowest odds but biggest payouts</li>
        </ul>
        
        <h3>Best Progressive Jackpot Slots for Canadians</h3>
        
        <h4>Mega Moolah (Microgaming)</h4>
        <ul>
          <li><strong>Average Jackpot:</strong> CA$5.2 million</li>
          <li><strong>Record Win:</strong> CA$20.1 million</li>
          <li><strong>RTP:</strong> 88.12%</li>
          <li><strong>Min Bet:</strong> CA$0.25</li>
        </ul>
        
        <h4>Hall of Gods (NetEnt)</h4>
        <ul>
          <li><strong>Average Jackpot:</strong> CA$2.8 million</li>
          <li><strong>Record Win:</strong> CA$8.7 million</li>
          <li><strong>RTP:</strong> 95.70%</li>
          <li><strong>Min Bet:</strong> CA$0.20</li>
        </ul>
        
        <h4>Arabian Nights (NetEnt)</h4>
        <ul>
          <li><strong>Average Jackpot:</strong> CA$3.1 million</li>
          <li><strong>Record Win:</strong> CA$9.4 million</li>
          <li><strong>RTP:</strong> 95.62%</li>
          <li><strong>Min Bet:</strong> CA$0.45</li>
        </ul>
        
        <h3>Winning Strategies</h3>
        
        <h4>Bet Maximum When Required</h4>
        <p>Many progressives require maximum bet to qualify for jackpot. Always check requirements before playing.</p>
        
        <h4>Choose Games with Higher Base RTP</h4>
        <p>While jackpot contribution lowers overall RTP, choose games with higher base RTP for better regular wins.</p>
        
        <h4>Play When Jackpots Are Above Average</h4>
        <p>Mega Moolah typically pays out around CA$5M. Playing when it's above CA$6M offers better value.</p>
        
        <h4>Set Strict Limits</h4>
        <p>Progressive hunting can be addictive. Set daily/weekly limits and stick to them.</p>
        
        <h3>Canadian Jackpot Winners</h3>
        <ul>
          <li><strong>2023:</strong> Toronto player won CA$7.5M on Mega Moolah</li>
          <li><strong>2022:</strong> Vancouver player won CA$4.2M on Hall of Gods</li>
          <li><strong>2021:</strong> Montreal player won CA$3.8M on Arabian Nights</li>
        </ul>
        
        <h3>Tax Implications for Canadians</h3>
        <p>Good news: Gambling winnings are generally not taxable in Canada for recreational players. However, consult a tax professional for large wins.</p>
      `,
      author: "Peter Jacobs",
      publishDate: "2024-01-05",
      readTime: "9 min read",
      category: "strategies",
      tags: ["progressive jackpots", "mega moolah", "big wins", "millionaire"],
      featured: false,
      views: 11250,
      likes: 267,
      image: "/IMG_0132.jpeg"
    },
    {
      id: 6,
      title: "Roulette Betting Systems: Do They Really Work? Mathematical Analysis",
      slug: "roulette-betting-systems-mathematical-analysis",
      excerpt: "Comprehensive analysis of popular roulette betting systems including Martingale, Fibonacci, and D'Alembert. Learn which systems work and which are myths.",
      content: `
        <h2>The Mathematics of Roulette</h2>
        <p>European roulette has a house edge of 2.7% (one zero), while American roulette has 5.26% (double zero). No betting system can overcome this mathematical advantage long-term.</p>
        
        <h3>Popular Betting Systems Analyzed</h3>
        
        <h4>Martingale System</h4>
        <p><strong>How it works:</strong> Double your bet after every loss, return to base bet after win.</p>
        <p><strong>Example:</strong> Bet CA$10 on red, lose. Bet CA$20, lose. Bet CA$40, win. Profit: CA$10.</p>
        
        <p><strong>Pros:</strong></p>
        <ul>
          <li>Guarantees profit if you have unlimited bankroll</li>
          <li>Simple to understand and implement</li>
          <li>Works well for short sessions</li>
        </ul>
        
        <p><strong>Cons:</strong></p>
        <ul>
          <li>Requires massive bankroll for long losing streaks</li>
          <li>Table limits prevent infinite doubling</li>
          <li>Risk of ruin is high</li>
        </ul>
        
        <p><strong>Mathematical Reality:</strong> 10 consecutive losses (0.1% chance) would require CA$10,240 bet to recover CA$10 loss.</p>
        
        <h4>Fibonacci System</h4>
        <p><strong>How it works:</strong> Bet amounts follow Fibonacci sequence (1,1,2,3,5,8,13...)</p>
        
        <p><strong>Pros:</strong></p>
        <ul>
          <li>Less aggressive than Martingale</li>
          <li>Smaller bet increases</li>
          <li>Can recover losses with fewer wins</li>
        </ul>
        
        <p><strong>Cons:</strong></p>
        <ul>
          <li>Still requires large bankroll</li>
          <li>Doesn't change house edge</li>
          <li>Complex to track during play</li>
        </ul>
        
        <h4>D'Alembert System</h4>
        <p><strong>How it works:</strong> Increase bet by one unit after loss, decrease by one after win.</p>
        
        <p><strong>Pros:</strong></p>
        <ul>
          <li>Most conservative progression</li>
          <li>Smaller bankroll requirements</li>
          <li>Easy to implement</li>
        </ul>
        
        <p><strong>Cons:</strong></p>
        <ul>
          <li>Slow profit accumulation</li>
          <li>Still subject to house edge</li>
          <li>Long losing streaks problematic</li>
        </ul>
        
        <h4>Labouchere System</h4>
        <p><strong>How it works:</strong> Write down sequence (1,2,3,4). Bet sum of first and last numbers. Cross out numbers when you win, add bet amount when you lose.</p>
        
        <p><strong>Pros:</strong></p>
        <ul>
          <li>Flexible bet sizing</li>
          <li>Can customize risk level</li>
          <li>Interesting psychological element</li>
        </ul>
        
        <p><strong>Cons:</strong></p>
        <ul>
          <li>Complex to manage</li>
          <li>Can lead to very large bets</li>
          <li>Doesn't overcome house edge</li>
        </ul>
        
        <h3>The Gambler's Fallacy</h3>
        <p>Many systems rely on the false belief that past results affect future outcomes. Each roulette spin is independent - previous results don't influence future spins.</p>
        
        <h3>What Actually Works</h3>
        
        <h4>Bankroll Management</h4>
        <ul>
          <li>Set loss limits before playing</li>
          <li>Never bet more than 5% of bankroll</li>
          <li>Take breaks every 30 minutes</li>
        </ul>
        
        <h4>Game Selection</h4>
        <ul>
          <li>Always choose European over American roulette</li>
          <li>Look for "En Prison" or "La Partage" rules</li>
          <li>Avoid side bets and call bets</li>
        </ul>
        
        <h4>Bet Selection</h4>
        <ul>
          <li>Outside bets have better odds (48.6% vs 2.7%)</li>
          <li>Red/Black, Odd/Even, High/Low pay even money</li>
          <li>Dozens and columns pay 2:1</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>No betting system can overcome the house edge in roulette. The best strategy is proper bankroll management, choosing European roulette, and accepting that the house always has an advantage.</p>
      `,
      author: "Jessica Meyer",
      publishDate: "2024-01-03",
      readTime: "11 min read",
      category: "strategies",
      tags: ["roulette", "betting systems", "martingale", "mathematics"],
      featured: false,
      views: 7890,
      likes: 143,
      image: "/IMG_0133.jpeg"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Single Post View */}
        <div style={{ display: 'none' }}>
          <title>{selectedPost.title} | TopCasinoWagers Blog</title>
          <meta name="description" content={selectedPost.excerpt} />
          <meta name="keywords" content={selectedPost.tags.join(', ')} />
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
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="text-green-600 font-semibold font-medium"
                >
                  Blog
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSelectedPost(null)}
              className="mb-8 flex items-center text-green-600 hover:text-green-700 font-medium"
            >
              ← Back to Blog
            </button>

            <header className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  {selectedPost.category}
                </span>
                <div className="flex items-center text-slate-500 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {selectedPost.publishDate}
                </div>
                <div className="flex items-center text-slate-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {selectedPost.readTime}
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                {selectedPost.title}
              </h1>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{selectedPost.author}</div>
                    <div className="text-slate-500 text-sm">Casino Expert</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-slate-500">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    <span className="text-sm">{selectedPost.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    <span className="text-sm">{selectedPost.likes}</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: selectedPost.content }} />

            <footer className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedPost.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-slate-600 hover:text-green-600 transition-colors">
                    <ThumbsUp className="w-5 h-5 mr-2" />
                    Like ({selectedPost.likes})
                  </button>
                  <button className="flex items-center text-slate-600 hover:text-green-600 transition-colors">
                    <Share2 className="w-5 h-5 mr-2" />
                    Share
                  </button>
                  <button className="flex items-center text-slate-600 hover:text-green-600 transition-colors">
                    <Bookmark className="w-5 h-5 mr-2" />
                    Save
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Blog Page Meta Tags */}
      <div style={{ display: 'none' }}>
        <title>{blogMetadata.title}</title>
        <meta name="description" content={blogMetadata.description} />
        <meta name="keywords" content={blogMetadata.keywords} />
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
              <span className="text-yellow-300 animate-neon-pulse">Casino</span>
              <br />
              <span className="text-white">Blog</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto text-modern">
              📚 Expert strategies, industry insights, and winning tips from Canada's top casino professionals
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="modern-card shadow-modern-hover cursor-pointer" onClick={() => setSelectedPost(post)}>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-slate-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.publishDate}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 hover:text-green-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-600 mb-6 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{post.author}</div>
                        <div className="text-slate-500 text-xs">{post.readTime}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-slate-500">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        <span className="text-sm">{post.views.toLocaleString()}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                </div>
              </article>
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
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="modern-card shadow-modern-hover cursor-pointer" onClick={() => setSelectedPost(post)}>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-slate-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.publishDate}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-3 hover:text-green-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-2">
                        <User className="w-3 h-3 text-white" />
                      </div>
                      <div className="text-xs">
                        <div className="font-semibold text-slate-900">{post.author}</div>
                        <div className="text-slate-500">{post.readTime}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-slate-500">
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        <span className="text-xs">{(post.views / 1000).toFixed(1)}k</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;