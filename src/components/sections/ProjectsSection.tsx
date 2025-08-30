'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce platform with authentication, payment integration, and admin dashboard.",
      status: "Live",
      role: "Full Stack Developer",
      owner: "Personal Project",
      liveLink: "https://ecommerce-demo.com",
      githubLink: "https://github.com/mbaduko/ecommerce-platform",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
      technologies: [
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Stripe", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" }
      ]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates, kanban boards, and team collaboration.",
      status: "Live",
      role: "Backend Developer",
      owner: "Company Project",
      liveLink: "https://taskmanager-demo.com",
      githubLink: "https://github.com/mbaduko/task-manager",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
      technologies: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Socket.io", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" }
      ]
    },
    {
      id: 3,
      title: "API Gateway",
      description: "Microservices API gateway with authentication, rate limiting, and service discovery.",
      status: "In Development",
      role: "DevOps Engineer",
      owner: "Personal Project",
      liveLink: null,
      githubLink: "https://github.com/mbaduko/api-gateway",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
      technologies: [
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
      ]
    },
    {
      id: 4,
      title: "DevOps Pipeline",
      description: "Automated CI/CD pipeline with testing, security scanning, and monitoring dashboards.",
      status: "Live",
      role: "DevOps Engineer",
      owner: "Client Project",
      liveLink: "https://pipeline-demo.com",
      githubLink: "https://github.com/mbaduko/devops-pipeline",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      technologies: [
        { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
        { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Prometheus", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" }
      ]
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time metrics and reporting.",
      status: "Live",
      role: "Frontend Developer",
      owner: "Client Project",
      liveLink: "https://social-dashboard.com",
      githubLink: "https://github.com/mbaduko/social-dashboard",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
      technologies: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Chart.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chartjs/chartjs-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Material-UI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" }
      ]
    },
    {
      id: 6,
      title: "Inventory Management System",
      description: "Comprehensive inventory tracking system with barcode scanning and automated alerts.",
      status: "Live",
      role: "Full Stack Developer",
      owner: "Company Project",
      liveLink: "https://inventory-system.com",
      githubLink: "https://github.com/mbaduko/inventory-system",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
      technologies: [
        { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "WebRTC", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webrtc/webrtc-original.svg" },
        { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
      ]
    },
    {
      id: 7,
      title: "Real-time Chat Application",
      description: "Instant messaging app with file sharing, voice messages, and group chat functionality.",
      status: "Live",
      role: "Backend Developer",
      owner: "Personal Project",
      liveLink: "https://chat-app.com",
      githubLink: "https://github.com/mbaduko/chat-app",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
      technologies: [
        { name: "Socket.io", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "JWT", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jwt/jwt-original.svg" },
        { name: "Multer", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/multer/multer-original.svg" }
      ]
    },
    {
      id: 8,
      title: "Weather Forecast App",
      description: "Weather application with location-based forecasts, radar maps, and severe weather alerts.",
      status: "Live",
      role: "Frontend Developer",
      owner: "Personal Project",
      liveLink: "https://weather-app.com",
      githubLink: "https://github.com/mbaduko/weather-app",
      thumbnail: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop&crop=center",
      technologies: [
        { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Expo", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg" },
        { name: "OpenWeather API", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openweather/openweather-original.svg" },
        { name: "AsyncStorage", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/asyncstorage/asyncstorage-original.svg" },
        { name: "React Navigation", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactnavigation/reactnavigation-original.svg" }
      ]
    },
    {
      id: 9,
      title: "Restaurant Management System",
      description: "Complete restaurant management solution with order tracking, menu management, and POS integration.",
      status: "In Development",
      role: "Full Stack Developer",
      owner: "Client Project",
      liveLink: null,
      githubLink: "https://github.com/mbaduko/restaurant-system",
      thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center",
      technologies: [
        { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Stripe", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg" },
        { name: "Socket.io", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" }
      ]
    },
    {
      id: 10,
      title: "Learning Management System",
      description: "Educational platform with course creation, student progress tracking, and interactive assessments.",
      status: "Live",
      role: "Backend Developer",
      owner: "Company Project",
      liveLink: "https://lms-platform.com",
      githubLink: "https://github.com/mbaduko/lms-platform",
      thumbnail: "https://images.unsplash.com/photo-1523240794102-9ebd0b167f70?w=400&h=300&fit=crop&crop=center",
      technologies: [
        { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Celery", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/celery/celery-original.svg" },
        { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" }
      ]
    },
    {
      id: 11,
      title: "Cryptocurrency Tracker",
      description: "Real-time cryptocurrency price tracking with portfolio management and market analysis tools.",
      status: "Live",
      role: "Full Stack Developer",
      owner: "Personal Project",
      liveLink: "https://crypto-tracker.com",
      githubLink: "https://github.com/mbaduko/crypto-tracker",
      thumbnail: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=300&fit=crop&crop=center",
      technologies: [
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "CoinGecko API", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/coingecko/coingecko-original.svg" },
        { name: "Chart.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chartjs/chartjs-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" }
      ]
    },
    {
      id: 12,
      title: "Fitness Tracking App",
      description: "Comprehensive fitness tracking application with workout planning, progress monitoring, and social features.",
      status: "Live",
      role: "Mobile Developer",
      owner: "Client Project",
      liveLink: "https://fitness-app.com",
      githubLink: "https://github.com/mbaduko/fitness-app",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      technologies: [
        { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "HealthKit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/healthkit/healthkit-original.svg" },
        { name: "Expo", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg" }
      ]
    }
  ];

  const handleImageError = (imageKey: string) => {
    setImageErrors(prev => new Set(prev).add(imageKey));
  };

  const isImageError = (imageKey: string) => {
    return imageErrors.has(imageKey);
  };

  return (
    <SectionWrapper id="projects" padding="lg" showBackground>
      <SectionHeader
        title="Featured Projects"
        subtitle="Showcase of my best work and contributions"
        icon={
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        }
        variant="secondary"
      />
      
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {(showAllProjects ? projects : projects.slice(0, 4)).map((project) => (
            <div key={project.id} className="group relative">
              <div className="bg-gradient-to-br from-secondary-bg/60 to-secondary-bg/30 rounded-2xl border border-secondary-bg/30 overflow-hidden hover:border-primary-button/20 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-[1.02]">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-button/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent-text/20 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                </div>

                {/* Thumbnail */}
                <div className="relative h-48 bg-gradient-to-br from-secondary-bg/40 to-secondary-bg/20 overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={`${project.title} thumbnail`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="absolute inset-0 flex items-center justify-center">
                            <div class="w-20 h-20 bg-gradient-to-br from-primary-button/20 to-primary-button/10 rounded-xl flex items-center justify-center border border-primary-button/20 shadow-lg">
                              <svg class="w-10 h-10 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-bg/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Title and Status */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground bg-gradient-to-r from-foreground to-accent-text bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-accent-text text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Role and Owner */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-secondary-bg/30 p-3 rounded-lg border border-secondary-bg/20">
                      <span className="text-xs text-accent-text uppercase tracking-wide block mb-1">Role</span>
                      <p className="text-foreground text-sm font-semibold">{project.role}</p>
                    </div>
                    <div className="bg-secondary-bg/30 p-3 rounded-lg border border-secondary-bg/20">
                      <span className="text-xs text-accent-text uppercase tracking-wide block mb-1">Owner</span>
                      <p className="text-foreground text-sm font-semibold">{project.owner}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center space-x-2">
                      <svg className="w-4 h-4 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>Technologies</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-gradient-to-r from-primary-button/15 to-primary-button/5 text-primary-button px-3 py-2 rounded-xl text-xs font-semibold border border-primary-button/25 hover:scale-105 hover:border-primary-button/40 transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md">
                          <div className="w-5 h-5 bg-white rounded-lg flex items-center justify-center p-0.5">
                            {isImageError(`tech-${project.id}-${index}`) ? (
                              <span className="text-xs font-bold text-primary-button">
                                {tech.name.charAt(0)}
                              </span>
                            ) : (
                              <img 
                                src={tech.logo} 
                                alt={`${tech.name} logo`}
                                className="w-full h-full object-contain"
                                onError={() => handleImageError(`tech-${project.id}-${index}`)}
                              />
                            )}
                          </div>
                          <span className="font-medium">{tech.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-primary-button to-primary-button/90 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:from-primary-button/90 hover:to-primary-button/80 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span>View Live</span>
                        </div>
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-secondary-bg/50 to-secondary-bg/30 text-foreground px-4 py-3 rounded-xl text-sm font-semibold hover:from-secondary-bg/70 hover:to-secondary-bg/50 transition-all duration-300 text-center border border-secondary-bg/30 hover:border-primary-button/30 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                          </svg>
                          <span>GitHub</span>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* See More/Less Button */}
        {projects.length > 4 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="bg-gradient-to-r from-primary-button/20 to-primary-button/10 text-primary-button px-8 py-4 rounded-xl font-semibold hover:from-primary-button/30 hover:to-primary-button/20 transition-all duration-300 border border-primary-button/30 hover:border-primary-button/50 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <div className="flex items-center justify-center space-x-3">
                <svg className={`w-5 h-5 transition-transform duration-300 ${showAllProjects ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span>{showAllProjects ? 'Show Less' : `See More Projects (${projects.length - 4})`}</span>
              </div>
            </button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
