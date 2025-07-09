import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PartnerSpotlight = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPartner, setSelectedPartner] = useState(null);

  const partnerCategories = [
    { id: 'all', name: 'All Partners', icon: 'Users', count: 24 },
    { id: 'repair', name: 'Repair Services', icon: 'Wrench', count: 8 },
    { id: 'refurbish', name: 'Refurbishment', icon: 'RefreshCw', count: 6 },
    { id: 'retail', name: 'Sustainable Retail', icon: 'ShoppingBag', count: 10 }
  ];

  const featuredPartners = [
    {
      id: 1,
      name: "TechFix Pro",
      category: "repair",
      type: "Repair Service",
      description: "Specializing in smartphone, laptop, and tablet repairs with a focus on extending device lifespan and reducing e-waste.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=200&fit=crop",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      rating: 4.8,
      reviews: 342,
      address: "1234 Tech Street, San Francisco, CA",
      phone: "(415) 555-0123",
      website: "www.techfixpro.com",
      hours: "Mon-Sat: 9AM-7PM, Sun: 11AM-5PM",
      services: ["Screen Repair", "Battery Replacement", "Water Damage", "Data Recovery"],
      certifications: ["Apple Certified", "Samsung Authorized", "Green Business"],
      pricing: "$$",
      turnaround: "Same day for most repairs",
      warranty: "90-day warranty on all repairs",
      specialOffers: "10% off for students and seniors",
      sustainabilityScore: 95,
      devicesRepaired: 2847,
      wasteReduced: "1.2 tons"
    },
    {
      id: 2,
      name: "GreenTech Refurb",
      category: "refurbish",
      type: "Refurbishment Center",
      description: "Professional refurbishment of laptops, desktops, and mobile devices with comprehensive testing and certification.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop",
      logo: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=100&h=100&fit=crop",
      rating: 4.9,
      reviews: 156,
      address: "5678 Green Avenue, San Francisco, CA",
      phone: "(415) 555-0456",
      website: "www.greentechrefurb.com",
      hours: "Mon-Fri: 8AM-6PM, Sat: 10AM-4PM",
      services: ["Laptop Refurbishment", "Desktop Restoration", "Mobile Device Renewal", "Enterprise Solutions"],
      certifications: ["R2 Certified", "ISO 14001", "NAID AAA"],
      pricing: "$$$",
      turnaround: "3-5 business days",
      warranty: "1-year comprehensive warranty",
      specialOffers: "Bulk discounts for businesses",
      sustainabilityScore: 98,
      devicesRepaired: 1567,
      wasteReduced: "3.4 tons"
    },
    {
      id: 3,
      name: "EcoTech Store",
      category: "retail",
      type: "Sustainable Retail",
      description: "Curated selection of refurbished electronics, sustainable tech accessories, and eco-friendly alternatives.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=200&fit=crop",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&h=100&fit=crop",
      rating: 4.7,
      reviews: 289,
      address: "9012 Eco Plaza, San Francisco, CA",
      phone: "(415) 555-0789",
      website: "www.ecotechstore.com",
      hours: "Mon-Sun: 10AM-8PM",
      services: ["Refurbished Electronics", "Sustainable Accessories", "Trade-in Program", "Tech Consultation"],
      certifications: ["B-Corp Certified", "Green Business", "Fair Trade"],
      pricing: "$$",
      turnaround: "Immediate availability",
      warranty: "6-month warranty on refurbished items",
      specialOffers: "Trade-in credit up to $500",
      sustainabilityScore: 92,
      devicesRepaired: 892,
      wasteReduced: "0.8 tons"
    },
    {
      id: 4,
      name: "Circuit Saver",
      category: "repair",
      type: "Electronics Repair",
      description: "Community-focused repair shop offering affordable fixes for all types of electronic devices and appliances.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=200&fit=crop",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 4.6,
      reviews: 198,
      address: "3456 Circuit Lane, San Francisco, CA",
      phone: "(415) 555-0321",
      website: "www.circuitsaver.com",
      hours: "Tue-Sat: 10AM-6PM",
      services: ["General Electronics Repair", "Appliance Service", "Component Replacement", "Diagnostic Services"],
      certifications: ["EPA Certified", "Local Business"],
      pricing: "$",
      turnaround: "2-3 business days",
      warranty: "30-day warranty",
      specialOffers: "Free diagnostics",
      sustainabilityScore: 88,
      devicesRepaired: 1234,
      wasteReduced: "0.9 tons"
    }
  ];

  const filteredPartners = selectedCategory === 'all' 
    ? featuredPartners 
    : featuredPartners.filter(partner => partner.category === selectedCategory);

  const getPricingColor = (pricing) => {
    switch (pricing) {
      case '$': return 'text-success';
      case '$$': return 'text-warning';
      case '$$$': return 'text-error';
      default: return 'text-text-secondary';
    }
  };

  const getSustainabilityColor = (score) => {
    if (score >= 95) return 'text-success';
    if (score >= 85) return 'text-warning';
    return 'text-error';
  };

  const handleBookService = (partnerId) => {
    console.log(`Booking service with partner ${partnerId}`);
  };

  const handleViewDetails = (partner) => {
    setSelectedPartner(partner);
  };

  const closeModal = () => {
    setSelectedPartner(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-organic border border-border">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
              <Icon name="Star" size={20} className="text-secondary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-text-primary">Partner Spotlight</h3>
              <p className="text-sm text-text-secondary">Trusted local sustainability partners</p>
            </div>
          </div>
          
          <Button
            variant="primary"
            size="sm"
            iconName="Plus"
            className="bg-secondary hover:bg-secondary/90"
          >
            Become Partner
          </Button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {partnerCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-smooth ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-organic'
                  : 'bg-surface text-text-secondary hover:bg-background hover:text-primary'
              }`}
            >
              <Icon name={category.icon} size={16} />
              <span>{category.name}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                selectedCategory === category.id
                  ? 'bg-primary-foreground/20 text-primary-foreground'
                  : 'bg-text-secondary/10 text-text-secondary'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Partners Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-smooth"
            >
              {/* Partner Image */}
              <div className="h-48 bg-surface overflow-hidden relative">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/assets/images/no_image.png';
                  }}
                />
                <div className="absolute top-4 right-4">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getSustainabilityColor(partner.sustainabilityScore)} bg-white/90 backdrop-blur-sm`}>
                    {partner.sustainabilityScore}% Sustainable
                  </div>
                </div>
              </div>

              {/* Partner Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-12 h-12 rounded-lg object-cover"
                      onError={(e) => {
                        e.target.src = '/assets/images/no_image.png';
                      }}
                    />
                    <div>
                      <h4 className="font-heading font-semibold text-text-primary">
                        {partner.name}
                      </h4>
                      <p className="text-sm text-text-secondary">{partner.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} className="text-warning fill-current" />
                      <span className="text-sm font-medium">{partner.rating}</span>
                    </div>
                    <span className="text-sm text-text-secondary">({partner.reviews})</span>
                  </div>
                </div>

                <p className="text-sm text-text-secondary mb-3 line-clamp-2">
                  {partner.description}
                </p>

                {/* Services */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {partner.services.slice(0, 3).map((service, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                  {partner.services.length > 3 && (
                    <span className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-full">
                      +{partner.services.length - 3} more
                    </span>
                  )}
                </div>

                {/* Key Info */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="DollarSign" size={14} className="text-text-secondary" />
                    <span className={`font-medium ${getPricingColor(partner.pricing)}`}>
                      {partner.pricing}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} className="text-text-secondary" />
                    <span className="text-text-secondary">{partner.turnaround}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={14} className="text-text-secondary" />
                    <span className="text-text-secondary">{partner.warranty}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={14} className="text-text-secondary" />
                    <span className="text-text-secondary">2.3 miles</span>
                  </div>
                </div>

                {/* Impact Stats */}
                <div className="flex items-center justify-between mb-4 p-3 bg-surface rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{partner.devicesRepaired}</div>
                    <div className="text-xs text-text-secondary">Devices Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent">{partner.wasteReduced}</div>
                    <div className="text-xs text-text-secondary">Waste Reduced</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button
                    variant="primary"
                    size="sm"
                    iconName="Calendar"
                    onClick={() => handleBookService(partner.id)}
                    className="flex-1"
                  >
                    Book Service
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Eye"
                    onClick={() => handleViewDetails(partner)}
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            iconName="ChevronDown"
            className="border-primary text-primary hover:bg-primary/10"
          >
            Load More Partners
          </Button>
        </div>
      </div>

      {/* Partner Details Modal */}
      {selectedPartner && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-layered max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={selectedPartner.logo}
                    alt={`${selectedPartner.name} logo`}
                    className="w-12 h-12 rounded-lg object-cover"
                    onError={(e) => {
                      e.target.src = '/assets/images/no_image.png';
                    }}
                  />
                  <div>
                    <h3 className="font-heading font-semibold text-text-primary">
                      {selectedPartner.name}
                    </h3>
                    <p className="text-sm text-text-secondary">{selectedPartner.type}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="X"
                  onClick={closeModal}
                  className="text-text-secondary hover:text-primary"
                />
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Contact Information */}
              <div>
                <h4 className="font-heading font-semibold text-text-primary mb-3">Contact Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={16} className="text-text-secondary" />
                    <span>{selectedPartner.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} className="text-text-secondary" />
                    <span>{selectedPartner.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Globe" size={16} className="text-text-secondary" />
                    <span>{selectedPartner.website}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-text-secondary" />
                    <span>{selectedPartner.hours}</span>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-heading font-semibold text-text-primary mb-3">Services</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPartner.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="font-heading font-semibold text-text-primary mb-3">Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPartner.certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-success/10 text-success text-sm rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Special Offers */}
              <div>
                <h4 className="font-heading font-semibold text-text-primary mb-3">Special Offers</h4>
                <div className="p-3 bg-warning/10 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Icon name="Tag" size={16} className="text-warning" />
                    <span className="text-sm text-warning font-medium">{selectedPartner.specialOffers}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4 border-t border-border">
                <Button
                  variant="primary"
                  iconName="Calendar"
                  onClick={() => handleBookService(selectedPartner.id)}
                  className="flex-1"
                >
                  Book Service
                </Button>
                <Button
                  variant="outline"
                  iconName="Phone"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Call Now
                </Button>
                <Button
                  variant="outline"
                  iconName="Navigation"
                  className="border-accent text-accent hover:bg-accent/10"
                >
                  Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnerSpotlight;