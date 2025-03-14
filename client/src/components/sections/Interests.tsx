import { motion } from "framer-motion";
import { INTERESTS } from "@/lib/constants";
import { Tv, Book } from "lucide-react";

export function Interests() {
  return (
    <section id="interests" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-4">
            Interests & Hobbies
          </h2>
          <p className="text-center text-foreground/60 mb-12">
            Beyond coding, here are some things I'm passionate about
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-background/50 border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Tv className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Favorite Anime</h3>
              </div>
              <p className="text-foreground/60 mb-4">Top picks:</p>
              <div className="flex flex-col gap-2">
                {INTERESTS[0].items.map((anime) => (
                  <div key={anime} className="bg-background/30 p-2 rounded">
                    {anime}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background/50 border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Book className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Manga</h3>
              </div>
              <p className="text-foreground/60 mb-4">Currently reading:</p>
              <div className="bg-background/30 p-2 rounded">
                {INTERESTS[1].currentlyReading}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}