import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const CommunityLeaderboard = ({ leaderboardData, userRank }) => {
  const [activeTab, setActiveTab] = useState('devices');
  const [timeFilter, setTimeFilter] = useState('month');

  const tabs = [
    { id: 'devices', label: 'Devices', icon: 'Smartphone' },
    { id: 'co2', label: 'CO₂ Impact', icon: 'Leaf' },
    { id: 'materials', label: 'Materials', icon: 'Recycle' },
    { id: 'community', label: 'Community', icon: 'Users' }
  ];

  const timeFilters = [
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
    { id: 'quarter', label: 'This Quarter' },
    { id: 'year', label: 'This Year' }
  ];

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return { icon: 'Crown', color: '#FFD700' };
      case 2: return { icon: 'Medal', color: '#C0C0C0' };
      case 3: return { icon: 'Award', color: '#CD7F32' };
      default: return { icon: 'User', color: 'var(--color-text-secondary)' };
    }
  };

  const currentData = leaderboardData[activeTab] || [];

  return (
    <div className="bg-card rounded-xl p-6 shadow-organic border border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-heading font-bold text-primary">Community Leaderboard</h2>
        <div className="flex items-center space-x-2">
          <select
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
            className="text-sm border border-border rounded-lg px-3 py-1 bg-background text-text-primary"
          >
            {timeFilters.map(filter => (
              <option key={filter.id} value={filter.id}>{filter.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex space-x-1 mb-6 bg-surface rounded-lg p-1">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-text-secondary hover:text-primary hover:bg-background'
            }`}
          >
            <Icon name={tab.icon} size={16} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="space-y-3 mb-6">
        {currentData.slice(0, 10).map((user, index) => {
          const rank = index + 1;
          const rankInfo = getRankIcon(rank);
          
          return (
            <div
              key={user.id}
              className={`flex items-center space-x-4 p-3 rounded-lg transition-all ${
                user.isCurrentUser
                  ? 'bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20' :'bg-surface hover:bg-background'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  {rank <= 3 ? (
                    <Icon name={rankInfo.icon} size={20} color={rankInfo.color} />
                  ) : (
                    <span className="text-sm font-bold text-text-secondary">#{rank}</span>
                  )}
                </div>
                
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="font-heading font-semibold text-primary">{user.name}</h3>
                  {user.isCurrentUser && (
                    <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                      You
                    </span>
                  )}
                </div>
                <p className="text-sm text-text-secondary">{user.location}</p>
              </div>

              <div className="text-right">
                <div className="text-lg font-heading font-bold text-primary">
                  {user.value}
                </div>
                <div className="text-xs text-text-secondary">
                  {user.unit}
                </div>
              </div>

              <div className="flex items-center space-x-1 text-accent">
                <Icon name="TrendingUp" size={16} />
                <span className="text-sm font-medium">+{user.growth}%</span>
              </div>
            </div>
          );
        })}
      </div>

      {userRank && userRank.position > 10 && (
        <div className="border-t border-border pt-4">
          <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border-2 border-primary/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">#{userRank.position}</span>
              </div>
              
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={userRank.avatar}
                  alt="Your Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h3 className="font-heading font-semibold text-primary">Your Position</h3>
                <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                  You
                </span>
              </div>
              <p className="text-sm text-text-secondary">Keep going to climb higher!</p>
            </div>

            <div className="text-right">
              <div className="text-lg font-heading font-bold text-primary">
                {userRank.value}
              </div>
              <div className="text-xs text-text-secondary">
                {userRank.unit}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 flex justify-center">
        <Button
          variant="outline"
          size="sm"
          iconName="ExternalLink"
          iconPosition="right"
          className="border-primary text-primary hover:bg-primary/10"
        >
          View Full Leaderboard
        </Button>
      </div>
    </div>
  );
};

export default CommunityLeaderboard;