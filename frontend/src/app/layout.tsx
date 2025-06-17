import "leaflet/dist/leaflet.css";
import "./globals.css";
import { Metadata } from "next";
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: "TwinLight",
  description: "Web application that displays sunrise and sunset times from anywhere in the world, along with a location that has matching solar schedules"
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body style={{ fontFamily: 'var(--font-poppins)' }}>
        {children}
      </body>
    </html>
  );
}
