import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProof = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [communitySize, setCommunitySize] = useState(50247);

  const partnerLogos = [
    {
      name: "Apple",
      logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=120&h=60&fit=crop",
      category: "Technology Partner"
    },
    {
      name: "Microsoft",
      logo: "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?w=120&h=60&fit=crop",
      category: "Enterprise Partner"
    },
    {
      name: "Dell",
      logo: "https://images.pixabay.com/photo/2020/05/11/06/20/dell-5158137_1280.jpg?w=120&h=60&fit=crop",
      category: "Hardware Partner"
    },
    {
      name: "HP",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=120&h=60&fit=crop",
      category: "Manufacturing Partner"
    },
    {
      name: "Lenovo",
      logo: "https://images.pexels.com/photos/18105/pexels-photo.jpg?w=120&h=60&fit=crop",
      category: "Technology Partner"
    },
    {
      name: "Samsung",
      logo: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=120&h=60&fit=crop",
      category: "Mobile Partner"
    }
  ];

  const certifications = [
    {
      name: "EPA Certified",
      icon: "Shield",
      description: "Environmental Protection Agency certified processes",
      color: "success"
    },
    {
      name: "ISO 14001",
      icon: "Award",
      description: "International environmental management standards",
      color: "primary"
    },
    {
      name: "R2 Certified",
      icon: "Recycle",
      description: "Responsible Recycling certification",
      color: "accent"
    },
    {
      name: "SOC 2 Type II",
      icon: "Lock",
      description: "Security and data protection compliance",
      color: "conversion"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Jennifer Walsh",
      title: "Sustainability Director",
      company: "TechCorp Industries",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e8c8b4?w=80&h=80&fit=crop&crop=face",
      content: "eWaste Exchange transformed our corporate sustainability program. We've processed over 10,000 devices and achieved 100% compliance with environmental regulations.",
      rating: 5,
      impact: "10,000+ devices processed"
    },
    {
      id: 2,
      name: "Robert Chen",
      title: "IT Manager",
      company: "Global Solutions LLC",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      content: "The enterprise pickup service is exceptional. Secure data wiping, detailed reporting, and seamless logistics. Our go-to solution for responsible e-waste management.",
      rating: 5,
      impact: "Zero data breaches"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      title: "Environmental Coordinator",
      company: "Green University",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      content: "We\'ve integrated eWaste Exchange into our campus sustainability initiatives. Students love the educational resources and the impact tracking features.",
      rating: 5,
      impact: "5,000+ students engaged"
    }
  ];

  const mediaRecognition = [
    {
      outlet: "TechCrunch",
      headline: "Leading the E-Waste Revolution",
      date: "March 2024",
      type: "Feature Article"
    },
    {
      outlet: "Environmental Science",
      headline: "Innovative Circular Economy Platform",
      date: "February 2024",
      type: "Research Citation"
    },
    {
      outlet: "Forbes",
      headline: "Top 10 Sustainability Startups",
      date: "January 2024",
      type: "Recognition"
    },
    {
      outlet: "Wired",
      headline: "The Future of Electronic Recycling",
      date: "December 2023",
      type: "Technology Review"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    const communityInterval = setInterval(() => {
      setCommunitySize(prev => prev + Math.floor(Math.random() * 3));
    }, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(communityInterval);
    };
  }, [testimonials.length]);

  const getColorClasses = (color) => {
    const colorMap = {
      primary: 'text-primary bg-primary/10',
      success: 'text-success bg-success/10',
      accent: 'text-accent bg-accent/10',
      conversion: 'text-conversion bg-conversion/10'
    };
    return colorMap[color] || colorMap.primary;
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-warning fill-current' : 'text-border'}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Live Community Counter */}
        <div className="text-center mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-organic max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm text-text-secondary">Live Community</span>
            </div>
            <div className="text-4xl font-heading font-bold text-primary mb-2 animate-count-up">
              {communitySize.toLocaleString()}+
            </div>
            <p className="text-text-secondary">
              Environmental champions making a difference every day
            </p>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mb-16">
          <h3 className="text-center text-xl font-heading font-semibold text-primary mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partnerLogos.map((partner, index) => (
              <div
                key={index}
                className="group text-center"
              >
                <div className="bg-white rounded-lg p-4 shadow-organic hover:shadow-layered transition-all duration-300 mb-2">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="text-xs text-text-secondary">{partner.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-center text-xl font-heading font-semibold text-primary mb-8">
            Certified & Compliant
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-organic hover:shadow-layered transition-all duration-300 text-center group"
              >
                <div className={`w-12 h-12 rounded-lg ${getColorClasses(cert.color)} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={cert.icon} size={24} />
                </div>
                <h4 className="font-heading font-semibold text-primary mb-2">
                  {cert.name}
                </h4>
                <p className="text-sm text-text-secondary">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mb-16">
          <h3 className="text-center text-xl font-heading font-semibold text-primary mb-8">
            What Our Partners Say
          </h3>
          <div className="bg-white rounded-2xl p-8 shadow-layered max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              <blockquote className="text-lg text-text-primary italic leading-relaxed mb-6">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-heading font-semibold text-primary">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {testimonials[currentTestimonial].title}
                  </div>
                  <div className="text-sm text-accent">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>

              <div className="mt-4 inline-flex items-center space-x-2 bg-success/10 text-success px-3 py-1 rounded-full text-sm">
                <Icon name="TrendingUp" size={14} />
                <span>{testimonials[currentTestimonial].impact}</span>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-primary w-8' :'bg-border hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Media Recognition */}
        <div>
          <h3 className="text-center text-xl font-heading font-semibold text-primary mb-8">
            Media Recognition
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaRecognition.map((media, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-organic hover:shadow-layered transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="font-heading font-semibold text-primary">
                    {media.outlet}
                  </div>
                  <div className="text-xs text-text-secondary bg-surface px-2 py-1 rounded">
                    {media.type}
                  </div>
                </div>
                <h4 className="text-sm font-medium text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {media.headline}
                </h4>
                <div className="text-xs text-text-secondary flex items-center">
                  <Icon name="Calendar" size={12} className="mr-1" />
                  {media.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;