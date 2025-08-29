'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
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
      thumbnail: "/project-thumbnails/ecommerce.jpg",
      technologies: [
        { name: "Next.js", icon: "⚛️" },
        { name: "Node.js", icon: "🟢" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Stripe", icon: "💳" },
        { name: "Tailwind", icon: "🎨" }
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
      thumbnail: "/project-thumbnails/taskmanager.jpg",
      technologies: [
        { name: "React", icon: "⚛️" },
        { name: "Express", icon: "🚀" },
        { name: "Socket.io", icon: "🔌" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Redis", icon: "🔴" }
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
      thumbnail: "/project-thumbnails/apigateway.jpg",
      technologies: [
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "☸️" },
        { name: "Redis", icon: "🔴" },
        { name: "Nginx", icon: "🟢" },
        { name: "Node.js", icon: "🟢" }
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
      thumbnail: "/project-thumbnails/devops.jpg",
      technologies: [
        { name: "Jenkins", icon: "🤖" },
        { name: "AWS", icon: "☁️" },
        { name: "Terraform", icon: "🏗️" },
        { name: "Docker", icon: "🐳" },
        { name: "Prometheus", icon: "📊" }
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
      thumbnail: "/project-thumbnails/social.jpg",
      technologies: [
        { name: "React", icon: "⚛️" },
        { name: "TypeScript", icon: "📘" },
        { name: "Chart.js", icon: "📈" },
        { name: "Firebase", icon: "🔥" },
        { name: "Material-UI", icon: "🎨" }
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
      thumbnail: "/project-thumbnails/inventory.jpg",
      technologies: [
        { name: "Vue.js", icon: "💚" },
        { name: "Laravel", icon: "🔴" },
        { name: "MySQL", icon: "🐬" },
        { name: "WebRTC", icon: "📹" },
        { name: "Bootstrap", icon: "🎨" }
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
      thumbnail: "/project-thumbnails/chat.jpg",
      technologies: [
        { name: "Socket.io", icon: "🔌" },
        { name: "Express", icon: "🚀" },
        { name: "MongoDB", icon: "🍃" },
        { name: "JWT", icon: "🔐" },
        { name: "Multer", icon: "📁" }
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
      thumbnail: "/project-thumbnails/weather.jpg",
      technologies: [
        { name: "React Native", icon: "📱" },
        { name: "Expo", icon: "⚡" },
        { name: "OpenWeather API", icon: "🌤️" },
        { name: "AsyncStorage", icon: "💾" },
        { name: "React Navigation", icon: "🧭" }
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
      thumbnail: "/project-thumbnails/restaurant.jpg",
      technologies: [
        { name: "Angular", icon: "🅰️" },
        { name: "Node.js", icon: "🟢" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Stripe", icon: "💳" },
        { name: "Socket.io", icon: "🔌" }
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
      thumbnail: "/project-thumbnails/lms.jpg",
      technologies: [
        { name: "Django", icon: "🐍" },
        { name: "Python", icon: "🐍" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Celery", icon: "🥬" },
        { name: "Redis", icon: "🔴" }
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
      thumbnail: "/project-thumbnails/crypto.jpg",
      technologies: [
        { name: "Next.js", icon: "⚛️" },
        { name: "TypeScript", icon: "📘" },
        { name: "CoinGecko API", icon: "🪙" },
        { name: "Chart.js", icon: "📈" },
        { name: "Tailwind CSS", icon: "🎨" }
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
      thumbnail: "/project-thumbnails/fitness.jpg",
      technologies: [
        { name: "React Native", icon: "📱" },
        { name: "Firebase", icon: "🔥" },
        { name: "Redux", icon: "🔄" },
        { name: "HealthKit", icon: "❤️" },
        { name: "Expo", icon: "⚡" }
      ]
    }
  ];

  return (
    <div id="projects" className="mb-12">
      <div className="flex items-center space-x-4 mb-6">
        <button className="bg-secondary-bg text-accent-text px-4 py-2 rounded-lg text-sm font-medium">
          Projects
        </button>
      </div>
      
              <div className="pl-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(showAllProjects ? projects : projects.slice(0, 4)).map((project) => (
              <div key={project.id} className="bg-secondary-bg/50 rounded-lg border border-secondary-bg/20 overflow-hidden hover:border-accent-text/30 transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative h-40 bg-secondary-bg/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-secondary-bg rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-accent-text" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Title and Status */}
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-accent-text text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Role and Owner */}
                  <div className="flex gap-4 mb-3">
                    <div>
                      <span className="text-xs text-accent-text uppercase tracking-wide">Role:</span>
                      <p className="text-foreground text-sm font-medium">{project.role}</p>
                    </div>
                    <div>
                      <span className="text-xs text-accent-text uppercase tracking-wide">Owner:</span>
                      <p className="text-foreground text-sm font-medium">{project.owner}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <span className="text-xs text-accent-text uppercase tracking-wide block mb-2">Technologies:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-primary-button/20 text-primary-button px-2 py-1 rounded text-xs flex items-center gap-1">
                          <span className="text-sm">{tech.icon}</span>
                          <span>{tech.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-primary-button text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary-button/90 transition-colors text-center"
                      >
                        View Live
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-secondary-bg text-foreground px-3 py-2 rounded-lg text-sm font-medium hover:bg-accent-text/20 transition-colors text-center border border-secondary-bg/20"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* See More/Less Button */}
          {projects.length > 4 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="bg-secondary-bg text-accent-text px-6 py-3 rounded-lg font-medium hover:bg-accent-text/20 transition-colors border border-secondary-bg/20"
              >
                {showAllProjects ? 'Show Less' : `See More Projects (${projects.length - 4})`}
              </button>
            </div>
          )}
        </div>
    </div>
  );
}
