"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Sparkles, Clock } from "lucide-react";
import { WHY_CHOOSE_US_CONTENT } from "@/lib/constants";

const iconMap: Record<string, any> = {
  "Creative-First Approach": <Sparkles className="w-8 h-8 text-accent" />,
  "Lighting Fast Turnaround": <Zap className="w-8 h-8 text-yellow-400" />,
  "Enterprise Reliability": (
    <ShieldCheck className="w-8 h-8 text-emerald-400" />
  ),
  "24/7 Support": <Clock className="w-8 h-8 text-blue-400" />,
};

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-32 bg-secondary/20 max-w-screen ">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {WHY_CHOOSE_US_CONTENT.titleMain} <br />
              <span className="text-primary">
                {WHY_CHOOSE_US_CONTENT.titleAccent}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {WHY_CHOOSE_US_CONTENT.description}
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 bg- md:grid-cols-2 gap-8">
            {WHY_CHOOSE_US_CONTENT.reasons.map((r, i) => (
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
                  {iconMap[r.title] || (
                    <Sparkles className="w-8 h-8 text-accent" />
                  )}
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
