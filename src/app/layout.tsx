import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Font declaration
const grifterBold = localFont({
  src: './fonts/grifterbold.otf',
  variable: '--font-grifter-bold',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${grifterBold.variable} antialiased font-sans bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
