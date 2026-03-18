import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.tanishtirpathi.me',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://www.tanishtirpathi.me/projects',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.tanishtirpathi.me/blog',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.tanishtirpathi.me/Resume',
      lastModified: new Date(),
      priority: 0.7,
    },
  ]
}