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
import { SERVICES_CONTENT } from "@/lib/constants";

// Map titles to icons manually since we can't easily store JSX in JSON-like constants without hydration issues
const iconMap: Record<string, any> = {
  "Motion Graphics": <Film className="w-6 h-6" />,
  "YouTube Video Editing": <Youtube className="w-6 h-6" />,
  "Ads & Promotion Videos": <Video className="w-6 h-6" />,
  "Viral / Short-Form Edits": <Aperture className="w-6 h-6" />,
  "Logo Design": <Component className="w-6 h-6" />,
  "Poster Design": <PenTool className="w-6 h-6" />,
  "YouTube Thumbnails": <Youtube className="w-6 h-6" />,
  "Social Media Creatives": <CheckCircle2 className="w-6 h-6" />,
  "Brand Visual Assets": <Component className="w-6 h-6" />,
};

const ServiceCard = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
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
      {iconMap[title] || <CheckCircle2 className="w-6 h-6" />}
    </div>
    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
      {title}
    </h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="pt-32 relative bg-background/50">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {SERVICES_CONTENT.title}
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {SERVICES_CONTENT.description}
          </p>
        </div>

        {SERVICES_CONTENT.sections.map((section, sectionIdx) => (
          <div key={section.title} className={sectionIdx === 0 ? "mb-20" : ""}>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-linear-to-r from-transparent to-border" />
              <h3
                className={`text-2xl font-bold ${sectionIdx === 0 ? "text-accent" : "text-primary"} tracking-widest uppercase`}
              >
                {section.title}
              </h3>
              <div className="h-px flex-1 bg-linear-to-l from-transparent to-border" />
            </div>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 ${sectionIdx === 0 ? "lg:grid-cols-4" : "lg:grid-cols-5"} gap-6`}
            >
              {section.items.map((s, i) => (
                <ServiceCard key={s.title} {...s} index={i + sectionIdx * 4} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
