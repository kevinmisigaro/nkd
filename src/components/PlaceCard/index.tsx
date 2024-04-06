import { Place } from "@/utils/interfaces";

function PlaceCard({ place }: { place: Place }) {
  return (
    <div className="card w-full bg-zinc-900 shadow-xl">
      <div
        className={`h-[10rem] w-full bg-cover bg-center`}
        style={{
          backgroundImage: `url("${place.image}")`,
        }}
      ></div>
      <div className="card-body text-white">
        <h2 className="card-title">{place.name}</h2>
        <p>{place.description}</p>
        <div className="card-actions justify-end">
          <div className="btn btn-primary">Free</div>
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;
