import { useEffect } from 'react';
import {
  setMetaTags,
  SEOMetaData,
  injectStructuredData,
  removeStructuredData,
  generateBreadcrumbSchema,
  generateWebSiteSchema,
  BreadcrumbItem
} from '../utils/seoUtils';

interface SEOHeadProps {
  metadata: SEOMetaData;
  breadcrumbs?: BreadcrumbItem[];
  structuredData?: object | object[];
  includeWebSiteSchema?: boolean;
}

const SEOHead = ({
  metadata,
  breadcrumbs,
  structuredData,
  includeWebSiteSchema = true
}: SEOHeadProps) => {
  useEffect(() => {
    setMetaTags(metadata);

    const scripts: HTMLScriptElement[] = [];

    if (includeWebSiteSchema) {
      const webSiteScript = injectStructuredData(generateWebSiteSchema());
      scripts.push(webSiteScript);
    }

    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbScript = injectStructuredData(
        generateBreadcrumbSchema(breadcrumbs)
      );
      scripts.push(breadcrumbScript);
    }

    if (structuredData) {
      if (Array.isArray(structuredData)) {
        structuredData.forEach(schema => {
          const script = injectStructuredData(schema);
          scripts.push(script);
        });
      } else {
        const script = injectStructuredData(structuredData);
        scripts.push(script);
      }
    }

    return () => {
      scripts.forEach(script => removeStructuredData(script));
    };
  }, [metadata, breadcrumbs, structuredData, includeWebSiteSchema]);

  return null;
};

export default SEOHead;
