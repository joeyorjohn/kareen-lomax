import React from "react";

export default function sortTracksByAudioFeatures(tracks) {
  var sortedTracks = [];

  if (tracks.audio_features.length >= 1) {
    tracks.audio_features.forEach(function (track) {
      if (track.valence < 0.5) {
        // if (track.valence < 0.5 && track.tempo < 100) {
        sortedTracks.push(track);
      }
    });

    return sortedTracks;
  } else {
    return sortedTracks;
  }
}
