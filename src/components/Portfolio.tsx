import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/mockData';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Filter, Layers, MapPin } from 'lucide-react';

interface PortfolioProps {
  onScheduleForProject: (projectTitle: string, category: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onScheduleForProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('todos');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'residencial', label: 'Residencial de Alto Padrão' },
    { id: 'interiores', label: 'Design de Interiores' },
    { id: 'corporativo', label: 'Corporativo & Comercial' },
    { id: 'paisagismo', label: 'Paisagismo & Urbanismo' },
  ];

  const filteredProjects = selectedCategory === 'todos' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#FAF9F7] border-b border-[#EAE7E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#EAE7E0]">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C48B5E] font-semibold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C48B5E]" />
              <span>Portfólio Selecionado</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#141413]">
              Obras & Projetos Autorais
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#615E57] max-w-md font-sans-body">
            Cada projeto nasce da leitura atenta do sítio, do clima local e da essência de quem irá vivenciar o espaço.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto py-8 no-scrollbar">
          {categories.map((cat) => {
            const count = cat.id === 'todos' 
              ? PROJECTS_DATA.length 
              : PROJECTS_DATA.filter(p => p.category === cat.id).length;

            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                id={`filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xs text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? 'bg-[#141413] text-[#FAF9F7] border-[#141413] shadow-xs'
                    : 'bg-white text-[#57544D] border-[#D9D4C7] hover:border-[#141413] hover:text-[#141413]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-[#EFECE6] text-[#7A776F]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer flex flex-col bg-white border border-[#E2DDD3] rounded-xs overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#141413]/30"
            >
              {/* Image with zoom on hover */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#ECE8DF]">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="px-4 py-2 rounded-xs bg-[#141413]/85 text-white text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 backdrop-blur-xs transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span>Ver Memorial & Fotos</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C48B5E]" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-[#141413]/80 backdrop-blur-xs text-white text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-xs">
                  {project.categoryLabel}
                </div>

                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-[#141413] text-[11px] font-medium px-2 py-0.5 rounded-xs shadow-xs">
                  {project.area}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#827E75] mb-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C48B5E]" />
                      <span>{project.location}</span>
                    </span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif-display text-2xl font-normal text-[#141413] group-hover:text-[#C48B5E] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#615E57] mt-1.5 line-clamp-2 font-sans-body">
                    {project.subtitle}
                  </p>
                </div>

                {/* Materials Tags Preview */}
                <div className="mt-5 pt-4 border-t border-[#EFECE6] flex items-center justify-between">
                  <div className="text-[11px] text-[#78756D] truncate max-w-[75%]">
                    {project.materials.slice(0, 2).join(' • ')}
                  </div>
                  <div className="text-xs font-semibold text-[#141413] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span className="text-[11px] uppercase tracking-wider">Detalhes</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C48B5E]" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          onScheduleForProject={onScheduleForProject}
        />
      )}
    </section>
  );
};
