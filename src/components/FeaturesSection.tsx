import Image from "next/image";
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
  type LucideIcon,
} from "lucide-react";
import { MobileLessonMockup, DashboardMockup, AuditDocMockup } from "./FeatureMockups";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface PrimaryFeature {
  Icon: LucideIcon;
  label: string;
  title: string;
  desc: string;
  bg: string;
  iconBg: string;
  color: string;
  badge: string;
  badgeColor: string;
  badgeBg: string;
  Mockup: React.ComponentType;
}

interface SecondaryFeature {
  Icon: LucideIcon;
  title: string;
  desc: string;
  bg: string;
  color: string;
  screenshot?: string;
  screenshotAlt?: string;
  screenshots?: { src: string; alt: string }[];
}

const primary: PrimaryFeature[] = [
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
    Mockup:  MobileLessonMockup,
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
    Mockup:  DashboardMockup,
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
    Mockup:  AuditDocMockup,
  },
];

const secondary: SecondaryFeature[] = [
  {
    Icon:          CalendarDays,
    title:         "年間研修計画",
    desc:          "タイムラインUIで年間スケジュールを視覚管理。",
    bg:            "var(--blue-50)",
    color:         "var(--blue-600)",
    screenshot:    "/images/mockups/demo_施設管理 - 研修計画.png",
    screenshotAlt: "年間研修計画のタイムライン画面",
  },
  {
    Icon:  PlayCircle,
    title: "スライド＋動画教材",
    desc:  "わかりやすいマルチメディアeラーニングを提供。",
    bg:    "#F5F3FF",
    color: "#7C3AED",
    screenshots: [
      { src: "/images/mockups/スライド.png", alt: "スライド教材画面" },
      { src: "/images/mockups/動画.png",     alt: "動画教材画面" },
    ],
  },
  {
    Icon:          CheckSquare,
    title:         "理解度テスト・自動採点",
    desc:          "多肢選択式テスト＋解説つきで確実な定着を支援。",
    bg:            "var(--blue-50)",
    color:         "var(--blue-600)",
    screenshot:    "/images/mockups/理解度.png",
    screenshotAlt: "理解度テスト・自動採点画面",
  },
  {
    Icon:          PenLine,
    title:         "アクションプラン",
    desc:          "研修後の行動計画を記録。学びを現場の実践に。",
    bg:            "var(--green-50)",
    color:         "var(--green-600)",
    screenshot:    "/images/mockups/行動宣言.png",
    screenshotAlt: "アクションプラン・行動宣言画面",
  },
  {
    Icon:          Building2,
    title:         "複数施設の一元管理",
    desc:          "法人本部が全施設の状況を一画面で比較・把握。",
    bg:            "var(--blue-50)",
    color:         "var(--blue-600)",
    screenshot:    "/images/mockups/施設管理一覧.png",
    screenshotAlt: "複数施設一元管理画面",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" style={{ padding: "6rem 0", background: "var(--slate-50)" }}>
      <div className="container">

        <SectionHeader
          label="FEATURES"
          title="主な機能"
          lead="忙しい介護現場のために設計された、使いやすさと管理効率を両立する機能群。"
          maxWidth="560px"
        />

        {/* プライマリ機能 — 3大差別化ポイント */}
        <div className="grid-cards" style={{ marginBottom: "1.25rem" }}>
          {primary.map(({ Icon, label, title, desc, bg, iconBg, color, badge, badgeColor, badgeBg, Mockup }, i) => (
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
                <div className="feature-card__header">
                  <div
                    className="icon-box"
                    style={{ width: 48, height: 48, borderRadius: "12px", background: iconBg }}
                  >
                    <Icon size={22} style={{ color }} />
                  </div>
                  <span className="feature-badge" style={{ background: badgeBg, color: badgeColor }}>
                    {badge}
                  </span>
                </div>
                <p className="feature-label">{label}</p>
                <h3 className="feature-title">{title}</h3>
                <p className="feature-desc">{desc}</p>
                <Mockup />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* セカンダリ機能 */}
        <div className="grid-secondary">
          {secondary.map(({ Icon, title, desc, bg, color, screenshot, screenshotAlt, screenshots }, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="secondary-card">
                <div className="icon-box" style={{ background: bg, marginBottom: "0.875rem" }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <h3 className="secondary-card__title">{title}</h3>
                <p className="secondary-card__desc">{desc}</p>
                {screenshot && (
                  <div className="screenshot-wrap">
                    <Image
                      src={screenshot}
                      alt={screenshotAlt ?? title}
                      width={800}
                      height={500}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                )}
                {screenshots && (
                  <div style={{ marginTop: "0.875rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {screenshots.map(({ src, alt }) => (
                      <div key={src} className="screenshot-wrap">
                        <Image
                          src={src}
                          alt={alt}
                          width={400}
                          height={300}
                          style={{ width: "100%", height: "auto", display: "block" }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
