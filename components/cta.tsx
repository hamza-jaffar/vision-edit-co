"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CTA_CONTENT, NAV_LINKS } from "@/lib/constants";

const CTA = () => {
  const contactLink =
    NAV_LINKS.find((l) => l.name === "Contact")?.href || "/contact-us";

  return (
    <section id="contact" className="py-32 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-full bg-linear-to-br from-primary via-blue-600 to-accent p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-50%] left-[-10%] w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-[-50%] right-[-10%] w-[400px] h-[400px] bg-black/10 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
            {CTA_CONTENT.title}
          </h2>
          <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            {CTA_CONTENT.description}
          </p>
          <Link href={contactLink}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-full bg-white text-primary font-bold text-xl hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] transition-all"
            >
              {CTA_CONTENT.buttonText}
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
