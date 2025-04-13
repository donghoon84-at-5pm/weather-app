'use client';

import React from 'react';

const WeatherCard = ({ dayData, index }) => {
  // Unix 타임스탬프를 날짜로 변환
  const date = new Date(dayData.dt * 1000);
  const day = date.toLocaleDateString('ko-KR', { weekday: 'short' });
  const dateStr = date.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
  
  // 날씨 아이콘 URL
  const iconUrl = `https://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png`;
  
  // 오늘 카드에 대한 특별 스타일링
  const isToday = index === 0;
  const cardClass = isToday 
    ? "bg-blue-600 text-white shadow-lg" 
    : "bg-white shadow-md hover:shadow-lg";
  
  return (
    <div className={`rounded-lg overflow-hidden transition-all duration-300 ${cardClass}`}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className={`font-bold text-lg ${isToday ? 'text-white' : 'text-blue-800'}`}>
              {isToday ? '오늘' : day}
            </h3>
            <p className={isToday ? 'text-blue-100' : 'text-gray-600'}>{dateStr}</p>
          </div>
          <img src={iconUrl} alt={dayData.weather[0].description} className="w-16 h-16" />
        </div>
        
        <div className="mb-4">
          <p className="text-2xl font-bold">{Math.round(dayData.temp.day)}°C</p>
          <p className={isToday ? 'text-blue-100' : 'text-gray-600'}>
            {dayData.weather[0].description}
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className={isToday ? 'text-blue-100' : 'text-gray-500'}>최고</p>
            <p className="font-semibold">{Math.round(dayData.temp.max)}°C</p>
          </div>
          <div>
            <p className={isToday ? 'text-blue-100' : 'text-gray-500'}>최저</p>
            <p className="font-semibold">{Math.round(dayData.temp.min)}°C</p>
          </div>
          <div>
            <p className={isToday ? 'text-blue-100' : 'text-gray-500'}>습도</p>
            <p className="font-semibold">{dayData.humidity}%</p>
          </div>
          <div>
            <p className={isToday ? 'text-blue-100' : 'text-gray-500'}>바람</p>
            <p className="font-semibold">{Math.round(dayData.wind_speed)} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;