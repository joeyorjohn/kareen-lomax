import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "./providers";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${roboto.variable} ${biro.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
