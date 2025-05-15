import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SpotlightProvider from './spotlight-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Justin Roderick',
  description:
    'Justin Roderick is an aspiring software engineer and current student at the University of Central Florida.',
  keywords: [
    'Justin Roderick',
    'UCF',
    'Software Engineer',
    'Web Developer',
    'Developer',
    'Computer Science',
    'Engineer',
    'Justin',
    'Roderick',
    'University of Central Florida',
    'Software',
  ],
  openGraph: {
    type: 'website',
    title: 'Justin Roderick',
    description:
      'Justin Roderick is an aspiring software engineer and current student at the University of Central Florida.',
    url: 'https://justinroderick.dev',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          'flex min-h-full h-screen overflow-hidden flex-col bg-cover bg-fuchsia-950 antialiased'
        }
      >
        <SpotlightProvider>{children}</SpotlightProvider>
      </body>
    </html>
  );
}
