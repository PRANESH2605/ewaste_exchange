import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesDiscovery = () => {
  const [userType, setUserType] = useState('individual');
  const [selectedService, setSelectedService] = useState(null);

  const services = {
    individual: [
      {
        id: 'pickup',
        title: 'Schedule Pickup',
        description: 'Free doorstep collection for your electronic devices',
        icon: 'Truck',
        color: 'conversion',
        features: ['Free collection', 'Secure data wiping', 'Certificate provided'],
        cta: 'Schedule Now'
      },
      {
        id: 'dropoff',
        title: 'Drop-off Locations',
        description: 'Find nearby certified e-waste collection centers',
        icon: 'MapPin',
        color: 'primary',
        features: ['24/7 locations', 'Instant processing', 'Reward points'],
        cta: 'Find Locations'
      },
      {
        id: 'mailin',
        title: 'Mail-in Program',
        description: 'Ship your devices using our prepaid shipping labels',
        icon: 'Package',
        color: 'accent',
        features: ['Prepaid shipping', 'Tracking included', 'Insurance covered'],
        cta: 'Get Label'
      },
      {
        id: 'marketplace',
        title: 'Sell & Buy',
        description: 'Trade refurbished devices in our marketplace',
        icon: 'ShoppingBag',
        color: 'secondary',
        features: ['Quality guaranteed', 'Fair pricing', 'Warranty included'],
        cta: 'Browse Now'
      }
    ],
    business: [
      {
        id: 'enterprise',
        title: 'Enterprise Solutions',
        description: 'Comprehensive e-waste management for businesses',
        icon: 'Building',
        color: 'primary',
        features: ['Bulk processing', 'Compliance reporting', 'Asset recovery'],
        cta: 'Get Quote'
      },
      {
        id: 'compliance',
        title: 'Compliance Management',
        description: 'Meet regulatory requirements with certified processes',
        icon: 'Shield',
        color: 'success',
        features: ['Audit trails', 'Certificates', 'Legal compliance'],
        cta: 'Learn More'
      },
      {
        id: 'consulting',
        title: 'Sustainability Consulting',
        description: 'Expert guidance for your environmental initiatives',
        icon: 'Users',
        color: 'accent',
        features: ['Strategy development', 'Impact measurement', 'Training programs'],
        cta: 'Consult Now'
      },
      {
        id: 'analytics',
        title: 'Impact Analytics',
        description: 'Real-time tracking of your environmental contributions',
        icon: 'BarChart3',
        color: 'conversion',
        features: ['Live dashboards', 'Custom reports', 'ROI tracking'],
        cta: 'View Demo'
      }
    ]
  };

  useEffect(() => {
    // Simulate user type detection based on behavior patterns
    const detectUserType = () => {
      const businessIndicators = localStorage.getItem('businessVisitor');
      if (businessIndicators) {
        setUserType('business');
      }
    };

    detectUserType();
  }, []);

  const handleServiceHover = (serviceId) => {
    setSelectedService(serviceId);
  };

  const handleServiceLeave = () => {
    setSelectedService(null);
  };

  const getColorClasses = (color) => {
    const colorMap = {
      primary: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      accent: 'bg-accent text-accent-foreground',
      conversion: 'bg-conversion text-conversion-foreground',
      success: 'bg-success text-success-foreground'
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
            Discover Your Perfect Solution
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Intelligent service matching based on your needs and location
          </p>

          {/* User Type Toggle */}
          <div className="flex justify-center mt-8">
            <div className="bg-white rounded-lg p-1 shadow-organic">
              <button
                onClick={() => setUserType('individual')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-smooth ${
                  userType === 'individual' ?'bg-primary text-primary-foreground shadow-sm' :'text-text-secondary hover:text-primary'
                }`}
              >
                Individual
              </button>
              <button
                onClick={() => setUserType('business')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-smooth ${
                  userType === 'business' ?'bg-primary text-primary-foreground shadow-sm' :'text-text-secondary hover:text-primary'
                }`}
              >
                Business
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services[userType].map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-6 shadow-organic hover:shadow-layered transition-all duration-300 group cursor-pointer"
              onMouseEnter={() => handleServiceHover(service.id)}
              onMouseLeave={handleServiceLeave}
            >
              {/* Service Icon */}
              <div className={`w-12 h-12 rounded-lg ${getColorClasses(service.color)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={service.icon} size={24} />
              </div>

              {/* Service Content */}
              <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-1 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                    <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant="outline"
                size="sm"
                fullWidth
                iconName="ArrowRight"
                iconPosition="right"
                className={`border-${service.color} text-${service.color} hover:bg-${service.color}/10 group-hover:shadow-sm`}
              >
                {service.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-organic">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-primary mb-1">
                50,000+
              </div>
              <div className="text-sm text-text-secondary">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-accent mb-1">
                1,200+
              </div>
              <div className="text-sm text-text-secondary">Partner Locations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-success mb-1">
                99.9%
              </div>
              <div className="text-sm text-text-secondary">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-conversion mb-1">
                24/7
              </div>
              <div className="text-sm text-text-secondary">Support</div>
            </div>
          </div>
        </div>

        {/* Service Discovery CTA */}
        <div className="text-center mt-12">
          <Link to="/service-discovery">
            <Button
              variant="primary"
              size="lg"
              iconName="Search"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-organic"
            >
              Explore All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesDiscovery;