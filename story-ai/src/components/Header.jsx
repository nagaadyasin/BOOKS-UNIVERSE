// src/components/Header.jsx
import { NavLink, Link } from "react-router-dom";
import { LockIcon, UserIcon } from "./Icons.jsx";

const navClasses = ({ isActive }) =>
  `nav-link text-white hover:text-slate-900 ${
    isActive ? "font-semibold" : ""
  }`;

export default function Header() {
  return (
    <header className="sticky top-0 z-50 text-white bg-black backdrop-blur border-b border-slate-800/10">
      <div className="mx-auto max-w-6xl text-white px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 text-white rounded-lg bg-brand.accent flex items-center justify-center font-bold">
            BU
          </div>
          <span className="font-display text-lg tracking-tight">
            Books Universe
          </span>
        </Link>

        <nav className="hidden md:flex  items-center gap-6">
          <NavLink to="/" className={navClasses} >
            Home
          </NavLink>
          <NavLink to="/about-us" className={navClasses}>
            About Us
          </NavLink>
          <NavLink to="/library" className={navClasses}>
            Library
          </NavLink>
          <NavLink to="/blog" className={navClasses}>
            Blog
          </NavLink>
          <NavLink to="/story-maker" className={navClasses}>
            Story Maker
          </NavLink>
          <NavLink to="/contact-us" className={navClasses}>
            Contact Us
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Secure"
            className="p-2 rounded-lg hover:bg-slate-100 text-white"
          >
            <LockIcon />
          </button>
          <button
            aria-label="Account"
            className="p-2 rounded-lg hover:bg-slate-100 text-white"
          >
            <UserIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
