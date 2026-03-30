import HeroSection      from "@/components/HeroSection";
import ProblemSection   from "@/components/ProblemSection";
import ValueSection     from "@/components/ValueSection";
import PricingSection   from "@/components/PricingSection";
import FeaturesSection  from "@/components/FeaturesSection";
import TargetsSection   from "@/components/TargetsSection";
import CtaSection       from "@/components/CtaSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <ValueSection />
      <PricingSection />
      <FeaturesSection />
      <TargetsSection />
      <CtaSection />
      <footer
        style={{
          borderTop:  "1px solid rgba(255,255,255,0.08)",
          background: "var(--slate-900)",
        }}
      >
        {/* Main footer row */}
        <div
          className="container"
          style={{
            display:        "flex",
            flexWrap:       "wrap",
            justifyContent: "space-between",
            alignItems:     "center",
            gap:            "1.25rem",
            padding:        "2rem 1.5rem",
          }}
        >
          <div>
            <span
              style={{
                fontWeight: 800,
                fontSize:   "1rem",
                color:      "#fff",
              }}
            >
              Care<span style={{ color: "var(--cta)" }}>Learning</span>
            </span>
            <p
              style={{
                marginTop: "0.375rem",
                fontSize:  "0.8125rem",
                color:     "rgba(255,255,255,0.45)",
              }}
            >
              介護施設向け法定研修管理LMS
            </p>
          </div>

          <nav
            style={{
              display:  "flex",
              flexWrap: "wrap",
              gap:      "0.25rem 1.5rem",
              fontSize: "0.8125rem",
            }}
          >
            <a href="/privacy" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
              プライバシーポリシー
            </a>
            <a href="/legal" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
              特定商取引法に基づく表示
            </a>
            <a href="/school-application" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
              お問い合わせ
            </a>
          </nav>
        </div>

        {/* Copyright bar */}
        <div
          style={{
            borderTop:  "1px solid rgba(255,255,255,0.08)",
            padding:    "1rem 1.5rem",
            textAlign:  "center",
            fontSize:   "0.75rem",
            color:      "rgba(255,255,255,0.35)",
          }}
        >
          &copy; 2026 Care Learning. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}
