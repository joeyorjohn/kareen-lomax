import React from "react";

export default function processSortedTracks(tracks, slug) {
  var trackIDs = [];

  tracks.forEach(function (track) {
    trackIDs.push(track.id);
  });

  var artistPickedTracks = [
    "3JKRuo3KhL39T6XWAXPohj",
    "3PJV3HC2LogvCrS6hDs2el",
    "1ljglUWkHT85jxPnO3pJpE",
    "3Q2Sh0puZOeJvTjPPq4xnn",
    "7qLr3HMApUbyDkUvgIvHnB",
    "2kstLu8PSeQl2A5ks13fm0",
    "2fHKzcFXMme56EJMgFsudr",
    "3PqLsRd5qvGGYllBy1IWII",
    "75JFxkI2RXiU7L9VXzMkle",
    "3wEa4oO2y9kuaPAbh4pzQb",
    "5gErVIEfTztsb2niYlWjI4",
    "0uEp9E98JB5awlA084uaIg",
  ];

  artistPickedTracks.forEach(function (track) {
    trackIDs.push(track);
  });

  //SHUFFLE ARRAY OF IDS
  var currentIndex = trackIDs.length,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [trackIDs[currentIndex], trackIDs[randomIndex]] = [
      trackIDs[randomIndex],
      trackIDs[currentIndex],
    ];
  }

  //THIS WILL BE TRACK #1
  trackIDs.unshift("6xJ8pLfdfnJBpQR6i8J4jq");

  return trackIDs;
}
