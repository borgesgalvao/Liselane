import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types';
import { ArticleModal } from './ArticleModal';
import { BookOpen, Clock, ArrowRight, Search, Sparkles } from 'lucide-react';

interface BlogSectionProps {
  onScheduleMeeting: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onScheduleMeeting }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('todos');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const allTags = ['todos', 'Biofilia', 'Concreto', 'Madeira', 'Luz Natural', 'Interiores', 'Sustentabilidade'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTag = selectedTag === 'todos' || post.tags.some(t => t.toLowerCase() === selectedTag.toLowerCase());
    return matchesSearch && matchesTag;
  });

  return (
    <section id="blog" className="py-20 lg:py-28 bg-[#FAF9F7] border-b border-[#EAE7E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#EAE7E0]">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C48B5E] font-semibold mb-2">
              <BookOpen className="w-4 h-4 text-[#C48B5E]" />
              <span>Caderno de Insights & Arquitetura</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#141413]">
              Tendências de Design & Inovação
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#615E57] max-w-md font-sans-body">
            Reflexões críticas, pesquisas materiais e tendências globais exploradas sob a ótica da arquitetura autoral.
          </p>
        </div>

        {/* Search & Tag Filter Bar */}
        <div className="pt-8 pb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Tag Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-xs text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer border ${
                  selectedTag === tag
                    ? 'bg-[#141413] text-white border-[#141413]'
                    : 'bg-white text-[#5C5952] border-[#D9D4C7] hover:border-[#141413]'
                }`}
              >
                {tag === 'todos' ? 'Todos os Tópicos' : `#${tag}`}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8C8880] absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar artigos ou temas..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-[#D9D4C7] rounded-xs text-xs text-[#141413] focus:border-[#141413] focus:outline-hidden"
            />
          </div>

        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              id={`blog-card-${post.id}`}
              onClick={() => setActiveArticle(post)}
              className="group cursor-pointer bg-white border border-[#E2DDD3] rounded-xs overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#141413]/30"
            >
              <div>
                {/* Cover Image */}
                <div className="aspect-16/10 overflow-hidden relative bg-[#ECE8DF]">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#141413]/85 backdrop-blur-xs text-white text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-xs">
                    {post.category}
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#827E75] mb-2.5">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#C48B5E]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-xl sm:text-2xl font-normal text-[#141413] group-hover:text-[#C48B5E] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#615E57] mt-2.5 line-clamp-3 leading-relaxed font-sans-body">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & Read More Footer */}
              <div className="px-6 py-4 border-t border-[#EFECE6] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-7 h-7 rounded-full object-cover border border-[#D9D4C7]"
                  />
                  <span className="text-xs font-medium text-[#141413]">{post.author.name}</span>
                </div>

                <div className="text-xs font-semibold text-[#141413] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span className="text-[11px] uppercase tracking-wider">Ler Artigo</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C48B5E]" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16 bg-white border border-[#E2DDD3] rounded-xs">
            <p className="text-sm text-[#7A776F]">Nenhum artigo encontrado para os critérios de busca.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTag('todos');
              }}
              className="mt-3 text-xs font-semibold text-[#C48B5E] underline cursor-pointer"
            >
              Limpar filtros
            </button>
          </div>
        )}

      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <ArticleModal
          post={activeArticle}
          onClose={() => setActiveArticle(null)}
          onScheduleMeeting={onScheduleMeeting}
        />
      )}
    </section>
  );
};
