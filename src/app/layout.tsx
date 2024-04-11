import type { Metadata } from 'next';
import './globals.css';
import '../assets/sass/main.scss';

export const metadata: Metadata = {
  title: 'Significa Movies',
  description: 'A simple movie search application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
