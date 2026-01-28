"use client";

import Image from "next/image";
import Link from "next/link";
import {
  COMPANY_INFO,
  SERVICES_LIST,
  SOCIAL_LINKS,
  FOOTER_CONTENT,
} from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-20 bg-background">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 text-center md:text-left">
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <Link
              href="/"
              className="text-3xl font-bold tracking-tighter mb-6 flex items-center gap-2"
            >
              <Image src="/nav-logo.png" alt="Logo" width={40} height={40} />
              {COMPANY_INFO.name.split(" ")[0]}{" "}
              <span className="text-primary">
                {COMPANY_INFO.name.split(" ")[1]}
              </span>{" "}
              {COMPANY_INFO.name.split(" ")[2]}
            </Link>
            <p className="text-muted-foreground text-lg max-w-md">
              {COMPANY_INFO.description}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-6 text-foreground uppercase tracking-widest text-sm">
              {FOOTER_CONTENT.linksTitle}
            </h4>
            <ul className="space-y-4 text-muted-foreground">
              {SERVICES_LIST.map((service) => (
                <li
                  key={service.name}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  {service.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-6 text-foreground uppercase tracking-widest text-sm">
              {FOOTER_CONTENT.socialTitle}
            </h4>
            <ul className="space-y-4 text-muted-foreground">
              {SOCIAL_LINKS.map((link) => (
                <li
                  key={link.name}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">
            © {COMPANY_INFO.establishedYear} {COMPANY_INFO.name}{" "}
            {FOOTER_CONTENT.copyright}
          </p>
          <div className="flex gap-8 text-sm text-muted-foreground">
            {FOOTER_CONTENT.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-foreground cursor-pointer transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
