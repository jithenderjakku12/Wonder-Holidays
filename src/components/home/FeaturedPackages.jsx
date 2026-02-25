import { Link } from "react-router-dom";

const packs = [
  { name: "Dubai 5D/4N", price: "₹45,999", tag: "Best Seller" },
  { name: "Bali 6D/5N", price: "₹58,999", tag: "Couples" },
  { name: "Goa 4D/3N", price: "₹18,999", tag: "Budget" },
  { name: "Kashmir 6D/5N", price: "₹32,999", tag: "Family" },
];

export default function FeaturedPackages() {
  return (
    <section className="section">
      <div className="container">
        <div className="rowTop">
          <div>
            <h2 className="h2">Featured Packages</h2>
            <p className="sub">Top picks that customers love right now.</p>
          </div>

          <Link className="btnOutline" to="/packages">
            View All
          </Link>
        </div>

        <div className="packGrid">
          {packs.map((p) => (
            <div className="pack" key={p.name}>
              <div className="packImg">
                <div className="packTag">{p.tag}</div>
              </div>

              <div className="packBody">
                <div className="packTitle">{p.name}</div>

                <div className="packMeta">
                  <span className="packPrice">{p.price}</span>
                  <Link className="packLink" to="/contact">
                    Enquire
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}