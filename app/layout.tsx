// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Contoh penggunaan next/font
import './globals.css'; // Impor CSS Global (misalnya, Tailwind)
import Navbar from '@/components/Navbar'; // Asumsi Navbar di components
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' }); // Untuk digunakan dengan Tailwind

export const metadata: Metadata = {
  title: 'Nama Anda - Portofolio',
  description: 'Portofolio profesional Nama Anda sebagai [Profesi Anda]',
  // Tambahkan metadata lain seperti openGraph, icons, dll.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="bg-slate-50 text-gray-800 antialiased"> {/* Atur default bg dan text */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}