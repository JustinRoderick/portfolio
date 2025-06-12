import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://justinroderick.dev',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://justinroderick.dev/experience',
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: 'https://justinroderick.dev/projects',
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}
