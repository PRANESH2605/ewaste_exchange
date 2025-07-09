import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const UserProfiles = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);

  const userProfile = {
    name: "Sarah Chen",
    username: "@sarahchen_eco",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e0e4b6?w=200&h=200&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=300&fit=crop",
    location: "San Francisco, CA",
    joinDate: "2023-03-15",
    bio: `Environmental advocate and tech professional passionate about sustainable technology practices. Leading community initiatives to reduce e-waste and promote circular economy principles.\n\nSpecializing in corporate sustainability programs and community education. Always happy to mentor newcomers to the sustainability movement!`,
    badges: [
      { name: "Eco Champion", level: "Gold", icon: "Trophy", color: "text-yellow-600" },
      { name: "Community Leader", level: "Expert", icon: "Users", color: "text-blue-600" },
      { name: "Mentor", level: "Active", icon: "GraduationCap", color: "text-purple-600" },
      { name: "Event Organizer", level: "Pro", icon: "Calendar", color: "text-green-600" }
    ],
    expertise: [
      "Corporate Sustainability",
      "E-waste Management",
      "Community Organizing",
      "Environmental Education",
      "Policy Advocacy"
    ],
    stats: {
      devicesRecycled: 127,
      co2Saved: "5.8 tons",
      eventsOrganized: 12,
      peopleHelped: 234,
      forumPosts: 89,
      reputation: 2847
    },
    achievements: [
      {
        id: 1,
        title: "First 100 Devices",
        description: "Recycled 100 devices through the platform",
        icon: "Target",
        date: "2023-11-15",
        rarity: "milestone"
      },
      {
        id: 2,
        title: "Community Builder",
        description: "Organized 10+ community events",
        icon: "Users",
        date: "2023-12-01",
        rarity: "rare"
      },
      {
        id: 3,
        title: "Mentor of the Month",
        description: "Helped 50+ newcomers get started",
        icon: "Award",
        date: "2023-12-31",
        rarity: "special"
      }
    ],
    recentActivity: [
      {
        id: 1,
        type: "event_organized",
        title: "Organized Community E-Waste Drive",
        description: "Successfully coordinated collection of 200+ devices",
        timestamp: new Date(Date.now() - 86400000),
        impact: "2.1 tons CO₂ saved"
      },
      {
        id: 2,
        type: "forum_post",
        title: "Posted in Device Repair Tips",
        description: "Shared comprehensive iPhone battery replacement guide",
        timestamp: new Date(Date.now() - 172800000),
        engagement: "45 likes, 23 replies"
      },
      {
        id: 3,
        type: "mentorship",
        title: "Mentored New Member",
        description: "Helped Alex Rodriguez get started with e-waste recycling",
        timestamp: new Date(Date.now() - 259200000),
        outcome: "First device recycled"
      }
    ]
  };

  const communityMembers = [
    {
      id: 1,
      name: "David Rodriguez",
      username: "@david_repair_guru",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=150&h=150&fit=crop&crop=face",
      badge: "Repair Expert",
      specialties: ["Smartphone Repair", "Laptop Diagnostics"],
      reputation: 3156,
      location: "Oakland, CA",
      isOnline: true,
      lastActive: "2 minutes ago"
    },
    {
      id: 2,
      name: "Maria Santos",
      username: "@maria_green_tech",
      avatar: "https://images.pixabay.com/photo/2017/06/26/02/47/man-2442565_960_720.jpg?w=150&h=150&fit=crop&crop=face",
      badge: "Community Organizer",
      specialties: ["Event Planning", "Corporate Outreach"],
      reputation: 2934,
      location: "San Jose, CA",
      isOnline: false,
      lastActive: "1 hour ago"
    },
    {
      id: 3,
      name: "Alex Thompson",
      username: "@alex_policy_advocate",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      badge: "Policy Expert",
      specialties: ["Right to Repair", "Environmental Law"],
      reputation: 2567,
      location: "Berkeley, CA",
      isOnline: true,
      lastActive: "5 minutes ago"
    },
    {
      id: 4,
      name: "Jennifer Kim",
      username: "@jen_sustainability_pro",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=150&h=150&fit=crop&crop=face",
      badge: "Business Liaison",
      specialties: ["Corporate Sustainability", "Compliance"],
      reputation: 2234,
      location: "Palo Alto, CA",
      isOnline: false,
      lastActive: "3 hours ago"
    }
  ];

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'Today';
    if (days === 1) return '1 day ago';
    return `${days} days ago`;
  };

  const formatJoinDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric'
    });
  };

  const getBadgeColor = (level) => {
    switch (level) {
      case 'Gold': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Expert': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Active': return 'bg-green-100 text-green-800 border-green-200';
      case 'Pro': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getAchievementColor = (rarity) => {
    switch (rarity) {
      case 'milestone': return 'bg-blue-100 text-blue-800';
      case 'rare': return 'bg-purple-100 text-purple-800';
      case 'special': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'event_organized': return 'Calendar';
      case 'forum_post': return 'MessageCircle';
      case 'mentorship': return 'Users';
      default: return 'Activity';
    }
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-surface rounded-lg shadow-organic overflow-hidden">
        {/* Cover Image */}
        <div className="relative h-48 md:h-64 overflow-hidden">
          <Image
            src={userProfile.coverImage}
            alt="Profile cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Edit Button */}
          <div className="absolute top-4 right-4">
            <Button
              variant="ghost"
              size="sm"
              iconName="Edit"
              onClick={() => setIsEditing(!isEditing)}
              className="bg-background/90 backdrop-blur-sm hover:bg-background"
            >
              Edit Profile
            </Button>
          </div>
        </div>

        {/* Profile Info */}
        <div className="relative px-6 pb-6">
          {/* Avatar */}
          <div className="flex flex-col md:flex-row md:items-end md:space-x-6 -mt-16 md:-mt-20">
            <div className="relative">
              <Image
                src={userProfile.avatar}
                alt={userProfile.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-surface object-cover"
              />
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-surface"></div>
            </div>

            <div className="flex-1 mt-4 md:mt-0 md:mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
                    {userProfile.name}
                  </h1>
                  <p className="text-text-secondary font-medium">{userProfile.username}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <Icon name="MapPin" size={14} />
                      <span>{userProfile.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Calendar" size={14} />
                      <span>Joined {formatJoinDate(userProfile.joinDate)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 mt-4 md:mt-0">
                  <Button variant="outline" size="sm" iconName="MessageCircle">
                    Message
                  </Button>
                  <Button variant="primary" size="sm" iconName="UserPlus">
                    Follow
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="mt-6">
            <p className="text-text-primary leading-relaxed whitespace-pre-line">
              {userProfile.bio}
            </p>
          </div>

          {/* Badges */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-text-primary mb-3">Badges & Recognition</h3>
            <div className="flex flex-wrap gap-3">
              {userProfile.badges.map((badge, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg border ${getBadgeColor(badge.level)}`}
                >
                  <Icon name={badge.icon} size={16} className={badge.color} />
                  <div>
                    <div className="font-medium text-sm">{badge.name}</div>
                    <div className="text-xs opacity-80">{badge.level}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-text-primary mb-3">Areas of Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {userProfile.expertise.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-surface rounded-lg p-4 shadow-organic">
        <div className="flex space-x-1">
          {[
            { key: 'profile', label: 'Profile Stats', icon: 'BarChart3' },
            { key: 'achievements', label: 'Achievements', icon: 'Award' },
            { key: 'activity', label: 'Recent Activity', icon: 'Activity' },
            { key: 'community', label: 'Community', icon: 'Users' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                activeTab === tab.key
                  ? 'bg-primary text-primary-foreground shadow-organic'
                  : 'text-text-secondary hover:bg-background hover:text-primary'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Profile Stats Tab */}
      {activeTab === 'profile' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(userProfile.stats).map(([key, value]) => (
            <div key={key} className="bg-surface rounded-lg shadow-organic p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">{value}</div>
              <div className="text-text-secondary capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Achievements Tab */}
      {activeTab === 'achievements' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userProfile.achievements.map((achievement) => (
            <div key={achievement.id} className="bg-surface rounded-lg shadow-organic p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-lg ${getAchievementColor(achievement.rarity)}`}>
                  <Icon name={achievement.icon} size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-text-primary">{achievement.title}</h3>
                  <p className="text-sm text-text-secondary">{achievement.description}</p>
                </div>
              </div>
              <div className="text-xs text-text-secondary">
                Earned on {formatTimeAgo(new Date(achievement.date))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Recent Activity Tab */}
      {activeTab === 'activity' && (
        <div className="space-y-4">
          {userProfile.recentActivity.map((activity) => (
            <div key={activity.id} className="bg-surface rounded-lg shadow-organic p-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon name={getActivityIcon(activity.type)} size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-text-primary mb-1">{activity.title}</h3>
                  <p className="text-text-secondary mb-2">{activity.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-text-secondary">
                    <span>{formatTimeAgo(activity.timestamp)}</span>
                    {activity.impact && (
                      <span className="text-accent font-medium">{activity.impact}</span>
                    )}
                    {activity.engagement && (
                      <span className="text-primary font-medium">{activity.engagement}</span>
                    )}
                    {activity.outcome && (
                      <span className="text-secondary font-medium">{activity.outcome}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Community Tab */}
      {activeTab === 'community' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {communityMembers.map((member) => (
            <div key={member.id} className="bg-surface rounded-lg shadow-organic p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-surface ${
                    member.isOnline ? 'bg-green-500' : 'bg-gray-400'
                  }`}></div>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-text-primary">{member.name}</h3>
                  <p className="text-sm text-text-secondary">{member.username}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full">
                      {member.badge}
                    </span>
                    <span className="text-xs text-text-secondary">
                      Rep: {member.reputation}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm font-medium text-text-primary mb-2">Specialties</div>
                <div className="flex flex-wrap gap-1">
                  {member.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-text-secondary mb-4">
                <div className="flex items-center space-x-1">
                  <Icon name="MapPin" size={14} />
                  <span>{member.location}</span>
                </div>
                <span>
                  {member.isOnline ? 'Online' : `Last seen ${member.lastActive}`}
                </span>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" size="sm" iconName="MessageCircle" fullWidth>
                  Message
                </Button>
                <Button variant="primary" size="sm" iconName="UserPlus" fullWidth>
                  Connect
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserProfiles;