"use client";

import { motion } from "framer-motion";
import { heroContainer, heroItem } from "@/lib/motion";
import LmsScreenMockup from "./LmsScreenMockup";

const kpis = [
  { num: "100%",      label: "法定研修要件を網羅" },
  { num: "0分",       label: "監査書類の準備時間" },
  { num: "3ステップ", label: "で学びが現場に定着" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        paddingTop:    "calc(var(--hh) + 5.5rem)",
        paddingBottom: "6rem",
        background:
          "radial-gradient(ellipse 120% 80% at 50% -20%, rgba(37,99,235,0.09) 0%, transparent 62%), #ffffff",
        position:  "relative",
        overflow:  "hidden",
      }}
    >
      {/* Soft orange orb */}
      <div
        style={{
          position:      "absolute",
          bottom:        "-120px",
          right:         "-80px",
          width:         "520px",
          height:        "520px",
          background:    "radial-gradient(circle, rgba(249,115,22,0.055) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <div className="container">
        {/* 2カラムレイアウト */}
        <div
          style={{
            display:       "grid",
            gridTemplateColumns: "1fr 1fr",
            gap:           "4rem",
            alignItems:    "center",
          }}
        >
          {/* ===== 左カラム: テキスト ===== */}
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            style={{
              display:       "flex",
              flexDirection: "column",
              gap:           "1.875rem",
            }}
          >
            {/* Badge */}
            <motion.div variants={heroItem}>
              <span
                style={{
                  display:      "inline-flex",
                  alignItems:   "center",
                  gap:          "0.5rem",
                  padding:      "0.375rem 1rem",
                  background:   "#fff",
                  border:       "1px solid var(--border)",
                  borderRadius: "999px",
                  fontSize:     "0.8125rem",
                  fontWeight:   600,
                  color:        "var(--text-2)",
                  boxShadow:    "var(--shadow-sm)",
                }}
              >
                <span
                  style={{
                    width:        8,
                    height:       8,
                    borderRadius: "50%",
                    background:   "var(--green-500)",
                    display:      "inline-block",
                    flexShrink:   0,
                  }}
                />
                介護施設向け法定研修管理LMS
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={heroItem}
              style={{
                fontSize:      "clamp(2rem, 4vw, 3.25rem)",
                fontWeight:    900,
                lineHeight:    1.15,
                letterSpacing: "-0.04em",
              }}
            >
              <span
                style={{
                  background:           "linear-gradient(135deg, var(--blue-900) 0%, var(--blue-500) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor:  "transparent",
                  backgroundClip:       "text",
                }}
              >
                法定研修の手間を、ゼロへ。
              </span>
              <br />
              <span>学びを、本物へ。</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={heroItem}
              style={{
                fontSize:   "1.0625rem",
                color:      "var(--text-2)",
                lineHeight: 1.85,
              }}
            >
              研修資料の準備・受講記録・監査書類の作成——
              管理者を苦しめてきたすべての手作業を自動化します。
              <br />
              そして、形だけでない、本当に身につく研修体験を届けます。
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={heroItem}
              style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
            >
              <a href="/school-application" className="btn btn-cta btn-lg">
                無料デモを申し込む
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#pain" className="btn btn-outline btn-lg">
                課題を見る
              </a>
            </motion.div>

            {/* Trust note */}
            <motion.p variants={heroItem} style={{ fontSize: "0.8rem", color: "var(--text-3)" }}>
              初期費用無料 · 導入サポート付き · 最短2週間で運用開始
            </motion.p>

            {/* KPIs */}
            <motion.div
              variants={heroItem}
              style={{
                display:    "flex",
                flexWrap:   "wrap",
                gap:        "2.5rem",
                paddingTop: "1.75rem",
                borderTop:  "1px solid var(--border)",
              }}
            >
              {kpis.map((kpi) => (
                <div key={kpi.label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize:      "clamp(1.625rem, 2.5vw, 2rem)",
                      fontWeight:    900,
                      color:         "var(--blue-700)",
                      letterSpacing: "-0.04em",
                      lineHeight:    1.1,
                    }}
                  >
                    {kpi.num}
                  </div>
                  <div style={{ fontSize: "0.8125rem", color: "var(--text-2)", fontWeight: 500, marginTop: "0.3rem" }}>
                    {kpi.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ===== 右カラム: LMSスクリーンモックアップ ===== */}
          <div
            style={{
              display:        "flex",
              justifyContent: "center",
              alignItems:     "center",
            }}
          >
            <LmsScreenMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
