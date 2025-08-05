import React, { useState } from 'react';
import { 
  Gift, 
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
  DollarSign,
  Timer,
  Trophy,
  Target,
  Percent,
  RefreshCw,
  Heart,
  Calendar,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
  Info
} from 'lucide-react';

interface BonusesPageProps {
  onNavigateHome?: () => void;
  onNavigateTo?: (page: string) => void;
}

interface BonusOffer {
  id: number;
  casino: string;
  logo: string;
  bonusType: string;
  title: string;
  amount: string;
  percentage: number;
  freeSpins?: number;
  minDeposit: string;
  wagering: string;
  validDays: number;
  gameRestrictions: string[];
  promoCode?: string;
  rating: number;
  features: string[];
  terms: string[];
  category: 'welcome' | 'no-deposit' | 'free-spins' | 'cashback' | 'reload' | 'vip';
}

const BonusesPage: React.FC<BonusesPageProps> = ({ onNavigateHome, onNavigateTo }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedBonus, setExpandedBonus] = useState<number | null>(null);

  const bonusesMetadata = {
    title: "Best Casino Bonuses Canada 2024 - Exclusive Offers | TopCasinoWagers",
    description: "Discover the best casino bonuses for Canadian players. Exclusive welcome bonuses, free spins, no deposit offers, and cashback deals from top-rated casinos.",
    keywords: "casino bonuses Canada, welcome bonus, free spins Canada, no deposit bonus, casino promotions, Canadian casino offers, exclusive bonuses"
  };

  const bonusOffers: BonusOffer[] = [
    {
      id: 1,
      casino: "NEOSPIN",
      logo: "/neospin.jpg",
      bonusType: "Welcome Bonus",
      title: "100% Match + 100 Free Spins",
      amount: "up to CA$500",
      percentage: 100,
      freeSpins: 100,
      minDeposit: "CA$10",
      wagering: "35x",
      validDays: 30,
      gameRestrictions: ["Slots", "Keno"],
      promoCode: "TCWSPIN",
      rating: 4.9,
      features: ["Instant bonus", "No max cashout", "Mobile friendly"],
      terms: ["18+ only", "New players only", "Wagering requirements apply"],
      category: 'welcome'
    },
    {
      id: 2,
      casino: "EVOSPIN",
      logo: "/IMG_0128.jpeg",
      bonusType: "Mega Welcome Package",
      title: "285% Match + 285 Free Spins",
      amount: "up to CA$7,500",
      percentage: 285,
      freeSpins: 285,
      minDeposit: "CA$20",
      wagering: "40x",
      validDays: 30,
      gameRestrictions: ["Slots", "Scratch Cards"],
      promoCode: "TCWEVO",
      rating: 4.8,
      features: ["Highest percentage", "Massive free spins", "VIP treatment"],
      terms: ["18+ only", "New players only", "Higher wagering requirements"],
      category: 'welcome'
    },
    {
      id: 3,
      casino: "ONLUCK.COM",
      logo: "/IMG_0133.jpeg",
      bonusType: "Ultimate Welcome Bonus",
      title: "285% Match + 225 Free Spins",
      amount: "up to CA$9,000",
      percentage: 285,
      freeSpins: 225,
      minDeposit: "CA$20",
      wagering: "35x",
      validDays: 45,
      gameRestrictions: ["Slots", "Live Casino"],
      promoCode: "TCWLUCK",
      rating: 4.9,
      features: ["Highest amount", "Sports betting included", "Extended validity"],
      terms: ["18+ only", "New players only", "Combo casino + sports"],
      category: 'welcome'
    },
    {
      id: 4,
      casino: "CASINO INFINITY",
      logo: "/casino infinity.webp",
      bonusType: "Cashback Bonus",
      title: "10% Weekly Cashback",
      amount: "up to CA$200",
      percentage: 10,
      minDeposit: "CA$10",
      wagering: "No wagering",
      validDays: 7,
      gameRestrictions: ["All games"],
      rating: 4.7,
      features: ["No wagering", "Weekly cashback", "All games eligible"],
      terms: ["18+ only", "Minimum loss required", "Paid weekly"],
      category: 'cashback'
    },
    {
      id: 5,
      casino: "GUNS BET",
      logo: "/IMG_0134.jpeg",
      bonusType: "Explosive Welcome",
      title: "335% Match + 300 Free Spins",
      amount: "up to CA$1,675",
      percentage: 335,
      freeSpins: 300,
      minDeposit: "CA$25",
      wagering: "45x",
      validDays: 30,
      gameRestrictions: ["Slots only"],
      promoCode: "TCWGUNS",
      rating: 4.8,
      features: ["Highest percentage bonus", "300 free spins", "Unique theme"],
      terms: ["18+ only", "New players only", "Slots only"],
      category: 'welcome'
    },
    {
      id: 6,
      casino: "JACKPOTCITY",
      logo: "/IMG_0129.jpeg",
      bonusType: "Welcome Package",
      title: "100% Match + 200 Free Spins",
      amount: "up to CA$1,600",
      percentage: 100,
      freeSpins: 200,
      minDeposit: "CA$10",
      wagering: "35x",
      validDays: 30,
      gameRestrictions: ["Microgaming slots"],
      rating: 4.7,
      features: ["Microgaming exclusive", "Progressive jackpots", "Trusted brand"],
      terms: ["18+ only", "New players only", "Microgaming games only"],
      category: 'welcome'
    },
    {
      id: 7,
      casino: "SPIN CASINO",
      logo: "/IMG_0135.jpeg",
      bonusType: "No Deposit Bonus",
      title: "25 Free Spins No Deposit",
      amount: "CA$25 value",
      percentage: 0,
      freeSpins: 25,
      minDeposit: "CA$0",
      wagering: "50x",
      validDays: 7,
      gameRestrictions: ["Selected slots"],
      rating: 4.6,
      features: ["No deposit required", "Try before you buy", "Quick registration"],
      terms: ["18+ only", "New players only", "Higher wagering"],
      category: 'no-deposit'
    },
    {
      id: 8,
      casino: "ROYAL VEGAS",
      logo: "/IMG_0131.jpeg",
      bonusType: "Reload Bonus",
      title: "50% Weekend Reload",
      amount: "up to CA$300",
      percentage: 50,
      minDeposit: "CA$20",
      wagering: "30x",
      validDays: 3,
      gameRestrictions: ["All games"],
      promoCode: "WEEKEND50",
      rating: 4.5,
      features: ["Weekend special", "All games", "Lower wagering"],
      terms: ["18+ only", "Existing players", "Weekends only"],
      category: 'reload'
    },
    {
      id: 9,
      casino: "BETWAY CASINO",
      logo: "/IMG_0132.jpeg",
      bonusType: "Free Spins Special",
      title: "250 Free Spins",
      amount: "CA$2.50 per spin",
      percentage: 0,
      freeSpins: 250,
      minDeposit: "CA$10",
      wagering: "35x",
      validDays: 14,
      gameRestrictions: ["NetEnt slots"],
      rating: 4.6,
      features: ["High value spins", "NetEnt games", "Sports combo"],
      terms: ["18+ only", "New players only", "NetEnt slots only"],
      category: 'free-spins'
    },
    {
      id: 10,
      casino: "VICIBET",
      logo: "/IMG_0160.jpeg",
      bonusType: "Welcome Bonus",
      title: "100% Match + 50 Free Spins",
      amount: "up to CA$1,000",
      percentage: 100,
      freeSpins: 50,
      minDeposit: "CA$20",
      wagering: "35x",
      validDays: 30,
      gameRestrictions: ["Slots", "Table Games"],
      promoCode: "TCWVICI",
      rating: 4.7,
      features: ["100% match bonus", "50 free spins", "All major games"],
      terms: ["18+ only", "New players only", "Wagering requirements apply"],
      category: 'welcome'
    }
  ];

  const bonusCategories = [
    { id: 'all', name: 'All Bonuses', icon: Gift },
    { id: 'welcome', name: 'Welcome Bonuses', icon: Star },
    { id: 'no-deposit', name: 'No Deposit', icon: Zap },
    { id: 'free-spins', name: 'Free Spins', icon: RefreshCw },
    { id: 'cashback', name: 'Cashback', icon: DollarSign },
    { id: 'reload', name: 'Reload Bonuses', icon: RefreshCw },
    { id: 'vip', name: 'VIP Bonuses', icon: Crown }
  ];

  const filteredBonuses = bonusOffers.filter(bonus => {
    const matchesCategory = selectedCategory === 'all' || bonus.category === selectedCategory;
    const matchesSearch = bonus.casino.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bonus.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const getBonusTypeColor = (category: string) => {
    switch (category) {
      case 'welcome': return 'gradient-primary';
      case 'no-deposit': return 'gradient-accent';
      case 'free-spins': return 'gradient-secondary';
      case 'cashback': return 'gradient-gold';
      case 'reload': return 'gradient-primary';
      case 'vip': return 'gradient-gold';
      default: return 'gradient-primary';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Bonuses Page Meta Tags */}
      <div style={{ display: 'none' }}>
        <title>{bonusesMetadata.title}</title>
        <meta name="description" content={bonusesMetadata.description} />
        <meta name="keywords" content={bonusesMetadata.keywords} />
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
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 gradient-gold rounded-full flex items-center justify-center animate-sparkle-burst" style={{animationDelay: '1s'}}>
                      <Sparkles className="w-2 h-2 text-white" />
                    </div>
                    <div className="absolute top-1 -right-1 w-3 h-3 gradient-secondary rounded-full flex items-center justify-center animate-sparkle-burst" style={{animationDelay: '0.5s'}}>
                      <Sparkles className="w-1 h-1 text-white" />
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
              <span className="ml-6 text-sm gradient-secondary text-white px-5 py-2 rounded-full font-bold shadow-modern animate-pulse border border-green-400/30">
                🇨🇦 CANADA
              </span>
            </button>
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={onNavigateHome}
                className="text-slate-700 hover:text-green-600 transition-colors font-medium"
              >
                Home
              </button>
              <a href="#casinos" className="text-slate-700 hover:text-green-600 transition-colors font-medium">
                Casinos
              </a>
              <span className="text-green-600 font-semibold font-medium">
                Bonuses
              </span>
              <button 
                onClick={() => onNavigateTo?.('reviews')}
                className="text-slate-700 hover:text-green-600 transition-colors font-medium"
              >
                Reviews
              </button>
              <button 
                onClick={() => onNavigateTo?.('about')}
                className="text-slate-700 hover:text-green-600 transition-colors font-medium"
              >
                About
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-24 h-24 gradient-accent rounded-3xl opacity-20 animate-float transform rotate-45"></div>
          <div className="absolute bottom-24 right-16 w-32 h-32 gradient-secondary rounded-full opacity-15 animate-float-delayed"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="glass-dark rounded-2xl px-6 py-3 border border-white/20">
                <div className="flex items-center">
                  <Gift className="w-8 h-8 text-yellow-400 mr-3" />
                  <span className="text-lg font-bold">EXCLUSIVE BONUSES</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-modern">
              <span className="text-yellow-300 animate-neon-pulse">Casino</span>
              <br />
              <span className="text-white">Bonuses</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto text-modern">
              🎁 Discover the best casino bonuses for Canadian players - exclusive welcome offers, 
              free spins, and cashback deals you won't find anywhere else
            </p>

            {/* Bonus Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="glass-dark rounded-2xl px-6 py-4 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400">CA$50K+</div>
                <div className="text-sm opacity-80">Total Bonus Value</div>
              </div>
              <div className="glass-dark rounded-2xl px-6 py-4 border border-white/20">
                <div className="text-3xl font-bold text-green-400">2,500+</div>
                <div className="text-sm opacity-80">Free Spins Available</div>
              </div>
              <div className="glass-dark rounded-2xl px-6 py-4 border border-white/20">
                <div className="text-3xl font-bold text-blue-400">15+</div>
                <div className="text-sm opacity-80">Exclusive Offers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search bonuses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="text-slate-600">
              Showing {filteredBonuses.length} bonus offers
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {bonusCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white shadow-modern'
                    : 'glass border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Offers */}
      <section className="py-12 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredBonuses.map((bonus) => (
              <div key={bonus.id} className="modern-card shadow-modern-hover">
                <div className="p-8">
                  <div className="grid lg:grid-cols-4 gap-8">
                    {/* Casino Info */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center mb-4">
                        <img 
                          src={bonus.logo} 
                          alt={`${bonus.casino} logo`}
                          className="w-12 h-12 rounded-xl object-cover shadow-md border border-white/20 mr-4"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">{bonus.casino}</h3>
                          <div className="flex items-center mt-1">
                            {renderStars(bonus.rating)}
                            <span className="ml-2 text-sm font-bold text-slate-700">{bonus.rating}/5</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`${getBonusTypeColor(bonus.category)} rounded-2xl p-4 text-white text-center mb-4`}>
                        <div className="text-sm font-medium opacity-90">{bonus.bonusType}</div>
                        <div className="text-lg font-bold">{bonus.title}</div>
                        <div className="text-sm opacity-90">{bonus.amount}</div>
                      </div>

                      {bonus.promoCode && (
                        <div className="glass rounded-xl p-3 text-center border border-slate-200 mb-4">
                          <div className="text-xs text-slate-600 mb-1">Bonus Code:</div>
                          <div className="text-lg font-bold text-green-600">{bonus.promoCode}</div>
                        </div>
                      )}
                    </div>

                    {/* Bonus Details */}
                    <div className="lg:col-span-2">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-3">Bonus Details</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-600">Percentage:</span>
                              <span className="font-semibold">{bonus.percentage}%</span>
                            </div>
                            {bonus.freeSpins && (
                              <div className="flex justify-between">
                                <span className="text-slate-600">Free Spins:</span>
                                <span className="font-semibold">{bonus.freeSpins}</span>
                              </div>
                            )}
                            <div className="flex justify-between">
                              <span className="text-slate-600">Min Deposit:</span>
                              <span className="font-semibold">{bonus.minDeposit}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Wagering:</span>
                              <span className="font-semibold text-orange-600">{bonus.wagering}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Valid for:</span>
                              <span className="font-semibold">{bonus.validDays} days</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-3">Features</h4>
                          <div className="space-y-2">
                            {bonus.features.map((feature, index) => (
                              <div key={index} className="flex items-center text-sm text-green-600">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                {feature}
                              </div>
                            ))}
                          </div>
                          
                          <h4 className="font-semibold text-slate-900 mb-2 mt-4">Game Restrictions</h4>
                          <div className="flex flex-wrap gap-2">
                            {bonus.gameRestrictions.map((game, index) => (
                              <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-lg">
                                {game}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="lg:col-span-1">
                      <div className="space-y-3">
                        <button className="w-full btn-modern rounded-xl py-3 font-semibold">
                          <div className="flex items-center justify-center">
                            <Play className="w-4 h-4 mr-2" />
                            Claim Bonus
                          </div>
                        </button>
                        
                        <button
                          onClick={() => setExpandedBonus(expandedBonus === bonus.id ? null : bonus.id)}
                          className="w-full glass rounded-xl py-3 font-semibold text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors"
                        >
                          <div className="flex items-center justify-center">
                            <Info className="w-4 h-4 mr-2" />
                            {expandedBonus === bonus.id ? 'Hide Terms' : 'View Terms'}
                            {expandedBonus === bonus.id ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Terms */}
                  {expandedBonus === bonus.id && (
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <div className="glass rounded-2xl p-6 border border-orange-200 bg-orange-50">
                        <h4 className="font-bold text-orange-900 mb-3 flex items-center">
                          <AlertTriangle className="w-5 h-5 mr-2" />
                          Terms & Conditions
                        </h4>
                        <ul className="space-y-2 text-orange-800 text-sm">
                          {bonus.terms.map((term, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {term}
                            </li>
                          ))}
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            Wagering requirements must be met before withdrawal
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            Maximum bet limits may apply during bonus play
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            Full terms and conditions available on casino website
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Guide Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Understanding Casino Bonuses</h2>
            <p className="text-xl text-slate-600">Everything you need to know about casino bonuses in Canada</p>
          </div>

          <div className="space-y-8">
            <div className="modern-card shadow-modern p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Target className="w-8 h-8 text-green-600 mr-3" />
                Types of Casino Bonuses
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="glass rounded-xl p-4 border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                      <Star className="w-5 h-5 text-yellow-500 mr-2" />
                      Welcome Bonuses
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Match your first deposit with bonus funds, often including free spins. 
                      Typically range from 100% to 300% of your deposit amount.
                    </p>
                  </div>
                  
                  <div className="glass rounded-xl p-4 border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                      <Zap className="w-5 h-5 text-blue-500 mr-2" />
                      No Deposit Bonuses
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Free bonus money or spins without requiring a deposit. Perfect for 
                      trying out a casino risk-free.
                    </p>
                  </div>
                  
                  <div className="glass rounded-xl p-4 border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                      <RefreshCw className="w-5 h-5 text-green-500 mr-2" />
                      Free Spins
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Free rounds on slot machines, usually on popular or new games. 
                      Can be part of welcome packages or standalone promotions.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="glass rounded-xl p-4 border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                      <DollarSign className="w-5 h-5 text-green-500 mr-2" />
                      Cashback Bonuses
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Get a percentage of your losses back as bonus funds. Usually 
                      calculated weekly or monthly with lower wagering requirements.
                    </p>
                  </div>
                  
                  <div className="glass rounded-xl p-4 border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                      <RefreshCw className="w-5 h-5 text-purple-500 mr-2" />
                      Reload Bonuses
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Bonuses for existing players on subsequent deposits. Often offered 
                      weekly or monthly to keep players engaged.
                    </p>
                  </div>
                  
                  <div className="glass rounded-xl p-4 border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                      <Crown className="w-5 h-5 text-yellow-500 mr-2" />
                      VIP Bonuses
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Exclusive bonuses for high-value players, including higher percentages, 
                      personal account managers, and special promotions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="modern-card shadow-modern p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <AlertTriangle className="w-8 h-8 text-orange-600 mr-3" />
                Important Terms to Understand
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Wagering Requirements</h4>
                  <p className="text-slate-600 mb-4 text-sm">
                    The number of times you must bet your bonus amount before you can withdraw winnings. 
                    For example, a CA$100 bonus with 35x wagering means you must bet CA$3,500.
                  </p>
                  
                  <h4 className="font-semibold text-slate-900 mb-3">Game Contributions</h4>
                  <p className="text-slate-600 text-sm">
                    Different games contribute differently to wagering requirements:
                  </p>
                  <ul className="text-sm text-slate-600 mt-2 space-y-1">
                    <li>• Slots: Usually 100%</li>
                    <li>• Table games: Often 10-20%</li>
                    <li>• Live dealer: Usually 10% or excluded</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Time Limits</h4>
                  <p className="text-slate-600 mb-4 text-sm">
                    Most bonuses must be used within a specific timeframe, typically 7-30 days. 
                    Unused bonuses expire after this period.
                  </p>
                  
                  <h4 className="font-semibold text-slate-900 mb-3">Maximum Bet Limits</h4>
                  <p className="text-slate-600 mb-4 text-sm">
                    Many bonuses have maximum bet limits (usually CA$5-10 per spin) while 
                    the bonus is active. Exceeding this can void your bonus.
                  </p>
                  
                  <h4 className="font-semibold text-slate-900 mb-3">Maximum Cashout</h4>
                  <p className="text-slate-600 text-sm">
                    Some bonuses have limits on how much you can withdraw from bonus winnings, 
                    regardless of how much you win.
                  </p>
                </div>
              </div>
            </div>

            <div className="modern-card shadow-modern p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                Tips for Maximizing Bonuses
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-900">Read the Terms:</strong>
                        <span className="text-slate-600 text-sm ml-1">
                          Always read bonus terms and conditions before claiming
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-900">Choose Low Wagering:</strong>
                        <span className="text-slate-600 text-sm ml-1">
                          Look for bonuses with lower wagering requirements (20x-35x)
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BonusesPage;