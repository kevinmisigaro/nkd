import { Place } from "@/utils/interfaces";
import { supabase } from "@/utils/supabase";
import React, { useEffect, useState } from "react";
import PlaceCard from "../PlaceCard";

function PlacesGrid() {
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("places")
        .select(`*`)
        .limit(3);

      if (error) {
        console.error("Error fetching notes:", error);
        setPlaces([]);
        // Handle the error here, e.g., display an error message
        return;
      }

      if (data) {
        setPlaces(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-x-10 gap-y-10">
      {places.map((place) => (
        <PlaceCard place={place} key={place.id} />
      ))}
    </div>
  );
}

export default PlacesGrid;
