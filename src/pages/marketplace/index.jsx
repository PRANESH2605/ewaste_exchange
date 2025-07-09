import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import FilterSidebar from './components/FilterSidebar';
import CategoryTabs from './components/CategoryTabs';
import FeaturedSection from './components/FeaturedSection';
import ProductGrid from './components/ProductGrid';
import TrustIndicators from './components/TrustIndicators';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const Marketplace = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filters, setFilters] = useState({
    categories: [],
    conditions: [],
    brands: [],
    features: [],
    impact: [],
    priceRange: [0, 2000]
  });
  const [loading, setLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Mock products data
  const mockProducts = [
    {
      id: 'prod-1',
      name: 'iPhone 13 Pro Max 128GB',
      brand: 'Apple',
      category: 'smartphones',
      condition: 'Excellent',
      price: 749,
      originalPrice: 1099,
      rating: 4.8,
      reviewCount: 124,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
      keyFeatures: ['Face ID', '128GB Storage', 'ProRAW Camera', 'A15 Bionic Chip'],
      co2Saved: 45,
      warranty: '12 months',
      shipping: 'Free shipping',
      isVerified: true,
      isFeatured: true
    },
    {
      id: 'prod-2',
      name: 'MacBook Air M2 256GB',
      brand: 'Apple',
      category: 'laptops',
      condition: 'Very Good',
      price: 899,
      originalPrice: 1199,
      rating: 4.7,
      reviewCount: 89,
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400',
      keyFeatures: ['M2 Chip', '256GB SSD', '8GB RAM', '13.6" Display'],
      co2Saved: 78,
      warranty: '6 months',
      shipping: 'Free shipping',
      isVerified: true,
      isFeatured: false
    },
    {
      id: 'prod-3',
      name: 'Samsung Galaxy S23 128GB',
      brand: 'Samsung',
      category: 'smartphones',
      condition: 'Good',
      price: 599,
      originalPrice: 899,
      rating: 4.6,
      reviewCount: 156,
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400',
      keyFeatures: ['5G Ready', '128GB Storage', 'Triple Camera', 'Snapdragon 8 Gen 2'],
      co2Saved: 38,
      warranty: '9 months',
      shipping: 'Free shipping',
      isVerified: true,
      isFeatured: true
    },
    {
      id: 'prod-4',
      name: 'iPad Pro 11" 128GB',
      brand: 'Apple',
      category: 'tablets',
      condition: 'Excellent',
      price: 649,
      originalPrice: 899,
      rating: 4.9,
      reviewCount: 67,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
      keyFeatures: ['M2 Chip', '128GB Storage', 'Liquid Retina Display', 'Apple Pencil Support'],
      co2Saved: 32,
      warranty: '12 months',
      shipping: 'Free shipping',
      isVerified: true,
      isFeatured: false
    },
    {
      id: 'prod-5',
      name: 'Dell XPS 13 512GB',
      brand: 'Dell',
      category: 'laptops',
      condition: 'Very Good',
      price: 799,
      originalPrice: 1299,
      rating: 4.5,
      reviewCount: 43,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
      keyFeatures: ['Intel i7', '512GB SSD', '16GB RAM', '13.3" 4K Display'],
      co2Saved: 65,
      warranty: '6 months',
      shipping: 'Free shipping',
      isVerified: true,
      isFeatured: false
    },
    {
      id: 'prod-6',
      name: 'Google Pixel 7 Pro',
      brand: 'Google',
      category: 'smartphones',
      condition: 'Good',
      price: 449,
      originalPrice: 699,
      rating: 4.4,
      reviewCount: 78,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
      keyFeatures: ['Google Tensor G2', '128GB Storage', 'AI Camera', 'Pure Android'],
      co2Saved: 28,
      warranty: '9 months',
      shipping: 'Free shipping',
      isVerified: true,
      isFeatured: false
    },
    {
      id: 'prod-7',
      name: 'Apple Watch Series 8',
      brand: 'Apple',
      category: 'wearables',
      condition: 'Excellent',
      price: 299,
      originalPrice: 429,
      rating: 4.7,
      reviewCount: 92,
      image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400',
      keyFeatures: ['Health Sensors', 'GPS + Cellular', 'Always-On Display', 'Water Resistant'],
      co2Saved: 15,
      warranty: '12 months',
      shipping: 'Free shipping',
      isVerified: true,
      isFeatured: false
    },
    {
      id: 'prod-8',
      name: 'Sony WH-1000XM4 Headphones',
      brand: 'Sony',
      category: 'accessories',
      condition: 'Very Good',
      price: 199,
      originalPrice: 349,
      rating: 4.8,
      reviewCount: 234,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      keyFeatures: ['Noise Cancelling', '30hr Battery', 'Touch Controls', 'Hi-Res Audio'],
      co2Saved: 8,
      warranty: '6 months',
      shipping: 'Free shipping',
      isVerified: true,
      isFeatured: false
    }
  ];

  const [products, setProducts] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  useEffect(() => {
    // Filter products based on active category and filters
    let filtered = products;

    // Category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter(product => product.category === activeCategory);
    }

    // Apply other filters
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => filters.categories.includes(product.category));
    }

    if (filters.conditions.length > 0) {
      filtered = filtered.filter(product => 
        filters.conditions.includes(product.condition.toLowerCase().replace(' ', '-'))
      );
    }

    if (filters.brands.length > 0) {
      filtered = filtered.filter(product => 
        filters.brands.includes(product.brand.toLowerCase())
      );
    }

    if (filters.features.length > 0) {
      filtered = filtered.filter(product => {
        if (filters.features.includes('verified') && !product.isVerified) return false;
        if (filters.features.includes('warranty') && !product.warranty) return false;
        if (filters.features.includes('free-shipping') && !product.shipping.includes('Free')) return false;
        return true;
      });
    }

    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    setFilteredProducts(filtered);
  }, [activeCategory, filters, products]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      categories: [],
      conditions: [],
      brands: [],
      features: [],
      impact: [],
      priceRange: [0, 2000]
    });
    setActiveCategory('all');
  };

  const handleAddToCart = (product) => {
    console.log('Adding to cart:', product);
    // In a real app, this would add the product to cart
  };

  const handleViewDetails = (product) => {
    console.log('Viewing product details:', product);
    // In a real app, this would navigate to product detail page
  };

  const handleViewProduct = (product) => {
    console.log('Viewing featured product:', product);
    // In a real app, this would navigate to product detail page
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
              Sustainable Technology Marketplace
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Discover premium refurbished devices, recovered components, and eco-friendly alternatives. 
              Every purchase makes a positive environmental impact.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: '500K+', label: 'Devices Sold', icon: 'Smartphone' },
                { value: '98.5%', label: 'Satisfaction Rate', icon: 'Star' },
                { value: '2.3M kg', label: 'CO₂ Saved', icon: 'Leaf' },
                { value: '30 Days', label: 'Return Policy', icon: 'RotateCcw' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2">
                    <Icon name={stat.icon} size={20} className="text-primary" />
                  </div>
                  <div className="text-2xl font-heading font-bold text-text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <FeaturedSection onViewProduct={handleViewProduct} />

      {/* Category Tabs */}
      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Main Content */}
      <div className="flex">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden fixed bottom-6 right-6 z-50">
          <Button
            variant="primary"
            size="lg"
            iconName="Filter"
            iconPosition="left"
            onClick={() => setShowFilters(!showFilters)}
            className="shadow-layered"
          >
            Filters
          </Button>
        </div>

        {/* Filter Sidebar */}
        <div className={`lg:block ${showFilters ? 'block' : 'hidden'} fixed lg:relative inset-0 lg:inset-auto z-40 lg:z-auto`}>
          <FilterSidebar
            filters={filters}
            onFiltersChange={handleFiltersChange}
            onClearFilters={handleClearFilters}
          />
        </div>

        {/* Product Grid */}
        <ProductGrid
          products={filteredProducts}
          loading={loading}
          onAddToCart={handleAddToCart}
          onViewDetails={handleViewDetails}
        />
      </div>

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Newsletter Section */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Icon name="Mail" size={48} className="mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-heading font-bold mb-4">
            Stay Updated on New Arrivals
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get notified about the latest refurbished devices, exclusive deals, and environmental impact updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button
              variant="secondary"
              size="md"
              iconName="ArrowRight"
              iconPosition="right"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      {showFilters && (
        <div 
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-30"
          onClick={() => setShowFilters(false)}
        />
      )}
    </div>
  );
};

export default Marketplace;