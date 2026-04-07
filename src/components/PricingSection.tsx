import { FadeIn } from "@/lib/motion";
import { Check, X, Star } from "lucide-react";

const plans = [
  {
    id:        "lite",
    name:      "ライト",
    sub:       "比較検討用のエントリープラン",
    price:     "80,000",
    unit:      "年間（税別）/ 1施設",
    highlight: false,
    badge:     null,
    includes: [
      "全15科目コンテンツ閲覧",
      "受講管理・修了証PDF発行",
    ],
    excludes: [
      "監査対応帳票の自動出力",
      "法改正AI通知",
      "進捗ダッシュボード",
      "サポート",
    ],
    note: null,
    cta: "お問い合わせ",
  },
  {
    id:        "standard",
    name:      "スタンダード",
    sub:       "ほとんどの施設が選ぶ主力プラン",
    price:     "120,000",
    unit:      "年間（税別）/ 1施設",
    highlight: true,
    badge:     "おすすめ",
    includes: [
      "全15科目コンテンツ閲覧",
      "受講管理・修了証PDF発行",
      "監査対応帳票 自動出力",
      "法改正AI通知",
      "進捗ダッシュボード",
      "メール＋チャットサポート",
    ],
    excludes: [],
    note: "監査対応と法改正通知がついて、年間わずか12万円。",
    cta: "お問い合わせ",
    strongItems: ["監査対応帳票 自動出力", "法改正AI通知"],
  },
  {
    id:        "enterprise",
    name:      "アドバンス",
    sub:       "複数施設を運営するグループ向け",
    price:     "240,000",
    unit:      "年間（税別）/ 1施設",
    highlight: false,
    badge:     null,
    includes: [
      "スタンダードの全機能",
      "複数施設の一括管理ダッシュボード",
      "本部からの一括受講管理",
      "請求一本化",
      "導入サポート（初期）",
    ],
    excludes: [],
    note: "3施設以上で、1施設あたりの費用がさらにお得に。",
    cta: "お問い合わせ",
  },
] as const;

export default function PricingSection() {
  return (
    <section id="pricing" style={{ padding: "6rem 0", background: "#fff" }}>
      <div className="container">

        <FadeIn style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="label">PRICING</div>
          <h2 className="sec-title" style={{ marginBottom: "1rem" }}>料金プラン</h2>
          <p className="sec-lead" style={{ margin: "0 auto", textAlign: "center", maxWidth: "520px" }}>
            施設規模やご要件に合わせて選べる3プラン。すべて年間契約です。
          </p>
        </FadeIn>

        {/* Cards */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap:                 "1.25rem",
            alignItems:          "stretch",
            marginBottom:        "2rem",
          }}
        >
          {plans.map((plan, i) => (
            <FadeIn key={plan.id} delay={i * 0.08}>
              <div
                style={{
                  position:      "relative",
                  background:    plan.id === "lite" ? "#fff" : plan.id === "enterprise" ? "var(--blue-50)" : "var(--blue-900)",
                  border:        plan.id === "lite" ? "2px solid var(--slate-200)" : plan.id === "enterprise" ? "2px solid var(--blue-300)" : "2px solid var(--blue-700)",
                  borderRadius:  "var(--r-xl)",
                  padding:       "1.75rem",
                  height:        "100%",
                  boxSizing:     "border-box",
                  color:         plan.id === "standard" ? "#fff" : "var(--text)",
                  boxShadow:     plan.id === "lite" ? "4px 4px 0 var(--slate-300)" : plan.id === "enterprise" ? "5px 5px 0 var(--blue-200)" : "6px 6px 0 rgba(0,0,0,0.3)",
                  display:       "flex",
                  flexDirection: "column",
                }}
              >
                {/* Recommended badge */}
                {plan.badge && (
                  <div
                    style={{
                      position:      "absolute",
                      top:           "-1px",
                      left:          "50%",
                      transform:     "translateX(-50%)",
                      display:       "inline-flex",
                      alignItems:    "center",
                      gap:           "0.3rem",
                      padding:       "0.25rem 0.875rem",
                      background:    "#F59E0B",
                      color:         "#fff",
                      borderRadius:  "0 0 8px 8px",
                      fontSize:      "0.6875rem",
                      fontWeight:    700,
                      letterSpacing: "0.06em",
                      whiteSpace:    "nowrap",
                    }}
                  >
                    <Star size={11} fill="#fff" />
                    {plan.badge}
                  </div>
                )}

                {/* Plan name */}
                <div style={{ marginBottom: "1.25rem", paddingTop: plan.badge ? "1rem" : 0 }}>
                  <p
                    style={{
                      fontSize:      "0.6875rem",
                      fontWeight:    700,
                      letterSpacing: "0.1em",
                      color:         plan.id === "standard" ? "rgba(255,255,255,0.6)" : "var(--text-3)",
                      marginBottom:  "0.375rem",
                    }}
                  >
                    {plan.sub}
                  </p>
                  <h3
                    style={{
                      fontSize:   "1.1875rem",
                      fontWeight: 800,
                      color:      plan.id === "standard" ? "#fff" : "var(--text)",
                    }}
                  >
                    {plan.name}
                  </h3>
                </div>

                {/* Price */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem" }}>
                    <span
                      style={{
                        fontSize:      "clamp(1.75rem, 3vw, 2.25rem)",
                        fontWeight:    900,
                        letterSpacing: "-0.04em",
                        color:         plan.id === "standard" ? "#fff" : "var(--blue-700)",
                      }}
                    >
                      ¥{plan.price}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      opacity:  plan.highlight ? 0.7 : undefined,
                      color:    plan.id === "standard" ? "rgba(255,255,255,0.5)" : "var(--text-3)",
                      marginTop: "0.25rem",
                    }}
                  >
                    {plan.unit}
                  </p>
                </div>

                {/* Includes */}
                <div style={{ flex: 1, marginBottom: "1.5rem" }}>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                    {plan.includes.map((item) => {
                      const isStrong = "strongItems" in plan && (plan.strongItems as readonly string[]).includes(item);
                      return (
                        <li
                          key={item}
                          style={{
                            display:    "flex",
                            gap:        "0.625rem",
                            alignItems: "flex-start",
                            fontSize:   "0.875rem",
                            fontWeight: isStrong ? 700 : 400,
                            color:      plan.id === "standard" ? (isStrong ? "#A5F3C4" : "rgba(255,255,255,0.85)") : (isStrong ? "var(--blue-700)" : "var(--text-2)"),
                          }}
                        >
                          <Check
                            size={16}
                            style={{
                              flexShrink: 0,
                              marginTop:  "0.1rem",
                              color:      plan.id === "standard" ? "#6EE7B7" : "var(--green-600)",
                            }}
                          />
                          {item}
                        </li>
                      );
                    })}
                    {plan.excludes.map((item) => (
                      <li
                        key={item}
                        style={{
                          display:    "flex",
                          gap:        "0.625rem",
                          alignItems: "flex-start",
                          fontSize:   "0.875rem",
                          color:      "var(--text-3)",
                          opacity:    0.6,
                        }}
                      >
                        <X size={16} style={{ flexShrink: 0, marginTop: "0.1rem" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Note */}
                {plan.note && (
                  <p
                    style={{
                      fontSize:     "0.8125rem",
                      lineHeight:   1.65,
                      marginBottom: "1.25rem",
                      padding:      "0.75rem 1rem",
                      background:   plan.id === "standard" ? "rgba(255,255,255,0.1)" : "var(--blue-50)",
                      borderRadius: "var(--r)",
                      color:        plan.id === "standard" ? "rgba(255,255,255,0.85)" : "var(--blue-700)",
                      fontWeight:   500,
                    }}
                  >
                    {plan.note}
                  </p>
                )}

                {/* CTA */}
                <a
                  href="/school-application"
                  style={{
                    display:        "block",
                    textAlign:      "center",
                    padding:        "0.75rem 1.25rem",
                    borderRadius:   "var(--r)",
                    fontSize:       "0.875rem",
                    fontWeight:     700,
                    textDecoration: "none",
                    background:     plan.id === "standard" ? "rgba(255,255,255,0.15)" : "transparent",
                    color:          plan.id === "standard" ? "#fff" : "var(--blue-700)",
                    border:         plan.id === "standard" ? "1.5px solid rgba(255,255,255,0.4)" : "1.5px solid var(--blue-500)",
                    transition:     "opacity 0.15s",
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Footnotes */}
        <FadeIn>
          <div
            style={{
              background:   "#fff",
              border:       "1px solid var(--border)",
              borderRadius: "var(--r-lg)",
              padding:      "1.25rem 1.5rem",
              fontSize:     "0.8125rem",
              color:        "var(--text-3)",
              lineHeight:   1.9,
            }}
          >
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "表示価格はすべて税別です。",
                "年間契約（一括払い）となります。",
                "初年度はモニター価格でのご提供も相談可能です。お気軽にお問い合わせください。",
                "法人プランの詳細はお問い合わせください。",
              ].map((note) => (
                <li key={note} style={{ display: "flex", gap: "0.5rem" }}>
                  <span style={{ flexShrink: 0 }}>・</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
