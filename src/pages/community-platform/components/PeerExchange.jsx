import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PeerExchange = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All Items', icon: 'Grid3X3' },
    { key: 'smartphones', label: 'Smartphones', icon: 'Smartphone' },
    { key: 'laptops', label: 'Laptops', icon: 'Laptop' },
    { key: 'tablets', label: 'Tablets', icon: 'Tablet' },
    { key: 'accessories', label: 'Accessories', icon: 'Headphones' },
    { key: 'components', label: 'Components', icon: 'Cpu' }
  ];

  const exchangeItems = [
    {
      id: 1,
      title: "iPhone 12 Pro - Excellent Condition",
      category: 'smartphones',
      type: 'sell',
      price: 450,
      condition: 'Excellent',
      seller: {
        name: "Sarah Mitchell",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e0e4b6?w=150&h=150&fit=crop&crop=face",
        rating: 4.8,
        reviews: 23,
        verified: true
      },
      images: [
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=400&fit=crop",
        "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?w=600&h=400&fit=crop"
      ],
      description: `Selling my iPhone 12 Pro in excellent condition. Used for 1.5 years with screen protector and case always on.\n\nIncludes:\n• Original box and accessories\n• Lightning cable and adapter\n• Screen protector (already applied)\n• Protective case\n\nBattery health: 89%\nStorage: 128GB\nColor: Pacific Blue\nUnlocked to all carriers\n\nReason for selling: Upgraded to iPhone 14 Pro`,
      specifications: {
        storage: "128GB",
        color: "Pacific Blue",
        batteryHealth: "89%",
        carrier: "Unlocked"
      },
      location: "San Francisco, CA",
      postedDate: new Date(Date.now() - 86400000),
      views: 47,
      favorites: 8,
      tags: ["iPhone", "Apple", "Unlocked", "Excellent"]
    },
    {
      id: 2,
      title: "MacBook Air M1 - Perfect for Students",
      category: 'laptops',
      type: 'sell',
      price: 750,
      condition: 'Very Good',
      seller: {
        name: "David Chen",
        avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=150&h=150&fit=crop&crop=face",
        rating: 4.9,
        reviews: 31,
        verified: true
      },
      images: [
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop",
        "https://images.pexels.com/photos/18105/pexels-photo.jpg?w=600&h=400&fit=crop"
      ],
      description: `MacBook Air M1 in very good condition. Purchased in 2022, used primarily for college coursework and light development.\n\nSpecs:\n• Apple M1 chip\n• 8GB unified memory\n• 256GB SSD storage\n• 13.3-inch Retina display\n• Touch ID\n\nIncludes:\n• Original MagSafe charger\n• Original box and documentation\n• Laptop sleeve (bonus)\n\nMinor wear on corners, screen is pristine. Battery cycle count: 342\n\nPerfect for students, professionals, or anyone needing a reliable, efficient laptop.`,
      specifications: {
        processor: "Apple M1",
        memory: "8GB",
        storage: "256GB SSD",
        screen: "13.3-inch Retina"
      },
      location: "Palo Alto, CA",
      postedDate: new Date(Date.now() - 172800000),
      views: 89,
      favorites: 15,
      tags: ["MacBook", "Apple", "M1", "Student"]
    },
    {
      id: 3,
      title: "iPad Pro 11-inch with Apple Pencil",
      category: 'tablets',
      type: 'trade',
      tradeFor: "Looking for: MacBook Pro or equivalent laptop",
      condition: 'Excellent',
      seller: {
        name: "Maria Rodriguez",
        avatar: "https://images.pixabay.com/photo/2017/06/26/02/47/man-2442565_960_720.jpg?w=150&h=150&fit=crop&crop=face",
        rating: 4.7,
        reviews: 18,
        verified: true
      },
      images: [
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=400&fit=crop",
        "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?w=600&h=400&fit=crop"
      ],
      description: `Trading my iPad Pro 11-inch (3rd generation) with Apple Pencil (2nd gen) for a MacBook Pro or equivalent laptop.\n\nWhat I'm offering:\n• iPad Pro 11-inch (2021) - 128GB, Wi-Fi\n• Apple Pencil (2nd generation)\n• Magic Keyboard for iPad Pro\n• Original box and accessories\n\nCondition: Excellent, always used with screen protector\nBattery health: 95%\n\nLooking for:\n• MacBook Pro (2019 or newer)\n• Similar value Windows laptop\n• Will consider other professional laptops\n\nOpen to cash difference if needed. Serious inquiries only.`,
      specifications: {
        model: "iPad Pro 11-inch (3rd gen)",
        storage: "128GB",
        connectivity: "Wi-Fi",
        year: "2021"
      },
      location: "Berkeley, CA",
      postedDate: new Date(Date.now() - 259200000),
      views: 62,
      favorites: 12,
      tags: ["iPad Pro", "Apple Pencil", "Trade", "Magic Keyboard"]
    },
    {
      id: 4,
      title: "Gaming Headset & Mechanical Keyboard Bundle",
      category: 'accessories',type: 'sell',price: 120,condition: 'Good',
      seller: {
        name: "Alex Thompson",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        rating: 4.6,
        reviews: 14,
        verified: false
      },
      images: [
        "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&h=400&fit=crop"
      ],
      description: `Selling gaming setup bundle - perfect for someone getting into PC gaming or upgrading their setup.\n\nIncluded:\n• SteelSeries Arctis 7 Wireless Gaming Headset\n• Corsair K70 RGB Mechanical Keyboard (Cherry MX Red)\n• Original boxes and accessories\n\nHeadset features:\n• Wireless with 24-hour battery life\n• DTS Headphone:X 2.0 surround sound\n• ClearCast microphone\n\nKeyboard features:\n• Cherry MX Red switches\n• RGB backlighting\n• Aluminum frame\n• Dedicated media controls\n\nBoth items work perfectly, selling due to upgrade. Some wear on keycaps but fully functional.`,
      specifications: {
        headset: "SteelSeries Arctis 7",
        keyboard: "Corsair K70 RGB",
        switches: "Cherry MX Red",
        connectivity: "Wireless + Wired"
      },
      location: "San Jose, CA",
      postedDate: new Date(Date.now() - 345600000),
      views: 34,
      favorites: 6,
      tags: ["Gaming", "Headset", "Keyboard", "Bundle"]
    },
    {
      id: 5,
      title: "FREE: Old Laptop for Parts/Repair",
      category: 'laptops',type: 'donate',price: 0,condition: 'For Parts',
      seller: {
        name: "Jennifer Kim",
        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=150&h=150&fit=crop&crop=face",
        rating: 4.5,
        reviews: 9,
        verified: true
      },
      images: [
        "https://images.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_960_720.jpg?w=600&h=400&fit=crop"
      ],
      description: `Giving away old ThinkPad T450 for free to someone who can use it for parts or repair project.\n\nIssues:\n• Screen has dead pixels\n• Battery doesn't hold charge\n• Some keys stick\n• Fan makes noise\n\nWhat works:\n• Boots up fine\n• All ports functional\n• WiFi works\n• Hard drive is good (will be wiped)\n\nSpecs:\n• Intel Core i5-5300U\n• 8GB RAM\n• 256GB SSD\n• 14-inch display\n\nPerfect for:\n• Learning laptop repair\n• Harvesting parts\n• Practice project\n• Someone who enjoys fixing things\n\nFirst come, first served. Must pick up in person.`,
      specifications: {
        model: "ThinkPad T450",
        processor: "Intel Core i5-5300U",
        memory: "8GB RAM",
        storage: "256GB SSD"
      },
      location: "Oakland, CA",
      postedDate: new Date(Date.now() - 432000000),
      views: 78,
      favorites: 23,
      tags: ["FREE", "ThinkPad", "Parts", "Repair"]
    }
  ];

  const myListings = [
    {
      id: 1,
      title: "iPhone 11 - Good Condition",
      type: 'sell',
      price: 320,
      status: 'active',
      views: 23,
      favorites: 4,
      messages: 2,
      postedDate: new Date(Date.now() - 604800000)
    },
    {
      id: 2,
      title: "Dell Monitor 24-inch",
      type: 'sell',
      price: 150,
      status: 'sold',
      views: 45,
      favorites: 8,
      messages: 7,
      postedDate: new Date(Date.now() - 1209600000)
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? exchangeItems 
    : exchangeItems.filter(item => item.category === selectedCategory);

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'Today';
    if (days === 1) return '1 day ago';
    return `${days} days ago`;
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'sell': return 'bg-green-100 text-green-800 border-green-200';
      case 'trade': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'donate': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getConditionColor = (condition) => {
    switch (condition) {
      case 'Excellent': return 'text-green-600';
      case 'Very Good': return 'text-blue-600';
      case 'Good': return 'text-yellow-600';
      case 'Fair': return 'text-orange-600';
      case 'For Parts': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h2 className="text-2xl font-heading font-bold text-text-primary">Peer-to-Peer Exchange</h2>
          <p className="text-text-secondary">Trade, sell, or donate functional devices safely</p>
        </div>
        
        <Button variant="primary" iconName="Plus">
          List Item
        </Button>
      </div>

      {/* Tab Navigation */}
      <div className="bg-surface rounded-lg p-4 shadow-organic">
        <div className="flex space-x-1">
          {[
            { key: 'browse', label: 'Browse Items', icon: 'Search' },
            { key: 'my-listings', label: 'My Listings', icon: 'Package' },
            { key: 'messages', label: 'Messages', icon: 'MessageCircle' },
            { key: 'favorites', label: 'Favorites', icon: 'Heart' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                activeTab === tab.key
                  ? 'bg-primary text-primary-foreground shadow-organic'
                  : 'text-text-secondary hover:bg-background hover:text-primary'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Browse Items Tab */}
      {activeTab === 'browse' && (
        <div className="space-y-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                  selectedCategory === category.key
                    ? 'bg-primary text-primary-foreground shadow-organic'
                    : 'bg-surface text-text-secondary hover:bg-background hover:text-primary'
                }`}
              >
                <Icon name={category.icon} size={16} />
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-surface rounded-lg shadow-organic overflow-hidden hover:shadow-layered transition-smooth">
                {/* Item Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getTypeColor(item.type)}`}>
                      {item.type.toUpperCase()}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <button className="p-2 bg-background/90 backdrop-blur-sm rounded-full hover:bg-background transition-smooth">
                      <Icon name="Heart" size={16} className="text-text-secondary hover:text-red-500" />
                    </button>
                  </div>
                  {item.images.length > 1 && (
                    <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <span className="text-xs text-text-primary">+{item.images.length - 1}</span>
                    </div>
                  )}
                </div>

                {/* Item Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-text-primary mb-2 line-clamp-2">{item.title}</h3>
                  
                  <div className="flex items-center justify-between mb-3">
                    {item.type === 'sell' && (
                      <div className="text-2xl font-bold text-primary">${item.price}</div>
                    )}
                    {item.type === 'trade' && (
                      <div className="text-sm font-medium text-blue-600">Trade Offer</div>
                    )}
                    {item.type === 'donate' && (
                      <div className="text-lg font-bold text-purple-600">FREE</div>
                    )}
                    
                    <div className={`text-sm font-medium ${getConditionColor(item.condition)}`}>
                      {item.condition}
                    </div>
                  </div>

                  {/* Seller Info */}
                  <div className="flex items-center space-x-3 mb-3">
                    <Image
                      src={item.seller.avatar}
                      alt={item.seller.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-text-primary">{item.seller.name}</span>
                        {item.seller.verified && (
                          <Icon name="CheckCircle" size={14} className="text-accent" />
                        )}
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" size={12} className="text-yellow-500" />
                        <span className="text-xs text-text-secondary">
                          {item.seller.rating} ({item.seller.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Location and Date */}
                  <div className="flex items-center justify-between text-xs text-text-secondary mb-3">
                    <div className="flex items-center space-x-1">
                      <Icon name="MapPin" size={12} />
                      <span>{item.location}</span>
                    </div>
                    <span>{formatTimeAgo(item.postedDate)}</span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-text-secondary mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Icon name="Eye" size={12} />
                        <span>{item.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Heart" size={12} />
                        <span>{item.favorites}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <Button variant="primary" size="sm" fullWidth>
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" iconName="MessageCircle">
                      Message
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* My Listings Tab */}
      {activeTab === 'my-listings' && (
        <div className="space-y-4">
          {myListings.map((listing) => (
            <div key={listing.id} className="bg-surface rounded-lg shadow-organic p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-text-primary">{listing.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getTypeColor(listing.type)}`}>
                      {listing.type.toUpperCase()}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      listing.status === 'active' ?'bg-green-100 text-green-800 border-green-200' :'bg-gray-100 text-gray-800 border-gray-200'
                    }`}>
                      {listing.status.toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm text-text-secondary">
                    <span className="font-medium text-primary">${listing.price}</span>
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={14} />
                      <span>{listing.views} views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={14} />
                      <span>{listing.favorites} favorites</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="MessageCircle" size={14} />
                      <span>{listing.messages} messages</span>
                    </div>
                    <span>Posted {formatTimeAgo(listing.postedDate)}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" iconName="Edit">
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm" iconName="MoreHorizontal" />
                </div>
              </div>
            </div>
          ))}
          
          {myListings.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Package" size={48} className="text-text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-text-primary mb-2">No Listings Yet</h3>
              <p className="text-text-secondary mb-4">Start selling or trading your devices</p>
              <Button variant="primary" iconName="Plus">
                Create First Listing
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Other tabs placeholder */}
      {(activeTab === 'messages' || activeTab === 'favorites') && (
        <div className="text-center py-12">
          <Icon 
            name={activeTab === 'messages' ? 'MessageCircle' : 'Heart'} 
            size={48} 
            className="text-text-secondary mx-auto mb-4" 
          />
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            {activeTab === 'messages' ? 'No Messages' : 'No Favorites'}
          </h3>
          <p className="text-text-secondary">
            {activeTab === 'messages' ?'Start conversations with sellers and buyers' :'Save items you\'re interested in'
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default PeerExchange;