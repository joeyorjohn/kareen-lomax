"use client";
import React from "react";
import { signIn } from "next-auth/react";

import { useSession } from "next-auth/react";

export default function page() {
  const { data: session, status } = useSession();
  console.log("status", status);
  console.log("session", session);
  return (
    <div>
      <h2>My Amazing App</h2>
      {session && <p>{session.user.name}</p>}
      <button onClick={() => signIn("spotify")}>Sign in with Spotify</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
