"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "../Container";

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const PROGRAMS = [
  "Full Stack",
  "AI",
  "Cloud",
  "UI/UX",
  "Data Analytics"
];

const COMPANY = [
  "About",
  "Mentors",
  "Projects",
  "Alumni",
  "Blog",
  "Contact"
];

const RESOURCES = [
  "FAQs",
  "Privacy Policy",
  "Terms",
  "Refund Policy",
  "Certificate Verification"
];

const SOCIAL_LINKS = [
  { icon: LinkedinIcon, href: "#" },
  { icon: InstagramIcon, href: "#" },
  { icon: YoutubeIcon, href: "#" },
  { icon: FacebookIcon, href: "#" },
  { icon: GithubIcon, href: "#" }
];

export default function Footer() {
  return (
    <footer className="relative bg-[#111111] pt-24 lg:pt-32 pb-8 overflow-hidden border-t border-[#222222]">
      {/* CSS for Shimmer Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        .shimmer-text {
          background-image: linear-gradient(
            to right,
            #1A1A1A 0%,
            #1A1A1A 40%,
            #333333 50%,
            #1A1A1A 60%,
            #1A1A1A 100%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shimmer 8s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}} />

      {/* Removed the background TALENTELE text from here */}

      <Container className="relative z-10 flex flex-col">
        {/* Footer Top Columns */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20"
        >
          {/* Column 1: Brand & Social */}
          <div className="flex flex-col gap-6 lg:pr-8">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight text-white font-display">
                Talentele<span className="text-[#E6002D]">.</span>
              </span>
            </Link>
            <p className="text-sm text-[#A3A3A3] leading-relaxed">
              Build a premium, modern, enterprise-grade education platform that focuses on career transformation. Learn from industry experts and launch your successful tech career.
            </p>
            <div className="flex items-center gap-3 mt-2">
              {SOCIAL_LINKS.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link 
                    key={index}
                    href={social.href}
                    className="group flex items-center justify-center w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#333333] text-[#A3A3A3] transition-all duration-300 hover:scale-110 hover:bg-[#E6002D] hover:border-[#E6002D] hover:text-white"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Column 2: Programs */}
          <div className="flex flex-col gap-6">
            <h4 className="text-base font-semibold text-white">Programs</h4>
            <ul className="flex flex-col gap-4">
              {PROGRAMS.map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-sm text-[#A3A3A3] hover:text-[#E6002D] transition-colors relative group">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#E6002D] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col gap-6">
            <h4 className="text-base font-semibold text-white">Company</h4>
            <ul className="flex flex-col gap-4">
              {COMPANY.map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-sm text-[#A3A3A3] hover:text-[#E6002D] transition-colors relative group">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#E6002D] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="flex flex-col gap-6">
            <h4 className="text-base font-semibold text-white">Resources</h4>
            <ul className="flex flex-col gap-4">
              {RESOURCES.map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-sm text-[#A3A3A3] hover:text-[#E6002D] transition-colors relative group">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#E6002D] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 py-12 border-t border-[#222222]"
        >
          <div className="flex flex-col gap-2 w-full md:w-auto text-center md:text-left">
            <h3 className="text-lg font-bold text-white">Join our newsletter</h3>
            <p className="text-sm text-[#A3A3A3]">Get the latest news and career tips delivered to your inbox.</p>
          </div>
          <div className="w-full md:w-auto flex-1 max-w-md">
            <form className="relative flex items-center group">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full h-14 pl-6 pr-32 rounded-full border border-[#333333] bg-[#1A1A1A] text-sm text-white placeholder:text-[#737373] outline-none transition-all duration-300 focus:border-[#E6002D]/50 focus:ring-4 focus:ring-[#E6002D]/20"
                required
              />
              <button 
                type="submit" 
                className="absolute right-1 top-1 bottom-1 flex items-center justify-center px-6 bg-white text-[#111111] text-sm font-semibold rounded-full hover:bg-[#E6002D] hover:text-white transition-all duration-300 transform active:scale-95"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Massive Foreground Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full flex items-center justify-center overflow-hidden py-8 md:py-12 select-none"
        >
          <div className="text-[18vw] lg:text-[180px] xl:text-[220px] font-black tracking-[-0.04em] leading-none shimmer-text">
            TALENTELE
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[#222222]"
        >
          <p className="text-sm text-[#737373]">
            © {new Date().getFullYear()} Talentele. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-[#737373] hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="text-sm text-[#737373] hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="text-sm text-[#737373] hover:text-white transition-colors">Cookies</Link>
            <Link href="#" className="text-sm text-[#737373] hover:text-white transition-colors">Sitemap</Link>
          </div>
        </motion.div>

      </Container>
    </footer>
  );
}
