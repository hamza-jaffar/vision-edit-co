"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-3xl font-bold tracking-tighter mb-6 block"
            >
              VISION <span className="text-primary">EDIT</span> CO.
            </Link>
            <p className="text-muted-foreground text-lg max-w-md">
              A premium creative agency specializing in high-performance video
              editing and brand design for the modern digital era.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-foreground uppercase tracking-widest text-sm">
              Services
            </h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">
                Motion Graphics
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Video Editing
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Logo Design
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Brand Identity
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-foreground uppercase tracking-widest text-sm">
              Follow Us
            </h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">
                Instagram
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Twitter
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                LinkedIn
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                YouTube
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">
            © 2026 Vision Edit Co. All rights reserved. Built for Visual
            Excellence.
          </p>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <span className="hover:text-foreground cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-foreground cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
