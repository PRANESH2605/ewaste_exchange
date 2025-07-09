import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const DiscussionForums = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const forumCategories = [
    {
      id: 'device-repair',
      name: 'Device Repair Tips',
      description: 'Share repair guides, troubleshooting tips, and DIY solutions',
      icon: 'Wrench',
      color: 'bg-blue-100 text-blue-800',
      posts: 234,
      members: 1847,
      moderators: ['TechGuru_Mike', 'RepairQueen_Sarah']
    },
    {
      id: 'local-events',
      name: 'Local Recycling Events',
      description: 'Coordinate community drives, workshops, and awareness campaigns',
      icon: 'Calendar',
      color: 'bg-green-100 text-green-800',
      posts: 156,
      members: 2341,
      moderators: ['EventCoordinator_Lisa', 'GreenLeader_Tom']
    },
    {
      id: 'business-sustainability',
      name: 'Business Sustainability',
      description: 'Corporate e-waste solutions, compliance, and best practices',
      icon: 'Building2',
      color: 'bg-purple-100 text-purple-800',
      posts: 89,
      members: 567,
      moderators: ['CorpSustainability_Alex', 'ComplianceExpert_Jane']
    },
    {
      id: 'policy-advocacy',
      name: 'Policy & Advocacy',
      description: 'Discuss regulations, policy changes, and advocacy efforts',
      icon: 'Scale',
      color: 'bg-orange-100 text-orange-800',
      posts: 67,
      members: 423,
      moderators: ['PolicyAdvocate_David', 'LegalExpert_Maria']
    }
  ];

  const discussionThreads = [
    {
      id: 1,
      category: 'device-repair',
      title: "Complete Guide: Replacing iPhone Battery Without Damaging Components",
      author: {
        name: "TechGuru_Mike",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        badge: "Expert Contributor",
        reputation: 2847
      },
      content: `After 5 years of professional phone repair, I'm sharing my complete step-by-step guide for safely replacing iPhone batteries.\n\n🔧 Tools you'll need:\n• Pentalobe screwdriver set\n• Suction cup tool\n• Plastic prying tools\n• Adhesive strips\n\n⚠️ Safety first:\n• Always power down completely\n• Work in static-free environment\n• Have fire extinguisher nearby (Li-ion safety)\n\nDetailed walkthrough with photos in comments below...`,
      timestamp: new Date(Date.now() - 1800000),
      replies: 23,
      views: 1247,
      likes: 45,
      isPinned: true,
      tags: ['iPhone', 'Battery', 'Repair Guide', 'Safety']
    },
    {
      id: 2,
      category: 'local-events',
      title: "Planning Mega E-Waste Drive - Need Volunteers and Venue Suggestions",
      author: {
        name: "EventCoordinator_Lisa",
        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=150&h=150&fit=crop&crop=face",
        badge: "Community Organizer",
        reputation: 1923
      },
      content: `Planning our biggest community e-waste drive for Earth Day 2024!\n\n📅 Target Date: April 22, 2024\n🎯 Goal: 2,000 devices collected\n👥 Expected Attendance: 500+ people\n\nWhat we need:\n• Large venue (parking lot or community center)\n• 20+ volunteers for sorting and registration\n• Transportation for collected items\n• Refreshment sponsors\n\nAlready confirmed:\n✅ Free data wiping services\n✅ On-site device evaluation\n✅ Educational booths\n✅ Kids' activities area\n\nWho's in? Drop your availability below! 🙋‍♀️`,
      timestamp: new Date(Date.now() - 3600000),
      replies: 31,
      views: 892,
      likes: 67,
      isPinned: false,
      tags: ['Event Planning', 'Volunteers', 'Earth Day', 'Community Drive']
    },
    {
      id: 3,
      category: 'business-sustainability',
      title: "New WEEE Compliance Requirements - What Your Business Needs to Know",
      author: {
        name: "ComplianceExpert_Jane",
        avatar: "https://images.pixabay.com/photo/2017/06/26/02/47/man-2442565_960_720.jpg?w=150&h=150&fit=crop&crop=face",
        badge: "Compliance Specialist",
        reputation: 3156
      },
      content: `Important updates to WEEE (Waste Electrical and Electronic Equipment) regulations effective January 2024.\n\n🔍 Key Changes:\n• Extended producer responsibility requirements\n• New reporting thresholds for SMEs\n• Enhanced data destruction documentation\n• Stricter audit requirements\n\n📋 Action Items for Businesses:\n1. Review current disposal contracts\n2. Update internal compliance procedures\n3. Train staff on new documentation requirements\n4. Schedule compliance audit by Q2 2024\n\n💡 Pro tip: Start preparing now - penalties for non-compliance have increased significantly.\n\nI'll be hosting a free webinar next week covering implementation strategies. Details in my profile.`,
      timestamp: new Date(Date.now() - 7200000),
      replies: 18,
      views: 634,
      likes: 29,
      isPinned: true,
      tags: ['WEEE', 'Compliance', 'Business', 'Regulations']
    },
    {
      id: 4,
      category: 'policy-advocacy',
      title: "Right to Repair Legislation Update - How to Support Local Initiatives",
      author: {
        name: "PolicyAdvocate_David",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
        badge: "Policy Expert",
        reputation: 2234
      },
      content: `Exciting developments in Right to Repair legislation across multiple states!\n\n📈 Current Status:\n• 15 states with active legislation\n• 3 states passed preliminary bills\n• Federal discussion gaining momentum\n\n🎯 How You Can Help:\n• Contact your representatives (template provided)\n• Attend town halls and public hearings\n• Share personal repair success stories\n• Support local repair businesses\n\n📞 This Week's Action:\nCalifornia Assembly Bill 1596 needs public support before Friday's hearing. Takes 2 minutes to submit testimony online.\n\nLink and talking points in comments. Every voice matters! 📢`,
      timestamp: new Date(Date.now() - 10800000),
      replies: 42,
      views: 1156,
      likes: 78,
      isPinned: false,
      tags: ['Right to Repair', 'Legislation', 'Advocacy', 'Policy']
    },
    {
      id: 5,
      category: 'device-repair',
      title: "Laptop Screen Replacement: Common Mistakes and How to Avoid Them",
      author: {
        name: "RepairQueen_Sarah",
        avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?w=150&h=150&fit=crop&crop=face",
        badge: "Repair Specialist",
        reputation: 1876
      },
      content: `After replacing 200+ laptop screens, here are the most common mistakes I see:\n\n❌ Mistake #1: Not checking cable compatibility\n✅ Solution: Always verify LCD cable connector type before ordering\n\n❌ Mistake #2: Forcing connectors\n✅ Solution: Gentle pressure + proper alignment = success\n\n❌ Mistake #3: Ignoring ESD protection\n✅ Solution: Anti-static wrist strap is your friend\n\n❌ Mistake #4: Rushing the bezel removal\n✅ Solution: Take your time with plastic clips - they break easily\n\n💡 Pro tip: Take photos during disassembly. Your future self will thank you during reassembly!\n\nWhat's your biggest repair challenge? Let's troubleshoot together! 🔧`,
      timestamp: new Date(Date.now() - 14400000),
      replies: 16,
      views: 723,
      likes: 34,
      isPinned: false,
      tags: ['Laptop', 'Screen Repair', 'Troubleshooting', 'Tips']
    }
  ];

  const filteredThreads = activeCategory === 'all' 
    ? discussionThreads 
    : discussionThreads.filter(thread => thread.category === activeCategory);

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    
    if (hours < 1) return 'Just now';
    if (hours === 1) return '1 hour ago';
    if (hours < 24) return `${hours} hours ago`;
    
    const days = Math.floor(hours / 24);
    if (days === 1) return '1 day ago';
    return `${days} days ago`;
  };

  return (
    <div className="space-y-6">
      {/* Forum Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {forumCategories.map((category) => (
          <div
            key={category.id}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-smooth ${
              activeCategory === category.id
                ? 'border-primary bg-primary/10' :'border-border bg-surface hover:border-primary/50'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className={`p-2 rounded-lg ${category.color}`}>
                <Icon name={category.icon} size={20} />
              </div>
              <h3 className="font-semibold text-text-primary">{category.name}</h3>
            </div>
            
            <p className="text-sm text-text-secondary mb-4">{category.description}</p>
            
            <div className="flex justify-between text-xs text-text-secondary">
              <span>{category.posts} posts</span>
              <span>{category.members} members</span>
            </div>
            
            <div className="mt-3 pt-3 border-t border-border">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={14} className="text-accent" />
                <span className="text-xs text-text-secondary">
                  Moderated by {category.moderators.join(', ')}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between bg-surface rounded-lg p-4 shadow-organic">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
              activeCategory === 'all' ?'bg-primary text-primary-foreground' :'text-text-secondary hover:text-primary'
            }`}
          >
            All Discussions
          </button>
          {forumCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-text-secondary hover:text-primary'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <Button variant="primary" iconName="Plus" size="sm">
          New Discussion
        </Button>
      </div>

      {/* Discussion Threads */}
      <div className="space-y-4">
        {filteredThreads.map((thread) => (
          <div key={thread.id} className="bg-surface rounded-lg shadow-organic overflow-hidden">
            <div className="p-6">
              {/* Thread Header */}
              <div className="flex items-start space-x-4 mb-4">
                <Image
                  src={thread.author.avatar}
                  alt={thread.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    {thread.isPinned && (
                      <Icon name="Pin" size={16} className="text-accent" />
                    )}
                    <h3 className="text-lg font-semibold text-text-primary hover:text-primary cursor-pointer">
                      {thread.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-text-secondary">
                    <span className="font-medium">{thread.author.name}</span>
                    <span className="px-2 py-1 bg-accent/20 text-accent rounded-full text-xs">
                      {thread.author.badge}
                    </span>
                    <span>Rep: {thread.author.reputation}</span>
                    <span>{formatTimeAgo(thread.timestamp)}</span>
                  </div>
                </div>
              </div>

              {/* Thread Content */}
              <div className="mb-4">
                <div className="whitespace-pre-line text-text-primary leading-relaxed">
                  {thread.content}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {thread.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Thread Stats */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2 text-text-secondary">
                    <Icon name="MessageCircle" size={16} />
                    <span className="text-sm">{thread.replies} replies</span>
                  </div>
                  <div className="flex items-center space-x-2 text-text-secondary">
                    <Icon name="Eye" size={16} />
                    <span className="text-sm">{thread.views} views</span>
                  </div>
                  <div className="flex items-center space-x-2 text-text-secondary">
                    <Icon name="Heart" size={16} />
                    <span className="text-sm">{thread.likes} likes</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" iconName="Heart">
                    Like
                  </Button>
                  <Button variant="outline" size="sm" iconName="MessageCircle">
                    Reply
                  </Button>
                  <Button variant="ghost" size="sm" iconName="Share2">
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center py-8">
        <Button variant="outline" iconName="RefreshCw">
          Load More Discussions
        </Button>
      </div>
    </div>
  );
};

export default DiscussionForums;