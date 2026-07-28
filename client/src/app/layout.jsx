import { Plus_Jakarta_Sans, Inter, Space_Grotesk } from 'next/font/google';
import "./globals.css";
import { constructMetadata } from "../lib/seo/metadata";
import { Providers } from "./providers";
import { Navbar, Footer } from "../components/layout";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata = constructMetadata();

export const viewport = {
  themeColor: "#E6002D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Providers>
          <Navbar />
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
