import React from 'react';
import Icon from '../../../components/AppIcon';

const AchievementBadges = ({ achievements }) => {
  const badgeIcons = {
    'First Device': 'Smartphone',
    'Carbon Neutral': 'Leaf',
    'Community Leader': 'Crown',
    'Eco Warrior': 'Shield',
    'Green Pioneer': 'Star',
    'Sustainability Champion': 'Award'
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-organic border border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-heading font-bold text-primary">Achievement Badges</h2>
        <div className="text-sm text-accent font-medium">
          {achievements.filter(a => a.earned).length} of {achievements.length} earned
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={`text-center p-4 rounded-lg transition-all duration-300 ${
              achievement.earned
                ? 'bg-gradient-to-br from-accent/20 to-primary/20 border-2 border-accent/30' :'bg-surface border-2 border-border opacity-60'
            }`}
          >
            <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
              achievement.earned
                ? 'bg-gradient-to-br from-accent to-primary animate-pulse-radial' :'bg-muted'
            }`}>
              <Icon 
                name={badgeIcons[achievement.name] || 'Award'} 
                size={24} 
                color={achievement.earned ? 'white' : 'var(--color-text-secondary)'}
              />
            </div>
            
            <h3 className={`text-sm font-heading font-semibold mb-1 ${
              achievement.earned ? 'text-primary' : 'text-text-secondary'
            }`}>
              {achievement.name}
            </h3>
            
            <p className="text-xs text-text-secondary">
              {achievement.description}
            </p>
            
            {achievement.earned && (
              <div className="mt-2 text-xs text-accent font-medium">
                Earned {achievement.earnedDate}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg">
        <div className="flex items-center space-x-3">
          <Icon name="Target" size={20} color="var(--color-primary)" />
          <div>
            <h3 className="font-heading font-semibold text-primary">Next Achievement</h3>
            <p className="text-sm text-text-secondary">
              Recycle 5 more devices to earn "Sustainability Champion" badge
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementBadges;