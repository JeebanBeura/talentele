"use client";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Briefcase, Users, Target, CheckCircle2 } from "lucide-react";
import { Section, Container } from "../../../../components/layout";
import { Heading, Text, Button } from "../../../../components/ui";

const BENEFITS = [
  {
    title: "Learn From Industry Experts",
    description: "Get taught by engineers from top product companies.",
    icon: BookOpen,
  },
  {
    title: "Build Real-World Projects",
    description: "Create a portfolio that stands out to recruiters.",
    icon: Briefcase,
  },
  {
    title: "Career Mentorship",
    description: "1-on-1 guidance to navigate your tech career.",
    icon: Users,
  },
  {
    title: "Placement Assistance",
    description: "Mock interviews and dedicated hiring drives.",
    icon: Target,
  },
];

const TRUST_INDICATORS = [
  "6,000+ Students",
  "250+ Hiring Partners",
  "95% Placement Rate",
  "Industry-Recognised Certificates",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function CTASection() {
  return (
    <Section className="relative bg-white pt-24 pb-32 overflow-hidden" useContainer={false}>
      {/* Background Decor */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #111 1px, transparent 1px),
            linear-gradient(to bottom, #111 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 70%, transparent 100%)',
        }}
      />
      
      {/* Large radial gradient */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#E6002D]/10 to-pink-300/10 rounded-full blur-[100px] pointer-events-none"
      />

      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* Header Elements */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col items-center w-full max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center rounded-full border border-[#E6002D]/20 bg-[#E6002D]/5 px-4 py-1.5 shadow-sm">
              <span className="text-[11px] font-bold tracking-[0.12em] text-[#E6002D] uppercase">
                Join the Community
              </span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Heading level="h2" className="text-[#111111] mb-6 leading-tight text-center">
              Start Your Tech Career <br className="hidden sm:block" />
              With <span className="text-gradient">Talentele</span>
            </Heading>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Text variant="bodyLarge" color="muted" className="text-[#525252] text-center">
              Join thousands of students who are learning industry-ready skills, building real projects, and launching successful careers.
            </Text>
          </motion.div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16"
        >
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative flex flex-col items-center p-8 bg-white rounded-[24px] border border-[#EAEAEA] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#E6002D]/30"
              >
                {/* Hover Accent Line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#E6002D] rounded-b-md transition-all duration-300 group-hover:w-1/2 opacity-0 group-hover:opacity-100" />
                
                <div className="w-16 h-16 rounded-full bg-[#FAFAFA] flex items-center justify-center text-[#525252] mb-6 group-hover:bg-[#E6002D]/10 group-hover:text-[#E6002D] transition-colors duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                
                <Heading level="h6" className="text-[#111111] mb-3 group-hover:text-[#E6002D] transition-colors">
                  {benefit.title}
                </Heading>
                
                <Text variant="small" className="text-[#737373]">
                  {benefit.description}
                </Text>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16"
        >
          <Button variant="primary" size="lg" className="rounded-full shadow-lg shadow-[#E6002D]/20 hover:shadow-[#E6002D]/40 group h-14 px-8 text-base font-semibold w-full sm:w-auto">
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full bg-white backdrop-blur-sm border-[#EAEAEA] hover:bg-[#FAFAFA] text-[#111111] h-14 px-8 text-base font-semibold shadow-sm w-full sm:w-auto group">
            Book Free Career Counselling
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 hidden sm:block" />
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-8 border-t border-[#EAEAEA]/80 w-full max-w-4xl"
        >
          {TRUST_INDICATORS.map((indicator, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
              <span className="text-sm font-semibold text-[#525252]">{indicator}</span>
            </div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
