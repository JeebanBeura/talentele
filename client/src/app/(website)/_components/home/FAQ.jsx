"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Plus, Minus, MessageCircle, ArrowRight } from "lucide-react";
import { Section, Container } from "../../../../components/layout";
import { Heading, Text, Button } from "../../../../components/ui";
import { cn } from "../../../../utils";

const FAQ_DATA = [
  {
    id: "q1",
    category: "Admissions",
    question: "How do I enrol in a course?",
    preview: "Start your journey by booking a free counselling session.",
    answer: "Our admission process begins with a free career counselling session. Once our experts understand your career goals, they will guide you through the enrolment process, curriculum details, and batch schedules."
  },
  {
    id: "q2",
    category: "Admissions",
    question: "Can I join without prior coding experience?",
    preview: "Yes, our foundation modules are designed for beginners.",
    answer: "Absolutely. Our programs are designed to take you from fundamentals to advanced concepts. The curriculum starts with a comprehensive foundation module tailored for students from non-technical backgrounds."
  },
  {
    id: "q3",
    category: "Courses",
    question: "Are classes live or self-paced?",
    preview: "100% live, interactive sessions with industry experts.",
    answer: "We believe in active learning. All our core sessions are conducted live by experienced professionals. You can interact, ask questions in real-time, and participate in live coding exercises."
  },
  {
    id: "q4",
    category: "Courses",
    question: "Will I get lifetime access?",
    preview: "Yes, you receive lifetime access to all course materials.",
    answer: "Yes, once enrolled, you get lifetime access to all recorded lectures, reading materials, assignments, and future updates to the curriculum."
  },
  {
    id: "q5",
    category: "Placements",
    question: "Do you provide placement assistance?",
    preview: "We offer 100% placement support with top tech companies.",
    answer: "Yes! Our dedicated placement team helps you with resume building, LinkedIn optimization, mock interviews, and exclusive recruitment drives with our 300+ hiring partners."
  },
  {
    id: "q6",
    category: "Placements",
    question: "How are mock interviews conducted?",
    preview: "1-on-1 sessions with experts from FAANG and top product companies.",
    answer: "Mock interviews are conducted strictly in a 1-on-1 format by senior engineers and hiring managers from leading tech companies to simulate real-world interview pressure and provide actionable feedback."
  },
  {
    id: "q7",
    category: "Certificates",
    question: "Will I receive an industry-recognised certificate?",
    preview: "Yes, a verifiable certificate upon successful graduation.",
    answer: "Upon successfully completing the program and all capstone projects, you will receive an industry-recognized certificate that is highly valued by our hiring partners."
  },
  {
    id: "q8",
    category: "Fees",
    question: "Do you offer EMI options?",
    preview: "Flexible 0% cost EMI plans available up to 12 months.",
    answer: "We have partnered with leading financial institutions to offer flexible 0% interest EMI options, allowing you to pay in easy monthly installments over 6 to 12 months."
  },
  {
    id: "q9",
    category: "Support",
    question: "Can I contact mentors directly?",
    preview: "Dedicated 1-on-1 mentorship sessions are part of the curriculum.",
    answer: "Yes, every student is assigned a dedicated industry mentor. You can book 1-on-1 sessions with them to discuss career strategies, technical blockers, and project reviews."
  },
  {
    id: "q10",
    category: "Support",
    question: "How do I raise technical doubts?",
    preview: "24/7 dedicated support channels with expert Teaching Assistants.",
    answer: "We provide instant doubt resolution through our dedicated technical support platform. You can raise a ticket anytime and connect with our expert Teaching Assistants via chat, audio, or video call."
  }
];

const CATEGORIES = ["All", "Admissions", "Courses", "Placements", "Fees", "Certificates", "Support"];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFaqId, setOpenFaqId] = useState(null);

  // Filter FAQs based on search and category
  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((faq) => {
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <Section className="relative bg-[#FAFAFA] pt-24 pb-32 overflow-hidden" useContainer={false}>
      {/* Background Decor */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #111 1px, transparent 1px),
            linear-gradient(to bottom, #111 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 70% 80% at 50% 0%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 50% 0%, #000 40%, transparent 100%)',
        }}
      />
      <motion.div
        animate={{ x: [0, -30, 30, 0], y: [0, 40, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[10%] w-[35%] h-[40%] rounded-full bg-[#E6002D]/5 blur-[120px] pointer-events-none"
      />

      <Container className="relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center w-full max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-[#EAEAEA] bg-white px-4 py-1.5 shadow-sm mb-6"
          >
            <span className="text-[11px] font-bold tracking-[0.12em] text-[#525252] uppercase">
              Help Center
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
              Got Questions? <br className="hidden sm:block" />
              We've Got <span className="text-[#E6002D]">Answers</span>
            </Heading>

            <Text variant="bodyLarge" color="muted" className="mb-8 text-center mx-auto max-w-2xl">
              Find everything you need to know about our programs, admissions, and how we help you launch a successful career.
            </Text>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-2xl mx-auto relative group"
          >
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-[#737373] group-focus-within:text-[#E6002D] transition-colors">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search your question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-16 pl-14 pr-12 rounded-[24px] border border-[#EAEAEA] bg-white shadow-sm outline-none transition-all duration-300 focus:border-[#E6002D]/30 focus:shadow-[0_8px_30px_rgb(230,0,45,0.12)] text-[#111111] font-medium text-lg placeholder:text-[#A3A3A3]"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-6 flex items-center text-[#A3A3A3] hover:text-[#525252] transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenFaqId(null);
              }}
              className="relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6002D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAFA]"
            >
              <span className={cn("relative z-10", activeCategory === category ? "text-white" : "text-[#525252] hover:text-[#111111]")}>
                {category}
              </span>
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategoryIndicator"
                  className="absolute inset-0 bg-[#E6002D] rounded-full shadow-md"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        {filteredFaqs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <AnimatePresence>
              {filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={faq.id}
                    onClick={() => toggleFaq(faq.id)}
                    className={cn(
                      "group bg-white/70 backdrop-blur-md rounded-[24px] border p-6 lg:p-8 cursor-pointer transition-all duration-300 overflow-hidden",
                      isOpen
                        ? "border-[#E6002D]/30 shadow-[0_12px_40px_-15px_rgba(230,0,45,0.15)] bg-white -translate-y-1"
                        : "border-[#EAEAEA] shadow-sm hover:border-[#E6002D]/20 hover:shadow-md hover:-translate-y-1"
                    )}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex flex-col gap-2 flex-1">
                        <Heading level="h5" className="text-[#111111] leading-snug">
                          {faq.question}
                        </Heading>
                        <AnimatePresence initial={false}>
                          {!isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <Text variant="small" className="text-[#737373] mt-1 font-medium truncate">
                                {faq.preview}
                              </Text>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <div className={cn(
                        "flex shrink-0 items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
                        isOpen ? "bg-[#E6002D] text-white" : "bg-[#FAFAFA] text-[#525252] group-hover:bg-red-50 group-hover:text-[#E6002D]"
                      )}>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, type: "spring" }}
                        >
                          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                        </motion.div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 mt-4 border-t border-[#EAEAEA]">
                            <Text variant="body" className="text-[#525252] leading-relaxed">
                              {faq.answer}
                            </Text>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center mb-6">
              <Search className="w-8 h-8 text-[#D4D4D4]" />
            </div>
            <Heading level="h4" className="text-[#111111] mb-2">No matching questions found</Heading>
            <Text variant="body" color="muted" className="mb-6">Try adjusting your search terms or browse all FAQs.</Text>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="rounded-full font-semibold px-6"
            >
              Browse All FAQs
            </Button>
          </motion.div>
        )}

      </Container>
    </Section>
  );
}
