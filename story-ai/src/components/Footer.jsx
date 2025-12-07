// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#e8dccb] border-t border-slate-300 text-[#4b2e1e]">
      <div className="mx-auto max-w-6xl px-4 py-8 grid sm:grid-cols-2 gap-6">
        <div>
          <h4 className="font-display font-semibold">Books Universe</h4>
          <p className="mt-2 text-slate-700">
            Stories that grow hearts and minds.
          </p>
        </div>
        <div className="flex gap-6 justify-end">
          <Link to="/library" className="text-slate-700 hover:text-slate-900">
            Library
          </Link>
          <Link to="/blog" className="text-slate-700 hover:text-slate-900">
            Blog
          </Link>
          <Link to="/about-us" className="text-slate-700 hover:text-slate-900">
            About
          </Link>
          <Link
            to="/contact-us"
            className="text-slate-700 hover:text-slate-900"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-8 text-slate-500 text-sm">
        © {new Date().getFullYear()} Books Universe. All rights reserved.
      </div>
    </footer>
  );
}
