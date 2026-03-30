"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#pain",     label: "課題" },
  { href: "#value",    label: "特長" },
  { href: "#features", label: "機能" },
  { href: "#targets",  label: "対象" },
];

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        style={{
          position:        "fixed",
          top: 0, left: 0, right: 0,
          height:          "var(--hh)",
          zIndex:          200,
          background:      scrolled ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.82)",
          backdropFilter:  "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom:    `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
          boxShadow:       scrolled ? "0 1px 20px rgba(0,0,0,.07)" : "none",
          transition:      "all 0.3s ease",
        }}
      >
        <div
          className="container"
          style={{
            height:         "100%",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{
              fontSize:      "1.375rem",
              fontWeight:    900,
              letterSpacing: "-0.03em",
              color:         "var(--blue-800)",
            }}
          >
            Care<span style={{ color: "var(--cta)" }}>Learning</span>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hdr-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize:   "0.9rem",
                  fontWeight: 500,
                  color:      "var(--text-2)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
              >
                {link.label}
              </a>
            ))}
            <a href="/school-application" className="btn btn-cta btn-sm">
              お問い合わせ
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hdr-menu"
            aria-label="メニュー"
            style={{
              display:        "none",
              alignItems:     "center",
              justifyContent: "center",
              width:  40,
              height: 40,
              borderRadius:   8,
              border:         "1px solid var(--border)",
              background:     "transparent",
              color:          "var(--text)",
            }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu panel */}
        {menuOpen && (
          <div
            style={{
              position:       "absolute",
              top:            "var(--hh)",
              left: 0, right: 0,
              background:     "#fff",
              borderBottom:   "1px solid var(--border)",
              padding:        "1rem 1.5rem 1.5rem",
              display:        "flex",
              flexDirection:  "column",
              gap:            "0",
              boxShadow:      "0 8px 32px rgba(0,0,0,.1)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding:      "0.875rem 0",
                  fontSize:     "1rem",
                  fontWeight:   500,
                  color:        "var(--text-2)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/school-application"
              className="btn btn-cta btn-md"
              style={{ marginTop: "1rem" }}
            >
              お問い合わせ →
            </a>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 767px) {
          .hdr-nav  { display: none !important; }
          .hdr-menu { display: flex !important; }
        }
      `}</style>
    </>
  );
}
