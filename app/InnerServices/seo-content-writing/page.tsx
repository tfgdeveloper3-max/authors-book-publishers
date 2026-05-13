"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const relatedServices = [
    { label: "Book Writing", slug: "book-writing" },
    { label: "Non-Fiction Writing", slug: "non-fiction-writing" },
    { label: "Author Website Design", slug: "author-website-design" },
    { label: "Book Marketing", slug: "book-marketing" },
    { label: "Book Editing", slug: "book-editing" },
    { label: "Script Writing", slug: "script-writing" },
];

const categories = [
    { icon: "✦", label: "Blog Posts & Articles" },
    { icon: "✦", label: "Pillar Pages & Topic Clusters" },
    { icon: "✦", label: "Product Descriptions" },
    { icon: "✦", label: "Landing Pages" },
    { icon: "✦", label: "Service Pages" },
    { icon: "✦", label: "Category Pages" },
    { icon: "✦", label: "Press Releases" },
    { icon: "✦", label: "Email Newsletter Copy" },
    { icon: "✦", label: "Social Media Content" },
    { icon: "✦", label: "Case Studies" },
    { icon: "✦", label: "White Papers" },
    { icon: "✦", label: "FAQ & Knowledge Base" },
];

const features = [
    { num: "01", title: "Keyword Research & Strategy", desc: "We identify high-value, achievable keywords based on search volume, competition, and commercial intent — building a content strategy designed to rank and convert." },
    { num: "02", title: "Search Intent Matching", desc: "Every piece is written to satisfy the specific search intent behind the target keyword — informational, navigational, commercial, or transactional." },
    { num: "03", title: "E-E-A-T Optimised", desc: "Our content demonstrates Google's Experience, Expertise, Authoritativeness, and Trustworthiness signals — the framework behind modern search ranking." },
    { num: "04", title: "Conversion-Focused Copy", desc: "Rankings mean nothing without action. We weave compelling calls-to-action and persuasive structure into every piece." },
    { num: "05", title: "On-Page SEO Built In", desc: "Every deliverable includes optimised title tags, meta descriptions, header hierarchy, internal linking suggestions, and image alt text recommendations." },
    { num: "06", title: "Plagiarism-Free Guarantee", desc: "Every piece passes rigorous originality checks. You receive unique, brand-safe copy with a plagiarism-free certificate on request." },
];

const steps = [
    { num: "01", title: "Discovery & Audit", desc: "We review your existing content, competitors, target audience, and business goals to build a focused content strategy." },
    { num: "02", title: "Keyword & Topic Research", desc: "High-value keywords and topic clusters are identified based on search volume, intent, and competitive opportunity." },
    { num: "03", title: "Content Brief Creation", desc: "A detailed brief is built for every piece — covering target keyword, structure, word count, competitor gaps, and CTA goals." },
    { num: "04", title: "Writing & Optimisation", desc: "Expert SEO writers craft the content with all on-page optimisation elements built in from the first draft." },
    { num: "05", title: "Delivery & Reporting", desc: "Finished content is delivered with SEO metadata, performance projections, and optional monthly ranking reports." },
];

const faqs = [
    { q: "How long does SEO content take to rank?", a: "Most well-optimised content begins ranking within 3–6 months. Competitive keywords may take longer, while low-competition terms can rank in weeks." },
    { q: "Do you do keyword research, or do I provide keywords?", a: "Both options are available. We can conduct full keyword research or work from your existing strategy. We recommend a full audit for the best results." },
    { q: "How is your content different from AI-generated content?", a: "Our content is written by human SEO experts who understand search intent, brand voice, and persuasion. Human-written content consistently outperforms AI in rankings, engagement, and conversion." },
    { q: "Can you write for a specific industry or niche?", a: "Yes. We have specialist writers across healthcare, finance, legal, technology, e-commerce, and real estate — ensuring accurate, authoritative content in regulated industries." },
    { q: "Do you provide content calendars and strategy?", a: "Yes. We offer full content strategy services including editorial calendars, topic cluster mapping, content gap analysis, and monthly performance reviews." },
];

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="seo-page">

                {/* HERO */}
                <section className="seo-hero">
                    <div className="seo-hero-bg" />
                    <div className="seo-hero-grid">
                        <div className="seo-hero-inner">
                            <nav className="seo-breadcrumb">
                                <Link href="/" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Home</Link>
                                <span className="seo-bc-sep">›</span>
                                <Link href="/services" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Services</Link>
                                <span className="seo-bc-sep">›</span>
                                <span className="seo-bc-current">SEO Content Writing</span>
                            </nav>
                            <div className="seo-hero-tag"><span className="seo-tag-dot" />Writing Services</div>
                            <h1 className="seo-hero-title">Professional<br /><em className="seo-hero-em">SEO Content Writing</em><br />Services</h1>
                            <p className="seo-hero-sub">Content that ranks on page one and converts readers into customers. Our SEO writers combine search engine expertise with compelling storytelling to deliver content that Google loves and audiences trust.</p>
                            <div className="seo-hero-actions">
                                <button className="seo-btn-orange">Get A Free Quote</button>
                                <button className="seo-btn-outline">(646) 298 6438</button>
                            </div>
                            <div className="seo-trust-row">
                                <span className="seo-trust-pill">✓ 100% Confidential</span>
                                <span className="seo-trust-pill">✓ Full Copyright Yours</span>
                                <span className="seo-trust-pill">✓ Unlimited Revisions</span>
                                <span className="seo-trust-pill">✓ NDA Signed</span>
                            </div>
                        </div>
                        <div className="seo-hero-sidebar">
                            <div className="seo-sidebar-card"><span className="seo-sc-val">5,000+</span><span className="seo-sc-label">Projects Delivered</span></div>
                            <div className="seo-sidebar-card"><span className="seo-sc-val">400+</span><span className="seo-sc-label">Publishing Platforms</span></div>
                            <div className="seo-sidebar-card"><span className="seo-sc-val">98%</span><span className="seo-sc-label">Client Satisfaction</span></div>
                            <div className="seo-sidebar-card"><span className="seo-sc-val">15+</span><span className="seo-sc-label">Years Experience</span></div>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="seo-intro">
                    <div className="seo-intro-inner">
                        <div className="seo-intro-text">
                            <span className="seo-eyebrow">What We Do</span>
                            <h2 className="seo-section-title">Content That Ranks,<br /><span className="seo-hl">Converts & Builds Authority</span></h2>
                            <p className="seo-body-text">Most SEO content fails at one of two things: it ranks but does not convert, or it reads beautifully but never gets found. Our SEO content writers solve both problems — creating content that satisfies Google's ranking algorithm and delivers genuine value to human readers simultaneously.</p>
                            <p className="seo-body-text">From long-form pillar content and blog series to product descriptions and landing pages, every piece we write is strategically researched, expertly structured, and optimized for the keywords and search intent that drive real business results.</p>
                            <button className="seo-btn-orange" style={{ marginTop: "8px" }}>Get A Content Strategy</button>
                        </div>
                        <div className="cb-intro-visual">
                            <div className="cb-visual-box">
                                <div className="cb-vb-accent" />
                                <div className="cb-vb-line" />
                                <div className="cb-vb-content">
                                    <span className="cb-vb-num">500–50K</span>
                                    <span className="cb-vb-label">Words by age group</span>
                                </div>
                                <div className="cb-vb-divider" />
                                <div className="cb-vb-content">
                                    <span className="cb-vb-num">4–10</span>
                                    <span className="cb-vb-label">Weeks to completion</span>
                                </div>
                                <div className="cb-vb-divider" />
                                <div className="cb-vb-content">
                                    <span className="cb-vb-num">6</span>
                                    <span className="cb-vb-label">Age groups covered</span>
                                </div>
                                <div className="cb-vb-divider" />
                                <div className="cb-vb-content">
                                    <span className="cb-vb-num">∞</span>
                                    <span className="cb-vb-label">Revisions included</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section className="seo-features">
                    <div className="seo-features-inner">
                        <div className="seo-section-head">
                            <span className="seo-eyebrow">Why Choose Us</span>
                            <h2 className="seo-section-title">The Belmont <span className="seo-hl">Difference</span></h2>
                        </div>
                        <div className="seo-features-grid">
                            {features.map((f) => (
                                <div key={f.num} className="seo-feature-card">
                                    <span className="seo-fc-num">{f.num}</span>
                                    <h3 className="seo-fc-title">{f.title}</h3>
                                    <p className="seo-fc-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CATEGORIES */}
                <section className="seo-cats">
                    <div className="seo-cats-inner">
                        <div className="seo-section-head seo-head-center">
                            <span className="seo-eyebrow">Content Types We Write</span>
                            <h2 className="seo-section-title">SEO Content For <span className="seo-hl">Every Format</span></h2>
                            <p className="seo-cats-sub">From blog posts to white papers — every content format optimised for search and conversion.</p>
                        </div>
                        <div className="seo-cats-grid">
                            {categories.map((c) => (
                                <div key={c.label} className="seo-cat-pill">
                                    <span className="seo-cp-icon">{c.icon}</span>{c.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="seo-process">
                    <div className="seo-process-inner">
                        <div className="seo-section-head seo-head-center">
                            <span className="seo-eyebrow">How It Works</span>
                            <h2 className="seo-section-title">Our <span className="seo-hl">Writing Process</span></h2>
                        </div>
                        <div className="seo-steps">
                            {steps.map((s, i) => (
                                <div key={s.num} className="seo-step-row">
                                    <div className="seo-step-left">
                                        <div className="seo-step-node"><span className="seo-step-num">{s.num}</span></div>
                                        {i < steps.length - 1 && <div className="seo-step-vline" />}
                                    </div>
                                    <div className="seo-step-body">
                                        <h3 className="seo-step-title">{s.title}</h3>
                                        <p className="seo-step-desc">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="seo-faq">
                    <div className="seo-faq-inner">
                        <div className="seo-faq-left">
                            <span className="seo-eyebrow">FAQ</span>
                            <h2 className="seo-section-title">Common <span className="seo-hl">Questions</span></h2>
                            <p className="seo-body-text" style={{ marginTop: "16px" }}>Still have questions? Our team is available 24/7 for a free consultation.</p>
                            <button className="seo-btn-orange" style={{ marginTop: "24px" }}>Talk To An Expert</button>
                        </div>
                        <div className="seo-faq-right">
                            {faqs.map((item, i) => (
                                <details key={i} className="seo-faq-item">
                                    <summary className="seo-faq-q">{item.q}<span className="seo-faq-icon">+</span></summary>
                                    <p className="seo-faq-a">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED */}
                <section className="seo-related">
                    <div className="seo-related-inner">
                        <span className="seo-eyebrow">Explore More</span>
                        <h2 className="seo-section-title" style={{ marginBottom: "32px" }}>Related <span className="seo-hl">Services</span></h2>
                        <div className="seo-related-grid">
                            {relatedServices.map((rs) => (
                                <Link key={rs.slug} href={`/InnerServices/${rs.slug}`}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "#fafafa", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "8px", textDecoration: "none", transition: "all 0.25s" }}
                                    onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "#f57c15"; el.style.background = "rgba(245,124,21,0.03)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 6px 18px rgba(245,124,21,0.08)"; const a = el.querySelector(".seo-rca") as HTMLElement; if (a) { a.style.opacity = "1"; a.style.transform = "translate(0,0)"; } }}
                                    onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "rgba(0,0,0,0.07)"; el.style.background = "#fafafa"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; const a = el.querySelector(".seo-rca") as HTMLElement; if (a) { a.style.opacity = "0"; a.style.transform = "translate(-4px,4px)"; } }}
                                >
                                    <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: "13px", fontWeight: 700, color: "#222" }}>{rs.label}</span>
                                    <span className="seo-rca" style={{ fontSize: "16px", color: "#f57c15", opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.25s", display: "inline-block" }}>↗</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="seo-cta">
                    <div className="seo-cta-inner">
                        <span className="seo-eyebrow" style={{ color: "rgba(245,124,21,0.8)" }}>Get Started Today</span>
                        <h2 className="seo-cta-title">Ready To Rank On<br /><span className="seo-hl">Page One?</span></h2>
                        <p className="seo-cta-sub">Get a free SEO content audit and strategy consultation. We will show you exactly what it takes to rank, convert, and dominate your niche.</p>
                        <div className="seo-cta-btns">
                            <button className="seo-btn-orange seo-btn-lg">Get A Free Quote</button>
                            <button className="seo-btn-outline seo-btn-lg">(646) 298 6438</button>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                .seo-page{font-family:'Raleway',sans-serif;color:#111;background:#fff;}
                .seo-eyebrow{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#f57c15;margin-bottom:14px;}
                .seo-section-title{font-family:'Oswald',sans-serif;font-size:clamp(1.9rem,3.5vw,2.8rem);color:#111;text-transform:uppercase;line-height:1.1;margin:0 0 20px 0;letter-spacing:-0.3px;}
                .seo-hl{color:#f57c15;}
                .seo-body-text{font-size:14px;color:#555;line-height:1.75;margin:0 0 16px 0;}
                .seo-section-head{margin-bottom:52px;}
                .seo-head-center{text-align:center;}
                .seo-btn-orange{display:inline-flex;align-items:center;gap:8px;background:#f57c15;color:#fff;border:none;padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background 0.25s,transform 0.2s,box-shadow 0.25s;box-shadow:0 5px 18px rgba(245,124,21,0.28);}
                .seo-btn-orange:hover{background:#d96c0d;transform:translateY(-2px);box-shadow:0 8px 24px rgba(245,124,21,0.35);}
                .seo-btn-outline{display:inline-flex;align-items:center;background:transparent;color:#333;border:1.5px solid rgba(0,0,0,0.18);padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:border-color 0.25s,color 0.25s;}
                .seo-btn-outline:hover{border-color:#f57c15;color:#f57c15;}
                .seo-btn-lg{padding:15px 36px;font-size:12.5px;}
                .seo-hero{background:#060606;padding:60px 24px 80px;position:relative;overflow:hidden;width:100%;}
                .seo-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 55% 50% at 30% 50%,rgba(245,124,21,0.07) 0%,transparent 65%),radial-gradient(ellipse 40% 60% at 80% 20%,rgba(245,124,21,0.04) 0%,transparent 60%);pointer-events:none;}
                .seo-hero-grid{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:1fr 260px;gap:40px;align-items:start;position:relative;z-index:2;}
                .seo-hero-inner{padding-top:10px;}
                .seo-breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:28px;}
                .seo-bc-sep{color:rgba(255,255,255,0.2);font-size:11px;}
                .seo-bc-current{font-size:11px;font-weight:700;color:#f57c15;letter-spacing:0.5px;}
                .seo-hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(245,124,21,0.08);border:1px solid rgba(245,124,21,0.2);border-radius:30px;padding:6px 16px;font-size:10.5px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:#f57c15;margin-bottom:28px;}
                .seo-tag-dot{width:5px;height:5px;border-radius:50%;background:#f57c15;flex-shrink:0;}
                .seo-hero-title{font-family:'Oswald',sans-serif;font-size:clamp(2.8rem,6vw,5.2rem);color:#fff;line-height:0.95;text-transform:uppercase;letter-spacing:-1px;margin:0 0 24px 0;}
                .seo-hero-em{color:#f57c15;font-style:italic;}
                .seo-hero-sub{font-size:14.5px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:520px;margin:0 0 36px 0;font-weight:400;}
                .seo-hero-actions{display:flex;flex-wrap:nowrap;gap:12px;margin-bottom:32px;align-items:center;}
                .seo-hero-actions .seo-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .seo-hero-actions .seo-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                .seo-trust-row{display:flex;flex-wrap:wrap;gap:8px;}
                .seo-trust-pill{font-size:11px;font-weight:700;color:rgba(255,255,255,0.45);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:6px 12px;letter-spacing:0.3px;}
                .seo-hero-sidebar{display:flex;flex-direction:column;gap:3px;padding-top:64px;}
                .seo-sidebar-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px 18px;display:flex;flex-direction:column;gap:4px;transition:border-color 0.3s;}
                .seo-sidebar-card:hover{border-color:rgba(245,124,21,0.25);}
                .seo-sc-val{font-family:'Oswald',sans-serif;font-size:28px;font-weight:700;color:#f57c15;line-height:1;}
                .seo-sc-label{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}
                .seo-intro{background:#fff;padding:90px 24px;border-bottom:1px solid rgba(0,0,0,0.06);}
                .seo-intro-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 340px;gap:70px;align-items:center;}
                .seo-visual-box{background:#060606;border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:32px 28px;position:relative;overflow:hidden;}
                .seo-vb-accent{position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#f57c15,rgba(245,124,21,0.3));}
                .seo-vb-line{position:absolute;top:0;left:28px;width:1px;bottom:0;background:rgba(245,124,21,0.08);}
                .seo-vb-content{display:flex;flex-direction:column;gap:4px;padding:16px 0 16px 20px;}
                .seo-vb-num{font-family:'Oswald',sans-serif;font-size:32px;font-weight:700;color:#f57c15;line-height:1;}
                .seo-vb-label{font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}
                .seo-vb-divider{height:1px;background:rgba(255,255,255,0.05);}
                .seo-features{background:#f9f8f7;padding:90px 24px;}
                .seo-features-inner{max-width:1200px;margin:0 auto;}
                .seo-features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
                .seo-feature-card{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;padding:32px 28px;transition:border-color 0.3s,box-shadow 0.3s,transform 0.3s;}
                .seo-feature-card:hover{border-color:rgba(245,124,21,0.25);box-shadow:0 10px 30px rgba(245,124,21,0.07);transform:translateY(-3px);}
                .seo-fc-num{display:block;font-family:'Oswald',sans-serif;font-size:36px;font-weight:700;color:rgba(245,124,21,0.12);line-height:1;margin-bottom:-6px;user-select:none;}
                .seo-fc-title{font-family:'Oswald',sans-serif;font-size:16px;font-weight:600;color:#111;text-transform:uppercase;letter-spacing:0.3px;margin:0 0 12px 0;}
                .seo-fc-desc{font-size:13px;color:#666;line-height:1.7;margin:0;}
                .seo-cats{background:#060606;padding:90px 24px;}
                .seo-cats-inner{max-width:1100px;margin:0 auto;}
                .seo-cats .seo-section-title{color:#fff;}
                .seo-cats-sub{font-size:13.5px;color:rgba(255,255,255,0.35);margin:0;}
                .seo-cats-grid{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;}
                .seo-cat-pill{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:6px;font-size:12.5px;font-weight:600;color:rgba(255,255,255,0.65);transition:all 0.25s;cursor:default;}
                .seo-cat-pill:hover{background:rgba(245,124,21,0.1);border-color:rgba(245,124,21,0.3);color:#f57c15;}
                .seo-cp-icon{color:#f57c15;font-size:8px;}
                .seo-process{background:#fff;padding:90px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .seo-process-inner{max-width:900px;margin:0 auto;}
                .seo-steps{display:flex;flex-direction:column;}
                .seo-step-row{display:flex;gap:24px;align-items:stretch;}
                .seo-step-row:hover .seo-step-node{background:#f57c15;}
                .seo-step-row:hover .seo-step-num{color:#fff;}
                .seo-step-left{display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:52px;}
                .seo-step-node{width:52px;height:52px;border-radius:50%;background:#fff;border:2px solid #f57c15;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background 0.3s;}
                .seo-step-num{font-family:'Oswald',sans-serif;font-size:14px;font-weight:700;color:#f57c15;transition:color 0.3s;}
                .seo-step-vline{width:2px;flex:1;background:rgba(245,124,21,0.15);min-height:24px;}
                .seo-step-body{padding:10px 0 36px;flex:1;}
                .seo-step-title{font-family:'Oswald',sans-serif;font-size:17px;font-weight:600;color:#111;text-transform:uppercase;margin:0 0 8px 0;}
                .seo-step-desc{font-size:13.5px;color:#666;line-height:1.65;margin:0;}
                .seo-faq{background:#f9f8f7;padding:90px 24px;}
                .seo-faq-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:320px 1fr;gap:70px;align-items:start;}
                .seo-faq-item{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;margin-bottom:6px;overflow:hidden;transition:border-color 0.25s;}
                .seo-faq-item[open]{border-color:rgba(245,124,21,0.25);}
                .seo-faq-q{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 20px;font-family:'Raleway',sans-serif;font-size:13.5px;font-weight:700;color:#111;cursor:pointer;list-style:none;user-select:none;}
                .seo-faq-q::-webkit-details-marker{display:none;}
                .seo-faq-icon{font-size:20px;font-weight:300;color:#f57c15;flex-shrink:0;line-height:1;transition:transform 0.25s;}
                .seo-faq-item[open] .seo-faq-icon{transform:rotate(45deg);}
                .seo-faq-a{padding:14px 20px 18px;font-size:13px;color:#666;line-height:1.7;margin:0;border-top:1px solid rgba(0,0,0,0.04);}
                .seo-related{background:#fff;padding:70px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .seo-related-inner{max-width:1200px;margin:0 auto;}
                .seo-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
                .seo-cta{background:#060606;padding:110px 24px;text-align:center;position:relative;overflow:hidden;}
                .seo-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(245,124,21,0.07) 0%,transparent 70%);pointer-events:none;}
                .seo-cta-inner{position:relative;z-index:2;}
                .seo-cta-title{font-family:'Oswald',sans-serif;font-size:clamp(2.5rem,5vw,4.2rem);color:#fff;text-transform:uppercase;line-height:1.05;margin:8px 0 20px 0;letter-spacing:-0.5px;}
                .seo-cta-sub{font-size:14.5px;color:rgba(255,255,255,0.38);max-width:460px;margin:0 auto 36px;line-height:1.7;}
                .seo-cta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:nowrap;align-items:center;}
                .seo-cta .seo-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .seo-cta .seo-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                @media (max-width:1024px){
                    .seo-hero-grid{grid-template-columns:1fr;}
                    .seo-hero-sidebar{padding-top:0;display:grid;grid-template-columns:repeat(4,1fr);}
                    .seo-intro-inner{grid-template-columns:1fr;gap:40px;}
                    .seo-faq-inner{grid-template-columns:1fr;gap:40px;}
                }
                @media (max-width:768px){
                    .seo-features-grid{grid-template-columns:1fr;}
                    .seo-related-grid{grid-template-columns:repeat(2,1fr);}
                    .seo-hero-sidebar{grid-template-columns:repeat(2,1fr);}
                }
                @media (max-width:520px){
                    .seo-related-grid{grid-template-columns:1fr;}
                    .seo-cta-btns{flex-wrap:wrap;}
                }

                .cb-intro { background: #fff; padding: 90px 24px; border-bottom: 1px solid rgba(0,0,0,0.06); }
                .cb-intro-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 340px; gap: 70px; align-items: center; }
                .cb-visual-box { background: #060606; border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 32px 28px; position: relative; overflow: hidden; }
                .cb-vb-accent { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #f57c15, rgba(245,124,21,0.3)); }
                .cb-vb-line { position: absolute; top: 0; left: 28px; width: 1px; bottom: 0; background: rgba(245,124,21,0.08); }
                .cb-vb-content { display: flex; flex-direction: column; gap: 4px; padding: 16px 0 16px 20px; }
                .cb-vb-num { font-family: 'Oswald', sans-serif; font-size: 32px; font-weight: 700; color: #f57c15; line-height: 1; }
                .cb-vb-label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.3); }
                .cb-vb-divider { height: 1px; background: rgba(255,255,255,0.05); }
            `}</style>
            </main>
            <FooterSection />
        </>
    );
}