import React, { useEffect } from 'react';
import { Article } from '../types';

interface ArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: Article | null;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ isOpen, onClose, article }) => {
  
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!article) return null;

  return (
    <div 
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
    >
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
        
        <div 
            className={`bg-gray-900 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-out ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-title"
        >
          <div className="relative">
            <button
                onClick={onClose}
                className="absolute top-4 left-4 z-20 text-gray-300 bg-black/50 rounded-full p-1 hover:text-white transition-colors"
                aria-label="إغلاق"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            
            <div className="max-h-[300px] overflow-hidden">
              <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
            </div>

            <div className="p-8">
              <h2 id="article-title" className="text-3xl font-bold text-amber-400 mb-4">{article.title}</h2>
              <div className="flex items-center text-sm text-gray-400 mb-6">
                <span>بواسطة: {article.author}</span>
                <span className="mx-2">|</span>
                <span>{article.date}</span>
              </div>
              
              <div className="prose prose-invert prose-p:text-gray-300 prose-p:leading-relaxed max-w-none">
                {article.content.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

            </div>
          </div>
        </div>
    </div>
  );
};

export default ArticleModal;