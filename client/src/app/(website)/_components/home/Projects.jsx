"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Code2, Monitor, Smartphone, Briefcase, ChevronRight } from "lucide-react";
import { Section, Container } from "../../../../components/layout";
import { Heading, Text, Button } from "../../../../components/ui";
import { cn } from "../../../../utils";

const CATEGORIES = ["All Projects", "Full Stack", "AI & Data", "Mobile", "UI/UX"];

const PROJECTS = [
  {
    id: 1,
    title: "AI-Powered Enterprise Dashboard",
    category: "Full Stack",
    studentName: "Aditi Sharma",
    duration: "6 Weeks",
    status: "Production Ready",
    description: "A comprehensive enterprise analytics dashboard featuring AI-driven insights, real-time data visualization, and automated reporting systems built for a fictional SaaS company.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    techStack: ["Next.js", "Python", "TensorFlow", "Tailwind"],
    difficulty: "Advanced",
  },
  {
    id: 2,
    title: "MedCare Hospital Management",
    category: "Mobile",
    studentName: "Rahul Verma",
    description: "Cross-platform mobile application for hospital administration, patient health records, and secure telemedicine video consultations.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    techStack: ["React Native", "Node.js", "MongoDB"],
    difficulty: "Advanced",
  },
  {
    id: 3,
    title: "Smart Resume ATS Builder",
    category: "AI & Data",
    studentName: "Priya Patel",
    description: "Generative AI platform that creates ATS-friendly resumes by analyzing LinkedIn profiles and matching against specific job descriptions.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
    techStack: ["React", "OpenAI API", "Express"],
    difficulty: "Intermediate",
  },
  {
    id: 4,
    title: "E-Commerce Microservices Architecture",
    category: "Full Stack",
    studentName: "Amit Kumar",
    description: "Highly scalable backend architecture for a modern e-commerce platform using event-driven microservices pattern and containerization.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    techStack: ["Go", "Docker", "AWS", "Postgres"],
    difficulty: "Advanced",
  },
  {
    id: 5,
    title: "FinTech Trading Platform Design",
    category: "UI/UX",
    studentName: "Neha Singh",
    description: "Premium user interface and user experience design system for a modern cryptocurrency and stock trading platform.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    techStack: ["Figma", "Framer", "Prototyping"],
    difficulty: "Beginner",
  },
  {
    id: 6,
    title: "Real-time Encrypted Chat Engine",
    category: "Full Stack",
    studentName: "Vikram Tech",
    description: "Low-latency messaging application supporting massive group chats, rich media sharing, and end-to-end encryption.",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=800&auto=format&fit=crop",
    techStack: ["React", "Socket.io", "Redis"],
    difficulty: "Intermediate",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const scrollContainerRef = useRef(null);

  const filteredProjects = activeCategory === "All Projects"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  const featuredProject = filteredProjects[0];
  const galleryProjects = filteredProjects.slice(1);

  return (
    <Section className="relative bg-[#FAFAFA] pt-10 overflow-hidden" useContainer={false}>
      {/* Background Decoration */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #111 1px, transparent 1px),
            linear-gradient(to bottom, #111 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 40%, transparent 100%)',
        }}
      />

      <motion.div
        animate={{ x: [0, -30, 30, 0], y: [0, 40, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[10%] w-[40%] h-[40%] rounded-full bg-blue-300/30 blur-[120px] pointer-events-none mix-blend-multiply"
      />

      <Container className="relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center w-full max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center rounded-full border border-[#EAEAEA] bg-white px-4 py-1.5 shadow-sm mb-6"
          >
            <span className="text-[11px] font-bold tracking-[0.12em] text-[#525252] uppercase">
              Student Projects Showcase
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center w-full"
          >
            <Heading level="h2" className="text-[#111111] mb-6 leading-tight text-center">
              Build Real Applications That <br className="hidden sm:block" />
              <span className="text-[#E6002D]">Employers Actually Want</span>
            </Heading>
            <Text variant="bodyLarge" color="muted" className="max-w-2xl mx-auto text-center">
              Don't just write code. Architect premium, production-grade applications that solve real business problems and make your portfolio impossible to ignore.
            </Text>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16 px-4">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300",
                activeCategory === category ? "text-white" : "text-[#525252] hover:text-[#111111] bg-white border border-[#EAEAEA] shadow-sm hover:shadow-md"
              )}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="projectCategory"
                  className="absolute inset-0 bg-[#E6002D] rounded-full shadow-md"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Featured Project Case Study (First Item) */}
        <AnimatePresence mode="wait">
          {featuredProject && (
            <motion.div
              key={featuredProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full bg-white rounded-[32px] md:rounded-[40px] p-6 md:p-10 border border-[#EAEAEA] shadow-lg mb-16 relative overflow-hidden group"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#E6002D]/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
                {/* Left: Interactive Mockup */}
                <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-[#EAEAEA]/80 shadow-md relative group/mockup cursor-pointer">
                  {/* CSS Browser Bar */}
                  <div className="w-full h-10 bg-[#FAFAFA] border-b border-[#EAEAEA] flex items-center px-4 gap-2 absolute top-0 z-20">
                    <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                    <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                    <div className="mx-auto w-1/2 h-6 bg-white border border-[#EAEAEA] rounded-md" />
                  </div>
                  {/* Image */}
                  <div className="absolute top-10 bottom-0 left-0 right-0 overflow-hidden bg-white">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/mockup:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/mockup:bg-black/10 transition-colors duration-500" />
                  </div>
                </div>

                {/* Right: Project Details */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-[#F5F5F5] border border-[#EAEAEA] rounded-full text-[10px] font-bold tracking-widest uppercase text-[#525252]">
                      {featuredProject.category}
                    </span>
                    <span className="px-3 py-1 bg-[#16A34A]/10 border border-[#16A34A]/20 rounded-full text-[10px] font-bold tracking-widest uppercase text-[#16A34A]">
                      {featuredProject.difficulty}
                    </span>
                  </div>

                  <Heading level="h3" className="text-[#111111] mb-4 group-hover:text-[#E6002D] transition-colors duration-300">
                    {featuredProject.title}
                  </Heading>

                  <Text variant="body" color="muted" className="mb-8 leading-relaxed">
                    {featuredProject.description}
                  </Text>

                  {/* Meta Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-8 border-t border-[#EAEAEA] pt-6">
                    <div>
                      <Text variant="small" className="text-[#737373] uppercase tracking-wider font-bold mb-1 text-[10px]">Student Creator</Text>
                      <div className="font-semibold text-[#111111] flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#EAEAEA] flex items-center justify-center text-[#525252] text-xs">
                          {featuredProject.studentName.charAt(0)}
                        </div>
                        {featuredProject.studentName}
                      </div>
                    </div>
                    <div>
                      <Text variant="small" className="text-[#737373] uppercase tracking-wider font-bold mb-1 text-[10px]">Project Status</Text>
                      <div className="font-semibold text-[#111111] flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#16A34A]" />
                        {featuredProject.status}
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProject.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-[#FAFAFA] border border-[#EAEAEA] rounded-lg text-xs font-semibold text-[#111111] flex items-center gap-1.5 shadow-sm transition-colors hover:border-[#E6002D]/30">
                        <Code2 className="w-3.5 h-3.5 text-[#E6002D]" />
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <Button variant="primary" className="rounded-xl px-6 py-3 font-semibold shadow-md shadow-[#E6002D]/15 hover:shadow-lg hover:shadow-[#E6002D]/20 transition-all">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" className="rounded-xl px-6 py-3 font-semibold border-[#EAEAEA] text-[#111111] hover:bg-[#FAFAFA]">
                      <Code2 className="w-4 h-4 mr-2" />
                      View Source
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>

      {/* Horizontal Project Gallery */}
      <Container className="relative z-10 w-full mb-16">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 pt-4"
        >
          <AnimatePresence mode="popLayout">
            {galleryProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                key={project.id}
                className="group snap-start shrink-0 w-[85vw] sm:w-[340px] lg:w-[380px] flex flex-col relative transition-all duration-300"
              >
                <div className="flex flex-col h-full bg-white rounded-[28px] border border-[#EAEAEA] p-3 shadow-sm hover:shadow-xl hover:border-[#E6002D]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden relative">

                  {/* Glass Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#E6002D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Image Header */}
                  <div className="relative w-full h-[200px] rounded-[20px] overflow-hidden mb-5 border border-[#EAEAEA]/50 bg-[#FAFAFA]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Dark Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                      <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 bg-white/90 backdrop-blur-sm text-[#111111] px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </div>
                    </div>

                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/20 text-[#111111] text-[10px] font-bold tracking-widest uppercase shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="px-3 pb-3 flex flex-col flex-1 z-10">
                    <Heading level="h5" className="text-[#111111] mb-2 leading-tight group-hover:text-[#E6002D] transition-colors duration-300">
                      {project.title}
                    </Heading>

                    <Text variant="small" color="muted" className="mb-5 line-clamp-2 leading-relaxed">
                      {project.description}
                    </Text>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-auto mb-5">
                      {project.techStack.slice(0, 3).map(tech => (
                        <span key={tech} className="px-2 py-1 bg-[#FAFAFA] rounded-md text-[11px] font-semibold text-[#737373] border border-[#EAEAEA]">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-1 bg-[#FAFAFA] rounded-md text-[11px] font-semibold text-[#737373] border border-[#EAEAEA]">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-[#EAEAEA] mb-4" />

                    {/* Footer Stats */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">
                          {project.studentName.charAt(0)}
                        </div>
                        <span className="text-xs font-bold text-[#111111]">{project.studentName}</span>
                      </div>

                      <div className="text-[10px] font-bold tracking-widest uppercase text-[#A3A3A3]">
                        {project.difficulty}
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
      <div className="flex justify-center relative z-10 mt-4">
        <Button variant="outline" size="lg" className="rounded-full shadow-sm px-8 font-semibold group border-[#EAEAEA] hover:border-[#E6002D] hover:bg-[#E6002D]/5 h-12">
          Explore Student Portfolio
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
