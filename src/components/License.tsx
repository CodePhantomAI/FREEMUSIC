import React from 'react';
import { Shield, Check, X, ExternalLink } from 'lucide-react';

const License = () => {
  const freeUses = [
    "DJ sets (non-profit)",
    "YouTube / TikTok videos (not monetized)",
    "Educational or artistic projects",
    "Personal use and remixing",
    "Online radio (not sponsored)"
  ];

  const commercialUses = [
    "Ads / Sponsored content",
    "Games / Apps",
    "Film / TV / Streaming syncs",
    "Monetized content",
    "Resale or NFTs"
  ];

  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent" itemProp="headline">
            Fixer Creative License
          </h2>
          <p className="text-xl text-gray-300 mb-4" itemProp="alternativeHeadline">
            Open Sound, Not Exploitation
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto" itemProp="description">
            Our music is free for non-commercial use under the Fixer Creative License, 
            based on Creative Commons BY-NC 4.0. Commercial licensing available for business use.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Free License */}
          <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 rounded-3xl p-8 border border-green-800/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-400">Free License</h3>
                <p className="text-gray-400">Non-Commercial Use</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">✅ Permitted Uses:</h4>
              {freeUses.map((use, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{use}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-green-900/30 rounded-2xl p-6 border border-green-700/50">
              <h4 className="text-lg font-semibold text-green-400 mb-2">Requirements:</h4>
              <p className="text-gray-300 text-sm">
                Must provide credit: "Music by Mr Fixer Music". 
                Cannot sell or redistribute the music as your own.
              </p>
            </div>
          </div>
          
          {/* Commercial License */}
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-3xl p-8 border border-purple-800/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-400">Commercial License</h3>
                <p className="text-gray-400">Business & Monetized Use</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">🚫 Requires License:</h4>
              {commercialUses.map((use, index) => (
                <div key={index} className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-300">{use}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-purple-900/30 rounded-2xl p-6 border border-purple-700/50">
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Get Commercial Rights:</h4>
              <p className="text-gray-300 text-sm mb-4">
                Full commercial rights with negotiated terms. 
                Contact us for licensing fees and usage agreements.
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm">
                Get Commercial License
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-3xl p-8 md:p-12 border border-gray-700 text-center">
          <h3 className="text-3xl font-bold mb-6 text-white">Global Music Protocol</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            We believe in ethical licensing and open sound. Our dual-license model supports 
            creators while protecting the value of our work. Free for passion projects, 
            licensed for profit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="border border-gray-600 hover:border-green-400 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-green-400/10">
              Download License Terms
            </button>
            <button className="border border-gray-600 hover:border-purple-400 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-purple-400/10">
              Contact for Commercial Use
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default License;