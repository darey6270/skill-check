
import React from "react";

const PostEditor = () => {
  return (
    <div className="bg-gray-50 p-4">
      {/* User List */}
      <div className="flex overflow-x-auto space-x-4 mb-4 pb-2 border-b border-gray-200 ">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-gray-300 overflow-hidden cursor-pointer hover:scale-105 transition transform duration-200"
          >
            <img
              src="../../test.svg"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Social Media Tabs */}
      <div className="flex items-center space-x-4 mb-4">
        <button className="p-2 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full hover:opacity-90 transition">
          <img
            src="../../instagram.png"
            alt="Instagram"
            className="w-6 h-6"
          />
        </button>
        <button className="p-2 bg-green-500 rounded-full hover:bg-green-600 transition">
          <img
            src="../../whatsapp.png"
            alt="WhatsApp"
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Post Creation Section */}
      <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg shadow-md">
        {/* Text Input */}
        <div className="relative border rounded-lg p-4">
          <textarea
            placeholder="Type here..."
            className="w-full h-40 resize-none outline-none text-gray-700"
          ></textarea>
          {/* Send Button */}
          <button className="absolute bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-md transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 15.75L15 12 9.75 8.25v7.5z"
              />
            </svg>
          </button>
        </div>

        {/* Image Placeholder */}
        <div className="flex items-center justify-center border rounded-lg bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-16 h-16 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25l-3-3a.75.75 0 00-1.06 0l-4.47 4.47-2.47-2.47a.75.75 0 00-1.06 0l-3 3m18-6.75v9a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25v-15A2.25 2.25 0 014.5 3h9"
            />
          </svg>
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex items-center space-x-4 mt-4">
        <button className="flex items-center bg-gray-200 text-gray-700 rounded-full px-4 py-2 hover:bg-gray-300 transition">
          <span className="mr-2">📎</span> Media
        </button>
        <button className="flex items-center bg-gray-200 text-gray-700 rounded-full px-4 py-2 hover:bg-gray-300 transition">
          <span className="mr-2">🔗</span> Link
        </button>
        <button className="flex items-center bg-gray-200 text-gray-700 rounded-full px-4 py-2 hover:bg-gray-300 transition">
          <span className="mr-2">📊</span> Poll
        </button>
      </div>
    </div>
  );
};

export default PostEditor;

