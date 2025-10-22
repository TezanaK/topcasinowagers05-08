import React, { useState, useEffect } from 'react';
import { Users, DollarSign, Trophy, TrendingUp } from 'lucide-react';

export const LiveStats: React.FC = () => {
  const [stats, setStats] = useState({
    activePlayers: 2847,
    todayWinnings: 127450,
    recentWinner: 15200,
    hotCasino: 'NEOSPIN'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        activePlayers: prev.activePlayers + Math.floor(Math.random() * 10) - 3,
        todayWinnings: prev.todayWinnings + Math.floor(Math.random() * 5000),
        recentWinner: Math.floor(Math.random() * 50000) + 5000,
        hotCasino: ['NEOSPIN', 'CASINOMATE', 'HOUSE OF JACK'][Math.floor(Math.random() * 3)]
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-4 border-y border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="bg-green-500/20 rounded-full p-2">
              <Users className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">{stats.activePlayers.toLocaleString()}</div>
              <div className="text-xs text-slate-400">Players Online</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="bg-yellow-500/20 rounded-full p-2">
              <DollarSign className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">CA${(stats.todayWinnings / 1000).toFixed(0)}K</div>
              <div className="text-xs text-slate-400">Won Today</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="bg-blue-500/20 rounded-full p-2 animate-pulse">
              <Trophy className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">CA${(stats.recentWinner / 1000).toFixed(1)}K</div>
              <div className="text-xs text-slate-400">Latest Winner</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="bg-red-500/20 rounded-full p-2">
              <TrendingUp className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <div className="text-xl font-bold text-red-400">{stats.hotCasino}</div>
              <div className="text-xs text-slate-400">Hot Casino</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
