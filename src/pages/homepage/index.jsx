import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesDiscovery from './components/ServicesDiscovery';
import CommunityImpact from './components/CommunityImpact';
import EducationPreview from './components/EducationPreview';
import SocialProof from './components/SocialProof';

const Homepage = () => {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>eWaste Exchange - Technology for a Sustainable Tomorrow</title>
        <meta 
          name="description" 
          content="Transform your electronic waste into environmental impact. Join 50,000+ users in sustainable technology practices with secure pickup, recycling, and marketplace solutions." 
        />
        <meta 
          name="keywords" 
          content="e-waste recycling, electronic waste, sustainable technology, device recycling, environmental impact, circular economy" 
        />
        <meta property="og:title" content="eWaste Exchange - Technology for a Sustainable Tomorrow" />
        <meta 
          property="og:description" 
          content="Transform your electronic waste into environmental impact. Join our community of environmental champions making a difference." 
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="/homepage" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <div className="scroll-reveal">
            <HeroSection />
          </div>

          {/* Services Discovery */}
          <div className="scroll-reveal">
            <ServicesDiscovery />
          </div>

          {/* Community Impact */}
          <div className="scroll-reveal">
            <CommunityImpact />
          </div>

          {/* Education Preview */}
          <div className="scroll-reveal">
            <EducationPreview />
          </div>

          {/* Social Proof */}
          <div className="scroll-reveal">
            <SocialProof />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold">eWaste Exchange</h3>
                    <p className="text-primary-foreground/80 text-sm">Sustainable Technology</p>
                  </div>
                </div>
                <p className="text-primary-foreground/80 mb-4 max-w-md">
                  Transforming electronic waste into environmental progress through innovative recycling solutions and community engagement.
                </p>
                <div className="flex space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-heading font-bold">247K+</div>
                    <div className="text-xs text-primary-foreground/80">Devices Recycled</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-heading font-bold">1.2K</div>
                    <div className="text-xs text-primary-foreground/80">Tons CO₂ Saved</div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/service-discovery" className="text-primary-foreground/80 hover:text-white transition-colors">Find Services</a></li>
                  <li><a href="/impact-dashboard" className="text-primary-foreground/80 hover:text-white transition-colors">Track Impact</a></li>
                  <li><a href="/marketplace" className="text-primary-foreground/80 hover:text-white transition-colors">Marketplace</a></li>
                  <li><a href="/community-platform" className="text-primary-foreground/80 hover:text-white transition-colors">Community</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-heading font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-sm text-primary-foreground/80">
                  <p>support@ewasteexchange.com</p>
                  <p>1-800-EWASTE-1</p>
                  <p>Available 24/7</p>
                </div>
              </div>
            </div>

            <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
              <p>&copy; {new Date().getFullYear()} eWaste Exchange. All rights reserved. | Privacy Policy | Terms of Service</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;