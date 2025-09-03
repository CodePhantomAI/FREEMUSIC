import React from 'react';
import { Volume2, Zap, ExternalLink, Mail, Globe, Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Volume2 className="w-8 h-8 text-purple-400" />
                <Zap className="absolute -top-1 -right-1 w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">MR FIXER MUSIC</h3>
                <p className="text-gray-400 text-sm">System Built for Sound</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A decentralized, human-AI hybrid production engine creating emotionally charged, 
              club-ready, borderless music. No faces. No names. No ego.
            </p>
            <div className="flex gap-4">
              <a
                href="https://open.spotify.com/artist/5LrAekDseSQj5BaCiN1NN8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-xl flex items-center justify-center transition-colors"
                title="Spotify"
              >
                <Music className="w-5 h-5" />
              </a>
              <a
                href="https://soundcloud.com/mrfixermusic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-xl flex items-center justify-center transition-colors"
                title="SoundCloud"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@MrFixermusic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-xl flex items-center justify-center transition-colors"
                title="YouTube"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://music.apple.com/il/artist/mr-fixer-music/1815615410"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-600 rounded-xl flex items-center justify-center transition-colors"
                title="Apple Music"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Music */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Music</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Daily Drops</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Full Catalog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Genre Collections</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">DJ Packs</a></li>
            </ul>
          </div>
          
          {/* System */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">System</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">About the System</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">License Terms</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Commercial Licensing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 Mr Fixer Music. Licensed under Fixer Creative License.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>50% Human, 50% AI – 100% Real</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>System Active</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;