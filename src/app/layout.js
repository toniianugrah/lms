import { Inter } from 'next/font/google';
import { NProgress } from '@/components/n-progress';
import './globals.css';

export const metadata = {
  title: 'Solelands | LMS',
  description:
    'Solelands LMS is a user-friendly platform that helps schools and businesses organize courses, track progress, and make learning easier for everyone.',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NProgress />
        {children}
      </body>
    </html>
  );
}
