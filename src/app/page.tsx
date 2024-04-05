"use client";

import { supabase } from "@/utils/supabase";
import { useEffect } from "react";
import RootLayout from "./layout";
import { saria } from "@/utils/font";
import PlaceCard from "@/components/PlaceCard";

export default function Home() {
  const getData = async () => {
    const { data, error } = await supabase.from("places").select("*");

    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

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
                src="/assets/images/icons8-scroll-down-50.png"
                className="w-10 animate-bounce"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-20 py-20 mt-4">
        <div className="mb-10 flex flex-row items-center gap-x-4">
          <div className="text-3xl">&#128293;</div>{" "}
          <div className={`${saria.className} text-white text-4xl`}>
            Trending today
          </div>{" "}
          <div className="text-3xl">&#128293;</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-x-10 gap-y-10">
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
        </div>
      </div>

      <div className="px-5 md:px-20 py-20">
        <div className="mb-10 flex flex-row items-center gap-x-4">
          <div className="text-3xl">&#128293;</div>{" "}
          <div className={`${saria.className} text-white text-4xl`}>
            Upcoming Events
          </div>{" "}
          <div className="text-3xl">&#128293;</div>
        </div>
        <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-x-10 gap-y-10">
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
        </div>
      </div>
    </RootLayout>
  );
}
