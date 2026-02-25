

const items = [
  { title: "International", sub: "Dubai • Bali • Thailand" },
  { title: "Domestic", sub: "Goa • Kerala • Kashmir" },
  { title: "Honeymoon", sub: "Maldives • Manali • Ooty" },
  { title: "Family", sub: "Singapore • Malaysia • Europe" },
  { title: "Spiritual", sub: "Tirupati • Varanasi • Kedarnath" },
  { title: "Adventure", sub: "Leh • Spiti • Andaman" },
];

export default function DestinationsGrid() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Popular Categories</h2>
        <p className="sub">Choose your travel style and explore curated experiences.</p>

        <div className="grid">
          {items.map((x) => (
            <div className="dest card" key={x.title}>
              <div className="thumb" />
              <div className="destTitle">{x.title}</div>
              <div className="destSub">{x.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}