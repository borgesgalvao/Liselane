import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Car, 
  Train, 
  Clock, 
  Phone, 
  Layers, 
  Compass, 
  Building,
  CheckCircle2
} from 'lucide-react';
import { STUDIO_INFO } from '../data/mockData';

export const LocationMap: React.FC = () => {
  const [mapLayer, setMapLayer] = useState<'urban' | 'satellite' | 'accessibility'>('urban');

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${STUDIO_INFO.name}, ${STUDIO_INFO.address.street}, ${STUDIO_INFO.address.city} - ${STUDIO_INFO.address.state}`
  )}`;

  const wazeUrl = `https://waze.com/ul?ll=${STUDIO_INFO.address.lat},${STUDIO_INFO.address.lng}&navigate=yes`;

  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-[#FAF9F7] border-b border-[#EAE7E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C48B5E] font-semibold mb-2">
            <MapPin className="w-4 h-4 text-[#C48B5E]" />
            <span>Localização & Infraestrutura</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#141413]">
            Visite Nossa Sede em Contagem - MG
          </h2>
          <p className="text-sm sm:text-base text-[#615E57] mt-3 font-sans-body">
            Localizado no polo de negócios de Contagem, nosso estúdio foi concebido como um espaço inspirador e acolhedor para receber clientes de toda a Região Metropolitana de Belo Horizonte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Map Visual Container */}
          <div className="lg:col-span-8 bg-white rounded-xs border border-[#D9D4C7] overflow-hidden shadow-lg flex flex-col">
            
            {/* Map Top Bar Controls */}
            <div className="p-4 bg-[#F2EFE8] border-b border-[#E0DBD0] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-1.5 font-semibold text-[#141413]">
                <Compass className="w-4 h-4 text-[#C48B5E]" />
                <span>Eldorado • Av. João César de Oliveira, Contagem - MG</span>
              </div>

              {/* Layer switch buttons */}
              <div className="flex items-center gap-1 bg-white p-1 rounded-xs border border-[#D9D4C7]">
                <button
                  onClick={() => setMapLayer('urban')}
                  className={`px-3 py-1 rounded-xs font-medium text-[11px] transition-colors cursor-pointer ${
                    mapLayer === 'urban' ? 'bg-[#141413] text-white' : 'text-[#5C5952] hover:text-[#141413]'
                  }`}
                >
                  Planta Urbana
                </button>
                <button
                  onClick={() => setMapLayer('satellite')}
                  className={`px-3 py-1 rounded-xs font-medium text-[11px] transition-colors cursor-pointer ${
                    mapLayer === 'satellite' ? 'bg-[#141413] text-white' : 'text-[#5C5952] hover:text-[#141413]'
                  }`}
                >
                  Fotografia Aérea
                </button>
                <button
                  onClick={() => setMapLayer('accessibility')}
                  className={`px-3 py-1 rounded-xs font-medium text-[11px] transition-colors cursor-pointer ${
                    mapLayer === 'accessibility' ? 'bg-[#141413] text-white' : 'text-[#5C5952] hover:text-[#141413]'
                  }`}
                >
                  Acessos & Estacionamento
                </button>
              </div>
            </div>

            {/* Simulated Interactive Vector Map Canvas */}
            <div className="relative aspect-16/10 sm:aspect-16/9 bg-[#EDEAE2] overflow-hidden group select-none">
              
              {/* Map background according to layer */}
              {mapLayer === 'satellite' ? (
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700"
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=80')`,
                    filter: 'contrast(1.05) brightness(0.9)'
                  }}
                />
              ) : (
                /* Architectural SVG Vector City Grid */
                <svg className="w-full h-full text-[#DBD5C8]" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="arch-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
                    </pattern>
                  </defs>
                  
                  {/* Base canvas fill */}
                  <rect width="100%" height="100%" fill="#FAF7F2" />
                  <rect width="100%" height="100%" fill="url(#arch-grid)" />

                  {/* Major Avenue (Av. João César de Oliveira Diagonal Boulevard) */}
                  <path 
                    d="M-50 420 L950 -100" 
                    stroke="#D6CEBE" 
                    strokeWidth="56" 
                    fill="none" 
                  />
                  <path 
                    d="M-50 420 L950 -100" 
                    stroke="#EFEBE2" 
                    strokeWidth="48" 
                    fill="none" 
                  />
                  {/* Avenue Center Dashed line */}
                  <path 
                    d="M-50 420 L950 -100" 
                    stroke="#C7BFA8" 
                    strokeWidth="2" 
                    strokeDasharray="8 8" 
                    fill="none" 
                  />

                  {/* Secondary Streets */}
                  <path d="M 120 -50 L 280 500" stroke="#E3DDD1" strokeWidth="24" fill="none" />
                  <path d="M 380 -50 L 540 500" stroke="#E3DDD1" strokeWidth="26" fill="none" />
                  <path d="M 620 -50 L 780 500" stroke="#E3DDD1" strokeWidth="20" fill="none" />
                  
                  {/* Cross Streets */}
                  <path d="M -50 160 L 950 160" stroke="#E8E2D6" strokeWidth="18" fill="none" />
                  <path d="M -50 320 L 950 320" stroke="#E8E2D6" strokeWidth="18" fill="none" />

                  {/* Building blocks */}
                  <rect x="230" y="80" width="110" height="90" fill="#EAE4D8" rx="2" />
                  <rect x="420" y="70" width="140" height="75" fill="#EAE4D8" rx="2" />
                  <rect x="190" y="240" width="130" height="110" fill="#EAE4D8" rx="2" />
                  <rect x="580" y="260" width="140" height="100" fill="#EAE4D8" rx="2" />

                  {/* Green Park pocket */}
                  <rect x="370" y="340" width="150" height="90" fill="#E2EBE1" rx="4" />
                  <circle cx="410" cy="370" r="14" fill="#C9DAC7" opacity="0.8" />
                  <circle cx="450" cy="390" r="18" fill="#C9DAC7" opacity="0.8" />
                  <circle cx="485" cy="365" r="12" fill="#C9DAC7" opacity="0.8" />

                  {/* Street Labels */}
                  <text x="320" y="150" fill="#999488" fontSize="10" fontFamily="sans-serif" letterSpacing="2">RUA PORTUGAL</text>
                  <text x="240" y="285" fill="#7A7468" fontSize="12" fontWeight="600" fontFamily="sans-serif" letterSpacing="3" transform="rotate(-30 240 285)">AV. JOÃO CÉSAR DE OLIVEIRA</text>
                  <text x="390" y="415" fill="#6D8B69" fontSize="10" fontFamily="sans-serif" letterSpacing="1">Praça da Glória / Jardins</text>
                </svg>
              )}

              {/* Pin Callout Marker at Studio location */}
              <div className="absolute top-[46%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                {/* Pulse Ring */}
                <div className="w-12 h-12 rounded-full bg-[#C48B5E]/30 animate-ping absolute -top-1" />
                
                {/* Badge Card */}
                <div className="bg-[#141413] text-[#FAF9F7] px-3.5 py-2 rounded-xs shadow-2xl border border-white/20 flex items-center gap-2 mb-1.5 whitespace-nowrap z-20">
                  <div className="w-2 h-2 rounded-full bg-[#C48B5E]" />
                  <div className="text-left">
                    <span className="text-[10px] uppercase tracking-widest text-[#C48B5E] font-bold block">Sede Liselane Arquitetura</span>
                    <span className="text-xs font-semibold">Av. João César de Oliveira, 1400 • 8º Andar</span>
                  </div>
                </div>

                {/* Pin Icon Point */}
                <div className="w-8 h-8 rounded-full bg-[#141413] text-[#C48B5E] flex items-center justify-center shadow-lg border-2 border-white">
                  <Building className="w-4 h-4" />
                </div>
                <div className="w-1.5 h-3 bg-[#141413] -mt-0.5 rounded-b-full shadow-sm" />
              </div>

              {/* Accessibility Layer Overlay */}
              {mapLayer === 'accessibility' && (
                <div className="absolute inset-0 bg-[#141413]/40 backdrop-blur-2xs flex items-center justify-center p-6 animate-in fade-in">
                  <div className="bg-white p-6 rounded-xs max-w-md shadow-2xl border border-[#D9D4C7] space-y-4">
                    <h4 className="font-serif-display text-xl font-semibold text-[#141413] flex items-center gap-2">
                      <Car className="w-5 h-5 text-[#C48B5E]" />
                      <span>Orientações de Chegada & Estacionamento</span>
                    </h4>
                    
                    <ul className="text-xs text-[#54514A] space-y-2.5 font-sans-body">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Estacionamento conveniente</strong> com vagas no edifício e fácil acesso aos elevadores.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Próximo à Praça da Glória</strong> e estação Eldorado do Metrô (linha rápida para BH).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Acesso direto</strong> pela Via Expressa de Contagem e Rodovia Fernão Dias (BR-381).</span>
                      </li>
                    </ul>

                    <button
                      onClick={() => setMapLayer('urban')}
                      className="w-full py-2 bg-[#141413] text-white text-xs uppercase tracking-wider font-semibold rounded-xs mt-2 cursor-pointer"
                    >
                      Fechar Orientação
                    </button>
                  </div>
                </div>
              )}

              {/* Quick Map Floating Controls */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-white/95 hover:bg-white text-[#141413] text-xs font-semibold rounded-xs shadow-md border border-[#D9D4C7] flex items-center gap-1.5 transition-all"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C48B5E]" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#999]" />
                </a>

                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-[#141413]/95 hover:bg-[#141413] text-white text-xs font-semibold rounded-xs shadow-md flex items-center gap-1.5 transition-all"
                >
                  <Car className="w-3.5 h-3.5 text-[#C48B5E]" />
                  <span>Waze</span>
                  <ExternalLink className="w-3 h-3 text-[#999]" />
                </a>
              </div>

            </div>

            {/* Map Address Footer Strip */}
            <div className="p-4 bg-[#FAF9F7] border-t border-[#EAE5DA] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#57544C]">
              <div>
                <span className="font-semibold text-[#141413]">{STUDIO_INFO.address.street}</span> • {STUDIO_INFO.address.neighborhood} • {STUDIO_INFO.address.city} - {STUDIO_INFO.address.state}
              </div>
              <div className="text-[#8A867D]">
                CEP: {STUDIO_INFO.address.zip}
              </div>
            </div>

          </div>

          {/* Office Details & Visiting Info Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Hours Card */}
            <div className="bg-white p-6 rounded-xs border border-[#D9D4C7] shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider font-semibold text-[#141413]">
                <Clock className="w-4 h-4 text-[#C48B5E]" />
                <span>Horário de Atendimento</span>
              </div>

              <div className="space-y-2 text-xs text-[#524E47]">
                <div className="flex justify-between py-1 border-b border-[#F0ECE4]">
                  <span>Segunda a Sexta</span>
                  <span className="font-semibold text-[#141413]">08:30 às 18:30</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F0ECE4]">
                  <span>Sábados</span>
                  <span className="font-semibold text-[#141413]">09:00 às 13:00 (Com agendamento)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Domingos e Feriados</span>
                  <span className="text-[#99948A]">Fechado</span>
                </div>
              </div>
            </div>

            {/* Transport & Access Card */}
            <div className="bg-white p-6 rounded-xs border border-[#D9D4C7] shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider font-semibold text-[#141413]">
                <Car className="w-4 h-4 text-[#C48B5E]" />
                <span>Comodidades para Visitantes</span>
              </div>

              <div className="space-y-3 text-xs text-[#57544D]">
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-xs bg-[#F2EFE8] flex items-center justify-center shrink-0 text-[#141413] font-bold">
                    P
                  </div>
                  <div>
                    <span className="font-semibold text-[#141413] block">Estacionamento Facilitado</span>
                    <span>Vagas no edifício com acesso seguro e elevadores privativos.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-xs bg-[#F2EFE8] flex items-center justify-center shrink-0 text-[#141413]">
                    <Train className="w-3.5 h-3.5 text-[#C48B5E]" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#141413] block">Mobilidade & Acessos</span>
                    <span>Integração rápida com a Via Expressa, BR-381 e Metrô Eldorado.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Telephone Quick Connect */}
            <div className="p-6 bg-[#141413] text-[#FAF9F7] rounded-xs shadow-md space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-[#C48B5E] font-semibold block">
                Atendimento Imediato
              </span>
              <a 
                href={`tel:${STUDIO_INFO.whatsappRaw}`} 
                className="text-xl font-serif-display font-medium text-white hover:text-[#C48B5E] transition-colors block"
              >
                {STUDIO_INFO.phone}
              </a>
              <p className="text-xs text-[#AAA69E] leading-relaxed font-sans-body">
                Fale diretamente com Liselane e nossa equipe técnica para dúvidas de localização ou agendamento de visita.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
