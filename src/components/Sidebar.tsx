'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Sidebar() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const skills = [
    "Web Developer",
    "Full-Stack Engineer", 
    "DevOps Specialist",
    "Cloud Architect",
    "Database Administrator",
    "System Administrator",
    "UI/UX Designer",
    "API Developer",
    "Mobile Developer",
    "Software Engineer"
  ];

  useEffect(() => {
    const currentSkill = skills[currentSkillIndex];
    
    if (!isDeleting) {
      // Typing effect
      if (currentText.length < currentSkill.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentSkill.slice(0, currentText.length + 1));
          setTypingSpeed(100);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Pause before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, currentText.length - 1));
          setTypingSpeed(50);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Move to next skill
        setIsDeleting(false);
        setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
        setTypingSpeed(100);
      }
    }
  }, [currentText, isDeleting, currentSkillIndex, typingSpeed, skills]);

  return (
    <aside className="w-80 bg-gradient-to-b from-background to-background/95 border-r border-secondary-bg/30 p-8 space-y-8 shadow-lg">
      {/* Profile Section */}
      <div className="space-y-6">
        {/* Profile Picture */}
        <div className="flex justify-center">
          <div className="relative w-36 h-36 rounded-2xl overflow-hidden bg-gradient-to-br from-secondary-bg/50 to-secondary-bg/20 border border-secondary-bg/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Image
              src="/profile.jpg"
              alt="Clement NSENGIYUMVA"
              width={144}
              height={144}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to initials if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-5xl font-bold text-accent-text bg-gradient-to-br from-secondary-bg/30 to-secondary-bg/10">CN</div>';
                }
              }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground via-primary-button to-accent-text bg-clip-text text-transparent">
            Clement NSENGIYUMVA
          </h2>
          <div className="h-6 flex items-center justify-center">
            <span className="text-foreground font-semibold text-lg">
              {currentText}
              <span className={`inline-block w-0.5 h-5 bg-primary-button ml-1 transition-opacity duration-300 ${
                isDeleting ? 'opacity-0' : 'opacity-100'
              }`}></span>
            </span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-accent-text text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>Based in Kigali, Rwanda</span>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-button/20 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-foreground bg-gradient-to-r from-foreground to-accent-text bg-clip-text text-transparent">
            Contact
          </h3>
        </div>
        
        <div className="space-y-4 pl-4">
          {/* Phone 1 */}
          <a href="tel:+250791130583" className="flex items-center space-x-4 p-3 bg-secondary-bg/30 rounded-xl border border-secondary-bg/20 hover:border-primary-button/30 transition-all duration-300 hover:scale-105 hover:bg-secondary-bg/40">
            <div className="w-10 h-10 bg-primary-button/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-foreground hover:text-white transition-colors duration-300">+250 791 130 583</span>
          </a>

          {/* Phone 2 */}
          <a href="tel:+250726542585" className="flex items-center space-x-4 p-3 bg-secondary-bg/30 rounded-xl border border-secondary-bg/20 hover:border-primary-button/30 transition-all duration-300 hover:scale-105 hover:bg-secondary-bg/40">
            <div className="w-10 h-10 bg-primary-button/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-foreground hover:text-white transition-colors duration-300">+250 726 542 585</span>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/250791130583" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-3 bg-secondary-bg/30 rounded-xl border border-secondary-bg/20 hover:border-primary-button/30 transition-all duration-300 hover:scale-105 hover:bg-secondary-bg/40">
            <div className="w-10 h-10 bg-primary-button/20 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-foreground hover:text-white transition-colors duration-300">+250 791 130 583</span>
          </a>

          {/* Email */}
          <a href="mailto:nsengiyumvaclement247@gmail.com" className="flex items-start space-x-4 p-3 bg-secondary-bg/30 rounded-xl border border-secondary-bg/20 hover:border-primary-button/30 transition-all duration-300 hover:scale-105 hover:bg-secondary-bg/40">
            <div className="w-10 h-10 bg-primary-button/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M0 4C0 2.895 0.895 2 2 2H18C19.105 2 20 2.895 20 4V16C20 17.105 19.105 18 18 18H2C0.895 18 0 17.105 0 16V4ZM2 6L10 11L18 6V4L10 9L2 4V6Z"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-foreground break-all hover:text-white transition-colors duration-300">nsengiyumvaclement247@gmail.com</span>
          </a>

          {/* GitHub */}
          <a href="https://github.com/mbaduko" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-3 bg-secondary-bg/30 rounded-xl border border-secondary-bg/20 hover:border-primary-button/30 transition-all duration-300 hover:scale-105 hover:bg-secondary-bg/40">
            <div className="w-10 h-10 bg-primary-button/20 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm font-medium text-foreground hover:text-white transition-colors duration-300">github.com/mbaduko</span>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/mbaduko" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-3 bg-secondary-bg/30 rounded-xl border border-secondary-bg/20 hover:border-primary-button/30 transition-all duration-300 hover:scale-105 hover:bg-secondary-bg/40">
            <div className="w-10 h-10 bg-primary-button/20 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm font-medium text-foreground hover:text-white transition-colors duration-300">linkedin.com/in/mbaduko</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
