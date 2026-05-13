"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

// ── Related services for sidebar / bottom links
const relatedServices = [
    { label: "Ghostwriting", slug: "ghostwriting" },
    { label: "Memoir Writing", slug: "memoir-writing" },
    { label: "Fiction Writing", slug: "fiction-writing" },
    { label: "Non-Fiction Writing", slug: "non-fiction-writing" },
    { label: "Script Writing", slug: "script-writing" },
    { label: "Book Editing", slug: "book-editing" },
];

const genres = [
    { icon: "✦", label: "Literary Fiction" },
    { icon: "✦", label: "Self-Help & Personal Development" },
    { icon: "✦", label: "Business & Leadership" },
    { icon: "✦", label: "Romance" },
    { icon: "✦", label: "Thriller & Suspense" },
    { icon: "✦", label: "Biography & Memoir" },
    { icon: "✦", label: "Fantasy & Sci-Fi" },
    { icon: "✦", label: "Children's Books" },
    { icon: "✦", label: "Health & Wellness" },
    { icon: "✦", label: "True Crime" },
    { icon: "✦", label: "History & Politics" },
    { icon: "✦", label: "Religion & Spirituality" },
];

const features = [
    {
        num: "01",
        title: "Dedicated Book Writers",
        desc: "Our team of professional authors brings decades of combined experience across all major genres. Every writer is vetted, published, and matched to your specific project needs.",
    },
    {
        num: "02",
        title: "Structured Writing Process",
        desc: "We follow a proven chapter-by-chapter framework — outline, draft, review, revise — keeping you involved at every milestone without overwhelming you.",
    },
    {
        num: "03",
        title: "Your Voice, Preserved",
        desc: "Whether we're writing from scratch or co-authoring, your unique voice, tone, and perspective remain the heart of the manuscript.",
    },
    {
        num: "04",
        title: "NDA & Full Ownership",
        desc: "Complete confidentiality. You own 100% of the copyright. We sign NDAs before work begins and never claim authorship credit.",
    },
    {
        num: "05",
        title: "Unlimited Revisions",
        desc: "We refine until you're completely satisfied. Our revision policy ensures the final manuscript meets your exact vision — no extra charges.",
    },
    {
        num: "06",
        title: "Publish-Ready Delivery",
        desc: "Receive a fully formatted, proofread manuscript ready for submission to publishers or self-publishing platforms worldwide.",
    },
];

const steps = [
    { num: "01", title: "Discovery Call", desc: "We learn about your story, goals, target audience, and timeline." },
    { num: "02", title: "Outline & Structure", desc: "A detailed chapter-by-chapter outline is created and approved by you." },
    { num: "03", title: "First Draft", desc: "Our writer crafts the complete manuscript, chapter by chapter." },
    { num: "04", title: "Review & Revise", desc: "You review each section and we refine based on your feedback." },
    { num: "05", title: "Final Manuscript", desc: "Polished, proofread, and formatted — ready for the world." },
];

const faqs = [
    {
        q: "How long does it take to write a book?",
        a: "Timelines vary by length and complexity. A standard 50,000-word manuscript typically takes 8–14 weeks. Rush timelines are available upon request.",
    },
    {
        q: "Will my name be on the book?",
        a: "Absolutely. You are the sole author. We operate under full NDA and never claim any credit or authorship rights.",
    },
    {
        q: "What information do I need to provide?",
        a: "We start with a discovery call. You share your story idea, key points, reference materials, or any existing notes. We handle the rest.",
    },
    {
        q: "Do you write in my voice or your own style?",
        a: "Your voice. Before writing begins, we conduct a tone and style assessment to ensure the manuscript sounds authentically like you.",
    },
    {
        q: "Can I be involved throughout the process?",
        a: "As much or as little as you like. Some clients prefer weekly check-ins, others review only completed drafts. We adapt to your workflow.",
    },
];

export default function BookWritingPage() {
    return (
        <>
            <Navbar />
            <main className="bw-page">

                {/* ══════════════════════════════════════
                HERO
            ══════════════════════════════════════ */}
                <section className="bw-hero">
                    <div className="bw-hero-bg" />
                    <div className="bw-hero-grid">
                        <div className="bw-hero-inner">

                            {/* Breadcrumb */}
                            <nav className="bw-breadcrumb">
                                <Link href="/" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none", letterSpacing: "0.5px", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Home</Link>
                                <span className="bw-bc-sep">›</span>
                                <Link href="/services" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none", letterSpacing: "0.5px", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Services</Link>
                                <span className="bw-bc-sep">›</span>
                                <span className="bw-bc-current">Book Writing</span>
                            </nav>

                            {/* Category tag */}
                            <div className="bw-hero-tag">
                                <span className="bw-tag-dot" />
                                Writing Services
                            </div>

                            {/* Heading */}
                            <h1 className="bw-hero-title">
                                Professional<br />
                                <em className="bw-hero-em">Book Writing</em><br />
                                Services
                            </h1>

                            <p className="bw-hero-sub">
                                From your first idea to a publish-ready manuscript — our seasoned
                                authors craft compelling books that resonate with readers and stand
                                the test of time.
                            </p>

                            <div className="bw-hero-actions">
                                <button className="bw-btn-orange">Get A Free Quote</button>
                                <button className="bw-btn-outline">(646) 298 6438</button>
                            </div>

                            {/* Trust pills */}
                            <div className="bw-trust-row">
                                <span className="bw-trust-pill">✓ 100% Confidential</span>
                                <span className="bw-trust-pill">✓ Full Copyright Ownership</span>
                                <span className="bw-trust-pill">✓ Unlimited Revisions</span>
                                <span className="bw-trust-pill">✓ NDA Signed</span>
                            </div>

                        </div>

                        {/* Sidebar stats */}
                        <div className="bw-hero-sidebar">
                            <div className="bw-sidebar-card">
                                <span className="bw-sc-val">5,000+</span>
                                <span className="bw-sc-label">Books Written</span>
                            </div>
                            <div className="bw-sidebar-card">
                                <span className="bw-sc-val">400+</span>
                                <span className="bw-sc-label">Publishing Platforms</span>
                            </div>
                            <div className="bw-sidebar-card">
                                <span className="bw-sc-val">98%</span>
                                <span className="bw-sc-label">Client Satisfaction</span>
                            </div>
                            <div className="bw-sidebar-card">
                                <span className="bw-sc-val">15+</span>
                                <span className="bw-sc-label">Years Experience</span>
                            </div>
                        </div>
                    </div>{/* end bw-hero-grid */}
                </section>

                {/* ══════════════════════════════════════
                WHAT WE OFFER — intro strip
            ══════════════════════════════════════ */}
                <section className="bw-intro">
                    <div className="bw-intro-inner">
                        <div className="bw-intro-text">
                            <span className="bw-eyebrow">What We Do</span>
                            <h2 className="bw-section-title">
                                Every Great Book Starts With<br />
                                <span className="bw-hl">A Single Conversation</span>
                            </h2>
                            <p className="bw-body-text">
                                Belmont Publishing pairs you with a dedicated professional author who
                                becomes the voice of your vision. Whether you have a fully-formed story
                                or just a spark of an idea, we build the manuscript around your goals,
                                your audience, and your message.
                            </p>
                            <p className="bw-body-text">
                                Our book writing service covers everything from initial concept
                                development and structural outlining through to the final, polished
                                manuscript — ready for editing, design, and worldwide publication.
                            </p>
                            <button className="bw-btn-orange" style={{ marginTop: "8px" }}>Start Your Book Today</button>
                        </div>
                        <div className="bw-intro-visual">
                            <div className="bw-visual-box">
                                <div className="bw-vb-line" />
                                <div className="bw-vb-content">
                                    <span className="bw-vb-num">50K–100K</span>
                                    <span className="bw-vb-label">Words per manuscript</span>
                                </div>
                                <div className="bw-vb-divider" />
                                <div className="bw-vb-content">
                                    <span className="bw-vb-num">8–14</span>
                                    <span className="bw-vb-label">Weeks to completion</span>
                                </div>
                                <div className="bw-vb-divider" />
                                <div className="bw-vb-content">
                                    <span className="bw-vb-num">12+</span>
                                    <span className="bw-vb-label">Genres covered</span>
                                </div>
                                <div className="bw-vb-divider" />
                                <div className="bw-vb-content">
                                    <span className="bw-vb-num">∞</span>
                                    <span className="bw-vb-label">Revisions included</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
                FEATURES GRID
            ══════════════════════════════════════ */}
                <section className="bw-features">
                    <div className="bw-features-inner">
                        <div className="bw-section-head">
                            <span className="bw-eyebrow">Why Choose Us</span>
                            <h2 className="bw-section-title">
                                The Belmont <span className="bw-hl">Difference</span>
                            </h2>
                        </div>
                        <div className="bw-features-grid">
                            {features.map((f) => (
                                <div key={f.num} className="bw-feature-card">
                                    <span className="bw-fc-num">{f.num}</span>
                                    <h3 className="bw-fc-title">{f.title}</h3>
                                    <p className="bw-fc-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
                GENRES
            ══════════════════════════════════════ */}
                <section className="bw-genres">
                    <div className="bw-genres-inner">
                        <div className="bw-section-head bw-head-center">
                            <span className="bw-eyebrow">Genres We Cover</span>
                            <h2 className="bw-section-title">
                                We Write Across <span className="bw-hl">Every Genre</span>
                            </h2>
                            <p className="bw-genres-sub">
                                Our diverse team of writers brings authentic expertise to every category.
                            </p>
                        </div>
                        <div className="bw-genres-grid">
                            {genres.map((g) => (
                                <div key={g.label} className="bw-genre-pill">
                                    <span className="bw-gp-icon">{g.icon}</span>
                                    {g.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
                PROCESS
            ══════════════════════════════════════ */}
                <section className="bw-process">
                    <div className="bw-process-inner">
                        <div className="bw-section-head bw-head-center">
                            <span className="bw-eyebrow">How It Works</span>
                            <h2 className="bw-section-title">
                                Our <span className="bw-hl">Writing Process</span>
                            </h2>
                        </div>
                        <div className="bw-steps">
                            {steps.map((s, i) => (
                                <div key={s.num} className="bw-step-row">
                                    {/* Left: node + vertical line */}
                                    <div className="bw-step-left">
                                        <div className="bw-step-node">
                                            <span className="bw-step-num">{s.num}</span>
                                        </div>
                                        {i < steps.length - 1 && <div className="bw-step-vline" />}
                                    </div>
                                    {/* Right: content */}
                                    <div className="bw-step-body">
                                        <h3 className="bw-step-title">{s.title}</h3>
                                        <p className="bw-step-desc">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
                FAQ
            ══════════════════════════════════════ */}
                <section className="bw-faq">
                    <div className="bw-faq-inner">
                        <div className="bw-faq-left">
                            <span className="bw-eyebrow">FAQ</span>
                            <h2 className="bw-section-title">
                                Common <span className="bw-hl">Questions</span>
                            </h2>
                            <p className="bw-body-text" style={{ marginTop: "16px" }}>
                                Still have questions? Our team is available 24/7 for a free consultation.
                            </p>
                            <button className="bw-btn-orange" style={{ marginTop: "24px" }}>
                                Talk To An Expert
                            </button>
                        </div>
                        <div className="bw-faq-right">
                            {faqs.map((item, i) => (
                                <details key={i} className="bw-faq-item">
                                    <summary className="bw-faq-q">
                                        {item.q}
                                        <span className="bw-faq-icon">+</span>
                                    </summary>
                                    <p className="bw-faq-a">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
                RELATED SERVICES
            ══════════════════════════════════════ */}
                <section className="bw-related">
                    <div className="bw-related-inner">
                        <span className="bw-eyebrow">Explore More</span>
                        <h2 className="bw-section-title" style={{ marginBottom: "32px" }}>
                            Related <span className="bw-hl">Services</span>
                        </h2>
                        <div className="bw-related-grid">
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
                                        const arrow = el.querySelector(".bw-rc-arrow") as HTMLElement;
                                        if (arrow) { arrow.style.opacity = "1"; arrow.style.transform = "translate(0,0)"; }
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget;
                                        el.style.borderColor = "rgba(0,0,0,0.07)";
                                        el.style.background = "#fafafa";
                                        el.style.transform = "translateY(0)";
                                        el.style.boxShadow = "none";
                                        const arrow = el.querySelector(".bw-rc-arrow") as HTMLElement;
                                        if (arrow) { arrow.style.opacity = "0"; arrow.style.transform = "translate(-4px,4px)"; }
                                    }}
                                >
                                    <span className="bw-rc-label">{rs.label}</span>
                                    <span className="bw-rc-arrow" style={{ fontSize: "16px", color: "#f57c15", opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.25s" }}>↗</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
                BOTTOM CTA
            ══════════════════════════════════════ */}
                <section className="bw-cta">
                    <div className="bw-cta-inner">
                        <span className="bw-eyebrow" style={{ color: "rgba(245,124,21,0.8)" }}>Get Started Today</span>
                        <h2 className="bw-cta-title">
                            Ready To Write<br />
                            <span className="bw-hl">Your Book?</span>
                        </h2>
                        <p className="bw-cta-sub">
                            Schedule a free consultation with our publishing experts today.
                            No obligation, no pressure — just your story, brought to life.
                        </p>
                        <div className="bw-cta-btns">
                            <button className="bw-btn-orange bw-btn-lg">Get A Free Quote</button>
                            <button className="bw-btn-outline bw-btn-lg">(646) 298 6438</button>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
                STYLES
            ══════════════════════════════════════ */}
                <style jsx>{`

                /* ── Reset / base ── */
                .bw-page {
                    font-family: 'Raleway', sans-serif;
                    color: #111;
                    background: #fff;
                }

                /* ── Shared tokens ── */
                .bw-eyebrow {
                    display: inline-block;
                    font-size: 10.5px;
                    font-weight: 800;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    color: #f57c15;
                    margin-bottom: 14px;
                }
                .bw-section-title {
                    font-family: 'Oswald', sans-serif;
                    font-size: clamp(1.9rem, 3.5vw, 2.8rem);
                    color: #111;
                    text-transform: uppercase;
                    line-height: 1.1;
                    margin: 0 0 20px 0;
                    letter-spacing: -0.3px;
                }
                .bw-hl { color: #f57c15; }
                .bw-body-text {
                    font-size: 14px;
                    color: #555;
                    line-height: 1.75;
                    margin: 0 0 16px 0;
                }
                .bw-section-head { margin-bottom: 52px; }
                .bw-head-center { text-align: center; }

                /* ── Buttons ── */
                .bw-btn-orange {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: #f57c15;
                    color: #fff;
                    border: none;
                    padding: 13px 28px;
                    border-radius: 4px;
                    font-family: 'Raleway', sans-serif;
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 1.2px;
                    text-transform: uppercase;
                    cursor: pointer;
                    white-space: nowrap;
                    transition: background 0.25s, transform 0.2s, box-shadow 0.25s, color 0.25s;
                    box-shadow: 0 5px 18px rgba(245,124,21,0.28);
                }
                .bw-btn-orange:hover {
                    background: #d96c0d;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(245,124,21,0.35);
                }
                .bw-btn-outline {
                    display: inline-flex;
                    align-items: center;
                    background: transparent;
                    color: #333;
                    border: 1.5px solid rgba(0,0,0,0.18);
                    padding: 13px 28px;
                    border-radius: 4px;
                    font-family: 'Raleway', sans-serif;
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 1.2px;
                    text-transform: uppercase;
                    cursor: pointer;
                    white-space: nowrap;
                    transition: border-color 0.25s, background 0.25s, color 0.25s;
                }
                .bw-btn-outline:hover {
                    border-color: #f57c15;
                    color: #f57c15;
                }
                .bw-btn-lg { padding: 15px 36px; font-size: 12.5px; }

                /* ══════════════════════════════════
                   HERO
                ══════════════════════════════════ */
                .bw-hero {
                    background: #060606;
                    padding: 60px 24px 80px;
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                }
                .bw-hero-grid {
                    max-width: 1300px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 1fr 260px;
                    gap: 40px;
                    align-items: start;
                    position: relative;
                    z-index: 2;
                }
                .bw-hero-bg {
                    position: absolute;
                    inset: 0;
                    background:
                        radial-gradient(ellipse 55% 50% at 30% 50%, rgba(245,124,21,0.07) 0%, transparent 65%),
                        radial-gradient(ellipse 40% 60% at 80% 20%, rgba(245,124,21,0.04) 0%, transparent 60%);
                    pointer-events: none;
                }
                .bw-hero-inner {
                    position: relative;
                    z-index: 2;
                    padding-top: 10px;
                }

                /* Breadcrumb */
                .bw-breadcrumb {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 28px;
                }
                .bw-bc-link {
                    font-size: 11px;
                    font-weight: 600;
                    color: rgba(255,255,255,0.35);
                    text-decoration: none;
                    letter-spacing: 0.5px;
                    transition: color 0.2s;
                }
                .bw-bc-link:hover { color: #f57c15; }
                .bw-bc-sep { color: rgba(255,255,255,0.2); font-size: 11px; }
                .bw-bc-current { font-size: 11px; font-weight: 700; color: #f57c15; letter-spacing: 0.5px; }

                /* Hero tag */
                .bw-hero-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(245,124,21,0.08);
                    border: 1px solid rgba(245,124,21,0.2);
                    border-radius: 30px;
                    padding: 6px 16px;
                    font-size: 10.5px;
                    font-weight: 800;
                    letter-spacing: 2.5px;
                    text-transform: uppercase;
                    color: #f57c15;
                    margin-bottom: 28px;
                }
                .bw-tag-dot {
                    width: 5px; height: 5px;
                    border-radius: 50%;
                    background: #f57c15;
                    flex-shrink: 0;
                }

                /* Hero title */
                .bw-hero-title {
                    font-family: 'Oswald', sans-serif;
                    font-size: clamp(2.8rem, 6vw, 5.2rem);
                    color: #fff;
                    line-height: 0.95;
                    text-transform: uppercase;
                    letter-spacing: -1px;
                    margin: 0 0 24px 0;
                }
                .bw-hero-em {
                    color: #f57c15;
                    font-style: italic;
                }
                .bw-hero-sub {
                    font-size: 14.5px;
                    color: rgba(255,255,255,0.45);
                    line-height: 1.7;
                    max-width: 520px;
                    margin: 0 0 36px 0;
                    font-weight: 400;
                }

                /* Hero action buttons */
                .bw-hero-actions {
                    display: flex;
                    flex-wrap: nowrap;
                    gap: 12px;
                    margin-bottom: 32px;
                    align-items: center;
                }
                .bw-hero-actions .bw-btn-outline {
                    color: rgba(255,255,255,0.6);
                    border-color: rgba(255,255,255,0.15);
                }
                .bw-hero-actions .bw-btn-outline:hover {
                    color: #fff;
                    border-color: rgba(255,255,255,0.4);
                    background: rgba(255,255,255,0.04);
                }

                /* Trust pills */
                .bw-trust-row {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }
                .bw-trust-pill {
                    font-size: 11px;
                    font-weight: 700;
                    color: rgba(255,255,255,0.45);
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 4px;
                    padding: 6px 12px;
                    letter-spacing: 0.3px;
                }

                /* Hero sidebar */
                .bw-hero-sidebar {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                    padding-top: 64px;
                }
                .bw-sidebar-card {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 8px;
                    padding: 20px 18px;
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    transition: border-color 0.3s;
                }
                .bw-sidebar-card:hover { border-color: rgba(245,124,21,0.25); }
                .bw-sc-val {
                    font-family: 'Oswald', sans-serif;
                    font-size: 28px;
                    font-weight: 700;
                    color: #f57c15;
                    line-height: 1;
                }
                .bw-sc-label {
                    font-size: 10.5px;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.3);
                }

                /* ══════════════════════════════════
                   INTRO
                ══════════════════════════════════ */
                .bw-intro {
                    background: #fff;
                    padding: 90px 24px;
                    border-bottom: 1px solid rgba(0,0,0,0.06);
                }
                .bw-intro-inner {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 1fr 340px;
                    gap: 70px;
                    align-items: center;
                }
                .bw-intro-visual {}
                .bw-visual-box {
                    background: #060606;
                    border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 12px;
                    padding: 32px 28px;
                    position: relative;
                    overflow: hidden;
                }
                .bw-visual-box::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #f57c15, rgba(245,124,21,0.3));
                }
                .bw-vb-line {
                    position: absolute;
                    top: 0; left: 28px;
                    width: 1px; bottom: 0;
                    background: rgba(245,124,21,0.08);
                }
                .bw-vb-content {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    padding: 16px 0 16px 20px;
                }
                .bw-vb-num {
                    font-family: 'Oswald', sans-serif;
                    font-size: 32px;
                    font-weight: 700;
                    color: #f57c15;
                    line-height: 1;
                }
                .bw-vb-label {
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.3);
                }
                .bw-vb-divider {
                    height: 1px;
                    background: rgba(255,255,255,0.05);
                    margin: 0;
                }

                /* ══════════════════════════════════
                   FEATURES
                ══════════════════════════════════ */
                .bw-features {
                    background: #f9f8f7;
                    padding: 90px 24px;
                }
                .bw-features-inner {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .bw-features-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 3px;
                }
                .bw-feature-card {
                    background: #fff;
                    border: 1px solid rgba(0,0,0,0.06);
                    border-radius: 8px;
                    padding: 32px 28px;
                    transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
                }
                .bw-feature-card:hover {
                    border-color: rgba(245,124,21,0.25);
                    box-shadow: 0 10px 30px rgba(245,124,21,0.07);
                    transform: translateY(-3px);
                }
                .bw-fc-num {
                    display: block;
                    font-family: 'Oswald', sans-serif;
                    font-size: 36px;
                    font-weight: 700;
                    color: rgba(245,124,21,0.12);
                    line-height: 1;
                    margin-bottom: -6px;
                    user-select: none;
                }
                .bw-fc-title {
                    font-family: 'Oswald', sans-serif;
                    font-size: 16px;
                    font-weight: 600;
                    color: #111;
                    text-transform: uppercase;
                    letter-spacing: 0.3px;
                    margin: 0 0 12px 0;
                }
                .bw-fc-desc {
                    font-size: 13px;
                    color: #666;
                    line-height: 1.7;
                    margin: 0;
                }

                /* ══════════════════════════════════
                   GENRES
                ══════════════════════════════════ */
                .bw-genres {
                    background: #060606;
                    padding: 90px 24px;
                }
                .bw-genres-inner {
                    max-width: 1100px;
                    margin: 0 auto;
                }
                .bw-genres .bw-section-title { color: #fff; }
                .bw-genres-sub {
                    font-size: 13.5px;
                    color: rgba(255,255,255,0.35);
                    margin: 0;
                }
                .bw-genres-grid {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    justify-content: center;
                }
                .bw-genre-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 11px 20px;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.09);
                    border-radius: 6px;
                    font-size: 12.5px;
                    font-weight: 600;
                    color: rgba(255,255,255,0.65);
                    letter-spacing: 0.3px;
                    transition: all 0.25s;
                    cursor: default;
                }
                .bw-genre-pill:hover {
                    background: rgba(245,124,21,0.1);
                    border-color: rgba(245,124,21,0.3);
                    color: #f57c15;
                }
                .bw-gp-icon { color: #f57c15; font-size: 8px; }

                /* ══════════════════════════════════
                   PROCESS
                ══════════════════════════════════ */
                .bw-process {
                    background: #fff;
                    padding: 90px 24px;
                    border-top: 1px solid rgba(0,0,0,0.05);
                }
                .bw-process-inner {
                    max-width: 900px;
                    margin: 0 auto;
                }
                .bw-steps {
                    display: flex;
                    flex-direction: column;
                }
                /* Each row = node column + content column side by side */
                .bw-step-row {
                    display: flex;
                    gap: 24px;
                    align-items: stretch;
                }
                .bw-step-row:hover .bw-step-node { background: #f57c15; }
                .bw-step-row:hover .bw-step-num { color: #fff; }
                /* Left column: circle + vertical line stacked */
                .bw-step-left {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    flex-shrink: 0;
                    width: 52px;
                }
                .bw-step-node {
                    width: 52px;
                    height: 52px;
                    border-radius: 50%;
                    background: #fff;
                    border: 2px solid #f57c15;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    transition: background 0.3s;
                }
                .bw-step-num {
                    font-family: 'Oswald', sans-serif;
                    font-size: 14px;
                    font-weight: 700;
                    color: #f57c15;
                    transition: color 0.3s;
                }
                /* Vertical line fills remaining space below node */
                .bw-step-vline {
                    width: 2px;
                    flex: 1;
                    background: rgba(245,124,21,0.15);
                    min-height: 24px;
                }
                /* Right column: text content */
                .bw-step-body {
                    padding: 10px 0 36px;
                    flex: 1;
                }
                .bw-step-title {
                    font-family: 'Oswald', sans-serif;
                    font-size: 17px;
                    font-weight: 600;
                    color: #111;
                    text-transform: uppercase;
                    margin: 0 0 8px 0;
                }
                .bw-step-desc {
                    font-size: 13.5px;
                    color: #666;
                    line-height: 1.65;
                    margin: 0;
                }

                /* ══════════════════════════════════
                   FAQ
                ══════════════════════════════════ */
                .bw-faq {
                    background: #f9f8f7;
                    padding: 90px 24px;
                }
                .bw-faq-inner {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 320px 1fr;
                    gap: 70px;
                    align-items: start;
                }
                .bw-faq-item {
                    background: #fff;
                    border: 1px solid rgba(0,0,0,0.06);
                    border-radius: 8px;
                    margin-bottom: 6px;
                    overflow: hidden;
                    transition: border-color 0.25s;
                }
                .bw-faq-item[open] { border-color: rgba(245,124,21,0.25); }
                .bw-faq-q {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 16px;
                    padding: 18px 20px;
                    font-family: 'Raleway', sans-serif;
                    font-size: 13.5px;
                    font-weight: 700;
                    color: #111;
                    cursor: pointer;
                    list-style: none;
                    user-select: none;
                }
                .bw-faq-q::-webkit-details-marker { display: none; }
                .bw-faq-icon {
                    font-size: 20px;
                    font-weight: 300;
                    color: #f57c15;
                    flex-shrink: 0;
                    line-height: 1;
                    transition: transform 0.25s;
                }
                .bw-faq-item[open] .bw-faq-icon { transform: rotate(45deg); }
                .bw-faq-a {
                    padding: 0 20px 18px;
                    font-size: 13px;
                    color: #666;
                    line-height: 1.7;
                    margin: 0;
                    border-top: 1px solid rgba(0,0,0,0.04);
                    padding-top: 14px;
                }

                /* ══════════════════════════════════
                   RELATED SERVICES
                ══════════════════════════════════ */
                .bw-related {
                    background: #fff;
                    padding: 70px 24px;
                    border-top: 1px solid rgba(0,0,0,0.05);
                }
                .bw-related-inner {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .bw-related-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 10px;
                }
                .bw-related-card {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 18px 20px;
                    background: #fafafa;
                    border: 1px solid rgba(0,0,0,0.07);
                    border-radius: 8px;
                    text-decoration: none;
                    transition: all 0.25s;
                }
                .bw-related-card:hover {
                    border-color: #f57c15;
                    background: rgba(245,124,21,0.03);
                    transform: translateY(-2px);
                    box-shadow: 0 6px 18px rgba(245,124,21,0.08);
                }
                .bw-rc-label {
                    font-family: 'Raleway', sans-serif;
                    font-size: 13px;
                    font-weight: 700;
                    color: #222;
                    letter-spacing: 0.2px;
                }
                .bw-rc-arrow {
                    font-size: 16px;
                    color: #f57c15;
                    opacity: 0;
                    transform: translate(-4px, 4px);
                    transition: all 0.25s;
                }
                .bw-related-card:hover .bw-rc-arrow {
                    opacity: 1;
                    transform: translate(0, 0);
                }

                /* ══════════════════════════════════
                   BOTTOM CTA
                ══════════════════════════════════ */
                .bw-cta {
                    background: #060606;
                    padding: 110px 24px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                .bw-cta::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(ellipse 60% 60% at 50% 50%, rgba(245,124,21,0.07) 0%, transparent 70%);
                    pointer-events: none;
                }
                .bw-cta-inner { position: relative; z-index: 2; }
                .bw-cta-title {
                    font-family: 'Oswald', sans-serif;
                    font-size: clamp(2.5rem, 5vw, 4.2rem);
                    color: #fff;
                    text-transform: uppercase;
                    line-height: 1.05;
                    margin: 8px 0 20px 0;
                    letter-spacing: -0.5px;
                }
                .bw-cta-sub {
                    font-size: 14.5px;
                    color: rgba(255,255,255,0.38);
                    max-width: 460px;
                    margin: 0 auto 36px;
                    line-height: 1.7;
                }
                .bw-cta-btns {
                    display: flex;
                    justify-content: center;
                    gap: 14px;
                    flex-wrap: nowrap;
                    align-items: center;
                }
                .bw-cta .bw-btn-outline {
                    color: rgba(255,255,255,0.6);
                    border-color: rgba(255,255,255,0.15);
                }
                .bw-cta .bw-btn-outline:hover {
                    color: #fff;
                    border-color: rgba(255,255,255,0.4);
                    background: rgba(255,255,255,0.04);
                }

                /* ══════════════════════════════════
                   RESPONSIVE
                ══════════════════════════════════ */
                @media (max-width: 1024px) {
                    .bw-hero-grid { grid-template-columns: 1fr; }
                    .bw-hero-sidebar {
                        padding-top: 0;
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                    }
                    .bw-intro-inner { grid-template-columns: 1fr; gap: 40px; }
                    .bw-faq-inner { grid-template-columns: 1fr; gap: 40px; }
                }
                @media (max-width: 768px) {
                    .bw-features-grid { grid-template-columns: 1fr; }
                    .bw-related-grid { grid-template-columns: repeat(2, 1fr); }
                    .bw-hero-sidebar { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 520px) {
                    .bw-related-grid { grid-template-columns: 1fr; }
                    .bw-hero-sidebar { grid-template-columns: repeat(2, 1fr); }
                    .bw-cta-btns { flex-wrap: wrap; }
                }
            `}</style>
            </main>
            <FooterSection />
        </>
    );
}