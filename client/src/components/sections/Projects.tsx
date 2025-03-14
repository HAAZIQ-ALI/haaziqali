import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-4">
            Projects
          </h2>
          <p className="text-center text-foreground/60 mb-12">
            My portfolio of personal projects is currently under development.
            Check back soon to see what I'm building!
          </p>

          <div 
            className="bg-background/50 border border-border rounded-lg p-6 max-w-3xl mx-auto
                     transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-primary/50 
                     hover:bg-background/70 cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-2">
              <code className="text-lg font-semibold">&lt;/&gt;</code>
              <span className="text-lg font-semibold">Coming Soon</span>
            </div>
            <p className="text-foreground/60">
              I'm currently working on exciting projects that showcase my skills in Python, AI/ML, and game development. Stay tuned!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}