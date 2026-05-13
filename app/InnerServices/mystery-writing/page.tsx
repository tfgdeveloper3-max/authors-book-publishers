"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const relatedServices = [
    { label: "Book Writing", slug: "book-writing" },
    { label: "Fiction Writing", slug: "fiction-writing" },
    { label: "Horror Writing", slug: "horror-writing" },
    { label: "Historical Writing", slug: "historical-writing" },
    { label: "Book Editing", slug: "book-editing" },
    { label: "Book Publishing", slug: "book-publishing" },
];

const categories = [
    { icon: "✦", label: "Cosy Mystery" },
    { icon: "✦", label: "Hardboiled Detective" },
    { icon: "✦", label: "Police Procedural" },
    { icon: "✦", label: "Legal Thriller" },
    { icon: "✦", label: "Psychological Thriller" },
    { icon: "✦", label: "Noir" },
    { icon: "✦", label: "Amateur Sleuth" },
    { icon: "✦", label: "Forensic Mystery" },
    { icon: "✦", label: "Historical Mystery" },
    { icon: "✦", label: "Locked Room Mystery" },
    { icon: "✦", label: "Scandinavian Noir" },
    { icon: "✦", label: "Domestic Thriller" },
];

const features = [
    { num: "01", title: "Fair-Play Mystery Construction", desc: "Every clue is planted in plain sight. Our mysteries follow the classic fair-play tradition — readers have all the information needed to solve the puzzle alongside the detective." },
    { num: "02", title: "Complex Plot Architecture", desc: "We construct multi-layered plots with genuine suspects, convincing motives, planted evidence, and red herrings that mislead without cheating." },
    { num: "03", title: "Iconic Detective Creation", desc: "A great mystery lives in its detective. We develop protagonists with distinctive methods, compelling backstories, and the quirks that make readers demand a series." },
    { num: "04", title: "Pacing & Tension Mastery", desc: "Mystery demands perfect pacing — revelation and withholding in precise measure. We know exactly when to accelerate, when to linger, and when to blindside." },
    { num: "05", title: "Sub-Genre Expertise", desc: "From Golden Age cosy mysteries to Scandinavian noir, legal thrillers to psychological suspense — our writers are specialists across every mystery sub-genre." },
    { num: "06", title: "Series Development", desc: "Great mystery series are built on recurring characters and evolving worlds. We develop the bible, character arcs, and overarching mythology for multi-book series." },
];

const steps = [
    { num: "01", title: "Crime & Concept Session", desc: "We map out the central crime, the detective, the suspects, and the core mystery puzzle that will drive the entire novel." },
    { num: "02", title: "Plot Architecture", desc: "A meticulous chapter-by-chapter outline is built — with every clue, red herring, and revelation mapped and timed precisely." },
    { num: "03", title: "Manuscript Drafting", desc: "The novel is written with careful attention to pacing, clue placement, and the escalating tension that drives readers forward." },
    { num: "04", title: "Consistency Review", desc: "Every clue, timeline, and character detail is audited for continuity and fair-play compliance before final delivery." },
    { num: "05", title: "Final Delivery", desc: "A polished, publish-ready mystery delivered with full copyright — ready for agents, publishers, or self-publishing." },
];

const faqs = [
    { q: "What makes a mystery fair-play vs. a cheat?", a: "A fair-play mystery gives readers all the clues needed to solve the case — though disguised well enough that most will not. A cheat withholds crucial information until the reveal. All our mysteries are built to fair-play standards." },
    { q: "How do you plot a mystery without losing track of clues?", a: "We use detailed plotting documents that track every clue, its placement, who knows what and when, and the timeline from multiple perspectives — ensuring complete internal consistency." },
    { q: "Can you write a mystery series with the same detective?", a: "Yes — and we love to. We develop comprehensive character bibles and series arcs that let recurring detectives grow and accumulate history across multiple books." },
    { q: "Do you write cosy mysteries as well as dark thrillers?", a: "Absolutely. Our mystery writers span the full spectrum from warm, humorous cosy village mysteries to dark, psychologically intense noir thrillers." },
    { q: "Can you continue a mystery series I have already started?", a: "Yes. We analyze existing books for voice, style, and clue-placement patterns — then continue the series seamlessly in the established manner." },
];

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="mystery-page">

                {/* HERO */}
                <section className="mystery-hero">
                    <div className="mystery-hero-bg" />
                    <div className="mystery-hero-grid">
                        <div className="mystery-hero-inner">
                            <nav className="mystery-breadcrumb">
                                <Link href="/" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Home</Link>
                                <span className="mystery-bc-sep">›</span>
                                <Link href="/services" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Services</Link>
                                <span className="mystery-bc-sep">›</span>
                                <span className="mystery-bc-current">Mystery Writing</span>
                            </nav>
                            <div className="mystery-hero-tag"><span className="mystery-tag-dot" />Writing Services</div>
                            <h1 className="mystery-hero-title">Professional<br /><em className="mystery-hero-em">Mystery Writing</em><br />Services</h1>
                            <p className="mystery-hero-sub">From cosy village whodunits to hardboiled noir thrillers — our mystery writing specialists craft plots of labyrinthine complexity, unforgettable detectives, and the satisfying reveals that make readers immediately want to re-read from page one.</p>
                            <div className="mystery-hero-actions">
                                <button className="mystery-btn-orange">Get A Free Quote</button>
                                <button className="mystery-btn-outline">(646) 298 6438</button>
                            </div>
                            <div className="mystery-trust-row">
                                <span className="mystery-trust-pill">✓ 100% Confidential</span>
                                <span className="mystery-trust-pill">✓ Full Copyright Yours</span>
                                <span className="mystery-trust-pill">✓ Unlimited Revisions</span>
                                <span className="mystery-trust-pill">✓ NDA Signed</span>
                            </div>
                        </div>
                        <div className="mystery-hero-sidebar">
                            <div className="mystery-sidebar-card"><span className="mystery-sc-val">5,000+</span><span className="mystery-sc-label">Projects Delivered</span></div>
                            <div className="mystery-sidebar-card"><span className="mystery-sc-val">400+</span><span className="mystery-sc-label">Publishing Platforms</span></div>
                            <div className="mystery-sidebar-card"><span className="mystery-sc-val">98%</span><span className="mystery-sc-label">Client Satisfaction</span></div>
                            <div className="mystery-sidebar-card"><span className="mystery-sc-val">15+</span><span className="mystery-sc-label">Years Experience</span></div>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="mystery-intro">
                    <div className="mystery-intro-inner">
                        <div className="mystery-intro-text">
                            <span className="mystery-eyebrow">What We Do</span>
                            <h2 className="mystery-section-title">Every Clue Placed.<br /><span className="mystery-hl">Every Twist Earned.</span></h2>
                            <p className="mystery-body-text">Mystery is the most structurally demanding of all fiction genres. Every clue must be planted fairly. Every red herring must misdirect without cheating. Every revelation must feel both surprising and inevitable. These are not skills that can be faked — they require a deep understanding of the genre's architecture that our specialist mystery writers have spent years mastering.</p>
                            <p className="mystery-body-text">Whether your detective is a brilliant amateur, a hardboiled PI, or a forensic investigator, our writers build mysteries of the highest craft — where the puzzle is ingenious, the characters are compelling, and the solution is deeply satisfying.</p>
                            <button className="mystery-btn-orange" style={{ marginTop: "8px" }}>Start Your Mystery Novel</button>
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
                <section className="mystery-features">
                    <div className="mystery-features-inner">
                        <div className="mystery-section-head">
                            <span className="mystery-eyebrow">Why Choose Us</span>
                            <h2 className="mystery-section-title">The Belmont <span className="mystery-hl">Difference</span></h2>
                        </div>
                        <div className="mystery-features-grid">
                            {features.map((f) => (
                                <div key={f.num} className="mystery-feature-card">
                                    <span className="mystery-fc-num">{f.num}</span>
                                    <h3 className="mystery-fc-title">{f.title}</h3>
                                    <p className="mystery-fc-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CATEGORIES */}
                <section className="mystery-cats">
                    <div className="mystery-cats-inner">
                        <div className="mystery-section-head mystery-head-center">
                            <span className="mystery-eyebrow">Sub-Genres We Master</span>
                            <h2 className="mystery-section-title">Experts In Every <span className="mystery-hl">Mystery Sub-Genre</span></h2>
                            <p className="mystery-cats-sub">From cosy to noir — our mystery writers are passionate genre specialists with published track records.</p>
                        </div>
                        <div className="mystery-cats-grid">
                            {categories.map((c) => (
                                <div key={c.label} className="mystery-cat-pill">
                                    <span className="mystery-cp-icon">{c.icon}</span>{c.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="mystery-process">
                    <div className="mystery-process-inner">
                        <div className="mystery-section-head mystery-head-center">
                            <span className="mystery-eyebrow">How It Works</span>
                            <h2 className="mystery-section-title">Our <span className="mystery-hl">Writing Process</span></h2>
                        </div>
                        <div className="mystery-steps">
                            {steps.map((s, i) => (
                                <div key={s.num} className="mystery-step-row">
                                    <div className="mystery-step-left">
                                        <div className="mystery-step-node"><span className="mystery-step-num">{s.num}</span></div>
                                        {i < steps.length - 1 && <div className="mystery-step-vline" />}
                                    </div>
                                    <div className="mystery-step-body">
                                        <h3 className="mystery-step-title">{s.title}</h3>
                                        <p className="mystery-step-desc">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="mystery-faq">
                    <div className="mystery-faq-inner">
                        <div className="mystery-faq-left">
                            <span className="mystery-eyebrow">FAQ</span>
                            <h2 className="mystery-section-title">Common <span className="mystery-hl">Questions</span></h2>
                            <p className="mystery-body-text" style={{ marginTop: "16px" }}>Still have questions? Our team is available 24/7 for a free consultation.</p>
                            <button className="mystery-btn-orange" style={{ marginTop: "24px" }}>Talk To An Expert</button>
                        </div>
                        <div className="mystery-faq-right">
                            {faqs.map((item, i) => (
                                <details key={i} className="mystery-faq-item">
                                    <summary className="mystery-faq-q">{item.q}<span className="mystery-faq-icon">+</span></summary>
                                    <p className="mystery-faq-a">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED */}
                <section className="mystery-related">
                    <div className="mystery-related-inner">
                        <span className="mystery-eyebrow">Explore More</span>
                        <h2 className="mystery-section-title" style={{ marginBottom: "32px" }}>Related <span className="mystery-hl">Services</span></h2>
                        <div className="mystery-related-grid">
                            {relatedServices.map((rs) => (
                                <Link key={rs.slug} href={`/InnerServices/${rs.slug}`}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "#fafafa", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "8px", textDecoration: "none", transition: "all 0.25s" }}
                                    onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "#f57c15"; el.style.background = "rgba(245,124,21,0.03)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 6px 18px rgba(245,124,21,0.08)"; const a = el.querySelector(".mystery-rca") as HTMLElement; if (a) { a.style.opacity = "1"; a.style.transform = "translate(0,0)"; } }}
                                    onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "rgba(0,0,0,0.07)"; el.style.background = "#fafafa"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; const a = el.querySelector(".mystery-rca") as HTMLElement; if (a) { a.style.opacity = "0"; a.style.transform = "translate(-4px,4px)"; } }}
                                >
                                    <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: "13px", fontWeight: 700, color: "#222" }}>{rs.label}</span>
                                    <span className="mystery-rca" style={{ fontSize: "16px", color: "#f57c15", opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.25s", display: "inline-block" }}>↗</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="mystery-cta">
                    <div className="mystery-cta-inner">
                        <span className="mystery-eyebrow" style={{ color: "rgba(245,124,21,0.8)" }}>Get Started Today</span>
                        <h2 className="mystery-cta-title">Ready To Craft Your<br /><span className="mystery-hl">Perfect Mystery?</span></h2>
                        <p className="mystery-cta-sub">Consult with our mystery writing specialists. We will help you build a plot so clever, readers will never see the ending coming.</p>
                        <div className="mystery-cta-btns">
                            <button className="mystery-btn-orange mystery-btn-lg">Get A Free Quote</button>
                            <button className="mystery-btn-outline mystery-btn-lg">(646) 298 6438</button>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                .mystery-page{font-family:'Raleway',sans-serif;color:#111;background:#fff;}
                .mystery-eyebrow{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#f57c15;margin-bottom:14px;}
                .mystery-section-title{font-family:'Oswald',sans-serif;font-size:clamp(1.9rem,3.5vw,2.8rem);color:#111;text-transform:uppercase;line-height:1.1;margin:0 0 20px 0;letter-spacing:-0.3px;}
                .mystery-hl{color:#f57c15;}
                .mystery-body-text{font-size:14px;color:#555;line-height:1.75;margin:0 0 16px 0;}
                .mystery-section-head{margin-bottom:52px;}
                .mystery-head-center{text-align:center;}
                .mystery-btn-orange{display:inline-flex;align-items:center;gap:8px;background:#f57c15;color:#fff;border:none;padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background 0.25s,transform 0.2s,box-shadow 0.25s;box-shadow:0 5px 18px rgba(245,124,21,0.28);}
                .mystery-btn-orange:hover{background:#d96c0d;transform:translateY(-2px);box-shadow:0 8px 24px rgba(245,124,21,0.35);}
                .mystery-btn-outline{display:inline-flex;align-items:center;background:transparent;color:#333;border:1.5px solid rgba(0,0,0,0.18);padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:border-color 0.25s,color 0.25s;}
                .mystery-btn-outline:hover{border-color:#f57c15;color:#f57c15;}
                .mystery-btn-lg{padding:15px 36px;font-size:12.5px;}
                .mystery-hero{background:#060606;padding:60px 24px 80px;position:relative;overflow:hidden;width:100%;}
                .mystery-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 55% 50% at 30% 50%,rgba(245,124,21,0.07) 0%,transparent 65%),radial-gradient(ellipse 40% 60% at 80% 20%,rgba(245,124,21,0.04) 0%,transparent 60%);pointer-events:none;}
                .mystery-hero-grid{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:1fr 260px;gap:40px;align-items:start;position:relative;z-index:2;}
                .mystery-hero-inner{padding-top:10px;}
                .mystery-breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:28px;}
                .mystery-bc-sep{color:rgba(255,255,255,0.2);font-size:11px;}
                .mystery-bc-current{font-size:11px;font-weight:700;color:#f57c15;letter-spacing:0.5px;}
                .mystery-hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(245,124,21,0.08);border:1px solid rgba(245,124,21,0.2);border-radius:30px;padding:6px 16px;font-size:10.5px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:#f57c15;margin-bottom:28px;}
                .mystery-tag-dot{width:5px;height:5px;border-radius:50%;background:#f57c15;flex-shrink:0;}
                .mystery-hero-title{font-family:'Oswald',sans-serif;font-size:clamp(2.8rem,6vw,5.2rem);color:#fff;line-height:0.95;text-transform:uppercase;letter-spacing:-1px;margin:0 0 24px 0;}
                .mystery-hero-em{color:#f57c15;font-style:italic;}
                .mystery-hero-sub{font-size:14.5px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:520px;margin:0 0 36px 0;font-weight:400;}
                .mystery-hero-actions{display:flex;flex-wrap:nowrap;gap:12px;margin-bottom:32px;align-items:center;}
                .mystery-hero-actions .mystery-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .mystery-hero-actions .mystery-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                .mystery-trust-row{display:flex;flex-wrap:wrap;gap:8px;}
                .mystery-trust-pill{font-size:11px;font-weight:700;color:rgba(255,255,255,0.45);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:6px 12px;letter-spacing:0.3px;}
                .mystery-hero-sidebar{display:flex;flex-direction:column;gap:3px;padding-top:64px;}
                .mystery-sidebar-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px 18px;display:flex;flex-direction:column;gap:4px;transition:border-color 0.3s;}
                .mystery-sidebar-card:hover{border-color:rgba(245,124,21,0.25);}
                .mystery-sc-val{font-family:'Oswald',sans-serif;font-size:28px;font-weight:700;color:#f57c15;line-height:1;}
                .mystery-sc-label{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}
                .mystery-intro{background:#fff;padding:90px 24px;border-bottom:1px solid rgba(0,0,0,0.06);}
                .mystery-intro-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 340px;gap:70px;align-items:center;}
                .mystery-visual-box{background:#060606;border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:32px 28px;position:relative;overflow:hidden;}
                .mystery-vb-accent{position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#f57c15,rgba(245,124,21,0.3));}
                .mystery-vb-line{position:absolute;top:0;left:28px;width:1px;bottom:0;background:rgba(245,124,21,0.08);}
                .mystery-vb-content{display:flex;flex-direction:column;gap:4px;padding:16px 0 16px 20px;}
                .mystery-vb-num{font-family:'Oswald',sans-serif;font-size:32px;font-weight:700;color:#f57c15;line-height:1;}
                .mystery-vb-label{font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}
                .mystery-vb-divider{height:1px;background:rgba(255,255,255,0.05);}
                .mystery-features{background:#f9f8f7;padding:90px 24px;}
                .mystery-features-inner{max-width:1200px;margin:0 auto;}
                .mystery-features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
                .mystery-feature-card{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;padding:32px 28px;transition:border-color 0.3s,box-shadow 0.3s,transform 0.3s;}
                .mystery-feature-card:hover{border-color:rgba(245,124,21,0.25);box-shadow:0 10px 30px rgba(245,124,21,0.07);transform:translateY(-3px);}
                .mystery-fc-num{display:block;font-family:'Oswald',sans-serif;font-size:36px;font-weight:700;color:rgba(245,124,21,0.12);line-height:1;margin-bottom:-6px;user-select:none;}
                .mystery-fc-title{font-family:'Oswald',sans-serif;font-size:16px;font-weight:600;color:#111;text-transform:uppercase;letter-spacing:0.3px;margin:0 0 12px 0;}
                .mystery-fc-desc{font-size:13px;color:#666;line-height:1.7;margin:0;}
                .mystery-cats{background:#060606;padding:90px 24px;}
                .mystery-cats-inner{max-width:1100px;margin:0 auto;}
                .mystery-cats .mystery-section-title{color:#fff;}
                .mystery-cats-sub{font-size:13.5px;color:rgba(255,255,255,0.35);margin:0;}
                .mystery-cats-grid{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;}
                .mystery-cat-pill{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:6px;font-size:12.5px;font-weight:600;color:rgba(255,255,255,0.65);transition:all 0.25s;cursor:default;}
                .mystery-cat-pill:hover{background:rgba(245,124,21,0.1);border-color:rgba(245,124,21,0.3);color:#f57c15;}
                .mystery-cp-icon{color:#f57c15;font-size:8px;}
                .mystery-process{background:#fff;padding:90px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .mystery-process-inner{max-width:900px;margin:0 auto;}
                .mystery-steps{display:flex;flex-direction:column;}
                .mystery-step-row{display:flex;gap:24px;align-items:stretch;}
                .mystery-step-row:hover .mystery-step-node{background:#f57c15;}
                .mystery-step-row:hover .mystery-step-num{color:#fff;}
                .mystery-step-left{display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:52px;}
                .mystery-step-node{width:52px;height:52px;border-radius:50%;background:#fff;border:2px solid #f57c15;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background 0.3s;}
                .mystery-step-num{font-family:'Oswald',sans-serif;font-size:14px;font-weight:700;color:#f57c15;transition:color 0.3s;}
                .mystery-step-vline{width:2px;flex:1;background:rgba(245,124,21,0.15);min-height:24px;}
                .mystery-step-body{padding:10px 0 36px;flex:1;}
                .mystery-step-title{font-family:'Oswald',sans-serif;font-size:17px;font-weight:600;color:#111;text-transform:uppercase;margin:0 0 8px 0;}
                .mystery-step-desc{font-size:13.5px;color:#666;line-height:1.65;margin:0;}
                .mystery-faq{background:#f9f8f7;padding:90px 24px;}
                .mystery-faq-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:320px 1fr;gap:70px;align-items:start;}
                .mystery-faq-item{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;margin-bottom:6px;overflow:hidden;transition:border-color 0.25s;}
                .mystery-faq-item[open]{border-color:rgba(245,124,21,0.25);}
                .mystery-faq-q{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 20px;font-family:'Raleway',sans-serif;font-size:13.5px;font-weight:700;color:#111;cursor:pointer;list-style:none;user-select:none;}
                .mystery-faq-q::-webkit-details-marker{display:none;}
                .mystery-faq-icon{font-size:20px;font-weight:300;color:#f57c15;flex-shrink:0;line-height:1;transition:transform 0.25s;}
                .mystery-faq-item[open] .mystery-faq-icon{transform:rotate(45deg);}
                .mystery-faq-a{padding:14px 20px 18px;font-size:13px;color:#666;line-height:1.7;margin:0;border-top:1px solid rgba(0,0,0,0.04);}
                .mystery-related{background:#fff;padding:70px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .mystery-related-inner{max-width:1200px;margin:0 auto;}
                .mystery-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
                .mystery-cta{background:#060606;padding:110px 24px;text-align:center;position:relative;overflow:hidden;}
                .mystery-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(245,124,21,0.07) 0%,transparent 70%);pointer-events:none;}
                .mystery-cta-inner{position:relative;z-index:2;}
                .mystery-cta-title{font-family:'Oswald',sans-serif;font-size:clamp(2.5rem,5vw,4.2rem);color:#fff;text-transform:uppercase;line-height:1.05;margin:8px 0 20px 0;letter-spacing:-0.5px;}
                .mystery-cta-sub{font-size:14.5px;color:rgba(255,255,255,0.38);max-width:460px;margin:0 auto 36px;line-height:1.7;}
                .mystery-cta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:nowrap;align-items:center;}
                .mystery-cta .mystery-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .mystery-cta .mystery-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                @media (max-width:1024px){
                    .mystery-hero-grid{grid-template-columns:1fr;}
                    .mystery-hero-sidebar{padding-top:0;display:grid;grid-template-columns:repeat(4,1fr);}
                    .mystery-intro-inner{grid-template-columns:1fr;gap:40px;}
                    .mystery-faq-inner{grid-template-columns:1fr;gap:40px;}
                }
                @media (max-width:768px){
                    .mystery-features-grid{grid-template-columns:1fr;}
                    .mystery-related-grid{grid-template-columns:repeat(2,1fr);}
                    .mystery-hero-sidebar{grid-template-columns:repeat(2,1fr);}
                }
                @media (max-width:520px){
                    .mystery-related-grid{grid-template-columns:1fr;}
                    .mystery-cta-btns{flex-wrap:wrap;}
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