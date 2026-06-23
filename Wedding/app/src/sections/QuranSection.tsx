import { motion } from 'framer-motion';

export default function QuranSection() {
  return (
    <section className="relative px-6 py-16 overflow-hidden">
      {/* Subtle floral watermark background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <path d="M100 20 Q110 40 100 60 Q90 40 100 20" fill="#A3B565"/>
          <path d="M100 60 Q120 70 130 90 Q110 80 100 60" fill="#D4849C"/>
          <path d="M100 60 Q80 70 70 90 Q90 80 100 60" fill="#D4849C"/>
          <circle cx="100" cy="60" r="5" fill="#A3B565"/>
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-sm mx-auto relative"
      >
        {/* Surah Title */}
        <p className="font-hand text-lg text-pink mb-6">Surah Ar-Rum (30: 21)</p>

        {/* Arabic Text */}
        <p className="font-arabic text-2xl leading-loose text-dark mb-6" dir="rtl">
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
        </p>

        {/* Translation */}
        <p className="font-hand text-base text-dark leading-relaxed italic">
          "And among His signs is that He created for you spouses from among yourselves, so that you may find tranquility in them, and He placed between you affection and mercy. Indeed, in that are signs for people who reflect."
        </p>
      </motion.div>
    </section>
  );
}
