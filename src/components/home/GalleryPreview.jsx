
export default function GalleryPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="rowTop">
          <div>
            <h2 className="h2">Gallery</h2>
            <p className="sub">A glimpse of memories we helped create.</p>
          </div>
          <a className="btnOutline" href="/gallery">View Full Gallery</a>
        </div>

        <div className="galGrid">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="gal card" key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}