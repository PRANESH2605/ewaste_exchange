import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceQuestionnaire from './components/ServiceQuestionnaire';
import ServiceRecommendations from './components/ServiceRecommendations';
import DeviceIdentifier from './components/DeviceIdentifier';
import ImpactCalculator from './components/ImpactCalculator';
import PickupScheduler from './components/PickupScheduler';
import LocationMap from './components/LocationMap';

const ServiceDiscovery = () => {
  const [currentView, setCurrentView] = useState('questionnaire');
  const [questionnaireAnswers, setQuestionnaireAnswers] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [showScheduler, setShowScheduler] = useState(false);
  const [scheduledPickup, setScheduledPickup] = useState(null);

  const handleQuestionnaireComplete = (answers) => {
    setQuestionnaireAnswers(answers);
    setCurrentView('recommendations');
  };

  const handleBackToQuestionnaire = () => {
    setCurrentView('questionnaire');
    setQuestionnaireAnswers(null);
  };

  const handleDeviceIdentified = (device) => {
    // Convert device info to questionnaire format
    const mockAnswers = {
      deviceType: device.category?.toLowerCase() || 'smartphone',
      quantity: '1-5',
      location: 'Current Location',
      timeline: 'week',
      specialRequirements: device.specialRequirements || []
    };
    setQuestionnaireAnswers(mockAnswers);
    setCurrentView('recommendations');
  };

  const handleSchedulePickup = (service) => {
    setSelectedService(service);
    setShowScheduler(true);
  };

  const handlePickupScheduled = (pickup) => {
    setScheduledPickup(pickup);
    setShowScheduler(false);
    // Could show a success message or redirect
  };

  const quickActions = [
    {
      id: 'identify',
      title: 'Device Identifier',
      description: 'Upload a photo to identify your device',
      icon: 'Camera',
      color: 'bg-primary text-primary-foreground',
      action: () => setCurrentView('identifier')
    },
    {
      id: 'calculate',
      title: 'Impact Calculator',
      description: 'Calculate your environmental impact',
      icon: 'Calculator',
      color: 'bg-accent text-accent-foreground',
      action: () => setCurrentView('calculator')
    },
    {
      id: 'locations',
      title: 'Find Locations',
      description: 'Discover nearby drop-off centers',
      icon: 'MapPin',
      color: 'bg-secondary text-secondary-foreground',
      action: () => setCurrentView('locations')
    }
  ];

  const stats = [
    { label: 'Devices Processed', value: '2.4M+', icon: 'Smartphone' },
    { label: 'Partner Locations', value: '1,200+', icon: 'MapPin' },
    { label: 'CO₂ Saved', value: '45K tons', icon: 'Leaf' },
    { label: 'Satisfaction Rate', value: '98%', icon: 'Star' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Sparkles" size={16} />
                <span>AI-Powered Matching</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-text-primary mb-6">
                Find Your Perfect
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Recycling Solution
                </span>
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                Our intelligent matching system guides you to the optimal e-waste solution 
                through a simple questionnaire. Get personalized recommendations in minutes.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name={stat.icon} size={24} className="text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-text-primary">{stat.value}</div>
                    <div className="text-sm text-text-secondary">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {quickActions.map((action) => (
                <button
                  key={action.id}
                  onClick={action.action}
                  className="bg-card rounded-xl p-6 text-left hover:shadow-layered transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={action.icon} size={24} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">
                    {action.title}
                  </h3>
                  <p className="text-text-secondary">
                    {action.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Navigation Breadcrumb */}
            {currentView !== 'questionnaire' && (
              <div className="flex items-center space-x-2 text-sm text-text-secondary mb-8">
                <button
                  onClick={() => setCurrentView('questionnaire')}
                  className="hover:text-primary transition-colors"
                >
                  Service Discovery
                </button>
                <Icon name="ChevronRight" size={16} />
                <span className="text-text-primary capitalize">
                  {currentView === 'recommendations' ? 'Recommendations' : 
                   currentView === 'identifier' ? 'Device Identifier' :
                   currentView === 'calculator' ? 'Impact Calculator' :
                   currentView === 'locations' ? 'Locations' : currentView}
                </span>
              </div>
            )}

            {/* Content Views */}
            {currentView === 'questionnaire' && (
              <ServiceQuestionnaire onComplete={handleQuestionnaireComplete} />
            )}

            {currentView === 'recommendations' && questionnaireAnswers && (
              <ServiceRecommendations 
                answers={questionnaireAnswers}
                onBack={handleBackToQuestionnaire}
              />
            )}

            {currentView === 'identifier' && (
              <DeviceIdentifier onDeviceIdentified={handleDeviceIdentified} />
            )}

            {currentView === 'calculator' && (
              <ImpactCalculator />
            )}

            {currentView === 'locations' && (
              <LocationMap />
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4">
                Why Choose Our Service Discovery?
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Advanced technology meets environmental responsibility
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: 'Brain',
                  title: 'AI-Powered Matching',
                  description: 'Our intelligent system analyzes your needs and matches you with the perfect recycling solution based on device type, location, and preferences.'
                },
                {
                  icon: 'Shield',
                  title: 'Certified Partners',
                  description: 'All our recycling partners are certified and follow strict environmental and data security standards to ensure responsible processing.'
                },
                {
                  icon: 'Clock',
                  title: 'Real-Time Availability',
                  description: 'Get instant updates on pickup availability, drop-off center capacity, and processing timelines for informed decision-making.'
                },
                {
                  icon: 'Smartphone',
                  title: 'Mobile Optimized',
                  description: 'Schedule pickups, track progress, and access services seamlessly from any device with our mobile-first design.'
                },
                {
                  icon: 'BarChart3',
                  title: 'Impact Tracking',
                  description: 'Monitor your environmental contribution with detailed analytics on CO₂ savings, materials recovered, and overall impact.'
                },
                {
                  icon: 'Users',
                  title: 'Community Driven',
                  description: 'Join thousands of users making a difference. Share experiences, get tips, and contribute to a sustainable future together.'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-card rounded-xl p-6 hover:shadow-layered transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={feature.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start your recycling journey today and join the sustainable technology movement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setCurrentView('questionnaire')}
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-white text-primary hover:bg-white/90"
              >
                Start Questionnaire
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                className="border-white text-white hover:bg-white/10"
              >
                Speak to Expert
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Pickup Scheduler Modal */}
      {showScheduler && selectedService && (
        <PickupScheduler
          service={selectedService}
          onClose={() => setShowScheduler(false)}
          onScheduled={handlePickupScheduled}
        />
      )}

      {/* Success Message */}
      {scheduledPickup && (
        <div className="fixed bottom-4 right-4 bg-success text-success-foreground p-4 rounded-lg shadow-layered z-50">
          <div className="flex items-center space-x-2">
            <Icon name="Check" size={20} />
            <span>Pickup scheduled successfully!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDiscovery;