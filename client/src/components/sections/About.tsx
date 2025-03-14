import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GradientText } from "@/components/ui/gradient-text";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            About <GradientText>Me</GradientText>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">My Journey</h3>
                <p className="text-foreground/80">
                  I'm a passionate developer with experience in building modern web applications.
                  My journey in tech started with curiosity and has evolved into a career focused
                  on creating impactful solutions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">My Approach</h3>
                <p className="text-foreground/80">
                  I believe in writing clean, maintainable code and creating intuitive user experiences.
                  I'm constantly learning and adapting to new technologies to stay at the forefront
                  of web development.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}