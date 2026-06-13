import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book } from '../types';
import { BookOpen, Star, ChevronRight } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../constants';

interface BookCardProps {
  book: Book;
  index: number;
}

export const BookCard: React.FC<BookCardProps> = ({ book, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 md:gap-12 py-12 md:py-20`}
    >
      {/* Visual / Cover Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <motion.div
          className="relative group cursor-pointer"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Book Cover */}
          <a
            href={book.amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className={`w-56 h-[21rem] sm:w-64 sm:h-[24rem] md:w-72 md:h-[28rem] lg:w-80 lg:h-[32rem] rounded-r-2xl rounded-l-sm shadow-2xl relative z-10 overflow-hidden flex flex-col ${book.coverColor} text-white p-6 md:p-8 transition-shadow duration-300 ${isHovered ? 'shadow-nizami-gold/30' : 'shadow-black/40'}`}>
              <div className="absolute top-0 left-0 w-4 h-full bg-black/20 border-r border-white/10"></div>

              {book.coverImage ? (
                <img
                  src={book.coverImage}
                  alt={`${book.title} cover`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="flex-1 border-2 border-white/20 p-4 flex flex-col justify-between relative">
                   <div>
                     <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-2">{book.title}</h3>
                     <p className="font-sans text-sm opacity-90 font-light tracking-wide">{book.subtitle}</p>
                   </div>
                   <div className="text-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 border border-white/40 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Star size={14} fill="currentColor" className="text-white/80" />
                      </div>
                   </div>
                   <p className="font-display text-xs md:text-sm text-center tracking-widest uppercase">Muhammad Saad Nizami</p>
                </div>
              )}
            </div>
          </a>

          {/* Book Spine Effect */}
          <div className={`absolute top-1 left-1 w-56 h-[21rem] sm:w-64 sm:h-[24rem] md:w-72 md:h-[28rem] lg:w-80 lg:h-[32rem] rounded-r-2xl rounded-l-sm ${book.coverColor} -z-10 brightness-50 translate-x-2 translate-y-2`}></div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 space-y-5 md:space-y-6 px-0 lg:px-0">
        <div className="flex flex-wrap gap-2 mb-2 md:mb-4">
          {book.tags.map(tag => (
            <span key={tag} className="px-3 py-1 border border-nizami-charcoal/20 rounded-full text-xs uppercase tracking-widest font-semibold text-nizami-charcoal/60">
              {tag}
            </span>
          ))}
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-nizami-charcoal leading-tight">
          {book.title}
        </h2>

        <div className="space-y-3 md:space-y-4 font-sans text-base md:text-lg text-gray-600 leading-relaxed">
          {book.longDescription.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="pt-5 md:pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 md:gap-6">
            <div className="flex gap-8 sm:gap-0 sm:contents">
              <div className="space-y-1">
                <p className="text-xs md:text-sm uppercase tracking-wider text-gray-500">Paperback</p>
                <p className="font-display text-xl md:text-2xl font-bold">PKR {book.pricePaperback}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs md:text-sm uppercase tracking-wider text-gray-500">Hardcover</p>
                <p className="font-display text-xl md:text-2xl font-bold">PKR {book.priceHardcover}</p>
              </div>
            </div>

            <motion.a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full sm:w-auto px-6 md:px-8 py-4 ${book.coverColor} text-white rounded-sm font-display tracking-wide flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all`}
            >
              <BookOpen size={18} />
              Place Order
              <ChevronRight size={18} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
