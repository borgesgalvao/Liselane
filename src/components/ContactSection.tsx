import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  MapPin,
  Clock
} from 'lucide-react';
import { STUDIO_INFO, FAQ_ITEMS } from '../data/mockData';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Projeto Residencial Novo');
  const [message, setMessage] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setFormSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1500);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#FAF9F7] border-b border-[#EAE7E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C48B5E] font-semibold mb-2">
            <Mail className="w-4 h-4 text-[#C48B5E]" />
            <span>Fale com Liselane e Equipe</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#141413]">
            Inicie a Concretização do Seu Projeto
          </h2>
          <p className="text-sm sm:text-base text-[#615E57] mt-3 font-sans-body">
            Seja para uma nova residência em Minas Gerais, reforma de interiores ou empreendimento corporativo, estamos prontos para analisar seu caso com discrição e rigor técnico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Intuitive Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-xs border border-[#D9D4C7] shadow-sm">
            <h3 className="font-serif-display text-2xl font-normal text-[#141413] mb-2">
              Envie uma Mensagem Direta
            </h3>
            <p className="text-xs text-[#736F67] mb-6">
              Nossa equipe responde habitualmente em menos de 24 horas úteis.
            </p>

            {formSubmitted ? (
              <div className="p-8 bg-[#FAF9F7] border border-emerald-200 rounded-xs text-center space-y-3 animate-in fade-in">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif-display text-2xl text-[#141413]">
                  Mensagem Recebida com Sucesso!
                </h4>
                <p className="text-xs text-[#636059] max-w-sm mx-auto">
                  Agradecemos seu contato. O arquiteto coordenador responsável entrará em contato através do e-mail ou WhatsApp informado.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-[#141413] underline cursor-pointer"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#2E2B25] mb-2">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Gabriel Albuquerque"
                      className="w-full px-3.5 py-3 bg-[#FAF9F7] border border-[#D9D4C7] rounded-xs text-sm text-[#141413] focus:border-[#141413] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#2E2B25] mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com.br"
                      className="w-full px-3.5 py-3 bg-[#FAF9F7] border border-[#D9D4C7] rounded-xs text-sm text-[#141413] focus:border-[#141413] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#2E2B25] mb-2">
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(11) 99999-8888"
                      className="w-full px-3.5 py-3 bg-[#FAF9F7] border border-[#D9D4C7] rounded-xs text-sm text-[#141413] focus:border-[#141413] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#2E2B25] mb-2">
                      Interesse Principal
                    </label>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full px-3.5 py-3 bg-[#FAF9F7] border border-[#D9D4C7] rounded-xs text-sm text-[#141413] focus:border-[#141413] focus:outline-hidden"
                    >
                      <option value="Projeto Residencial Novo">Projeto Residencial Novo</option>
                      <option value="Design de Interiores">Design de Interiores & Reforma</option>
                      <option value="Comercial & Corporativo">Comercial & Corporativo</option>
                      <option value="Paisagismo & Urbanismo">Paisagismo & Urbanismo</option>
                      <option value="Imprensa & Parcerias">Imprensa & Parcerias</option>
                      <option value="Outros Assuntos">Outros Assuntos</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#2E2B25] mb-2">
                    Descreva Brevemente o Seu Projeto *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Localização do imóvel ou terreno, metragem aproximada, expectativas de prazo..."
                    className="w-full p-3.5 bg-[#FAF9F7] border border-[#D9D4C7] rounded-xs text-sm text-[#141413] focus:border-[#141413] focus:outline-hidden"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-[#78756F]">
                    * Informações sob sigilo profissional rigoroso.
                  </span>
                  <button
                    id="submit-contact-form"
                    type="submit"
                    className="px-8 py-3.5 bg-[#141413] hover:bg-[#2B2A28] text-white text-xs uppercase tracking-widest font-semibold rounded-xs transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5 text-[#C48B5E]" />
                    <span>Enviar Mensagem</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & FAQ Accordion */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Contact Cards */}
            <div className="bg-[#FAF9F7] p-6 rounded-xs border border-[#D9D4C7] space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#141413]">
                Canais de Atendimento Direto
              </h4>

              <div className="space-y-3 text-xs text-[#54514A]">
                <a 
                  href="tel:+5531991476644"
                  className="flex items-center gap-3 p-3 bg-white rounded-xs border border-[#E5E1D8] hover:border-[#141413] transition-colors"
                >
                  <div className="w-8 h-8 rounded-xs bg-[#141413] text-[#C48B5E] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#8A867E] block text-[10px] uppercase">Central de Atendimento</span>
                    <span className="font-semibold text-sm text-[#141413]">{STUDIO_INFO.phone}</span>
                  </div>
                </a>

                <a 
                  href={`https://wa.me/5531991476644?text=${encodeURIComponent('Olá, Liselane! Gostaria de informações sobre projetos com o escritório Liselane Arquitetura e design.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white rounded-xs border border-[#E5E1D8] hover:border-emerald-600 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xs bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#8A867E] block text-[10px] uppercase">WhatsApp Direto</span>
                    <span className="font-semibold text-sm text-[#141413]">{STUDIO_INFO.whatsapp}</span>
                  </div>
                </a>

                <a 
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="flex items-center gap-3 p-3 bg-white rounded-xs border border-[#E5E1D8] hover:border-[#141413] transition-colors"
                >
                  <div className="w-8 h-8 rounded-xs bg-[#141413] text-[#C48B5E] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#8A867E] block text-[10px] uppercase">E-mail Institucional</span>
                    <span className="font-semibold text-sm text-[#141413]">{STUDIO_INFO.email}</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick FAQ Accordion */}
            <div className="bg-white p-6 rounded-xs border border-[#D9D4C7] space-y-4 shadow-xs">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#141413]">
                <HelpCircle className="w-4 h-4 text-[#C48B5E]" />
                <span>Perguntas Frequentes (FAQ)</span>
              </div>

              <div className="space-y-2">
                {FAQ_ITEMS.map((item, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div 
                      key={idx}
                      className="border border-[#EAE5DB] rounded-xs overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left p-3.5 bg-[#FAF9F7] hover:bg-[#F2EFE8] flex items-center justify-between text-xs font-semibold text-[#141413] transition-colors cursor-pointer"
                      >
                        <span className="pr-2">{item.q}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-[#C48B5E] shrink-0" /> : <ChevronDown className="w-4 h-4 text-[#8C8880] shrink-0" />}
                      </button>

                      {isOpen && (
                        <div className="p-3.5 bg-white text-xs text-[#59554E] leading-relaxed border-t border-[#EAE5DB] font-sans-body">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
