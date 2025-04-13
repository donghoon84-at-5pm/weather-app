import './globals.css';

export const metadata = {
  title: '7일 날씨 예보 앱',
  description: 'OpenWeatherMap API를 사용한 7일 날씨 예보 앱',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="bg-gradient-to-br from-blue-100 to-blue-200 min-h-screen">
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}