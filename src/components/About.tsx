import React from 'react';
import { Globe, Users, Headphones, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent" itemProp="headline">
            We Don't Make Music
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-4" itemProp="alternativeHeadline">
            We Create Systems of Flow
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed" itemProp="description">
            Mr Fixer Music is not an artist. It's a decentralized, human-AI hybrid production engine 
            designed for the modern media landscape. A shadow producer-led collective uniting 
            underground artists from various continents under a shared purpose.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="group text-center p-6 rounded-2xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-purple-400">Borderless</h3>
            <p className="text-gray-400 text-sm">
              Anonymous collaborations built across continents, transcending geographical boundaries.
            </p>
          </div>
          
          <div className="group text-center p-6 rounded-2xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-400">Collective</h3>
            <p className="text-gray-400 text-sm">
              A network of underground artists united by purpose, not personality or ego.
            </p>
          </div>
          
          <div className="group text-center p-6 rounded-2xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Headphones className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Club-Ready</h3>
            <p className="text-gray-400 text-sm">
              Emotionally charged electronic music designed for the modern dancefloor.
            </p>
          </div>
          
          <div className="group text-center p-6 rounded-2xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-pink-400">Raw Soul</h3>
            <p className="text-gray-400 text-sm">
              Human creativity enhanced by AI, maintaining the emotional core of every track.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl p-8 md:p-12 border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">The Philosophy</h3>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg leading-relaxed">
                  "We don't release albums. We release identity. We build a new system for sound 
                  that challenges the celebrity-driven culture of the modern music industry."
                </p>
                <p>
                  Every track is a product of strategic human direction enhanced by AI precision. 
                  The artist writes, produces, and directs every drop, while Pixie AI generates, 
                  arranges, and automates elements—never replacing the human core.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl p-8 border border-gray-700">
                <div className="text-center">
                  <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-4">
                    50/50
                  </div>
                  <p className="text-xl text-gray-300 mb-2">Human + AI</p>
                  <p className="text-gray-400">100% Real</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;