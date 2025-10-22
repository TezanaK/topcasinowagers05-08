import React, { useState, useEffect } from 'react';
import { Star, Shield, Clock, Award, TrendingUp, Users, DollarSign, Zap, Crown, Gift } from 'lucide-react';
import { InternalLinking } from './InternalLinking';
import { ExitIntentPopup } from './ExitIntentPopup';

const casinos = [
  {
    id: 1,
    name: "JACKPOT CITY",
    logo: "/jpc.webp",
    rating: 4.9,
    bonus: "Up to CA$1,600",
    spins: "200 Free Spins",
    features: ["24/7 Support", "Fast Payouts", "Mobile Optimized"],
    payoutTime: "24 hours",
    minDeposit: "CA$10",
    gameCount: "600+",
    established: "1998",
    license: "Malta Gaming Authority"
  },
  {
    id: 2,
    name: "CASINOMATE",
    logo: "/casino-mate.webp",
    rating: 4.8,
    bonus: "Up to CA$1,400",
    spins: "200 Free Spins",
    features: ["Live Chat", "Crypto Friendly", "Weekly Bonuses"],
    payoutTime: "1-2 hours",
    minDeposit: "CA$20",
    gameCount: "2000+",
    established: "2019",
    license: "Curacao eGaming"
  },
  {
    id: 3,
    name: "SPIN CASINO",
    logo: "/sc.webp",
    rating: 4.7,
    bonus: "Up to CA$1,000",
    spins: "150 Free Spins",
    features: ["VIP Program", "Live Dealers", "Mobile App"],
    payoutTime: "24-48 hours",
    minDeposit: "CA$10",
    gameCount: "800+",
    established: "2001",
    license: "Malta Gaming Authority"
  },
  {
    id: 4,
    name: "RUBY FORTUNE",
    logo: "/rf.webp",
    rating: 4.6,
    bonus: "Up to CA$750",
    spins: "100 Free Spins",
    features: ["Loyalty Points", "Multi-Language", "Secure Banking"],
    payoutTime: "2-3 days",
    minDeposit: "CA$10",
    gameCount: "450+",
    established: "2003",
    license: "Malta Gaming Authority"
  },
  {
    id: 5,
    name: "ROYAL VEGAS",
    logo: "/rv.webp",
    rating: 4.5,
    bonus: "Up to CA$1,200",
    spins: "120 Free Spins",
    features: ["High Roller Bonuses", "Tournament Play", "Premium Support"],
    payoutTime: "1-3 days",
    minDeposit: "CA$10",
    gameCount: "700+",
    established: "2000",
    license: "Malta Gaming Authority"
  },
  {
    id: 6,
    name: "BETWAY CASINO",
    logo: "/bw.webp",
    rating: 4.4,
    bonus: "Up to CA$1,000",
    spins: "200 Free Spins",
    features: ["Sports Betting", "Live Casino", "eCOGRA Certified"],
    payoutTime: "2-5 days",
    minDeposit: "CA$10",
    gameCount: "500+",
    established: "2006",
    license: "Malta Gaming Authority"
  },
  {
    id: 7,
    name: "888 CASINO",
    logo: "/888.webp",
    rating: 4.3,
    bonus: "Up to CA$1,500",
    spins: "100 Free Spins",
    features: ["Exclusive Games", "Live Support", "Mobile Gaming"],
    payoutTime: "1-6 days",
    minDeposit: "CA$20",
    gameCount: "300+",
    established: "1997",
    license: "UK Gambling Commission"
  },
  {
    id: 8,
    name: "LEOVEGAS",
    logo: "/lv.webp",
    rating: 4.2,
    bonus: "Up to CA$1,000",
    spins: "200 Free Spins",
    features: ["Mobile First", "Live Casino", "Fast Withdrawals"],
    payoutTime: "0-1 days",
    minDeposit: "CA$10",
    gameCount: "1000+",
    established: "2012",
    license: "Malta Gaming Authority"
  },
  {
    id: 9,
    name: "VIDEOSLOTS",
    logo: "/vs.webp",
    rating: 4.1,
    bonus: "Up to CA$200",
    spins: "11 Free Spins",
    features: ["Huge Game Selection", "Weekend Booster", "Battle of Slots"],
    payoutTime: "0-2 days",
    minDeposit: "CA$10",
    gameCount: "4000+",
    established: "2011",
    license: "Malta Gaming Authority"
  },
  {
    id: 10,
    name: "HOUSE OF JACK",
    logo: "/OIP.webp",
    rating: 4.6,
    bonus: "Up to CA$1,500",
    spins: "100 Free Spins",
    features: ["Australian Style", "Live Chat", "Weekly Cashback"],
    payoutTime: "1-3 days",
    minDeposit: "CA$20",
    gameCount: "900+",
    established: "2017",
    license: "Curacao eGaming"
  }
];

export const MainContent: React.FC = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitIntent(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <Crown className="w-12 h-12 text-yellow-400 mr-3" />
              <h1 className="text-5xl md:text-7xl font-bold text-white" itemProp="headline">
                🏆 #1 Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Online Casinos</span> Canada 2024
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto" itemProp="description">
              🏆 Trusted by <strong>50,000+ Canadian players</strong> • 💰 <strong>CA$5M+ bonuses claimed</strong> • ⭐ <strong>5,247 five-star reviews</strong> • 🚀 <strong>24-hour payouts guaranteed</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-green-500/20 px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-300 font-semibold">Bank-Level Security</span>
              </div>
              <div className="flex items-center bg-blue-500/20 px-4 py-2 rounded-full">
                <Zap className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-300 font-semibold">24-Hour Payouts</span>
              </div>
              <div className="flex items-center bg-purple-500/20 px-4 py-2 rounded-full">
                <Award className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-300 font-semibold">Certified Experts</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-black/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">CA$5M+</div>
              <div className="text-gray-300">Bonuses Claimed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">50,000+</div>
              <div className="text-gray-300">Happy Players</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">5,247</div>
              <div className="text-gray-300">Five-Star Reviews</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Expert Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Casino Rankings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" itemProp="name">
            🏆 #1 Trusted Casino Rankings Canada 2024
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" itemProp="description">
            <strong>Expertly reviewed and ranked</strong> by our <strong>certified gaming professionals</strong>. Updated daily with the <strong>latest exclusive bonuses</strong> and <strong>highest payout casinos</strong> for Canadian players.
          </p>
        </div>

        <div className="space-y-6">
          {casinos.map((casino, index) => (
            <div key={casino.id} className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="flex flex-col lg:flex-row items-center gap-6">
                {/* Rank Badge */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${
                    index === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black' :
                    index === 1 ? 'bg-gradient-to-r from-gray-300 to-gray-400 text-black' :
                    index === 2 ? 'bg-gradient-to-r from-orange-400 to-orange-600 text-white' :
                    'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                  }`}>
                    #{index + 1}
                  </div>
                </div>

                {/* Casino Logo & Info */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <img src={casino.logo} alt={`${casino.name} Casino Logo - Best Online Casino Canada`} className="w-24 h-24 mx-auto lg:mx-0 rounded-xl mb-3 object-cover" itemProp="image" />
                  <h3 className="text-2xl font-bold text-white mb-2" itemProp="name">{casino.name} Casino</h3>
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(casino.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                    ))}
                    <span className="text-white font-semibold ml-2" itemProp="ratingValue">{casino.rating}/5 ⭐</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Est. {casino.established} • <span itemProp="license">{casino.license}</span>
                  </div>
                </div>

                {/* Bonus Info */}
                <div className="flex-grow text-center lg:text-left">
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-4 mb-4">
                    <div className="text-3xl font-bold text-green-400 mb-1" itemProp="offers">💰 {casino.bonus}</div>
                    <div className="text-xl text-blue-300" itemProp="bonus">🎰 {casino.spins}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400">Payout Time</div>
                      <div className="text-white font-semibold" itemProp="payoutTime">⚡ {casino.payoutTime}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Min Deposit</div>
                      <div className="text-white font-semibold" itemProp="minDeposit">💳 {casino.minDeposit}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Games</div>
                      <div className="text-white font-semibold" itemProp="gameCount">🎮 {casino.gameCount}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Rating</div>
                      <div className="text-white font-semibold" itemProp="aggregateRating">⭐ {casino.rating}/5</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex-shrink-0">
                  <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg" itemProp="url">
                    🔥 Claim Now
                  </button>
                  <div className="text-center mt-2">
                    <div className="text-xs text-gray-400">18+ • T&C Apply</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <div className="flex flex-wrap gap-2">
                  {casino.features.map((feature, idx) => (
                    <span key={idx} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEO Content Sections */}
      <div className="bg-black/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Why Choose Our Top Casinos */}
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Award className="w-8 h-8 text-yellow-400 mr-3" />
                Why Choose Our #1 Casinos?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Bank-Level Security</h4>
                    <p className="text-gray-300 text-sm">256-bit SSL encryption and certified random number generators ensure your safety.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Lightning-Fast Payouts</h4>
                    <p className="text-gray-300 text-sm">Get your winnings in 24 hours or less with our top-rated casinos.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Gift className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Exclusive Bonuses</h4>
                    <p className="text-gray-300 text-sm">Access special promotions and higher bonus amounts only available through our site.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">24/7 Expert Support</h4>
                    <p className="text-gray-300 text-sm">Our certified gaming experts are available around the clock to help you.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Canadian Casino Statistics */}
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
                Canadian Casino Market 2024
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Total Market Value</span>
                  <span className="text-white font-bold">CA$31.2 Billion</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Online Players</span>
                  <span className="text-white font-bold">2.8 Million+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Average Bonus Value</span>
                  <span className="text-white font-bold">CA$1,200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Licensed Operators</span>
                  <span className="text-white font-bold">150+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Mobile Players</span>
                  <span className="text-white font-bold">78%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Average RTP</span>
                  <span className="text-white font-bold">96.5%</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <p className="text-green-300 text-sm">
                  <strong>Legal Update:</strong> Online gambling is regulated in Ontario, with more provinces expected to follow suit in 2024.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Searches */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center" itemProp="name">
            <TrendingUp className="w-10 h-10 text-orange-400 mr-3" />
            🔥 Trending Casino Searches Canada 2024
          </h2>
          <p className="text-xl text-gray-300" itemProp="description">What <strong>50,000+ Canadian players</strong> are searching for right now - <strong>updated hourly</strong></p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "🔥 24-hour payout casinos Canada",
            "💰 No deposit bonus codes 2024",
            "🎰 98% RTP slots Canada real money",
            "🏆 Million dollar jackpots Canada",
            "📱 Mobile casino apps Canada",
            "💎 VIP casino bonuses exclusive",
            "⚡ Instant withdrawal casinos",
            "🎲 Live dealer blackjack Canada",
            "🍀 Weekend 300% casino bonuses",
            "🎯 High roller casinos Canada",
            "🔒 Crypto-friendly casinos bitcoin",
            "🎪 New casino launches 2024 Canada",
            "🎊 Progressive jackpot winners",
            "💸 Fastest payout casinos",
            "🎁 Free spins no wagering",
            "👑 Licensed Ontario casinos"
          ].map((search, index) => (
            <div key={index} className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 rounded-lg p-3 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 cursor-pointer group" itemProp="keywords">
              <span className="text-white text-sm group-hover:text-purple-300 transition-colors">
                {search}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Internal Linking Component */}
      <InternalLinking />

      {/* Exit Intent Popup */}
      {showExitIntent && (
        <ExitIntentPopup onClose={() => setShowExitIntent(false)} />
      )}
    </div>
  );
};

export default MainContent;