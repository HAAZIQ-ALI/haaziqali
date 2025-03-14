import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hey, I'm <GradientText>Haaziq Ali</GradientText>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            A 14-year-old programmer and aspiring AI engineer 
            from Darbhanga, India. Passionate about coding, 
            artificial intelligence, chess, and cooking.
          </p>
          <div className="flex gap-4">
            <Button asChild variant="default" size="lg">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}