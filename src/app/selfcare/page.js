import PlaylistGenerator from "@/components/PlaylistGenerator";

import React from "react";

// export const metadata = {
//   title: "My SELF CARE Playlist | Personalized Spotify Playlist Generator",
//   description:
//     "Connect with Spotify to get your personalized SELF CARE playlist curated by Kareen Lomax.",
// };

export const metadata = {
  // title: "Kareen Lomax | Official Website",
  // description:
  //   "Official website for Atlanta-raised (LA-based) Alternative R&B artist and songwriter Kareen Lomax. SELF CARE out November 8th. Features with Paul Woolford (Looking For Me), TSHA, Aluna, Diplo.",
  title: "My SELF CARE Playlist | Personalized Spotify Playlist Generator",
  description:
    "Connect with Spotify to get your personalized SELF CARE playlist curated by Kareen Lomax.",
  openGraph: {
    // title: "Kareen Lomax | Official Website",
    // description:
    //   "Official website for Atlanta-raised (LA-based) Alternative R&B artist and songwriter Kareen Lomax. SELF CARE out November 8th. Features with Paul Woolford (Looking For Me), TSHA, Aluna, Diplo.",
    title: "My SELF CARE Playlist | Personalized Spotify Playlist Generator",
    description:
      "Connect with Spotify to get your personalized SELF CARE playlist curated by Kareen Lomax.",
    images: ["/images/playlist_cvoer.png"],
    url: "https://kareenlomax.com/selfcare",
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

export default function page() {
  return <PlaylistGenerator />;
}
