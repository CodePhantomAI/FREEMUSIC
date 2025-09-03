import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import System from './components/System';
import Music from './components/Music';
import License from './components/License';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <System />
      <Stats />
      <Music />
      <License />
      <Footer />
    </div>
  );
}

export default App;