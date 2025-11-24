"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from '@/contexts/ThemeContext';

type Props = {
  open: boolean;
  onClose: () => void;
  /** optional ref to the element that triggered the drawer so focus can be restored */
  initialFocusRef?: React.RefObject<HTMLElement>;
};

function getFocusableElements(container: HTMLElement | null) {
  if (!container) return [] as HTMLElement[];
  const nodes = Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
  );
  // filter out elements that are not visible
  return nodes.filter((el) => !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length));
}

export default function MobileDrawer({ open, onClose, initialFocusRef }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prevActiveRef = useRef<HTMLElement | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'Tab') {
        // focus trap
        const container = containerRef.current;
        if (!container) return;
        const focusable = getFocusableElements(container);
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (e.shiftKey) {
          if (active === first || active === container) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (active === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    if (open) {
      prevActiveRef.current = document.activeElement as HTMLElement | null;
      document.addEventListener('keydown', onKey);

      // focus first focusable element inside drawer
      requestAnimationFrame(() => {
        const container = containerRef.current;
        const focusable = getFocusableElements(container);
        if (focusable.length > 0) {
          focusable[0].focus();
        } else if (container) {
          container.focus();
        }
      });
    }

    return () => {
      document.removeEventListener('keydown', onKey);
      // restore focus to trigger or previously focused element
      const trigger = initialFocusRef?.current as HTMLElement | null;
      const prev = prevActiveRef.current;
      try {
        if (trigger) trigger.focus();
        else if (prev) prev.focus();
      } catch (err) {
        // ignore focus errors
      }
    };
  }, [open, onClose, initialFocusRef]);

  if (!open) return null;

  const iconColor = resolvedTheme === 'dark' ? '#fff' : '#222';

  const drawer = (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <aside
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-drawer-title"
        tabIndex={-1}
        className="absolute right-0 top-0 h-full w-80 max-w-full bg-background border-l border-secondary-bg/30 p-6 shadow-2xl overflow-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 relative rounded-lg overflow-hidden bg-secondary-bg/30">
              <Image src="/profile.jpg" alt="profile" width={48} height={48} className="object-cover w-full h-full" />
            </div>
            <div>
              <div id="mobile-drawer-title" className="text-lg font-bold text-foreground">Clement NSENGIYUMVA</div>
              <div className="text-xs text-accent-text">Web Developer</div>
            </div>
          </div>
          <button onClick={onClose} aria-label="Close menu" className="p-2 rounded-md hover:bg-secondary-bg/40">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={iconColor}>
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="space-y-3">
          <button onClick={() => { onClose(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full text-left px-3 py-2 rounded-lg text-foreground hover:bg-secondary-bg/30">Home</button>
          <button onClick={() => { onClose(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full text-left px-3 py-2 rounded-lg text-foreground hover:bg-secondary-bg/30">Skills</button>
          <button onClick={() => { onClose(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full text-left px-3 py-2 rounded-lg text-foreground hover:bg-secondary-bg/30">Experience</button>
          <button onClick={() => { onClose(); document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full text-left px-3 py-2 rounded-lg text-foreground hover:bg-secondary-bg/30">Certificates</button>
          <button onClick={() => { onClose(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full text-left px-3 py-2 rounded-lg text-foreground hover:bg-secondary-bg/30">Projects</button>
          <button onClick={() => { onClose(); document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full text-left px-3 py-2 rounded-lg text-foreground hover:bg-secondary-bg/30">Technologies</button>
          <button onClick={() => { onClose(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full text-left px-3 py-2 rounded-lg text-foreground hover:bg-secondary-bg/30">Contact</button>
        </nav>

        <div className="border-t border-secondary-bg/20 mt-6 pt-6 space-y-3">
          <a href="tel:+250791130583" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-secondary-bg/30">
            <div className="w-9 h-9 bg-icon-bg rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-icon-text" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
            </div>
            <span className="text-sm text-foreground">+250 791 130 583</span>
          </a>

          <a href="mailto:nsengiyumvaclement247@gmail.com" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-secondary-bg/30">
            <div className="w-9 h-9 bg-icon-bg rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-icon-text" fill="currentColor" viewBox="0 0 20 20"><path d="M0 4C0 2.895 0.895 2 2 2H18C19.105 2 20 2.895 20 4V16C20 17.105 19.105 18 18 18H2C0.895 18 0 17.105 0 16V4ZM2 6L10 11L18 6V4L10 9L2 4V6Z" /></svg>
            </div>
            <span className="text-sm text-foreground break-all">nsengiyumvaclement247@gmail.com</span>
          </a>

          <div className="flex items-center space-x-3 pt-2">
            <a href="https://github.com/mbaduko" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-icon-bg rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-icon-text" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://linkedin.com/in/mbaduko" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-icon-bg rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-icon-text" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>
      </aside>
    </div>
  );

  // Render into document.body to avoid being clipped by ancestor stacking contexts
  if (typeof document !== 'undefined') {
    return createPortal(drawer, document.body);
  }

  return drawer;
}
