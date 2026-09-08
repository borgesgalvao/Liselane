import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Testimonial } from '../types';
import { Star, Quote, CheckCircle, MessageSquarePlus, X, Send } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [quote, setQuote] = useState('');
  const [rating, setRating] = useState(5);
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !quote) return;

    const newTestimonial: Testimonial = {
      id: `custom-${Date.now()}`,
      name,
      role: role || 'Cliente Satisfeito',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      quote,
      projectTitle: projectTitle || 'Projeto Residencial',
      projectYear: new Date().getFullYear().toString(),
      rating,
      location: location || 'São Paulo, SP'
    };

    setTestimonialsList([newTestimonial, ...testimonialsList]);
    setModalOpen(false);
    setName('');
    setRole('');
    setProjectTitle('');
    setQuote('');
    alert('Agradecemos sinceramente pelo seu depoimento!');
  };

  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-[#F5F2EB] border-b border-[#E0DBD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Credibility Statement */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#DFDAD0]">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C48B5E] font-semibold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C48B5E]" />
              <span>Credibilidade & Histórico Comprovado</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#141413]">
              A Palavra de Quem Vive Nossos Espaços
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="px-4 py-2.5 bg-white hover:bg-[#FAF9F7] text-[#141413] border border-[#D9D4C7] rounded-xs text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-colors shadow-xs cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#C48B5E]" />
              <span>Enviar Depoimento</span>
            </button>
          </div>
        </div>

        {/* Credibility Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-8">
          <div className="p-5 bg-white rounded-xs border border-[#E5E1D7]">
            <div className="font-serif-display text-3xl font-bold text-[#141413]">99.4%</div>
            <div className="text-xs text-[#736F67] mt-1">Aprovação em órgãos e prefeituras</div>
          </div>
          <div className="p-5 bg-white rounded-xs border border-[#E5E1D7]">
            <div className="font-serif-display text-3xl font-bold text-[#141413]">100%</div>
            <div className="text-xs text-[#736F67] mt-1">Fidelidade ao cronograma executivo</div>
          </div>
          <div className="p-5 bg-white rounded-xs border border-[#E5E1D7]">
            <div className="font-serif-display text-3xl font-bold text-[#141413]">14 Prêmios</div>
            <div className="text-xs text-[#736F67] mt-1">Nacionais e internacionais de arquitetura</div>
          </div>
          <div className="p-5 bg-white rounded-xs border border-[#E5E1D7]">
            <div className="font-serif-display text-3xl font-bold text-[#141413]">5.0 / 5.0</div>
            <div className="text-xs text-[#736F67] mt-1 flex items-center gap-1">
              <span className="text-amber-500">★★★★★</span>
              <span>Avaliação média</span>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {testimonialsList.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-xs border border-[#E0DBD0] shadow-sm flex flex-col justify-between relative group hover:shadow-lg transition-all"
            >
              <Quote className="w-8 h-8 text-[#E2DDD2] absolute top-6 right-6" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-sm sm:text-base text-[#3B3934] leading-relaxed italic font-serif-display">
                  "{item.quote}"
                </p>

                {/* Project Badge */}
                <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[#F2EFE8] text-[11px] font-semibold text-[#57534B]">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  <span>Obra: {item.projectTitle} ({item.projectYear})</span>
                </div>
              </div>

              {/* Author Details */}
              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-[#F0EDE6]">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#D9D4C7]"
                />
                <div>
                  <div className="text-sm font-semibold text-[#141413]">{item.name}</div>
                  <div className="text-xs text-[#7A766E]">{item.role}</div>
                  <div className="text-[11px] text-[#A19D94]">{item.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal for adding testimonial */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div className="bg-[#FAF9F7] w-full max-w-lg rounded-xs p-6 sm:p-8 border border-[#D9D4C7] shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E4DB] mb-6">
              <h3 className="font-serif-display text-2xl text-[#141413]">
                Compartilhe Sua Experiência
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 text-[#666] hover:text-[#000]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase font-semibold text-[#2E2B25] mb-1">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Dra. Camila Siqueira"
                  className="w-full p-2.5 bg-white border border-[#D9D4C7] rounded-xs text-sm focus:border-[#141413] focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase font-semibold text-[#2E2B25] mb-1">
                    Perfil / Profissão
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Ex: Proprietária"
                    className="w-full p-2.5 bg-white border border-[#D9D4C7] rounded-xs text-sm focus:border-[#141413] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#2E2B25] mb-1">
                    Cidade / Região
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ex: São Paulo, SP"
                    className="w-full p-2.5 bg-white border border-[#D9D4C7] rounded-xs text-sm focus:border-[#141413] focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold text-[#2E2B25] mb-1">
                  Nome do Projeto Realizado
                </label>
                <input
                  type="text"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  placeholder="Ex: Residência Jardins / Reforma Cobertura"
                  className="w-full p-2.5 bg-white border border-[#D9D4C7] rounded-xs text-sm focus:border-[#141413] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold text-[#2E2B25] mb-1">
                  Avaliação
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setRating(s)}
                      className="cursor-pointer"
                    >
                      <Star className={`w-6 h-6 ${s <= rating ? 'fill-amber-500 text-amber-500' : 'text-[#CCC]'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold text-[#2E2B25] mb-1">
                  Seu Depoimento *
                </label>
                <textarea
                  rows={4}
                  required
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  placeholder="Conte como foi sua experiência de projeto e obra com o estúdio..."
                  className="w-full p-2.5 bg-white border border-[#D9D4C7] rounded-xs text-sm focus:border-[#141413] focus:outline-hidden"
                />
              </div>

              <div className="pt-3 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2.5 text-xs uppercase font-semibold text-[#666]"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#141413] text-white text-xs uppercase tracking-wider font-semibold rounded-xs flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-[#C48B5E]" />
                  <span>Publicar Depoimento</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
