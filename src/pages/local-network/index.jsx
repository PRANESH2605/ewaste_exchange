import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import LocationDetector from './components/LocationDetector';
import InteractiveMap from './components/InteractiveMap';
import CommunityEvents from './components/CommunityEvents';
import LocalRegulations from './components/LocalRegulations';
import RegionalImpact from './components/RegionalImpact';
import PartnerSpotlight from './components/PartnerSpotlight';

const LocalNetwork = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const navigationTabs = [
    { id: 'overview', name: 'Overview', icon: 'Home' },
    { id: 'map', name: 'Interactive Map', icon: 'Map' },
    { id: 'events', name: 'Community Events', icon: 'Calendar' },
    { id: 'regulations', name: 'Local Regulations', icon: 'Scale' },
    { id: 'impact', name: 'Regional Impact', icon: 'BarChart3' },
    { id: 'partners', name: 'Partner Spotlight', icon: 'Star' }
  ];

  const quickStats = [
    {
      label: "Active Drop-off Centers",
      value: "24",
      change: "+3 this month",
      icon: "Package",
      color: "text-primary"
    },
    {
      label: "Processing Facilities",
      value: "8",
      change: "+1 certified",
      icon: "Factory",
      color: "text-accent"
    },
    {
      label: "Community Partners",
      value: "156",
      change: "+12 new partners",
      icon: "Users",
      color: "text-secondary"
    },
    {
      label: "Upcoming Events",
      value: "12",
      change: "Next: Feb 15",
      icon: "Calendar",
      color: "text-success"
    }
  ];

  const weatherAlert = {
    type: "info",
    title: "Weather Advisory",
    message: "Light rain expected tomorrow. Some outdoor collection events may be moved indoors.",
    icon: "Cloud"
  };

  const handleLocationUpdate = (location) => {
    setCurrentLocation(location);
  };

  const handleSchedulePickup = () => {
    console.log('Scheduling pickup...');
  };

  const handleFindLocation = () => {
    console.log('Finding nearest location...');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'map':
        return <InteractiveMap location={currentLocation} />;
      case 'events':
        return <CommunityEvents />;
      case 'regulations':
        return <LocalRegulations />;
      case 'impact':
        return <RegionalImpact />;
      case 'partners':
        return <PartnerSpotlight />;
      default:
        return (
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-organic p-6 border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-surface flex items-center justify-center`}>
                      <Icon name={stat.icon} size={24} className={stat.color} />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-heading font-bold text-text-primary">
                        {stat.value}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {stat.change}
                      </div>
                    </div>
                  </div>
                  <h3 className="font-medium text-text-primary">{stat.label}</h3>
                </div>
              ))}
            </div>

            {/* Weather Alert */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={weatherAlert.icon} size={18} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-blue-900 mb-1">{weatherAlert.title}</h4>
                  <p className="text-sm text-blue-700">{weatherAlert.message}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="X"
                  className="text-blue-600 hover:bg-blue-100"
                />
              </div>
            </div>

            {/* Featured Components */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <InteractiveMap location={currentLocation} />
              <CommunityEvents />
            </div>

            <RegionalImpact />
            <PartnerSpotlight />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-text-secondary mb-2">
              <Link to="/homepage" className="hover:text-primary transition-smooth">
                Home
              </Link>
              <Icon name="ChevronRight" size={16} />
              <span>Local Network</span>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-2">
                  Local Network
                </h1>
                <p className="text-lg text-text-secondary max-w-2xl">
                  Connect with your local sustainability community and discover nearby resources for responsible e-waste management.
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  iconName="Navigation"
                  onClick={handleFindLocation}
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Find Nearest
                </Button>
                <Button
                  variant="primary"
                  iconName="Truck"
                  onClick={handleSchedulePickup}
                  className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
                >
                  Schedule Pickup
                </Button>
              </div>
            </div>
          </div>

          {/* Location Detector */}
          <div className="mb-8">
            <LocationDetector onLocationUpdate={handleLocationUpdate} />
          </div>

          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="border-b border-border">
              <nav className="flex space-x-8 overflow-x-auto">
                {navigationTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-smooth ${
                      activeTab === tab.id
                        ? 'border-primary text-primary' :'border-transparent text-text-secondary hover:text-primary hover:border-primary/50'
                    }`}
                  >
                    <Icon name={tab.icon} size={18} />
                    <span>{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mb-12">
            {renderTabContent()}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-4">
                Join Your Local Sustainability Network
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Connect with like-minded individuals, participate in community events, and make a real impact in your area.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  iconName="Users"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Join Community
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  iconName="Calendar"
                  className="text-white border-white hover:bg-white/10"
                >
                  View All Events
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Recycle" size={18} color="white" />
              </div>
              <span className="font-heading font-semibold text-text-primary">
                eWaste Exchange
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-text-secondary">
              <Link to="/service-discovery" className="hover:text-primary transition-smooth">
                Services
              </Link>
              <Link to="/impact-dashboard" className="hover:text-primary transition-smooth">
                Impact
              </Link>
              <Link to="/community-platform" className="hover:text-primary transition-smooth">
                Community
              </Link>
              <Link to="/marketplace" className="hover:text-primary transition-smooth">
                Marketplace
              </Link>
            </div>
            
            <div className="text-sm text-text-secondary mt-4 md:mt-0">
              © {new Date().getFullYear()} eWaste Exchange. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LocalNetwork;