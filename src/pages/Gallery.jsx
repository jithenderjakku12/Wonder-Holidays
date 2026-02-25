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

export default function Gallery({ openContact = () => {} }) {
  useRevealOnScroll();

  const items = useMemo(
    () => [
      { id: "G-001", cat: "Beach", title: "Golden Sunset", place: "Goa", src: "/images/gallery/g1.jpg" },
      { id: "G-002", cat: "Beach", title: "Blue Water Vibes", place: "Andaman", src: "/images/gallery/g2.jpg" },
      { id: "G-003", cat: "Mountains", title: "Snow Day", place: "Kashmir", src: "/images/gallery/g3.jpg" },
      { id: "G-004", cat: "Mountains", title: "Hill Station Calm", place: "Ooty", src: "/images/gallery/g4.jpg" },
      { id: "G-005", cat: "City", title: "Night Lights", place: "Dubai", src: "/images/gallery/g5.jpg" },
      { id: "G-006", cat: "City", title: "Skyline View", place: "Singapore", src: "/images/gallery/g6.jpg" },
      { id: "G-007", cat: "Nature", title: "Green Escape", place: "Kerala", src: "/images/gallery/g7.jpg" },
      { id: "G-008", cat: "Nature", title: "Backwater Cruise", place: "Alleppey", src: "/images/gallery/g8.jpg" },
      { id: "G-009", cat: "Adventure", title: "Desert Safari", place: "Dubai", src: "/images/gallery/g9.jpg" },
      { id: "G-010", cat: "Adventure", title: "Forest Trails", place: "Wayanad", src: "/images/gallery/g10.jpg" },
      { id: "G-011", cat: "Temple", title: "Heritage Morning", place: "Tamil Nadu", src: "/images/gallery/g11.jpg" },
      { id: "G-012", cat: "Temple", title: "Culture Walk", place: "Hampi", src: "/images/gallery/g12.jpg" },
    ],
    []
  );

  const categories = useMemo(() => {
    const set = new Set(items.map((x) => x.cat));
    return ["All", ...Array.from(set)];
  }, [items]);

  const [activeCat, setActiveCat] = useState("All");
  const [q, setQ] = useState("");
  const [activeIndex, setActiveIndex] = useState(null); // lightbox index

  const filtered = useMemo(() => {
    let list = [...items];

    if (norm(activeCat) !== "all") {
      list = list.filter((x) => norm(x.cat) === norm(activeCat));
    }

    const search = norm(q);
    if (search) {
      list = list.filter((x) =>
        norm(`${x.title} ${x.place} ${x.cat}`).includes(search)
      );
    }

    return list;
  }, [items, activeCat, q]);

  const openAt = (idx) => setActiveIndex(idx);
  const close = () => setActiveIndex(null);

  const next = () => {
    if (activeIndex === null) return;
    setActiveIndex((i) => (i + 1) % filtered.length);
  };

  const prev = () => {
    if (activeIndex === null) return;
    setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);
  };

  // Keyboard controls
  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, filtered.length]);

  const clearAll = () => {
    setActiveCat("All");
    setQ("");
    setActiveIndex(null);
  };

  const activeItem = activeIndex === null ? null : filtered[activeIndex];

  return (
    <div className="galPage">
      {/* HERO */}
      <section className="galHero">
        <div className="galHeroFX" aria-hidden="true">
          <span className="galBlob b1" />
          <span className="galBlob b2" />
          <span className="galBlob b3" />
        </div>

        <div className="galContainer galHeroInner">
          <div className="galPill anim-pop" data-anim>
            Wonder Holidays • Gallery
          </div>

          <h1 className="galTitle anim-up" data-anim style={{ animationDelay: "0.08s" }}>
            Travel Moments & <span className="galAccent">Memories</span>
          </h1>

          <p className="galSub anim-up" data-anim style={{ animationDelay: "0.16s" }}>
            Browse photos by category. Click any photo to view full screen.
          </p>

          <div className="galControls anim-up" data-anim style={{ animationDelay: "0.24s" }}>
            <div className="galSearch">
              <span className="galSearchIcon">⌕</span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search (ex: Goa, Dubai, Mountains)..."
              />
            </div>

            <button className="galBtnPrimary" onClick={openContact}>Get Custom Plan</button>
            <button className="galBtnOutline" onClick={clearAll}>Clear</button>
          </div>

          <div className="galCats" data-anim style={{ animationDelay: "0.30s" }}>
            {categories.map((c) => (
              <button
                key={c}
                className={`galCat ${norm(activeCat) === norm(c) ? "active" : ""}`}
                onClick={() => { setActiveCat(c); setQ(""); }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="galWave" aria-hidden="true" />
      </section>

      {/* GRID */}
      <section className="galSection">
        <div className="galContainer">
          <div className="galRowTop anim-up" data-anim>
            <div>
              <h2 className="galH2">Gallery</h2>
              <p className="galSmall">
                Showing <b>{filtered.length}</b> photos
                {norm(activeCat) !== "all" ? <> in <b>{activeCat}</b></> : null}
                {q.trim() ? <> for <b>“{q.trim()}”</b></> : null}
              </p>
            </div>
          </div>

          <div className="galGrid">
            {filtered.map((it, i) => (
              <button
                key={it.id}
                className="galCard anim-stagger"
                data-anim
                style={{ animationDelay: `${i * 0.05}s` }}
                onClick={() => openAt(i)}
              >
                <div className="galImg" style={{ backgroundImage: `url(${it.src})` }}>
                  <div className="galShade" />
                  <div className="galMeta">
                    <div className="galMetaTitle">{it.title}</div>
                    <div className="galMetaSub">{it.place} • {it.cat}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="galEmpty anim-pop" data-anim>
              No photos found. Try selecting <b>All</b> or clear search.
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      {activeItem && (
        <div className="galLightbox" onClick={close} role="dialog" aria-modal="true">
          <div className="galLbInner" onClick={(e) => e.stopPropagation()}>
            <div className="galLbTop">
              <div className="galLbTitle">{activeItem.title}</div>
              <div className="galLbSub">{activeItem.place} • {activeItem.cat}</div>
              <button className="galClose" onClick={close}>✕</button>
            </div>

            <div className="galLbMedia">
              <img src={activeItem.src} alt={activeItem.title} />
            </div>

            <div className="galLbActions">
              <button className="galNavBtn" onClick={prev}>← Prev</button>
              <div className="galCount">
                {activeIndex + 1} / {filtered.length}
              </div>
              <button className="galNavBtn" onClick={next}>Next →</button>
            </div>

            <div className="galHint">
              Keyboard: ← → to navigate, Esc to close
            </div>
          </div>
        </div>
      )}
    </div>
  );
}