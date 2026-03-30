import HeroSection      from "@/components/HeroSection";
import ProblemSection   from "@/components/ProblemSection";
import ValueSection     from "@/components/ValueSection";
import CoursesSection   from "@/components/CoursesSection";
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
      <CoursesSection />
      <PricingSection />
      <FeaturesSection />
      <TargetsSection />
      <CtaSection />
      <footer
        style={{
          borderTop:  "1px solid var(--border)",
          background: "#fff",
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
                background: "linear-gradient(90deg, var(--blue-900), var(--blue-500))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Care<span style={{ color: "var(--cta)" }}>Learning</span>
            </span>
            <p
              style={{
                marginTop: "0.375rem",
                fontSize:  "0.8125rem",
                color:     "var(--text-3)",
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
            <a href="/privacy" style={{ color: "var(--text-2)", textDecoration: "none" }}>
              プライバシーポリシー
            </a>
            <a href="/legal" style={{ color: "var(--text-2)", textDecoration: "none" }}>
              特定商取引法に基づく表示
            </a>
            <a href="/school-application" style={{ color: "var(--text-2)", textDecoration: "none" }}>
              お問い合わせ
            </a>
          </nav>
        </div>

        {/* Copyright bar */}
        <div
          style={{
            borderTop:  "1px solid var(--border)",
            padding:    "1rem 1.5rem",
            textAlign:  "center",
            fontSize:   "0.75rem",
            color:      "var(--text-3)",
          }}
        >
          &copy; 2026 Care Learning. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}
