import { Monitor, Gamepad2, Apple, PenTool, Briefcase, Music } from 'lucide-react';

export const CATEGORIES = [
  {
    title: 'PC Softwares',
    url: 'https://mazterize.net/pc-softwares/',
    icon: Monitor,
    description: 'Essential tools and utilities for your Windows PC.',
    keywords: 'PC tools, free software download'
  },
  {
    title: 'PC Games',
    url: 'https://mazterize.net/pc-games/',
    icon: Gamepad2,
    description: 'Latest and greatest games for PC gamers.',
    keywords: 'PC games, download games'
  },
  {
    title: 'Mac Software',
    url: 'https://mazterize.net/mac-software/',
    icon: Apple,
    description: 'Top-rated applications for macOS users.',
    keywords: 'Mac apps, macOS software'
  },
  {
    title: 'Adobe Products',
    url: 'https://mazterize.net/adobe-products-dowload/',
    icon: PenTool,
    description: 'Creative tools for design, video, and photography.',
    keywords: 'Adobe tools, creative cloud'
  },
  {
    title: 'Office Tools',
    url: 'https://mazterize.net/office-tools/',
    icon: Briefcase,
    description: 'Productivity suites and document management tools.',
    keywords: 'office tools, productivity apps'
  },
  {
    title: 'Audio & Music',
    url: 'https://mazterize.net/audio-music/',
    icon: Music,
    description: 'Plugins, DAWs, and audio editing resources.',
    keywords: 'audio plugins, music production'
  },
];

export const NAV_LINKS = [
  { name: 'Home', url: 'https://mazterize.net/' },
  ...CATEGORIES.map(cat => ({ name: cat.title, url: cat.url }))
];
