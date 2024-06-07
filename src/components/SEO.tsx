import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  url: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, url }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={url} />
    </Head>
  );
};

export default SEO;
