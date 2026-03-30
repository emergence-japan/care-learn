"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const phases = [
  {
    label:    "今まで",
    num:      "3時間",
    sub:      "監査書類の準備だけで",
    detail:   "毎月この作業に追われていた",
    numColor: "#DC2626",
    bgFrom:   "#FFF5F0",
    labelColor: "#DC2626",
    subColor:   "#7F1D1D",
  },
  {
    label:    "Care Learning で",
    num:      "0分",
    sub:      "ボタン一つでPDF出力",
    detail:   "もう残業はしなくていい",
    numColor: "var(--blue-700)",
    bgFrom:   "#EFF6FF",
    labelColor: "var(--blue-600)",
    subColor:   "var(--blue-800)",
  },
];

export default function ScrollStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* Background */
  const bg = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ["#FFF8F5", "#FFF8F5", "#EFF6FF", "#EFF6FF"]
  );

  /* Before */
  const beforeOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 1, 0]);
  const beforeY       = useTransform(scrollYProgress, [0.3, 0.5],     [0, -60]);
  const beforeScale   = useTransform(scrollYProgress, [0.3, 0.5],     [1, 0.85]);

  /* After */
  const afterOpacity  = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const afterY        = useTransform(scrollYProgress, [0.5, 0.7], [60, 0]);
  const afterScale    = useTransform(scrollYProgress, [0.5, 0.7], [0.85, 1]);

  /* Progress bar */
  const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  /* Scroll hint */
  const hintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  /* Divider morph */
  const dividerWidth = useTransform(scrollYProgress, [0.35, 0.65], ["0%", "100%"]);

  return (
    <div ref={containerRef} style={{ height: "220vh", position: "relative" }}>
      <motion.div
        style={{
          position:       "sticky",
          top:            0,
          height:         "100vh",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          background:     bg,
          overflow:       "hidden",
        }}
      >
        {/* ── Progress bar ── */}
        <motion.div
          style={{
            position:   "absolute",
            top:        0,
            left:       0,
            height:     3,
            background: "var(--blue-600)",
            width:      barWidth,
          }}
        />

        {/* ── BEFORE ── */}
        <motion.div
          style={{
            position:  "absolute",
            textAlign: "center",
            opacity:   beforeOpacity,
            y:         beforeY,
            scale:     beforeScale,
          }}
        >
          <div
            style={{
              fontSize:      "0.75rem",
              fontWeight:    700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color:         "#DC2626",
              marginBottom:  "1.5rem",
            }}
          >
            今まで
          </div>
          <div
            style={{
              fontSize:      "clamp(5rem, 14vw, 10rem)",
              fontWeight:    900,
              color:         "#DC2626",
              lineHeight:    1,
              letterSpacing: "-0.05em",
            }}
          >
            3時間
          </div>
          <div
            style={{
              fontSize:   "1.25rem",
              color:      "#7F1D1D",
              marginTop:  "1.5rem",
              fontWeight: 600,
            }}
          >
            監査書類の準備だけで
          </div>
          <div style={{ fontSize: "1rem", color: "#991B1B", marginTop: "0.5rem", opacity: 0.75 }}>
            毎月この作業に追われていた
          </div>
        </motion.div>

        {/* ── Divider line ── */}
        <motion.div
          style={{
            position:   "absolute",
            width:      dividerWidth,
            height:     1,
            background: "var(--border)",
            left:       "50%",
            x:          "-50%",
          }}
        />

        {/* ── AFTER ── */}
        <motion.div
          style={{
            position:  "absolute",
            textAlign: "center",
            opacity:   afterOpacity,
            y:         afterY,
            scale:     afterScale,
          }}
        >
          <div
            style={{
              fontSize:      "0.75rem",
              fontWeight:    700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color:         "var(--blue-600)",
              marginBottom:  "1.5rem",
            }}
          >
            Care Learning で
          </div>
          <div
            style={{
              fontSize:      "clamp(5rem, 14vw, 10rem)",
              fontWeight:    900,
              color:         "var(--blue-700)",
              lineHeight:    1,
              letterSpacing: "-0.05em",
            }}
          >
            0分
          </div>
          <div
            style={{
              fontSize:   "1.25rem",
              color:      "var(--blue-800)",
              marginTop:  "1.5rem",
              fontWeight: 600,
            }}
          >
            ボタン一つでPDF出力
          </div>
          <div style={{ fontSize: "1rem", color: "var(--blue-600)", marginTop: "0.5rem", opacity: 0.75 }}>
            もう残業はしなくていい
          </div>
        </motion.div>

        {/* ── Scroll hint ── */}
        <motion.div
          style={{
            position:  "absolute",
            bottom:    "2.5rem",
            left:      "50%",
            x:         "-50%",
            opacity:   hintOpacity,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "0.8rem", color: "var(--text-3)", marginBottom: "0.5rem" }}>
            スクロールで体験
          </div>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            style={{ color: "var(--text-3)", fontSize: "1.25rem" }}
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
