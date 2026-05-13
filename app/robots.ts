export const dynamic = "force-static";
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.linkedin.com/in/sayantan-rudra/sitemap.xml',
  };
}