import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveMap = ({ location }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState(null);

  const mapFilters = [
    { id: 'all', name: 'All Locations', icon: 'Map', count: 24 },
    { id: 'dropoff', name: 'Drop-off Centers', icon: 'Package', count: 8 },
    { id: 'processing', name: 'Processing Facilities', icon: 'Factory', count: 3 },
    { id: 'partners', name: 'Community Partners', icon: 'Users', count: 13 }
  ];

  const mapLocations = [
    {
      id: 1,
      name: "GreenTech Recycling Center",
      type: "processing",
      address: "1234 Eco Drive, San Francisco, CA",
      distance: "2.3 miles",
      status: "Open",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      capacity: "85%",
      specialties: ["Laptops", "Smartphones", "Tablets"],
      rating: 4.8,
      coordinates: { lat: 37.7849, lng: -122.4094 }
    },
    {
      id: 2,
      name: "Community Electronics Drop-off",
      type: "dropoff",
      address: "567 Green Street, San Francisco, CA",
      distance: "1.1 miles",
      status: "Open",
      hours: "24/7 Drop-off Available",
      capacity: "45%",
      specialties: ["All Electronics", "Batteries", "Cables"],
      rating: 4.6,
      coordinates: { lat: 37.7649, lng: -122.4294 }
    },
    {
      id: 3,
      name: "SF Environmental School",
      type: "partners",
      address: "890 Education Ave, San Francisco, CA",
      distance: "3.2 miles",
      status: "Open",
      hours: "Mon-Fri: 9AM-3PM",
      capacity: "60%",
      specialties: ["Educational Programs", "Student Collections"],
      rating: 4.9,
      coordinates: { lat: 37.7549, lng: -122.4394 }
    }
  ];

  const filteredLocations = selectedFilter === 'all' 
    ? mapLocations 
    : mapLocations.filter(loc => loc.type === selectedFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open': return 'text-success';
      case 'Busy': return 'text-warning';
      case 'Closed': return 'text-error';
      default: return 'text-text-secondary';
    }
  };

  const getCapacityColor = (capacity) => {
    const percent = parseInt(capacity);
    if (percent < 50) return 'bg-success';
    if (percent < 80) return 'bg-warning';
    return 'bg-error';
  };

  return (
    <div className="bg-white rounded-xl shadow-organic border border-border overflow-hidden">
      {/* Map Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name="Map" size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-text-primary">Local Network Map</h3>
              <p className="text-sm text-text-secondary">Find nearby recycling resources</p>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            iconName="Maximize2"
            className="text-text-secondary hover:text-primary"
          >
            Fullscreen
          </Button>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {mapFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-smooth ${
                selectedFilter === filter.id
                  ? 'bg-primary text-primary-foreground shadow-organic'
                  : 'bg-surface text-text-secondary hover:bg-background hover:text-primary'
              }`}
            >
              <Icon name={filter.icon} size={16} />
              <span>{filter.name}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                selectedFilter === filter.id
                  ? 'bg-primary-foreground/20 text-primary-foreground'
                  : 'bg-text-secondary/10 text-text-secondary'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Map Container */}
      <div className="relative">
        <div className="h-96 bg-surface">
          {location && (
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="Local Network Map"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}&z=12&output=embed`}
              className="border-0"
            />
          )}
        </div>

        {/* Map Overlay Controls */}
        <div className="absolute top-4 right-4 space-y-2">
          <Button
            variant="ghost"
            size="sm"
            iconName="Plus"
            className="bg-white/90 backdrop-blur-sm shadow-organic hover:bg-white"
          />
          <Button
            variant="ghost"
            size="sm"
            iconName="Minus"
            className="bg-white/90 backdrop-blur-sm shadow-organic hover:bg-white"
          />
          <Button
            variant="ghost"
            size="sm"
            iconName="Navigation"
            className="bg-white/90 backdrop-blur-sm shadow-organic hover:bg-white"
          />
        </div>
      </div>

      {/* Location List */}
      <div className="p-6 border-t border-border">
        <div className="space-y-4 max-h-64 overflow-y-auto">
          {filteredLocations.map((location) => (
            <div
              key={location.id}
              className={`p-4 rounded-lg border transition-smooth cursor-pointer ${
                selectedLocation?.id === location.id
                  ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 hover:bg-surface'
              }`}
              onClick={() => setSelectedLocation(location)}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h4 className="font-medium text-text-primary">{location.name}</h4>
                  <p className="text-sm text-text-secondary">{location.address}</p>
                </div>
                <div className="text-right">
                  <span className={`text-sm font-medium ${getStatusColor(location.status)}`}>
                    {location.status}
                  </span>
                  <p className="text-sm text-text-secondary">{location.distance}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={14} className="text-text-secondary" />
                  <span className="text-sm text-text-secondary">{location.hours}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-text-secondary">Capacity:</span>
                  <div className="w-16 h-2 bg-surface rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getCapacityColor(location.capacity)} transition-all duration-300`}
                      style={{ width: location.capacity }}
                    />
                  </div>
                  <span className="text-sm font-medium">{location.capacity}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {location.specialties.slice(0, 2).map((specialty, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                  {location.specialties.length > 2 && (
                    <span className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-full">
                      +{location.specialties.length - 2} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={14} className="text-warning fill-current" />
                    <span className="text-sm font-medium">{location.rating}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Navigation"
                    className="text-primary hover:bg-primary/10"
                  >
                    Directions
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;