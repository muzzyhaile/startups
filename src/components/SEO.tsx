import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noIndex?: boolean;
}

const SEO = ({
  title = "StartupIdea.AI - AI-Powered Daily Startup Ideas | Build Your Next Venture",
  description = "Get fresh AI-generated startup ideas daily. Explore innovative business concepts with market analysis, revenue models, and actionable insights. Turn ideas into reality with StartupIdea.AI.",
  keywords = "startup ideas, AI generated business ideas, entrepreneurship, business concepts, startup inspiration, market analysis, revenue models, business planning, innovation, venture ideas",
  image = "https://startupidea.ai/og-image.jpg",
  url = "https://startupidea.ai/",
  type = "website",
  noIndex = false,
}: SEOProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="StartupIdea.AI" />
      <link rel="canonical" href={url} />
      
      {/* Robots */}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="StartupIdea.AI" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@StartupIdeaAI" />
      <meta name="twitter:creator" content="@StartupIdeaAI" />

      {/* Additional SEO */}
      <meta name="theme-color" content="#FFEE00" />
      <meta name="msapplication-TileColor" content="#FFEE00" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "StartupIdea.AI",
          "url": "https://startupidea.ai",
          "description": "AI-powered platform for generating innovative startup ideas with market analysis and business insights",
          "publisher": {
            "@type": "Organization",
            "name": "StartupIdea.AI",
            "url": "https://startupidea.ai"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://startupidea.ai/?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
