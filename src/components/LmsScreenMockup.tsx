"use client";

import { motion } from "framer-motion";

export default function LmsScreenMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{
        width:     "100%",
        maxWidth:  "540px",
        filter:    "drop-shadow(0 32px 64px rgba(15,23,42,0.18)) drop-shadow(0 8px 16px rgba(15,23,42,0.10))",
      }}
    >
      {/* ブラウザ風フレーム */}
      <div
        style={{
          borderRadius: "16px",
          overflow:     "hidden",
          border:       "1px solid rgba(255,255,255,0.3)",
        }}
      >
        {/* ブラウザバー */}
        <div
          style={{
            background:  "#1e293b",
            padding:     "10px 14px",
            display:     "flex",
            alignItems:  "center",
            gap:         "8px",
          }}
        >
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444", display: "inline-block" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
          <div
            style={{
              flex:         1,
              marginLeft:   8,
              background:   "#334155",
              borderRadius: "6px",
              padding:      "4px 10px",
              fontSize:     "11px",
              color:        "#94a3b8",
              fontFamily:   "monospace",
            }}
          >
            care-learning-system.vercel.app/login
          </div>
        </div>

        {/* ログイン画面本体 */}
        <div style={{ display: "flex", height: "340px" }}>

          {/* 左パネル: ネイビー */}
          <div
            style={{
              width:      "46%",
              flexShrink: 0,
              background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 100%)",
              padding:    "28px 22px",
              display:    "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* タイトル */}
            <div>
              <p style={{ fontSize: "13px", color: "#94a3b8", marginBottom: "6px", fontWeight: 600, letterSpacing: "0.05em" }}>
                Next Gen LMS
              </p>
              <h2
                style={{
                  fontSize:      "17px",
                  fontWeight:    900,
                  color:         "#f1f5f9",
                  lineHeight:    1.4,
                  letterSpacing: "-0.02em",
                }}
              >
                介護の未来を、
                <br />
                <span
                  style={{
                    background:           "linear-gradient(90deg, #60a5fa, #38bdf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor:  "transparent",
                    backgroundClip:       "text",
                    fontStyle:            "italic",
                  }}
                >
                  学び
                </span>
                から変えていく。
              </h2>
              <p style={{ fontSize: "10px", color: "#64748b", marginTop: "10px", lineHeight: 1.6 }}>
                現場のスタッフが誇りを持って成長できる
                <br />
                プロフェッショナルな学習プラットフォーム
              </p>
            </div>

            {/* フィーチャーリスト */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { icon: "🛡️", title: "コンプライアンス遵守", desc: "最新の制度改正に完全準拠したカリキュラム。" },
                { icon: "📱", title: "現場に寄り添うUX",    desc: "スマートフォンで1分から学べる直感的な設計。" },
              ].map((f) => (
                <div key={f.title} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width:          26,
                      height:         26,
                      borderRadius:   "7px",
                      background:     "rgba(96,165,250,0.12)",
                      border:         "1px solid rgba(96,165,250,0.2)",
                      display:        "flex",
                      alignItems:     "center",
                      justifyContent: "center",
                      fontSize:       "12px",
                      flexShrink:     0,
                    }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: "10px", fontWeight: 700, color: "#e2e8f0", marginBottom: "1px" }}>{f.title}</p>
                    <p style={{ fontSize: "9px",  color: "#64748b", lineHeight: 1.5 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* フッター */}
            <p style={{ fontSize: "9px", color: "#475569", letterSpacing: "0.08em" }}>
              © 2024 EMERGENCE JAPAN
            </p>
          </div>

          {/* 右パネル: ログインフォーム */}
          <div
            style={{
              flex:           1,
              background:     "#f8fafc",
              padding:        "28px 20px",
              display:        "flex",
              flexDirection:  "column",
              justifyContent: "center",
              position:       "relative",
            }}
          >
            {/* 背景の装飾円 */}
            <div
              style={{
                position:   "absolute",
                top:        "-40px",
                right:      "-40px",
                width:      "120px",
                height:     "120px",
                borderRadius: "50%",
                background: "rgba(226,232,240,0.5)",
                pointerEvents: "none",
              }}
            />

            <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#0f172a", marginBottom: "3px" }}>
              ログイン
            </h3>
            <p style={{ fontSize: "10px", color: "#2563eb", fontStyle: "italic", marginBottom: "18px" }}>
              Welcome back to excellence.
            </p>

            {/* ログインID */}
            <div style={{ marginBottom: "12px" }}>
              <label style={{ fontSize: "10px", fontWeight: 600, color: "#475569", display: "block", marginBottom: "5px" }}>
                ログインID
              </label>
              <div
                style={{
                  background:   "#fff",
                  border:       "1px solid #e2e8f0",
                  borderRadius: "8px",
                  padding:      "7px 10px",
                  fontSize:     "11px",
                  color:        "#94a3b8",
                  boxShadow:    "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                例: tanaka_taro
              </div>
            </div>

            {/* パスワード */}
            <div style={{ marginBottom: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                <label style={{ fontSize: "10px", fontWeight: 600, color: "#475569" }}>
                  パスワード
                </label>
                <span style={{ fontSize: "9px", color: "#2563eb" }}>忘れた場合</span>
              </div>
              <div
                style={{
                  background:   "#fff",
                  border:       "1px solid #e2e8f0",
                  borderRadius: "8px",
                  padding:      "7px 10px",
                  fontSize:     "11px",
                  color:        "#cbd5e1",
                  boxShadow:    "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                ••••••••
              </div>
            </div>

            {/* ボタン */}
            <div
              style={{
                background:    "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                color:         "#fff",
                borderRadius:  "8px",
                padding:       "9px",
                textAlign:     "center",
                fontSize:      "12px",
                fontWeight:    700,
                boxShadow:     "0 4px 12px rgba(37,99,235,0.35)",
                letterSpacing: "0.02em",
              }}
            >
              ログイン
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
