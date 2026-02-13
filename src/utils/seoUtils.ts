export interface SEOMetaData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  ogImageAlt?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  twitterImage?: string;
  noindex?: boolean;
  nofollow?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export const setMetaTags = (metadata: SEOMetaData) => {
  document.title = metadata.title;

  const setMeta = (name: string, content: string, isProperty = false) => {
    const attribute = isProperty ? 'property' : 'name';
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  setMeta('description', metadata.description);

  if (metadata.keywords) {
    setMeta('keywords', metadata.keywords);
  }

  if (metadata.author) {
    setMeta('author', metadata.author);
  }

  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink && metadata.canonical) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  if (canonicalLink && metadata.canonical) {
    canonicalLink.setAttribute('href', metadata.canonical);
  }

  if (metadata.noindex || metadata.nofollow) {
    const robotsContent = [
      metadata.noindex ? 'noindex' : 'index',
      metadata.nofollow ? 'nofollow' : 'follow'
    ].join(', ');
    setMeta('robots', robotsContent);
  }

  setMeta('og:title', metadata.title, true);
  setMeta('og:description', metadata.description, true);
  setMeta('og:type', metadata.ogType || 'website', true);
  setMeta('og:url', metadata.canonical || window.location.href, true);
  setMeta('og:site_name', 'TopCasinoWagers', true);
  setMeta('og:locale', 'en_CA', true);

  if (metadata.ogImage) {
    setMeta('og:image', metadata.ogImage, true);
    setMeta('og:image:width', '1200', true);
    setMeta('og:image:height', '630', true);
    if (metadata.ogImageAlt) {
      setMeta('og:image:alt', metadata.ogImageAlt, true);
    }
  }

  if (metadata.publishedTime) {
    setMeta('article:published_time', metadata.publishedTime, true);
  }

  if (metadata.modifiedTime) {
    setMeta('article:modified_time', metadata.modifiedTime, true);
  }

  setMeta('twitter:card', metadata.twitterCard || 'summary_large_image');
  setMeta('twitter:title', metadata.title);
  setMeta('twitter:description', metadata.description);
  setMeta('twitter:site', '@TopCasinoWagers');
  setMeta('twitter:creator', '@TopCasinoWagers');

  if (metadata.twitterImage || metadata.ogImage) {
    setMeta('twitter:image', metadata.twitterImage || metadata.ogImage || '');
    if (metadata.ogImageAlt) {
      setMeta('twitter:image:alt', metadata.ogImageAlt);
    }
  }
};

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export interface OrganizationSchema {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone?: string;
    contactType: string;
    email?: string;
    availableLanguage: string[];
  };
  sameAs?: string[];
}

export const generateOrganizationSchema = (org: OrganizationSchema) => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": org.name,
    "url": org.url,
    "logo": org.logo ? {
      "@type": "ImageObject",
      "url": org.logo
    } : undefined,
    "description": org.description,
    "address": org.address ? {
      "@type": "PostalAddress",
      ...org.address
    } : undefined,
    "contactPoint": org.contactPoint ? {
      "@type": "ContactPoint",
      ...org.contactPoint
    } : undefined,
    "sameAs": org.sameAs
  };
};

export interface ReviewSchema {
  itemName: string;
  itemUrl: string;
  ratingValue: number;
  bestRating: number;
  worstRating: number;
  ratingCount?: number;
  reviewCount?: number;
  author: string;
  reviewBody: string;
  datePublished: string;
  image?: string;
}

export const generateReviewSchema = (review: ReviewSchema) => {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Product",
      "name": review.itemName,
      "url": review.itemUrl,
      "image": review.image,
      "aggregateRating": review.ratingCount ? {
        "@type": "AggregateRating",
        "ratingValue": review.ratingValue,
        "bestRating": review.bestRating,
        "worstRating": review.worstRating,
        "ratingCount": review.ratingCount,
        "reviewCount": review.reviewCount
      } : undefined
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.ratingValue,
      "bestRating": review.bestRating,
      "worstRating": review.worstRating
    },
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewBody": review.reviewBody,
    "datePublished": review.datePublished
  };
};

export interface FAQItem {
  question: string;
  answer: string;
}

export const generateFAQSchema = (faqs: FAQItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const generateWebSiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TopCasinoWagers",
    "url": "https://topcasinowagers.ca",
    "description": "Canada's premier online casino review platform. Compare bonuses, read expert reviews, and find the best online casinos for Canadian players.",
    "inLanguage": "en-CA",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://topcasinowagers.ca/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
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
};

export interface ArticleSchema {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  publisher: string;
  url: string;
}

export const generateArticleSchema = (article: ArticleSchema) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.headline,
    "description": article.description,
    "image": article.image,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": article.publisher,
      "logo": {
        "@type": "ImageObject",
        "url": "https://topcasinowagers.ca/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    }
  };
};

export const injectStructuredData = (schema: object) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
  return script;
};

export const removeStructuredData = (script: HTMLScriptElement) => {
  if (script && script.parentNode) {
    document.head.removeChild(script);
  }
};

export const generateLocalBusinessSchema = (city: string, province: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `TopCasinoWagers - ${city} Online Casino Guide`,
    "description": `Expert online casino reviews and guides for players in ${city}, ${province}. Find the best licensed casinos, bonuses, and games.`,
    "url": `https://topcasinowagers.ca/${city.toLowerCase()}-online-casinos`,
    "areaServed": {
      "@type": "City",
      "name": city,
      "containedIn": {
        "@type": "Province",
        "name": province,
        "containedIn": {
          "@type": "Country",
          "name": "Canada"
        }
      }
    },
    "serviceType": "Online Casino Review and Comparison",
    "provider": {
      "@type": "Organization",
      "name": "TopCasinoWagers"
    }
  };
};

export interface OfferSchema {
  name: string;
  description: string;
  price: string;
  priceCurrency: string;
  url: string;
  validFrom: string;
  validThrough?: string;
  availability: string;
}

export const generateOfferSchema = (offer: OfferSchema) => {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": offer.name,
    "description": offer.description,
    "price": offer.price,
    "priceCurrency": offer.priceCurrency,
    "url": offer.url,
    "validFrom": offer.validFrom,
    "validThrough": offer.validThrough,
    "availability": offer.availability,
    "seller": {
      "@type": "Organization",
      "name": "TopCasinoWagers"
    }
  };
};

export const generateHowToSchema = (title: string, description: string, steps: { name: string; text: string; image?: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "image": step.image
    }))
  };
};

export const moneyKeywords = [
  'best online casinos canada',
  'online casino canada real money',
  'casino bonuses canada',
  'no deposit bonus canada',
  'free spins canada',
  'ontario online casinos',
  'instant withdrawal casino',
  'interac etransfer casino',
  'live dealer casino canada',
  'mobile casino canada',
  'progressive jackpots canada',
  'high rtp slots canada',
  'fastest payout casino',
  'licensed canadian casino',
  'welcome bonus canada'
];

export const generateKeywordVariations = (baseKeyword: string): string[] => {
  const modifiers = [
    'best',
    'top',
    'new',
    '2024',
    'online',
    'canada',
    'canadian',
    'real money',
    'guide',
    'review'
  ];

  const variations: string[] = [baseKeyword];

  modifiers.forEach(modifier => {
    if (!baseKeyword.toLowerCase().includes(modifier.toLowerCase())) {
      variations.push(`${modifier} ${baseKeyword}`);
      variations.push(`${baseKeyword} ${modifier}`);
    }
  });

  return variations;
};
