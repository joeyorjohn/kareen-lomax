import React from "react";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
export default function Login() {
  return (
    <div className="flex mb-12">
      <div className="max-w-sm mx-auto my-2">
        {/* <div className="max-w-xs mx-auto">
          <Image
            src="/images/SELF_CARE_Playlist_Share.jpg"
            height="1440"
            width="1080"
            className="border border-black"
          />
        </div> */}
        <div className="border border-black">
          <Image
            src="/images/playlist_cvoer.png"
            width="1080"
            height="1080"
          ></Image>
        </div>
        <h1 className="font-biro text-3xl text-center mb-3 mt-8">
          MY SELF CARE PLAYLIST
        </h1>
        <p className="font-inter text-sm text-center leading-5 mb-4">
          Connect with Spotify to get your personalized SELF CARE playlist
          curated by Kareen Lomax.
        </p>
        <p className="font-inter text-sm text-center leading-5 mb-4">
          Connect before 12/15 for a chance to win a Kareen-cense incense paper
          handmade by Kareen.
        </p>
        <button
          onClick={() => signIn("spotify")}
          className=" px-4 py-2 m-auto mt-3 rounded-3xl text-white text-sm flex"
          style={{ backgroundColor: "#1DB954" }}
        >
          <img
            className="w-4 mr-1 mt-0.5"
            src="/images/spotify_logo_white.png"
          />
          <p>CONNECT WITH SPOTIFY</p>
        </button>
        <div className="flex font-inter flex-col max-w-xs mx-auto">
          <div className="mb-10">
            <p className="  text-xs text-center  mt-8">
              BY CONNECTING WITH SPOTIFY YOU AGREE TO RECIEVE EMAIL
              COMMUNICATIONS FROM KAREEN LOMAX &amp; SEEKER MUSIC GROUP
            </p>
            <div className=" text-xs text-center mt-2">
              <a href="https://www.seekermusic.com/SeekerMusicPrivacyPolicy.pdf">
                <p>Privacy Policy</p>
              </a>
              <a href="https://www.seekermusic.com/SeekerTermsofUsePolicy.pdf">
                <p>Terms of Use</p>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
