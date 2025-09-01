import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-4xl font-bold text-amber-500 mb-4">Bizim Hikayemiz</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            ACIKTIM, 2005 yılında lezzet tutkunlarını bir araya getirme hayaliyle doğdu. Amacımız, en taze malzemelerle hazırlanan yenilikçi yemekleri, sıcak ve samimi bir atmosferde sunmaktı.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Geçen yıllar içinde, sadece bir restoran olmaktan çıkıp, dostlukların pekiştiği, anıların biriktiği bir yaşam alanı haline geldik. Her tabağımızda aynı tutku ve özenle sizlere hizmet vermeye devam ediyoruz.
          </p>
        </div>
        <div className="order-1 md:order-2">
            <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=700&h=800&fit=crop" 
                alt="Restaurant interior" 
                className="rounded-lg shadow-2xl object-cover w-full h-[500px]"
            />
        </div>
      </div>
    </section>
  );
};

export default About;