import React from "react";
import Image from "next/image";

import ImageMenu from "../components/ImageMenu";
import Journal from "../components/Journal";
import SocialIcons from "@/components/SocialIcons";

export default function home() {
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
      <div className="page-header"></div>
      <div className="p-4">
        {/* HEADER */}
        <div className="flex w-full  mt-10 -mb-10">
          <div className="m-auto">
            {" "}
            <Image
              src="/images/kareenlogo.png"
              height="283"
              width="400"
              className="mix-blend-darken	"
            ></Image>
          </div>
        </div>
        <div className="  ">
          <ImageMenu />
        </div>
        <div className="mt-20">
          <Journal />
        </div>
        <SocialIcons />
      </div>
    </div>
  );
}
