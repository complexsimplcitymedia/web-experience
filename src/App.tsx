import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { HeroContent } from './components/HeroContent';
import { VideoIntro } from './components/VideoIntro';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleIntroComplete = () => {
    setFadeOut(true);
    setTimeout(() => setShowIntro(false), 1000);
  };

  return (
    <>
      {showIntro && (
        <div className={`fixed inset-0 z-50 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <VideoIntro onIntroComplete={handleIntroComplete} />
        </div>
      )}
      
      <div className={`transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <Layout>
          <HeroContent />
        </Layout>
      </div>
    </>
  );
}