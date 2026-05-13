"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const relatedServices = [
    { label: "Book Writing", slug: "book-writing" },
    { label: "Memoir Writing", slug: "memoir-writing" },
    { label: "Fiction Writing", slug: "fiction-writing" },
    { label: "Non-Fiction Writing", slug: "non-fiction-writing" },
    { label: "Script Writing", slug: "script-writing" },
    { label: "Book Editing", slug: "book-editing" },
];

const niches = [
    { icon: "✦", label: "Celebrity & Public Figure Memoirs" },
    { icon: "✦", label: "Business & Entrepreneurship Books" },
    { icon: "✦", label: "Self-Help & Motivational" },
    { icon: "✦", label: "Political & Leadership Narratives" },
    { icon: "✦", label: "Fiction & Genre Novels" },
    { icon: "✦", label: "Spiritual & Religious Books" },
    { icon: "✦", label: "Health, Fitness & Wellness" },
    { icon: "✦", label: "True Crime & Investigative" },
    { icon: "✦", label: "Children's & Young Adult" },
    { icon: "✦", label: "Academic & Educational" },
    { icon: "✦", label: "Autobiography & Life Stories" },
    { icon: "✦", label: "Speeches & Thought Leadership" },
];

const features = [
    {
        num: "01",
        title: "100% Ghost — Zero Credit",
        desc: "Our ghostwriters never claim authorship. No bylines, no credits, no social mentions. The book is entirely yours — publicly and legally.",
    },
    {
        num: "02",
        title: "Iron-Clad NDA",
        desc: "Every project begins with a binding Non-Disclosure Agreement. Your story, your identity, and the collaboration itself remain completely confidential.",
    },
    {
        num: "03",
        title: "Voice Capture Technology",
        desc: "We conduct in-depth interviews and style assessments to map your unique voice — cadence, vocabulary, tone — before writing a single word.",
    },
    {
        num: "04",
        title: "Full Copyright Transfer",
        desc: "Upon project completion, all intellectual property transfers entirely to you. No royalty claims, no licensing fees — ever.",
    },
    {
        num: "05",
        title: "Published Ghostwriters",
        desc: "Every writer on our team is a published author in their own right, with deep genre expertise and a proven track record of delivering bestseller-quality manuscripts.",
    },
    {
        num: "06",
        title: "Seamless Collaboration",
        desc: "Work as closely or hands-off as you prefer. Weekly calls, shared outlines, chapter reviews — the workflow adapts entirely to your schedule and comfort level.",
    },
];

const steps = [
    { num: "01", title: "Confidential Discovery", desc: "A private consultation to understand your story, goals, audience, and the voice you want to project." },
    { num: "02", title: "Voice & Style Mapping", desc: "We analyze your speech patterns, existing writing, and interview recordings to build an authentic voice profile." },
    { num: "03", title: "Outline & Approval", desc: "A detailed structural outline is created and signed off by you before any writing begins." },
    { num: "04", title: "Chapter-by-Chapter Drafting", desc: "Your ghostwriter delivers the manuscript in stages, with your feedback shaping every revision." },
    { num: "05", title: "Final Delivery & IP Transfer", desc: "The polished, publish-ready manuscript is delivered with full copyright transfer and NDA sealed." },
];

const faqs = [
    {
        q: "Is ghostwriting legal and ethical?",
        a: "Absolutely. Ghostwriting is a centuries-old, fully legal profession. From political speeches to celebrity memoirs, the practice is standard and widely accepted across all publishing categories.",
    },
    {
        q: "Will anyone know I used a ghostwriter?",
        a: "No. Every project is covered by a strict NDA. Our ghostwriters never disclose client relationships — not on their portfolio, not on social media, not anywhere.",
    },
    {
        q: "How do you capture my voice accurately?",
        a: "We start with in-depth recorded interviews, review any existing writing you've done, and conduct a tone and style assessment. This voice profile guides every sentence the ghostwriter produces.",
    },
    {
        q: "Who owns the copyright?",
        a: "You do — 100%. Upon delivery, all intellectual property rights transfer to you. We retain no claims, royalties, or licensing interests in the work.",
    },
    {
        q: "What if I only have an idea, not a full story?",
        a: "That's perfectly fine. Many of our most successful projects started with nothing more than a concept. Our ghostwriters are expert story architects — we'll build the structure around your spark.",
    },
    {
        q: "How long does ghostwriting take?",
        a: "A full-length book (50,000–80,000 words) typically takes 10–16 weeks. Rush delivery options are available. Shorter projects like speeches or articles can be completed in days.",
    },
];

export default function GhostwritingPage() {
    return (
        <>
            <Navbar />
            <main className="gw-page">

                {/* ══════════════════════════════════════
                HERO
            ══════════════════════════════════════ */}
                <section className="gw-hero">
                    <div className="gw-hero-bg" />
                    <div className="gw-hero-grid">
                        <div className="gw-hero-inner">

                            {/* Breadcrumb */}
                            <nav className="gw-breadcrumb">
                                <Link href="/"
                                    style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none", letterSpacing: "0.5px", transition: "color 0.2s" }}
                                    onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")}
                                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>
                                    Home
                                </Link>
                                <span className="gw-bc-sep">›</span>
                                <Link href="/services"
                                    style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none", letterSpacing: "0.5px", transition: "color 0.2s" }}
                                    onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")}
                                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>
                                    Services
                                </Link>
                                <span className="gw-bc-sep">›</span>
                                <span className="gw-bc-current">Ghostwriting</span>
                            </nav>

                            {/* Category tag */}
                            <div className="gw-hero-tag">
                                <span className="gw-tag-dot" />
                                Writing Services
                            </div>

                            {/* Heading */}
                            <h1 className="gw-hero-title">
                                Professional<br />
                                <em className="gw-hero-em">Ghostwriting</em><br />
                                Services
                            </h1>

                            <p className="gw-hero-sub">
                                Your story, your name, your legacy — written by a world-class ghostwriter
                                who captures your voice so perfectly, no one will ever know the difference.
                            </p>

                            <div className="gw-hero-actions">
                                <button className="gw-btn-orange">Get A Free Quote</button>
                                <button className="gw-btn-outline">(646) 298 6438</button>
                            </div>

                            {/* Trust pills */}
                            <div className="gw-trust-row">
                                <span className="gw-trust-pill">✓ Strict NDA Signed</span>
                                <span className="gw-trust-pill">✓ 100% Anonymous</span>
                                <span className="gw-trust-pill">✓ Full Copyright Yours</span>
                                <span className="gw-trust-pill">✓ Unlimited Revisions</span>
                            </div>

                        </div>

                        {/* Sidebar stats */}
                        <div className="gw-hero-sidebar">
                            <div className="gw-sidebar-card">
                                <span className="gw-sc-val">3,000+</span>
                                <span className="gw-sc-label">Books Ghostwritten</span>
                            </div>
                            <div className="gw-sidebar-card">
                                <span className="gw-sc-val">100%</span>
                                <span className="gw-sc-label">Confidentiality Rate</span>
                            </div>
                            <div className="gw-sidebar-card">
                                <span className="gw-sc-val">NYT</span>
                                <span className="gw-sc-label">Bestseller Clients</span>
                            </div>
                            <div className="gw-sidebar-card">
                                <span className="gw-sc-val">15+</span>
                                <span className="gw-sc-label">Years Experience</span>
                            </div>
                        </div>
                    </div>{/* end gw-hero-grid */}
                </section>

                {/* ══════════════════════════════════════
                INTRO
            ══════════════════════════════════════ */}
                <section className="gw-intro">
                    <div className="gw-intro-inner">
                        <div className="gw-intro-text">
                            <span className="gw-eyebrow">What We Do</span>
                            <h2 className="gw-section-title">
                                The World's Greatest Books<br />
                                <span className="gw-hl">Were Written In The Shadows</span>
                            </h2>
                            <p className="gw-body-text">
                                From presidential memoirs to Fortune 500 CEO books, ghostwriting is the
                                secret behind some of history's most influential literature. Belmont
                                Publishing's ghostwriters don't just write — they inhabit your perspective,
                                mirror your voice, and channel your experiences into prose that reads
                                authentically as your own.
                            </p>
                            <p className="gw-body-text">
                                Whether you have hours of interview recordings, rough notes, or simply a
                                powerful idea, we transform your raw material into a polished, publish-ready
                                manuscript — with your name on the cover and no trace of collaboration anywhere.
                            </p>
                            <button className="gw-btn-orange" style={{ marginTop: "8px" }}>Start Your Project</button>
                        </div>
                        <div className="gw-intro-visual">
                            <div className="gw-visual-box">
                                <div className="gw-vb-line" />
                                <div className="gw-vb-content">
                                    <span className="gw-vb-num">50K–120K</span>
                                    <span className="gw-vb-label">Words per manuscript</span>
                                </div>
                                <div className="gw-vb-divider" />
                                <div className="gw-vb-content">
                                    <span className="gw-vb-num">10–16</span>
                                    <span className="gw-vb-label">Weeks to completion</span>
                                </div>
                                <div className="gw-vb-divider" />
                                <div className="gw-vb-content">
                                    <span className="gw-vb-num">0%</span>
                                    <span className="gw-vb-label">Authorship claimed</span>
                                </div>
                                <div className="gw-vb-divider" />
                                <div className="gw-vb-content">
                                    <span className="gw-vb-num">∞</span>
                                    <span className="gw-vb-label">Revisions included</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
                FEATURES
            ══════════════════════════════════════ */}
                <section className="gw-features">
                    <div className="gw-features-inner">
                        <div className="gw-section-head">
                            <span className="gw-eyebrow">Why Choose Us</span>
                            <h2 className="gw-section-title">
                                The Belmont <span className="gw-hl">Guarantee</span>
                            </h2>
                        </div>
                        <div className="gw-features-grid">
                            {features.map((f) => (
                                <div key={f.num} className="gw-feature-card">
                                    <span className="gw-fc-num">{f.num}</span>
                                    <h3 className="gw-fc-title">{f.title}</h3>
                                    <p className="gw-fc-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
                NICHES / CATEGORIES
            ══════════════════════════════════════ */}
                <section className="gw-niches">
                    <div className="gw-niches-inner">
                        <div className="gw-section-head gw-head-center">
                            <span className="gw-eyebrow">Our Specialisations</span>
                            <h2 className="gw-section-title">
                                We Ghost Across <span className="gw-hl">Every Category</span>
                            </h2>
                            <p className="gw-niches-sub">
                                Our roster of ghostwriters spans every genre, industry, and subject matter.
                            </p>
                        </div>
                        <div className="gw-niches-grid">
                            {niches.map((n) => (
                                <div key={n.label} className="gw-niche-pill">
                                    <span className="gw-np-icon">{n.icon}</span>
                                    {n.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
                PROCESS
            ══════════════════════════════════════ */}
                <section className="gw-process">
                    <div className="gw-process-inner">
                        <div className="gw-section-head gw-head-center">
                            <span className="gw-eyebrow">How It Works</span>
                            <h2 className="gw-section-title">
                                Our <span className="gw-hl">Ghost Process</span>
                            </h2>
                        </div>
                        <div className="gw-steps">
                            {steps.map((s, i) => (
                                <div key={s.num} className="gw-step-row">
                                    <div className="gw-step-left">
                                        <div className="gw-step-node">
                                            <span className="gw-step-num">{s.num}</span>
                                        </div>
                                        {i < steps.length - 1 && <div className="gw-step-vline" />}
                                    </div>
                                    <div className="gw-step-body">
                                        <h3 className="gw-step-title">{s.title}</h3>
                                        <p className="gw-step-desc">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
                FAQ
            ══════════════════════════════════════ */}
                <section className="gw-faq">
                    <div className="gw-faq-inner">
                        <div className="gw-faq-left">
                            <span className="gw-eyebrow">FAQ</span>
                            <h2 className="gw-section-title">
                                Common <span className="gw-hl">Questions</span>
                            </h2>
                            <p className="gw-body-text" style={{ marginTop: "16px" }}>
                                Confidentiality is our priority. All enquiries are protected by NDA from the very first call.
                            </p>
                            <button className="gw-btn-orange" style={{ marginTop: "24px" }}>
                                Talk To An Expert
                            </button>
                        </div>
                        <div className="gw-faq-right">
                            {faqs.map((item, i) => (
                                <details key={i} className="gw-faq-item">
                                    <summary className="gw-faq-q">
                                        {item.q}
                                        <span className="gw-faq-icon">+</span>
                                    </summary>
                                    <p className="gw-faq-a">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
                RELATED SERVICES
            ══════════════════════════════════════ */}
                <section className="gw-related">
                    <div className="gw-related-inner">
                        <span className="gw-eyebrow">Explore More</span>
                        <h2 className="gw-section-title" style={{ marginBottom: "32px" }}>
                            Related <span className="gw-hl">Services</span>
                        </h2>
                        <div className="gw-related-grid">
                            {relatedServices.map((rs) => (
                                <Link
                                    key={rs.slug}
                                    href={`/InnerServices/${rs.slug}`}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: "18px 20px",
                                        background: "#fafafa",
                                        border: "1px solid rgba(0,0,0,0.07)",
                                        borderRadius: "8px",
                                        textDecoration: "none",
                                        transition: "all 0.25s",
                                    }}
                                    onMouseEnter={e => {
                                        const el = e.currentTarget;
                                        el.style.borderColor = "#f57c15";
                                        el.style.background = "rgba(245,124,21,0.03)";
                                        el.style.transform = "translateY(-2px)";
                                        el.style.boxShadow = "0 6px 18px rgba(245,124,21,0.08)";
                                        const arrow = el.querySelector(".gw-rc-arrow") as HTMLElement;
                                        if (arrow) { arrow.style.opacity = "1"; arrow.style.transform = "translate(0,0)"; }
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget;
                                        el.style.borderColor = "rgba(0,0,0,0.07)";
                                        el.style.background = "#fafafa";
                                        el.style.transform = "translateY(0)";
                                        el.style.boxShadow = "none";
                                        const arrow = el.querySelector(".gw-rc-arrow") as HTMLElement;
                                        if (arrow) { arrow.style.opacity = "0"; arrow.style.transform = "translate(-4px,4px)"; }
                                    }}
                                >
                                    <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: "13px", fontWeight: 700, color: "#222", letterSpacing: "0.2px" }}>{rs.label}</span>
                                    <span className="gw-rc-arrow" style={{ fontSize: "16px", color: "#f57c15", opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.25s", display: "inline-block" }}>↗</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
                BOTTOM CTA
            ══════════════════════════════════════ */}
                <section className="gw-cta">
                    <div className="gw-cta-inner">
                        <span className="gw-eyebrow" style={{ color: "rgba(245,124,21,0.8)" }}>Get Started Today</span>
                        <h2 className="gw-cta-title">
                            Your Story Deserves<br />
                            <span className="gw-hl">To Be Told.</span>
                        </h2>
                        <p className="gw-cta-sub">
                            Confidential. Professional. Yours. Schedule a free consultation
                            with our ghostwriting team — no obligation, no trace.
                        </p>
                        <div className="gw-cta-btns">
                            <button className="gw-btn-orange gw-btn-lg">Get A Free Quote</button>
                            <button className="gw-btn-outline gw-btn-lg">(646) 298 6438</button>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
                STYLES
            ══════════════════════════════════════ */}
                <style jsx>{`

                .gw-page { font-family: 'Raleway', sans-serif; color: #111; background: #fff; }

                /* ── Shared tokens ── */
                .gw-eyebrow {
                    display: inline-block;
                    font-size: 10.5px; font-weight: 800;
                    letter-spacing: 3px; text-transform: uppercase;
                    color: #f57c15; margin-bottom: 14px;
                }
                .gw-section-title {
                    font-family: 'Oswald', sans-serif;
                    font-size: clamp(1.9rem, 3.5vw, 2.8rem);
                    color: #111; text-transform: uppercase;
                    line-height: 1.1; margin: 0 0 20px 0; letter-spacing: -0.3px;
                }
                .gw-hl { color: #f57c15; }
                .gw-body-text { font-size: 14px; color: #555; line-height: 1.75; margin: 0 0 16px 0; }
                .gw-section-head { margin-bottom: 52px; }
                .gw-head-center { text-align: center; }

                /* ── Buttons ── */
                .gw-btn-orange {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: #f57c15; color: #fff; border: none;
                    padding: 13px 28px; border-radius: 4px;
                    font-family: 'Raleway', sans-serif; font-size: 12px;
                    font-weight: 800; letter-spacing: 1.2px; text-transform: uppercase;
                    cursor: pointer; white-space: nowrap;
                    transition: background 0.25s, transform 0.2s, box-shadow 0.25s, color 0.25s;
                    box-shadow: 0 5px 18px rgba(245,124,21,0.28);
                }
                .gw-btn-orange:hover { background: #d96c0d; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(245,124,21,0.35); }
                .gw-btn-outline {
                    display: inline-flex; align-items: center;
                    background: transparent; color: #333;
                    border: 1.5px solid rgba(0,0,0,0.18); padding: 13px 28px; border-radius: 4px;
                    font-family: 'Raleway', sans-serif; font-size: 12px;
                    font-weight: 800; letter-spacing: 1.2px; text-transform: uppercase;
                    cursor: pointer; white-space: nowrap;
                    transition: border-color 0.25s, background 0.25s, color 0.25s;
                }
                .gw-btn-outline:hover { border-color: #f57c15; color: #f57c15; }
                .gw-btn-lg { padding: 15px 36px; font-size: 12.5px; }

                /* ══ HERO ══ */
                .gw-hero {
                    background: #060606; padding: 60px 24px 80px;
                    position: relative; overflow: hidden; width: 100%;
                }
                .gw-hero-bg {
                    position: absolute; inset: 0;
                    background:
                        radial-gradient(ellipse 55% 50% at 30% 50%, rgba(245,124,21,0.07) 0%, transparent 65%),
                        radial-gradient(ellipse 40% 60% at 80% 20%, rgba(245,124,21,0.04) 0%, transparent 60%);
                    pointer-events: none;
                }
                .gw-hero-grid {
                    max-width: 1300px; margin: 0 auto;
                    display: grid; grid-template-columns: 1fr 260px;
                    gap: 40px; align-items: start;
                    position: relative; z-index: 2;
                }
                .gw-hero-inner { padding-top: 10px; }

                .gw-breadcrumb { display: flex; align-items: center; gap: 8px; margin-bottom: 28px; }
                .gw-bc-sep { color: rgba(255,255,255,0.2); font-size: 11px; }
                .gw-bc-current { font-size: 11px; font-weight: 700; color: #f57c15; letter-spacing: 0.5px; }

                .gw-hero-tag {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: rgba(245,124,21,0.08); border: 1px solid rgba(245,124,21,0.2);
                    border-radius: 30px; padding: 6px 16px;
                    font-size: 10.5px; font-weight: 800; letter-spacing: 2.5px;
                    text-transform: uppercase; color: #f57c15; margin-bottom: 28px;
                }
                .gw-tag-dot { width: 5px; height: 5px; border-radius: 50%; background: #f57c15; flex-shrink: 0; }

                .gw-hero-title {
                    font-family: 'Oswald', sans-serif;
                    font-size: clamp(2.8rem, 6vw, 5.2rem);
                    color: #fff; line-height: 0.95;
                    text-transform: uppercase; letter-spacing: -1px; margin: 0 0 24px 0;
                }
                .gw-hero-em { color: #f57c15; font-style: italic; }
                .gw-hero-sub {
                    font-size: 14.5px; color: rgba(255,255,255,0.45);
                    line-height: 1.7; max-width: 520px; margin: 0 0 36px 0; font-weight: 400;
                }

                .gw-hero-actions {
                    display: flex; flex-wrap: nowrap; gap: 12px;
                    margin-bottom: 32px; align-items: center;
                }
                .gw-hero-actions .gw-btn-outline {
                    color: rgba(255,255,255,0.6); border-color: rgba(255,255,255,0.15);
                }
                .gw-hero-actions .gw-btn-outline:hover { color: #fff; border-color: rgba(255,255,255,0.4); background: rgba(255,255,255,0.04); }

                .gw-trust-row { display: flex; flex-wrap: wrap; gap: 8px; }
                .gw-trust-pill {
                    font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.45);
                    background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 4px; padding: 6px 12px; letter-spacing: 0.3px;
                }

                .gw-hero-sidebar { display: flex; flex-direction: column; gap: 3px; padding-top: 64px; }
                .gw-sidebar-card {
                    background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 8px; padding: 20px 18px;
                    display: flex; flex-direction: column; gap: 4px;
                    transition: border-color 0.3s;
                }
                .gw-sidebar-card:hover { border-color: rgba(245,124,21,0.25); }
                .gw-sc-val { font-family: 'Oswald', sans-serif; font-size: 28px; font-weight: 700; color: #f57c15; line-height: 1; }
                .gw-sc-label { font-size: 10.5px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.3); }

                /* ══ INTRO ══ */
                .gw-intro { background: #fff; padding: 90px 24px; border-bottom: 1px solid rgba(0,0,0,0.06); }
                .gw-intro-inner {
                    max-width: 1200px; margin: 0 auto;
                    display: grid; grid-template-columns: 1fr 340px; gap: 70px; align-items: center;
                }
                .gw-visual-box {
                    background: #060606; border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 12px; padding: 32px 28px; position: relative; overflow: hidden;
                }
                .gw-visual-box::before {
                    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
                    background: linear-gradient(90deg, #f57c15, rgba(245,124,21,0.3));
                }
                .gw-vb-line {
                    position: absolute; top: 0; left: 28px; width: 1px; bottom: 0;
                    background: rgba(245,124,21,0.08);
                }
                .gw-vb-content { display: flex; flex-direction: column; gap: 4px; padding: 16px 0 16px 20px; }
                .gw-vb-num { font-family: 'Oswald', sans-serif; font-size: 32px; font-weight: 700; color: #f57c15; line-height: 1; }
                .gw-vb-label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.3); }
                .gw-vb-divider { height: 1px; background: rgba(255,255,255,0.05); }

                /* ══ FEATURES ══ */
                .gw-features { background: #f9f8f7; padding: 90px 24px; }
                .gw-features-inner { max-width: 1200px; margin: 0 auto; }
                .gw-features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3px; }
                .gw-feature-card {
                    background: #fff; border: 1px solid rgba(0,0,0,0.06); border-radius: 8px;
                    padding: 32px 28px; transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
                }
                .gw-feature-card:hover { border-color: rgba(245,124,21,0.25); box-shadow: 0 10px 30px rgba(245,124,21,0.07); transform: translateY(-3px); }
                .gw-fc-num { display: block; font-family: 'Oswald', sans-serif; font-size: 36px; font-weight: 700; color: rgba(245,124,21,0.12); line-height: 1; margin-bottom: -6px; user-select: none; }
                .gw-fc-title { font-family: 'Oswald', sans-serif; font-size: 16px; font-weight: 600; color: #111; text-transform: uppercase; letter-spacing: 0.3px; margin: 0 0 12px 0; }
                .gw-fc-desc { font-size: 13px; color: #666; line-height: 1.7; margin: 0; }

                /* ══ NICHES ══ */
                .gw-niches { background: #060606; padding: 90px 24px; }
                .gw-niches-inner { max-width: 1100px; margin: 0 auto; }
                .gw-niches .gw-section-title { color: #fff; }
                .gw-niches-sub { font-size: 13.5px; color: rgba(255,255,255,0.35); margin: 0; }
                .gw-niches-grid { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
                .gw-niche-pill {
                    display: inline-flex; align-items: center; gap: 8px;
                    padding: 11px 20px; background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.09); border-radius: 6px;
                    font-size: 12.5px; font-weight: 600; color: rgba(255,255,255,0.65);
                    letter-spacing: 0.3px; transition: all 0.25s; cursor: default;
                }
                .gw-niche-pill:hover { background: rgba(245,124,21,0.1); border-color: rgba(245,124,21,0.3); color: #f57c15; }
                .gw-np-icon { color: #f57c15; font-size: 8px; }

                /* ══ PROCESS ══ */
                .gw-process { background: #fff; padding: 90px 24px; border-top: 1px solid rgba(0,0,0,0.05); }
                .gw-process-inner { max-width: 900px; margin: 0 auto; }
                .gw-steps { display: flex; flex-direction: column; }
                .gw-step-row { display: flex; gap: 24px; align-items: stretch; }
                .gw-step-row:hover .gw-step-node { background: #f57c15; }
                .gw-step-row:hover .gw-step-num { color: #fff; }
                .gw-step-left { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; width: 52px; }
                .gw-step-node {
                    width: 52px; height: 52px; border-radius: 50%;
                    background: #fff; border: 2px solid #f57c15;
                    display: flex; align-items: center; justify-content: center;
                    flex-shrink: 0; transition: background 0.3s;
                }
                .gw-step-num { font-family: 'Oswald', sans-serif; font-size: 14px; font-weight: 700; color: #f57c15; transition: color 0.3s; }
                .gw-step-vline { width: 2px; flex: 1; background: rgba(245,124,21,0.15); min-height: 24px; }
                .gw-step-body { padding: 10px 0 36px; flex: 1; }
                .gw-step-title { font-family: 'Oswald', sans-serif; font-size: 17px; font-weight: 600; color: #111; text-transform: uppercase; margin: 0 0 8px 0; }
                .gw-step-desc { font-size: 13.5px; color: #666; line-height: 1.65; margin: 0; }

                /* ══ FAQ ══ */
                .gw-faq { background: #f9f8f7; padding: 90px 24px; }
                .gw-faq-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 320px 1fr; gap: 70px; align-items: start; }
                .gw-faq-item { background: #fff; border: 1px solid rgba(0,0,0,0.06); border-radius: 8px; margin-bottom: 6px; overflow: hidden; transition: border-color 0.25s; }
                .gw-faq-item[open] { border-color: rgba(245,124,21,0.25); }
                .gw-faq-q { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 18px 20px; font-family: 'Raleway', sans-serif; font-size: 13.5px; font-weight: 700; color: #111; cursor: pointer; list-style: none; user-select: none; }
                .gw-faq-q::-webkit-details-marker { display: none; }
                .gw-faq-icon { font-size: 20px; font-weight: 300; color: #f57c15; flex-shrink: 0; line-height: 1; transition: transform 0.25s; }
                .gw-faq-item[open] .gw-faq-icon { transform: rotate(45deg); }
                .gw-faq-a { padding: 14px 20px 18px; font-size: 13px; color: #666; line-height: 1.7; margin: 0; border-top: 1px solid rgba(0,0,0,0.04); }

                /* ══ RELATED ══ */
                .gw-related { background: #fff; padding: 70px 24px; border-top: 1px solid rgba(0,0,0,0.05); }
                .gw-related-inner { max-width: 1200px; margin: 0 auto; }
                .gw-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }

                /* ══ CTA ══ */
                .gw-cta { background: #060606; padding: 110px 24px; text-align: center; position: relative; overflow: hidden; }
                .gw-cta::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 60% at 50% 50%, rgba(245,124,21,0.07) 0%, transparent 70%); pointer-events: none; }
                .gw-cta-inner { position: relative; z-index: 2; }
                .gw-cta-title { font-family: 'Oswald', sans-serif; font-size: clamp(2.5rem, 5vw, 4.2rem); color: #fff; text-transform: uppercase; line-height: 1.05; margin: 8px 0 20px 0; letter-spacing: -0.5px; }
                .gw-cta-sub { font-size: 14.5px; color: rgba(255,255,255,0.38); max-width: 460px; margin: 0 auto 36px; line-height: 1.7; }
                .gw-cta-btns { display: flex; justify-content: center; gap: 14px; flex-wrap: nowrap; align-items: center; }
                .gw-cta .gw-btn-outline { color: rgba(255,255,255,0.6); border-color: rgba(255,255,255,0.15); }
                .gw-cta .gw-btn-outline:hover { color: #fff; border-color: rgba(255,255,255,0.4); background: rgba(255,255,255,0.04); }

                /* ══ RESPONSIVE ══ */
                @media (max-width: 1024px) {
                    .gw-hero-grid { grid-template-columns: 1fr; }
                    .gw-hero-sidebar { padding-top: 0; display: grid; grid-template-columns: repeat(4, 1fr); }
                    .gw-intro-inner { grid-template-columns: 1fr; gap: 40px; }
                    .gw-faq-inner { grid-template-columns: 1fr; gap: 40px; }
                }
                @media (max-width: 768px) {
                    .gw-features-grid { grid-template-columns: 1fr; }
                    .gw-related-grid { grid-template-columns: repeat(2, 1fr); }
                    .gw-hero-sidebar { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 520px) {
                    .gw-related-grid { grid-template-columns: 1fr; }
                    .gw-cta-btns { flex-wrap: wrap; }
                }
            `}</style>
            </main>
            <FooterSection />
        </>
    );
}