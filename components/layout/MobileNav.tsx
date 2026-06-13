"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, X, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ label: string; href: string }>;
}

export function MobileNav({ isOpen, onClose, navLinks }: MobileNavProps) {
  // Prevent body scroll when drawer is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Slide-out navigation drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-xs bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <Image
                  src="/logo.svg"
                  alt="Royal Arabian"
                  width={140}
                  height={41}
                  className="object-contain w-auto h-8"
                />
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="flex flex-col gap-2 py-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={onClose}
                    className="font-sans font-semibold text-lg text-primary hover:text-accent transition-colors py-2 border-b border-gray-50"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Bottom Section: CTAs & Socials */}
            <div className="space-y-6 pt-6 border-t border-gray-100">
              <div className="flex flex-col gap-3">
                <Button
                  variant="primary"
                  className="w-full justify-center"
                  onClick={onClose}
                >
                  Talk to us
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-center"
                  onClick={onClose}
                >
                  Travel Partners
                </Button>
              </div>

              {/* Social Channels */}
              <div className="flex justify-center gap-6 text-primary">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>

              <p className="text-center text-xs text-muted-foreground">
                © {new Date().getFullYear()} Royal Arabian. All rights reserved.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
