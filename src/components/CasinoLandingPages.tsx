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
  Phone,
  Mail,
  Globe,
  Lock,
  FileText
} from 'lucide-react';

interface CasinoLandingPagesProps {
  casinoName: string;
  onNavigateHome?: () => void;
  onNavigateTo?: (page: string) => void;
}

const CasinoLandingPages: React.FC<CasinoLandingPagesProps> = ({ casinoName, onNavigateHome, onNavigateTo }) => {
  // Casino data mapping
  const casinoData: { [key: string]: any } = {
    'neospin': {
      name: 'NEOSPIN',
      logo: '/neospin.jpg',
      rating: 4.9,
      bonus: '100% up to CA$500 + 100 Free Spins',
      established: '2023',
      license: 'Curacao Gaming License',
      minDeposit: 'CA$10',
      payoutTime: '1-2 days',
      games: '800+',
      description: 'NEOSPIN is a cutting-edge online casino that launched in 2023, quickly establishing itself as a premier destination for Canadian players.',
      pros: [
        'Generous 100% welcome bonus with 100 free spins',
        'Fast 1-2 day payout times',
        'Over 800 premium games',
        'Canadian dollar support',
        'Mobile-optimized platform',
        'Instant deposits'
      ],
      cons: [
        'Relatively new casino (established 2023)',
        'Limited live chat hours'
      ],
      paymentMethods: [
        'Interac e-Transfer',
        'Visa/Mastercard',
        'Bitcoin',
        'Ethereum',
        'Bank Transfer'
      ],
      gameProviders: [
        'NetEnt',
        'Microgaming',
        'Pragmatic Play',
        'Evolution Gaming',
        'Play\'n GO'
      ]
    },
    'vicibet': {
      name: 'VICIBET',
      logo: '/IMG_0160.jpeg',
      rating: 4.7,
      bonus: '100% up to CA$1,000 + 50 Free Spins',
      established: '2022',
      license: 'Malta Gaming Authority',
      minDeposit: 'CA$20',
      payoutTime: '1-3 days',
      games: '1000+',
      description: 'VICIBET combines traditional casino gaming with modern innovation, offering Canadian players a comprehensive gaming experience.',
      pros: [
        '100% welcome bonus up to CA$1,000',
        '50 free spins on registration',
        'Over 1000 games available',
        'Malta Gaming Authority licensed',
        'Excellent customer support',
        'VIP loyalty program'
      ],
      cons: [
        'Higher minimum deposit requirement',
        'Limited cryptocurrency options'
      ],
      paymentMethods: [
        'Interac e-Transfer',
        'Visa/Mastercard',
        'PayPal',
        'Skrill',
        'Neteller',
        'Bank Transfer'
      ],
      gameProviders: [
        'Microgaming',
        'NetEnt',
        'Pragmatic Play',
        'Red Tiger',
        'Big Time Gaming'
      ]
    },
    'evospin': {
      name: 'EVOSPIN',
      logo: '/IMG_0128.jpeg',
      rating: 4.8,
      bonus: '285% up to CA$7,500 + 285 Free Spins',
      established: '2021',
      license: 'Malta Gaming Authority',
      minDeposit: 'CA$20',
      payoutTime: '1-3 days',
      games: '1000+',
      description: 'EVOSPIN offers one of the most generous welcome packages in the industry with a massive 285% bonus and 285 free spins.',
      pros: [
        'Massive 285% welcome bonus',
        '285 free spins included',
        'Malta Gaming Authority licensed',
        'Over 1000 premium games',
        'VIP program with exclusive benefits',
        'Live dealer games available'
      ],
      cons: [
        'Higher wagering requirements (40x)',
        'Bonus terms can be complex'
      ],
      paymentMethods: [
        'Interac e-Transfer',
        'Visa/Mastercard',
        'Skrill',
        'Neteller',
        'Bitcoin',
        'Bank Transfer'
      ],
      gameProviders: [
        'Evolution Gaming',
        'NetEnt',
        'Microgaming',
        'Pragmatic Play',
        'Yggdrasil'
      ]
    }
  };

  const casino = casinoData[casinoName] || casinoData['neospin'];
  
  const pageTitle = `${casino.name} Casino Review Canada 2024 - ${casino.bonus} | TopCasinoWagers`;
  const pageDescription = `${casino.name} casino review for Canadian players. ${casino.bonus}. ${casino.rating}/5 rating. ${casino.games} games, ${casino.payoutTime} payouts. Read our expert analysis.`;
  const pageKeywords = `${casino.name} casino, ${casino.name} review Canada, ${casino.name} bonus, Canadian online casino, ${casino.name} games`;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
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
        <link rel="canonical" href={`https://topcasinowagers.ca/casino-${casinoName}`} />
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <img 
                  src={casino.logo} 
                  alt={`${casino.name} logo`}
                  className="w-20 h-20 rounded-2xl object-cover shadow-modern border-2 border-white/20 mr-6"
                />
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-2 text-modern">
                    {casino.name}
                  </h1>
                  <div className="flex items-center">
                    {renderStars(casino.rating)}
                    <span className="ml-3 text-2xl font-bold">{casino.rating}/5</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xl mb-8 opacity-90">
                {casino.description}
              </p>
              
              <div className="glass-dark rounded-2xl p-6 border border-white/20 mb-8">
                <div className="text-center">
                  <div className="text-sm opacity-80 mb-2">EXCLUSIVE BONUS</div>
                  <div className="text-2xl font-bold text-yellow-300 mb-2">{casino.bonus}</div>
                  <div className="text-sm opacity-80">Min deposit: {casino.minDeposit}</div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="btn-gold rounded-2xl py-4 px-8 font-bold shadow-modern-hover transform hover:scale-105 transition-all duration-300">
                  <Play className="w-5 h-5 mr-2 inline" />
                  Play Now
                </button>
                <button className="glass-dark border-2 border-white/20 text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-300">
                  <FileText className="w-5 h-5 mr-2 inline" />
                  Full Review
                </button>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass-dark rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="opacity-80">Established:</span>
                    <span className="font-semibold">{casino.established}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-80">License:</span>
                    <span className="font-semibold text-sm">{casino.license}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-80">Games:</span>
                    <span className="font-semibold">{casino.games}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-80">Payout Time:</span>
                    <span className="font-semibold text-green-300">{casino.payoutTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Review */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Pros and Cons */}
              <div className="modern-card shadow-modern p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">{casino.name} Pros and Cons</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 mr-2" />
                      Pros
                    </h3>
                    <ul className="space-y-3">
                      {casino.pros.map((pro: string, index: number) => (
                        <li key={index} className="flex items-start text-green-600">
                          <CheckCircle className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-orange-700 mb-4 flex items-center">
                      <AlertTriangle className="w-6 h-6 mr-2" />
                      Cons
                    </h3>
                    <ul className="space-y-3">
                      {casino.cons.map((con: string, index: number) => (
                        <li key={index} className="flex items-start text-orange-600">
                          <AlertTriangle className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="modern-card shadow-modern p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
                  <CreditCard className="w-8 h-8 text-blue-600 mr-3" />
                  Payment Methods
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Accepted Methods</h3>
                    <div className="space-y-3">
                      {casino.paymentMethods.map((method: string, index: number) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                          <span className="text-slate-700">{method}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Processing Times</h3>
                    <div className="space-y-3 text-sm text-slate-600">
                      <div className="flex justify-between">
                        <span>Deposits:</span>
                        <span className="font-semibold text-green-600">Instant</span>
                      </div>
                      <div className="flex justify-between">
                        <span>E-wallets:</span>
                        <span className="font-semibold">24-48 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bank Transfer:</span>
                        <span className="font-semibold">{casino.payoutTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Crypto:</span>
                        <span className="font-semibold text-green-600">1-2 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Game Selection */}
              <div className="modern-card shadow-modern p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
                  <Gamepad2 className="w-8 h-8 text-purple-600 mr-3" />
                  Game Selection
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Game Providers</h3>
                    <div className="space-y-2">
                      {casino.gameProviders.map((provider: string, index: number) => (
                        <div key={index} className="glass rounded-lg p-3 border border-slate-200">
                          <span className="font-medium text-slate-700">{provider}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Game Categories</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Slots:</span>
                        <span className="font-semibold">600+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Table Games:</span>
                        <span className="font-semibold">100+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Live Dealer:</span>
                        <span className="font-semibold">50+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Jackpots:</span>
                        <span className="font-semibold">25+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Bonus Offer */}
              <div className="modern-card shadow-modern p-6 text-center">
                <div className="gradient-gold rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Exclusive Bonus</h3>
                  <div className="text-2xl font-bold text-slate-800 mb-2">{casino.bonus}</div>
                  <div className="text-sm text-slate-700">Min deposit: {casino.minDeposit}</div>
                </div>
                <button className="w-full btn-modern rounded-xl py-3 font-semibold mb-4">
                  <Play className="w-4 h-4 mr-2 inline" />
                  Claim Bonus
                </button>
                <p className="text-xs text-slate-500">18+ only. Terms and conditions apply.</p>
              </div>

              {/* Rating Breakdown */}
              <div className="modern-card shadow-modern p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Rating Breakdown</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-600">Games</span>
                      <span className="text-sm font-semibold">4.8/5</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '96%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-600">Bonuses</span>
                      <span className="text-sm font-semibold">4.9/5</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '98%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-600">Security</span>
                      <span className="text-sm font-semibold">4.7/5</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '94%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-600">Support</span>
                      <span className="text-sm font-semibold">4.6/5</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Reviews */}
              <div className="modern-card shadow-modern p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Related Reviews</h3>
                <div className="space-y-4">
                  <button 
                    onClick={() => onNavigateTo?.('casino-neospin')}
                    className="w-full text-left p-3 glass rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <img src="/neospin.jpg" alt="NEOSPIN" className="w-8 h-8 rounded-lg mr-3" />
                      <div>
                        <div className="font-semibold text-sm">NEOSPIN</div>
                        <div className="text-xs text-slate-600">4.9/5 rating</div>
                      </div>
                    </div>
                  </button>
                  
                  <button 
                    onClick={() => onNavigateTo?.('casino-evospin')}
                    className="w-full text-left p-3 glass rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <img src="/IMG_0128.jpeg" alt="EVOSPIN" className="w-8 h-8 rounded-lg mr-3" />
                      <div>
                        <div className="font-semibold text-sm">EVOSPIN</div>
                        <div className="text-xs text-slate-600">4.8/5 rating</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">{casino.name} FAQ</h2>
          <div className="space-y-6">
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Is {casino.name} safe for Canadian players?</h3>
              <p className="text-slate-600">
                Yes, {casino.name} is licensed by the {casino.license} and uses industry-standard SSL encryption 
                to protect player data and transactions. The casino is regularly audited for fair play.
              </p>
            </div>
            
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">How long do withdrawals take at {casino.name}?</h3>
              <p className="text-slate-600">
                Withdrawal processing times at {casino.name} are typically {casino.payoutTime}. E-wallet withdrawals 
                are usually faster, while bank transfers may take slightly longer.
              </p>
            </div>
            
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">What is the minimum deposit at {casino.name}?</h3>
              <p className="text-slate-600">
                The minimum deposit at {casino.name} is {casino.minDeposit}, making it accessible for players 
                with different budgets. This applies to most payment methods including Interac e-Transfer.
              </p>
            </div>
            
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Does {casino.name} accept Canadian dollars?</h3>
              <p className="text-slate-600">
                Yes, {casino.name} fully supports Canadian dollars (CAD) for both deposits and withdrawals, 
                eliminating currency conversion fees for Canadian players.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CasinoLandingPages;