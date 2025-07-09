import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CategoryTabs = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    {
      id: 'all',
      name: 'All Products',
      icon: 'Grid3X3',
      count: 1247,
      description: 'Browse all available items'
    },
    {
      id: 'smartphones',
      name: 'Smartphones',
      icon: 'Smartphone',
      count: 456,
      description: 'Refurbished mobile devices'
    },
    {
      id: 'laptops',
      name: 'Laptops',
      icon: 'Laptop',
      count: 234,
      description: 'Professional computing devices'
    },
    {
      id: 'tablets',
      name: 'Tablets',
      icon: 'Tablet',
      count: 189,
      description: 'Portable touch devices'
    },
    {
      id: 'components',
      name: 'Components',
      icon: 'Cpu',
      count: 567,
      description: 'Recovered electronic parts'
    },
    {
      id: 'accessories',
      name: 'Accessories',
      icon: 'Headphones',
      count: 345,
      description: 'Cables, cases, and more'
    },
    {
      id: 'wearables',
      name: 'Wearables',
      icon: 'Watch',
      count: 123,
      description: 'Smart watches and fitness trackers'
    },
    {
      id: 'sustainable',
      name: 'Sustainable Alternatives',
      icon: 'Leaf',
      count: 89,
      description: 'Eco-friendly technology options'
    }
  ];

  return (
    <div className="bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-1 overflow-x-auto py-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-organic'
                  : 'text-text-primary hover:bg-background hover:text-primary'
              }`}
            >
              <Icon
                name={category.icon}
                size={18}
                className={activeCategory === category.id ? 'text-primary-foreground' : 'text-text-secondary'}
              />
              <div className="text-left">
                <div className="font-medium">{category.name}</div>
                <div className={`text-xs ${
                  activeCategory === category.id ? 'text-primary-foreground/80' : 'text-text-secondary'
                }`}>
                  {category.count} items
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;