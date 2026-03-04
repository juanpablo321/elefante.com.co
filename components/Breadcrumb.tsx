'use client';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="py-6 border-b border-white/5 bg-background relative z-10 mt-20 md:mt-24">
      <div className="container flex items-center gap-2 text-sm">
        <Link href="/" className="flex items-center gap-1 text-white/70 hover:text-white transition-colors">
          <Home size={16} />
          <span>Inicio</span>
        </Link>

        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight size={16} className="text-white/30" />
            {item.href ? (
              <Link
                href={item.href}
                className="text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-white">{item.label}</span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
