import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      {/* Background video */}
      <video className="heroVideo" autoPlay muted loop playsInline poster="/hero.jpg">
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Fallback image layer (if video not loaded / optional) */}
      <div className="heroImageFallback" />

      {/* Overlay */}
      <div className="heroOverlay" />

      <div className="container heroInner">
        <div className="heroLeft heroEnter">
          <div className="heroTag">Wonder Holidays</div>

          <h1 className="heroTitle">
            Plan your next trip with <span className="heroAccent">comfort</span> &{" "}
            <span className="heroAccent2">confidence</span>.
          </h1>

          <p className="heroText">
            Customized packages • Verified stays • Transparent pricing • 24/7 support
          </p>

          <div className="heroCtas">
            <Link className="btnPrimary" to="/packages">Explore Packages</Link>
            <Link className="btnOutline" to="/contact">Get Custom Plan</Link>
          </div>

          <div className="heroStats">
            <div className="stat">
              <div className="statNum">500+</div>
              <div className="statLbl">Trips Planned</div>
            </div>
            <div className="stat">
              <div className="statNum">4.8★</div>
              <div className="statLbl">Customer Rating</div>
            </div>
            <div className="stat">
              <div className="statNum">24/7</div>
              <div className="statLbl">Support</div>
            </div>
          </div>
        </div>

        {/* Right side glass card */}
        <div className="heroRight heroEnter2">
          <div className="heroCard">
            <div className="heroCardTitle">Top Requests</div>
            <div className="heroCardList">
              <div className="heroChip">Dubai</div>
              <div className="heroChip">Bali</div>
              <div className="heroChip">Thailand</div>
              <div className="heroChip">Goa</div>
              <div className="heroChip">Kerala</div>
              <div className="heroChip">Kashmir</div>
            </div>

            <div className="heroCardLine" />

            <div className="heroCardMini">
              <div>
                <div className="miniK">Instant Quote</div>
                <div className="miniV">WhatsApp Support</div>
              </div>
              <a
                className="btnPrimary heroWhatsBtn"
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="heroWave" />
    </section>
  );
}