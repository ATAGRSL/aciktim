import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const HamburgerIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <button onClick={onClick} className="md:hidden text-white focus:outline-none z-50">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
    </button>
);

const CloseIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <button onClick={onClick} className="absolute top-6 right-6 text-white focus:outline-none z-50">
         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
    </button>
);


const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-3xl font-bold text-amber-500 tracking-wider">
                    ACIKTIM
                </a>
                <ul className="hidden md:flex items-center space-x-8">
                    {NAV_LINKS.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-white hover:text-amber-500 transition-colors duration-300 font-medium">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <a href="#menu" onClick={(e) => handleNavClick(e, '#menu')} className="hidden md:inline-block bg-amber-500 text-gray-900 font-bold py-2 px-6 rounded-full hover:bg-amber-400 transition-all duration-300 transform hover:scale-105">
                    Sipariş Ver
                </a>
                <HamburgerIcon onClick={toggleMenu} />
            </nav>
            {isMenuOpen && (
                <div 
                    className={`md:hidden fixed inset-0 bg-black/90 backdrop-blur-sm z-40 ${isMenuOpen ? 'animate-slide-in-right' : 'animate-slide-out-right'}`}
                    >
                    <CloseIcon onClick={toggleMenu} />
                    <ul className="flex flex-col items-center justify-center h-full space-y-8">
                        {NAV_LINKS.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-white text-3xl font-bold hover:text-amber-500 transition-colors duration-300">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                         <li>
                             <a href="#menu" onClick={(e) => handleNavClick(e, '#menu')} className="mt-4 inline-block bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-all duration-300">
                                Sipariş Ver
                            </a>
                         </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;