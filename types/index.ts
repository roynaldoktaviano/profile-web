// types/index.ts
export interface Project {
    id: string | number;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    liveUrl?: string;
    repoUrl?: string;
  }