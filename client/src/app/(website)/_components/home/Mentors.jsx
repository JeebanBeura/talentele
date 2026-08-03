"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  Briefcase,
  Calendar,
  Link as LinkIcon,
  Users,
  Award,
  Star,
  BookOpen,
  Code2
} from "lucide-react";
import { Section, Container } from "../../../../components/layout";
import { Heading, Text, Button } from "../../../../components/ui";
import { cn } from "../../../../utils";

const MENTORS = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Senior Software Engineer",
    company: "Google",
    experience: "8+ Years",
    about: "Former Tech Lead at Amazon. Specializes in building scalable distributed systems and mentoring engineers to crack top-tier technical interviews. Has guided over 500+ students to successful placements in FAANG companies.",
    specialization: "Backend & System Design",
    skills: ["System Design", "Go", "Kubernetes", "Microservices", "Java"],
    achievements: ["Led Google Pay backend scale up", "Patented distributed cache algorithm"],
    courses: ["System Design Masterclass", "Advanced Backend Engineering"],
    studentsMentored: "500+",
    rating: "4.9/5.0",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Frontend Architect",
    company: "Microsoft",
    experience: "10+ Years",
    about: "Passionate about web performance and accessible UI. Co-authored several open-source libraries and speaks frequently at international JavaScript conferences.",
    specialization: "Web Performance & UI",
    skills: ["React", "Next.js", "TypeScript", "Accessibility", "Tailwind CSS"],
    achievements: ["Core contributor to React docs", "Speaker at JSConf 2024"],
    courses: ["Frontend Performance Tuning", "React Under The Hood"],
    studentsMentored: "320+",
    rating: "4.8/5.0",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "David Kumar",
    role: "AI/ML Engineer",
    company: "Amazon",
    experience: "6+ Years",
    about: "Works in the AWS Machine Learning team. Specializes in deploying massive language models and optimizing deep learning pipelines for production.",
    specialization: "Generative AI",
    skills: ["Python", "TensorFlow", "PyTorch", "NLP", "LLMs"],
    achievements: ["Built AWS Bedrock prototypes", "Published 3 research papers"],
    courses: ["Applied AI Bootcamp", "Transformers from Scratch"],
    studentsMentored: "210+",
    rating: "4.9/5.0",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Lead Product Designer",
    company: "Adobe",
    experience: "7+ Years",
    about: "Leads a design systems team at Adobe. Helps students master UX research, wireframing, high-fidelity prototyping, and bridging the gap between design and development.",
    specialization: "UX Strategy & Systems",
    skills: ["Figma", "Research", "Prototyping", "Design Systems"],
    achievements: ["Designed Adobe Express mobile UI", "Webby Award 2023"],
    courses: ["Figma Mastery", "UX Research Fundamentals"],
    studentsMentored: "400+",
    rating: "4.9/5.0",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Michael Chang",
    role: "Cloud Architect",
    company: "Deloitte",
    experience: "12+ Years",
    about: "Helps Fortune 500 companies migrate to the cloud. Expert in DevOps, CI/CD pipelines, and cloud-native architecture. Dedicated to making DevOps accessible.",
    specialization: "Cloud Infrastructure",
    skills: ["AWS", "Docker", "DevOps", "Terraform", "Linux"],
    achievements: ["Led $50M cloud migration", "AWS Certified Solutions Architect"],
    courses: ["Cloud Native Architecture", "DevOps Engineering"],
    studentsMentored: "150+",
    rating: "4.7/5.0",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Neha Patel",
    role: "Data Scientist",
    company: "Accenture",
    experience: "5+ Years",
    about: "Turns massive datasets into actionable business strategies. Teaches data manipulation, visualization, and statistical modeling with a hands-on approach.",
    specialization: "Data Analytics",
    skills: ["SQL", "Pandas", "Tableau", "Statistics", "R"],
    achievements: ["Optimized retail supply chain by 15%", "Kaggle Grandmaster"],
    courses: ["Data Science Foundation", "Advanced SQL"],
    studentsMentored: "280+",
    rating: "4.8/5.0",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Vikram Singh",
    role: "VP of Engineering",
    company: "Stripe",
    experience: "14+ Years",
    about: "Expert in engineering leadership, agile methodologies, and scaling teams. Mentors senior developers transitioning into management and architecture roles.",
    specialization: "Engineering Leadership",
    skills: ["Leadership", "Agile", "System Architecture", "FinTech"],
    achievements: ["Scaled engineering from 50 to 500+", "Built Stripe Identity core"],
    courses: ["Tech Leadership", "Scaling Engineering Teams"],
    studentsMentored: "120+",
    rating: "5.0/5.0",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Elena Rodriguez",
    role: "Security Engineer",
    company: "CrowdStrike",
    experience: "9+ Years",
    about: "Passionate about cybersecurity, ethical hacking, and securing web applications. Mentors students on secure coding practices and penetration testing.",
    specialization: "Cybersecurity",
    skills: ["Pen Testing", "Network Security", "Cryptography", "OWASP"],
    achievements: ["Discovered 5 zero-day vulnerabilities", "DEF CON Speaker"],
    courses: ["Ethical Hacking 101", "Web Application Security"],
    studentsMentored: "190+",
    rating: "4.9/5.0",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "James Wilson",
    role: "Mobile Lead",
    company: "Uber",
    experience: "8+ Years",
    about: "Specializes in building performant, pixel-perfect iOS and Android applications. Teaches React Native, Swift, and mobile architecture patterns.",
    specialization: "Mobile Development",
    skills: ["React Native", "Swift", "Kotlin", "Mobile UI"],
    achievements: ["Rewrote Uber Eats driver app", "Featured on App Store"],
    courses: ["React Native Masterclass", "Advanced Mobile Arch"],
    studentsMentored: "250+",
    rating: "4.8/5.0",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Ananya Rao",
    role: "Staff Engineer",
    company: "Netflix",
    experience: "11+ Years",
    about: "Expert in video streaming architectures, CDN integrations, and highly available microservices. Mentors on deep backend optimization.",
    specialization: "High Availability Systems",
    skills: ["Java", "Spring Boot", "Cassandra", "Kafka"],
    achievements: ["Reduced streaming latency by 20%", "Open source contributor"],
    courses: ["Distributed Systems", "Backend Optimization"],
    studentsMentored: "180+",
    rating: "4.9/5.0",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1b4392?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 11,
    name: "Marcus Johnson",
    role: "Blockchain Developer",
    company: "Coinbase",
    experience: "6+ Years",
    about: "Pioneer in smart contract development and Web3 integrations. Mentors students on Solidity, Ethereum, and building secure decentralized apps.",
    specialization: "Web3 & Blockchain",
    skills: ["Solidity", "Ethereum", "Rust", "Cryptography"],
    achievements: ["Audited top 10 DeFi protocols", "Ethereum Foundation Grant"],
    courses: ["Smart Contracts 101", "Web3 Development"],
    studentsMentored: "140+",
    rating: "4.7/5.0",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 12,
    name: "Sophie Laurent",
    role: "UI Engineer",
    company: "Vercel",
    experience: "5+ Years",
    about: "Obsessed with micro-interactions, CSS animations, and building beautiful components. Helps students bridge the gap between design and code.",
    specialization: "Creative Coding & UI",
    skills: ["React", "Framer Motion", "CSS/SCSS", "Three.js"],
    achievements: ["Awwwards Site of the Month", "Built highly-starred UI kit"],
    courses: ["Advanced CSS Animations", "Creative UI Development"],
    studentsMentored: "300+",
    rating: "4.9/5.0",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
  },
];

// Row definitions removed in favor of single row

export default function Mentors() {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  // Handle ESC to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedMentor(null);
    };
    if (selectedMentor) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedMentor]);

  return (
    <Section className="relative bg-[#FAFAFA] dark:bg-[#0F172A] pt-10 overflow-hidden" useContainer={false}>
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
        className="absolute top-[20%] right-[30%] w-[40%] h-[40%] rounded-full bg-red-200/40 dark:bg-red-500/20 blur-[150px] pointer-events-none mix-blend-multiply dark:mix-blend-screen"
      />

      <Container className="relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center w-full max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center rounded-full border border-[#EAEAEA] dark:border-white/20 bg-white dark:bg-white/10 px-4 py-1.5 shadow-sm mb-6"
          >
            <span className="text-[11px] font-bold tracking-[0.12em] text-[#525252] dark:text-[#E2E8F0] uppercase">
              Exclusive Network
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
              Meet Your Industry <span className="text-[#E6002D]">Mentors</span>
            </Heading>
            <Text variant="bodyLarge" color="muted" className="max-w-2xl mx-auto text-center mb-4 text-[#525252] dark:text-[#A3A3A3]">
              Explore our curated network of elite professionals actively building products at top global tech companies.
            </Text>
            <span className="text-xs font-bold text-[#E6002D] tracking-widest uppercase bg-[#E6002D]/5 px-3 py-1 rounded-full border border-[#E6002D]/10">
              Click Any Mentor To Explore
            </span>
          </motion.div>
        </div>
      </Container>

      {/* Auto-scrolling Gallery */}
      <div
        className="w-full relative z-10 flex flex-col gap-10 md:gap-14 overflow-hidden py-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Let's build a simpler robust Marquee using standard CSS animations for reliable pausing */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-left {
            animation: scroll-left 55s linear infinite;
            width: max-content;
          }
          .pause-on-hover:hover {
            animation-play-state: paused;
          }
        `}} />

        {/* Single Row: Moves Left */}
        <div className="w-full overflow-hidden flex">
          <div className="flex animate-marquee-left pause-on-hover items-center">
            {[...MENTORS, ...MENTORS].map((mentor, i) => (
              <div
                key={`${mentor.id}-${i}`}
                onClick={() => setSelectedMentor(mentor)}
                className="flex flex-col items-center gap-4 group cursor-pointer shrink-0 w-56 md:w-72 mx-4 md:mx-6"
              >
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-[32px] md:rounded-[32px] overflow-hidden border border-[#EAEAEA] dark:border-[#334155] shadow-sm bg-white dark:bg-[#1E293B] relative transition-all duration-400 group-hover:shadow-[0_15px_35px_-10px_rgba(230,0,45,0.25)] group-hover:border-[#E6002D]/40 group-hover:scale-[1.05] group-hover:-translate-y-2">
                  <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-400 flex items-center gap-2 bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-md text-[#111111] dark:text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-xl">
                      View Profile
                      <ArrowRight className="w-4 h-4 text-[#E6002D]" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Heading level="h5" className="text-[#111111] dark:text-white text-lg group-hover:text-[#E6002D] group-hover:dark:text-[#E6002D] transition-colors duration-300">
                    {mentor.name}
                  </Heading>
                  <Text variant="small" className="text-[#737373] dark:text-[#94A3B8] font-medium opacity-80 group-hover:opacity-100 transition-opacity text-sm">
                    {mentor.company}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Mentor Profile Modal */}
      <AnimatePresence>
        {selectedMentor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
            {/* Blurred Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-white/60 dark:bg-[#0F172A]/80 backdrop-blur-xl"
              onClick={() => setSelectedMentor(null)}
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-white dark:bg-[#1E293B] rounded-[32px] md:rounded-[40px] shadow-2xl border border-[#EAEAEA] dark:border-[#334155] overflow-hidden flex flex-col md:flex-row h-auto max-h-[95vh] z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMentor(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-[#FAFAFA] dark:bg-[#0F172A] hover:bg-red-50 dark:hover:bg-[#E6002D]/10 text-[#111111] dark:text-white hover:text-[#E6002D] dark:hover:text-[#E6002D] rounded-full flex items-center justify-center transition-colors z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column (Profile & Action) */}
              <div className="w-full md:w-[40%] bg-[#FAFAFA] dark:bg-[#0F172A] border-r border-[#EAEAEA] dark:border-[#334155] p-8 md:p-10 flex flex-col items-center text-center overflow-y-auto hide-scrollbar">
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white dark:border-[#1E293B] shadow-lg mb-6 relative">
                  <img src={selectedMentor.image} alt={selectedMentor.name} className="w-full h-full object-cover" />
                </div>

                <Heading level="h3" className="text-[#111111] dark:text-white mb-2">{selectedMentor.name}</Heading>
                <div className="text-lg font-medium text-[#737373] dark:text-[#94A3B8] mb-2">
                  {selectedMentor.role}
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1E293B] border border-[#EAEAEA] dark:border-[#334155] rounded-full text-sm font-bold text-[#111111] dark:text-white shadow-sm mb-8">
                  <div className="w-5 h-5 rounded-full bg-[#FAFAFA] dark:bg-[#0F172A] flex items-center justify-center text-[#E6002D] text-[10px]">
                    {selectedMentor.company.charAt(0)}
                  </div>
                  {selectedMentor.company}
                </div>

                <div className="w-full h-[1px] bg-[#EAEAEA] dark:bg-[#334155] mb-8" />

                <div className="grid grid-cols-2 gap-4 w-full mb-8">
                  <div className="flex flex-col items-center p-4 bg-white dark:bg-[#1E293B] rounded-2xl border border-[#EAEAEA] dark:border-[#334155]">
                    <span className="text-2xl font-black text-[#111111] dark:text-white mb-1">{selectedMentor.experience.split('+')[0]}+</span>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-[#737373] dark:text-[#94A3B8]">Years Exp</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white dark:bg-[#1E293B] rounded-2xl border border-[#EAEAEA] dark:border-[#334155]">
                    <span className="text-2xl font-black text-[#111111] dark:text-white mb-1 flex items-center gap-1">
                      <Star className="w-5 h-5 text-[#F59E0B] fill-[#F59E0B]" />
                      {selectedMentor.rating.split('/')[0]}
                    </span>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-[#737373] dark:text-[#94A3B8]">Rating</span>
                  </div>
                </div>

                <Button variant="primary" className="w-full rounded-xl py-4 h-14 font-semibold shadow-md shadow-[#E6002D]/15 hover:shadow-lg hover:shadow-[#E6002D]/20 transition-all mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Free Session
                </Button>

                <Button variant="outline" className="w-full rounded-xl py-4 h-14 font-semibold border-[#EAEAEA] dark:border-[#334155] text-[#0A66C2] dark:text-white hover:bg-[#0A66C2]/5 hover:border-[#0A66C2]/30 transition-all">
                  <LinkIcon className="w-4 h-4 mr-2" />
                  LinkedIn Profile
                </Button>
              </div>

              {/* Right Column (Details) */}
              <div className="w-full md:w-[60%] p-8 md:p-12 overflow-y-auto">
                {/* Professional Summary */}
                <div className="mb-10">
                  <Text variant="small" className="text-[#E6002D] uppercase tracking-widest font-bold mb-3 text-[10px] flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5" />
                    Professional Summary
                  </Text>
                  <Text variant="bodyLarge" color="muted" className="leading-relaxed font-medium text-[#525252] dark:text-[#A3A3A3]">
                    {selectedMentor.about}
                  </Text>
                </div>

                {/* Tech Stack */}
                <div className="mb-10">
                  <Text variant="small" className="text-[#E6002D] uppercase tracking-widest font-bold mb-4 text-[10px] flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5" />
                    Technology Stack
                  </Text>
                  <div className="flex flex-wrap gap-2">
                    {selectedMentor.skills.map(skill => (
                      <span key={skill} className="px-4 py-2 bg-[#FAFAFA] dark:bg-[#0F172A] border border-[#EAEAEA] dark:border-[#334155] rounded-xl text-sm font-semibold text-[#111111] dark:text-[#E2E8F0]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-10">
                  <Text variant="small" className="text-[#E6002D] uppercase tracking-widest font-bold mb-4 text-[10px] flex items-center gap-2">
                    <Award className="w-3.5 h-3.5" />
                    Key Achievements
                  </Text>
                  <div className="flex flex-col gap-3">
                    {selectedMentor.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-[#EAEAEA] dark:border-[#334155] bg-white dark:bg-[#1E293B]">
                        <div className="w-8 h-8 rounded-full bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-500 shrink-0">
                          <Award className="w-4 h-4" />
                        </div>
                        <span className="font-semibold text-[#525252] dark:text-[#E2E8F0]">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mentorship Stats */}
                <div>
                  <Text variant="small" className="text-[#E6002D] uppercase tracking-widest font-bold mb-4 text-[10px] flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    Mentorship
                  </Text>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl border border-[#EAEAEA] dark:border-[#334155] bg-[#FAFAFA] dark:bg-[#0F172A]">
                      <Users className="w-6 h-6 text-[#737373] dark:text-[#94A3B8] mb-3" />
                      <div className="text-2xl font-black text-[#111111] dark:text-white mb-1">{selectedMentor.studentsMentored}</div>
                      <div className="text-[11px] font-bold text-[#737373] dark:text-[#94A3B8] uppercase tracking-wider">Students Mentored</div>
                    </div>
                    <div className="p-5 rounded-2xl border border-[#EAEAEA] dark:border-[#334155] bg-[#FAFAFA] dark:bg-[#0F172A]">
                      <BookOpen className="w-6 h-6 text-[#737373] dark:text-[#94A3B8] mb-3" />
                      <div className="text-2xl font-black text-[#111111] dark:text-white mb-1">{selectedMentor.courses.length}</div>
                      <div className="text-[11px] font-bold text-[#737373] dark:text-[#94A3B8] uppercase tracking-wider">Active Courses</div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </Section>
  );
}
