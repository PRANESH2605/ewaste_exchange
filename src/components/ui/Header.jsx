import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Services', path: '/service-discovery', icon: 'Search' },
    { name: 'Impact', path: '/impact-dashboard', icon: 'BarChart3' },
    { name: 'Community', path: '/community-platform', icon: 'Users' },
    { name: 'Network', path: '/local-network', icon: 'MapPin' },
    { name: 'Marketplace', path: '/marketplace', icon: 'ShoppingBag' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-layered' 
          : 'bg-background/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 group transition-smooth hover:scale-105"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-organic">
                <Icon 
                  name="Recycle" 
                  size={24} 
                  color="white" 
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-heading font-bold text-primary">
                eWaste Exchange
              </h1>
              <p className="text-xs text-text-secondary font-medium -mt-1">
                Sustainable Technology
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                  isActivePath(item.path)
                    ? 'bg-primary text-primary-foreground shadow-organic'
                    : 'text-text-primary hover:bg-surface hover:text-primary'
                }`}
              >
                <Icon 
                  name={item.icon} 
                  size={18} 
                  className={isActivePath(item.path) ? 'text-primary-foreground' : 'text-text-secondary'}
                />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              iconName="Calculator"
              iconPosition="left"
              className="text-primary hover:bg-primary/10"
            >
              Calculate Impact
            </Button>
            <Button
              variant="primary"
              size="sm"
              iconName="Truck"
              iconPosition="left"
              className="bg-conversion hover:bg-conversion/90 text-conversion-foreground shadow-organic"
            >
              Schedule Pickup
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-text-primary hover:bg-surface transition-smooth"
            aria-label="Toggle menu"
          >
            <Icon 
              name={isMenuOpen ? "X" : "Menu"} 
              size={24}
              className="transition-transform duration-200"
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-smooth ${
            isMenuOpen 
              ? 'max-h-screen opacity-100 pb-6' :'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <nav className="pt-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-smooth ${
                  isActivePath(item.path)
                    ? 'bg-primary text-primary-foreground shadow-organic'
                    : 'text-text-primary hover:bg-surface hover:text-primary'
                }`}
              >
                <Icon 
                  name={item.icon} 
                  size={20} 
                  className={isActivePath(item.path) ? 'text-primary-foreground' : 'text-text-secondary'}
                />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile CTA Buttons */}
          <div className="pt-6 space-y-3 border-t border-border mt-6">
            <Button
              variant="outline"
              size="md"
              iconName="Calculator"
              iconPosition="left"
              fullWidth
              className="border-primary text-primary hover:bg-primary/10"
            >
              Calculate My Impact
            </Button>
            <Button
              variant="primary"
              size="md"
              iconName="Truck"
              iconPosition="left"
              fullWidth
              className="bg-conversion hover:bg-conversion/90 text-conversion-foreground shadow-organic"
            >
              Schedule Free Pickup
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Header;