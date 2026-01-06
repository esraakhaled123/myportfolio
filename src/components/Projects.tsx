import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS_DATA = [
  {
    title: "Graduation Project - IMS",
    description: "Smart medical system for Chest Hospital - Graduation project from Faculty of Computers and Information",
    tech: ["React", "Next.js", "TypeScript"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    demo: "#",
    github: "#",
  },
  {
    title: "E-commerce Website",
    description: "Integrated online store with shopping cart and payment system",
    tech: ["React", "Tailwind", "API"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    demo: "#",
    github: "#",
  },
  {
    title: "Admin Dashboard",
    description: "Interactive dashboard with charts and statistics",
    tech: ["Next.js", "Chart.js", "TypeScript"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    demo: "#",
    github: "#",
  },
];

const ProjectCard = ({ project, index }: { project: typeof PROJECTS_DATA[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    whileHover={{ y: -10 }}
    className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
  >
    <div className="relative overflow-hidden group">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
        <a
          href={project.demo}
          className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform"
        >
          <ExternalLink size={20} />
        </a>
        <a
          href={project.github}
          className="p-3 bg-background text-foreground rounded-full hover:scale-110 transition-transform"
        >
          <Github size={20} />
        </a>
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
        {project.title}
      </h3>
      <p className="text-muted-foreground font-body text-sm mb-4 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-primary/10 text-primary text-xs font-body rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Projects
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Some of my previous work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
