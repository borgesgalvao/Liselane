import React, { useState } from 'react';
import { X, Calendar, MapPin, Maximize2, Layers, Check, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onScheduleForProject: (projectTitle: string, category: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  onClose, 
  onScheduleForProject 
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <div 
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        id="project-modal-content"
        className="bg-[#FAF9F7] w-full max-w-5xl rounded-xs overflow-hidden shadow-2xl border border-[#D9D4C7] max-h-[92vh] flex flex-col my-auto relative"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E4DB] bg-[#FAF9F7] sticky top-0 z-20">
          <div className="flex items-center gap-2.5">
            <span className="text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-xs bg-[#EAE5DA] text-[#4A4740]">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-[#8A867D]">•</span>
            <span className="text-xs text-[#6B685F] font-medium">{project.location}</span>
          </div>

          <button
            id="close-project-modal"
            onClick={onClose}
            className="p-1.5 text-[#5C5952] hover:text-[#141413] hover:bg-[#EAE5DA] rounded-xs transition-colors"
            aria-label="Fechar modal de projeto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Title & Specs Row */}
          <div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-normal text-[#141413]">
              {project.title}
            </h2>
            <p className="text-base text-[#615E57] mt-1 font-sans-body">
              {project.subtitle}
            </p>

            {/* Quick Specs Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 p-4 bg-[#F2EFE8] rounded-xs border border-[#E0DBD0]">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#827E74] block">Área Construída</span>
                <span className="font-semibold text-sm text-[#141413]">{project.area}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#827E74] block">Ano de Conclusão</span>
                <span className="font-semibold text-sm text-[#141413]">{project.year}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#827E74] block">Localização</span>
                <span className="font-semibold text-sm text-[#141413]">{project.location}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#827E74] block">Arquiteto Responsável</span>
                <span className="font-semibold text-sm text-[#141413] truncate block">{project.leadArchitect}</span>
              </div>
            </div>
          </div>

          {/* Main Gallery Slideshow */}
          <div className="relative rounded-xs overflow-hidden bg-black/90 aspect-16/9 sm:aspect-21/9 flex items-center justify-center">
            <img
              src={project.gallery[activeImageIndex]}
              alt={`${project.title} - foto ${activeImageIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Gallery Navigation Arrows */}
            {project.gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
                  aria-label="Próxima foto"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                
                <div className="absolute bottom-3 right-4 px-2.5 py-1 rounded-full bg-black/60 text-white text-[11px] backdrop-blur-xs">
                  {activeImageIndex + 1} / {project.gallery.length}
                </div>
              </>
            )}
          </div>

          {/* Thumbnail Strip */}
          {project.gallery.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-20 h-14 rounded-xs overflow-hidden shrink-0 border-2 transition-all ${
                    activeImageIndex === idx ? 'border-[#C48B5E] scale-102' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Narrative: Concept & Technical Description */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-[#E8E4DB]">
            <div className="md:col-span-7 space-y-4">
              <h3 className="font-serif-display text-2xl font-normal text-[#141413]">
                Conceito & Partido Arquitetônico
              </h3>
              <p className="text-sm sm:text-base text-[#4F4C45] leading-relaxed">
                {project.description}
              </p>
              <div className="p-4 bg-[#F5F2EC] rounded-xs border-l-2 border-[#C48B5E]">
                <span className="text-xs font-semibold text-[#141413] block uppercase tracking-wider mb-1">
                  Diretriz Principal
                </span>
                <p className="text-xs sm:text-sm text-[#57534A] italic">
                  "{project.concept}"
                </p>
              </div>
            </div>

            <div className="md:col-span-5 space-y-6">
              {/* Highlights */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-semibold text-[#141413] mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C48B5E]" />
                  <span>Destaques da Obra</span>
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-[#524E46] flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C48B5E] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materials */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-semibold text-[#141413] mb-2.5 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#C48B5E]" />
                  <span>Materiais Predominantes</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.materials.map((mat, i) => (
                    <span 
                      key={i}
                      className="text-[11px] px-2.5 py-1 bg-[#ECE8DF] text-[#3D3A33] rounded-xs font-medium"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer with Scheduling Action */}
        <div className="px-6 py-4 bg-[#F2EFE8] border-t border-[#E8E4DB] flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 z-20">
          <div className="text-xs text-[#6B685F] text-center sm:text-left">
            Gostou desta linguagem arquitetônica? Solicite um estudo de viabilidade para seu terreno ou imóvel.
          </div>

          <button
            id="modal-cta-schedule"
            onClick={() => {
              onClose();
              onScheduleForProject(project.title, project.category);
            }}
            className="w-full sm:w-auto px-6 py-3 bg-[#141413] hover:bg-[#2B2A28] text-[#FAF9F7] text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#C48B5E]" />
            <span>Agendar Reunião para Este Estilo</span>
          </button>
        </div>

      </div>
    </div>
  );
};
