import React, { useState } from 'react';
import { 
  Target, 
  Gamepad2, 
  Heart, 
  DollarSign, 
  Clock,
  Play,
  RotateCcw,
  Trophy,
  Star,
  CheckCircle,
  TrendingUp,
  Zap,
  Gift,
  Crown
} from 'lucide-react';

interface InteractiveElementsProps {
  onNavigateTo?: (page: string) => void;
}

const InteractiveElements: React.FC<InteractiveElementsProps> = ({ onNavigateTo }) => {
  const [currentPoll, setCurrentPoll] = useState<string>('');
  const [pollResults, setPollResults] = useState<{[key: string]: number}>({
    'slots': 45,
    'blackjack': 25,
    'roulette': 20,
    'live-dealer': 10
  });
  const [hasVoted, setHasVoted] = useState(false);

  const handlePollVote = (option: string) => {
    if (!hasVoted) {
      setPollResults(prev => ({
        ...prev,
        [option]: prev[option] + 1
      }));
      setCurrentPoll(option);
      setHasVoted(true);
    }
  };

  const totalVotes = Object.values(pollResults).reduce((sum, votes) => sum + votes, 0);

  const pollOptions = [
    { id: 'slots', label: 'Slot Machines', icon: Gamepad2, color: 'bg-purple-500' },
    { id: 'blackjack', label: 'Blackjack', icon: Target, color: 'bg-blue-500' },
    { id: 'roulette', label: 'Roulette', icon: RotateCcw, color: 'bg-red-500' },
    { id: 'live-dealer', label: 'Live Dealer', icon: Heart, color: 'bg-green-500' }
  ];

  const slotDemos = [
    {
      name: "Starburst",
      provider: "NetEnt",
      rtp: "96.1%",
      volatility: "Low",
      theme: "Space/Gems",
      maxWin: "50,000x",
      features: ["Expanding Wilds", "Re-spins", "Both Ways Pay"]
    },
    {
      name: "Book of Dead",
      provider: "Play'n GO",
      rtp: "96.2%",
      volatility: "High",
      theme: "Egyptian",
      maxWin: "250,000x",
      features: ["Free Spins", "Expanding Symbols", "Gamble Feature"]
    },
    {
      name: "Gonzo's Quest",
      provider: "NetEnt",
      rtp: "95.97%",
      volatility: "Medium",
      theme: "Adventure",
      maxWin: "37,500x",
      features: ["Avalanche Reels", "Multipliers", "Free Falls"]
    }
  ];

  return (
    <div className="space-y-20">
      {/* Interactive Poll */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="modern-card shadow-modern p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">📊 What's Your Favorite Casino Game?</h2>
              <p className="text-xl text-slate-600">Join {totalVotes.toLocaleString()} Canadian players who voted</p>
            </div>

            {!hasVoted ? (
              <div className="grid md:grid-cols-2 gap-4">
                {pollOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handlePollVote(option.id)}
                    className="glass rounded-xl p-6 border border-slate-200 hover:bg-slate-50 hover:border-green-300 transition-all duration-300 text-left quiz-option"
                  >
                    <div className="flex items-center">
                      <div className={`w-12 h-12 ${option.color} rounded-xl flex items-center justify-center mr-4`}>
                        <option.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-semibold text-slate-900 text-lg">{option.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <div className="text-green-600 font-bold text-lg mb-2">✅ Thanks for voting!</div>
                  <div className="text-slate-600">Here are the current results:</div>
                </div>
                
                {pollOptions.map((option) => {
                  const percentage = Math.round((pollResults[option.id] / totalVotes) * 100);
                  return (
                    <div key={option.id} className="glass rounded-lg p-4 border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className={`w-8 h-8 ${option.color} rounded-lg flex items-center justify-center mr-3`}>
                            <option.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-medium text-slate-900">{option.label}</span>
                        </div>
                        <span className="font-bold text-slate-700">{percentage}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ${option.color}`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
                
                <div className="text-center mt-6">
                  <button 
                    onClick={() => {setHasVoted(false); setCurrentPoll('');}}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Vote Again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Slot Demo Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">🎰 Popular Slot Demos</h2>
            <p className="text-xl text-slate-600">Try these popular slots for free before playing with real money</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {slotDemos.map((slot, index) => (
              <div key={index} className="modern-card shadow-modern-hover">
                <div className="p-6">
                  {/* Slot Machine Visual */}
                  <div className="relative mb-6">
                    <div className="w-full h-40 gradient-primary rounded-xl flex items-center justify-center relative overflow-hidden">
                      <div className="text-white font-bold text-xl">{slot.name}</div>
                      <div className="absolute top-2 right-2 bg-yellow-400 text-slate-900 px-2 py-1 rounded-lg text-xs font-bold">
                        {slot.rtp}
                      </div>
                      <div className="absolute bottom-2 left-2 bg-white/20 text-white px-2 py-1 rounded-lg text-xs">
                        {slot.provider}
                      </div>
                      {/* Animated reels effect */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="w-full h-full flex">
                          <div className="flex-1 bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse"></div>
                          <div className="flex-1 bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse" style={{animationDelay: '0.2s'}}></div>
                          <div className="flex-1 bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse" style={{animationDelay: '0.4s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4">{slot.name}</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="glass rounded-lg p-3 border border-slate-200">
                      <div className="font-semibold text-slate-900">RTP</div>
                      <div className="text-green-600 font-bold">{slot.rtp}</div>
                    </div>
                    <div className="glass rounded-lg p-3 border border-slate-200">
                      <div className="font-semibold text-slate-900">Volatility</div>
                      <div className={`font-bold ${
                        slot.volatility === 'Low' ? 'text-green-600' : 
                        slot.volatility === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {slot.volatility}
                      </div>
                    </div>
                    <div className="glass rounded-lg p-3 border border-slate-200">
                      <div className="font-semibold text-slate-900">Max Win</div>
                      <div className="text-purple-600 font-bold">{slot.maxWin}</div>
                    </div>
                    <div className="glass rounded-lg p-3 border border-slate-200">
                      <div className="font-semibold text-slate-900">Theme</div>
                      <div className="text-slate-700">{slot.theme}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Features:</h4>
                    <div className="space-y-2">
                      {slot.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full btn-modern rounded-xl py-3 font-semibold">
                      <Play className="w-4 h-4 mr-2 inline" />
                      Play Free Demo
                    </button>
                    <button className="w-full glass rounded-xl py-3 font-medium text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors">
                      <Trophy className="w-4 h-4 mr-2 inline" />
                      Play for Real Money
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteractiveElements;