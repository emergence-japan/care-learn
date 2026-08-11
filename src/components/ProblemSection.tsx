import { FadeIn } from "@/lib/motion";
import {
  ClipboardList,
  CalendarX,
  Users,
  FileWarning,
  BookOpen,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface Pain {
  Icon: LucideIcon;
  color: string;
  bg: string;
  title: string;
  sub: string;
}

const pains: Pain[] = [
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
  {
    Icon:  ClipboardList,
    color: "#DC2626",
    bg:    "#FEF2F2",
    title: "監査のたびに受講記録を手作業でまとめている",
    sub:   "システムがないため、毎回ゼロから集計・整理しなければならない",
  },
  {
    Icon:  BookOpen,
    color: "#D97706",
    bg:    "#FFFBEB",
    title: "法改正があっても研修内容をいつ更新すればいいかわからない",
    sub:   "厚生労働省の通知を見落としがちで、対応が後手に回りやすい",
  },
];

export default function ProblemSection() {
  return (
    <section id="pain" style={{ padding: "6rem 0", background: "var(--slate-50)" }}>
      <div className="container">

        <SectionHeader
          label="PROBLEM"
          title="こんな悩み、ありませんか？"
          lead="介護現場の法定研修は「管理の形骸化」と「学習の形骸化」という二重の問題を抱えています。"
          maxWidth="560px"
        />

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
                <div className="icon-box" style={{ background: bg, marginTop: "0.1rem" }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: "0.9375rem", lineHeight: 1.5 }}>
                    {title}
                  </p>
                  <p className="pain-card__sub">{sub}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="bridge-message">
            <p className="bridge-message__text">
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
