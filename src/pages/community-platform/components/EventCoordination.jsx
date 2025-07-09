import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const EventCoordination = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const eventCategories = [
    { key: 'all', label: 'All Events', icon: 'Calendar' },
    { key: 'collection-drives', label: 'Collection Drives', icon: 'Truck' },
    { key: 'workshops', label: 'Workshops', icon: 'Wrench' },
    { key: 'awareness', label: 'Awareness Campaigns', icon: 'Megaphone' },
    { key: 'corporate', label: 'Corporate Events', icon: 'Building2' }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Community E-Waste Mega Drive",
      category: 'collection-drives',
      organizer: {
        name: "Green Tech Collective",
        avatar: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=150&h=150&fit=crop",
        type: "Community Partner"
      },
      date: "2024-01-27",
      time: "9:00 AM - 4:00 PM",
      location: {
        name: "Central Park Community Center",
        address: "1234 Park Avenue, San Francisco, CA",
        coordinates: "37.7749,-122.4194"
      },
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      description: `Join us for the biggest community e-waste collection drive of the year! We're aiming to collect 1,000+ devices and provide free services to help our community dispose of electronics responsibly.\n\nWhat we accept:\n• Smartphones, tablets, laptops\n• Desktop computers and monitors\n• Printers, scanners, and peripherals\n• Small appliances and cables\n• Gaming consoles and accessories\n\nFree services provided:\n• Professional data wiping\n• Device evaluation and refurbishment assessment\n• Educational materials about e-waste impact\n• Repair consultations\n\nVolunteers needed for setup, registration, sorting, and breakdown. Refreshments provided!`,
      capacity: 200,
      registered: 147,
      volunteers: 23,
      volunteersNeeded: 35,
      features: [
        "Free data wiping",
        "Device evaluation",
        "Educational booths",
        "Repair consultations",
        "Refreshments provided"
      ],
      requirements: [
        "Bring valid ID",
        "Remove personal data if possible",
        "Separate batteries from devices",
        "No CRT monitors or TVs"
      ],
      tags: ["Community", "Collection", "Free Services", "Volunteers Welcome"]
    },
    {
      id: 2,
      title: "Smartphone Repair Workshop",
      category: 'workshops',
      organizer: {
        name: "TechGuru Mike",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        type: "Expert Contributor"
      },
      date: "2024-02-03",
      time: "2:00 PM - 5:00 PM",
      location: {
        name: "TechHub Makerspace",
        address: "567 Innovation Drive, Palo Alto, CA",
        coordinates: "37.4419,-122.1430"
      },
      image: "https://images.pexels.com/photos/5029857/pexels-photo-5029857.jpeg?w=600&h=400&fit=crop",
      description: `Learn essential smartphone repair skills in this hands-on workshop! Perfect for beginners and intermediate users who want to extend their device lifespan and reduce e-waste.\n\nWhat you'll learn:\n• Screen replacement techniques\n• Battery replacement procedures\n• Common troubleshooting methods\n• Tool usage and safety practices\n• When to repair vs. replace\n\nWhat's included:\n• All tools and materials\n• Practice devices\n• Take-home repair kit\n• Digital resource guide\n• Certificate of completion\n\nBring your own broken device for hands-on practice! Limited to 15 participants for personalized instruction.`,
      capacity: 15,
      registered: 12,
      volunteers: 2,
      volunteersNeeded: 3,
      features: [
        "Hands-on practice",
        "All tools provided",
        "Take-home kit",
        "Expert instruction",
        "Small class size"
      ],
      requirements: [
        "No prior experience needed",
        "Bring broken device (optional)",
        "Wear closed-toe shoes",
        "Age 16+ (or with guardian)"
      ],
      tags: ["Workshop", "Repair", "Skills", "Hands-on"]
    },
    {
      id: 3,
      title: "Corporate Sustainability Summit",
      category: 'corporate',
      organizer: {
        name: "Business Sustainability Network",
        avatar: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?w=150&h=150&fit=crop",
        type: "Business Partner"
      },
      date: "2024-02-15",
      time: "8:00 AM - 6:00 PM",
      location: {
        name: "Silicon Valley Convention Center",
        address: "5001 Great America Parkway, Santa Clara, CA",
        coordinates: "37.4043,-121.9781"
      },
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      description: `Annual summit bringing together business leaders, sustainability professionals, and technology innovators to discuss corporate e-waste management strategies.\n\nAgenda highlights:\n• Keynote: "The Future of Circular Economy"\n• Panel: "Compliance in the Digital Age"\n• Workshop: "Building Sustainable IT Policies"\n• Networking lunch and exhibition\n• Awards ceremony for sustainability leaders\n\nWho should attend:\n• Sustainability managers\n• IT directors and procurement teams\n• Environmental compliance officers\n• C-suite executives\n• Consultants and service providers\n\nIncludes breakfast, lunch, and networking reception. CPE credits available.`,
      capacity: 300,
      registered: 234,
      volunteers: 8,
      volunteersNeeded: 12,
      features: [
        "Expert speakers",
        "Networking opportunities",
        "CPE credits",
        "Exhibition hall",
        "Awards ceremony"
      ],
      requirements: [
        "Business registration required",
        "Professional attire",
        "Advance registration only",
        "Photo ID required"
      ],
      tags: ["Corporate", "Summit", "Networking", "Professional"]
    },
    {
      id: 4,
      title: "Earth Day Awareness Campaign",
      category: 'awareness',
      organizer: {
        name: "EcoTech Community",
        avatar: "https://images.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg?w=150&h=150&fit=crop",
        type: "Platform Official"
      },
      date: "2024-04-22",
      time: "10:00 AM - 6:00 PM",
      location: {
        name: "Multiple Locations",
        address: "Bay Area Wide Campaign",
        coordinates: "37.7749,-122.4194"
      },
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?w=600&h=400&fit=crop",
      description: `Join our Earth Day awareness campaign spreading across the Bay Area! Multiple simultaneous events focused on educating the public about e-waste impact and sustainable technology practices.\n\nCampaign activities:\n• Street team information booths\n• Social media awareness drive\n• School presentation program\n• Corporate partnership announcements\n• Community challenge launch\n\nLocations include:\n• Downtown San Francisco\n• Stanford University campus\n• San Jose Tech Museum\n• Berkeley community centers\n• Palo Alto shopping districts\n\nVolunteers will receive training, materials, and Earth Day t-shirts. Great opportunity for students needing community service hours!`,
      capacity: 500,
      registered: 312,
      volunteers: 45,
      volunteersNeeded: 75,
      features: [
        "Multiple locations",
        "Training provided",
        "Free t-shirts",
        "Community service hours",
        "Social media kit"
      ],
      requirements: [
        "Enthusiasm for environment",
        "Comfortable speaking to public",
        "Flexible schedule preferred",
        "Transportation to assigned location"
      ],
      tags: ["Earth Day", "Awareness", "Multi-location", "Volunteers"]
    }
  ];

  const myEvents = [
    {
      id: 1,
      title: "Community E-Waste Mega Drive",
      role: "Volunteer",
      status: "registered",
      date: "2024-01-27",
      contribution: "Registration desk"
    },
    {
      id: 2,
      title: "Smartphone Repair Workshop",
      role: "Participant",
      status: "registered",
      date: "2024-02-03",
      contribution: "Attendee"
    }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getDaysUntil = (dateString) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = eventDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays > 0) return `In ${diffDays} days`;
    return 'Past event';
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'collection-drives': return 'bg-green-100 text-green-800 border-green-200';
      case 'workshops': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'awareness': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'corporate': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h2 className="text-2xl font-heading font-bold text-text-primary">Event Coordination</h2>
          <p className="text-text-secondary">Organize and participate in community sustainability events</p>
        </div>
        
        <Button variant="primary" iconName="Plus">
          Create Event
        </Button>
      </div>

      {/* Tab Navigation */}
      <div className="bg-surface rounded-lg p-4 shadow-organic">
        <div className="flex space-x-1">
          {[
            { key: 'upcoming', label: 'Upcoming Events', icon: 'Calendar' },
            { key: 'my-events', label: 'My Events', icon: 'User' },
            { key: 'past', label: 'Past Events', icon: 'Clock' }
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

      {/* Upcoming Events Tab */}
      {activeTab === 'upcoming' && (
        <div className="space-y-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {eventCategories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                  selectedCategory === category.key
                    ? 'bg-primary text-primary-foreground shadow-organic'
                    : 'bg-surface text-text-secondary hover:bg-background hover:text-primary'
                }`}
              >
                <Icon name={category.icon} size={16} />
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Events List */}
          <div className="space-y-6">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-surface rounded-lg shadow-organic overflow-hidden">
                <div className="md:flex">
                  {/* Event Image */}
                  <div className="md:w-1/3 h-64 md:h-auto relative overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getCategoryColor(event.category)}`}>
                        {event.category.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className="text-sm font-medium text-text-primary">{getDaysUntil(event.date)}</div>
                    </div>
                  </div>

                  {/* Event Content */}
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-text-primary mb-2">{event.title}</h3>
                        
                        <div className="flex items-center space-x-4 text-sm text-text-secondary mb-3">
                          <div className="flex items-center space-x-2">
                            <Icon name="Calendar" size={16} />
                            <span>{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="Clock" size={16} />
                            <span>{event.time}</span>
                          </div>
                        </div>

                        <div className="flex items-start space-x-2 mb-4">
                          <Icon name="MapPin" size={16} className="text-primary mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-text-primary">{event.location.name}</div>
                            <div className="text-sm text-text-secondary">{event.location.address}</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 ml-4">
                        <Image
                          src={event.organizer.avatar}
                          alt={event.organizer.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="text-sm font-medium text-text-primary">{event.organizer.name}</div>
                          <div className="text-xs text-text-secondary">{event.organizer.type}</div>
                        </div>
                      </div>
                    </div>

                    {/* Event Description */}
                    <div className="mb-4">
                      <div className="text-text-primary text-sm leading-relaxed whitespace-pre-line">
                        {event.description.split('\n').slice(0, 3).join('\n')}
                      </div>
                    </div>

                    {/* Event Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 p-4 bg-background rounded-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">{event.registered}</div>
                        <div className="text-xs text-text-secondary">Registered</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-accent">{event.capacity}</div>
                        <div className="text-xs text-text-secondary">Capacity</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-secondary">{event.volunteers}</div>
                        <div className="text-xs text-text-secondary">Volunteers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-warning">{event.volunteersNeeded}</div>
                        <div className="text-xs text-text-secondary">Needed</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <div className="text-sm font-medium text-text-primary mb-2">Event Features</div>
                      <div className="flex flex-wrap gap-2">
                        {event.features.slice(0, 4).map((feature) => (
                          <span
                            key={feature}
                            className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                        {event.features.length > 4 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{event.features.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2">
                      <Button variant="primary" size="sm" iconName="Calendar">
                        Register
                      </Button>
                      <Button variant="outline" size="sm" iconName="Users">
                        Volunteer
                      </Button>
                      <Button variant="ghost" size="sm" iconName="Share2">
                        Share
                      </Button>
                      <Button variant="ghost" size="sm" iconName="MapPin">
                        Directions
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* My Events Tab */}
      {activeTab === 'my-events' && (
        <div className="space-y-4">
          {myEvents.map((event) => (
            <div key={event.id} className="bg-surface rounded-lg shadow-organic p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{event.title}</h3>
                  <div className="flex items-center space-x-6 text-sm text-text-secondary">
                    <div className="flex items-center space-x-2">
                      <Icon name="User" size={16} />
                      <span>Role: {event.role}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={16} />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Activity" size={16} />
                      <span>{event.contribution}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    event.status === 'registered' ?'bg-green-100 text-green-800 border-green-200' :'bg-gray-100 text-gray-800 border-gray-200'
                  }`}>
                    {event.status.toUpperCase()}
                  </span>
                  <Button variant="outline" size="sm" iconName="ExternalLink">
                    View Event
                  </Button>
                </div>
              </div>
            </div>
          ))}
          
          {myEvents.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Calendar" size={48} className="text-text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-text-primary mb-2">No Events Yet</h3>
              <p className="text-text-secondary mb-4">Register for events to see them here</p>
              <Button variant="primary" iconName="Search">
                Browse Events
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Past Events Tab */}
      {activeTab === 'past' && (
        <div className="text-center py-12">
          <Icon name="Clock" size={48} className="text-text-secondary mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-text-primary mb-2">Past Events</h3>
          <p className="text-text-secondary">View your event history and contributions</p>
        </div>
      )}
    </div>
  );
};

export default EventCoordination;