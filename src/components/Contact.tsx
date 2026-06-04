"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// SVG Icons
const EmailIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 11.37C16.1234 12.2022 15.9812 13.0522 15.5937 13.799C15.2062 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.908 12.2384 16.0396 11.4077 15.9059C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1903 8.22768 13.4229 8.09406 12.5922C7.96044 11.7615 8.09202 10.9098 8.47028 10.1583C8.84854 9.40678 9.45414 8.7937 10.2009 8.40621C10.9477 8.01872 11.7978 7.87654 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8716 9.12836C15.4785 9.73525 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SendIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - Replace with actual API endpoint
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", service: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = ["Select a service", "Business Branding", "Luxury Cards", "Website Design", "Social Media Branding", "Other"];

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-3xl border border-[rgba(234,179,8,0.30)] bg-gradient-to-br from-[rgba(234,179,8,0.05)] via-white/[0.02] to-transparent p-8 backdrop-blur-sm"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left Column - Text & Info */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Let's build your brand
            </h2>
            <p className="mt-4 text-base text-white/70 leading-relaxed">
              Send your business name + what you need (branding / cards / web / social).
              I'll reply with questions and a quote within 24 hours.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-white/60 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(234,179,8,0.1)] text-[#eab308] transition-all duration-300 group-hover:bg-[rgba(234,179,8,0.2)] group-hover:scale-110">
                  <EmailIcon />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Email</p>
                  <a href="mailto:hello@designdistrict.com" className="text-sm text-white/70 hover:text-[#eab308] transition-colors">
                    hello@designdistrict.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-white/60 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(234,179,8,0.1)] text-[#eab308] transition-all duration-300 group-hover:bg-[rgba(234,179,8,0.2)] group-hover:scale-110">
                  <InstagramIcon />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Instagram</p>
                  <a href="https://instagram.com/designdistrict" target="_blank" rel="noreferrer" className="text-sm text-white/70 hover:text-[#eab308] transition-colors">
                    @designdistrict
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-white/60 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(234,179,8,0.1)] text-[#eab308] transition-all duration-300 group-hover:bg-[rgba(234,179,8,0.2)] group-hover:scale-110">
                  <ClockIcon />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Response Time</p>
                  <p className="text-sm text-white/70">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/design.district.lb/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#eab308] to-[#f5c518] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(234,179,8,0.5)] hover:scale-105"
              >
                <InstagramIcon />
                DM on Instagram
                <SendIcon />
              </a>

              <a
                href="mailto:hello@designdistrict.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/[0.08] hover:scale-105"
              >
                <EmailIcon />
                Email Us
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/30 focus:border-[rgba(234,179,8,0.5)] focus:outline-none focus:ring-1 focus:ring-[rgba(234,179,8,0.5)] transition"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/30 focus:border-[rgba(234,179,8,0.5)] focus:outline-none focus:ring-1 focus:ring-[rgba(234,179,8,0.5)] transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-1">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white focus:border-[rgba(234,179,8,0.5)] focus:outline-none focus:ring-1 focus:ring-[rgba(234,179,8,0.5)] transition"
                >
                  {services.map((service) => (
                    <option key={service} value={service} className="bg-black">
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/30 focus:border-[rgba(234,179,8,0.5)] focus:outline-none focus:ring-1 focus:ring-[rgba(234,179,8,0.5)] transition resize-none"
                  placeholder="Tell me about your project, goals, and timeline..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-gradient-to-r from-[#eab308] to-[#f5c518] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(234,179,8,0.5)] hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <SendIcon />
                  </>
                )}
              </button>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg bg-green-500/20 border border-green-500/50 p-3 text-center text-sm text-green-400 inline-flex items-center justify-center gap-2"
                >
                  <CheckIcon />
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </motion.div>

      <div className="mt-12 pt-8 border-t border-white/10">
        <p className="text-center text-xs text-white/45">
          © {new Date().getFullYear()} Design District. All rights reserved.
        </p>
      </div>
    </section>
  );
}