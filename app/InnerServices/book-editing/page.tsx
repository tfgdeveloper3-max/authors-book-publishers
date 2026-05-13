"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const relatedServices = [
    { label: "Book Proofreading", slug: "book-proofreading" },
    { label: "Book Formatting", slug: "book-formatting" },
    { label: "Book Publishing", slug: "book-publishing" },
    { label: "Book Writing", slug: "book-writing" },
    { label: "Children's Book Editing", slug: "childrens-book-editing" },
    { label: "Ghostwriting", slug: "ghostwriting" },
];

const categories = [
    { icon: "✦", label: "Developmental Editing" },
    { icon: "✦", label: "Line Editing" },
    { icon: "✦", label: "Copy Editing" },
    { icon: "✦", label: "Structural Editing" },
    { icon: "✦", label: "Content Editing" },
    { icon: "✦", label: "Fiction Editing" },
    { icon: "✦", label: "Non-Fiction Editing" },
    { icon: "✦", label: "Memoir Editing" },
    { icon: "✦", label: "Children's Book Editing" },
    { icon: "✦", label: "Academic Editing" },
    { icon: "✦", label: "Business Book Editing" },
    { icon: "✦", label: "Self-Help Editing" },
];

const features = [
    { num: "01", title: "Developmental Editing", desc: "The deepest level of editing — addressing structure, plot, pacing, character arcs, themes, and overall narrative logic. We identify what is working, what is not, and how to fix it." },
    { num: "02", title: "Line Editing", desc: "A sentence-level craft pass that strengthens prose style, improves clarity and flow, eliminates redundancy, and ensures every paragraph sings with intention and precision." },
    { num: "03", title: "Copy Editing", desc: "A thorough review of grammar, syntax, consistency, and factual accuracy — ensuring the manuscript is clean, correct, and consistent from first page to last." },
    { num: "04", title: "Detailed Edit Letter", desc: "Every project includes a comprehensive editorial letter — a written analysis of the manuscript's strengths, weaknesses, and specific recommendations, giving you a clear roadmap for revision." },
    { num: "05", title: "Author Voice Preservation", desc: "Our editors enhance your voice, they never replace it. Every intervention is designed to make your manuscript more fully itself — not to impose an editorial aesthetic on top of yours." },
    { num: "06", title: "Genre-Specific Expertise", desc: "Our editorial team includes specialists in literary fiction, commercial fiction, non-fiction, children's books, memoir, and more — matching your manuscript with an editor who knows your genre deeply." },
];

const steps = [
    { num: "01", title: "Manuscript Assessment", desc: "We read your full manuscript and identify which level of editing is most needed — providing a free assessment before any work begins." },
    { num: "02", title: "Editorial Brief", desc: "We discuss your goals, target audience, publication plans, and any specific areas of concern before the edit begins." },
    { num: "03", title: "Full Editorial Pass", desc: "Your editor conducts a thorough edit at the agreed level, with all changes tracked and marginal comments throughout." },
    { num: "04", title: "Edit Letter Delivery", desc: "A detailed editorial letter is delivered alongside the marked manuscript — outlining all major findings and recommended revisions." },
    { num: "05", title: "Query & Revision Support", desc: "We remain available to answer questions and discuss the edit as you work through revisions — ensuring the process is collaborative, not one-directional." },
];

const faqs = [
    { q: "Which level of editing does my manuscript need?", a: "It depends on its current state. A first draft typically needs developmental editing. A revised manuscript may need line editing. A near-final manuscript needs copy editing. We provide a free assessment to recommend the right level." },
    { q: "Will you change my writing style?", a: "Never. Our editors preserve and enhance your voice — not replace it. Every suggestion is designed to make your writing more effectively itself, not to impose a house style." },
    { q: "How long does editing take?", a: "Developmental editing of an 80,000-word manuscript typically takes 2–4 weeks. Line editing 1–3 weeks. Copy editing 1–2 weeks. We provide firm timelines before work begins." },
    { q: "Do you work with first-time authors?", a: "Yes — and we love working with debut authors. We provide additional guidance and explanation in our editorial letters to help first-time authors understand the craft principles behind every recommendation." },
    { q: "Can you edit a manuscript that has already been self-edited multiple times?", a: "Absolutely. Fresh professional eyes catch what repeated self-editing misses. Many of our most impactful edits are on manuscripts the author considered nearly finished." },
];

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="bked-page">

                {/* HERO */}
                <section className="bked-hero">
                    <div className="bked-hero-bg" />
                    <div className="bked-hero-grid">
                        <div className="bked-hero-inner">
                            <nav className="bked-breadcrumb">
                                <Link href="/" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Home</Link>
                                <span className="bked-bc-sep">›</span>
                                <Link href="/services" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Services</Link>
                                <span className="bked-bc-sep">›</span>
                                <span className="bked-bc-current">Book Editing</span>
                            </nav>
                            <div className="bked-hero-tag"><span className="bked-tag-dot" />Editing & Publishing</div>
                            <h1 className="bked-hero-title">Professional<br /><em className="bked-hero-em">Book Editing</em><br />Services</h1>
                            <p className="bked-hero-sub">From structural developmental editing to precise line editing — our professional book editors transform good manuscripts into great ones, elevating your story, strengthening your prose, and preparing your book for the highest level of publication.</p>
                            <div className="bked-hero-actions">
                                <button className="bked-btn-orange">Get A Free Quote</button>
                                <button className="bked-btn-outline">(646) 298 6438</button>
                            </div>
                            <div className="bked-trust-row">
                                <span className="bked-trust-pill">✓ All Editing Levels</span>
                                <span className="bked-trust-pill">✓ Detailed Edit Letter</span>
                                <span className="bked-trust-pill">✓ Track Changes</span>
                                <span className="bked-trust-pill">✓ Author Voice Preserved</span>
                            </div>
                        </div>
                        <div className="bked-hero-sidebar">
                            <div className="bked-sidebar-card"><span className="bked-sc-val">3</span><span className="bked-sc-label">Editing Levels</span></div>
                            <div className="bked-sidebar-card"><span className="bked-sc-val">10,000+</span><span className="bked-sc-label">Manuscripts Edited</span></div>
                            <div className="bked-sidebar-card"><span className="bked-sc-val">98%</span><span className="bked-sc-label">Client Satisfaction</span></div>
                            <div className="bked-sidebar-card"><span className="bked-sc-val">All</span><span className="bked-sc-label">Genres Covered</span></div>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="bked-intro">
                    <div className="bked-intro-inner">
                        <div className="bked-intro-text">
                            <span className="bked-eyebrow">What We Do</span>
                            <h2 className="bked-section-title">Great Books Are Not Written.<br /><span className="bked-hl">They Are Edited.</span></h2>
                            <p className="bked-body-text">Every celebrated author has an editor behind them. Editing is not a correction service — it is a creative collaboration that identifies what your manuscript is truly trying to be, removes everything standing in its way, and elevates every element until the work reaches its full potential. Our editors are published authors and industry professionals who bring both craft and commercial insight to every project.</p>
                            <p className="bked-body-text">We offer three levels of editing — developmental, line, and copy editing — each addressing a different dimension of your manuscript. Whether your book needs structural surgery or refined polishing, we match the right editorial approach to your specific needs.</p>
                            <button className="bked-btn-orange" style={{ marginTop: "8px" }}>Get A Free Editorial Assessment</button>
                        </div>
                        <div className="bked-intro-visual">
                            <div className="bked-visual-box">
                                <div className="bked-vb-accent" />
                                <div className="bked-vb-line" />
                                <div className="bked-vb-content">
                                    <span className="bked-vb-num">3 levels</span>
                                    <span className="bked-vb-label">Of editing offered</span>
                                </div>
                                <div className="bked-vb-divider" />
                                <div className="bked-vb-content">
                                    <span className="bked-vb-num">Detailed</span>
                                    <span className="bked-vb-label">Edit letter included</span>
                                </div>
                                <div className="bked-vb-divider" />
                                <div className="bked-vb-content">
                                    <span className="bked-vb-num">Track</span>
                                    <span className="bked-vb-label">Changes delivery</span>
                                </div>
                                <div className="bked-vb-divider" />
                                <div className="bked-vb-content">
                                    <span className="bked-vb-num">∞</span>
                                    <span className="bked-vb-label">Query rounds included</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section className="bked-features">
                    <div className="bked-features-inner">
                        <div className="bked-section-head">
                            <span className="bked-eyebrow">Why Choose Us</span>
                            <h2 className="bked-section-title">The Belmont <span className="bked-hl">Difference</span></h2>
                        </div>
                        <div className="bked-features-grid">
                            {features.map((f) => (
                                <div key={f.num} className="bked-feature-card">
                                    <span className="bked-fc-num">{f.num}</span>
                                    <h3 className="bked-fc-title">{f.title}</h3>
                                    <p className="bked-fc-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CATEGORIES */}
                <section className="bked-cats">
                    <div className="bked-cats-inner">
                        <div className="bked-section-head bked-head-center">
                            <span className="bked-eyebrow">Editing Services We Offer</span>
                            <h2 className="bked-section-title">We Edit Across All <span className="bked-hl">Genres & Levels</span></h2>
                            <p className="bked-cats-sub">Our editorial team brings genre-specific expertise and deep craft knowledge to every manuscript.</p>
                        </div>
                        <div className="bked-cats-grid">
                            {categories.map((c) => (
                                <div key={c.label} className="bked-cat-pill">
                                    <span className="bked-cp-icon">{c.icon}</span>{c.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="bked-process">
                    <div className="bked-process-inner">
                        <div className="bked-section-head bked-head-center">
                            <span className="bked-eyebrow">How It Works</span>
                            <h2 className="bked-section-title">Our <span className="bked-hl">Editorial Process</span></h2>
                        </div>
                        <div className="bked-steps">
                            {steps.map((s, i) => (
                                <div key={s.num} className="bked-step-row">
                                    <div className="bked-step-left">
                                        <div className="bked-step-node"><span className="bked-step-num">{s.num}</span></div>
                                        {i < steps.length - 1 && <div className="bked-step-vline" />}
                                    </div>
                                    <div className="bked-step-body">
                                        <h3 className="bked-step-title">{s.title}</h3>
                                        <p className="bked-step-desc">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="bked-faq">
                    <div className="bked-faq-inner">
                        <div className="bked-faq-left">
                            <span className="bked-eyebrow">FAQ</span>
                            <h2 className="bked-section-title">Common <span className="bked-hl">Questions</span></h2>
                            <p className="bked-body-text" style={{ marginTop: "16px" }}>Still have questions? Our team is available 24/7 for a free consultation.</p>
                            <button className="bked-btn-orange" style={{ marginTop: "24px" }}>Talk To An Expert</button>
                        </div>
                        <div className="bked-faq-right">
                            {faqs.map((item, i) => (
                                <details key={i} className="bked-faq-item">
                                    <summary className="bked-faq-q">{item.q}<span className="bked-faq-icon">+</span></summary>
                                    <p className="bked-faq-a">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED */}
                <section className="bked-related">
                    <div className="bked-related-inner">
                        <span className="bked-eyebrow">Explore More</span>
                        <h2 className="bked-section-title" style={{ marginBottom: "32px" }}>Related <span className="bked-hl">Services</span></h2>
                        <div className="bked-related-grid">
                            {relatedServices.map((rs) => (
                                <Link key={rs.slug} href={`/InnerServices/${rs.slug}`}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "#fafafa", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "8px", textDecoration: "none", transition: "all 0.25s" }}
                                    onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "#f57c15"; el.style.background = "rgba(245,124,21,0.03)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 6px 18px rgba(245,124,21,0.08)"; const a = el.querySelector(".bked-rca") as HTMLElement; if (a) { a.style.opacity = "1"; a.style.transform = "translate(0,0)"; } }}
                                    onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "rgba(0,0,0,0.07)"; el.style.background = "#fafafa"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; const a = el.querySelector(".bked-rca") as HTMLElement; if (a) { a.style.opacity = "0"; a.style.transform = "translate(-4px,4px)"; } }}
                                >
                                    <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: "13px", fontWeight: 700, color: "#222" }}>{rs.label}</span>
                                    <span className="bked-rca" style={{ fontSize: "16px", color: "#f57c15", opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.25s", display: "inline-block" }}>↗</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bked-cta">
                    <div className="bked-cta-inner">
                        <span className="bked-eyebrow" style={{ color: "rgba(245,124,21,0.8)" }}>Get Started Today</span>
                        <h2 className="bked-cta-title">Ready To Elevate Your<br /><span className="bked-hl">Manuscript?</span></h2>
                        <p className="bked-cta-sub">Request a free editorial assessment. We will read your first chapter and tell you exactly what your manuscript needs.</p>
                        <div className="bked-cta-btns">
                            <button className="bked-btn-orange bked-btn-lg">Get A Free Quote</button>
                            <button className="bked-btn-outline bked-btn-lg">(646) 298 6438</button>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                .bked-page{font-family:'Raleway',sans-serif;color:#111;background:#fff;}
                .bked-eyebrow{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#f57c15;margin-bottom:14px;}
                .bked-section-title{font-family:'Oswald',sans-serif;font-size:clamp(1.9rem,3.5vw,2.8rem);color:#111;text-transform:uppercase;line-height:1.1;margin:0 0 20px 0;letter-spacing:-0.3px;}
                .bked-hl{color:#f57c15;}
                .bked-body-text{font-size:14px;color:#555;line-height:1.75;margin:0 0 16px 0;}
                .bked-section-head{margin-bottom:52px;}
                .bked-head-center{text-align:center;}
                .bked-btn-orange{display:inline-flex;align-items:center;gap:8px;background:#f57c15;color:#fff;border:none;padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background 0.25s,transform 0.2s,box-shadow 0.25s;box-shadow:0 5px 18px rgba(245,124,21,0.28);}
                .bked-btn-orange:hover{background:#d96c0d;transform:translateY(-2px);box-shadow:0 8px 24px rgba(245,124,21,0.35);}
                .bked-btn-outline{display:inline-flex;align-items:center;background:transparent;color:#333;border:1.5px solid rgba(0,0,0,0.18);padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:border-color 0.25s,color 0.25s;}
                .bked-btn-outline:hover{border-color:#f57c15;color:#f57c15;}
                .bked-btn-lg{padding:15px 36px;font-size:12.5px;}
                .bked-hero{background:#060606;padding:60px 24px 80px;position:relative;overflow:hidden;width:100%;}
                .bked-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 55% 50% at 30% 50%,rgba(245,124,21,0.07) 0%,transparent 65%),radial-gradient(ellipse 40% 60% at 80% 20%,rgba(245,124,21,0.04) 0%,transparent 60%);pointer-events:none;}
                .bked-hero-grid{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:1fr 260px;gap:40px;align-items:start;position:relative;z-index:2;}
                .bked-hero-inner{padding-top:10px;}
                .bked-breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:28px;}
                .bked-bc-sep{color:rgba(255,255,255,0.2);font-size:11px;}
                .bked-bc-current{font-size:11px;font-weight:700;color:#f57c15;letter-spacing:0.5px;}
                .bked-hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(245,124,21,0.08);border:1px solid rgba(245,124,21,0.2);border-radius:30px;padding:6px 16px;font-size:10.5px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:#f57c15;margin-bottom:28px;}
                .bked-tag-dot{width:5px;height:5px;border-radius:50%;background:#f57c15;flex-shrink:0;}
                .bked-hero-title{font-family:'Oswald',sans-serif;font-size:clamp(2.8rem,6vw,5.2rem);color:#fff;line-height:0.95;text-transform:uppercase;letter-spacing:-1px;margin:0 0 24px 0;}
                .bked-hero-em{color:#f57c15;font-style:italic;}
                .bked-hero-sub{font-size:14.5px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:520px;margin:0 0 36px 0;font-weight:400;}
                .bked-hero-actions{display:flex;flex-wrap:nowrap;gap:12px;margin-bottom:32px;align-items:center;}
                .bked-hero-actions .bked-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .bked-hero-actions .bked-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                .bked-trust-row{display:flex;flex-wrap:wrap;gap:8px;}
                .bked-trust-pill{font-size:11px;font-weight:700;color:rgba(255,255,255,0.45);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:6px 12px;letter-spacing:0.3px;}
                .bked-hero-sidebar{display:flex;flex-direction:column;gap:3px;padding-top:64px;}
                .bked-sidebar-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px 18px;display:flex;flex-direction:column;gap:4px;transition:border-color 0.3s;}
                .bked-sidebar-card:hover{border-color:rgba(245,124,21,0.25);}
                .bked-sc-val{font-family:'Oswald',sans-serif;font-size:28px;font-weight:700;color:#f57c15;line-height:1;}
                .bked-sc-label{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}


                /* ══ INTRO VISUAL BOX ══ */
                .bked-intro { background: #fff; padding: 90px 24px; border-bottom: 1px solid rgba(0,0,0,0.06); }
                .bked-intro-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 340px; gap: 70px;              align-items: center; }
                .bked-intro-visual { display: flex; flex-direction: column; }
                .bked-visual-box { background: #060606; border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 32px                28px; position: relative; overflow: hidden; }
                .bked-vb-accent { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #f57c15,               rgba(245,124,21,0.3)); }
                .bked-vb-line { position: absolute; top: 0; left: 28px; width: 1px; bottom: 0; background: rgba(245,124,21,0.08); }
                .bked-vb-content { display: flex; flex-direction: column; gap: 4px; padding: 16px 0 16px 20px; position: relative; }
                .bked-vb-num { font-family: 'Oswald', sans-serif; font-size: 32px; font-weight: 700; color: #f57c15; line-height: 1; }
                .bked-vb-label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,              255,0.3); }
                .bked-vb-divider { height: 1px; background: rgba(255,255,255,0.05); margin-left: 20px; }


                .bked-features{background:#f9f8f7;padding:90px 24px;}
                .bked-features-inner{max-width:1200px;margin:0 auto;}
                .bked-features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
                .bked-feature-card{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;padding:32px 28px;transition:border-color 0.3s,box-shadow 0.3s,transform 0.3s;}
                .bked-feature-card:hover{border-color:rgba(245,124,21,0.25);box-shadow:0 10px 30px rgba(245,124,21,0.07);transform:translateY(-3px);}
                .bked-fc-num{display:block;font-family:'Oswald',sans-serif;font-size:36px;font-weight:700;color:rgba(245,124,21,0.12);line-height:1;margin-bottom:-6px;user-select:none;}
                .bked-fc-title{font-family:'Oswald',sans-serif;font-size:16px;font-weight:600;color:#111;text-transform:uppercase;letter-spacing:0.3px;margin:0 0 12px 0;}
                .bked-fc-desc{font-size:13px;color:#666;line-height:1.7;margin:0;}
                .bked-cats{background:#060606;padding:90px 24px;}
                .bked-cats-inner{max-width:1100px;margin:0 auto;}
                .bked-cats .bked-section-title{color:#fff;}
                .bked-cats-sub{font-size:13.5px;color:rgba(255,255,255,0.35);margin:0;}
                .bked-cats-grid{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;}
                .bked-cat-pill{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:6px;font-size:12.5px;font-weight:600;color:rgba(255,255,255,0.65);transition:all 0.25s;cursor:default;}
                .bked-cat-pill:hover{background:rgba(245,124,21,0.1);border-color:rgba(245,124,21,0.3);color:#f57c15;}
                .bked-cp-icon{color:#f57c15;font-size:8px;}
                .bked-process{background:#fff;padding:90px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .bked-process-inner{max-width:900px;margin:0 auto;}
                .bked-steps{display:flex;flex-direction:column;}
                .bked-step-row{display:flex;gap:24px;align-items:stretch;}
                .bked-step-row:hover .bked-step-node{background:#f57c15;}
                .bked-step-row:hover .bked-step-num{color:#fff;}
                .bked-step-left{display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:52px;}
                .bked-step-node{width:52px;height:52px;border-radius:50%;background:#fff;border:2px solid #f57c15;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background 0.3s;}
                .bked-step-num{font-family:'Oswald',sans-serif;font-size:14px;font-weight:700;color:#f57c15;transition:color 0.3s;}
                .bked-step-vline{width:2px;flex:1;background:rgba(245,124,21,0.15);min-height:24px;}
                .bked-step-body{padding:10px 0 36px;flex:1;}
                .bked-step-title{font-family:'Oswald',sans-serif;font-size:17px;font-weight:600;color:#111;text-transform:uppercase;margin:0 0 8px 0;}
                .bked-step-desc{font-size:13.5px;color:#666;line-height:1.65;margin:0;}
                .bked-faq{background:#f9f8f7;padding:90px 24px;}
                .bked-faq-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:320px 1fr;gap:70px;align-items:start;}
                .bked-faq-item{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;margin-bottom:6px;overflow:hidden;transition:border-color 0.25s;}
                .bked-faq-item[open]{border-color:rgba(245,124,21,0.25);}
                .bked-faq-q{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 20px;font-family:'Raleway',sans-serif;font-size:13.5px;font-weight:700;color:#111;cursor:pointer;list-style:none;user-select:none;}
                .bked-faq-q::-webkit-details-marker{display:none;}
                .bked-faq-icon{font-size:20px;font-weight:300;color:#f57c15;flex-shrink:0;line-height:1;transition:transform 0.25s;}
                .bked-faq-item[open] .bked-faq-icon{transform:rotate(45deg);}
                .bked-faq-a{padding:14px 20px 18px;font-size:13px;color:#666;line-height:1.7;margin:0;border-top:1px solid rgba(0,0,0,0.04);}
                .bked-related{background:#fff;padding:70px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .bked-related-inner{max-width:1200px;margin:0 auto;}
                .bked-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
                .bked-cta{background:#060606;padding:110px 24px;text-align:center;position:relative;overflow:hidden;}
                .bked-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(245,124,21,0.07) 0%,transparent 70%);pointer-events:none;}
                .bked-cta-inner{position:relative;z-index:2;}
                .bked-cta-title{font-family:'Oswald',sans-serif;font-size:clamp(2.5rem,5vw,4.2rem);color:#fff;text-transform:uppercase;line-height:1.05;margin:8px 0 20px 0;letter-spacing:-0.5px;}
                .bked-cta-sub{font-size:14.5px;color:rgba(255,255,255,0.38);max-width:460px;margin:0 auto 36px;line-height:1.7;}
                .bked-cta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:nowrap;align-items:center;}
                .bked-cta .bked-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .bked-cta .bked-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                @media (max-width:1024px){
                    .bked-hero-grid{grid-template-columns:1fr;}
                    .bked-hero-sidebar{padding-top:0;display:grid;grid-template-columns:repeat(4,1fr);}
                    .bked-intro-inner{grid-template-columns:1fr;gap:40px;}
                    .bked-faq-inner{grid-template-columns:1fr;gap:40px;}
                }
                @media (max-width:768px){
                    .bked-features-grid{grid-template-columns:1fr;}
                    .bked-related-grid{grid-template-columns:repeat(2,1fr);}
                    .bked-hero-sidebar{grid-template-columns:repeat(2,1fr);}
                }
                @media (max-width:520px){
                    .bked-related-grid{grid-template-columns:1fr;}
                    .bked-cta-btns{flex-wrap:wrap;}
                }
            `}</style>
            </main>
            <FooterSection />
        </>
    );
}