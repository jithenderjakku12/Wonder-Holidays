

export default function PromotionBlock() {
  return (
    <section className="section">
      <div className="container promo card">
        <div className="promoLeft">
          <h2 className="h2" style={{ marginBottom: 6 }}>Your Journey. Your Style.</h2>
          <p className="sub">
            Tell us your destination and budget — we’ll build a personalized plan for you.
          </p>
          <div className="btnRow">
            <a className="btnPrimary" href="/contact">Get Custom Plan</a>
            <a className="btnOutline" href="/packages">View Packages</a>
          </div>
        </div>

        <div className="promoRight">
          <div className="pill">✅ Verified Stays</div>
          <div className="pill">✅ Transparent Pricing</div>
          <div className="pill">✅ Local Support</div>
          <div className="pill">✅ Best Routes</div>
        </div>
      </div>
    </section>
  );
}