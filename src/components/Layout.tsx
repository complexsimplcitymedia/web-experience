import React from 'react';
import { Navigation } from './Navigation';
import { VideoBackground } from './VideoBackground';
import { StarField } from './StarField';

interface LayoutProps {
  children: React.ReactNode;
  showBackground?: boolean;
}

export function Layout({ children, showBackground = true }: LayoutProps) {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <StarField />
      {showBackground && (
        <div className="relative h-screen">
          <VideoBackground />
          <div className="relative h-full space-gradient">
            <Navigation />
            {children}
          </div>
        </div>
      )}
      {!showBackground && children}
    </main>
  );
}