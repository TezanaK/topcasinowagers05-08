import React from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  Users, 
  Globe, 
  Mail,
  Crown,
  Sparkles,
  CheckCircle,
  AlertTriangle,
  FileText,
  Database,
  Settings,
  UserCheck,
  Trash2,
  Download,
  Share2,
  Cookie,
  Smartphone,
  Monitor,
  MapPin,
  Ban
} from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigateHome?: () => void;
  onNavigateTo?: (page: string) => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigateHome, onNavigateTo }) => {
  const privacyMetadata = {
    title: "Privacy Policy - TopCasinoWagers Canada | Data Protection & Privacy",
    description: "TopCasinoWagers Privacy Policy. Learn how we collect, use & protect your personal information. GDPR compliant privacy practices for Canadians.",
    keywords: "privacy policy, data protection, GDPR, personal information, TopCasinoWagers privacy, Canadian privacy laws"
  };

  const dataTypes = [
    {
      icon: UserCheck,
      title: "Personal Information",
      description: "Name, email address, age verification, and contact details when you voluntarily provide them.",
      examples: ["Contact form submissions", "Newsletter subscriptions", "Account creation"]
    },
    {
      icon: Monitor,
      title: "Technical Information",
      description: "Device information, browser type, IP address, and website usage patterns.",
      examples: ["Browser version", "Operating system", "Screen resolution", "Referral sources"]
    },
    {
      icon: Cookie,
      title: "Cookies & Tracking",
      description: "Small files stored on your device to improve website functionality and user experience.",
      examples: ["Preference settings", "Analytics data", "Marketing cookies", "Session management"]
    },
    {
      icon: Globe,
      title: "Location Data",
      description: "General geographic location to ensure compliance with local gambling laws.",
      examples: ["Country/province detection", "Legal compliance", "Localized content"]
    }
  ];

  const dataUses = [
    {
      icon: Settings,
      title: "Website Operation",
      description: "To provide, maintain, and improve our casino review services."
    },
    {
      icon: Mail,
      title: "Communication",
      description: "To respond to inquiries and send requested information about casinos and bonuses."
    },
    {
      icon: Shield,
      title: "Legal Compliance",
      description: "To comply with applicable laws and regulations, including age verification requirements."
    },
    {
      icon: Users,
      title: "User Experience",
      description: "To personalize content and improve website functionality based on user preferences."
    },
    {
      icon: FileText,
      title: "Analytics",
      description: "To understand how visitors use our website and improve our content and services."
    },
    {
      icon: AlertTriangle,
      title: "Safety & Security",
      description: "To protect against fraud, abuse, and other harmful activities."
    }
  ];

  const userRights = [
    {
      icon: Eye,
      title: "Right to Access",
      description: "You can request a copy of the personal information we hold about you."
    },
    {
      icon: Settings,
      title: "Right to Rectification",
      description: "You can request correction of inaccurate or incomplete personal information."
    },
    {
      icon: Trash2,
      title: "Right to Erasure",
      description: "You can request deletion of your personal information under certain circumstances."
    },
    {
      icon: Download,
      title: "Right to Portability",
      description: "You can request your personal information in a structured, machine-readable format."
    },
    {
      icon: Ban,
      title: "Right to Object",
      description: "You can object to processing of your personal information for marketing purposes."
    },
    {
      icon: Lock,
      title: "Right to Restrict",
      description: "You can request restriction of processing under certain circumstances."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Privacy Policy Page Meta Tags */}
      <div style={{ display: 'none' }}>
        <title>{privacyMetadata.title}</title>
        <meta name="description" content={privacyMetadata.description} />
        <meta name="keywords" content={privacyMetadata.keywords} />
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
                Privacy Policy
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
                  <Shield className="w-8 h-8 text-blue-400 mr-3" />
                  <span className="text-lg font-bold">PRIVACY PROTECTED</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-modern">
              <span className="text-blue-300 animate-neon-pulse">Privacy</span>
              <br />
              <span className="text-white">Policy</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto text-modern">
              🔒 Your privacy matters to us. Learn how we collect, use, and protect your personal information.
            </p>
            
            <div className="glass-dark rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto">
              <p className="text-sm opacity-90">
                <strong>Last Updated:</strong> January 2024 | 
                <strong> Effective Date:</strong> January 1, 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="modern-card shadow-modern p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Introduction</h2>
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="mb-6">
                TopCasinoWagers ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website <strong>topcasinowagers.ca</strong> and use our services.
              </p>
              
              <p className="mb-6">
                We are a Canadian-based casino review and affiliate marketing website that provides information 
                about online casinos, bonuses, and gambling-related content to Canadian residents.
              </p>
              
              <div className="glass rounded-2xl p-6 border border-blue-200 bg-blue-50">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Your Consent</h4>
                    <p className="text-blue-800 text-sm">
                      By using our website, you consent to the collection and use of your information as described 
                      in this Privacy Policy. If you do not agree with our policies, please do not use our website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Types of Personal Information We Collect</h2>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Information We Collect</h2>
            <p className="text-xl text-slate-600">We collect different types of information to provide and improve our services</p>
             
             {/* Additional descriptive content */}
             <div className="max-w-4xl mx-auto mt-8 text-lg text-slate-600 leading-relaxed">
               <p className="mb-4">
                 <strong>TopCasinoWagers</strong> is committed to transparency about the information we collect from visitors to our <strong>Canadian casino review website</strong>. We only collect information that is necessary to provide our services, improve user experience, and comply with applicable <strong>Canadian privacy laws</strong> including <strong>PIPEDA (Personal Information Protection and Electronic Documents Act)</strong>. Our data collection practices are designed to respect your privacy while enabling us to deliver the most relevant and helpful <strong>casino reviews</strong> and <strong>bonus recommendations</strong>.
               </p>
               <p>
                 The information we collect falls into several categories, each serving specific purposes related to our mission of helping <strong>Canadian players</strong> find the <strong>best online casinos</strong>. We use industry-standard security measures to protect all collected information and never sell personal data to third parties. Our commitment to <strong>data protection</strong> and <strong>user privacy</strong> is fundamental to maintaining the trust of the <strong>Canadian gambling community</strong> we serve.
               </p>
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {dataTypes.map((type, index) => (
              <div key={index} className="modern-card shadow-modern-hover">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="gradient-primary rounded-2xl w-12 h-12 flex items-center justify-center mr-4">
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{type.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-4">{type.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-800 text-sm">Examples:</h4>
                    {type.examples.map((example, exIndex) => (
                      <div key={exIndex} className="flex items-center text-sm text-slate-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">How We Use Your Information</h2>
            <p className="text-xl text-slate-600">We use collected information for legitimate business purposes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataUses.map((use, index) => (
              <div key={index} className="modern-card shadow-modern-hover text-center">
                <div className="p-6">
                  <div className="gradient-secondary rounded-3xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <use.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{use.title}</h3>
                  <p className="text-slate-600 text-sm">{use.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Sharing */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="modern-card shadow-modern p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <Share2 className="w-8 h-8 text-blue-600 mr-3" />
              Information Sharing and Disclosure
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">We DO NOT sell your personal information</h3>
                <p className="text-slate-600 mb-6">
                  TopCasinoWagers does not sell, trade, or rent your personal information to third parties. 
                  We may share information only in the following limited circumstances:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass rounded-2xl p-6 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                    <Shield className="w-5 h-5 text-green-600 mr-2" />
                    Service Providers
                  </h4>
                  <p className="text-slate-600 text-sm">
                    With trusted third-party service providers who help us operate our website 
                    (analytics, hosting, email services) under strict confidentiality agreements.
                  </p>
                </div>
                
                <div className="glass rounded-2xl p-6 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                    <FileText className="w-5 h-5 text-blue-600 mr-2" />
                    Legal Requirements
                  </h4>
                  <p className="text-slate-600 text-sm">
                    When required by law, court order, or government regulation, or to protect 
                    our rights, property, or safety, or that of others.
                  </p>
                </div>
                
                <div className="glass rounded-2xl p-6 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                    <Users className="w-5 h-5 text-purple-600 mr-2" />
                    Business Transfers
                  </h4>
                  <p className="text-slate-600 text-sm">
                    In connection with a merger, acquisition, or sale of assets, where information 
                    may be transferred as part of the business transaction.
                  </p>
                </div>
                
                <div className="glass rounded-2xl p-6 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    With Your Consent
                  </h4>
                  <p className="text-slate-600 text-sm">
                    When you explicitly consent to sharing your information for specific purposes, 
                    such as newsletter subscriptions or promotional offers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies and Tracking */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="modern-card shadow-modern p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <Cookie className="w-8 h-8 text-orange-600 mr-3" />
              Cookies and Tracking Technologies
            </h2>
            
            <div className="space-y-6">
              <p className="text-slate-600">
                We use cookies and similar tracking technologies to enhance your browsing experience 
                and analyze website traffic. Cookies are small text files stored on your device.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="gradient-primary rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Essential Cookies</h4>
                  <p className="text-sm text-slate-600">Required for website functionality and cannot be disabled</p>
                </div>
                
                <div className="text-center">
                  <div className="gradient-secondary rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Analytics Cookies</h4>
                  <p className="text-sm text-slate-600">Help us understand how visitors interact with our website</p>
                </div>
                
                <div className="text-center">
                  <div className="gradient-accent rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Marketing Cookies</h4>
                  <p className="text-sm text-slate-600">Used to deliver relevant advertisements and track campaign effectiveness</p>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 border border-blue-200 bg-blue-50">
                <h4 className="font-bold text-blue-900 mb-3">Cookie Management</h4>
                <p className="text-blue-800 text-sm mb-3">
                  You can control cookies through your browser settings. However, disabling certain cookies 
                  may affect website functionality.
                </p>
                <div className="text-sm text-blue-700">
                  <strong>Popular browsers:</strong> Chrome, Firefox, Safari, and Edge all provide cookie management options in their settings.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Your Privacy Rights</h2>
            <p className="text-xl text-slate-600">You have control over your personal information</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userRights.map((right, index) => (
              <div key={index} className="modern-card shadow-modern-hover">
                <div className="p-6">
                  <div className="gradient-primary rounded-2xl w-12 h-12 flex items-center justify-center mb-4">
                    <right.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{right.title}</h3>
                  <p className="text-slate-600 text-sm">{right.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="modern-card shadow-modern p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Exercise Your Rights</h3>
              <p className="text-slate-600 mb-6">
                To exercise any of these rights, please contact us using the information provided below. 
                We will respond to your request within 30 days.
              </p>
              <button 
                onClick={() => onNavigateTo?.('contact')}
                className="btn-modern rounded-xl py-3 px-8 font-semibold"
              >
                <Mail className="w-5 h-5 mr-2 inline" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="modern-card shadow-modern p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <Lock className="w-8 h-8 text-green-600 mr-3" />
              Data Security
            </h2>
            
            <div className="space-y-6">
              <p className="text-slate-600">
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass rounded-2xl p-6 border border-green-200 bg-green-50">
                  <h4 className="font-bold text-green-900 mb-3 flex items-center">
                    <Shield className="w-5 h-5 text-green-600 mr-2" />
                    Technical Safeguards
                  </h4>
                  <ul className="space-y-2 text-green-800 text-sm">
                    <li>• SSL/TLS encryption for data transmission</li>
                    <li>• Secure hosting infrastructure</li>
                    <li>• Regular security updates and patches</li>
                    <li>• Access controls and authentication</li>
                  </ul>
                </div>
                
                <div className="glass rounded-2xl p-6 border border-blue-200 bg-blue-50">
                  <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                    <Users className="w-5 h-5 text-blue-600 mr-2" />
                    Organizational Measures
                  </h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li>• Staff training on data protection</li>
                    <li>• Limited access on need-to-know basis</li>
                    <li>• Regular security assessments</li>
                    <li>• Incident response procedures</li>
                  </ul>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 border border-orange-200 bg-orange-50">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-orange-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-orange-900 mb-2">Important Security Notice</h4>
                    <p className="text-orange-800 text-sm">
                      While we strive to protect your personal information, no method of transmission over 
                      the internet or electronic storage is 100% secure. We cannot guarantee absolute security 
                      but continuously work to improve our security measures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="modern-card shadow-modern p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <Database className="w-8 h-8 text-purple-600 mr-3" />
              Data Retention
            </h2>
            
            <div className="space-y-6">
              <p className="text-slate-600">
                We retain your personal information only for as long as necessary to fulfill the purposes 
                for which it was collected and to comply with legal obligations.
              </p>

              <div className="space-y-4">
                <div className="glass rounded-xl p-4 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-2">Contact Information</h4>
                  <p className="text-slate-600 text-sm">
                    Retained for 3 years after last contact or until you request deletion
                  </p>
                </div>
                
                <div className="glass rounded-xl p-4 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-2">Website Analytics</h4>
                  <p className="text-slate-600 text-sm">
                    Aggregated and anonymized data retained for up to 26 months
                  </p>
                </div>
                
                <div className="glass rounded-xl p-4 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-2">Legal Compliance</h4>
                  <p className="text-slate-600 text-sm">
                    Some information may be retained longer to comply with legal requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Transfers */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="modern-card shadow-modern p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <Globe className="w-8 h-8 text-blue-600 mr-3" />
              International Data Transfers
            </h2>
            
            <div className="space-y-6">
              <p className="text-slate-600">
                As a Canadian website, we primarily store and process data within Canada. However, 
                some of our service providers may be located in other countries, including the United States.
              </p>

              <div className="glass rounded-2xl p-6 border border-blue-200 bg-blue-50">
                <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  Cross-Border Protections
                </h4>
                <ul className="space-y-2 text-blue-800 text-sm">
                  <li>• We ensure adequate protection through contractual safeguards</li>
                  <li>• Service providers must comply with privacy standards equivalent to Canadian law</li>
                  <li>• Data processing agreements include security and confidentiality requirements</li>
                  <li>• We regularly review and audit our service providers' practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="modern-card shadow-modern p-8 border-l-4 border-red-500">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <Shield className="w-8 h-8 text-red-600 mr-3" />
              Children's Privacy (18+ Only)
            </h2>
            
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 border border-red-200 bg-red-50">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-red-900 mb-2">Age Restriction</h4>
                    <p className="text-red-800 text-sm mb-3">
                      Our website is intended for adults aged 18 and older. We do not knowingly collect 
                      personal information from individuals under 18 years of age.
                    </p>
                    <p className="text-red-800 text-sm">
                      If we become aware that we have collected personal information from someone under 18, 
                      we will delete that information immediately.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h4 className="font-bold text-slate-900 mb-3">Parental Notice</h4>
                <p className="text-slate-600 text-sm">
                  If you are a parent or guardian and believe your child has provided personal information 
                  to us, please contact us immediately so we can remove that information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Changes to Privacy Policy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="modern-card shadow-modern p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <FileText className="w-8 h-8 text-green-600 mr-3" />
              Changes to This Privacy Policy
            </h2>
            
            <div className="space-y-6">
              <p className="text-slate-600">
                We may update this Privacy Policy from time to time to reflect changes in our practices, 
                technology, legal requirements, or other factors.
              </p>

              <div className="glass rounded-2xl p-6 border border-green-200 bg-green-50">
                <h4 className="font-bold text-green-900 mb-3">How We Notify You</h4>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• We will post the updated policy on this page with a new "Last Updated" date</li>
                  <li>• For significant changes, we may provide additional notice via email or website banner</li>
                  <li>• We encourage you to review this policy periodically</li>
                  <li>• Continued use of our website after changes constitutes acceptance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Contact Us About Privacy</h2>
            <p className="text-xl opacity-90">Questions about this Privacy Policy? We're here to help.</p>
          </div>

          <div className="glass-dark rounded-2xl p-8 border border-white/20 shadow-modern">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Privacy Officer</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-blue-400" />
                    <span>privacy@topcasinowagers.ca</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-green-400" />
                    <span>Canada</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Response Time</h3>
                <div className="space-y-3 text-slate-300">
                  <p className="text-sm">• Privacy inquiries: Within 5 business days</p>
                  <p className="text-sm">• Data requests: Within 30 days</p>
                  <p className="text-sm">• Urgent matters: Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button 
                onClick={() => onNavigateTo?.('contact')}
                className="btn-gold rounded-xl py-3 px-8 font-semibold"
              >
                <Mail className="w-5 h-5 mr-2 inline" />
                Contact Privacy Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Compliance */}
      <section className="py-12 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">Legal Compliance</h4>
            <p className="text-slate-600 text-sm mb-4">
              This Privacy Policy is designed to comply with Canadian privacy laws including the Personal 
              Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy legislation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500">
              <span>• PIPEDA Compliant</span>
              <span>• GDPR Aligned</span>
              <span>• CCPA Considerations</span>
              <span>• Provincial Privacy Laws</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;