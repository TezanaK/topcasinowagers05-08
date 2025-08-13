import React from 'react';
import { ExternalLink, Globe, MapPin, Phone, Mail } from 'lucide-react';

interface SEOFooterProps {
  onNavigateTo?: (page: string) => void;
}

const SEOFooter: React.FC<SEOFooterProps> = ({ onNavigateTo }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    casinos: [
      { name: 'NEOSPIN Casino', slug: 'casino-neospin' },
      { name: 'EVOSPIN Casino', slug: 'casino-evospin' },
      { name: 'VICIBET Casino', slug: 'casino-vicibet' },
      { name: 'ONLUCK Casino', slug: 'casino-onluck' },
      { name: 'Casino Infinity', slug: 'casino-casino-infinity' }
    ],
    locations: [
      { name: 'Ontario Casinos', slug: 'location-ontario' },
      { name: 'British Columbia Casinos', slug: 'location-british-columbia' },
      { name: 'Alberta Casinos', slug: 'location-alberta' },
      { name: 'Quebec Casinos', slug: 'location-quebec' }
    ],
    providers: [
      { name: 'NetEnt Games', slug: 'provider-netent' },
      { name: 'Microgaming Games', slug: 'provider-microgaming' },
      { name: 'Evolution Gaming', slug: 'provider-evolution' },
      { name: 'Pragmatic Play', slug: 'provider-pragmatic-play' }
    ],
    guides: [
      { name: 'Slots Guide', slug: 'games-slots' },
      { name: 'Blackjack Guide', slug: 'games-blackjack' },
      { name: 'Roulette Guide', slug: 'games-roulette' },
      { name: 'Live Dealer Guide', slug: 'games-live-dealer' }
    ]
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center mr-3">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">TopCasinoWagers</div>
                <div className="text-xs text-slate-400">Canada's #1 Casino Guide</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-6">
              Canada's premier online casino review platform, providing expert analysis and 
              exclusive bonuses for Canadian players since 2019.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-slate-400">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Canada</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Mail className="w-4 h-4 mr-2" />
                <span>support@topcasinowagers.ca</span>
              </div>
            </div>
          </div>

          {/* Top Casinos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Top Casinos</h4>
            <ul className="space-y-2">
              {footerLinks.casinos.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigateTo?.(link.slug)}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">By Province</h4>
            <ul className="space-y-2">
              {footerLinks.locations.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigateTo?.(link.slug)}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Game Providers */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Game Providers</h4>
            <ul className="space-y-2">
              {footerLinks.providers.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigateTo?.(link.slug)}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Game Guides */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Game Guides</h4>
            <ul className="space-y-2">
              {footerLinks.guides.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigateTo?.(link.slug)}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional SEO Content */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">About Canadian Online Casinos</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                <strong className="text-white">Online gambling in Canada</strong> is regulated at the provincial level, 
                with each province having its own rules and regulations. <strong className="text-white">Canadian players</strong> 
                can legally access offshore licensed casinos that accept <strong className="text-white">Canadian dollars (CAD)</strong> 
                and offer <strong className="text-white">Interac e-Transfer</strong> banking. Our expert reviews focus on 
                <strong className="text-white">licensed casinos</strong> with proven track records of <strong className="text-white">fast payouts</strong>, 
                <strong className="text-white">fair gaming</strong>, and <strong className="text-white">excellent customer support</strong> 
                for Canadian players.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Popular Casino Games in Canada</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Canadian players enjoy a wide variety of <strong className="text-white">online casino games</strong> including 
                <strong className="text-white">online slots</strong>, <strong className="text-white">blackjack</strong>, 
                <strong className="text-white">roulette</strong>, and <strong className="text-white">live dealer games</strong>. 
                Top game providers like <strong className="text-white">NetEnt</strong>, <strong className="text-white">Microgaming</strong>, 
                <strong className="text-white">Evolution Gaming</strong>, and <strong className="text-white">Pragmatic Play</strong> 
                offer high-quality games with excellent <strong className="text-white">RTP rates</strong> and exciting 
                <strong className="text-white">bonus features</strong>. Our game guides help Canadian players understand 
                <strong className="text-white">game strategies</strong> and find the <strong className="text-white">best casino bonuses</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} TopCasinoWagers. All rights reserved. | 
              <button 
                onClick={() => onNavigateTo?.('privacy-policy')}
                className="ml-2 hover:text-white transition-colors"
              >
                Privacy Policy
              </button> | 
              <button 
                onClick={() => onNavigateTo?.('responsible-gaming')}
                className="ml-2 hover:text-white transition-colors"
              >
                Responsible Gaming
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-slate-400 text-sm">🇨🇦 Proudly Canadian</span>
              <span className="text-slate-400 text-sm">18+ Only</span>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-6 pt-6 border-t border-slate-800">
            <p className="text-slate-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> TopCasinoWagers is an affiliate marketing website that earns commissions from 
              casino operators. We maintain editorial independence and only recommend licensed casinos that meet our 
              strict quality standards. Gambling can be addictive - please play responsibly. Must be 18+ or 19+ depending 
              on your province. This website is intended for Canadian residents only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SEOFooter;