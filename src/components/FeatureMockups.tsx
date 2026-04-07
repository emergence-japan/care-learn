/* FeatureMockups.tsx
 * Real screenshot mockups for FeaturesSection primary cards.
 * Uses actual LMS screenshots wrapped in a browser-style frame.
 */

import Image from "next/image";

// ─── shared: ブラウザ風フレーム ─────────────────────────────────────────────
function BrowserFrame({
  url,
  children,
  accentColor = "#2563eb",
}: {
  url: string;
  children: React.ReactNode;
  accentColor?: string;
}) {
  return (
    <div
      style={{
        borderRadius: "12px",
        overflow:     "hidden",
        border:       "1px solid rgba(0,0,0,0.08)",
        boxShadow:    "0 12px 36px rgba(15,23,42,0.13), 0 2px 8px rgba(15,23,42,0.07)",
      }}
    >
      {/* ブラウザバー */}
      <div
        style={{
          background:  "#1e293b",
          padding:     "8px 12px",
          display:     "flex",
          alignItems:  "center",
          gap:         "6px",
        }}
      >
        {["#ef4444", "#f59e0b", "#22c55e"].map((c) => (
          <span
            key={c}
            style={{ width: 8, height: 8, borderRadius: "50%", background: c, display: "inline-block", flexShrink: 0 }}
          />
        ))}
        <div
          style={{
            flex:         1,
            marginLeft:   6,
            background:   "#334155",
            borderRadius: "5px",
            padding:      "3px 10px",
            fontSize:     "10px",
            color:        "#94a3b8",
            fontFamily:   "monospace",
            whiteSpace:   "nowrap",
            overflow:     "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}

// ─── 1. スマホ受講 ── 個人研修一覧画面 ────────────────────────────────────
export function MobileLessonMockup() {
  return (
    <div style={{ marginTop: "1.5rem" }}>
      <BrowserFrame url="care-learning-system.vercel.app/courses">
        <div style={{ position: "relative", lineHeight: 0 }}>
          <Image
            src="/images/mockups/demo_個人_研修管理.png"
            alt="スタッフ個人の研修一覧画面"
            width={800}
            height={600}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </BrowserFrame>
    </div>
  );
}

// ─── 2. 進捗ダッシュボード ── スタッフ管理マトリクス ──────────────────────
export function DashboardMockup() {
  return (
    <div style={{ marginTop: "1.5rem", position: "relative" }}>
      <BrowserFrame url="care-learning-system.vercel.app/facility/staff">
        <div style={{ position: "relative", lineHeight: 0 }}>
          <Image
            src="/images/mockups/demo_施設管理 - staff管理.png"
            alt="スタッフ別受講進捗ダッシュボード"
            width={1200}
            height={700}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </BrowserFrame>

      {/* 未受講ポップアップを右下に重ねて表示 */}
      <div
        style={{
          position:  "absolute",
          bottom:    "12px",
          right:     "12px",
          width:     "44%",
          maxWidth:  "220px",
          filter:    "drop-shadow(0 8px 24px rgba(15,23,42,0.22))",
          lineHeight: 0,
        }}
      >
        <Image
          src="/images/mockups/demo_施設管理-未受講表示.png"
          alt="未受講スタッフの詳細表示"
          width={400}
          height={300}
          style={{ width: "100%", height: "auto", borderRadius: "12px" }}
        />
      </div>
    </div>
  );
}

// ─── 3. 監査書類PDF出力 ─────────────────────────────────────────────────────
export function AuditDocMockup() {
  return (
    <div style={{ marginTop: "1.5rem" }}>
      <BrowserFrame url="care-learning-system.vercel.app/facility/audit">
        <div style={{ position: "relative", lineHeight: 0 }}>
          <Image
            src="/images/mockups/demo_施設管理監査.png"
            alt="監査用レポート管理・PDF出力画面"
            width={1200}
            height={700}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </BrowserFrame>
    </div>
  );
}
