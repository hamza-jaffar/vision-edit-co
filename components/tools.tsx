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

const tools = [
  {
    name: "After Effects",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    icon: <Layers />,
  },
  {
    name: "Premiere Pro",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    icon: <Scissors />,
  },
  {
    name: "Photoshop",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    icon: <PenTool />,
  },
  {
    name: "Illustrator",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    icon: <Type />,
  },
  {
    name: "DaVinci Resolve",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    icon: <Wand2 />,
  },
  {
    name: "Final Cut Pro",
    color: "text-slate-200",
    bg: "bg-white/5",
    icon: <MonitorPlay />,
  },
];

const Tools = () => {
  return (
    <section className="py-20 bg-background/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="text-center text-muted-foreground uppercase tracking-widest text-sm font-semibold mb-12">
          Mastering the Industry's Best Tools
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
          {tools.map((tool, i) => (
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
                {tool.icon}
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
