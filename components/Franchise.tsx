import React from 'react';

const Franchise: React.FC = () => {
    return (
        <section id="franchise" className="relative py-24 bg-black text-white text-center">
             <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
             <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&h=500&fit=crop"
                alt="Business meeting"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-20 container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">ACIKTIM Ailesine Katılın</h2>
                <p className="text-lg max-w-2xl mx-auto mb-8">
                    Başarılı bir markanın parçası olun, kendi ACIKTIM restoranınızı açın ve lezzet imparatorluğumuzu birlikte büyütelim.
                </p>
                <a
                    href="#"
                    className="bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-110 inline-block"
                >
                    Franchise Başvurusu
                </a>
            </div>
        </section>
    );
};

export default Franchise;