import { FadeIn } from "@/lib/motion";
import { FileDown, BellRing, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface Course {
  num: string;
  title: string;
  color: string;
}

interface Notification {
  type: string;
  title: string;
  body: string;
  time: string;
  color: string;
  bg: string;
  border: string;
}

const courses: Course[] = [
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

const notifications: Notification[] = [
  {
    type:   "通知",
    title:  "法改正アラート",
    body:   "身体拘束廃止に関する省令が改正されました。研修内容の確認をおすすめします。",
    time:   "たった今",
    color:  "#DC2626",
    bg:     "#FEF2F2",
    border: "#FECACA",
  },
  {
    type:   "更新完了",
    title:  "コンテンツ自動更新",
    body:   "感染対策コースが最新の厚生労働省ガイドラインに対応しました。",
    time:   "昨日",
    color:  "var(--green-700)",
    bg:     "#F0FDF4",
    border: "#A7F3D0",
  },
];

const auditDocs = [
  "受講履歴一覧",
  "修了証（スタッフ別）",
  "出席記録・確認署名",
  "科目別完了率レポート",
];

function PillarBadge({ num, bg, color }: { num: number; bg: string; color: string }) {
  return (
    <div className="pillar-badge" style={{ background: bg, color }}>
      {num}
    </div>
  );
}

function PillarTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="pillar-title">{children}</h3>
  );
}

function PillarLead({ children }: { children: React.ReactNode }) {
  return (
    <p className="pillar-lead">{children}</p>
  );
}

function PillarDivider() {
  return <div style={{ borderTop: "1px solid var(--border)", marginBottom: "4rem" }} />;
}

export default function ValueSection() {
  return (
    <section id="value" style={{ padding: "6rem 0", background: "#fff" }}>
      <div className="container">

        <SectionHeader
          label="CORE VALUE"
          title="Care Learning の3つの強み"
          lead="監査対応・法改正への備え・全科目網羅。管理者の「困った」をまるごと解決します。"
          marginBottom="4rem"
        />

        {/* ── 強み1: 監査書類 ── */}
        <FadeIn style={{ marginBottom: "4rem" }}>
          <div className="grid-2col">
            <div>
              <PillarBadge num={1} bg="var(--blue-100)" color="var(--blue-700)" />
              <PillarTitle>監査に必要な書類が、<br />1クリックで揃う</PillarTitle>
              <PillarLead>
                受講履歴・修了証・出席記録をシステムが自動で帳票化。
                監査当日に慌てません。施設単位・法人単位、両方の出力に対応しています。
              </PillarLead>
            </div>

            <div className="value-card">
              <div className="value-card__header">
                <div className="icon-box icon-box--blue">
                  <FileDown size={20} style={{ color: "var(--blue-700)" }} />
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "0.9375rem" }}>監査対応帳票 自動出力</p>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-3)", marginTop: "0.15rem" }}>1クリックでPDF生成</p>
                </div>
              </div>
              {auditDocs.map((doc, i) => (
                <div
                  key={doc}
                  style={{
                    display:      "flex",
                    alignItems:   "center",
                    gap:          "0.75rem",
                    padding:      "0.8125rem 1.5rem",
                    borderBottom: i < auditDocs.length - 1 ? "1px solid var(--border)" : "none",
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

        <PillarDivider />

        {/* ── 強み2: 法改正通知 ── */}
        <FadeIn style={{ marginBottom: "4rem" }}>
          <div className="grid-2col">
            <div>
              <PillarBadge num={2} bg="var(--green-100)" color="var(--green-700)" />
              <PillarTitle>法改正があれば、<br />すぐにお知らせ</PillarTitle>
              <PillarLead>
                厚生労働省の通知をAIが常時モニタリング。
                研修内容に影響する変更があれば、管理者に即通知します。
                法改正への対応が後手に回ることがなくなります。
              </PillarLead>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {notifications.map((n, i) => (
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
                    <div className="notif-header">
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

        <PillarDivider />

        {/* ── 強み3: 全科目網羅 ── */}
        <FadeIn>
          <div style={{ marginBottom: "2.5rem" }}>
            <PillarBadge num={3} bg="#FFEDD5" color="var(--orange-500)" />
            <PillarTitle>これ一本で、<br />法定研修がすべて完結</PillarTitle>
            <p className="pillar-lead" style={{ maxWidth: "560px" }}>
              15科目すべてに動画・スライド・理解度テストを完備。
              外部講師への依頼も、会場手配も不要です。
              必要な研修がひとつのプラットフォームで完結します。
            </p>
          </div>

          <div className="grid-courses">
            {courses.map(({ num, title, color }) => (
              <div
                key={num}
                className="course-card"
                style={{ borderLeft: `3px solid ${color}`, overflow: "hidden" }}
              >
                <div
                  aria-hidden="true"
                  className="course-card__num"
                  style={{ color, opacity: 0.07 }}
                >
                  {num}
                </div>
                <p className="course-card__title">{title}</p>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
