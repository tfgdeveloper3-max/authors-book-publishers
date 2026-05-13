"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const relatedServices = [
    { label: "Book Writing", slug: "book-writing" },
    { label: "Fiction Writing", slug: "fiction-writing" },
    { label: "Non-Fiction Writing", slug: "non-fiction-writing" },
    { label: "Horror Writing", slug: "horror-writing" },
    { label: "Book Editing", slug: "book-editing" },
    { label: "Book Publishing", slug: "book-publishing" },
];

const categories = [
    { icon: "✦", label: "Feature Film Screenplay" },
    { icon: "✦", label: "Television Pilot" },
    { icon: "✦", label: "TV Series Bible" },
    { icon: "✦", label: "Short Film Script" },
    { icon: "✦", label: "Stage Play" },
    { icon: "✦", label: "Musical Theatre" },
    { icon: "✦", label: "Web Series" },
    { icon: "✦", label: "Podcast & Audio Drama" },
    { icon: "✦", label: "Documentary Script" },
    { icon: "✦", label: "Corporate & Brand Film" },
    { icon: "✦", label: "Video Game Narrative" },
    { icon: "✦", label: "Animated Series" },
];

const features = [
    { num: "01", title: "Industry-Standard Formatting", desc: "Every script is delivered in correct industry format — Final Draft compatible, properly structured, and indistinguishable from professional Hollywood submissions." },
    { num: "02", title: "Three-Act Structure Mastery", desc: "Our screenwriters understand story structure at a deep level — building scripts with properly placed turning points, midpoints, and escalating conflict that drives the narrative forward." },
    { num: "03", title: "Dialogue That Sings", desc: "Great scripts live in their dialogue. We write subtext-rich, character-revealing, naturalistic exchanges that serve story while making every character's voice unmistakable." },
    { num: "04", title: "Visual Storytelling", desc: "Scripts must show, not tell. Our writers think in images, sequences, and cinematic moments — crafting scenes that translate powerfully from page to screen." },
    { num: "05", title: "Genre & Format Expertise", desc: "From feature films and TV pilots to web series, stage plays, and audio dramas — our writers are specialists across every scripted format and genre." },
    { num: "06", title: "Full Copyright Ownership", desc: "The script, characters, and story are entirely yours. Full IP transfer on delivery with no rights retained." },
];

const steps = [
    { num: "01", title: "Concept & Story Session", desc: "We explore your concept, genre, tone, target format, and the story you want to tell — building a shared understanding of the project." },
    { num: "02", title: "Treatment & Outline", desc: "A prose treatment and scene-by-scene outline are developed, mapping the full story structure before a single page of script is written." },
    { num: "03", title: "First Draft", desc: "The full script is written in industry-standard format, delivered as a complete first draft for your review." },
    { num: "04", title: "Notes & Revision", desc: "You provide notes and we revise — as many rounds as needed to get the script to the level you need." },
    { num: "05", title: "Final Delivery", desc: "A polished, industry-ready script with full copyright transfer — ready for submission, production, or competition entry." },
];

const faqs = [
    { q: "What format do you deliver scripts in?", a: "All scripts are delivered in industry-standard format, compatible with Final Draft, Highland 2, and PDF. We follow WGA formatting guidelines for feature films and television." },
    { q: "Can you write a TV pilot and series bible together?", a: "Yes. We regularly deliver pilot script and series bible as a package — giving you everything needed for a full series pitch to networks or streaming platforms." },
    { q: "How long is a feature film screenplay?", a: "A standard feature screenplay runs 90–120 pages, with one page roughly equating to one minute of screen time. Genre affects this — action films tend shorter, dramas longer." },
    { q: "Can you rewrite an existing script?", a: "Yes. Script doctoring and rewrites are a significant part of our work. We can address structural issues, dialogue, pacing, or a full page-one rewrite depending on what the project needs." },
    { q: "Do you write scripts for non-English productions?", a: "We write in English, but our scripts can be adapted or translated for international productions. We have experience working with international co-production structures." },
];

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="script-page">

                {/* HERO */}
                <section className="script-hero">
                    <div className="script-hero-bg" />
                    <div className="script-hero-grid">
                        <div className="script-hero-inner">
                            <nav className="script-breadcrumb">
                                <Link href="/" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Home</Link>
                                <span className="script-bc-sep">›</span>
                                <Link href="/services" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Services</Link>
                                <span className="script-bc-sep">›</span>
                                <span className="script-bc-current">Script Writing</span>
                            </nav>
                            <div className="script-hero-tag"><span className="script-tag-dot" />Writing Services</div>
                            <h1 className="script-hero-title">Professional<br /><em className="script-hero-em">Script Writing</em><br />Services</h1>
                            <p className="script-hero-sub">From feature film screenplays to television pilots, stage plays to podcast scripts — our professional screenwriters craft compelling stories in the language of visual storytelling, designed to captivate audiences and attract industry attention.</p>
                            <div className="script-hero-actions">
                                <button className="script-btn-orange">Get A Free Quote</button>
                                <button className="script-btn-outline">(646) 298 6438</button>
                            </div>
                            <div className="script-trust-row">
                                <span className="script-trust-pill">✓ 100% Confidential</span>
                                <span className="script-trust-pill">✓ Full Copyright Yours</span>
                                <span className="script-trust-pill">✓ Unlimited Revisions</span>
                                <span className="script-trust-pill">✓ NDA Signed</span>
                            </div>
                        </div>
                        <div className="script-hero-sidebar">
                            <div className="script-sidebar-card"><span className="script-sc-val">5,000+</span><span className="script-sc-label">Projects Delivered</span></div>
                            <div className="script-sidebar-card"><span className="script-sc-val">400+</span><span className="script-sc-label">Publishing Platforms</span></div>
                            <div className="script-sidebar-card"><span className="script-sc-val">98%</span><span className="script-sc-label">Client Satisfaction</span></div>
                            <div className="script-sidebar-card"><span className="script-sc-val">15+</span><span className="script-sc-label">Years Experience</span></div>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="script-intro">
                    <div className="script-intro-inner">
                        <div className="script-intro-text">
                            <span className="script-eyebrow">What We Do</span>
                            <h2 className="script-section-title">Stories Built For<br /><span className="script-hl">The Screen & Stage.</span></h2>
                            <p className="script-body-text">Script writing is an entirely distinct discipline from prose writing. It demands mastery of format, subtext, visual storytelling, dialogue economy, and the structural mechanics that keep audiences engaged across an act. Our screenwriters are working industry professionals who understand not just how to write a great script — but how to write one that gets made.</p>
                            <p className="script-body-text">Whether you have a concept ready for development, a treatment that needs to become a full screenplay, or an existing script that needs a professional rewrite — our team delivers industry-standard scripts that stand out in development rooms, competitions, and pitches.</p>
                            <button className="script-btn-orange" style={{ marginTop: "8px" }}>Start Your Script</button>
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
                <section className="script-features">
                    <div className="script-features-inner">
                        <div className="script-section-head">
                            <span className="script-eyebrow">Why Choose Us</span>
                            <h2 className="script-section-title">The Belmont <span className="script-hl">Difference</span></h2>
                        </div>
                        <div className="script-features-grid">
                            {features.map((f) => (
                                <div key={f.num} className="script-feature-card">
                                    <span className="script-fc-num">{f.num}</span>
                                    <h3 className="script-fc-title">{f.title}</h3>
                                    <p className="script-fc-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CATEGORIES */}
                <section className="script-cats">
                    <div className="script-cats-inner">
                        <div className="script-section-head script-head-center">
                            <span className="script-eyebrow">Script Formats We Write</span>
                            <h2 className="script-section-title">We Write For Every <span className="script-hl">Screen & Stage Format</span></h2>
                            <p className="script-cats-sub">Our screenwriters are working industry professionals across every scripted medium.</p>
                        </div>
                        <div className="script-cats-grid">
                            {categories.map((c) => (
                                <div key={c.label} className="script-cat-pill">
                                    <span className="script-cp-icon">{c.icon}</span>{c.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="script-process">
                    <div className="script-process-inner">
                        <div className="script-section-head script-head-center">
                            <span className="script-eyebrow">How It Works</span>
                            <h2 className="script-section-title">Our <span className="script-hl">Writing Process</span></h2>
                        </div>
                        <div className="script-steps">
                            {steps.map((s, i) => (
                                <div key={s.num} className="script-step-row">
                                    <div className="script-step-left">
                                        <div className="script-step-node"><span className="script-step-num">{s.num}</span></div>
                                        {i < steps.length - 1 && <div className="script-step-vline" />}
                                    </div>
                                    <div className="script-step-body">
                                        <h3 className="script-step-title">{s.title}</h3>
                                        <p className="script-step-desc">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="script-faq">
                    <div className="script-faq-inner">
                        <div className="script-faq-left">
                            <span className="script-eyebrow">FAQ</span>
                            <h2 className="script-section-title">Common <span className="script-hl">Questions</span></h2>
                            <p className="script-body-text" style={{ marginTop: "16px" }}>Still have questions? Our team is available 24/7 for a free consultation.</p>
                            <button className="script-btn-orange" style={{ marginTop: "24px" }}>Talk To An Expert</button>
                        </div>
                        <div className="script-faq-right">
                            {faqs.map((item, i) => (
                                <details key={i} className="script-faq-item">
                                    <summary className="script-faq-q">{item.q}<span className="script-faq-icon">+</span></summary>
                                    <p className="script-faq-a">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED */}
                <section className="script-related">
                    <div className="script-related-inner">
                        <span className="script-eyebrow">Explore More</span>
                        <h2 className="script-section-title" style={{ marginBottom: "32px" }}>Related <span className="script-hl">Services</span></h2>
                        <div className="script-related-grid">
                            {relatedServices.map((rs) => (
                                <Link key={rs.slug} href={`/InnerServices/${rs.slug}`}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "#fafafa", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "8px", textDecoration: "none", transition: "all 0.25s" }}
                                    onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "#f57c15"; el.style.background = "rgba(245,124,21,0.03)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 6px 18px rgba(245,124,21,0.08)"; const a = el.querySelector(".script-rca") as HTMLElement; if (a) { a.style.opacity = "1"; a.style.transform = "translate(0,0)"; } }}
                                    onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "rgba(0,0,0,0.07)"; el.style.background = "#fafafa"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; const a = el.querySelector(".script-rca") as HTMLElement; if (a) { a.style.opacity = "0"; a.style.transform = "translate(-4px,4px)"; } }}
                                >
                                    <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: "13px", fontWeight: 700, color: "#222" }}>{rs.label}</span>
                                    <span className="script-rca" style={{ fontSize: "16px", color: "#f57c15", opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.25s", display: "inline-block" }}>↗</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="script-cta">
                    <div className="script-cta-inner">
                        <span className="script-eyebrow" style={{ color: "rgba(245,124,21,0.8)" }}>Get Started Today</span>
                        <h2 className="script-cta-title">Ready To Write Your<br /><span className="script-hl">Script?</span></h2>
                        <p className="script-cta-sub">Schedule a free consultation with our screenwriting team. Your story deserves to be seen.</p>
                        <div className="script-cta-btns">
                            <button className="script-btn-orange script-btn-lg">Get A Free Quote</button>
                            <button className="script-btn-outline script-btn-lg">(646) 298 6438</button>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                .script-page{font-family:'Raleway',sans-serif;color:#111;background:#fff;}
                .script-eyebrow{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#f57c15;margin-bottom:14px;}
                .script-section-title{font-family:'Oswald',sans-serif;font-size:clamp(1.9rem,3.5vw,2.8rem);color:#111;text-transform:uppercase;line-height:1.1;margin:0 0 20px 0;letter-spacing:-0.3px;}
                .script-hl{color:#f57c15;}
                .script-body-text{font-size:14px;color:#555;line-height:1.75;margin:0 0 16px 0;}
                .script-section-head{margin-bottom:52px;}
                .script-head-center{text-align:center;}
                .script-btn-orange{display:inline-flex;align-items:center;gap:8px;background:#f57c15;color:#fff;border:none;padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background 0.25s,transform 0.2s,box-shadow 0.25s;box-shadow:0 5px 18px rgba(245,124,21,0.28);}
                .script-btn-orange:hover{background:#d96c0d;transform:translateY(-2px);box-shadow:0 8px 24px rgba(245,124,21,0.35);}
                .script-btn-outline{display:inline-flex;align-items:center;background:transparent;color:#333;border:1.5px solid rgba(0,0,0,0.18);padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:border-color 0.25s,color 0.25s;}
                .script-btn-outline:hover{border-color:#f57c15;color:#f57c15;}
                .script-btn-lg{padding:15px 36px;font-size:12.5px;}
                .script-hero{background:#060606;padding:60px 24px 80px;position:relative;overflow:hidden;width:100%;}
                .script-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 55% 50% at 30% 50%,rgba(245,124,21,0.07) 0%,transparent 65%),radial-gradient(ellipse 40% 60% at 80% 20%,rgba(245,124,21,0.04) 0%,transparent 60%);pointer-events:none;}
                .script-hero-grid{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:1fr 260px;gap:40px;align-items:start;position:relative;z-index:2;}
                .script-hero-inner{padding-top:10px;}
                .script-breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:28px;}
                .script-bc-sep{color:rgba(255,255,255,0.2);font-size:11px;}
                .script-bc-current{font-size:11px;font-weight:700;color:#f57c15;letter-spacing:0.5px;}
                .script-hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(245,124,21,0.08);border:1px solid rgba(245,124,21,0.2);border-radius:30px;padding:6px 16px;font-size:10.5px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:#f57c15;margin-bottom:28px;}
                .script-tag-dot{width:5px;height:5px;border-radius:50%;background:#f57c15;flex-shrink:0;}
                .script-hero-title{font-family:'Oswald',sans-serif;font-size:clamp(2.8rem,6vw,5.2rem);color:#fff;line-height:0.95;text-transform:uppercase;letter-spacing:-1px;margin:0 0 24px 0;}
                .script-hero-em{color:#f57c15;font-style:italic;}
                .script-hero-sub{font-size:14.5px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:520px;margin:0 0 36px 0;font-weight:400;}
                .script-hero-actions{display:flex;flex-wrap:nowrap;gap:12px;margin-bottom:32px;align-items:center;}
                .script-hero-actions .script-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .script-hero-actions .script-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                .script-trust-row{display:flex;flex-wrap:wrap;gap:8px;}
                .script-trust-pill{font-size:11px;font-weight:700;color:rgba(255,255,255,0.45);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:6px 12px;letter-spacing:0.3px;}
                .script-hero-sidebar{display:flex;flex-direction:column;gap:3px;padding-top:64px;}
                .script-sidebar-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px 18px;display:flex;flex-direction:column;gap:4px;transition:border-color 0.3s;}
                .script-sidebar-card:hover{border-color:rgba(245,124,21,0.25);}
                .script-sc-val{font-family:'Oswald',sans-serif;font-size:28px;font-weight:700;color:#f57c15;line-height:1;}
                .script-sc-label{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}
                .script-intro{background:#fff;padding:90px 24px;border-bottom:1px solid rgba(0,0,0,0.06);}
                .script-intro-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 340px;gap:70px;align-items:center;}
                .script-visual-box{background:#060606;border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:32px 28px;position:relative;overflow:hidden;}
                .script-vb-accent{position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#f57c15,rgba(245,124,21,0.3));}
                .script-vb-line{position:absolute;top:0;left:28px;width:1px;bottom:0;background:rgba(245,124,21,0.08);}
                .script-vb-content{display:flex;flex-direction:column;gap:4px;padding:16px 0 16px 20px;}
                .script-vb-num{font-family:'Oswald',sans-serif;font-size:32px;font-weight:700;color:#f57c15;line-height:1;}
                .script-vb-label{font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}
                .script-vb-divider{height:1px;background:rgba(255,255,255,0.05);}
                .script-features{background:#f9f8f7;padding:90px 24px;}
                .script-features-inner{max-width:1200px;margin:0 auto;}
                .script-features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
                .script-feature-card{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;padding:32px 28px;transition:border-color 0.3s,box-shadow 0.3s,transform 0.3s;}
                .script-feature-card:hover{border-color:rgba(245,124,21,0.25);box-shadow:0 10px 30px rgba(245,124,21,0.07);transform:translateY(-3px);}
                .script-fc-num{display:block;font-family:'Oswald',sans-serif;font-size:36px;font-weight:700;color:rgba(245,124,21,0.12);line-height:1;margin-bottom:-6px;user-select:none;}
                .script-fc-title{font-family:'Oswald',sans-serif;font-size:16px;font-weight:600;color:#111;text-transform:uppercase;letter-spacing:0.3px;margin:0 0 12px 0;}
                .script-fc-desc{font-size:13px;color:#666;line-height:1.7;margin:0;}
                .script-cats{background:#060606;padding:90px 24px;}
                .script-cats-inner{max-width:1100px;margin:0 auto;}
                .script-cats .script-section-title{color:#fff;}
                .script-cats-sub{font-size:13.5px;color:rgba(255,255,255,0.35);margin:0;}
                .script-cats-grid{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;}
                .script-cat-pill{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:6px;font-size:12.5px;font-weight:600;color:rgba(255,255,255,0.65);transition:all 0.25s;cursor:default;}
                .script-cat-pill:hover{background:rgba(245,124,21,0.1);border-color:rgba(245,124,21,0.3);color:#f57c15;}
                .script-cp-icon{color:#f57c15;font-size:8px;}
                .script-process{background:#fff;padding:90px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .script-process-inner{max-width:900px;margin:0 auto;}
                .script-steps{display:flex;flex-direction:column;}
                .script-step-row{display:flex;gap:24px;align-items:stretch;}
                .script-step-row:hover .script-step-node{background:#f57c15;}
                .script-step-row:hover .script-step-num{color:#fff;}
                .script-step-left{display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:52px;}
                .script-step-node{width:52px;height:52px;border-radius:50%;background:#fff;border:2px solid #f57c15;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background 0.3s;}
                .script-step-num{font-family:'Oswald',sans-serif;font-size:14px;font-weight:700;color:#f57c15;transition:color 0.3s;}
                .script-step-vline{width:2px;flex:1;background:rgba(245,124,21,0.15);min-height:24px;}
                .script-step-body{padding:10px 0 36px;flex:1;}
                .script-step-title{font-family:'Oswald',sans-serif;font-size:17px;font-weight:600;color:#111;text-transform:uppercase;margin:0 0 8px 0;}
                .script-step-desc{font-size:13.5px;color:#666;line-height:1.65;margin:0;}
                .script-faq{background:#f9f8f7;padding:90px 24px;}
                .script-faq-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:320px 1fr;gap:70px;align-items:start;}
                .script-faq-item{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;margin-bottom:6px;overflow:hidden;transition:border-color 0.25s;}
                .script-faq-item[open]{border-color:rgba(245,124,21,0.25);}
                .script-faq-q{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 20px;font-family:'Raleway',sans-serif;font-size:13.5px;font-weight:700;color:#111;cursor:pointer;list-style:none;user-select:none;}
                .script-faq-q::-webkit-details-marker{display:none;}
                .script-faq-icon{font-size:20px;font-weight:300;color:#f57c15;flex-shrink:0;line-height:1;transition:transform 0.25s;}
                .script-faq-item[open] .script-faq-icon{transform:rotate(45deg);}
                .script-faq-a{padding:14px 20px 18px;font-size:13px;color:#666;line-height:1.7;margin:0;border-top:1px solid rgba(0,0,0,0.04);}
                .script-related{background:#fff;padding:70px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .script-related-inner{max-width:1200px;margin:0 auto;}
                .script-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
                .script-cta{background:#060606;padding:110px 24px;text-align:center;position:relative;overflow:hidden;}
                .script-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(245,124,21,0.07) 0%,transparent 70%);pointer-events:none;}
                .script-cta-inner{position:relative;z-index:2;}
                .script-cta-title{font-family:'Oswald',sans-serif;font-size:clamp(2.5rem,5vw,4.2rem);color:#fff;text-transform:uppercase;line-height:1.05;margin:8px 0 20px 0;letter-spacing:-0.5px;}
                .script-cta-sub{font-size:14.5px;color:rgba(255,255,255,0.38);max-width:460px;margin:0 auto 36px;line-height:1.7;}
                .script-cta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:nowrap;align-items:center;}
                .script-cta .script-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .script-cta .script-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                @media (max-width:1024px){
                    .script-hero-grid{grid-template-columns:1fr;}
                    .script-hero-sidebar{padding-top:0;display:grid;grid-template-columns:repeat(4,1fr);}
                    .script-intro-inner{grid-template-columns:1fr;gap:40px;}
                    .script-faq-inner{grid-template-columns:1fr;gap:40px;}
                }
                @media (max-width:768px){
                    .script-features-grid{grid-template-columns:1fr;}
                    .script-related-grid{grid-template-columns:repeat(2,1fr);}
                    .script-hero-sidebar{grid-template-columns:repeat(2,1fr);}
                }
                @media (max-width:520px){
                    .script-related-grid{grid-template-columns:1fr;}
                    .script-cta-btns{flex-wrap:wrap;}
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