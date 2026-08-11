import { Check } from "lucide-react";
import { FadeIn } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface PriceRow {
  label: string;
  price: string;
  unit: string;
  note: string;
  strike?: string;
}

const rows: PriceRow[] = [
  {
    label: "初期費用",
    price:  "0円",
    unit:   "キャンペーン価格",
    note:   "導入時の設定サポートも無償で対応します。",
    strike: "50,000円",
  },
  {
    label: "基本システム利用料",
    price: "10,000円",
    unit:  "月額 / 1施設",
    note:  "30ID（ユーザー）分のアカウント利用料込み。法定研修動画の見放題、進捗管理機能、受講証明書の自動発行機能。",
  },
  {
    label: "アカウント追加利用料",
    price: "200円",
    unit:  "月額 / 1ユーザー（従量課金）",
    note:  "31人目以降、利用するスタッフの人数分のみ課金。人の入れ替わりがあっても無駄な費用は発生しません。",
  },
];

const highlights = [
  "他社サービス（定額制）からの乗り換えに最適",
  "30名以上は在籍しているアクティブな人数分のみの課金",
  "退職者や産休中のスタッフのIDに無駄なお金を払う必要なし",
];

const footnotes = [
  "表示価格はすべて税別です。",
  "1年契約となります。無理な引き留めや解約違約金はございません。",
  "まずは1ヶ月無料トライアルでお試しいただけます。",
];

export default function PricingSection() {
  return (
    <section id="pricing" style={{ padding: "6rem 0", background: "#fff" }}>
      <div className="container">

        <SectionHeader
          label="PRICING"
          title="料金プラン"
          lead="無駄なく使える「基本システム料＋従量課金モデル」。1ヶ月無料トライアルからお試しいただけます。"
        />

        <FadeIn>
          <div
            style={{
              maxWidth:     "760px",
              margin:       "0 auto 1.5rem",
              borderRadius: "var(--r-xl)",
              border:       "2px solid var(--blue-700)",
              overflow:     "hidden",
              boxShadow:    "6px 6px 0 var(--blue-100)",
            }}
          >
            <div
              style={{
                background: "var(--blue-900)",
                color:      "#fff",
                padding:    "1.25rem 1.75rem",
                textAlign:  "center",
              }}
            >
              <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", opacity: 0.7 }}>
                他社サービス（定額制）からの乗り換えに最適です
              </p>
            </div>

            {rows.map((row, i) => (
              <div
                key={row.label}
                style={{
                  display:      "flex",
                  flexWrap:     "wrap",
                  alignItems:   "baseline",
                  gap:          "0.5rem 1.5rem",
                  padding:      "1.5rem 1.75rem",
                  borderTop:    i === 0 ? "none" : "1px solid var(--border)",
                  background:   i === 0 ? "var(--blue-50)" : "#fff",
                }}
              >
                <div style={{ flex: "1 1 180px" }}>
                  <p style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--text)" }}>
                    {row.label}
                  </p>
                </div>

                <div style={{ flex: "0 0 auto", display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                  {row.strike && (
                    <span style={{ fontSize: "0.9375rem", color: "var(--text-3)", textDecoration: "line-through" }}>
                      {row.strike}
                    </span>
                  )}
                  <span
                    style={{
                      fontSize:      "1.5rem",
                      fontWeight:    900,
                      letterSpacing: "-0.03em",
                      color:         "var(--blue-700)",
                    }}
                  >
                    {row.price}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>
                    {row.unit}
                  </span>
                </div>

                <p style={{ flex: "1 1 100%", fontSize: "0.8125rem", color: "var(--text-2)", lineHeight: 1.7 }}>
                  {row.note}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="grid-secondary" style={{ maxWidth: "760px", margin: "0 auto 2rem" }}>
            {highlights.map((h) => (
              <div
                key={h}
                style={{
                  display:    "flex",
                  gap:        "0.625rem",
                  alignItems: "flex-start",
                  fontSize:   "0.8125rem",
                  color:      "var(--text-2)",
                }}
              >
                <Check size={16} style={{ flexShrink: 0, marginTop: "0.15rem", color: "var(--green-600)" }} />
                {h}
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.12} style={{ textAlign: "center", marginBottom: "2rem" }}>
          <a href="/school-application" className="btn btn-cta btn-lg">
            1ヶ月無料トライアルに申し込む
          </a>
        </FadeIn>

        <FadeIn>
          <div className="footnote-box" style={{ maxWidth: "760px", margin: "0 auto" }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {footnotes.map((note) => (
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
