import { FadeIn } from "@/lib/motion";
import { Video, FileText, ClipboardCheck, ShieldCheck } from "lucide-react";

const courses = [
  {
    num:   "01",
    title: "認知症介護",
    color: "var(--blue-600)",
    bg:    "var(--blue-50)",
  },
  {
    num:   "02",
    title: "身体拘束廃止",
    color: "#7C3AED",
    bg:    "#F5F3FF",
  },
  {
    num:   "03",
    title: "感染対策",
    color: "var(--green-600)",
    bg:    "var(--green-50)",
  },
  {
    num:   "04",
    title: "リスクマネジメント",
    color: "#D97706",
    bg:    "#FFFBEB",
  },
  {
    num:   "05",
    title: "ハラスメント対策",
    color: "#DC2626",
    bg:    "#FEF2F2",
  },
  {
    num:   "06",
    title: "プライバシー保護",
    color: "#0891B2",
    bg:    "#ECFEFF",
  },
];

const formats = [
  { Icon: Video,           label: "動画" },
  { Icon: FileText,        label: "スライド" },
  { Icon: ClipboardCheck,  label: "理解度テスト" },
];

export default function CoursesSection() {
  return (
    <section id="courses" style={{ padding: "6rem 0", background: "#fff" }}>
      <div className="container">

        <FadeIn style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="label">COURSES</div>
          <h2 className="sec-title" style={{ marginBottom: "1rem" }}>収録コース一覧</h2>
          <p className="sec-lead" style={{ margin: "0 auto", textAlign: "center", maxWidth: "520px" }}>
            厚生労働省の法定要件として必要な科目をすべて網羅しています。
          </p>
        </FadeIn>

        {/* Format badges */}
        <FadeIn>
          <div
            style={{
              display:        "flex",
              flexWrap:       "wrap",
              justifyContent: "center",
              gap:            "0.75rem",
              marginBottom:   "2.5rem",
            }}
          >
            {formats.map(({ Icon, label }) => (
              <span
                key={label}
                style={{
                  display:      "inline-flex",
                  alignItems:   "center",
                  gap:          "0.4rem",
                  padding:      "0.375rem 0.875rem",
                  background:   "var(--slate-50)",
                  border:       "1px solid var(--border)",
                  borderRadius: "999px",
                  fontSize:     "0.8125rem",
                  fontWeight:   600,
                  color:        "var(--text-2)",
                }}
              >
                <Icon size={14} />
                {label}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Course cards */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap:                 "1rem",
            marginBottom:        "2rem",
          }}
        >
          {courses.map(({ num, title, color, bg }, i) => (
            <FadeIn key={num} delay={i * 0.06}>
              <div
                style={{
                  background:   "#fff",
                  border:       "1px solid var(--border)",
                  borderRadius: "var(--r-lg)",
                  padding:      "1.375rem 1.5rem",
                  display:      "flex",
                  alignItems:   "center",
                  gap:          "1rem",
                  boxShadow:    "var(--shadow-sm)",
                }}
              >
                {/* Number badge */}
                <div
                  style={{
                    flexShrink:     0,
                    width:          44,
                    height:         44,
                    borderRadius:   "12px",
                    background:     bg,
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                    fontSize:       "0.8125rem",
                    fontWeight:     800,
                    color,
                    letterSpacing:  "0.03em",
                  }}
                >
                  {num}
                </div>

                {/* Title + compliance badge */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontWeight: 700, fontSize: "0.9375rem", lineHeight: 1.4 }}>
                    {title}
                  </p>
                  <span
                    style={{
                      display:       "inline-flex",
                      alignItems:    "center",
                      gap:           "0.25rem",
                      marginTop:     "0.375rem",
                      padding:       "0.15rem 0.5rem",
                      background:    "#F0FDF4",
                      color:         "#065F46",
                      borderRadius:  "4px",
                      fontSize:      "0.6875rem",
                      fontWeight:    700,
                      letterSpacing: "0.03em",
                    }}
                  >
                    <ShieldCheck size={10} />
                    厚生労働省 法定要件準拠
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom message */}
        <FadeIn>
          <div
            style={{
              background:   "linear-gradient(135deg, var(--blue-900) 0%, var(--blue-700) 100%)",
              borderRadius: "var(--r-xl)",
              padding:      "2rem 2.5rem",
              textAlign:    "center",
              color:        "#fff",
            }}
          >
            <p
              style={{
                fontSize:   "clamp(0.9rem, 2vw, 1.0625rem)",
                fontWeight: 600,
                lineHeight: 1.8,
              }}
            >
              全6科目に
              <span style={{ color: "#A5F3C4" }}>動画・スライド・理解度テスト</span>
              を完備。
              <br />
              外部講師への依頼も、会場手配も、もう必要ありません。
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
