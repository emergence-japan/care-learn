import { FadeIn } from "@/lib/motion";
import {
  Smartphone,
  FileText,
  BarChart3,
  CalendarDays,
  PlayCircle,
  CheckSquare,
  PenLine,
  Building2,
} from "lucide-react";

const primary = [
  {
    Icon:    Smartphone,
    label:   "現場スタッフの学び方を変える",
    title:   "隙間時間にスマホで完結",
    desc:    "業務中の5分で1コマ完了。インストール不要のブラウザ対応で、ロッカールームでも、通勤中でも受講できる。忙しい介護スタッフに、無理のない学習体験を。",
    bg:      "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)",
    iconBg:  "var(--orange-50)",
    color:   "var(--orange-500)",
    badge:   "スタッフ体験",
    badgeColor: "var(--orange-500)",
    badgeBg:    "#FFF7ED",
  },
  {
    Icon:    BarChart3,
    label:   "管理者の手間を限りなくゼロへ",
    title:   "リアルタイム進捗ダッシュボード",
    desc:    "スタッフ個人・施設・法人全体の3段階で受講完了率を即時把握。メールや電話での確認作業が不要になる。",
    bg:      "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
    iconBg:  "var(--blue-50)",
    color:   "var(--blue-600)",
    badge:   "管理者体験",
    badgeColor: "var(--blue-700)",
    badgeBg:    "var(--blue-50)",
  },
  {
    Icon:    FileText,
    label:   "監査を恐れない運営体制へ",
    title:   "監査書類をボタン一つでPDF出力",
    desc:    "監査前日に何時間もかけていた書類作成がゼロに。施設単位・法人単位、両方に対応。いつでも最新の実績データを証跡として出力できる。",
    bg:      "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)",
    iconBg:  "#DCFCE7",
    color:   "var(--green-600)",
    badge:   "コンプライアンス",
    badgeColor: "var(--green-700)",
    badgeBg:    "#DCFCE7",
  },
];

const secondary = [
  {
    Icon:  CalendarDays,
    title: "年間研修計画",
    desc:  "タイムラインUIで年間スケジュールを視覚管理。",
    bg:    "var(--blue-50)",
    color: "var(--blue-600)",
  },
  {
    Icon:  PlayCircle,
    title: "スライド＋動画コンテンツ",
    desc:  "わかりやすいマルチメディアeラーニングを提供。",
    bg:    "#F5F3FF",
    color: "#7C3AED",
  },
  {
    Icon:  CheckSquare,
    title: "理解度テスト・自動採点",
    desc:  "多肢選択式テスト＋解説つきで確実な定着を支援。",
    bg:    "var(--blue-50)",
    color: "var(--blue-600)",
  },
  {
    Icon:  PenLine,
    title: "アクションプラン",
    desc:  "研修後の行動計画を記録。学びを現場の実践に。",
    bg:    "var(--green-50)",
    color: "var(--green-600)",
  },
  {
    Icon:  Building2,
    title: "複数施設の一元管理",
    desc:  "法人本部が全施設の状況を一画面で比較・把握。",
    bg:    "var(--blue-50)",
    color: "var(--blue-600)",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" style={{ padding: "6rem 0", background: "#fff" }}>
      <div className="container">

        <FadeIn style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="label">FEATURES</div>
          <h2 className="sec-title" style={{ marginBottom: "1rem" }}>主な機能</h2>
          <p className="sec-lead" style={{ margin: "0 auto", textAlign: "center", maxWidth: "560px" }}>
            忙しい介護現場のために設計された、使いやすさと管理効率を両立する機能群。
          </p>
        </FadeIn>

        {/* Primary features — 3 differentiators */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap:                 "1.25rem",
            marginBottom:        "1.25rem",
          }}
        >
          {primary.map(({ Icon, label, title, desc, bg, iconBg, color, badge, badgeColor, badgeBg }, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                style={{
                  background:   bg,
                  borderRadius: "var(--r-xl)",
                  padding:      "1.75rem",
                  height:       "100%",
                  boxSizing:    "border-box",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <div
                    style={{
                      width:          48,
                      height:         48,
                      borderRadius:   "12px",
                      background:     iconBg,
                      display:        "flex",
                      alignItems:     "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={22} style={{ color }} />
                  </div>
                  <span
                    style={{
                      padding:       "0.2rem 0.625rem",
                      background:    badgeBg,
                      color:         badgeColor,
                      borderRadius:  "999px",
                      fontSize:      "0.6875rem",
                      fontWeight:    700,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {badge}
                  </span>
                </div>
                <p style={{ fontSize: "0.75rem", color: "var(--text-3)", marginBottom: "0.375rem", fontWeight: 600 }}>
                  {label}
                </p>
                <h3 style={{ fontSize: "1.0625rem", fontWeight: 800, marginBottom: "0.75rem", color: "var(--text)" }}>
                  {title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-2)", lineHeight: 1.75 }}>
                  {desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Secondary features — supporting */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap:                 "1rem",
          }}
        >
          {secondary.map(({ Icon, title, desc, bg, color }, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div
                style={{
                  background:   "#fff",
                  borderRadius: "var(--r-lg)",
                  border:       "1px solid var(--border)",
                  padding:      "1.25rem",
                  height:       "100%",
                  boxSizing:    "border-box",
                }}
              >
                <div
                  style={{
                    width:          40,
                    height:         40,
                    borderRadius:   "10px",
                    background:     bg,
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                    marginBottom:   "0.875rem",
                  }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <h3 style={{ fontSize: "0.875rem", fontWeight: 700, marginBottom: "0.3rem" }}>
                  {title}
                </h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-2)", lineHeight: 1.65 }}>
                  {desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
