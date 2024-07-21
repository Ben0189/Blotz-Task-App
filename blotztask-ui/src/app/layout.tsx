import type { Metadata } from "next";
import { Inter as FontSans } from 'next/font/google';
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});
export const metadata: Metadata = {
  title: "Blotz Task App",
  description: "Efficiently organize and track users tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Navbar /> TODO: Implement navbar to navigate between pages*/} 
          <section className="container mx-auto px-4">{children}</section>
        </ThemeProvider>
      </body>
    </html>
  );
}
