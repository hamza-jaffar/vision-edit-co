"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { FEATURED_WORK_CONTENT } from "@/lib/constants";
import { getEmbedUrl } from "@/lib/video";

const FeaturedWork = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  // Close modal when pressing escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedVideo(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="work" className="py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-16"
        >
          {FEATURED_WORK_CONTENT.titleMain}{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
            {FEATURED_WORK_CONTENT.titleAccent}
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_WORK_CONTENT.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onClick={() => setSelectedVideo(project.videoUrl || null)}
              className="group relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer bg-neutral-900 border border-border/30"
            >
              {/* Fallback/Placeholder Visual */}
              <div
                className={`absolute inset-0 opacity-20 group-hover:opacity-10 transition-opacity duration-700 ${project.color}`}
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-90" />

              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-primary text-sm font-medium mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {project.category}
                </p>
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
                  {FEATURED_WORK_CONTENT.ctaText}{" "}
                  <div className="w-8 h-px bg-foreground/50" />
                </div>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm bg-black/20">
                <div className="w-20 h-20 rounded-full bg-primary/90 text-background flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
                  <Play fill="currentColor" className="w-8 h-8 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-md transition-colors"
                aria-label="Close video"
              >
                <X className="w-6 h-6" />
              </button>

              {(() => {
                const embedUrl = getEmbedUrl(selectedVideo);

                if (!embedUrl) {
                  return (
                    <div className="flex items-center justify-center w-full h-full text-white">
                      Unsupported video format
                    </div>
                  );
                }

                return (
                  <iframe
                    src={embedUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedWork;
