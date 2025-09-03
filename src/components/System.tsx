import React from 'react';
import { Brain, Cpu, Network, Zap } from 'lucide-react';

const System = () => {
  const components = [
    {
      name: "Mr. Fix",
      role: "Human Producer",
      description: "Writes, produces, and directs every track. Provides the creative vision and raw soul.",
      icon: Brain,
      color: "from-purple-500 to-purple-600",
      textColor: "text-purple-400"
    },
    {
      name: "Pixie AI",
      role: "AI Collaborator",
      description: "Generates, arranges, and automates musical elements. Can see, hear, and think.",
      icon: Cpu,
      color: "from-cyan-500 to-cyan-600",
      textColor: "text-cyan-400"
    },
    {
      name: "Fixisys",
      role: "Automation Engine",
      description: "Manages 350+ live websites and handles real-time system feedback.",
      icon: Network,
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-400"
    },
    {
      name: "The Collective",
      role: "Global Network",
      description: "Underground artists contributing borderless sound without individual fame.",
      icon: Zap,
      color: "from-pink-500 to-pink-600",
      textColor: "text-pink-400"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent" itemProp="headline">
            System Architecture
          </h2>
          <p className="text-xl text-gray-300 mb-4" itemProp="alternativeHeadline">
            Four Core Components Working in Harmony
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto" itemProp="description">
            Each element serves a strategic purpose in our decentralized production engine, 
            creating a seamless flow from human creativity to global distribution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {components.map((component, index) => {
            const IconComponent = component.icon;
            return (
              <div key={index} className="group relative">
                <div className="bg-gray-800/50 hover:bg-gray-800 rounded-3xl p-8 transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-gray-600">
                  <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${component.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-2 ${component.textColor}`}>
                    {component.name}
                  </h3>
                  <p className="text-gray-300 font-medium mb-4">
                    {component.role}
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    {component.description}
                  </p>
                </div>
                
                {/* Connection lines for larger screens */}
                {index < components.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-600 to-transparent"></div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-3xl p-8 md:p-12 border border-gray-700">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6 text-white">The Daily Drop Strategy</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              With 1,050 tracks across 105 albums, we've built the largest independent electronic 
              music catalog. This high-frequency strategy optimizes for algorithmic discovery 
              while providing a constant stream of club-ready content across multiple genres.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">Synthetic Music</div>
                <div className="text-gray-400 text-sm">AI-Enhanced Electronic</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">Global Fusion</div>
                <div className="text-gray-400 text-sm">Worldwide Collaborations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">Themed Collections</div>
                <div className="text-gray-400 text-sm">Conceptual Albums</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">Club Editions</div>
                <div className="text-gray-400 text-sm">Dancefloor Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default System;