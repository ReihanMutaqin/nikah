import { useState } from 'react';
import { motion } from 'framer-motion';

interface RSVPData {
  name: string;
  message: string;
  attendance: string;
}

interface Comment {
  id: number;
  name: string;
  message: string;
  attendance: string;
  timestamp: string;
}

const initialComments: Comment[] = [
  {
    id: 1,
    name: 'Ahmad',
    message: 'Selamat menempuh hidup baru! Semoga bahagia selalu.',
    attendance: 'Hadir',
    timestamp: '2 jam yang lalu',
  },
  {
    id: 2,
    name: 'Siti',
    message: 'Happy wedding! Maaf tidak bisa hadir.',
    attendance: 'Tidak Hadir',
    timestamp: '5 jam yang lalu',
  },
];

export default function RSVPSection() {
  const [formData, setFormData] = useState<RSVPData>({
    name: '',
    message: '',
    attendance: '',
  });
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [stats, setStats] = useState({ hadir: 1, tidakHadir: 1, ragu: 0 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.attendance) return;

    const newComment: Comment = {
      id: Date.now(),
      name: formData.name,
      message: formData.message,
      attendance: formData.attendance,
      timestamp: 'Baru saja',
    };

    setComments([newComment, ...comments]);
    
    // Update stats
    const newStats = { ...stats };
    if (formData.attendance === 'Hadir') newStats.hadir++;
    else if (formData.attendance === 'Tidak Hadir') newStats.tidakHadir++;
    else if (formData.attendance === 'Masih Ragu') newStats.ragu++;
    setStats(newStats);

    // Reset form
    setFormData({ name: '', message: '', attendance: '' });
  };

  return (
    <section id="rsvp" className="relative px-6 py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-sm mx-auto"
      >
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="font-script text-4xl text-pink mb-1">RSVP</h2>
          <p className="font-hand text-sm text-olive">
            Konfirmasi Kehadiran<br/>
            & Ucapan untuk mempelai
          </p>
        </div>

        {/* Stats */}
        <div className="text-center mb-6">
          <p className="font-hand text-sm text-pink mb-3">{comments.length} Comments</p>
          <div className="flex justify-center gap-4">
            {[
              { label: 'Hadir', count: stats.hadir },
              { label: 'Tidak Hadir', count: stats.tidakHadir },
              { label: 'Masih Ragu', count: stats.ragu },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center px-4 py-2 rounded-lg border"
                style={{ borderColor: 'var(--border-sketch)' }}
              >
                <span className="font-script text-xl text-olive">{stat.count}</span>
                <span className="font-hand text-xs text-dark">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3 mb-8">
          <input
            type="text"
            placeholder="Nama"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border font-hand text-sm bg-white/50 focus:outline-none focus:ring-2 focus:ring-pink/30"
            style={{ borderColor: 'var(--border-sketch)' }}
          />
          <textarea
            placeholder="Ucapan"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border font-hand text-sm bg-white/50 focus:outline-none focus:ring-2 focus:ring-pink/30 resize-none"
            style={{ borderColor: 'var(--border-sketch)' }}
          />
          <select
            value={formData.attendance}
            onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border font-hand text-sm bg-white/50 focus:outline-none focus:ring-2 focus:ring-pink/30 appearance-none"
            style={{ borderColor: 'var(--border-sketch)' }}
          >
            <option value="">Konfirmasi Kehadiran</option>
            <option value="Hadir">Hadir</option>
            <option value="Tidak Hadir">Tidak Hadir</option>
            <option value="Masih Ragu">Masih Ragu</option>
          </select>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 rounded-lg font-hand text-white text-base transition-colors"
            style={{ backgroundColor: 'var(--text-pink)' }}
          >
            Kirim
          </motion.button>
        </form>

        {/* Comments Wall */}
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {comments.map((comment) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-3 rounded-lg border bg-white/30"
              style={{ borderColor: 'var(--border-sketch)' }}
            >
              <div className="flex justify-between items-start mb-1">
                <span className="font-hand text-sm font-medium text-dark">{comment.name}</span>
                <span className={`font-hand text-xs px-2 py-0.5 rounded-full ${
                  comment.attendance === 'Hadir' 
                    ? 'bg-green-100 text-green-700' 
                    : comment.attendance === 'Tidak Hadir'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {comment.attendance}
                </span>
              </div>
              <p className="font-hand text-sm text-dark/80">{comment.message}</p>
              <p className="font-hand text-xs text-dark/50 mt-1">{comment.timestamp}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
