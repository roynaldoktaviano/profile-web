// app/(sections)/projects.tsx atau components/Projects.tsx
import React from 'react';
import ProjectCard from '@/components/ProjectCard'; // Sesuaikan path jika perlu
import { Project } from '@/types'; // Sesuaikan path jika perlu

// Contoh data proyek (Anda bisa fetch data ini dari API atau CMS di Server Component)
const dummyProjects: Project[] = [
  {
    id: 1,
    title: 'Aplikasi E-commerce Keren',
    description: 'Platform e-commerce lengkap dengan fitur keranjang belanja, pembayaran, dan manajemen produk. Dibangun dengan Next.js, Tailwind CSS, dan Prisma.',
    imageUrl: '/images/project-ecommerce.jpg', // Ganti dengan path gambar Anda
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Prisma', 'PostgreSQL'],
    liveUrl: '#', // Ganti dengan URL live demo
    repoUrl: '#', // Ganti dengan URL repository
  },
  {
    id: 2,
    title: 'Website Portofolio Pribadi V2',
    description: 'Desain ulang website portofolio pribadi dengan fokus pada UX yang lebih baik dan teknologi terbaru. Menggunakan App Router Next.js 14.',
    imageUrl: '/images/project-portfolio.jpg', // Ganti dengan path gambar Anda
    tags: ['Next.js 14', 'App Router', 'Server Components', 'Tailwind CSS'],
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'Dashboard Analitik Data',
    description: 'Aplikasi dashboard interaktif untuk visualisasi data penjualan. Fitur filtering, sorting, dan chart dinamis menggunakan Recharts.',
    imageUrl: '/images/project-dashboard.jpg', // Ganti dengan path gambar Anda
    tags: ['React', 'Recharts', 'Node.js', 'Express', 'MongoDB'],
    repoUrl: '#',
  },
  // Tambahkan proyek lainnya
];


const Projects: React.FC = () => {
  // Di aplikasi nyata, Anda mungkin akan melakukan fetch data di sini jika ini Server Component:
  // const projects = await fetchProjectsFromAPI();

  const projectsToDisplay = dummyProjects; // Ganti dengan data asli Anda

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-3">
            Proyek Terbaru Saya
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Beberapa karya yang telah saya bangun dan kembangkan.
          </p>
        </div>

        {projectsToDisplay.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projectsToDisplay.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-500">
            Belum ada proyek untuk ditampilkan saat ini.
          </p>
        )}

        {/* (Opsional) Tombol untuk melihat lebih banyak proyek jika ada */}
        {/* <div className="text-center mt-16">
          <a
            href="/all-projects" // Atau link ke GitHub/platform lain
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out shadow-md"
          >
            Lihat Semua Proyek
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;