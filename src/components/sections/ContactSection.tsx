'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all fields');
      return;
    }
    
    // Create mailto link for now (can be replaced with API call later)
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <SectionWrapper id="contact" padding="lg" showBackground>
      <SectionHeader
        title="Get In Touch"
        subtitle="Let's discuss opportunities and collaborations"
        icon={
          <svg className="w-6 h-6 text-icon-text" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        }
        variant="primary"
      />
      
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-secondary-bg/60 p-8 rounded-2xl border border-secondary-bg/40 hover:border-primary-button/20 transition-all duration-300 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-icon-bg rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-icon-text" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Send Message
                </h3>
                <p className="text-accent-text text-sm">I&apos;ll get back to you as soon as possible</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-secondary-bg/60 border border-secondary-bg/30 rounded-xl text-foreground focus:outline-none focus:border-primary-button/50 focus:ring-2 focus:ring-primary-button/20 transition-all duration-300"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-secondary-bg/60 border border-secondary-bg/30 rounded-xl text-foreground focus:outline-none focus:border-primary-button/50 focus:ring-2 focus:ring-primary-button/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary-bg/60 border border-secondary-bg/30 rounded-xl text-foreground focus:outline-none focus:border-primary-button/50 focus:ring-2 focus:ring-primary-button/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-button text-white py-4 px-6 rounded-xl font-semibold hover:bg-primary-button/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>Send Message</span>
                </div>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-secondary-bg/60 p-8 rounded-2xl border border-secondary-bg/40 hover:border-primary-button/20 transition-all duration-300 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-icon-bg rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-icon-text" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Contact Information
                </h3>
                <p className="text-accent-text text-sm">Reach out through any of these channels</p>
              </div>
            </div>

            <div className="space-y-6">
              <a href="mailto:nsengiyumvaclement247@gmail.com" className="flex items-center space-x-4 p-4 bg-secondary-bg/40 rounded-xl border border-secondary-bg/20 hover:border-primary-button/30 hover:bg-secondary-bg/50 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-icon-bg rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-icon-text" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-accent-text">Email</p>
                  <p className="text-foreground font-medium hover:text-primary-button transition-colors duration-300">nsengiyumvaclement247@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+250791130583" className="flex items-center space-x-4 p-4 bg-secondary-bg/40 rounded-xl border border-secondary-bg/20 hover:border-primary-button/30 hover:bg-secondary-bg/50 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-icon-bg rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-icon-text" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-accent-text">Phone</p>
                  <p className="text-foreground font-medium hover:text-primary-button transition-colors duration-300">+250 791 130 583</p>
                </div>
              </a>
              
              <a href="tel:+250726542585" className="flex items-center space-x-4 p-4 bg-secondary-bg/40 rounded-xl border border-secondary-bg/20 hover:border-primary-button/30 hover:bg-secondary-bg/50 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-icon-bg rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-icon-text" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-accent-text">Phone</p>
                  <p className="text-foreground font-medium hover:text-primary-button transition-colors duration-300">+250 726 542 585</p>
                </div>
              </a>
              
              <a href="https://maps.google.com/?q=Kigali,Rwanda" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-secondary-bg/40 rounded-xl border border-secondary-bg/20 hover:border-primary-button/30 hover:bg-secondary-bg/50 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-icon-bg rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-icon-text" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-accent-text">Location</p>
                  <p className="text-foreground font-medium hover:text-primary-button transition-colors duration-300">Kigali, Rwanda</p>
                </div>
              </a>
            </div>
            
            <div className="mt-8">
              <h4 className="text-base font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/mbaduko" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub profile"
                  className="w-12 h-12 bg-icon-bg rounded-lg flex items-center justify-center hover:bg-primary-button/80 hover:scale-110 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-icon-text" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/in/mbaduko" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit my LinkedIn profile"
                  className="w-12 h-12 bg-icon-bg rounded-lg flex items-center justify-center hover:bg-primary-button/80 hover:scale-110 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-icon-text" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-secondary-bg/60 rounded-2xl p-8 border border-secondary-bg/40 text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">Ready to Start a Project?</h3>
          <p className="text-accent-text mb-6 max-w-2xl mx-auto">
            I&apos;m always excited to work on new projects and collaborate with amazing teams. 
            Whether you have a specific project in mind or just want to discuss possibilities, 
            I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:nsengiyumvaclement247@gmail.com"
              className="bg-primary-button text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-button/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>Send Email</span>
              </div>
            </a>
            <a 
              href="tel:+250791130583"
              className="bg-secondary-bg/50 text-foreground px-8 py-3 rounded-xl font-semibold border border-secondary-bg/30 hover:border-primary-button/30 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Call Now</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
