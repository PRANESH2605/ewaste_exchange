import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const FilterSidebar = ({ filters, onFiltersChange, onClearFilters }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 2000]);

  const categories = [
    { id: 'smartphones', name: 'Smartphones', count: 156 },
    { id: 'laptops', name: 'Laptops', count: 89 },
    { id: 'tablets', name: 'Tablets', count: 67 },
    { id: 'components', name: 'Components', count: 234 },
    { id: 'accessories', name: 'Accessories', count: 145 },
    { id: 'wearables', name: 'Wearables', count: 78 }
  ];

  const conditions = [
    { id: 'excellent', name: 'Excellent', count: 123 },
    { id: 'very-good', name: 'Very Good', count: 234 },
    { id: 'good', name: 'Good', count: 189 },
    { id: 'fair', name: 'Fair', count: 67 }
  ];

  const brands = [
    { id: 'apple', name: 'Apple', count: 145 },
    { id: 'samsung', name: 'Samsung', count: 123 },
    { id: 'google', name: 'Google', count: 89 },
    { id: 'oneplus', name: 'OnePlus', count: 67 },
    { id: 'dell', name: 'Dell', count: 78 },
    { id: 'hp', name: 'HP', count: 56 }
  ];

  const handleFilterChange = (type, value, checked) => {
    const currentFilters = filters[type] || [];
    const newFilters = checked
      ? [...currentFilters, value]
      : currentFilters.filter(item => item !== value);
    
    onFiltersChange({
      ...filters,
      [type]: newFilters
    });
  };

  const handlePriceRangeChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(value);
    setPriceRange(newRange);
    
    onFiltersChange({
      ...filters,
      priceRange: newRange
    });
  };

  const FilterSection = ({ title, children, defaultOpen = true }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
      <div className="border-b border-border pb-4 mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <h3 className="font-heading font-semibold text-text-primary">{title}</h3>
          <Icon
            name={isOpen ? "ChevronUp" : "ChevronDown"}
            size={16}
            className="text-text-secondary"
          />
        </button>
        {isOpen && children}
      </div>
    );
  };

  const CheckboxItem = ({ id, name, count, type, checked }) => (
    <label className="flex items-center justify-between py-2 cursor-pointer hover:bg-surface rounded-lg px-2 -mx-2">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => handleFilterChange(type, id, e.target.checked)}
          className="w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2"
        />
        <span className="text-sm text-text-primary">{name}</span>
      </div>
      <span className="text-xs text-text-secondary">{count}</span>
    </label>
  );

  return (
    <div className={`bg-surface border-r border-border transition-all duration-300 ${
      isCollapsed ? 'w-12' : 'w-80'
    }`}>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          {!isCollapsed && (
            <h2 className="text-lg font-heading font-bold text-text-primary">
              Filters
            </h2>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-background rounded-lg transition-colors"
          >
            <Icon
              name={isCollapsed ? "ChevronRight" : "ChevronLeft"}
              size={20}
              className="text-text-secondary"
            />
          </button>
        </div>

        {!isCollapsed && (
          <>
            {/* Clear Filters */}
            <Button
              variant="ghost"
              size="sm"
              iconName="X"
              iconPosition="left"
              onClick={onClearFilters}
              className="w-full mb-6 text-text-secondary hover:text-primary"
            >
              Clear All Filters
            </Button>

            {/* Search */}
            <div className="mb-6">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full"
              />
            </div>

            {/* Price Range */}
            <FilterSection title="Price Range">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceRangeChange(0, e.target.value)}
                    className="flex-1"
                  />
                  <span className="text-text-secondary">to</span>
                  <Input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceRangeChange(1, e.target.value)}
                    className="flex-1"
                  />
                </div>
                <div className="text-sm text-text-secondary">
                  ${priceRange[0]} - ${priceRange[1]}
                </div>
              </div>
            </FilterSection>

            {/* Categories */}
            <FilterSection title="Categories">
              <div className="space-y-1">
                {categories.map(category => (
                  <CheckboxItem
                    key={category.id}
                    id={category.id}
                    name={category.name}
                    count={category.count}
                    type="categories"
                    checked={filters.categories?.includes(category.id) || false}
                  />
                ))}
              </div>
            </FilterSection>

            {/* Condition */}
            <FilterSection title="Condition">
              <div className="space-y-1">
                {conditions.map(condition => (
                  <CheckboxItem
                    key={condition.id}
                    id={condition.id}
                    name={condition.name}
                    count={condition.count}
                    type="conditions"
                    checked={filters.conditions?.includes(condition.id) || false}
                  />
                ))}
              </div>
            </FilterSection>

            {/* Brands */}
            <FilterSection title="Brands">
              <div className="space-y-1">
                {brands.map(brand => (
                  <CheckboxItem
                    key={brand.id}
                    id={brand.id}
                    name={brand.name}
                    count={brand.count}
                    type="brands"
                    checked={filters.brands?.includes(brand.id) || false}
                  />
                ))}
              </div>
            </FilterSection>

            {/* Features */}
            <FilterSection title="Features">
              <div className="space-y-1">
                <CheckboxItem
                  id="verified"
                  name="Verified Products"
                  count={456}
                  type="features"
                  checked={filters.features?.includes('verified') || false}
                />
                <CheckboxItem
                  id="warranty"
                  name="With Warranty"
                  count={389}
                  type="features"
                  checked={filters.features?.includes('warranty') || false}
                />
                <CheckboxItem
                  id="free-shipping"
                  name="Free Shipping"
                  count={234}
                  type="features"
                  checked={filters.features?.includes('free-shipping') || false}
                />
                <CheckboxItem
                  id="local-pickup"
                  name="Local Pickup"
                  count={167}
                  type="features"
                  checked={filters.features?.includes('local-pickup') || false}
                />
              </div>
            </FilterSection>

            {/* Environmental Impact */}
            <FilterSection title="Environmental Impact">
              <div className="space-y-1">
                <CheckboxItem
                  id="high-impact"
                  name="High Impact (>50kg CO₂)"
                  count={123}
                  type="impact"
                  checked={filters.impact?.includes('high-impact') || false}
                />
                <CheckboxItem
                  id="medium-impact"
                  name="Medium Impact (20-50kg CO₂)"
                  count={234}
                  type="impact"
                  checked={filters.impact?.includes('medium-impact') || false}
                />
                <CheckboxItem
                  id="low-impact"
                  name="Low Impact (<20kg CO₂)"
                  count={189}
                  type="impact"
                  checked={filters.impact?.includes('low-impact') || false}
                />
              </div>
            </FilterSection>
          </>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;