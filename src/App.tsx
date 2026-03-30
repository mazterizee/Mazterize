/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Download, 
  ExternalLink, 
  Search,
  Github,
  Twitter,
  Facebook
} from 'lucide-react';
import { CATEGORIES, NAV_LINKS } from './constants';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="https://mazterize.net/" className="text-2xl font-bold font-display tracking-tight text-brand-primary">
                MAZTERIZE
              </a>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="relative group">
                <button className="text-sm font-medium text-slate-600 hover:text-brand-primary flex items-center gap-1">
                  More <ChevronRight className="w-4 h-4 rotate-90" />
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 glass rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {NAV_LINKS.slice(4).map((link) => (
                    <a 
                      key={link.name} 
                      href={link.url} 
                      className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-primary"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
              <a 
                href="https://mazterize.net/" 
                className="bg-brand-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/20"
              >
                Explore Tools
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-brand-primary hover:bg-slate-50 rounded-lg"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-70"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-primary uppercase bg-blue-50 rounded-full">
              Ultimate Tech Resource
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
              Master Your Digital World with <span className="text-brand-primary">Mazterize</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              Your premium destination for <span className="font-semibold text-slate-900">free software download</span>, PC tools, Mac apps, Adobe tools, and audio plugins. Fast, secure, and always up-to-date.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://mazterize.net/pc-softwares/" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-brand-secondary transition-all shadow-xl shadow-brand-primary/25 group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                Download Now
              </a>
              <a 
                href="#categories" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all shadow-sm"
              >
                Explore Categories
              </a>
            </div>
          </motion.div>

          {/* Search Bar Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <div className="relative glass p-2 rounded-2xl shadow-2xl">
              <div className="flex items-center bg-slate-50 rounded-xl px-4 py-3">
                <Search className="w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search for software, games, or tools..." 
                  className="w-full bg-transparent border-none focus:ring-0 px-4 text-slate-900 placeholder:text-slate-400"
                />
                <button className="hidden sm:block bg-slate-900 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Categories Grid */}
      <section id="categories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Browse by Category</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore our extensive library of resources, from professional creative suites to the latest PC games.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((category, index) => (
              <motion.a
                key={category.title}
                href={category.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-brand-primary/20 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <category.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-2">
                  {category.description}
                </p>
                <div className="flex items-center text-sm font-bold text-brand-primary">
                  Explore {category.title}
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Features / SEO Section */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Choose Mazterize for Your Tech Needs?
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Verified Downloads', desc: 'Every software and tool is thoroughly tested and verified for safety.' },
                  { title: 'Always Up-to-Date', desc: 'We constantly update our library with the latest versions of your favorite apps.' },
                  { title: 'High-Speed Servers', desc: 'Enjoy lightning-fast download speeds with our optimized infrastructure.' },
                  { title: 'Comprehensive Guides', desc: 'Step-by-step installation guides for all software and plugins.' }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <a 
                  href="https://mazterize.net/" 
                  className="inline-flex items-center gap-2 text-brand-primary font-bold hover:underline"
                >
                  Learn more about our mission <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 glass p-4 rounded-3xl shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/tech/800/600" 
                  alt="Mazterize Tech Interface" 
                  className="rounded-2xl w-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Upgrade Your Software Library?
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                Join thousands of users who rely on Mazterize for the best <span className="text-white font-medium">PC tools</span>, <span className="text-white font-medium">Mac apps</span>, and <span className="text-white font-medium">Adobe tools</span>.
              </p>
              <a 
                href="https://mazterize.net/" 
                className="inline-flex items-center gap-2 bg-white text-brand-dark px-10 py-4 rounded-2xl text-lg font-bold hover:bg-slate-100 transition-all shadow-xl"
              >
                Get Started Now
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <a href="https://mazterize.net/" className="text-2xl font-bold font-display tracking-tight text-white mb-6 block">
                MAZTERIZE
              </a>
              <p className="text-sm leading-relaxed mb-6">
                Mazterize is a leading platform providing high-quality software, tools, and digital resources for tech enthusiasts worldwide. Our mission is to make premium tools accessible to everyone.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Categories</h4>
              <ul className="space-y-4 text-sm">
                {CATEGORIES.map(cat => (
                  <li key={cat.title}>
                    <a href={cat.url} className="hover:text-brand-primary transition-colors">{cat.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="https://mazterize.net/" className="hover:text-brand-primary transition-colors">Home</a></li>
                <li><a href="https://mazterize.net/pc-softwares/" className="hover:text-brand-primary transition-colors">Software</a></li>
                <li><a href="https://mazterize.net/pc-games/" className="hover:text-brand-primary transition-colors">Games</a></li>
                <li><a href="https://mazterize.net/mac-software/" className="hover:text-brand-primary transition-colors">Mac Apps</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Newsletter</h4>
              <p className="text-sm mb-4">Stay updated with the latest software releases and tech news.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-brand-primary"
                />
                <button className="bg-brand-primary text-white p-2 rounded-lg hover:bg-brand-secondary transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} Mazterize. All rights reserved. All links are dofollow and clickable.</p>
            <div className="mt-4 flex justify-center gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">DMCA</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
