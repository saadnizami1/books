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
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 py-20`}
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
          {/* Abstract Book Cover Generation */}
          <div className={`w-72 h-[28rem] md:w-80 md:h-[32rem] rounded-r-2xl rounded-l-sm shadow-2xl relative z-10 overflow-hidden flex flex-col ${book.coverColor} text-white p-8 transition-shadow duration-300 ${isHovered ? 'shadow-nizami-gold/30' : 'shadow-black/40'}`}>
            <div className="absolute top-0 left-0 w-4 h-full bg-black/20 border-r border-white/10"></div>
            <div className="flex-1 border-2 border-white/20 p-4 flex flex-col justify-between relative">
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>
               <div>
                 <h3 className="font-display text-3xl font-bold leading-tight mb-2">{book.title}</h3>
                 <p className="font-sans text-sm opacity-90 font-light tracking-wide">{book.subtitle}</p>
               </div>
               <div className="text-center">
                  <div className="w-12 h-12 border border-white/40 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Star size={16} fill="currentColor" className="text-white/80" />
                  </div>
               </div>
               <p className="font-display text-sm text-center tracking-widest uppercase">Muhammad Saad Nizami</p>
            </div>
          </div>
          
          {/* Book Spine Effect */}
          <div className={`absolute top-1 left-1 w-72 h-[28rem] md:w-80 md:h-[32rem] rounded-r-2xl rounded-l-sm ${book.coverColor} -z-10 brightness-50 translate-x-2 translate-y-2`}></div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 space-y-6 px-4 lg:px-0">
        <div className="flex gap-2 mb-4">
          {book.tags.map(tag => (
            <span key={tag} className="px-3 py-1 border border-nizami-charcoal/20 rounded-full text-xs uppercase tracking-widest font-semibold text-nizami-charcoal/60">
              {tag}
            </span>
          ))}
        </div>
        
        <h2 className="font-display text-4xl md:text-5xl font-bold text-nizami-charcoal leading-tight">
          {book.title}
        </h2>
        
        <div className="space-y-4 font-sans text-lg text-gray-600 leading-relaxed">
          {book.longDescription.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <p className="text-sm uppercase tracking-wider text-gray-500">Paperback</p>
              <p className="font-display text-2xl font-bold">PKR {book.pricePaperback}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm uppercase tracking-wider text-gray-500">Hardcover</p>
              <p className="font-display text-2xl font-bold">PKR {book.priceHardcover}</p>
            </div>
            
            <motion.a 
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 ${book.coverColor} text-white rounded-sm font-display tracking-wide flex items-center gap-2 shadow-lg hover:shadow-xl transition-all`}
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