import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import './globals.css';

import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Asido Foundation',
  description:
    'Making mental health support accessible through advocacy and action',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${plusJakartaSans.className}antialiased bg-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
