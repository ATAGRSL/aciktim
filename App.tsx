
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Branches from './components/Branches';
import Franchise from './components/Franchise';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Branches />
        <Franchise />
      </main>
      <Footer />
    </div>
  );
}

export default App;
