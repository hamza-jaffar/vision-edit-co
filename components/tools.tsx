"use client";

import { motion } from "framer-motion";
import {
  Scissors,
  Layers,
  PenTool,
  Type,
  Wand2,
  MonitorPlay,
} from "lucide-react";
import { TOOLS_CONTENT } from "@/lib/constants";

const iconMap: Record<string, any> = {
  "After Effects": <Layers />,
  "Premiere Pro": <Scissors />,
  Photoshop: <PenTool />,
  Illustrator: <Type />,
  "DaVinci Resolve": <Wand2 />,
  "Final Cut Pro": <MonitorPlay />,
};

const Tools = () => {
  return (
    <section className="py-20 bg-background/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="text-center text-muted-foreground uppercase tracking-widest text-sm font-semibold mb-12">
          {TOOLS_CONTENT.title}
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
          {TOOLS_CONTENT.tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 group"
            >
              <div
                className={`p-4 rounded-2xl ${tool.bg} ${tool.color} group-hover:scale-110 transition-transform duration-300`}
              >
                {iconMap[tool.name]}
              </div>
              <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors uppercase">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
