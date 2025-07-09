import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductGrid = ({ products, loading, onAddToCart, onViewDetails }) => {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest First' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'impact', label: 'Environmental Impact' }
  ];

  const handleSortChange = (value) => {
    setSortBy(value);
    // In a real app, this would trigger a re-fetch or re-sort of products
  };

  if (loading) {
    return (
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="bg-card rounded-lg shadow-organic border border-border animate-pulse">
              <div className="w-full h-48 bg-muted rounded-t-lg"></div>
              <div className="p-4 space-y-3">
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-3 bg-muted rounded w-1/2"></div>
                <div className="h-6 bg-muted rounded w-full"></div>
                <div className="flex gap-2">
                  <div className="h-8 bg-muted rounded flex-1"></div>
                  <div className="h-8 bg-muted rounded flex-1"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-heading font-bold text-text-primary mb-1">
            Refurbished Marketplace
          </h1>
          <p className="text-text-secondary">
            {products.length} products found
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* View Mode Toggle */}
          <div className="flex items-center bg-surface rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid' ?'bg-primary text-primary-foreground' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon name="Grid3X3" size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list' ?'bg-primary text-primary-foreground' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon name="List" size={16} />
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="appearance-none bg-surface border border-border rounded-lg px-4 py-2 pr-8 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <Icon
              name="ChevronDown"
              size={16}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-text-secondary pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {products.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Search" size={32} className="text-text-secondary" />
          </div>
          <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">
            No products found
          </h3>
          <p className="text-text-secondary mb-6">
            Try adjusting your filters or search terms
          </p>
          <Button variant="primary" iconName="RotateCcw" iconPosition="left">
            Reset Filters
          </Button>
        </div>
      ) : (
        <div className={`grid gap-6 ${
          viewMode === 'grid' ?'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' :'grid-cols-1'
        }`}>
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      )}

      {/* Load More */}
      {products.length > 0 && (
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            iconName="ChevronDown"
            iconPosition="right"
          >
            Load More Products
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;