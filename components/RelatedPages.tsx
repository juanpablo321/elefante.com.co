'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface RelatedPage {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

interface RelatedPagesProps {
  pages: RelatedPage[];
  title?: string;
}

export default function RelatedPages({ pages, title = 'Explora más en la sección Conoce' }: RelatedPagesProps) {
  return (
    <section className="py-24 bg-brand-dark-lighter/50">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Complementa tu conocimiento explorando nuestros otros temas clave
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {pages.map((page, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={page.href}>
                <div className="h-full glass-effect hover:bg-white/8 transition-all duration-300 p-8 rounded-2xl group cursor-pointer">
                  {page.icon && (
                    <div className="mb-4 text-brand-cyan group-hover:text-brand-cyan/80 transition-colors">
                      {page.icon}
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-white/70 mb-4 group-hover:text-white/80 transition-colors">
                    {page.description}
                  </p>
                  <div className="flex items-center gap-2 text-brand-cyan group-hover:gap-3 transition-all">
                    <span>Explorar</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
