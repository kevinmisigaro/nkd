"use client";

import RootLayout from "./layout";
import { saria } from "@/utils/font";
import { animateScroll as scroll } from "react-scroll";
import Footer from "@/components/Footer";
import EventsGrid from "@/components/EventsGrid";
import PlacesGrid from "@/components/PlacesGrid";

export default function Home() {
  const scrollToId = () => {
    const element = document.getElementById("trending");
    if (element) {
      const offset = element.offsetTop;
      scroll.scrollTo(offset);
    }
  };

  return (
    <RootLayout>
      <div
        className="hero h-[70vh]"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className={`mb-5 text-5xl font-semibold ${saria.className}`}>
              Know where the party is
            </h1>
            <p className="mt-10">
              See different locations and events with prices
            </p>

            <div className="flex flex-row justify-center mt-20">
              <img
                onClick={scrollToId}
                src="/assets/images/icons8-scroll-down-50.png"
                className="w-10 animate-bounce cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-20 pt-20 pb-5 mt-4" id="trending">
        <div className="mb-10 flex flex-row items-center gap-x-4">
          <div className="text-3xl">&#128293;</div>{" "}
          <div className={`${saria.className} text-white text-4xl`}>
            Trending today
          </div>{" "}
          <div className="text-3xl">&#128293;</div>
        </div>

        <EventsGrid />
      </div>

      <div className="px-5 md:px-20 pt-20 pb-5">
        <div className="mb-10 flex flex-row items-center gap-x-4">
          <div className="text-3xl">&#128293;</div>{" "}
          <div className={`${saria.className} text-white text-4xl`}>
            Top Spots
          </div>{" "}
          <div className="text-3xl">&#128293;</div>
        </div>
        <PlacesGrid />
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </RootLayout>
  );
}
