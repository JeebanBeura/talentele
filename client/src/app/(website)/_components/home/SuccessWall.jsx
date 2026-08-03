"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Section, Container } from "../../../../components/layout";
import { Heading, Text, Button } from "../../../../components/ui";
import { cn } from "../../../../utils";

const ALUMNI = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Senior Software Engineer",
    company: "Google",
    batch: "Batch 2025",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    gradient: "from-blue-50/50 to-white",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "SDE II",
    company: "Microsoft",
    batch: "Batch 2024",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    gradient: "from-sky-50/50 to-white",
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Data Scientist",
    company: "Amazon",
    batch: "Batch 2024",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    gradient: "from-orange-50/50 to-white",
  },
  {
    id: 4,
    name: "Neha Singh",
    role: "Product Designer",
    company: "Adobe",
    batch: "Batch 2025",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    gradient: "from-red-50/50 to-white",
  },
  {
    id: 5,
    name: "Vikram Reddy",
    role: "Cloud Engineer",
    company: "Deloitte",
    batch: "Batch 2024",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    gradient: "from-green-50/50 to-white",
  },
  {
    id: 6,
    name: "Anjali Desai",
    role: "Frontend Engineer",
    company: "Stripe",
    batch: "Batch 2026",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=400&auto=format&fit=crop",
    gradient: "from-indigo-50/50 to-white",
  },
  {
    id: 7,
    name: "Karan Johar",
    role: "Backend Engineer",
    company: "Netflix",
    batch: "Batch 2025",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    gradient: "from-red-50/50 to-white",
  },
  {
    id: 8,
    name: "Sanya Malhotra",
    role: "Security Analyst",
    company: "CrowdStrike",
    batch: "Batch 2024",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    gradient: "from-rose-50/50 to-white",
  },
  {
    id: 9,
    name: "Rohan Das",
    role: "Mobile Developer",
    company: "Zomato",
    batch: "Batch 2026",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=400&auto=format&fit=crop",
    gradient: "from-red-50/50 to-white",
  },
  {
    id: 10,
    name: "Sneha Kapoor",
    role: "AI Engineer",
    company: "OpenAI",
    batch: "Batch 2025",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1b4392?q=80&w=400&auto=format&fit=crop",
    gradient: "from-teal-50/50 to-white",
  },
  {
    id: 11,
    name: "Arun Iyer",
    role: "Full Stack Engineer",
    company: "Swiggy",
    batch: "Batch 2024",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop",
    gradient: "from-orange-50/50 to-white",
  },
  {
    id: 12,
    name: "Pooja Hegde",
    role: "Product Manager",
    company: "Atlassian",
    batch: "Batch 2024",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    gradient: "from-blue-50/50 to-white",
  }
];

export default function SuccessWall() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      // Scroll by one full view width
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Section className="relative bg-[#FFFFFF] dark:bg-[#0F172A] pt-10 overflow-hidden" useContainer={false}>
      {/* Background Decoration */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.1] text-[#111] dark:text-white"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
        }}
      />

      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[-10%] w-[40%] h-[50%] rounded-full bg-red-100/40 dark:bg-red-500/10 blur-[150px] pointer-events-none mix-blend-multiply dark:mix-blend-screen"
      />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* LEFT: Sticky Content (30%) */}
          <div className="w-full lg:w-[30%] lg:sticky lg:top-32 flex flex-col pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full border border-[#EAEAEA] dark:border-[#334155] bg-[#FAFAFA] dark:bg-[#1E293B] px-4 py-1.5 shadow-sm mb-6 self-start"
            >
              <span className="text-[11px] font-bold tracking-[0.12em] text-[#525252] dark:text-[#E2E8F0] uppercase">
                Alumni Network
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Heading level="h2" className="text-[#111111] dark:text-white mb-6 leading-tight">
                Strong Alumni <br className="hidden lg:block" />
                <span className="text-[#E6002D]">Network</span>
              </Heading>

              <Text variant="bodyLarge" color="muted" className="mb-10 font-medium leading-relaxed text-[#525252] dark:text-[#A3A3A3]">
                "Our alumni are building startups, leading engineering teams and creating innovative products across India and globally."
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button variant="primary" size="lg" className="rounded-full shadow-md shadow-[#E6002D]/15 font-semibold group h-14 px-8 w-full sm:w-auto">
                Explore Alumni Network
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          {/* RIGHT: Grid Slider (70%) */}
          <div className="w-full lg:w-[70%] relative">
            {/* Fade edge for smooth scroll effect */}
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#FFFFFF] dark:from-[#0F172A] to-transparent z-20 pointer-events-none hidden lg:block" />

            <div
              ref={scrollRef}
              className="grid grid-rows-2 grid-flow-col gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 hide-scrollbar auto-cols-[85vw] sm:auto-cols-[calc(50%-12px)] xl:auto-cols-[calc(33.333%-16px)]"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              <style dangerouslySetInnerHTML={{
                __html: `
                .hide-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}} />

              {ALUMNI.map((alumni, idx) => (
                <motion.div
                  key={alumni.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: (idx % 6) * 0.1 }}
                  className="snap-start w-full h-full"
                >
                  <div className={cn(
                    "group relative overflow-hidden rounded-[28px] border border-[#EAEAEA] dark:border-[#334155] bg-white dark:bg-[#1E293B] shadow-sm transition-all duration-300",
                    "hover:-translate-y-1 hover:shadow-lg hover:border-[#E6002D]/40",
                    "flex min-h-[220px] h-full"
                  )}>
                    {/* Soft Background Gradient */}
                    <div className={cn("absolute inset-0 bg-gradient-to-br opacity-40 transition-opacity duration-300 group-hover:opacity-10 pointer-events-none", alumni.gradient)} />

                    {/* Left side text (55%) */}
                    <div className="flex flex-col w-[55%] p-5 pr-2 z-10 relative">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-[#0F172A] border border-[#EAEAEA] dark:border-[#334155] shadow-sm flex items-center justify-center font-black text-[#111111] dark:text-white text-xs transition-colors duration-300 group-hover:text-[#E6002D] filter grayscale group-hover:grayscale-0">
                          {alumni.company.charAt(0)}
                        </div>
                        <span className="font-bold text-[#111111] dark:text-white text-xs tracking-tight">{alumni.company}</span>
                      </div>

                      <Heading level="h5" className="text-[#111111] dark:text-white text-[17px] leading-tight mb-1">{alumni.name}</Heading>
                      <Text variant="small" className="font-semibold text-[#737373] dark:text-[#94A3B8] text-[13px] leading-snug line-clamp-2 mb-4">{alumni.role}</Text>

                      <div className="mt-auto">
                        <span className="text-[10px] font-bold text-[#525252] dark:text-[#E2E8F0] bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-sm border border-[#EAEAEA] dark:border-[#334155] px-2.5 py-1 rounded-md uppercase tracking-wider flex items-center gap-1.5 w-fit">
                          <GraduationCap className="w-3 h-3 text-[#E6002D]" />
                          {alumni.batch}
                        </span>
                      </div>
                    </div>

                    {/* Right side image (45%) */}
                    <div className="absolute right-0 top-0 bottom-0 w-[45%] h-full z-0 overflow-hidden bg-[#FAFAFA] dark:bg-[#0F172A]">
                      {/* Gradient mask to blend image on the left edge smoothly into the card */}
                      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white dark:from-[#1E293B] to-transparent z-10 pointer-events-none" />
                      <img
                        src={alumni.image}
                        alt={alumni.name}
                        className="w-full h-full object-cover filter grayscale-[15%] group-hover:grayscale-0 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full border border-[#EAEAEA] dark:border-[#334155] bg-white dark:bg-[#1E293B] text-[#111111] dark:text-white flex items-center justify-center hover:bg-[#FAFAFA] dark:hover:bg-[#0F172A] hover:text-[#E6002D] transition-colors shadow-sm"
                aria-label="Previous slide"
              >
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full border border-[#EAEAEA] dark:border-[#334155] bg-white dark:bg-[#1E293B] text-[#111111] dark:text-white flex items-center justify-center hover:bg-[#FAFAFA] dark:hover:bg-[#0F172A] hover:text-[#E6002D] transition-colors shadow-sm"
                aria-label="Next slide"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
