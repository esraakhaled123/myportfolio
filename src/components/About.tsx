import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-15 ">
      {/* <div className="container mx-auto max-w-4xl"> */}
        <div className="mx-auto max-w-5xl px-6">

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
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card p-8 rounded-2xl shadow-soft"
          >
            <h3 className="font-display text-2xl font-bold mb-4 text-foreground">What I Do</h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              I’m a Junior Front-End Developer focused on building responsive and user-friendly web applications using React and Next.js. I work with modern frontend tools such as React Query, Context API, Tailwind CSS, and Zod, and I enjoy creating clean, maintainable UI components.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card p-8 rounded-2xl shadow-soft"
          >
            <h3 className="font-display text-2xl font-bold mb-4 text-foreground">Background & Goals</h3>
            <p className="text-muted-foreground font-body leading-relaxed">
             I graduated from the Faculty of Computers and Information Systems. I’m currently focused on growing as a front-end developer, learning modern web technologies, and looking for opportunities to work in a collaborative environment on real-world products.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
