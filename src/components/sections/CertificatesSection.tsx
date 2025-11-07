'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import { useCertificates } from '@/lib/graphql/hooks';

export default function CertificatesSection() {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});
  const [activeFilter, setActiveFilter] = useState('all');

  // Fetch certificates from GraphQL backend
  const { data: certificates, loading, error } = useCertificates();

  const isImageError = (certId: string) => imageErrors[certId] || false;

  const handleImageError = (certId: string) => {
    setImageErrors(prev => ({ ...prev, [certId]: true }));
  };

  // Handle loading state
  if (loading) {
    return (
      <SectionWrapper id="certificates" padding="lg" showBackground>
        <SectionHeader
          title="Certifications & Achievements"
          subtitle="Professional credentials and recognitions"
        />
        <div className="text-center py-20">
          <p className="text-muted-foreground">Loading certificates...</p>
        </div>
      </SectionWrapper>
    );
  }

  // Handle error state
  if (error || !certificates) {
    return (
      <SectionWrapper id="certificates" padding="lg" showBackground>
        <SectionHeader
          title="Certifications & Achievements"
          subtitle="Professional credentials and recognitions"
        />
        <div className="text-center py-20">
          <p className="text-muted-foreground">Unable to load certificates at the moment.</p>
        </div>
      </SectionWrapper>
    );
  }

  // Now using certificates from GraphQL backend

  const categories = [
    { id: 'all', name: 'All', count: certificates.length },
    { id: 'COMPETITION', name: 'Competitions', count: certificates.filter(c => c.category === 'COMPETITION').length },
    { id: 'ACADEMIC', name: 'Academic', count: certificates.filter(c => c.category === 'ACADEMIC').length },
    { id: 'RECOGNITION', name: 'Recognition', count: certificates.filter(c => c.category === 'RECOGNITION').length }
  ];

  const filteredCertificates = activeFilter === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeFilter);

  const getCategoryColor = (category: string) => {
    switch (category.toUpperCase()) {
      case 'COMPETITION':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/20';
      case 'ACADEMIC':
        return 'bg-indigo-500/20 text-indigo-400 border-indigo-500/20';
      case 'RECOGNITION':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/20';
      default:
        return 'bg-accent-text/20 text-accent-text border-accent-text/20';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority.toUpperCase()) {
      case 'HIGH':
        return 'bg-red-500/20 text-red-400 border-red-500/20';
      case 'MEDIUM':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/20';
      case 'LOW':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/20';
      default:
        return 'bg-accent-text/20 text-accent-text border-accent-text/20';
    }
  };

  return (
    <SectionWrapper id="certificates" padding="lg" showBackground>
      <SectionHeader
        title="Achievements & Certifications"
        subtitle="Professional certifications, academic achievements, hackathons, and recognitions"
        icon={
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        }
        variant="primary"
      />

      <div className="space-y-8">
        {/* Enhanced Category Filters */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Browse by Category</h3>
            <p className="text-accent-text text-sm">Filter achievements by type and focus area</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`p-4 rounded-2xl border transition-all duration-300 transform group relative overflow-hidden ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-primary-button to-primary-button/90 text-white shadow-lg shadow-primary-button/25 border-primary-button/30 scale-105'
                    : 'bg-gradient-to-br from-secondary-bg/80 to-secondary-bg/50 text-foreground border-secondary-bg/30 hover:border-primary-button/30 hover:bg-secondary-bg/70 hover:scale-105 hover:shadow-lg hover:shadow-primary-button/10'
                }`}
              >
                {/* Background Animation */}
                <div className={`absolute inset-0 transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-white/10 to-white/5'
                    : 'bg-gradient-to-r from-primary-button/5 to-transparent opacity-0 group-hover:opacity-100'
                }`}></div>
                
                <div className="text-center space-y-2 relative z-10">
                  {/* Category Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto transition-all duration-300 transform ${
                    activeFilter === category.id
                      ? 'bg-white/20 scale-110 shadow-lg'
                      : 'bg-primary-button/20 group-hover:bg-primary-button/30 group-hover:scale-110 group-hover:shadow-md'
                  }`}>
                    {category.id === 'all' && (
                      <svg className={`w-6 h-6 transition-all duration-300 ${
                        activeFilter === category.id ? 'rotate-12' : 'group-hover:rotate-6'
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    )}

                    {category.id === 'COMPETITION' && (
                      <svg className={`w-6 h-6 transition-all duration-300 ${
                        activeFilter === category.id ? 'animate-pulse' : 'group-hover:animate-pulse'
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {category.id === 'ACADEMIC' && (
                      <svg className={`w-6 h-6 transition-all duration-300 ${
                        activeFilter === category.id ? 'rotate-12' : 'group-hover:rotate-6'
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    )}

                    {category.id === 'RECOGNITION' && (
                      <svg className={`w-6 h-6 transition-all duration-300 ${
                        activeFilter === category.id ? 'animate-bounce' : 'group-hover:animate-bounce'
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    )}
                  </div>
                  
                  {/* Category Name */}
                  <div className="transition-all duration-300">
                    <h4 className={`font-semibold text-sm transition-all duration-300 ${
                      activeFilter === category.id 
                        ? 'text-white' 
                        : 'text-foreground group-hover:text-primary-button'
                    }`}>
                      {category.name}
                    </h4>
                    <p className={`text-xs transition-all duration-300 ${
                      activeFilter === category.id 
                        ? 'text-white/80' 
                        : 'text-accent-text group-hover:text-primary-button/70'
                    }`}>
                      {category.count} {category.count === 1 ? 'item' : 'items'}
                    </p>
                  </div>
                </div>

                {/* Ripple Effect on Click */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 transform scale-0 transition-transform duration-300 ease-out group-active:scale-100"></div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCertificates.map((cert) => (
            <div key={cert.id} className="bg-gradient-to-br from-secondary-bg/80 to-secondary-bg/50 p-6 rounded-2xl border border-secondary-bg/40 hover:border-primary-button/30 transition-all duration-300 shadow-lg hover:shadow-xl group">
              <div className="flex items-start space-x-4">
                {/* Certificate Logo */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary-button/20 to-primary-button/10 rounded-xl flex items-center justify-center border border-primary-button/20 flex-shrink-0">
                  {!isImageError(cert.id) ? (
                    <img
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      className="w-10 h-10 object-contain"
                      onError={() => handleImageError(cert.id)}
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gradient-to-br from-accent-text/20 to-accent-text/10 rounded-lg flex items-center justify-center">
                      <span className="text-accent-text font-bold text-lg">
                        {cert.issuer.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Certificate Details */}
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-white transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-accent-text text-sm font-medium">{cert.issuer}</p>
                  </div>

                  <p className="text-accent-text text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-button/20 text-primary-button text-xs font-medium rounded-lg border border-primary-button/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Certificate Info */}
                  <div className="flex items-center justify-between pt-2 border-t border-secondary-bg/30">
                    <div className="flex items-center space-x-4 text-xs">
                      <span className="text-accent-text">
                        <span className="font-semibold">ID:</span> {cert.credentialId}
                      </span>
                      {cert.validUntil !== 'N/A' && (
                        <span className="text-accent-text">
                          <span className="font-semibold">Valid until:</span> {cert.validUntil}
                        </span>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <span className={`px-3 py-1 text-xs font-medium rounded-lg border ${getCategoryColor(cert.category)}`}>
                        {cert.category}
                      </span>
                      <span className={`px-3 py-1 text-xs font-medium rounded-lg border ${getPriorityBadge(cert.priority)}`}>
                        {cert.priority}
                      </span>
                    </div>
                  </div>

                  {/* Verify Button */}
                  <div className="pt-3 border-t border-secondary-bg/20">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-accent-text font-medium">
                        {cert.category.charAt(0).toUpperCase() + cert.category.slice(1).toLowerCase()} • {cert.issuedDate}
                      </span>
                      <div className="flex space-x-2">
                        <a
                          href={`mailto:nsengiyumvaclement247@gmail.com?subject=Verification Request: ${cert.title}&body=Hello,%0D%0A%0D%0AI would like to verify the following achievement:%0D%0A%0D%0ATitle: ${cert.title}%0D%0AIssuer: ${cert.issuer}%0D%0ACredential ID: ${cert.credentialId || 'N/A'}%0D%0ADate: ${cert.issuedDate}%0D%0A%0D%0APlease provide verification details.%0D%0A%0D%0AThank you.`}
                          className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-purple-500/10 text-purple-400 text-xs font-medium rounded-lg border border-purple-500/20 hover:bg-purple-500/30 hover:border-purple-500/30 transition-all duration-300 flex items-center space-x-1"
                        >
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          <span>Verify</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-secondary-bg/70 to-secondary-bg/50 rounded-2xl p-8 border border-secondary-bg/40 text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">Continuously Learning & Growing</h3>
          <p className="text-accent-text mb-6 max-w-2xl mx-auto">
            I believe in continuous learning and staying updated with the latest technologies. 
            These achievements validate my expertise and commitment to professional development across various domains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:nsengiyumvaclement247@gmail.com?subject=Achievement Verification"
              className="bg-gradient-to-r from-primary-button to-primary-button/90 text-white px-8 py-3 rounded-xl font-semibold hover:from-primary-button/90 hover:to-primary-button/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Verify Achievements</span>
              </div>
            </a>
            <a 
              href="#contact"
              className="bg-gradient-to-r from-secondary-bg/60 to-secondary-bg/40 text-foreground px-8 py-3 rounded-xl font-semibold border border-secondary-bg/30 hover:border-primary-button/30 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>Discuss Opportunities</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
