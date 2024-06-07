import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string; // Thêm thuộc tính image (tùy chọn)
}

const SEO: React.FC<SEOProps> = ({ title, description, url, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      <meta name="twitter:site" content={url} />
    </Head>
  );
};

export default SEO;
