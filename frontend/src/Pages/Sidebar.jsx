import React from "react";
import homeIcon from "../assets/Images/home.png";  
import searchIcon from "../assets/Images/search.png";  
import libraryIcon from "../assets/Images/stack.png";  
import rightArrowIcon from "../assets/Images/arrow.png";  
import plusIcon from "../assets/Images/plus.png";  

const Sidebar = () => {
  return (
    <div className="w-84 h-screen bg-black text-white p-6 flex flex-col gap-6">
      {/* Home & Search */}
      <div className="space-y-5">
        <div className="flex items-center gap-4 cursor-pointer hover:text-gray-300 transition duration-300">
          <img src={homeIcon} alt="Home" className="w-6 h-6" />
          <span className="text-lg font-medium">Home</span>
        </div>
        <div className="flex items-center gap-4 cursor-pointer hover:text-gray-300 transition duration-300">
          <img src={searchIcon} alt="Search" className="w-6 h-6" />
          <span className="text-lg font-medium">Search</span>
        </div>
      </div>

      
      <div className="bg-[#121212] p-4 rounded-xl">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <img src={libraryIcon} alt="Library" className="w-6 h-6" />
            <span className="text-lg font-medium">Your Library</span>
          </div>
          <div className="flex items-center gap-3">
            <img src={rightArrowIcon} alt="Arrow" className="w-5 h-5 cursor-pointer hover:opacity-80 transition duration-300" />
            <img src={plusIcon} alt="Plus" className="w-5 h-5 cursor-pointer hover:opacity-80 transition duration-300" />
          </div>
        </div>

        {/* Playlist Card */}
        <div className="bg-[#242424] p-4 rounded-xl mb-3 shadow-lg hover:bg-[#2e2e2e] transition duration-300">
          <h4 className="text-white font-bold text-sm">Create your first playlist</h4>
          <p className="text-gray-400 text-xs mt-1">It’s easy, we’ll help you</p>
          <button className="mt-3 px-4 py-2 text-black bg-white rounded-full text-sm font-medium hover:bg-gray-200 transition duration-300">
            Create playlist
          </button>
        </div>

        {/* Podcast Card */}
        <div className="bg-[#242424] p-4 rounded-xl shadow-lg hover:bg-[#2e2e2e] transition duration-300">
          <h4 className="text-white font-bold text-sm">Let's find some podcasts to follow</h4>
          <p className="text-gray-400 text-xs mt-1">We’ll keep you updated on new episodes</p>
          <button className="mt-3 px-4 py-2 text-black bg-white rounded-full text-sm font-medium hover:bg-gray-200 transition duration-300">
            Browse podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
