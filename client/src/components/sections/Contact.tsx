import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Get in Touch
          </h2>
          <p className="text-center text-foreground/60 mb-8">
            Feel free to reach out through any of these platforms!
          </p>

          <div className="flex flex-col gap-4 max-w-md mx-auto">
            <a
              href="https://github.com/HAAZIQ-ALI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-background/50 border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <SiGithub className="w-6 h-6 mr-4" />
              <span className="text-foreground/80">@HAAZIQ-ALI</span>
            </a>

            <a
              href="mailto:haaziqali01@gmail.com"
              className="flex items-center p-4 bg-background/50 border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <Mail className="w-6 h-6 mr-4" />
              <span className="text-foreground/80">haaziqali01@gmail.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}