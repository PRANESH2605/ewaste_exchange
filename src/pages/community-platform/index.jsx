import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

// Import all components
import CommunityFeed from './components/CommunityFeed';
import DiscussionForums from './components/DiscussionForums';
import LocalGroups from './components/LocalGroups';
import PeerExchange from './components/PeerExchange';
import EventCoordination from './components/EventCoordination';
import UserProfiles from './components/UserProfiles';

const CommunityPlatform = () => {
  const [activeSection, setActiveSection] = useState('feed');

  const navigationSections = [
    { key: 'feed', label: 'Community Feed', icon: 'Home', description: 'Latest updates and success stories' },
    { key: 'forums', label: 'Discussion Forums', icon: 'MessageSquare', description: 'Topic-based discussions' },
    { key: 'groups', label: 'Local Groups', icon: 'Users', description: 'Regional sustainability communities' },
    { key: 'exchange', label: 'Peer Exchange', icon: 'RefreshCw', description: 'Trade, sell, or donate devices' },
    { key: 'events', label: 'Events', icon: 'Calendar', description: 'Community drives and workshops' },
    { key: 'profiles', label: 'User Profiles', icon: 'User', description: 'Member achievements and expertise' }
  ];

  const communityStats = {
    totalMembers: 12847,
    activeToday: 1234,
    devicesExchanged: 45623,
    eventsThisMonth: 23,
    forumPosts: 8934,
    co2SavedCommunity: "234.5 tons"
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'feed':
        return <CommunityFeed />;
      case 'forums':
        return <DiscussionForums />;
      case 'groups':
        return <LocalGroups />;
      case 'exchange':
        return <PeerExchange />;
      case 'events':
        return <EventCoordination />;
      case 'profiles':
        return <UserProfiles />;
      default:
        return <CommunityFeed />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="p-3 bg-primary rounded-lg">
                  <Icon name="Users" size={32} color="white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary">
                  Community Platform
                </h1>
              </div>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
                Connect with like-minded individuals, share knowledge, and collaborate on sustainable technology initiatives. 
                Together, we're building a more sustainable future through community action.
              </p>

              {/* Community Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
                <div className="bg-surface rounded-lg p-4 shadow-organic">
                  <div className="text-2xl font-bold text-primary">{communityStats.totalMembers.toLocaleString()}</div>
                  <div className="text-sm text-text-secondary">Total Members</div>
                </div>
                <div className="bg-surface rounded-lg p-4 shadow-organic">
                  <div className="text-2xl font-bold text-accent">{communityStats.activeToday.toLocaleString()}</div>
                  <div className="text-sm text-text-secondary">Active Today</div>
                </div>
                <div className="bg-surface rounded-lg p-4 shadow-organic">
                  <div className="text-2xl font-bold text-secondary">{communityStats.devicesExchanged.toLocaleString()}</div>
                  <div className="text-sm text-text-secondary">Devices Exchanged</div>
                </div>
                <div className="bg-surface rounded-lg p-4 shadow-organic">
                  <div className="text-2xl font-bold text-conversion">{communityStats.eventsThisMonth}</div>
                  <div className="text-sm text-text-secondary">Events This Month</div>
                </div>
                <div className="bg-surface rounded-lg p-4 shadow-organic">
                  <div className="text-2xl font-bold text-trust">{communityStats.forumPosts.toLocaleString()}</div>
                  <div className="text-sm text-text-secondary">Forum Posts</div>
                </div>
                <div className="bg-surface rounded-lg p-4 shadow-organic">
                  <div className="text-2xl font-bold text-success">{communityStats.co2SavedCommunity}</div>
                  <div className="text-sm text-text-secondary">CO₂ Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-surface border-b border-border sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto scrollbar-hide">
              {navigationSections.map((section) => (
                <button
                  key={section.key}
                  onClick={() => setActiveSection(section.key)}
                  className={`flex items-center space-x-3 px-6 py-4 text-sm font-medium whitespace-nowrap transition-smooth border-b-2 ${
                    activeSection === section.key
                      ? 'border-primary text-primary bg-primary/5' :'border-transparent text-text-secondary hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={section.icon} size={18} />
                  <div className="text-left">
                    <div className="font-medium">{section.label}</div>
                    <div className="text-xs opacity-80 hidden lg:block">{section.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderActiveSection()}
        </div>

        {/* Quick Actions Floating Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="relative group">
            <Button
              variant="primary"
              size="lg"
              iconName="Plus"
              className="rounded-full w-14 h-14 shadow-layered hover:shadow-organic transition-all duration-300 bg-conversion hover:bg-conversion/90"
            />
            
            {/* Quick Actions Menu */}
            <div className="absolute bottom-16 right-0 bg-surface rounded-lg shadow-layered border border-border p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-48">
              <div className="space-y-1">
                <button className="flex items-center space-x-3 w-full px-3 py-2 text-sm text-text-primary hover:bg-muted rounded-lg transition-smooth">
                  <Icon name="MessageCircle" size={16} />
                  <span>Start Discussion</span>
                </button>
                <button className="flex items-center space-x-3 w-full px-3 py-2 text-sm text-text-primary hover:bg-muted rounded-lg transition-smooth">
                  <Icon name="Calendar" size={16} />
                  <span>Create Event</span>
                </button>
                <button className="flex items-center space-x-3 w-full px-3 py-2 text-sm text-text-primary hover:bg-muted rounded-lg transition-smooth">
                  <Icon name="Package" size={16} />
                  <span>List Item</span>
                </button>
                <button className="flex items-center space-x-3 w-full px-3 py-2 text-sm text-text-primary hover:bg-muted rounded-lg transition-smooth">
                  <Icon name="Users" size={16} />
                  <span>Create Group</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-surface border-t border-border mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <Icon name="Recycle" size={24} color="white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-primary">eWaste Exchange</h3>
                    <p className="text-sm text-text-secondary">Community Platform</p>
                  </div>
                </div>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Building a sustainable future through community collaboration, knowledge sharing, and collective environmental action.
                </p>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm" iconName="Twitter" />
                  <Button variant="ghost" size="sm" iconName="Facebook" />
                  <Button variant="ghost" size="sm" iconName="Instagram" />
                  <Button variant="ghost" size="sm" iconName="Linkedin" />
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-text-primary mb-4">Community</h4>
                <div className="space-y-2">
                  <button className="block text-text-secondary hover:text-primary transition-smooth">Discussion Forums</button>
                  <button className="block text-text-secondary hover:text-primary transition-smooth">Local Groups</button>
                  <button className="block text-text-secondary hover:text-primary transition-smooth">Events Calendar</button>
                  <button className="block text-text-secondary hover:text-primary transition-smooth">Member Directory</button>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-text-primary mb-4">Support</h4>
                <div className="space-y-2">
                  <button className="block text-text-secondary hover:text-primary transition-smooth">Community Guidelines</button>
                  <button className="block text-text-secondary hover:text-primary transition-smooth">Safety Center</button>
                  <button className="block text-text-secondary hover:text-primary transition-smooth">Report Content</button>
                  <button className="block text-text-secondary hover:text-primary transition-smooth">Help Center</button>
                </div>
              </div>
            </div>

            <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
              <p className="text-text-secondary text-sm">
                © {new Date().getFullYear()} eWaste Exchange Community Platform. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <button className="text-text-secondary hover:text-primary text-sm transition-smooth">Privacy Policy</button>
                <button className="text-text-secondary hover:text-primary text-sm transition-smooth">Terms of Service</button>
                <button className="text-text-secondary hover:text-primary text-sm transition-smooth">Code of Conduct</button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CommunityPlatform;