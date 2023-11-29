import React from "react";
import { motion, useAnimation } from "framer-motion";

export default function CareSelection() {
  const controls = useAnimation();

  useEffect(() => {
    // if (props.currentSlide == props.index) {

    if (session) {
      console.log("initial functions");
    }
  }, [session]);

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
    // } else {
    //   introcontrols.start("hidden");

    //   controls.start("hidden");
    // }
  }, [stage]);
  return (
    <div className="m-auto max-w-sm">
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
        <p className="text-center">
          “SELF CARE means to me putting everything I got on pause and loving
          myself for a moment. My go to practices include Journaling, a walk in
          nature, and forgiving the past through music.” – Kareen Lomax
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
        <p className="text-center">How do you SELF CARE?</p>
      </motion.div>

      <div>
        <button
          onClick={() => {
            setStage(1);
            setCare("JOURNALING");
          }}
          className=" font-inter uppercase border border-black py-2 px-4 rounded-md w-full mb-2 mx-auto hover:bg-transparent cursor-pointer  hover:text-slate-600 hover:border-slate-600 transition"
        >
          JOURNALING
        </button>
        <button
          onClick={() => {
            setStage(1);
            setCare("JOURNALING");
          }}
          className=" font-inter uppercase border border-black py-2 px-4 rounded-md w-full mb-2 mx-auto hover:bg-transparent cursor-pointer  hover:text-slate-600 hover:border-slate-600 transition"
        >
          HIKING
        </button>
        <button
          onClick={() => {
            setStage(1);
            setCare("JOURNALING");
          }}
          className=" font-inter uppercase border border-black py-2 px-4 rounded-md w-full mb-2 mx-auto hover:bg-transparent cursor-pointer  hover:text-slate-600 hover:border-slate-600 transition"
        >
          LISTENING TO MUSIC
        </button>
        <button
          onClick={() => {
            setStage(1);
            setCare("JOURNALING");
          }}
          className=" font-inter uppercase border border-black py-2 px-4 rounded-md w-full mb-2 mx-auto hover:bg-transparent cursor-pointer  hover:text-slate-600 hover:border-slate-600 transition"
        >
          AROMATHERAPY
        </button>
        <button
          onClick={() => {
            setStage(1);
            setCare("JOURNALING");
          }}
          className=" font-inter uppercase border border-black py-2 px-4 rounded-md w-full mb-2 mx-auto hover:bg-transparent cursor-pointer  hover:text-slate-600 hover:border-slate-600 transition"
        >
          GOING TO THE SALON
        </button>
        <button
          onClick={() => {
            setStage(1);
            setCare("JOURNALING");
          }}
          className=" font-inter uppercase border border-black py-2 px-4 rounded-md w-full mb-2 mx-auto hover:bg-transparent cursor-pointer  hover:text-slate-600 hover:border-slate-600 transition"
        >
          CLEANING
        </button>
        <button
          onClick={() => {
            setStage(1);
            setCare("JOURNALING");
          }}
          className=" font-inter uppercase border border-black py-2 px-4 rounded-md w-full mb-2 mx-auto hover:bg-transparent cursor-pointer  hover:text-slate-600 hover:border-slate-600 transition"
        >
          MEDITATION
        </button>
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
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4 self-center"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
