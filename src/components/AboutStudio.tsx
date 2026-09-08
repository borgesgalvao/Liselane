import React from 'react';
import { Compass, CheckCircle2, ShieldCheck, Ruler, Sparkles, Layers, MapPin } from 'lucide-react';
import { STUDIO_INFO } from '../data/mockData';

export const AboutStudio: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Diagnóstico & Imersão',
      desc: 'Compreensão profunda da rotina, hábitos e desejos da família ou da cultura da empresa, associada ao levantamento topográfico e solar do sítio.'
    },
    {
      num: '02',
      title: 'Partido Conceitual',
      desc: 'Desenvolvimento das primeiras maquetes físicas, croquis e estudos volumétricos em 3D fotorealista para validação das intenções espaciais.'
    },
    {
      num: '03',
      title: 'Engenharia & BIM',
      desc: 'Compatibilização tridimensional milimétrica entre estrutura, luminotécnica, automação e climatização, eliminando surpresas na obra.'
    },
    {
      num: '04',
      title: 'Detalhamento Executivo',
      desc: 'Cadernos técnicos com paginações de pedras nobres, marcenaria milimétrica e memoriais descritivos prontos para orçamentação segura.'
    }
  ];

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#FAF9F7] border-b border-[#EAE7E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 border-b border-[#EAE7E0]">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C48B5E] font-semibold">
              <Compass className="w-4 h-4 text-[#C48B5E]" />
              <span>O Estúdio Liselane</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#141413] leading-tight">
              Uma prática que une poesia espacial e precisão construtiva.
            </h2>

            <p className="text-base text-[#57544C] leading-relaxed font-sans-body">
              Liderado pela arquiteta Liselane, o escritório <strong>Liselane Arquitetura e design</strong>, sediado em Contagem - MG, desenvolve projetos onde cada linha tem uma razão estrutural e afetiva. Rejeitamos modismos efêmeros em favor de proporções atemporais, luz natural generosa e materiais nobres que acolhem a vida contemporânea.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#7A766E]">
              <MapPin className="w-4 h-4 text-[#C48B5E] shrink-0" />
              <span>Sede própria em Contagem - MG • Atuação em Minas Gerais e projetos por todo o Brasil</span>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#F2EFE8] rounded-xs border border-[#DFDAD0]">
                <span className="font-semibold text-sm text-[#141413] block">BIM Level 3</span>
                <span className="text-xs text-[#6E6A62]">Modelagem com detecção antecipada de interferências</span>
              </div>
              <div className="p-4 bg-[#F2EFE8] rounded-xs border border-[#DFDAD0]">
                <span className="font-semibold text-sm text-[#141413] block">Sustentabilidade Real</span>
                <span className="text-xs text-[#6E6A62]">Ventilação cruzada passiva e conforto térmico natural</span>
              </div>
            </div>
          </div>

          {/* Lead Architect Photo Showcase */}
          <div className="lg:col-span-6">
            <div className="max-w-md mx-auto bg-white p-6 rounded-xs border border-[#D9D4C7] shadow-sm space-y-4">
              <div className="aspect-4/5 rounded-xs overflow-hidden bg-[#ECE8DF] border border-[#D9D4C7]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Liselane - Arquiteta Titular e Fundadora"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif-display text-2xl font-medium text-[#141413]">Liselane</h4>
                  <span className="text-xs uppercase tracking-wider text-[#C48B5E] font-semibold font-sans-body">
                    CAU/MG
                  </span>
                </div>
                <p className="text-xs text-[#7A776F] mt-0.5">Arquiteta Titular & Fundadora • Liselane Arquitetura e design</p>
                <p className="text-xs text-[#524F49] mt-3 leading-relaxed font-sans-body">
                  À frente do escritório, Liselane conduz cada cliente desde o estudo inicial do lote até os mínimos detalhes executivos, garantindo atendimento próximo, humano e rigoroso.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Flow */}
        <div className="pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#C48B5E] font-semibold block mb-1">
              Método Projetual
            </span>
            <h3 className="font-serif-display text-3xl font-normal text-[#141413]">
              Como Transformamos Ideias em Obras Concretas
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div 
                key={step.num}
                className="p-6 bg-white rounded-xs border border-[#E5E1D8] shadow-xs hover:border-[#141413] transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif-display text-3xl font-light text-[#C48B5E] block mb-3">
                    {step.num}
                  </span>
                  <h4 className="font-semibold text-base text-[#141413] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#5E5B54] leading-relaxed font-sans-body">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
