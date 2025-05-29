// components/ProjectCard.tsx
import React from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import { Project } from '@/types'; // Sesuaikan path jika perlu

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col h-full transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="relative w-full h-56 md:h-64">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-slate-800 mb-2">{project.title}</h3>
        <div className="mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-slate-600 leading-relaxed mb-4 text-sm flex-grow">{project.description}</p>
        <div className="mt-auto pt-4 border-t border-slate-200 flex justify-start space-x-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
            >
              Lihat Live
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-slate-600 hover:bg-slate-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
            >
              Kode Sumber
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;