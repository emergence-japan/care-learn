import { FadeIn } from "@/lib/motion";
import { Check } from "lucide-react";

const targets = [
  {
    role:        "法人本部 · 理事長 · 事務局長",
    persona:     "「複数施設の研修状況を、本部から一元管理したい」",
    badgeBg:     "var(--blue-50)",
    badgeColor:  "var(--blue-700)",
    checkColor:  "var(--blue-600)",
    headerGrad:  "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
    benefits: [
      "全施設の受講完了率をリアルタイムで確認。各施設からの報告を待つ必要がない。",
      "法人単位の監査PDF出力で、コンプライアンス対応が格段に楽になる。",
      "会計年度開始月の設定で、法人ごとの運用に柔軟に対応。",
      "施設間の進捗比較で、支援が必要な施設を早期発見できる。",
    ],
  },
  {
    role:        "施設管理者 · 施設長",
    persona:     "「日常業務の合間に研修管理をしていて、限界を感じている」",
    badgeBg:     "#DCFCE7",
    badgeColor:  "var(--green-700)",
    checkColor:  "var(--green-600)",
    headerGrad:  "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)",
    benefits: [
      "研修の準備・記録・フォローがすべて自動化。管理業務から解放される。",
      "未受講スタッフをダッシュボードで即確認。声かけのタイミングを逃さない。",
      "監査前の慌ただしい書類作成がゼロ。ボタン一つでPDF完成。",
      "スタッフのアクションプランで、研修が現場の行動変容につながる。",
    ],
  },
];

export default function TargetsSection() {
  return (
    <section
      id="targets"
      style={{
        padding:    "6rem 0",
        background: "linear-gradient(160deg, #EFF6FF 0%, var(--slate-50) 100%)",
      }}
    >
      <div className="container">

        <FadeIn style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="label">FOR WHOM</div>
          <h2 className="sec-title">こんな方に選ばれています</h2>
        </FadeIn>

        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap:                 "1.5rem",
          }}
        >
          {targets.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                style={{
                  background:   "#fff",
                  borderRadius: "var(--r-xl)",
                  boxShadow:    "var(--shadow)",
                  overflow:     "hidden",
                }}
              >
                {/* Card header */}
                <div
                  style={{
                    background: t.headerGrad,
                    padding:    "1.75rem 1.75rem 1.5rem",
                  }}
                >
                  <span
                    style={{
                      display:       "inline-block",
                      padding:       "0.2rem 0.75rem",
                      background:    t.badgeBg,
                      color:         t.badgeColor,
                      borderRadius:  "999px",
                      fontSize:      "0.6875rem",
                      fontWeight:    700,
                      letterSpacing: "0.06em",
                      marginBottom:  "0.875rem",
                    }}
                  >
                    {t.role}
                  </span>
                  <div
                    style={{
                      fontSize:   "1rem",
                      fontWeight: 700,
                      lineHeight: 1.6,
                      color:      "var(--text)",
                    }}
                  >
                    {t.persona}
                  </div>
                </div>

                {/* Benefits */}
                <div style={{ padding: "1.5rem 1.75rem", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  {t.benefits.map((b, j) => (
                    <div
                      key={j}
                      style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}
                    >
                      <Check
                        size={15}
                        style={{
                          flexShrink: 0,
                          color:      t.checkColor,
                          marginTop:  "0.25rem",
                          strokeWidth: 2.5,
                        }}
                      />
                      <p style={{ fontSize: "0.9rem", color: "var(--text)", lineHeight: 1.65 }}>
                        {b}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
