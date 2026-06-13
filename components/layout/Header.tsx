"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Destinations", href: "/cn", hasDropdown: true },
  { label: "Packages", href: "#packages", hasDropdown: true },
  { label: "About", href: "#about", hasDropdown: false },
  { label: "Get in touch", href: "#contact", hasDropdown: false },
];

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="relative">
        {/* Desktop Navigation */}
        <nav className="mx-auto xl:px-[30px] md:px-[20px] py-[10px] hidden lg:block relative">
          <div className="flex items-center justify-end md:gap-[15px] lg:gap-[29px] max-w-[1280px] mx-auto">
            {/* Logo */}
            <Link className="shrink-0 mr-auto" href="/cn">
              <div className="flex items-center 2xl:w-[230px] xl:w-[220px] h-[90px] relative">
                <Image
                  alt="Royal Arabian"
                  width={230}
                  height={68}
                  priority
                  className="object-contain"
                  src="/logo.svg"
                />
              </div>
            </Link>

            {/* Menu Links */}
            <div className="flex items-center lg:gap-[15px] xl:gap-[29px]">
              {navLinks.map((link) => (
                <div key={link.label} className="relative">
                  <Link
                    className="group flex items-center gap-1 transition-colors hover:opacity-70"
                    href={link.href}
                  >
                    <span className="text-primary text-[16px] font-semibold leading-[29px]">
                      {link.label}
                    </span>
                    {link.hasDropdown && (
                      <div className="w-6 h-6 flex items-center justify-center">
                        <svg
                          width="13"
                          height="7"
                          viewBox="0 0 13 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transition-transform duration-200 group-hover:translate-y-0.5"
                          aria-hidden="true"
                        >
                          <title>Chevron Down</title>
                          <path
                            d="M1 1L6.5 6L12 1"
                            stroke="#1C355E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center xl:min-w-[305px] justify-end gap-[15px] min-w-[292px]">
              {/* Talk to us */}
              <Link
                className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-[9px] rounded transition-colors"
                href="#contact"
              >
                <span className="text-[16px] leading-[24px]">Talk to us</span>
              </Link>

              {/* Travel Partners Dropdown (CSS Hover) */}
              <div className="relative group">
                <div className="flex items-center gap-2 bg-white hover:bg-gray-50 text-accent border-[0.5px] border-accent px-[23px] py-[9px] rounded transition-colors cursor-pointer">
                  <span className="text-[16px] leading-[24px] font-medium">
                    Travel Partners
                  </span>
                  <svg
                    width="12"
                    height="6"
                    viewBox="0 0 12 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-200 group-hover:rotate-180"
                    aria-hidden="true"
                  >
                    <title>Chevron Down</title>
                    <path
                      d="M1 1L6 5L11 1"
                      stroke="#C46A3B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100 py-1">
                  <Link
                    className="block px-4 py-2 text-sm text-primary hover:bg-gray-100 font-semibold"
                    href="#"
                  >
                    Agent Sign Up
                  </Link>
                  <Link
                    className="block px-4 py-2 text-sm text-primary hover:bg-gray-100 font-semibold"
                    href="https://b2b.royalarabian.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Log In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Header */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between px-4 h-[72px]">
            <Link className="shrink-0" href="/cn">
              <div className="relative w-[150px] h-[46px]">
                <Image
                  alt="Royal Arabian"
                  fill
                  sizes="150px"
                  priority
                  className="object-contain"
                  src="/logo.svg"
                />
              </div>
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setIsMobileNavOpen(true)}
              className="w-12 h-12 flex items-center justify-center cursor-pointer text-primary hover:bg-gray-50 rounded"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Chevron Down</title>
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="#1C355E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer menu */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        navLinks={navLinks}
      />
    </header>
  );
}
