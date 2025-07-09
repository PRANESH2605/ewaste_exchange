import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProductCard = ({ product, onAddToCart, onViewDetails }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
  };

  const getConditionColor = (condition) => {
    switch (condition.toLowerCase()) {
      case 'excellent':
        return 'text-success bg-success/10';
      case 'very good':
        return 'text-accent bg-accent/10';
      case 'good':
        return 'text-warning bg-warning/10';
      case 'fair':
        return 'text-error bg-error/10';
      default:
        return 'text-text-secondary bg-muted';
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="bg-card rounded-lg shadow-organic border border-border hover:shadow-layered transition-all duration-300 group">
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isVerified && (
            <div className="bg-success text-success-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Icon name="CheckCircle" size={12} />
              Verified
            </div>
          )}
          {product.isFeatured && (
            <div className="bg-conversion text-conversion-foreground px-2 py-1 rounded-full text-xs font-medium">
              Featured
            </div>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
        >
          <Icon
            name={isWishlisted ? "Heart" : "Heart"}
            size={16}
            className={isWishlisted ? "text-error fill-current" : "text-text-secondary"}
          />
        </button>

        {/* Environmental Impact Badge */}
        <div className="absolute bottom-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
          <Icon name="Leaf" size={12} />
          {product.co2Saved}kg CO₂ saved
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Category & Brand */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-text-secondary font-medium uppercase tracking-wide">
            {product.category}
          </span>
          <span className="text-xs text-text-secondary">
            {product.brand}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="font-heading font-semibold text-text-primary mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Condition */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConditionColor(product.condition)}`}>
            {product.condition}
          </span>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={12}
                className={i < product.rating ? "text-warning fill-current" : "text-border"}
              />
            ))}
            <span className="text-xs text-text-secondary ml-1">
              ({product.reviewCount})
            </span>
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-1 mb-3">
          {product.keyFeatures.slice(0, 2).map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-xs text-text-secondary">
              <Icon name="Check" size={12} className="text-success" />
              {feature}
            </div>
          ))}
        </div>

        {/* Price & Savings */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-heading font-bold text-text-primary">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-text-secondary line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            {product.originalPrice && (
              <div className="text-xs text-success font-medium">
                Save {formatPrice(product.originalPrice - product.price)} ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%)
              </div>
            )}
          </div>
        </div>

        {/* Warranty & Shipping */}
        <div className="flex items-center justify-between text-xs text-text-secondary mb-4">
          <div className="flex items-center gap-1">
            <Icon name="Shield" size={12} />
            {product.warranty} warranty
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Truck" size={12} />
            {product.shipping}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(product)}
            className="flex-1"
          >
            View Details
          </Button>
          <Button
            variant="primary"
            size="sm"
            iconName="ShoppingCart"
            iconPosition="left"
            onClick={() => onAddToCart(product)}
            className="flex-1"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;