"use client";

import Navbar from "@/components/navbar";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { sendContactEmail } from "../actions/contact-action";
import {
  CONTACT_PAGE_CONTENT,
  COMPANY_INFO,
  SOCIAL_LINKS,
} from "@/lib/constants";

const ContactUsPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const result = await sendContactEmail(formData);

    setIsSubmitting(false);
    if (result.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Failed to send message.");
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-x-hidden">
      <Navbar />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      {/* Hero / Header Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 relative overflow-hidden">
        {/* Background Accents */}

        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-tight">
            {CONTACT_PAGE_CONTENT.hero.titleMain}{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-400 to-accent">
              {CONTACT_PAGE_CONTENT.hero.titleAccent}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {CONTACT_PAGE_CONTENT.hero.description}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="pb-16 relative">
        <div className="container mx-auto px-6">
          <div className="flex gap-4 flex-col md:flex-row items-start">
            {/* Contact Information Cards */}
            <div className="lg:col-span-5 space-y-8">
              <div className="grid grid-cols-1 gap-6">
                {/* Email Card */}
                <div className="p-4 md:p-8 rounded-2xl md:rounded-[2.5rem] bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all group">
                  <div className="flex items-start gap-6">
                    <div className="p-2 sm:p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-all duration-500 shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">
                        {CONTACT_PAGE_CONTENT.info.email.label}
                      </h3>
                      <p className="text-xs md:text-xl text-wrap font-medium">
                        {COMPANY_INFO.email}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="p-4 md:p-8 rounded-2xl md:rounded-[2.5rem] bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all group">
                  <div className="flex items-start gap-6">
                    <div className="p-2 md:p-4 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-background transition-all duration-500 shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">
                        {CONTACT_PAGE_CONTENT.info.phone.label}
                      </h3>
                      <p className="text-xs md:text-xl font-medium">
                        {COMPANY_INFO.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Connect */}
              <div className="pt-8 mb-4">
                <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">
                  {CONTACT_PAGE_CONTENT.info.social.title}
                </h4>
                <div className="flex flex-wrap gap-4">
                  {SOCIAL_LINKS.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="px-6 py-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="lg:col-span-7">
              <div className="p-4 md:p-12 rounded-2xl md:rounded-[2.5rem] bg-card/40 backdrop-blur-xl border border-border/50 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <form
                  onSubmit={handleSubmit}
                  className="relative z-10 space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground ml-2">
                        {CONTACT_PAGE_CONTENT.form.firstName.label}
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        placeholder={
                          CONTACT_PAGE_CONTENT.form.firstName.placeholder
                        }
                        className="w-full px-6 py-4 rounded-2xl bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground ml-2">
                        {CONTACT_PAGE_CONTENT.form.lastName.label}
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        placeholder={
                          CONTACT_PAGE_CONTENT.form.lastName.placeholder
                        }
                        className="w-full px-6 py-4 rounded-2xl bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground ml-2">
                      {CONTACT_PAGE_CONTENT.form.email.label}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder={CONTACT_PAGE_CONTENT.form.email.placeholder}
                      className="w-full px-6 py-4 rounded-2xl bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground ml-2">
                      {CONTACT_PAGE_CONTENT.form.phone.label}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder={CONTACT_PAGE_CONTENT.form.phone.placeholder}
                      className="w-full px-6 py-4 rounded-2xl bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground ml-2">
                      {CONTACT_PAGE_CONTENT.form.message.label}
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      required
                      placeholder={
                        CONTACT_PAGE_CONTENT.form.message.placeholder
                      }
                      className="w-full px-6 py-4 rounded-2xl bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 rounded-3xl bg-primary text-background font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                        {CONTACT_PAGE_CONTENT.form.submitButton.loadingText}
                      </>
                    ) : (
                      <>
                        {CONTACT_PAGE_CONTENT.form.submitButton.text}
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>

                  {status === "success" && (
                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mt-4 animate-in fade-in slide-in-from-top-2">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <p className="text-sm font-medium">
                        {CONTACT_PAGE_CONTENT.form.submitButton.successText}
                      </p>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 mt-4 animate-in fade-in slide-in-from-top-2">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <p className="text-sm font-medium">{errorMessage}</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Minimal */}
      <footer className="py-12 border-t border-border/20 text-center">
        <p className="text-muted-foreground text-sm">
          © {COMPANY_INFO.establishedYear} {COMPANY_INFO.name} Visual Excellence
          Guaranteed.
        </p>
      </footer>
    </main>
  );
};

export default ContactUsPage;
