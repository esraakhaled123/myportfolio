import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            I am a passionate Frontend Developer with a focus on creating beautiful and functional user interfaces. 
            I enjoy turning complex problems into simple, elegant, and intuitive designs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card p-8 rounded-2xl shadow-soft"
          >
            <h3 className="font-display text-2xl font-bold mb-4 text-foreground">My Journey</h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              Started my journey in web development with a curiosity for how things work on the internet. 
              Over time, I've honed my skills in modern frontend technologies and have worked on various projects 
              ranging from simple landing pages to complex web applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card p-8 rounded-2xl shadow-soft"
          >
            <h3 className="font-display text-2xl font-bold mb-4 text-foreground">My Goals</h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              My goal is to always build products that provide value to users and have a positive impact. 
              I am constantly learning new technologies and staying up-to-date with the latest industry trends 
              to deliver the best possible solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
