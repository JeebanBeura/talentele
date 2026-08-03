"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Briefcase, Sparkles, Mic, Target, ArrowRight } from "lucide-react";
import { Section, Container } from "../../../../components/layout";
import { Heading, Text } from "../../../../components/ui";
import { cn } from "../../../../utils";

const FEATURES = [
  {
    title: "Industry-Ready Curriculum",
    description: "Learn what product companies actually use. We replace traditional theory with practical, modern tech stacks.",
    icon: BookOpen,
    badge: "Updated 2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Live Expert Mentorship",
    description: "Get 1-on-1 guidance from top engineers working at FAANG and premium tech product companies.",
    icon: Users,
    badge: "1-on-1 Sessions",
    image: ""
  },
  {
    title: "Real Client Projects",
    description: "Don't just build to-do apps. Build real-world applications that solve actual business problems.",
    icon: Briefcase,
    badge: "Production Ready",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "AI Assisted Learning",
    description: "Learn faster with our proprietary AI tools that analyze your code and provide instant feedback.",
    icon: Sparkles,
    badge: "Proprietary Tech",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Interview Preparation",
    description: "Rigorous mock interviews, portfolio reviews, and communication training by industry leaders.",
    icon: Mic,
    badge: "FAANG Standard",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Placement Support",
    description: "Direct referrals to top hiring partners and dedicated recruiters fighting for your success.",
    icon: Target,
    badge: "95% Success",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=800&auto=format&fit=crop"
  },
];

export default function Features() {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          setActiveIndex(index);
        }
      });
    }, {
      root: container,
      threshold: 0.6 // Card must be 60% visible to become active
    });

    const cards = container.querySelectorAll('.feature-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <Section className="relative bg-[#FAFAFA] dark:bg-[#0F172A] pt-10 overflow-hidden" useContainer={false}>
      {/* Background Layers */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] dark:opacity-[0.1] text-[#111] dark:text-white"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 40%, transparent 100%)',
        }}
      />

      <div
        className="absolute inset-0 z-0 opacity-[0.3] dark:opacity-[0.1] text-[#111] dark:text-white"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 20%, transparent 100%)',
        }}
      />

      <motion.div
        animate={{ x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] left-[20%] w-[30%] h-[40%] rounded-full bg-[#E6002D]/5 dark:bg-[#E6002D]/10 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, 40, -40, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[20%] right-[20%] w-[35%] h-[45%] rounded-full bg-slate-300/30 dark:bg-slate-800/30 blur-[100px] pointer-events-none"
      />

      {/* Center Header */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-3xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center rounded-full border border-[#EAEAEA] dark:border-white/20 bg-white/50 dark:bg-white/10 backdrop-blur-sm px-4 py-1.5 shadow-sm"
        >
          <span className="text-[11px] font-bold tracking-[0.12em] text-[#525252] dark:text-[#E2E8F0] uppercase">
            Why Choose Talentele
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center w-full"
        >
          <Heading level="h1" className="text-[#111111] dark:text-white mb-6 leading-tight text-center">
            Everything You Need To <br className="hidden sm:block" />
            <span className="text-[#E6002D]">Launch Your Career</span>
          </Heading>

          <Text variant="bodyLarge" color="muted" className="max-w-2xl mx-auto text-center text-[#525252] dark:text-[#A3A3A3]">
            We replace traditional theory with practical, industry-aligned training so you can walk into your first day on the job fully prepared and confident.
          </Text>
        </motion.div>
      </div>

      {/* Horizontal Snap Carousel */}
      <Container className="relative z-10 w-full">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 pt-4"
        >
          {FEATURES.map((feature, index) => {
            const isActive = activeIndex === index;
            const Icon = feature.icon;

            return (
              <div
                key={index}
                data-index={index}
                className={cn(
                  "feature-card snap-start shrink-0 w-[85vw] sm:w-[320px] lg:w-[380px] rounded-3xl p-6 flex flex-col transition-all duration-300 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6002D] group",
                  isActive
                    ? "bg-white dark:bg-[#1E293B] border-[#E6002D]/30 shadow-[0_12px_30px_-10px_rgba(230,0,45,0.12)] -translate-y-1"
                    : "bg-white/80 dark:bg-[#0F172A]/80 border-[#EAEAEA] dark:border-[#334155] shadow-sm hover:shadow-md hover:bg-white hover:dark:bg-[#1E293B]"
                )}
                tabIndex={0}
              >


                <div className="flex flex-col gap-2">
                  <Heading level="h5" className="text-[#111111] dark:text-white">{feature.title}</Heading>
                  <Text variant="small" color="muted" className="leading-relaxed font-medium text-[#737373] dark:text-[#94A3B8]">{feature.description}</Text>
                </div>

                {/* Illustration Image */}
                <div className="mt-6 w-full h-[180px] rounded-2xl relative overflow-hidden group-hover:shadow-md transition-all duration-500 border border-[#EAEAEA]/50 dark:border-white/10">
                  <div className={cn(
                    "absolute inset-0 bg-black/5 dark:bg-black/20 transition-opacity duration-500 z-10",
                    isActive ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                  )} />
                  {feature.image ? (
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className={cn(
                        "w-full h-full object-cover transition-transform duration-700",
                        isActive ? "scale-105" : "scale-100 group-hover:scale-105"
                      )}
                    />
                  ) : (
                    <div className="w-full h-full bg-[#FAFAFA] dark:bg-[#0F172A] flex items-center justify-center">
                      <feature.icon className="w-16 h-16 text-[#EAEAEA] dark:text-[#334155]" />
                    </div>
                  )}
                </div>

                {/* Learn More */}
                <div className="mt-6 flex items-center gap-2 text-sm font-bold tracking-wide uppercase transition-colors duration-300 cursor-pointer">
                  <span className={isActive ? "text-[#E6002D]" : "text-[#111111] dark:text-white"}>Learn More</span>
                  <ArrowRight className={cn("h-4 w-4 transition-transform duration-300", isActive && "translate-x-1 text-[#E6002D]")} />
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      {/* Progress Indicator */}
      <div className="relative z-10 flex items-center justify-center gap-3 mt-4">
        {FEATURES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              const container = scrollContainerRef.current;
              if (!container) return;
              const card = container.children[idx];
              card?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            }}
            className={cn(
              "h-2 rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E6002D]",
              activeIndex === idx ? "w-8 bg-[#E6002D]" : "w-2 bg-[#D4D4D4] hover:bg-[#A3A3A3] dark:bg-[#334155] dark:hover:bg-[#475569]"
            )}
            aria-label={`Go to feature slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* CSS to hide scrollbar for horizontal mobile scrolling */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </Section>
  );
}
