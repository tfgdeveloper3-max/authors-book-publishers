"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const relatedServices = [
    { label: "Book Writing", slug: "book-writing" },
    { label: "Fiction Writing", slug: "fiction-writing" },
    { label: "Mystery Writing", slug: "mystery-writing" },
    { label: "Fantasy Writing", slug: "fantasy-writing" },
    { label: "Book Editing", slug: "book-editing" },
    { label: "Book Publishing", slug: "book-publishing" },
];

const categories = [
    { icon: "✦", label: "Psychological Horror" },
    { icon: "✦", label: "Supernatural Horror" },
    { icon: "✦", label: "Cosmic Horror" },
    { icon: "✦", label: "Haunted House" },
    { icon: "✦", label: "Body Horror" },
    { icon: "✦", label: "Creature Feature" },
    { icon: "✦", label: "Slasher & Splatter" },
    { icon: "✦", label: "Gothic Horror" },
    { icon: "✦", label: "Folk Horror" },
    { icon: "✦", label: "Quiet Horror" },
    { icon: "✦", label: "Extreme Horror" },
    { icon: "✦", label: "Horror Comedy" },
];

const features = [
    { num: "01", title: "Atmosphere & Dread", desc: "We build horror through atmosphere — the creeping sense that something is wrong before anything is shown. Our writers are masters of slow-burn dread and sustained unease." },
    { num: "02", title: "Psychological Depth", desc: "The scariest horror is rooted in psychology. We ground every story in authentic human fear, trauma, and vulnerability — making the supernatural feel personal." },
    { num: "03", title: "Pacing As A Weapon", desc: "Horror lives and dies in its pacing. We know exactly when to withhold, when to reveal, when to accelerate, and when to let silence do the work." },
    { num: "04", title: "Sub-Genre Mastery", desc: "From quiet literary horror to extreme body horror, cosmic dread to domestic psychological suspense — our writers are genuine specialists across every horror sub-genre." },
    { num: "05", title: "Full Copyright Ownership", desc: "Every character, creature, and world belongs entirely to you. Full IP transfer on delivery with no royalties or credits." },
    { num: "06", title: "Series & Universe Development", desc: "We build horror worlds with mythology, lore, and recurring elements designed to sustain series — from standalone novels to long-running franchises." },
];

const steps = [
    { num: "01", title: "Fear & Vision Session", desc: "We explore your horror concept, the kind of fear you want to create, your target audience, and the tone and sub-genre that best serves your story." },
    { num: "02", title: "Outline & Scare Architecture", desc: "A detailed chapter-by-chapter outline is built — mapping escalating dread, key horror set pieces, and the psychological throughline that makes the fear feel earned." },
    { num: "03", title: "Manuscript Drafting", desc: "The novel is written with obsessive attention to atmosphere, pacing, and the precise calibration of tension and release that great horror demands." },
    { num: "04", title: "Tone Review & Revision", desc: "We review for tonal consistency, escalation curve, and the effectiveness of every scare — revising until the fear is exactly right." },
    { num: "05", title: "Final Delivery", desc: "A polished, publish-ready horror novel delivered with full copyright — ready for agents, publishers, or self-publishing." },
];

const faqs = [
    { q: "What makes horror literary versus pulp?", a: "Literary horror uses fear to explore deeper themes — grief, identity, trauma, mortality. Pulp horror prioritizes visceral entertainment. Both are valid and we excel at both. The distinction is in your intent, not the quality of the writing." },
    { q: "Can you write extreme or graphic horror?", a: "Yes. We have writers who specialize in extreme horror, body horror, and splatter — as well as those who work in quieter, more literary registers. We match the writer to the project's intensity level." },
    { q: "How do you ensure the horror is actually frightening?", a: "Through rigorous pacing, psychological grounding, and the strategic use of the unknown. We beta-test scare sequences, review escalation arcs, and ensure every horror beat is earned by the setup preceding it." },
    { q: "Can you write horror with dark humour?", a: "Absolutely. Horror comedy is one of the most beloved sub-genres — from darkly comic to outright satirical. Our writers are skilled at finding exactly the right balance between fear and laughter." },
    { q: "Can you write a horror series or franchise bible?", a: "Yes. We develop series arcs, monster mythologies, recurring characters, and franchise bibles designed to sustain horror universes across multiple books, films, or media." },
];

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="horror-page">

                {/* HERO */}
                <section className="horror-hero">
                    <div className="horror-hero-bg" />
                    <div className="horror-hero-grid">
                        <div className="horror-hero-inner">
                            <nav className="horror-breadcrumb">
                                <Link href="/" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Home</Link>
                                <span className="horror-bc-sep">›</span>
                                <Link href="/services" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Services</Link>
                                <span className="horror-bc-sep">›</span>
                                <span className="horror-bc-current">Horror Writing</span>
                            </nav>
                            <div className="horror-hero-tag"><span className="horror-tag-dot" />Writing Services</div>
                            <h1 className="horror-hero-title">Professional<br /><em className="horror-hero-em">Horror Writing</em><br />Services</h1>
                            <p className="horror-hero-sub">From psychological dread to supernatural terror — our specialist horror writers craft stories that burrow under the skin, haunt the imagination, and deliver the visceral, unforgettable fear that the genre demands at its finest.</p>
                            <div className="horror-hero-actions">
                                <button className="horror-btn-orange">Get A Free Quote</button>
                                <button className="horror-btn-outline">(646) 298 6438</button>
                            </div>
                            <div className="horror-trust-row">
                                <span className="horror-trust-pill">✓ 100% Confidential</span>
                                <span className="horror-trust-pill">✓ Full Copyright Yours</span>
                                <span className="horror-trust-pill">✓ Unlimited Revisions</span>
                                <span className="horror-trust-pill">✓ NDA Signed</span>
                            </div>
                        </div>
                        <div className="horror-hero-sidebar">
                            <div className="horror-sidebar-card"><span className="horror-sc-val">5,000+</span><span className="horror-sc-label">Projects Delivered</span></div>
                            <div className="horror-sidebar-card"><span className="horror-sc-val">400+</span><span className="horror-sc-label">Publishing Platforms</span></div>
                            <div className="horror-sidebar-card"><span className="horror-sc-val">98%</span><span className="horror-sc-label">Client Satisfaction</span></div>
                            <div className="horror-sidebar-card"><span className="horror-sc-val">15+</span><span className="horror-sc-label">Years Experience</span></div>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="horror-intro">
                    <div className="horror-intro-inner">
                        <div className="horror-intro-text">
                            <span className="horror-eyebrow">What We Do</span>
                            <h2 className="horror-section-title">Great Horror Is Not About<br /><span className="horror-hl">Monsters. It Is About Dread.</span></h2>
                            <p className="horror-body-text">Horror is the most emotionally demanding of all fiction genres. To frighten a reader is easy. To genuinely unsettle them — to plant a fear that follows them out of the book and into their daily life — requires deep craft, psychological insight, and a precise understanding of what makes human beings afraid at the most primal level. Our horror writers possess all of this.</p>
                            <p className="horror-body-text">Whether your story is a slow-burn psychological thriller, a supernatural haunting, a creature feature of visceral intensity, or a quiet horror that never shows its monster — our specialists deliver manuscripts that rank alongside the genre's most celebrated works.</p>
                            <button className="horror-btn-orange" style={{ marginTop: "8px" }}>Start Your Horror Novel</button>
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
                <section className="horror-features">
                    <div className="horror-features-inner">
                        <div className="horror-section-head">
                            <span className="horror-eyebrow">Why Choose Us</span>
                            <h2 className="horror-section-title">The Belmont <span className="horror-hl">Difference</span></h2>
                        </div>
                        <div className="horror-features-grid">
                            {features.map((f) => (
                                <div key={f.num} className="horror-feature-card">
                                    <span className="horror-fc-num">{f.num}</span>
                                    <h3 className="horror-fc-title">{f.title}</h3>
                                    <p className="horror-fc-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CATEGORIES */}
                <section className="horror-cats">
                    <div className="horror-cats-inner">
                        <div className="horror-section-head horror-head-center">
                            <span className="horror-eyebrow">Sub-Genres We Write</span>
                            <h2 className="horror-section-title">We Write Across All <span className="horror-hl">Horror Sub-Genres</span></h2>
                            <p className="horror-cats-sub">Our horror writers are passionate genre specialists — readers as well as writers — who know the genre inside and out.</p>
                        </div>
                        <div className="horror-cats-grid">
                            {categories.map((c) => (
                                <div key={c.label} className="horror-cat-pill">
                                    <span className="horror-cp-icon">{c.icon}</span>{c.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="horror-process">
                    <div className="horror-process-inner">
                        <div className="horror-section-head horror-head-center">
                            <span className="horror-eyebrow">How It Works</span>
                            <h2 className="horror-section-title">Our <span className="horror-hl">Writing Process</span></h2>
                        </div>
                        <div className="horror-steps">
                            {steps.map((s, i) => (
                                <div key={s.num} className="horror-step-row">
                                    <div className="horror-step-left">
                                        <div className="horror-step-node"><span className="horror-step-num">{s.num}</span></div>
                                        {i < steps.length - 1 && <div className="horror-step-vline" />}
                                    </div>
                                    <div className="horror-step-body">
                                        <h3 className="horror-step-title">{s.title}</h3>
                                        <p className="horror-step-desc">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="horror-faq">
                    <div className="horror-faq-inner">
                        <div className="horror-faq-left">
                            <span className="horror-eyebrow">FAQ</span>
                            <h2 className="horror-section-title">Common <span className="horror-hl">Questions</span></h2>
                            <p className="horror-body-text" style={{ marginTop: "16px" }}>Still have questions? Our team is available 24/7 for a free consultation.</p>
                            <button className="horror-btn-orange" style={{ marginTop: "24px" }}>Talk To An Expert</button>
                        </div>
                        <div className="horror-faq-right">
                            {faqs.map((item, i) => (
                                <details key={i} className="horror-faq-item">
                                    <summary className="horror-faq-q">{item.q}<span className="horror-faq-icon">+</span></summary>
                                    <p className="horror-faq-a">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED */}
                <section className="horror-related">
                    <div className="horror-related-inner">
                        <span className="horror-eyebrow">Explore More</span>
                        <h2 className="horror-section-title" style={{ marginBottom: "32px" }}>Related <span className="horror-hl">Services</span></h2>
                        <div className="horror-related-grid">
                            {relatedServices.map((rs) => (
                                <Link key={rs.slug} href={`/InnerServices/${rs.slug}`}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "#fafafa", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "8px", textDecoration: "none", transition: "all 0.25s" }}
                                    onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "#f57c15"; el.style.background = "rgba(245,124,21,0.03)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 6px 18px rgba(245,124,21,0.08)"; const a = el.querySelector(".horror-rca") as HTMLElement; if (a) { a.style.opacity = "1"; a.style.transform = "translate(0,0)"; } }}
                                    onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "rgba(0,0,0,0.07)"; el.style.background = "#fafafa"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; const a = el.querySelector(".horror-rca") as HTMLElement; if (a) { a.style.opacity = "0"; a.style.transform = "translate(-4px,4px)"; } }}
                                >
                                    <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: "13px", fontWeight: 700, color: "#222" }}>{rs.label}</span>
                                    <span className="horror-rca" style={{ fontSize: "16px", color: "#f57c15", opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.25s", display: "inline-block" }}>↗</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="horror-cta">
                    <div className="horror-cta-inner">
                        <span className="horror-eyebrow" style={{ color: "rgba(245,124,21,0.8)" }}>Get Started Today</span>
                        <h2 className="horror-cta-title">Ready To Write Something<br /><span className="horror-hl">Truly Terrifying?</span></h2>
                        <p className="horror-cta-sub">Consult with our horror writing specialists. We build the kind of fear that follows readers home.</p>
                        <div className="horror-cta-btns">
                            <button className="horror-btn-orange horror-btn-lg">Get A Free Quote</button>
                            <button className="horror-btn-outline horror-btn-lg">(646) 298 6438</button>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                .horror-page{font-family:'Raleway',sans-serif;color:#111;background:#fff;}
                .horror-eyebrow{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#f57c15;margin-bottom:14px;}
                .horror-section-title{font-family:'Oswald',sans-serif;font-size:clamp(1.9rem,3.5vw,2.8rem);color:#111;text-transform:uppercase;line-height:1.1;margin:0 0 20px 0;letter-spacing:-0.3px;}
                .horror-hl{color:#f57c15;}
                .horror-body-text{font-size:14px;color:#555;line-height:1.75;margin:0 0 16px 0;}
                .horror-section-head{margin-bottom:52px;}
                .horror-head-center{text-align:center;}
                .horror-btn-orange{display:inline-flex;align-items:center;gap:8px;background:#f57c15;color:#fff;border:none;padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background 0.25s,transform 0.2s,box-shadow 0.25s;box-shadow:0 5px 18px rgba(245,124,21,0.28);}
                .horror-btn-orange:hover{background:#d96c0d;transform:translateY(-2px);box-shadow:0 8px 24px rgba(245,124,21,0.35);}
                .horror-btn-outline{display:inline-flex;align-items:center;background:transparent;color:#333;border:1.5px solid rgba(0,0,0,0.18);padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:border-color 0.25s,color 0.25s;}
                .horror-btn-outline:hover{border-color:#f57c15;color:#f57c15;}
                .horror-btn-lg{padding:15px 36px;font-size:12.5px;}
                .horror-hero{background:#060606;padding:60px 24px 80px;position:relative;overflow:hidden;width:100%;}
                .horror-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 55% 50% at 30% 50%,rgba(245,124,21,0.07) 0%,transparent 65%),radial-gradient(ellipse 40% 60% at 80% 20%,rgba(245,124,21,0.04) 0%,transparent 60%);pointer-events:none;}
                .horror-hero-grid{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:1fr 260px;gap:40px;align-items:start;position:relative;z-index:2;}
                .horror-hero-inner{padding-top:10px;}
                .horror-breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:28px;}
                .horror-bc-sep{color:rgba(255,255,255,0.2);font-size:11px;}
                .horror-bc-current{font-size:11px;font-weight:700;color:#f57c15;letter-spacing:0.5px;}
                .horror-hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(245,124,21,0.08);border:1px solid rgba(245,124,21,0.2);border-radius:30px;padding:6px 16px;font-size:10.5px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:#f57c15;margin-bottom:28px;}
                .horror-tag-dot{width:5px;height:5px;border-radius:50%;background:#f57c15;flex-shrink:0;}
                .horror-hero-title{font-family:'Oswald',sans-serif;font-size:clamp(2.8rem,6vw,5.2rem);color:#fff;line-height:0.95;text-transform:uppercase;letter-spacing:-1px;margin:0 0 24px 0;}
                .horror-hero-em{color:#f57c15;font-style:italic;}
                .horror-hero-sub{font-size:14.5px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:520px;margin:0 0 36px 0;font-weight:400;}
                .horror-hero-actions{display:flex;flex-wrap:nowrap;gap:12px;margin-bottom:32px;align-items:center;}
                .horror-hero-actions .horror-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .horror-hero-actions .horror-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                .horror-trust-row{display:flex;flex-wrap:wrap;gap:8px;}
                .horror-trust-pill{font-size:11px;font-weight:700;color:rgba(255,255,255,0.45);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:6px 12px;letter-spacing:0.3px;}
                .horror-hero-sidebar{display:flex;flex-direction:column;gap:3px;padding-top:64px;}
                .horror-sidebar-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px 18px;display:flex;flex-direction:column;gap:4px;transition:border-color 0.3s;}
                .horror-sidebar-card:hover{border-color:rgba(245,124,21,0.25);}
                .horror-sc-val{font-family:'Oswald',sans-serif;font-size:28px;font-weight:700;color:#f57c15;line-height:1;}
                .horror-sc-label{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}
                .horror-intro{background:#fff;padding:90px 24px;border-bottom:1px solid rgba(0,0,0,0.06);}
                .horror-intro-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 340px;gap:70px;align-items:center;}
                .horror-visual-box{background:#060606;border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:32px 28px;position:relative;overflow:hidden;}
                .horror-vb-accent{position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#f57c15,rgba(245,124,21,0.3));}
                .horror-vb-line{position:absolute;top:0;left:28px;width:1px;bottom:0;background:rgba(245,124,21,0.08);}
                .horror-vb-content{display:flex;flex-direction:column;gap:4px;padding:16px 0 16px 20px;}
                .horror-vb-num{font-family:'Oswald',sans-serif;font-size:32px;font-weight:700;color:#f57c15;line-height:1;}
                .horror-vb-label{font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}
                .horror-vb-divider{height:1px;background:rgba(255,255,255,0.05);}
                .horror-features{background:#f9f8f7;padding:90px 24px;}
                .horror-features-inner{max-width:1200px;margin:0 auto;}
                .horror-features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
                .horror-feature-card{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;padding:32px 28px;transition:border-color 0.3s,box-shadow 0.3s,transform 0.3s;}
                .horror-feature-card:hover{border-color:rgba(245,124,21,0.25);box-shadow:0 10px 30px rgba(245,124,21,0.07);transform:translateY(-3px);}
                .horror-fc-num{display:block;font-family:'Oswald',sans-serif;font-size:36px;font-weight:700;color:rgba(245,124,21,0.12);line-height:1;margin-bottom:-6px;user-select:none;}
                .horror-fc-title{font-family:'Oswald',sans-serif;font-size:16px;font-weight:600;color:#111;text-transform:uppercase;letter-spacing:0.3px;margin:0 0 12px 0;}
                .horror-fc-desc{font-size:13px;color:#666;line-height:1.7;margin:0;}
                .horror-cats{background:#060606;padding:90px 24px;}
                .horror-cats-inner{max-width:1100px;margin:0 auto;}
                .horror-cats .horror-section-title{color:#fff;}
                .horror-cats-sub{font-size:13.5px;color:rgba(255,255,255,0.35);margin:0;}
                .horror-cats-grid{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;}
                .horror-cat-pill{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:6px;font-size:12.5px;font-weight:600;color:rgba(255,255,255,0.65);transition:all 0.25s;cursor:default;}
                .horror-cat-pill:hover{background:rgba(245,124,21,0.1);border-color:rgba(245,124,21,0.3);color:#f57c15;}
                .horror-cp-icon{color:#f57c15;font-size:8px;}
                .horror-process{background:#fff;padding:90px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .horror-process-inner{max-width:900px;margin:0 auto;}
                .horror-steps{display:flex;flex-direction:column;}
                .horror-step-row{display:flex;gap:24px;align-items:stretch;}
                .horror-step-row:hover .horror-step-node{background:#f57c15;}
                .horror-step-row:hover .horror-step-num{color:#fff;}
                .horror-step-left{display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:52px;}
                .horror-step-node{width:52px;height:52px;border-radius:50%;background:#fff;border:2px solid #f57c15;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background 0.3s;}
                .horror-step-num{font-family:'Oswald',sans-serif;font-size:14px;font-weight:700;color:#f57c15;transition:color 0.3s;}
                .horror-step-vline{width:2px;flex:1;background:rgba(245,124,21,0.15);min-height:24px;}
                .horror-step-body{padding:10px 0 36px;flex:1;}
                .horror-step-title{font-family:'Oswald',sans-serif;font-size:17px;font-weight:600;color:#111;text-transform:uppercase;margin:0 0 8px 0;}
                .horror-step-desc{font-size:13.5px;color:#666;line-height:1.65;margin:0;}
                .horror-faq{background:#f9f8f7;padding:90px 24px;}
                .horror-faq-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:320px 1fr;gap:70px;align-items:start;}
                .horror-faq-item{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;margin-bottom:6px;overflow:hidden;transition:border-color 0.25s;}
                .horror-faq-item[open]{border-color:rgba(245,124,21,0.25);}
                .horror-faq-q{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 20px;font-family:'Raleway',sans-serif;font-size:13.5px;font-weight:700;color:#111;cursor:pointer;list-style:none;user-select:none;}
                .horror-faq-q::-webkit-details-marker{display:none;}
                .horror-faq-icon{font-size:20px;font-weight:300;color:#f57c15;flex-shrink:0;line-height:1;transition:transform 0.25s;}
                .horror-faq-item[open] .horror-faq-icon{transform:rotate(45deg);}
                .horror-faq-a{padding:14px 20px 18px;font-size:13px;color:#666;line-height:1.7;margin:0;border-top:1px solid rgba(0,0,0,0.04);}
                .horror-related{background:#fff;padding:70px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .horror-related-inner{max-width:1200px;margin:0 auto;}
                .horror-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
                .horror-cta{background:#060606;padding:110px 24px;text-align:center;position:relative;overflow:hidden;}
                .horror-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(245,124,21,0.07) 0%,transparent 70%);pointer-events:none;}
                .horror-cta-inner{position:relative;z-index:2;}
                .horror-cta-title{font-family:'Oswald',sans-serif;font-size:clamp(2.5rem,5vw,4.2rem);color:#fff;text-transform:uppercase;line-height:1.05;margin:8px 0 20px 0;letter-spacing:-0.5px;}
                .horror-cta-sub{font-size:14.5px;color:rgba(255,255,255,0.38);max-width:460px;margin:0 auto 36px;line-height:1.7;}
                .horror-cta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:nowrap;align-items:center;}
                .horror-cta .horror-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .horror-cta .horror-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                @media (max-width:1024px){
                    .horror-hero-grid{grid-template-columns:1fr;}
                    .horror-hero-sidebar{padding-top:0;display:grid;grid-template-columns:repeat(4,1fr);}
                    .horror-intro-inner{grid-template-columns:1fr;gap:40px;}
                    .horror-faq-inner{grid-template-columns:1fr;gap:40px;}
                }
                @media (max-width:768px){
                    .horror-features-grid{grid-template-columns:1fr;}
                    .horror-related-grid{grid-template-columns:repeat(2,1fr);}
                    .horror-hero-sidebar{grid-template-columns:repeat(2,1fr);}
                }
                @media (max-width:520px){
                    .horror-related-grid{grid-template-columns:1fr;}
                    .horror-cta-btns{flex-wrap:wrap;}
                }

                 /* ══ INTRO ══ */
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