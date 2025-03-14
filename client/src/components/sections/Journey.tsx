import { motion } from "framer-motion";
import { LEARNING_JOURNEY } from "@/lib/constants";
import { Card } from "@/components/ui/card";

export function Journey() {
  return (
    <section id="journey" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-6">
            Learning Journey
          </h2>
          <p className="text-center text-foreground/60 mb-12">
            My ongoing path of growth and development in technology
          </p>

          <div className="grid gap-6 max-w-2xl mx-auto">
            {LEARNING_JOURNEY.map((item, index) => (
              <Card key={index} className="bg-background/50 border-border hover:border-primary/50 transition-colors p-6">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/60">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}