import React, { useState } from 'react';
import { 
  Compass, 
  Instagram, 
  Linkedin, 
  Youtube, 
  ArrowUp, 
  MapPin, 
  Phone, 
  Mail,
  Send,
  Check
} from 'lucide-react';
import { STUDIO_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer id="footer-section" className="bg-[#141413] text-[#FAF9F7] pt-16 pb-12 border-t border-[#262624]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#292826]">
          
          {/* Brand & Manifesto Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/10 flex items-center justify-center text-white rounded-xs">
                <Compass className="w-5 h-5 text-[#C48B5E]" strokeWidth={1.8} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-display text-2xl font-semibold tracking-wider text-white uppercase leading-none">
                  Liselane
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#8C8880] uppercase font-sans-body mt-1">
                  Arquitetura e design
                </span>
              </div>
            </div>

            <p className="text-xs text-[#9C9890] leading-relaxed max-w-sm pt-2 font-sans-body">
              Prática de arquitetura contemporânea e design de interiores sob a liderança da arquiteta Liselane. Projetos residenciais, comerciais e reformas com sofisticação atemporal e identidade única.
            </p>

            <div className="text-[11px] text-[#78756F]">
              Registro profissional: <span className="text-white font-medium">{STUDIO_INFO.cauRegistry}</span>
            </div>

            {/* Social Media Icons Strip */}
            <div className="pt-3">
              <span className="text-[10px] uppercase tracking-widest text-[#C48B5E] font-semibold block mb-3">
                Nossas Redes Sociais
              </span>
              <div className="flex items-center gap-2.5">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xs bg-white/5 hover:bg-[#C48B5E] text-white hover:text-[#141413] flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-[#C48B5E]"
                  title="Instagram"
                  aria-label="Acompanhe nosso Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xs bg-white/5 hover:bg-[#C48B5E] text-white hover:text-[#141413] flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-[#C48B5E]"
                  title="LinkedIn"
                  aria-label="Conecte-se no LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xs bg-white/5 hover:bg-[#C48B5E] text-white hover:text-[#141413] flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-[#C48B5E]"
                  title="YouTube"
                  aria-label="Vídeos e documentários no YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>

                {/* Pinterest (SVG icon) */}
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xs bg-white/5 hover:bg-[#C48B5E] text-white hover:text-[#141413] flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-[#C48B5E]"
                  title="Pinterest"
                  aria-label="Moodboards e inspirações no Pinterest"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.97.026l.047-.026z"/>
                  </svg>
                </a>

                {/* Behance (SVG icon) */}
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xs bg-white/5 hover:bg-[#C48B5E] text-white hover:text-[#141413] flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-[#C48B5E]"
                  title="Behance"
                  aria-label="Portfólio no Behance"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-4.256 0-6.625-2.846-6.625-6.843 0-3.987 2.454-6.846 6.37-6.846 4.17 0 6.002 2.973 5.755 6.846h-9.529c.078 2.308 1.578 4.237 4.394 4.237 1.944 0 3.235-.909 3.736-1.894l1 1.5zm-5.07-7.234c-1.954 0-3.329 1.157-3.666 3.234h7.023c-.156-2.001-1.467-3.234-3.357-3.234zm-14.656 8.234h-4v-14h5.279c3.084 0 5.093 1.346 5.093 4.205 0 1.625-.873 2.924-2.186 3.565 1.758.601 2.814 2.128 2.814 4.143 0 3.218-2.457 4.087-7 4.087zm-1-8h2.361c1.554 0 2.502-.553 2.502-1.921 0-1.285-.863-1.879-2.502-1.879h-2.361v3.8zm0 5.8h2.464c1.884 0 2.766-.677 2.766-2.125 0-1.503-.996-2.075-2.766-2.075h-2.464v4.2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C48B5E] font-semibold block mb-4">
              Navegação
            </span>
            <ul className="space-y-2 text-xs text-[#AAA69E]">
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfólio de Projetos</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Liselane</a></li>
              <li><a href="#agendamento" className="hover:text-white transition-colors">Agendamento Online</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog de Arquitetura</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#localizacao" className="hover:text-white transition-colors">Sede em Contagem</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Sede Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C48B5E] font-semibold block mb-4">
              Sede Contagem - MG
            </span>
            <div className="space-y-2.5 text-xs text-[#AAA69E]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C48B5E] shrink-0 mt-0.5" />
                <span>{STUDIO_INFO.address.street}, {STUDIO_INFO.address.neighborhood} - {STUDIO_INFO.address.city}, {STUDIO_INFO.address.state}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C48B5E] shrink-0" />
                <a href={`tel:${STUDIO_INFO.whatsappRaw}`} className="hover:text-white transition-colors">{STUDIO_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C48B5E] shrink-0" />
                <a href={`mailto:${STUDIO_INFO.email}`} className="hover:text-white transition-colors">{STUDIO_INFO.email}</a>
              </div>
            </div>
          </div>

          {/* Architectural Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C48B5E] font-semibold block mb-4">
              Boletim Arquitetural
            </span>
            <p className="text-xs text-[#9C9890] font-sans-body">
              Receba ensaios de tendências, novidades sobre iluminação, materiais e projetos assinados por Liselane.
            </p>

            <form 
              onSubmit={handleSubscribe}
              className="space-y-2 pt-1"
            >
              <div className="flex">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Seu e-mail..."
                  className="bg-white/10 border border-white/15 px-3 py-2 text-xs text-white placeholder-white/40 rounded-l-xs w-full focus:outline-hidden focus:border-[#C48B5E]"
                />
                <button
                  type="submit"
                  className="bg-[#C48B5E] hover:bg-[#b0784d] text-white px-3.5 py-2 rounded-r-xs flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Inscrever-se"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed ? (
                <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Inscrição confirmada com sucesso!
                </span>
              ) : (
                <span className="text-[10px] text-[#736F67] block">Sem spam. Apenas conteúdo de arquitetura e design.</span>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A776F]">
          <div>
            © {new Date().getFullYear()} Liselane Arquitetura e design. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span>Privacidade & Termos</span>
            <span>Código de Ética CAU</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white hover:text-[#C48B5E] transition-colors cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
