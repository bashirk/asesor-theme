"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/logosaas.png";
import { NavLinks } from "@/components/nav-links";
import { NavButtons } from "@/components/nav-buttons";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 bg-black text-white z-20 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Image src={Logo} alt="ChatBot Solutions Logo" height={40} width={40} />
          <nav className="hidden md:flex gap-6 items-center">
            <NavLinks />
            <NavButtons />
          </nav>
          <button className="md:hidden" onClick={toggleMobileMenu}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black text-white md:hidden flex flex-col">
          <div className="flex justify-end p-4">
            <button onClick={toggleMobileMenu} className="text-2xl">&times;</button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-grow gap-6 text-xl">
            <NavLinks />
          </nav>
          <div className="p-6">
            <div className="flex flex-col gap-4">
              <button className="btn btn-primary w-full">Get Started</button>
              <button className="btn btn-outline w-full">Book a Demo</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// ... (NavLinks, NavButtons components will be defined in separate files)
