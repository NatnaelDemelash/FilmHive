import React from 'react';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <input
          type="text"
          placeholder="Search films"
          className="py-3 px-4 border border-gray-300 rounded-lg w-full md:w-2/3 lg:w-1/2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className="bg-orange-500 text-white px-6 py-3 ml-3 rounded-lg shadow hover:bg-orange-600 transition-all">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
