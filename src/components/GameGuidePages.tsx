import React from 'react';
import { 
  Gamepad2, 
  Target, 
  RefreshCw, 
  Users, 
  Crown,
  Sparkles,
  Play,
  Trophy,
  Star,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  TrendingUp,
  Shield,
  Clock,
  Zap,
  Heart,
  Award,
  BookOpen
} from 'lucide-react';

interface GameGuidePagesProps {
  gameType: string;
  onNavigateHome?: () => void;
  onNavigateTo?: (page: string) => void;
}

const GameGuidePages: React.FC<GameGuidePagesProps> = ({ gameType, onNavigateHome, onNavigateTo }) => {
  const gameData: { [key: string]: any } = {
    'slots': {
      title: 'Online Slots Guide',
      description: 'Master the art of online slot machines with our comprehensive guide for Canadian players',
      icon: Gamepad2,
      rtp: '96-98%',
      difficulty: 'Beginner',
      minBet: 'CA$0.10',
      maxWin: 'Up to 50,000x',
      strategies: [
        'Choose high RTP slots (96%+)',
        'Set a budget before playing',
        'Use free spins bonuses',
        'Try demo versions first',
        'Look for progressive jackpots'
      ],
      tips: [
        'Volatility affects payout frequency',
        'Megaways slots offer more ways to win',
        'Bonus features increase winning potential',
        'Progressive jackpots can be life-changing'
      ],
      bestCasinos: ['NEOSPIN', 'EVOSPIN', 'VICIBET'],
      popularGames: [
        'Starburst',
        'Book of Dead',
        'Gonzo\'s Quest',
        'Mega Moolah',
        'Immortal Romance'
      ]
    },
    'blackjack': {
      title: 'Blackjack Strategy Guide',
      description: 'Learn optimal blackjack strategy and card counting techniques for Canadian online casinos',
      icon: Target,
      rtp: '99.5%',
      difficulty: 'Intermediate',
      minBet: 'CA$1',
      maxWin: 'Even money',
      strategies: [
        'Learn basic strategy chart',
        'Never take insurance',
        'Split aces and eights',
        'Double down on 11',
        'Stand on hard 17+'
      ],
      tips: [
        'House edge is lowest with basic strategy',
        'Avoid side bets',
        'Card counting is legal but difficult online',
        'Practice with free games first'
      ],
      bestCasinos: ['EVOSPIN', 'CASINO INFINITY', 'VICIBET'],
      popularGames: [
        'Classic Blackjack',
        'European Blackjack',
        'Blackjack Surrender',
        'Live Dealer Blackjack',
        'Multi-hand Blackjack'
      ]
    },
    'roulette': {
      title: 'Roulette Strategy Guide',
      description: 'Comprehensive roulette guide covering European, American, and French variants for Canadian players',
      icon: RefreshCw,
      rtp: '97.3%',
      difficulty: 'Beginner',
      minBet: 'CA$0.10',
      maxWin: '35:1',
      strategies: [
        'Play European roulette (lower house edge)',
        'Use outside bets for better odds',
        'Martingale system for even money bets',
        'Fibonacci betting progression',
        'Set win/loss limits'
      ],
      tips: [
        'European roulette has better odds than American',
        'French roulette offers La Partage rule',
        'Inside bets have higher payouts but lower odds',
        'No betting system can overcome house edge'
      ],
      bestCasinos: ['CASINO INFINITY', 'EVOSPIN', 'NEOSPIN'],
      popularGames: [
        'European Roulette',
        'French Roulette',
        'Live Roulette',
        'Lightning Roulette',
        'Immersive Roulette'
      ]
    },
    'live-dealer': {
      title: 'Live Dealer Games Guide',
      description: 'Experience real casino atmosphere with live dealer games - the ultimate guide for Canadian players',
      icon: Users,
      rtp: '98-99%',
      difficulty: 'Intermediate',
      minBet: 'CA$1',
      maxWin: 'Varies',
      strategies: [
        'Choose reputable live casino providers',
        'Learn basic strategies for each game',
        'Manage your bankroll carefully',
        'Use chat feature respectfully',
        'Check streaming quality'
      ],
      tips: [
        'Games are streamed in real-time from studios',
        'Professional dealers enhance the experience',
        'Higher minimum bets than RNG games',
        'Social interaction with other players'
      ],
      bestCasinos: ['EVOSPIN', 'VICIBET', 'CASINO INFINITY'],
      popularGames: [
        'Live Blackjack',
        'Live Roulette',
        'Live Baccarat',
        'Live Poker',
        'Game Shows'
      ]
    }
  };

  const game = gameData[gameType] || gameData['slots'];
  const GameIcon = game.icon;
  
  const pageTitle = `${game.title} Canada 2024 - Best Strategies & Tips | TopCasinoWagers`;
  const pageDescription = `${game.description}. ${game.rtp} RTP, ${game.difficulty} level. Winning strategies & expert tips for Canadian casino players 2024.`;
  const pageKeywords = `${gameType} Canada, ${gameType} strategy, online ${gameType}, Canadian ${gameType} guide, ${gameType} tips`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* SEO Meta Tags */}
      <div style={{ display: 'none' }}>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://topcasinowagers.ca/games-${gameType}`} />
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
                onClick={() => onNavigateTo?.('reviews')}
                className="text-slate-700 hover:text-green-600 transition-colors font-medium"
              >
                Reviews
              </button>
              <button 
                onClick={() => onNavigateTo?.('guide')}
                className="text-slate-700 hover:text-green-600 transition-colors font-medium"
              >
                Guides
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
                  <GameIcon className="w-8 h-8 text-blue-400 mr-3" />
                  <span className="text-lg font-bold">GAME GUIDE</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-modern">
              <span className="text-yellow-300 animate-neon-pulse">{game.title.split(' ')[0]}</span>
              <br />
              <span className="text-white">{game.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto text-modern">
              🎯 <strong>{game.description}</strong> Learn <strong>winning strategies</strong>, 
              <strong>best practices</strong>, and <strong>expert tips</strong> for <strong>Canadian casino players</strong>.
            </p>

            {/* Game Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="glass-dark rounded-2xl px-6 py-4 border border-white/20">
                <div className="text-2xl font-bold text-green-400">{game.rtp}</div>
                <div className="text-sm opacity-80">RTP</div>
              </div>
              <div className="glass-dark rounded-2xl px-6 py-4 border border-white/20">
                <div className="text-2xl font-bold text-blue-400">{game.difficulty}</div>
                <div className="text-sm opacity-80">Difficulty</div>
              </div>
              <div className="glass-dark rounded-2xl px-6 py-4 border border-white/20">
                <div className="text-2xl font-bold text-yellow-400">{game.minBet}</div>
                <div className="text-sm opacity-80">Min Bet</div>
              </div>
              <div className="glass-dark rounded-2xl px-6 py-4 border border-white/20">
                <div className="text-2xl font-bold text-purple-400">{game.maxWin}</div>
                <div className="text-sm opacity-80">Max Win</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">{game.title} Canada 2024: Complete Guide</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>{game.title.toLowerCase()}</strong> is one of the most popular <strong>casino games</strong> 
                among <strong>Canadian players</strong>, offering <strong>{game.rtp} RTP</strong> and 
                <strong>{game.difficulty.toLowerCase()} difficulty level</strong>. This comprehensive guide covers 
                everything <strong>Canadian casino players</strong> need to know about playing 
                <strong>{gameType} at online casinos Canada</strong>, including <strong>winning strategies</strong>, 
                <strong>best casinos</strong>, and <strong>expert tips</strong> for maximizing your 
                <strong>online gambling experience</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">{game.title} Strategies and Expert Tips</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="modern-card shadow-modern p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <Target className="w-8 h-8 text-green-600 mr-3" />
                {game.title.split(' ')[0]} Winning Strategies for Canadians
              </h2>
              <p className="text-slate-600 mb-6">
                These <strong>{gameType} strategies</strong> are specifically designed for 
                <strong>Canadian casino players</strong> to maximize winning potential at 
                <strong>licensed online casinos Canada</strong>:
              </p>
              <div className="space-y-4">
                {game.strategies.map((strategy: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="gradient-primary rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-slate-700 font-medium">{strategy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="modern-card shadow-modern p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <Trophy className="w-8 h-8 text-yellow-600 mr-3" />
                Expert {game.title.split(' ')[0]} Tips
              </h2>
              <p className="text-slate-600 mb-6">
                Professional <strong>{gameType} tips</strong> from <strong>Canadian gambling experts</strong> 
                with years of experience at <strong>top online casinos Canada</strong>:
              </p>
              <div className="space-y-4">
                {game.tips.map((tip: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-slate-700">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Casinos */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Best Canadian Casinos for {game.title.replace(' Guide', '')} 2024</h2>
            <p className="text-xl text-slate-600">
              <strong>Top-rated Canadian online casinos</strong> offering the best <strong>{gameType} games</strong> 
              with <strong>licensed operations</strong>, <strong>fast payouts</strong>, and <strong>excellent customer support</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameGuidePages;