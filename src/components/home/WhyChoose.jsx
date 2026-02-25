

const features = [
  { title: "Trusted Experts", sub: "Planning support end-to-end" },
  { title: "Transparent Pricing", sub: "No hidden charges" },
  { title: "Personalized Tours", sub: "Made for your style" },
  { title: "Verified Hotels", sub: "Quality stays only" },
  { title: "24/7 Support", sub: "Call / WhatsApp anytime" },
  { title: "Seamless Booking", sub: "Quick confirmations" },
];

export default function WhyChoose() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Why Choose Us</h2>
        <p className="sub">We focus on comfort, trust, and smooth travel experiences.</p>

        <div className="featGrid">
          {features.map((f) => (
            <div className="feat card" key={f.title}>
              <div className="featIcon">★</div>
              <div className="featTitle">{f.title}</div>
              <div className="featSub">{f.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}