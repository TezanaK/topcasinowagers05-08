import React, { useState, useEffect } from 'react';
import MainContent from './components/MainContent';
import ReviewsPage from './components/ReviewsPage';
import BonusesPage from './components/BonusesPage';
import BlogPage from './components/BlogPage';
import BlogsPage from './components/BlogsPage';
import AboutPage from './components/AboutPage';
import SEOPages from './components/SEOPages';
import LocationPages from './components/LocationPages';
import GameGuidePages from './components/GameGuidePages';
import GameProviderPages from './components/GameProviderPages';
import CasinoLandingPages from './components/CasinoLandingPages';
import ResponsibleGamingPage from './components/ResponsibleGamingPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import InternalLinking from './components/InternalLinking';
import ExitIntentPopup from './components/ExitIntentPopup';
import { useExitIntent } from './hooks/useExitIntent';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const { showPopup, closePopup } = useExitIntent({ enabled: true, delay: 2000 });

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleNavigateHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  // Add structured data for the website
  useEffect(() => {
    // Update page title and meta description based on current page
    const pageMetadata: { [key: string]: { title: string; description: string } } = {
      home: {
        title: "Best Online Casinos Canada 2024 | CA$9,000 Bonuses + Expert Reviews | TopCasinoWagers",
        description: "🇨🇦 #1 Canadian online casino guide with CA$9,000+ bonuses, 1-3 day payouts, Interac e-Transfer, and expert reviews. Licensed casinos with CAD support for Canadian players."
      },
      reviews: {
        title: "Casino Reviews - Expert Analysis of Canadian Online Casinos | TopCasinoWagers",
        description: "In-depth casino reviews for Canadian players. Expert analysis, player feedback, and detailed ratings of the best online casinos accepting Canadians."
      },
      bonuses: {
        title: "Best Casino Bonuses Canada 2024 - Exclusive Offers | TopCasinoWagers",
        description: "Discover the best casino bonuses for Canadian players. Exclusive welcome bonuses, free spins, no deposit offers, and cashback deals from top-rated casinos."
      },
      blog: {
        title: "Casino Blog Canada - Expert Tips, Reviews & Strategies 2024 | TopCasinoWagers",
        description: "Expert casino blog with tips, strategies, game guides, and industry news for Canadian players. Latest casino bonuses, reviews, and winning strategies."
      }
    };

    const metadata = pageMetadata[currentPage] || pageMetadata.home;
    document.title = metadata.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metadata.description);
    }
  }, [currentPage]);

  const renderPage = () => {
    // Casino landing pages
    if (currentPage.startsWith('casino-')) {
      const casinoName = currentPage.replace('casino-', '');
      return <CasinoLandingPages casinoName={casinoName} onNavigateHome={handleNavigateHome} onNavigateTo={handleNavigate} />;
    }

    // Location pages
    if (currentPage.startsWith('location-')) {
      const location = currentPage.replace('location-', '');
      return <LocationPages location={location} onNavigateHome={handleNavigateHome} onNavigateTo={handleNavigate} />;
    }

    // Game guide pages
    if (currentPage.startsWith('games-')) {
      const gameType = currentPage.replace('games-', '');
      return <GameGuidePages gameType={gameType} onNavigateHome={handleNavigateHome} onNavigateTo={handleNavigate} />;
    }

    // Game provider pages
    if (currentPage.startsWith('provider-')) {
      const provider = currentPage.replace('provider-', '');
      return <GameProviderPages provider={provider} onNavigateHome={handleNavigateHome} onNavigateTo={handleNavigate} />;
    }

    // SEO pages
    if (['guide', 'contact', 'faq'].includes(currentPage)) {
      return <SEOPages currentPage={currentPage} onNavigateHome={handleNavigateHome} onNavigateTo={handleNavigate} />;
    }

    // Main pages
    switch (currentPage) {
      case 'reviews':
        return <ReviewsPage onNavigateHome={handleNavigateHome} />;
      case 'bonuses':
        return <BonusesPage onNavigateHome={handleNavigateHome} onNavigateTo={handleNavigate} />;
      case 'blog':
        return <BlogPage onNavigateHome={handleNavigateHome} onNavigateTo={handleNavigate} />;
      case 'blogs':
        return <BlogsPage onNavigateHome={handleNavigateHome} onNavigateTo={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigateHome={handleNavigateHome} />;
      case 'responsible-gaming':
        return <ResponsibleGamingPage onNavigateHome={handleNavigateHome} onNavigateTo={handleNavigate} />;
      case 'privacy-policy':
        return <PrivacyPolicyPage onNavigateHome={handleNavigateHome} onNavigateTo={handleNavigate} />;
      default:
        return (
          <>
            <MainContent onNavigateTo={handleNavigate} />
            <InternalLinking onNavigateTo={handleNavigate} />
          </>
        );
    }
  };

  return (
    <div className="App">
      {/* SEO-friendly navigation links in HTML */}
      <nav style={{ display: 'none' }} aria-hidden="true">
        <a href="/" onClick={(e) => { e.preventDefault(); handleNavigate('home'); }}>Best Online Casinos Canada</a>
        <a href="/reviews" onClick={(e) => { e.preventDefault(); handleNavigate('reviews'); }}>Casino Reviews</a>
        <a href="/bonuses" onClick={(e) => { e.preventDefault(); handleNavigate('bonuses'); }}>Casino Bonuses</a>
        <a href="/blog" onClick={(e) => { e.preventDefault(); handleNavigate('blog'); }}>Casino Blog</a>
        <a href="/about" onClick={(e) => { e.preventDefault(); handleNavigate('about'); }}>About Us</a>
        <a href="/guide" onClick={(e) => { e.preventDefault(); handleNavigate('guide'); }}>Casino Guide</a>
        <a href="/responsible-gaming" onClick={(e) => { e.preventDefault(); handleNavigate('responsible-gaming'); }}>Responsible Gaming</a>
        <a href="/privacy-policy" onClick={(e) => { e.preventDefault(); handleNavigate('privacy-policy'); }}>Privacy Policy</a>
        
        {/* Casino Pages */}
        <a href="/casino-neospin" onClick={(e) => { e.preventDefault(); handleNavigate('casino-neospin'); }}>NEOSPIN Casino Review</a>
        <a href="/casino-evospin" onClick={(e) => { e.preventDefault(); handleNavigate('casino-evospin'); }}>EVOSPIN Casino Review</a>
        <a href="/casino-vicibet" onClick={(e) => { e.preventDefault(); handleNavigate('casino-vicibet'); }}>VICIBET Casino Review</a>
        <a href="/casino-onluck" onClick={(e) => { e.preventDefault(); handleNavigate('casino-onluck'); }}>ONLUCK Casino Review</a>
        <a href="/casino-casino-infinity" onClick={(e) => { e.preventDefault(); handleNavigate('casino-casino-infinity'); }}>CASINO INFINITY Review</a>
        <a href="/casino-guns-bet" onClick={(e) => { e.preventDefault(); handleNavigate('casino-guns-bet'); }}>GUNS BET Casino Review</a>
        
        {/* Location Pages */}
        <a href="/location-ontario" onClick={(e) => { e.preventDefault(); handleNavigate('location-ontario'); }}>Ontario Online Casinos</a>
        <a href="/location-british-columbia" onClick={(e) => { e.preventDefault(); handleNavigate('location-british-columbia'); }}>British Columbia Casinos</a>
        <a href="/location-alberta" onClick={(e) => { e.preventDefault(); handleNavigate('location-alberta'); }}>Alberta Online Casinos</a>
        <a href="/location-quebec" onClick={(e) => { e.preventDefault(); handleNavigate('location-quebec'); }}>Quebec Online Casinos</a>
        <a href="/location-atlantic-canada" onClick={(e) => { e.preventDefault(); handleNavigate('location-atlantic-canada'); }}>Atlantic Canada Casinos</a>
        
        {/* Game Guide Pages */}
        <a href="/games-slots" onClick={(e) => { e.preventDefault(); handleNavigate('games-slots'); }}>Online Slots Canada Guide</a>
        <a href="/games-blackjack" onClick={(e) => { e.preventDefault(); handleNavigate('games-blackjack'); }}>Blackjack Strategy Canada</a>
        <a href="/games-roulette" onClick={(e) => { e.preventDefault(); handleNavigate('games-roulette'); }}>Roulette Guide Canada</a>
        <a href="/games-live-dealer" onClick={(e) => { e.preventDefault(); handleNavigate('games-live-dealer'); }}>Live Dealer Games Guide</a>
        
        {/* Game Provider Pages */}
        <a href="/provider-netent" onClick={(e) => { e.preventDefault(); handleNavigate('provider-netent'); }}>NetEnt Games Canada</a>
        <a href="/provider-microgaming" onClick={(e) => { e.preventDefault(); handleNavigate('provider-microgaming'); }}>Microgaming Casinos</a>
        <a href="/provider-evolution" onClick={(e) => { e.preventDefault(); handleNavigate('provider-evolution'); }}>Evolution Gaming Live</a>
        <a href="/provider-pragmatic-play" onClick={(e) => { e.preventDefault(); handleNavigate('provider-pragmatic-play'); }}>Pragmatic Play Slots</a>
      </nav>

      {renderPage()}
      
      {/* Exit Intent Popup */}
      <ExitIntentPopup isVisible={showPopup} onClose={closePopup} />
    </div>
  );
}

export default App;