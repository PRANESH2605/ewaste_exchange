import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const LocalGroups = () => {
  const [activeTab, setActiveTab] = useState('nearby');
  const [selectedLocation, setSelectedLocation] = useState('San Francisco, CA');

  const localGroups = [
    {
      id: 1,
      name: "SF Bay Area E-Waste Warriors",
      location: "San Francisco, CA",
      distance: "2.3 miles",
      members: 247,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      description: "Weekly e-waste collection drives, repair workshops, and community education events in the SF Bay Area.",
      category: "Community Action",
      nextEvent: {
        title: "Monthly Repair Café",
        date: "2024-01-25",
        time: "2:00 PM",
        location: "Mission Community Center"
      },
      organizers: [
        {
          name: "Maria Santos",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e0e4b6?w=150&h=150&fit=crop&crop=face",
          role: "Lead Organizer"
        },
        {
          name: "David Chen",
          avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=150&h=150&fit=crop&crop=face",
          role: "Tech Coordinator"
        }
      ],
      stats: {
        devicesCollected: 1247,
        eventsHosted: 23,
        volunteersActive: 45
      },
      tags: ["Repair", "Education", "Community", "Weekly Events"]
    },
    {
      id: 2,
      name: "Silicon Valley Corporate Sustainability Network",
      location: "Palo Alto, CA",
      distance: "8.7 miles",
      members: 156,
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?w=600&h=400&fit=crop",
      description: "Connecting businesses for bulk e-waste processing, compliance sharing, and sustainable procurement strategies.",
      category: "Business Network",
      nextEvent: {
        title: "Quarterly Compliance Workshop",
        date: "2024-02-15",
        time: "9:00 AM",
        location: "Tech Hub Conference Center"
      },
      organizers: [
        {
          name: "Jennifer Kim",
          avatar: "https://images.pixabay.com/photo/2017/06/26/02/47/man-2442565_960_720.jpg?w=150&h=150&fit=crop&crop=face",
          role: "Business Liaison"
        }
      ],
      stats: {
        companiesInvolved: 34,
        bulkPickupsCoordinated: 67,
        complianceTrainingsHeld: 12
      },
      tags: ["Business", "Compliance", "Bulk Processing", "Networking"]
    },
    {
      id: 3,
      name: "East Bay Student Environmental Coalition",
      location: "Berkeley, CA",
      distance: "12.1 miles",
      members: 89,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      description: "University students organizing campus e-waste drives, research projects, and peer education programs.",
      category: "Student Organization",
      nextEvent: {
        title: "Campus E-Waste Drive",
        date: "2024-01-30",
        time: "10:00 AM",
        location: "UC Berkeley Student Union"
      },
      organizers: [
        {
          name: "Alex Rodriguez",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
          role: "Student President"
        },
        {
          name: "Emma Thompson",
          avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=150&h=150&fit=crop&crop=face",
          role: "Research Coordinator"
        }
      ],
      stats: {
        studentsReached: 2340,
        campusEventsHeld: 15,
        researchProjectsActive: 3
      },
      tags: ["Students", "Research", "Campus", "Education"]
    },
    {
      id: 4,
      name: "Marin County Green Tech Collective",
      location: "San Rafael, CA",
      distance: "18.4 miles",
      members: 134,
      image: "https://images.pexels.com/photos/5029857/pexels-photo-5029857.jpeg?w=600&h=400&fit=crop",
      description: "Rural community focused on sustainable technology practices, device refurbishment, and digital divide solutions.",
      category: "Rural Initiative",
      nextEvent: {
        title: "Refurbishment Workshop",
        date: "2024-02-08",
        time: "1:00 PM",
        location: "Marin Community Library"
      },
      organizers: [
        {
          name: "Robert Wilson",
          avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
          role: "Community Leader"
        }
      ],
      stats: {
        devicesRefurbished: 456,
        familiesHelped: 78,
        workshopsHeld: 19
      },
      tags: ["Rural", "Refurbishment", "Digital Divide", "Community"]
    }
  ];

  const myGroups = [
    {
      id: 1,
      name: "SF Bay Area E-Waste Warriors",
      role: "Active Member",
      joinDate: "2023-08-15",
      contributions: 23,
      nextMeeting: "2024-01-25"
    },
    {
      id: 3,
      name: "East Bay Student Environmental Coalition",
      role: "Volunteer",
      joinDate: "2023-11-02",
      contributions: 8,
      nextMeeting: "2024-01-30"
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Community Action': return 'bg-green-100 text-green-800 border-green-200';
      case 'Business Network': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Student Organization': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Rural Initiative': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header with Location Selector */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h2 className="text-2xl font-heading font-bold text-text-primary">Local Groups</h2>
          <p className="text-text-secondary">Connect with sustainability communities in your area</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Icon name="MapPin" size={20} className="text-primary" />
            <select 
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-surface border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="San Francisco, CA">San Francisco, CA</option>
              <option value="Los Angeles, CA">Los Angeles, CA</option>
              <option value="New York, NY">New York, NY</option>
              <option value="Chicago, IL">Chicago, IL</option>
              <option value="Austin, TX">Austin, TX</option>
            </select>
          </div>
          
          <Button variant="primary" iconName="Plus" size="sm">
            Create Group
          </Button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-surface rounded-lg p-4 shadow-organic">
        <div className="flex space-x-1">
          {[
            { key: 'nearby', label: 'Nearby Groups', icon: 'MapPin' },
            { key: 'my-groups', label: 'My Groups', icon: 'Users' },
            { key: 'recommended', label: 'Recommended', icon: 'Star' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                activeTab === tab.key
                  ? 'bg-primary text-primary-foreground shadow-organic'
                  : 'text-text-secondary hover:bg-background hover:text-primary'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'nearby' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {localGroups.map((group) => (
            <div key={group.id} className="bg-surface rounded-lg shadow-organic overflow-hidden">
              {/* Group Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={group.image}
                  alt={group.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getCategoryColor(group.category)}`}>
                    {group.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-2 py-1">
                  <div className="flex items-center space-x-1 text-xs text-text-primary">
                    <Icon name="MapPin" size={12} />
                    <span>{group.distance}</span>
                  </div>
                </div>
              </div>

              {/* Group Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-text-primary">{group.name}</h3>
                  <div className="flex items-center space-x-1 text-text-secondary">
                    <Icon name="Users" size={16} />
                    <span className="text-sm">{group.members}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-3 text-sm text-text-secondary">
                  <Icon name="MapPin" size={14} />
                  <span>{group.location}</span>
                </div>

                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  {group.description}
                </p>

                {/* Next Event */}
                {group.nextEvent && (
                  <div className="bg-accent/10 rounded-lg p-3 mb-4 border border-accent/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Calendar" size={16} className="text-accent" />
                      <span className="text-sm font-medium text-text-primary">Next Event</span>
                    </div>
                    <div className="text-sm text-text-primary">
                      <div className="font-medium">{group.nextEvent.title}</div>
                      <div className="text-text-secondary">
                        {formatDate(group.nextEvent.date)} at {group.nextEvent.time}
                      </div>
                      <div className="text-text-secondary">{group.nextEvent.location}</div>
                    </div>
                  </div>
                )}

                {/* Organizers */}
                <div className="mb-4">
                  <div className="text-sm font-medium text-text-primary mb-2">Organizers</div>
                  <div className="flex items-center space-x-3">
                    {group.organizers.map((organizer, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Image
                          src={organizer.avatar}
                          alt={organizer.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <div className="text-xs font-medium text-text-primary">{organizer.name}</div>
                          <div className="text-xs text-text-secondary">{organizer.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-background rounded-lg">
                  {Object.entries(group.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-primary">{value}</div>
                      <div className="text-xs text-text-secondary capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Button variant="primary" size="sm" iconName="UserPlus" fullWidth>
                    Join Group
                  </Button>
                  <Button variant="outline" size="sm" iconName="MessageCircle">
                    Message
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'my-groups' && (
        <div className="space-y-4">
          {myGroups.map((group) => (
            <div key={group.id} className="bg-surface rounded-lg shadow-organic p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{group.name}</h3>
                  <div className="flex items-center space-x-6 text-sm text-text-secondary">
                    <div className="flex items-center space-x-2">
                      <Icon name="Shield" size={16} />
                      <span>Role: {group.role}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={16} />
                      <span>Joined: {formatDate(group.joinDate)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Activity" size={16} />
                      <span>{group.contributions} contributions</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <div className="text-sm font-medium text-text-primary">Next Meeting</div>
                    <div className="text-sm text-text-secondary">{formatDate(group.nextMeeting)}</div>
                  </div>
                  <Button variant="outline" size="sm" iconName="ExternalLink">
                    View Group
                  </Button>
                </div>
              </div>
            </div>
          ))}
          
          {myGroups.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Users" size={48} className="text-text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-text-primary mb-2">No Groups Yet</h3>
              <p className="text-text-secondary mb-4">Join local groups to connect with your community</p>
              <Button variant="primary" iconName="Search">
                Browse Groups
              </Button>
            </div>
          )}
        </div>
      )}

      {activeTab === 'recommended' && (
        <div className="text-center py-12">
          <Icon name="Star" size={48} className="text-text-secondary mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-text-primary mb-2">Personalized Recommendations</h3>
          <p className="text-text-secondary mb-4">Based on your interests and activity</p>
          <Button variant="primary" iconName="Sparkles">
            Get Recommendations
          </Button>
        </div>
      )}
    </div>
  );
};

export default LocalGroups;