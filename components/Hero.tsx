// app/(sections)/hero.tsx (atau components/Hero.tsx)
import React from 'react';
import Image from 'next/image';
// ScrollLink akan digunakan di Navbar (Client Component), bukan langsung di sini jika Hero adalah Server Component
// Namun, jika tombol di Hero melakukan scroll, maka Hero juga butuh "use client" atau tombolnya dipisah jadi Client Component

const Hero: React.FC = () => {
  // Tombol di sini, jika hanya link internal ke section (#projects), tidak perlu 'use client'
  // Jika menggunakan fungsi JavaScript untuk scroll, maka section ini atau tombolnya harus jadi Client Component
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-6 sm:p-8">
      <div className="mb-8 transform hover:scale-110 transition-transform duration-300">
        <Image
          src="/me.JPG"
          alt="Foto Profil Anda"
          width={160}
          height={160}
          className="rounded-full object-cover border-4 border-purple-500 shadow-xl"
          priority // Penting untuk LCP
        />
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">
        <span className="block">Nama Anda</span>
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl text-purple-300 mb-6 font-medium">
        Full-Stack Developer & UI/UX Enthusiast
      </h2>
      <p className="text-md sm:text-lg md:text-xl max-w-xl lg:max-w-2xl text-slate-300 mb-10 leading-relaxed">
        Selamat datang di portofolio saya! Saya adalah seorang pengembang yang bersemangat dalam menciptakan solusi digital yang inovatif dan ramah pengguna.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Link sederhana, biarkan Navbar (Client Component) yang handle smooth scroll */}
        <a
          href="#projects"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Lihat Karya Saya
        </a>
        <a
          href="#contact"
          className="border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Hubungi Saya
        </a>
      </div>
    </section>
  );
};

export default Hero;