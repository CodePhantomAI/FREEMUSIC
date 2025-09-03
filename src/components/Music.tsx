import React from 'react';
import { Play, Download, ExternalLink, Music, Headphones } from 'lucide-react';

const MusicSection = () => {
  const releases = [
    {
      title: "Fixer Daily Drops, Vol. 111 – Synthetic Music: Paris Nights",
      genre: "Synthetic Music",
      date: "Latest",
      tracks: 10,
      duration: "33:54",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Album 100 : Ten Words, Ten Vibes + Club Editions",
      genre: "Club Editions",
      date: "Aug 12",
      tracks: 12,
      duration: "22:09",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Fixer Daily Drops Vol. 28 – ZODIAC SPIN",
      genre: "Conceptual",
      date: "Jun 24",
      tracks: 12,
      duration: "39:53",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Fixer Daily Drops, Vol. 110 : Synthetic Music – Back from Vacation",
      genre: "Synthetic Music",
      date: "Aug 28",
      tracks: 10,
      duration: "34:00",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const streamingPlatforms = [
    {
      name: "Spotify",
      url: "https://open.spotify.com/artist/5LrAekDseSQj5BaCiN1NN8",
      color: "hover:text-green-400"
    },
    {
      name: "Apple Music",
      url: "https://music.apple.com/il/artist/mr-fixer-music/1815615410",
      color: "hover:text-gray-300"
    },
    {
      name: "SoundCloud",
      url: "https://soundcloud.com/mrfixermusic",
      color: "hover:text-orange-400"
    },
    {
      name: "YouTube Music",
      url: "https://www.youtube.com/@MrFixermusic",
      color: "hover:text-red-400"
    },
    {
      name: "Amazon Music",
      url: "https://www.amazon.com/music/player/artists/B0F9F7WMQB/mr-fixer-music",
      color: "hover:text-blue-400"
    },
    {
      name: "Audiomack",
      url: "https://audiomack.com/mrfixermusic",
      color: "hover:text-yellow-400"
    },
    {
      name: "Deezer",
      url: "https://www.deezer.com/us/artist/324433381",
      color: "hover:text-purple-400"
    },
    {
      name: "Tidal",
      url: "https://tidal.com/browse/artist/60412462",
      color: "hover:text-cyan-400"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" itemProp="headline">
            Latest Drops
          </h2>
          <p className="text-xl text-gray-300 mb-4" itemProp="alternativeHeadline">
            Fresh Tracks, Daily Flow
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto" itemProp="description">
            Every day brings new sound. Explore our latest releases and discover 
            the continuous evolution of the Mr Fixer Music system.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {releases.map((release, index) => (
            <div key={index} className="group bg-gray-800/50 hover:bg-gray-800 rounded-3xl p-8 transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-gray-600">
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${release.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Music className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full">
                  {release.date}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                {release.title}
              </h3>
              <p className="text-gray-400 mb-2">
                {release.genre}
              </p>
              <div className="text-sm text-gray-500 mb-6">
                {release.tracks} tracks • {release.duration}
              </div>
              
              <div className="flex gap-3">
                <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-xl text-sm font-medium transition-colors">
                  <Play className="w-4 h-4" />
                  Play
                </button>
                <button className="flex items-center gap-2 border border-gray-600 hover:border-purple-400 px-4 py-2 rounded-xl text-sm font-medium transition-colors hover:bg-purple-400/10">
                  <Download className="w-4 h-4" />
                  Free DL
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-3xl p-8 md:p-12 border border-gray-700 mb-8">
            <h3 className="text-3xl font-bold mb-6 text-white">Stream Everywhere</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Our complete catalog of 1,050+ tracks across 105 albums is available on all major streaming platforms. 
              Choose your preferred service and dive into the Mr Fixer Music ecosystem.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {streamingPlatforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 rounded-2xl p-4 transition-all duration-300 hover:scale-105 flex flex-col items-center gap-2 ${platform.color}`}
                >
                  <Headphones className="w-6 h-6 text-gray-400 group-hover:text-current transition-colors" />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-current transition-colors">
                    {platform.name}
                  </span>
                </a>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://open.spotify.com/artist/5LrAekDseSQj5BaCiN1NN8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <ExternalLink className="w-5 h-5" />
                Listen on Spotify
              </a>
              <a
                href="https://www.youtube.com/@MrFixermusic"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 hover:border-purple-400 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-purple-400/10"
              >
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;