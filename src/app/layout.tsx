import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { Providers } from "./GlobalRedux/provider";
import Header from "./Components/Header/Header";
import { Inter } from 'next/font/google'
import Footer from "./Components/Footer/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GAME ZONE",
  description: "GAME PLAY ZONE",
  
};

 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
      <link rel="icon" href="https://png.pngtree.com/png-vector/20230515/ourmid/pngtree-game-logo-with-a-console-image-lightning-in-the-middle-vector-png-image_7097655.png" sizes="32x32" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        
        
      </body>
    </html>
  );
}
