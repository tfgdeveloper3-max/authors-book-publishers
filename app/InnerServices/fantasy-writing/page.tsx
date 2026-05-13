"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const relatedServices = [
    { label: "Book Writing", slug: "book-writing" },
    { label: "Sci-Fi Writing", slug: "sci-fi-writing" },
    { label: "Fiction Writing", slug: "fiction-writing" },
    { label: "Mystery Writing", slug: "mystery-writing" },
    { label: "Book Editing", slug: "book-editing" },
    { label: "Book Publishing", slug: "book-publishing" },
];

const categories = [
    { icon: "✦", label: "Epic Fantasy" },
    { icon: "✦", label: "High Fantasy" },
    { icon: "✦", label: "Low Fantasy" },
    { icon: "✦", label: "Dark Fantasy" },
    { icon: "✦", label: "Urban Fantasy" },
    { icon: "✦", label: "Sword & Sorcery" },
    { icon: "✦", label: "Portal Fantasy" },
    { icon: "✦", label: "Grimdark" },
    { icon: "✦", label: "Progression Fantasy" },
    { icon: "✦", label: "LitRPG" },
    { icon: "✦", label: "Mythic Fantasy" },
    { icon: "✦", label: "Fairy Tale Retellings" },
];

const features = [
    { num: "01", title: "World-Building Architecture", desc: "We construct entire fantasy worlds — geography, history, politics, religion, economics, and culture — built on internally consistent rules that make the impossible feel inevitable." },
    { num: "02", title: "Magic System Design", desc: "From hard magic systems with clear rules to soft, mysterious forces — we design magic that serves your story's themes and creates genuine narrative tension." },
    { num: "03", title: "Epic Cast Management", desc: "Fantasy demands large, complex casts. We develop each character with distinct voice, motivation, and arc — ensuring no character feels interchangeable." },
    { num: "04", title: "Lore Bible Creation", desc: "Every world we build comes with a comprehensive lore bible — the definitive reference document for your world's history, factions, languages, and cosmology." },
    { num: "05", title: "Full Copyright Ownership", desc: "Every world, character, magic system, and piece of lore belongs entirely to you. Full IP transfer with no royalties or credits claimed." },
    { num: "06", title: "Series Architecture", desc: "We design fantasy worlds built to scale — with overarching mythologies, long-form character arcs, and narrative threads that sustain multi-book series." },
];

const steps = [
    { num: "01", title: "World & Vision Session", desc: "We explore your world concept, tone, magic system ideas, and the kind of fantasy experience you want to create for readers." },
    { num: "02", title: "World-Building & Lore Bible", desc: "A comprehensive document covering your world's geography, history, magic, factions, and cosmology is built and approved." },
    { num: "03", title: "Character & Plot Outline", desc: "Detailed character profiles and a full narrative outline are developed, including series-level arcs if applicable." },
    { num: "04", title: "Manuscript Drafting", desc: "Your fantasy novel is written with immersive world-building, propulsive plot, and the scope that makes the genre unforgettable." },
    { num: "05", title: "Final Delivery", desc: "A polished manuscript with full lore bible and copyright transfer — ready for agents, publishers, or self-publishing." },
];

const faqs = [
    { q: "Do I need a fully developed world before we start?", a: "Not at all. Many of our best fantasy projects start with a single image, concept, or feeling. Our world-building process constructs a complete, coherent world from even the most embryonic idea." },
    { q: "How detailed does the magic system need to be?", a: "As detailed as your story requires. Hard magic systems with strict rules suit some stories; soft, mysterious magic suits others. We design the system to serve your narrative, not the other way around." },
    { q: "Can you write a fantasy series, not just a standalone?", a: "Yes — and we love multi-volume series. We build worlds designed to scale, with overarching mythologies and character arcs that sustain books across an entire series." },
    { q: "What is included in the lore bible?", a: "The lore bible covers geography and maps, world history and timeline, political factions and power structures, magic system rules, languages, religion and cosmology, and key character profiles." },
    { q: "Can you continue a fantasy world I have already started?", a: "Yes. We analyze your existing material thoroughly — learning your world's rules, tone, and lore — before writing a single word, ensuring complete consistency with your established universe." },
];

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="fantasy-page">

                {/* HERO */}
                <section className="fantasy-hero">
                    <div className="fantasy-hero-bg" />
                    <div className="fantasy-hero-grid">
                        <div className="fantasy-hero-inner">
                            <nav className="fantasy-breadcrumb">
                                <Link href="/" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Home</Link>
                                <span className="fantasy-bc-sep">›</span>
                                <Link href="/services" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Services</Link>
                                <span className="fantasy-bc-sep">›</span>
                                <span className="fantasy-bc-current">Fantasy Writing</span>
                            </nav>
                            <div className="fantasy-hero-tag"><span className="fantasy-tag-dot" />Writing Services</div>
                            <h1 className="fantasy-hero-title">Professional<br /><em className="fantasy-hero-em">Fantasy Writing</em><br />Services</h1>
                            <p className="fantasy-hero-sub">From intimate low-fantasy tales to epic multi-volume world-building sagas — our specialist fantasy authors craft immersive realms, unforgettable magic systems, and the kind of sweeping narratives that define a genre.</p>
                            <div className="fantasy-hero-actions">
                                <button className="fantasy-btn-orange">Get A Free Quote</button>
                                <button className="fantasy-btn-outline">(646) 298 6438</button>
                            </div>
                            <div className="fantasy-trust-row">
                                <span className="fantasy-trust-pill">✓ 100% Confidential</span>
                                <span className="fantasy-trust-pill">✓ Full Copyright Yours</span>
                                <span className="fantasy-trust-pill">✓ Unlimited Revisions</span>
                                <span className="fantasy-trust-pill">✓ NDA Signed</span>
                            </div>
                        </div>
                        <div className="fantasy-hero-sidebar">
                            <div className="fantasy-sidebar-card"><span className="fantasy-sc-val">5,000+</span><span className="fantasy-sc-label">Projects Delivered</span></div>
                            <div className="fantasy-sidebar-card"><span className="fantasy-sc-val">400+</span><span className="fantasy-sc-label">Publishing Platforms</span></div>
                            <div className="fantasy-sidebar-card"><span className="fantasy-sc-val">98%</span><span className="fantasy-sc-label">Client Satisfaction</span></div>
                            <div className="fantasy-sidebar-card"><span className="fantasy-sc-val">15+</span><span className="fantasy-sc-label">Years Experience</span></div>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="fantasy-intro">
                    <div className="fantasy-intro-inner">
                        <div className="fantasy-intro-text">
                            <span className="fantasy-eyebrow">What We Do</span>
                            <h2 className="fantasy-section-title">Every Great Fantasy Begins<br /><span className="fantasy-hl">With A World That Feels Real.</span></h2>
                            <p className="fantasy-body-text">Fantasy is the most ambitious of all fiction genres. To write it well, you must convince readers to believe in the impossible — and that requires a world so internally consistent, so vividly detailed, and so emotionally resonant that disbelief simply evaporates. Our fantasy writers have spent careers mastering this art.</p>
                            <p className="fantasy-body-text">Whether your vision is an intimate character-driven story with a touch of magic, a sprawling epic with dozens of nations and a centuries-old mythology, or the first book in a series that will rival the genre's titans — we deliver manuscripts that build worlds readers never want to leave.</p>
                            <button className="fantasy-btn-orange" style={{ marginTop: "8px" }}>Build Your World</button>
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
                <section className="fantasy-features">
                    <div className="fantasy-features-inner">
                        <div className="fantasy-section-head">
                            <span className="fantasy-eyebrow">Why Choose Us</span>
                            <h2 className="fantasy-section-title">The Belmont <span className="fantasy-hl">Difference</span></h2>
                        </div>
                        <div className="fantasy-features-grid">
                            {features.map((f) => (
                                <div key={f.num} className="fantasy-feature-card">
                                    <span className="fantasy-fc-num">{f.num}</span>
                                    <h3 className="fantasy-fc-title">{f.title}</h3>
                                    <p className="fantasy-fc-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CATEGORIES */}
                <section className="fantasy-cats">
                    <div className="fantasy-cats-inner">
                        <div className="fantasy-section-head fantasy-head-center">
                            <span className="fantasy-eyebrow">Sub-Genres We Write</span>
                            <h2 className="fantasy-section-title">We Write Across All <span className="fantasy-hl">Fantasy Sub-Genres</span></h2>
                            <p className="fantasy-cats-sub">Our fantasy writers are passionate genre specialists with published track records across every corner of the genre.</p>
                        </div>
                        <div className="fantasy-cats-grid">
                            {categories.map((c) => (
                                <div key={c.label} className="fantasy-cat-pill">
                                    <span className="fantasy-cp-icon">{c.icon}</span>{c.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="fantasy-process">
                    <div className="fantasy-process-inner">
                        <div className="fantasy-section-head fantasy-head-center">
                            <span className="fantasy-eyebrow">How It Works</span>
                            <h2 className="fantasy-section-title">Our <span className="fantasy-hl">Writing Process</span></h2>
                        </div>
                        <div className="fantasy-steps">
                            {steps.map((s, i) => (
                                <div key={s.num} className="fantasy-step-row">
                                    <div className="fantasy-step-left">
                                        <div className="fantasy-step-node"><span className="fantasy-step-num">{s.num}</span></div>
                                        {i < steps.length - 1 && <div className="fantasy-step-vline" />}
                                    </div>
                                    <div className="fantasy-step-body">
                                        <h3 className="fantasy-step-title">{s.title}</h3>
                                        <p className="fantasy-step-desc">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="fantasy-faq">
                    <div className="fantasy-faq-inner">
                        <div className="fantasy-faq-left">
                            <span className="fantasy-eyebrow">FAQ</span>
                            <h2 className="fantasy-section-title">Common <span className="fantasy-hl">Questions</span></h2>
                            <p className="fantasy-body-text" style={{ marginTop: "16px" }}>Still have questions? Our team is available 24/7 for a free consultation.</p>
                            <button className="fantasy-btn-orange" style={{ marginTop: "24px" }}>Talk To An Expert</button>
                        </div>
                        <div className="fantasy-faq-right">
                            {faqs.map((item, i) => (
                                <details key={i} className="fantasy-faq-item">
                                    <summary className="fantasy-faq-q">{item.q}<span className="fantasy-faq-icon">+</span></summary>
                                    <p className="fantasy-faq-a">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED */}
                <section className="fantasy-related">
                    <div className="fantasy-related-inner">
                        <span className="fantasy-eyebrow">Explore More</span>
                        <h2 className="fantasy-section-title" style={{ marginBottom: "32px" }}>Related <span className="fantasy-hl">Services</span></h2>
                        <div className="fantasy-related-grid">
                            {relatedServices.map((rs) => (
                                <Link key={rs.slug} href={`/InnerServices/${rs.slug}`}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "#fafafa", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "8px", textDecoration: "none", transition: "all 0.25s" }}
                                    onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "#f57c15"; el.style.background = "rgba(245,124,21,0.03)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 6px 18px rgba(245,124,21,0.08)"; const a = el.querySelector(".fantasy-rca") as HTMLElement; if (a) { a.style.opacity = "1"; a.style.transform = "translate(0,0)"; } }}
                                    onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "rgba(0,0,0,0.07)"; el.style.background = "#fafafa"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; const a = el.querySelector(".fantasy-rca") as HTMLElement; if (a) { a.style.opacity = "0"; a.style.transform = "translate(-4px,4px)"; } }}
                                >
                                    <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: "13px", fontWeight: 700, color: "#222" }}>{rs.label}</span>
                                    <span className="fantasy-rca" style={{ fontSize: "16px", color: "#f57c15", opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.25s", display: "inline-block" }}>↗</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="fantasy-cta">
                    <div className="fantasy-cta-inner">
                        <span className="fantasy-eyebrow" style={{ color: "rgba(245,124,21,0.8)" }}>Get Started Today</span>
                        <h2 className="fantasy-cta-title">Ready To Build Your<br /><span className="fantasy-hl">Fantasy World?</span></h2>
                        <p className="fantasy-cta-sub">Schedule a free consultation with our fantasy writing specialists. Your world is waiting to be born.</p>
                        <div className="fantasy-cta-btns">
                            <button className="fantasy-btn-orange fantasy-btn-lg">Get A Free Quote</button>
                            <button className="fantasy-btn-outline fantasy-btn-lg">(646) 298 6438</button>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                .fantasy-page{font-family:'Raleway',sans-serif;color:#111;background:#fff;}
                .fantasy-eyebrow{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#f57c15;margin-bottom:14px;}
                .fantasy-section-title{font-family:'Oswald',sans-serif;font-size:clamp(1.9rem,3.5vw,2.8rem);color:#111;text-transform:uppercase;line-height:1.1;margin:0 0 20px 0;letter-spacing:-0.3px;}
                .fantasy-hl{color:#f57c15;}
                .fantasy-body-text{font-size:14px;color:#555;line-height:1.75;margin:0 0 16px 0;}
                .fantasy-section-head{margin-bottom:52px;}
                .fantasy-head-center{text-align:center;}
                .fantasy-btn-orange{display:inline-flex;align-items:center;gap:8px;background:#f57c15;color:#fff;border:none;padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background 0.25s,transform 0.2s,box-shadow 0.25s;box-shadow:0 5px 18px rgba(245,124,21,0.28);}
                .fantasy-btn-orange:hover{background:#d96c0d;transform:translateY(-2px);box-shadow:0 8px 24px rgba(245,124,21,0.35);}
                .fantasy-btn-outline{display:inline-flex;align-items:center;background:transparent;color:#333;border:1.5px solid rgba(0,0,0,0.18);padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:border-color 0.25s,color 0.25s;}
                .fantasy-btn-outline:hover{border-color:#f57c15;color:#f57c15;}
                .fantasy-btn-lg{padding:15px 36px;font-size:12.5px;}
                .fantasy-hero{background:#060606;padding:60px 24px 80px;position:relative;overflow:hidden;width:100%;}
                .fantasy-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 55% 50% at 30% 50%,rgba(245,124,21,0.07) 0%,transparent 65%),radial-gradient(ellipse 40% 60% at 80% 20%,rgba(245,124,21,0.04) 0%,transparent 60%);pointer-events:none;}
                .fantasy-hero-grid{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:1fr 260px;gap:40px;align-items:start;position:relative;z-index:2;}
                .fantasy-hero-inner{padding-top:10px;}
                .fantasy-breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:28px;}
                .fantasy-bc-sep{color:rgba(255,255,255,0.2);font-size:11px;}
                .fantasy-bc-current{font-size:11px;font-weight:700;color:#f57c15;letter-spacing:0.5px;}
                .fantasy-hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(245,124,21,0.08);border:1px solid rgba(245,124,21,0.2);border-radius:30px;padding:6px 16px;font-size:10.5px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:#f57c15;margin-bottom:28px;}
                .fantasy-tag-dot{width:5px;height:5px;border-radius:50%;background:#f57c15;flex-shrink:0;}
                .fantasy-hero-title{font-family:'Oswald',sans-serif;font-size:clamp(2.8rem,6vw,5.2rem);color:#fff;line-height:0.95;text-transform:uppercase;letter-spacing:-1px;margin:0 0 24px 0;}
                .fantasy-hero-em{color:#f57c15;font-style:italic;}
                .fantasy-hero-sub{font-size:14.5px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:520px;margin:0 0 36px 0;font-weight:400;}
                .fantasy-hero-actions{display:flex;flex-wrap:nowrap;gap:12px;margin-bottom:32px;align-items:center;}
                .fantasy-hero-actions .fantasy-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .fantasy-hero-actions .fantasy-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                .fantasy-trust-row{display:flex;flex-wrap:wrap;gap:8px;}
                .fantasy-trust-pill{font-size:11px;font-weight:700;color:rgba(255,255,255,0.45);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:6px 12px;letter-spacing:0.3px;}
                .fantasy-hero-sidebar{display:flex;flex-direction:column;gap:3px;padding-top:64px;}
                .fantasy-sidebar-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px 18px;display:flex;flex-direction:column;gap:4px;transition:border-color 0.3s;}
                .fantasy-sidebar-card:hover{border-color:rgba(245,124,21,0.25);}
                .fantasy-sc-val{font-family:'Oswald',sans-serif;font-size:28px;font-weight:700;color:#f57c15;line-height:1;}
                .fantasy-sc-label{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}
                .fantasy-intro{background:#fff;padding:90px 24px;border-bottom:1px solid rgba(0,0,0,0.06);}
                .fantasy-intro-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 340px;gap:70px;align-items:center;}
                .fantasy-visual-box{background:#060606;border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:32px 28px;position:relative;overflow:hidden;}
                .fantasy-vb-accent{position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#f57c15,rgba(245,124,21,0.3));}
                .fantasy-vb-line{position:absolute;top:0;left:28px;width:1px;bottom:0;background:rgba(245,124,21,0.08);}
                .fantasy-vb-content{display:flex;flex-direction:column;gap:4px;padding:16px 0 16px 20px;}
                .fantasy-vb-num{font-family:'Oswald',sans-serif;font-size:32px;font-weight:700;color:#f57c15;line-height:1;}
                .fantasy-vb-label{font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}
                .fantasy-vb-divider{height:1px;background:rgba(255,255,255,0.05);}
                .fantasy-features{background:#f9f8f7;padding:90px 24px;}
                .fantasy-features-inner{max-width:1200px;margin:0 auto;}
                .fantasy-features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
                .fantasy-feature-card{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;padding:32px 28px;transition:border-color 0.3s,box-shadow 0.3s,transform 0.3s;}
                .fantasy-feature-card:hover{border-color:rgba(245,124,21,0.25);box-shadow:0 10px 30px rgba(245,124,21,0.07);transform:translateY(-3px);}
                .fantasy-fc-num{display:block;font-family:'Oswald',sans-serif;font-size:36px;font-weight:700;color:rgba(245,124,21,0.12);line-height:1;margin-bottom:-6px;user-select:none;}
                .fantasy-fc-title{font-family:'Oswald',sans-serif;font-size:16px;font-weight:600;color:#111;text-transform:uppercase;letter-spacing:0.3px;margin:0 0 12px 0;}
                .fantasy-fc-desc{font-size:13px;color:#666;line-height:1.7;margin:0;}
                .fantasy-cats{background:#060606;padding:90px 24px;}
                .fantasy-cats-inner{max-width:1100px;margin:0 auto;}
                .fantasy-cats .fantasy-section-title{color:#fff;}
                .fantasy-cats-sub{font-size:13.5px;color:rgba(255,255,255,0.35);margin:0;}
                .fantasy-cats-grid{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;}
                .fantasy-cat-pill{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:6px;font-size:12.5px;font-weight:600;color:rgba(255,255,255,0.65);transition:all 0.25s;cursor:default;}
                .fantasy-cat-pill:hover{background:rgba(245,124,21,0.1);border-color:rgba(245,124,21,0.3);color:#f57c15;}
                .fantasy-cp-icon{color:#f57c15;font-size:8px;}
                .fantasy-process{background:#fff;padding:90px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .fantasy-process-inner{max-width:900px;margin:0 auto;}
                .fantasy-steps{display:flex;flex-direction:column;}
                .fantasy-step-row{display:flex;gap:24px;align-items:stretch;}
                .fantasy-step-row:hover .fantasy-step-node{background:#f57c15;}
                .fantasy-step-row:hover .fantasy-step-num{color:#fff;}
                .fantasy-step-left{display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:52px;}
                .fantasy-step-node{width:52px;height:52px;border-radius:50%;background:#fff;border:2px solid #f57c15;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background 0.3s;}
                .fantasy-step-num{font-family:'Oswald',sans-serif;font-size:14px;font-weight:700;color:#f57c15;transition:color 0.3s;}
                .fantasy-step-vline{width:2px;flex:1;background:rgba(245,124,21,0.15);min-height:24px;}
                .fantasy-step-body{padding:10px 0 36px;flex:1;}
                .fantasy-step-title{font-family:'Oswald',sans-serif;font-size:17px;font-weight:600;color:#111;text-transform:uppercase;margin:0 0 8px 0;}
                .fantasy-step-desc{font-size:13.5px;color:#666;line-height:1.65;margin:0;}
                .fantasy-faq{background:#f9f8f7;padding:90px 24px;}
                .fantasy-faq-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:320px 1fr;gap:70px;align-items:start;}
                .fantasy-faq-item{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;margin-bottom:6px;overflow:hidden;transition:border-color 0.25s;}
                .fantasy-faq-item[open]{border-color:rgba(245,124,21,0.25);}
                .fantasy-faq-q{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 20px;font-family:'Raleway',sans-serif;font-size:13.5px;font-weight:700;color:#111;cursor:pointer;list-style:none;user-select:none;}
                .fantasy-faq-q::-webkit-details-marker{display:none;}
                .fantasy-faq-icon{font-size:20px;font-weight:300;color:#f57c15;flex-shrink:0;line-height:1;transition:transform 0.25s;}
                .fantasy-faq-item[open] .fantasy-faq-icon{transform:rotate(45deg);}
                .fantasy-faq-a{padding:14px 20px 18px;font-size:13px;color:#666;line-height:1.7;margin:0;border-top:1px solid rgba(0,0,0,0.04);}
                .fantasy-related{background:#fff;padding:70px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .fantasy-related-inner{max-width:1200px;margin:0 auto;}
                .fantasy-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
                .fantasy-cta{background:#060606;padding:110px 24px;text-align:center;position:relative;overflow:hidden;}
                .fantasy-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(245,124,21,0.07) 0%,transparent 70%);pointer-events:none;}
                .fantasy-cta-inner{position:relative;z-index:2;}
                .fantasy-cta-title{font-family:'Oswald',sans-serif;font-size:clamp(2.5rem,5vw,4.2rem);color:#fff;text-transform:uppercase;line-height:1.05;margin:8px 0 20px 0;letter-spacing:-0.5px;}
                .fantasy-cta-sub{font-size:14.5px;color:rgba(255,255,255,0.38);max-width:460px;margin:0 auto 36px;line-height:1.7;}
                .fantasy-cta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:nowrap;align-items:center;}
                .fantasy-cta .fantasy-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .fantasy-cta .fantasy-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                @media (max-width:1024px){
                    .fantasy-hero-grid{grid-template-columns:1fr;}
                    .fantasy-hero-sidebar{padding-top:0;display:grid;grid-template-columns:repeat(4,1fr);}
                    .fantasy-intro-inner{grid-template-columns:1fr;gap:40px;}
                    .fantasy-faq-inner{grid-template-columns:1fr;gap:40px;}
                }
                @media (max-width:768px){
                    .fantasy-features-grid{grid-template-columns:1fr;}
                    .fantasy-related-grid{grid-template-columns:repeat(2,1fr);}
                    .fantasy-hero-sidebar{grid-template-columns:repeat(2,1fr);}
                }
                @media (max-width:520px){
                    .fantasy-related-grid{grid-template-columns:1fr;}
                    .fantasy-cta-btns{flex-wrap:wrap;}
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