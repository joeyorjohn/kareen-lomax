import PlaylistGenerator from "@/components/PlaylistGenerator";

import React from "react";

export const metadata = {
  title: "My SELF CARE Playlist | Personalized Spotify Playlist Generator",
  description:
    "Connect with Spotify to get your personalized SELF CARE playlist curated by Kareen Lomax.",
};

export default function page() {
  return <PlaylistGenerator />;
}
