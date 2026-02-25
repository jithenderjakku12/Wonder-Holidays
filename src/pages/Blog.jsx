import React, { useEffect, useMemo, useState } from "react";


const norm = (v) => String(v ?? "").trim().toLowerCase();

function useRevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-anim]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show");
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Blog({ openContact = () => {} }) {
  useRevealOnScroll();

  const posts = useMemo(
    () => [
      {
        id: "B-001",
        tag: "Planning",
        date: "Feb 2026",
        title: "Family Trip Planning: A Simple 30-Min Checklist",
        excerpt:
          "Destination, dates, people count, budget and hotel tier — plan everything without stress in 30 minutes.",
        cover: "/images/blog/blog1.jpg",
        readTime: "4 min read",
        author: "Wonder Holidays",
      },
      {
        id: "B-002",
        tag: "Budget",
        date: "Feb 2026",
        title: "Budget Split: Stay vs Travel vs Activities (Realistic Guide)",
        excerpt:
          "A practical cost breakdown and tips to save money without reducing comfort (best for families).",
        cover: "/images/blog/blog2.jpg",
        readTime: "6 min read",
        author: "Wonder Holidays",
      },
      {
        id: "B-003",
        tag: "Hotels",
        date: "Feb 2026",
        title: "Hotel Selection: 7 Things We Verify Before Booking",
        excerpt:
          "Location, cleanliness, reviews, breakfast, safety, cancellation policy and family-friendly rooms.",
        cover: "/images/blog/blog3.jpg",
        readTime: "5 min read",
        author: "Wonder Holidays",
      },
      {
        id: "B-004",
        tag: "Tips",
        date: "Feb 2026",
        title: "Packing List for Kids + Seniors (No Overpacking)",
        excerpt:
          "Must-have items: meds, documents, snacks, comfort, chargers and weather-ready clothing.",
        cover: "/images/blog/blog4.jpg",
        readTime: "4 min read",
        author: "Wonder Holidays",
      },
      {
        id: "B-005",
        tag: "Transport",
        date: "Feb 2026",
        title: "Smooth Transfers: Avoid Common Cab & Timing Issues",
        excerpt:
          "Avoid delays with simple rules: buffer time, pickup location, luggage, and clear communication.",
        cover: "/images/blog/blog5.jpg",
        readTime: "5 min read",
        author: "Wonder Holidays",
      },
      {
        id: "B-006",
        tag: "Destinations",
        date: "Feb 2026",
        title: "Best Easy Destinations for First-Time Family Travelers",
        excerpt:
          "Destinations that are safe, simple, and low-stress with minimal transfers and family-friendly stays.",
        cover: "/images/blog/blog6.jpg",
        readTime: "5 min read",
        author: "Wonder Holidays",
      },
    ],
    []
  );

  // ✅ tags USED in JSX so ESLint error gone
  const tags = useMemo(() => {
    const set = new Set(posts.map((p) => p.tag));
    return ["All", ...Array.from(set)];
  }, [posts]);

  const [activeTag, setActiveTag] = useState("All");
  const [q, setQ] = useState("");
  const [sortBy, setSortBy] = useState("Latest");
  const [activePost, setActivePost] = useState(null);

  // ✅ Filter always works
  const filtered = useMemo(() => {
    let list = [...posts];

    if (norm(activeTag) !== "all") {
      list = list.filter((p) => norm(p.tag) === norm(activeTag));
    }

    const search = norm(q);
    if (search) {
      list = list.filter((p) =>
        norm(`${p.title} ${p.excerpt} ${p.tag} ${p.author}`).includes(search)
      );
    }

    if (sortBy === "A-Z") {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      list.sort((a, b) => String(b.id).localeCompare(String(a.id)));
    }

    return list;
  }, [posts, activeTag, q, sortBy]);

  // ✅ onTagClick USED in JSX so ESLint error gone
  const onTagClick = (t) => {
    setActiveTag(t);
    setQ(""); // IMPORTANT: clear search when switching tags
    setActivePost(null);
  };

  const clearAll = () => {
    setActiveTag("All");
    setQ("");
    setSortBy("Latest");
    setActivePost(null);
  };

  return (
    <div className="blogPage">
      {/* HERO */}
      <section className="blogHero">
        <div className="blogHeroFX" aria-hidden="true">
          <span className="blob b1" />
          <span className="blob b2" />
          <span className="blob b3" />
        </div>

        <div className="blogContainer blogHeroInner">
          <div className="pill anim-pop" data-anim>
            Wonder Holidays • Blog
          </div>

          <h1 className="heroTitle anim-up" data-anim style={{ animationDelay: "0.08s" }}>
            Travel Tips & Guides for <span className="accent">Families</span>
          </h1>

          <p className="heroSub anim-up" data-anim style={{ animationDelay: "0.16s" }}>
            Planning, budget, hotels, packing and destination ideas — easy and practical.
          </p>

          {/* Controls */}
          <div className="controls anim-up" data-anim style={{ animationDelay: "0.24s" }}>
            <div className="searchBox">
              <span className="searchIcon">⌕</span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search posts (ex: budget, hotel, kids)..."
              />
            </div>

            <select
              className="sortSelect"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="Latest">Sort: Latest</option>
              <option value="A-Z">Sort: A-Z</option>
            </select>

            <button className="btnPrimary" onClick={openContact}>
              Contact Us
            </button>

            <button className="btnOutline" onClick={clearAll}>
              Clear
            </button>
          </div>

          {/* ✅ TAGS UI (now tags is USED) */}
          <div className="tagsRow" data-anim style={{ animationDelay: "0.30s" }}>
            {tags.map((t) => (
              <button
                key={t}
                className={`tagBtn ${norm(activeTag) === norm(t) ? "active" : ""}`}
                onClick={() => onTagClick(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="heroWave" aria-hidden="true" />
        </div>
      </section>

      {/* GRID */}
      <section className="blogSection">
        <div className="blogContainer">
          <div className="rowTop anim-up" data-anim>
            <div>
              <h2 className="h2">Latest Posts</h2>
              <p className="sub">
                Showing <b>{filtered.length}</b> posts
              </p>
            </div>
          </div>

          <div className="grid">
            {filtered.map((p, i) => (
              <button
                key={p.id}
                className="card anim-stagger"
                data-anim
                style={{ animationDelay: `${i * 0.06}s` }}
                onClick={() => setActivePost(p)}
              >
                <div className="cover" style={{ backgroundImage: `url(${p.cover})` }}>
                  <div className="coverOverlay" />
                  <div className="topMeta">
                    <span className="badge">{p.tag}</span>
                    <span className="readTime">{p.readTime}</span>
                  </div>
                </div>

                <div className="body">
                  <div className="dateRow">
                    <span className="date">{p.date}</span>
                    <span className="dot">•</span>
                    <span className="author">{p.author}</span>
                  </div>

                  <div className="title">{p.title}</div>
                  <div className="excerpt">{p.excerpt}</div>

                  <div className="line" />
                  <div className="bottomRow">
                    <span className="readMore">Read Preview →</span>
                    <span className="miniId">{p.id}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="empty anim-pop" data-anim>
              No posts found. Click <b>Clear</b>.
            </div>
          )}
        </div>
      </section>

      {/* MODAL */}
      {activePost && (
        <div className="modal" onClick={() => setActivePost(null)}>
          <div className="modalCard" onClick={(e) => e.stopPropagation()}>
            <div className="modalCover" style={{ backgroundImage: `url(${activePost.cover})` }}>
              <div className="modalOverlay" />
              <div className="modalTop">
                <span className="badge">{activePost.tag}</span>
                <button className="closeBtn" onClick={() => setActivePost(null)}>
                  ✕
                </button>
              </div>

              <div className="modalTitle">{activePost.title}</div>
              <div className="modalMeta">
                {activePost.date} • {activePost.readTime} • {activePost.author}
              </div>
            </div>

            <div className="modalBody">
              <p>{activePost.excerpt}</p>

              <div className="modalBtns">
                <button className="btnPrimary" onClick={openContact}>
                  Plan My Trip
                </button>
                <button className="btnOutline" onClick={() => setActivePost(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}