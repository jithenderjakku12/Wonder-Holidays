

export default function FinalCTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="final card">
          <div>
            <h2 className="h2" style={{ marginBottom: 6 }}>Ready to plan your trip?</h2>
            <p className="sub">Send destination + dates on WhatsApp. We’ll share options quickly.</p>
          </div>

          <div className="btnRow">
            <a className="btnPrimary" href="/contact">Contact Us</a>
            <a className="btnOutline" href="https://wa.me/910000000000" target="_blank" rel="noreferrer">
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}