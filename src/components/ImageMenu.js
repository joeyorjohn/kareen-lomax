"use client";
import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import Draggable from "./Draggable";
import Droppable from "./Droppable";
import MenuItem from "./MenuItem";
import Link from "next/link";

export default function ImageMenu() {
  const startingPostion = { x: 0, y: 0 };
  const [position, setPosition] = useState(startingPostion);

  const [collisions, setCollisions] = useState();

  return (
    <div className="mt-20">
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex w-full flex-wrap gap-4 gap-y-12 md:gap-12 mx-auto justify-around max-w-6xl">
          <a href="https://kareenlomax.seeker.fm/selfcare">
            <div className="flex flex-col cursor-pointer group w-36 md:w-64 lg:w-96 md:max-w-xs">
              <p className=" font-biro text-2xl mx-auto">SELF CARE</p>
              <MenuItem id="self_care_flower" collisions={collisions} />

              <p className=" font-biro text-2xl mx-auto mt-3 group-hover:underline">
                STREAM
              </p>
            </div>
          </a>
          <a
            href="https://kareenlomax.seeker.fm/selfcarelyric.OWE"
            className="self-end"
          >
            <div className="flex flex-col cursor-pointer self-end group w-36 md:w-64 lg:w-96 md:max-w-xs">
              <p className=" font-biro text-2xl mx-auto text-center">
                SELF CARE LYRIC VIDEO
              </p>

              <MenuItem id="flower" collisions={collisions} />
              <p className=" font-biro text-2xl mx-auto mt-3 group-hover:underline">
                WATCH
              </p>
            </div>{" "}
          </a>

          <div className="flex flex-col cursor-pointer  group w-40 md:w-64 lg:w-96 md:max-w-xs">
            <Link href="/selfcare">
              <MenuItem id="daisy" collisions={collisions} />
              <p className=" font-biro text-2xl mx-auto mt-3 group-hover:underline text-center">
                MY SELF CARE PLAYLIST
              </p>
            </Link>
          </div>

          <div className="flex w-full flex-wrap gap-4 md:gap-12 mx-auto justify-around max-w-6xl">
            <a href="https://www.instagram.com/kareenlomax">
              <div className="flex flex-col cursor-pointer self-center group w-40 md:w-64 lg:w-96 md:max-w-xs">
                {/* <p className=" font-biro text-2xl mx-auto">INSTAGRAM</p> */}
                <MenuItem id="kareen_gif" collisions={collisions} />

                <p className=" font-biro text-2xl mx-auto mt-3 group-hover:underline">
                  INSTAGRAM
                </p>
              </div>
            </a>
            <a href="https://open.spotify.com/artist/0Fb9qTWnjsB90xH3zWr4oa">
              <div className="flex flex-col cursor-pointer  group w-32 md:w-48 lg:w-64 md:max-w-xs">
                {/* <p className=" font-biro text-2xl mx-auto">INSTAGRAM</p> */}
                <MenuItem id="kareen_2" collisions={collisions} />

                <p className=" font-biro text-2xl mx-auto mt-3 group-hover:underline">
                  SPOTIFY
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="w-full relative text-center">
          <Draggable position={position} />
        </div>
        <p className="font-biro text-2xl mt-32 md:mt-40 text-center">
          Drag the watering can to water Kareen&apos;s flowers
        </p>
      </DndContext>
    </div>
  );

  function handleDragEnd(event) {
    const updatedPosition = position;
    position.x += event.delta.x;
    position.y += event.delta.y;
    setPosition(updatedPosition);
    console.log(event);
    console.log(event.collisions[0]);
    if (event.collisions[0]) {
      setCollisions(event.collisions[0].id);
    } else {
      setCollisions("null");
    }
  }
}
