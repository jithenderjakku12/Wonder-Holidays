import { useEffect, useMemo, useState } from "react";


const PACKAGES = [
  { id: "dubai", title: "Dubai 5D/4N", meta: "Dubai • 5D/4N • ★4.8", price: "₹45,999", tag: "Best Seller", img: "/images/dubai.jpg" },
  { id: "bali", title: "Bali 6D/5N", meta: "Bali • 6D/5N • ★4.7", price: "₹58,999", tag: "Couples", img: "/images/bali.jpg" },
  { id: "goa", title: "Goa 4D/3N", meta: "Goa • 4D/3N • ★4.5", price: "₹18,999", tag: "Budget", img: "/images/goa.jpg" },
  { id: "kashmir", title: "Kashmir 6D/5N", meta: "Kashmir • 6D/5N • ★4.6", price: "₹32,999", tag: "Family", img: "/images/kashmir.jpg" },
  { id: "kerala", title: "Kerala 5D/4N", meta: "Kerala • 5D/4N • ★4.6", price: "₹27,999", tag: "Nature", img: "/images/kerala.jpg" },
  { id: "thailand", title: "Thailand 6D/5N", meta: "Thailand • 6D/5N • ★4.7", price: "₹54,999", tag: "Island", img: "/images/thailand.jpg" },
];

const BLOGS = [
  { id: "b1", title: "Best time to visit Dubai", date: "Feb 2026", img: "/images/dubai.jpg", text: "Weather, festivals, and a quick 4-day plan." },
  { id: "b2", title: "Budget travel tips for Goa", date: "Jan 2026", img: "/images/goa.jpg", text: "Save money without missing the fun." },
  { id: "b3", title: "Bali itinerary for couples", date: "Dec 2025", img: "/images/bali.jpg", text: "Romantic stays, beaches, and experiences." },
];

const GALLERY = Array.from({ length: 8 }).map((_, i) => ({
  id: `g${i + 1}`,
  src: `/images/gallery${i + 1}.jpg`,
}));

export default function Home() {
  const [lightbox, setLightbox] = useState(null);

  // ✅ Scroll reveal animation
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const onPlannerSubmit = (e) => {
    e.preventDefault();
    const el = document.getElementById("packages");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openContact = () => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openPackages = () => {
    const el = document.getElementById("packages");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="homePage">
      {/* HERO */}
      <section id="top" className="hero">
        <video className="heroVideo" autoPlay muted loop playsInline poster="/hero.jpg">
          <source src="../../public/video/TRAVEL.mp4" type="video/mp4" />
        </video>

        <div className="heroImageFallback" />
        <div className="heroOverlay" />
        {/* TRAVEL ANIMATION LAYER */}
<div className="travelFX" aria-hidden="true">
  <div className="plane" />
  <div className="bus" />
  <div className="train" />
  <div className="cloud c1" />
  <div className="cloud c2" />
  <div className="cloud c3" />
</div>

        <div className="container heroInner">
          <div className="heroLeft heroEnter">
            <div className="heroTag">Customized Tours • Best Deals • Trusted Service</div>

            <h1 className="heroTitle">
              Explore the world with <span className="accent">Wonder Holidays</span>
            </h1>

            <p className="heroText">
              Trips that feel easy — verified stays, transparent pricing, and 24/7 WhatsApp support.
            </p>

            <div className="heroCtasRow">
              <button className="btnPrimary" onClick={openPackages}>View Packages</button>
              <button className="btnOutline" onClick={openContact}>Get Custom Plan</button>
            </div>

            <div className="heroStats">
              <div className="stat"><div className="statNum">500+</div><div className="statLbl">Trips Planned</div></div>
              <div className="stat"><div className="statNum">4.8★</div><div className="statLbl">Customer Rating</div></div>
              <div className="stat"><div className="statNum">24/7</div><div className="statLbl">Support</div></div>
            </div>
          </div>

          <div className="heroRight heroEnter2">
            <div className="glassCard">
              <div className="glassTitle">Popular Picks</div>
              <div className="chips">
                <span className="chip">Dubai</span>
                <span className="chip">Bali</span>
                <span className="chip">Thailand</span>
                <span className="chip">Goa</span>
                <span className="chip">Kerala</span>
                <span className="chip">Kashmir</span>
              </div>

              <div className="glassLine" />

              <div className="glassBottom">
                <div>
                  <div className="miniK">Instant Quote</div>
                  <div className="miniV">WhatsApp Support</div>
                </div>
                <a className="btnPrimary" href="https://wa.me/910000000000" target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="heroWave" />
      </section>

      {/* TRAVEL PLANNER */}
      <section className="section" data-reveal>
        <div className="container">
          <form className="planner card" onSubmit={onPlannerSubmit}>
            <div className="field">
              <label>Destination</label>
              <input placeholder="Ex: Dubai, Bali, Goa..." />
            </div>

            <div className="field">
              <label>Travel Date</label>
              <input type="date" />
            </div>

            <div className="field">
              <label>Travelers</label>
              <select><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option></select>
            </div>

            <div className="field">
              <label>Budget</label>
              <select><option>Any</option><option>Below ₹25k</option><option>₹25k - ₹60k</option><option>₹60k - ₹1.2L</option><option>₹1.2L+</option></select>
            </div>

            <button className="plannerBtn" type="submit">Search</button>
          </form>
        </div>
      </section>

      {/* POPULAR CATEGORIES */}
      <section className="section" data-reveal>
        <div className="container">
          <div className="rowTop">
            <div>
              <h2 className="h2">Popular Categories</h2>
              <p className="sub">Choose your travel style and explore curated experiences.</p>
            </div>
            <div>
              <button className="btnOutline" onClick={openPackages}>Explore All</button>
            </div>
          </div>

          <div className="grid3">
            {[
              ["International", "Dubai • Bali • Thailand"],
              ["Domestic", "Goa • Kerala • Kashmir"],
              ["Honeymoon", "Maldives • Bali • Manali"],
              ["Family", "Singapore • Malaysia • Europe"],
              ["Spiritual", "Tirupati • Varanasi • Kedarnath"],
              ["Adventure", "Leh • Spiti • Andaman"],
            ].map(([t, s]) => (
              <div className="catCard card" key={t}>
                <div className="catImg" />
                <div className="catTitle">{t}</div>
                <div className="catSub">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section id="about" className="section" data-reveal>
        <div className="container aboutWrap">
          <div className="card aboutMedia">
            <div className="aboutPh">About Image / Video</div>
          </div>

          <div className="aboutText">
            <h2 className="h2">Your Trusted Travel Partner</h2>
            <p className="sub">
              We plan trips that feel easy: best routes, verified hotels, transparent pricing,
              and human support from start to finish.
            </p>

            <ul className="bullets">
              <li>Verified stays & reliable transport</li>
              <li>Customized itineraries for every budget</li>
              <li>Fast WhatsApp support & clear communication</li>
            </ul>

            <div className="btnRow">
              <button className="btnPrimary" onClick={openContact}>Talk to Us</button>
              <button className="btnOutline" onClick={openPackages}>View Packages</button>
            </div>
          </div>
        </div>
      </section>

      {/* PROMOTION / DEAL */}
      <section className="section" data-reveal>
        <div className="container">
          <div className="promo card">
            <div>
              <h2 className="h2" style={{ marginBottom: 6 }}>Your Journey. Your Style.</h2>
              <p className="sub">Tell us destination + budget — we’ll build a personalized plan.</p>
              <div className="btnRow">
                <button className="btnPrimary" onClick={openContact}>Get Custom Plan</button>
                <button className="btnOutline" onClick={openPackages}>View Packages</button>
              </div>
            </div>
            <div className="promoRight">
              <div className="pill">✅ Verified Stays</div>
              <div className="pill">✅ Transparent Pricing</div>
              <div className="pill">✅ Local Support</div>
              <div className="pill">✅ Seamless Booking</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section" data-reveal>
        <div className="container">
          <h2 className="h2">Why Choose Us</h2>
          <p className="sub1">We focus on comfort, trust, and smooth travel experiences.</p>

          <div className="grid3">
            {[
              ["Trusted Experts", "Planning support end-to-end"],
              ["Personalized Tours", "Made for your style"],
              ["Verified Hotels", "Quality stays only"],
              ["Transparent Pricing", "No hidden charges"],
              ["24/7 Support", "Call / WhatsApp anytime"],
              ["Easy Booking", "Quick confirmations"],
            ].map(([t, s]) => (
              <div className="feat card" key={t}>
                <div className="featIcon">★</div>
                <div className="featTitle">{t}</div>
                <div className="featSub">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="section" data-reveal>
        <div className="container">
          <div className="rowTop">
            <div>
              <h2 className="h2">Featured Packages</h2>
              <p className="sub">Top picks that customers love right now.</p>
            </div>
            <button className="btnOutline" onClick={openContact}>Need Custom Package?</button>
          </div>

          <div className="pkgGrid">
            {PACKAGES.map((p) => (
              <div className="pkg card" key={p.id}>
                <div className="pkgImg" style={{ backgroundImage: `url(${p.img})` }}>
                  <div className="pkgTag">{p.tag}</div>
                </div>
                <div className="pkgBody">
                  <div className="pkgTitle">{p.title}</div>
                  <div className="pkgMeta">{p.meta}</div>
                  <div className="pkgLine" />
                  <div className="pkgBottom">
                    <div className="pkgPrice">{p.price} <span>starting</span></div>
                    <button className="btnPrimary" onClick={openContact}>Enquire</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" data-reveal>
        <div className="container">
          <h2 className="h2">Testimonials</h2>
          <p className="sub1">What customers say about Wonder Holidays.</p>

          <div className="grid3">
            {[
              ["Ravi", 5, "Trip was smooth, hotels were great. WhatsApp support was instant."],
              ["Sneha", 5, "They planned our honeymoon perfectly. Transparent costs and itinerary."],
              ["Vikram", 4, "Great experience. Quick booking and clean communication."],
            ].map(([name, stars, text]) => (
              <div className="rev card" key={name}>
                <div className="revStars">{"★".repeat(stars)}{"☆".repeat(5 - stars)}</div>
                <div className="revText">“{text}”</div>
                <div className="revName">— {name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section" data-reveal>
        <div className="container">
          <div className="rowTop1">
            <div>
              <h2 className="h2">Gallery</h2>
              <p className="sub1">A glimpse of memories we helped create.</p>
            </div>
          </div>

          <div className="galleryGrid">
            {GALLERY.map((g) => (
              <button className="galItem card" key={g.id} onClick={() => setLightbox(g.src)}>
                <div className="galImg" style={{ backgroundImage: `url(${g.src})` }} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="section" data-reveal>
        <div className="container">
          <h2 className="h2">Travel Blog</h2>
          <p className="sub1">Guides, tips, and destination inspiration.</p>

          <div className="blogGrid">
            {BLOGS.map((b) => (
              <div className="blogCard card" key={b.id}>
                <div className="blogImg" style={{ backgroundImage: `url(${b.img})` }} />
                <div className="blogBody">
                  <div className="blogDate">{b.date}</div>
                  <div className="blogTitle">{b.title}</div>
                  <div className="blogText">{b.text}</div>
                  <button className="blogBtn" onClick={openContact}>Get Plan →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section" data-reveal>
        <div className="container contactGrid">
          <div className="card contactCard">
            <h2 className="h2">Contact Us</h2>
            <p className="sub">Send your plan — we’ll share options quickly.</p>

            <form className="contactForm" onSubmit={(e) => e.preventDefault()}>
              <input placeholder="Your Name" required />
              <input placeholder="Phone / WhatsApp" required />
              <input placeholder="Destination (Ex: Bali)" />
              <textarea placeholder="Message" rows={4} />
              <button className="btnPrimary" type="submit">Submit</button>
            </form>

            <div className="contactBtns">
              <a className="btnOutline" href="tel:+910000000000">Call Now</a>
              <a className="btnPrimary" href="https://wa.me/910000000000" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>

          <div className="card contactCard">
            <h2 className="h2">Location</h2>
            <p className="sub">Hyderabad (placeholder) — update later.</p>
            <div className="mapWrap">
              <iframe
                title="map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Hyderabad&output=embed"
              />
            </div>
            <div className="info">
              <div><b>Email:</b> info@wonderholidays.com</div>
              <div><b>Phone:</b> +91 00000 00000</div>
              <div><b>Address:</b> Hyderabad, Telangana</div>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightboxInner" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox} alt="Preview" />
          </div>
        </div>
      )}

      {/* Mini footer note inside home (Footer component separate anyway) */}
      <div className="miniNote">© {year} Wonder Holidays</div>
    </div>
  );
}