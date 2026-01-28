"use client";

import { motion } from "framer-motion";
import {
  Video,
  PenTool,
  Youtube,
  Film,
  Component,
  Aperture,
  CheckCircle2,
} from "lucide-react";
import { useRef } from "react";

const services = {
  video: [
    { title: "Motion Graphics", icon: <Film className="w-6 h-6" /> },
    { title: "YouTube Video Editing", icon: <Youtube className="w-6 h-6" /> },
    { title: "Ads & Promotion Videos", icon: <Video className="w-6 h-6" /> },
    {
      title: "Viral / Short-Form Edits",
      icon: <Aperture className="w-6 h-6" />,
    },
  ],
  design: [
    { title: "Logo Design", icon: <Component className="w-6 h-6" /> },
    { title: "Poster Design", icon: <PenTool className="w-6 h-6" /> },
    { title: "YouTube Thumbnails", icon: <Youtube className="w-6 h-6" /> },
    {
      title: "Social Media Creatives",
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
    { title: "Brand Visual Assets", icon: <Component className="w-6 h-6" /> },
  ],
};

const ServiceCard = ({
  title,
  icon,
  index,
}: {
  title: string;
  icon: any;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ y: -5, borderColor: "var(--color-primary)" }}
    className="p-6 rounded-2xl bg-card border border-border/50 hover:bg-card/80 transition-all group"
  >
    <div className="mb-4 text-primary p-3 bg-primary/10 rounded-xl inline-block group-hover:bg-primary group-hover:text-background transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
      {title}
    </h3>
    <p className="text-muted-foreground text-sm">
      Professional, high-impact creation designed for engagement.
    </p>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="py-32 relative bg-background/50">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Expertise
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We separate the noise from the signal. Specialized services for
            specific outcomes.
          </p>
        </div>

        {/* Video Editing */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-border" />
            <h3 className="text-2xl font-bold text-accent tracking-widest uppercase">
              Video Editing
            </h3>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-border" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.video.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>

        {/* Graphic Design */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-border" />
            <h3 className="text-2xl font-bold text-primary tracking-widest uppercase">
              Graphic Design
            </h3>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-border" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.design.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i + 4} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
