import { Event as IEvent } from "@/utils/interfaces";
import { supabase } from "@/utils/supabase";
import React, { useEffect, useState } from "react";
import EventCard from "../EventCard";

export default function EventsGrid() {
  const [events, setEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("events")
        .select(`*, places(name)`)

      if (error) {
        console.error("Error fetching notes:", error);
        setEvents([]);
        // Handle the error here, e.g., display an error message
        return;
      }

      if (data) {
        setEvents(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-x-10 gap-y-10">
      {events.map((eventD) => (
        <EventCard eventData={eventD} key={eventD.id} />
      ))}
    </div>
  );
}
