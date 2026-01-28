"use client";

import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section id="contact" className="py-32 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-full bg-gradient-to-br from-primary via-blue-600 to-accent p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-50%] left-[-10%] w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-[-50%] right-[-10%] w-[400px] h-[400px] bg-black/10 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Ready to scale your <br /> visual identity?
          </h2>
          <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Let's create something powerful together. Elevate your brand with
            2026-standard visual excellence.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 rounded-full bg-white text-primary font-bold text-xl hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] transition-all"
          >
            Let's Create Something Powerful
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
