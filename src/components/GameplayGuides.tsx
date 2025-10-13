import React, { useState } from 'react';
import { 
  Target, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Star,
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
  BarChart3,
  Zap,
  RefreshCw,
  Users,
  Calculator,
  Lightbulb,
  AlertTriangle,
  BookOpen,
  PieChart,
  TrendingDown,
  Percent,
  Timer,
  Activity
} from 'lucide-react';

interface GameplayGuidesProps {
  onNavigateHome?: () => void;
  onNavigateTo?: (page: string) => void;
}

interface GameGuide {
  id: number;
  title: string;
  slug: string;
  game: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  readTime: string;
  category: string;
  description: string;
  keyPoints: string[];
  rtp: string;
  houseEdge: string;
  minBet: string;
  maxWin: string;
  popularity: number;
  strategy: string;
  tips: string[];
  content: string;
}

const GameplayGuides: React.FC<GameplayGuidesProps> = ({ onNavigateHome, onNavigateTo }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedGuide, setSelectedGuide] = useState<GameGuide | null>(null);

  const gameplayMetadata = {
    title: "Casino Game Strategies & Guides 2024 - Win More at Canadian Casinos | TopCasinoWagers",
    description: "Master casino games with expert strategies & guides. Learn blackjack, slots, roulette, poker & more. Proven techniques for Canadian players to maximize winnings.",
    keywords: "casino game strategies, blackjack strategy, slot machine tips, roulette systems, poker guide, Canadian casino games, winning strategies"
  };

  const categories = [
    { id: 'all', name: 'All Games', count: 15 },
    { id: 'table-games', name: 'Table Games', count: 6 },
    { id: 'slots', name: 'Slot Machines', count: 4 },
    { id: 'live-dealer', name: 'Live Dealer', count: 3 },
    { id: 'specialty', name: 'Specialty Games', count: 2 }
  ];

  const difficulties = [
    { id: 'all', name: 'All Levels' },
    { id: 'Beginner', name: 'Beginner' },
    { id: 'Intermediate', name: 'Intermediate' },
    { id: 'Advanced', name: 'Advanced' }
  ];

  const gameGuides: GameGuide[] = [
    {
      id: 1,
      title: "Complete Blackjack Basic Strategy Guide",
      slug: "complete-blackjack-basic-strategy-guide",
      game: "Blackjack",
      difficulty: "Intermediate",
      readTime: "12 min read",
      category: "table-games",
      description: "Master blackjack with mathematically proven basic strategy. Reduce house edge to 0.5% and maximize your winning potential.",
      keyPoints: [
        "Reduce house edge from 2% to 0.5%",
        "Complete strategy charts for all situations",
        "Card counting introduction",
        "Bankroll management techniques"
      ],
      rtp: "99.5%",
      houseEdge: "0.5%",
      minBet: "CA$1",
      maxWin: "Even money + bonuses",
      popularity: 95,
      strategy: "Mathematical basic strategy",
      tips: [
        "Always split Aces and 8s",
        "Never take insurance",
        "Double down on 11 vs dealer 2-10",
        "Stand on hard 17 or higher"
      ],
      content: `
        <h2>Understanding Blackjack Basics</h2>
        <p>Blackjack is the only casino game where skill significantly affects the outcome. Using basic strategy, you can reduce the house edge to just 0.5%, making it one of the best games for players.</p>
        
        <h3>The Goal</h3>
        <p>Get as close to 21 as possible without going over, while beating the dealer's hand.</p>
        
        <h3>Card Values</h3>
        <ul>
          <li>Number cards (2-10): Face value</li>
          <li>Face cards (J, Q, K): 10 points each</li>
          <li>Aces: 1 or 11 (whichever is better)</li>
        </ul>
        
        <h3>Basic Strategy Chart</h3>
        <p>This chart tells you the mathematically optimal play for every situation:</p>
        
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
        
        <h3>Advanced Techniques</h3>
        
        <h4>Card Counting Basics</h4>
        <p>While difficult online, understanding card counting helps you appreciate the game:</p>
        <ul>
          <li>High cards (10, J, Q, K, A) favor the player</li>
          <li>Low cards (2-6) favor the dealer</li>
          <li>Hi-Lo system: +1 for low cards, -1 for high cards</li>
        </ul>
        
        <h4>Bankroll Management</h4>
        <ul>
          <li>Have at least 100 betting units</li>
          <li>For CA$10 hands, need CA$1,000 bankroll</li>
          <li>Never bet more than 5% of bankroll</li>
          <li>Set win/loss limits before playing</li>
        </ul>
        
        <h3>Common Mistakes to Avoid</h3>
        <ul>
          <li>Taking insurance (increases house edge)</li>
          <li>Playing hunches instead of basic strategy</li>
          <li>Not splitting Aces and 8s</li>
          <li>Standing on soft 17</li>
          <li>Playing at tables with poor rules</li>
        </ul>
      `
    },
    {
      id: 2,
      title: "Slot Machine Mastery: RTP, Volatility & Winning Strategies",
      slug: "slot-machine-mastery-rtp-volatility-strategies",
      game: "Slots",
      difficulty: "Beginner",
      readTime: "8 min read",
      category: "slots",
      description: "Learn how to choose winning slot machines, understand RTP and volatility, and maximize your slot playing experience.",
      keyPoints: [
        "Choose slots with 96%+ RTP",
        "Understand volatility impact",
        "Bankroll management for slots",
        "Bonus feature optimization"
      ],
      rtp: "96-98%",
      houseEdge: "2-4%",
      minBet: "CA$0.10",
      maxWin: "Up to 50,000x bet",
      popularity: 88,
      strategy: "RTP and volatility selection",
      tips: [
        "Always check RTP before playing",
        "Match volatility to your bankroll",
        "Use free spins bonuses effectively",
        "Set win/loss limits"
      ],
      content: `
        <h2>Understanding Slot Machines</h2>
        <p>Slot machines are the most popular casino games, but they're also the most misunderstood. Success comes from choosing the right games and managing your bankroll properly.</p>
        
        <h3>Return to Player (RTP)</h3>
        <p>RTP is the percentage of wagered money returned to players over time:</p>
        <ul>
          <li><strong>Excellent (98%+):</strong> Blood Suckers (98%), Mega Joker (99%)</li>
          <li><strong>Good (96-98%):</strong> Starburst (96.09%), Gonzo's Quest (95.97%)</li>
          <li><strong>Average (94-96%):</strong> Most branded slots</li>
          <li><strong>Poor (&lt;94%):</strong> Many progressive jackpot slots</li>
        </ul>
        
        <h3>Volatility Explained</h3>
        
        <h4>Low Volatility</h4>
        <ul>
          <li>Frequent small wins</li>
          <li>Lower risk</li>
          <li>Good for longer sessions</li>
          <li>Examples: Starburst, Blood Suckers</li>
        </ul>
        
        <h4>Medium Volatility</h4>
        <ul>
          <li>Balanced win frequency and size</li>
          <li>Moderate risk</li>
          <li>Good for most players</li>
          <li>Examples: Gonzo's Quest, Book of Dead</li>
        </ul>
        
        <h4>High Volatility</h4>
        <ul>
          <li>Rare but large wins</li>
          <li>High risk</li>
          <li>Requires larger bankroll</li>
          <li>Examples: Dead or Alive 2, Razor Shark</li>
        </ul>
        
        <h3>Slot Selection Strategy</h3>
        
        <h4>For Small Bankrolls (CA$50-200)</h4>
        <ul>
          <li>Choose low volatility slots</li>
          <li>Bet CA$0.10-0.50 per spin</li>
          <li>Focus on RTP over 96%</li>
          <li>Avoid progressive jackpots</li>
        </ul>
        
        <h4>For Medium Bankrolls (CA$200-1000)</h4>
        <ul>
          <li>Medium volatility slots work well</li>
          <li>Bet CA$0.50-2.00 per spin</li>
          <li>Can try some high volatility games</li>
          <li>Consider progressive slots occasionally</li>
        </ul>
        
        <h4>For Large Bankrolls (CA$1000+)</h4>
        <ul>
          <li>Any volatility level</li>
          <li>Higher bet sizes possible</li>
          <li>Progressive jackpots viable</li>
          <li>Can weather long losing streaks</li>
        </ul>
        
        <h3>Bonus Features Guide</h3>
        
        <h4>Free Spins</h4>
        <ul>
          <li>Usually triggered by 3+ scatter symbols</li>
          <li>Often include multipliers</li>
          <li>Can be retriggered</li>
          <li>Main source of big wins</li>
        </ul>
        
        <h4>Wild Symbols</h4>
        <ul>
          <li>Substitute for other symbols</li>
          <li>Expanding wilds cover entire reels</li>
          <li>Sticky wilds remain for multiple spins</li>
          <li>Walking wilds move across reels</li>
        </ul>
        
        <h4>Bonus Games</h4>
        <ul>
          <li>Pick-and-click features</li>
          <li>Wheel of fortune style games</li>
          <li>Mini-games within the slot</li>
          <li>Often have guaranteed wins</li>
        </ul>
        
        <h3>Bankroll Management</h3>
        
        <h4>The 5% Rule</h4>
        <p>Never bet more than 5% of your total bankroll on a single spin:</p>
        <ul>
          <li>CA$100 bankroll = CA$5 max bet</li>
          <li>CA$500 bankroll = CA$25 max bet</li>
          <li>CA$1000 bankroll = CA$50 max bet</li>
        </ul>
        
        <h4>Session Management</h4>
        <ul>
          <li>Divide bankroll into sessions</li>
          <li>Set win goals (50-100% of session bankroll)</li>
          <li>Set loss limits (never exceed session bankroll)</li>
          <li>Take breaks every 30 minutes</li>
        </ul>
        
        <h3>Common Slot Myths</h3>
        <ul>
          <li><strong>Myth:</strong> Slots are "due" to pay out</li>
          <li><strong>Reality:</strong> Each spin is independent</li>
          <li><strong>Myth:</strong> Higher bets increase RTP</li>
          <li><strong>Reality:</strong> RTP is fixed regardless of bet size</li>
          <li><strong>Myth:</strong> Time of day affects payouts</li>
          <li><strong>Reality:</strong> RNG ensures random results 24/7</li>
        </ul>
      `
    },
    {
      id: 3,
      title: "Roulette Systems Analysis: What Works and What Doesn't",
      slug: "roulette-systems-analysis-what-works",
      game: "Roulette",
      difficulty: "Advanced",
      readTime: "15 min read",
      category: "table-games",
      description: "Mathematical analysis of popular roulette betting systems including Martingale, Fibonacci, and D'Alembert. Learn which strategies have merit.",
      keyPoints: [
        "Mathematical analysis of betting systems",
        "Risk vs reward calculations",
        "Bankroll requirements",
        "European vs American roulette"
      ],
      rtp: "97.3%",
      houseEdge: "2.7%",
      minBet: "CA$1",
      maxWin: "35:1",
      popularity: 75,
      strategy: "Bankroll management over systems",
      tips: [
        "Always play European roulette",
        "Avoid betting systems long-term",
        "Focus on bankroll management",
        "Understand the house edge"
      ],
      content: `
        <h2>The Mathematics of Roulette</h2>
        <p>Roulette is a game of pure chance with a fixed house edge. European roulette has a 2.7% house edge (one zero), while American roulette has 5.26% (double zero).</p>
        
        <h3>Popular Betting Systems Analyzed</h3>
        
        <h4>Martingale System</h4>
        <p><strong>How it works:</strong> Double your bet after every loss, return to base bet after win.</p>
        
        <p><strong>Example Sequence:</strong></p>
        <ul>
          <li>Bet CA$10 on red, lose (-CA$10)</li>
          <li>Bet CA$20 on red, lose (-CA$30 total)</li>
          <li>Bet CA$40 on red, win (+CA$10 profit)</li>
        </ul>
        
        <p><strong>Mathematical Analysis:</strong></p>
        <ul>
          <li>Probability of 10 consecutive losses: 0.1%</li>
          <li>Required bet after 10 losses: CA$10,240</li>
          <li>Total risk to win CA$10: CA$20,470</li>
        </ul>
        
        <p><strong>Pros:</strong></p>
        <ul>
          <li>Guarantees profit if you have unlimited bankroll</li>
          <li>Simple to understand</li>
          <li>Works well for short sessions</li>
        </ul>
        
        <p><strong>Cons:</strong></p>
        <ul>
          <li>Requires massive bankroll</li>
          <li>Table limits prevent infinite doubling</li>
          <li>High risk of ruin</li>
        </ul>
        
        <h4>Fibonacci System</h4>
        <p><strong>How it works:</strong> Bet amounts follow Fibonacci sequence (1,1,2,3,5,8,13...)</p>
        
        <p><strong>Example Sequence:</strong></p>
        <ul>
          <li>Bet CA$10, lose</li>
          <li>Bet CA$10, lose</li>
          <li>Bet CA$20, lose</li>
          <li>Bet CA$30, lose</li>
          <li>Bet CA$50, win (profit depends on position)</li>
        </ul>
        
        <p><strong>Analysis:</strong></p>
        <ul>
          <li>Less aggressive than Martingale</li>
          <li>Still requires large bankroll for long sequences</li>
          <li>Doesn't change the house edge</li>
        </ul>
        
        <h4>D'Alembert System</h4>
        <p><strong>How it works:</strong> Increase bet by one unit after loss, decrease by one after win.</p>
        
        <p><strong>Example:</strong></p>
        <ul>
          <li>Base bet: CA$10</li>
          <li>Lose: Next bet CA$20</li>
          <li>Lose: Next bet CA$30</li>
          <li>Win: Next bet CA$20</li>
          <li>Win: Next bet CA$10</li>
        </ul>
        
        <p><strong>Analysis:</strong></p>
        <ul>
          <li>Most conservative progression</li>
          <li>Smaller bankroll requirements</li>
          <li>Slow profit accumulation</li>
          <li>Still subject to house edge</li>
        </ul>
        
        <h3>Why Betting Systems Don't Work Long-Term</h3>
        
        <h4>The Gambler's Fallacy</h4>
        <p>The belief that past results affect future outcomes. Each roulette spin is independent - the ball has no memory.</p>
        
        <h4>House Edge is Constant</h4>
        <p>No betting system can overcome the mathematical house edge. Every bet has the same expected value.</p>
        
        <h4>Table Limits</h4>
        <p>Casinos impose maximum bet limits that prevent infinite progression systems.</p>
        
        <h3>What Actually Works</h3>
        
        <h4>Game Selection</h4>
        <ul>
          <li><strong>European Roulette:</strong> 2.7% house edge</li>
          <li><strong>French Roulette:</strong> 1.35% on even money bets (La Partage rule)</li>
          <li><strong>American Roulette:</strong> 5.26% house edge (avoid)</li>
        </ul>
        
        <h4>Bet Selection</h4>
        <ul>
          <li><strong>Even Money Bets:</strong> Red/Black, Odd/Even, High/Low (48.6% chance)</li>
          <li><strong>Dozens/Columns:</strong> 32.4% chance, 2:1 payout</li>
          <li><strong>Single Numbers:</strong> 2.7% chance, 35:1 payout</li>
        </ul>
        
        <h4>Bankroll Management</h4>
        <ul>
          <li>Set loss limits before playing</li>
          <li>Never bet more than 5% of bankroll</li>
          <li>Take breaks every 30 minutes</li>
          <li>Accept that the house has an edge</li>
        </ul>
        
        <h3>Optimal Roulette Strategy</h3>
        
        <h4>For Entertainment Players</h4>
        <ul>
          <li>Play European roulette</li>
          <li>Make even money bets</li>
          <li>Set strict time and money limits</li>
          <li>Focus on fun, not profit</li>
        </ul>
        
        <h4>For Serious Players</h4>
        <ul>
          <li>Find French roulette with La Partage</li>
          <li>Use flat betting (same amount each spin)</li>
          <li>Track results for analysis</li>
          <li>Consider advantage play techniques</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>While betting systems can be fun and may work short-term, they cannot overcome the house edge long-term. The best roulette strategy is proper bankroll management, game selection, and accepting that roulette is a game of chance.</p>
      `
    },
    {
      id: 4,
      title: "Live Dealer Strategy: Maximizing Your Edge in Real-Time Games",
      slug: "live-dealer-strategy-maximizing-edge",
      game: "Live Dealer",
      difficulty: "Intermediate",
      readTime: "10 min read",
      category: "live-dealer",
      description: "Master live dealer games with advanced strategies for blackjack, roulette, and baccarat. Learn to read dealers and optimize your play.",
      keyPoints: [
        "Live dealer game advantages",
        "Reading dealer patterns",
        "Optimal betting strategies",
        "Bankroll management for live games"
      ],
      rtp: "98-99%",
      houseEdge: "0.5-2.7%",
      minBet: "CA$5",
      maxWin: "Varies by game",
      popularity: 82,
      strategy: "Game-specific optimization",
      tips: [
        "Use basic strategy in live blackjack",
        "Track dealer patterns in roulette",
        "Manage bankroll for longer sessions",
        "Take advantage of side bets carefully"
      ],
      content: `
        <h2>Live Dealer Games Overview</h2>
        <p>Live dealer games combine the convenience of online play with the authenticity of a real casino. Professional dealers operate real equipment, streamed to your device in real-time.</p>
        
        <h3>Advantages of Live Dealer Games</h3>
        <ul>
          <li>Real dealers and equipment (no RNG)</li>
          <li>Social interaction through chat</li>
          <li>Transparent gameplay</li>
          <li>Professional casino atmosphere</li>
          <li>Higher betting limits available</li>
        </ul>
        
        <h3>Live Blackjack Strategy</h3>
        
        <h4>Basic Strategy Application</h4>
        <p>Use the same basic strategy as regular blackjack, but with these live-specific considerations:</p>
        
        <ul>
          <li><strong>Dealer Speed:</strong> Some dealers work faster - don't rush decisions</li>
          <li><strong>Card Visibility:</strong> You can see cards more clearly than RNG games</li>
          <li><strong>Shuffle Tracking:</strong> Observe when new shoes are introduced</li>
          <li><strong>Dealer Tells:</strong> Some dealers may have unconscious patterns</li>
        </ul>
        
        <h4>Live Blackjack Variations</h4>
        
        <p><strong>Infinite Blackjack:</strong></p>
        <ul>
          <li>Unlimited players at one table</li>
          <li>Everyone gets the same cards</li>
          <li>Individual decisions for each player</li>
          <li>Lower minimum bets</li>
        </ul>
        
        <p><strong>Speed Blackjack:</strong></p>
        <ul>
          <li>Faster gameplay (27-second decisions)</li>
          <li>Players who decide first get cards first</li>
          <li>Higher hourly hands played</li>
          <li>Requires quick basic strategy knowledge</li>
        </ul>
        
        <h3>Live Roulette Strategy</h3>
        
        <h4>Dealer Pattern Recognition</h4>
        <p>While each spin is independent, some dealers develop unconscious patterns:</p>
        
        <ul>
          <li><strong>Release Point:</strong> Consistent ball release position</li>
          <li><strong>Wheel Speed:</strong> Similar wheel rotation speeds</li>
          <li><strong>Ball Speed:</strong> Consistent ball throwing force</li>
          <li><strong>Sector Targeting:</strong> Slight bias toward wheel sections</li>
        </ul>
        
        <h4>Live Roulette Variations</h4>
        
        <p><strong>Lightning Roulette:</strong></p>
        <ul>
          <li>Random multipliers (50x-500x) on straight-up bets</li>
          <li>Multiplied numbers pay less than 35:1</li>
          <li>Higher house edge but bigger potential wins</li>
          <li>Strategy: Spread bets across multiple numbers</li>
        </ul>
        
        <p><strong>Immersive Roulette:</strong></p>
        <ul>
          <li>Multiple camera angles</li>
          <li>Slow-motion ball tracking</li>
          <li>Enhanced visual experience</li>
          <li>Standard European roulette rules</li>
        </ul>
        
        <h3>Live Baccarat Strategy</h3>
        
        <h4>Basic Baccarat Strategy</h4>
        <ul>
          <li><strong>Banker Bet:</strong> 1.06% house edge (best option)</li>
          <li><strong>Player Bet:</strong> 1.24% house edge (second best)</li>
          <li><strong>Tie Bet:</strong> 14.4% house edge (avoid)</li>
          <li><strong>Side Bets:</strong> Usually high house edge (avoid)</li>
        </ul>
        
        <h4>Pattern Recognition</h4>
        <p>While patterns don't predict future outcomes, many players track:</p>
        <ul>
          <li>Banker/Player streaks</li>
          <li>Alternating patterns</li>
          <li>Shoe composition</li>
          <li>Big/Small patterns</li>
        </ul>
        
        <h3>Live Dealer Etiquette</h3>
        
        <h4>Chat Guidelines</h4>
        <ul>
          <li>Be respectful to dealers and players</li>
          <li>Don't blame dealers for losses</li>
          <li>Keep conversation appropriate</li>
          <li>Tip dealers for good service</li>
        </ul>
        
        <h4>Gameplay Etiquette</h4>
        <ul>
          <li>Make decisions promptly</li>
          <li>Don't hold up the game</li>
          <li>Follow table rules</li>
          <li>Be patient with technical issues</li>
        </ul>
        
        <h3>Bankroll Management for Live Games</h3>
        
        <h4>Session Planning</h4>
        <ul>
          <li>Live games often have higher minimums</li>
          <li>Sessions tend to be longer</li>
          <li>Social aspect can lead to longer play</li>
          <li>Set strict time and money limits</li>
        </ul>
        
        <h4>Bet Sizing</h4>
        <ul>
          <li>Start with minimum bets to assess dealer/table</li>
          <li>Increase bets only with profits</li>
          <li>Never chase losses with bigger bets</li>
          <li>Keep detailed records of sessions</li>
        </ul>
        
        <h3>Technical Considerations</h3>
        
        <h4>Connection Requirements</h4>
        <ul>
          <li>Stable internet (5+ Mbps recommended)</li>
          <li>Modern browser or mobile app</li>
          <li>Good audio for dealer communication</li>
          <li>Backup connection if possible</li>
        </ul>
        
        <h4>Device Optimization</h4>
        <ul>
          <li>Close unnecessary applications</li>
          <li>Use wired internet when possible</li>
          <li>Ensure device is fully charged</li>
          <li>Have customer support contact ready</li>
        </ul>
        
        <h3>Advanced Live Dealer Techniques</h3>
        
        <h4>Multi-Table Play</h4>
        <ul>
          <li>Play multiple tables simultaneously</li>
          <li>Requires excellent bankroll management</li>
          <li>Focus on games you know well</li>
          <li>Start with 2 tables maximum</li>
        </ul>
        
        <h4>Bonus Hunting</h4>
        <ul>
          <li>Some casinos offer live dealer bonuses</li>
          <li>Check wagering requirements carefully</li>
          <li>Live games may contribute less to wagering</li>
          <li>Time limits may be shorter</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Live dealer games offer the best of both worlds - online convenience with authentic casino experience. Success comes from applying solid game strategy, managing your bankroll properly, and taking advantage of the unique aspects of live play.</p>
      `
    },
    {
      id: 5,
      title: "Progressive Jackpot Strategy: Timing and Bankroll Management",
      slug: "progressive-jackpot-strategy-timing-bankroll",
      game: "Progressive Slots",
      difficulty: "Advanced",
      readTime: "11 min read",
      category: "slots",
      description: "Learn when and how to play progressive jackpot slots for maximum value. Understand jackpot cycles, optimal betting, and bankroll requirements.",
      keyPoints: [
        "Jackpot cycle analysis",
        "Optimal timing strategies",
        "Bankroll requirements",
        "Risk vs reward calculations"
      ],
      rtp: "88-95%",
      houseEdge: "5-12%",
      minBet: "CA$0.25",
      maxWin: "Multi-million CAD",
      popularity: 70,
      strategy: "Value-based timing",
      tips: [
        "Play when jackpots exceed average",
        "Always bet maximum when required",
        "Set strict loss limits",
        "Track jackpot histories"
      ],
      content: `
        <h2>Understanding Progressive Jackpots</h2>
        <p>Progressive jackpots grow with every bet placed across a network of casinos until someone wins. The key to success is playing when the jackpot offers positive expected value.</p>
        
        <h3>Types of Progressive Jackpots</h3>
        
        <h4>Standalone Progressives</h4>
        <ul>
          <li>Single machine or game</li>
          <li>Smaller jackpots (CA$1,000-50,000)</li>
          <li>Better odds of winning</li>
          <li>Faster jackpot growth</li>
        </ul>
        
        <h4>Local Area Progressives</h4>
        <ul>
          <li>Connected machines in one casino</li>
          <li>Medium jackpots (CA$50,000-500,000)</li>
          <li>Moderate odds</li>
          <li>Steady growth rate</li>
        </ul>
        
        <h4>Wide Area Progressives</h4>
        <ul>
          <li>Connected across multiple casinos</li>
          <li>Massive jackpots (CA$1M+)</li>
          <li>Lowest odds but biggest payouts</li>
          <li>Slow individual contribution</li>
        </ul>
        
        <h3>Major Progressive Networks</h3>
        
        <h4>Microgaming Progressive Network</h4>
        <ul>
          <li><strong>Mega Moolah:</strong> Average CA$5.2M, Record CA$20.1M</li>
          <li><strong>Major Millions:</strong> Average CA$800K</li>
          <li><strong>King Cashalot:</strong> Average CA$500K</li>
          <li><strong>Treasure Nile:</strong> Average CA$150K</li>
        </ul>
        
        <h4>NetEnt Progressive Network</h4>
        <ul>
          <li><strong>Mega Fortune:</strong> Average CA$4.2M</li>
          <li><strong>Hall of Gods:</strong> Average CA$2.8M</li>
          <li><strong>Arabian Nights:</strong> Average CA$3.1M</li>
        </ul>
        
        <h3>Jackpot Cycle Analysis</h3>
        
        <h4>Historical Data Tracking</h4>
        <p>Track these metrics for each progressive:</p>
        <ul>
          <li>Average jackpot amount at payout</li>
          <li>Time between jackpots</li>
          <li>Minimum and maximum recorded jackpots</li>
          <li>Seasonal patterns</li>
        </ul>
        
        <h4>Value Calculation</h4>
        <p>A jackpot offers positive expected value when:</p>
        <p><strong>Current Jackpot > (Base RTP × Average Jackpot) / Jackpot Contribution Rate</strong></p>
        
        <p><strong>Example: Mega Moolah</strong></p>
        <ul>
          <li>Base RTP: 88.12%</li>
          <li>Average Jackpot: CA$5.2M</li>
          <li>Jackpot Contribution: ~12%</li>
          <li>Break-even point: ~CA$6.2M</li>
        </ul>
        
        <h3>Optimal Playing Strategy</h3>
        
        <h4>Timing Entry Points</h4>
        <ul>
          <li><strong>Conservative:</strong> Play when jackpot is 120% of average</li>
          <li><strong>Aggressive:</strong> Play when jackpot is 110% of average</li>
          <li><strong>Value Hunting:</strong> Play only at positive expected value</li>
        </ul>
        
        <h4>Bet Sizing Strategy</h4>
        <ul>
          <li>Always bet maximum if required for jackpot eligibility</li>
          <li>If not required, bet minimum to maximize spins</li>
          <li>Never increase bets to "chase" the jackpot</li>
          <li>Set strict session limits</li>
        </ul>
        
        <h3>Bankroll Requirements</h3>
        
        <h4>Minimum Bankroll Calculation</h4>
        <p>For progressive hunting, you need:</p>
        <ul>
          <li><strong>Conservative:</strong> 1000x maximum bet</li>
          <li><strong>Moderate:</strong> 500x maximum bet</li>
          <li><strong>Aggressive:</strong> 200x maximum bet</li>
        </ul>
        
        <p><strong>Example: CA$5 max bet game</strong></p>
        <ul>
          <li>Conservative: CA$5,000 bankroll</li>
          <li>Moderate: CA$2,500 bankroll</li>
          <li>Aggressive: CA$1,000 bankroll</li>
        </ul>
        
        <h4>Session Management</h4>
        <ul>
          <li>Divide bankroll into 10-20 sessions</li>
          <li>Never exceed one session limit</li>
          <li>Take breaks between sessions</li>
          <li>Track all results meticulously</li>
        </ul>
        
        <h3>Risk Management</h3>
        
        <h4>Probability Considerations</h4>
        <ul>
          <li>Mega Moolah: ~1 in 50 million chance per spin</li>
          <li>Most players will never hit a major progressive</li>
          <li>Focus on entertainment value, not profit expectation</li>
          <li>Consider smaller progressives for better odds</li>
        </ul>
        
        <h4>Psychological Factors</h4>
        <ul>
          <li>Progressive hunting can become addictive</li>
          <li>Set strict time and money limits</li>
          <li>Don't let near-misses influence decisions</li>
          <li>Remember that each spin is independent</li>
        </ul>
        
        <h3>Advanced Techniques</h3>
        
        <h4>Network Analysis</h4>
        <ul>
          <li>Track multiple progressives simultaneously</li>
          <li>Switch between games based on value</li>
          <li>Consider smaller network games</li>
          <li>Monitor jackpot growth rates</li>
        </ul>
        
        <h4>Bonus Optimization</h4>
        <ul>
          <li>Use free spins on progressive slots</li>
          <li>Take advantage of cashback offers</li>
          <li>Look for progressive-specific promotions</li>
          <li>Consider VIP programs for better rewards</li>
        </ul>
        
        <h3>Tax Implications for Canadians</h3>
        
        <h4>Recreational Players</h4>
        <ul>
          <li>Gambling winnings generally not taxable</li>
          <li>Keep records of wins and losses</li>
          <li>Large wins may trigger reporting requirements</li>
          <li>Consult tax professional for major wins</li>
        </ul>
        
        <h4>Professional Players</h4>
        <ul>
          <li>Gambling income may be taxable</li>
          <li>Detailed record keeping required</li>
          <li>Business expenses may be deductible</li>
          <li>Professional tax advice essential</li>
        </ul>
        
        <h3>Notable Canadian Winners</h3>
        <ul>
          <li><strong>2023:</strong> Toronto player - CA$7.5M on Mega Moolah</li>
          <li><strong>2022:</strong> Vancouver player - CA$4.2M on Hall of Gods</li>
          <li><strong>2021:</strong> Montreal player - CA$3.8M on Arabian Nights</li>
          <li><strong>2020:</strong> Calgary player - CA$2.1M on Mega Fortune</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Progressive jackpot hunting can be profitable when done with proper analysis and bankroll management. However, the odds are heavily against players, and most will lose money long-term. Treat progressive play as entertainment with the potential for life-changing wins, not as an investment strategy.</p>
      `
    }
  ];

  const filteredGuides = gameGuides.filter(guide => {
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || guide.difficulty === selectedDifficulty;
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.game.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  if (selectedGuide) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Single Guide View */}
        <div style={{ display: 'none' }}>
          <title>{selectedGuide.title} | TopCasinoWagers Gameplay Guides</title>
          <meta name="description" content={selectedGuide.description} />
          <meta name="keywords" content={`${selectedGuide.game} strategy, ${selectedGuide.game} guide, casino ${selectedGuide.game}`} />
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
                  onClick={() => setSelectedGuide(null)}
                  className="text-green-600 font-semibold font-medium"
                >
                  Gameplay Guides
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Guide Content */}
        <article className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSelectedGuide(null)}
              className="mb-8 flex items-center text-green-600 hover:text-green-700 font-medium"
            >
              ← Back to Guides
            </button>

            <header className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(selectedGuide.difficulty)}`}>
                  {selectedGuide.difficulty}
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {selectedGuide.game}
                </span>
                <div className="flex items-center text-slate-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {selectedGuide.readTime}
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                {selectedGuide.title}
              </h1>
              
              <p className="text-xl text-slate-600 mb-6">{selectedGuide.description}</p>
              
              {/* Game Stats */}
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div className="glass rounded-xl p-4 border border-slate-200 text-center">
                  <div className="text-2xl font-bold text-green-600">{selectedGuide.rtp}</div>
                  <div className="text-sm text-slate-600">RTP</div>
                </div>
                <div className="glass rounded-xl p-4 border border-slate-200 text-center">
                  <div className="text-2xl font-bold text-red-600">{selectedGuide.houseEdge}</div>
                  <div className="text-sm text-slate-600">House Edge</div>
                </div>
                <div className="glass rounded-xl p-4 border border-slate-200 text-center">
                  <div className="text-2xl font-bold text-blue-600">{selectedGuide.minBet}</div>
                  <div className="text-sm text-slate-600">Min Bet</div>
                </div>
                <div className="glass rounded-xl p-4 border border-slate-200 text-center">
                  <div className="text-2xl font-bold text-purple-600">{selectedGuide.maxWin}</div>
                  <div className="text-sm text-slate-600">Max Win</div>
                </div>
              </div>
            </header>

            {/* Key Points */}
            <div className="modern-card shadow-modern p-6 mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Key Learning Points</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {selectedGuide.keyPoints.map((point, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Tips */}
            <div className="modern-card shadow-modern p-6 mb-8 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Tips</h3>
              <div className="space-y-2">
                {selectedGuide.tips.map((tip, index) => (
                  <div key={index} className="flex items-start">
                    <Target className="w-4 h-4 text-green-500 mr-3 mt-1" />
                    <span className="text-slate-700 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: selectedGuide.content }} />
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Gameplay Guides Meta Tags */}
      <div style={{ display: 'none' }}>
        <title>{gameplayMetadata.title}</title>
        <meta name="description" content={gameplayMetadata.description} />
        <meta name="keywords" content={gameplayMetadata.keywords} />
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
                Gameplay Guides
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
                  <Target className="w-8 h-8 text-yellow-400 mr-3" />
                  <span className="text-lg font-bold">WINNING STRATEGIES</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-modern">
              <span className="text-yellow-300 animate-neon-pulse">Gameplay</span>
              <br />
              <span className="text-white">Guides</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto text-modern">
              🎯 Master casino games with expert strategies and proven techniques from professional players
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="text-slate-600">
              Showing {filteredGuides.length} guides
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-6">
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

          {/* Difficulty Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty.id}
                onClick={() => setSelectedDifficulty(difficulty.id)}
                className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  selectedDifficulty === difficulty.id
                    ? 'bg-blue-600 text-white shadow-modern'
                    : 'glass border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {difficulty.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Casino Game Strategy Guides and Tutorials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGuides.map((guide) => (
              <article key={guide.id} className="modern-card shadow-modern-hover cursor-pointer" onClick={() => setSelectedGuide(guide)}>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(guide.difficulty)}`}>
                      {guide.difficulty}
                    </span>
                    <div className="flex items-center text-slate-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {guide.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-green-600 transition-colors line-clamp-2">
                    {guide.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 text-sm line-clamp-3">{guide.description}</p>
                  
                  {/* Game Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="glass rounded-lg p-2 border border-slate-200 text-center">
                      <div className="text-sm font-bold text-green-600">{guide.rtp}</div>
                      <div className="text-xs text-slate-600">RTP</div>
                    </div>
                    <div className="glass rounded-lg p-2 border border-slate-200 text-center">
                      <div className="text-sm font-bold text-blue-600">{guide.minBet}</div>
                      <div className="text-xs text-slate-600">Min Bet</div>
                    </div>
                  </div>
                  
                  {/* Key Points Preview */}
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-slate-900 mb-2">Key Points:</div>
                    <div className="space-y-1">
                      {guide.keyPoints.slice(0, 2).map((point, index) => (
                        <div key={index} className="flex items-center text-xs text-slate-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center mr-3">
                        <Gamepad2 className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{guide.game}</div>
                        <div className="text-slate-500 text-xs">{guide.strategy}</div>
                      </div>
                    </div>
                    
                    <ArrowRight className="w-5 h-5 text-green-600" />
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

export default GameplayGuides;