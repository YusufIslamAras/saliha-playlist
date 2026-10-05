import { Manrope, Caveat } from "next/font/google";
import "./globals.css";

// Dört dilin harfleri için hem Latin hem Kiril alt kümeleri yüklenir
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
});

export const metadata = {
  title: "Saliha'nın Şarkısı",
  description: "Saliha'ya özel şarkı çalar uygulaması",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body
        className={`${manrope.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
