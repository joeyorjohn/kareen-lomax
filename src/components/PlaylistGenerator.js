"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/components/Footer";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Login from "@/components/Login";
import Logout from "@/components/Logout";
import { motion, useAnimation } from "framer-motion";
import { toJpeg } from "html-to-image";
import axios from "axios";
import Head from "next/head";

export default function PlaylistGenerator() {
  const { data: session, status } = useSession();

  const [stage, setStage] = useState(0);
  console.log(stage);

  const [care, setCare] = useState(null);

  const [playlist, setPlaylist] = useState();
  console.log("playlist");

  console.log(playlist);

  const controls = useAnimation();

  useEffect(() => {
    // if (props.currentSlide == props.index) {
    async function animationSequence() {
      await controls;
      await controls.start((i) => ({
        opacity: 1,
        translateY: 0,
        transition: {
          delay: i,
          duration: 0.6,
          type: "spring",
        },
      }));
    }
    animationSequence();

    if (stage == 1) {
      console.log("stage1");
      axios.get("/api/spotify/createPlaylist").then((response) => {
        setPlaylist(response.data);
        console.log(response.data);
        setStage(3);
      });
    }

    // } else {
    //   introcontrols.start("hidden");

    //   controls.start("hidden");
    // }
  }, [stage, session]);

  useEffect(() => {
    if (session) {
      axios.get("/api/spotify/initial").then((response) => {
        console.log("initial fuctions complete");
      });
    }
  }, [session]);

  async function downloadImage() {
    await toJpeg(document.getElementById("image-download"), {
      quality: 0.95,
      pixelRatio: 2.5,
    }).then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "self_care_playlist.jpeg";
      link.href = dataUrl;
      link.click();
    });
  }

  return (
    <div>
      <div className=" -z-10 absolute w-screen ">
        <Image
          src="/images/background.png"
          fill
          className=" -z-10"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="p-4 w-screen  min-h-screen flex">
        {/* <div className="border border-black h-96 w-32"></div> */}
        {session && (
          <div className="m-auto max-w-sm">
            {stage == 4 && (
              <div>
                <p className="text-center font-inter font-medium mb-4">
                  YOUR PERSONALIZED SELF CARE PLAYLIST IS READY
                </p>
                <div className="border border-black">
                  <Image
                    src="/images/playlist_cvoer.png"
                    width="1080"
                    height="1080"
                  ></Image>
                </div>
                {playlist && (
                  <a
                    href={
                      "https://open.spotify.com/playlist/" + playlist.playlistID
                    }
                  >
                    <button className=" font-inter my-4 uppercase border border-black py-2 px-4 rounded-md w-full mb-2 mx-auto cursor-pointer bg-black text-white  hover:bg-slate-600 hover:border-slate-600 transition">
                      LISTEN ON SPOTIFY
                    </button>
                  </a>
                )}

                <p className="text-center font-inter italic my-4">
                  Kareen Lomax &quot;SELF CARE&quot; out now.
                </p>
                <div className=" flex align-middle text-sm  text-gray-500 gap-2 my-4">
                  <button
                    onClick={() => {
                      setStage(3);
                    }}
                    className=" font-inter flex gap-1 uppercase  py-2 px-4 rounded-md  mb-2 mx-auto hover:bg-transparent cursor-pointer  hover:text-slate-600 hover:border-slate-600 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 self-center"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                    BACK
                  </button>
                </div>
              </div>
            )}
            {stage == 0 && (
              <div>
                <motion.div
                  animate={controls}
                  custom={0.2}
                  initial="hidden"
                  variants={{
                    hidden: {
                      opacity: 0,
                      translateY: 24,
                    },
                  }}
                >
                  <p className="text-center font-inter italic mb-4">
                    &quot;SELF CARE means to me putting everything I got on
                    pause and loving myself for a moment. My go to practices
                    include Journaling, a walk in nature, and forgiving the past
                    through music. &quot; – Kareen Lomax
                  </p>
                </motion.div>
                <motion.div
                  animate={controls}
                  custom={2}
                  initial="hidden"
                  variants={{
                    hidden: {
                      opacity: 0,
                      translateY: 24,
                    },
                  }}
                >
                  <p className="text-center font-inter font-medium mb-4">
                    HOW DO YOU SELF CARE?
                  </p>
                </motion.div>

                <div>
                  <motion.div
                    animate={controls}
                    custom={2.4}
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        translateY: 24,
                      },
                    }}
                  >
                    <button
                      onClick={() => {
                        setStage(1);
                        setCare("JOURNALING");
                      }}
                      className=" font-inter uppercase border border-black py-2 px-4 rounded-md w-full mb-2 mx-auto hover:bg-transparent cursor-pointer  hover:text-slate-600 hover:border-slate-600 transition"
                    >
                      JOURNALING
                    </button>
                  </motion.div>

                  <motion.div
                    animate={controls}
                    custom={2.6}
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        translateY: 24,
                      },
                    }}
                  >
                    <button
                      onClick={() => {
                        setStage(1);
                        setCare("HIKING");
                      }}
                      className=" font-inter uppercase border border-black py-2 px-4 rounded-md w-full mb-2 mx-auto hover:bg-transparent cursor-pointer  hover:text-slate-600 hover:border-slate-600 transition"
                    >
                      HIKING
                    </button>
                  </motion.div>
                  <motion.div
                    animate={controls}
                    custom={2.8}
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        translateY: 24,
                      },
                    }}
                  >
                    <button
                      onClick={() => {
                        setStage(1);
                        setCare("LISTENING TO MUSIC");
                      }}
                      className=" font-inter uppercase border border-black py-2 px-4 rounded-md w-full mb-2 mx-auto hover:bg-transparent cursor-pointer  hover:text-slate-600 hover:border-slate-600 transition"
                    >
                      LISTENING TO MUSIC
                    </button>
                  </motion.div>

                  <motion.div
                    animate={controls}
                    custom={3}
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        translateY: 24,
                      },
                    }}
                  >
                    <button
                      onClick={() => {
                        setStage(1);
                        setCare("AROMATHERAPY");
                      }}
                      className=" font-inter uppercase border border-black py-2 px-4 rounded-md w-full mb-2 mx-auto hover:bg-transparent cursor-pointer  hover:text-slate-600 hover:border-slate-600 transition"
                    >
                      AROMATHERAPY
                    </button>
                  </motion.div>

                  <motion.div
                    animate={controls}
                    custom={3.2}
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        translateY: 24,
                      },
                    }}
                  >
                    <button
                      onClick={() => {
                        setStage(1);
                        setCare("GOING TO THE SALON");
                      }}
                      className=" font-inter uppercase border border-black py-2 px-4 rounded-md w-full mb-2 mx-auto hover:bg-transparent cursor-pointer  hover:text-slate-600 hover:border-slate-600 transition"
                    >
                      GOING TO THE SALON
                    </button>
                  </motion.div>
                  <motion.div
                    animate={controls}
                    custom={3.4}
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        translateY: 24,
                      },
                    }}
                  >
                    <button
                      onClick={() => {
                        setStage(1);
                        setCare("CLEANING");
                      }}
                      className=" font-inter uppercase border border-black py-2 px-4 rounded-md w-full mb-2 mx-auto hover:bg-transparent cursor-pointer  hover:text-slate-600 hover:border-slate-600 transition"
                    >
                      CLEANING
                    </button>
                  </motion.div>

                  <motion.div
                    animate={controls}
                    custom={3.6}
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        translateY: 24,
                      },
                    }}
                  >
                    <button
                      onClick={() => {
                        setStage(1);
                        setCare("MEDITATION");
                      }}
                      className=" font-inter uppercase border border-black py-2 px-4 rounded-md w-full mb-2 mx-auto hover:bg-transparent cursor-pointer  hover:text-slate-600 hover:border-slate-600 transition"
                    >
                      MEDITATION
                    </button>
                  </motion.div>
                  <motion.div
                    animate={controls}
                    custom={3.8}
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        translateY: 24,
                      },
                    }}
                  >
                    <div className=" flex align-middle text-sm  text-gray-500 gap-2 my-2">
                      <button
                        onClick={() => {
                          setStage(1);
                        }}
                        className=" font-inter flex gap-1 uppercase  py-2 px-4 rounded-md  mb-2 mx-auto hover:bg-transparent cursor-pointer  hover:text-slate-600 hover:border-slate-600 transition"
                      >
                        SKIP
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4 self-center"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
            {stage == 1 && (
              <div>
                <motion.div
                  animate={controls}
                  custom={0.2}
                  initial="hidden"
                  variants={{
                    hidden: {
                      opacity: 0,
                      translateY: 24,
                    },
                  }}
                >
                  <p className="text-center font-inter italic mb-4">
                    Analyzing your music taste...
                  </p>
                </motion.div>
                <motion.div
                  animate={controls}
                  custom={2}
                  initial="hidden"
                  variants={{
                    hidden: {
                      opacity: 0,
                      translateY: 24,
                    },
                  }}
                >
                  <p className="text-center font-inter italic mb-4">
                    Lighting incense...
                  </p>
                </motion.div>
                <motion.div
                  animate={controls}
                  custom={3}
                  initial="hidden"
                  variants={{
                    hidden: {
                      opacity: 0,
                      translateY: 24,
                    },
                  }}
                >
                  <p className="text-center font-inter italic mb-4">
                    Clearing the energy...
                  </p>
                </motion.div>
                <motion.div
                  animate={controls}
                  custom={4}
                  initial="hidden"
                  variants={{
                    hidden: {
                      opacity: 0,
                      translateY: 24,
                    },
                  }}
                >
                  <p className="text-center font-inter italic mb-4">
                    Creating your personalized self care playlist...
                  </p>
                </motion.div>
              </div>
            )}
            <div className={stage != 3 ? "hidden" : ""}>
              <motion.div
                animate={controls}
                custom={0}
                initial="hidden"
                variants={{
                  hidden: {
                    opacity: 0,
                    translateY: 24,
                  },
                }}
              >
                <p className="text-center font-inter font-medium mb-4">
                  HERE IS YOUR PERSONALIZED SELF CARE PLAYLIST
                </p>
              </motion.div>
              <div className="border border-black">
                <div id="image-download">
                  <img
                    src="/images/self_care_playlist_bg.png"
                    style={{ width: 384, height: 512 }}
                  />

                  <div
                    className=" font-inter font-medium text-xs leading-3 italic mt-20 ml-6"
                    style={{ height: 512, marginTop: -422 }}
                  >
                    {care && (
                      <div>
                        <p>MY SELF CARE:</p>

                        <p>{care}</p>
                      </div>
                    )}
                  </div>
                  <div
                    className="  w-96 h-full flex "
                    style={{ height: 512, marginTop: -602 }}
                  >
                    <div
                      className="w-1/2   ml-40 my-auto font-inter text-xs text-right truncate text-ellipsis	flex flex-col gap-2 "
                      style={{}}
                    >
                      {" "}
                      {playlist &&
                        playlist.playlist.data.tracks.items
                          .slice(0, 11)
                          .map((track, i) => (
                            <p key={i}>
                              {track.track.artists[0].name} -{" "}
                              {track.track.name.split(" (")[0].split(" -")[0]}
                            </p>
                          ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-4 w-full flex flex-col">
                <button
                  onClick={() => {
                    downloadImage();
                    setStage(4);
                  }}
                  className=" font-inter uppercase border border-black py-2 px-4 rounded-md w-full mb-2 mx-auto cursor-pointer bg-black text-white  hover:bg-slate-600 hover:border-slate-600 transition"
                >
                  Share Image
                </button>
                <p className="text-center font-inter italic my-4">
                  Tag @kareenlomax and use the &quot;SELF CARE &quot; sound when
                  sharing on socials.
                </p>
                <div className=" flex w-full content-between justify-between my-4 mx-auto">
                  <div className=" flex align-middle text-sm  text-gray-500 gap-2">
                    <button
                      onClick={() => {
                        setStage(0);
                      }}
                      className=" font-inter flex gap-1 uppercase  py-2 px-4 rounded-md  mb-2 mx-auto hover:bg-transparent cursor-pointer  hover:text-slate-600 hover:border-slate-600 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 self-center"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />
                      </svg>
                      BACK
                    </button>
                  </div>
                  <div className=" flex align-middle text-sm  text-gray-500 gap-2 ">
                    <button
                      onClick={() => {
                        setStage(4);
                      }}
                      className=" font-inter flex gap-1 uppercase  py-2 px-4 rounded-md  mb-2 mx-auto hover:bg-transparent cursor-pointer  hover:text-slate-600 hover:border-slate-600 transition"
                    >
                      SKIP
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 self-center"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* HEADER */}
        {/* <div className="flex w-full  my-4 md:mt-10 -mb-16 md:-mb-10 px-8">
          <div className="m-auto">
            {" "}
            <Image
              src="/images/kareenlogo.png"
              height="283"
              width="400"
              className="mix-blend-darken	"
            ></Image>
          </div>
        </div> */}
        {!session && (
          <div className="m-auto max-w-sm">
            <Login />
          </div>
        )}
        {/* <SocialIcons /> */}
      </div>{" "}
      {session && <Logout />}
      <Footer />
    </div>
  );
}
