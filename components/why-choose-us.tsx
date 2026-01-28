"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Sparkles, Clock } from "lucide-react";

const reasons = [
  {
    icon: <Sparkles className="w-8 h-8 text-accent" />,
    title: "Creative-First Approach",
    desc: "We don't just edit; we tell stories. Every cut is intentional, every pixel polished.",
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "Lighting Fast Turnaround",
    desc: "Speed without quality compromise. Get your assets ready for the feed before the trend dies.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
    title: "Enterprise Reliability",
    desc: "Secure workflows, consistent communication, and files delivered on spec, every time.",
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-400" />,
    title: "24/7 Support",
    desc: "Our global team ensures there's always someone watching your project timeline.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 sticky top-32">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Why leading brands <br />
              <span className="text-primary">trust us.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              In a world of infinite content, quality is the only
              differentiator. We bring agency-level polish to every frame.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all shadow-sm hover:shadow-primary/5"
              >
                <div className="mb-6 p-4 rounded-2xl bg-background inline-block border border-border">
                  {r.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{r.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {r.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
