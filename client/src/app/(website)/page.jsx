import Hero from "./_components/home/Hero";
import Statistics from "./_components/home/Statistics";
import Features from "./_components/home/Features";
import Programs from "./_components/home/Programs";
import Journey from "./_components/home/Journey";
import Projects from "./_components/home/Projects";
import Mentors from "./_components/home/Mentors";
import SuccessWall from "./_components/home/SuccessWall";
import Testimonials from "./_components/home/Testimonials";
import FAQ from "./_components/home/FAQ";
import CTASection from "./_components/home/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Statistics />
      <Features />
      <Programs />
      <Journey />
      <Projects />
      <Mentors />
      <SuccessWall />
      <Testimonials />
      <FAQ />
      <CTASection />
    </main>
  );
}
