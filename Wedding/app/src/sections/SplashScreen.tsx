import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailOpen } from 'lucide-react';

interface SplashScreenProps {
  onOpen: () => void;
}

export default function SplashScreen({ onOpen }: SplashScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleOpen = () => {
    setIsExiting(true);
    setTimeout(() => {
      onOpen();
    }, 800);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6"
          style={{ backgroundColor: 'var(--bg-primary)' }}
        >
          {/* Envelope SVG Illustration */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-64 h-48 mb-8"
          >
            <svg viewBox="0 0 256 192" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              {/* Envelope body */}
              <path d="M8 80 L128 140 L248 80 L248 176 Q248 184 240 184 L16 184 Q8 184 8 176 Z" 
                    fill="#F2D0D8" stroke="#A3B565" strokeWidth="2" strokeLinecap="round"/>
              {/* Envelope flap */}
              <path d="M8 80 L128 140 L248 80 L128 20 Z" 
                    fill="#F8E4EA" stroke="#A3B565" strokeWidth="2" strokeLinecap="round"/>
              {/* Inner envelope lines */}
              <path d="M8 80 L128 140" stroke="#D4849C" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
              <path d="M248 80 L128 140" stroke="#D4849C" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
              {/* Decorative scalloped edge on flap */}
              <path d="M60 50 Q75 42 90 50 Q105 58 120 50 Q135 42 150 50 Q165 58 180 50 Q195 42 210 50" 
                    stroke="#D4849C" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
            
            {/* Text inside envelope area */}
            <div className="absolute top-10 left-0 right-0 text-center px-8">
              <p className="font-script text-lg text-pink leading-tight">
                You are invited<br/>to our wedding!
              </p>
            </div>
          </motion.div>

          {/* Couple Names */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-2"
          >
            <p className="font-hand text-sm text-olive tracking-widest mb-1">Octavia & Fernando</p>
            <p className="font-hand text-sm text-pink">06.06.26</p>
          </motion.div>

          {/* Guest Name Placeholder */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-6"
          >
            <p className="font-hand text-lg text-dark">Nama Tamu</p>
          </motion.div>

          {/* Open Invitation Button */}
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpen}
            className="flex items-center gap-2 px-8 py-3 rounded-full font-hand text-white text-lg shadow-lg transition-colors"
            style={{ backgroundColor: 'var(--accent-olive)' }}
          >
            <MailOpen size={20} />
            Open Invitation
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
