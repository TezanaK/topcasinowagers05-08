import React from 'react';
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
  Mail,
  MessageCircle,
  Phone
} from 'lucide-react';

interface AboutPageProps {
  onNavigateHome?: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome }) => {
  // Add metadata for About page
  const aboutMetadata = {
    title: "About TopCasinoWagers - Canada's Trusted Casino Review Team",
    description: "Learn about TopCasinoWagers, Canada's premier casino review platform. Meet our expert team & discover our mission to help Canadian players.",
    keywords: "about TopCasinoWagers, Canadian casino experts, casino review team, trusted casino guide Canada"
  };

  const teamMembers = [
    {
      name: "Claire Thompson",
      role: "Casino Expert & Founder",
      experience: "12+ years",
      specialty: "Canadian Gaming Regulations",
      image: "/5844BB04-6320-48CB-8482-6D84B5FAD908.jpeg"
    },
    {
      name: "Peter Jacobs",
      role: "Gaming Analyst",
      experience: "8+ years",
      specialty: "Bonus Analysis & RTP",
      image: "/F7CC2C7D-2C47-4F27-920C-9E87CA77A2B0.jpeg"
    },
    {
      name: "Jessica Meyer",
      role: "Security Specialist",
      experience: "10+ years",
      specialty: "Casino Security & Licensing",
      image: "/167C05B3-7832-412C-B3B7-8ADDDC44F518.jpeg"
    }
  ];

  const achievements = [
    { icon: Users, number: "50K+", label: "Happy Players Helped" },
    { icon: Award, number: "100+", label: "Casinos Reviewed" },
    { icon: Star, number: "4.9", label: "Average User Rating" },
    { icon: Clock, number: "5", label: "Years of Experience" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We only recommend licensed, regulated casinos and clearly disclose our affiliate relationships."
    },
    {
      icon: Target,
      title: "Canadian Focus",
      description: "Specialized expertise in Canadian gaming laws, payment methods, and player preferences."
    },
    {
      icon: Heart,
      title: "Player First",
      description: "Your gaming experience and safety are our top priorities, not just commissions."
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "We constantly update our reviews and recommendations based on the latest industry changes."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* About Page Meta Tags */}
      <div style={{ display: 'none' }}>
        <title>{aboutMetadata.title}</title>
        <meta name="description" content={aboutMetadata.description} />
        <meta name="keywords" content={aboutMetadata.keywords} />
      </div>
      
      <header className="glass sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button 
              onClick={onNavigateHome}
              className="flex items-center cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <div className="relative animate-logo-glow">
                  {/* Main logo container with 3D effect */}
                  <div className="w-16 h-16 relative">
                    {/* Background glow */}
                    <div className="absolute inset-0 gradient-primary rounded-3xl blur-sm opacity-60"></div>
                    {/* Main logo */}
                    <div className="relative w-16 h-16 gradient-primary rounded-3xl flex items-center justify-center shadow-modern transform hover:scale-110 transition-all duration-500 border-2 border-green-400/30">
                      <Crown className="w-9 h-9 text-white animate-crown-rotate filter drop-shadow-lg" />
                    </div>
                    {/* Floating sparkles */}
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
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </button>
              <a href="#casinos" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Casinos
              </a>
              <a href="#bonuses" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Bonuses
              </a>
              <span className="text-blue-600 font-semibold font-medium">
                About
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
                <div className="relative">
                  <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center shadow-modern">
                    <Crown className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 gradient-accent rounded-full flex items-center justify-center animate-pulse">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-modern">
              <span className="text-yellow-300 animate-neon-pulse">
                About
              </span>
              <br />
              <span className="text-white">TopCasinoWagers</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto text-modern">
              🇨🇦 Canada's most trusted casino review platform, dedicated to helping players find safe, 
              exciting, and rewarding online gaming experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">TopCasinoWagers Company History and Mission</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-modern">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  Founded in 2019, TopCasinoWagers was born from a simple mission: to help Canadian players 
                  navigate the complex world of online casinos safely and confidently.
                </p>
                <p>
                  Our founder, Claire Thompson, experienced firsthand the challenges of finding trustworthy 
                  online casinos in Canada. After years of working in the gaming industry, she decided to 
                  create a platform that puts player safety and satisfaction first.
                </p>
                <p>
                  Today, we're proud to be Canada's leading casino review platform, having helped over 
                  50,000 players find their perfect gaming destination while maintaining the highest 
                  standards of integrity and transparency.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="modern-card shadow-modern p-8">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="glass rounded-2xl p-6 shadow-modern mb-3 border border-slate-200">
                        <achievement.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-slate-900">{achievement.number}</div>
                      </div>
                      <div className="text-sm text-slate-600 font-medium">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-modern">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="modern-card shadow-modern-hover group">
                <div className="p-8 text-center">
                  <div className="gradient-primary rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-modern">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-slate-600">
              Industry professionals dedicated to your gaming success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="modern-card shadow-modern-hover text-center group">
                <div className="p-8">
                  <div className="relative mb-6">
                    <img 
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-32 h-32 rounded-full mx-auto object-cover shadow-modern border-4 border-white group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{member.name}</h3>
                  <div className="text-green-600 font-medium mb-3">{member.role}</div>
                  <div className="glass rounded-xl p-3 mb-3 border border-slate-200">
                    <div className="text-sm text-slate-600 font-medium">{member.experience} Experience</div>
                  </div>
                  <div className="text-sm text-slate-500 italic">Specializes in {member.specialty}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-modern">
              Our Review Process
            </h2>
            <p className="text-xl text-slate-600">
              How we ensure you get the most accurate and helpful casino reviews
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="gradient-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-modern">1</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Research & Registration</h3>
              <p className="text-slate-600 text-sm">We create real accounts and test the registration process</p>
            </div>
            <div className="text-center">
              <div className="gradient-secondary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-modern">2</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Security Analysis</h3>
              <p className="text-slate-600 text-sm">We verify licenses, security measures, and fair play policies</p>
            </div>
            <div className="text-center">
              <div className="gradient-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-modern">3</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Gaming Experience</h3>
              <p className="text-slate-600 text-sm">We test games, bonuses, and overall user experience</p>
            </div>
            <div className="text-center">
              <div className="gradient-gold text-slate-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-modern">4</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Payout Testing</h3>
              <p className="text-slate-600 text-sm">We make real deposits and withdrawals to test payout speeds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Canadian Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <MapPin className="w-10 h-10 text-red-600 mr-4" />
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-modern">
                  Why We Focus on Canada
                </h2>
              </div>
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  Canadian players have unique needs when it comes to online gambling. From provincial 
                  regulations to preferred payment methods, we understand the Canadian gaming landscape 
                  better than anyone.
                </p>
                <div className="grid grid-cols-2 gap-6 my-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="font-medium">CAD Currency Support</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="font-medium">Canadian Banking</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="font-medium">Provincial Compliance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="font-medium">Local Customer Support</span>
                  </div>
                </div>
                <p>
                  We're not just another generic casino review site. We're your Canadian neighbors who 
                  understand what makes a great online casino experience for players from coast to coast.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="modern-card shadow-modern p-8 text-center">
                <div className="text-8xl mb-4">🇨🇦</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Proudly Canadian</h3>
                <p className="text-slate-600 mb-6">
                  Serving players from Vancouver to Halifax with expert local knowledge and dedication.
                </p>
                <div className="glass rounded-2xl p-6 border border-slate-200">
                  <div className="text-3xl font-bold text-red-600">50,000+</div>
                  <div className="text-slate-600 font-medium">Canadian Players Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency & Disclosure */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-modern">
              Transparency & Disclosure
            </h2>
            <p className="text-xl text-slate-600">
              We believe in complete honesty about how we operate
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="modern-card shadow-modern-hover group">
              <div className="p-8 text-center">
                <div className="gradient-gold rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-10 h-10 text-slate-800" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Affiliate Disclosure</h3>
                <p className="text-slate-600">
                  We earn commissions when you sign up through our links, but this never affects our honest reviews or recommendations.
                </p>
              </div>
            </div>

            <div className="modern-card shadow-modern-hover group">
              <div className="p-8 text-center">
                <div className="gradient-secondary rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Editorial Independence</h3>
                <p className="text-slate-600">
                  Our reviews are completely independent. We test every casino ourselves and provide unbiased opinions.
                </p>
              </div>
            </div>

            <div className="modern-card shadow-modern-hover group">
              <div className="p-8 text-center">
                <div className="gradient-accent rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Regular Updates</h3>
                <p className="text-slate-600">
                  We continuously monitor casinos and update our reviews to reflect any changes in quality or service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-modern">
            Have Questions About Our Reviews?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            We're here to help you make informed decisions about your gaming experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => window.location.href = '#contact'}
              className="btn-gold rounded-2xl py-4 px-8 font-bold shadow-modern-hover transform hover:scale-105 transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2 inline" />
              Contact Our Team
            </button>
            <button className="glass-dark border-2 border-white/20 text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-300">
              <Trophy className="w-5 h-5 mr-2 inline" />
              Read Our FAQ
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;