
const reviews = [
  { name: "Ravi", text: "Trip was smooth, hotels were great. Support was instant on WhatsApp.", stars: 5 },
  { name: "Sneha", text: "They planned our honeymoon perfectly. Transparent costs and good itinerary.", stars: 5 },
  { name: "Vikram", text: "Great experience. Quick booking and clean communication.", stars: 4 },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Testimonials</h2>
        <p className="sub">What customers say about Wonder Holidays.</p>

        <div className="revGrid">
          {reviews.map((r) => (
            <div className="rev card" key={r.name}>
              <div className="revStars">{"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}</div>
              <div className="revText">“{r.text}”</div>
              <div className="revName">— {r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}