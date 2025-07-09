import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const LocationMap = ({ locations, onLocationSelect }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapView, setMapView] = useState('map'); // 'map' or 'list'

  const mockLocations = [
    {
      id: 'loc-1',
      name: 'EcoTech Recycling Center',
      address: '1234 Green Valley Rd, Tech City, CA 90210',
      distance: '2.3 miles',
      rating: 4.8,
      reviews: 342,
      hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM',
      phone: '(555) 123-4567',
      services: ['Data Wiping', 'Bulk Processing', 'Instant Receipt'],
      capacity: 'Low traffic',
      lat: 34.0522,
      lng: -118.2437,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop'
    },
    {
      id: 'loc-2',
      name: 'GreenTech Drop-off Hub',
      address: '5678 Sustainability Ave, Eco City, CA 90211',
      distance: '4.1 miles',
      rating: 4.6,
      reviews: 198,
      hours: '24/7 Automated Drop-off',
      phone: '(555) 987-6543',
      services: ['24/7 Access', 'Automated Sorting', 'SMS Confirmations'],
      capacity: 'Moderate traffic',
      lat: 34.0622,
      lng: -118.2537,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop'
    },
    {
      id: 'loc-3',
      name: 'Circular Economy Center',
      address: '9012 Recycle Blvd, Green Valley, CA 90212',
      distance: '6.8 miles',
      rating: 4.9,
      reviews: 567,
      hours: 'Mon-Sat: 7AM-8PM, Sun: 10AM-6PM',
      phone: '(555) 456-7890',
      services: ['Refurbishment', 'Component Recovery', 'Educational Tours'],
      capacity: 'High traffic',
      lat: 34.0722,
      lng: -118.2637,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    }
  ];

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  const getCapacityColor = (capacity) => {
    switch (capacity) {
      case 'Low traffic': return 'text-success bg-success/10';
      case 'Moderate traffic': return 'text-warning bg-warning/10';
      case 'High traffic': return 'text-error bg-error/10';
      default: return 'text-text-secondary bg-muted';
    }
  };

  const getDirections = (location) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-card rounded-xl shadow-layered overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-heading font-semibold text-text-primary">
              Nearby Drop-off Locations
            </h2>
            <p className="text-text-secondary text-sm mt-1">
              Find the most convenient recycling center near you
            </p>
          </div>
          
          <div className="flex bg-surface rounded-lg p-1">
            <button
              onClick={() => setMapView('map')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                mapView === 'map' ?'bg-primary text-primary-foreground' :'text-text-secondary hover:text-primary'
              }`}
            >
              <Icon name="Map" size={16} className="mr-1" />
              Map
            </button>
            <button
              onClick={() => setMapView('list')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                mapView === 'list' ?'bg-primary text-primary-foreground' :'text-text-secondary hover:text-primary'
              }`}
            >
              <Icon name="List" size={16} className="mr-1" />
              List
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-[600px]">
        {/* Map View */}
        {mapView === 'map' && (
          <div className="flex-1 relative">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="Recycling Locations Map"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${mockLocations[0].lat},${mockLocations[0].lng}&z=12&output=embed`}
              className="border-0"
            />
            
            {/* Map Controls */}
            <div className="absolute top-4 left-4 bg-card rounded-lg shadow-layered p-2">
              <Button
                variant="ghost"
                size="sm"
                iconName="RotateCcw"
                className="mb-2"
              >
                Reset View
              </Button>
              <Button
                variant="ghost"
                size="sm"
                iconName="Navigation"
              >
                My Location
              </Button>
            </div>
          </div>
        )}

        {/* Location List */}
        <div className={`${mapView === 'map' ? 'w-full lg:w-96' : 'w-full'} bg-surface overflow-y-auto`}>
          <div className="p-4 space-y-4">
            {mockLocations.map((location) => (
              <div
                key={location.id}
                className={`bg-card rounded-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-layered ${
                  selectedLocation?.id === location.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => handleLocationClick(location)}
              >
                {/* Location Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-primary mb-1">
                      {location.name}
                    </h3>
                    <p className="text-sm text-text-secondary mb-2">
                      {location.address}
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Icon name="MapPin" size={14} className="text-primary" />
                        <span className="text-primary font-medium">{location.distance}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" size={14} className="text-warning fill-current" />
                        <span className="text-text-primary">{location.rating}</span>
                        <span className="text-text-secondary">({location.reviews})</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getCapacityColor(location.capacity)}`}>
                    {location.capacity}
                  </div>
                </div>

                {/* Location Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Icon name="Clock" size={14} className="text-text-secondary" />
                    <span className="text-text-secondary">{location.hours}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Icon name="Phone" size={14} className="text-text-secondary" />
                    <span className="text-text-secondary">{location.phone}</span>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {location.services.map((service, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      getDirections(location);
                    }}
                    iconName="Navigation"
                    iconPosition="left"
                    className="flex-1"
                  >
                    Directions
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(`tel:${location.phone}`, '_self');
                    }}
                    iconName="Phone"
                    className="px-3"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      onLocationSelect && onLocationSelect(location);
                    }}
                    iconName="Info"
                    className="px-3"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Add Location CTA */}
          <div className="p-4 border-t border-border">
            <div className="bg-accent/10 rounded-lg p-4 text-center">
              <Icon name="MapPin" size={24} className="text-accent mx-auto mb-2" />
              <h4 className="font-medium text-text-primary mb-1">
                Don't see a location near you?
              </h4>
              <p className="text-sm text-text-secondary mb-3">
                Suggest a new drop-off location in your area
              </p>
              <Button
                variant="outline"
                size="sm"
                iconName="Plus"
                iconPosition="left"
                className="border-accent text-accent hover:bg-accent/10"
              >
                Suggest Location
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;