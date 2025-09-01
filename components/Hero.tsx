import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1920&h=1080&fit=crop&crop=entropy"
        alt="Delicious food spread"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 animate-fade-in-down">
          Lezzetin ve Tutkunun Buluştuğu Yer
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up">
          Her lokmada mutluluğu keşfedin. ACIKTIM'ın eşsiz dünyasına hoş geldiniz.
        </p>
        <a
          href="#menu"
          className="bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-110 inline-block"
        >
          Menüyü Keşfet
        </a>
      </div>
    </section>
  );
};

export default Hero;