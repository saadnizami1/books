import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-nizami-charcoal via-pakistan-green to-nizami-charcoal relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-nizami-gold/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-desert-orange/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 md:space-y-6"
        >
          <div className="inline-block p-4 bg-nizami-gold/20 rounded-full mb-2 md:mb-4">
            <Mail size={28} className="text-nizami-gold md:hidden" />
            <Mail size={32} className="text-nizami-gold hidden md:block" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Stay Updated
          </h2>

          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Join the newsletter for updates on new releases, insights, and exclusive content on power, politics, and the stories that shape our world.
          </p>

          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="mt-6 md:mt-8 max-w-md mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  autoComplete="email"
                  className="flex-1 px-5 md:px-6 py-4 bg-white/10 border border-white/20 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nizami-gold focus:border-transparent transition-all text-base"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 md:px-8 py-4 bg-nizami-gold text-nizami-charcoal font-display font-bold tracking-wider rounded-sm hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </div>
              <p className="text-xs text-gray-400 mt-3 md:mt-4">
                No spam. Just thoughtful analysis delivered occasionally.
              </p>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 md:mt-8 p-6 bg-nizami-gold/20 border border-nizami-gold/30 rounded-sm max-w-md mx-auto"
            >
              <div className="flex items-center justify-center gap-3 text-nizami-gold">
                <CheckCircle size={24} />
                <p className="font-display text-lg font-semibold">
                  Thanks for joining!
                </p>
              </div>
              <p className="text-gray-300 text-sm mt-2">
                Your email has been registered successfully.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
