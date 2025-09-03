import React from 'react';
import { Play, Volume2, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <Volume2 className="w-16 h-16 text-purple-400 animate-pulse" />
            <Zap className="absolute -top-2 -right-2 w-6 h-6 text-cyan-400" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent" itemProp="name">
          MR FIXER
        </h1>
        
        <div className="text-xl md:text-2xl text-gray-300 mb-4 font-light" itemProp="alternateName">
          MUSIC
        </div>
        
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed" itemProp="description">
          A system built for sound. 50% human, 50% AI – 100% real.
          <br />
          <span className="text-purple-400">No faces. No names. No ego.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://open.spotify.com/artist/5LrAekDseSQj5BaCiN1NN8"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Listen Now
          </a>
          <button className="border border-gray-600 hover:border-purple-400 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-purple-400/10">
            Explore System
          </button>
        </div>
        
        {/* Key stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">1,050</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Tracks Released</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">105</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Albums</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">64:05</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Hours of Music</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;