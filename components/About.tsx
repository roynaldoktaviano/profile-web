// app/(sections)/about.tsx atau components/About.tsx
import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white text-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-3">
            Tentang Saya
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sedikit cerita tentang perjalanan dan passion saya di dunia teknologi.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/me.JPG" // Ganti dengan path gambar Anda
                alt="Foto Saya"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              Halo, Saya Roynald Oktaviano Kalele!
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Saya adalah seorang Website Developer yang bersemangat dengan pengalaman
              dalam membangun aplikasi web yang modern dan responsif. Saya selalu antusias untuk
              mempelajari teknologi baru dan menemukan solusi kreatif untuk berbagai tantangan.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Bagi saya, inti dari pengembangan perangkat lunak adalah menciptakan produk yang tidak hanya
              fungsional tetapi juga memberikan pengalaman pengguna yang menyenangkan. Saya percaya
              kolaborasi tim yang baik dan perhatian terhadap detail adalah kunci kesuksesan proyek.
            </p>
            {/* <p className="text-slate-600 leading-relaxed">
              Di luar coding, saya menikmati [Sebutkan Hobi atau Minat Anda, contoh: membaca buku tentang teknologi, bermain musik, atau hiking].
            </p> */}
            {/* (Opsional) Tambahkan tombol CTA jika perlu, misalnya link ke CV */}
            {/* <div className="mt-6 text-center md:text-left">
              <a
                href="/path-ke-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out shadow-md"
              >
                Unduh CV Saya
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;