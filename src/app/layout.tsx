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
      <body>
        {children}
        <footer>
          <p className="container text-center">
            copyright &copy; {new Date().getFullYear()}{' '}
            <strong>Significa</strong>
          </p>
        </footer>
      </body>
    </html>
  );
}
