
const posts = [
  { title: "Best time to visit Dubai", date: "Feb 2026" },
  { title: "Budget travel tips for Goa", date: "Jan 2026" },
  { title: "Bali itinerary for couples", date: "Dec 2025" },
];

export default function BlogPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="rowTop">
          <div>
            <h2 className="h2">Travel Blog</h2>
            <p className="sub">Guides, tips, and destination inspiration.</p>
          </div>
          <a className="btnOutline" href="/blog">View All</a>
        </div>

        <div className="blogGrid">
          {posts.map((p) => (
            <div className="post card" key={p.title}>
              <div className="postImg" />
              <div className="postBody">
                <div className="postDate">{p.date}</div>
                <div className="postTitle">{p.title}</div>
                <a className="postLink" href="/blog">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}