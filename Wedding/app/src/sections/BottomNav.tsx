import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MailOpen, Heart, CalendarDays, Wallet, ClipboardList } from 'lucide-react';

interface BottomNavProps {
  activeSection: string;
}

const navItems = [
  { id: 'home', icon: MailOpen, label: 'Home' },
  { id: 'couple', icon: Heart, label: 'Couple' },
  { id: 'date', icon: CalendarDays, label: 'Date' },
  { id: 'gift', icon: Wallet, label: 'Gift' },
  { id: 'rsvp', icon: ClipboardList, label: 'RSVP' },
];

export default function BottomNav({ activeSection }: BottomNavProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past splash screen (100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40"
    >
      <div 
        className="flex items-center gap-1 px-3 py-2 rounded-full shadow-lg"
        style={{ 
          background: 'linear-gradient(to right, #F2D0D8, #E8B4C0)',
        }}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.id)}
              className="relative flex flex-col items-center justify-center w-12 h-12 rounded-full transition-colors"
              style={{
                backgroundColor: isActive ? 'rgba(255,255,255,0.3)' : 'transparent',
              }}
            >
              <item.icon 
                size={22} 
                style={{ 
                  color: isActive ? 'var(--accent-olive)' : 'rgba(255,255,255,0.8)',
                  transition: 'color 0.3s ease',
                }} 
              />
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-0.5 w-1 h-1 rounded-full"
                  style={{ backgroundColor: 'var(--accent-olive)' }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
}
