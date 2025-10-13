import React, { useState } from 'react';
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
  AlertCircle,
  Zap,
  Crown,
  Sparkles,
  Play,
  Gift,
  Gamepad2,
  DollarSign,
  Timer,
  Trophy,
  ThumbsUp,
  ThumbsDown,
  Filter,
  Search,
  Calendar,
  User
} from 'lucide-react';

interface ReviewsPageProps {
  onNavigateHome?: () => void;
}

interface CasinoReview {
  id: number;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  features: string[];
  pros: string[];
  cons: string[];
  payoutTime: string;
  minDeposit: string;
  games: number;
  license: string;
  detailedReview: {
    gameSelection: {
      rating: number;
      description: string;
      highlights: string[];
    };
    bonuses: {
      rating: number;
      description: string;
      highlights: string[];
    };
    security: {
      rating: number;
      description: string;
      highlights: string[];
    };
    customerSupport: {
      rating: number;
      description: string;
      highlights: string[];
    };
    payouts: {
      rating: number;
      description: string;
      highlights: string[];
    };
  };
  userReviews: {
    totalReviews: number;
    averageRating: number;
    recentReviews: {
      username: string;
      rating: number;
      date: string;
      comment: string;
      verified: boolean;
    }[];
  };
}

const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigateHome }) => {
  const [selectedCasino, setSelectedCasino] = useState<number | null>(null);
  const [filterRating, setFilterRating] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Add metadata for Reviews page
  const reviewsMetadata = {
    title: "Casino Reviews Canada 2024 - Expert Analysis & Player Ratings | TopCasinoWagers",
    description: "In-depth casino reviews for Canadian players. Expert analysis, player feedback & detailed ratings of best online casinos accepting Canadians.",
    keywords: "casino reviews Canada, online casino ratings, Canadian casino analysis, expert casino reviews, casino comparison Canada"
  };

  const casinoReviews: CasinoReview[] = [
    {
      id: 1,
      name: "NEOSPIN",
      logo: "/neospin.jpg",
      rating: 4.9,
      bonus: "100% up to CA$500 + 100 Free Spins",
      features: ["800+ Games", "Instant Deposits", "Mobile Optimized"],
      pros: ["100 deposit free spins", "Canadian dollar support", "Fast registration"],
      cons: ["New casino brand"],
      payoutTime: "1-2 days",
      minDeposit: "CA$10",
      games: 800,
      license: "Curacao Gaming License",
      detailedReview: {
        gameSelection: {
          rating: 4.8,
          description: "NEOSPIN offers an impressive collection of 800+ games from top providers including NetEnt, Microgaming, and Pragmatic Play.",
          highlights: ["Latest slot releases", "Live dealer games", "Progressive jackpots", "Mobile-optimized games"]
        },
        bonuses: {
          rating: 4.9,
          description: "Outstanding welcome package with 100% match bonus and 100 free spins, plus regular promotions for existing players.",
          highlights: ["100% welcome bonus", "100 free spins", "Weekly reload bonuses", "VIP program"]
        },
        security: {
          rating: 4.7,
          description: "Licensed by Curacao Gaming Authority with SSL encryption and responsible gaming measures in place.",
          highlights: ["SSL encryption", "Licensed operation", "Fair play certified", "Responsible gaming tools"]
        },
        customerSupport: {
          rating: 4.8,
          description: "24/7 customer support via live chat and email with knowledgeable Canadian-friendly staff.",
          highlights: ["24/7 live chat", "Email support", "Canadian staff", "Quick response times"]
        },
        payouts: {
          rating: 4.9,
          description: "Fast payouts within 1-2 days with multiple withdrawal options including e-wallets and bank transfers.",
          highlights: ["1-2 day payouts", "Multiple options", "No withdrawal fees", "CA$ support"]
        }
      },
      userReviews: {
        totalReviews: 1247,
        averageRating: 4.8,
        recentReviews: [
          {
            username: "Claire T. from Toronto",
            rating: 5,
            date: "2024-01-15",
            comment: "Amazing casino! Got my withdrawal in just 24 hours. The free spins bonus was exactly as advertised.",
            verified: true
          },
          {
            username: "Mike D. from Vancouver",
            rating: 4,
            date: "2024-01-12",
            comment: "Great game selection and the mobile app works perfectly. Customer support was very helpful.",
            verified: true
          },
          {
            username: "Jennifer L. from Calgary",
            rating: 5,
            date: "2024-01-10",
            comment: "Best new casino I've tried! The registration was super quick and they accept Canadian banking.",
            verified: true
          }
        ]
      }
    },
    {
      id: 2,
      name: "EVOSPIN",
      logo: "/IMG_0129.jpeg",
      rating: 4.8,
      bonus: "285% up to CA$7,500 + 285 Free Spins",
      features: ["1000+ Games", "Live Casino", "VIP Program"],
      pros: ["Massive welcome bonus", "Best casino games online", "High bonus percentage"],
      cons: ["High wagering requirements"],
      payoutTime: "1-3 days",
      minDeposit: "CA$20",
      games: 1000,
      license: "Malta Gaming Authority",
      detailedReview: {
        gameSelection: {
          rating: 4.9,
          description: "EVOSPIN boasts over 1000 games from premium providers, featuring the latest slots, table games, and live dealer options.",
          highlights: ["1000+ premium games", "Live casino section", "New releases weekly", "High RTP slots"]
        },
        bonuses: {
          rating: 4.7,
          description: "Massive 285% welcome bonus is one of the highest in the industry, though wagering requirements are on the higher side.",
          highlights: ["285% welcome bonus", "285 free spins", "Monthly promotions", "Loyalty rewards"]
        },
        security: {
          rating: 4.9,
          description: "Malta Gaming Authority license ensures top-tier security and fair play standards.",
          highlights: ["MGA licensed", "256-bit SSL", "Regular audits", "Player protection"]
        },
        customerSupport: {
          rating: 4.6,
          description: "Professional support team available 24/7 with multiple contact options.",
          highlights: ["24/7 availability", "Live chat", "Email support", "FAQ section"]
        },
        payouts: {
          rating: 4.8,
          description: "Reliable payouts within 1-3 days with various withdrawal methods available.",
          highlights: ["1-3 day processing", "Multiple methods", "Secure transactions", "CA$ friendly"]
        }
      },
      userReviews: {
        totalReviews: 2156,
        averageRating: 4.7,
        recentReviews: [
          {
            username: "David R. from Montreal",
            rating: 5,
            date: "2024-01-14",
            comment: "The 285% bonus is incredible! Won big on their progressive slots. Highly recommend!",
            verified: true
          },
          {
            username: "Amanda K. from Edmonton",
            rating: 4,
            date: "2024-01-11",
            comment: "Great game variety and the live dealers are professional. Withdrawal took 2 days.",
            verified: true
          },
          {
            username: "Robert S. from Ottawa",
            rating: 4,
            date: "2024-01-09",
            comment: "Love the VIP program benefits. Customer service is responsive and helpful.",
            verified: true
          }
        ]
      }
    },
    {
      id: 7,
      name: "ONLUCK.COM",
      logo: "/IMG_0133.jpeg",
      rating: 4.9,
      bonus: "285% up to CA$9,000 + 225 Free Spins",
      features: ["Sports Betting", "Casino Games", "Live Dealers"],
      pros: ["Massive welcome bonus", "Sports + casino combo", "High bonus percentage"],
      cons: ["High wagering requirements"],
      payoutTime: "1-2 days",
      minDeposit: "CA$20",
      games: 1200,
      license: "Curacao Gaming License",
      detailedReview: {
        gameSelection: {
          rating: 4.8,
          description: "ONLUCK.COM combines casino gaming with sports betting, offering over 1200 games and comprehensive sportsbook.",
          highlights: ["1200+ casino games", "Full sportsbook", "Live betting", "Esports options"]
        },
        bonuses: {
          rating: 4.9,
          description: "Exceptional 285% welcome bonus up to CA$9,000 makes this one of the most generous offers available.",
          highlights: ["285% welcome bonus", "CA$9,000 maximum", "225 free spins", "Sports bonuses"]
        },
        security: {
          rating: 4.7,
          description: "Curacao licensed with modern security protocols and responsible gaming features.",
          highlights: ["Curacao licensed", "Secure payments", "Data protection", "Fair gaming"]
        },
        customerSupport: {
          rating: 4.8,
          description: "Excellent customer support with specialized teams for casino and sports betting queries.",
          highlights: ["24/7 support", "Specialized teams", "Multiple languages", "Quick resolution"]
        },
        payouts: {
          rating: 4.9,
          description: "Fast payouts within 1-2 days for both casino winnings and sports betting profits.",
          highlights: ["1-2 day payouts", "Sports + casino", "Multiple options", "CA$ support"]
        }
      },
      userReviews: {
        totalReviews: 1834,
        averageRating: 4.8,
        recentReviews: [
          {
            username: "Lisa T. from Winnipeg",
            rating: 5,
            date: "2024-01-16",
            comment: "Perfect combo of casino and sports betting! The CA$9,000 bonus is amazing.",
            verified: true
          },
          {
            username: "James P. from Halifax",
            rating: 5,
            date: "2024-01-13",
            comment: "Love being able to bet on hockey and play slots in the same place. Fast payouts too!",
            verified: true
          },
          {
            username: "Michelle C. from Quebec City",
            rating: 4,
            date: "2024-01-08",
            comment: "Great platform with lots of options. The live betting feature is excellent.",
            verified: true
          }
        ]
      }
    },
    {
      id: 8,
      name: "CASINO INFINITY",
      logo: "/casino infinity.webp",
      rating: 4.7,
      bonus: "10% Cashback up to CA$200",
      features: ["No Limits", "No Restrictions", "Cashback System"],
      pros: ["Unique cashback offer", "No limits approach", "Player-friendly policies"],
      cons: ["Smaller bonus amount"],
      payoutTime: "1-3 days",
      minDeposit: "CA$10",
      games: 800,
      license: "Malta Gaming Authority",
      detailedReview: {
        gameSelection: {
          rating: 4.6,
          description: "Casino Infinity offers 800+ carefully selected games with no restrictions on play styles or betting limits.",
          highlights: ["800+ premium games", "No betting limits", "All game types", "High RTP focus"]
        },
        bonuses: {
          rating: 4.8,
          description: "Unique 10% cashback system provides ongoing value rather than traditional one-time bonuses.",
          highlights: ["10% cashback", "No wagering requirements", "Weekly cashback", "Player-friendly terms"]
        },
        security: {
          rating: 4.9,
          description: "Malta Gaming Authority license with emphasis on player protection and fair gaming policies.",
          highlights: ["MGA licensed", "Player protection", "Fair policies", "Secure platform"]
        },
        customerSupport: {
          rating: 4.7,
          description: "Dedicated support team focused on player satisfaction with no-hassle policies.",
          highlights: ["Player-focused", "No-hassle approach", "Quick support", "Fair resolutions"]
        },
        payouts: {
          rating: 4.8,
          description: "Reliable payouts within 1-3 days with no hidden restrictions or complicated terms.",
          highlights: ["1-3 day payouts", "No restrictions", "Simple process", "CA$ friendly"]
        }
      },
      userReviews: {
        totalReviews: 967,
        averageRating: 4.6,
        recentReviews: [
          {
            username: "Kevin B. from London, ON",
            rating: 5,
            date: "2024-01-15",
            comment: "Love the cashback system! No complicated wagering requirements, just straight cash back.",
            verified: true
          },
          {
            username: "Nicole W. from Saskatoon",
            rating: 4,
            date: "2024-01-12",
            comment: "The 'no limits' approach is refreshing. Finally a casino that trusts its players.",
            verified: true
          },
          {
            username: "Daniel F. from Victoria",
            rating: 5,
            date: "2024-01-10",
            comment: "Simple, honest casino with fair policies. The cashback adds up nicely over time.",
            verified: true
          }
        ]
      }
    },
    {
      id: 9,
      name: "GUNS BET",
      logo: "/IMG_0134.jpeg",
      rating: 4.8,
      bonus: "335% up to CA$1,675 + 300 Free Spins",
      features: ["Luck and Load Theme", "High RTP Games", "VIP Program"],
      pros: ["Highest bonus percentage", "300 free spins", "Unique theme"],
      cons: ["Complex bonus terms"],
      payoutTime: "2-4 days",
      minDeposit: "CA$25",
      games: 900,
      license: "Curacao Gaming License",
      detailedReview: {
        gameSelection: {
          rating: 4.7,
          description: "GUNS BET features 900+ games with a unique 'Luck and Load' theme and focus on high RTP slots.",
          highlights: ["900+ themed games", "High RTP focus", "Unique game selection", "Regular new additions"]
        },
        bonuses: {
          rating: 4.9,
          description: "Industry-leading 335% welcome bonus with 300 free spins, though terms can be complex.",
          highlights: ["335% welcome bonus", "300 free spins", "VIP bonuses", "Reload offers"]
        },
        security: {
          rating: 4.6,
          description: "Curacao licensed with standard security measures and responsible gaming tools.",
          highlights: ["Licensed operation", "Secure gaming", "Player protection", "Fair play"]
        },
        customerSupport: {
          rating: 4.7,
          description: "Themed customer support with knowledgeable staff and multiple contact options.",
          highlights: ["24/7 support", "Knowledgeable staff", "Multiple channels", "Theme consistency"]
        },
        payouts: {
          rating: 4.5,
          description: "Payouts processed within 2-4 days with various withdrawal methods available.",
          highlights: ["2-4 day processing", "Multiple methods", "Secure withdrawals", "CA$ support"]
        }
      },
      userReviews: {
        totalReviews: 1456,
        averageRating: 4.7,
        recentReviews: [
          {
            username: "Stephanie H. from Kingston",
            rating: 5,
            date: "2024-01-14",
            comment: "The 335% bonus is insane! Love the unique theme and the games are top quality.",
            verified: true
          },
          {
            username: "Mark J. from Thunder Bay",
            rating: 4,
            date: "2024-01-11",
            comment: "Great casino with a fun theme. The 300 free spins kept me entertained for hours.",
            verified: true
          },
          {
            username: "Catherine G. from Charlottetown",
            rating: 5,
            date: "2024-01-09",
            comment: "Highest bonus I've ever seen! The VIP program has great benefits too.",
            verified: true
          }
        ]
      }
    }
  ];

  const filteredReviews = casinoReviews.filter(casino => {
    const matchesSearch = casino.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRating = filterRating === 0 || casino.rating >= filterRating;
    return matchesSearch && matchesRating;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const renderDetailedReview = (casino: CasinoReview) => {
    const categories = [
      { key: 'gameSelection', label: 'Game Selection', icon: Gamepad2 },
      { key: 'bonuses', label: 'Bonuses & Promotions', icon: Gift },
      { key: 'security', label: 'Security & Licensing', icon: Shield },
      { key: 'customerSupport', label: 'Customer Support', icon: Users },
      { key: 'payouts', label: 'Payouts & Banking', icon: CreditCard }
    ];

    return (
      <div className="mt-8 space-y-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Detailed Review: {casino.name}</h3>
          <div className="flex items-center justify-center mb-6">
            <img 
              src={casino.logo} 
              alt={`${casino.name} logo`}
              className="w-16 h-16 rounded-2xl object-cover shadow-modern border-2 border-white/20 mr-4"
            />
            <div>
              <div className="flex items-center mb-2">
                {renderStars(casino.rating)}
                <span className="ml-2 text-2xl font-bold text-slate-900">{casino.rating}/5</span>
              </div>
              <div className="text-slate-600">Overall Rating</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map(({ key, label, icon: Icon }) => {
            const category = casino.detailedReview[key as keyof typeof casino.detailedReview];
            return (
              <div key={key} className="modern-card shadow-modern p-6">
                <div className="flex items-center mb-4">
                  <div className="gradient-primary rounded-2xl w-12 h-12 flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900">{label}</h4>
                    <div className="flex items-center">
                      {renderStars(category.rating)}
                      <span className="ml-2 font-bold text-slate-700">{category.rating}/5</span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">{category.description}</p>
                <div className="space-y-2">
                  {category.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center text-sm text-green-600">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* User Reviews Section */}
        <div className="modern-card shadow-modern p-8">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-2xl font-bold text-slate-900">Player Reviews</h4>
            <div className="flex items-center">
              <div className="text-3xl font-bold text-yellow-500 mr-2">{casino.userReviews.averageRating}</div>
              <div>
                <div className="flex items-center">
                  {renderStars(casino.userReviews.averageRating)}
                </div>
                <div className="text-sm text-slate-600">{casino.userReviews.totalReviews} reviews</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {casino.userReviews.recentReviews.map((review, index) => (
              <div key={index} className="glass rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <span className="font-semibold text-slate-900 mr-2">{review.username}</span>
                        {review.verified && (
                          <div className="flex items-center text-green-600 text-xs">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Verified
                          </div>
                        )}
                      </div>
                      <div className="flex items-center">
                        {renderStars(review.rating)}
                        <span className="ml-2 text-sm text-slate-600">{review.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-slate-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Reviews Page Meta Tags */}
      <div style={{ display: 'none' }}>
        <title>{reviewsMetadata.title}</title>
        <meta name="description" content={reviewsMetadata.description} />
        <meta name="keywords" content={reviewsMetadata.keywords} />
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
              <a href="#bonuses" className="text-slate-700 hover:text-green-600 transition-colors font-medium">
                Bonuses
              </a>
              <span className="text-green-600 font-semibold font-medium">
                Reviews
              </span>
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
                  <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
                  <span className="text-lg font-bold">EXPERT REVIEWS</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-modern">
              <span className="text-yellow-300 animate-neon-pulse">Casino</span>
              <br />
              <span className="text-white">Reviews</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto text-modern">
              🎯 In-depth reviews of Canada's top online casinos with detailed analysis, 
              player feedback, and expert ratings
            </p>
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
                  placeholder="Search casinos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-slate-600" />
                <select
                  value={filterRating}
                  onChange={(e) => setFilterRating(Number(e.target.value))}
                  className="px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value={0}>All Ratings</option>
                  <option value={4.5}>4.5+ Stars</option>
                  <option value={4.0}>4.0+ Stars</option>
                  <option value={3.5}>3.5+ Stars</option>
                </select>
              </div>
            </div>
            <div className="text-slate-600">
              Showing {filteredReviews.length} of {casinoReviews.length} casinos
            </div>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-12 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Detailed Casino Reviews and Ratings</h2>
          {selectedCasino ? (
            <div>
              <button
                onClick={() => setSelectedCasino(null)}
                className="mb-8 flex items-center text-green-600 hover:text-green-700 font-medium"
              >
                ← Back to Reviews
              </button>
              {renderDetailedReview(filteredReviews.find(c => c.id === selectedCasino)!)}
            </div>
          ) : (
            <div className="space-y-8">
              {filteredReviews.map((casino) => (
                <div key={casino.id} className="modern-card shadow-modern-hover">
                  <div className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Casino Info */}
                      <div className="lg:col-span-1">
                        <div className="flex items-center mb-4">
                          <img 
                            src={casino.logo} 
                            alt={`${casino.name} logo`}
                            className="w-12 h-12 rounded-xl object-cover shadow-md border border-white/20 mr-4"
                          />
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900">{casino.name}</h3>
                            <div className="flex items-center mt-1">
                              {renderStars(casino.rating)}
                              <span className="ml-2 text-lg font-bold text-slate-700">{casino.rating}/5</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="gradient-gold rounded-2xl p-4 mb-4 text-center">
                          <div className="font-bold text-slate-900 mb-1">{casino.bonus}</div>
                          <div className="text-sm text-slate-700">Min deposit: {casino.minDeposit}</div>
                        </div>

                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-slate-600">Games:</span>
                            <span className="font-semibold">{casino.games}+</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">Payout Time:</span>
                            <span className="font-semibold text-green-600">{casino.payoutTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">License:</span>
                            <span className="font-semibold text-xs">{casino.license}</span>
                          </div>
                        </div>
                      </div>

                      {/* Pros and Cons */}
                      <div className="lg:col-span-1">
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center mb-2">
                              <ThumbsUp className="w-4 h-4 text-green-500 mr-2" />
                              <span className="font-semibold text-green-700 text-sm">PROS</span>
                            </div>
                            <ul className="space-y-1">
                              {casino.pros.map((pro, index) => (
                                <li key={index} className="text-sm text-green-600 flex items-center">
                                  <CheckCircle className="w-3 h-3 mr-2" />
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <div className="flex items-center mb-2">
                              <ThumbsDown className="w-4 h-4 text-orange-500 mr-2" />
                              <span className="font-semibold text-orange-700 text-sm">CONS</span>
                            </div>
                            <ul className="space-y-1">
                              {casino.cons.map((con, index) => (
                                <li key={index} className="text-sm text-orange-600 flex items-center">
                                  <AlertCircle className="w-3 h-3 mr-2" />
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* User Reviews Preview */}
                      <div className="lg:col-span-1">
                        <div className="glass rounded-2xl p-4 border border-slate-200">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold text-slate-900">Player Reviews</h4>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-yellow-500">{casino.userReviews.averageRating}</div>
                              <div className="text-xs text-slate-600">{casino.userReviews.totalReviews} reviews</div>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            {casino.userReviews.recentReviews.slice(0, 2).map((review, index) => (
                              <div key={index} className="text-sm">
                                <div className="flex items-center mb-1">
                                  <span className="font-medium text-slate-700 mr-2">{review.username}</span>
                                  {renderStars(review.rating)}
                                </div>
                                <p className="text-slate-600 text-xs line-clamp-2">{review.comment}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-6 pt-6 border-t border-slate-200">
                      <button
                        onClick={() => setSelectedCasino(casino.id)}
                        className="flex-1 glass rounded-xl py-3 font-semibold text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center justify-center">
                          <Trophy className="w-4 h-4 mr-2" />
                          Read Full Review
                        </div>
                      </button>
                      <button className="flex-1 btn-modern rounded-xl py-3 font-semibold">
                        <div className="flex items-center justify-center">
                          <Play className="w-4 h-4 mr-2" />
                          Play Now
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;