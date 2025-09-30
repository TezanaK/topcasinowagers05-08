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
      ],
      seoContent: {
        h2Headings: [
          'NEOSPIN Casino Review Canada 2024',
          'NEOSPIN Welcome Bonus: 100% up to CA$500 + 100 Free Spins',
          'NEOSPIN Games Selection: 800+ Premium Casino Games',
          'NEOSPIN Banking Methods for Canadian Players',
          'NEOSPIN Mobile Casino Experience',
          'NEOSPIN Customer Support & Security'
        ],
        keywordDensity: {
          'NEOSPIN casino': 15,
          'Canadian players': 12,
          'online casino Canada': 10,
          'casino bonus': 8,
          'free spins': 6
        }
      }
    },
    'vicibet': {
      name: 'VICIBET',
      logo: '/IMG_0160.jpeg',
      rating: 4.7,
      bonus: '325% up to €3,000 + 300 Free Spins + 1 Bonus Crab or Sport 100% up to €100',
      established: '2022',
      license: ' Anjouan License',
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
      ],
      seoContent: {
        h2Headings: [
          'VICIBET Casino Review Canada 2024',
          'VICIBET Welcome Bonus: 100% up to CA$1,000 + 50 Free Spins',
          'VICIBET Games Collection: 1000+ Casino Games',
          'VICIBET Canadian Banking Options',
          'VICIBET Mobile Gaming Platform',
          'VICIBET Security & Customer Support'
        ],
        keywordDensity: {
          'VICIBET casino': 15,
          'Canadian online casino': 12,
          'casino games': 10,
          'welcome bonus': 8
        }
      }
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
      ],
      seoContent: {
        h2Headings: [
          'EVOSPIN Casino Review Canada 2024',
          'EVOSPIN Mega Bonus: 285% up to CA$7,500 + 285 Free Spins',
          'EVOSPIN Game Library: 1000+ Premium Games',
          'EVOSPIN Payment Methods for Canadians',
          'EVOSPIN Mobile Casino Features',
          'EVOSPIN VIP Program & Customer Support'
        ],
        keywordDensity: {
          'EVOSPIN casino': 15,
          'casino bonus Canada': 12,
          'online slots Canada': 10,
          'live dealer games': 8
        }
      }
    }
  };

  const casino = casinoData[casinoName] || casinoData['neospin'];
  
  const pageTitle = `${casino.name} Casino Review Canada 2024 - ${casino.bonus} | TopCasinoWagers`;
  const pageDescription = `${casino.name} casino review for Canadian players. ${casino.bonus}. ${casino.rating}/5 rating. ${casino.games} games, ${casino.payoutTime} payouts.`;
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

      {/* SEO Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">{casino.name} Casino Review Canada 2024</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              <strong>{casino.name} casino</strong> is one of the <strong>best online casinos Canada</strong> has to offer in 2024, 
              providing <strong>Canadian players</strong> with an exceptional <strong>online gambling experience</strong>. 
              With a <strong>{casino.rating}/5 expert rating</strong>, <strong>{casino.games} casino games</strong>, 
              and <strong>fast payouts in {casino.payoutTime}</strong>, {casino.name} stands out among 
              <strong>top Canadian online casinos</strong>. <strong>Licensed and regulated</strong> with 
              <strong>CAD currency support</strong> and <strong>Interac e-Transfer banking</strong>, 
              this <strong>online casino Canada</strong> platform offers everything <strong>Canadian casino players</strong> need.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Welcome Bonus Section */}
              <div className="modern-card shadow-modern p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{casino.name} Welcome Bonus: {casino.bonus}</h2>
                <div className="prose prose-lg max-w-none text-slate-600">
                  <p className="mb-6">
                    The <strong>{casino.name} welcome bonus</strong> offers <strong>Canadian players</strong> an incredible 
                    <strong>{casino.bonus}</strong> package, making it one of the <strong>best casino bonuses Canada</strong> 
                    has available in 2024. This <strong>exclusive casino bonus</strong> is designed specifically for 
                    <strong>Canadian online casino players</strong> and includes <strong>CAD currency support</strong> 
                    with no conversion fees.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="glass rounded-2xl p-6 border border-green-200 bg-green-50">
                      <h4 className="font-bold text-green-900 mb-3 flex items-center">
                        <Gift className="w-5 h-5 text-green-600 mr-2" />
                        Bonus Highlights
                      </h4>
                      <ul className="space-y-2 text-green-800 text-sm">
                        <li>• <strong>Bonus Amount:</strong> {casino.bonus}</li>
                        <li>• <strong>Minimum Deposit:</strong> {casino.minDeposit}</li>
                        <li>• <strong>Currency:</strong> Canadian Dollars (CAD)</li>
                        <li>• <strong>Wagering:</strong> 35x bonus amount</li>
                        <li>• <strong>Validity:</strong> 30 days</li>
                      </ul>
                    </div>
                    
                    <div className="glass rounded-2xl p-6 border border-blue-200 bg-blue-50">
                      <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                        How to Claim
                      </h4>
                      <ol className="space-y-2 text-blue-800 text-sm">
                        <li>1. Register new {casino.name} account</li>
                        <li>2. Verify your Canadian identity</li>
                        <li>3. Make minimum deposit of {casino.minDeposit}</li>
                        <li>4. Bonus credited automatically</li>
                        <li>5. Start playing eligible games</li>
                      </ol>
                    </div>
                  </div>
                  
                  <p>
                    This <strong>{casino.name} casino bonus</strong> is perfect for <strong>Canadian casino players</strong> 
                    looking to maximize their <strong>online gambling experience</strong>. The bonus works on 
                    <strong>online slots Canada</strong> games and selected <strong>table games</strong>, 
                    giving you more chances to win at this <strong>top-rated Canadian online casino</strong>.
                  </p>
                </div>
              </div>

              {/* Games Section */}
              <div className="modern-card shadow-modern p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{casino.name} Games: {casino.games} Casino Games for Canadian Players</h2>
                <div className="prose prose-lg max-w-none text-slate-600">
                  <p className="mb-6">
                    <strong>{casino.name} casino games</strong> collection features over <strong>{casino.games} premium casino games</strong> 
                    from the world's leading <strong>game providers</strong>. <strong>Canadian players</strong> can enjoy 
                    <strong>online slots Canada</strong>, <strong>live dealer games</strong>, <strong>table games</strong>, 
                    and <strong>progressive jackpots</strong> all optimized for <strong>mobile casino gaming</strong> 
                    and desktop play.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="gradient-primary rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Gamepad2 className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">Online Slots</h4>
                      <p className="text-sm text-slate-600">600+ slot games including <strong>high RTP slots</strong> and <strong>progressive jackpots</strong></p>
                    </div>
                    
                    <div className="text-center">
                      <div className="gradient-secondary rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">Live Dealer</h4>
                      <p className="text-sm text-slate-600">50+ <strong>live casino games</strong> with professional dealers</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="gradient-accent rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Trophy className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">Table Games</h4>
                      <p className="text-sm text-slate-600">100+ <strong>blackjack</strong>, <strong>roulette</strong>, and <strong>baccarat</strong> variants</p>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Top Game Providers at {casino.name}</h3>
                  <p className="mb-4">
                    <strong>{casino.name} casino</strong> partners with the industry's leading <strong>game providers</strong> 
                    to deliver the <strong>best online casino games Canada</strong> players can access:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {casino.gameProviders.map((provider: string, index: number) => (
                      <div key={index} className="flex items-center glass rounded-lg p-3 border border-slate-200">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span className="font-medium text-slate-700">{provider}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Banking Section */}
              <div className="modern-card shadow-modern p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{casino.name} Banking: Canadian Payment Methods & Fast Payouts</h2>
                <div className="prose prose-lg max-w-none text-slate-600">
                  <p className="mb-6">
                    <strong>{casino.name} banking</strong> options are designed specifically for <strong>Canadian players</strong>, 
                    offering <strong>CAD currency support</strong>, <strong>Interac e-Transfer</strong>, and 
                    <strong>fast payouts in {casino.payoutTime}</strong>. This <strong>Canadian online casino</strong> 
                    ensures secure transactions with <strong>SSL encryption</strong> and <strong>licensed banking partners</strong>.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                        <CreditCard className="w-5 h-5 text-blue-600 mr-2" />
                        Deposit Methods
                      </h4>
                      <div className="space-y-3">
                        {casino.paymentMethods.map((method: string, index: number) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                            <span className="text-slate-700 text-sm">{method}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                        <Clock className="w-5 h-5 text-green-600 mr-2" />
                        Processing Times
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Deposits:</span>
                          <span className="font-semibold text-green-600">Instant</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Interac e-Transfer:</span>
                          <span className="font-semibold">24-48 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Bank Transfer:</span>
                          <span className="font-semibold">{casino.payoutTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">E-wallets:</span>
                          <span className="font-semibold text-green-600">24 hours</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p>
                    <strong>Canadian casino players</strong> appreciate {casino.name}'s commitment to 
                    <strong>fast casino payouts</strong> and <strong>secure banking</strong>. All 
                    <strong>withdrawal requests</strong> are processed quickly, making this one of the 
                    <strong>best payout casinos Canada</strong> offers to players.
                  </p>
                </div>
              </div>

              {/* Mobile Casino Section */}
              <div className="modern-card shadow-modern p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{casino.name} Mobile Casino: Play on iPhone & Android</h2>
                <div className="prose prose-lg max-w-none text-slate-600">
                  <p className="mb-6">
                    The <strong>{casino.name} mobile casino</strong> delivers a premium <strong>mobile gambling experience</strong> 
                    for <strong>Canadian players</strong> on both <strong>iOS and Android devices</strong>. This 
                    <strong>mobile-optimized casino</strong> features the complete game library, 
                    <strong>mobile casino bonuses</strong>, and <strong>secure mobile banking</strong> 
                    for <strong>on-the-go casino gaming</strong>.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="glass rounded-2xl p-6 border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                        <Smartphone className="w-5 h-5 text-blue-600 mr-2" />
                        Mobile Features
                      </h4>
                      <ul className="space-y-2 text-slate-700 text-sm">
                        <li>• <strong>Responsive design</strong> for all screen sizes</li>
                        <li>• <strong>Touch-optimized interface</strong></li>
                        <li>• <strong>Full game library access</strong></li>
                        <li>• <strong>Mobile banking</strong> and withdrawals</li>
                        <li>• <strong>Push notifications</strong> for bonuses</li>
                        <li>• <strong>Offline game downloads</strong></li>
                      </ul>
                    </div>
                    
                    <div className="glass rounded-2xl p-6 border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                        <Monitor className="w-5 h-5 text-green-600 mr-2" />
                        Compatibility
                      </h4>
                      <ul className="space-y-2 text-slate-700 text-sm">
                        <li>• <strong>iPhone & iPad</strong> (iOS 12+)</li>
                        <li>• <strong>Android phones & tablets</strong> (Android 7+)</li>
                        <li>• <strong>Mobile browsers</strong> (Chrome, Safari, Firefox)</li>
                        <li>• <strong>Progressive Web App</strong> (PWA)</li>
                        <li>• <strong>No download required</strong></li>
                        <li>• <strong>Instant play</strong> capability</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security & Licensing */}
              <div className="modern-card shadow-modern p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{casino.name} Security & Licensing: Safe Gaming for Canadians</h2>
                <div className="prose prose-lg max-w-none text-slate-600">
                  <p className="mb-6">
                    <strong>{casino.name} casino security</strong> meets the highest international standards with 
                    <strong>{casino.license}</strong> ensuring <strong>safe online gambling</strong> for 
                    <strong>Canadian players</strong>. This <strong>licensed online casino</strong> uses 
                    <strong>256-bit SSL encryption</strong>, <strong>certified RNG technology</strong>, 
                    and <strong>responsible gambling tools</strong> to protect players.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="gradient-primary rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">Licensed & Regulated</h4>
                      <p className="text-sm text-slate-600">{casino.license} with regular audits</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="gradient-secondary rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Lock className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">SSL Encryption</h4>
                      <p className="text-sm text-slate-600">Bank-level security for all transactions</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="gradient-accent rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">Fair Play Certified</h4>
                      <p className="text-sm text-slate-600">RNG tested by independent auditors</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Support */}
              <div className="modern-card shadow-modern p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{casino.name} Customer Support: 24/7 Help for Canadian Players</h2>
                <div className="prose prose-lg max-w-none text-slate-600">
                  <p className="mb-6">
                    <strong>{casino.name} customer support</strong> provides <strong>24/7 assistance</strong> to 
                    <strong>Canadian casino players</strong> through multiple contact channels. The 
                    <strong>professional support team</strong> is trained to handle <strong>Canadian banking questions</strong>, 
                    <strong>bonus inquiries</strong>, and <strong>technical support</strong> in English and French.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="glass rounded-2xl p-6 border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                        <MessageCircle className="w-5 h-5 text-blue-600 mr-2" />
                        Contact Options
                      </h4>
                      <ul className="space-y-2 text-slate-700 text-sm">
                        <li>• <strong>Live Chat:</strong> 24/7 instant support</li>
                        <li>• <strong>Email:</strong> support@{casino.name.toLowerCase()}.com</li>
                        <li>• <strong>FAQ Section:</strong> Comprehensive help center</li>
                        <li>• <strong>Phone Support:</strong> Available for VIP players</li>
                      </ul>
                    </div>
                    
                    <div className="glass rounded-2xl p-6 border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                        <Clock className="w-5 h-5 text-green-600 mr-2" />
                        Response Times
                      </h4>
                      <ul className="space-y-2 text-slate-700 text-sm">
                        <li>• <strong>Live Chat:</strong> Under 2 minutes</li>
                        <li>• <strong>Email:</strong> Within 4 hours</li>
                        <li>• <strong>Technical Issues:</strong> Priority handling</li>
                        <li>• <strong>Withdrawal Queries:</strong> Same day response</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Content */}
            <div className="space-y-8">
              {/* Quick Stats */}
              <div className="modern-card shadow-modern p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-6">{casino.name} Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="text-slate-600 text-sm">Overall Rating:</span>
                    <div className="flex items-center">
                      {renderStars(casino.rating)}
                      <span className="ml-2 font-bold text-slate-900">{casino.rating}/5</span>
                    </div>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600 text-sm">Established:</span>
                    <span className="font-semibold">{casino.established}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600 text-sm">License:</span>
                    <span className="font-semibold text-xs">{casino.license}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600 text-sm">Games:</span>
                    <span className="font-semibold text-green-600">{casino.games}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600 text-sm">Payout Time:</span>
                    <span className="font-semibold text-green-600">{casino.payoutTime}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-600 text-sm">Min Deposit:</span>
                    <span className="font-semibold">{casino.minDeposit}</span>
                  </div>
                </div>
              </div>

              {/* Bonus Calculator */}
              <div className="modern-card shadow-modern p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Bonus Calculator</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Deposit Amount (CAD)</label>
                    <input 
                      type="number" 
                      placeholder="100"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div className="glass rounded-xl p-4 border border-green-200 bg-green-50">
                    <div className="text-center">
                      <div className="text-sm text-green-700 mb-1">You'll Receive:</div>
                      <div className="text-lg font-bold text-green-800">CA$200 Total</div>
                      <div className="text-xs text-green-600">CA$100 deposit + CA$100 bonus</div>
                    </div>
                  </div>
                  <button className="w-full btn-modern rounded-xl py-3 font-semibold">
                    <Calculator className="w-4 h-4 mr-2 inline" />
                    Calculate Bonus
                  </button>
                </div>
              </div>

              {/* Related Casinos */}
              <div className="modern-card shadow-modern p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Similar Casinos</h3>
                <div className="space-y-4">
                  <button 
                    onClick={() => onNavigateTo?.('casino-neospin')}
                    className="w-full text-left p-3 glass rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <img src="/neospin.jpg" alt="NEOSPIN" className="w-8 h-8 rounded-lg mr-3" />
                      <div>
                        <div className="font-semibold text-sm">NEOSPIN</div>
                        <div className="text-xs text-slate-600">4.9/5 • 100% + 100 FS</div>
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
                        <div className="text-xs text-slate-600">4.8/5 • 285% + 285 FS</div>
                      </div>
                    </div>
                  </button>
                  
                  <button 
                    onClick={() => onNavigateTo?.('casino-vicibet')}
                    className="w-full text-left p-3 glass rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <img src="/IMG_0160.jpeg" alt="VICIBET" className="w-8 h-8 rounded-lg mr-3" />
                      <div>
                        <div className="font-semibold text-sm">VICIBET</div>
                        <div className="text-xs text-slate-600">4.7/5 • 100% + 50 FS</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Review */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">{casino.name} Casino Detailed Review and Analysis</h2>
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
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Sections */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Why Choose Section */}
            <div className="text-center">
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Why Choose {casino.name} Casino Canada?</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  <strong>{casino.name} casino</strong> has earned its reputation as one of the 
                  <strong>best online casinos Canada</strong> through consistent delivery of 
                  <strong>exceptional gaming experiences</strong>, <strong>generous bonuses</strong>, 
                  and <strong>reliable customer service</strong>. <strong>Canadian players</strong> 
                  choose {casino.name} for its <strong>licensed operation</strong>, 
                  <strong>fast payouts</strong>, and <strong>comprehensive game selection</strong>.
                </p>
                
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="modern-card shadow-modern p-6 text-center">
                    <div className="gradient-primary rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Licensed & Safe</h4>
                    <p className="text-sm text-slate-600">{casino.license} ensures player protection</p>
                  </div>
                  
                  <div className="modern-card shadow-modern p-6 text-center">
                    <div className="gradient-secondary rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Fast Payouts</h4>
                    <p className="text-sm text-slate-600">Withdrawals in {casino.payoutTime}</p>
                  </div>
                  
                  <div className="modern-card shadow-modern p-6 text-center">
                    <div className="gradient-accent rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Gift className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Great Bonuses</h4>
                    <p className="text-sm text-slate-600">Exclusive offers for Canadians</p>
                  </div>
                  
                  <div className="modern-card shadow-modern p-6 text-center">
                    <div className="gradient-gold rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Gamepad2 className="w-8 h-8 text-slate-800" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Premium Games</h4>
                    <p className="text-sm text-slate-600">{casino.games} top-quality games</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Section */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">{casino.name} vs Other Canadian Online Casinos</h2>
              <div className="modern-card shadow-modern p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-4 px-4 font-bold text-slate-900">Casino</th>
                        <th className="text-center py-4 px-4 font-bold text-slate-900">Rating</th>
                        <th className="text-center py-4 px-4 font-bold text-slate-900">Bonus</th>
                        <th className="text-center py-4 px-4 font-bold text-slate-900">Games</th>
                        <th className="text-center py-4 px-4 font-bold text-slate-900">Payout</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100 bg-green-50">
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <img src={casino.logo} alt={casino.name} className="w-8 h-8 rounded-lg mr-3" />
                            <strong className="text-green-700">{casino.name}</strong>
                          </div>
                        </td>
                        <td className="text-center py-4 px-4">
                          <div className="flex items-center justify-center">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                            <strong>{casino.rating}/5</strong>
                          </div>
                        </td>
                        <td className="text-center py-4 px-4 text-sm font-medium">{casino.bonus.split(' ')[0]}</td>
                        <td className="text-center py-4 px-4 font-semibold">{casino.games}</td>
                        <td className="text-center py-4 px-4 font-semibold text-green-600">{casino.payoutTime}</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <img src="/neospin.jpg" alt="NEOSPIN" className="w-8 h-8 rounded-lg mr-3" />
                            <span>NEOSPIN</span>
                          </div>
                        </td>
                        <td className="text-center py-4 px-4">4.9/5</td>
                        <td className="text-center py-4 px-4 text-sm">100% + 100 FS</td>
                        <td className="text-center py-4 px-4">800+</td>
                        <td className="text-center py-4 px-4">1-2 days</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <img src="/IMG_0128.jpeg" alt="EVOSPIN" className="w-8 h-8 rounded-lg mr-3" />
                            <span>EVOSPIN</span>
                          </div>
                        </td>
                        <td className="text-center py-4 px-4">4.8/5</td>
                        <td className="text-center py-4 px-4 text-sm">285% + 285 FS</td>
                        <td className="text-center py-4 px-4">1000+</td>
                        <td className="text-center py-4 px-4">1-3 days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">{casino.name} Casino FAQ - Canadian Players</h2>
          <div className="space-y-6">
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Is {casino.name} casino safe for Canadian players?</h3>
              <p className="text-slate-600">
                Yes, <strong>{casino.name} casino</strong> is completely safe for <strong>Canadian players</strong>. 
                Licensed by the <strong>{casino.license}</strong>, this <strong>online casino Canada</strong> 
                uses <strong>256-bit SSL encryption</strong> to protect all player data and transactions. 
                The casino is regularly audited for <strong>fair play</strong> and maintains strict 
                <strong>responsible gambling policies</strong>.
              </p>
            </div>
            
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">How fast are {casino.name} casino payouts for Canadians?</h3>
              <p className="text-slate-600">
                <strong>{casino.name} payout times</strong> are among the fastest in the industry at 
                <strong>{casino.payoutTime}</strong> for <strong>Canadian players</strong>. 
                <strong>E-wallet withdrawals</strong> are processed within 24 hours, while 
                <strong>Interac e-Transfer</strong> and <strong>bank transfers</strong> take {casino.payoutTime}. 
                This makes {casino.name} one of the <strong>best fast payout casinos Canada</strong> offers.
              </p>
            </div>
            
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">What is the minimum deposit at {casino.name} casino?</h3>
              <p className="text-slate-600">
                The <strong>{casino.name} minimum deposit</strong> is <strong>{casino.minDeposit}</strong>, 
                making this <strong>Canadian online casino</strong> accessible for players with different budgets. 
                This low minimum applies to most <strong>Canadian payment methods</strong> including 
                <strong>Interac e-Transfer</strong>, <strong>credit cards</strong>, and <strong>e-wallets</strong>.
              </p>
            </div>
            
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Does {casino.name} casino accept Canadian dollars (CAD)?</h3>
              <p className="text-slate-600">
                Yes, <strong>{casino.name} casino</strong> fully supports <strong>Canadian dollars (CAD)</strong> 
                for both deposits and withdrawals, eliminating currency conversion fees for 
                <strong>Canadian players</strong>. This <strong>CAD online casino</strong> displays all 
                balances, bonuses, and game stakes in <strong>Canadian currency</strong>, making it 
                one of the most <strong>Canadian-friendly online casinos</strong> available.
              </p>
            </div>
            
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Can I play {casino.name} games on mobile devices?</h3>
              <p className="text-slate-600">
                Absolutely! The <strong>{casino.name} mobile casino</strong> is fully optimized for 
                <strong>iPhone</strong>, <strong>iPad</strong>, and <strong>Android devices</strong>. 
                <strong>Canadian players</strong> can access all <strong>{casino.games} casino games</strong>, 
                claim <strong>mobile casino bonuses</strong>, and make <strong>secure deposits and withdrawals</strong> 
                directly from their mobile devices. The <strong>mobile casino experience</strong> includes 
                <strong>touch-optimized controls</strong> and <strong>responsive design</strong>.
              </p>
            </div>
            
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">What games can I play at {casino.name} casino?</h3>
              <p className="text-slate-600">
                <strong>{casino.name} casino games</strong> include over <strong>{casino.games} premium titles</strong> 
                from top providers like <strong>{casino.gameProviders.slice(0, 3).join(', ')}</strong>. 
                <strong>Canadian players</strong> can enjoy <strong>online slots Canada</strong> with 
                <strong>high RTP rates</strong>, <strong>live dealer blackjack and roulette</strong>, 
                <strong>progressive jackpot slots</strong>, and <strong>table games</strong>. 
                All games support <strong>CAD currency</strong> and offer <strong>demo play</strong> options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{casino.name} Casino Canada 2024 - Expert Review Summary</h2>
            <div className="prose prose-lg max-w-4xl mx-auto text-slate-600">
              <p className="mb-4">
                <strong>{casino.name} casino</strong> represents one of the <strong>best online casinos Canada</strong> 
                has to offer in 2024, combining <strong>generous bonuses</strong>, <strong>extensive game selection</strong>, 
                and <strong>reliable customer service</strong> in one comprehensive platform. With a 
                <strong>{casino.rating}/5 expert rating</strong>, <strong>{casino.license}</strong>, 
                and <strong>fast {casino.payoutTime} payouts</strong>, this <strong>Canadian online casino</strong> 
                delivers everything players need for a <strong>safe and enjoyable gambling experience</strong>.
              </p>
              <p>
                <strong>Canadian casino players</strong> benefit from <strong>CAD currency support</strong>, 
                <strong>Interac e-Transfer banking</strong>, <strong>mobile casino compatibility</strong>, 
                and <strong>24/7 customer support</strong>. Whether you prefer <strong>online slots Canada</strong>, 
                <strong>live dealer games</strong>, or <strong>table games</strong>, {casino.name} provides 
                a <strong>premium online gambling experience</strong> that meets the highest standards for 
                <strong>licensed online casinos</strong> serving <strong>Canadian players</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CasinoLandingPages;