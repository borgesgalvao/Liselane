import React from 'react';
import { ArrowRight, Calendar, Award, CheckCircle2, Building, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../data/mockData';

interface HeroProps {
  onOpenSchedule: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSchedule }) => {
  return (
    <section 
      id="hero-section"
      className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden border-b border-[#EAE7E0]"
    >
      {/* Subtle architectural grid pattern background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Typography & Lead Column */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F0ECE4] border border-[#E2DDD3] text-[#3D3A34] text-xs font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#C48B5E] animate-pulse" />
              <span>Escritório de Arquitetura & Design Contemporâneo</span>
              <span className="text-[#999489]">•</span>
              <span className="text-[#6E6A63]">{STUDIO_INFO.cauRegistry}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-display text-4xl sm:text-5xl xl:text-6xl font-normal tracking-tight text-[#141413] leading-[1.12]">
              Espaços atemporais concebidos para <span className="italic font-normal text-[#C48B5E]">emocionar</span> e perdurar.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#5E5B54] font-normal leading-relaxed max-w-2xl font-sans-body">
              Combinamos rigor estrutural, sensibilidade bioclimática e materiais nobres para traduzir o modo de vida de nossos clientes em residências exclusivas e ambientes corporativos de alta performance.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-cta-agendar"
                onClick={onOpenSchedule}
                className="px-7 py-4 bg-[#141413] hover:bg-[#2B2A28] text-[#FAF9F7] text-xs uppercase tracking-widest font-semibold rounded-xs transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-xl group cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#C48B5E]" />
                <span>Agendar Consulta Inicial</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                id="hero-cta-portfolio"
                href="#portfolio"
                className="px-7 py-4 bg-white hover:bg-[#F3EFE8] text-[#141413] border border-[#D9D4C7] text-xs uppercase tracking-widest font-semibold rounded-xs transition-all duration-300 flex items-center justify-center gap-2 hover:border-[#141413]"
              >
                <span>Ver Portfólio de Obras</span>
              </a>
            </div>

            {/* Key Quality Indicators */}
            <div className="pt-6 border-t border-[#EAE7E0] grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#141413]">
                  +140
                </div>
                <div className="text-xs text-[#7A776F] mt-0.5">
                  Projetos entregues
                </div>
              </div>

              <div>
                <div className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#141413]">
                  15 Anos
                </div>
                <div className="text-xs text-[#7A776F] mt-0.5">
                  De prática autoral
                </div>
              </div>

              <div>
                <div className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#141413]">
                  14
                </div>
                <div className="text-xs text-[#7A776F] mt-0.5">
                  Prêmios & Bienais
                </div>
              </div>
            </div>

          </div>

          {/* Hero Visual Imagery Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image Showcase */}
              <div className="relative rounded-sm overflow-hidden shadow-2xl border border-[#E0DBD0] aspect-4/5 group">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Casa Marítima - Obra Liselane Arquitetura e design"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                
                {/* Visual architectural tag */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white p-4 rounded-xs bg-[#141413]/70 backdrop-blur-md border border-white/10">
                  <div className="text-[10px] uppercase tracking-widest text-[#C48B5E] font-medium">
                    Destaque Recente
                  </div>
                  <div className="font-serif-display text-lg font-medium text-white mt-0.5">
                    Casa Marítima • Trancoso, BA
                  </div>
                  <div className="text-xs text-white/70 flex items-center justify-between mt-1">
                    <span>740 m² de área construída</span>
                    <span className="text-[#C48B5E] font-medium">Prêmio AsBEA 2024</span>
                  </div>
                </div>
              </div>

              {/* Floating Architectural Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#FAF9F7] p-4 rounded-xs border border-[#D9D4C7] shadow-xl hidden sm:flex items-center gap-3.5 max-w-xs">
                <div className="w-10 h-10 rounded-xs bg-[#141413] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-[#C48B5E]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#141413]">Atendimento Personalizado</div>
                  <div className="text-[11px] text-[#69665E]">Reuniões presenciais ou online por videoconferência</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
