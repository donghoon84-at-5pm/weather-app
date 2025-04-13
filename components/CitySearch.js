'use client';

import React, { useState } from 'react';

const CitySearch = ({ onSearch }) => {
  const [city, setCity] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };
  
  // 인기 도시들
  const popularCities = [
    '서울', '부산', '인천', '대구', '대전', '광주', '제주'
  ];
  
  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex mb-4">
        <input
          type="text"
          placeholder="도시명을 입력하세요"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-r-lg transition-colors duration-300"
        >
          검색
        </button>
      </form>
      
      <div className="flex flex-wrap justify-center gap-2">
        {popularCities.map((popularCity) => (
          <button
            key={popularCity}
            onClick={() => onSearch(popularCity)}
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm transition-colors duration-300"
          >
            {popularCity}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CitySearch;