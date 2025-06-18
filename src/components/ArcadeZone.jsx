export default function ArcadeZone() {
  return (
    <section className="py-5 bg-dark text-light" id="arcade">
      <div className="container">
        <div className="row align-items-center">
          {/*Image on the left*/}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://thumbs.dreamstime.com/b/retro-arcade-interior-colorful-lights-pinball-machines-vibrant-style-neon-stools-room-full-energy-nostalgia-369896790.jpg"
              alt="Arcade Zone"
              className="img-fluid rounded shadow"
            />
          </div>
          {/*Text on the right*/}
          <div className="col-md-6">
            <h2 className="mb-4">🕹️ Arcade Zone</h2>
            <p>
              Grab a drink and challenge your friends in our retro arcade
              lounge! We’ve got classics like Street Fighter, Mario Kart, and
              Dance Dance Revolution — plus rotating indie games every month.
            </p>
            <p>
              Whether you're solo-queuing or LAN-partying, there's always a game
              on deck.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
