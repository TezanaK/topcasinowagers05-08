import React from 'react';
import { ExternalLink, ArrowRight, Star, Crown, Gift, Gamepad2, Shield, CreditCard } from 'lucide-react';

interface InternalLinkingProps {
  onNavigateTo?: (page: string) => void;
}

const InternalLinking: React.FC<InternalLinkingProps> = ({ onNavigateTo }) => {
  const linkCategories = [
    {
      title: "Casino Reviews",
      description: "Expert reviews of top Canadian online casinos",
      links: [
        { text: "NEOSPIN Casino Review", page: "casino-neospin", keywords: "NEOSPIN review Canada" },
        { text: "CASINOMATE Casino Review", page: "casino-casinomate", keywords: "CASINOMATE review" },
        { text: "EVOSPIN Casino Review", page: "casino-evospin", keywords: "EVOSPIN casino Canada" },
        { text: "ONLUCK.COM Review", page: "casino-onluck", keywords: "ONLUCK casino review" },
        { text: "VICIBET Casino Review", page: "casino-vicibet", keywords: "VICIBET review Canada" }
      ],
      icon: Star
    },
    {
      title: "Casino Bonuses",
      description: "Best casino bonuses and promotions for Canadians",
      links: [
        { text: "Best Casino Bonuses Canada 2024", page: "bonuses", keywords: "casino bonuses Canada" },
        { text: "No Deposit Bonuses Canada", page: "bonuses", keywords: "no deposit bonus Canada" },
        { text: "Free Spins Bonuses", page: "bonuses", keywords: "free spins Canada" },
        { text: "Welcome Bonus Guide", page: "bonuses", keywords: "welcome bonus Canada" },
        { text: "Cashback Casino Bonuses", page: "bonuses", keywords: "cashback bonus Canada" }
      ],
      icon: Gift
    },
    {
      title: "Game Guides",
      description: "Strategies and tips for popular casino games",
      links: [
        { text: "Online Slots Canada Guide", page: "games-slots", keywords: "online slots Canada" },
        { text: "Blackjack Strategy Canada", page: "games-blackjack", keywords: "blackjack strategy Canada" },
        { text: "Roulette Guide Canada", page: "games-roulette", keywords: "roulette Canada" },
        { text: "Live Dealer Games Guide", page: "games-live-dealer", keywords: "live dealer Canada" },
        { text: "Progressive Jackpots", page: "games-slots", keywords: "progressive jackpots Canada" }
      ],
      icon: Gamepad2
    },
    {
      title: "Banking & Payments",
      description: "Canadian banking methods and withdrawal guides",
      links: [
        { text: "Interac e-Transfer Casinos", page: "interac-etransfer-casinos", keywords: "Interac e-Transfer casinos" },
        { text: "Fast Payout Casinos Canada", page: "fast-payout-casinos-canada", keywords: "fast payout casinos" },
        { text: "Canadian Banking Methods", page: "canadian-casino-bonuses", keywords: "Canadian casino banking" },
        { text: "Credit Card Casino Deposits", page: "guide", keywords: "credit card casino Canada" },
        { text: "Cryptocurrency Casinos", page: "guide", keywords: "crypto casino Canada" }
      ],
      icon: CreditCard
    },
    {
      title: "Provincial Guides",
      description: "Casino guides for specific Canadian provinces",
      links: [
        { text: "Ontario Online Casinos", page: "location-ontario", keywords: "Ontario online casinos" },
        { text: "British Columbia Casinos", page: "location-british-columbia", keywords: "BC online casinos" },
        { text: "Alberta Online Casinos", page: "location-alberta", keywords: "Alberta online casinos" },
        { text: "Quebec Online Casinos", page: "location-quebec", keywords: "Quebec online casinos" },
        { text: "Atlantic Canada Casinos", page: "location-atlantic-canada", keywords: "Atlantic Canada casinos" }
      ],
      icon: Shield
    },
    {
      title: "Game Providers",
      description: "Reviews of top casino game providers",
      links: [
        { text: "NetEnt Games Canada", page: "provider-netent", keywords: "NetEnt games Canada" },
        { text: "Microgaming Casinos", page: "provider-microgaming", keywords: "Microgaming Canada" },
        { text: "Evolution Gaming Live", page: "provider-evolution", keywords: "Evolution Gaming Canada" },
        { text: "Pragmatic Play Slots", page: "provider-pragmatic-play", keywords: "Pragmatic Play Canada" },
        { text: "Play'n GO Games", page: "provider-playngo", keywords: "Play'n GO Canada" }
      ],
      icon: Crown
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">Internal Navigation Links to Casino Guides and Reviews</h2>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">🎯 Explore Our Professional Casino Guides</h2>
          <p className="text-xl text-slate-600">
            Professional guides covering every aspect of <strong>winning at online casinos in Canada</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {linkCategories.map((category, index) => (
            <div key={index} className="modern-card shadow-modern-hover">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="gradient-primary rounded-2xl w-12 h-12 flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
                    <p className="text-sm text-slate-600">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {category.links.map((link, linkIndex) => (
                    <button
                      key={linkIndex}
                      onClick={() => onNavigateTo?.(link.page)}
                      className="w-full text-left flex items-center justify-between p-3 glass rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors group"
                      title={link.keywords}
                    >
                      <span className="text-sm font-medium text-slate-700 group-hover:text-green-600">
                        {link.text}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-green-600" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Search Terms */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">🔥 Trending Casino Searches in Canada</h3>
          <p className="text-slate-600 mb-6 max-w-4xl mx-auto">
            Discover the hottest <strong>casino searches</strong> by <strong>50,000+ Canadian players</strong>. 
            Click any term to explore detailed guides and exclusive bonuses.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "🏆 best online casinos Canada",
              "💰 CA$9,000 casino bonuses",
              "🎰 online slots Canada real money",
              "⚡ 24-hour payout casinos",
              "🎮 live dealer casino Canada",
              "🍁 Ontario licensed casinos",
              "💸 instant withdrawal casinos",
              "📱 mobile casino apps Canada",
              "🎯 million dollar jackpots",
              "♠️ live blackjack Canada",
              "🎲 immersive roulette online",
              "⭐ 5-star casino reviews",
              "🆕 new casinos Canada 2024",
              "📈 98% RTP slots Canada",
              "📲 casino apps download",
              "🎁 no deposit bonus codes",
              "🔄 1000 free spins",
              "👑 VIP casino rewards",
              "🏅 casino tournaments",
              "₿ crypto casinos Canada",
              "🎉 weekend reload bonuses",
              "💎 loyalty cashback programs",
              "🎊 biggest jackpot winners"
            ].map((term, index) => (
              <button
                key={index}
                onClick={() => onNavigateTo?.('reviews')}
                className="px-4 py-2 glass rounded-full border border-slate-200 text-slate-700 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 hover:text-white transition-all duration-300 text-sm font-medium hover:scale-105 transform shadow-md hover:shadow-lg"
              >
                {term}
              </button>
            ))}
          </div>
          
          {/* Trending Searches Section */}
          <div className="mt-12">
            <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-red-500 mr-2 animate-pulse" />
              🔥 HOTTEST This Week - 50,000+ Searches
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "💥 CA$9,000 instant bonus",
                "⚡ 24-hour mega payouts",
                "📱 #1 mobile casino apps",
                "₿ crypto casino bonuses",
                "🎮 live dealer VIP tables",
                "🎉 weekend 200% bonuses",
                "🎰 98% RTP mega slots"
              ].map((term, index) => (
                <button
                  key={index}
                  onClick={() => onNavigateTo?.('bonuses')}
                  className="px-4 py-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white rounded-full text-sm font-bold hover:scale-110 transform transition-all duration-300 shadow-lg animate-pulse hover:animate-none"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalLinking;