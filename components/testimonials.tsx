"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Marketing Director at FlowState",
    content:
      "The video edits Vision Edit Co delivered were beyond our expectations. They captured our brand voice perfectly and the motion graphics were world-class.",
    rating: 5,
  },
  {
    name: "Marcus Thorne",
    role: "Founder, TechByte YouTube",
    content:
      "My retention rates jumped by 40% after they took over my editing. Fast, creative, and they just 'get' the YouTube algorithm style.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Social Media Lead, Aura Beauty",
    content:
      "Incredible eye for detail. Their graphic designs for our Instagram campaigns felt high-end and luxurious. Highly recommend!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-2 mb-4">
          <Quote className="text-primary w-8 h-8 opacity-50" />
          <h2 className="text-3xl font-bold">Client Feedback</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-3xl bg-card border border-border/50 relative overflow-hidden group hover:border-primary/30 transition-all"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg text-foreground mb-8 relative z-10">
                "{t.content}"
              </p>
              <div>
                <h4 className="font-bold text-foreground">{t.name}</h4>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
              <div className="absolute top-[-20%] right-[-10%] w-[150px] h-[150px] bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
