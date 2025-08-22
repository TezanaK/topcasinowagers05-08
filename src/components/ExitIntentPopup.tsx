import React, { useState, useEffect } from 'react';
import { 
  X, 
  Gift, 
  Star, 
  Crown, 
  Sparkles, 
  ExternalLink,
  Clock,
  Shield,
  Trophy,
  Zap
} from 'lucide-react';

interface ExitIntentPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ isVisible, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup Content */}
      <div className={`relative max-w-2xl mx-4 transform transition-all duration-500 ${
        isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        <div className="modern-card shadow-2xl overflow-hidden border-4 border-yellow-400">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header with Animation */}
          <div className="gradient-primary text-white p-8 text-center relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-4 left-4 w-12 h-12 gradient-accent rounded-full opacity-20 animate-float"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 gradient-secondary rounded-full opacity-15 animate-float-delayed"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="w-20 h-20 gradient-gold rounded-3xl flex items-center justify-center shadow-modern animate-pulse-glow">
                    <Crown className="w-12 h-12 text-white animate-crown-rotate" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 gradient-accent rounded-full flex items-center justify-center animate-sparkle-burst">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-2 animate-bounce-in">
                🚨 WAIT! Don't Miss Out!
              </h2>
              <p className="text-xl opacity-90 animate-slide-up">
                Exclusive CASINOMATE Bonus Just for You!
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white p-8">
            <div className="text-center mb-8">
              {/* Casino Logo and Info */}
              <div className="flex items-center justify-center mb-6">
                <img 
                  src="/cmt.jpg" 
                  alt="CASINOMATE Casino Logo"
                  className="w-16 h-16 rounded-2xl object-cover shadow-modern border-2 border-yellow-400 mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">CASINOMATE</h3>
                  <div className="flex items-center justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < 4.8 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-2 font-bold text-slate-700">4.8/5</span>
                  </div>
                </div>
              </div>

              {/* Bonus Offer */}
              <div className="gradient-gold rounded-3xl p-6 mb-6 text-center shadow-modern">
                <div className="text-slate-900">
                  <div className="text-sm font-bold mb-2 opacity-80">🎁 EXCLUSIVE BONUS</div>
                  <div className="text-3xl font-bold mb-2">100% up to CA$1,400</div>
                  <div className="text-xl font-bold">+ 200 FREE SPINS</div>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center text-slate-700">
                  <Shield className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm font-medium">Malta Gaming Authority Licensed</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Zap className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="text-sm font-medium">1200+ Premium Games</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Clock className="w-5 h-5 text-purple-500 mr-3" />
                  <span className="text-sm font-medium">1-3 Day Fast Payouts</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Trophy className="w-5 h-5 text-yellow-500 mr-3" />
                  <span className="text-sm font-medium">24/7 Live Chat Support</span>
                </div>
              </div>

              {/* Urgency Timer */}
              <div className="glass rounded-2xl p-4 border border-red-200 bg-red-50 mb-6">
                <div className="flex items-center justify-center text-red-700">
                  <Clock className="w-5 h-5 mr-2 animate-pulse" />
                  <span className="font-bold text-sm">⏰ Limited Time Offer - Don't Miss Out!</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button 
                  onClick={() => window.open('https://record.jackedaffiliates.com/_NiRpjbXJyK6_kR87cWgLbmNd7ZgqdRLk/1/', '_blank')}
                  className="w-full btn-gold rounded-2xl py-4 px-8 font-bold text-lg shadow-modern-hover transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
                >
                  <Gift className="w-6 h-6 mr-3 inline" />
                  CLAIM 100% BONUS NOW
                  <ExternalLink className="w-5 h-5 ml-3 inline" />
                </button>
                
                <button 
                  onClick={onClose}
                  className="w-full glass border-2 border-slate-300 text-slate-700 font-semibold py-3 px-6 rounded-2xl hover:bg-slate-50 transition-all duration-300"
                >
                  Maybe Later
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 text-center">
                <div className="flex justify-center items-center space-x-6 text-xs text-slate-500">
                  <span>🔒 SSL Secured</span>
                  <span>🇨🇦 CAD Support</span>
                  <span>⚡ Instant Deposits</span>
                  <span>🎮 1200+ Games</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="gradient-secondary text-white p-4 text-center">
            <p className="text-sm font-medium">
              🍁 Trusted by 50,000+ Canadian Players | Licensed & Regulated
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
