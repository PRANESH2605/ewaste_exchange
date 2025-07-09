import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const EducationPreview = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const trendingTopics = [
    {
      id: 1,
      title: "The Hidden Cost of Smartphone Upgrades",
      category: "Consumer Guide",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=250&fit=crop",
      excerpt: "Discover the environmental impact of frequent phone upgrades and learn sustainable alternatives that save money and reduce waste.",
      tags: ["Smartphones", "Sustainability", "Cost Analysis"],
      trending: true,
      views: "12.4K",
      difficulty: "Beginner"
    },
    {
      id: 2,
      title: "Corporate E-Waste Compliance 2024",
      category: "Business Guide",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=400&h=250&fit=crop",
      excerpt: "Navigate the latest regulations and best practices for enterprise e-waste management with our comprehensive compliance guide.",
      tags: ["Compliance", "Enterprise", "Regulations"],
      trending: true,
      views: "8.7K",
      difficulty: "Advanced"
    },
    {
      id: 3,
      title: "Circular Economy in Tech: A Beginner\'s Guide",
      category: "Sustainability",
      readTime: "6 min read",
      image: "https://images.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg?w=400&h=250&fit=crop",
      excerpt: "Understanding how circular economy principles are revolutionizing the technology industry and creating sustainable solutions.",
      tags: ["Circular Economy", "Technology", "Innovation"],
      trending: false,
      views: "15.2K",
      difficulty: "Intermediate"
    },
    {
      id: 4,
      title: "Data Security in E-Waste Disposal",
      category: "Security",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      excerpt: "Protect your sensitive information with proper data wiping techniques and secure disposal methods for electronic devices.",
      tags: ["Data Security", "Privacy", "Best Practices"],
      trending: true,
      views: "9.8K",
      difficulty: "Intermediate"
    }
  ];

  const learningPaths = [
    {
      id: 1,
      title: "E-Waste Fundamentals",
      description: "Master the basics of electronic waste management",
      modules: 6,
      duration: "2 hours",
      level: "Beginner",
      icon: "BookOpen",
      color: "primary"
    },
    {
      id: 2,
      title: "Business Sustainability",
      description: "Implement sustainable practices in your organization",
      modules: 8,
      duration: "3 hours",
      level: "Intermediate",
      icon: "Building",
      color: "accent"
    },
    {
      id: 3,
      title: "Circular Economy Expert",
      description: "Advanced strategies for circular technology systems",
      modules: 12,
      duration: "5 hours",
      level: "Advanced",
      icon: "Recycle",
      color: "success"
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-success bg-success/10';
      case 'Intermediate': return 'text-warning bg-warning/10';
      case 'Advanced': return 'text-error bg-error/10';
      default: return 'text-primary bg-primary/10';
    }
  };

  const getColorClasses = (color) => {
    const colorMap = {
      primary: 'bg-primary text-primary-foreground',
      accent: 'bg-accent text-accent-foreground',
      success: 'bg-success text-success-foreground'
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
            Learn & Lead the Change
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Stay informed with the latest insights on sustainable technology and e-waste management
          </p>
        </div>

        {/* Trending Topics */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-heading font-semibold text-primary">
              Trending Topics
            </h3>
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
              <Icon name="TrendingUp" size={16} />
              <span>Updated daily</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingTopics.map((topic) => (
              <article
                key={topic.id}
                className="bg-white rounded-xl shadow-organic hover:shadow-layered transition-all duration-300 group cursor-pointer overflow-hidden"
                onMouseEnter={() => setSelectedTopic(topic.id)}
                onMouseLeave={() => setSelectedTopic(null)}
              >
                {/* Article Image */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Trending Badge */}
                  {topic.trending && (
                    <div className="absolute top-3 left-3 bg-conversion text-conversion-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Icon name="Flame" size={12} />
                      <span>Trending</span>
                    </div>
                  )}

                  {/* Category */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-text-primary px-2 py-1 rounded-full text-xs font-medium">
                    {topic.category}
                  </div>

                  {/* Difficulty Level */}
                  <div className={`absolute bottom-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(topic.difficulty)}`}>
                    {topic.difficulty}
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <h4 className="text-lg font-heading font-semibold text-primary mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                    {topic.title}
                  </h4>
                  <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                    {topic.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {topic.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-surface text-text-secondary px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Article Meta */}
                  <div className="flex items-center justify-between text-xs text-text-secondary">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center space-x-1">
                        <Icon name="Clock" size={12} />
                        <span>{topic.readTime}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Eye" size={12} />
                        <span>{topic.views}</span>
                      </span>
                    </div>
                    <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Learning Paths */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-2">
              Structured Learning Paths
            </h3>
            <p className="text-text-secondary">
              Comprehensive courses designed for different expertise levels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {learningPaths.map((path) => (
              <div
                key={path.id}
                className="bg-white rounded-xl p-6 shadow-organic hover:shadow-layered transition-all duration-300 group"
              >
                {/* Path Icon */}
                <div className={`w-12 h-12 rounded-lg ${getColorClasses(path.color)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={path.icon} size={24} />
                </div>

                {/* Path Content */}
                <h4 className="text-lg font-heading font-semibold text-primary mb-2">
                  {path.title}
                </h4>
                <p className="text-text-secondary text-sm mb-4">
                  {path.description}
                </p>

                {/* Path Stats */}
                <div className="flex items-center justify-between text-sm text-text-secondary mb-4">
                  <span className="flex items-center space-x-1">
                    <Icon name="BookOpen" size={14} />
                    <span>{path.modules} modules</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>{path.duration}</span>
                  </span>
                </div>

                {/* Level Badge */}
                <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mb-4 ${getDifficultyColor(path.level)}`}>
                  {path.level}
                </div>

                {/* Start Button */}
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  iconName="Play"
                  iconPosition="left"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Start Learning
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Education CTA */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-organic">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Ready to Become an E-Waste Expert?
            </h3>
            <p className="text-text-secondary mb-6">
              Access our complete library of resources, interactive tools, and expert-led courses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                iconName="GraduationCap"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-organic"
              >
                Explore All Courses
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="border-accent text-accent hover:bg-accent/10"
              >
                Download Resources
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationPreview;