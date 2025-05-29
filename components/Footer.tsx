import React from 'react';
// Impor ikon jika Anda ingin menggunakan ikon SVG kustom atau dari library
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Contoh jika menggunakan react-icons

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Contoh data link sosial media
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/usernameanda', /*icon: <FaGithub />*/ },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/usernameanda', /*icon: <FaLinkedin />*/ },
    { name: 'Twitter', href: 'https://twitter.com/usernameanda', /*icon: <FaTwitter />*/ },
    // Tambahkan media sosial lainnya
  ];

  return (
    <footer className="bg-slate-800 text-slate-300 py-12">
      <div className="container mx-auto px-6 text-center">
        {/* Bagian Link Sosial Media (Opsional) */}
        {socialLinks.length > 0 && (
          <div className="mb-6 flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-slate-400 hover:text-purple-400 transition-colors duration-300"
              >
                {/* Jika menggunakan react-icons atau SVG inline: */}
                {/* <span className="text-2xl">{social.icon}</span> */}
                {/* Jika hanya teks: */}
                <span className="sr-only">{social.name}</span> {/* Untuk aksesibilitas jika ikon tidak ada teksnya */}
                {/* Ganti dengan ikon Anda di bawah ini, atau gunakan teks */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  {social.name === 'GitHub' && <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />}
                  {social.name === 'LinkedIn' && <><path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" stroke="none" /></>}
                  {social.name === 'Twitter' && <path strokeLinecap="round" strokeLinejoin="round" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />}
                </svg>
              </a>
            ))}
          </div>
        )}

        {/* Teks Copyright */}
        <p className="text-sm text-slate-400">
          &copy; {currentYear} Nama Anda. All rights reserved.
        </p>

        {/* (Opsional) Link ke atas atau kredit tambahan */}
        <p className="text-xs text-slate-500 mt-2">
          Dibuat dengan <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 underline">Next.js</a>
          {' & '}
          <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 underline">Tailwind CSS</a>.
        </p>

        {/* (Opsional) Jika Anda memiliki kebijakan privasi atau halaman lain */}
        {/* <div className="mt-4">
          <Link href="/privacy-policy" className="text-xs text-slate-500 hover:text-purple-400 underline mx-2">
            Kebijakan Privasi
          </Link>
          <Link href="/terms-of-service" className="text-xs text-slate-500 hover:text-purple-400 underline mx-2">
            Ketentuan Layanan
          </Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;