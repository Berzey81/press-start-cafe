const menuItems = [
  {
    name: "Espresso Shot +1",
    description: "A power-up in every sip. No cheat codes needed.",
    price: "$3.50",
  },
  {
    name: "Mana Mocha",
    description: "Chocolatey energy boost for long raids or study grinds.",
    price: "$5.00",
  },
  {
    name: "Health Potion Latte",
    description: "Sweet vanilla + cinnamon magic to heal your mood.",
    price: "$4.75",
  },
  {
    name: 'Pixel Pancakes',
    description: '8-bit stack with syrup armor. Available all day!',
    price: '$6.25',
  },
  {
    name: 'Lag-Free Lemonade',
    description: 'Crisp citrus energy for lagless afternoons.',
    price: '$3.00',
  },
  {
    name: 'Respawn Roast',
    description: 'Signature house blend for your next life (or meeting).',
    price: '$4.00',
  },
];

export default function Menu() {
  return (
    <section className="py-5 bg-light text-dark" id="menu">
      <div className="container">
        <h2 className="text-center mb-4">🎮 Featured Menu</h2>
        <div className="row">
          {menuItems.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
                <div className="card-footer">
                  <strong>{item.price}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
