import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter as FontSans } from 'next/font/google';
import '../styles/globals.css';
import { MainNav } from './navbar/main-nav';
import Provider from './provider';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Blotz Task App',
  description: 'Efficiently organize and track users tasks',
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Provider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <MainNav />
            {/* <Navbar /> TODO: Implement navbar to navigate between pages*/}
            <section className="container mx-auto px-4">{children}</section>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
