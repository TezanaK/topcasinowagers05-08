import React from 'react';
import { 
  Star, 
  Shield, 
  Award, 
  MapPin, 
  CreditCard, 
  Clock, 
  Users, 
  TrendingUp,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  Zap,
  Crown,
  Sparkles,
  Play,
  Gift,
  Gamepad2,
  DollarSign,
  Timer,
  Trophy,
  Target,
  Heart,
  Calendar,
  Building,
  Globe,
  Percent,
  BarChart3,
  Dice1,
  Spade
} from 'lucide-react';

interface GameProviderPagesProps {
  provider: string;
  onNavigateHome?: () => void;
  onNavigateTo?: (page: string) => void;
}

const GameProviderPages: React.FC<GameProviderPagesProps> = ({ provider, onNavigateHome, onNavigateTo }) => {
  // Game provider data mapping
  const providerData: { [key: string]: any } = {
    'netent': {
      name: 'NetEnt',
      fullName: 'Net Entertainment',
      logo: '/IMG_0128.jpeg',
      founded: '1996',
      headquarters: 'Stockholm, Sweden',
      employees: '1000+',
      licenses: ['Malta Gaming Authority', 'UK Gambling Commission', 'Alderney Gambling Control Commission'],
      description: 'NetEnt is a premium supplier of digitally distributed gaming systems used by some of the world\'s most successful online casino operators.',
      specialties: ['Premium Slots', 'Progressive Jackpots', 'Mobile Gaming', 'Live Casino'],
      totalGames: '200+',
      avgRTP: '96.5%',
      popularGames: [
        { name: 'Starburst', rtp: '96.09%', type: 'Video Slot', volatility: 'Low' },
        { name: 'Gonzo\'s Quest', rtp: '95.97%', type: 'Video Slot', volatility: 'Medium' },
        { name: 'Book of Dead', rtp: '96.21%', type: 'Video Slot', volatility: 'High' },
        { name: 'Dead or Alive 2', rtp: '96.82%', type: 'Video Slot', volatility: 'High' },
        { name: 'Mega Fortune', rtp: '96.00%', type: 'Progressive Jackpot', volatility: 'Medium' },
        { name: 'Hall of Gods', rtp: '95.70%', type: 'Progressive Jackpot', volatility: 'Medium' }
      ],
      achievements: [
        'First to launch mobile casino games',
        'Pioneer in HTML5 gaming technology',
        'Multiple EGR awards winner',
        'Over 25 years of industry experience'
      ],
      bestCasinos: [
        { name: 'NEOSPIN', rating: 4.9, games: '150+ NetEnt Games' },
        { name: 'EVOSPIN', rating: 4.8, games: '120+ NetEnt Games' },
        { name: 'VICIBET', rating: 4.7, games: '100+ NetEnt Games' }
      ],
      innovations: [
        'First mobile-optimized casino games',
        'Revolutionary bonus features',
        'Branded slot games',
        'VR casino experiences'
      ]
    },
    'microgaming': {
      name: 'Microgaming',
      fullName: 'Microgaming Systems',
      logo: '/IMG_0129.jpeg',
      founded: '1994',
      headquarters: 'Isle of Man',
      employees: '800+',
      licenses: ['UK Gambling Commission', 'Malta Gaming Authority', 'Kahnawake Gaming Commission'],
      description: 'Microgaming is one of the world\'s leading suppliers of online gaming software, with over 25 years of experience in the industry.',
      specialties: ['Progressive Jackpots', 'Slot Games', 'Table Games', 'Poker Software'],
      totalGames: '800+',
      avgRTP: '96.2%',
      popularGames: [
        { name: 'Mega Moolah', rtp: '88.12%', type: 'Progressive Jackpot', volatility: 'Medium' },
        { name: 'Immortal Romance', rtp: '96.86%', type: 'Video Slot', volatility: 'Medium' },
        { name: 'Thunderstruck II', rtp: '96.65%', type: 'Video Slot', volatility: 'Medium' },
        { name: 'Game of Thrones', rtp: '95.05%', type: 'Video Slot', volatility: 'Medium' },
        { name: 'Avalon II', rtp: '95.92%', type: 'Video Slot', volatility: 'Medium' },
        { name: 'Major Millions', rtp: '89.41%', type: 'Progressive Jackpot', volatility: 'Medium' }
      ],
      achievements: [
        'Created the first online casino software',
        'Largest progressive jackpot network',
        'Over 800 unique games',
        'Guinness World Record holder'
      ],
      bestCasinos: [
        { name: 'JACKPOTCITY', rating: 4.7, games: '500+ Microgaming Games' },
        { name: 'SPIN CASINO', rating: 4.6, games: '400+ Microgaming Games' },
        { name: 'ROYAL VEGAS', rating: 4.5, games: '350+ Microgaming Games' }
      ],
      innovations: [
        'First online casino software (1994)',
        'Progressive jackpot network',
        'VR and AR gaming experiences',
        'Cryptocurrency integration'
      ]
    },
    'evolution': {
      name: 'Evolution Gaming',
      fullName: 'Evolution Gaming Group',
      logo: '/IMG_0130.jpeg',
      founded: '2006',
      headquarters: 'Stockholm, Sweden',
      employees: '8000+',
      licenses: ['Malta Gaming Authority', 'UK Gambling Commission', 'Alderney Gambling Control Commission'],
      description: 'Evolution Gaming is the leading provider of Live Casino solutions, delivering unparalleled live gaming experiences.',
      specialties: ['Live Dealer Games', 'Game Shows', 'Mobile Live Gaming', 'VIP Gaming'],
      totalGames: '100+',
      avgRTP: '98.5%',
      popularGames: [
        { name: 'Lightning Roulette', rtp: '97.30%', type: 'Live Roulette', volatility: 'Medium' },
        { name: 'Crazy Time', rtp: '96.08%', type: 'Game Show', volatility: 'High' },
        { name: 'Monopoly Live', rtp: '96.23%', type: 'Game Show', volatility: 'Medium' },
        { name: 'Dream Catcher', rtp: '96.58%', type: 'Game Show', volatility: 'Medium' },
        { name: 'Live Blackjack', rtp: '99.28%', type: 'Live Blackjack', volatility: 'Low' },
        { name: 'Immersive Roulette', rtp: '97.30%', type: 'Live Roulette', volatility: 'Medium' }
      ],
      achievements: [
        'World\'s leading live casino provider',
        'Multiple industry awards',
        'Studios across 4 continents',
        'Over 600 live tables'
      ],
      bestCasinos: [
        { name: 'EVOSPIN', rating: 4.8, games: '80+ Evolution Games' },
        { name: 'VICIBET', rating: 4.7, games: '70+ Evolution Games' },
        { name: 'CASINO INFINITY', rating: 4.7, games: '60+ Evolution Games' }
      ],
      innovations: [
        'First live casino game shows',
        'Multi-camera immersive experiences',
        'Mobile-first live gaming',
        'AI-powered game hosting'
      ]
    },
    'pragmatic-play': {
      name: 'Pragmatic Play',
      fullName: 'Pragmatic Play Limited',
      logo: '/IMG_0131.jpeg',
      founded: '2015',
      headquarters: 'Malta',
      employees: '4000+',
      licenses: ['Malta Gaming Authority', 'UK Gambling Commission', 'Curacao Gaming Authority'],
      description: 'Pragmatic Play is a world-leading game developer providing player-favourites to the most successful global brands.',
      specialties: ['Video Slots', 'Live Casino', 'Bingo', 'Virtual Sports'],
      totalGames: '500+',
      avgRTP: '96.3%',
      popularGames: [
        { name: 'Sweet Bonanza', rtp: '96.51%', type: 'Video Slot', volatility: 'High' },
        { name: 'Wolf Gold', rtp: '96.01%', type: 'Video Slot', volatility: 'Medium' },
        { name: 'The Dog House', rtp: '96.51%', type: 'Video Slot', volatility: 'High' },
        { name: 'Great Rhino Megaways', rtp: '96.58%', type: 'Megaways Slot', volatility: 'High' },
        { name: 'Gates of Olympus', rtp: '96.50%', type: 'Video Slot', volatility: 'High' },
        { name: 'Madame Destiny Megaways', rtp: '96.54%', type: 'Megaways Slot', volatility: 'High' }
      ],
      achievements: [
        'Fastest growing game provider',
        'Over 500 games in portfolio',
        'Available in 31+ languages',
        'Multiple industry awards'
      ],
      bestCasinos: [
        { name: 'GUNS BET', rating: 4.8, games: '300+ Pragmatic Games' },
        { name: 'ONLUCK.COM', rating: 4.9, games: '250+ Pragmatic Games' },
        { name: 'NEOSPIN', rating: 4.9, games: '200+ Pragmatic Games' }
      ],
      innovations: [
        'Buy Feature functionality',
        'Megaways mechanics',
        'Multi-product platform',
        'Tournaments and promotions'
      ]
    }
  };

  const providerInfo = providerData[provider] || providerData['netent'];
  
  const pageTitle = `${providerInfo.name} Games Canada 2024 - Best Casinos & Slots | TopCasinoWagers`;
  const pageDescription = `Play ${providerInfo.name} games at top Canadian casinos. ${providerInfo.totalGames} games, ${providerInfo.avgRTP} average RTP. Expert reviews and exclusive bonuses.`;
  const pageKeywords = `${providerInfo.name} games Canada, ${providerInfo.name} slots, ${providerInfo.name} casinos, Canadian ${providerInfo.name} games`;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const getVolatilityColor = (volatility: string) => {
    switch (volatility.toLowerCase()) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-slate-600 bg-slate-100';
    }
  };

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
        <link rel="canonical" href={`https://topcasinowagers.ca/provider-${provider}`} />
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
              <span className="text-green-600 font-semibold font-medium">
                Game Providers
              </span>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <img 
                  src={providerInfo.logo} 
                  alt={`${providerInfo.name} logo`}
                  className="w-20 h-20 rounded-2xl object-cover shadow-modern border-2 border-white/20 mr-6"
                />
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-2 text-modern">
                    {providerInfo.name}
                  </h1>
                  <div className="text-lg opacity-90">{providerInfo.fullName}</div>
                </div>
              </div>
              
              <p className="text-xl mb-8 opacity-90">
                {providerInfo.description}
              </p>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => onNavigateTo?.('reviews')}
                  className="btn-gold rounded-2xl py-4 px-8 font-bold shadow-modern-hover transform hover:scale-105 transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2 inline" />
                  Play {providerInfo.name} Games
                </button>
                <button className="glass-dark border-2 border-white/20 text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-300">
                  <Trophy className="w-5 h-5 mr-2 inline" />
                  View Casinos
                </button>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass-dark rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">Provider Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-300">{providerInfo.totalGames}</div>
                    <div className="text-sm opacity-80">Total Games</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-300">{providerInfo.avgRTP}</div>
                    <div className="text-sm opacity-80">Average RTP</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-300">{providerInfo.founded}</div>
                    <div className="text-sm opacity-80">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-300">{providerInfo.employees}</div>
                    <div className="text-sm opacity-80">Employees</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="modern-card shadow-modern p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <Building className="w-8 h-8 text-blue-600 mr-3" />
                Company Overview
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600">Founded:</span>
                  <span className="font-semibold">{providerInfo.founded}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600">Headquarters:</span>
                  <span className="font-semibold">{providerInfo.headquarters}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600">Employees:</span>
                  <span className="font-semibold">{providerInfo.employees}</span>
                </div>
                <div className="py-3">
                  <span className="text-slate-600 block mb-2">Licenses:</span>
                  <div className="space-y-2">
                    {providerInfo.licenses.map((license: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <Shield className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm font-medium">{license}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="modern-card shadow-modern p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <Target className="w-8 h-8 text-green-600 mr-3" />
                Specialties
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {providerInfo.specialties.map((specialty: string, index: number) => (
                  <div key={index} className="glass rounded-xl p-4 border border-slate-200 text-center">
                    <div className="gradient-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <Gamepad2 className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-semibold text-slate-900">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Games */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Popular {providerInfo.name} Games</h2>
            <p className="text-xl text-slate-600">Top-rated games loved by Canadian players</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {providerInfo.popularGames.map((game: any, index: number) => (
              <div key={index} className="modern-card shadow-modern-hover">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-slate-900">{game.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm font-bold">4.8</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-slate-600">RTP:</span>
                      <span className="font-semibold text-green-600">{game.rtp}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Type:</span>
                      <span className="font-semibold">{game.type}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Volatility:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getVolatilityColor(game.volatility)}`}>
                        {game.volatility}
                      </span>
                    </div>
                  </div>
                  
                  <button className="w-full btn-modern rounded-xl py-3 font-semibold">
                    <Play className="w-4 h-4 mr-2 inline" />
                    Play Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Casinos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Best Casinos for {providerInfo.name} Games</h2>
            <p className="text-xl text-slate-600">Top-rated Canadian casinos featuring {providerInfo.name} games</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {providerInfo.bestCasinos.map((casino: any, index: number) => (
              <div key={index} className="modern-card shadow-modern-hover text-center">
                <div className="p-8">
                  <div className="gradient-primary rounded-3xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{casino.name}</h3>
                  <div className="flex justify-center mb-4">
                    {renderStars(casino.rating)}
                    <span className="ml-2 text-sm font-bold text-slate-700">{casino.rating}/5</span>
                  </div>
                  <div className="glass rounded-xl p-3 mb-4 border border-slate-200">
                    <div className="font-semibold text-slate-900 text-sm">{casino.games}</div>
                  </div>
                  <button 
                    onClick={() => onNavigateTo?.(`casino-${casino.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`)}
                    className="w-full btn-modern rounded-xl py-3 font-semibold"
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

      {/* Achievements & Innovations */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="modern-card shadow-modern p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <Trophy className="w-8 h-8 text-yellow-600 mr-3" />
                Key Achievements
              </h2>
              <div className="space-y-4">
                {providerInfo.achievements.map((achievement: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <Award className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="modern-card shadow-modern p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <Zap className="w-8 h-8 text-blue-600 mr-3" />
                Innovations
              </h2>
              <div className="space-y-4">
                {providerInfo.innovations.map((innovation: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">{innovation}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">{providerInfo.name} FAQ</h2>
          <div className="space-y-6">
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">What makes {providerInfo.name} games special?</h3>
              <p className="text-slate-600">
                {providerInfo.name} is known for {providerInfo.specialties.join(', ').toLowerCase()} with an average RTP of {providerInfo.avgRTP}. 
                Their games feature innovative mechanics, high-quality graphics, and engaging gameplay that appeals to Canadian players.
              </p>
            </div>
            
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Can I play {providerInfo.name} games on mobile?</h3>
              <p className="text-slate-600">
                Yes, all {providerInfo.name} games are fully optimized for mobile devices. You can enjoy their complete portfolio 
                on smartphones and tablets with the same quality and features as desktop versions.
              </p>
            </div>
            
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Are {providerInfo.name} games fair and regulated?</h3>
              <p className="text-slate-600">
                Absolutely. {providerInfo.name} is licensed by {providerInfo.licenses.join(', ')} and all games use certified 
                Random Number Generators (RNG) to ensure fair play. Regular audits guarantee game integrity.
              </p>
            </div>
            
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Which Canadian casinos offer {providerInfo.name} games?</h3>
              <p className="text-slate-600">
                Top Canadian casinos featuring {providerInfo.name} games include {providerInfo.bestCasinos.map((c: any) => c.name).join(', ')}. 
                These casinos offer the full {providerInfo.name} portfolio with exclusive bonuses for Canadian players.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameProviderPages;