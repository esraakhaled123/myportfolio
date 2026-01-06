import { motion } from "framer-motion";

// Skill data moved outside for better readability
const SKILLS_DATA = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "JavaScript", level: 95 },
  { name: "HTML/CSS", level: 95 },
];

const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-card p-6 rounded-xl shadow-soft"
  >
    <div className="flex justify-between mb-3">
      <span className="font-body font-medium text-foreground">{name}</span>
      <span className="font-body text-muted-foreground">{level}%</span>
    </div>
    <div className="h-3 bg-muted rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
        className="h-full bg-gradient-to-r from-primary to-gold rounded-full"
      />
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Technologies I work with daily
          </p>
        </motion.div>

        <div className="grid gap-6">
          {SKILLS_DATA.map((skill, index) => (
            <SkillBar 
              key={skill.name} 
              name={skill.name} 
              level={skill.level} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
