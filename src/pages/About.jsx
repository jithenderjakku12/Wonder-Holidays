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
      { threshold: 0.14 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function About({
  openContact = () => {},
  openPackages = () => {},
}) {
  useRevealOnScroll();

  const [faqOpen, setFaqOpen] = useState(0);

  const stats = useMemo(
    () => [
      { n: "24/7", l: "Trip Support" },
      { n: "Verified", l: "Hotels & Vendors" },
      { n: "100%", l: "Customizable Plans" },
      { n: "Family", l: "First Planning" },
    ],
    []
  );

  const values = useMemo(
    () => [
      {
        t: "Transparent Pricing",
        d: "No hidden surprises. You get clear inclusions, options and costs before booking.",
        i: "₹",
      },
      {
        t: "Verified Stays",
        d: "We recommend hotels/resorts that are reliable for families and safe for all ages.",
        i: "✓",
      },
      {
        t: "Comfort & Safety",
        d: "Family-friendly pacing, smooth transfers and assistance whenever you need it.",
        i: "🛡️",
      },
      {
        t: "Human Support",
        d: "From planning to return journey — our team stays with you throughout the trip.",
        i: "🤝",
      },
    ],
    []
  );

  const timeline = useMemo(
    () => [
      { year: "Step 1", title: "Understand Your Needs", desc: "Destination, dates, family size, budget, preferences." },
      { year: "Step 2", title: "Design the Itinerary", desc: "Right pacing, best routes, and must-see attractions." },
      { year: "Step 3", title: "Confirm & Book", desc: "Lock hotels, transfers, activities and share final plan." },
      { year: "Step 4", title: "Travel with Support", desc: "We assist during the trip for a smooth experience." },
    ],
    []
  );

  const team = useMemo(
    () => [
      { n: "Trip Designer", r: "Itinerary + budgeting + best routing" },
      { n: "Booking Specialist", r: "Hotels, tickets, confirmations, vendors" },
      { n: "Support Executive", r: "WhatsApp help during travel" },
      { n: "Partner Network", r: "Local drivers, guides & trusted stays" },
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        q: "Can you customize packages for families?",
        a: "Yes. We customize based on family size, kids/seniors, budget, travel pace, food preferences and hotel style.",
      },
      {
        q: "Do you provide only India trips or international too?",
        a: "Both. We do domestic and international planning based on visa/timelines and budget. Tell us your destination — we’ll guide you.",
      },
      {
        q: "How do I get the best price?",
        a: "Share your dates and flexibility. Early booking or weekday travel often gets better rates. We provide multiple hotel tiers to match your budget.",
      },
      {
        q: "Will you support us during the trip?",
        a: "Yes, you’ll have WhatsApp/phone support. If there is any issue with transfers/hotel timings, we coordinate and resolve quickly.",
      },
    ],
    []
  );

  return (
    <div className="abPage" id="top">
      {/* HERO */}
      <section className="abHero">
        <div className="abHeroFX" aria-hidden="true">
          <span className="abBlob b1" />
          <span className="abBlob b2" />
          <span className="abBlob b3" />
        </div>

        <div className="abContainer abHeroInner">
          <div className="abPill" data-reveal>
            About Wonder Holidays
          </div>

          <h1 className="abTitle" data-reveal>
            Travel Planning that Feels <span className="abAccent">Easy</span> for Every Family
          </h1>

          <p className="abLead" data-reveal>
            Wonder Holidays helps families, couples and groups travel with confidence.
            We plan the right route, verified stays, smooth transfers and clear pricing —
            so you can enjoy the trip without stress.
          </p>

          <div className="abHeroBtns" data-reveal>
            <button className="abBtnPrimary" onClick={openContact}>Talk to Us</button>
            <button className="abBtnOutline" onClick={openPackages}>View Packages</button>
          </div>

          <div className="abStats" data-reveal>
            {stats.map((s, i) => (
              <div className="abStat" key={i}>
                <div className="abStatNum">{s.n}</div>
                <div className="abStatLbl">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="abWave" aria-hidden="true" />
      </section>

      {/* STORY */}
      <section className="abSection">
        <div className="abContainer abSplit">
          <div className="abMedia card" data-reveal>
            {/* If you have a video: replace src with your file and keep controls muted */}
            {/* <video className="abVideo" src="/videos/about.mp4" autoPlay muted loop playsInline /> */}
            <div className="abMediaPh">
              Add About Image / Video here <span>— /public/images/about.jpg</span>
            </div>
          </div>

          <div className="abText" data-reveal>
            <h2 className="abH2">Who We Are</h2>
            <p className="abP">
              We’re a travel planning team focused on simple communication and reliable execution.
              Our goal is to make your holiday smooth — from itinerary to hotel check-in.
            </p>

            <div className="abBullets">
              <div className="abBullet">
                <span className="abDot" />
                <div>
                  <div className="abBTitle">Family-first itineraries</div>
                  <div className="abBText">Balanced pace, enough rest time, and kid/senior-friendly plans.</div>
                </div>
              </div>

              <div className="abBullet">
                <span className="abDot" />
                <div>
                  <div className="abBTitle">Trusted partners</div>
                  <div className="abBText">Verified hotels, dependable drivers, and guided experiences.</div>
                </div>
              </div>

              <div className="abBullet">
                <span className="abDot" />
                <div>
                  <div className="abBTitle">Clear pricing</div>
                  <div className="abBText">You’ll always know what’s included and what’s optional.</div>
                </div>
              </div>
            </div>

            <div className="abBtnRow">
              <button className="abBtnPrimary" onClick={openContact}>Get Custom Plan</button>
              <button className="abBtnOutline" onClick={openPackages}>See Deals</button>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="abSection soft">
        <div className="abContainer">
          <div className="abRowTop" data-reveal>
            <div>
              <h2 className="abH2">What We Promise</h2>
              <p className="abSub">
                The things we never compromise on — especially for families.
              </p>
            </div>
          </div>

          <div className="abGrid4">
            {values.map((v, i) => (
              <div className="abCard" key={i} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="abIcon">{v.i}</div>
                <div className="abCTitle">{v.t}</div>
                <div className="abCText">{v.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS / TIMELINE */}
      <section className="abSection">
        <div className="abContainer">
          <div className="abRowTop" data-reveal>
            <div>
              <h2 className="abH2">How We Plan Your Trip</h2>
              <p className="abSub">
                A simple workflow — fast planning, clear approvals, smooth travel support.
              </p>
            </div>
          </div>

          <div className="abTimeline">
            {timeline.map((t, i) => (
              <div className="abStep" key={i} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="abStepLeft">
                  <div className="abStepBadge">{t.year}</div>
                </div>
                <div className="abStepBody">
                  <div className="abStepTitle">{t.title}</div>
                  <div className="abStepDesc">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="abSection soft">
        <div className="abContainer">
          <div className="abRowTop" data-reveal>
            <div>
              <h2 className="abH2">Our Team & Support</h2>
              <p className="abSub">
                Behind every trip, there’s a team making sure everything runs smoothly.
              </p>
            </div>
          </div>

          <div className="abGrid2">
            {team.map((m, i) => (
              <div className="abTeamCard" key={i} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="abTeamTop">
                  <div className="abAvatar" aria-hidden="true">{m.n.charAt(0)}</div>
                  <div>
                    <div className="abTeamName">{m.n}</div>
                    <div className="abTeamRole">{m.r}</div>
                  </div>
                </div>
                <div className="abTeamNote">
                  We coordinate details and keep you updated clearly on WhatsApp.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="abSection">
        <div className="abContainer">
          <div className="abRowTop" data-reveal>
            <div>
              <h2 className="abH2">Frequently Asked Questions</h2>
              <p className="abSub">
                Quick answers before you book.
              </p>
            </div>
          </div>

          <div className="abFaq">
            {faqs.map((f, i) => {
              const open = faqOpen === i;
              return (
                <div className={`abFaqItem ${open ? "open" : ""}`} key={i} data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
                  <button className="abFaqQ" onClick={() => setFaqOpen(open ? -1 : i)}>
                    <span>{f.q}</span>
                    <span className="abFaqPlus">{open ? "–" : "+"}</span>
                  </button>
                  <div className="abFaqA">
                    <div className="abFaqAText">{f.a}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="abMiniCta" data-reveal>
            <div>
              <div className="abMiniTitle">Ready to plan?</div>
              <div className="abMiniSub">Send destination + dates + people count. We’ll respond quickly.</div>
            </div>
            <button className="abBtnPrimary" onClick={openContact}>Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
}