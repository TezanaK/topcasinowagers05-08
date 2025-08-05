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
  const pageDescription = `${game.description}. RTP: ${game.rtp}, Difficulty: ${game.difficulty}. Expert strategies and tips for Canadian players.`;
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
              {game.title}
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto text-modern">
              {game.description}
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

      {/* Strategy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="modern-card shadow-modern p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <Target className="w-8 h-8 text-green-600 mr-3" />
                Winning Strategies
              </h2>
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
                Expert Tips
              </h2>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Best Casinos for {game.title.replace(' Guide', '')}</h2>
            <p className="text-xl text-slate-600">Top-rated Canadian casinos offering the best {gameType} experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {game.bestCasinos.map((casino: string, index: number) => (
              <div key={index} className="modern-card shadow-modern-hover text-center">
                <div className="p-8">
                  <div className="gradient-primary rounded-3xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{casino}</h3>
                  <div className="flex justify-center mb-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <button 
                    onClick={() => onNavigateTo?.(`casino-${casino.toLowerCase()}`)}
                    className="btn-modern rounded-xl py-2 px-6 font-semibold"
                  >
                    <Play className="w-4 h-4 mr-2 inline" />
                    Play Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Games */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Popular {game.title.replace(' Guide', '')} Games</h2>
            <p className="text-xl text-slate-600">Most played games by Canadian players</p>
          </div>

          <div className="modern-card shadow-modern p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Top Games</h3>
                <div className="space-y-4">
                  {game.popularGames.map((gameName: string, index: number) => (
                    <div key={index} className="flex items-center justify-between glass rounded-lg p-4 border border-slate-200">
                      <div className="flex items-center">
                        <div className="gradient-secondary rounded-full w-8 h-8 flex items-center justify-center mr-3 text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="font-medium text-slate-900">{gameName}</span>
                      </div>
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Why These Games?</h3>
                <div className="space-y-4">
                  <div className="glass rounded-lg p-4 border border-green-200 bg-green-50">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-green-900 mb-1">High RTP</h4>
                        <p className="text-green-800 text-sm">These games offer some of the best return-to-player rates</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass rounded-lg p-4 border border-blue-200 bg-blue-50">
                    <div className="flex items-start">
                      <Trophy className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-1">Popular Choice</h4>
                        <p className="text-blue-800 text-sm">Most played by Canadian casino players</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass rounded-lg p-4 border border-purple-200 bg-purple-50">
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-purple-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-purple-900 mb-1">Trusted Providers</h4>
                        <p className="text-purple-800 text-sm">From reputable game developers with fair play certification</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">{game.title} FAQ</h2>
          <div className="space-y-6">
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">What is the best strategy for {gameType}?</h3>
              <p className="text-slate-600">
                The best strategy depends on the specific game, but generally involves understanding the rules, 
                managing your bankroll effectively, and choosing games with favorable odds. Our guide above 
                covers the most effective strategies for Canadian players.
              </p>
            </div>
            
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Can I play {gameType} for free?</h3>
              <p className="text-slate-600">
                Yes, most online casinos offer free demo versions of {gameType} games. This allows you to 
                practice strategies and learn the games without risking real money. It's highly recommended 
                for beginners.
              </p>
            </div>
            
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">What's the minimum bet for {gameType}?</h3>
              <p className="text-slate-600">
                Minimum bets typically start from {game.minBet} at most Canadian online casinos, making 
                these games accessible for players with different budgets. Some games may have even lower 
                minimum bets.
              </p>
            </div>
            
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Are {gameType} games fair at online casinos?</h3>
              <p className="text-slate-600">
                Yes, licensed online casinos use Random Number Generators (RNG) that are regularly tested 
                by independent auditors to ensure fair play. Always play at licensed casinos that we recommend 
                for the safest gaming experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameGuidePages;