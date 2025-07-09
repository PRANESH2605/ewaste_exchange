import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommunityEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const eventCategories = [
    { id: 'all', name: 'All Events', icon: 'Calendar', count: 12 },
    { id: 'drives', name: 'E-waste Drives', icon: 'Truck', count: 5 },
    { id: 'workshops', name: 'Workshops', icon: 'BookOpen', count: 4 },
    { id: 'fairs', name: 'Sustainability Fairs', icon: 'Leaf', count: 3 }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Community E-waste Collection Drive",
      category: "drives",
      date: "2024-02-15",
      time: "9:00 AM - 4:00 PM",
      location: "Golden Gate Park, San Francisco",
      organizer: "SF Green Initiative",
      description: "Bring your old electronics for safe disposal and recycling. Free event with refreshments and educational activities for families.",
      attendees: 156,
      capacity: 200,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop",
      tags: ["Free", "Family-friendly", "Refreshments"],
      volunteerNeeded: true,
      impact: "Expected to collect 2 tons of e-waste"
    },
    {
      id: 2,
      title: "Smartphone Repair Workshop",
      category: "workshops",
      date: "2024-02-18",
      time: "2:00 PM - 5:00 PM",
      location: "Community Tech Center",
      organizer: "TechFix Collective",
      description: "Learn basic smartphone repair techniques and extend your device's lifespan. Bring your broken phones and repair tools will be provided.",
      attendees: 24,
      capacity: 30,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=200&fit=crop",
      tags: ["Hands-on", "Tools provided", "Beginner-friendly"],
      volunteerNeeded: false,
      impact: "Prevent 30+ devices from premature disposal"
    },
    {
      id: 3,
      title: "Green Technology Fair",
      category: "fairs",
      date: "2024-02-22",
      time: "10:00 AM - 6:00 PM",
      location: "Moscone Center West",
      organizer: "Bay Area Sustainability Alliance",
      description: "Explore the latest in sustainable technology, meet local green businesses, and learn about eco-friendly alternatives to everyday tech.",
      attendees: 892,
      capacity: 1000,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop",
      tags: ["Vendors", "Networking", "Innovation"],
      volunteerNeeded: true,
      impact: "Showcase 50+ sustainable tech solutions"
    },
    {
      id: 4,
      title: "Corporate E-waste Audit Training",
      category: "workshops",
      date: "2024-02-25",
      time: "1:00 PM - 4:00 PM",
      location: "Business Innovation Hub",
      organizer: "Corporate Sustainability Network",
      description: "Professional training for businesses on conducting e-waste audits, compliance requirements, and implementing sustainable IT practices.",
      attendees: 45,
      capacity: 50,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop",
      tags: ["Professional", "Certification", "Business-focused"],
      volunteerNeeded: false,
      impact: "Train 50+ sustainability professionals"
    }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getAttendancePercentage = (attendees, capacity) => {
    return Math.round((attendees / capacity) * 100);
  };

  const handleRegister = (eventId) => {
    console.log(`Registering for event ${eventId}`);
  };

  const handleVolunteer = (eventId) => {
    console.log(`Volunteering for event ${eventId}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-organic border border-border">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name="Calendar" size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-text-primary">Community Events</h3>
              <p className="text-sm text-text-secondary">Join local sustainability initiatives</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              iconName={viewMode === 'grid' ? 'List' : 'Grid3X3'}
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
              className="text-text-secondary hover:text-primary"
            />
            <Button
              variant="primary"
              size="sm"
              iconName="Plus"
              className="bg-accent hover:bg-accent/90"
            >
              Create Event
            </Button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {eventCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-smooth ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-organic'
                  : 'bg-surface text-text-secondary hover:bg-background hover:text-primary'
              }`}
            >
              <Icon name={category.icon} size={16} />
              <span>{category.name}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                selectedCategory === category.id
                  ? 'bg-primary-foreground/20 text-primary-foreground'
                  : 'bg-text-secondary/10 text-text-secondary'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Events List */}
      <div className="p-6">
        <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 gap-6' : 'space-y-4'}`}>
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className={`border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-smooth ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              {/* Event Image */}
              <div className={`${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'h-48'} bg-surface overflow-hidden`}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/assets/images/no_image.png';
                  }}
                />
              </div>

              {/* Event Content */}
              <div className="p-4 flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold text-text-primary mb-1">
                      {event.title}
                    </h4>
                    <p className="text-sm text-text-secondary mb-2">
                      by {event.organizer}
                    </p>
                  </div>
                  {event.volunteerNeeded && (
                    <span className="px-2 py-1 bg-warning/10 text-warning text-xs rounded-full">
                      Volunteers Needed
                    </span>
                  )}
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center space-x-2 text-sm text-text-secondary">
                    <Icon name="Calendar" size={14} />
                    <span>{formatDate(event.date)}</span>
                    <Icon name="Clock" size={14} className="ml-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-text-secondary">
                    <Icon name="MapPin" size={14} />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-sm text-text-secondary mb-3 line-clamp-2">
                  {event.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {event.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Attendance & Impact */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Attendance</span>
                    <span className="font-medium">
                      {event.attendees}/{event.capacity} registered
                    </span>
                  </div>
                  <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent transition-all duration-300"
                      style={{ width: `${getAttendancePercentage(event.attendees, event.capacity)}%` }}
                    />
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-accent">
                    <Icon name="Target" size={14} />
                    <span>{event.impact}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button
                    variant="primary"
                    size="sm"
                    iconName="UserPlus"
                    onClick={() => handleRegister(event.id)}
                    className="flex-1"
                  >
                    Register
                  </Button>
                  {event.volunteerNeeded && (
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Heart"
                      onClick={() => handleVolunteer(event.id)}
                      className="border-accent text-accent hover:bg-accent/10"
                    >
                      Volunteer
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            iconName="ChevronDown"
            className="border-primary text-primary hover:bg-primary/10"
          >
            Load More Events
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommunityEvents;