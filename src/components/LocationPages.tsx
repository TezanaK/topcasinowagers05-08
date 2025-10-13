import React from 'react';
import { 
  MapPin, 
  Shield, 
  Award, 
  Users, 
  Clock, 
  CheckCircle,
  Star,
  Crown,
  Sparkles,
  Target,
  Heart,
  TrendingUp,
  Globe,
  Lock,
  FileText,
  Play,
  Trophy,
  CreditCard,
  Gamepad2,
  Gift,
  AlertTriangle,
  Phone,
  Mail,
  MessageCircle,
  HelpCircle,
  BookOpen,
  Calculator,
  DollarSign,
  Percent,
  Timer,
  Zap,
  Search,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  TrendingDown,
  BarChart3,
  Lightbulb,
  Coins,
  Smartphone,
  Monitor,
  Wifi,
  Database,
  RefreshCw,
  PieChart,
  LineChart,
  Activity,
  Building,
  Landmark
} from 'lucide-react';

interface LocationPagesProps {
  location: string;
  onNavigateHome?: () => void;
  onNavigateTo?: (page: string) => void;
}

const LocationPages: React.FC<LocationPagesProps> = ({ location = 'ontario', onNavigateHome, onNavigateTo }) => {
  const locationData: { [key: string]: any } = {
    'ontario': {
      name: 'Ontario',
      fullName: 'Ontario, Canada',
      population: '15.6 million',
      legalAge: '19+',
      regulator: 'iGaming Ontario (iGO)',
      launched: 'April 4, 2022',
      description: 'Ontario is Canada\'s first province with a fully regulated online gambling market, offering licensed casinos, sports betting, and poker.',
      keyFeatures: [
        'Regulated iGaming market since 2022',
        'Licensed operators only',
        'Player protection guaranteed',
        'Tax-free winnings for recreational players',
        'Responsible gambling tools mandatory'
      ],
      topCasinos: [
        { name: 'NEOSPIN', rating: 4.9, bonus: '100% + 100 Spins' },
        { name: 'CASINOMATE', rating: 4.8, bonus: '100% + 200 Spins' },
        { name: 'EVOSPIN', rating: 4.8, bonus: '285% + 285 Spins' }
      ],
      paymentMethods: [
        'Interac e-Transfer',
        'Credit/Debit Cards',
        'PayPal',
        'Bank Transfer'
      ],
      popularGames: [
        'Online Slots',
        'Live Blackjack',
        'Sports Betting',
        'Live Roulette',
        'Poker'
      ]
    },
    'british-columbia': {
      name: 'British Columbia',
      fullName: 'British Columbia, Canada',
      population: '5.2 million',
      legalAge: '19+',
      regulator: 'British Columbia Lottery Corporation (BCLC)',
      launched: 'Provincial regulation',
      description: 'British Columbia players can access licensed offshore casinos while BCLC operates the provincial PlayNow platform.',
      keyFeatures: [
        'Access to international licensed casinos',
        'Provincial PlayNow platform',
        'Strong player protection laws',
        'CAD currency support',
        'Interac e-Transfer widely accepted'
      ],
      topCasinos: [
        { name: 'VICIBET', rating: 4.7, bonus: '325% + 300 Spins' },
        { name: 'NEOSPIN', rating: 4.9, bonus: '100% + 100 Spins' },
        { name: 'CASINO INFINITY', rating: 4.7, bonus: '10% Cashback' }
      ],
      paymentMethods: [
        'Interac e-Transfer',
        'Credit Cards',
        'E-wallets',
        'Cryptocurrency'
      ],
      popularGames: [
        'Progressive Slots',
        'Live Casino',
        'Blackjack',
        'Baccarat',
        'Video Poker'
      ]
    }
  };

  const locationInfo = locationData[location] || locationData['ontario'];
  
  const pageTitle = `Best Online Casinos ${locationInfo.name} 2024 - Licensed & Legal | TopCasinoWagers`;
  const pageDescription = `Top online casinos in ${locationInfo.name}, Canada 2024. Licensed operators, CA$9,000 bonuses, 24h payouts. Complete ${locationInfo.name} gambling guide.`;
  const pageKeywords = `online casinos ${locationInfo.name}, ${locationInfo.name} casino guide, legal gambling ${locationInfo.name}, casino bonuses ${locationInfo.name}`;

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
        <link rel="canonical" href={`https://topcasinowagers.ca/location-${location}`} />
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
                {locationInfo.name} Guide
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
                  <MapPin className="w-8 h-8 text-blue-400 mr-3" />
                  <span className="text-lg font-bold">{locationInfo.name.toUpperCase()} GUIDE</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-modern">
              <span className="text-yellow-300 animate-neon-pulse">Best Casinos</span>
              <br />
              <span className="text-white">{locationInfo.name}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto text-modern">
              🍁 Complete guide to <strong>online casinos in {locationInfo.name}</strong> - 
              Licensed operators, exclusive bonuses, and secure gaming for Canadian players.
            </p>
          </div>
        </div>
      </section>

      {/* Province Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Online Gambling in {locationInfo.name} - Legal Guide and Overview</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="modern-card shadow-modern p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <Landmark className="w-8 h-8 text-blue-600 mr-3" />
                {locationInfo.name} Gaming Overview
              </h2>
              <p className="text-slate-600 mb-6">{locationInfo.description}</p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600">Population:</span>
                  <span className="font-semibold">{locationInfo.population}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600">Legal Age:</span>
                  <span className="font-semibold">{locationInfo.legalAge}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600">Regulator:</span>
                  <span className="font-semibold text-sm">{locationInfo.regulator}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-slate-600">Market Launch:</span>
                  <span className="font-semibold">{locationInfo.launched}</span>
                </div>
              </div>
            </div>
            <div className="modern-card shadow-modern p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                Key Features for {locationInfo.name} Players
              </h2>
              <div className="space-y-4">
                {locationInfo.keyFeatures.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
            
      {/* Top Casinos */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Top Online Casinos for {locationInfo.name} Players</h2>
            <p className="text-xl text-slate-600">Licensed and trusted casinos accepting players from {locationInfo.name}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {locationInfo.topCasinos.map((casino: any, index: number) => (
              <div key={index} className="modern-card shadow-modern-hover text-center">
                <div className="p-8">
                  <div className="gradient-primary rounded-3xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{casino.name}</h3>
                  <div className="flex justify-center mb-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < casino.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="ml-2 text-sm font-bold text-slate-700">{casino.rating}/5</span>
                  </div>
                  <div className="glass rounded-xl p-3 mb-4 border border-slate-200">
                    <div className="font-semibold text-slate-900 text-sm">{casino.bonus}</div>
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
    </div>
  );
};
export default LocationPages;