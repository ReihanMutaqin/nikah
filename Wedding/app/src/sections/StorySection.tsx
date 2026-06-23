import { motion } from 'framer-motion';

export default function StorySection() {
  return (
    <section id="story" className="relative px-6 py-16 overflow-hidden">
      {/* Opening Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="font-hand text-lg text-olive tracking-wider leading-relaxed max-w-xs mx-auto">
          TWO PEOPLE, RAISED IN DIFFERENT PLACES,<br/>
          BROUGHT TOGETHER BY FATE...
        </p>
      </motion.div>

      {/* Indonesia Map */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-sm mx-auto mb-10 h-80"
      >
        <svg viewBox="0 0 320 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Sumatra - Batam area */}
          <path d="M40 60 Q35 50 45 45 Q55 40 60 50 Q65 55 62 65 Q58 75 50 80 Q42 78 40 70 Z" 
                fill="#A3B565" opacity="0.6" stroke="#A3B565" strokeWidth="1.5"/>
          <path d="M45 55 Q48 52 52 55 Q55 58 52 62 Q48 65 45 62 Q42 58 45 55" 
                fill="#8FA355" opacity="0.8"/>
          
          {/* Java - Jawa Tengah */}
          <path d="M100 200 Q95 195 100 185 Q110 180 120 185 Q130 190 135 200 Q140 210 135 220 Q130 230 120 235 Q110 238 105 230 Q100 220 100 210 Z" 
                fill="#D4849C" opacity="0.5" stroke="#D4849C" strokeWidth="1.5"/>
          <path d="M112 202 Q116 198 120 202 Q124 206 120 210 Q116 214 112 210 Q108 206 112 202" 
                fill="#C07088" opacity="0.7"/>
          
          {/* Kalimantan */}
          <path d="M160 80 Q155 70 165 65 Q180 60 195 65 Q210 70 215 80 Q220 90 215 100 Q210 110 200 115 Q185 118 170 115 Q160 110 158 100 Q156 90 160 80 Z" 
                fill="#A3B565" opacity="0.3" stroke="#A3B565" strokeWidth="1"/>
          
          {/* Sulawesi */}
          <path d="M230 120 Q225 115 230 110 Q240 108 245 115 Q248 125 245 135 Q242 145 238 150 Q233 148 232 140 Q231 130 230 120 Z" 
                fill="#A3B565" opacity="0.3" stroke="#A3B565" strokeWidth="1"/>
          
          {/* Bali & Nusa Tenggara */}
          <path d="M145 240 Q142 235 145 232 Q150 230 153 235 Q155 240 152 245 Q148 248 145 245 Z" 
                fill="#D4849C" opacity="0.4" stroke="#D4849C" strokeWidth="1"/>
          <path d="M155 255 Q152 250 155 247 Q160 245 163 250 Q165 255 162 260 Q158 263 155 260 Z" 
                fill="#D4849C" opacity="0.4" stroke="#D4849C" strokeWidth="1"/>
          
          {/* Papua */}
          <path d="M260 220 Q255 210 265 205 Q280 200 295 205 Q310 210 315 220 Q320 230 315 240 Q310 250 300 255 Q285 258 270 255 Q260 250 258 240 Q256 230 260 220 Z" 
                fill="#A3B565" opacity="0.3" stroke="#A3B565" strokeWidth="1"/>

          {/* Connection line with heart */}
          <path 
            d="M65 75 Q90 120 120 140 Q140 155 135 170 Q130 185 150 190 Q170 195 175 175 Q180 155 165 150 Q150 145 145 160" 
            stroke="#D4849C" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeDasharray="6 4"
            fill="none"
          />
          
          {/* Heart shape in the middle of the path */}
          <path d="M130 145 Q125 138 130 133 Q135 128 140 133 Q145 128 150 133 Q155 138 150 145 L140 158 Z" 
                fill="#E87EA1" opacity="0.8"/>

          {/* Labels */}
          <text x="30" y="95" fontFamily="Patrick Hand, cursive" fontSize="12" fill="#A3B565">Batam</text>
          <text x="95" y="255" fontFamily="Patrick Hand, cursive" fontSize="12" fill="#D4849C">Jawa Tengah</text>
          
          {/* "From" and "to" labels */}
          <text x="75" y="110" fontFamily="Dancing Script, cursive" fontSize="14" fill="#D4849C">From Batam</text>
          <text x="160" y="185" fontFamily="Dancing Script, cursive" fontSize="14" fill="#D4849C">to Jawa Tengah</text>
        </svg>
      </motion.div>

      {/* Childhood Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <p className="font-hand text-lg text-pink tracking-wider leading-relaxed max-w-xs mx-auto">
          ONCE TWO LITTLE KIDS<br/>
          WITH THEIR OWN STORIES...
        </p>
      </motion.div>

      {/* Childhood Photos */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center gap-4 mb-10"
      >
        {/* Bride Childhood */}
        <div className="relative">
          <svg viewBox="0 0 140 160" className="w-32 h-36">
            <rect x="5" y="5" width="130" height="150" rx="4" fill="none" stroke="#A3B565" strokeWidth="2" strokeLinecap="round"/>
            <rect x="12" y="12" width="116" height="116" rx="2" fill="none" stroke="#D4849C" strokeWidth="1" opacity="0.3"/>
          </svg>
          <div className="absolute top-3 left-3 right-3 bottom-10 overflow-hidden">
            <img src="/images/childhood_bride.jpg" alt="Octavia childhood" className="w-full h-full object-cover"/>
          </div>
          <p className="absolute bottom-2 left-0 right-0 text-center font-hand text-xs text-olive">Octavia, 2000</p>
        </div>

        {/* Groom Childhood */}
        <div className="relative">
          <svg viewBox="0 0 140 160" className="w-32 h-36">
            <rect x="5" y="5" width="130" height="150" rx="4" fill="none" stroke="#D4849C" strokeWidth="2" strokeLinecap="round"/>
            <rect x="12" y="12" width="116" height="116" rx="2" fill="none" stroke="#A3B565" strokeWidth="1" opacity="0.3"/>
          </svg>
          <div className="absolute top-3 left-3 right-3 bottom-10 overflow-hidden">
            <img src="/images/childhood_groom.jpg" alt="Fernando childhood" className="w-full h-full object-cover"/>
          </div>
          <p className="absolute bottom-2 left-0 right-0 text-center font-hand text-xs text-pink">Fernando, 1998</p>
        </div>
      </motion.div>

      {/* Couple Photo with Doodle Frame */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-xs mx-auto"
      >
        <svg viewBox="0 0 320 400" className="w-full" preserveAspectRatio="xMidYMid meet">
          {/* Squiggly doodle frame */}
          <path 
            d="M15 20 Q30 10 50 18 Q70 8 90 16 Q110 6 130 15 Q150 5 170 14 Q190 6 210 15 Q230 7 250 16 Q270 8 290 18 Q310 12 305 35 Q312 55 305 75 Q312 95 305 115 Q312 135 305 155 Q312 175 305 195 Q312 215 305 235 Q312 255 305 275 Q312 295 305 315 Q312 335 305 355 Q310 378 290 385 Q270 392 250 385 Q230 392 210 385 Q190 392 170 385 Q150 392 130 385 Q110 392 90 385 Q70 392 50 385 Q30 392 15 380 Q8 360 15 340 Q8 320 15 300 Q8 280 15 260 Q8 240 15 220 Q8 200 15 180 Q8 160 15 140 Q8 120 15 100 Q8 80 15 60 Q8 40 15 20 Z" 
            fill="none" 
            stroke="#A3B565" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          {/* Decorative doodles */}
          <path d="M20 25 Q25 20 30 25" stroke="#D4849C" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M280 30 Q285 25 290 30" stroke="#D4849C" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M25 370 Q30 375 35 370" stroke="#D4849C" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M290 365 Q295 370 300 365" stroke="#D4849C" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          {/* Small hearts */}
          <path d="M300 50 Q298 46 300 44 Q302 46 304 44 Q306 46 304 50 L300 55 Z" fill="#E87EA1" opacity="0.7"/>
          <path d="M20 350 Q18 346 20 344 Q22 346 24 344 Q26 346 24 350 L20 355 Z" fill="#E87EA1" opacity="0.7"/>
          {/* Star */}
          <path d="M25 45 L27 50 L32 50 L28 53 L30 58 L25 55 L20 58 L22 53 L18 50 L23 50 Z" fill="#A3B565" opacity="0.5"/>
        </svg>
        <div className="absolute top-8 left-8 right-8 bottom-8 overflow-hidden">
          <img src="/images/couple_main.jpg" alt="Octavia & Fernando" className="w-full h-full object-cover"/>
        </div>
      </motion.div>
    </section>
  );
}
