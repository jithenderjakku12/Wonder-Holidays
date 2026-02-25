import React, { useEffect, useMemo, useState } from "react";


function useRevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Packages({ openContact = () => {}, openPackages = () => {} }) {
  useRevealOnScroll();

  const [query, setQuery] = useState("all");
  const [active, setActive] = useState(null); // modal item

  const groups = useMemo(
    () => [
      {
        title: "Simple & Professional",
        subtitle: "Clear itinerary. Reliable stays. Smooth transfers. Perfect for families.",
        items: [
          {
            name: "Packages",
            hero: "All-in-one travel bundle",
            desc:
              "Complete holiday plan with stay, transfers, and sightseeing — we handle end-to-end so your family can relax.",
            includes: ["Hotel/Resort options", "Transfers", "Sightseeing plan", "Support & coordination"],
            bestFor: "Families, first-time travellers, stress-free planning",
            highlight: "Most popular",
          },
          {
            name: "Tour Packages",
            hero: "Day-wise tour plan",
            desc:
              "Structured itinerary with the right pacing — covers main attractions without rushing.",
            includes: ["Day-wise itinerary", "Top attractions", "Route optimization", "Optional guide"],
            bestFor: "Families, seniors, group tours",
            highlight: "Easy itinerary",
          },
          {
            name: "Holiday Packages",
            hero: "Comfort-first holiday",
            desc:
              "Focus on comfort, kid-friendly stays, and flexible time — a true family holiday.",
            includes: ["Family stays", "Comfort transfers", "Flexible schedule", "Verified vendors"],
            bestFor: "Families with kids, parents",
            highlight: "Family-friendly",
          },
          {
            name: "Travel Packages",
            hero: "Domestic + International",
            desc:
              "Multiple hotel tiers and inclusions — choose value or premium comfort based on budget.",
            includes: ["Destination options", "Hotel tiers", "Flexible add-ons", "Support"],
            bestFor: "All travellers (family/couple/group)",
            highlight: "All budgets",
          },
          {
            name: "Trips",
            hero: "Short & long trips",
            desc:
              "Weekend plans to week-long vacations — quick booking, quick customization.",
            includes: ["2–7 day plans", "Simple route", "Fast booking", "Easy changes"],
            bestFor: "Working families, short breaks",
            highlight: "Quick planning",
          },
        ],
      },
      {
        title: "More Attractive (Marketing feel)",
        subtitle: "Best value options with seasonal savings and customer favourites.",
        items: [
          {
            name: "Best Deals",
            hero: "Value + savings",
            desc:
              "Budget-friendly options with smart inclusions — ideal for family travel without overspending.",
            includes: ["Best-value stays", "Popular spots", "Good inclusions", "Budget control"],
            bestFor: "Families who want value",
            highlight: "Save more",
          },
          {
            name: "Top Packages",
            hero: "Most booked",
            desc:
              "Tried-and-tested itineraries — safe, predictable, and loved by travellers.",
            includes: ["Customer-favourite routes", "Reliable stays", "Smooth transfers", "Balanced time"],
            bestFor: "Families, first-time destinations",
            highlight: "Bestseller",
          },
          {
            name: "Featured Trips",
            hero: "Handpicked highlights",
            desc:
              "Great balance of relaxation + exploration with photo spots and top experiences.",
            includes: ["Highlights list", "Experience add-ons", "Good pacing", "Photo moments"],
            bestFor: "Families + couples",
            highlight: "Curated",
          },
          {
            name: "Holiday Deals",
            hero: "Seasonal offers",
            desc:
              "Festival/summer/winter offers — limited time pricing and combos.",
            includes: ["Seasonal pricing", "Festival specials", "Combo offers", "Limited slots"],
            bestFor: "Family vacation season",
            highlight: "Season special",
          },
          {
            name: "Special Offers",
            hero: "Extra discounts",
            desc:
              "Early-bird, group discounts and combos — best for bigger family groups.",
            includes: ["Early bird", "Group discount", "Combo add-ons", "Custom pricing"],
            bestFor: "Large families, group travel",
            highlight: "Group savings",
          },
        ],
      },
      {
        title: "Luxury / Premium feel",
        subtitle: "Premium stays, private transfers, and memorable experiences for special occasions.",
        items: [
          {
            name: "Signature Packages",
            hero: "Premium comfort",
            desc:
              "Premium stays + unforgettable experiences with smooth execution and priority support.",
            includes: ["Premium stays", "Private transfers", "Top experiences", "Priority support"],
            bestFor: "Celebrations, premium family vacations",
            highlight: "Premium",
          },
          {
            name: "Premium Tours",
            hero: "Upgraded tour",
            desc:
              "Same classic itinerary but upgraded hotels and transfers for better comfort.",
            includes: ["4*/5* options", "Comfort transfers", "Upgraded activities", "Flexibility"],
            bestFor: "Families who want comfort",
            highlight: "Upgraded",
          },
          {
            name: "Curated Trips",
            hero: "Tailored to you",
            desc:
              "We design based on your style — food, shopping, beaches, nature, adventure or calm.",
            includes: ["Personal route", "Preferences", "Flexible plan", "Unique experiences"],
            bestFor: "Families with specific needs",
            highlight: "Customized",
          },
          {
            name: "Exclusive Holidays",
            hero: "High-end privacy",
            desc:
              "Luxury vacations with privacy, comfort, and dedicated support — perfect for milestones.",
            includes: ["Luxury stays", "Private plans", "Exclusive experiences", "Dedicated support"],
            bestFor: "Anniversary, milestone trips",
            highlight: "Exclusive",
          },
        ],
      },
      {
        title: "Short (1 word, clean)",
        subtitle: "Quick categories for fast browsing and easy decisions.",
        items: [
          {
            name: "Deals",
            hero: "Budget offers",
            desc:
              "Low-cost offers and last-minute deals — quick savings for family trips.",
            includes: ["Budget stays", "Value routes", "Fast booking", "Limited offers"],
            bestFor: "Budget family trips",
            highlight: "Budget",
          },
          {
            name: "Tours",
            hero: "Sightseeing plans",
            desc:
              "City tours, day tours and attraction circuits — organized travel with less confusion.",
            includes: ["Sightseeing list", "Time plan", "Optional guide", "Entry planning"],
            bestFor: "Families, seniors, groups",
            highlight: "Structured",
          },
          {
            name: "Getaways",
            hero: "Weekend breaks",
            desc:
              "2–4 day breaks for quick refresh — minimal planning, maximum fun.",
            includes: ["Weekend plans", "Nearby spots", "Simple stays", "Easy itinerary"],
            bestFor: "Working families",
            highlight: "Quick",
          },
          {
            name: "Explore",
            hero: "Discover new",
            desc:
              "Mix of culture, food, nature and fun — flexible itinerary for variety lovers.",
            includes: ["Discovery route", "Mix experiences", "Flexible plan", "Add-ons"],
            bestFor: "Families who want variety",
            highlight: "Variety",
          },
        ],
      },
    ],
    []
  );

  const allTitles = useMemo(() => ["all", ...groups.map((g) => g.title)], [groups]);

  const filteredGroups = useMemo(() => {
    if (query === "all") return groups;
    return groups.filter((g) => g.title === query);
  }, [groups, query]);

  return (
    <div className="pkPage">
      {/* HERO */}
      <section className="pkHero" id="top">
        <div className="pkHeroFX" aria-hidden="true">
          <span className="pkBlob b1" />
          <span className="pkBlob b2" />
          <span className="pkBlob b3" />
        </div>

        <div className="pkContainer pkHeroInner">
          <div className="pkHeroTag" data-reveal>
            Family • Honeymoon • Group • Budget • Premium
          </div>

          <h1 className="pkHeroTitle" data-reveal>
            Wonder Holidays — Packages for Every Family
          </h1>

          <p className="pkHeroSub" data-reveal>
            Choose a package style below. We’ll customize **hotels + itinerary + pricing**
            based on your family size, dates and destination.
          </p>

          <div className="pkHeroBtns" data-reveal>
            <button className="pkBtnPrimary" onClick={openContact}>Get Custom Plan</button>
            <button className="pkBtnOutline" onClick={openPackages}>WhatsApp Enquiry</button>
          </div>

          {/* Stats strip */}
          <div className="pkStats" data-reveal>
            <div className="pkStat">
              <div className="pkStatNum">24/7</div>
              <div className="pkStatLbl">Support</div>
            </div>
            <div className="pkStat">
              <div className="pkStatNum">100%</div>
              <div className="pkStatLbl">Customizable</div>
            </div>
            <div className="pkStat">
              <div className="pkStatNum">Verified</div>
              <div className="pkStatLbl">Hotels & Vendors</div>
            </div>
            <div className="pkStat">
              <div className="pkStatNum">Family</div>
              <div className="pkStatLbl">First Planning</div>
            </div>
          </div>
        </div>

        <div className="pkHeroWave" aria-hidden="true" />
      </section>

      {/* How it works */}
      <section className="pkSection">
        <div className="pkContainer">
          <div className="pkRowTop" data-reveal>
            <div>
              <h2 className="pkH2">How Wonder Holidays Works</h2>
              <p className="pkSub">
                Simple steps — share details, get a plan, confirm, and travel peacefully.
              </p>
            </div>
          </div>

          <div className="pkSteps">
            {[
              { t: "Tell Us", d: "Destination, dates, family size & budget." },
              { t: "We Plan", d: "Hotels + route + inclusions + transparent quote." },
              { t: "You Confirm", d: "Choose options, we lock bookings." },
              { t: "You Travel", d: "Trip support from start to finish." },
            ].map((s, i) => (
              <div className="pkStep" data-reveal style={{ transitionDelay: `${i * 70}ms` }} key={i}>
                <div className="pkStepNo">{i + 1}</div>
                <div>
                  <div className="pkStepT">{s.t}</div>
                  <div className="pkStepD">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pkSection">
        <div className="pkContainer">
          <div className="pkRowTop" data-reveal>
            <div>
              <h2 className="pkH2">Package Categories</h2>
              <p className="pkSub">
                Each card shows what you get, what’s included, and who it’s best for.
              </p>
            </div>

            <div className="pkFilters">
              <select className="pkSelect" value={query} onChange={(e) => setQuery(e.target.value)}>
                {allTitles.map((t) => (
                  <option key={t} value={t}>
                    {t === "all" ? "All" : t}
                  </option>
                ))}
              </select>
              <button className="pkBtnOutline small" onClick={() => setQuery("all")}>Reset</button>
            </div>
          </div>

          {/* Groups */}
          {filteredGroups.map((g, gi) => (
            <div className="pkGroup" key={g.title}>
              <div className="pkGroupHead" data-reveal>
                <div>
                  <h3 className="pkGroupTitle">{g.title}</h3>
                  <p className="pkGroupSub">{g.subtitle}</p>
                </div>
                <button className="pkBtnOutline small" onClick={openContact}>
                  Ask Best Option
                </button>
              </div>

              <div className="pkGrid">
                {g.items.map((it, i) => (
                  <article
                    key={it.name}
                    className="pkCard"
                    data-reveal
                    style={{ transitionDelay: `${i * 60}ms` }}
                    onClick={() => setActive({ ...it, group: g.title })}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setActive({ ...it, group: g.title })}
                  >
                    <div className="pkCardTop">
                      <div>
                        <div className="pkName">{it.name}</div>
                        <div className="pkHeroLine">{it.hero}</div>
                      </div>
                      <div className="pkMiniTag">{it.highlight}</div>
                    </div>

                    <p className="pkDesc">{it.desc}</p>

                    <div className="pkChips">
                      {it.includes.slice(0, 3).map((x, idx) => (
                        <span className="pkChip" key={idx}>{x}</span>
                      ))}
                      <span className="pkChip ghost">+ more</span>
                    </div>

                    <div className="pkBestRow">
                      <div className="pkLabel">Best for</div>
                      <div className="pkBest">{it.bestFor}</div>
                    </div>

                    <div className="pkActions" onClick={(e) => e.stopPropagation()}>
                      <button className="pkMiniOutline" onClick={() => openPackages()}>View Examples</button>
                      <button className="pkMiniPrimary" onClick={() => openContact()}>Enquire</button>
                    </div>
                  </article>
                ))}
              </div>

              {/* divider */}
              {gi !== filteredGroups.length - 1 && <div className="pkDivider" />}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="pkFinal">
        <div className="pkContainer pkFinalInner" data-reveal>
          <div>
            <h2 className="pkH2 white">Want a Family Trip Plan?</h2>
            <p className="pkSub white2">
              Share destination + dates + number of people. We’ll send a custom itinerary with best price.
            </p>
          </div>
          <button className="pkBtnPrimary" onClick={openContact}>Talk to Us</button>
        </div>
      </section>

      {/* Modal */}
      {active && (
        <div className="pkModal" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          <div className="pkModalCard" onClick={(e) => e.stopPropagation()}>
            <div className="pkModalTop">
              <div>
                <div className="pkModalTitle">{active.name}</div>
                <div className="pkModalSub">{active.group} • {active.hero}</div>
              </div>
              <button className="pkClose" onClick={() => setActive(null)}>✕</button>
            </div>

            <p className="pkModalDesc">{active.desc}</p>

            <div className="pkModalGrid">
              <div className="pkModalBox">
                <div className="pkLabel">Includes</div>
                <ul className="pkList">
                  {active.includes.map((x, i) => <li key={i}>{x}</li>)}
                </ul>
              </div>
              <div className="pkModalBox">
                <div className="pkLabel">Best for</div>
                <div className="pkBest">{active.bestFor}</div>
                <div className="pkMiniHelp">
                  Tip: Share dates + people count to get the best quote.
                </div>
              </div>
            </div>

            <div className="pkModalActions">
              <button className="pkMiniOutline" onClick={openPackages}>See Sample Itinerary</button>
              <button className="pkMiniPrimary" onClick={openContact}>Get Quote</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}