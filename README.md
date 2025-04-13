# 7일 날씨 예보 앱

이 프로젝트는 OpenWeatherMap API를 사용하여 7일간의 날씨 예보를 제공하는 웹 애플리케이션입니다. 사용자는 도시를 검색하거나 인기 도시 버튼을 클릭하여 해당 지역의 날씨 정보를 확인할 수 있습니다.

## 주요 기능
- 도시 검색을 통해 날씨 정보 확인
- 인기 도시 버튼 제공
- 현재 날씨 및 7일간의 날씨 예보 표시
- 반응형 디자인

## 기술 스택
- **프론트엔드**: React, Next.js
- **스타일링**: Tailwind CSS
- **API**: OpenWeatherMap API

## 설치 및 실행

1. 이 저장소를 클론합니다:
   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. 의존성을 설치합니다:
   ```bash
   npm install
   ```

3. 환경 변수 파일을 생성하고 OpenWeatherMap API 키를 추가합니다:
   ```bash
   echo "NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key" > .env.local
   ```

4. 개발 서버를 실행합니다:
   ```bash
   npm run dev
   ```

5. 브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 애플리케이션을 확인합니다.

## 디렉토리 구조
```
weather-app/
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── CitySearch.js
│   └── WeatherCard.js
├── public/
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── package.json
└── README.md
```

## 환경 변수
- `NEXT_PUBLIC_OPENWEATHER_API_KEY`: OpenWeatherMap API 키를 설정합니다.

## 라이선스
이 프로젝트는 MIT 라이선스를 따릅니다.