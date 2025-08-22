import React from 'react';
import { 
  MapPin, 
  Shield, 
  Award, 
  CreditCard, 
  Clock, 
  Users, 
  Crown,
  Sparkles,
  Play,
  Trophy,
  Star,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  Globe,
  Phone,
  Mail,
  Building,
  Scale,
  FileText,
  Heart,
  Target
} from 'lucide-react';

interface LocationPagesProps {
  location: string;
  onNavigateHome?: () => void;
  onNavigateTo?: (page: string) => void;
}

const LocationPages: React.FC<LocationPagesProps> = ({ location, onNavigateHome, onNavigateTo }) => {
  const locationData: { [key: string]: any } = {
    'ontario': {
      name: 'Ontario',
      fullName: 'Ontario, Canada',
      population: '14.8 million',
      capital: 'Toronto',
      regulator: 'iGaming Ontario (iGO)',
      legalStatus: 'Fully Regulated',
      description: 'Ontario has the most comprehensive online gambling regulation in Canada with iGaming Ontario overseeing licensed operators.',
      keyFacts: [
        'First province with regulated online casino market',
        'iGaming Ontario launched April 2022',
        'Only residents can play at Ontario-licensed sites',
        'Strict player protection measures',
        'Revenue sharing with the province'
      ],
      bestCasinos: [
        { name: 'NEOSPIN', rating: 4.9, bonus: '100% + 100 FS' },
        { name: 'EVOSPIN', rating: 4.8, bonus: '285% + 285 FS' },
        { name: 'VICIBET', rating: 4.7, bonus: '100% + 50 FS' }
      ],
      paymentMethods: [
        'Interac e-Transfer',
        'PayPal (Ontario licensed sites)',
        'Visa/Mastercard',
        'Bank Transfer',
        'Instadebit'
      ],
      restrictions: [
        'Must be 19+ years old',
        'Must be physically located in Ontario',
        'Self-exclusion programs available',
        'Spending limits can be set'
      ],
      helpResources: [
        { name: 'ConnexOntario', phone: '1-866-531-2600', description: 'Mental health and addiction services' },
        { name: 'Problem Gambling Helpline', phone: '1-888-230-3505', description: '24/7 confidential support' }
      ]
    },
    'british-columbia': {
      name: 'British Columbia',
      fullName: 'British Columbia, Canada',
      population: '5.2 million',
      capital: 'Victoria',
      regulator: 'BC Gaming Policy and Enforcement Branch',
      legalStatus: 'Provincial Monopoly + Offshore Sites',
      description: 'BC operates PlayNow.com as the official online casino, while residents can also access offshore licensed sites.',
      keyFacts: [
        'PlayNow.com is the official provincial site',
        'Offshore sites are accessible to residents',
        'Strong responsible gambling programs',
        'Revenue supports community programs',
        'Age of majority is 19'
      ],
      bestCasinos: [
        { name: 'CASINO INFINITY', rating: 4.7, bonus: '10% Cashback' },
        { name: 'NEOSPIN', rating: 4.9, bonus: '100% + 100 FS' },
        { name: 'EVOSPIN', rating: 4.8, bonus: '285% + 285 FS' }
      ],
      paymentMethods: [
        'Interac e-Transfer',
        'Visa/Mastercard',
        'Bank Transfer',
        'PaySafeCard',
        'ecoPayz'
      ],
      restrictions: [
        'Must be 19+ years old',
        'PlayNow.com geo-restricted to BC',
        'Self-exclusion available',
        'GameSense responsible gambling program'
      ],
      helpResources: [
        { name: 'BC Responsible & Problem Gambling', phone: '1-888-795-6111', description: 'BC gambling support services' },
        { name: 'Problem Gambling Helpline', phone: '1-888-230-3505', description: '24/7 national support' }
      ]
    },
    'alberta': {
      name: 'Alberta',
      fullName: 'Alberta, Canada',
      population: '4.4 million',
      capital: 'Edmonton',
      regulator: 'Alberta Gaming, Liquor and Cannabis (AGLC)',
      legalStatus: 'Provincial Sites + Offshore Access',
      description: 'Alberta residents can access PlayAlberta.ca and offshore licensed casino sites with no legal restrictions.',
      keyFacts: [
        'PlayAlberta.ca is the official provincial site',
        'No restrictions on offshore casino access',
        'Strong oil economy supports gambling',
        'Age of majority is 18',
        'Comprehensive responsible gambling programs'
      ],
      bestCasinos: [
        { name: 'GUNS BET', rating: 4.8, bonus: '335% + 300 FS' },
        { name: 'ONLUCK.COM', rating: 4.9, bonus: '285% + 225 FS' },
        { name: 'VICIBET', rating: 4.7, bonus: '100% + 50 FS' }
      ],
      paymentMethods: [
        'Interac e-Transfer',
        'Visa/Mastercard',
        'Bank Transfer',
        'Instadebit',
        'Cryptocurrency'
      ],
      restrictions: [
        'Must be 18+ years old',
        'PlayAlberta geo-restricted to Alberta',
        'Voluntary self-exclusion programs',
        'Spending limit tools available'
      ],
      helpResources: [
        { name: 'Alberta Gaming & Liquor Commission', phone: '1-800-665-9769', description: 'Responsible gambling resources' },
        { name: 'Problem Gambling Helpline', phone: '1-888-230-3505', description: '24/7 confidential support' }
      ]
    },
    'quebec': {
      name: 'Quebec',
      fullName: 'Quebec, Canada',
      population: '8.6 million',
      capital: 'Quebec City',
      regulator: 'Loto-Québec',
      legalStatus: 'Provincial Monopoly + Offshore Access',
      description: 'Quebec operates EspaceJeux as the official online casino, available in French and English for Quebec residents.',
      keyFacts: [
        'EspaceJeux.com is the official provincial site',
        'Available in French and English',
        'Offshore sites accessible to residents',
        'Strong French-Canadian gambling culture',
        'Age of majority is 18'
      ],
      bestCasinos: [
        { name: 'EVOSPIN', rating: 4.8, bonus: '285% + 285 FS' },
        { name: 'CASINO INFINITY', rating: 4.7, bonus: '10% Cashback' },
        { name: 'NEOSPIN', rating: 4.9, bonus: '100% + 100 FS' }
      ],
      paymentMethods: [
        'Interac e-Transfer',
        'Visa/Mastercard',
        'Bank Transfer',
        'PaySafeCard',
        'Neosurf'
      ],
      restrictions: [
        'Must be 18+ years old',
        'EspaceJeux geo-restricted to Quebec',
        'French language gambling options',
        'Self-exclusion programs available'
      ],
      helpResources: [
        { name: 'Ligne Aide Jeu', phone: '1-800-461-0140', description: 'Quebec gambling helpline (French/English)' },
        { name: 'Problem Gambling Helpline', phone: '1-888-230-3505', description: '24/7 national support' }
      ]
    },
    'manitoba': {
      name: 'Manitoba',
      fullName: 'Manitoba, Canada',
      population: '1.4 million',
      capital: 'Winnipeg',
      regulator: 'Manitoba Liquor and Lotteries Corporation',
      legalStatus: 'No Provincial Online Casino + Offshore Access',
      description: 'Manitoba does not operate an official online casino, but residents can freely access offshore licensed sites.',
      keyFacts: [
        'No official provincial online casino',
        'Residents access offshore sites freely',
        'Strong land-based casino presence',
        'Age of majority is 18',
        'Focus on responsible gambling education'
      ],
      bestCasinos: [
        { name: 'NEOSPIN', rating: 4.9, bonus: '100% + 100 FS' },
        { name: 'VICIBET', rating: 4.7, bonus: '100% + 50 FS' },
        { name: 'CASINO INFINITY', rating: 4.7, bonus: '10% Cashback' }
      ],
      paymentMethods: [
        'Interac e-Transfer',
        'Visa/Mastercard',
        'Bank Transfer',
        'ecoPayz',
        'Cryptocurrency'
      ],
      restrictions: [
        'Must be 18+ years old',
        'No provincial online restrictions',
        'Self-exclusion programs available',
        'Responsible gambling resources'
      ],
      helpResources: [
        { name: 'Addictions Foundation of Manitoba', phone: '1-855-662-6605', description: 'Addiction support services' },
        { name: 'Problem Gambling Helpline', phone: '1-888-230-3505', description: '24/7 confidential support' }
      ]
    },
    'atlantic-canada': {
      name: 'Atlantic Canada',
      fullName: 'Nova Scotia, New Brunswick, PEI & Newfoundland',
      population: '2.4 million',
      capital: 'Halifax (NS), Fredericton (NB), Charlottetown (PEI), St. John\'s (NL)',
      regulator: 'Atlantic Lottery Corporation (ALC)',
      legalStatus: 'Regional Monopoly + Offshore Access',
      description: 'The Atlantic provinces share the Atlantic Lottery Corporation and residents can access both ALC.ca and offshore sites.',
      keyFacts: [
        'ALC.ca serves all four Atlantic provinces',
        'Shared lottery and gaming corporation',
        'Offshore sites accessible to residents',
        'Strong maritime gambling traditions',
        'Age of majority is 19'
      ],
      bestCasinos: [
        { name: 'ONLUCK.COM', rating: 4.9, bonus: '285% + 225 FS' },
        { name: 'EVOSPIN', rating: 4.8, bonus: '285% + 285 FS' },
        { name: 'GUNS BET', rating: 4.8, bonus: '335% + 300 FS' }
      ],
      paymentMethods: [
        'Interac e-Transfer',
        'Visa/Mastercard',
        'Bank Transfer',
        'PaySafeCard',
        'Instadebit'
      ],
      restrictions: [
        'Must be 19+ years old',
        'ALC.ca geo-restricted to Atlantic Canada',
        'Self-exclusion programs available',
        'Responsible gambling initiatives'
      ],
      helpResources: [
        { name: 'Problem Gambling Services', phone: '1-888-347-8888', description: 'Atlantic Canada gambling support' },
        { name: 'Problem Gambling Helpline', phone: '1-888-230-3505', description: '24/7 national support' }
      ]
    }
  };

  const locationInfo = locationData[location] || locationData['ontario'];
  
  const pageTitle = `Best Online Casinos in ${locationInfo.name} Canada 2024 | TopCasinoWagers`;
  const pageDescription = `Top online casinos for ${locationInfo.name} players. ${locationInfo.legalStatus}. Expert reviews, bonuses & legal info for residents.`;
  const pageKeywords = `${locationInfo.name} online casinos, ${locationInfo.name} gambling, Canadian casinos ${locationInfo.name}, online casino ${locationInfo.name}`;

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
      {/* SEO Meta Tags */}
      <div style={{ display: 'none' }}>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://topcasinowagers.ca/location-${location}`} />
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
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="glass-dark rounded-2xl px-6 py-3 border border-white/20">
                <div className="flex items-center">
                  <MapPin className="w-8 h-8 text-red-400 mr-3" />
                  <span className="text-lg font-bold">{locationInfo.name.toUpperCase()}</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-modern">
              <span className="text-red-300 animate-neon-pulse">{locationInfo.name}</span>
              <br />
              <span className="text-white">Casinos</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto text-modern">
              🍁 {locationInfo.description}
            </p>

            {/* Location Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="glass-dark rounded-2xl px-6 py-4 border border-white/20">
                <div className="text-2xl font-bold text-blue-400">{locationInfo.population}</div>
                <div className="text-sm opacity-80">Population</div>
              </div>
              <div className="glass-dark rounded-2xl px-6 py-4 border border-white/20">
                <div className="text-2xl font-bold text-green-400">{locationInfo.legalStatus.split(' ')[0]}</div>
                <div className="text-sm opacity-80">Legal Status</div>
              </div>
              <div className="glass-dark rounded-2xl px-6 py-4 border border-white/20">
                <div className="text-2xl font-bold text-yellow-400">19+</div>
                <div className="text-sm opacity-80">Age Requirement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">{locationInfo.name} Online Casino Legal Information and Regulations</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="modern-card shadow-modern p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <Scale className="w-8 h-8 text-blue-600 mr-3" />
                Legal Status
              </h2>
              <div className="space-y-4">
                <div className="glass rounded-xl p-4 border border-slate-200">
                  <div className="flex items-center mb-2">
                    <Shield className="w-5 h-5 text-green-500 mr-2" />
                    <span className="font-semibold text-slate-900">Regulatory Body</span>
                  </div>
                  <p className="text-slate-600 text-sm">{locationInfo.regulator}</p>
                </div>
                
                <div className="glass rounded-xl p-4 border border-slate-200">
                  <div className="flex items-center mb-2">
                    <FileText className="w-5 h-5 text-blue-500 mr-2" />
                    <span className="font-semibold text-slate-900">Current Status</span>
                  </div>
                  <p className="text-slate-600 text-sm">{locationInfo.legalStatus}</p>
                </div>
                
                <div className="glass rounded-xl p-4 border border-slate-200">
                  <div className="flex items-center mb-2">
                    <Building className="w-5 h-5 text-purple-500 mr-2" />
                    <span className="font-semibold text-slate-900">Capital City</span>
                  </div>
                  <p className="text-slate-600 text-sm">{locationInfo.capital}</p>
                </div>
              </div>
            </div>

            <div className="modern-card shadow-modern p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                Key Facts
              </h2>
              <div className="space-y-4">
                {locationInfo.keyFacts.map((fact: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-slate-700">{fact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Casinos */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Best Casinos for {locationInfo.name} Players</h2>
            <p className="text-xl text-slate-600">Top-rated online casinos accepting players from {locationInfo.fullName}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {locationInfo.bestCasinos.map((casino: any, index: number) => (
              <div key={index} className="modern-card shadow-modern-hover">
                <div className="p-8 text-center">
                  <div className="gradient-primary rounded-3xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{casino.name}</h3>
                  <div className="flex justify-center mb-4">
                    {renderStars(casino.rating)}
                    <span className="ml-2 text-sm font-bold text-slate-700">{casino.rating}/5</span>
                  </div>
                  <div className="gradient-gold rounded-xl p-3 mb-4">
                    <div className="font-bold text-slate-900 text-sm">{casino.bonus}</div>
                  </div>
                  <button 
                    onClick={() => onNavigateTo?.(`casino-${casino.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`)}
                    className="w-full btn-modern rounded-xl py-3 font-semibold"
                  >
                    <Play className="w-4 h-4 mr-2 inline" />
                    Play Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="modern-card shadow-modern p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <CreditCard className="w-8 h-8 text-blue-600 mr-3" />
                Payment Methods
              </h2>
              <div className="space-y-3">
                {locationInfo.paymentMethods.map((method: string, index: number) => (
                  <div key={index} className="flex items-center glass rounded-lg p-3 border border-slate-200">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="font-medium text-slate-700">{method}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="modern-card shadow-modern p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <AlertTriangle className="w-8 h-8 text-orange-600 mr-3" />
                Restrictions & Requirements
              </h2>
              <div className="space-y-3">
                {locationInfo.restrictions.map((restriction: string, index: number) => (
                  <div key={index} className="flex items-start glass rounded-lg p-3 border border-orange-200 bg-orange-50">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-orange-800 text-sm">{restriction}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Resources */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 flex items-center justify-center">
              <Heart className="w-8 h-8 text-red-600 mr-3" />
              Responsible Gaming Resources
            </h2>
            <p className="text-xl text-slate-600">Help and support for {locationInfo.name} residents</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {locationInfo.helpResources.map((resource: any, index: number) => (
              <div key={index} className="modern-card shadow-modern p-8 border-l-4 border-red-500">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900">{resource.name}</h3>
                </div>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-red-600">{resource.phone}</div>
                </div>
                <p className="text-slate-600">{resource.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="modern-card shadow-modern p-8 max-w-2xl mx-auto border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">🚨 Crisis Support</h3>
              <p className="text-slate-600 mb-6">If you're in immediate crisis or having thoughts of self-harm:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-lg font-semibold mb-2">Crisis Services Canada</div>
                  <div className="text-3xl font-bold text-red-600">1-833-456-4566</div>
                  <div className="text-sm text-slate-500">24/7 Crisis Support</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold mb-2">Emergency Services</div>
                  <div className="text-3xl font-bold text-red-600">911</div>
                  <div className="text-sm text-slate-500">Immediate Emergency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">{locationInfo.name} Casino FAQ</h2>
          <div className="space-y-6">
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Can I legally play at online casinos in {locationInfo.name}?</h3>
              <p className="text-slate-600">
                Yes, residents of {locationInfo.name} can legally play at licensed offshore online casinos. 
                {locationInfo.legalStatus === 'Fully Regulated' ? ' The province also has its own regulated online casino market.' : ''}
                {locationInfo.regulator && ` The ${locationInfo.regulator} oversees gambling regulation in the province.`}
              </p>
            </div>
            
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">What payment methods work best for {locationInfo.name} players?</h3>
              <p className="text-slate-600">
                Interac e-Transfer is the most popular payment method for {locationInfo.name} players, offering instant deposits 
                and secure bank-to-bank transfers. Credit cards, bank transfers, and e-wallets are also widely accepted.
              </p>
            </div>
            
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Are there any restrictions for {locationInfo.name} residents?</h3>
              <p className="text-slate-600">
                The main restriction is the age requirement - you must be 18+ or 19+ depending on the province. 
                Some provincial sites are geo-restricted to residents only, but offshore licensed casinos are accessible 
                to all Canadian residents.
              </p>
            </div>
            
            <div className="modern-card shadow-modern p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Where can I get help with gambling problems in {locationInfo.name}?</h3>
              <p className="text-slate-600">
                {locationInfo.name} has several resources available including the Problem Gambling Helpline (1-888-230-3505) 
                which operates 24/7. Local resources are also available through provincial health services and addiction support programs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPages;