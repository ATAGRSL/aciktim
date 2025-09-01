
import React from 'react';
import { NAV_LINKS } from '../constants';

const InstagramIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
);

const FacebookIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);

const XIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
    </svg>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-black border-t border-gray-800 text-gray-400">
            <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-2xl font-bold text-amber-500 mb-4">ACIKTIM</h3>
                    <p>Lezzetin ve tutkunun buluştuğu yer. 2005'ten beri aynı heyecanla.</p>
                </div>
                <div>
                    <h4 className="text-white font-semibold text-lg mb-4">Hızlı Erişim</h4>
                    <ul>
                        {NAV_LINKS.map(link => (
                            <li key={`footer-${link.name}`} className="mb-2">
                                <a href={link.href} className="hover:text-amber-500 transition-colors">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold text-lg mb-4">Bizi Takip Edin</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-amber-500 transition-colors"><FacebookIcon /></a>
                        <a href="#" className="hover:text-amber-500 transition-colors"><InstagramIcon /></a>
                        <a href="#" className="hover:text-amber-500 transition-colors"><XIcon /></a>
                    </div>
                    <p className="mt-4">info@aciktim.com.tr</p>
                </div>
            </div>
            <div className="border-t border-gray-800 py-6 text-center">
                <p>&copy; {new Date().getFullYear()} ACIKTIM. Tüm hakları saklıdır.</p>
            </div>
        </footer>
    );
};

export default Footer;