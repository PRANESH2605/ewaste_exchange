import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import PersonalImpactCard from './components/PersonalImpactCard';
import AchievementBadges from './components/AchievementBadges';
import GlobalImpactMetrics from './components/GlobalImpactMetrics';
import GoalTracker from './components/GoalTracker';
import CommunityLeaderboard from './components/CommunityLeaderboard';
import CommunityChallenge from './components/CommunityChallenge';
import SocialSharing from './components/SocialSharing';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ImpactDashboard = () => {
  const [activeView, setActiveView] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  // Mock personal impact data
  const personalImpactData = {
    devicesRecycled: 247,
    co2Prevented: 1247,
    materialsRecovered: 89,
    energySaved: 2847,
    treeGrowthLevel: 8
  };

  // Mock achievements data
  const achievementsData = [
    {
      name: 'First Device',
      description: 'Recycled your first electronic device',
      earned: true,
      earnedDate: '2 months ago'
    },
    {
      name: 'Carbon Neutral',
      description: 'Prevented 1000kg of CO₂ emissions',
      earned: true,
      earnedDate: '3 weeks ago'
    },
    {
      name: 'Community Leader',
      description: 'Top 10% contributor in your region',
      earned: true,
      earnedDate: '1 week ago'
    },
    {
      name: 'Eco Warrior',
      description: 'Recycled 100+ devices',
      earned: true,
      earnedDate: '5 days ago'
    },
    {
      name: 'Green Pioneer',
      description: 'Helped 10 friends start recycling',
      earned: false,
      earnedDate: null
    },
    {
      name: 'Sustainability Champion',
      description: 'Recycled 500+ devices',
      earned: false,
      earnedDate: null
    }
  ];

  // Mock global impact data
  const globalImpactData = {
    totalDevices: 2847592,
    totalCO2: 15847,
    totalMaterials: 8947,
    deviceTypeData: [
      { name: 'Smartphones', value: 35 },
      { name: 'Laptops', value: 25 },
      { name: 'Tablets', value: 15 },
      { name: 'Cables', value: 15 },
      { name: 'Others', value: 10 }
    ],
    regionData: [
      { region: 'North America', devices: 1200000 },
      { region: 'Europe', devices: 850000 },
      { region: 'Asia Pacific', devices: 650000 },
      { region: 'Latin America', devices: 100000 },
      { region: 'Africa', devices: 47592 }
    ]
  };

  // Mock goals data
  const goalsData = [
    {
      title: 'Monthly Device Goal',
      type: 'Devices',
      current: 18,
      target: 25,
      progress: 72,
      timeframe: 'This Month',
      daysLeft: 8
    },
    {
      title: 'Quarterly CO₂ Reduction',
      type: 'CO2 Reduction',
      current: 450,
      target: 500,
      progress: 90,
      timeframe: 'Q4 2024',
      daysLeft: 23
    },
    {
      title: 'Annual Materials Recovery',
      type: 'Materials',
      current: 89,
      target: 120,
      progress: 74,
      timeframe: 'This Year',
      daysLeft: 45
    }
  ];

  // Mock leaderboard data
  const leaderboardData = {
    devices: [
      {
        id: 1,
        name: 'Sarah Chen',
        location: 'San Francisco, CA',
        value: 342,
        unit: 'devices',
        growth: 15,
        avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
        isCurrentUser: false
      },
      {
        id: 2,
        name: 'Michael Rodriguez',
        location: 'Austin, TX',
        value: 298,
        unit: 'devices',
        growth: 12,
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
        isCurrentUser: false
      },
      {
        id: 3,
        name: 'Emily Johnson',
        location: 'Seattle, WA',
        value: 276,
        unit: 'devices',
        growth: 8,
        avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
        isCurrentUser: false
      },
      {
        id: 4,
        name: 'You',
        location: 'New York, NY',
        value: 247,
        unit: 'devices',
        growth: 18,
        avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
        isCurrentUser: true
      }
    ]
  };

  const userRank = {
    position: 4,
    value: 247,
    unit: 'devices',
    avatar: 'https://randomuser.me/api/portraits/men/35.jpg'
  };

  // Mock community challenge data
  const currentChallenge = {
    title: 'Cable Cleanup Challenge',
    description: `Join thousands of users in our monthly cable cleanup initiative. Let's tackle the growing problem of electronic cable waste together!`,progress: 18750,target: 25000,participants: 12847,endDate: '12 days',rewards: 'Eco Warrior Badge + Tree Planting',
    teams: [
      {
        id: 1,
        name: 'Green Tech Warriors',
        members: 156,
        devices: 2847
      },
      {
        id: 2,
        name: 'Sustainable Squad',
        members: 134,
        devices: 2156
      },
      {
        id: 3,
        name: 'Eco Champions',
        members: 98,
        devices: 1876
      }
    ]
  };

  const upcomingChallenges = [
    {
      title: 'Corporate Device Drive',
      description: 'Partner with businesses for bulk device recycling',
      startDate: 'Jan 15',
      duration: '2 weeks',
      icon: 'Building'
    },
    {
      title: 'Battery Collection Blitz',
      description: 'Focus on proper battery disposal and recycling',
      startDate: 'Feb 1',
      duration: '1 week',
      icon: 'Battery'
    }
  ];

  const viewTabs = [
    { id: 'overview', label: 'Overview', icon: 'BarChart3' },
    { id: 'personal', label: 'Personal Impact', icon: 'User' },
    { id: 'community', label: 'Community', icon: 'Users' },
    { id: 'goals', label: 'Goals & Challenges', icon: 'Target' }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleUpdateGoal = (goalId, updates) => {
    console.log('Updating goal:', goalId, updates);
    // Here you would update the goal in your state management system
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 animate-breathe">
              <Icon name="BarChart3" size={32} color="white" />
            </div>
            <h2 className="text-xl font-heading font-bold text-primary mb-2">Loading Your Impact</h2>
            <p className="text-text-secondary">Calculating your environmental contribution...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-8">
            <div className="text-center mb-6">
              <h1 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
                Your Environmental Impact Dashboard
              </h1>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                Track your recycling journey, celebrate achievements, and see how your actions contribute to a more sustainable future.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-card rounded-lg shadow-organic border border-border">
                <div className="text-2xl font-heading font-bold text-primary animate-count-up">
                  {personalImpactData.devicesRecycled}
                </div>
                <div className="text-sm text-text-secondary">Devices Recycled</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg shadow-organic border border-border">
                <div className="text-2xl font-heading font-bold text-accent animate-count-up">
                  {personalImpactData.co2Prevented}kg
                </div>
                <div className="text-sm text-text-secondary">CO₂ Prevented</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg shadow-organic border border-border">
                <div className="text-2xl font-heading font-bold text-secondary animate-count-up">
                  {personalImpactData.materialsRecovered}kg
                </div>
                <div className="text-sm text-text-secondary">Materials Recovered</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg shadow-organic border border-border">
                <div className="text-2xl font-heading font-bold text-success animate-count-up">
                  {personalImpactData.energySaved}kWh
                </div>
                <div className="text-sm text-text-secondary">Energy Saved</div>
              </div>
            </div>

            {/* View Tabs */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-1 bg-surface rounded-lg p-1">
                {viewTabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveView(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      activeView === tab.id
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-text-secondary hover:text-primary hover:bg-background'
                    }`}
                  >
                    <Icon name={tab.icon} size={16} />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content based on active view */}
          {activeView === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <PersonalImpactCard impactData={personalImpactData} />
              <AchievementBadges achievements={achievementsData} />
              <div className="lg:col-span-2">
                <GlobalImpactMetrics globalData={globalImpactData} />
              </div>
            </div>
          )}

          {activeView === 'personal' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <PersonalImpactCard impactData={personalImpactData} />
              <AchievementBadges achievements={achievementsData} />
              <div className="lg:col-span-2">
                <SocialSharing impactData={personalImpactData} />
              </div>
            </div>
          )}

          {activeView === 'community' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <CommunityLeaderboard 
                leaderboardData={leaderboardData} 
                userRank={userRank} 
              />
              <CommunityChallenge 
                currentChallenge={currentChallenge}
                upcomingChallenges={upcomingChallenges}
              />
              <div className="lg:col-span-2">
                <GlobalImpactMetrics globalData={globalImpactData} />
              </div>
            </div>
          )}

          {activeView === 'goals' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <GoalTracker 
                goals={goalsData} 
                onUpdateGoal={handleUpdateGoal} 
              />
              <CommunityChallenge 
                currentChallenge={currentChallenge}
                upcomingChallenges={upcomingChallenges}
              />
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                Ready to Increase Your Impact?
              </h2>
              <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                Schedule your next pickup, find local recycling centers, or join community challenges to amplify your environmental contribution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  iconName="Truck"
                  iconPosition="left"
                  className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
                >
                  Schedule Pickup
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="MapPin"
                  iconPosition="left"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Find Locations
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Users"
                  iconPosition="left"
                  className="border-accent text-accent hover:bg-accent/10"
                >
                  Join Challenge
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ImpactDashboard;