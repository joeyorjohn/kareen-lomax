import React from "react";

export default function Footer() {
  return (
    <div className=" font-inter text-sm flex flex-col my-20">
      <p className="mx-auto mb-2">© music is fun 2023</p>
      <div className="flex gap-2 mx-auto">
        <a href="https://www.seekermusic.com/SeekerMusicPrivacyPolicy.pdf">
          <p>Privacy Policy</p>
        </a>
        <a href="https://www.seekermusic.com/SeekerTermsofUsePolicy.pdf">
          <p>Terms of Use</p>{" "}
        </a>
      </div>
    </div>
  );
}
