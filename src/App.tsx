import React, { useState, useEffect } from 'react';
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
  Zap,
  Crown,
  Sparkles,
  Play,
  Gift,
  Gamepad2,
  DollarSign,
  Timer,
  Trophy,
  Mail,
  ChevronDown,
  Menu,
  X,
  HelpCircle,
  Heart,
  FileText,
  Phone,
  BookOpen,
  Target,
  RefreshCw
} from 'lucide-react';
import ReviewsPage from './components/ReviewsPage';
import BonusesPage from './components/BonusesPage';
import AboutPage from './components/AboutPage';
import BlogsPage from './components/BlogsPage';
import SEOPages from './components/SEOPages';
import CasinoLandingPages from './components/CasinoLandingPages';
import GameGuidePages from './components/GameGuidePages';
import LocationPages from './components/LocationPages';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import SEOFooter from './components/SEOFooter';
import ResponsibleGamingPage from './components/ResponsibleGamingPage';

interface Casino {
  id: number;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  features: string[];
  payoutTime: string;
  minDeposit: string;
  games: number;
  license: string;
  url: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const navigateHome = () => {
    setCurrentPage('home');
    setIsMenuOpen(false);
  };

  // SEO-optimized routing for programmatic pages
  if (currentPage.startsWith('casino-')) {
    const casinoName = currentPage.replace('casino-', '');
    return (
      <CasinoLandingPages 
        casinoName={casinoName}
        onNavigateHome={navigateHome}
        onNavigateTo={navigateToPage}
      />
    );
  }

  if (currentPage.startsWith('games-')) {
    const gameType = currentPage.replace('games-', '');
    return (
      <GameGuidePages 
        gameType={gameType}
        onNavigateHome={navigateHome}
        onNavigateTo={navigateToPage}
      />
    );
  }

  if (currentPage.startsWith('location-')) {
    const location = currentPage.replace('location-', '');
    return (
      <LocationPages 
        location={location}
        onNavigateHome={navigateHome}
        onNavigateTo={navigateToPage}
      />
    );
  }

  // Render different pages based on currentPage state
  if (currentPage === 'reviews') {
    return <ReviewsPage onNavigateHome={navigateHome} />;
  }

  if (currentPage === 'blog') {
    return <BlogsPage onNavigateHome={navigateHome} onNavigateTo={navigateToPage} />;
  }

  if (currentPage === 'bonuses') {
    return <BonusesPage onNavigateHome={navigateHome} onNavigateTo={navigateToPage} />;
  }

  if (currentPage === 'about') {
    return <AboutPage onNavigateHome={navigateHome} />;
  }

  if (['guide', 'contact', 'faq'].includes(currentPage)) {
    return <SEOPages currentPage={currentPage} onNavigateHome={navigateHome} onNavigateTo={navigateToPage} />;
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicyPage onNavigateHome={navigateHome} onNavigateTo={navigateToPage} />;
  }

  if (currentPage === 'responsible-gaming') {
    return <ResponsibleGamingPage onNavigateHome={navigateHome} onNavigateTo={navigateToPage} />;
  }

  const topCasinos: Casino[] = [
    {
      id: 1,
      name: "NEOSPIN",
      logo: "/neospin.jpg",
      rating: 4.9,
      bonus: "300% up to CA$11000 + 300 Free Spins",
      features: ["800+ Games", "Instant Deposits", "Mobile Optimized"],
      payoutTime: "1-2 days",
      minDeposit: "CA$10",
      games: 800,
      license: "Curacao Gaming License",
      url: "https://neospinlink.com/hd5377aa9"
    },
    {
      id: 2,
      name: "VICIBET",
      logo: "/IMG_0160.jpeg",
      rating: 4.7,
      bonus: "325% up to €3,000 + 300 Free Spins + 1 Bonus Crab or Sport 100% up to €100",
      features: ["100% welcome bonus", "Fast payouts", "Mobile optimized"],
      minDeposit: "CA$20",
      payoutTime: "1-2 days",
      games: 500,
      license: "Anjouan License",
      url: "https://vcbt.xarvilo.com/?mid=304790_1797260"
    },
    {
      id: 3,
      name: "EVOSPIN",
      logo: "/IMG_0128.jpeg",
      rating: 4.8,
      bonus: "285% up to CA$7,500 + 285 Free Spins",
      features: ["1000+ Games", "Live Casino", "VIP Program"],
      minDeposit: "CA$20",
      payoutTime: "1-3 days",
      games: 1000,
      license: "Curacao Gaming License",
      url: "https://evospin.com"
    },
    {
      id: 4,
      name: "JACKPOTCITY",
      logo: "/IMG_0129.jpeg",
      rating: 4.7,
      bonus: "100% up to CA$1,600 + 200 Free Spins",
      features: ["Microgaming", "Progressive Jackpots", "24/7 Support"],
      payoutTime: "2-4 days",
      minDeposit: "CA$10",
      games: 600,
      license: "Malta Gaming Authority",
      url: "https://jackpotcity.com"
    },
    {
      id: 10,
      name: "ROYAL VEGAS",
      logo: "/IMG_0131.jpeg",
      rating: 4.6,
      bonus: "Up to CA$1,200 Welcome Package",
      features: ["Premium Games", "Loyalty Program", "Mobile App"],
      payoutTime: "2-5 days",
      minDeposit: "CA$10",
      games: 700,
      license: "Malta Gaming Authority",
      url: "https://royalvegas.com"
    },
    {
      id: 5,
      name: "BETWAY CASINO",
      logo: "/IMG_0132.jpeg",
      rating: 4.5,
      bonus: "100% up to CA$500",
      features: ["Sports Betting", "Live Casino", "eCOGRA Certified"],
      payoutTime: "2-3 days",
      minDeposit: "CA$10",
      games: 500,
      license: "Malta Gaming Authority",
      url: "https://betway.com"
    },
    {
      id: 6,
      name: "SPIN CASINO",
      logo: "/IMG_0135.jpeg",
      rating: 4.4,
      bonus: "Up to CA$1,000 + 150 Free Spins",
      features: ["Microgaming", "Mobile Friendly", "Fast Payouts"],
      payoutTime: "1-3 days",
      minDeposit: "CA$10",
      games: 400,
      license: "Malta Gaming Authority",
      url: "https://spincasino.com"
    },
    {
      id: 7,
      name: "ONLUCK.COM",
      logo: "/IMG_0133.jpeg",
      rating: 4.9,
      bonus: "285% up to CA$9,000 + 225 Free Spins",
      features: ["Sports Betting", "Casino Games", "Live Dealers"],
      payoutTime: "1-2 days",
      minDeposit: "CA$20",
      games: 1200,
      license: "Curacao Gaming License",
      url: "https://onluck.com"
    },
    {
      id: 8,
      name: "CASINO INFINITY",
      logo: "/casino infinity.webp",
      rating: 4.7,
      bonus: "10% Cashback up to CA$200",
      features: ["No Limits", "No Restrictions", "Cashback System"],
      payoutTime: "1-3 days",
      minDeposit: "CA$10",
      games: 800,
      license: "Malta Gaming Authority",
      url: "https://casinoinfinity.com"
    },
    {
      id: 9,
      name: "GUNS BET",
      logo: "/IMG_0134.jpeg",
      rating: 4.8,
      bonus: "335% up to CA$1,675 + 300 Free Spins",
      features: ["Luck and Load Theme", "High RTP Games", "VIP Program"],
      payoutTime: "2-4 days",
      minDeposit: "CA$25",
      games: 900,
      license: "Curacao Gaming License",
      url: "https://gunsbet.com"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="glass sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2 flex-shrink-0">
              <div className="relative animate-logo-glow">
                <div className="w-12 h-12 sm:w-16 sm:h-16 relative">
                  <div className="absolute inset-0 gradient-primary rounded-3xl blur-sm opacity-60"></div>
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 gradient-primary rounded-3xl flex items-center justify-center shadow-modern transform hover:scale-110 transition-all duration-500 border-2 border-green-400/30">
                    <Crown className="w-6 h-6 sm:w-9 sm:h-9 text-white animate-crown-rotate filter drop-shadow-lg" />
                  </div>
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 gradient-accent rounded-full flex items-center justify-center animate-sparkle-burst">
                    <Sparkles className="w-2 h-2 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 gradient-gold rounded-full flex items-center justify-center animate-sparkle-burst" style={{animationDelay: '1s'}}>
                    <Sparkles className="w-1 h-1 sm:w-2 sm:h-2 text-white" />
                  </div>
                  <div className="absolute top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 gradient-secondary rounded-full flex items-center justify-center animate-sparkle-burst" style={{animationDelay: '0.5s'}}>
                    <Sparkles className="w-1 h-1 text-white" />
                  </div>
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-bold animate-text-shimmer text-modern tracking-tight">
                  TopCasinoWagers
                </div>
                <div className="text-xs text-green-600 font-bold tracking-widest animate-pulse">CANADA'S PREMIER GUIDE</div>
              </div>
            </div>
            
            <div className="hidden sm:block">
              <span className="text-sm gradient-secondary text-white px-5 py-2 rounded-full font-bold shadow-modern animate-pulse border border-green-400/30">
                🇨🇦 CANADA
              </span>
            </div>
            
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              <a href="#home" className="text-slate-700 hover:text-green-600 transition-colors font-medium">
                Home
              </a>
              <a href="#casinos" className="text-slate-700 hover:text-green-600 transition-colors font-medium">
                Casinos
              </a>
              <button 
                onClick={() => navigateToPage('bonuses')}
                className="text-slate-700 hover:text-green-600 transition-colors font-medium"
              >
                Bonuses
              </button>
              <div className="relative group">
                <button className="text-slate-700 hover:text-green-600 transition-colors font-medium flex items-center">
                  Games
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 glass rounded-xl border border-white/20 shadow-modern opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-2">
                    <button 
                      onClick={() => navigateToPage('games-slots')}
                      className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors"
                    >
                      Online Slots
                    </button>
                    <button 
                      onClick={() => navigateToPage('games-blackjack')}
                      className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors"
                    >
                      Blackjack
                    </button>
                    <button 
                      onClick={() => navigateToPage('games-roulette')}
                      className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors"
                    >
                      Roulette
                    </button>
                    <button 
                      onClick={() => navigateToPage('games-live-dealer')}
                      className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors"
                    >
                      Live Dealer
                    </button>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => navigateToPage('reviews')}
                className="text-slate-700 hover:text-green-600 transition-colors font-medium"
              >
                Reviews
              </button>
              
              <button 
                onClick={() => navigateToPage('blog')}
                className="text-slate-700 hover:text-green-600 transition-colors font-medium"
              >
                Blog
              </button>

              {/* Hamburger Menu */}
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center text-slate-700 hover:text-green-600 transition-colors font-medium"
                >
                  More
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 glass rounded-2xl shadow-modern border border-white/20 py-2 z-50">
                    <button
                      onClick={() => navigateToPage('about')}
                      className="w-full flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <Users className="w-4 h-4 mr-3" />
                      About Us
                    </button>
                    <button
                      onClick={() => navigateToPage('blog')}
                      className="w-full flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <BookOpen className="w-4 h-4 mr-3" />
                      Blog
                    </button>
                    <button
                      onClick={() => navigateToPage('faq')}
                      className="w-full flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <HelpCircle className="w-4 h-4 mr-3" />
                      FAQ
                    </button>
                    <button
                      onClick={() => navigateToPage('responsible-gaming')}
                      className="w-full flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <Heart className="w-4 h-4 mr-3" />
                      Responsible Gaming
                    </button>
                    <button
                      onClick={() => navigateToPage('privacy')}
                      className="w-full flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <FileText className="w-4 h-4 mr-3" />
                      Privacy Policy
                    </button>
                    <button
                      onClick={() => navigateToPage('contact')}
                      className="w-full flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-3" />
                      Contact
                    </button>
                  </div>
                )}
              </div>
            </nav>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-green-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/20">
              <div className="flex flex-col space-y-2 pt-4">
                <a 
                  href="#home" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 transition-colors rounded-xl"
                >
                  <Trophy className="w-4 h-4 mr-3" />
                  Home
                </a>
                <a 
                  href="#casinos" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 transition-colors rounded-xl"
                >
                  <Crown className="w-4 h-4 mr-3" />
                  Casinos
                </a>
                <button 
                  onClick={() => navigateToPage('bonuses')}
                  className="flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 transition-colors rounded-xl text-left"
                >
                  <Gift className="w-4 h-4 mr-3" />
                  Bonuses
                </button>
                <button 
                  onClick={() => navigateToPage('reviews')}
                  className="flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 transition-colors rounded-xl text-left"
                >
                  <Star className="w-4 h-4 mr-3" />
                  Reviews
                </button>
                <button
                  onClick={() => navigateToPage('about')}
                  className="flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 transition-colors rounded-xl text-left"
                >
                  <Users className="w-4 h-4 mr-3" />
                  About Us
                </button>
                <button
                  onClick={() => navigateToPage('faq')}
                  className="flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 transition-colors rounded-xl text-left"
                >
                  <HelpCircle className="w-4 h-4 mr-3" />
                  FAQ
                </button>
                <button
                  onClick={() => navigateToPage('responsible-gaming')}
                  className="flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 transition-colors rounded-xl text-left"
                >
                  <Heart className="w-4 h-4 mr-3" />
                  Responsible Gaming
                </button>
                <button
                  onClick={() => navigateToPage('privacy')}
                  className="flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 transition-colors rounded-xl text-left"
                >
                  <FileText className="w-4 h-4 mr-3" />
                  Privacy Policy
                </button>
                <button
                  onClick={() => navigateToPage('contact')}
                  className="flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 transition-colors rounded-xl text-left"
                >
                  <Phone className="w-4 h-4 mr-3" />
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        {/* SEO Content - Hidden but crawlable */}
        <div className="sr-only">
          <h1>Best Online Casinos Canada 2024 - TopCasinoWagers Expert Reviews</h1>
          <p>Discover Canada's top-rated online casinos with exclusive bonuses, expert reviews, and fast CAD payouts. Licensed casinos accepting Canadian players with Interac e-Transfer, credit cards, and cryptocurrency. Compare welcome bonuses up to CA$9,000, free spins, and cashback offers from trusted casino brands like NEOSPIN, EVOSPIN, ONLUCK, and more.</p>
          <h2>Featured Canadian Online Casinos</h2>
          <ul>
            <li>NEOSPIN Casino - 100% Bonus + 100 Free Spins up to CA$500</li>
            <li>EVOSPIN Casino - 285% Bonus + 285 Free Spins up to CA$7,500</li>
            <li>ONLUCK Casino - 285% Bonus + 225 Free Spins up to CA$9,000</li>
            <li>Casino Infinity - 10% Weekly Cashback up to CA$200</li>
            <li>Guns Bet Casino - 335% Bonus + 300 Free Spins up to CA$1,675</li>
          </ul>
          <h2>Why Choose TopCasinoWagers for Casino Reviews?</h2>
          <p>Expert analysis, Canadian focus, licensed casinos only, exclusive bonuses, fast payouts, CAD currency support, Interac e-Transfer banking, mobile optimization, 24/7 customer support, responsible gaming tools.</p>
        </div>
        
        {/* Casino Background Images */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 via-transparent to-red-500/20 animate-pulse"></div>
          </div>
        </div>
        <div className="absolute inset-0">
          {/* Casino Graphics Background */}
          <div className="absolute top-10 left-10 w-40 h-40 opacity-40 animate-float transform hover:scale-110 transition-all duration-700">
            <img 
              src="/IMG_0138 copy.jpeg" 
              alt="Casino graphics" 
              className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-yellow-400/30 animate-pulse-glow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
          </div>
          <div className="absolute top-20 right-20 w-48 h-48 opacity-35 animate-float-delayed transform hover:scale-110 transition-all duration-700">
            <img 
              src="/IMG_0137 copy.jpeg" 
              alt="Casino graphics" 
              className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-green-400/30 animate-shimmer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full"></div>
          </div>
          <div className="absolute bottom-20 left-20 w-44 h-44 opacity-45 animate-float transform rotate-12 hover:rotate-0 transition-all duration-700">
            <img 
              src="/IMG_0136 copy.jpeg" 
              alt="Casino graphics" 
              className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-red-400/30 animate-card-flip"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
          <div className="absolute bottom-32 right-32 w-36 h-36 opacity-40 animate-float-delayed transform hover:scale-110 transition-all duration-700">
            <img 
              src="/IMG_0140 copy.jpeg" 
              alt="Casino graphics" 
              className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-blue-400/30 animate-pulse-glow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
          </div>
          
          {/* New casino image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-25 animate-float">
            <img 
              src="/IMG_0139 copy.jpeg" 
              alt="Casino graphics" 
              className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-purple-400/30 animate-shimmer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
          
          {/* Additional Casino Elements */}
          <div className="absolute top-1/2 left-10 w-28 h-28 opacity-30 animate-float hover:scale-125 transition-all duration-500">
            <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-2xl flex items-center justify-center animate-casino-glow border-2 border-yellow-300/50">
              <DollarSign className="w-12 h-12 text-white" />
            </div>
          </div>
          <div className="absolute top-1/3 right-10 w-24 h-24 opacity-25 animate-float-delayed hover:scale-125 transition-all duration-500">
            <div className="w-full h-full bg-gradient-to-br from-red-500 to-pink-600 rounded-xl shadow-2xl flex items-center justify-center animate-casino-glow border-2 border-red-300/50">
              <Crown className="w-10 h-10 text-white" />
            </div>
          </div>
          
          {/* Poker Chips */}
          <div className="absolute top-40 left-1/4 casino-chip bg-gradient-to-br from-blue-500 to-blue-700 opacity-35 animate-float shadow-2xl border-4 border-blue-300/50 hover:scale-110 transition-all duration-500"></div>
          <div className="absolute bottom-40 right-1/4 casino-chip bg-gradient-to-br from-red-500 to-red-700 opacity-40 animate-float-delayed shadow-2xl border-4 border-red-300/50 hover:scale-110 transition-all duration-500"></div>
          <div className="absolute top-60 right-1/3 casino-chip bg-gradient-to-br from-green-500 to-green-700 opacity-30 animate-float shadow-2xl border-4 border-green-300/50 hover:scale-110 transition-all duration-500"></div>
          <div className="absolute bottom-60 left-1/3 casino-chip bg-gradient-to-br from-purple-500 to-purple-700 opacity-35 animate-float-delayed shadow-2xl border-4 border-purple-300/50 hover:scale-110 transition-all duration-500"></div>
          <div className="absolute top-80 left-1/2 casino-chip bg-gradient-to-br from-yellow-500 to-yellow-700 opacity-30 animate-float shadow-2xl border-4 border-yellow-300/50 hover:scale-110 transition-all duration-500"></div>
          
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>
          <div className="absolute inset-0 backdrop-blur-[1px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="glass-dark rounded-2xl px-6 py-3 border