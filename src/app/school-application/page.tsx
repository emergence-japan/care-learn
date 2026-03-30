"use client";

import React, { useState } from 'react';
import { SpotlightCard } from '@/components/SpotlightCard';

export default function SchoolApplicationPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const endpoint = process.env.NEXT_PUBLIC_SCHOOL_FORM_ENDPOINT || '';
            if (!endpoint) {
                console.warn("NEXT_PUBLIC_SCHOOL_FORM_ENDPOINT is not defined.");
            }

            const response = await fetch(endpoint, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' // Use no-cors for typical GAS web app submissions from frontend
            });

            // Since mode is no-cors, we won't get a readable response status, 
            // but if fetch doesn't throw, we assume it reached the destination.
            setSubmitStatus('success');
            form.reset();
        } catch (error) {
            console.error(error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main style={{
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: 'var(--header-height)',
            paddingBottom: '4rem'
        }}>
            {/* Sunset Technology Background */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, #1e1b4b, #4c1d95, #9d174d, #f59e0b)',
                    opacity: 0.8,
                    zIndex: -2,
                }}
            />
            {/* Tech Grid Overlay */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px',
                    zIndex: -1,
                }}
            />
            <div
                className="bg-glow-orb"
                style={{
                    top: '20%', left: '10%',
                    width: '40vw', height: '40vw',
                    background: 'radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, transparent 70%)'
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '4rem auto 0' }}>

                <div style={{ textAlign: 'center', marginBottom: '3rem', color: '#fff' }}>
                    <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1rem', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                        LMSスクール本申し込み
                    </h1>
                    <p style={{ fontSize: '1.125rem', opacity: 0.9, textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
                        夕焼けの中で光り輝く新しいテクノロジーを、あなたの施設に。
                    </p>
                </div>

                <SpotlightCard className="glass-panel" style={{ padding: '3rem 2rem', background: 'rgba(15, 23, 42, 0.6)', borderColor: 'rgba(255,255,255,0.1)' }}>

                    {submitStatus === 'success' ? (
                        <div className="animate-fade-in" style={{ textAlign: 'center', color: '#fff', padding: '2rem 0' }}>
                            <div style={{
                                width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem',
                                border: '1px solid var(--success)', color: 'var(--success)'
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>お申し込みありがとうございます</h2>
                            <p style={{ opacity: 0.8, marginBottom: '2rem' }}>
                                ご入力いただいたメールアドレス宛に、今後のご案内をお送りいたしました。
                            </p>

                            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px', textAlign: 'left', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>決済情報（料金のお支払い）</h3>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <p style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#60a5fa' }}>■ クレジットカード決済（PayPal）</p>
                                    <a
                                        href="https://www.paypal.com/ncp/payment/89ZQRL79Q95ZU"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary"
                                        style={{ background: '#0070ba', color: 'white', padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                                    >
                                        PayPalで支払う
                                    </a>
                                </div>
                                <div>
                                    <p style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#60a5fa' }}>■ 銀行振込（住信SBIネット銀行）</p>
                                    <div style={{ fontSize: '0.875rem', opacity: 0.9, background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
                                        法人第一支店 （106）<br />
                                        普通 1234567<br />
                                        カ）ネクストジェネレーションエルエムエス
                                    </div>
                                    <p style={{ fontSize: '0.75rem', opacity: 0.6, marginTop: '0.5rem' }}>※振込手数料はお客様にてご負担をお願いいたします。</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#fff' }}>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label htmlFor="name1" style={{ fontSize: '0.875rem', fontWeight: 500 }}>氏名 <span style={{ color: '#ef4444' }}>*</span></label>
                                    <input
                                        type="text"
                                        id="name1"
                                        name="name1"
                                        required
                                        placeholder="山田 太郎"
                                        style={{
                                            width: '100%', padding: '0.75rem 1rem', borderRadius: '8px',
                                            background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.2)',
                                            color: '#fff', outline: 'none', transition: 'border 0.2s',
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label htmlFor="kana" style={{ fontSize: '0.875rem', fontWeight: 500 }}>ふりがな <span style={{ color: '#ef4444' }}>*</span></label>
                                    <input
                                        type="text"
                                        id="kana"
                                        name="kana"
                                        required
                                        placeholder="やまだ たろう"
                                        style={{
                                            width: '100%', padding: '0.75rem 1rem', borderRadius: '8px',
                                            background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.2)',
                                            color: '#fff', outline: 'none', transition: 'border 0.2s',
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label htmlFor="email" style={{ fontSize: '0.875rem', fontWeight: 500 }}>メールアドレス <span style={{ color: '#ef4444' }}>*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="sample@example.com"
                                    style={{
                                        width: '100%', padding: '0.75rem 1rem', borderRadius: '8px',
                                        background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.2)',
                                        color: '#fff', outline: 'none', transition: 'border 0.2s',
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                                />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label htmlFor="facility" style={{ fontSize: '0.875rem', fontWeight: 500 }}>施設名（法人名） <span style={{ color: '#ef4444' }}>*</span></label>
                                <input
                                    type="text"
                                    id="facility"
                                    name="facility"
                                    required
                                    placeholder="株式会社〇〇 ケアセンター△△"
                                    style={{
                                        width: '100%', padding: '0.75rem 1rem', borderRadius: '8px',
                                        background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.2)',
                                        color: '#fff', outline: 'none', transition: 'border 0.2s',
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                                />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label htmlFor="remarks" style={{ fontSize: '0.875rem', fontWeight: 500 }}>備考・ご質問</label>
                                <textarea
                                    id="remarks"
                                    name="remarks"
                                    rows={4}
                                    placeholder="その他の連絡事項がございましたらご記入ください"
                                    style={{
                                        width: '100%', padding: '0.75rem 1rem', borderRadius: '8px',
                                        background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.2)',
                                        color: '#fff', outline: 'none', transition: 'border 0.2s',
                                        resize: 'vertical'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                                />
                            </div>

                            {submitStatus === 'error' && (
                                <div style={{ color: '#fca5a5', fontSize: '0.875rem', padding: '0.75rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                                    送信中にエラーが発生しました。時間をおいて再度お試しいただくか、直接お問い合わせください。
                                </div>
                            )}

                            <div style={{ marginTop: '1rem' }}>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary"
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        fontSize: '1.125rem',
                                        opacity: isSubmitting ? 0.7 : 1,
                                        cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    {isSubmitting ? '送信中...' : 'お申し込みを確定する'}
                                </button>
                            </div>
                        </form>
                    )}

                </SpotlightCard>
            </div>
        </main>
    );
}
