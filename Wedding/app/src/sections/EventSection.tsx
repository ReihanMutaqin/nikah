import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function EventSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Pink curved top */}
      <div className="relative bg-wedding-pink">
        <svg viewBox="0 0 480 60" className="absolute -top-[1px] left-0 w-full" preserveAspectRatio="none">
          <path d="M0 60 Q240 0 480 60 L480 0 L0 0 Z" fill="var(--bg-primary)"/>
        </svg>

        <div className="px-6 pt-16 pb-8">
          {/* Intimate Wedding Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* Wedding Arch Illustration */}
            <div className="flex justify-center mb-6">
              <svg viewBox="0 0 160 140" className="w-40 h-36">
                {/* Arch pillars */}
                <path d="M30 140 L30 80 Q30 50 50 35 Q70 20 80 18" stroke="#D4849C" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                <path d="M130 140 L130 80 Q130 50 110 35 Q90 20 80 18" stroke="#D4849C" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                {/* Flowers on arch */}
                <circle cx="45" cy="45" r="6" fill="#E87EA1" opacity="0.7"/>
                <circle cx="60" cy="32" r="7" fill="#D4849C" opacity="0.8"/>
                <circle cx="80" cy="25" r="8" fill="#E87EA1" opacity="0.9"/>
                <circle cx="100" cy="32" r="7" fill="#D4849C" opacity="0.8"/>
                <circle cx="115" cy="45" r="6" fill="#E87EA1" opacity="0.7"/>
                {/* Leaves */}
                <path d="M50 55 Q45 50 48 45" stroke="#A3B565" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <path d="M65 38 Q60 35 62 30" stroke="#A3B565" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <path d="M95 38 Q100 35 98 30" stroke="#A3B565" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <path d="M110 55 Q115 50 112 45" stroke="#A3B565" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                {/* Ribbons */}
                <path d="M35 100 Q30 115 35 125" stroke="#D4849C" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <path d="M125 100 Q130 115 125 125" stroke="#D4849C" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <path d="M35 110 Q40 115 38 120" stroke="#D4849C" strokeWidth="1" strokeLinecap="round" fill="none"/>
                <path d="M125 110 Q120 115 122 120" stroke="#D4849C" strokeWidth="1" strokeLinecap="round" fill="none"/>
              </svg>
            </div>

            <h3 className="font-script text-3xl text-pink mb-2">Intimate Wedding</h3>
            <p className="font-hand text-lg text-dark mb-1">Sabtu, 06 Juni 2026</p>
            <p className="font-hand text-base text-dark mb-1">10.00 s/d 12.30</p>
            <p className="font-hand text-sm text-dark/70 mb-1">
              Akan dilaksanakan di :<br/>
              <span className="text-dark">The Dona & Doni Resto, Pool & Spa.</span><br/>
              <span className="text-xs">(Private event, khusus tamu undangan tertentu)</span>
            </p>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-hand text-white text-sm mt-4 transition-transform hover:scale-105"
              style={{ backgroundColor: 'var(--accent-olive)' }}
            >
              <MapPin size={16} />
              Google Maps
            </a>
          </motion.div>

          {/* Tasyakuran Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            {/* Joglo House Illustration */}
            <div className="flex justify-center mb-6">
              <svg viewBox="0 0 160 120" className="w-40 h-28">
                {/* Roof layers */}
                <path d="M20 50 L80 15 L140 50" stroke="#A3B565" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                <path d="M25 45 L80 12 L135 45" stroke="#A3B565" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <path d="M30 40 L80 8 L130 40" stroke="#A3B565" strokeWidth="1" strokeLinecap="round" fill="none"/>
                {/* Main building */}
                <rect x="30" y="50" width="100" height="60" rx="2" fill="none" stroke="#A3B565" strokeWidth="2"/>
                {/* Columns */}
                <line x1="45" y1="50" x2="45" y2="110" stroke="#A3B565" strokeWidth="2"/>
                <line x1="65" y1="50" x2="65" y2="110" stroke="#A3B565" strokeWidth="2"/>
                <line x1="95" y1="50" x2="95" y2="110" stroke="#A3B565" strokeWidth="2"/>
                <line x1="115" y1="50" x2="115" y2="110" stroke="#A3B565" strokeWidth="2"/>
                {/* Arched openings */}
                <path d="M50 110 L50 80 Q55 70 60 80 L60 110" stroke="#A3B565" strokeWidth="1.5" fill="none"/>
                <path d="M70 110 L70 75 Q72.5 68 75 75 L75 110" stroke="#A3B565" strokeWidth="1.5" fill="none"/>
                <path d="M85 110 L85 75 Q87.5 68 90 75 L90 110" stroke="#A3B565" strokeWidth="1.5" fill="none"/>
                <path d="M100 110 L100 80 Q105 70 110 80 L110 110" stroke="#A3B565" strokeWidth="1.5" fill="none"/>
                {/* Base platform */}
                <rect x="20" y="108" width="120" height="8" rx="2" fill="none" stroke="#A3B565" strokeWidth="1.5"/>
                {/* Decorative elements */}
                <circle cx="55" cy="85" r="2" fill="#D4849C" opacity="0.5"/>
                <circle cx="105" cy="85" r="2" fill="#D4849C" opacity="0.5"/>
              </svg>
            </div>

            <h3 className="font-script text-3xl text-olive mb-1">Tasyakuran</h3>
            <h4 className="font-script text-xl text-olive mb-3">Pernikahan</h4>
            <p className="font-hand text-lg text-dark mb-1">Sabtu, 06 Juni 2026</p>
            <p className="font-hand text-sm text-dark/70 mb-1">
              Akan dilaksanakan di :<br/>
              <span className="text-dark">Pladen Krajan RT01/RW 01,</span><br/>
              <span className="text-dark">Kec. Jekulo, Kab. Kudus,</span><br/>
              <span className="text-dark">Jawa Tengah</span>
            </p>
            <p className="font-hand text-base text-pink mt-2">Pukul : 16.00 - 20.00</p>
          </motion.div>
        </div>

        {/* Bottom curve */}
        <svg viewBox="0 0 480 40" className="w-full" preserveAspectRatio="none">
          <path d="M0 0 Q240 40 480 0 L480 40 L0 40 Z" fill="var(--bg-primary)"/>
        </svg>
      </div>
    </section>
  );
}
