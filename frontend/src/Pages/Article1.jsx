import React from "react";
import Sidebar from "./Sidebar";
import img1 from "../assets/images/img8.jpg";
import img2 from "../assets/images/img9.jpg";
import img3 from "../assets/images/img10.jpg";
import img4 from "../assets/images/img16.jpg";
import img5 from "../assets/images/img11.jpg";
import img6 from "../assets/images/img15.jpg";
import song1 from "../assets/Images/song1.mp3";
import song2 from "../assets/Images/song2.mp3";
import song3 from "../assets/Images/song3.mp3";
import song4 from "../assets/Images/song3.mp3";
import song5 from "../assets/Images/song1.mp3";
import { useState, useRef, useEffect } from "react";
import { FaStepBackward, FaPlay, FaPause, FaStepForward, FaRedo } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

const Article1 = () => {
  const navigate = useNavigate(); 
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);
  
    const songs = [
      { title: "Song One", image: img2, audio: song1 },
      { title: "Song Two", image: img3, audio: song2 },
      { title: "Song Three", image: img4, audio: song3 },
      { title: "Song Four", image: img5, audio: song4 },
      { title: "Song Five", image: img6, audio: song5 },
    ];
  
    useEffect(() => {
      const audio = audioRef.current;
      if (audio) {
        audio.addEventListener("timeupdate", () => setCurrentTime(audio.currentTime));
        audio.addEventListener("loadedmetadata", () => setDuration(audio.duration));
      }
      return () => {
        if (audio) {
          audio.removeEventListener("timeupdate", () => setCurrentTime(audio.currentTime));
          audio.removeEventListener("loadedmetadata", () => setDuration(audio.duration));
        }
      };
    }, []);
  
    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.src = songs[currentSongIndex].audio;
        if (isPlaying) {
          audioRef.current.play();
        }
      }
    }, [currentSongIndex]);
  
    const togglePlay = () => {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };
  
    const playSong = (index) => {
      setCurrentSongIndex(index);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.src = songs[index].audio;
        audioRef.current.play();
      }
    };
    return (
      <div className="flex h-screen bg-gradient-to-b from-[#0a1e3a] via-[#1c3a5a] to-[#102a4a] text-white">
        {/* Sidebar - Hidden on Small Screens */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>
    
        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
            {/* Navigation Buttons */}
            <div className="flex gap-2">
              <button
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
                onClick={() => navigate("/")}
              >
                &lt;
              </button>
              <button
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
                onClick={() => navigate("/article2")}
              >
                &gt;
              </button>
            </div>
    
            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition">
                Explore Premium
              </button>
              <button className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition">
                Install App
              </button>
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-sm font-semibold">
                A
              </div>
            </div>
          </div>
    
          {/* Filters */}
          <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-hide">
            {["All", "Music", "Podcasts"].map((filter, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  filter === "All" ? "bg-white text-black" : "bg-gray-700"
                } hover:bg-gray-600 transition`}
              >
                {filter}
              </button>
            ))}
          </div>
    
          {/* Playlist Section */}
          <div className="mt-6 flex flex-col md:flex-row gap-6 items-center">
            <img
              src={img1}
              alt="Playlist Cover"
              className="w-40 h-40 rounded-md shadow-lg"
            />
            <div className="text-center md:text-left">
              <p className="text-white mt-2 text-lg">Playlist</p>
              <h2 className="text-4xl md:text-5xl font-bold">Top 50 Global</h2>
              <p className="text-white mt-2 text-lg">
                Your weekly update of the most played tracks
              </p>
              <p className="text-white mt-1">
                <span className="text-green-400 font-semibold">Spotify</span> •
                1,323,154 likes • <span className="font-bold">50 songs</span>,
                about 2 hr 30 min
              </p>
            </div>
          </div>
    
          {/* Song List */}
          <div className="overflow-x-auto">
            <table className="w-full mt-6 min-w-[500px]">
              <thead>
                <tr className="text-gray-400">
                  <th className="text-left">#</th>
                  <th className="text-left">Title</th>
                  <th className="text-left hidden md:table-cell">Album</th>
                  <th className="text-left hidden md:table-cell">Date Added</th>
                  <th className="text-right">Duration</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: 1,
                    title: "Song One",
                    album: "Top 50 Global",
                    date: "5 days ago",
                    duration: "3:00",
                    image: img2,
                  },
                  {
                    id: 2,
                    title: "Song Two",
                    album: "Top 50 Global",
                    date: "5 days ago",
                    duration: "2:20",
                    image: img3,
                  },
                  {
                    id: 3,
                    title: "Song Three",
                    album: "Top 50 Global",
                    date: "5 days ago",
                    duration: "2:32",
                    image: img4,
                  },
                  {
                    id: 4,
                    title: "Song Four",
                    album: "Top 50 Global",
                    date: "5 days ago",
                    duration: "2:50",
                    image: img5,
                  },
                  {
                    id: 5,
                    title: "Song Five",
                    album: "Top 50 Global",
                    date: "5 days ago",
                    duration: "3:10",
                    image: img6,
                  },
                ].map((song) => (
                  <tr
                    key={song.id}
                    className="hover:bg-gray-700 cursor-pointer transition"
                    onClick={() => playSong(song.id - 1)}
                  >
                    <td className="py-2">{song.id}</td>
                    <td className="flex items-center gap-4 py-2">
                      <img
                        src={song.image}
                        alt={song.title}
                        className="w-10 h-10 rounded-md"
                      />
                      <span>{song.title}</span>
                    </td>
                    <td className="hidden md:table-cell">{song.album}</td>
                    <td className="hidden md:table-cell">{song.date}</td>
                    <td className="text-right">{song.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    
        {/* Bottom Music Player */}
        <div className="fixed bottom-0 left-0 w-full bg-gray-900 p-3 flex flex-col items-center border-t border-purple-500">
          <audio ref={audioRef} />
          <div className="text-sm font-semibold text-white">
            {songs[currentSongIndex].title}
          </div>
          <div className="w-full px-4 flex items-center">
            <span className="text-xs text-gray-400">{Math.floor(currentTime)}s</span>
            <input
              type="range"
              className="flex-grow mx-2"
              min="0"
              max={duration}
              value={currentTime}
              onChange={(e) => (audioRef.current.currentTime = e.target.value)}
            />
            <span className="text-xs text-gray-400">{Math.floor(duration)}s</span>
          </div>
          <div className="flex items-center justify-center gap-4 text-lg">
            <FaStepBackward
              className="text-gray-400 cursor-pointer hover:text-white transition"
              onClick={() => setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length)}
            />
            {isPlaying ? (
              <FaPause className="text-white cursor-pointer" onClick={togglePlay} />
            ) : (
              <FaPlay className="text-white cursor-pointer" onClick={togglePlay} />
            )}
            <FaStepForward
              className="text-gray-400 cursor-pointer hover:text-white transition"
              onClick={() => setCurrentSongIndex((prev) => (prev + 1) % songs.length)}
            />
            <FaRedo
              className="text-gray-400 cursor-pointer hover:text-white transition"
              onClick={() => (audioRef.current.currentTime = 0)}
            />
          </div>
        </div>
      </div>
    );
    
};

export default Article1;
