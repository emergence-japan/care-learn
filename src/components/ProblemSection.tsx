import { FadeIn } from "@/lib/motion";
import {
  ClipboardList,
  CalendarX,
  Users,
  FileWarning,
  BookOpen,
  Building2,
} from "lucide-react";

const pains = [
  {
    Icon:  ClipboardList,
    color: "#DC2626",
    bg:    "#FEF2F2",
    title: "ExcelやWordで管理していて集計が大変",
    sub:   "年度末・監査前に慌てて書類をまとめる毎年の地獄",
  },
  {
    Icon:  CalendarX,
    color: "#D97706",
    bg:    "#FFFBEB",
    title: "日程調整と会場確保が毎回手間",
    sub:   "参加できないスタッフが出るたびに補講対応が発生する",
  },
  {
    Icon:  Users,
    color: "#DC2626",
    bg:    "#FEF2F2",
    title: "未受講者を追いかけるのが苦痛",
    sub:   "誰が受けていないか把握しきれず、声かけに時間が奪われる",
  },
  {
    Icon:  FileWarning,
    color: "#D97706",
    bg:    "#FFFBEB",
    title: "監査のたびに書類作成で残業",
    sub:   "実施記録・出席者名簿・確認テスト結果を一から整理する",
  },
  {
    Icon:  BookOpen,
    color: "#DC2626",
    bg:    "#FEF2F2",
    title: "研修を受けても何も身についていない",
    sub:   "「聞いているだけ」で終わり、現場の行動がいつまでも変わらない",
  },
  {
    Icon:  Building2,
    color: "#D97706",
    bg:    "#FFFBEB",
    title: "複数施設の状況がリアルタイムに見えない",
    sub:   "各施設からの報告を待つだけで、本部から全体を把握できない",
  },
];

export default function ProblemSection() {
  return (
    <section id="pain" style={{ padding: "6rem 0", background: "#fff" }}>
      <div className="container">

        {/* Header */}
        <FadeIn style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="label">PROBLEM</div>
          <h2 className="sec-title" style={{ marginBottom: "1rem" }}>
            こんな悩み、ありませんか？
          </h2>
          <p className="sec-lead" style={{ margin: "0 auto", textAlign: "center", maxWidth: "560px" }}>
            介護現場の法定研修は「管理の形骸化」と「学習の形骸化」という
            二重の問題を抱えています。
          </p>
        </FadeIn>

        {/* Pain cards */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap:                 "0.875rem",
            maxWidth:            "840px",
            margin:              "0 auto 2.5rem",
          }}
        >
          {pains.map(({ Icon, color, bg, title, sub }, i) => (
            <FadeIn key={i} delay={i * 0.055}>
              <div className="pain-card">
                <div
                  style={{
                    flexShrink:     0,
                    width:          40,
                    height:         40,
                    borderRadius:   "10px",
                    background:     bg,
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                    marginTop:      "0.1rem",
                  }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: "0.9375rem", lineHeight: 1.5 }}>
                    {title}
                  </p>
                  <p
                    style={{
                      fontSize:   "0.85rem",
                      color:      "var(--text-2)",
                      marginTop:  "0.25rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {sub}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bridge message */}
        <FadeIn>
          <div
            style={{
              background:   "linear-gradient(135deg, var(--blue-900) 0%, var(--blue-700) 100%)",
              borderRadius: "var(--r-xl)",
              padding:      "2.25rem 2.5rem",
              textAlign:    "center",
              color:        "#fff",
            }}
          >
            <p
              style={{
                fontSize:   "clamp(1rem, 2.5vw, 1.1875rem)",
                fontWeight: 600,
                lineHeight: 1.8,
              }}
            >
              これらはすべて、
              <span style={{ color: "#FFD080" }}>「管理の仕組みがない」</span>
              から起きています。
              <br />
              Care Learningは、管理の手間をゼロにし、
              <span style={{ color: "#A5F3C4" }}>本当に身につく研修体験</span>
              を実現する仕組みを提供します。
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
