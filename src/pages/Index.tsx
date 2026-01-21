import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Contact from "@/components/contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" dir="ltr">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
