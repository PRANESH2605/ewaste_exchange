import React from 'react';
import Icon from '../../../components/AppIcon';

const PersonalImpactCard = ({ impactData }) => {
  const { devicesRecycled, co2Prevented, materialsRecovered, energySaved, treeGrowthLevel } = impactData;

  return (
    <div className="bg-card rounded-xl p-6 shadow-organic border border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-heading font-bold text-primary">Your Environmental Impact</h2>
        <div className="flex items-center space-x-2 text-accent">
          <Icon name="TrendingUp" size={20} />
          <span className="text-sm font-medium">Growing</span>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="text-center p-4 bg-primary/5 rounded-lg">
          <div className="text-2xl font-heading font-bold text-primary animate-count-up">
            {devicesRecycled}
          </div>
          <div className="text-sm text-text-secondary mt-1">Devices Recycled</div>
        </div>
        
        <div className="text-center p-4 bg-accent/5 rounded-lg">
          <div className="text-2xl font-heading font-bold text-accent animate-count-up">
            {co2Prevented}kg
          </div>
          <div className="text-sm text-text-secondary mt-1">CO₂ Prevented</div>
        </div>
        
        <div className="text-center p-4 bg-secondary/5 rounded-lg">
          <div className="text-2xl font-heading font-bold text-secondary animate-count-up">
            {materialsRecovered}kg
          </div>
          <div className="text-sm text-text-secondary mt-1">Materials Recovered</div>
        </div>
        
        <div className="text-center p-4 bg-success/5 rounded-lg">
          <div className="text-2xl font-heading font-bold text-success animate-count-up">
            {energySaved}kWh
          </div>
          <div className="text-sm text-text-secondary mt-1">Energy Saved</div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-heading font-semibold text-primary">Impact Tree Growth</h3>
          <span className="text-sm text-accent font-medium">Level {treeGrowthLevel}</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center animate-breathe">
              <Icon name="TreePine" size={32} color="white" />
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-text-secondary">Progress to Level {treeGrowthLevel + 1}</span>
              <span className="text-primary font-medium">75%</span>
            </div>
            <div className="w-full bg-surface rounded-full h-2">
              <div className="bg-gradient-to-r from-accent to-primary h-2 rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalImpactCard;