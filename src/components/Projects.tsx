import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

/* =======================
   DATA
======================= */

const FEATURED_PROJECTS = [
  {
    title: "E-commerce",
    description:
      "A modern e-commerce platform built with Next.js, featuring authentication, cart management, and a clean responsive UI.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    demo: "https://scocial-platform.vercel.app",
    github: "https://github.com/esraakhaled123/e-commerce.git",
  },
  {
    title: "Kudo (Social App)",
    description:
      "A social platform focused on content sharing and user interaction with modern UI patterns.",
    tech: ["React", "Tailwind CSS", "React Query" ,'java script'],
    image:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800&h=500&fit=crop",
    demo: "https://scocial-platform.vercel.app/login",
    github: "https://github.com/esraakhaled123/scocial-platform.git",
  },
];

const PRACTICE_PROJECTS = [
  {
    title: "Mini Bookmark Manager",
    description:
      "Lightweight JavaScript app for managing bookmarks using local storage.",
    tech: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
    demo: "https://book-mark-bice.vercel.app/",
    github: "https://github.com/esraakhaled123/BookMark.git",
  },
   {
   title: "Gallery Website (UI Practice)",
    description: "Static gallery website built to practice modern layout, typography, and responsive design using HTML and CSS.",
tech: ["HTML", "CSS", "Responsive Design", 'BootStrao'],
 image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&h=400&fit=crop",

    demo: "https://galery-taupe.vercel.app/",
    github: "https://github.com/esraakhaled123/galery.git",
  },
];

/* =======================
   CARD
======================= */

const ProjectCard = ({ project, index, variant = "featured" }) => {
  const isPractice = variant === "practice";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: isPractice ? -3 : -5 }}
      className="bg-card rounded-xl overflow-hidden shadow-soft transition-all"
    >
      <div className="relative group overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            isPractice ? "h-36" : "h-44"
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          flex items-end justify-center gap-3 pb-4"
        >
          <a
            href={project.demo}
            target="_blank"
            className="p-2 bg-primary text-primary-foreground rounded-full"
          >
            <ExternalLink size={16} />
          </a>
          <a
            href={project.github}
            target="_blank"
            className="p-2 bg-background text-foreground rounded-full"
          >
            <Github size={16} />
          </a>
        </div>
      </div>

      <div className={isPractice ? "p-3" : "p-4"}>
        <h3 className={`font-semibold mb-1 ${
          isPractice ? "text-sm" : "text-base"
        }`}>
          {project.title}
        </h3>

        <p className={`text-muted-foreground mb-2 leading-relaxed ${
          isPractice ? "text-xs" : "text-sm"
        }`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((item) => (
            <span
              key={item}
              className={`rounded-full bg-primary/10 text-primary ${
                isPractice
                  ? "px-2 py-0.5 text-[10px]"
                  : "px-2.5 py-0.5 text-[11px]"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

/* =======================
   PAGE
======================= */

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-card/50">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Selected work & practice projects
          </p>
        </motion.div>

        {/* Featured */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {FEATURED_PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Practice */}
        <div>
          <h3 className="text-lg font-semibold mb-5 text-muted-foreground">
            Practice & Small Projects
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {PRACTICE_PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                variant="practice"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
