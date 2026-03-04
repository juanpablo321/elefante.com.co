"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface SubmenuItem {
  label: string;
  href: string;
}

interface NavDropdownProps {
  label: string;
  submenu: SubmenuItem[];
  onItemClick: (href: string) => void;
}

export function NavDropdown({ label, submenu, onItemClick }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-1 relative"
      >
        {label}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="inline-block"
        >
          <ChevronDown size={16} />
        </motion.div>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-red group-hover:w-3/4 transition-all duration-300" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 w-56 bg-brand-dark-lighter/95 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden shadow-lg shadow-black/30"
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="py-2">
              {submenu.map((item, index) => (
                <div key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onItemClick(item.href);
                      setIsOpen(false);
                    }}
                    className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {item.label}
                  </a>
                  {index < submenu.length - 1 && (
                    <div className="h-px bg-white/5 mx-4" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
