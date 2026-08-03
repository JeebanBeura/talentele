"use client";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2, Star, ShieldCheck } from "lucide-react";
import { Container, Grid } from "../../../../components/layout";
import { Button, Heading, Text, Input, Avatar } from "../../../../components/ui";
import { HeroBackground } from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center pt-28 pb-20 overflow-hidden">
      <HeroBackground />

      <Container className="relative z-20">
        <Grid className="items-center gap-16 lg:gap-12">

          {/* Left Side (55%) */}
          <div className="flex flex-col gap-8 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex"
            >
              <div className="flex items-center gap-2 rounded-full border border-white/60 dark:border-white/20 bg-white/50 dark:bg-white/10 backdrop-blur-md px-4 py-1.5 shadow-sm shadow-[#E6002D]/5">
                <Sparkles className="h-4 w-4 text-[#E6002D]" />
                <span className="text-sm font-semibold tracking-wide text-[#E6002D]">Career Transformation 2026</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              <Heading level="display" className="text-[#111111] dark:text-white">
                Build Your Career with <span className="text-gradient">Real Skills</span>
              </Heading>

              <Text variant="bodyLarge" color="muted" className="max-w-xl text-[#525252] dark:text-[#A3A3A3]">
                Master industry-ready skills through hands-on projects, expert mentorship, and guaranteed placement support from top tech professionals.
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button variant="primary" size="lg" className="rounded-full shadow-lg shadow-[#E6002D]/20 hover:shadow-[#E6002D]/40 group h-14 px-8 text-base font-semibold w-full sm:w-auto">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-sm border-[#EAEAEA] dark:border-white/20 hover:bg-white dark:hover:bg-white/20 text-[#111111] dark:text-white h-14 px-8 text-base font-semibold shadow-sm w-full sm:w-auto">
                Explore Programs
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8 border-t border-[#EAEAEA]/70 pt-8"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="h-11 w-11 rounded-full border-2 border-white dark:border-[#0F172A] bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-sm">
                    <img src="https://i.pravatar.cc/100?img=1" alt="Student 1" className="h-full w-full object-cover" />
                  </div>
                  <div className="h-11 w-11 rounded-full border-2 border-white dark:border-[#0F172A] bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-sm">
                    <img src="https://i.pravatar.cc/100?img=2" alt="Student 2" className="h-full w-full object-cover" />
                  </div>
                  <div className="h-11 w-11 rounded-full border-2 border-white dark:border-[#0F172A] bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-sm">
                    <img src="https://i.pravatar.cc/100?img=3" alt="Student 3" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white dark:border-[#0F172A] bg-[#F5F5F5] dark:bg-slate-800 text-xs font-bold text-[#525252] dark:text-[#E2E8F0] shadow-sm">
                    +10k
                  </div>
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                  </div>
                  <Text variant="small" weight="semibold" className="text-[#111111] dark:text-white">10,000+ Students</Text>
                </div>
              </div>

              <div className="hidden h-10 w-[1px] bg-[#EAEAEA] dark:bg-white/10 sm:block" />

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#16A34A]/10 text-[#16A34A]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <Text variant="small" weight="bold" className="text-[#111111] dark:text-white">95% Placement</Text>
                  <Text variant="small" color="muted">Top Hiring Partners</Text>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side (45%) */}
          <div className="relative lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Background Glow for Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-[40px] bg-gradient-to-tr from-[#E6002D]/15 to-pink-300/20 blur-2xl opacity-70 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[440px] rounded-[32px] border border-white/80 dark:border-white/10 bg-white/70 dark:bg-[#1E293B]/80 p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] backdrop-blur-2xl sm:p-10"
            >
              <div className="mb-8 text-center">
                <Heading level="h4" className="mb-2 text-[#111111] dark:text-white tracking-tight">Book Free Counselling</Heading>
                <Text color="muted" variant="small">Get expert guidance for your tech career.</Text>
              </div>

              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#525252] dark:text-[#94A3B8] ml-1 uppercase tracking-wider">Full Name</label>
                  <Input placeholder="John Doe" className="bg-white/60 dark:bg-[#0F172A]/60 border-[#EAEAEA] dark:border-[#334155] dark:text-white dark:placeholder:text-[#64748B] h-12 rounded-xl focus:bg-white dark:focus:bg-[#0F172A]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#525252] dark:text-[#94A3B8] ml-1 uppercase tracking-wider">Mobile Number</label>
                  <Input placeholder="+91 98765 43210" type="tel" className="bg-white/60 dark:bg-[#0F172A]/60 border-[#EAEAEA] dark:border-[#334155] dark:text-white dark:placeholder:text-[#64748B] h-12 rounded-xl focus:bg-white dark:focus:bg-[#0F172A]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#525252] dark:text-[#94A3B8] ml-1 uppercase tracking-wider">Email Address</label>
                  <Input placeholder="john@example.com" type="email" className="bg-white/60 dark:bg-[#0F172A]/60 border-[#EAEAEA] dark:border-[#334155] dark:text-white dark:placeholder:text-[#64748B] h-12 rounded-xl focus:bg-white dark:focus:bg-[#0F172A]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#525252] dark:text-[#94A3B8] ml-1 uppercase tracking-wider">Program</label>
                  <select 
                  className="h-12 w-full rounded-xl border border-[#EAEAEA] dark:border-[#334155] bg-white/60 dark:bg-[#0F172A]/60 px-4 text-sm text-[#525252] dark:text-white outline-none focus:border-[#E6002D] focus:ring-1 focus:ring-[#E6002D] transition-all"
                  defaultValue=""
                >
                  <option value="" disabled>Select Program</option>
                    <option value="full-stack">Full Stack Development</option>
                    <option value="data-science">Data Science</option>
                    <option value="ui-ux">UI/UX Design</option>
                  </select>
                </div>

                <Button variant="primary" size="lg" className="mt-4 w-full rounded-xl bg-[#E6002D] py-6 text-base shadow-lg shadow-[#E6002D]/20 hover:bg-[#C40026]">
                  Request Call Back
                </Button>
              </form>

              {/* <div className="mt-8 flex flex-col gap-3 border-t border-[#EAEAEA] pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#16A34A]/10">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#16A34A]" />
                  </div>
                  <Text variant="small" color="muted" className="font-medium text-[#525252]">1-on-1 Career Roadmap Session</Text>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#16A34A]/10">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#16A34A]" />
                  </div>
                  <Text variant="small" color="muted" className="font-medium text-[#525252]">Free Profile Evaluation</Text>
                </div>
              </div> */}
            </motion.div>
          </div>
        </Grid>
      </Container>
    </section>
  );
}
