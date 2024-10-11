import React from 'react';

const HomeFilterbar: React.FC = () => {
  return (
    <div className="bg-blue-800 px-4 py-8 rounded-[20px] mt-8 ">
    
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-xs ">
        {/* Doctor Name Input */}
        <div>
          <label className="block text-white mb-2">Doctor name</label>
          <input
            type="text"
            placeholder="Search Doctor Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-[20px]"
          />
        </div>
        
        {/* Specialization Dropdown */}
        <div>
          <label className="block text-white mb-2">Specialization</label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-[20px]">
            <option>Select Specialization</option>
          </select>
        </div>

        {/* Hospital Dropdown */}
        <div>
          <label className="block text-white mb-2">Hospital</label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-[20px]">
            <option>Select Hospital</option>
          </select>
        </div>

        {/* Date Input */}
        <div>
          <label className="block text-white mb-2">Date</label>
          <div className="relative">
            <input
              type="text"
              placeholder="MM/DD/YYYY"
              className="w-full px-4 py-2 border border-gray-300 rounded-[20px]"
            />
            <span className="absolute right-2 top-2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 000 2h8a1 1 0 100-2H6zM3 6a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2H3zm10 6a1 1 0 11-2 0 1 1 0 012 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Search Button */}
        <div >
          <label className="block text-blue-800 mb-2 ">'</label>
          <div className="relative">
          <button className="w-full  px-6 py-2 bg-gray-400 text-white rounded-[20px]">
            Find Doctor
          </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HomeFilterbar;
