import React from 'react';
import { articles } from '../constants';
import { Article } from '../types';

interface BlogProps {
  onViewArticleDetails: (article: Article) => void;
}

const ArticleCard: React.FC<{ article: Article, onClick: () => void }> = ({ article, onClick }) => (
  <div 
    onClick={onClick}
    className="group bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden flex flex-col h-full cursor-pointer card-glow-effect border border-gray-700/50"
    role="button"
    tabIndex={0}
  >
    <div className="h-48 overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
          loading="lazy"
        />
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{article.title}</h3>
        <p className="text-gray-400 mb-4 text-sm">{article.excerpt}</p>
      </div>
      <div className="mt-auto pt-4 border-t border-gray-700">
          <span className="text-amber-400 font-semibold flex items-center group-hover:text-white transition-colors">
            اقرأ المزيد
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 transform transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </span>
      </div>
    </div>
  </div>
);

const Blog: React.FC<BlogProps> = ({ onViewArticleDetails }) => {
  return (
    <section id="blog" className="py-16 sm:py-20 bg-gray-900 section-animate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">مدونة ماسة للعافية</h2>
          <p className="mt-4 text-lg text-gray-300">مقالات ونصائح للحفاظ على صحتك وتجديد نشاطك.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article) => (
            <ArticleCard key={article.title} article={article} onClick={() => onViewArticleDetails(article)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Blog);