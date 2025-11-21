import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { BookCard } from './components/BookCard';
import { BOOKS, AUTHOR, GOOGLE_FORM_URL, TESTIMONIALS } from './constants';
import { Instagram, Twitter, Mail, ArrowRight, Quote } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen relative">
      <Navigation />

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-nizami-gold uppercase tracking-[0.3em] text-sm md:text-base"
          >
            Exquisite Reads for the Modern Intellect
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-nizami-charcoal"
          >
            Where History <br /> Meets Reality
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-4 pt-8"
          >
            <a href="#books" className="group flex items-center gap-3 text-lg font-serif italic hover:text-nizami-gold transition-colors">
              Explore the Collection 
              <span className="block w-8 h-[1px] bg-current group-hover:w-12 transition-all"></span>
            </a>
          </motion.div>
        </div>
      </header>

      {/* Books Section */}
      <section id="books" className="py-24 px-6 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-nizami-cream to-white"></div>
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-display text-4xl font-bold">The Collection</h2>
            <div className="w-24 h-1 bg-nizami-gold mx-auto"></div>
          </div>
          
          {BOOKS.map((book, index) => (
            <BookCard key={book.id} book={book} index={index} />
          ))}
        </div>
      </section>

      {/* About Author Section */}
      <section id="about" className="py-24 px-6 bg-nizami-charcoal text-nizami-cream relative overflow-hidden">
        {/* Decorative BG Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-1/4"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/3">
              <div className="aspect-[3/4] bg-gray-800 rounded-sm border-4 border-white/10 relative overflow-hidden group">
                 {/* Placeholder for author image */}
                 <div className="absolute inset-0 flex items-center justify-center bg-nizami-gold/20 group-hover:bg-nizami-gold/30 transition-colors">
                    <span className="font-display text-6xl opacity-20 font-bold text-white">MSN</span>
                 </div>
                 <img 
                   src="https://placehold.co/600x800/1a1a1a/FFF?text=Muhammad+Saad+Nizami" 
                   alt="Muhammad Saad Nizami" 
                   className="object-cover w-full h-full opacity-80 mix-blend-overlay grayscale hover:grayscale-0 transition-all duration-700"
                 />
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <h2 className="font-display text-4xl md:text-5xl font-bold">About the Author</h2>
              <div className="space-y-6 font-serif text-lg text-gray-300 leading-relaxed">
                {AUTHOR.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="pt-8">
                 <div className="text-nizami-gold font-sans uppercase tracking-widest text-sm mb-2">Author of</div>
                 <div className="flex flex-wrap gap-4">
                    {BOOKS.map(b => (
                        <span key={b.id} className="border border-white/20 px-4 py-2 rounded-full text-sm hover:bg-white/10 transition-colors cursor-default">{b.title}</span>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="font-display text-4xl font-bold text-nizami-charcoal mb-4">Reader Acclaim</h2>
             <div className="w-16 h-[1px] bg-nizami-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, index) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative p-8 border border-gray-100 bg-nizami-cream/30 hover:bg-nizami-cream/80 hover:shadow-lg transition-all duration-500 rounded-sm group"
              >
                <div className="absolute -top-5 left-8 w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-nizami-gold shadow-sm">
                  <Quote size={16} fill="currentColor" />
                </div>
                <p className="font-serif text-lg text-gray-600 italic leading-relaxed mb-8 mt-4">
                  "{t.quote}"
                </p>
                <div>
                  <h4 className="font-display font-bold text-nizami-charcoal tracking-wide">{t.author}</h4>
                  <p className="font-sans text-xs text-nizami-gold uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="py-24 px-6 bg-nizami-cream border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="font-display text-4xl font-bold">Connect on Nizami Street</h2>
          <p className="font-sans text-gray-600 max-w-2xl mx-auto">
            For inquiries regarding book orders, bulk purchases, or speaking engagements, please reach out. 
            Join the intellectual revolution.
          </p>
          
          <div className="flex justify-center gap-8">
            <a href="#" className="p-4 bg-white rounded-full shadow-md hover:shadow-xl hover:text-nizami-gold transition-all hover:-translate-y-1">
              <Twitter size={24} />
            </a>
            <a href="#" className="p-4 bg-white rounded-full shadow-md hover:shadow-xl hover:text-nizami-gold transition-all hover:-translate-y-1">
              <Instagram size={24} />
            </a>
            <a href="mailto:contact@nizamistreet.com" className="p-4 bg-white rounded-full shadow-md hover:shadow-xl hover:text-nizami-gold transition-all hover:-translate-y-1">
              <Mail size={24} />
            </a>
          </div>

          <div className="mt-16 p-8 border border-nizami-charcoal/10 rounded-lg bg-white/50">
            <h3 className="font-display text-xl font-bold mb-4">Ready to read?</h3>
            <a 
              href={GOOGLE_FORM_URL} 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-12 py-4 bg-nizami-charcoal text-white font-bold tracking-wider hover:bg-nizami-gold transition-colors duration-300"
            >
              ORDER YOUR COPY <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display font-bold text-xl">NIZAMI STREET</div>
          <p className="font-sans text-sm text-gray-500">
            © {new Date().getFullYear()} Nizami Street. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;