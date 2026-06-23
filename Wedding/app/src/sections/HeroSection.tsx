import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* House Frame with Photo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-72 h-80 mb-8"
      >
        {/* House SVG Frame */}
        <svg viewBox="0 0 288 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
          {/* House roof */}
          <path d="M20 120 L144 30 L268 120" stroke="#A3B565" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          {/* House walls */}
          <path d="M20 120 L20 300 Q20 310 30 310 L258 310 Q268 310 268 300 L268 120" 
                stroke="#A3B565" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          {/* Inner decorative lines */}
          <path d="M35 130 L35 295 L253 295 L253 130" stroke="#A3B565" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.3"/>
        </svg>

        {/* Photo inside house frame */}
        <div className="absolute top-[85px] left-[40px] right-[40px] bottom-[25px] overflow-hidden">
          <img 
            src="/images/couple_main.jpg" 
            alt="Octavia & Fernando" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tulip decorations */}
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -bottom-4 -left-8 w-24"
        >
          <svg viewBox="0 0 96 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Tulip stems */}
            <path d="M30 75 Q30 50 25 30" stroke="#A3B565" strokeWidth="2" strokeLinecap="round"/>
            <path d="M48 75 Q48 50 48 25" stroke="#A3B565" strokeWidth="2" strokeLinecap="round"/>
            <path d="M66 75 Q66 50 71 30" stroke="#A3B565" strokeWidth="2" strokeLinecap="round"/>
            {/* Tulip leaves */}
            <path d="M30 60 Q20 50 22 40" stroke="#A3B565" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <path d="M48 55 Q35 45 38 35" stroke="#A3B565" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <path d="M66 60 Q76 50 74 40" stroke="#A3B565" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            {/* Tulip flowers */}
            <ellipse cx="25" cy="25" rx="8" ry="12" fill="#E87EA1" opacity="0.8"/>
            <ellipse cx="48" cy="20" rx="9" ry="14" fill="#D4849C" opacity="0.9"/>
            <ellipse cx="71" cy="25" rx="8" ry="12" fill="#E87EA1" opacity="0.8"/>
          </svg>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
          className="absolute -bottom-2 -right-6 w-20"
        >
          <svg viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 65 Q25 45 22 28" stroke="#A3B565" strokeWidth="2" strokeLinecap="round"/>
            <path d="M40 65 Q40 45 40 22" stroke="#A3B565" strokeWidth="2" strokeLinecap="round"/>
            <path d="M55 65 Q55 45 58 28" stroke="#A3B565" strokeWidth="2" strokeLinecap="round"/>
            <path d="M25 50 Q18 42 20 35" stroke="#A3B565" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <path d="M55 50 Q62 42 60 35" stroke="#A3B565" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <ellipse cx="22" cy="23" rx="7" ry="10" fill="#E87EA1" opacity="0.8"/>
            <ellipse cx="40" cy="18" rx="8" ry="12" fill="#D4849C" opacity="0.9"/>
            <ellipse cx="58" cy="23" rx="7" ry="10" fill="#E87EA1" opacity="0.8"/>
          </svg>
        </motion.div>
      </motion.div>

      {/* Names and Date */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-4"
      >
        <h1 className="font-script text-5xl text-pink mb-1">Octavia</h1>
        <p className="font-script text-3xl text-olive mb-1">and</p>
        <h1 className="font-script text-5xl text-olive mb-4">Fernando</h1>
        <p className="font-script text-3xl text-pink">06 Juni 2026</p>
      </motion.div>
    </section>
  );
}
