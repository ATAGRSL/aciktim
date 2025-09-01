import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { getMenuRecommendation } from '../services/geminiService';
import type { Recommendation } from '../types';

const MenuItemCard: React.FC<{ item: typeof MENU_ITEMS[0] }> = ({ item }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 group">
    <div className="overflow-hidden h-48">
       <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
      <p className="text-gray-400 mb-4 h-20">{item.description}</p>
      <div className="text-amber-500 font-bold text-lg">{item.price}</div>
    </div>
  </div>
);

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center space-x-2">
    <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce"></div>
    <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce delay-200"></div>
    <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce delay-400"></div>
    <span className="ml-3 text-gray-300">Tavsiyeler hazırlanıyor...</span>
  </div>
);

const Menu: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const handleRecommendation = async () => {
    if (!userInput.trim()) {
      setError("Lütfen ne tür bir lezzet aradığınızı yazın.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setRecommendations([]);

    try {
      const result = await getMenuRecommendation(userInput, MENU_ITEMS);
      setRecommendations(result.recommendations);
    } catch (err: any) {
      setError(err.message || 'Bir hata oluştu.');
    } finally {
      setIsLoading(false);
    }
  };

  const categories = ['Tümü', ...Array.from(new Set(MENU_ITEMS.map(item => item.category)))];
  const filteredMenuItems = selectedCategory === 'Tümü'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-500 mb-4">Yapay Zeka Menü Danışmanı</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ne yiyeceğinize karar veremiyor musunuz? Canınızın ne çektiğini yazın, yapay zeka sizin için en uygun lezzetleri önersin!
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Örn: 'Acı ve tavuklu bir şeyler' veya 'Hafif bir öğle yemeği'"
              className="flex-grow bg-gray-800 border-2 border-gray-700 text-white rounded-full py-3 px-6 focus:outline-none focus:border-amber-500 transition-colors"
              aria-label="Yemek tercihinizi girin"
            />
            <button
              onClick={handleRecommendation}
              disabled={isLoading}
              className="bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-amber-400 transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed transform hover:scale-105"
            >
              {isLoading ? 'Düşünüyor...' : 'Tavsiye Al'}
            </button>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto min-h-[150px]" aria-live="polite">
            {isLoading && <LoadingSpinner />}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {recommendations.length > 0 && (
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 space-y-4 animate-fade-in">
                    <h3 className="text-2xl font-bold text-center text-amber-400 mb-4">Sizin İçin Harika Önerilerimiz Var!</h3>
                    {recommendations.map((rec, index) => (
                        <div key={index} className="border-b border-gray-700 last:border-b-0 pb-3 last:pb-0">
                            <p className="font-bold text-xl text-white">{rec.name}</p>
                            <p className="text-gray-300">{rec.reason}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>

        <div className="border-t border-gray-700 my-20"></div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">Öne Çıkan Lezzetler</h2>
          <p className="text-gray-400">Menümüzün en sevilenleri</p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`font-semibold py-2 px-6 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-amber-500 text-gray-900'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenuItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;