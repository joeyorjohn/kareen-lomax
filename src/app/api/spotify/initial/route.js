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

  async function getTopTracks(props) {
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=50`,
        {
          headers: {
            Authorization: `Bearer ${props.accessToken.data.access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return { status: 200, data: response.data };
    } catch (error) {
      return error;
    }
  }

  async function followArtist(props) {
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=50`,
        {
          headers: {
            Authorization: `Bearer ${props.accessToken.data.access_token}`,
            "Content-Type": "application/json",
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
  const follow = await follow({
    accessToken: accessToken,
  });
  const topTracks = await getTopTracks({
    accessToken: accessToken,
  });
  if ((await topTracks.status) != 200) {
    return Response.json({ error: topTracks.message });
  } else {
    return Response.json(topTracks);
  }
}
