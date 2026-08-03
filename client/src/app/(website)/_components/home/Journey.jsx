"use client";
import { motion } from "framer-motion";
import {
  Rocket,
  BookOpen,
  Users,
  Code,
  Trophy,
  Mic,
  Target,
  Award,
  Clock,
  ArrowRight
} from "lucide-react";
import { Section, Container } from "../../../../components/layout";
import { Heading, Text, Button } from "../../../../components/ui";
import { cn } from "../../../../utils";

const STEPS = [
  {
    id: "01",
    title: "Student Enrols",
    description: "Your journey begins with premium onboarding, orientation, and setting your career goals.",
    duration: "Day 1",
    icon: Rocket
  },
  {
    id: "02",
    title: "Foundation Learning",
    description: "Build incredibly strong fundamentals in programming, computer science, and logic.",
    duration: "Week 1 - 4",
    icon: BookOpen
  },
  {
    id: "03",
    title: "Live Mentorship",
    description: "Get assigned an industry expert from top tech companies for dedicated 1-on-1 guidance.",
    duration: "Ongoing",
    icon: Users
  },
  {
    id: "04",
    title: "Hands-on Projects",
    description: "Build real-world, production-grade applications to establish a formidable professional portfolio.",
    duration: "Week 5 - 16",
    icon: Code
  },
  {
    id: "05",
    title: "Hackathons & Assessments",
    description: "Compete in live coding challenges and regular skill assessments to test and accelerate your growth.",
    duration: "Every Month",
    icon: Trophy
  },
  {
    id: "06",
    title: "Interview Preparation",
    description: "Undergo rigorous mock interviews, resume building, and professional communication training.",
    duration: "Week 17 - 20",
    icon: Mic
  },
  {
    id: "07",
    title: "Placement Support",
    description: "Get direct referrals to top hiring partners by dedicated recruiters fighting for your success.",
    duration: "Week 21+",
    icon: Target
  },
  {
    id: "08",
    title: "Get Hired",
    description: "Receive your offer letter and confidently launch your dream career in tech.",
    duration: "Goal Reached",
    icon: Award
  }
];

const JourneyCard = ({ step, align }) => (
  <motion.div
    initial={{ opacity: 0, x: align === 'right' ? 30 : -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={cn(
      "bg-white/80 backdrop-blur-md rounded-[32px] p-6 lg:p-8 border border-[#EAEAEA] shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(230,0,45,0.12)] hover:border-[#E6002D]/30 transition-all duration-500 w-full group relative overflow-hidden",
      align === 'right' ? "text-right" : "text-left"
    )}
  >
    {/* Large Background Number */}
    <div className={cn(
      "absolute top-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 pointer-events-none select-none",
      align === 'right' ? "left-0" : "right-0"
    )}>
      <span className="text-8xl lg:text-9xl font-black font-display tracking-tighter">{step.id}</span>
    </div>

    {/* Duration Badge */}
    <div className={cn(
      "inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#EAEAEA] rounded-full text-[10px] font-bold text-[#737373] tracking-widest uppercase mb-5 shadow-sm transition-colors duration-300 group-hover:border-[#E6002D]/30",
      align === 'right' && "flex-row-reverse"
    )}>
      <Clock className="w-3.5 h-3.5 text-[#E6002D]" />
      {step.duration}
    </div>

    {/* Content */}
    <Heading level="h4" className="text-[#111111] mb-3 group-hover:text-[#E6002D] transition-colors duration-300">
      {step.title}
    </Heading>
    <Text variant="small" color="muted" className="leading-relaxed font-medium relative z-10">
      {step.description}
    </Text>
  </motion.div>
);

export default function Journey() {
  return (
    <Section className="relative bg-[#FAFAFA] pt-10 overflow-hidden" useContainer={false}>
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #111 1px, transparent 1px),
            linear-gradient(to bottom, #111 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 60% 100% at 50% 50%, #000 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 100% at 50% 50%, #000 0%, transparent 100%)',
        }}
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[20%] w-[60%] h-[40%] rounded-full bg-pink-200/40 blur-[140px] pointer-events-none mix-blend-multiply"
      />

      <Container className="relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center w-full max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center rounded-full border border-[#EAEAEA] bg-white px-4 py-1.5 shadow-sm mb-6"
          >
            <span className="text-[11px] font-bold tracking-[0.12em] text-[#525252] uppercase">
              Your Learning Journey
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
              The Path To Your <br className="hidden sm:block" />
              <span className="text-[#E6002D]">Dream Tech Career</span>
            </Heading>
            <Text variant="bodyLarge" color="muted" className="max-w-2xl mx-auto text-center">
              A meticulously crafted roadmap from enrolment to placement. We guide you through every step of your transformation.
            </Text>
          </motion.div>
        </div>

        {/* DESKTOP TIMELINE (Curved SVG Roadmap) */}
        <div className="hidden md:flex flex-col w-full max-w-5xl mx-auto relative">
          {STEPS.map((step, i) => {
            const isEven = i % 2 === 0;
            const isLast = i === STEPS.length - 1;

            return (
              <div key={step.id} className="relative flex w-full group">

                {/* Left Card */}
                <div className="w-[40%] flex justify-end pr-10 pb-20 relative z-10">
                  {isEven && <JourneyCard step={step} align="right" />}
                </div>

                {/* Center Axis & Curve */}
                <div className="w-[20%] relative flex justify-center shrink-0">
                  {/* Milestone Node */}
                  <div className={cn(
                    "absolute top-0 w-14 h-14 rounded-full border-[5px] border-white shadow-md z-20 flex items-center justify-center bg-white text-[#EAEAEA] transition-colors duration-500 group-hover:text-[#E6002D]",
                    isEven ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
                  )}>
                    <step.icon className="w-5 h-5" />
                  </div>

                  {/* Inner Node Pulse */}
                  <div className={cn(
                    "absolute top-[9px] w-[38px] h-[38px] rounded-full bg-[#E6002D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150 group-hover:scale-100 z-10",
                    isEven ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
                  )} />

                  {/* SVG Curve to Next Node */}
                  {!isLast && (
                    <svg className="absolute top-[28px] left-0 w-full h-[100%] z-0" preserveAspectRatio="none" viewBox="0 0 100 100">
                      {/* Background Track */}
                      <path
                        d={isEven ? "M 0 0 C 0 50, 100 50, 100 100" : "M 100 0 C 100 50, 0 50, 0 100"}
                        stroke="#EAEAEA"
                        strokeWidth="4"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                      />
                      {/* Animated Glow Path */}
                      <motion.path
                        d={isEven ? "M 0 0 C 0 50, 100 50, 100 100" : "M 100 0 C 100 50, 0 50, 0 100"}
                        stroke="#E6002D"
                        strokeWidth="4"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true, margin: "-10% 0px -40% 0px" }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                      />
                    </svg>
                  )}
                </div>

                {/* Right Card */}
                <div className="w-[40%] flex justify-start pl-10 pb-20 relative z-10">
                  {!isEven && <JourneyCard step={step} align="left" />}
                </div>

              </div>
            )
          })}
        </div>

        {/* MOBILE TIMELINE (Straight Line Roadmap) */}
        <div className="flex md:hidden flex-col w-full relative">
          {STEPS.map((step, i) => {
            const isLast = i === STEPS.length - 1;
            return (
              <div key={step.id} className="relative flex w-full group">
                {/* Vertical Line & Node */}
                <div className="w-14 shrink-0 relative flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-4 border-[#FAFAFA] shadow-sm z-20 flex items-center justify-center bg-white text-[#EAEAEA] transition-colors duration-500 group-hover:text-[#E6002D]">
                    <step.icon className="w-5 h-5" />
                  </div>
                  {!isLast && (
                    <div className="w-1 flex-1 bg-[#EAEAEA] relative overflow-hidden my-[-2px] z-0">
                      <motion.div
                        className="absolute top-0 left-0 right-0 bottom-0 bg-[#E6002D] origin-top"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, margin: "-10% 0px -40% 0px" }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                      />
                    </div>
                  )}
                </div>
                {/* Content */}
                <div className="flex-1 pb-12 pl-2">
                  <JourneyCard step={step} align="left" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mt-12 lg:mt-8 relative z-10"
        >
          <Heading level="h4" className="text-[#111111] mb-8 text-center">
            Ready To Begin Your Journey?
          </Heading>
          <Button variant="primary" size="lg" className="rounded-full shadow-lg shadow-[#E6002D]/15 hover:shadow-[#E6002D]/30 px-10 h-14 font-semibold group">
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

      </Container>
    </Section>
  );
}
