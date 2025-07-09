import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustIndicators = () => {
  const trustFeatures = [
    {
      icon: 'Shield',
      title: 'Verified Quality',
      description: 'Every device undergoes rigorous 50-point inspection',
      color: 'text-success'
    },
    {
      icon: 'Award',
      title: 'Certified Refurbishment',
      description: 'Industry-standard refurbishment by certified technicians',
      color: 'text-primary'
    },
    {
      icon: 'Lock',
      title: 'Data Security',
      description: 'Professional data wiping with certification',
      color: 'text-accent'
    },
    {
      icon: 'RotateCcw',
      title: '30-Day Returns',
      description: 'Hassle-free returns with full refund guarantee',
      color: 'text-warning'
    },
    {
      icon: 'Truck',
      title: 'Free Shipping',
      description: 'Free shipping on orders over $50 with tracking',
      color: 'text-conversion'
    },
    {
      icon: 'Headphones',
      title: '24/7 Support',
      description: 'Expert customer support whenever you need help',
      color: 'text-trust'
    }
  ];

  const certifications = [
    {
      name: 'ISO 14001',
      description: 'Environmental Management',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop'
    },
    {
      name: 'R2 Certified',
      description: 'Responsible Recycling',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop'
    },
    {
      name: 'NIST Compliant',
      description: 'Data Security Standards',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop'
    },
    {
      name: 'EPA Partner',
      description: 'Environmental Protection',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop'
    }
  ];

  const stats = [
    { value: '500K+', label: 'Devices Refurbished', icon: 'Smartphone' },
    { value: '98.5%', label: 'Customer Satisfaction', icon: 'Star' },
    { value: '2.3M kg', label: 'CO₂ Emissions Saved', icon: 'Leaf' },
    { value: '99.9%', label: 'Data Destruction Rate', icon: 'Shield' }
  ];

  return (
    <div className="bg-surface py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
            Why Choose Our Marketplace?
          </h2>
          <p className="text-text-secondary max-w-3xl mx-auto">
            We're committed to providing the highest quality refurbished devices with complete transparency, 
            security, and environmental responsibility.
          </p>
        </div>

        {/* Trust Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trustFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-organic border border-border hover:shadow-layered transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-background ${feature.color}`}>
                  <Icon name={feature.icon} size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name={stat.icon} size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-heading font-bold text-text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-card rounded-xl p-8 shadow-organic border border-border">
          <h3 className="text-xl font-heading font-bold text-text-primary text-center mb-8">
            Trusted Certifications & Partnerships
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-muted rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Award" size={32} className="text-text-secondary" />
                </div>
                <h4 className="font-heading font-semibold text-text-primary mb-1">
                  {cert.name}
                </h4>
                <p className="text-xs text-text-secondary">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Process */}
        <div className="mt-16">
          <h3 className="text-2xl font-heading font-bold text-text-primary text-center mb-8">
            Our Quality Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Device Inspection',
                description: 'Comprehensive 50-point quality check',
                icon: 'Search'
              },
              {
                step: '02',
                title: 'Data Wiping',
                description: 'Certified secure data destruction',
                icon: 'Trash2'
              },
              {
                step: '03',
                title: 'Refurbishment',
                description: 'Professional repair and restoration',
                icon: 'Settings'
              },
              {
                step: '04',
                title: 'Final Testing',
                description: 'Quality assurance and certification',
                icon: 'CheckCircle'
              }
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={process.icon} size={24} />
                  </div>
                  <div className="text-sm font-bold text-primary mb-2">
                    STEP {process.step}
                  </div>
                  <h4 className="font-heading font-semibold text-text-primary mb-2">
                    {process.title}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;