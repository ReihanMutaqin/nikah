import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

export default function GiftSection() {
  const [copied, setCopied] = useState(false);
  const accountNumber = '1234567890';

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="gift" className="relative px-6 py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-sm mx-auto"
      >
        {/* Gift Boxes Illustration */}
        <div className="flex justify-center mb-6">
          <svg viewBox="0 0 160 130" className="w-40 h-32">
            {/* Large gift box at back */}
            <rect x="20" y="45" width="70" height="60" rx="3" fill="none" stroke="#D4849C" strokeWidth="2"/>
            <line x1="55" y1="45" x2="55" y2="105" stroke="#D4849C" strokeWidth="1.5"/>
            <line x1="20" y1="75" x2="90" y2="75" stroke="#D4849C" strokeWidth="1.5"/>
            {/* Bow on large box */}
            <path d="M50 45 Q45 35 50 30 Q55 25 60 30 Q65 35 60 45" stroke="#D4849C" strokeWidth="1.5" fill="none"/>
            <path d="M60 45 Q65 35 60 30 Q55 25 50 30 Q45 35 50 45" stroke="#D4849C" strokeWidth="1.5" fill="none"/>
            <circle cx="55" cy="42" r="3" fill="#E87EA1" opacity="0.6"/>

            {/* Medium gift box */}
            <rect x="80" y="60" width="55" height="45" rx="3" fill="none" stroke="#A3B565" strokeWidth="2"/>
            <line x1="107" y1="60" x2="107" y2="105" stroke="#A3B565" strokeWidth="1.5"/>
            <line x1="80" y1="82" x2="135" y2="82" stroke="#A3B565" strokeWidth="1.5"/>
            {/* Bow on medium box */}
            <path d="M102 60 Q98 52 102 48 Q107 44 112 48 Q116 52 112 60" stroke="#A3B565" strokeWidth="1.5" fill="none"/>
            <path d="M112 60 Q116 52 112 48 Q107 44 102 48 Q98 52 102 60" stroke="#A3B565" strokeWidth="1.5" fill="none"/>
            <circle cx="107" cy="58" r="2.5" fill="#A3B565" opacity="0.5"/>

            {/* Small gift box at front */}
            <rect x="50" y="85" width="45" height="35" rx="2" fill="none" stroke="#D4849C" strokeWidth="1.5"/>
            <line x1="72" y1="85" x2="72" y2="120" stroke="#D4849C" strokeWidth="1"/>
            <line x1="50" y1="102" x2="95" y2="102" stroke="#D4849C" strokeWidth="1"/>
            {/* Bow on small box */}
            <path d="M68 85 Q65 78 68 75 Q72 72 76 75 Q79 78 76 85" stroke="#D4849C" strokeWidth="1" fill="none"/>
            <path d="M76 85 Q79 78 76 75 Q72 72 68 75 Q65 78 68 85" stroke="#D4849C" strokeWidth="1" fill="none"/>
            <circle cx="72" cy="83" r="2" fill="#E87EA1" opacity="0.5"/>
          </svg>
        </div>

        <p className="font-hand text-lg text-olive mb-2">
          Sharing the joy with u<br/>
          is our greatest gift
        </p>

        <h3 className="font-script text-4xl text-pink mb-6">Cashless</h3>

        {/* Copy Account Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCopy}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-hand text-sm border-2 transition-colors"
          style={{ 
            borderColor: 'var(--text-olive)', 
            color: 'var(--text-olive)',
            backgroundColor: copied ? 'rgba(163, 181, 101, 0.1)' : 'transparent'
          }}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? 'Copied!' : 'Copy account'}
        </motion.button>

        {/* Phone illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-8"
        >
          <svg viewBox="0 0 80 100" className="w-16 h-20">
            {/* Phone body */}
            <rect x="15" y="5" width="50" height="80" rx="6" fill="none" stroke="#A3B565" strokeWidth="2"/>
            {/* Screen */}
            <rect x="20" y="15" width="40" height="55" rx="2" fill="none" stroke="#A3B565" strokeWidth="1" opacity="0.5"/>
            {/* Hand holding phone */}
            <path d="M5 65 Q5 55 15 55 L15 75 Q5 75 5 65" fill="none" stroke="#D4849C" strokeWidth="2" strokeLinecap="round"/>
            <path d="M75 65 Q75 55 65 55 L65 75 Q75 75 75 65" fill="none" stroke="#D4849C" strokeWidth="2" strokeLinecap="round"/>
            <path d="M15 75 Q40 85 65 75" fill="none" stroke="#D4849C" strokeWidth="2" strokeLinecap="round"/>
            {/* Money symbol on screen */}
            <text x="40" y="50" fontFamily="Dancing Script, cursive" fontSize="20" fill="#A3B565" textAnchor="middle">$</text>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
