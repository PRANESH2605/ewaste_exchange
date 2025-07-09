import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CommunityFeed = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const feedItems = [
    {
      id: 1,
      type: 'success_story',
      user: {
        name: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e0e4b6?w=150&h=150&fit=crop&crop=face",
        badge: "Eco Champion",
        level: "Gold"
      },
      content: `Just completed my 50th device recycling milestone! 🎉\n\nStarted with just an old laptop 6 months ago, and now I've helped process 50 devices through the community. The impact calculator shows I've saved 2.3 tons of CO₂ - that's incredible!\n\nSpecial thanks to the local pickup group for making this so easy. Next goal: 100 devices by year-end!`,
      image: "https://images.pexels.com/photos/5029857/pexels-photo-5029857.jpeg?auto=compress&cs=tinysrgb&w=600",
      metrics: {
        devices: 50,
        co2Saved: "2.3 tons",
        materialsRecovered: "45 lbs"
      },
      timestamp: new Date(Date.now() - 3600000),
      likes: 24,
      comments: 8,
      shares: 3
    },
    {
      id: 2,
      type: 'event',
      user: {
        name: "Green Tech Collective",
        avatar: "https://images.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg?w=150&h=150&fit=crop",
        badge: "Community Partner",
        level: "Verified"
      },
      content: `📅 Community E-Waste Drive - This Saturday!\n\nLocation: Central Park Community Center\nTime: 9 AM - 4 PM\n\nWe're expecting 200+ participants and aiming to collect 1,000 devices. Free data wiping services available on-site.\n\nVolunteers still needed for:\n• Device sorting and cataloging\n• Registration and check-in\n• Educational booth staffing\n\nRefreshments provided! Let's make this our biggest drive yet! 🌱`,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      eventDetails: {
        date: "2024-01-20",
        location: "Central Park Community Center",
        attendees: 47,
        capacity: 200
      },
      timestamp: new Date(Date.now() - 7200000),
      likes: 31,
      comments: 12,
      shares: 8
    },
    {
      id: 3,
      type: 'achievement',
      user: {
        name: "Marcus Rodriguez",
        avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=150&h=150&fit=crop&crop=face",
        badge: "Repair Guru",
        level: "Expert"
      },
      content: `🔧 Repair Workshop Success!\n\nJust finished teaching 15 community members how to repair common smartphone issues. We saved 12 devices from the e-waste stream today!\n\nNext workshop: Laptop battery replacement\nDate: Next Thursday, 6 PM\nLocation: TechHub Makerspace\n\nBring your old laptops - we'll diagnose and fix what we can. Materials provided, just bring your curiosity! 💡`,
      image: "https://images.pixabay.com/photo/2017/05/10/19/29/robot-2301646_960_720.jpg?w=600&h=400&fit=crop",
      metrics: {
        devicesRepaired: 12,
        participantsHelped: 15,
        skillsShared: 8
      },
      timestamp: new Date(Date.now() - 10800000),
      likes: 19,
      comments: 6,
      shares: 4
    },
    {
      id: 4,
      type: 'milestone',
      user: {
        name: "EcoTech Community",
        avatar: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=150&h=150&fit=crop",
        badge: "Platform Official",
        level: "Verified"
      },
      content: `🎊 COMMUNITY MILESTONE ACHIEVED! 🎊\n\nWe've officially processed 10,000 devices as a community!\n\nCollective Impact:\n• 45.2 tons of CO₂ emissions prevented\n• 8,750 lbs of materials recovered\n• 2,340 devices refurbished and donated\n• 156 local jobs supported\n\nThank you to our 1,247 active members who made this possible. Here's to the next 10,000! 🌍`,
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?w=600&h=400&fit=crop",
      metrics: {
        totalDevices: 10000,
        co2Prevented: "45.2 tons",
        materialsRecovered: "8,750 lbs",
        membersInvolved: 1247
      },
      timestamp: new Date(Date.now() - 14400000),
      likes: 89,
      comments: 23,
      shares: 15
    }
  ];

  const filterOptions = [
    { key: 'all', label: 'All Posts', icon: 'Grid3X3' },
    { key: 'success_story', label: 'Success Stories', icon: 'Trophy' },
    { key: 'event', label: 'Events', icon: 'Calendar' },
    { key: 'achievement', label: 'Achievements', icon: 'Award' },
    { key: 'milestone', label: 'Milestones', icon: 'Target' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? feedItems 
    : feedItems.filter(item => item.type === activeFilter);

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    
    if (hours < 1) return 'Just now';
    if (hours === 1) return '1 hour ago';
    if (hours < 24) return `${hours} hours ago`;
    
    const days = Math.floor(hours / 24);
    if (days === 1) return '1 day ago';
    return `${days} days ago`;
  };

  const getBadgeColor = (level) => {
    switch (level) {
      case 'Gold': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Expert': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Verified': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const renderMetrics = (metrics, type) => {
    if (!metrics) return null;

    return (
      <div className="mt-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(metrics).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-lg font-bold text-primary">{value}</div>
              <div className="text-xs text-text-secondary capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="bg-surface rounded-lg p-4 shadow-organic">
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => setActiveFilter(option.key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                activeFilter === option.key
                  ? 'bg-primary text-primary-foreground shadow-organic'
                  : 'bg-background text-text-secondary hover:bg-muted hover:text-primary'
              }`}
            >
              <Icon name={option.icon} size={16} />
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Feed Items */}
      <div className="space-y-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-surface rounded-lg shadow-organic overflow-hidden">
            {/* Header */}
            <div className="p-6 pb-4">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <Image
                    src={item.user.avatar}
                    alt={item.user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <Icon 
                      name={item.type === 'success_story' ? 'Trophy' : 
                            item.type === 'event' ? 'Calendar' :
                            item.type === 'achievement' ? 'Award' : 'Target'} 
                      size={12} 
                      color="white" 
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-text-primary">{item.user.name}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getBadgeColor(item.user.level)}`}>
                      {item.user.badge}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary">{formatTimeAgo(item.timestamp)}</p>
                </div>

                <Button variant="ghost" size="sm" iconName="MoreHorizontal" />
              </div>
            </div>

            {/* Content */}
            <div className="px-6 pb-4">
              <div className="whitespace-pre-line text-text-primary leading-relaxed">
                {item.content}
              </div>
              
              {item.image && (
                <div className="mt-4 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt="Post content"
                    className="w-full h-64 object-cover"
                  />
                </div>
              )}

              {renderMetrics(item.metrics, item.type)}

              {item.eventDetails && (
                <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={16} className="text-primary" />
                      <span className="text-sm text-text-primary">{item.eventDetails.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPin" size={16} className="text-primary" />
                      <span className="text-sm text-text-primary">{item.eventDetails.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Users" size={16} className="text-primary" />
                      <span className="text-sm text-text-primary">
                        {item.eventDetails.attendees}/{item.eventDetails.capacity} attending
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="px-6 py-4 border-t border-border bg-background/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-smooth">
                    <Icon name="Heart" size={18} />
                    <span className="text-sm font-medium">{item.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-smooth">
                    <Icon name="MessageCircle" size={18} />
                    <span className="text-sm font-medium">{item.comments}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-smooth">
                    <Icon name="Share2" size={18} />
                    <span className="text-sm font-medium">{item.shares}</span>
                  </button>
                </div>

                {item.type === 'event' && (
                  <Button variant="primary" size="sm" iconName="Calendar">
                    RSVP
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center py-8">
        <Button variant="outline" iconName="RefreshCw">
          Load More Posts
        </Button>
      </div>
    </div>
  );
};

export default CommunityFeed;