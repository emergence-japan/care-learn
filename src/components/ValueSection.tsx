import { FadeIn } from "@/lib/motion";
import { Play, ClipboardCheck, Target, XCircle, CheckCircle2, Smartphone, Clock, MapPin } from "lucide-react";

const beforeAfter = [
  { before: "研修資料の準備・印刷",  after: "コンテンツ用意済み、割り当てるだけ" },
  { before: "日程調整・会場設定",     after: "不要（各自がスマホ・PCで受講）" },
  { before: "出席確認・受講記録",     after: "自動記録・リアルタイム反映" },
  { before: "監査用書類の作成",       after: "ボタン一つでPDF出力" },
  { before: "未受講者への声かけ",     after: "ダッシュボードで一目瞭然" },
];

const flowSteps = [
  {
    Icon:      Play,
    iconColor: "var(--blue-600)",
    iconBg:    "var(--blue-100)",
    title:     "スライド＋動画でインプット",
    desc:      "現場の事例を交えたわかりやすい構成。5〜10分/コマで隙間時間に完結。",
    bg:        "#F0F8FF",
    border:    "#BFDBFE",
    step:      "STEP 1",
  },
  {
    Icon:      ClipboardCheck,
    iconColor: "var(--green-600)",
    iconBg:    "var(--green-50)",
    title:     "理解度テストで定着確認",
    desc:      "多肢選択・自動採点・解説付き。「わかった気」で終わらせない設計。",
    bg:        "#F0FDF8",
    border:    "#A7F3D0",
    step:      "STEP 2",
  },
  {
    Icon:      Target,
    iconColor: "#D97706",
    iconBg:    "#FFFBEB",
    title:     "アクションプランで現場転移",
    desc:      "「明日からこうする」を言語化。学びが職場の行動変容に直結する。",
    bg:        "#FFFBEB",
    border:    "#FDE68A",
    step:      "STEP 3",
  },
];

const mobileScenes = [
  { Icon: Clock,     label: "休憩の5分",   desc: "ロッカールームで1コマ完了" },
  { Icon: Smartphone, label: "通勤中",     desc: "アプリ不要、ブラウザだけで" },
  { Icon: MapPin,    label: "夜勤の合間",  desc: "インストール・紙一切不要" },
];

const pillarBadge = (num: number, bg: string, color: string) => (
  <div
    style={{
      display:        "inline-flex",
      alignItems:     "center",
      justifyContent: "center",
      width:  44,
      height: 44,
      borderRadius:   "50%",
      background:     bg,
      color,
      fontSize:       "1.125rem",
      fontWeight:     700,
      marginBottom:   "1rem",
    }}
  >
    {num}
  </div>
);

export default function ValueSection() {
  return (
    <section id="value" style={{ padding: "6rem 0", background: "var(--slate-50)" }}>
      <div className="container">

        {/* Section header */}
        <FadeIn style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="label">CORE VALUE</div>
          <h2 className="sec-title">Care Learning の3つの強み</h2>
          <p className="sec-lead" style={{ margin: "0.75rem auto 0", maxWidth: "520px", textAlign: "center" }}>
            管理者・スタッフ・法人、それぞれの課題をひとつのプラットフォームで解決します。
          </p>
        </FadeIn>

        {/* ── Pillar 1 ── */}
        <FadeIn style={{ marginBottom: "4rem" }}>
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap:                 "3rem",
              alignItems:          "start",
            }}
          >
            <div>
              {pillarBadge(1, "var(--blue-100)", "var(--blue-700)")}
              <h3
                style={{
                  fontSize:      "clamp(1.5rem, 2.5vw, 1.875rem)",
                  fontWeight:    700,
                  letterSpacing: "-0.025em",
                  marginBottom:  "0.75rem",
                }}
              >
                管理負担ゼロ
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-2)", lineHeight: 1.85 }}>
                施設管理者が手作業でやっていたすべての作業を自動化。
                研修の準備から監査対応まで、もう時間を奪われません。
              </p>
            </div>

            {/* Before/After table */}
            <div
              style={{
                borderRadius: "var(--r-lg)",
                overflow:     "hidden",
                boxShadow:    "var(--shadow-sm)",
                border:       "1px solid var(--border)",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <div style={{ padding: "0.75rem 1rem", background: "#FEE2E2", color: "#991B1B", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em" }}>
                  <XCircle size={13} style={{ display: "inline", marginRight: "0.375rem", verticalAlign: "-0.1em" }} />今まで
                </div>
                <div style={{ padding: "0.75rem 1rem", background: "var(--green-100)", color: "#065F46", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em" }}>
                  <CheckCircle2 size={13} style={{ display: "inline", marginRight: "0.375rem", verticalAlign: "-0.1em" }} />これから
                </div>
              </div>
              {beforeAfter.map((row, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid var(--border)" }}>
                  <div style={{ padding: "0.8125rem 1rem", background: "#FFFAFA", color: "#7F1D1D", fontSize: "0.875rem", lineHeight: 1.5, borderRight: "1px solid var(--border)" }}>
                    {row.before}
                  </div>
                  <div style={{ padding: "0.8125rem 1rem", background: "#fff", color: "#064E3B", fontSize: "0.875rem", fontWeight: 500, lineHeight: 1.5 }}>
                    {row.after}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <div style={{ borderTop: "1px solid var(--border)", marginBottom: "4rem" }} />

        {/* ── Pillar 2 ── */}
        <FadeIn style={{ marginBottom: "4rem" }}>
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap:                 "3rem",
              alignItems:          "start",
            }}
          >
            <div>
              {pillarBadge(2, "var(--green-100)", "var(--green-700)")}
              <div style={{ marginBottom: "0.5rem" }}>
                <span
                  style={{
                    display:       "inline-block",
                    padding:       "0.2rem 0.625rem",
                    background:    "#EDE9FE",
                    color:         "#5B21B6",
                    borderRadius:  "999px",
                    fontSize:      "0.6875rem",
                    fontWeight:    700,
                    letterSpacing: "0.06em",
                    marginBottom:  "0.625rem",
                  }}
                >
                  Instructional Design
                </span>
              </div>
              <h3
                style={{
                  fontSize:      "clamp(1.25rem, 2.5vw, 1.75rem)",
                  fontWeight:    700,
                  letterSpacing: "-0.025em",
                  marginBottom:  "0.75rem",
                }}
              >
                「やった」だけで終わらない
                <br />学習設計
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-2)", lineHeight: 1.85 }}>
                インストラクショナルデザイン（ID）の理論に基づき、
                学習→確認→実践の3ステップで構成。
                受講記録が残るだけの研修から、
                <strong style={{ color: "var(--text)" }}>現場で行動が変わる研修</strong>へ。
              </p>
            </div>

            {/* Learning flow */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {flowSteps.map((step, i) => (
                <div key={i}>
                  <div
                    style={{
                      padding:      "1.375rem 1.5rem",
                      background:   step.bg,
                      border:       `1px solid ${step.border}`,
                      borderRadius: "var(--r)",
                      display:      "flex",
                      gap:          "1rem",
                      alignItems:   "flex-start",
                    }}
                  >
                    <div
                      style={{
                        flexShrink:     0,
                        width:          44,
                        height:         44,
                        borderRadius:   "12px",
                        background:     step.iconBg,
                        display:        "flex",
                        alignItems:     "center",
                        justifyContent: "center",
                      }}
                    >
                      <step.Icon size={22} style={{ color: step.iconColor }} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.6875rem", fontWeight: 700, color: "var(--text-3)", letterSpacing: "0.08em", marginBottom: "0.2rem" }}>
                        {step.step}
                      </div>
                      <div style={{ fontWeight: 700, fontSize: "0.9375rem", marginBottom: "0.25rem" }}>
                        {step.title}
                      </div>
                      <div style={{ fontSize: "0.85rem", color: "var(--text-2)", lineHeight: 1.6 }}>
                        {step.desc}
                      </div>
                    </div>
                  </div>
                  {i < flowSteps.length - 1 && (
                    <div style={{ display: "flex", justifyContent: "center", padding: "0.375rem 0", color: "var(--text-3)", fontSize: "1.125rem" }}>
                      ↓
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <div style={{ borderTop: "1px solid var(--border)", marginBottom: "4rem" }} />

        {/* ── Pillar 3 ── */}
        <FadeIn>
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap:                 "3rem",
              alignItems:          "start",
            }}
          >
            <div>
              {pillarBadge(3, "#FFEDD5", "var(--orange-500)")}
              <h3
                style={{
                  fontSize:      "clamp(1.25rem, 2.5vw, 1.75rem)",
                  fontWeight:    700,
                  letterSpacing: "-0.025em",
                  marginBottom:  "0.75rem",
                }}
              >
                忙しいスタッフでも
                <br />続けられる設計
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-2)", lineHeight: 1.85 }}>
                介護の現場は時間が取れない。だから Care Learning は、
                <strong style={{ color: "var(--text)" }}>1コマ5〜10分・スマホ完結・インストール不要</strong>で設計。
                通勤中でも休憩中でも、日常の隙間に自然に学習が組み込まれます。
              </p>
              {/* Stats row */}
              <div
                style={{
                  display:  "flex",
                  gap:      "1.5rem",
                  flexWrap: "wrap",
                  marginTop: "1.75rem",
                }}
              >
                {[
                  { num: "5〜10分", label: "1コマの学習時間" },
                  { num: "0円",     label: "アプリ導入コスト" },
                  { num: "24時間",  label: "いつでも受講可能" },
                ].map(({ num, label }) => (
                  <div key={label}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--orange-500)", lineHeight: 1 }}>
                      {num}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-3)", marginTop: "0.25rem" }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scene cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {mobileScenes.map(({ Icon, label, desc }, i) => (
                <div
                  key={i}
                  style={{
                    display:      "flex",
                    alignItems:   "center",
                    gap:          "1rem",
                    padding:      "1.25rem 1.5rem",
                    background:   "#fff",
                    border:       "1px solid var(--border)",
                    borderRadius: "var(--r)",
                    boxShadow:    "var(--shadow-sm)",
                  }}
                >
                  <div
                    style={{
                      flexShrink:     0,
                      width:          44,
                      height:         44,
                      borderRadius:   "12px",
                      background:     "#FFF7ED",
                      display:        "flex",
                      alignItems:     "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={20} style={{ color: "var(--orange-500)" }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.9375rem", marginBottom: "0.2rem" }}>
                      {label}
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-2)" }}>
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
