import { motion } from "framer-motion";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground font-body text-lg mb-4"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-5xl md:text-7xl font-bold mb-6 text-gradient"
            >
              Esraa Khaled
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="font-display text-2xl md:text-3xl text-foreground/80 mb-8"
            >
              Frontend Developer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="font-body text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
            >
              A Frontend Developer specializing in React and Next.js.
              I love building beautiful and smooth user experiences.
            </motion.p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-body font-medium shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                My Projects
              </button>
              <a
                href="/cv.pdf"
                download
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-body font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-gold/20 rounded-full blur-2xl scale-110" />
              
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary to-gold rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ padding: "4px" }}
                />
                <div className="absolute inset-1 bg-background rounded-full overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover object-top scale-125 translate-y-8"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-3 bg-primary rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
