

export default function AboutSnapshot() {
  return (
    <section className="section">
      <div className="container aboutWrap">
        <div className="aboutMedia card">
          <div className="aboutMediaPh">About Image / Video</div>
        </div>

        <div className="aboutText">
          <h2 className="h2">About Wonder Holidays</h2>
          <p className="sub">
            We plan trips that feel easy: best routes, verified hotels, transparent pricing,
            and human support from start to finish.
          </p>

          <ul className="aboutList">
            <li>Customized itineraries for every budget</li>
            <li>Verified stays and reliable transport</li>
            <li>Fast WhatsApp support & clear communication</li>
          </ul>

          <div className="btnRow">
            <a className="btnPrimary" href="/about">Know More</a>
            <a className="btnOutline" href="/contact">Talk to Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}