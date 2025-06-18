import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';
import NavBar from '@/components/navbar/NavBar';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Lucas Portfolio',
  description: 'Checkout Lucas projects',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap'
          rel='stylesheet'
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex p-4 gap-4 h-screen`}
      >
        <Header />
        <div className='flex flex-col h-full  w-full rounded-xl overflow-scroll scrollbar-hidden'>
          {children}
        </div>
        <NavBar />
      </body>
    </html>
  );
}
