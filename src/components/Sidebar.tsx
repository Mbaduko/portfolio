'use client';

import Image from 'next/image';

export default function Sidebar() {
  return (
    <aside className="w-80 bg-background border-r border-secondary-bg/20 p-6 space-y-8 flex-shrink-0">
      {/* Profile Section */}
      <div className="space-y-4">
        {/* Profile Picture */}
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-secondary-bg flex items-center justify-center">
            <Image
              src="/profile.jpg"
              alt="Clement NSENGIYUMVA"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to initials if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-4xl font-bold text-accent-text">CN</div>';
                }
              }}
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center space-y-2">
          <h2 className="text-xl font-bold text-foreground">Clement NSENGIYUMVA</h2>
          <p className="text-foreground font-medium">Software Developer</p>
          <p className="text-accent-text text-sm">Based in Kigali, Rwanda</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Contact</h3>
        <div className="space-y-3 pl-4">
          {/* Phone */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-secondary-bg rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <span className="text-sm text-foreground">+250 791 130 583</span>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-secondary-bg rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </div>
            <span className="text-sm text-foreground">+250 791 130 583</span>
          </div>

          {/* GitHub */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-secondary-bg rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm text-foreground">github.com/mbaduko</span>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-secondary-bg rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm text-foreground">linkedin.com/in/mbaduko</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
