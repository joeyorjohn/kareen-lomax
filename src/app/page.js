import React from "react";
import Image from "next/image";
import Head from "next/head";
import ImageMenu from "../components/ImageMenu";
import Journal from "../components/Journal";
import SocialIcons from "../components/SocialIcons";
import Footer from "../components/Footer";

export default function home() {
  const meta = {
    title: "Kareen Lomax | Official Website",
    description:
      "Official website for Atlanta-raised (LA-based) Alternative R&B artist and songwriter Kareen Lomax. SELF CARE out November 8th. Features with Paul Woolford (Looking For Me), TSHA, Aluna, Diplo.",
    image: "/images/kareen_website.jpg",
    type: "website",
  };
  return (
    <div>
      <Head>
        <title>Kareen Lomax</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://www.kareenlomax.com`} />
        <link rel="canonical" href={`https://www.kareenlomax.com`} />
        <link rel="shortcut icon" href="/favicon.ico"></link>

        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Kareen Lomax" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kareenlomax" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
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
      <div className="p-4">
        {/* HEADER */}
        <div className="flex w-full  mt-4 md:mt-10 -mb-16 md:-mb-10 px-8">
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
        <div className="mt-32">
          <Journal />
        </div>
        <SocialIcons />
        <Footer />
      </div>
    </div>
  );
}
