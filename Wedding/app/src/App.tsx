import { useState, useCallback } from 'react';
import { useActiveSection } from './hooks/useActiveSection';
import SplashScreen from './sections/SplashScreen';
import HeroSection from './sections/HeroSection';
import StorySection from './sections/StorySection';
import QuranSection from './sections/QuranSection';
import CoupleSection from './sections/CoupleSection';
import CountdownSection from './sections/CountdownSection';
import EventSection from './sections/EventSection';
import GallerySection from './sections/GallerySection';
import GiftSection from './sections/GiftSection';
import RSVPSection from './sections/RSVPSection';
import ClosingSection from './sections/ClosingSection';
import BottomNav from './sections/BottomNav';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const activeSection = useActiveSection(['home', 'couple', 'date', 'gift', 'rsvp']);

  const handleOpenInvitation = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <div className="min-h-screen w-full flex justify-center" style={{ backgroundColor: '#E8E4DC' }}>
      {/* Mobile Container */}
      <div 
        className="w-full max-w-[480px] relative min-h-screen"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        {/* Splash Screen */}
        {showSplash && <SplashScreen onOpen={handleOpenInvitation} />}

        {/* Main Content */}
        <main className={showSplash ? 'hidden' : 'block'}>
          <HeroSection />
          <StorySection />
          <QuranSection />
          <CoupleSection />
          <CountdownSection />
          <EventSection />
          <GallerySection />
          <GiftSection />
          <RSVPSection />
          <ClosingSection />
        </main>

        {/* Bottom Navigation */}
        {!showSplash && <BottomNav activeSection={activeSection} />}
      </div>
    </div>
  );
}
