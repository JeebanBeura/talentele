"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Clock, Briefcase, Award, Users, ChevronRight } from "lucide-react";
import { Section, Container } from "../../../../components/layout";
import { Heading, Text, Button } from "../../../../components/ui";
import { cn } from "../../../../utils";

const CATEGORIES = [
  "All Programs",
  "Full Stack",
  "Data Analytics",
  "Artificial Intelligence",
  "UI/UX Design",
  "Cloud Computing",
  "Cyber Security",
];

const PROGRAMS = [
  {
    id: 1,
    title: "Full Stack Web Development",
    category: "Full Stack",
    description: "Master MERN stack and build production-ready web applications from scratch.",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop",
    level: "Beginner Friendly",
    duration: "6 Months",
    projects: "12+ Projects",
    rating: "4.9",
    learners: "12k+",
    skills: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: 2,
    title: "Advanced Data Analytics",
    category: "Data Analytics",
    description: "Learn Python, SQL, and Tableau to extract insights and drive business decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    level: "Intermediate",
    duration: "8 Months",
    projects: "15+ Projects",
    rating: "4.8",
    learners: "8k+",
    skills: ["Python", "SQL", "Tableau", "Pandas"],
  },
  {
    id: 3,
    title: "Applied Artificial Intelligence",
    category: "Artificial Intelligence",
    description: "Build deep learning models, NLP applications, and generative AI solutions.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    level: "Advanced",
    duration: "10 Months",
    projects: "20+ Projects",
    rating: "4.9",
    learners: "5k+",
    skills: ["PyTorch", "TensorFlow", "NLP", "LLMs"],
  },
  {
    id: 4,
    title: "UI/UX Product Design",
    category: "UI/UX Design",
    description: "Master user research, wireframing, prototyping, and visual design using Figma.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    level: "Beginner Friendly",
    duration: "6 Months",
    projects: "10+ Projects",
    rating: "4.7",
    learners: "10k+",
    skills: ["Figma", "Research", "Wireframing"],
  }
];

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState("All Programs");
  const scrollContainerRef = useRef(null);

  const filteredPrograms = activeCategory === "All Programs"
    ? PROGRAMS
    : PROGRAMS.filter(p => p.category === activeCategory);

  return (
    <Section className="relative bg-white dark:bg-[#0F172A] pt-10 overflow-hidden" useContainer={false}>
      {/* Background Layers */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.1] text-[#111] dark:text-white"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)',
        }}
      />

      <motion.div
        animate={{ x: [0, 30, -30, 0], y: [0, -40, 40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] right-[10%] w-[40%] h-[50%] rounded-full bg-[#E6002D]/5 dark:bg-[#E6002D]/10 blur-[120px] pointer-events-none"
      />

      <Container className="relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center w-full max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center rounded-full border border-[#EAEAEA] dark:border-white/20 bg-white/50 dark:bg-white/10 backdrop-blur-sm px-4 py-1.5 shadow-sm mb-6"
          >
            <span className="text-[11px] font-bold tracking-[0.12em] text-[#525252] dark:text-[#E2E8F0] uppercase">
              Featured Programs
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center w-full"
          >
            <Heading level="h2" className="text-[#111111] dark:text-white mb-6 leading-tight text-center">
              Accelerate Your Growth With <br className="hidden sm:block" />
              <span className="text-[#E6002D]">Industry-Vetted Programs</span>
            </Heading>
            <Text variant="bodyLarge" color="muted" className="max-w-2xl mx-auto text-center text-[#525252] dark:text-[#A3A3A3]">
              Learn directly from top engineers and designers. Build real-world projects, get mentored, and land your dream job.
            </Text>
          </motion.div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 px-4">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300",
                activeCategory === category ? "text-white" : "text-[#525252] dark:text-[#D4D4D4] hover:text-[#111111] dark:hover:text-white bg-white dark:bg-[#1E293B] border border-[#EAEAEA] dark:border-[#334155]"
              )}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-[#E6002D] rounded-full shadow-md"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>
      </Container>

      {/* Program Showcase */}
      <Container className="relative z-10 w-full mb-16">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 pt-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={program.id}
                className="group snap-start shrink-0 w-[85vw] sm:w-[360px] lg:w-[400px] flex flex-col relative transition-all duration-300"
              >
                <div className="flex flex-col h-full bg-white dark:bg-[#1E293B] rounded-[32px] border border-[#EAEAEA] dark:border-[#334155] p-3 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(230,0,45,0.12)] hover:border-[#E6002D]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden relative">

                  {/* Glass Glow on Hover */}
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-bl from-[#E6002D]/20 to-pink-300/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                  {/* Image Header */}
                  <div className="relative w-full h-[220px] rounded-[24px] overflow-hidden mb-5 border border-[#EAEAEA]/50 dark:border-white/10">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />

                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase shadow-sm">
                        {program.level}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div className="flex gap-4">
                        <div className="flex items-center gap-1.5 text-white/90 text-sm font-medium">
                          <Clock className="w-4 h-4" />
                          {program.duration}
                        </div>
                        <div className="flex items-center gap-1.5 text-white/90 text-sm font-medium">
                          <Briefcase className="w-4 h-4" />
                          {program.projects}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="px-3 pb-3 flex flex-col flex-1 z-10">
                    <Heading level="h4" className="text-[#111111] dark:text-white mb-2 leading-tight group-hover:text-[#E6002D] group-hover:dark:text-[#E6002D] transition-colors duration-300">
                      {program.title}
                    </Heading>

                    <Text variant="small" color="muted" className="mb-5 line-clamp-2 text-[#525252] dark:text-[#94A3B8]">
                      {program.description}
                    </Text>

                    {/* Features list */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {program.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-[#FAFAFA] dark:bg-[#0F172A] rounded-lg text-xs font-semibold text-[#525252] dark:text-[#E2E8F0] border border-[#EAEAEA] dark:border-[#334155]">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 mb-6 mt-auto">
                      <span className="px-3 py-1.5 bg-[#16A34A]/10 text-[#16A34A] border border-[#16A34A]/20 rounded-lg text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5 shadow-sm">
                        <Award className="w-4 h-4" />
                        Placement Support
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-[#EAEAEA] dark:bg-[#334155] mb-4" />

                    {/* Footer Stats & CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                          <span className="text-sm font-bold text-[#111111] dark:text-white">{program.rating}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="w-4 h-4 text-[#737373] dark:text-[#94A3B8]" />
                          <span className="text-sm font-medium text-[#737373] dark:text-[#94A3B8]">{program.learners}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-sm font-bold text-[#E6002D] tracking-wide group-hover:mr-1 transition-all duration-300 cursor-pointer">
                        View <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>

      {/* Explore All CTA */}
      <div className="flex justify-center relative z-10">
        <Button variant="outline" size="lg" className="rounded-full shadow-sm px-8 font-semibold group border-[#EAEAEA] dark:border-[#334155] hover:border-[#E6002D] dark:hover:border-[#E6002D] hover:bg-[#E6002D]/5 dark:hover:bg-[#E6002D]/10 dark:text-white h-12">
          Explore All Programs
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-[#E6002D]" />
        </Button>
      </div>

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
