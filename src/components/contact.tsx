import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const items = [
    {
      icon: Mail,
      title: "Email",
      value: "esraakhaledharfoush@gmail.com",
      link: "mailto:esraakhaledharfoush@gmail.com",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/esraa-khaled-90331a25a",
      link: "https://www.linkedin.com/in/esraa-khaled-90331a25a",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/esraakhaled123",
      link: "https://github.com/esraakhaled123",
    },
  ];

  return (
    <section id="contact" className="py-20  ">
      {/* <div className="container mx-auto max-w-4xl"> */}
      <div className="mx-auto max-w-6xl ">


        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground font-body">
            Feel free to reach out for opportunities or collaborations
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-lg transition hover:-translate-y-1"
            >
              <item.icon className="w-7 h-7 text-primary mb-4 group-hover:scale-110 transition " />
              <h3 className="font-semibold text-lg text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground break-all">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;
