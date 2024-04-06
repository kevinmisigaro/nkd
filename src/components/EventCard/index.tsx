import { Event } from "@/utils/interfaces";

function EventCard({ eventData }: { eventData: Event }) {
  return (
    <div className="card w-full bg-zinc-900 shadow-xl">
      <div
        className={`h-[10rem] w-full bg-cover bg-center`}
        style={{
          backgroundImage: `url("${eventData.image}")`,
        }}
      ></div>
      <div className="card-body text-white">
        <h2 className="card-title">{eventData.title}</h2>
        <p>{eventData.places.name}</p>
        <p className="h-20">{eventData.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-primary px-4 py-3">
            {eventData.fee == 0 ? "Free" : eventData.fee}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
