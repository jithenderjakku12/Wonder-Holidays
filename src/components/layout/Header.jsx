import { NavLink } from "react-router-dom";


export default function Header() {
  const linkClass = ({ isActive }) =>
    isActive ? "navLink navLinkActive" : "navLink";

  return (
    <header className="header">
      <div className="headerInner">
        <div className="brand">
          <span className="brandMark">WoHo</span>
          <span className="brandText">Wonder Holidays</span>
        </div>

        <nav className="nav">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/packages" className={linkClass}>Packages</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/blog" className={linkClass}>Blog</NavLink>
          <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>

        <div className="headerCtas">
          <a className="ctaBtnOutline" href="tel:+910000000000">Call</a>
          <a
            className="ctaBtn"
            href="https://wa.me/910000000000"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}