import React from 'react';
import { X, Calendar, Clock, Share2, Tag, BookOpen, User } from 'lucide-react';
import { BlogPost } from '../types';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onScheduleMeeting: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ post, onClose, onScheduleMeeting }) => {
  if (!post) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link do artigo copiado para a área de transferência!');
    }
  };

  return (
    <div 
      id="article-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        id="article-modal-content"
        className="bg-[#FAF9F7] w-full max-w-4xl rounded-xs overflow-hidden shadow-2xl border border-[#D9D4C7] max-h-[92vh] flex flex-col my-auto relative"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E4DB] bg-[#FAF9F7] sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-0.5 rounded-xs bg-[#EAE5DA] text-[#4A4740]">
              {post.category}
            </span>
            <span className="text-xs text-[#8A867D]">•</span>
            <span className="text-xs text-[#6B685F] flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#C48B5E]" />
              {post.readTime}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 text-[#5C5952] hover:text-[#141413] hover:bg-[#EAE5DA] rounded-xs transition-colors flex items-center gap-1 text-xs"
              title="Compartilhar artigo"
            >
              <Share2 className="w-4 h-4 text-[#C48B5E]" />
              <span className="hidden sm:inline">Compartilhar</span>
            </button>
            <button
              id="close-article-modal"
              onClick={onClose}
              className="p-1.5 text-[#5C5952] hover:text-[#141413] hover:bg-[#EAE5DA] rounded-xs transition-colors"
              aria-label="Fechar artigo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-6">
          
          {/* Article Title */}
          <div>
            <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#141413] leading-tight">
              {post.title}
            </h1>

            {/* Author info & date */}
            <div className="flex items-center gap-3.5 mt-6 pt-4 border-t border-[#EAE5DA]">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-11 h-11 rounded-full object-cover border border-[#D9D4C7]"
              />
              <div>
                <div className="text-sm font-semibold text-[#141413]">{post.author.name}</div>
                <div className="text-xs text-[#7A766F]">{post.author.role} • {post.date}</div>
              </div>
            </div>
          </div>

          {/* Cover Hero Photo */}
          <div className="aspect-16/9 rounded-xs overflow-hidden shadow-md">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Excerpt Lead Paragraph */}
          <p className="text-base sm:text-lg text-[#38352F] font-serif-display italic border-l-2 border-[#C48B5E] pl-4 py-1">
            {post.excerpt}
          </p>

          {/* Article Body Content */}
          <div className="space-y-4 pt-2 font-sans-body text-sm sm:text-base text-[#47443E] leading-relaxed">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-[#EAE5DA]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-[#8A867D] flex items-center gap-1 mr-1">
                <Tag className="w-3.5 h-3.5" /> Tags:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 bg-[#EFECE6] text-[#423F39] rounded-xs font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Architectural Discussion Callout */}
          <div className="p-6 bg-[#F2EFE8] rounded-xs border border-[#DFDAD0] flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
            <div>
              <h4 className="font-serif-display text-xl font-medium text-[#141413]">
                Deseja aplicar estes conceitos na sua futura residência?
              </h4>
              <p className="text-xs text-[#636059] mt-1">
                Nossos arquitetos elaboram projetos integrados com eficiência bioclimática e design biofílico sob medida.
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onScheduleMeeting();
              }}
              className="px-5 py-3 bg-[#141413] hover:bg-[#2B2A28] text-white text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors shrink-0 cursor-pointer"
            >
              Agendar Conversa Técnica
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
