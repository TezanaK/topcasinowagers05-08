import React from 'react';
import { 
  Shield, 
  Heart, 
  Clock, 
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Phone,
  Mail,
  ExternalLink,
  Crown,
  Sparkles,
  Users,
  Lock,
  Timer,
  Ban,
  Settings,
  HelpCircle,
  FileText,
  Target,
  TrendingDown,
  Pause,
  StopCircle
} from 'lucide-react';

interface ResponsibleGamingPageProps {
  onNavigateHome?: () => void;
  onNavigateTo?: (page: string) => void;
}

const ResponsibleGamingPage: React.FC<ResponsibleGamingPageProps> = ({ onNavigateHome, onNavigateTo }) => {
  const responsibleGamingMetadata = {
    title: "Responsible Gaming - Safe Gambling Guidelines | TopCasinoWagers Canada",
    description: "Learn about responsible gambling practices, warning signs of problem gambling, and resources for help. TopCasinoWagers promotes safe gaming for all Canadian players.",
    keywords: "responsible gambling Canada, problem gambling help, safe gaming practices, gambling addiction resources, Canadian gambling support"
  };

  const warningSignsData = [
    {
      category: "Financial Signs",
      icon: DollarSign,
      signs: [
        "Spending more money than you can afford to lose",
        "Borrowing money to gamble",
        "Lying about gambling expenses",
        "Using credit cards or loans for gambling",
        "Neglecting bills to fund gambling activities"
      ]
    },
    {
      category: "Behavioral Signs",
      icon: Users,
      signs: [
        "Gambling for longer periods than planned",
        "Chasing losses with bigger bets",
        "Feeling restless when not gambling",
        "Lying to family and friends about gambling",
        "Neglecting work, school, or family responsibilities"
      ]
    },
    {
      category: "Emotional Signs",
      icon: Heart,
      signs: [
        "Feeling anxious or depressed when not gambling",
        "Mood swings related to wins and losses",
        "Gambling to escape problems or negative feelings",
        "Feeling guilty or ashamed about gambling",
        "Becoming irritable when unable to gamble"
      ]
    }
  ];

  const selfAssessmentQuestions = [
    "Do you gamble more than you originally intended?",
    "Have you ever lied to family or friends about your gambling?",
    "Do you feel the need to bet more money to get the same excitement?",
    "Have you tried to cut back on gambling but been unable to?",
    "Do you gamble to escape from problems or feelings of depression?",
    "Have you borrowed money or sold possessions to fund gambling?",
    "Do you feel restless or irritable when trying to stop gambling?",
    "Have you jeopardized relationships or job opportunities due to gambling?"
  ];

  const canadianResources = [
    {
      name: "Problem Gambling Helpline",
      phone: "1-888-230-3505",
      description: "24/7 confidential support for problem gambling",
      website: "www.problemgamblinghelpline.ca",
      coverage: "National"
    },
    {
      name: "Responsible Gambling Council",
      phone: "1-888-391-1111",
      description: "Information and resources for responsible gambling",
      website: "www.responsiblegambling.org",
      coverage: "National"
    },
    {
      name: "Gamblers Anonymous Canada",
      description: "Support groups across Canada",
      website: "www.gamblersanonymous.org/ga/",
      coverage: "National"
    },
    {
      name: "ConnexOntario (Ontario)",
      phone: "1-866-531-2600",
      description: "Mental health and addiction services",
      website: "www.connexontario.ca",
      coverage: "Ontario"
    },
    {
      name: "Alberta Gaming & Liquor Commission",
      phone: "1-800-665-9769",
      description: "Responsible gambling resources",
      website: "www.aglc.ca",
      coverage: "Alberta"
    },
    {
      name: "BC Responsible & Problem Gambling",
      phone: "1-888-795-6111",
      description: "British Columbia gambling support",
      website: "www.bcresponsiblegambling.ca",
      coverage: "British Columbia"
    }
  ];

  const safeGamblingTips = [
    {
      icon: DollarSign,
      title: "Set a Budget",
      description: "Only gamble with money you can afford to lose. Never use money meant for essentials like rent, food, or bills."
    },
    {
      icon: Clock,
      title: "Set Time Limits",
      description: "Decide how long you'll play before you start. Use alarms or timers to remind yourself when it's time to stop."
    },
    {
      icon: Ban,
      title: "Never Chase Losses",
      description: "Accept losses as part of the game. Trying to win back money often leads to bigger losses."
    },
    {
      icon: Pause,
      title: "Take Regular Breaks",
      description: "Step away from gambling regularly. Use this time to assess your spending and emotional state."
    },
    {
      icon: Shield,
      title: "Don't Gamble Under Influence",
      description: "Avoid gambling when drinking alcohol or using substances that impair judgment."
    },
    {
      icon: Heart,
      title: "Don't Gamble When Emotional",
      description: "Avoid gambling when upset, depressed, or trying to escape problems."
    }
  ];

  const casinoTools = [
    {
      tool: "Deposit Limits",
      description: "Set daily, weekly, or monthly limits on how much you can deposit",
      icon: DollarSign
    },
    {
      tool: "Time Limits",
      description: "Set session time limits to control how long you play",
      icon: Clock
    },
    {
      tool: "Loss Limits",
      description: "Set maximum loss amounts to prevent overspending",
      icon: TrendingDown
    },
    {
      tool: "Self-Exclusion",
      description: "Temporarily or permanently block access to your account",
      icon: StopCircle
    },
    {
      tool: "Reality Checks",
      description: "Receive pop-up reminders about time spent gambling",
      icon: AlertTriangle
    },
    {
      tool: "Account History",
      description: "Review your gambling activity and spending patterns",
      icon: FileText
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Responsible Gaming Page Meta Tags */}
      <div style={{ display: 'none' }}>
        <title>{responsibleGamingMetadata.title}</title>
        <meta name="description" content={responsibleGamingMetadata.description} />
        <meta name="keywords" content={responsibleGamingMetadata.keywords} />
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
              <span className="text-green-600 font-semibold font-medium">
                Responsible Gaming
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
                  <Heart className="w-8 h-8 text-red-400 mr-3" />
                  <span className="text-lg font-bold">PLAY SAFELY</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-modern">
              <span className="text-red-300 animate-neon-pulse">Responsible</span>
              <br />
              <span className="text-white">Gaming</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto text-modern">
              🛡️ Your safety and well-being are our top priority. Learn how to gamble responsibly 
              and get help when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Gambling Should Be Fun</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Online gambling can be an entertaining form of recreation when done responsibly. 
              However, it's important to understand the risks and maintain control over your gambling activities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="modern-card shadow-modern text-center">
              <div className="p-6">
                <div className="gradient-primary rounded-3xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Stay Protected</h3>
                <p className="text-slate-600 text-sm">Use casino tools and set limits to maintain control</p>
              </div>
            </div>

            <div className="modern-card shadow-modern text-center">
              <div className="p-6">
                <div className="gradient-secondary rounded-3xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Seek Support</h3>
                <p className="text-slate-600 text-sm">Help is available 24/7 from trained professionals</p>
              </div>
            </div>

            <div className="modern-card shadow-modern text-center">
              <div className="p-6">
                <div className="gradient-accent rounded-3xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Family First</h3>
                <p className="text-slate-600 text-sm">Never let gambling interfere with relationships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safe Gambling Tips */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Safe Gambling Guidelines</h2>
            <p className="text-xl text-slate-600">Follow these essential tips to maintain healthy gambling habits</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safeGamblingTips.map((tip, index) => (
              <div key={index} className="modern-card shadow-modern-hover">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="gradient-primary rounded-2xl w-12 h-12 flex items-center justify-center mr-4">
                      <tip.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{tip.title}</h3>
                  </div>
                  <p className="text-slate-600">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Warning Signs of Problem Gambling</h2>
            <p className="text-xl text-slate-600">Recognize these signs in yourself or others</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {warningSignsData.map((category, index) => (
              <div key={index} className="modern-card shadow-modern border-l-4 border-orange-500">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="gradient-secondary rounded-2xl w-12 h-12 flex items-center justify-center mr-4">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{category.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.signs.map((sign, signIndex) => (
                      <li key={signIndex} className="flex items-start text-slate-600">
                        <AlertTriangle className="w-4 h-4 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-sm">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Assessment */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Self-Assessment Questions</h2>
            <p className="text-xl text-slate-600">Answer these questions honestly to evaluate your gambling habits</p>
          </div>

          <div className="modern-card shadow-modern p-8">
            <div className="glass rounded-2xl p-6 border border-orange-200 bg-orange-50 mb-8">
              <div className="flex items-start">
                <HelpCircle className="w-6 h-6 text-orange-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-bold text-orange-900 mb-2">How to Use This Assessment</h4>
                  <p className="text-orange-800 text-sm">
                    If you answer "yes" to 3 or more questions, you may want to consider seeking help or 
                    taking a break from gambling. This is not a diagnostic tool, but it can help you 
                    reflect on your gambling behavior.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {selfAssessmentQuestions.map((question, index) => (
                <div key={index} className="glass rounded-xl p-4 border border-slate-200">
                  <div className="flex items-start">
                    <div className="gradient-primary rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-slate-700 font-medium">{question}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="glass rounded-2xl p-6 border border-red-200 bg-red-50">
                <h4 className="font-bold text-red-900 mb-3">Need Help?</h4>
                <p className="text-red-800 mb-4">
                  If this assessment concerns you, don't wait. Help is available 24/7.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="text-center">
                    <div className="font-bold text-red-900">Crisis Helpline</div>
                    <div className="text-2xl font-bold text-red-700">1-888-230-3505</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casino Tools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Casino Responsible Gaming Tools</h2>
            <p className="text-xl text-slate-600">Most reputable casinos offer these tools to help you stay in control</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {casinoTools.map((tool, index) => (
              <div key={index} className="modern-card shadow-modern-hover">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="gradient-accent rounded-2xl w-12 h-12 flex items-center justify-center mr-4">
                      <tool.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{tool.tool}</h3>
                  </div>
                  <p className="text-slate-600">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="glass rounded-2xl p-6 border border-blue-200 bg-blue-50 max-w-2xl mx-auto">
              <h4 className="font-bold text-blue-900 mb-3">How to Access These Tools</h4>
              <p className="text-blue-800 text-sm">
                Look for "Responsible Gaming," "Player Protection," or "Account Settings" sections 
                in your casino account. These tools are usually found in your account dashboard or 
                profile settings. If you can't find them, contact customer support for assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Canadian Resources */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🇨🇦 Canadian Support Resources</h2>
            <p className="text-xl opacity-90">Professional help is available across Canada</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {canadianResources.map((resource, index) => (
              <div key={index} className="glass-dark rounded-2xl p-6 border border-white/20 shadow-modern">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3">{resource.name}</h3>
                  {resource.phone && (
                    <div className="mb-3">
                      <div className="flex items-center justify-center mb-2">
                        <Phone className="w-5 h-5 mr-2 text-green-400" />
                        <span className="font-bold text-green-400 text-lg">{resource.phone}</span>
                      </div>
                    </div>
                  )}
                  <p className="text-slate-300 mb-4 text-sm">{resource.description}</p>
                  {resource.website && (
                    <div className="mb-3">
                      <div className="flex items-center justify-center text-blue-400 text-sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {resource.website}
                      </div>
                    </div>
                  )}
                  <div className="glass rounded-xl px-3 py-2 border border-white/20">
                    <span className="text-xs text-slate-400">Coverage: {resource.coverage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="glass-dark rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">🚨 Crisis Support</h3>
              <p className="text-xl mb-6">If you're in immediate crisis or having thoughts of self-harm:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-lg font-semibold mb-2">Crisis Services Canada</div>
                  <div className="text-3xl font-bold text-red-400">1-833-456-4566</div>
                  <div className="text-sm text-slate-400">24/7 Crisis Support</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold mb-2">Emergency Services</div>
                  <div className="text-3xl font-bold text-red-400">911</div>
                  <div className="text-sm text-slate-400">Immediate Emergency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Family and Friends */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">For Family and Friends</h2>
            <p className="text-xl text-slate-600">How to help someone with a gambling problem</p>
          </div>

          <div className="space-y-8">
            <div className="modern-card shadow-modern p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Heart className="w-8 h-8 text-red-600 mr-3" />
                Supporting a Loved One
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-green-700 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    DO
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      Listen without judgment
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      Encourage them to seek professional help
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      Take care of your own well-being
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      Set boundaries about money
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      Learn about problem gambling
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-red-700 mb-3 flex items-center">
                    <Ban className="w-5 h-5 mr-2" />
                    DON'T
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      Lend or give them money
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      Cover up their gambling behavior
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      Threaten or give ultimatums
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      Blame yourself for their gambling
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      Try to control their gambling
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="modern-card shadow-modern p-8 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Resources for Families</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <div className="font-semibold">Gam-Anon (for families)</div>
                    <div className="text-slate-600 text-sm">Support groups for families affected by gambling</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-green-600 mr-3" />
                  <div>
                    <div className="font-semibold">Family Counseling Services</div>
                    <div className="text-slate-600 text-sm">Professional counseling for families dealing with gambling addiction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Our Commitment to Responsible Gaming</h2>
          
          <div className="modern-card shadow-modern p-8 mb-8">
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At TopCasinoWagers, we are committed to promoting responsible gambling practices. 
              We only recommend licensed casinos that provide responsible gaming tools and support 
              resources for their players.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="gradient-primary rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Safe Casinos Only</h4>
                <p className="text-sm text-slate-600">We only recommend licensed, regulated casinos</p>
              </div>
              
              <div className="text-center">
                <div className="gradient-secondary rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Player Welfare</h4>
                <p className="text-sm text-slate-600">Your well-being is our top priority</p>
              </div>
              
              <div className="text-center">
                <div className="gradient-accent rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Community Support</h4>
                <p className="text-sm text-slate-600">We promote awareness and education</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 border border-slate-200">
            <p className="text-slate-600 text-sm">
              <strong>Disclaimer:</strong> This information is for educational purposes only and is not a substitute 
              for professional medical or psychological advice. If you're struggling with gambling addiction, 
              please seek help from qualified professionals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResponsibleGamingPage;