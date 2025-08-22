import React, { useState, useEffect } from 'react';
import { Star, Shield, Clock, Users, Gift, Zap, Trophy, Crown, Medal, Award, CheckCircle, ExternalLink, Timer, MessageCircle, X, Mail, Bell } from 'lucide-react';

const MainContent: React.FC = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [showPushNotification, setShowPushNotification] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitIntent(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  // Email capture timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmailCapture(true);
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  // Push notification timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPushNotification(true);
    }, 45000); // 45 seconds

    return () => clearTimeout(timer);
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-600/20 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
              <span className="text-yellow-300 animate-pulse">Top Canadian</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Casino Bonuses
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover exclusive bonuses worth up to <span className="text-yellow-400 font-bold">CA$9,000</span> at Canada's most trusted online casinos. 
              Licensed operators with <span className="text-green-400 font-bold">1-3 day payouts</span> and 24/7 support.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span>50,000+ Players Served</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span>Licensed & Regulated</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span>5+ Years Experience</span>
              </div>
            </div>

            {/* Urgent CTA */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-6 mb-12 border border-red-500/50">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Timer className="w-6 h-6 text-white animate-pulse" />
                <span className="text-white font-bold text-lg">LIMITED TIME OFFER EXPIRES IN:</span>
              </div>
              <div className="text-3xl font-mono text-yellow-300 font-bold mb-4">
                {formatTime(timeLeft)}
              </div>
              <p className="text-white text-sm">
                Claim your exclusive CA$3,000 bonus + 300 free spins before this offer expires!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Casinos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🏆 <span className="text-yellow-400">Top Rated</span> Canadian Casinos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hand-picked casinos with the best bonuses, fastest payouts, and highest player satisfaction ratings.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {/* NEOSPIN - #1 */}
          <div className="relative bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/30 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 group">
            <div className="absolute -top-4 -left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg px-4 py-2 rounded-full shadow-lg">
              #1 CHOICE
            </div>
            <div className="absolute top-4 right-4">
              <Crown className="w-8 h-8 text-yellow-400 animate-pulse" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-3xl font-bold text-white">NEOSPIN</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-yellow-400 font-bold ml-2">4.9/5</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-700/50 rounded-lg p-3">
                    <div className="text-yellow-400 font-bold text-lg">CA$10,000</div>
                    <div className="text-gray-300 text-sm">Welcome Package</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-3">
                    <div className="text-green-400 font-bold text-lg">1-2 Days</div>
                    <div className="text-gray-300 text-sm">Payout Time</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">2000+ Games</span>
                  <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30">Live Chat 24/7</span>
                  <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Crypto Friendly</span>
                  <span className="bg-yellow-600/20 text-yellow-300 px-3 py-1 rounded-full text-sm border border-yellow-500/30">Interac e-Transfer</span>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-xl px-8 py-4 rounded-2xl mb-4 hover:scale-105 transition-transform cursor-pointer shadow-lg">
                  CLAIM CA$10,000 BONUS
                </div>
                <div className="text-gray-400 text-sm mb-2">Promo Code: <span className="text-yellow-400 font-bold">TCWNEO</span></div>
                <div className="text-gray-400 text-xs">Min Deposit: CA$20</div>
              </div>
            </div>
          </div>

          {/* CASINOMATE - #2 */}
          <div className="relative bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/30 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group">
            <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold text-lg px-4 py-2 rounded-full shadow-lg">
              #2 TRUSTED
            </div>
            <div className="absolute top-4 right-4">
              <Medal className="w-8 h-8 text-blue-400 animate-pulse" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-3xl font-bold text-white">CASINOMATE</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-blue-400 text-blue-400" />
                    ))}
                    <span className="text-blue-400 font-bold ml-2">4.8/5</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-700/50 rounded-lg p-3">
                    <div className="text-blue-400 font-bold text-lg">CA$1,400 + 200 FS</div>
                    <div className="text-gray-300 text-sm">Welcome Bonus</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-3">
                    <div className="text-green-400 font-bold text-lg">1-3 Days</div>
                    <div className="text-gray-300 text-sm">Payout Time</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">1200+ Games</span>
                  <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30">Live Chat 24/7</span>
                  <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Fast Payouts</span>
                  <span className="bg-red-600/20 text-red-300 px-3 py-1 rounded-full text-sm border border-red-500/30">Malta Licensed</span>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold text-xl px-8 py-4 rounded-2xl mb-4 hover:scale-105 transition-transform cursor-pointer shadow-lg">
                  CLAIM CA$1,400 BONUS
                </div>
                <div className="text-gray-400 text-sm mb-2">Promo Code: <span className="text-blue-400 font-bold">TCWMATE</span></div>
                <div className="text-gray-400 text-xs">Min Deposit: CA$20</div>
              </div>
            </div>
          </div>

          {/* EVOSPIN - #3 */}
          <div className="relative bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group">
            <div className="absolute -top-4 -left-4 bg-gradient-to-r from-purple-400 to-purple-600 text-white font-bold text-lg px-4 py-2 rounded-full shadow-lg">
              #3 POPULAR
            </div>
            <div className="absolute top-4 right-4">
              <Award className="w-8 h-8 text-purple-400 animate-pulse" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-3xl font-bold text-white">EVOSPIN</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-purple-400 text-purple-400" />
                    ))}
                    <span className="text-purple-400 font-bold ml-2">4.7/5</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-700/50 rounded-lg p-3">
                    <div className="text-purple-400 font-bold text-lg">CA$6,000 + 100 FS</div>
                    <div className="text-gray-300 text-sm">Welcome Package</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-3">
                    <div className="text-green-400 font-bold text-lg">2-4 Days</div>
                    <div className="text-gray-300 text-sm">Payout Time</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">1500+ Games</span>
                  <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30">Live Support</span>
                  <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Mobile Optimized</span>
                  <span className="bg-yellow-600/20 text-yellow-300 px-3 py-1 rounded-full text-sm border border-yellow-500/30">Weekly Bonuses</span>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white font-bold text-xl px-8 py-4 rounded-2xl mb-4 hover:scale-105 transition-transform cursor-pointer shadow-lg">
                  CLAIM CA$6,000 BONUS
                </div>
                <div className="text-gray-400 text-sm mb-2">Promo Code: <span className="text-purple-400 font-bold">TCWEVO</span></div>
                <div className="text-gray-400 text-xs">Min Deposit: CA$25</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Casino Bonuses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🎁 <span className="text-yellow-400">Exclusive</span> Casino Bonuses
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Limited-time offers and exclusive bonus codes available only to our visitors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* VICIBET Bonus */}
          <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 group hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-white">VICIBET</h3>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
                <span className="text-orange-400 font-bold ml-1 text-sm">4.7</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg p-4 mb-4 border border-orange-500/30">
              <div className="text-orange-400 font-bold text-xl mb-1">325% up to €3,000</div>
              <div className="text-white text-sm mb-2">+ 300 Free Spins</div>
              <div className="text-gray-300 text-xs">Plus 1 Bonus Crab OR Sport 100% up to €100</div>
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Dual Platform (Casino + Sports)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Unique Bonus Crab Feature</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Massive 325% Bonus</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-center py-3 rounded-xl hover:scale-105 transition-transform cursor-pointer mb-3">
              CLAIM €3,000 BONUS
            </div>
            <div className="text-center text-gray-400 text-sm">
              Code: <span className="text-orange-400 font-bold">TCWVICI</span>
            </div>
          </div>

          {/* Additional bonus cards can be added here */}
          <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-white">SPINBETTER</h3>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-blue-400 text-blue-400" />
                ))}
                <span className="text-blue-400 font-bold ml-1 text-sm">4.6</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 mb-4 border border-blue-500/30">
              <div className="text-blue-400 font-bold text-xl mb-1">100% up to CA$1,500</div>
              <div className="text-white text-sm mb-2">+ 150 Free Spins</div>
              <div className="text-gray-300 text-xs">Weekly Reload Bonuses Available</div>
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>1000+ Slot Games</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Live Casino Available</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Fast Withdrawals</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-center py-3 rounded-xl hover:scale-105 transition-transform cursor-pointer mb-3">
              CLAIM CA$1,500 BONUS
            </div>
            <div className="text-center text-gray-400 text-sm">
              Code: <span className="text-blue-400 font-bold">TCWSPIN</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 group hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-white">LUCKY7EVEN</h3>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-green-400 text-green-400" />
                ))}
                <span className="text-green-400 font-bold ml-1 text-sm">4.5</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg p-4 mb-4 border border-green-500/30">
              <div className="text-green-400 font-bold text-xl mb-1">200% up to CA$2,000</div>
              <div className="text-white text-sm mb-2">+ 77 Free Spins</div>
              <div className="text-gray-300 text-xs">Lucky Number 7 Theme</div>
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Lucky 7 Jackpots</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>VIP Loyalty Program</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>24/7 Customer Support</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-center py-3 rounded-xl hover:scale-105 transition-transform cursor-pointer mb-3">
              CLAIM CA$2,000 BONUS
            </div>
            <div className="text-center text-gray-400 text-sm">
              Code: <span className="text-green-400 font-bold">LUCKY77</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-red-600 to-orange-600 text-white p-4 shadow-2xl z-50 border-t border-red-500/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Timer className="w-6 h-6 animate-pulse" />
            <div>
              <div className="font-bold text-lg">Limited Time: CA$10,000 Bonus Expires Soon!</div>
              <div className="text-sm opacity-90">Only {Math.floor(timeLeft / 60)} minutes left to claim</div>
            </div>
          </div>
          <div className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-xl hover:scale-105 transition-transform cursor-pointer shadow-lg">
            CLAIM NOW
          </div>
        </div>
      </div>

      {/* Floating Live Chat */}
      <div className="fixed bottom-24 right-6 z-40">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform cursor-pointer group">
          <MessageCircle className="w-6 h-6" />
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
            3
          </div>
        </div>
        <div className="absolute bottom-16 right-0 bg-white text-black p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Live Chat - 3 agents online
        </div>
      </div>

      {/* Exit Intent Popup */}
      {showExitIntent && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 max-w-md w-full border border-yellow-500/30 shadow-2xl">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Wait! Don't Miss Out!</h3>
                <p className="text-gray-300">Exclusive bonus code just for you</p>
              </div>
              <button 
                onClick={() => setShowExitIntent(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-4 rounded-xl mb-6 text-center">
              <div className="font-bold text-xl mb-1">TCWEXCLUSIVE</div>
              <div className="text-sm">Use this code for +50 Free Spins</div>
            </div>
            
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-center py-3 rounded-xl hover:scale-105 transition-transform cursor-pointer">
              CLAIM EXCLUSIVE BONUS
            </div>
          </div>
        </div>
      )}

      {/* Email Capture Modal */}
      {showEmailCapture && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 max-w-md w-full border border-blue-500/30 shadow-2xl">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Get Weekly Bonus Updates</h3>
                <p className="text-gray-300">Never miss a great casino deal again</p>
              </div>
              <button 
                onClick={() => setShowEmailCapture(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4 mb-6">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="w-full bg-slate-700 text-white p-3 rounded-lg border border-slate-600 focus:border-blue-400 focus:outline-none"
              />
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="w-4 h-4" />
                <span>Weekly bonus alerts + exclusive codes</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-center py-3 rounded-xl hover:scale-105 transition-transform cursor-pointer">
              SUBSCRIBE FOR BONUSES
            </div>
          </div>
        </div>
      )}

      {/* Push Notification Request */}
      {showPushNotification && (
        <div className="fixed top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-xl shadow-2xl z-40 max-w-sm border border-purple-500/30">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              <span className="font-bold">Instant Bonus Alerts</span>
            </div>
            <button 
              onClick={() => setShowPushNotification(false)}
              className="text-purple-200 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-purple-100 mb-4">
            Get notified instantly when new casino bonuses are available
          </p>
          <div className="flex gap-2">
            <button className="bg-white text-purple-600 font-bold px-4 py-2 rounded-lg text-sm hover:scale-105 transition-transform">
              Allow
            </button>
            <button 
              onClick={() => setShowPushNotification(false)}
              className="text-purple-200 px-4 py-2 text-sm hover:text-white"
            >
              Not Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;