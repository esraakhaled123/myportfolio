import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-body text-muted-foreground text-sm flex items-center gap-2">
            Made with <Heart size={16} className="text-primary fill-primary" /> using React
          </p>
          <p className="font-body text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
