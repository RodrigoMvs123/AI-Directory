import React, { useState, useEffect, useMemo } from 'react';
import { SERVICES, CATEGORIES } from './constants';
import { ServiceCard } from './ServiceCard';
import { CategoryType, Service } from './types';
import { Search, Moon, Sun, Filter, X } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  // Theme toggle
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Filter Logic
  const filteredServices = useMemo(() => {
    return SERVICES.filter((service) => {
      const matchesSearch = 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = 
        selectedCategory === 'All' || 
        service.categories.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar / Header */}
      <header className="sticky top-0 z-50 bg-claude-bg/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-claude-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between py-4 gap-4">
            
            {/* Logo & Title */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-claude-accent flex items-center justify-center text-white font-serif font-bold text-lg">
                  A
                </div>
                <h1 className="text-xl font-serif font-semibold text-claude-text dark:text-dark-text tracking-tight">
                  AI Directory
                </h1>
              </div>
              
              {/* Mobile controls */}
              <div className="flex items-center gap-2 sm:hidden">
                 <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-lg bg-white dark:bg-dark-card border border-claude-border dark:border-dark-border"
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Filter size={20} />}
                </button>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative w-full sm:max-w-md group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400 group-focus-within:text-claude-accent transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-claude-border dark:border-dark-border rounded-xl leading-5 bg-white dark:bg-dark-card text-claude-text dark:text-dark-text placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-claude-accent focus:border-claude-accent sm:text-sm transition-all shadow-sm"
                placeholder="Search services, agents, tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Desktop Theme Toggle */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="hidden sm:flex p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-claude-text dark:text-dark-text"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Category Filter Bar (Desktop & Mobile) */}
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:block w-full overflow-x-auto pb-4 pt-2 scrollbar-hide`}>
            <div className="flex gap-2 min-w-max">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`
                      flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 border
                      ${isSelected 
                        ? 'bg-claude-text text-white border-claude-text dark:bg-white dark:text-black dark:border-white shadow-md' 
                        : 'bg-white dark:bg-dark-card text-gray-600 dark:text-gray-400 border-claude-border dark:border-dark-border hover:border-claude-accent/50 hover:text-claude-text dark:hover:text-gray-200'
                      }
                    `}
                  >
                    <Icon size={14} />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        
        {/* Results Header */}
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-serif font-bold text-claude-text dark:text-dark-text">
              {selectedCategory === 'All' ? 'All Services' : selectedCategory}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Showing {filteredServices.length} {filteredServices.length === 1 ? 'result' : 'results'}
            </p>
          </div>
        </div>

        {/* Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-dark-card mb-4">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-claude-text dark:text-dark-text mb-2">No services found</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
              Try adjusting your search terms or category filters.
            </p>
            <button 
              onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
              className="mt-4 text-claude-accent hover:underline text-sm font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-claude-border dark:border-dark-border bg-white dark:bg-dark-card mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
              © 2025 AI Services Directory. Curated for developers.
            </p>
            <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
               <button 
                 onClick={() => setShowAbout(true)} 
                 className="hover:text-claude-accent cursor-pointer transition-colors focus:outline-none"
               >
                 About
               </button>
            </div>
          </div>
        </div>
      </footer>

      {/* About Modal */}
      {showAbout && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm animate-fade-in" onClick={() => setShowAbout(false)}>
          <div 
            className="bg-white dark:bg-dark-card border border-claude-border dark:border-dark-border rounded-xl shadow-2xl max-w-md w-full p-6 relative transform transition-all" 
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowAbout(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="mb-4">
              <div className="w-10 h-10 rounded-lg bg-claude-accent flex items-center justify-center text-white font-serif font-bold text-lg mb-3">
                A
              </div>
              <h3 className="text-xl font-serif font-bold text-claude-text dark:text-dark-text">About AI Directory</h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              This application is a curated directory of the best AI coding agents, IDE extensions, and web tools available today.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Designed with a minimalist, content-first approach, it helps developers quickly find, compare, and adopt the right AI tools to streamline their workflows.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}