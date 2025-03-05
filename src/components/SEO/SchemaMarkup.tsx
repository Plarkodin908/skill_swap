
import { Helmet } from "react-helmet";

type SchemaType = "website" | "organization" | "course" | "article" | "product" | "socialMedia";

interface SchemaMarkupProps {
  type: SchemaType;
  data?: Record<string, any>;
}

const SchemaMarkup = ({ type, data = {} }: SchemaMarkupProps) => {
  // Default schema data
  const defaultData = {
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "SkillSwap - Connect, Learn, Grow",
      "url": "https://skillswap.example.com/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://skillswap.example.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SkillSwap",
      "url": "https://skillswap.example.com/",
      "logo": "https://skillswap.example.com/logo.png",
      "sameAs": [
        "https://twitter.com/skillswap",
        "https://www.linkedin.com/company/skillswap"
      ]
    },
    course: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Web Development Mastery",
      "description": "Learn web development from basics to advanced concepts",
      "provider": {
        "@type": "Organization",
        "name": "SkillSwap",
        "sameAs": "https://skillswap.example.com/"
      }
    },
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How to Master Programming Skills",
      "author": {
        "@type": "Person",
        "name": "John Smith"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SkillSwap",
        "logo": {
          "@type": "ImageObject",
          "url": "https://skillswap.example.com/logo.png"
        }
      },
      "datePublished": "2023-06-12",
      "dateModified": "2023-06-15"
    },
    product: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Pro Learning Subscription",
      "description": "Advanced learning tools and features for serious learners",
      "offers": {
        "@type": "Offer",
        "price": "19.99",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    },
    socialMedia: {
      "@context": "https://schema.org",
      "@type": "SocialMediaPosting",
      "headline": "Join our community of learners!",
      "datePublished": "2023-07-20",
      "author": {
        "@type": "Person",
        "name": "SkillSwap Team"
      }
    }
  };

  // Get the schema data for the specified type, or fall back to website schema
  const schemaData = defaultData[type] || defaultData.website;
  
  // Merge default schema with any additional data provided
  const finalSchema = { ...schemaData, ...data };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
