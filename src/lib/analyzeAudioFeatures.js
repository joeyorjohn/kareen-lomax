import React from "react";

export default function analyzeAudioFeatures(tracks) {
    const features = [
        "acousticness",
        "danceability",
        "energy",
        "instrumentalness",
        "liveness",
        "loudness",
        "speechiness",
        "tempo",
        "valence",
    ];

    const averages = {};

    features.forEach(function (feature) {
        var average = Object.entries(tracks.audio_features).map(
            (el) => el[1][feature]
        );
        average = average.reduce((a, c) => a + c) / average.length;
        average = average.toString();
        average = average.substr(2, 2);
        average = parseInt(average);
        averages[feature] = average;
    });

    return averages;
}
