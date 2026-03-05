'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface PageHeroProps {
  title: string;
  subtitle: string;
  description?: string;
  backgroundImage?: string;
  gradient?: boolean;
}

export default function PageHero({
  title,
  subtitle,
  description,
  backgroundImage,
  gradient = true
}: PageHeroProps) {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover absolute inset-0 -z-10"
        />
      )}
      
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background -z-10" />
      )}

      <div className="container flex flex-col items-center justify-center text-center py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <p className="text-brand-cyan/80 font-semibold tracking-wide uppercase mb-3">
              {subtitle}
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 text-balance">
              {title}
            </h1>
          </div>
          
          {description && (
            <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed text-pretty">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
