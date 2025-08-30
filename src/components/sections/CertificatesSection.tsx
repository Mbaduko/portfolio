'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';

export default function CertificatesSection() {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});
  const [activeFilter, setActiveFilter] = useState('all');

  const isImageError = (certId: string) => imageErrors[certId] || false;

  const handleImageError = (certId: string) => {
    setImageErrors(prev => ({ ...prev, [certId]: true }));
  };

  const certificates = [
    // Professional Certifications
    {
      id: 'aws-saa',
      title: 'AWS Solutions Architect Associate',
      issuer: 'Amazon Web Services',
      date: '2024',
      category: 'professional',
      type: 'certification',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
      description: 'Comprehensive knowledge of AWS services, architecture best practices, and cloud solutions design.',
      skills: ['AWS', 'Cloud Architecture', 'Solutions Design', 'DevOps'],
      credentialId: 'AWS-SAA-2024-001',
      status: 'Active',
      validUntil: '2027',
      priority: 'high'
    },
    {
      id: 'kubernetes',
      title: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: '2024',
      category: 'professional',
      type: 'certification',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      description: 'Expert-level knowledge of Kubernetes cluster administration, troubleshooting, and best practices.',
      skills: ['Kubernetes', 'Container Orchestration', 'DevOps', 'Cluster Management'],
      credentialId: 'CKA-2024-002',
      status: 'Active',
      validUntil: '2027',
      priority: 'high'
    },
    {
      id: 'docker',
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: '2023',
      category: 'professional',
      type: 'certification',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      description: 'Proficiency in containerization, Docker ecosystem, and container orchestration fundamentals.',
      skills: ['Docker', 'Containerization', 'DevOps', 'CI/CD'],
      credentialId: 'DCA-2023-003',
      status: 'Active',
      validUntil: '2026',
      priority: 'high'
    },
    {
      id: 'react',
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2023',
      category: 'professional',
      type: 'certification',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      description: 'Advanced React development skills including hooks, context, and modern React patterns.',
      skills: ['React', 'JavaScript', 'Frontend Development', 'UI/UX'],
      credentialId: 'META-REACT-2023-004',
      status: 'Active',
      validUntil: '2026',
      priority: 'medium'
    },
    {
      id: 'nodejs',
      title: 'Node.js Developer Certification',
      issuer: 'OpenJS Foundation',
      date: '2023',
      category: 'professional',
      type: 'certification',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      description: 'Server-side JavaScript development, API design, and backend architecture expertise.',
      skills: ['Node.js', 'JavaScript', 'Backend Development', 'API Design'],
      credentialId: 'NODEJS-2023-005',
      status: 'Active',
      validUntil: '2026',
      priority: 'medium'
    },
    {
      id: 'typescript',
      title: 'TypeScript Developer Certification',
      issuer: 'Microsoft',
      date: '2023',
      category: 'professional',
      type: 'certification',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      description: 'Advanced TypeScript development with type safety, interfaces, and modern JavaScript features.',
      skills: ['TypeScript', 'JavaScript', 'Type Safety', 'Frontend Development'],
      credentialId: 'MS-TS-2023-006',
      status: 'Active',
      validUntil: '2026',
      priority: 'medium'
    },

    // Hackathons & Competitions
    {
      id: 'hackathon-2024',
      title: '1st Place - AI Innovation Hackathon',
      issuer: 'TechCrunch Disrupt',
      date: '2024',
      category: 'competition',
      type: 'hackathon',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      description: 'Won first place for developing an AI-powered healthcare solution using machine learning and cloud technologies.',
      skills: ['AI/ML', 'Python', 'Healthcare Tech', 'Innovation'],
      credentialId: 'TC-HACK-2024-001',
      status: 'Achievement',
      validUntil: 'N/A',
      priority: 'high'
    },
    {
      id: 'coding-competition',
      title: 'Top 10 - Global Coding Competition',
      issuer: 'Google Code Jam',
      date: '2023',
      category: 'competition',
      type: 'coding',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
      description: 'Reached the top 10 in Google Code Jam, demonstrating exceptional problem-solving and algorithmic skills.',
      skills: ['Algorithms', 'Problem Solving', 'Competitive Programming', 'Data Structures'],
      credentialId: 'GCJ-2023-TOP10',
      status: 'Achievement',
      validUntil: 'N/A',
      priority: 'high'
    },

    // Academic Achievements
    {
      id: 'academic-excellence',
      title: 'Dean\'s List - Academic Excellence',
      issuer: 'University of Rwanda',
      date: '2023',
      category: 'academic',
      type: 'achievement',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graduation-cap/graduation-cap-original.svg',
      description: 'Consistently maintained a GPA of 3.8+ and recognized for outstanding academic performance.',
      skills: ['Academic Excellence', 'Leadership', 'Research', 'Innovation'],
      credentialId: 'UR-DEANS-2023',
      status: 'Achievement',
      validUntil: 'N/A',
      priority: 'medium'
    },
    {
      id: 'research-paper',
      title: 'Published Research Paper',
      issuer: 'IEEE International Conference',
      date: '2023',
      category: 'academic',
      type: 'publication',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/research/research-original.svg',
      description: 'Published research on "Machine Learning Applications in Software Development" at IEEE conference.',
      skills: ['Research', 'Machine Learning', 'Academic Writing', 'Innovation'],
      credentialId: 'IEEE-2023-PUB',
      status: 'Published',
      validUntil: 'N/A',
      priority: 'high'
    },

    // Skills & Specializations
    {
      id: 'fullstack-specialist',
      title: 'Full-Stack Development Specialist',
      issuer: 'Udemy',
      date: '2023',
      category: 'skills',
      type: 'specialization',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      description: 'Comprehensive full-stack development skills covering frontend, backend, and database technologies.',
      skills: ['Full-Stack', 'JavaScript', 'Database Design', 'API Development'],
      credentialId: 'UDEMY-FULLSTACK-2023',
      status: 'Completed',
      validUntil: 'N/A',
      priority: 'medium'
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineering Certification',
      issuer: 'Linux Foundation',
      date: '2023',
      category: 'skills',
      type: 'specialization',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      description: 'Advanced DevOps practices including CI/CD, infrastructure as code, and cloud-native development.',
      skills: ['DevOps', 'CI/CD', 'Infrastructure', 'Automation'],
      credentialId: 'LF-DEVOPS-2023',
      status: 'Active',
      validUntil: '2026',
      priority: 'high'
    },

    // Appreciations & Recognition
    {
      id: 'employee-of-year',
      title: 'Employee of the Year',
      issuer: 'TechCorp Solutions',
      date: '2023',
      category: 'recognition',
      type: 'appreciation',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trophy/trophy-original.svg',
      description: 'Recognized for exceptional performance, innovation, and contribution to company success.',
      skills: ['Leadership', 'Innovation', 'Team Collaboration', 'Problem Solving'],
      credentialId: 'TCS-EOTY-2023',
      status: 'Recognition',
      validUntil: 'N/A',
      priority: 'high'
    },
    {
      id: 'mentorship-award',
      title: 'Outstanding Mentor Award',
      issuer: 'Developer Community',
      date: '2023',
      category: 'recognition',
      type: 'appreciation',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/community/community-original.svg',
      description: 'Recognized for mentoring junior developers and contributing to the growth of the tech community.',
      skills: ['Mentorship', 'Leadership', 'Community Building', 'Knowledge Sharing'],
      credentialId: 'DC-MENTOR-2023',
      status: 'Recognition',
      validUntil: 'N/A',
      priority: 'medium'
    }
  ];

  const categories = [
    { id: 'all', name: 'All', count: certificates.length },
    { id: 'professional', name: 'Professional', count: certificates.filter(c => c.category === 'professional').length },
    { id: 'competition', name: 'Competitions', count: certificates.filter(c => c.category === 'competition').length },
    { id: 'academic', name: 'Academic', count: certificates.filter(c => c.category === 'academic').length },
    { id: 'skills', name: 'Skills', count: certificates.filter(c => c.category === 'skills').length },
    { id: 'recognition', name: 'Recognition', count: certificates.filter(c => c.category === 'recognition').length }
  ];

  const filteredCertificates = activeFilter === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-500/20 text-green-400 border-green-500/20';
      case 'achievement':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/20';
      case 'recognition':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/20';
      case 'completed':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/20';
      case 'published':
        return 'bg-indigo-500/20 text-indigo-400 border-indigo-500/20';
      default:
        return 'bg-accent-text/20 text-accent-text border-accent-text/20';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/20 text-red-400 border-red-500/20';
      case 'medium':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/20';
      case 'low':
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
        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-secondary-bg/70 to-secondary-bg/50 p-6 rounded-2xl border border-secondary-bg/30 text-center">
            <div className="w-12 h-12 bg-primary-button/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{certificates.length}</h3>
            <p className="text-accent-text text-sm font-medium">Total Achievements</p>
          </div>

          <div className="bg-gradient-to-r from-secondary-bg/70 to-secondary-bg/50 p-6 rounded-2xl border border-secondary-bg/30 text-center">
            <div className="w-12 h-12 bg-primary-button/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{certificates.filter(c => c.status === 'Active').length}</h3>
            <p className="text-accent-text text-sm font-medium">Active Certifications</p>
          </div>

          <div className="bg-gradient-to-r from-secondary-bg/70 to-secondary-bg/50 p-6 rounded-2xl border border-secondary-bg/30 text-center">
            <div className="w-12 h-12 bg-primary-button/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">2024</h3>
            <p className="text-accent-text text-sm font-medium">Latest Achievement</p>
          </div>

          <div className="bg-gradient-to-r from-secondary-bg/70 to-secondary-bg/50 p-6 rounded-2xl border border-secondary-bg/30 text-center">
            <div className="w-12 h-12 bg-primary-button/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">25+</h3>
            <p className="text-accent-text text-sm font-medium">Skills Covered</p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-primary-button to-primary-button/90 text-white shadow-lg shadow-primary-button/25 border border-primary-button/30'
                  : 'bg-secondary-bg/50 text-foreground hover:bg-secondary-bg/70 border border-secondary-bg/30 hover:border-primary-button/30'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
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
                      <span className={`px-3 py-1 text-xs font-medium rounded-lg border ${getStatusColor(cert.status)}`}>
                        {cert.status}
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
                        {cert.type.charAt(0).toUpperCase() + cert.type.slice(1)} • {cert.date}
                      </span>
                      <div className="flex space-x-2">
                        {cert.category === 'professional' && cert.status === 'Active' && (
                          <a
                            href={`https://verify.${cert.issuer.toLowerCase().replace(/\s+/g, '')}.com/${cert.credentialId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 bg-gradient-to-r from-green-500/20 to-green-500/10 text-green-400 text-xs font-medium rounded-lg border border-green-500/20 hover:bg-green-500/30 hover:border-green-500/30 transition-all duration-300 flex items-center space-x-1"
                          >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Verify</span>
                          </a>
                        )}
                        {cert.category === 'competition' && (
                          <a
                            href={`https://results.${cert.issuer.toLowerCase().replace(/\s+/g, '')}.com/${cert.credentialId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-blue-500/10 text-blue-400 text-xs font-medium rounded-lg border border-blue-500/20 hover:bg-blue-500/30 hover:border-blue-500/30 transition-all duration-300 flex items-center space-x-1"
                          >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                            <span>View Results</span>
                          </a>
                        )}
                        {cert.category === 'academic' && cert.type === 'publication' && (
                          <a
                            href={`https://ieeexplore.ieee.org/document/${cert.credentialId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 bg-gradient-to-r from-indigo-500/20 to-indigo-500/10 text-indigo-400 text-xs font-medium rounded-lg border border-indigo-500/20 hover:bg-indigo-500/30 hover:border-indigo-500/30 transition-all duration-300 flex items-center space-x-1"
                          >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg>
                            <span>View Paper</span>
                          </a>
                        )}
                        {cert.category === 'recognition' && (
                          <a
                            href={`mailto:nsengiyumvaclement247@gmail.com?subject=Verification Request: ${cert.title}&body=Hello,%0D%0A%0D%0AI would like to verify the following achievement:%0D%0A%0D%0ATitle: ${cert.title}%0D%0AIssuer: ${cert.issuer}%0D%0ACredential ID: ${cert.credentialId}%0D%0ADate: ${cert.date}%0D%0A%0D%0APlease provide verification details.%0D%0A%0D%0AThank you.`}
                            className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-purple-500/10 text-purple-400 text-xs font-medium rounded-lg border border-purple-500/20 hover:bg-purple-500/30 hover:border-purple-500/30 transition-all duration-300 flex items-center space-x-1"
                          >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span>Request Verification</span>
                          </a>
                        )}
                        {cert.category === 'skills' && (
                          <a
                            href={`https://www.udemy.com/certificate/${cert.credentialId}/`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 text-yellow-400 text-xs font-medium rounded-lg border border-yellow-500/20 hover:bg-yellow-500/30 hover:border-yellow-500/30 transition-all duration-300 flex items-center space-x-1"
                          >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>View Certificate</span>
                          </a>
                        )}
                        {/* Fallback verification for any other types */}
                        {!['professional', 'competition', 'academic', 'recognition', 'skills'].includes(cert.category) && (
                          <a
                            href={`mailto:nsengiyumvaclement247@gmail.com?subject=Verification Request: ${cert.title}&body=Hello,%0D%0A%0D%0AI would like to verify the following achievement:%0D%0A%0D%0ATitle: ${cert.title}%0D%0AIssuer: ${cert.issuer}%0D%0ACredential ID: ${cert.credentialId}%0D%0ADate: ${cert.date}%0D%0A%0D%0APlease provide verification details.%0D%0A%0D%0AThank you.`}
                            className="px-3 py-1.5 bg-gradient-to-r from-accent-text/20 to-accent-text/10 text-accent-text text-xs font-medium rounded-lg border border-accent-text/20 hover:bg-accent-text/30 hover:border-accent-text/30 transition-all duration-300 flex items-center space-x-1"
                          >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Verify</span>
                          </a>
                        )}
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
