import React, { useState } from 'react';
import { MessageSquare, X, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/mockData';

export const FloatingWhatsApp: React.FC = () => {
  const [openCard, setOpenCard] = useState(false);

  const defaultMessage = 'Olá, Liselane! Gostaria de conversar sobre um projeto com o escritório Liselane Arquitetura e design.';
  const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Floating Popup Card */}
      {openCard && (
        <div className="mb-3 bg-white rounded-xs border border-[#D9D4C7] shadow-2xl p-4 w-72 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between pb-3 border-b border-[#F0EDE6]">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-[#141413] text-[#FAF9F7] flex items-center justify-center font-serif-display font-bold">
                  L
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white absolute -bottom-0.5 -right-0.5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-[#141413]">Liselane Arquitetura</div>
                <div className="text-[10px] text-emerald-600 font-medium">Online agora no WhatsApp</div>
              </div>
            </div>

            <button
              onClick={() => setOpenCard(false)}
              className="text-[#999] hover:text-[#333] p-0.5 cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#524E47] py-3 leading-relaxed font-sans-body">
            Olá! Como podemos ajudar com seu projeto ou reforma hoje? Fale diretamente com Liselane e nossa equipe.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xs text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <span>Conversar pelo WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setOpenCard(!openCard)}
        className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-xl transition-transform hover:scale-108 cursor-pointer relative group"
        aria-label="Abrir WhatsApp do Escritório"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-white animate-pulse" />
        <MessageSquare className="w-6 h-6 fill-current" />
      </button>

    </div>
  );
};
