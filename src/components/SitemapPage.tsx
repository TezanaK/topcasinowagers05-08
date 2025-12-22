import { useEffect } from 'react';
import { Home, Star, Gift, BookOpen, MapPin, Gamepad2, Award, Users, FileText, Heart, Phone, HelpCircle, Link2, TrendingUp } from 'lucide-react';

interface SitemapPageProps {
  onNavigateHome: () => void;
  onNavigateTo: (page: string) => void;
}

const SitemapPage = ({ onNavigateHome, onNavigateTo }: SitemapPageProps) => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "TopCasinoWagers Sitemap - Complete Site Navigation",
      "description": "Complete sitemap of TopCasinoWagers.ca - Canada's premier online casino review platform. Navigate to casino reviews, game guides, bonuses, and provincial gambling information.",
      "url": "https://topcasinowagers.ca/sitemap",
      "inLanguage": "en-CA",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://topcasinowagers.ca/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Sitemap",
            "item": "https://topcasinowagers.ca/sitemap"
          }
        ]
      },
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": 200,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Casino Reviews",
            "description": "Comprehensive reviews of top Canadian online casinos"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Game Guides",
            "description": "Strategy guides for slots, blackjack, roulette, and more"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Provincial Guides",
            "description": "Online gambling guides for all Canadian provinces"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Bonus Offers",
            "description": "Latest casino bonuses and promotional offers"
          }
        ]
      },
      "publisher": {
        "@type": "Organization",
        "name": "TopCasinoWagers",
        "url": "https://topcasinowagers.ca",
        "logo": {
          "@type": "ImageObject",
          "url": "https://topcasinowagers.ca/logo.png"
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    document.title = 'Sitemap - TopCasinoWagers | Complete Site Navigation';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete sitemap of TopCasinoWagers.ca. Navigate 200+ pages including casino reviews, game guides, bonuses, and provincial gambling information for Canadian players.');
    }

    return () => {
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      color: 'from-blue-500 to-blue-600',
      links: [
        { label: 'Home', page: 'home', onClick: onNavigateHome },
        { label: 'Casino Reviews', page: 'reviews', onClick: () => onNavigateTo('reviews') },
        { label: 'Bonuses & Promotions', page: 'bonuses', onClick: () => onNavigateTo('bonuses') },
        { label: 'Blog & News', page: 'blog', onClick: () => onNavigateTo('blog') },
        { label: 'About Us', page: 'about', onClick: () => onNavigateTo('about') },
      ]
    },
    {
      title: 'Casino Reviews',
      icon: Star,
      color: 'from-purple-500 to-purple-600',
      links: [
        { label: 'NEOSPIN Casino Review', page: 'casino-neospin', onClick: () => onNavigateTo('casino-neospin') },
        { label: 'CASINOMATE Review', page: 'casino-casinomate', onClick: () => onNavigateTo('casino-casinomate') },
        { label: 'House of Jack Review', page: 'casino-houseofjack', onClick: () => onNavigateTo('casino-houseofjack') },
        { label: 'VICIBET Casino Review', page: 'casino-vicibet', onClick: () => onNavigateTo('casino-vicibet') },
        { label: 'Royal Vegas Review', page: 'casino-royal-vegas', onClick: () => onNavigateTo('casino-royal-vegas') },
        { label: 'Betway Casino Review', page: 'casino-betway', onClick: () => onNavigateTo('casino-betway') },
        { label: 'Spin Casino Review', page: 'casino-spin-casino', onClick: () => onNavigateTo('casino-spin-casino') },
        { label: 'ONLUCK Casino Review', page: 'casino-onluck', onClick: () => onNavigateTo('casino-onluck') },
        { label: 'Casino Infinity Review', page: 'casino-casino-infinity', onClick: () => onNavigateTo('casino-casino-infinity') },
        { label: 'JackpotCity Review', page: 'casino-jackpotcity', onClick: () => onNavigateTo('casino-jackpotcity') },
      ]
    },
    {
      title: 'Game Guides',
      icon: Gamepad2,
      color: 'from-green-500 to-green-600',
      links: [
        { label: 'Online Slots Guide', page: 'games-slots', onClick: () => onNavigateTo('games-slots') },
        { label: 'Blackjack Strategy', page: 'games-blackjack', onClick: () => onNavigateTo('games-blackjack') },
        { label: 'Roulette Guide', page: 'games-roulette', onClick: () => onNavigateTo('games-roulette') },
        { label: 'Live Dealer Games', page: 'games-live-dealer', onClick: () => onNavigateTo('games-live-dealer') },
        { label: 'Baccarat Guide', page: 'games-baccarat', onClick: () => onNavigateTo('games-baccarat') },
        { label: 'Poker Guide', page: 'games-poker', onClick: () => onNavigateTo('games-poker') },
      ]
    },
    {
      title: 'Provincial Guides',
      icon: MapPin,
      color: 'from-red-500 to-red-600',
      links: [
        { label: 'Ontario Online Casinos', page: 'location-ontario', onClick: () => onNavigateTo('location-ontario') },
        { label: 'British Columbia Casinos', page: 'location-british-columbia', onClick: () => onNavigateTo('location-british-columbia') },
        { label: 'Alberta Casino Guide', page: 'location-alberta', onClick: () => onNavigateTo('location-alberta') },
        { label: 'Quebec Online Casinos', page: 'location-quebec', onClick: () => onNavigateTo('location-quebec') },
        { label: 'Manitoba Gaming Guide', page: 'location-manitoba', onClick: () => onNavigateTo('location-manitoba') },
        { label: 'Atlantic Canada Casinos', page: 'location-atlantic-canada', onClick: () => onNavigateTo('location-atlantic-canada') },
      ]
    },
    {
      title: 'Resources & Tools',
      icon: BookOpen,
      color: 'from-yellow-500 to-yellow-600',
      links: [
        { label: 'Complete Casino Guide', page: 'guide', onClick: () => onNavigateTo('guide') },
        { label: 'FAQ - Frequently Asked Questions', page: 'faq', onClick: () => onNavigateTo('faq') },
        { label: 'Responsible Gaming', page: 'responsible-gaming', onClick: () => onNavigateTo('responsible-gaming') },
        { label: 'Privacy Policy', page: 'privacy', onClick: () => onNavigateTo('privacy') },
        { label: 'Contact Us', page: 'contact', onClick: () => onNavigateTo('contact') },
      ]
    },
    {
      title: 'SEO & Marketing',
      icon: TrendingUp,
      color: 'from-indigo-500 to-indigo-600',
      links: [
        { label: 'Backlink Strategy & Outreach', page: 'backlink-strategy', onClick: () => onNavigateTo('backlink-strategy') },
        { label: 'Internal Linking Strategy', page: 'internal-linking', onClick: () => onNavigateTo('internal-linking') },
        { label: 'SEO Content Calendar', page: 'content-calendar', onClick: () => onNavigateTo('content-calendar') },
      ]
    }
  ];

  const externalResources = [
    {
      title: 'High-Value Landing Pages',
      links: [
        'Best Online Casinos Canada 2024',
        'Online Slots Canada Real Money',
        'Casino Bonuses Canada',
        'Interac e-Transfer Casinos',
        'Live Dealer Casino Canada',
        'Fast Payout Casinos Canada',
        'Mobile Casino Canada',
        'High RTP Slots Canada',
        'Progressive Jackpots Canada',
        'No Deposit Bonus Canada',
        'Free Spins Canada',
        'Welcome Bonus Canada',
      ]
    },
    {
      title: 'Bonus-Specific Pages',
      links: [
        'Casino Bonuses No Wagering',
        'Cashback Casino Bonuses',
        'Reload Bonus Canada',
        '300 Free Spins Welcome Bonus',
        'Free Spins No Wagering Canada',
        'No Deposit Bonus Codes 2024',
        'VIP Casino Bonuses Canada',
        'High Roller Casino Bonuses',
      ]
    },
    {
      title: 'Payment Method Pages',
      links: [
        'Credit Card Casinos Canada',
        'PayPal Casinos Canada',
        'Cryptocurrency Casinos Canada',
        'Interac Online Casino Deposits',
        'Fastest Withdrawal Casinos Canada',
        'Same Day Withdrawal Casino',
        'Instant Withdrawal Casinos',
      ]
    },
    {
      title: 'Game-Specific Pages',
      links: [
        'Online Blackjack Canada',
        'Online Roulette Canada',
        'Online Baccarat Canada',
        'Video Poker Canada',
        'Best Slot Machines Canada',
        'Online Blackjack Strategy',
        'Live Roulette Canada',
        'Progressive Slots Jackpots',
      ]
    },
    {
      title: 'Regional Pages',
      links: [
        'Toronto Online Casinos',
        'Vancouver Online Casinos',
        'Montreal Online Casinos',
        'Calgary Online Casinos',
        'Ontario iGaming Licensed Casinos',
        'British Columbia Casino Guide',
        'Alberta Casino Players Guide',
      ]
    },
    {
      title: 'Trending Pages',
      links: [
        '24 Hour Payout Casinos Canada',
        '98% RTP Slots Canada',
        'Licensed MGA Casinos Canada',
        'Curacao Licensed Casinos Safe',
        'Million Dollar Jackpots Canada',
        'Crypto Casino Canada Bitcoin',
        'Mobile Casino Apps Download',
        'New Casinos Canada 2024',
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="glass sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={onNavigateHome}
              className="text-2xl font-bold text-slate-900 hover:text-green-600 transition-colors"
            >
              TopCasinoWagers
            </button>
            <button
              onClick={onNavigateHome}
              className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all"
            >
              Back to Home
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="glass rounded-2xl px-6 py-3 border border-slate-200">
              <div className="flex items-center">
                <Link2 className="w-6 h-6 text-blue-500 mr-3" />
                <span className="text-lg font-bold text-slate-900">SITE NAVIGATION</span>
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Sitemap</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Complete navigation guide to all pages on TopCasinoWagers. Find casino reviews, game guides, bonuses, and more.
          </p>
        </div>

        {/* Interactive Sitemap Sections */}
        <div className="grid gap-8 mb-16">
          {sitemapSections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center mr-4`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.links.map((link, linkIdx) => (
                  <button
                    key={linkIdx}
                    onClick={link.onClick}
                    className="text-left px-4 py-3 bg-slate-50 hover:bg-green-50 rounded-xl transition-all hover:shadow-md group"
                  >
                    <span className="text-slate-700 group-hover:text-green-600 transition-colors">
                      {link.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SEO Content Pages */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">SEO-Optimized Content Pages</h2>
          <p className="text-slate-600 mb-6">
            These pages are optimized for search engines and target high-value keywords in the Canadian online casino market.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {externalResources.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold text-slate-900 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="text-sm text-slate-600 hover:text-green-600 transition-colors cursor-pointer flex items-start">
                      <span className="text-green-500 mr-2">▸</span>
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* XML Sitemap Reference */}
        <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl shadow-lg p-8 text-white">
          <div className="flex items-center mb-4">
            <FileText className="w-8 h-8 mr-3" />
            <h2 className="text-2xl font-bold">XML Sitemap</h2>
          </div>
          <p className="text-slate-300 mb-6">
            For search engines and automated crawlers, access our machine-readable XML sitemap at:
          </p>
          <div className="bg-black/30 rounded-xl p-4 font-mono text-sm mb-6">
            <a
              href="https://topcasinowagers.ca/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              https://topcasinowagers.ca/sitemap.xml
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="font-bold mb-2">200+ Pages</div>
              <div className="text-slate-300">Comprehensive coverage of all casino content</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="font-bold mb-2">Daily Updates</div>
              <div className="text-slate-300">Fresh content and bonus offers daily</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="font-bold mb-2">SEO Optimized</div>
              <div className="text-slate-300">Proper priority and changefreq settings</div>
            </div>
          </div>
        </div>

        {/* SEO Info Box */}
        <div className="mt-12 bg-green-50 border-2 border-green-200 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Why We Have a Sitemap</h3>
          <div className="grid md:grid-cols-2 gap-6 text-slate-700">
            <div>
              <h4 className="font-semibold mb-2 text-green-700">For Users:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Easy navigation to all site pages</li>
                <li>• Discover new casino reviews and bonuses</li>
                <li>• Find specific game guides quickly</li>
                <li>• Access provincial gambling information</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-green-700">For Search Engines:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Complete site structure visibility</li>
                <li>• Faster indexing of new content</li>
                <li>• Priority signals for important pages</li>
                <li>• Update frequency indicators</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-300 mb-4">
            © 2024 TopCasinoWagers. Canada's most trusted online casino review platform.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <button onClick={() => onNavigateTo('privacy')} className="text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigateTo('responsible-gaming')} className="text-slate-400 hover:text-white transition-colors">
              Responsible Gaming
            </button>
            <button onClick={() => onNavigateTo('contact')} className="text-slate-400 hover:text-white transition-colors">
              Contact
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SitemapPage;
