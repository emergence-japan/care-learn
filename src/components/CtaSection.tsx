import { FadeIn } from "@/lib/motion";

export default function CtaSection() {
  return (
    <section
      id="contact"
      style={{
        padding:    "6rem 0",
        background: "linear-gradient(140deg, var(--blue-900) 0%, var(--blue-700) 100%)",
        position:   "relative",
        overflow:   "hidden",
      }}
    >
      {/* Decorative orbs */}
      <div
        style={{
          position:      "absolute",
          top:           "-100px",
          right:         "-80px",
          width:         "400px",
          height:        "400px",
          background:    "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position:      "absolute",
          bottom:        "-80px",
          left:          "-60px",
          width:         "320px",
          height:        "320px",
          background:    "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container">
        <FadeIn>
          <div
            style={{
              textAlign: "center",
              color:     "#fff",
              maxWidth:  "640px",
              margin:    "0 auto",
              position:  "relative",
              zIndex:    1,
            }}
          >
            <div
              style={{
                display:       "inline-block",
                padding:       "0.25rem 0.875rem",
                background:    "rgba(255,255,255,0.15)",
                borderRadius:  "999px",
                fontSize:      "0.6875rem",
                fontWeight:    700,
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                marginBottom:  "1.25rem",
              }}
            >
              CONTACT
            </div>

            <h2
              style={{
                fontSize:      "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight:    700,
                lineHeight:    1.3,
                letterSpacing: "-0.025em",
                marginBottom:  "1rem",
              }}
            >
              まずは、お気軽に
              <br />
              お問い合わせください。
            </h2>

            <p
              style={{
                fontSize:     "1rem",
                lineHeight:   1.85,
                opacity:      0.85,
                marginBottom: "2.5rem",
              }}
            >
              導入の流れや料金など、どんなことでもお答えします。
              <br />
              まずはお気軽にご連絡ください。
            </p>

            <div
              style={{
                display:        "flex",
                flexWrap:       "wrap",
                gap:            "1rem",
                justifyContent: "center",
              }}
            >
              <a href="/school-application" className="btn btn-white btn-lg">
                お問い合わせ →
              </a>
            </div>

            <div
              style={{
                marginTop:      "2rem",
                display:        "flex",
                flexWrap:       "wrap",
                justifyContent: "center",
                gap:            "1.5rem",
                fontSize:       "0.8125rem",
                opacity:        0.65,
              }}
            >
              {["✓ 初期費用無料", "✓ 導入サポート付き", "✓ 最短2週間で運用開始"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
