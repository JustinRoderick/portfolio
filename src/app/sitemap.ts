import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://justinroderick.dev',
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
