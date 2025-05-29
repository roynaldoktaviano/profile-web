// components/Navbar.tsx
"use client"; // WAJIB untuk interaktivitas client-side

import React, { useState, useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { to: "hero", label: "Home" },
    { to: "about", label: "Tentang" },
    { to: "skills", label: "Keahlian" },
    { to: "projects", label: "Proyek" },
    { to: "contact", label: "Kontak" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-slate-800 shadow-lg py-3' : 'bg-transparent py-4'
      } text-white p-4`}
    >
      <ul className="container mx-auto flex justify-center items-center space-x-3 md:space-x-5">
        {navLinks.map((link) => (
          <li key={link.to}>
            <ScrollLink
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70} // Sesuaikan offset jika navbar Anda fixed dan memiliki height
              activeClass="text-purple-400 border-b-2 border-purple-400 font-semibold"
              className="cursor-pointer hover:text-purple-300 transition-colors duration-200 pb-1 text-sm md:text-base"
            >
              {link.label}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;