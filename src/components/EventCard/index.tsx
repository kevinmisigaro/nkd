function PlaceCard() {
    return (
      <div className="card w-full bg-zinc-900 shadow-xl">
      <figure><img src="https://images.pexels.com/photos/1154189/pexels-photo-1154189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Shoes" /></figure>
      <div className="card-body text-white">
        <h2 className="card-title">Wavuvi Kempu</h2>
       <ul>
          <li>
             Night club, lounge, events
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
  
  export default PlaceCard