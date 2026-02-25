import React, { useEffect, useMemo, useState } from "react";


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

export default function Contact() {
  useRevealOnScroll();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
    dates: "",
    travellers: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", msg: "" });

  const tips = useMemo(
    () => [
      { t: "Fast Quote", d: "Share destination + dates + people count." },
      { t: "Family Friendly", d: "Tell us if kids/seniors are traveling." },
      { t: "Budget Range", d: "We’ll suggest hotel tiers within budget." },
      { t: "WhatsApp Support", d: "Support before and during the trip." },
    ],
    []
  );

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.phone.trim()) return "Please enter your phone number.";
    if (form.phone.trim().length < 8) return "Please enter a valid phone number.";
    if (!form.destination.trim()) return "Please enter destination.";
    return "";
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ type: "error", msg: err });
      return;
    }

    // ✅ For now: just show success message (you can connect API later)
    setStatus({ type: "success", msg: "Thanks! We received your details. We will contact you shortly." });

    // optional reset
    setForm({
      name: "",
      phone: "",
      email: "",
      destination: "",
      dates: "",
      travellers: "",
      message: "",
    });
  };

  // WhatsApp template link (edit number)
  const whatsappText = encodeURIComponent(
    `Hi Wonder Holidays, I want a trip plan.\nName: ${form.name || "-"}\nPhone: ${
      form.phone || "-"
    }\nDestination: ${form.destination || "-"}\nDates: ${form.dates || "-"}\nTravellers: ${
      form.travellers || "-"
    }\nMessage: ${form.message || "-"}`
  );
  const whatsappLink = `https://wa.me/919000000000?text=${whatsappText}`; // ✅ change number

  return (
    <div className="ctPage">
      {/* HERO */}
      <section className="ctHero">
        <div className="ctHeroFX" aria-hidden="true">
          <span className="ctBlob b1" />
          <span className="ctBlob b2" />
          <span className="ctBlob b3" />
        </div>

        <div className="ctContainer ctHeroInner">
          <div className="ctPill anim-pop" data-anim>
            Contact Wonder Holidays
          </div>

          <h1 className="ctTitle anim-up" data-anim style={{ animationDelay: "0.08s" }}>
            Let’s Plan Your Next <span className="ctAccent">Trip</span>
          </h1>

          <p className="ctSub anim-up" data-anim style={{ animationDelay: "0.16s" }}>
            Share destination + dates + people count. We’ll send a custom itinerary with best options.
          </p>

          <div className="ctQuick anim-up" data-anim style={{ animationDelay: "0.24s" }}>
            <a className="ctQuickCard" href="tel:+919000000000">
              <div className="ctIcon">☎</div>
              <div>
                <div className="ctK">Call</div>
                <div className="ctV">+91 90000 00000</div>
              </div>
            </a>

            <a className="ctQuickCard" href="mailto:hello@wonderholidays.com">
              <div className="ctIcon">✉</div>
              <div>
                <div className="ctK">Email</div>
                <div className="ctV">hello@wonderholidays.com</div>
              </div>
            </a>

            <div className="ctQuickCard">
              <div className="ctIcon">📍</div>
              <div>
                <div className="ctK">Location</div>
                <div className="ctV">Hyderabad, India</div>
              </div>
            </div>
          </div>

          <div className="ctWave" aria-hidden="true" />
        </div>
      </section>

      {/* CONTENT */}
      <section className="ctSection">
        <div className="ctContainer">
          <div className="ctGrid">
            {/* FORM */}
            <div className="ctCard anim-up" data-anim>
              <div className="ctCardHead">
                <div>
                  <h2 className="ctH2">Request a Quote</h2>
                  <p className="ctP">
                    Fill this form. We’ll call/WhatsApp you with package options.
                  </p>
                </div>
                <a className="ctWa" href={whatsappLink} target="_blank" rel="noreferrer">
                  WhatsApp →
                </a>
              </div>

              {status.msg && (
                <div className={`ctAlert ${status.type}`}>
                  {status.msg}
                </div>
              )}

              <form className="ctForm" onSubmit={onSubmit}>
                <div className="ctRow2">
                  <div className="ctField">
                    <label>Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="ctField">
                    <label>Phone *</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      placeholder="Phone number"
                      inputMode="tel"
                    />
                  </div>
                </div>

                <div className="ctRow2">
                  <div className="ctField">
                    <label>Email (optional)</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="Email address"
                      inputMode="email"
                    />
                  </div>

                  <div className="ctField">
                    <label>Destination *</label>
                    <input
                      name="destination"
                      value={form.destination}
                      onChange={onChange}
                      placeholder="Goa / Dubai / Kerala..."
                    />
                  </div>
                </div>

                <div className="ctRow2">
                  <div className="ctField">
                    <label>Travel Dates</label>
                    <input
                      name="dates"
                      value={form.dates}
                      onChange={onChange}
                      placeholder="Ex: 12 Mar - 16 Mar"
                    />
                  </div>

                  <div className="ctField">
                    <label>Travellers</label>
                    <input
                      name="travellers"
                      value={form.travellers}
                      onChange={onChange}
                      placeholder="Ex: 2 Adults + 1 Child"
                    />
                  </div>
                </div>

                <div className="ctField">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Budget range, kids/seniors, hotel preference, any notes..."
                    rows={4}
                  />
                </div>

                <div className="ctActions">
                  <button className="ctBtnPrimary" type="submit">
                    Submit
                  </button>
                  <a className="ctBtnOutline" href={whatsappLink} target="_blank" rel="noreferrer">
                    Send on WhatsApp
                  </a>
                </div>

                <div className="ctNote">
                  Tip: Mention your budget range to get faster options.
                </div>
              </form>
            </div>

            {/* RIGHT: INFO + MAP */}
            <div className="ctSide">
              <div className="ctCard anim-up" data-anim style={{ animationDelay: "0.06s" }}>
                <h2 className="ctH2">Why Contact Us?</h2>
                <p className="ctP">
                  We plan family trips with clear pricing, verified stays, and smooth transfers.
                </p>

                <div className="ctTips">
                  {tips.map((t, i) => (
                    <div className="ctTip" key={i}>
                      <div className="ctTipT">{t.t}</div>
                      <div className="ctTipD">{t.d}</div>
                    </div>
                  ))}
                </div>

                <div className="ctMiniCta">
                  <div>
                    <div className="ctMiniT">Need urgent help?</div>
                    <div className="ctMiniD">Call or WhatsApp us for quick response.</div>
                  </div>
                  <a className="ctMiniBtn" href="tel:+919000000000">Call Now</a>
                </div>
              </div>

              <div className="ctCard mapCard anim-up" data-anim style={{ animationDelay: "0.12s" }}>
                <div className="mapTop">
                  <div>
                    <div className="mapTitle">Our Location</div>
                    <div className="mapSub">Hyderabad, India</div>
                  </div>
                </div>

                <div className="mapWrap">
                  {/* ✅ Replace src with your Google Maps embed link */}
                  <iframe
                    title="Wonder Holidays Map"
                    src="https://www.google.com/maps?q=Hyderabad&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}