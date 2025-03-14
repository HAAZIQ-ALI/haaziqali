import { motion } from "framer-motion";
import { QUOTES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-6">Favorite Quotes</h3>
          <div className="grid gap-6">
            {QUOTES.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="max-w-md mx-auto"
              >
                <p className="text-xl italic mb-2 font-serif">{quote.text}</p>
                <p className="text-foreground/60">- {quote.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground">
              Twitter
            </a>
          </div>
          <p className="text-center text-foreground/60 mt-6">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
