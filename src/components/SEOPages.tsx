import React, { useState } from 'react';
import { 
  Shield, 
  Award, 
  Users, 
  MapPin, 
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
  Activity
} from 'lucide-react';

interface SEOPagesProps {
  currentPage: string;
  onNavigateHome?: () => void;
  onNavigateTo?: (page: string) => void;
}

const SEOPages: React.FC<SEOPagesProps> = ({ currentPage, onNavigateHome, onNavigateTo }) => {
  const [expandedAccordions, setExpandedAccordions] = useState<{[key: string]: boolean}>({});

  const toggleAccordion = (id: string) => {
    setExpandedAccordions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderHeader = () => (
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
            <button 
              onClick={() => onNavigateTo?.('guide')}
              className="text-slate-700 hover:text-green-600 transition-colors font-medium"
            >
              Guide
            </button>
          </nav>
        </div>
      </div>
    </header>
  );

  if (currentPage === 'guide') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Guide Page Meta Tags */}
        <div style={{ display: 'none' }}>
          <title>Complete Casino Guide for Canadian Players | TopCasinoWagers</title>
          <meta name="description" content="Complete casino guide for Canadian players. Learn how to choose casinos, understand bonuses, game strategies & banking methods." />
          <meta name="keywords" content="casino guide Canada, how to choose casino, casino strategies, Canadian gambling guide, online casino tips" />
        </div>
        
        {renderHeader()}
        
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
                    <BookOpen className="w-8 h-8 text-blue-400 mr-3" />
                    <span className="text-lg font-bold">COMPLETE GUIDE</span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-modern">
                <span className="text-yellow-300 animate-neon-pulse">Casino</span>
                <br />
                <span className="text-white">Guide</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto text-modern">
                🎯 Everything you need to know about online casino gaming in Canada - 
                from choosing the right casino to maximizing your winnings
              </p>
            </div>
          </div>
        </section>

        {/* Guide Sections */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="sr-only">Complete Casino Gaming Guide Sections</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Getting Started */}
              <div className="modern-card shadow-modern-hover">
                <div className="p-8">
                  <div className="gradient-primary rounded-3xl w-16 h-16 flex items-center justify-center mb-6">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Getting Started</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      How to choose a casino
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      Account registration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      First deposit guide
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      Claiming bonuses
                    </li>
                  </ul>
                </div>
              </div>

              {/* Game Strategies */}
              <div className="modern-card shadow-modern-hover">
                <div className="p-8">
                  <div className="gradient-secondary rounded-3xl w-16 h-16 flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Game Strategies</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      Slot machine tips
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      Blackjack basic strategy
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      Roulette betting systems
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      Live dealer games
                    </li>
                  </ul>
                </div>
              </div>

              {/* Banking & Security */}
              <div className="modern-card shadow-modern-hover">
                <div className="p-8">
                  <div className="gradient-accent rounded-3xl w-16 h-16 flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Banking & Security</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      Canadian payment methods
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      Withdrawal processes
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      Security measures
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      Responsible gaming
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Guide Content */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* How to Choose a Casino */}
              <div className="modern-card shadow-modern p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                  <Search className="w-8 h-8 text-green-600 mr-3" />
                  How to Choose the Right Casino
                </h2>
                <div className="prose prose-lg max-w-none text-slate-600">
                  <p className="mb-6">
                    Selecting the right online casino is crucial for a safe and enjoyable gaming experience. 
                    Here are the key factors Canadian players should consider:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="glass rounded-2xl p-6 border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                        <Shield className="w-5 h-5 text-green-600 mr-2" />
                        Licensing & Security
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Malta Gaming Authority (MGA)</li>
                        <li>• UK Gambling Commission</li>
                        <li>• Curacao eGaming</li>
                        <li>• SSL encryption certificates</li>
                      </ul>
                    </div>
                    
                    <div className="glass rounded-2xl p-6 border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                        <CreditCard className="w-5 h-5 text-blue-600 mr-2" />
                        Canadian Banking
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>• CAD currency support</li>
                        <li>• Interac e-Transfer</li>
                        <li>• Credit/debit cards</li>
                        <li>• Fast withdrawal times</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bonus Guide */}
              <div className="modern-card shadow-modern p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                  <Gift className="w-8 h-8 text-yellow-600 mr-3" />
                  Understanding Casino Bonuses
                </h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="gradient-gold rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Percent className="w-8 h-8 text-slate-800" />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">Welcome Bonus</h4>
                      <p className="text-sm text-slate-600">Match your first deposit up to a certain amount</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="gradient-secondary rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">Free Spins</h4>
                      <p className="text-sm text-slate-600">Free rounds on selected slot machines</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="gradient-accent rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <DollarSign className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">Cashback</h4>
                      <p className="text-sm text-slate-600">Get a percentage of losses back</p>
                    </div>
                  </div>
                  
                  <div className="glass rounded-2xl p-6 border border-orange-200 bg-orange-50">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-orange-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold text-orange-900 mb-2">Important: Wagering Requirements</h4>
                        <p className="text-orange-800 text-sm">
                          Always read the terms and conditions. Most bonuses have wagering requirements 
                          (e.g., 35x) meaning you must bet the bonus amount 35 times before withdrawing winnings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Game Guide */}
              <div className="modern-card shadow-modern p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                  <Gamepad2 className="w-8 h-8 text-purple-600 mr-3" />
                  Popular Casino Games Guide
                </h2>
                <div className="space-y-8">
                  {/* Slots */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">🎰 Slot Machines</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Types of Slots:</h4>
                        <ul className="space-y-1 text-slate-600 text-sm">
                          <li>• Classic 3-reel slots</li>
                          <li>• Video slots (5+ reels)</li>
                          <li>• Progressive jackpot slots</li>
                          <li>• Megaways slots</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Tips for Success:</h4>
                        <ul className="space-y-1 text-slate-600 text-sm">
                          <li>• Check the RTP (Return to Player)</li>
                          <li>• Set a budget before playing</li>
                          <li>• Try free demos first</li>
                          <li>• Look for high volatility for big wins</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Blackjack */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">🃏 Blackjack</h3>
                    <div className="glass rounded-2xl p-6 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-3">Basic Strategy Chart:</h4>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <strong>Hard Hands:</strong>
                          <ul className="mt-2 space-y-1 text-slate-600">
                            <li>• 8 or less: Always hit</li>
                            <li>• 9: Double vs 3-6</li>
                            <li>• 10-11: Double vs 2-9</li>
                            <li>• 12-16: Stand vs 2-6</li>
                            <li>• 17+: Always stand</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Soft Hands:</strong>
                          <ul className="mt-2 space-y-1 text-slate-600">
                            <li>• A,2-A,3: Double vs 5-6</li>
                            <li>• A,4-A,5: Double vs 4-6</li>
                            <li>• A,6: Double vs 3-6</li>
                            <li>• A,7: Stand vs 2,7,8</li>
                            <li>• A,8-A,9: Always stand</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Pairs:</strong>
                          <ul className="mt-2 space-y-1 text-slate-600">
                            <li>• A,A & 8,8: Always split</li>
                            <li>• 10,10: Never split</li>
                            <li>• 9,9: Split vs 2-9 (not 7)</li>
                            <li>• 7,7: Split vs 2-7</li>
                            <li>• 6,6: Split vs 2-6</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Banking Guide */}
              <div className="modern-card shadow-modern p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                  <CreditCard className="w-8 h-8 text-blue-600 mr-3" />
                  Canadian Banking Methods
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">💳 Deposit Methods</h3>
                    <div className="space-y-4">
                      <div className="glass rounded-xl p-4 border border-slate-200">
                        <h4 className="font-semibold text-slate-900 mb-2">Interac e-Transfer</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Most popular in Canada</li>
                          <li>• Instant deposits</li>
                          <li>• CA$20 - CA$5,000 limits</li>
                          <li>• Secure bank-to-bank transfer</li>
                        </ul>
                      </div>
                      
                      <div className="glass rounded-xl p-4 border border-slate-200">
                        <h4 className="font-semibold text-slate-900 mb-2">Credit/Debit Cards</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Visa, Mastercard accepted</li>
                          <li>• Instant deposits</li>
                          <li>• CA$10 - CA$2,500 limits</li>
                          <li>• May have processing fees</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">💰 Withdrawal Methods</h3>
                    <div className="space-y-4">
                      <div className="glass rounded-xl p-4 border border-slate-200">
                        <h4 className="font-semibold text-slate-900 mb-2">Bank Transfer</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• 1-3 business days</li>
                          <li>• CA$50 - CA$10,000 limits</li>
                          <li>• Most secure method</li>
                          <li>• May have small fees</li>
                        </ul>
                      </div>
                      
                      <div className="glass rounded-xl p-4 border border-slate-200">
                        <h4 className="font-semibold text-slate-900 mb-2">E-wallets</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• PayPal, Skrill, Neteller</li>
                          <li>• 24-48 hours processing</li>
                          <li>• CA$20 - CA$5,000 limits</li>
                          <li>• Fastest withdrawal option</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsible Gaming */}
              <div className="modern-card shadow-modern p-8 border-l-4 border-orange-500">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                  <Heart className="w-8 h-8 text-red-600 mr-3" />
                  Responsible Gaming
                </h2>
                <div className="space-y-6">
                  <p className="text-slate-600">
                    Online gambling should be fun and entertaining. Here are important guidelines to ensure 
                    you maintain control and gamble responsibly:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="glass rounded-2xl p-6 border border-green-200 bg-green-50">
                      <h4 className="font-bold text-green-900 mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        Healthy Gaming Habits
                      </h4>
                      <ul className="space-y-2 text-green-800 text-sm">
                        <li>• Set time and money limits</li>
                        <li>• Never chase losses</li>
                        <li>• Take regular breaks</li>
                        <li>• Only gamble with money you can afford to lose</li>
                        <li>• Don't gamble when emotional or under influence</li>
                      </ul>
                    </div>
                    
                    <div className="glass rounded-2xl p-6 border border-red-200 bg-red-50">
                      <h4 className="font-bold text-red-900 mb-3 flex items-center">
                        <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                        Warning Signs
                      </h4>
                      <ul className="space-y-2 text-red-800 text-sm">
                        <li>• Gambling more than planned</li>
                        <li>• Borrowing money to gamble</li>
                        <li>• Lying about gambling activities</li>
                        <li>• Neglecting responsibilities</li>
                        <li>• Feeling anxious when not gambling</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="glass rounded-2xl p-6 border border-blue-200 bg-blue-50">
                    <h4 className="font-bold text-blue-900 mb-3">🇨🇦 Canadian Resources for Help</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold text-blue-800 mb-2">Problem Gambling Helpline:</p>
                        <p className="text-blue-700">1-888-230-3505 (24/7)</p>
                      </div>
                      <div>
                        <p className="font-semibold text-blue-800 mb-2">Responsible Gambling Council:</p>
                        <p className="text-blue-700">www.responsiblegambling.org</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Contact Page Meta Tags */}
        <div style={{ display: 'none' }}>
          <title>Contact TopCasinoWagers - Canadian Casino Expert Support</title>
          <meta name="description" content="Contact TopCasinoWagers for expert casino advice & support. Email, live chat & phone support for Canadian players." />
          <meta name="keywords" content="contact casino experts, Canadian casino support, casino help, gambling questions Canada" />
        </div>
        
        {renderHeader()}
        
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 gradient-primary"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-modern">
                <span className="text-yellow-300 animate-neon-pulse">Contact</span>
                <br />
                <span className="text-white">Us</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto text-modern">
                🇨🇦 Get in touch with Canada's premier casino review team
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="sr-only">Contact TopCasinoWagers Support Options</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="modern-card shadow-modern-hover text-center">
                <div className="p-8">
                  <div className="gradient-primary rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Email Support</h3>
                  <p className="text-slate-600 mb-4">Get detailed responses to your questions</p>
                  <p className="font-semibold text-green-600">support@topcasinowagers.ca</p>
                </div>
              </div>

            </div>

            <div className="text-center">
              <div className="modern-card shadow-modern p-8 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
                <p className="text-slate-600 mb-6">
                  Have questions about our casino reviews or need help finding the perfect casino? 
                  We're here to help Canadian players make informed decisions.
                </p>
                <button 
                  onClick={() => window.location.href = 'mailto:support@topcasinowagers.ca'}
                  className="btn-modern rounded-xl py-3 px-8 font-semibold"
                >
                  <Mail className="w-5 h-5 mr-2 inline" />
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (currentPage === 'faq') {
    const faqs = [
      {
        question: "Are online casinos legal in Canada?",
        answer: "Yes, online casinos are legal in Canada. While each province has its own regulations, Canadians can legally play at offshore licensed casinos. We only recommend casinos with proper licensing from reputable authorities like Malta Gaming Authority or UK Gambling Commission."
      },
      {
        question: "How do I know if a casino is safe?",
        answer: "Look for proper licensing, SSL encryption, fair play certifications, and positive player reviews. All casinos we recommend undergo thorough security checks and are licensed by reputable gaming authorities."
      },
      {
        question: "What payment methods work best for Canadians?",
        answer: "Interac e-Transfer is the most popular method for Canadian players, offering instant deposits and secure bank-to-bank transfers. Credit/debit cards, e-wallets like PayPal, and bank transfers are also widely accepted."
      },
      {
        question: "How long do withdrawals take?",
        answer: "Withdrawal times vary by casino and method. E-wallets are fastest (24-48 hours), bank transfers take 1-3 business days, and credit cards can take 3-5 business days. We always list expected payout times in our reviews."
      },
      {
        question: "What are wagering requirements?",
        answer: "Wagering requirements specify how many times you must bet a bonus amount before withdrawing winnings. For example, a CA$100 bonus with 35x wagering means you must bet CA$3,500 before cashing out bonus winnings."
      },
      {
        question: "Can I play casino games on my mobile?",
        answer: "Yes! All modern online casinos offer mobile-optimized websites or dedicated apps. You can play slots, table games, and even live dealer games on your smartphone or tablet."
      },
      {
        question: "How do you rate casinos?",
        answer: "We use a comprehensive 5-star rating system based on game selection, bonuses, security, customer support, and payout speed. Our expert team tests each casino personally and considers player feedback."
      },
      {
        question: "Do you get paid by casinos?",
        answer: "Yes, we earn affiliate commissions when players sign up through our links. However, this never affects our honest reviews or ratings. We maintain complete editorial independence and only recommend casinos we would play at ourselves."
      }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* FAQ Page Meta Tags */}
        <div style={{ display: 'none' }}>
          <title>Casino FAQ - Frequently Asked Questions | TopCasinoWagers Canada</title>
          <meta name="description" content="Frequently asked questions about online casino gaming in Canada. Get answers about legality, bonuses, payments & more." />
          <meta name="keywords" content="casino FAQ Canada, online gambling questions, casino help, Canadian casino answers" />
        </div>
        
        {renderHeader()}
        
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 gradient-primary"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="glass-dark rounded-2xl px-6 py-3 border border-white/20">
                  <HelpCircle className="w-8 h-8 text-blue-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-modern">
                <span className="text-yellow-300 animate-neon-pulse">FAQ</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto text-modern">
                🎯 Frequently asked questions about online casino gaming in Canada
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="modern-card shadow-modern">
                  <div className="border border-slate-200 rounded-xl">
                    <button
                      onClick={() => toggleAccordion(`faq-${index}`)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className="gradient-primary rounded-full w-8 h-8 flex items-center justify-center mr-4 text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="text-xl font-bold text-slate-900">{faq.question}</span>
                      </div>
                      {expandedAccordions[`faq-${index}`] ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                    </button>
                    {expandedAccordions[`faq-${index}`] && (
                      <div className="px-8 pb-6">
                        <p className="text-slate-600 leading-relaxed pl-12">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return null;
};

export default SEOPages;