function EventCard() {
    return (
      <div className="card w-full bg-zinc-900 shadow-xl">
      <figure><img src="https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Shoes" /></figure>
      <div className="card-body text-white">
        <h2 className="card-title">
          Fiesta
        </h2>
       <ul>
          <li>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </li>
          <li>
              Masaki
          </li>
       </ul>
        <div className="card-actions justify-end">
          <div className="btn btn-primary">Free</div>
        </div>
      </div>
    </div>
    )
  }
  
  export default EventCard