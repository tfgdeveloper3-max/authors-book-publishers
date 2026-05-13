"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const relatedServices = [
    { label: "Book Writing", slug: "book-writing" },
    { label: "Ghostwriting", slug: "ghostwriting" },
    { label: "Sci-Fi Writing", slug: "sci-fi-writing" },
    { label: "Mystery Writing", slug: "mystery-writing" },
    { label: "Book Editing", slug: "book-editing" },
    { label: "Book Publishing", slug: "book-publishing" },
];

const categories = [
    { icon: "✦", label: "Literary Fiction" },
    { icon: "✦", label: "Commercial Fiction" },
    { icon: "✦", label: "Romance" },
    { icon: "✦", label: "Thriller & Suspense" },
    { icon: "✦", label: "Historical Fiction" },
    { icon: "✦", label: "Magical Realism" },
    { icon: "✦", label: "Contemporary Fiction" },
    { icon: "✦", label: "Women's Fiction" },
    { icon: "✦", label: "Crime Fiction" },
    { icon: "✦", label: "Psychological Fiction" },
    { icon: "✦", label: "Upmarket Fiction" },
    { icon: "✦", label: "Debut Novel Development" },
];

const features = [
    { num: "01", title: "Character-Driven Storytelling", desc: "We build characters so vivid and complex they feel like real people — with contradictions, desires, fears, and growth arcs that power the entire narrative." },
    { num: "02", title: "Plot Architecture", desc: "Every scene earns its place. We construct plots with escalating tension, satisfying reversals, and inevitable-yet-surprising resolutions that keep readers turning pages." },
    { num: "03", title: "Voice & Style Mastery", desc: "Whether your story demands spare minimalism, lush prose, or an unreliable narrator — we match the style to the story perfectly." },
    { num: "04", title: "Genre Expertise", desc: "From literary fiction to commercial thrillers, romance to magical realism — our writers are genuine genre specialists with published track records." },
    { num: "05", title: "Full Copyright Ownership", desc: "The story, world, and characters are entirely yours. Full IP transfer on delivery with no royalties or credits." },
    { num: "06", title: "Agent-Ready Manuscripts", desc: "We deliver manuscripts polished to the standard required by top literary agents and publishers — with query letter support available." },
];

const steps = [
    { num: "01", title: "Story Discovery", desc: "We explore your concept, characters, themes, target readership, and the emotional experience you want the novel to create." },
    { num: "02", title: "Character & Plot Development", desc: "Detailed character profiles and a scene-by-scene plot outline are developed and approved before writing begins." },
    { num: "03", title: "First Draft", desc: "The novel is written chapter by chapter with milestone deliveries and your feedback integrated at every stage." },
    { num: "04", title: "Revision Rounds", desc: "We refine for pacing, voice, consistency, and emotional impact — as many rounds as needed until the manuscript sings." },
    { num: "05", title: "Final Delivery", desc: "A polished, agent-ready novel delivered with full copyright transfer and optional query letter support." },
];

const faqs = [
    { q: "What if I only have a vague idea?", a: "That is where we excel. Many of our best novels started as a single character or emotional tone. Our story development process builds a full, compelling narrative from the seed of an idea." },
    { q: "Can you write in a specific author's style?", a: "We capture the spirit and technique of authors you admire without copying their work — creating a style inspired by your influences but uniquely your own." },
    { q: "Will the novel be ready to submit to literary agents?", a: "Yes. Our manuscripts are polished to industry submission standards. We also assist with synopsis writing and query letter development." },
    { q: "Can you take over a half-written manuscript?", a: "Absolutely. We regularly work with partial manuscripts — analyzing what exists and seamlessly continuing in the established voice and style." },
    { q: "How involved will I be in the writing process?", a: "As involved as you want. Some clients co-create at every stage; others prefer to review completed drafts. We adapt entirely to your preference." },
];

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="fiction-page">

                {/* HERO */}
                <section className="fiction-hero">
                    <div className="fiction-hero-bg" />
                    <div className="fiction-hero-grid">
                        <div className="fiction-hero-inner">
                            <nav className="fiction-breadcrumb">
                                <Link href="/" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Home</Link>
                                <span className="fiction-bc-sep">›</span>
                                <Link href="/services" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Services</Link>
                                <span className="fiction-bc-sep">›</span>
                                <span className="fiction-bc-current">Fiction Writing</span>
                            </nav>
                            <div className="fiction-hero-tag"><span className="fiction-tag-dot" />Writing Services</div>
                            <h1 className="fiction-hero-title">Professional<br /><em className="fiction-hero-em">Fiction Writing</em><br />Services</h1>
                            <p className="fiction-hero-sub">From intimate literary novels to sweeping commercial epics — our professional fiction writers craft stories with unforgettable characters, propulsive plots, and the emotional depth that stays with readers long after the final page.</p>
                            <div className="fiction-hero-actions">
                                <button className="fiction-btn-orange">Get A Free Quote</button>
                                <button className="fiction-btn-outline">(646) 298 6438</button>
                            </div>
                            <div className="fiction-trust-row">
                                <span className="fiction-trust-pill">✓ 100% Confidential</span>
                                <span className="fiction-trust-pill">✓ Full Copyright Yours</span>
                                <span className="fiction-trust-pill">✓ Unlimited Revisions</span>
                                <span className="fiction-trust-pill">✓ NDA Signed</span>
                            </div>
                        </div>
                        <div className="fiction-hero-sidebar">
                            <div className="fiction-sidebar-card"><span className="fiction-sc-val">5,000+</span><span className="fiction-sc-label">Projects Delivered</span></div>
                            <div className="fiction-sidebar-card"><span className="fiction-sc-val">400+</span><span className="fiction-sc-label">Publishing Platforms</span></div>
                            <div className="fiction-sidebar-card"><span className="fiction-sc-val">98%</span><span className="fiction-sc-label">Client Satisfaction</span></div>
                            <div className="fiction-sidebar-card"><span className="fiction-sc-val">15+</span><span className="fiction-sc-label">Years Experience</span></div>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="fiction-intro">
                    <div className="fiction-intro-inner">
                        <div className="fiction-intro-text">
                            <span className="fiction-eyebrow">What We Do</span>
                            <h2 className="fiction-section-title">Great Fiction Does Not Just<br /><span className="fiction-hl">Entertain — It Transforms</span></h2>
                            <p className="fiction-body-text">Fiction is the most powerful empathy machine ever invented. A great novel can change how a reader sees themselves, others, and the world. Our fiction writers understand this responsibility — bringing technical craft, emotional intelligence, and genuine storytelling instinct to every project.</p>
                            <p className="fiction-body-text">Whether you have a fully-formed plot, a single compelling character, or just a feeling you want to capture, we work with your vision to create a manuscript that resonates with agents, publishers, and readers at the highest level.</p>
                            <button className="fiction-btn-orange" style={{ marginTop: "8px" }}>Start Your Novel</button>
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
                <section className="fiction-features">
                    <div className="fiction-features-inner">
                        <div className="fiction-section-head">
                            <span className="fiction-eyebrow">Why Choose Us</span>
                            <h2 className="fiction-section-title">The Belmont <span className="fiction-hl">Difference</span></h2>
                        </div>
                        <div className="fiction-features-grid">
                            {features.map((f) => (
                                <div key={f.num} className="fiction-feature-card">
                                    <span className="fiction-fc-num">{f.num}</span>
                                    <h3 className="fiction-fc-title">{f.title}</h3>
                                    <p className="fiction-fc-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CATEGORIES */}
                <section className="fiction-cats">
                    <div className="fiction-cats-inner">
                        <div className="fiction-section-head fiction-head-center">
                            <span className="fiction-eyebrow">Genres We Write</span>
                            <h2 className="fiction-section-title">We Write Across All <span className="fiction-hl">Fiction Genres</span></h2>
                            <p className="fiction-cats-sub">Our roster of fiction writers spans every major genre with genuine expertise and passion.</p>
                        </div>
                        <div className="fiction-cats-grid">
                            {categories.map((c) => (
                                <div key={c.label} className="fiction-cat-pill">
                                    <span className="fiction-cp-icon">{c.icon}</span>{c.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="fiction-process">
                    <div className="fiction-process-inner">
                        <div className="fiction-section-head fiction-head-center">
                            <span className="fiction-eyebrow">How It Works</span>
                            <h2 className="fiction-section-title">Our <span className="fiction-hl">Writing Process</span></h2>
                        </div>
                        <div className="fiction-steps">
                            {steps.map((s, i) => (
                                <div key={s.num} className="fiction-step-row">
                                    <div className="fiction-step-left">
                                        <div className="fiction-step-node"><span className="fiction-step-num">{s.num}</span></div>
                                        {i < steps.length - 1 && <div className="fiction-step-vline" />}
                                    </div>
                                    <div className="fiction-step-body">
                                        <h3 className="fiction-step-title">{s.title}</h3>
                                        <p className="fiction-step-desc">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="fiction-faq">
                    <div className="fiction-faq-inner">
                        <div className="fiction-faq-left">
                            <span className="fiction-eyebrow">FAQ</span>
                            <h2 className="fiction-section-title">Common <span className="fiction-hl">Questions</span></h2>
                            <p className="fiction-body-text" style={{ marginTop: "16px" }}>Still have questions? Our team is available 24/7 for a free consultation.</p>
                            <button className="fiction-btn-orange" style={{ marginTop: "24px" }}>Talk To An Expert</button>
                        </div>
                        <div className="fiction-faq-right">
                            {faqs.map((item, i) => (
                                <details key={i} className="fiction-faq-item">
                                    <summary className="fiction-faq-q">{item.q}<span className="fiction-faq-icon">+</span></summary>
                                    <p className="fiction-faq-a">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED */}
                <section className="fiction-related">
                    <div className="fiction-related-inner">
                        <span className="fiction-eyebrow">Explore More</span>
                        <h2 className="fiction-section-title" style={{ marginBottom: "32px" }}>Related <span className="fiction-hl">Services</span></h2>
                        <div className="fiction-related-grid">
                            {relatedServices.map((rs) => (
                                <Link key={rs.slug} href={`/InnerServices/${rs.slug}`}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "#fafafa", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "8px", textDecoration: "none", transition: "all 0.25s" }}
                                    onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "#f57c15"; el.style.background = "rgba(245,124,21,0.03)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 6px 18px rgba(245,124,21,0.08)"; const a = el.querySelector(".fiction-rca") as HTMLElement; if (a) { a.style.opacity = "1"; a.style.transform = "translate(0,0)"; } }}
                                    onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "rgba(0,0,0,0.07)"; el.style.background = "#fafafa"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; const a = el.querySelector(".fiction-rca") as HTMLElement; if (a) { a.style.opacity = "0"; a.style.transform = "translate(-4px,4px)"; } }}
                                >
                                    <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: "13px", fontWeight: 700, color: "#222" }}>{rs.label}</span>
                                    <span className="fiction-rca" style={{ fontSize: "16px", color: "#f57c15", opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.25s", display: "inline-block" }}>↗</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="fiction-cta">
                    <div className="fiction-cta-inner">
                        <span className="fiction-eyebrow" style={{ color: "rgba(245,124,21,0.8)" }}>Get Started Today</span>
                        <h2 className="fiction-cta-title">Ready To Write Your<br /><span className="fiction-hl">Novel?</span></h2>
                        <p className="fiction-cta-sub">Schedule a free consultation with our fiction writing team. Your story is ready to be written.</p>
                        <div className="fiction-cta-btns">
                            <button className="fiction-btn-orange fiction-btn-lg">Get A Free Quote</button>
                            <button className="fiction-btn-outline fiction-btn-lg">(646) 298 6438</button>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                .fiction-page{font-family:'Raleway',sans-serif;color:#111;background:#fff;}
                .fiction-eyebrow{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#f57c15;margin-bottom:14px;}
                .fiction-section-title{font-family:'Oswald',sans-serif;font-size:clamp(1.9rem,3.5vw,2.8rem);color:#111;text-transform:uppercase;line-height:1.1;margin:0 0 20px 0;letter-spacing:-0.3px;}
                .fiction-hl{color:#f57c15;}
                .fiction-body-text{font-size:14px;color:#555;line-height:1.75;margin:0 0 16px 0;}
                .fiction-section-head{margin-bottom:52px;}
                .fiction-head-center{text-align:center;}
                .fiction-btn-orange{display:inline-flex;align-items:center;gap:8px;background:#f57c15;color:#fff;border:none;padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background 0.25s,transform 0.2s,box-shadow 0.25s;box-shadow:0 5px 18px rgba(245,124,21,0.28);}
                .fiction-btn-orange:hover{background:#d96c0d;transform:translateY(-2px);box-shadow:0 8px 24px rgba(245,124,21,0.35);}
                .fiction-btn-outline{display:inline-flex;align-items:center;background:transparent;color:#333;border:1.5px solid rgba(0,0,0,0.18);padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:border-color 0.25s,color 0.25s;}
                .fiction-btn-outline:hover{border-color:#f57c15;color:#f57c15;}
                .fiction-btn-lg{padding:15px 36px;font-size:12.5px;}
                .fiction-hero{background:#060606;padding:60px 24px 80px;position:relative;overflow:hidden;width:100%;}
                .fiction-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 55% 50% at 30% 50%,rgba(245,124,21,0.07) 0%,transparent 65%),radial-gradient(ellipse 40% 60% at 80% 20%,rgba(245,124,21,0.04) 0%,transparent 60%);pointer-events:none;}
                .fiction-hero-grid{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:1fr 260px;gap:40px;align-items:start;position:relative;z-index:2;}
                .fiction-hero-inner{padding-top:10px;}
                .fiction-breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:28px;}
                .fiction-bc-sep{color:rgba(255,255,255,0.2);font-size:11px;}
                .fiction-bc-current{font-size:11px;font-weight:700;color:#f57c15;letter-spacing:0.5px;}
                .fiction-hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(245,124,21,0.08);border:1px solid rgba(245,124,21,0.2);border-radius:30px;padding:6px 16px;font-size:10.5px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:#f57c15;margin-bottom:28px;}
                .fiction-tag-dot{width:5px;height:5px;border-radius:50%;background:#f57c15;flex-shrink:0;}
                .fiction-hero-title{font-family:'Oswald',sans-serif;font-size:clamp(2.8rem,6vw,5.2rem);color:#fff;line-height:0.95;text-transform:uppercase;letter-spacing:-1px;margin:0 0 24px 0;}
                .fiction-hero-em{color:#f57c15;font-style:italic;}
                .fiction-hero-sub{font-size:14.5px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:520px;margin:0 0 36px 0;font-weight:400;}
                .fiction-hero-actions{display:flex;flex-wrap:nowrap;gap:12px;margin-bottom:32px;align-items:center;}
                .fiction-hero-actions .fiction-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .fiction-hero-actions .fiction-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                .fiction-trust-row{display:flex;flex-wrap:wrap;gap:8px;}
                .fiction-trust-pill{font-size:11px;font-weight:700;color:rgba(255,255,255,0.45);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:6px 12px;letter-spacing:0.3px;}
                .fiction-hero-sidebar{display:flex;flex-direction:column;gap:3px;padding-top:64px;}
                .fiction-sidebar-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px 18px;display:flex;flex-direction:column;gap:4px;transition:border-color 0.3s;}
                .fiction-sidebar-card:hover{border-color:rgba(245,124,21,0.25);}
                .fiction-sc-val{font-family:'Oswald',sans-serif;font-size:28px;font-weight:700;color:#f57c15;line-height:1;}
                .fiction-sc-label{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}
                .fiction-intro{background:#fff;padding:90px 24px;border-bottom:1px solid rgba(0,0,0,0.06);}
                .fiction-intro-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 340px;gap:70px;align-items:center;}
                .fiction-visual-box{background:#060606;border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:32px 28px;position:relative;overflow:hidden;}
                .fiction-vb-accent{position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#f57c15,rgba(245,124,21,0.3));}
                .fiction-vb-line{position:absolute;top:0;left:28px;width:1px;bottom:0;background:rgba(245,124,21,0.08);}
                .fiction-vb-content{display:flex;flex-direction:column;gap:4px;padding:16px 0 16px 20px;}
                .fiction-vb-num{font-family:'Oswald',sans-serif;font-size:32px;font-weight:700;color:#f57c15;line-height:1;}
                .fiction-vb-label{font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}
                .fiction-vb-divider{height:1px;background:rgba(255,255,255,0.05);}
                .fiction-features{background:#f9f8f7;padding:90px 24px;}
                .fiction-features-inner{max-width:1200px;margin:0 auto;}
                .fiction-features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
                .fiction-feature-card{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;padding:32px 28px;transition:border-color 0.3s,box-shadow 0.3s,transform 0.3s;}
                .fiction-feature-card:hover{border-color:rgba(245,124,21,0.25);box-shadow:0 10px 30px rgba(245,124,21,0.07);transform:translateY(-3px);}
                .fiction-fc-num{display:block;font-family:'Oswald',sans-serif;font-size:36px;font-weight:700;color:rgba(245,124,21,0.12);line-height:1;margin-bottom:-6px;user-select:none;}
                .fiction-fc-title{font-family:'Oswald',sans-serif;font-size:16px;font-weight:600;color:#111;text-transform:uppercase;letter-spacing:0.3px;margin:0 0 12px 0;}
                .fiction-fc-desc{font-size:13px;color:#666;line-height:1.7;margin:0;}
                .fiction-cats{background:#060606;padding:90px 24px;}
                .fiction-cats-inner{max-width:1100px;margin:0 auto;}
                .fiction-cats .fiction-section-title{color:#fff;}
                .fiction-cats-sub{font-size:13.5px;color:rgba(255,255,255,0.35);margin:0;}
                .fiction-cats-grid{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;}
                .fiction-cat-pill{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:6px;font-size:12.5px;font-weight:600;color:rgba(255,255,255,0.65);transition:all 0.25s;cursor:default;}
                .fiction-cat-pill:hover{background:rgba(245,124,21,0.1);border-color:rgba(245,124,21,0.3);color:#f57c15;}
                .fiction-cp-icon{color:#f57c15;font-size:8px;}
                .fiction-process{background:#fff;padding:90px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .fiction-process-inner{max-width:900px;margin:0 auto;}
                .fiction-steps{display:flex;flex-direction:column;}
                .fiction-step-row{display:flex;gap:24px;align-items:stretch;}
                .fiction-step-row:hover .fiction-step-node{background:#f57c15;}
                .fiction-step-row:hover .fiction-step-num{color:#fff;}
                .fiction-step-left{display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:52px;}
                .fiction-step-node{width:52px;height:52px;border-radius:50%;background:#fff;border:2px solid #f57c15;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background 0.3s;}
                .fiction-step-num{font-family:'Oswald',sans-serif;font-size:14px;font-weight:700;color:#f57c15;transition:color 0.3s;}
                .fiction-step-vline{width:2px;flex:1;background:rgba(245,124,21,0.15);min-height:24px;}
                .fiction-step-body{padding:10px 0 36px;flex:1;}
                .fiction-step-title{font-family:'Oswald',sans-serif;font-size:17px;font-weight:600;color:#111;text-transform:uppercase;margin:0 0 8px 0;}
                .fiction-step-desc{font-size:13.5px;color:#666;line-height:1.65;margin:0;}
                .fiction-faq{background:#f9f8f7;padding:90px 24px;}
                .fiction-faq-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:320px 1fr;gap:70px;align-items:start;}
                .fiction-faq-item{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;margin-bottom:6px;overflow:hidden;transition:border-color 0.25s;}
                .fiction-faq-item[open]{border-color:rgba(245,124,21,0.25);}
                .fiction-faq-q{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 20px;font-family:'Raleway',sans-serif;font-size:13.5px;font-weight:700;color:#111;cursor:pointer;list-style:none;user-select:none;}
                .fiction-faq-q::-webkit-details-marker{display:none;}
                .fiction-faq-icon{font-size:20px;font-weight:300;color:#f57c15;flex-shrink:0;line-height:1;transition:transform 0.25s;}
                .fiction-faq-item[open] .fiction-faq-icon{transform:rotate(45deg);}
                .fiction-faq-a{padding:14px 20px 18px;font-size:13px;color:#666;line-height:1.7;margin:0;border-top:1px solid rgba(0,0,0,0.04);}
                .fiction-related{background:#fff;padding:70px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .fiction-related-inner{max-width:1200px;margin:0 auto;}
                .fiction-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
                .fiction-cta{background:#060606;padding:110px 24px;text-align:center;position:relative;overflow:hidden;}
                .fiction-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(245,124,21,0.07) 0%,transparent 70%);pointer-events:none;}
                .fiction-cta-inner{position:relative;z-index:2;}
                .fiction-cta-title{font-family:'Oswald',sans-serif;font-size:clamp(2.5rem,5vw,4.2rem);color:#fff;text-transform:uppercase;line-height:1.05;margin:8px 0 20px 0;letter-spacing:-0.5px;}
                .fiction-cta-sub{font-size:14.5px;color:rgba(255,255,255,0.38);max-width:460px;margin:0 auto 36px;line-height:1.7;}
                .fiction-cta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:nowrap;align-items:center;}
                .fiction-cta .fiction-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .fiction-cta .fiction-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                @media (max-width:1024px){
                    .fiction-hero-grid{grid-template-columns:1fr;}
                    .fiction-hero-sidebar{padding-top:0;display:grid;grid-template-columns:repeat(4,1fr);}
                    .fiction-intro-inner{grid-template-columns:1fr;gap:40px;}
                    .fiction-faq-inner{grid-template-columns:1fr;gap:40px;}
                }
                @media (max-width:768px){
                    .fiction-features-grid{grid-template-columns:1fr;}
                    .fiction-related-grid{grid-template-columns:repeat(2,1fr);}
                    .fiction-hero-sidebar{grid-template-columns:repeat(2,1fr);}
                }
                @media (max-width:520px){
                    .fiction-related-grid{grid-template-columns:1fr;}
                    .fiction-cta-btns{flex-wrap:wrap;}
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