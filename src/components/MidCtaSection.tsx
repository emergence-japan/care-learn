import { FadeIn } from "@/lib/motion";

export default function MidCtaSection() {
  return (
    <section
      style={{
        padding:    "4rem 0",
        background: "linear-gradient(120deg, #EFF6FF 0%, #DBEAFE 100%)",
        borderTop:    "1px solid #BFDBFE",
        borderBottom: "1px solid #BFDBFE",
      }}
    >
      <div className="container">
        <FadeIn>
          <div
            style={{
              display:        "flex",
              flexWrap:       "wrap",
              alignItems:     "center",
              justifyContent: "space-between",
              gap:            "1.5rem",
            }}
          >
            <div>
              <p
                style={{
                  fontSize:     "0.8125rem",
                  fontWeight:   600,
                  color:        "var(--blue-600)",
                  letterSpacing: "0.08em",
                  marginBottom: "0.5rem",
                }}
              >
                DEMO REQUEST
              </p>
              <h2
                style={{
                  fontSize:   "clamp(1.25rem, 2.5vw, 1.625rem)",
                  fontWeight: 800,
                  color:      "var(--blue-900)",
                  lineHeight: 1.3,
                }}
              >
                実際の管理画面を、無料でお試しいただけます
              </h2>
              <p
                style={{
                  marginTop: "0.5rem",
                  fontSize:  "0.9rem",
                  color:     "var(--text-2)",
                }}
              >
                導入後のサポートも充実。設定から運用開始まで専任スタッフがご支援します。
              </p>
            </div>
            <a
              href="/school-application"
              className="btn btn-cta btn-lg"
              style={{ flexShrink: 0, whiteSpace: "nowrap" }}
            >
              お問い合わせ →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
