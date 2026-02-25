
export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="darkFooter" id="footer">
      <div className="dfWrap">
        {/* Left brand */}
        <div className="dfBrand">
          <div className="dfBrandTop">
            <div className="dfLogo">WH</div>
            <div>
              <div className="dfName">Wonder Holidays</div>
              <div className="dfTag">Travel • Tours • Packages</div>
            </div>
          </div>

          <p className="dfDesc">
            Wonder Holidays helps you plan memorable trips with curated packages,
            transparent pricing, and 24/7 support.
          </p>

          <div className="dfPills">
            <span className="dfPill">INDIA</span>
            <span className="dfPill">UAE</span>
            <span className="dfPill">THAILAND</span>
          </div>

          <div className="dfContact">
            <div className="dfContactRow">
              <span className="dfIcon">✉</span>
              <span>hello@wonderholidays.com</span>
            </div>
            <div className="dfContactRow">
              <span className="dfIcon">☎</span>
              <span>+91 90000 00000</span>
            </div>
          </div>
        </div>

        {/* Column 1 */}
        <div className="dfCol">
          <div className="dfColTitle">Packages</div>
          <button className="dfLink" onClick={() => scrollTo("packages")}>Honeymoon</button>
          <button className="dfLink" onClick={() => scrollTo("packages")}>Family Trips</button>
          <button className="dfLink" onClick={() => scrollTo("packages")}>Group Tours</button>
          <button className="dfLink" onClick={() => scrollTo("packages")}>Weekend Getaways</button>
          <button className="dfLink" onClick={() => scrollTo("packages")}>International</button>
        </div>

        {/* Column 2 */}
        <div className="dfCol">
          <div className="dfColTitle">Company</div>
          <button className="dfLink" onClick={() => scrollTo("top")}>Home</button>
          <button className="dfLink" onClick={() => scrollTo("blog")}>Blog</button>
          <button className="dfLink" onClick={() => scrollTo("gallery")}>Gallery</button>
          <button className="dfLink" onClick={() => scrollTo("contact")}>Contact</button>
          <a className="dfLinkA" href="#footer">Refund Policy</a>
        </div>

        {/* Subscribe */}
        <div className="dfCol">
          <div className="dfColTitle">Subscribe</div>

          <a className="dfBtn" href="#contact">
            Subscribe Now <span className="dfArrow">›</span>
          </a>

          <div className="dfMini">Follow us on</div>

          <div className="dfSocial">
            <a className="dfSocialBtn" href="#footer" aria-label="LinkedIn">in</a>
            <a className="dfSocialBtn" href="#footer" aria-label="Facebook">f</a>
            <a className="dfSocialBtn" href="#footer" aria-label="X">x</a>
            <a className="dfSocialBtn" href="#footer" aria-label="YouTube">▶</a>
          </div>

          <div className="dfBadges">
            <div className="dfBadge">ISO<br/>9001</div>
            <div className="dfBadge">ISO<br/>27001</div>
          </div>
        </div>
      </div>

      <div className="dfBottom">
        <div className="dfBottomInner">
          <div>© {year} Wonder Holidays. All rights reserved.</div>
          <div className="dfBottomLinks">
            <a href="#footer">Privacy</a>
            <span className="dfDot">•</span>
            <a href="#footer">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}