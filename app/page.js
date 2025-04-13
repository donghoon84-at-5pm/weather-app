'use client';

import { useState, useEffect } from 'react';
import WeatherCard from '../components/WeatherCard';
import CitySearch from '../components/CitySearch';

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({ city: '서울'});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // 위치 좌표를 먼저 불러옵니다
        console.log('Fetching geo data...');
        console.log(`Location: ${location.city}, ${location.country}`);
        console.log(`API Key: ${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`);
        const geoResponse = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(location.city)}&limit=1&lang=kr&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
        );
        
        if (!geoResponse.ok) {
          throw new Error('도시를 찾을 수 없습니다.');
        }
        
        const geoData = await geoResponse.json();
        
        if (!geoData.length) {
          throw new Error('도시 정보가 없습니다.');
        }
        
        const { lat, lon } = geoData[0];
        
        // 날씨 데이터를 불러옵니다
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&lang=kr&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
        );
        
        if (!weatherResponse.ok) {
          throw new Error('날씨 데이터를 불러오는데 문제가 발생했습니다.');
        }
        
        const data = await weatherResponse.json();
        console.log('Weather data:', data);
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location]);

  // 도시 검색 처리
  const handleCitySearch = (newCity, newCountry = 'KR') => {
    setLocation({ city: newCity, country: newCountry });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold text-red-500">오류 발생</h1>
        <p className="mt-2">{error}</p>
        <CitySearch onSearch={handleCitySearch} />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">7일 날씨 예보</h1>
      
      <div className="mb-6">
        <CitySearch onSearch={handleCitySearch} />
      </div>
      
      {weatherData && (
        <div>
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold">{location.city}</h2>
            <p className="text-gray-600">현재 온도: {Math.round(weatherData.current.temp)}°C</p>
            <p className="text-gray-600">{weatherData.current.weather[0].description}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {weatherData.daily.slice(0, 7).map((day, index) => (
              <WeatherCard key={index} dayData={day} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}