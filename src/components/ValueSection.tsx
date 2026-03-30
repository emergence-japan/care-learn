import { FadeIn } from "@/lib/motion";
import { FileDown, BellRing, CheckCircle2 } from "lucide-react";

const courses = [
  { num: "01", title: "ハラスメント対策研修",       color: "#DC2626" },
  { num: "02", title: "感染症・食中毒予防研修",     color: "var(--green-600)" },
  { num: "03", title: "プライバシー保護研修",       color: "#0891B2" },
  { num: "04", title: "事故発生防止研修",           color: "#D97706" },
  { num: "05", title: "認知症ケア研修",             color: "var(--blue-600)" },
  { num: "06", title: "接遇・マナー研修",           color: "#7C3AED" },
  { num: "07", title: "倫理・法令遵守研修",         color: "#0891B2" },
  { num: "08", title: "介護予防・自立支援研修",     color: "var(--green-600)" },
  { num: "09", title: "医療的ケア研修",             color: "#DC2626" },
  { num: "10", title: "看取り研修",               color: "#7C3AED" },
  { num: "11", title: "災害対策・防災訓練研修",     color: "#D97706" },
  { num: "12", title: "身体拘束廃止・防止研修",     color: "var(--blue-600)" },
  { num: "13", title: "高齢者虐待防止研修",         color: "#DC2626" },
  { num: "14", title: "精神的ケアに関する研修",     color: "#7C3AED" },
  { num: "15", title: "緊急時対応研修",             color: "#D97706" },
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
    <section id="value" style={{ padding: "6rem 0", background: "#fff" }}>
      <div className="container">

        {/* Section header */}
        <FadeIn style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="label">CORE VALUE</div>
          <h2 className="sec-title">Care Learning の3つの強み</h2>
          <p className="sec-lead" style={{ margin: "0.75rem auto 0", maxWidth: "520px", textAlign: "center" }}>
            監査対応・法改正への備え・全科目網羅。管理者の「困った」をまるごと解決します。
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
                  fontSize:      "clamp(1.375rem, 2.5vw, 1.75rem)",
                  fontWeight:    700,
                  letterSpacing: "-0.025em",
                  marginBottom:  "0.75rem",
                }}
              >
                監査に必要な書類が、
                <br />1クリックで揃う
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-2)", lineHeight: 1.85 }}>
                受講履歴・修了証・出席記録をシステムが自動で帳票化。
                監査当日に慌てません。施設単位・法人単位、両方の出力に対応しています。
              </p>
            </div>

            {/* Visual: document output card */}
            <div
              style={{
                borderRadius: "var(--r-lg)",
                overflow:     "hidden",
                border:       "1px solid var(--border)",
                boxShadow:    "var(--shadow-sm)",
                background:   "#fff",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
                  padding:    "1.25rem 1.5rem",
                  display:    "flex",
                  alignItems: "center",
                  gap:        "0.75rem",
                  borderBottom: "1px solid #BFDBFE",
                }}
              >
                <div
                  style={{
                    width:          40,
                    height:         40,
                    borderRadius:   "10px",
                    background:     "var(--blue-100)",
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                  }}
                >
                  <FileDown size={20} style={{ color: "var(--blue-700)" }} />
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "0.9375rem" }}>監査対応帳票 自動出力</p>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-3)", marginTop: "0.15rem" }}>1クリックでPDF生成</p>
                </div>
              </div>
              {[
                "受講履歴一覧",
                "修了証（スタッフ別）",
                "出席記録・確認署名",
                "科目別完了率レポート",
              ].map((doc, i) => (
                <div
                  key={i}
                  style={{
                    display:      "flex",
                    alignItems:   "center",
                    gap:          "0.75rem",
                    padding:      "0.8125rem 1.5rem",
                    borderBottom: i < 3 ? "1px solid var(--border)" : "none",
                    background:   "#fff",
                  }}
                >
                  <CheckCircle2 size={16} style={{ color: "var(--green-600)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.875rem", color: "var(--text-2)" }}>{doc}</span>
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
              <h3
                style={{
                  fontSize:      "clamp(1.375rem, 2.5vw, 1.75rem)",
                  fontWeight:    700,
                  letterSpacing: "-0.025em",
                  marginBottom:  "0.75rem",
                }}
              >
                法改正があれば、
                <br />すぐにお知らせ
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-2)", lineHeight: 1.85 }}>
                厚生労働省の通知をAIが常時モニタリング。
                研修内容に影響する変更があれば、管理者に即通知します。
                法改正への対応が後手に回ることがなくなります。
              </p>
            </div>

            {/* Visual: notification card */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                {
                  type:  "通知",
                  title: "法改正アラート",
                  body:  "身体拘束廃止に関する省令が改正されました。研修内容の確認をおすすめします。",
                  time:  "たった今",
                  color: "#DC2626",
                  bg:    "#FEF2F2",
                  border: "#FECACA",
                },
                {
                  type:  "更新完了",
                  title: "コンテンツ自動更新",
                  body:  "感染対策コースが最新の厚生労働省ガイドラインに対応しました。",
                  time:  "昨日",
                  color: "var(--green-700)",
                  bg:    "#F0FDF4",
                  border: "#A7F3D0",
                },
              ].map((n, i) => (
                <div
                  key={i}
                  style={{
                    background:   n.bg,
                    border:       `1px solid ${n.border}`,
                    borderRadius: "var(--r-lg)",
                    padding:      "1.125rem 1.25rem",
                    display:      "flex",
                    gap:          "0.875rem",
                    alignItems:   "flex-start",
                  }}
                >
                  <div
                    style={{
                      flexShrink:     0,
                      width:          36,
                      height:         36,
                      borderRadius:   "10px",
                      background:     "#fff",
                      border:         `1px solid ${n.border}`,
                      display:        "flex",
                      alignItems:     "center",
                      justifyContent: "center",
                    }}
                  >
                    <BellRing size={18} style={{ color: n.color }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.3rem" }}>
                      <span style={{ fontSize: "0.75rem", fontWeight: 700, color: n.color }}>{n.type}</span>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>{n.time}</span>
                    </div>
                    <p style={{ fontWeight: 700, fontSize: "0.875rem", marginBottom: "0.25rem" }}>{n.title}</p>
                    <p style={{ fontSize: "0.8125rem", color: "var(--text-2)", lineHeight: 1.6 }}>{n.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <div style={{ borderTop: "1px solid var(--border)", marginBottom: "4rem" }} />

        {/* ── Pillar 3 ── */}
        <FadeIn>
          <div style={{ marginBottom: "2.5rem" }}>
            {pillarBadge(3, "#FFEDD5", "var(--orange-500)")}
            <h3
              style={{
                fontSize:      "clamp(1.375rem, 2.5vw, 1.75rem)",
                fontWeight:    700,
                letterSpacing: "-0.025em",
                marginBottom:  "0.75rem",
              }}
            >
              これ一本で、
              <br />法定研修がすべて完結
            </h3>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-2)", lineHeight: 1.85, maxWidth: "560px" }}>
              15科目すべてに動画・スライド・理解度テストを完備。
              外部講師への依頼も、会場手配も不要です。
              必要な研修がひとつのプラットフォームで完結します。
            </p>
          </div>

          {/* Course card grid */}
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gridAutoRows:        "4.5rem",
              gap:                 "0.875rem",
            }}
          >
            {courses.map(({ num, title, color }) => (
              <div
                key={num}
                className="course-card"
                style={{ borderLeft: `3px solid ${color}`, overflow: "hidden" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position:      "absolute",
                    right:         "0.5rem",
                    bottom:        "-0.25rem",
                    fontSize:      "3.5rem",
                    fontWeight:    900,
                    lineHeight:    1,
                    color,
                    opacity:       0.07,
                    userSelect:    "none",
                    letterSpacing: "-0.04em",
                    pointerEvents: "none",
                  }}
                >
                  {num}
                </div>
                <p style={{ position: "relative", zIndex: 1, fontWeight: 700, fontSize: "0.875rem", lineHeight: 1.45, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {title}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
