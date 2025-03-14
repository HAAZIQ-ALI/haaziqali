import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { GradientText } from "@/components/ui/gradient-text";

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Skills & Expertise
          </h2>
          <p className="text-center text-foreground/60 mb-12">
            My technical skills and areas of interest, constantly expanding
            through hands-on projects and learning.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {SKILLS.map((skill) => (
              <Card key={skill.name} className="bg-background/50 border-muted">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <p className="text-sm text-foreground/60 mb-4">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-primary/80 bg-primary/10 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}