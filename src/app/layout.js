import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";

//👇 Configure our local font object
const biro = localFont({
  src: "../../public/fonts/biro_script-webfont.woff2",
  variable: "--font-biro",
  display: "swap",
});

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Kareen Lomax | Official Website",
  description:
    "Official website for Atlanta-raised (LA-based) Alternative R&B artist and songwriter Kareen Lomax. SELF CARE out November 8th. Features with Paul Woolford (Looking For Me), TSHA, Aluna, Diplo.",
  openGraph: {
    title: "Kareen Lomax | Official Website",
    description:
      "Official website for Atlanta-raised (LA-based) Alternative R&B artist and songwriter Kareen Lomax. SELF CARE out November 8th. Features with Paul Woolford (Looking For Me), TSHA, Aluna, Diplo.",
    images: ["/images/kareen_website.jpg"],
    url: "https://kareenlomax.com",
    siteName: "Kareen Lomax",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Kareen Lomax",
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${roboto.variable} ${biro.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
