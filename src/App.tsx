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
import ExitIntentPopup from './components/ExitIntentPopup';
import { useExitIntent } from './hooks/useExitIntent';
import AboutPage from './components/AboutPage';
import BlogsPage from './components/BlogsPage';
import SEOPages from './components/SEOPages';
import CasinoLandingPages from './components/CasinoLandingPages';
import GameGuidePages from './components/GameGuidePages';
import LocationPages from './components/LocationPages';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import ResponsibleGamingPage from './components/ResponsibleGamingPage';
import BacklinkStrategy from './components/BacklinkStrategy';
import SitemapPage from './components/SitemapPage';
import BacklinkOutreachManager from './components/BacklinkOutreachManager';
import ContentCalendar from './components/ContentCalendar';

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
  const { showPopup, closePopup } = useExitIntent({ 
    enabled: currentPage === 'home',
    delay: 800,
    showOnce: true 
  });
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

  if (currentPage === 'backlink-strategy') {
    return <BacklinkStrategy onNavigateTo={navigateToPage} />;
  }

  if (currentPage === 'sitemap') {
    return <SitemapPage onNavigateHome={navigateHome} onNavigateTo={navigateToPage} />;
  }

  if (currentPage === 'backlink-outreach') {
    return <BacklinkOutreachManager />;
  }

  if (currentPage === 'content-calendar') {
    return <ContentCalendar />;
  }

  const topCasinos: Casino[] = [
    {
      id: 1,
  name: "CASINOMATE",
      logo: "/casino-mate.webp",
      rating: 4.8,
      bonus: "100% up to CA1,400 + 80 Free Spins",
      features: ["1000+ Games", "Live Casino", "VIP Program"],
      minDeposit: "CA$20",
      payoutTime: "1-3 days",
      games: 1000,
      license: "Curacao Gaming License",
      url: "https://record.jackedaffiliates.com/_NiRpjbXJyK6_kR87cWgLbmNd7ZgqdRLk/1/"
    },
    {
      id: 2,
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
      id: 3,
     name: "HOUSE OF JACK",
      logo: "/OIP.webp",
      rating: 4.4,
      bonus: "Up to CA$1,000 + 200 Free Spins",
      features: ["Microgaming", "Mobile Friendly", "Fast Payouts"],
      payoutTime: "1-3 days",
      minDeposit: "CA$10",
      games: 400,
      license: "CURACAO LICENSE",
      url: "https://record.jackedaffiliates.com/_NiRpjbXJyK5hg6WO2I1rgWNd7ZgqdRLk/1/"
    },
    {
      id: 4,
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
      url: "https://ca.royalvegascasino.com/?s=bfp49645"
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
      url: "https://betway.com/bwp/welcome-casino-ca-1000-50/en-ca/?s=bfp49645"
    },
    {
      id: 9,
      name: "SPIN CASINO",
      logo: "/IMG_0130.jpeg",
      rating: 4.4,
      bonus: "Up to CA$1,000 + 200 Free Spins",
      features: ["Microgaming", "Mobile Friendly", "Fast Payouts"],
      payoutTime: "1-3 days",
      minDeposit: "CA$10",
      games: 400,
      license: "CURACAO LICENSE",
      url: "https://www.spincasino.com/ca/?s=bfp49645"
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
      id: 6,
      name: "JACKPOTCITY",
      logo: "/IMG_0129.jpeg",
      rating: 4.8,
      bonus: "up to CA$1,600",
      features: ["Luck and Load Theme", "High RTP Games", "VIP Program"],
      payoutTime: "2-4 days",
      minDeposit: "CA$25",
      games: 900,
      license: "Curacao Gaming License",
      url: "https://www.jackpotcitycasino.com/canada/?s=bfp49645"
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
              <div className="glass-dark rounded-2xl px-6 py-3 border border-white/20 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center">
                  <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
                  <span className="text-lg font-bold">CANADA'S #1 CASINO GUIDE</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-modern drop-shadow-2xl">
              <span className="text-yellow-300 animate-neon-pulse">Top Casino</span>
              <br />
              <span className="text-white drop-shadow-lg">Wagers</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 opacity-95 max-w-4xl mx-auto text-modern drop-shadow-lg bg-black/20 rounded-2xl p-6 backdrop-blur-sm">
              🇨🇦 Discover Canada's most trusted online casinos with exclusive bonuses, 
              expert reviews, and lightning-fast payouts in Canadian dollars
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="btn-modern rounded-2xl py-4 px-8 font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  Find My Casino
                </div>
              </button>
              <button 
                onClick={() => navigateToPage('bonuses')}
                className="glass-dark border-2 border-white/30 text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-2xl backdrop-blur-sm"
              >
                <div className="flex items-center">
                  <Gift className="w-5 h-5 mr-2" />
                  View Bonuses
                </div>
              </button>
              <button 
                onClick={() => window.location.href = 'mailto:support@topcasinowagers.ca'}
                className="glass-dark border-2 border-green-400/50 text-white font-bold py-4 px-8 rounded-2xl hover:bg-green-600 hover:text-white transition-all duration-300 shadow-2xl backdrop-blur-sm"
              >
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </div>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90 bg-black/20 rounded-2xl p-4 backdrop-blur-sm max-w-2xl mx-auto">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-green-400" />
                Licensed & Regulated
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2 text-yellow-400" />
                Expert Reviewed
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-blue-400" />
                50,000+ Happy Players
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Casinos Section */}
      <section id="casinos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEO Content */}
          <div className="sr-only">
            <h2>Top 9 Online Casinos for Canadian Players 2024</h2>
            <p>Our expert team has reviewed and ranked the best online casinos accepting Canadian players. Each casino is licensed, offers CAD currency, accepts Interac e-Transfer, and provides excellent customer support for Canadian players.</p>
          </div>
          
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="glass rounded-2xl px-6 py-3 border border-slate-200">
                <div className="flex items-center">
                  <Crown className="w-6 h-6 text-yellow-500 mr-3" />
                  <span className="text-lg font-bold text-slate-900">TOP RATED CASINOS</span>
                </div>
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 text-modern">
              Canada's Best Online Casinos
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Handpicked by our experts, tested for safety, and verified for Canadian players. 
              All casinos accept CAD and offer fast, secure payouts.
            </p>
          </div>

          <div className="space-y-6">
            {topCasinos.map((casino, index) => (
              <div key={casino.id} className="modern-card shadow-modern-hover group">
                <div className="p-8">
                  <div className="grid lg:grid-cols-4 gap-8 items-center">
                    {/* Rank & Logo */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center space-x-4">
                        <div className="gradient-gold text-slate-900 rounded-2xl w-12 h-12 flex items-center justify-center font-bold text-xl shadow-modern">
                          {index + 1}
                        </div>
                        <div className="flex items-center space-x-3">
                          <img 
                            src={casino.logo} 
                            alt={`${casino.name} logo`}
                            className="w-16 h-16 rounded-2xl object-cover shadow-modern border-2 border-white/20"
                          />
                          <div>
                            <h3 className="text-xl font-bold text-slate-900">{casino.name}</h3>
                            <div className="flex items-center mt-1">
                              {renderStars(casino.rating)}
                              <span className="ml-2 text-sm font-bold text-slate-700">{casino.rating}/5</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bonus & Features */}
                    <div className="lg:col-span-2">
                      <div className="gradient-gold rounded-2xl p-4 mb-4 text-center">
                        <div className="font-bold text-slate-900 text-lg mb-1">{casino.bonus}</div>
                        <div className="text-sm text-slate-700">Min deposit: {casino.minDeposit}</div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <div className="font-semibold text-slate-900">{casino.games}+</div>
                          <div className="text-slate-600">Games</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-green-600">{casino.payoutTime}</div>
                          <div className="text-slate-600">Payout</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-blue-600">Licensed</div>
                          <div className="text-slate-600">Secure</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {casino.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="lg:col-span-1">
                      <div className="space-y-3">
                        <a
                          href={casino.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full btn-modern rounded-2xl py-4 font-bold shadow-modern-hover transform hover:scale-105 transition-all duration-300 block text-center"
                        >
                          <div className="flex items-center justify-center">
                            <Play className="w-5 h-5 mr-2" />
                            Play Now
                          </div>
                        </a>
                        <button 
                          onClick={() => setCurrentPage('reviews')}
                          className="w-full glass rounded-2xl py-3 font-semibold text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors"
                        >
                          <div className="flex items-center justify-center">
                            <Trophy className="w-4 h-4 mr-2" />
                            Read Review
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => navigateToPage('reviews')}
              className="btn-gold rounded-2xl py-4 px-8 font-bold shadow-modern-hover transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center">
                <ExternalLink className="w-5 h-5 mr-2" />
                View All Casino Reviews
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEO Content */}
          <div className="sr-only">
            <h2>Why TopCasinoWagers is Canada's Most Trusted Casino Review Site</h2>
            <p>Since 2019, TopCasinoWagers has been helping Canadian players find safe, licensed online casinos. Our expert reviews focus on Canadian-specific needs including CAD currency support, Interac e-Transfer banking, compliance with Canadian gambling laws, and customer support in English and French.</p>
            <h3>Our Casino Review Process</h3>
            <p>Every casino undergoes rigorous testing including account creation, deposit and withdrawal testing, game play verification, customer support evaluation, and security assessment. We only recommend casinos that meet our strict standards for Canadian players.</p>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 text-modern">
              Why Choose TopCasinoWagers?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're Canada's most trusted casino review platform, dedicated to helping you find safe, 
              exciting, and rewarding gaming experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="modern-card shadow-modern-hover text-center group">
              <div className="p-8">
                <div className="gradient-primary rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">100% Safe & Secure</h3>
                <p className="text-slate-600">Only licensed, regulated casinos that meet our strict security standards</p>
              </div>
            </div>

            <div className="modern-card shadow-modern-hover text-center group">
              <div className="p-8">
                <div className="gradient-secondary rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Canadian Focused</h3>
                <p className="text-slate-600">Specialized in Canadian players with CAD support and local payment methods</p>
              </div>
            </div>

            <div className="modern-card shadow-modern-hover text-center group">
              <div className="p-8">
                <div className="gradient-accent rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Expert Reviews</h3>
                <p className="text-slate-600">In-depth analysis by gaming professionals with years of industry experience</p>
              </div>
            </div>

            <div className="modern-card shadow-modern-hover text-center group">
              <div className="p-8">
                <div className="gradient-gold rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-slate-800" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Exclusive Bonuses</h3>
                <p className="text-slate-600">Access to special promotions and bonuses you won't find anywhere else</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Bonuses Preview */}
      <section id="bonuses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEO Content */}
          <div className="sr-only">
            <h2>Best Casino Bonuses for Canadian Players January 2024</h2>
            <p>Exclusive casino bonuses available only to TopCasinoWagers visitors. All bonuses are verified, tested, and available to Canadian players with CAD currency support.</p>
            <h3>Types of Casino Bonuses Available</h3>
            <ul>
              <li>Welcome Bonuses - Match your first deposit up to CA$9,000</li>
              <li>Free Spins - Up to 300 free spins on popular slot games</li>
              <li>No Deposit Bonuses - Free money to try casinos risk-free</li>
              <li>Cashback Bonuses - Get percentage of losses back weekly</li>
              <li>Reload Bonuses - Ongoing bonuses for existing players</li>
              <li>VIP Bonuses - Exclusive offers for high-value players</li>
            </ul>
          </div>
          
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="glass rounded-2xl px-6 py-3 border border-slate-200">
                <div className="flex items-center">
                  <Gift className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-lg font-bold text-slate-900">EXCLUSIVE BONUSES</span>
                </div>
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 text-modern">
              Latest Casino Bonuses
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Grab these exclusive bonus offers available only to TopCasinoWagers visitors. 
              Limited time deals with the best terms in Canada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="modern-card shadow-modern-hover group">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <img src="/neospin.jpg" alt="NEOSPIN" className="w-12 h-12 rounded-xl mr-4" />
                  <div>
                    <h3 className="font-bold text-slate-900">NEOSPIN</h3>
                    <div className="flex items-center">
                      {renderStars(4.9)}
                      <span className="ml-2 text-sm text-slate-600">4.9/5</span>
                    </div>
                  </div>
                </div>
                <div className="gradient-primary rounded-2xl p-4 text-white text-center mb-4">
                  <div className="text-lg font-bold">100% Match Bonus</div>
                  <div className="text-sm opacity-90">up to CA$500 + 100 Free Spins</div>
                </div>
                <div className="space-y-2 text-sm text-slate-600 mb-4">
                  <div className="flex justify-between">
                    <span>Min Deposit:</span>
                    <span className="font-semibold">CA$10</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wagering:</span>
                    <span className="font-semibold">35x</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Valid:</span>
                    <span className="font-semibold">30 days</span>
                  </div>
                </div>
                <button className="w-full btn-modern rounded-xl py-3 font-semibold mb-3">
                  <Play className="w-4 h-4 mr-2 inline" />
                  Play Now
                </button>
                <button 
                  onClick={() => setCurrentPage('reviews')}
                  className="w-full glass rounded-xl py-3 font-semibold text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <Trophy className="w-4 h-4 mr-2 inline" />
                  Read Review
                </button>
              </div>
            </div>

            <div className="modern-card shadow-modern-hover group">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <img src="/IMG_0128.jpeg" alt="EVOSPIN" className="w-12 h-12 rounded-xl mr-4" />
                  <div>
                    <h3 className="font-bold text-slate-900">EVOSPIN</h3>
                    <div className="flex items-center">
                      {renderStars(4.8)}
                      <span className="ml-2 text-sm text-slate-600">4.8/5</span>
                    </div>
                  </div>
                </div>
                <div className="gradient-secondary rounded-2xl p-4 text-white text-center mb-4">
                  <div className="text-lg font-bold">285% Mega Bonus</div>
                  <div className="text-sm opacity-90">up to CA$7,500 + 285 Free Spins</div>
                </div>
                <div className="space-y-2 text-sm text-slate-600 mb-4">
                  <div className="flex justify-between">
                    <span>Min Deposit:</span>
                    <span className="font-semibold">CA$20</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wagering:</span>
                    <span className="font-semibold">40x</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Valid:</span>
                    <span className="font-semibold">30 days</span>
                  </div>
                </div>
                <button className="w-full btn-modern rounded-xl py-3 font-semibold mb-3">
                  <Play className="w-4 h-4 mr-2 inline" />
                  Play Now
                </button>
                <button 
                  onClick={() => setCurrentPage('reviews')}
                  className="w-full glass rounded-xl py-3 font-semibold text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <Trophy className="w-4 h-4 mr-2 inline" />
                  Read Review
                </button>
              </div>
            </div>

            <div className="modern-card shadow-modern-hover group">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <img src="/IMG_0133.jpeg" alt="ONLUCK.COM" className="w-12 h-12 rounded-xl mr-4" />
                  <div>
                    <h3 className="font-bold text-slate-900">ONLUCK.COM</h3>
                    <div className="flex items-center">
                      {renderStars(4.9)}
                      <span className="ml-2 text-sm text-slate-600">4.9/5</span>
                    </div>
                  </div>
                </div>
                <div className="gradient-accent rounded-2xl p-4 text-white text-center mb-4">
                  <div className="text-lg font-bold">285% Ultimate Bonus</div>
                  <div className="text-sm opacity-90">up to CA$9,000 + 225 Free Spins</div>
                </div>
                <div className="space-y-2 text-sm text-slate-600 mb-4">
                  <div className="flex justify-between">
                    <span>Min Deposit:</span>
                    <span className="font-semibold">CA$20</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wagering:</span>
                    <span className="font-semibold">35x</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Valid:</span>
                    <span className="font-semibold">45 days</span>
                  </div>
                </div>
                <button className="w-full btn-modern rounded-xl py-3 font-semibold mb-3">
                  <Play className="w-4 h-4 mr-2 inline" />
                  Play Now
                </button>
                <button 
                  onClick={() => setCurrentPage('reviews')}
                  className="w-full glass rounded-xl py-3 font-semibold text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <Trophy className="w-4 h-4 mr-2 inline" />
                  Read Review
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => navigateToPage('bonuses')}
              className="btn-gold rounded-2xl py-4 px-8 font-bold shadow-modern-hover transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center">
                <Gift className="w-5 h-5 mr-2" />
                View All Bonuses
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 text-modern">
              What We Offer
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to make informed decisions about online casino gaming in Canada
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="modern-card shadow-modern-hover group">
              <div className="p-8 text-center">
                <div className="gradient-primary rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Expert Reviews</h3>
                <p className="text-slate-600 mb-6">In-depth analysis of Canada's top online casinos with detailed ratings and player feedback.</p>
                <button 
                  onClick={() => navigateToPage('reviews')}
                  className="btn-modern rounded-2xl py-3 px-6 font-semibold"
                >
                  Read Reviews
                </button>
              </div>
            </div>

            <div className="modern-card shadow-modern-hover group">
              <div className="p-8 text-center">
                <div className="gradient-secondary rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Gift className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Exclusive Bonuses</h3>
                <p className="text-slate-600 mb-6">Access the best casino bonuses and promotions available exclusively for Canadian players.</p>
                <button 
                  onClick={() => navigateToPage('bonuses')}
                  className="btn-modern rounded-2xl py-3 px-6 font-semibold"
                >
                  View Bonuses
                </button>
              </div>
            </div>

            <div className="modern-card shadow-modern-hover group">
              <div className="p-8 text-center">
                <div className="gradient-accent rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Gaming Guides</h3>
                <p className="text-slate-600 mb-6">Learn strategies and tips for popular casino games from our expert team.</p>
                <button 
                  onClick={() => navigateToPage('guide')}
                  className="btn-modern rounded-2xl py-3 px-6 font-semibold"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Sections */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Popular Casino Games in Canada</h2>
            <p className="text-xl text-slate-600">Discover the most popular casino games among Canadian players</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="modern-card shadow-modern-hover text-center group cursor-pointer" onClick={() => navigateToPage('games-slots')}>
              <div className="p-6">
                <div className="gradient-primary rounded-3xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Online Slots</h3>
                <p className="text-slate-600 text-sm">Thousands of slot games with progressive jackpots</p>
              </div>
            </div>

            <div className="modern-card shadow-modern-hover text-center group cursor-pointer" onClick={() => navigateToPage('games-blackjack')}>
              <div className="p-6">
                <div className="gradient-secondary rounded-3xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Blackjack</h3>
                <p className="text-slate-600 text-sm">Master the art of 21 with our strategy guides</p>
              </div>
            </div>

            <div className="modern-card shadow-modern-hover text-center group cursor-pointer" onClick={() => navigateToPage('games-roulette')}>
              <div className="p-6">
                <div className="gradient-accent rounded-3xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <RefreshCw className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Roulette</h3>
                <p className="text-slate-600 text-sm">European, American, and French roulette variants</p>
              </div>
            </div>

            <div className="modern-card shadow-modern-hover text-center group cursor-pointer" onClick={() => navigateToPage('games-live-dealer')}>
              <div className="p-6">
                <div className="gradient-gold rounded-3xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-slate-800" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Live Dealer</h3>
                <p className="text-slate-600 text-sm">Real dealers streaming live from studios</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provincial Focus Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Casino Gaming Across Canada</h2>
            <p className="text-xl text-slate-600">Tailored information for players in every province</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="modern-card shadow-modern-hover group cursor-pointer" onClick={() => navigateToPage('location-ontario')}>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900">Ontario Casinos</h3>
                </div>
                <p className="text-slate-600 text-sm">Regulated online casinos for Ontario players with iGaming Ontario licensing</p>
              </div>
            </div>

            <div className="modern-card shadow-modern-hover group cursor-pointer" onClick={() => navigateToPage('location-british-columbia')}>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900">British Columbia</h3>
                </div>
                <p className="text-slate-600 text-sm">Best online casinos for BC players with local banking options</p>
              </div>
            </div>

            <div className="modern-card shadow-modern-hover group cursor-pointer" onClick={() => navigateToPage('location-alberta')}>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900">Alberta Casinos</h3>
                </div>
                <p className="text-slate-600 text-sm">Top-rated casinos accepting Alberta players with CAD support</p>
              </div>
            </div>

            <div className="modern-card shadow-modern-hover group cursor-pointer" onClick={() => navigateToPage('location-quebec')}>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900">Quebec Casinos</h3>
                </div>
                <p className="text-slate-600 text-sm">French and English language casinos for Quebec players</p>
              </div>
            </div>

            <div className="modern-card shadow-modern-hover group cursor-pointer" onClick={() => navigateToPage('location-manitoba')}>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900">Manitoba Gaming</h3>
                </div>
                <p className="text-slate-600 text-sm">Licensed casinos for Manitoba residents with local support</p>
              </div>
            </div>

            <div className="modern-card shadow-modern-hover group cursor-pointer" onClick={() => navigateToPage('location-atlantic-canada')}>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-teal-600 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900">Atlantic Canada</h3>
                </div>
                <p className="text-slate-600 text-sm">Best casinos for players in Nova Scotia, New Brunswick, PEI, and Newfoundland</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* SEO Content Sections */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Canadian Casino Guide */}
            <div className="modern-card shadow-modern p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Complete Guide to Online Casinos in Canada</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Online gambling in Canada operates under a complex regulatory framework where each province 
                  has jurisdiction over gambling within its borders. Canadian players can legally access 
                  offshore licensed casinos that accept Canadian players and offer CAD currency support.
                </p>
                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Legal Online Casinos for Canadians</h3>
                <p>
                  Licensed casinos from jurisdictions like Malta, UK, and Curacao are legal for Canadian 
                  players. These casinos must meet strict standards for player protection, fair gaming, 
                  and financial security. All casinos we recommend hold valid licenses and welcome Canadian players.
                </p>
                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Canadian Banking Methods</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Interac e-Transfer - Most popular deposit and withdrawal method</li>
                  <li>Credit/Debit Cards - Visa and Mastercard widely accepted</li>
                  <li>E-wallets - PayPal, Skrill, Neteller for fast transactions</li>
                  <li>Bank Transfers - Direct bank-to-bank transfers</li>
                  <li>Cryptocurrency - Bitcoin, Ethereum for anonymous transactions</li>
                </ul>
              </div>
            </div>
            
            {/* Casino Games Guide */}
            <div className="modern-card shadow-modern p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Popular Casino Games for Canadian Players</h2>
              <div className="space-y-4 text-slate-600">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Slot Machines</h3>
                <p>
                  Online slots are the most popular casino games among Canadian players. Top providers 
                  include NetEnt, Microgaming, Pragmatic Play, and Play'n GO. Popular Canadian slot 
                  themes include hockey, maple leaf, and winter-themed games.
                </p>
                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Table Games</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Blackjack - Classic 21 with Canadian dealer options</li>
                  <li>Roulette - European and American variants available</li>
                  <li>Baccarat - High-limit tables for VIP players</li>
                  <li>Poker - Texas Hold'em and Caribbean Stud</li>
                </ul>
                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Live Dealer Games</h3>
                <p>
                  Live dealer games stream real dealers from professional studios. Canadian players 
                  can interact with dealers and other players in real-time. Popular live games include 
                  blackjack, roulette, baccarat, and game shows like Dream Catcher and Monopoly Live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Provincial Casino Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Online Casinos by Canadian Province</h2>
            <p className="text-xl text-slate-600">
              Casino regulations and availability vary by province. Here's what players need to know.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">🍁 Ontario Casinos</h3>
              <p className="text-slate-600 mb-4">
                Ontario has its own regulated market through iGaming Ontario. Players can access 
                both provincial and offshore licensed casinos.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Regulated by AGCO</li>
                <li>• Licensed operators available</li>
                <li>• Offshore casinos still accessible</li>
              </ul>
            </div>
            
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">🏔️ British Columbia Casinos</h3>
              <p className="text-slate-600 mb-4">
                BC players can access offshore licensed casinos. PlayNow.com is the provincial option.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• BCLC operates PlayNow</li>
                <li>• Offshore casinos welcome BC players</li>
                <li>• No restrictions on international sites</li>
              </ul>
            </div>
            
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">🌾 Alberta Casinos</h3>
              <p className="text-slate-600 mb-4">
                Alberta players have access to offshore casinos and the provincial PlayAlberta site.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• AGLC regulates provincial gaming</li>
                <li>• PlayAlberta for local players</li>
                <li>• International casinos accessible</li>
              </ul>
            </div>
            
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">🦞 Atlantic Canada Casinos</h3>
              <p className="text-slate-600 mb-4">
                Players in Nova Scotia, New Brunswick, PEI, and Newfoundland can access offshore casinos.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Atlantic Lottery Corporation</li>
                <li>• Offshore casinos welcome players</li>
                <li>• Maritime-friendly banking options</li>
              </ul>
            </div>
            
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">⚜️ Quebec Casinos</h3>
              <p className="text-slate-600 mb-4">
                Quebec has Espacejeux for provincial gaming, but offshore casinos remain accessible.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Loto-Québec operates Espacejeux</li>
                <li>• French language support available</li>
                <li>• International sites accessible</li>
              </ul>
            </div>
            
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">🌾 Saskatchewan & Manitoba</h3>
              <p className="text-slate-600 mb-4">
                Prairie provinces allow access to offshore licensed casinos with no restrictions.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• No provincial online casinos</li>
                <li>• Offshore casinos fully accessible</li>
                <li>• Western Canada friendly sites</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="glass-dark rounded-2xl px-6 py-3 border border-white/20">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-modern">
              Stay Updated
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Get exclusive casino bonuses, expert reviews, and the latest Canadian gaming news 
              delivered straight to your inbox.
            </p>
            
            <div className="max-w-md mx-auto mb-8">
              <div className="glass-dark rounded-2xl p-2 border border-white/20">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="w-full bg-transparent text-white placeholder-white/60 px-4 py-3 focus:outline-none"
                />
              </div>
            </div>
            
            <button 
              onClick={() => window.location.href = 'mailto:support@topcasinowagers.ca?subject=Newsletter Subscription&body=Please subscribe me to the TopCasinoWagers newsletter for exclusive bonuses and updates.'}
              className="btn-gold rounded-2xl py-4 px-8 font-bold shadow-modern-hover transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Subscribe Now
              </div>
            </button>
            
            <p className="text-sm opacity-70 mt-4">
              🔒 We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center mr-3">
                  <Crown className="w-7 h-7 text-white" />
                </div>
                <div className="text-xl font-bold">TopCasinoWagers</div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Canada's premier online casino review platform, helping players find safe and exciting gaming experiences since 2019.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 glass-dark rounded-lg flex items-center justify-center">
                  <span className="text-xs">🇨🇦</span>
                </div>
              </div>
            </div>

            {/* VICIBET Bonus */}
            <div className="modern-card shadow-modern-hover group">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src="/IMG_0160.jpeg" 
                    alt="VICIBET Casino"
                    className="w-16 h-16 rounded-2xl object-cover shadow-modern border-2 border-white/20 mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">VICIBET</h3>
                    <div className="flex items-center">
                      {renderStars(4.7)}
                      <span className="ml-2 text-sm font-bold text-slate-700">4.7/5</span>
                    </div>
                  </div>
                </div>
                
                <div className="gradient-gold rounded-2xl p-6 mb-6 text-center">
                  <div className="text-sm font-medium text-slate-800 mb-2">EXCLUSIVE BONUS</div>
                  <div className="text-2xl font-bold text-slate-900 mb-2">325% up to €3,000 + 300 Free Spins + 1 Bonus Crab or Sport 100% up to €100</div>
                  <div className="text-lg font-semibold text-slate-800">up to CA$1,000</div>
                  <div className="text-sm text-slate-700 mt-2">Min deposit: CA$20</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">50 free spins on signup</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Malta Gaming licensed</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">VIP loyalty program</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => window.open('https://vcbt.xarvilo.com/?mid=304790_1797260', '_blank')}
                  className="w-full btn-modern rounded-2xl py-3 font-bold shadow-modern-hover transform group-hover:scale-105 transition-all duration-300 mb-3"
                >
                  <Play className="w-5 h-5 mr-2 inline" />
                  Play Now
                </button>
                <button 
                  onClick={() => setCurrentPage('reviews')}
                  className="w-full glass rounded-2xl py-3 font-semibold text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <Trophy className="w-4 h-4 mr-2 inline" />
                  Read Review
                </button>
                
                <div className="text-center mt-4">
                  <div className="text-xs text-slate-500">18+ only. Terms apply.</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Casino Reviews</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><button onClick={() => navigateToPage('reviews')} className="hover:text-white transition-colors">All Reviews</button></li>
                <li><button onClick={() => navigateToPage('casino-neospin')} className="hover:text-white transition-colors">NEOSPIN Review</button></li>
                <li><button onClick={() => navigateToPage('casino-evospin')} className="hover:text-white transition-colors">EVOSPIN Review</button></li>
                <li><button onClick={() => navigateToPage('casino-onluck')} className="hover:text-white transition-colors">ONLUCK Review</button></li>
                <li><button onClick={() => navigateToPage('casino-vicibet')} className="hover:text-white transition-colors">VICIBET Review</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Game Guides</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><button onClick={() => navigateToPage('games-slots')} className="hover:text-white transition-colors">Online Slots</button></li>
                <li><button onClick={() => navigateToPage('games-blackjack')} className="hover:text-white transition-colors">Blackjack Guide</button></li>
                <li><button onClick={() => navigateToPage('games-roulette')} className="hover:text-white transition-colors">Roulette Strategy</button></li>
                <li><button onClick={() => navigateToPage('games-live-dealer')} className="hover:text-white transition-colors">Live Dealer Games</button></li>
                <li><button onClick={() => navigateToPage('guide')} className="hover:text-white transition-colors">Complete Guide</button></li>
                <li><button onClick={() => navigateToPage('sitemap')} className="hover:text-white transition-colors font-medium text-green-300">📍 Site Navigation</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Provincial Guides</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><button onClick={() => navigateToPage('location-ontario')} className="hover:text-white transition-colors">Ontario Casinos</button></li>
                <li><button onClick={() => navigateToPage('location-british-columbia')} className="hover:text-white transition-colors">BC Casinos</button></li>
                <li><button onClick={() => navigateToPage('location-alberta')} className="hover:text-white transition-colors">Alberta Gaming</button></li>
                <li><button onClick={() => navigateToPage('location-quebec')} className="hover:text-white transition-colors">Quebec Casinos</button></li>
                <li><button onClick={() => navigateToPage('location-atlantic-canada')} className="hover:text-white transition-colors">Atlantic Canada</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8">
            <div className="flex flex-wrap justify-between items-center">
              <div className="text-sm text-slate-400">
                © 2024 TopCasinoWagers. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm text-slate-400">
                <button onClick={() => navigateToPage('sitemap')} className="hover:text-white transition-colors">Sitemap</button>
                <button onClick={() => navigateToPage('privacy-policy')} className="hover:text-white transition-colors">Privacy Policy</button>
                <button onClick={() => navigateToPage('responsible-gaming')} className="hover:text-white transition-colors">Responsible Gaming</button>
                <button onClick={() => navigateToPage('contact')} className="hover:text-white transition-colors">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Exit Intent Popup */}
      <ExitIntentPopup 
        isVisible={showPopup} 
        onClose={closePopup} 
      />
    </div>
  );
}

export default App;