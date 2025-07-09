import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [impactMetrics, setImpactMetrics] = useState({
    devicesProcessed: 247832,
    materialsRecovered: 1247,
    co2Prevented: 3456
  });

  const rotatingMessages = [
    "Transform your old devices into environmental impact",
    "Join 50,000+ businesses in sustainable technology practices",
    "Connect with your community for collective environmental action"
  ];

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % rotatingMessages.length);
    }, 4000);

    const metricsInterval = setInterval(() => {
      setImpactMetrics(prev => ({
        devicesProcessed: prev.devicesProcessed + Math.floor(Math.random() * 3),
        materialsRecovered: prev.materialsRecovered + Math.floor(Math.random() * 2),
        co2Prevented: prev.co2Prevented + Math.floor(Math.random() * 5)
      }));
    }, 5000);

    return () => {
      clearInterval(messageInterval);
      clearInterval(metricsInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-secondary rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Impact Metrics */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-organic">
                <div className="text-2xl font-heading font-bold text-primary animate-count-up">
                  {impactMetrics.devicesProcessed.toLocaleString()}
                </div>
                <div className="text-sm text-text-secondary">Devices Processed</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-organic">
                <div className="text-2xl font-heading font-bold text-accent animate-count-up">
                  {impactMetrics.materialsRecovered.toLocaleString()}
                </div>
                <div className="text-sm text-text-secondary">Tons Recovered</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-organic">
                <div className="text-2xl font-heading font-bold text-success animate-count-up">
                  {impactMetrics.co2Prevented.toLocaleString()}
                </div>
                <div className="text-sm text-text-secondary">Tons CO₂ Prevented</div>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
              Technology for a{' '}
              <span className="text-accent">Sustainable</span>{' '}
              Tomorrow
            </h1>

            {/* Rotating Sub-message */}
            <div className="h-16 mb-8">
              <p className="text-lg lg:text-xl text-text-secondary leading-relaxed transition-all duration-500 opacity-100">
                {rotatingMessages[currentMessageIndex]}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                variant="primary"
                size="lg"
                iconName="Truck"
                iconPosition="left"
                className="bg-conversion hover:bg-conversion/90 text-conversion-foreground shadow-organic"
              >
                Schedule Pickup
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Calculator"
                iconPosition="left"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Calculate Your Impact
              </Button>
            </div>

            {/* Subtle Third Option */}
            <Link
              to="/marketplace"
              className="inline-flex items-center space-x-2 text-text-secondary hover:text-primary transition-smooth"
            >
              <Icon name="ShoppingBag" size={16} />
              <span className="text-sm">Explore Marketplace</span>
              <Icon name="ArrowRight" size={14} />
            </Link>
          </div>

          {/* Right Content - Interactive World Map */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-layered">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-heading font-semibold text-primary">
                  Live Recycling Activity
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm text-text-secondary">Live</span>
                </div>
              </div>

              {/* Mock World Map */}
              <div className="relative h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg overflow-hidden">
                {/* Pulsing Activity Indicators */}
                <div className="absolute top-12 left-16 w-3 h-3 bg-conversion rounded-full animate-pulse-radial"></div>
                <div className="absolute top-20 right-20 w-3 h-3 bg-accent rounded-full animate-pulse-radial delay-500"></div>
                <div className="absolute bottom-16 left-1/3 w-3 h-3 bg-success rounded-full animate-pulse-radial delay-1000"></div>
                <div className="absolute bottom-20 right-1/4 w-3 h-3 bg-conversion rounded-full animate-pulse-radial delay-1500"></div>

                {/* Map Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="Globe" size={120} className="text-primary/20" />
                </div>

                {/* Activity Labels */}
                <div className="absolute top-8 left-12 bg-white/90 rounded-lg px-2 py-1 text-xs">
                  <div className="font-medium text-conversion">New York</div>
                  <div className="text-text-secondary">247 devices</div>
                </div>
                <div className="absolute bottom-12 right-16 bg-white/90 rounded-lg px-2 py-1 text-xs">
                  <div className="font-medium text-accent">San Francisco</div>
                  <div className="text-text-secondary">156 devices</div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-conversion rounded-full"></div>
                    <span className="text-text-primary">Corporate pickup scheduled</span>
                  </div>
                  <span className="text-text-secondary">2 min ago</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-text-primary">Processing center active</span>
                  </div>
                  <span className="text-text-secondary">5 min ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;