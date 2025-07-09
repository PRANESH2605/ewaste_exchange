import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedSection = ({ onViewProduct }) => {
  const featuredDeals = [
    {
      id: 'deal-1',
      title: 'iPhone 13 Pro Max',
      subtitle: 'Excellent Condition',
      originalPrice: 1099,
      salePrice: 749,
      discount: 32,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
      badge: 'Limited Time',
      co2Saved: 45,
      warranty: '12 months',
      features: ['Face ID', '128GB Storage', 'ProRAW Camera']
    },
    {
      id: 'deal-2',
      title: 'MacBook Air M2',
      subtitle: 'Very Good Condition',
      originalPrice: 1199,
      salePrice: 899,
      discount: 25,
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400',
      badge: 'Best Seller',
      co2Saved: 78,
      warranty: '6 months',
      features: ['M2 Chip', '256GB SSD', '8GB RAM']
    },
    {
      id: 'deal-3',
      title: 'Samsung Galaxy S23',
      subtitle: 'Good Condition',
      originalPrice: 899,
      salePrice: 599,
      discount: 33,
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400',
      badge: 'Hot Deal',
      co2Saved: 38,
      warranty: '9 months',
      features: ['5G Ready', '128GB Storage', 'Triple Camera']
    }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="bg-gradient-to-r from-primary/5 to-accent/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-2">
            Featured Deals
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Handpicked premium refurbished devices with the best value and environmental impact
          </p>
        </div>

        {/* Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDeals.map(deal => (
            <div
              key={deal.id}
              className="bg-card rounded-xl shadow-layered border border-border overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-conversion text-conversion-foreground px-3 py-1 rounded-full text-xs font-bold">
                    {deal.badge}
                  </div>
                </div>

                {/* Discount Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-error text-error-foreground px-3 py-1 rounded-full text-xs font-bold">
                    {deal.discount}% OFF
                  </div>
                </div>

                {/* Environmental Impact */}
                <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Icon name="Leaf" size={12} />
                  {deal.co2Saved}kg CO₂ saved
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Title & Subtitle */}
                <div className="mb-4">
                  <h3 className="text-xl font-heading font-bold text-text-primary mb-1">
                    {deal.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {deal.subtitle}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {deal.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-text-secondary">
                      <Icon name="Check" size={14} className="text-success" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Warranty */}
                <div className="flex items-center gap-2 mb-4 text-sm text-text-secondary">
                  <Icon name="Shield" size={14} className="text-accent" />
                  {deal.warranty} warranty included
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-heading font-bold text-text-primary">
                        {formatPrice(deal.salePrice)}
                      </span>
                      <span className="text-sm text-text-secondary line-through">
                        {formatPrice(deal.originalPrice)}
                      </span>
                    </div>
                    <div className="text-sm text-success font-medium">
                      Save {formatPrice(deal.originalPrice - deal.salePrice)}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  variant="primary"
                  size="md"
                  iconName="ShoppingCart"
                  iconPosition="left"
                  fullWidth
                  onClick={() => onViewProduct(deal)}
                  className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
                >
                  View Deal
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="lg"
            iconName="ArrowRight"
            iconPosition="right"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Featured Deals
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;