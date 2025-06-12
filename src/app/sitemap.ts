import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.justinroderick.dev',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://www.justinroderick.dev/experience',
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: 'https://www.justinroderick.dev/projects',
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}
