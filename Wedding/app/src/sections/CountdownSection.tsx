import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target date: June 6, 2026
    const targetDate = new Date('2026-06-06T00:00:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const padNumber = (num: number) => num.toString().padStart(2, '0');

  // Calendar data for June 2026
  const calendarDays = [
    { day: '', date: null }, { day: '', date: null }, { day: '', date: null },
    { day: 'Jum', date: null }, { day: 'Sab', date: null }, { day: 'Min', date: null },
    { day: 'Sen', date: null }, { day: 'Sel', date: null }, { day: 'Rab', date: null },
    { day: 'Kam', date: null },
    // Week 1
    { day: '', date: null }, { day: '', date: null }, { day: '', date: null },
    { day: '', date: null }, { day: '', date: null }, { day: '', date: 1 },
    { day: '', date: 2 }, { day: '', date: 3 }, { day: '', date: 4 },
    // Week 2
    { day: '', date: 5 }, { day: '', date: 6, highlight: true }, { day: '', date: 7 },
    { day: '', date: 8 }, { day: '', date: 9 }, { day: '', date: 10 },
    { day: '', date: 11 }, { day: '', date: 12 }, { day: '', date: 13 },
    // Week 3
    { day: '', date: 14 }, { day: '', date: 15 }, { day: '', date: 16 },
    { day: '', date: 17 }, { day: '', date: 18 }, { day: '', date: 19 },
    { day: '', date: 20 }, { day: '', date: 21 }, { day: '', date: 22 },
    // Week 4
    { day: '', date: 23 }, { day: '', date: 24 }, { day: '', date: 25 },
    { day: '', date: 26 }, { day: '', date: 27 }, { day: '', date: 28 },
    { day: '', date: 29 }, { day: '', date: 30 }, { day: '', date: null },
  ];

  return (
    <section id="date" className="relative px-6 py-16 overflow-hidden">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="font-script text-4xl text-pink">Save The Date</h2>
      </motion.div>

      {/* Countdown Timer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center gap-4 mb-8"
      >
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-14 h-14 flex items-center justify-center rounded-lg mb-1" style={{ backgroundColor: 'rgba(163, 181, 101, 0.15)' }}>
              <span className="font-script text-2xl text-olive">{padNumber(item.value)}</span>
            </div>
            <span className="font-hand text-xs text-dark">{item.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Month and Year */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mb-4"
      >
        <p className="font-script text-2xl text-pink">Juni 2026</p>
      </motion.div>

      {/* Calendar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-xs mx-auto"
      >
        <div className="grid grid-cols-10 gap-1">
          {calendarDays.map((item, index) => {
            if (item.date === null && item.day === '') {
              return <div key={index} className="w-7 h-7" />;
            }
            if (item.date === null) {
              return (
                <div key={index} className="w-7 h-7 flex items-center justify-center">
                  <span className="font-hand text-xs text-olive">{item.day}</span>
                </div>
              );
            }
            return (
              <div 
                key={index} 
                className={`w-7 h-7 flex items-center justify-center rounded-full ${
                  item.highlight 
                    ? 'ring-2 ring-pink bg-pink/10' 
                    : ''
                }`}
              >
                <span className={`font-hand text-sm ${item.highlight ? 'text-pink font-bold' : 'text-dark'}`}>
                  {item.date}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
