import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
  <footer className="py-5 px-6 border-t border-border">
  <div className="container mx-auto max-w-6xl">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
    >
      {/* Left */}
      <p className="text-sm text-muted-foreground">
       Available for opportunities
      </p>

      {/* Center - Icons */}
      <div className="flex items-center gap-4">
        {/* GitHub */}
        <a
          href="https://github.com/esraakhaled123"
          target="_blank"
          className="p-2 rounded-full border border-border text-muted-foreground
                     hover:text-primary hover:border-primary transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.242 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/esraa-khaled-90331a25a/"
          target="_blank"
          className="p-2 rounded-full border border-border text-muted-foreground
                     hover:text-primary hover:border-primary transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.545C0 23.227.79 24 1.77 24h20.46C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.23 0zM7.06 20.452H3.56V9h3.5v11.452zM5.31 7.433c-1.12 0-2.03-.907-2.03-2.026 0-1.12.91-2.03 2.03-2.03 1.12 0 2.03.91 2.03 2.03 0 1.12-.91 2.026-2.03 2.026zM20.452 20.452h-3.5v-5.569c0-1.328-.027-3.037-1.852-3.037-1.852 0-2.135 1.446-2.135 2.94v5.666h-3.5V9h3.36v1.561h.047c.468-.888 1.61-1.826 3.31-1.826 3.54 0 4.195 2.332 4.195 5.364v6.353z"/>
          </svg>
        </a>

        {/* Email */}
        <a
          href="esraakhaledharfoush@gmail.com"
          className="p-2 rounded-full border border-border text-muted-foreground
                     hover:text-primary hover:border-primary transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a>
      </div>

      {/* Right */}
      <p className="text-sm text-muted-foreground">
        ©Esraa Khaled {new Date().getFullYear()}
      </p>
    </motion.div>
  </div>
</footer>

  );
};

export default Footer;
