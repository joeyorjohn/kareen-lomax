import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
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

  async function followPlaylist(props) {
    try {
      const response = await axios.put(
        "https://api.spotify.com/v1/playlists/1VdAIpUeuLnfx3tfIHFQFS/followers",
        { public: true },
        {
          headers: {
            Authorization: `Bearer ${props.accessToken.data.access_token}`,
            "Content-Type": `application/json`,
          },
        }
      );
      return { status: 200, data: response.data };
    } catch (error) {
      return error;
    }
  }

  async function followPlaylist2(props) {
    try {
      const response = await axios.put(
        "https://api.spotify.com/v1/playlists/08yciHKnmyDndnUlRnSsqB/followers",
        { public: true },
        {
          headers: {
            Authorization: `Bearer ${props.accessToken.data.access_token}`,
            "Content-Type": `application/json`,
          },
        }
      );
      return { status: 200, data: response.data };
    } catch (error) {
      return error;
    }
  }

  async function follow(props) {
    try {
      const response = await axios.put(
        "https://api.spotify.com/v1/me/following?type=artist&ids=0Fb9qTWnjsB90xH3zWr4oa",
        { ids: ["0Fb9qTWnjsB90xH3zWr4oa"] },
        {
          headers: {
            Authorization: `Bearer ${props.accessToken.data.access_token}`,
            "Content-Type": `application/json`,
          },
        }
      );
      return { status: 200, data: response.data };
    } catch (error) {
      return error;
    }
  }

  async function saveTrack(props) {
    try {
      const response = await axios.put(
        "https://api.spotify.com/v1/me/tracks?ids=6xJ8pLfdfnJBpQR6i8J4jq",
        { ids: ["6xJ8pLfdfnJBpQR6i8J4jq"] },
        {
          headers: {
            Authorization: `Bearer ${props.accessToken.data.access_token}`,
            "Content-Type": `application/json`,
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

  const playlist = await followPlaylist({
    accessToken: accessToken,
  });
  if ((await playlist.status) != 200) {
    return Response.json({ error: playlist.message });
  }

  const playlist2 = await followPlaylist2({
    accessToken: accessToken,
  });
  if ((await playlist.status) != 200) {
    return Response.json({ error: playlist.message });
  }

  const followed = await follow({
    accessToken: accessToken,
  });
  if ((await followed.status) != 200) {
    return Response.json({ error: followed.message });
  }

  const track = await saveTrack({
    accessToken: accessToken,
  });
  if ((await track.status) != 200) {
    return Response.json({ error: track.message });
  } else {
    return Response.json(track);
  }
}
