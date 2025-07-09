import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { 
      name: 'Dashboard', 
      path: '/homepage', 
      icon: 'Home',
      description: 'Overview & quick actions'
    },
    { 
      name: 'Service Discovery', 
      path: '/service-discovery', 
      icon: 'Search',
      description: 'Find recycling services'
    },
    { 
      name: 'Impact Dashboard', 
      path: '/impact-dashboard', 
      icon: 'BarChart3',
      description: 'Track your environmental impact'
    },
    { 
      name: 'Community', 
      path: '/community-platform', 
      icon: 'Users',
      description: 'Connect with eco-warriors'
    },
    { 
      name: 'Local Network', 
      path: '/local-network', 
      icon: 'MapPin',
      description: 'Nearby recycling options'
    },
    { 
      name: 'Marketplace', 
      path: '/marketplace', 
      icon: 'ShoppingBag',
      description: 'Buy & sell refurbished items'
    },
  ];

  const quickActions = [
    { name: 'Schedule Pickup', icon: 'Truck', action: 'schedule' },
    { name: 'Calculate Impact', icon: 'Calculator', action: 'calculate' },
    { name: 'Find Location', icon: 'Navigation', action: 'locate' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const closeMobile = () => {
    setIsMobileOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const handleQuickAction = (action) => {
    switch (action) {
      case 'schedule': console.log('Opening pickup scheduler...');
        break;
      case 'calculate': console.log('Opening impact calculator...');
        break;
      case 'locate': console.log('Finding nearby locations...');
        break;
      default:
        break;
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleMobile}
        className="lg:hidden fixed top-20 left-4 z-60 p-2 bg-primary text-primary-foreground rounded-lg shadow-organic"
        aria-label="Toggle sidebar"
      >
        <Icon name="Menu" size={20} />
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={closeMobile}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full bg-surface border-r border-border z-50 transition-all duration-300 ease-smooth ${
          isCollapsed ? 'w-20' : 'w-72'
        } ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            {!isCollapsed && (
              <Link 
                to="/homepage" 
                className="flex items-center space-x-3 group"
                onClick={closeMobile}
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
                <div>
                  <h1 className="text-lg font-heading font-bold text-primary">
                    eWaste Exchange
                  </h1>
                  <p className="text-xs text-text-secondary font-medium -mt-1">
                    Sustainable Tech
                  </p>
                </div>
              </Link>
            )}
            
            <button
              onClick={toggleCollapse}
              className="hidden lg:flex p-2 rounded-lg text-text-secondary hover:bg-background hover:text-primary transition-smooth"
              aria-label="Toggle sidebar"
            >
              <Icon 
                name={isCollapsed ? "ChevronRight" : "ChevronLeft"} 
                size={20}
              />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMobile}
                className={`flex items-center space-x-3 p-3 rounded-lg text-sm font-medium transition-smooth group ${
                  isActivePath(item.path)
                    ? 'bg-primary text-primary-foreground shadow-organic'
                    : 'text-text-primary hover:bg-background hover:text-primary'
                }`}
                title={isCollapsed ? item.name : ''}
              >
                <Icon 
                  name={item.icon} 
                  size={20} 
                  className={`flex-shrink-0 ${
                    isActivePath(item.path) 
                      ? 'text-primary-foreground' 
                      : 'text-text-secondary group-hover:text-primary'
                  }`}
                />
                {!isCollapsed && (
                  <div className="flex-1 min-w-0">
                    <div className="font-medium">{item.name}</div>
                    <div className={`text-xs mt-0.5 ${
                      isActivePath(item.path) 
                        ? 'text-primary-foreground/80' 
                        : 'text-text-secondary'
                    }`}>
                      {item.description}
                    </div>
                  </div>
                )}
              </Link>
            ))}
          </nav>

          {/* Quick Actions */}
          {!isCollapsed && (
            <div className="p-4 border-t border-border">
              <h3 className="text-sm font-heading font-semibold text-text-primary mb-3">
                Quick Actions
              </h3>
              <div className="space-y-2">
                {quickActions.map((action) => (
                  <Button
                    key={action.action}
                    variant="ghost"
                    size="sm"
                    iconName={action.icon}
                    iconPosition="left"
                    fullWidth
                    onClick={() => handleQuickAction(action.action)}
                    className="justify-start text-text-secondary hover:text-primary hover:bg-background"
                  >
                    {action.name}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Impact Summary */}
          {!isCollapsed && (
            <div className="p-4 border-t border-border bg-gradient-to-r from-accent/10 to-primary/10">
              <div className="text-center">
                <div className="text-2xl font-heading font-bold text-primary animate-breathe">
                  247
                </div>
                <div className="text-xs text-text-secondary font-medium">
                  Devices Recycled
                </div>
                <div className="text-lg font-accent font-bold text-accent mt-1">
                  1.2 tons CO₂
                </div>
                <div className="text-xs text-text-secondary">
                  Environmental Impact
                </div>
              </div>
              
              <Button
                variant="primary"
                size="sm"
                iconName="TrendingUp"
                iconPosition="left"
                fullWidth
                className="mt-3 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                View Full Report
              </Button>
            </div>
          )}

          {/* Collapsed State Impact */}
          {isCollapsed && (
            <div className="p-4 border-t border-border text-center">
              <div className="text-lg font-heading font-bold text-primary animate-breathe">
                247
              </div>
              <div className="text-xs text-text-secondary">
                Devices
              </div>
              <div className="w-8 h-1 bg-accent rounded-full mx-auto mt-2"></div>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content Spacer */}
      <div className={`hidden lg:block transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-72'
      }`} />
    </>
  );
};

export default Sidebar;