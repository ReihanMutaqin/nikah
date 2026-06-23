import { motion } from 'framer-motion';

const galleryImages = [
  { src: '/images/gallery_1.jpg', span: 'row-span-2' },
  { src: '/images/gallery_2.jpg', span: '' },
  { src: '/images/gallery_3.jpg', span: '' },
  { src: '/images/gallery_4.jpg', span: '' },
  { src: '/images/gallery_5.jpg', span: 'row-span-2' },
  { src: '/images/gallery_6.jpg', span: '' },
  { src: '/images/couple_main.jpg', span: '' },
  { src: '/images/gallery_2.jpg', span: '' },
];

export default function GallerySection() {
  return (
    <section className="relative px-4 py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-sm mx-auto"
      >
        <div className="grid grid-cols-3 gap-2 auto-rows-[100px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg ${img.span}`}
            >
              <img
                src={img.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
