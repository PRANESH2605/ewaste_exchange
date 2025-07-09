import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ServiceRecommendations = ({ answers, onBack }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showScheduler, setShowScheduler] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const filters = [
    { id: 'all', label: 'All Options', icon: 'Grid3X3' },
    { id: 'convenience', label: 'Most Convenient', icon: 'Clock' },
    { id: 'cost', label: 'Best Value', icon: 'DollarSign' },
    { id: 'speed', label: 'Fastest', icon: 'Zap' },
    { id: 'impact', label: 'Highest Impact', icon: 'Leaf' }
  ];

  const recommendations = [
    {
      id: 'pickup-premium',
      type: 'pickup',
      title: 'Premium Pickup Service',
      description: 'Convenient doorstep collection with certified data wiping',
      price: '$25',
      timeline: '2-3 business days',
      rating: 4.8,
      reviews: 1247,
      features: ['Certified data wiping', 'SMS tracking', 'Insurance included', 'Same-day available'],
      environmentalImpact: {
        co2Saved: '12.5 kg',
        materialsRecovered: '85%'
      },
      availability: 'Available today',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      badge: 'Most Popular'
    },
    {
      id: 'dropoff-nearby',
      type: 'dropoff',
      title: 'EcoTech Drop-off Center',
      description: 'Nearby certified facility with instant processing',
      price: 'Free',
      timeline: 'Immediate',
      rating: 4.6,
      reviews: 892,
      features: ['Open 24/7', 'Instant receipt', 'On-site data wiping', 'Bulk discounts'],
      environmentalImpact: {
        co2Saved: '10.2 kg',
        materialsRecovered: '92%'
      },
      distance: '2.3 miles',
      address: '1234 Green Valley Rd, Tech City, CA 90210',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
      badge: 'Nearest Location'
    },
    {
      id: 'mail-in',
      type: 'mail',
      title: 'Mail-In Recycling Kit',
      description: 'Prepaid shipping box delivered to your door',
      price: '$15',
      timeline: '5-7 business days',
      rating: 4.4,
      reviews: 634,
      features: ['Prepaid shipping', 'Secure packaging', 'Tracking included', 'Certificate provided'],
      environmentalImpact: {
        co2Saved: '8.7 kg',
        materialsRecovered: '78%'
      },
      availability: 'Ships within 24 hours',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop',
      badge: 'Eco-Friendly'
    },
    {
      id: 'bulk-business',
      type: 'bulk',
      title: 'Business Bulk Processing',
      description: 'Enterprise solution with compliance documentation',
      price: 'Quote required',
      timeline: '1-2 weeks',
      rating: 4.9,
      reviews: 156,
      features: ['Compliance docs', 'Volume discounts', 'Scheduled pickups', 'Detailed reporting'],
      environmentalImpact: {
        co2Saved: '45.8 kg',
        materialsRecovered: '95%'
      },
      availability: 'Custom scheduling',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      badge: 'Enterprise'
    }
  ];

  const handleSchedule = (service) => {
    setSelectedService(service);
    setShowScheduler(true);
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'pickup': return 'Truck';
      case 'dropoff': return 'MapPin';
      case 'mail': return 'Mail';
      case 'bulk': return 'Package';
      default: return 'Recycle';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'pickup': return 'text-primary bg-primary/10';
      case 'dropoff': return 'text-accent bg-accent/10';
      case 'mail': return 'text-secondary bg-secondary/10';
      case 'bulk': return 'text-conversion bg-conversion/10';
      default: return 'text-text-secondary bg-muted';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-text-primary">
            Perfect Matches Found
          </h2>
          <p className="text-text-secondary mt-1">
            Based on your {answers.deviceType} recycling needs in {answers.location}
          </p>
        </div>
        <Button
          variant="ghost"
          onClick={onBack}
          iconName="ChevronLeft"
          iconPosition="left"
        >
          Back to Questions
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setSelectedFilter(filter.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedFilter === filter.id
                ? 'bg-primary text-primary-foreground shadow-organic'
                : 'bg-surface text-text-secondary hover:bg-background hover:text-primary'
            }`}
          >
            <Icon name={filter.icon} size={16} />
            <span>{filter.label}</span>
          </button>
        ))}
      </div>

      {/* Recommendations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recommendations.map((service) => (
          <div key={service.id} className="bg-card rounded-xl shadow-layered overflow-hidden hover:shadow-organic transition-all duration-300">
            {/* Image & Badge */}
            <div className="relative h-48">
              <Image
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              {service.badge && (
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {service.badge}
                </div>
              )}
              <div className={`absolute top-4 right-4 w-10 h-10 rounded-lg flex items-center justify-center ${getTypeColor(service.type)}`}>
                <Icon name={getTypeIcon(service.type)} size={20} />
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-heading font-semibold text-text-primary">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm mt-1">
                    {service.description}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">{service.price}</div>
                  <div className="text-xs text-text-secondary">{service.timeline}</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={14}
                      className={i < Math.floor(service.rating) ? 'text-warning fill-current' : 'text-muted'}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-text-primary">{service.rating}</span>
                <span className="text-sm text-text-secondary">({service.reviews} reviews)</span>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {service.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                    <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Environmental Impact */}
              <div className="bg-accent/10 rounded-lg p-3 mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Leaf" size={16} className="text-accent" />
                  <span className="text-sm font-medium text-text-primary">Environmental Impact</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium text-accent">{service.environmentalImpact.co2Saved}</div>
                    <div className="text-text-secondary">CO₂ Saved</div>
                  </div>
                  <div>
                    <div className="font-medium text-accent">{service.environmentalImpact.materialsRecovered}</div>
                    <div className="text-text-secondary">Materials Recovered</div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              {service.distance && (
                <div className="flex items-center space-x-2 mb-3 text-sm text-text-secondary">
                  <Icon name="MapPin" size={14} />
                  <span>{service.distance} away • {service.address}</span>
                </div>
              )}

              {service.availability && (
                <div className="flex items-center space-x-2 mb-4 text-sm">
                  <Icon name="Clock" size={14} className="text-success" />
                  <span className="text-success font-medium">{service.availability}</span>
                </div>
              )}

              {/* Actions */}
              <div className="flex space-x-3">
                <Button
                  variant="primary"
                  onClick={() => handleSchedule(service)}
                  iconName={service.type === 'dropoff' ? 'Navigation' : 'Calendar'}
                  iconPosition="left"
                  className="flex-1"
                >
                  {service.type === 'dropoff' ? 'Get Directions' : 'Schedule Now'}
                </Button>
                <Button
                  variant="outline"
                  iconName="Info"
                  className="px-4"
                >
                  Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-surface rounded-xl p-6">
        <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">
          Need Something Different?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Button
            variant="ghost"
            iconName="Camera"
            iconPosition="left"
            className="justify-start"
          >
            Identify My Device
          </Button>
          <Button
            variant="ghost"
            iconName="Calculator"
            iconPosition="left"
            className="justify-start"
          >
            Calculate Impact
          </Button>
          <Button
            variant="ghost"
            iconName="MessageCircle"
            iconPosition="left"
            className="justify-start"
          >
            Chat with Expert
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceRecommendations;