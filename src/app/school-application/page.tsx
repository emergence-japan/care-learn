"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const endpoint = process.env.NEXT_PUBLIC_SCHOOL_FORM_ENDPOINT || "";
      if (endpoint) {
        await fetch(endpoint, { method: "POST", body: formData, mode: "no-cors" });
      }
      setSubmitStatus("success");
      form.reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      style={{
        minHeight:     "100vh",
        paddingTop:    "calc(var(--hh) + 4rem)",
        paddingBottom: "6rem",
        background:    "var(--slate-50)",
      }}
    >
      <div className="container" style={{ maxWidth: "640px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div className="label">CONTACT</div>
          <h1
            style={{
              fontSize:      "clamp(1.75rem, 3vw, 2.25rem)",
              fontWeight:    800,
              letterSpacing: "-0.035em",
              marginTop:     "0.5rem",
              marginBottom:  "0.75rem",
            }}
          >
            お問い合わせ
          </h1>
          <p style={{ fontSize: "0.9375rem", color: "var(--text-2)", lineHeight: 1.8 }}>
            Care Learning に関するご質問・ご相談はこちらから。
            <br />
            内容を確認のうえ、担当者よりご連絡いたします。
          </p>
        </div>

        {submitStatus === "success" ? (
          /* Success state */
          <div
            style={{
              background:   "#fff",
              border:       "1px solid var(--border)",
              borderRadius: "var(--r-xl)",
              padding:      "3rem 2rem",
              textAlign:    "center",
              boxShadow:    "var(--shadow-sm)",
            }}
          >
            <div
              style={{
                width:          60,
                height:         60,
                borderRadius:   "50%",
                background:     "#F0FDF4",
                border:         "1px solid #A7F3D0",
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                margin:         "0 auto 1.5rem",
              }}
            >
              <CheckCircle2 size={28} style={{ color: "var(--green-600)" }} />
            </div>
            <h2
              style={{
                fontSize:     "1.25rem",
                fontWeight:   700,
                marginBottom: "0.75rem",
              }}
            >
              送信が完了しました
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-2)", lineHeight: 1.8 }}>
              お問い合わせいただきありがとうございます。
              <br />
              担当者より数日以内にご連絡いたします。
            </p>
            <a
              href="/"
              style={{
                display:        "inline-block",
                marginTop:      "2rem",
                padding:        "0.625rem 1.5rem",
                borderRadius:   "var(--r)",
                background:     "var(--blue-900)",
                color:          "#fff",
                fontSize:       "0.875rem",
                fontWeight:     600,
                textDecoration: "none",
              }}
            >
              トップページに戻る
            </a>
          </div>
        ) : (
          /* Form */
          <div
            style={{
              background:   "#fff",
              border:       "1px solid var(--border)",
              borderRadius: "var(--r-xl)",
              padding:      "2.5rem 2rem",
              boxShadow:    "var(--shadow-sm)",
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

              {/* 施設名 */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label htmlFor="facility" style={labelStyle}>
                  施設名・法人名 <Required />
                </label>
                <input
                  type="text"
                  id="facility"
                  name="facility"
                  required
                  placeholder="株式会社〇〇 / 〇〇ケアセンター"
                  style={inputStyle}
                />
              </div>

              {/* 担当者名 */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label htmlFor="name" style={labelStyle}>
                  担当者名 <Required />
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="山田 太郎"
                  style={inputStyle}
                />
              </div>

              {/* メール */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label htmlFor="email" style={labelStyle}>
                  メールアドレス <Required />
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="sample@example.com"
                  style={inputStyle}
                />
              </div>

              {/* 電話番号 */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label htmlFor="tel" style={labelStyle}>
                  電話番号
                  <span style={{ marginLeft: "0.4rem", fontSize: "0.75rem", color: "var(--text-3)", fontWeight: 400 }}>
                    任意
                  </span>
                </label>
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="03-0000-0000"
                  style={inputStyle}
                />
              </div>

              {/* 問い合わせ内容 */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label htmlFor="message" style={labelStyle}>
                  お問い合わせ内容 <Required />
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="ご質問やご要望をご記入ください"
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              {/* Error */}
              {submitStatus === "error" && (
                <p
                  style={{
                    fontSize:     "0.875rem",
                    color:        "#DC2626",
                    padding:      "0.75rem 1rem",
                    background:   "#FEF2F2",
                    borderRadius: "var(--r)",
                    border:       "1px solid #FECACA",
                  }}
                >
                  送信中にエラーが発生しました。時間をおいて再度お試しください。
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-cta btn-lg"
                style={{
                  width:   "100%",
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor:  isSubmitting ? "not-allowed" : "pointer",
                  border:  "none",
                }}
              >
                {isSubmitting ? "送信中..." : "送信する"}
              </button>

              <p style={{ fontSize: "0.8rem", color: "var(--text-3)", textAlign: "center", lineHeight: 1.7 }}>
                送信いただいた情報は、お問い合わせへの回答のみに使用します。
              </p>

            </form>
          </div>
        )}
      </div>
    </main>
  );
}

const labelStyle: React.CSSProperties = {
  fontSize:   "0.875rem",
  fontWeight: 600,
  color:      "var(--text)",
};

const inputStyle: React.CSSProperties = {
  width:        "100%",
  padding:      "0.6875rem 0.875rem",
  borderRadius: "var(--r)",
  border:       "1px solid var(--slate-300)",
  fontSize:     "0.9375rem",
  color:        "var(--text)",
  background:   "#fff",
  outline:      "none",
  boxSizing:    "border-box",
};

function Required() {
  return <span style={{ color: "#DC2626", marginLeft: "0.2rem" }}>*</span>;
}
