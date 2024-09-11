
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import '../styles/globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from 'next-themes';
import SessionProvider from './provider';
import Nav from './navbar';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/options';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Blotz Task App',
  description: 'Efficiently organize and track users tasks',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <SessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Nav/>
            {/* <Navbar /> TODO: Implement navbar to navigate between pages*/}
            <section className="container mx-auto px-4">{children}</section>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
