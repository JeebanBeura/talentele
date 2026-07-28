"use client";
import { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Users, Target, Building2, UserCheck, Star, ArrowRight } from "lucide-react";
import { Section, Container, Grid } from "../../../../components/layout";
import { Button, Heading, Text } from "../../../../components/ui";

function AnimatedCounter({ value, suffix = "", duration = 2.5 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const springValue = useSpring(0, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, value, springValue]);

  const isDecimal = value % 1 !== 0;

  const displayValue = useTransform(springValue, (current) => {
    return isDecimal
      ? current.toFixed(1)
      : Math.floor(current).toLocaleString();
  });

  return (
    <span ref={ref} className="inline-flex items-center">
      <motion.span>{displayValue}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}

const STATS = [
  { value: 10000, suffix: "+", label: "Students Enrolled", icon: Users, height: "h-[280px] lg:h-[300px]" },
  { value: 95, suffix: "%", label: "Placement Support", icon: Target, height: "h-[240px] lg:h-[260px]" },
  { value: 300, suffix: "+", label: "Hiring Partners", icon: Building2, height: "h-[200px] lg:h-[220px]" },
  { value: 150, suffix: "+", label: "Industry Mentors", icon: UserCheck, height: "h-[260px] lg:h-[280px]" },
  { value: 4.9, suffix: "/5", label: "Student Rating", icon: Star, height: "h-[320px] lg:h-[340px]" },
];

export default function Statistics() {
  return (
    <Section className="relative bg-[#FAFAFA] pt-10 overflow-hidden" useContainer={false}>
      {/* Background Layers matching Hero */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #111 1px, transparent 1px),
            linear-gradient(to bottom, #111 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 60%, transparent 100%)',
        }}
      />
      <motion.div
        animate={{
          x: [0, 40, -40, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] right-[20%] w-[40%] h-[50%] rounded-full bg-pink-300/15 blur-[120px] pointer-events-none"
      />

      <Container className="relative z-10">
        <Grid className="items-center gap-12 lg:gap-8">
          {/* Left Content (40%) */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div className="flex items-center rounded-full border border-[#EAEAEA] bg-white px-4 py-1.5 shadow-sm">
                <span className="text-[11px] font-bold tracking-[0.12em] text-[#525252] uppercase">
                  Trusted by 10,000+ Students
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Heading level="h1" className="text-[#111111] leading-[1.1] mb-6">
                Numbers That <span className="text-[#E6002D]">Speak</span> for Themselves
              </Heading>

              <Text variant="bodyLarge" color="muted" className="max-w-md">
                Our proven methodology and industry connections guarantee that your career gets the momentum it deserves.
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 flex items-start gap-8"
            >
              <Button variant="primary" size="lg" className="rounded-full shadow-lg shadow-[#E6002D]/15 hover:shadow-[#E6002D]/30 px-8 text-base font-semibold group h-14 w-full sm:w-auto text-center justify-center">
                Explore Success Stories
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              {/* Hand-drawn style curved arrow (SVG) */}
              <div className="hidden lg:block mt-6 opacity-60">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#E6002D] animate-pulse -mt-2 ml-4">
                  <path d="M10 50 C 15 25 35 15 55 25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M45 15 L 55 25 L 45 35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Right Content (60%) - Pillars */}
          <div className="col-span-12 lg:col-span-7 mt-8 lg:mt-0">
            <div className="flex overflow-x-auto lg:overflow-visible lg:justify-center items-end gap-4 lg:gap-6 pb-8 pt-12 px-4 lg:px-0 -mx-4 lg:mx-0 snap-x snap-mandatory hide-scrollbar">
              {STATS.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                    className={`relative flex flex-col items-center justify-between w-[150px] lg:w-[130px] shrink-0 pt-6 pb-8 px-4 rounded-t-full bg-white/70 backdrop-blur-xl border border-white/80 shadow-md snap-center group transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(230,0,45,0.15)] hover:-translate-y-4 ${stat.height}`}
                  >
                    <div className="w-14 h-14 rounded-full bg-[#FAFAFA] border border-[#EAEAEA] flex items-center justify-center text-[#525252] group-hover:bg-[#E6002D]/10 group-hover:text-[#E6002D] group-hover:border-transparent transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex flex-col items-center text-center gap-2 mt-auto">
                      <div className="text-2xl font-bold tracking-tight text-[#111111] font-display flex items-center">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <Text variant="small" className="text-[#737373] font-medium leading-tight">
                        {stat.label}
                      </Text>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Grid>
      </Container>

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
