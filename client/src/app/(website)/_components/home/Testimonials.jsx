"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Section, Container } from "../../../../components/layout";
import { Heading, Text } from "../../../../components/ui";
import { cn } from "../../../../utils";

const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    role: "Data Analyst",
    company: "Google",
    text: "The hands-on projects were a game changer for my career transition. I built real applications instead of just watching tutorials.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Priya Patel",
    role: "BI Analyst",
    company: "Amazon",
    text: "Mentorship and placement support helped me land my dream job within 3 months. The mock interviews were incredibly realistic.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Amit Kumar",
    role: "Data Scientist",
    company: "Meta",
    text: "Best platform to start a career in data. The curriculum is very industry-focused and taught by actual practitioners.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Sneha Gupta",
    role: "Product Manager",
    company: "Microsoft",
    text: "The community support is incredible. I learned more here than in my degree. Truly a premium educational experience.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Vikram Reddy",
    role: "Cloud Engineer",
    company: "Deloitte",
    text: "The cloud architecture modules were deep and highly relevant to what we do at scale. The instructors really know their stuff.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Anjali Desai",
    role: "Frontend Engineer",
    company: "Stripe",
    text: "Focusing on performance and accessibility from day one made all the difference in my technical interviews.",
    img: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=150&auto=format&fit=crop"
  }
];

const ROW_1 = TESTIMONIALS.slice(0, 3);
const ROW_2 = TESTIMONIALS.slice(3, 6);

export default function Testimonials() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Section className="relative bg-[#FAFAFA] pt-24 pb-32 overflow-hidden" useContainer={false}>
      <Container className="relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center w-full max-w-3xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-[#EAEAEA] bg-white px-4 py-1.5 shadow-sm mb-6"
          >
            <span className="text-[11px] font-bold tracking-[0.12em] text-[#525252] uppercase">
              Student Stories
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center text-center w-full"
          >
            <Heading level="h2" className="text-[#111111] mb-6 leading-tight text-center">
              What Our Students <span className="text-[#E6002D]">Say</span>
            </Heading>
            
            <Text variant="bodyLarge" color="muted" className="mb-4 text-center mx-auto">
              Real stories from ambitious individuals who transformed their careers through our immersive programs.
            </Text>
          </motion.div>
        </div>
      </Container>

      {/* Marquee Wrapper */}
      <div className="w-full relative z-10 flex flex-col gap-6 md:gap-8 py-4">
        {/* ROW 1 (Moves Left) */}
        <div className="w-full flex overflow-hidden">
          <motion.div 
            className="flex items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            }}
          >
            {[...ROW_1, ...ROW_1, ...ROW_1, ...ROW_1].map((item, i) => (
              <TestimonialCard key={`row1-${i}`} item={item} />
            ))}
          </motion.div>
        </div>

        {/* ROW 2 (Moves Right) */}
        <div className="w-full flex overflow-hidden">
          <motion.div 
            className="flex items-center"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            }}
          >
            {[...ROW_2, ...ROW_2, ...ROW_2, ...ROW_2].map((item, i) => (
              <TestimonialCard key={`row2-${i}`} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function TestimonialCard({ item }) {
  return (
    <div className="flex flex-col shrink-0 w-[350px] md:w-[450px] mx-3 md:mx-4 bg-white rounded-[28px] border border-[#EAEAEA] p-8 shadow-sm hover:shadow-lg hover:border-[#E6002D]/30 transition-all duration-300 group hover:-translate-y-1">
      {/* Rating & Quote Icon */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
          ))}
        </div>
        <Quote className="w-8 h-8 text-[#EAEAEA] group-hover:text-[#E6002D]/10 transition-colors duration-300" />
      </div>

      {/* Review Text */}
      <p className="text-[#525252] text-[15px] md:text-base leading-relaxed mb-8 flex-1 italic">
        "{item.text}"
      </p>

      {/* Profile Info */}
      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-[#EAEAEA]/60">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-[#EAEAEA] shrink-0">
          <img 
            src={item.img} 
            alt={item.name} 
            className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <div>
          <Heading level="h6" className="text-[#111111] text-base mb-0.5">
            {item.name}
          </Heading>
          <div className="text-[12px] font-medium text-[#737373]">
            {item.role} @ <span className="text-[#E6002D] font-bold">{item.company}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
