
import React from 'react';

interface SchemaMarkupProps {
  type: 'website' | 'organization' | 'course' | 'article';
  title?: string;
  description?: string;
  url?: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({
  type,
  title = "SkillSwap - Community-Driven Learning Platform",
  description = "Share knowledge, build skills, and grow together on our community-driven learning platform.",
  url = "https://skillswap.example.com",
  imageUrl = "/og-image.svg",
  datePublished,
  dateModified,
  authorName,
}) => {
  let schema;

  switch (type) {
    case 'website':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: title,
        description,
        url,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${url}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      };
      break;
    
    case 'organization':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'SkillSwap',
        url,
        logo: `${url}/favicon.ico`,
        sameAs: [
          'https://twitter.com/skillswap',
          'https://facebook.com/skillswap',
          'https://linkedin.com/company/skillswap'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-000-000-0000',
          contactType: 'customer service',
          email: 'support@skillswap.example.com'
        }
      };
      break;
    
    case 'course':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: title,
        description,
        provider: {
          '@type': 'Organization',
          name: 'SkillSwap',
          sameAs: url
        }
      };
      break;
    
    case 'article':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image: imageUrl,
        datePublished,
        dateModified: dateModified || datePublished,
        author: {
          '@type': 'Person',
          name: authorName || 'SkillSwap Team'
        },
        publisher: {
          '@type': 'Organization',
          name: 'SkillSwap',
          logo: {
            '@type': 'ImageObject',
            url: `${url}/favicon.ico`
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url
        }
      };
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;
