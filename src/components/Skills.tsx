// import { motion } from "framer-motion";

// // Skill data moved outside for better readability
// const SKILLS_DATA = [
//   { name: "React", level: 90 },
//   { name: "Next.js", level: 85 },
//   { name: "TypeScript", level: 80 },
//   { name: "Tailwind CSS", level: 90 },
//   { name: "JavaScript", level: 95 },
//   { name: "HTML/CSS", level: 95 },
// ];

// const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => (
//   <motion.div
//     initial={{ opacity: 0, x: -30 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.5, delay: index * 0.1 }}
//     className="bg-card p-6 rounded-xl shadow-soft"
//   >
//     <div className="flex justify-between mb-3">
//       <span className="font-body font-medium text-foreground">{name}</span>
//       <span className="font-body text-muted-foreground">{level}%</span>
//     </div>
//     <div className="h-3 bg-muted rounded-full overflow-hidden">
//       <motion.div
//         initial={{ width: 0 }}
//         whileInView={{ width: `${level}%` }}
//         viewport={{ once: true }}
//         transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
//         className="h-full bg-gradient-to-r from-primary to-gold rounded-full"
//       />
//     </div>
//   </motion.div>
// );

// const Skills = () => {
//   return (
//     <section id="skills" className="py-20 px-6">
//       <div className="container mx-auto max-w-4xl">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient">
//             Skills
//           </h2>
//           <p className="text-muted-foreground font-body text-lg">
//             Technologies I work with daily
//           </p>
//         </motion.div>

//         <div className="grid gap-6">
//           {SKILLS_DATA.map((skill, index) => (
//             <SkillBar 
//               key={skill.name} 
//               name={skill.name} 
//               level={skill.level} 
//               index={index} 
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

// import { motion } from "framer-motion";

// const SKILLS = [
//   "React",
//   "Next.js",
//   "TypeScript",
//   "JavaScript",
//   "Tailwind CSS",
//   "HTML & CSS",
// ];

// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//     scale: 0.9,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 180,
//       damping: 18,
//     },
//   },
// };

// export default function Skills() {
//   return (
//     <section id="skills" className="py-24 px-6">
//       <div className="container mx-auto max-w-5xl">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient">
//             Skills
//           </h2>
//           <p className="text-muted-foreground text-lg">
//             Technologies I work with and enjoy building products using
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {SKILLS.map((skill) => (
//             <motion.div
//               key={skill}
//               variants={cardVariants}
//               whileHover={{
//                 scale: 1.06,
//               }}
//               className="
//                 relative
//                 bg-card
//                 rounded-2xl
//                 p-8
//                 shadow-soft
//                 overflow-hidden
//                 group
//               "
//             >
//               {/* Gradient Glow */}
//               <div
//                 className="
//                   absolute inset-0
//                   bg-gradient-to-r from-primary to-gold
//                   opacity-0
//                   group-hover:opacity-20
//                   transition-opacity
//                   duration-500
//                 "
//               />

//               {/* Border Glow */}
//               <div
//                 className="
//                   absolute inset-0
//                   rounded-2xl
//                   border border-transparent
//                   group-hover:border-primary/40
//                   transition-colors
//                   duration-500
//                 "
//               />

//               {/* Content */}
//               <motion.p
//                 animate={{ y: [0, -6, 0] }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="relative z-10 text-xl font-semibold text-foreground text-center"
//               >
//                 {skill}
//               </motion.p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";

const SKILLS = [
  "HTML5",
  "CSS3",
  "SCSS",
  "Tailwind CSS",
  "Bootstrap",
  "JavaScript (ES6+)",
  "TypeScript",
  "jQuery",
  "React",
  "Next.js",
  "Context API",
  "Redux",
  "React Query",
  "React Hook Form",
  "Zod",
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 18,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 ">
      {/* <div className="container mx-auto max-w-6xl"> */}
        <div className="mx-auto max-w-6xl ">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies I use to build modern front-end applications
          </p>
        </motion.div>

        {/* Skills Cloud */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill}
              variants={item}
              whileHover={{ scale: 1.12, y: -4 }}
              className="
                relative
                px-6 py-3
                rounded-full
                bg-card
                text-foreground
                font-medium
                shadow-soft
                cursor-default
                overflow-hidden
                group
              "
            >
              {/* Gradient glow */}
              <span
                className="
                  absolute inset-0
                  bg-gradient-to-r from-primary to-gold
                  opacity-0
                  group-hover:opacity-25
                  transition-opacity
                  duration-500
                "
              />
              <span className="relative z-10">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
