import React, { useState, useEffect } from 'react';
import MainContent from './components/MainContent';
import BlogPage from './components/BlogPage';
import ReviewsPage from './components/ReviewsPage';
import BonusesPage from './components/BonusesPage';
import AboutPage from './components/AboutPage';
import SEOPages from './components/SEOPages';
import LocationPages from './components/LocationPages';
import GameGuidePages from './components/GameGuidePages';
import GameProviderPages from './components/GameProviderPages';
import CasinoLandingPages from './components/CasinoLandingPages';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import ResponsibleGamingPage from './components/ResponsibleGamingPage';
import ExitIntentPopup from './components/ExitIntentPopup';
import InternalLinking from './components/InternalLinking';
import { useExitIntent } from './hooks/useExitIntent';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const { showPopup, closePopup } = useExitIntent({ enabled: true, delay: 2000 });

  // Enhanced SEO meta tag management
  useEffect(() => {
    const updateMetaTags = () => {
      // Remove existing dynamic meta tags
      const existingTags = document.querySelectorAll('meta[data-dynamic="true"]');
      existingTags.forEach(tag => tag.remove());

      // Page-specific meta tags
      const metaConfigs: { [key: string]: any } = {
        home: {
          title: "Best Online Casinos Canada 2024 | CA$9,000 Bonuses + Expert Reviews | TopCasinoWagers",
          description: "🇨🇦 Best online casinos Canada 2024 with CA$9,000 bonuses, 1-3 day payouts & expert reviews. Licensed casinos with CAD support.",
          keywords: "best online casinos Canada 2024, Canadian online casino bonuses, online casino Canada real money, casino games Canada, online slots Canada real money, live dealer casino Canada, Canadian casino reviews, online gambling Canada legal, casino bonuses Canada no deposit, Interac e-Transfer casinos, CAD online casinos, Ontario online casinos, British Columbia online casinos, Alberta online casinos, Quebec online casinos, Canadian casino guide, online casino Canada payout, casino Canada mobile, blackjack Canada online, roulette Canada online, progressive jackpots Canada"
        },
        blog: {
          title: "Casino Blog Canada - Expert Tips, Reviews & Strategies 2024 | TopCasinoWagers",
          description: "Expert casino blog with tips, strategies, game guides & industry news for Canadian players. Latest bonuses, reviews & winning strategies.",
          keywords: "casino blog Canada, online casino tips, gambling strategies Canada, casino news Canada, casino guides, Canadian casino blog, casino expert advice, gambling tips Canada, casino strategies, online gambling blog Canada"
        },
        reviews: {
          title: "Casino Reviews - Expert Analysis of Canadian Online Casinos | TopCasinoWagers",
          description: "In-depth casino reviews for Canadian players. Expert analysis, player feedback & detailed ratings of best online casinos accepting Canadians.",
          keywords: "casino reviews Canada, online casino ratings, Canadian casino analysis, expert casino reviews, casino comparison Canada, licensed casino reviews, trusted casino reviews Canada"
        },
        bonuses: {
          title: "Best Casino Bonuses Canada 2024 - Exclusive Offers | TopCasinoWagers",
          description: "Best casino bonuses Canada 2024. Exclusive welcome bonuses, free spins, no deposit offers & cashback deals from top-rated casinos.",
          keywords: "casino bonuses Canada, welcome bonus, free spins Canada, no deposit bonus, casino promotions, Canadian casino offers, exclusive bonuses, casino bonus codes Canada"
        },
        about: {
          title: "About TopCasinoWagers - Canada's Trusted Casino Review Team",
          description: "Learn about TopCasinoWagers, Canada's premier casino review platform. Meet our expert team & discover our mission to help Canadian players.",
          keywords: "about TopCasinoWagers, Canadian casino experts, casino review team, trusted casino guide Canada, casino industry experts"
        }
      };

      const config = metaConfigs[currentPage] || metaConfigs.home;
      
      // Update title
      document.title = config.title;
      
      // Update or create meta tags
      const updateMetaTag = (name: string, content: string, property = false) => {
        const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
        let tag = document.querySelector(selector) as HTMLMetaElement;
        
        if (!tag) {
          tag = document.createElement('meta');
          if (property) {
            tag.setAttribute('property', name);
          } else {
            tag.setAttribute('name', name);
          }
          tag.setAttribute('data-dynamic', 'true');
          document.head.appendChild(tag);
        }
        
        tag.setAttribute('content', content);
      };

      updateMetaTag('description', config.description);
      updateMetaTag('keywords', config.keywords);
      updateMetaTag('og:title', config.title, true);
      updateMetaTag('og:description', config.description, true);
      updateMetaTag('twitter:title', config.title, true);
      updateMetaTag('twitter:description', config.description, true);
    };

    updateMetaTags();
  }, [currentPage]);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderCurrentPage = () => {
    // Handle location pages
    if (currentPage.startsWith('location-')) {
      const location = currentPage.replace('location-', '');
      return (
        <LocationPages 
          location={location} 
          onNavigateHome={() => handleNavigation('home')}
          onNavigateTo={handleNavigation}
        />
      );
    }

    // Handle game guide pages
    if (currentPage.startsWith('games-')) {
      const gameType = currentPage.replace('games-', '');
      return (
        <GameGuidePages 
          gameType={gameType} 
          onNavigateHome={() => handleNavigation('home')}
          onNavigateTo={handleNavigation}
        />
      );
    }

    // Handle game provider pages
    if (currentPage.startsWith('provider-')) {
      const provider = currentPage.replace('provider-', '');
      return (
        <GameProviderPages 
          provider={provider} 
          onNavigateHome={() => handleNavigation('home')}
          onNavigateTo={handleNavigation}
        />
      );
    }

    // Handle casino landing pages
    if (currentPage.startsWith('casino-')) {
      const casinoName = currentPage.replace('casino-', '');
      return (
        <CasinoLandingPages 
          casinoName={casinoName} 
          onNavigateHome={() => handleNavigation('home')}
          onNavigateTo={handleNavigation}
        />
      );
    }

    // Handle other pages
    switch (currentPage) {
      case 'blog':
        return (
          <BlogPage 
            onNavigateHome={() => handleNavigation('home')}
            onNavigateTo={handleNavigation}
          />
        );
      case 'reviews':
        return (
          <ReviewsPage 
            onNavigateHome={() => handleNavigation('home')}
          />
        );
      case 'bonuses':
        return (
          <BonusesPage 
            onNavigateHome={() => handleNavigation('home')}
            onNavigateTo={handleNavigation}
          />
        );
      case 'about':
        return (
          <AboutPage 
            onNavigateHome={() => handleNavigation('home')}
          />
        );
      case 'guide':
      case 'contact':
      case 'faq':
        return (
          <SEOPages 
            currentPage={currentPage}
            onNavigateHome={() => handleNavigation('home')}
            onNavigateTo={handleNavigation}
          />
        );
      case 'privacy-policy':
        return (
          <PrivacyPolicyPage 
            onNavigateHome={() => handleNavigation('home')}
            onNavigateTo={handleNavigation}
          />
        );
      case 'responsible-gaming':
        return (
          <ResponsibleGamingPage 
            onNavigateHome={() => handleNavigation('home')}
            onNavigateTo={handleNavigation}
          />
        );
      default:
        return (
          <>
            <MainContent onNavigateTo={handleNavigation} />
            <InternalLinking onNavigateTo={handleNavigation} />
          </>
        );
    }
  };

  return (
    <div className="App">
      {renderCurrentPage()}
      <ExitIntentPopup isVisible={showPopup} onClose={closePopup} />
    </div>
  );
}

export default App;