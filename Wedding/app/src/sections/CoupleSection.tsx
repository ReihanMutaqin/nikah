import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

export default function CoupleSection() {
  return (
    <section id="couple" className="relative px-6 py-16 overflow-hidden">
      {/* Invitation Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="font-hand text-base text-olive leading-relaxed max-w-xs mx-auto">
          With the grace and blessings<br/>
          from Allah SWT,<br/>
          We warmly invite you to<br/>
          the wedding of :
        </p>
      </motion.div>

      {/* Two Chairs Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-10"
      >
        <svg viewBox="0 0 200 120" className="w-48 h-28">
          {/* Left Chair */}
          <ellipse cx="55" cy="40" rx="22" ry="8" fill="none" stroke="#D4849C" strokeWidth="1.5"/>
          <line x1="40" y1="40" x2="38" y2="100" stroke="#D4849C" strokeWidth="1.5"/>
          <line x1="70" y1="40" x2="72" y2="100" stroke="#D4849C" strokeWidth="1.5"/>
          <line x1="45" y1="65" x2="65" y2="65" stroke="#D4849C" strokeWidth="1"/>
          <path d="M38 100 Q38 105 42 105" stroke="#D4849C" strokeWidth="1.5" fill="none"/>
          <path d="M72 100 Q72 105 68 105" stroke="#D4849C" strokeWidth="1.5" fill="none"/>
          {/* Backrest pattern */}
          <path d="M45 30 Q55 25 65 30" stroke="#D4849C" strokeWidth="1" fill="none" opacity="0.5"/>
          <path d="M43 35 Q55 30 67 35" stroke="#D4849C" strokeWidth="1" fill="none" opacity="0.5"/>

          {/* Right Chair */}
          <ellipse cx="145" cy="40" rx="22" ry="8" fill="none" stroke="#D4849C" strokeWidth="1.5"/>
          <line x1="130" y1="40" x2="128" y2="100" stroke="#D4849C" strokeWidth="1.5"/>
          <line x1="160" y1="40" x2="162" y2="100" stroke="#D4849C" strokeWidth="1.5"/>
          <line x1="135" y1="65" x2="155" y2="65" stroke="#D4849C" strokeWidth="1"/>
          <path d="M128 100 Q128 105 132 105" stroke="#D4849C" strokeWidth="1.5" fill="none"/>
          <path d="M162 100 Q162 105 158 105" stroke="#D4849C" strokeWidth="1.5" fill="none"/>
          {/* Backrest pattern */}
          <path d="M135 30 Q145 25 155 30" stroke="#D4849C" strokeWidth="1" fill="none" opacity="0.5"/>
          <path d="M133 35 Q145 30 157 35" stroke="#D4849C" strokeWidth="1" fill="none" opacity="0.5"/>

          {/* Table between chairs */}
          <ellipse cx="100" cy="55" rx="15" ry="6" fill="none" stroke="#D4849C" strokeWidth="1.5"/>
          <line x1="92" y1="55" x2="90" y2="95" stroke="#D4849C" strokeWidth="1.5"/>
          <line x1="108" y1="55" x2="110" y2="95" stroke="#D4849C" strokeWidth="1.5"/>
          <ellipse cx="100" cy="95" rx="12" ry="4" fill="none" stroke="#D4849C" strokeWidth="1.5"/>
          
          {/* Small items on table */}
          <circle cx="96" cy="50" r="3" fill="#A3B565" opacity="0.5"/>
          <circle cx="104" cy="50" r="2.5" fill="#D4849C" opacity="0.5"/>
        </svg>
      </motion.div>

      {/* Bride Profile */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="relative w-48 h-60 mx-auto mb-4">
          {/* Ornate Pink Frame SVG */}
          <svg viewBox="0 0 192 240" className="absolute inset-0 w-full h-full">
            <path 
              d="M10 20 Q10 10 20 10 Q30 5 40 10 Q50 5 60 10 Q70 5 80 10 Q90 5 96 8 Q102 5 112 10 Q122 5 132 10 Q142 5 152 10 Q162 5 172 10 Q182 10 182 20 Q187 30 182 40 Q187 50 182 60 Q187 70 182 80 Q187 90 182 100 Q187 110 182 120 Q187 130 182 140 Q187 150 182 160 Q187 170 182 180 Q187 190 182 200 Q187 210 182 220 Q182 230 172 230 Q162 235 152 230 Q142 235 132 230 Q122 235 112 230 Q102 235 96 232 Q90 235 80 230 Q70 235 60 230 Q50 235 40 230 Q30 235 20 230 Q10 230 10 220 Q5 210 10 200 Q5 190 10 180 Q5 170 10 160 Q5 150 10 140 Q5 130 10 120 Q5 110 10 100 Q5 90 10 80 Q5 70 10 60 Q5 50 10 40 Q5 30 10 20 Z" 
              fill="none" 
              stroke="#D4849C" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
            {/* Inner decorative line */}
            <path 
              d="M18 25 Q18 18 25 18 Q32 14 40 18 Q48 14 56 18 Q64 14 72 18 Q80 14 88 18 Q96 14 96 16 Q104 14 112 18 Q120 14 128 18 Q136 14 144 18 Q152 14 160 18 Q168 14 174 18 Q174 25 178 32 Q174 40 178 48 Q174 56 178 64 Q174 72 178 80 Q174 88 178 96 Q174 104 178 112 Q174 120 178 128 Q174 136 178 144 Q174 152 178 160 Q174 168 178 176 Q174 184 178 192 Q174 200 178 208 Q174 215 174 222 Q168 226 160 222 Q152 226 144 222 Q136 226 128 222 Q120 226 112 222 Q104 226 96 224 Q88 226 80 222 Q72 226 64 222 Q56 226 48 222 Q40 226 32 222 Q25 226 18 222 Q18 215 14 208 Q18 200 14 192 Q18 184 14 176 Q18 168 14 160 Q18 152 14 144 Q18 136 14 128 Q18 120 14 112 Q18 104 14 96 Q18 88 14 80 Q18 72 14 64 Q18 56 14 48 Q18 40 14 32 Q18 25 18 25 Z" 
              fill="none" 
              stroke="#D4849C" 
              strokeWidth="1" 
              strokeLinecap="round"
              opacity="0.4"
            />
          </svg>
          <div className="absolute top-5 left-5 right-5 bottom-5 overflow-hidden">
            <img src="/images/bride_portrait.jpg" alt="Octavia" className="w-full h-full object-cover"/>
          </div>
        </div>

        <h3 className="font-script text-3xl text-pink mb-1">Octavia Noor</h3>
        <p className="font-script text-lg text-pink mb-1">Isnaeni, S.M.</p>
        <p className="font-hand text-sm text-dark mb-2">
          Putri Pertama dari<br/>
          Bapak Zulianto & Ibu Bianah
        </p>
        <a 
          href="#" 
          onClick={(e) => e.preventDefault()}
          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-pink/10 hover:bg-pink/20 transition-colors"
        >
          <Instagram size={16} className="text-pink" />
        </a>
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex justify-center mb-10"
      >
        <span className="font-script text-4xl text-pink">&</span>
      </motion.div>

      {/* Groom Profile */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="relative w-48 h-60 mx-auto mb-4">
          {/* Ornate Green Frame SVG */}
          <svg viewBox="0 0 192 240" className="absolute inset-0 w-full h-full">
            <path 
              d="M15 15 Q25 8 35 15 Q45 8 55 15 Q65 8 75 15 Q85 8 96 12 Q107 8 117 15 Q127 8 137 15 Q147 8 157 15 Q167 8 177 15 Q185 20 180 30 Q185 40 180 50 Q185 60 180 70 Q185 80 180 90 Q185 100 180 110 Q185 120 180 130 Q185 140 180 150 Q185 160 180 170 Q185 180 180 190 Q185 200 180 210 Q185 220 177 225 Q167 232 157 225 Q147 232 137 225 Q127 232 117 225 Q107 232 96 228 Q85 232 75 225 Q65 232 55 225 Q45 232 35 225 Q25 232 15 225 Q7 220 12 210 Q7 200 12 190 Q7 180 12 170 Q7 160 12 150 Q7 140 12 130 Q7 120 12 110 Q7 100 12 90 Q7 80 12 70 Q7 60 12 50 Q7 40 12 30 Q7 20 15 15 Z" 
              fill="none" 
              stroke="#A3B565" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
            {/* Inner decorative line */}
            <path 
              d="M22 22 Q28 16 36 22 Q44 16 52 22 Q60 16 68 22 Q76 16 84 22 Q92 16 96 19 Q100 16 108 22 Q116 16 124 22 Q132 16 140 22 Q148 16 156 22 Q164 16 170 22 Q176 26 172 34 Q176 42 172 50 Q176 58 172 66 Q176 74 172 82 Q176 90 172 98 Q176 106 172 114 Q176 122 172 130 Q176 138 172 146 Q176 154 172 162 Q176 170 172 178 Q176 186 172 194 Q176 202 172 210 Q176 218 170 222 Q164 226 156 222 Q148 226 140 222 Q132 226 124 222 Q116 226 108 222 Q100 226 96 223 Q92 226 84 222 Q76 226 68 222 Q60 226 52 222 Q44 226 36 222 Q28 226 22 222 Q16 218 20 210 Q16 202 20 194 Q16 186 20 178 Q16 170 20 162 Q16 154 20 146 Q16 138 20 130 Q16 122 20 114 Q16 106 20 98 Q16 90 20 82 Q16 74 20 66 Q16 58 20 50 Q16 42 20 34 Q16 26 22 22 Z" 
              fill="none" 
              stroke="#A3B565" 
              strokeWidth="1" 
              strokeLinecap="round"
              opacity="0.4"
            />
          </svg>
          <div className="absolute top-5 left-5 right-5 bottom-5 overflow-hidden">
            <img src="/images/groom_portrait.jpg" alt="Fernando" className="w-full h-full object-cover"/>
          </div>
        </div>

        <h3 className="font-script text-3xl text-olive mb-1">Fernando</h3>
        <p className="font-script text-lg text-olive mb-1">Ardyansyah</p>
        <p className="font-hand text-sm text-dark mb-2">
          Putra Kedua dari<br/>
          Bapak Seow Yeow Teck & Ibu Sri Artati
        </p>
        <a 
          href="#" 
          onClick={(e) => e.preventDefault()}
          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-olive/10 hover:bg-olive/20 transition-colors"
        >
          <Instagram size={16} className="text-olive" />
        </a>
      </motion.div>
    </section>
  );
}
