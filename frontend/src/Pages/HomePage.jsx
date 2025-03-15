import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import {
  FaRandom,
  FaStepBackward,
  FaPlay,
  FaPause,
  FaStepForward,
  FaRedo,
} from "react-icons/fa";
import img1 from "../assets/images/img8.jpg";
import img2 from "../assets/images/img9.jpg";
import img3 from "../assets/images/img10.jpg";
import img4 from "../assets/images/img16.jpg";
import img5 from "../assets/images/img11.jpg";
import img6 from "../assets/images/img15.jpg";
import song1Img from "../assets/images/img1.jpg";
import song2Img from "../assets/images/img2.jpg";
import song3Img from "../assets/images/img3.jpg";
import song4Img from "../assets/images/img4.jpg";
import song5Img from "../assets/images/img14.jpg";
import song6Img from "../assets/images/img13.jpg";
import song7Img from "../assets/images/img6.jpg";
import song8Img from "../assets/images/img7.jpg";
import song1 from "../assets/Images/song1.mp3";
import song2 from "../assets/Images/song2.mp3";
import song3 from "../assets/Images/song3.mp3";
import song4 from "../assets/Images/song3.mp3";
import song5 from "../assets/Images/song1.mp3";
import song6 from "../assets/Images/song2.mp3";
import song7 from "../assets/Images/song3.mp3";
import song8 from "../assets/Images/song1.mp3";
import "./HomePage.css";

const Home = () => {
  const navigate = useNavigate();
  const [currentSong, setCurrentSong] = useState(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const songs = [
    { title: "Song One", image: song1Img, audio: song1 },
    { title: "Song Two", image: song2Img, audio: song2 },
    { title: "Song Three", image: song3Img, audio: song3 },
    { title: "Song Four", image: song4Img, audio: song4 },
    { title: "Song Five", image: song5Img, audio: song5 },
    { title: "Song Six", image: song6Img, audio: song6 },
    { title: "Song Seven", image: song7Img, audio: song7 },
    { title: "Song Eight", image: song8Img, audio: song8 },
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", () =>
        setCurrentTime(audio.currentTime)
      );
      audio.addEventListener("loadedmetadata", () =>
        setDuration(audio.duration)
      );
    }
    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", () =>
          setCurrentTime(audio.currentTime)
        );
        audio.removeEventListener("loadedmetadata", () =>
          setDuration(audio.duration)
        );
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

  const playNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const playPrevious = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
    );
  };

  const restartSong = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
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
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="flex flex-1 w-full">
        {/* Sidebar Section */}
        <div className="hidden md:block w-64 lg:w-80 h-screen sticky top-0">
          <Sidebar />
        </div>

        {/* Main Content Section */}
        <div className="flex-1 p-4 overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
            <div className="flex gap-2">
              <button className="bg-gray-800 p-2 rounded-full">&lt;</button>
              <button className="bg-gray-800 p-2 rounded-full">&gt;</button>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
                Explore Premium
              </button>
              <button className="bg-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                Install App
              </button>
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-sm font-semibold">
                A
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-hide">
            <button className="bg-white px-4 py-2 text-black rounded-full text-sm font-semibold">
              All
            </button>
            <button className="bg-gray-800 px-4 py-2 rounded-full text-sm">
              Music
            </button>
            <button className="bg-gray-800 px-4 py-2 rounded-full text-sm">
              Podcasts
            </button>
          </div>

          {/* Featured Charts Section */}
          <h2 className="text-2xl font-bold mb-4">Featured Charts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-4 cursor-pointer">
            {[
              { title: "Top 50 Global", image: img1, link: "/article1" },
              { title: "Top 50 India", image: img2, link: "/article2" },
              { title: "Trending India", image: img3, link: "/article3" },
              { title: "Trending Global", image: img4, link: "/article4" },
              { title: "Mega Hits", image: img5, link: "/article5" },
              { title: "Happy Favorites", image: img6, link: "/article6" },
            ].map((chart, index) => (
              <div
                key={index}
                className="bg-gray-900 p-3 rounded-lg shadow-md hover:bg-gray-800 transition duration-200"
                onClick={() => navigate(chart.link)} 
              >
                <img
                  src={chart.image}
                  alt={chart.title}
                  className="w-full h-32 sm:h-40 object-cover rounded-lg mb-2"
                />
                <p className="text-sm sm:text-lg font-semibold">
                  {chart.title}
                </p>
              </div>
            ))}
          </div>

          {/* Today's Biggest Hits Section */}
          <h2 className="text-2xl font-bold mb-4">Today's Biggest Hits</h2>
          <div className="flex overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-4">
              {songs.map((song, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-3 rounded-lg shadow-md hover:bg-gray-800 transition duration-200 w-28 sm:w-36 flex-shrink-0 cursor-pointer"
                  onClick={() => playSong(index)}
                >
                  <img
                    src={song.image}
                    alt={song.title}
                    className="w-full h-28 sm:h-36 object-cover rounded-lg mb-2"
                  />
                  <p className="text-xs sm:text-sm font-semibold">
                    {song.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Music Player */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-900 p-3 flex flex-col items-center border-t border-purple-500">
        <audio ref={audioRef} />
        <div className="text-sm sm:text-lg font-semibold text-white">
          {songs[currentSongIndex].title}
        </div>
        {/* Progress Bar */}
        <div className="w-full px-4 flex items-center">
          <span className="text-xs text-gray-400">
            {Math.floor(currentTime)}s
          </span>
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
        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mb-1 text-sm sm:text-lg">
          <FaRandom className="text-gray-400 cursor-pointer" />
          <FaStepBackward
            className="text-gray-400 cursor-pointer"
            onClick={playPrevious}
          />
          {isPlaying ? (
            <FaPause
              className="text-white text-lg sm:text-2xl cursor-pointer"
              onClick={togglePlay}
            />
          ) : (
            <FaPlay
              className="text-white text-lg sm:text-2xl cursor-pointer"
              onClick={togglePlay}
            />
          )}
          <FaStepForward
            className="text-gray-400 cursor-pointer"
            onClick={playNext}
          />
          <FaRedo
            className="text-gray-400 cursor-pointer"
            onClick={restartSong}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
