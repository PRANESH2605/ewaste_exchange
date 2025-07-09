import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CommunityImpact = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const userStories = [
    {
      id: 1,
      name: "Sarah Chen",
      location: "San Francisco, CA",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e8c8b4?w=150&h=150&fit=crop&crop=face",
      devicesBefore: "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?w=300&h=200&fit=crop",
      devicesAfter: "https://images.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg?w=300&h=200&fit=crop",
      story: `I had 12 old smartphones and tablets collecting dust in my drawer. Through eWaste Exchange, I scheduled a pickup and learned they contained precious metals worth $180!`,
      impact: {
        devices: 12,
        co2Saved: 45,
        materialsRecovered: 2.3,
        earnings: 180
      },
      timeframe: "3 months ago"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      location: "Austin, TX",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      devicesBefore: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?w=300&h=200&fit=crop",
      devicesAfter: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
      story: `Our startup had 50+ old laptops after upgrading. The enterprise pickup service handled everything - data wiping, certificates, and we even got a tax deduction!`,
      impact: {
        devices: 52,
        co2Saved: 234,
        materialsRecovered: 15.6,
        earnings: 2400
      },
      timeframe: "1 month ago"
    },
    {
      id: 3,
      name: "Emily Johnson",
      location: "Portland, OR",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      devicesBefore: "https://images.pixabay.com/photo/2017/05/24/13/33/workplace-2341642_1280.jpg?w=300&h=200&fit=crop",
      devicesAfter: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?w=300&h=200&fit=crop",
      story: `I bought a refurbished MacBook from the marketplace - saved $800 and it came with a 2-year warranty. Plus, I'm supporting the circular economy!`,
      impact: {
        devices: 1,
        co2Saved: 89,
        materialsRecovered: 3.2,
        savings: 800
      },
      timeframe: "2 weeks ago"
    },
    {
      id: 4,
      name: "David Park",
      location: "Seattle, WA",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      devicesBefore: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?w=300&h=200&fit=crop",
      devicesAfter: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
      story: `I organized a community e-waste drive through the platform. We collected 200+ devices from neighbors and prevented 2 tons of CO2 emissions!`,
      impact: {
        devices: 247,
        co2Saved: 892,
        materialsRecovered: 45.3,
        community: 85
      },
      timeframe: "6 weeks ago"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentStoryIndex((prev) => (prev + 1) % userStories.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, userStories.length]);

  const handleStoryChange = (index) => {
    setCurrentStoryIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentStory = userStories[currentStoryIndex];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
            Real Stories, Real Impact
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            See how our community is transforming e-waste into environmental progress
          </p>
        </div>

        {/* Story Carousel */}
        <div className="bg-white rounded-2xl shadow-layered overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Story Content */}
            <div className="p-8 lg:p-12">
              {/* User Info */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <Image
                    src={currentStory.avatar}
                    alt={currentStory.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-white flex items-center justify-center">
                    <Icon name="Check" size={12} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-primary">
                    {currentStory.name}
                  </h3>
                  <p className="text-sm text-text-secondary flex items-center">
                    <Icon name="MapPin" size={14} className="mr-1" />
                    {currentStory.location}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-xs text-text-secondary">
                    {currentStory.timeframe}
                  </div>
                </div>
              </div>

              {/* Story Text */}
              <blockquote className="text-text-primary text-lg leading-relaxed mb-8 italic">
                "{currentStory.story}"
              </blockquote>

              {/* Impact Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-primary/5 rounded-lg p-4 text-center">
                  <div className="text-2xl font-heading font-bold text-primary mb-1">
                    {currentStory.impact.devices}
                  </div>
                  <div className="text-sm text-text-secondary">Devices Processed</div>
                </div>
                <div className="bg-success/5 rounded-lg p-4 text-center">
                  <div className="text-2xl font-heading font-bold text-success mb-1">
                    {currentStory.impact.co2Saved}kg
                  </div>
                  <div className="text-sm text-text-secondary">CO₂ Prevented</div>
                </div>
                <div className="bg-accent/5 rounded-lg p-4 text-center">
                  <div className="text-2xl font-heading font-bold text-accent mb-1">
                    {currentStory.impact.materialsRecovered}kg
                  </div>
                  <div className="text-sm text-text-secondary">Materials Recovered</div>
                </div>
                <div className="bg-conversion/5 rounded-lg p-4 text-center">
                  <div className="text-2xl font-heading font-bold text-conversion mb-1">
                    {currentStory.impact.earnings ? `$${currentStory.impact.earnings}` : 
                     currentStory.impact.savings ? `$${currentStory.impact.savings}` :
                     `${currentStory.impact.community} people`}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {currentStory.impact.earnings ? 'Earned' : currentStory.impact.savings ?'Saved' : 'Community'}
                  </div>
                </div>
              </div>

              {/* Story Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {userStories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleStoryChange(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentStoryIndex
                          ? 'bg-primary w-8' :'bg-border hover:bg-primary/50'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-surface transition-smooth"
                  >
                    <Icon name={isAutoPlaying ? "Pause" : "Play"} size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Before/After Images */}
            <div className="bg-surface p-8 lg:p-12">
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-text-secondary mb-3 flex items-center">
                    <Icon name="Clock" size={14} className="mr-2" />
                    Before
                  </h4>
                  <div className="relative rounded-lg overflow-hidden shadow-organic">
                    <Image
                      src={currentStory.devicesBefore}
                      alt="Before recycling"
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="ArrowDown" size={16} className="text-white" />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-text-secondary mb-3 flex items-center">
                    <Icon name="CheckCircle" size={14} className="mr-2 text-success" />
                    After
                  </h4>
                  <div className="relative rounded-lg overflow-hidden shadow-organic">
                    <Image
                      src={currentStory.devicesAfter}
                      alt="After recycling"
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-3xl font-heading font-bold text-primary mb-2">
                50,000+
              </div>
              <div className="text-text-secondary">Community Members</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-accent mb-2">
                2.4M
              </div>
              <div className="text-text-secondary">Devices Recycled</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-success mb-2">
                8,900
              </div>
              <div className="text-text-secondary">Tons CO₂ Prevented</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-conversion mb-2">
                $12M
              </div>
              <div className="text-text-secondary">Value Recovered</div>
            </div>
          </div>

          <Link to="/community-platform">
            <Button
              variant="primary"
              size="lg"
              iconName="Users"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-organic"
            >
              Join Our Community
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;