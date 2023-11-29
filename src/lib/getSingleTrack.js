import React from "react";

export default function analyzeAudioFeatures(topTracks, audioFeatures) {
    var features = audioFeatures.audio_features;
    var tracks = topTracks.items;
    var result = features.reduce(function (res, obj) {
        return obj.valence < res.valence ? obj : res;
    });

    var singleTrack = tracks.find((x) => x.id === result.id);
    return singleTrack;
}
