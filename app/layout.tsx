import type { Metadata } from "next";
import { Inter, Poppins, Open_Sans, Playfair_Display } from "next/font/google";
import Navbar from "./pages/Navbar";
import "./globals.css";


// Load Inter for body/UI
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Load Poppins for headings
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

// Load Open Sans for buttons/labels
const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

// (Optional) Playfair Display for special headers
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ShopEase | Your One-Stop Online Store",
  description:
    "Discover the best deals on electronics, fashion, home essentials, and more. ShopEase offers fast delivery, secure payments, and top-quality products all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${openSans.variable} ${playfair.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
