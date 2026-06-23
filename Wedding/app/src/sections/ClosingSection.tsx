import { motion } from 'framer-motion';
import { Instagram, Music, Video } from 'lucide-react';

export default function ClosingSection() {
  return (
    <section className="relative px-6 py-16 overflow-hidden">
      {/* Closing Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <p className="font-script text-3xl text-olive mb-2">
          See you on our<br/>
          Wedding Day
        </p>
        <p className="font-script text-xl text-pink">#foreFERwithOCTAVIA</p>
      </motion.div>

      {/* Polaroid Camera with Filmstrip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-10"
      >
        {/* Polaroid Camera */}
        <div className="relative w-48 h-36">
          <svg viewBox="0 0 192 140" className="w-full h-full">
            {/* Camera body */}
            <rect x="20" y="30" width="152" height="90" rx="8" fill="none" stroke="#D4849C" strokeWidth="2.5"/>
            {/* Top viewfinder bump */}
            <rect x="60" y="15" width="72" height="20" rx="6" fill="none" stroke="#D4849C" strokeWidth="2"/>
            {/* Lens */}
            <circle cx="96" cy="75" r="28" fill="none" stroke="#D4849C" strokeWidth="2.5"/>
            <circle cx="96" cy="75" r="20" fill="none" stroke="#D4849C" strokeWidth="1.5" opacity="0.5"/>
            <circle cx="96" cy="75" r="8" fill="none" stroke="#A3B565" strokeWidth="2"/>
            {/* Flash */}
            <rect x="40" y="42" width="20" height="12" rx="3" fill="none" stroke="#D4849C" strokeWidth="1.5"/>
            {/* Shutter button */}
            <circle cx="155" cy="42" r="6" fill="none" stroke="#D4849C" strokeWidth="1.5"/>
            {/* Decorative lines */}
            <line x1="30" y1="110" x2="162" y2="110" stroke="#A3B565" strokeWidth="1" opacity="0.4"/>
            {/* Pink accents */}
            <rect x="25" y="35" width="8" height="8" rx="2" fill="#E87EA1" opacity="0.4"/>
            <rect x="159" y="35" width="8" height="8" rx="2" fill="#A3B565" opacity="0.4"/>
          </svg>
        </div>

        {/* Filmstrip hanging from camera */}
        <div className="relative w-28 -mt-2">
          <svg viewBox="0 0 112 200" className="w-full">
            {/* Filmstrip body */}
            <rect x="8" y="0" width="96" height="200" rx="4" fill="none" stroke="#D4849C" strokeWidth="2"/>
            {/* Perforations left */}
            {[10, 25, 40, 55, 70, 85, 100, 115, 130, 145, 160, 175].map((y, i) => (
              <rect key={`l${i}`} x="10" y={y} width="6" height="8" rx="1" fill="#D4849C" opacity="0.4"/>
            ))}
            {/* Perforations right */}
            {[10, 25, 40, 55, 70, 85, 100, 115, 130, 145, 160, 175].map((y, i) => (
              <rect key={`r${i}`} x="96" y={y} width="6" height="8" rx="1" fill="#D4849C" opacity="0.4"/>
            ))}
            {/* Photo frames inside filmstrip */}
            <rect x="20" y="15" width="72" height="50" rx="2" fill="none" stroke="#D4849C" strokeWidth="1" opacity="0.5"/>
            <rect x="20" y="75" width="72" height="50" rx="2" fill="none" stroke="#D4849C" strokeWidth="1" opacity="0.5"/>
            <rect x="20" y="135" width="72" height="50" rx="2" fill="none" stroke="#D4849C" strokeWidth="1" opacity="0.5"/>
          </svg>
          
          {/* Actual photos in filmstrip */}
          <div className="absolute top-4 left-5 right-5 h-[50px] overflow-hidden">
            <img src="/images/couple_polaroid.jpg" alt="Moment 1" className="w-full h-full object-cover"/>
          </div>
          <div className="absolute top-[75px] left-5 right-5 h-[50px] overflow-hidden">
            <img src="/images/gallery_3.jpg" alt="Moment 2" className="w-full h-full object-cover"/>
          </div>
          <div className="absolute top-[135px] left-5 right-5 h-[50px] overflow-hidden">
            <img src="/images/gallery_5.jpg" alt="Moment 3" className="w-full h-full object-cover"/>
          </div>
        </div>
      </motion.div>

      {/* Creator Credit */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="font-hand text-sm text-olive mb-1">created by</p>
        <p className="font-script text-2xl text-pink mb-1">catvestudio</p>
        <p className="font-hand text-xs text-dark/50 mb-4">^^ Tap for order ^^</p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a 
            href="#" 
            onClick={(e) => e.preventDefault()}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ backgroundColor: 'var(--text-pink)' }}
          >
            <Instagram size={18} className="text-white" />
          </a>
          <a 
            href="#" 
            onClick={(e) => e.preventDefault()}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ backgroundColor: 'var(--text-olive)' }}
          >
            <Music size={18} className="text-white" />
          </a>
          <a 
            href="#" 
            onClick={(e) => e.preventDefault()}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ backgroundColor: 'var(--text-pink)' }}
          >
            <Video size={18} className="text-white" />
          </a>
          <a 
            href="#" 
            onClick={(e) => e.preventDefault()}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ backgroundColor: 'var(--text-olive)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
