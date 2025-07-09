import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationDetector = ({ onLocationUpdate }) => {
  const [location, setLocation] = useState(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [error, setError] = useState(null);

  const mockLocation = {
    city: "San Francisco",
    state: "California",
    country: "United States",
    coordinates: { lat: 37.7749, lng: -122.4194 },
    timezone: "PST"
  };

  useEffect(() => {
    // Auto-detect location on component mount
    detectLocation();
  }, []);

  const detectLocation = async () => {
    setIsDetecting(true);
    setError(null);

    try {
      // Simulate location detection
      await new Promise(resolve => setTimeout(resolve, 1500));
      setLocation(mockLocation);
      onLocationUpdate(mockLocation);
    } catch (err) {
      setError("Unable to detect location. Please enable location services.");
    } finally {
      setIsDetecting(false);
    }
  };

  const handleManualLocation = () => {
    // For demo purposes, use mock location
    setLocation(mockLocation);
    onLocationUpdate(mockLocation);
  };

  return (
    <div className="bg-white rounded-xl shadow-organic p-6 border border-border">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="MapPin" size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-text-primary">Your Location</h3>
            <p className="text-sm text-text-secondary">Personalized local resources</p>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          iconName="RefreshCw"
          onClick={detectLocation}
          disabled={isDetecting}
          className="text-primary hover:bg-primary/10"
        >
          {isDetecting ? 'Detecting...' : 'Refresh'}
        </Button>
      </div>

      {isDetecting && (
        <div className="flex items-center space-x-3 py-4">
          <div className="animate-spin">
            <Icon name="Loader2" size={20} className="text-primary" />
          </div>
          <span className="text-sm text-text-secondary">Detecting your location...</span>
        </div>
      )}

      {location && !isDetecting && (
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Icon name="MapPin" size={16} className="text-accent" />
            <span className="font-medium text-text-primary">{location.city}, {location.state}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Globe" size={14} className="text-text-secondary" />
              <span className="text-text-secondary">{location.country}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={14} className="text-text-secondary" />
              <span className="text-text-secondary">{location.timezone}</span>
            </div>
          </div>

          <div className="pt-3 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Coverage Area</span>
              <span className="text-sm font-medium text-accent">15 mile radius</span>
            </div>
          </div>
        </div>
      )}

      {error && !isDetecting && (
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-error">
            <Icon name="AlertCircle" size={16} />
            <span className="text-sm">{error}</span>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            iconName="Search"
            onClick={handleManualLocation}
            className="w-full border-primary text-primary hover:bg-primary/10"
          >
            Use Default Location
          </Button>
        </div>
      )}
    </div>
  );
};

export default LocationDetector;