import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Providers from '@/app/providers';
import { cn } from '@/lib/utils';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Create Next App',
};

interface RootLayoutProps {
  children: Readonly<React.ReactNode>;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <body className={cn('antialiased bg-background', inter.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
