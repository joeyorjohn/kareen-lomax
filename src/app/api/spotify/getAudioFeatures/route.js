import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../api/auth/[...nextauth]/route";
import axios from "axios";
import qs from "qs";
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

export async function GET(request) {
  const session = await getServerSession(authOptions);

  async function getAccessToken() {
    var data = qs.stringify({
      grant_type: "refresh_token",
      refresh_token: session.refreshToken,
    });

    try {
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        data,
        {
          headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return { status: 200, data: response.data };
    } catch (error) {
      return error;
    }
  }

  async function getAudioFeatures(props) {
    try {
      const response = await axios.get(
        props.url,

        {
          headers: {
            Authorization: `Bearer ${props.accessToken.access_token}`,
          },
        }
      );

      return { status: 200, data: response.data };
    } catch (error) {
      return error;
    }
  }

  const accessToken = await getAccessToken();
  if ((await accessToken.status) != 200) {
    return Response.json({ error: accessToken.message });
  }
  var trackIDS = [];
  const topTracks = await req.body.topTracks;
  console.log(topTracks);

  await topTracks.items.forEach(function (track) {
    trackIDS.push(track.id);
  });

  const urlQuery = await trackIDS.join("%2C");
  const url = "https://api.spotify.com/v1/audio-features?ids=" + urlQuery;

  const audioFeatures = await getAudioFeatures({
    accessToken: accessToken,
    url: url,
  });
  if ((await audioFeatures.status) != 200) {
    return Response.json({ error: audioFeatures.message });
  } else {
    return audioFeatures.json(topTracks);
  }
}
