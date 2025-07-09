import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialSharing = ({ impactData }) => {
  const [selectedTemplate, setSelectedTemplate] = useState('achievement');
  const [customMessage, setCustomMessage] = useState('');

  const templates = [
    {
      id: 'achievement',
      title: 'Achievement Share',
      preview: `🌱 Just recycled my ${impactData.devicesRecycled}th device with eWaste Exchange! \n\n💚 Environmental Impact:\n• ${impactData.co2Prevented}kg CO₂ prevented\n• ${impactData.materialsRecovered}kg materials recovered\n• ${impactData.energySaved}kWh energy saved\n\n#SustainableTech #eWasteRecycling #EnvironmentalImpact`,
      icon: 'Award'
    },
    {
      id: 'milestone',
      title: 'Milestone Celebration',
      preview: `🎉 Milestone achieved! I've now prevented ${impactData.co2Prevented}kg of CO₂ emissions through responsible e-waste recycling!\n\n🌍 Small actions, big impact. Join me in making technology sustainable.\n\n#ClimateAction #TechForGood #SustainableLiving`,
      icon: 'Trophy'
    },
    {
      id: 'challenge',title: 'Challenge Invitation',preview: `🚀 Challenge accepted! I'm participating in this month's Cable Cleanup challenge.\n\n📱 Already recycled ${impactData.devicesRecycled} devices this year. Who's joining me?\n\n#CommunityChallenge #eWasteExchange #SustainableTech`,
      icon: 'Users'
    }
  ];

  const socialPlatforms = [
    { name: 'Twitter', icon: 'Twitter', color: '#1DA1F2', limit: 280 },
    { name: 'Facebook', icon: 'Facebook', color: '#4267B2', limit: 500 },
    { name: 'LinkedIn', icon: 'Linkedin', color: '#0077B5', limit: 700 },
    { name: 'Instagram', icon: 'Instagram', color: '#E4405F', limit: 150 }
  ];

  const handleShare = (platform) => {
    const selectedTemp = templates.find(t => t.id === selectedTemplate);
    const message = customMessage || selectedTemp.preview;
    
    console.log(`Sharing to ${platform}:`, message);
    // Here you would integrate with actual social media APIs
  };

  const generateGraphic = () => {
    console.log('Generating custom impact graphic...');
    // Here you would generate a custom graphic with the impact data
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-organic border border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-heading font-bold text-primary">Share Your Impact</h2>
        <div className="flex items-center space-x-2 text-accent">
          <Icon name="Share2" size={20} />
          <span className="text-sm font-medium">Social Media</span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-heading font-semibold text-primary mb-3">Choose Template</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {templates.map(template => (
            <button
              key={template.id}
              onClick={() => setSelectedTemplate(template.id)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                selectedTemplate === template.id
                  ? 'border-primary bg-primary/5' :'border-border bg-surface hover:border-primary/50'
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  selectedTemplate === template.id ? 'bg-primary' : 'bg-muted'
                }`}>
                  <Icon 
                    name={template.icon} 
                    size={16} 
                    color={selectedTemplate === template.id ? 'white' : 'var(--color-text-secondary)'}
                  />
                </div>
                <h4 className="font-heading font-semibold text-primary">{template.title}</h4>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-heading font-semibold text-primary mb-3">Preview & Customize</h3>
        <div className="bg-surface rounded-lg p-4 border border-border">
          <textarea
            value={customMessage || templates.find(t => t.id === selectedTemplate)?.preview}
            onChange={(e) => setCustomMessage(e.target.value)}
            placeholder="Customize your message..."
            className="w-full h-32 bg-background border border-border rounded-lg p-3 text-text-primary resize-none"
          />
          <div className="flex justify-between items-center mt-2 text-sm text-text-secondary">
            <span>Character count: {(customMessage || templates.find(t => t.id === selectedTemplate)?.preview || '').length}</span>
            <Button
              variant="ghost"
              size="sm"
              iconName="RotateCcw"
              iconPosition="left"
              onClick={() => setCustomMessage('')}
            >
              Reset
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-heading font-semibold text-primary mb-3">Share to Platforms</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {socialPlatforms.map(platform => (
            <Button
              key={platform.name}
              variant="outline"
              size="md"
              iconName={platform.icon}
              iconPosition="left"
              onClick={() => handleShare(platform.name)}
              className="border-border hover:border-primary"
              style={{ '--hover-color': platform.color }}
            >
              {platform.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="border-t border-border pt-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-heading font-semibold text-primary">Custom Impact Graphic</h3>
            <p className="text-sm text-text-secondary">
              Generate a personalized graphic with your impact metrics
            </p>
          </div>
          <Button
            variant="primary"
            size="md"
            iconName="Image"
            iconPosition="left"
            onClick={generateGraphic}
            className="bg-accent hover:bg-accent/90"
          >
            Generate Graphic
          </Button>
        </div>
      </div>

      <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg">
        <div className="flex items-center space-x-3">
          <Icon name="Heart" size={20} color="var(--color-accent)" />
          <div>
            <h4 className="font-heading font-semibold text-primary">Inspire Others</h4>
            <p className="text-sm text-text-secondary">
              Your shared impact story can inspire others to join the sustainability movement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSharing;