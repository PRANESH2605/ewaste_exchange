import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RegionalImpact = () => {
  const [selectedMetric, setSelectedMetric] = useState('devices');
  const [timeRange, setTimeRange] = useState('month');

  const impactMetrics = [
    {
      id: 'devices',
      name: 'Devices Recycled',
      value: '12,847',
      change: '+18%',
      trend: 'up',
      icon: 'Smartphone',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      id: 'weight',
      name: 'Total Weight',
      value: '24.3 tons',
      change: '+22%',
      trend: 'up',
      icon: 'Weight',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      id: 'carbon',
      name: 'CO₂ Prevented',
      value: '156.8 tons',
      change: '+15%',
      trend: 'up',
      icon: 'Leaf',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      id: 'participants',
      name: 'Active Participants',
      value: '3,429',
      change: '+31%',
      trend: 'up',
      icon: 'Users',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    }
  ];

  const timeRanges = [
    { id: 'week', name: 'This Week' },
    { id: 'month', name: 'This Month' },
    { id: 'quarter', name: 'This Quarter' },
    { id: 'year', name: 'This Year' }
  ];

  const regionalComparison = [
    {
      region: "San Francisco Bay Area",
      rank: 1,
      devices: 12847,
      participants: 3429,
      score: 95,
      trend: "up"
    },
    {
      region: "Los Angeles Metro",
      rank: 2,
      devices: 11234,
      participants: 2987,
      score: 89,
      trend: "up"
    },
    {
      region: "San Diego County",
      rank: 3,
      devices: 8965,
      participants: 2156,
      score: 82,
      trend: "stable"
    },
    {
      region: "Sacramento Valley",
      rank: 4,
      devices: 7432,
      participants: 1834,
      score: 76,
      trend: "up"
    },
    {
      region: "Orange County",
      rank: 5,
      devices: 6789,
      participants: 1567,
      score: 71,
      trend: "down"
    }
  ];

  const topContributors = [
    {
      id: 1,
      name: "GreenTech Solutions Inc.",
      type: "Business",
      contribution: "2,847 devices",
      impact: "18.2 tons CO₂",
      avatar: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=face",
      badge: "Gold Partner"
    },
    {
      id: 2,
      name: "Sarah Chen",
      type: "Individual",
      contribution: "156 devices",
      impact: "0.8 tons CO₂",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e0b9e5?w=100&h=100&fit=crop&crop=face",
      badge: "Eco Champion"
    },
    {
      id: 3,
      name: "SF Environmental School",
      type: "Organization",
      contribution: "1,234 devices",
      impact: "6.7 tons CO₂",
      avatar: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&h=100&fit=crop",
      badge: "Education Leader"
    },
    {
      id: 4,
      name: "Michael Rodriguez",
      type: "Individual",
      contribution: "89 devices",
      impact: "0.5 tons CO₂",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      badge: "Rising Star"
    },
    {
      id: 5,
      name: "Bay Area Recycling Collective",
      type: "Organization",
      contribution: "3,456 devices",
      impact: "21.3 tons CO₂",
      avatar: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=100&h=100&fit=crop",
      badge: "Community Hero"
    }
  ];

  const monthlyData = [
    { month: 'Jan', devices: 8500, weight: 18.2, carbon: 112.5 },
    { month: 'Feb', devices: 9200, weight: 19.8, carbon: 125.3 },
    { month: 'Mar', devices: 10100, weight: 21.5, carbon: 138.7 },
    { month: 'Apr', devices: 11300, weight: 23.1, carbon: 148.2 },
    { month: 'May', devices: 12847, weight: 24.3, carbon: 156.8 }
  ];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return 'TrendingUp';
      case 'down': return 'TrendingDown';
      case 'stable': return 'Minus';
      default: return 'Minus';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up': return 'text-success';
      case 'down': return 'text-error';
      case 'stable': return 'text-text-secondary';
      default: return 'text-text-secondary';
    }
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Gold Partner': return 'bg-warning/10 text-warning';
      case 'Eco Champion': return 'bg-success/10 text-success';
      case 'Education Leader': return 'bg-primary/10 text-primary';
      case 'Rising Star': return 'bg-accent/10 text-accent';
      case 'Community Hero': return 'bg-secondary/10 text-secondary';
      default: return 'bg-surface text-text-secondary';
    }
  };

  return (
    <div className="space-y-6">
      {/* Impact Metrics Overview */}
      <div className="bg-white rounded-xl shadow-organic border border-border">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                <Icon name="BarChart3" size={20} className="text-success" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-text-primary">Regional Impact</h3>
                <p className="text-sm text-text-secondary">San Francisco Bay Area performance</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              {timeRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => setTimeRange(range.id)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-smooth ${
                    timeRange === range.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-text-secondary hover:text-primary hover:bg-surface'
                  }`}
                >
                  {range.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric) => (
              <div
                key={metric.id}
                className={`p-4 rounded-lg border transition-smooth cursor-pointer ${
                  selectedMetric === metric.id
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                }`}
                onClick={() => setSelectedMetric(metric.id)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${metric.bgColor}`}>
                    <Icon name={metric.icon} size={20} className={metric.color} />
                  </div>
                  <div className={`flex items-center space-x-1 text-sm ${
                    metric.trend === 'up' ? 'text-success' : 'text-error'
                  }`}>
                    <Icon name={getTrendIcon(metric.trend)} size={16} />
                    <span>{metric.change}</span>
                  </div>
                </div>
                <div className="text-2xl font-heading font-bold text-text-primary mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-text-secondary">
                  {metric.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Regional Comparison */}
      <div className="bg-white rounded-xl shadow-organic border border-border">
        <div className="p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name="Trophy" size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-text-primary">Regional Leaderboard</h3>
              <p className="text-sm text-text-secondary">California regions ranked by impact</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {regionalComparison.map((region) => (
              <div
                key={region.rank}
                className={`flex items-center justify-between p-4 rounded-lg border transition-smooth ${
                  region.rank === 1
                    ? 'border-accent bg-accent/5' :'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    region.rank === 1 ? 'bg-accent text-accent-foreground' :
                    region.rank === 2 ? 'bg-warning/20 text-warning' :
                    region.rank === 3 ? 'bg-secondary/20 text-secondary': 'bg-surface text-text-secondary'
                  }`}>
                    {region.rank}
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary">{region.region}</h4>
                    <div className="flex items-center space-x-4 text-sm text-text-secondary">
                      <span>{region.devices.toLocaleString()} devices</span>
                      <span>{region.participants.toLocaleString()} participants</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-lg font-bold text-text-primary">{region.score}</div>
                    <div className="text-xs text-text-secondary">Impact Score</div>
                  </div>
                  <div className={`flex items-center space-x-1 ${getTrendColor(region.trend)}`}>
                    <Icon name={getTrendIcon(region.trend)} size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Contributors */}
      <div className="bg-white rounded-xl shadow-organic border border-border">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Award" size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-text-primary">Top Contributors</h3>
                <p className="text-sm text-text-secondary">Leading the sustainability movement</p>
              </div>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              iconName="ExternalLink"
              className="border-primary text-primary hover:bg-primary/10"
            >
              View All
            </Button>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {topContributors.map((contributor, index) => (
              <div
                key={contributor.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 transition-smooth"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={contributor.avatar}
                      alt={contributor.name}
                      className="w-12 h-12 rounded-full object-cover"
                      onError={(e) => {
                        e.target.src = '/assets/images/no_image.png';
                      }}
                    />
                    <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      index === 0 ? 'bg-accent text-accent-foreground' :
                      index === 1 ? 'bg-warning text-warning-foreground' :
                      index === 2 ? 'bg-secondary text-secondary-foreground': 'bg-surface text-text-secondary'
                    }`}>
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-text-primary">{contributor.name}</h4>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getBadgeColor(contributor.badge)}`}>
                        {contributor.badge}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-text-secondary">
                      <span className="flex items-center space-x-1">
                        <Icon name="Package" size={14} />
                        <span>{contributor.contribution}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Leaf" size={14} />
                        <span>{contributor.impact}</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-full">
                    {contributor.type}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="MessageCircle"
                    className="text-text-secondary hover:text-primary"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionalImpact;