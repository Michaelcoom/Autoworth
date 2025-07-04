import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AutoWorth - Car Price Predictor',
  description: 'Get accurate car price predictions using machine learning',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
