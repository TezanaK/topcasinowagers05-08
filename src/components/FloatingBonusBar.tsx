import React, { useState, useEffect } from 'react';
import { X, Gift, TrendingUp, Clock } from 'lucide-react';

interface FloatingBonusBarProps {
  onClose?: () => void;
}

export const FloatingBonusBar: React.FC<FloatingBonusBarProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 34, seconds: 15 });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 text-white shadow-2xl border-t-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-400 rounded-full p-2 animate-pulse">
                <Gift className="w-6 h-6 text-green-800" />
              </div>
              <div>
                <div className="font-bold text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  LIMITED TIME OFFER
                </div>
                <div className="text-sm opacity-90">Claim up to CA$11,000 + 300 Free Spins NOW!</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <div className="font-mono font-bold">
                  {String(timeLeft.hours).padStart(2, '0')}:
                  {String(timeLeft.minutes).padStart(2, '0')}:
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
              </div>

              <a
                href="https://neospinlink.com/hd5377aa9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold px-6 py-2 rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                CLAIM NOW
              </a>

              <button
                onClick={handleClose}
                className="text-white/80 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
