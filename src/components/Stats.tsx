import React from 'react';
import { TrendingUp, Globe, Clock, Headphones } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "1,050",
      label: "Tracks Released",
      description: "Across 105 albums with ISRC",
      color: "text-purple-400"
    },
    {
      icon: Clock,
      value: "64:05",
      label: "Hours of Music",
      description: "Total playtime created",
      color: "text-cyan-400"
    },
    {
      icon: Globe,
      value: "105",
      label: "Albums Released",
      description: "Daily drops collections",
      color: "text-blue-400"
    },
    {
      icon: Headphones,
      value: "100%",
      label: "ISRC Registered",
      description: "Professional distribution",
      color: "text-pink-400"
    }
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent" itemProp="headline">
            System Metrics
          </h2>
          <p className="text-xl text-gray-300 mb-4" itemProp="alternativeHeadline">
            Success Measured by Impact, Not Fame
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="group text-center">
                <div className="bg-gray-900/50 hover:bg-gray-900 rounded-3xl p-8 transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-gray-700">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  
                  <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {stat.label}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-blue-900/20 rounded-3xl p-8 md:p-12 border border-gray-800">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6 text-white">Beyond Traditional Metrics</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We don't chase streams or fame. Our success is measured by the utility we provide 
              to creators, DJs, and the global music community. When our tracks are discovered 
              organically through Shazam in clubs and public spaces, we know the system is working.
            </p>
            
            <div className="inline-flex items-center gap-4 bg-gray-800/50 rounded-2xl px-8 py-4 border border-gray-700">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 font-medium">System Status: Active & Flowing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;