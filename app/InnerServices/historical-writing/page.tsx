"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const relatedServices = [
    { label: "Book Writing", slug: "book-writing" },
    { label: "Non-Fiction Writing", slug: "non-fiction-writing" },
    { label: "Memoir Writing", slug: "memoir-writing" },
    { label: "Fiction Writing", slug: "fiction-writing" },
    { label: "Book Editing", slug: "book-editing" },
    { label: "Book Publishing", slug: "book-publishing" },
];

const categories = [
    { icon: "✦", label: "Ancient History & Classical World" },
    { icon: "✦", label: "Medieval & Renaissance" },
    { icon: "✦", label: "Age of Exploration" },
    { icon: "✦", label: "Colonial & Revolutionary Era" },
    { icon: "✦", label: "Napoleonic & Victorian" },
    { icon: "✦", label: "World War I" },
    { icon: "✦", label: "World War II" },
    { icon: "✦", label: "Cold War Era" },
    { icon: "✦", label: "Civil Rights & Social Movements" },
    { icon: "✦", label: "Historical Biography" },
    { icon: "✦", label: "Family & Genealogical History" },
    { icon: "✦", label: "Historical Fiction" },
];

const features = [
    { num: "01", title: "Deep Historical Research", desc: "Our writers conduct extensive primary and secondary source research — archives, academic journals, period documents — to ensure every detail is accurate and authentic." },
    { num: "02", title: "Period-Accurate Detail", desc: "From authentic dialogue and period-appropriate social norms to accurate geography and historical events, we immerse every scene in the texture of its era." },
    { num: "03", title: "Narrative Momentum", desc: "Great historical writing never sacrifices story for scholarship. We balance factual rigour with the narrative drive that keeps readers turning pages." },
    { num: "04", title: "Expert Era Matching", desc: "Our roster includes specialists in ancient history, medieval Europe, the Age of Exploration, colonial periods, both World Wars, and post-war modern history." },
    { num: "05", title: "Full Copyright Ownership", desc: "All research, narrative, and intellectual property transfers entirely to you upon delivery. No royalties, no credits, no exceptions." },
    { num: "06", title: "Academic & Trade Ready", desc: "We deliver manuscripts formatted for both trade publishing and academic audiences — with footnotes, bibliography, and citation support available on request." },
];

const steps = [
    { num: "01", title: "Scope & Era Consultation", desc: "We define your historical focus, target audience, level of scholarly rigour required, and the narrative style best suited to your project." },
    { num: "02", title: "Research & Source Review", desc: "Our writers immerse in primary and secondary sources — building the factual foundation that makes every detail authentic and defensible." },
    { num: "03", title: "Outline & Structure", desc: "A detailed chapter outline is built, balancing historical accuracy with narrative arc and approved before writing begins." },
    { num: "04", title: "Manuscript Drafting", desc: "The book is written with meticulous period accuracy and compelling storytelling — delivered in milestones with your feedback at every stage." },
    { num: "05", title: "Final Delivery", desc: "A polished, fully referenced manuscript ready for trade or academic publication — with full copyright transfer." },
];

const faqs = [
    { q: "How do you ensure historical accuracy?", a: "We conduct thorough research using primary sources, peer-reviewed academic works, period documents, and specialist consultants where required. Every factual claim is verified before it appears on the page." },
    { q: "Can you write historical fiction as well as non-fiction?", a: "Yes. We write across the full spectrum — from rigorously accurate narrative non-fiction to historical novels that blend fact with invented characters and dramatised scenes." },
    { q: "What if I need footnotes and citations?", a: "Absolutely available. We deliver fully cited manuscripts with footnotes, endnotes, and bibliography formatted to Chicago, APA, or your preferred style guide." },
    { q: "Can you write about my family history or ancestry?", a: "Yes. Family and genealogical history is one of our most requested services. We transform records, documents, photographs, and oral histories into compelling narrative books." },
    { q: "Do you handle sensitive historical topics?", a: "Yes, with care and expertise. Our writers approach difficult historical subjects — war, slavery, genocide, colonialism — with scholarly integrity and ethical sensitivity." },
];

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="hist-page">

                {/* HERO */}
                <section className="hist-hero">
                    <div className="hist-hero-bg" />
                    <div className="hist-hero-grid">
                        <div className="hist-hero-inner">
                            <nav className="hist-breadcrumb">
                                <Link href="/" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Home</Link>
                                <span className="hist-bc-sep">›</span>
                                <Link href="/services" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Services</Link>
                                <span className="hist-bc-sep">›</span>
                                <span className="hist-bc-current">Historical Writing</span>
                            </nav>
                            <div className="hist-hero-tag"><span className="hist-tag-dot" />Writing Services</div>
                            <h1 className="hist-hero-title">Professional<br /><em className="hist-hero-em">Historical Writing</em><br />Services</h1>
                            <p className="hist-hero-sub">From ancient civilizations to twentieth-century conflicts — our specialist historical writers blend meticulous research with compelling narrative to bring the past vividly, authentically, and powerfully to life.</p>
                            <div className="hist-hero-actions">
                                <button className="hist-btn-orange">Get A Free Quote</button>
                                <button className="hist-btn-outline">(646) 298 6438</button>
                            </div>
                            <div className="hist-trust-row">
                                <span className="hist-trust-pill">✓ 100% Confidential</span>
                                <span className="hist-trust-pill">✓ Full Copyright Yours</span>
                                <span className="hist-trust-pill">✓ Unlimited Revisions</span>
                                <span className="hist-trust-pill">✓ NDA Signed</span>
                            </div>
                        </div>
                        <div className="hist-hero-sidebar">
                            <div className="hist-sidebar-card"><span className="hist-sc-val">5,000+</span><span className="hist-sc-label">Projects Delivered</span></div>
                            <div className="hist-sidebar-card"><span className="hist-sc-val">400+</span><span className="hist-sc-label">Publishing Platforms</span></div>
                            <div className="hist-sidebar-card"><span className="hist-sc-val">98%</span><span className="hist-sc-label">Client Satisfaction</span></div>
                            <div className="hist-sidebar-card"><span className="hist-sc-val">15+</span><span className="hist-sc-label">Years Experience</span></div>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="hist-intro">
                    <div className="hist-intro-inner">
                        <div className="hist-intro-text">
                            <span className="hist-eyebrow">What We Do</span>
                            <h2 className="hist-section-title">History Is Not Just Facts.<br /><span className="hist-hl">It Is Humanity's Greatest Story.</span></h2>
                            <p className="hist-body-text">Historical writing demands a dual mastery that few writers possess: the academic rigour of a researcher and the storytelling craft of a novelist. Our historical authors immerse themselves in primary sources, period-accurate detail, and the lived experience of their subjects — then translate that knowledge into prose that makes readers feel they are genuinely there.</p>
                            <p className="hist-body-text">Whether you are writing a sweeping historical novel, a narrative non-fiction account, a family history, or an academic work for general audiences, our team delivers manuscripts that honour the truth of the past while captivating the readers of today.</p>
                            <button className="hist-btn-orange" style={{ marginTop: "8px" }}>Start Your Historical Project</button>
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
                <section className="hist-features">
                    <div className="hist-features-inner">
                        <div className="hist-section-head">
                            <span className="hist-eyebrow">Why Choose Us</span>
                            <h2 className="hist-section-title">The Belmont <span className="hist-hl">Difference</span></h2>
                        </div>
                        <div className="hist-features-grid">
                            {features.map((f) => (
                                <div key={f.num} className="hist-feature-card">
                                    <span className="hist-fc-num">{f.num}</span>
                                    <h3 className="hist-fc-title">{f.title}</h3>
                                    <p className="hist-fc-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CATEGORIES */}
                <section className="hist-cats">
                    <div className="hist-cats-inner">
                        <div className="hist-section-head hist-head-center">
                            <span className="hist-eyebrow">Eras & Periods We Cover</span>
                            <h2 className="hist-section-title">We Write Across All <span className="hist-hl">Historical Periods</span></h2>
                            <p className="hist-cats-sub">Our historical writers are era specialists — deeply versed in the periods they bring to life.</p>
                        </div>
                        <div className="hist-cats-grid">
                            {categories.map((c) => (
                                <div key={c.label} className="hist-cat-pill">
                                    <span className="hist-cp-icon">{c.icon}</span>{c.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="hist-process">
                    <div className="hist-process-inner">
                        <div className="hist-section-head hist-head-center">
                            <span className="hist-eyebrow">How It Works</span>
                            <h2 className="hist-section-title">Our <span className="hist-hl">Writing Process</span></h2>
                        </div>
                        <div className="hist-steps">
                            {steps.map((s, i) => (
                                <div key={s.num} className="hist-step-row">
                                    <div className="hist-step-left">
                                        <div className="hist-step-node"><span className="hist-step-num">{s.num}</span></div>
                                        {i < steps.length - 1 && <div className="hist-step-vline" />}
                                    </div>
                                    <div className="hist-step-body">
                                        <h3 className="hist-step-title">{s.title}</h3>
                                        <p className="hist-step-desc">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="hist-faq">
                    <div className="hist-faq-inner">
                        <div className="hist-faq-left">
                            <span className="hist-eyebrow">FAQ</span>
                            <h2 className="hist-section-title">Common <span className="hist-hl">Questions</span></h2>
                            <p className="hist-body-text" style={{ marginTop: "16px" }}>Still have questions? Our team is available 24/7 for a free consultation.</p>
                            <button className="hist-btn-orange" style={{ marginTop: "24px" }}>Talk To An Expert</button>
                        </div>
                        <div className="hist-faq-right">
                            {faqs.map((item, i) => (
                                <details key={i} className="hist-faq-item">
                                    <summary className="hist-faq-q">{item.q}<span className="hist-faq-icon">+</span></summary>
                                    <p className="hist-faq-a">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED */}
                <section className="hist-related">
                    <div className="hist-related-inner">
                        <span className="hist-eyebrow">Explore More</span>
                        <h2 className="hist-section-title" style={{ marginBottom: "32px" }}>Related <span className="hist-hl">Services</span></h2>
                        <div className="hist-related-grid">
                            {relatedServices.map((rs) => (
                                <Link key={rs.slug} href={`/InnerServices/${rs.slug}`}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "#fafafa", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "8px", textDecoration: "none", transition: "all 0.25s" }}
                                    onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "#f57c15"; el.style.background = "rgba(245,124,21,0.03)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 6px 18px rgba(245,124,21,0.08)"; const a = el.querySelector(".hist-rca") as HTMLElement; if (a) { a.style.opacity = "1"; a.style.transform = "translate(0,0)"; } }}
                                    onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "rgba(0,0,0,0.07)"; el.style.background = "#fafafa"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; const a = el.querySelector(".hist-rca") as HTMLElement; if (a) { a.style.opacity = "0"; a.style.transform = "translate(-4px,4px)"; } }}
                                >
                                    <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: "13px", fontWeight: 700, color: "#222" }}>{rs.label}</span>
                                    <span className="hist-rca" style={{ fontSize: "16px", color: "#f57c15", opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.25s", display: "inline-block" }}>↗</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="hist-cta">
                    <div className="hist-cta-inner">
                        <span className="hist-eyebrow" style={{ color: "rgba(245,124,21,0.8)" }}>Get Started Today</span>
                        <h2 className="hist-cta-title">Ready To Bring The<br /><span className="hist-hl">Past To Life?</span></h2>
                        <p className="hist-cta-sub">Consult with our historical writing specialists. Rigorous research, compelling narrative, and a story that honours its subject.</p>
                        <div className="hist-cta-btns">
                            <button className="hist-btn-orange hist-btn-lg">Get A Free Quote</button>
                            <button className="hist-btn-outline hist-btn-lg">(646) 298 6438</button>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                .hist-page{font-family:'Raleway',sans-serif;color:#111;background:#fff;}
                .hist-eyebrow{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#f57c15;margin-bottom:14px;}
                .hist-section-title{font-family:'Oswald',sans-serif;font-size:clamp(1.9rem,3.5vw,2.8rem);color:#111;text-transform:uppercase;line-height:1.1;margin:0 0 20px 0;letter-spacing:-0.3px;}
                .hist-hl{color:#f57c15;}
                .hist-body-text{font-size:14px;color:#555;line-height:1.75;margin:0 0 16px 0;}
                .hist-section-head{margin-bottom:52px;}
                .hist-head-center{text-align:center;}
                .hist-btn-orange{display:inline-flex;align-items:center;gap:8px;background:#f57c15;color:#fff;border:none;padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background 0.25s,transform 0.2s,box-shadow 0.25s;box-shadow:0 5px 18px rgba(245,124,21,0.28);}
                .hist-btn-orange:hover{background:#d96c0d;transform:translateY(-2px);box-shadow:0 8px 24px rgba(245,124,21,0.35);}
                .hist-btn-outline{display:inline-flex;align-items:center;background:transparent;color:#333;border:1.5px solid rgba(0,0,0,0.18);padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:border-color 0.25s,color 0.25s;}
                .hist-btn-outline:hover{border-color:#f57c15;color:#f57c15;}
                .hist-btn-lg{padding:15px 36px;font-size:12.5px;}
                .hist-hero{background:#060606;padding:60px 24px 80px;position:relative;overflow:hidden;width:100%;}
                .hist-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 55% 50% at 30% 50%,rgba(245,124,21,0.07) 0%,transparent 65%),radial-gradient(ellipse 40% 60% at 80% 20%,rgba(245,124,21,0.04) 0%,transparent 60%);pointer-events:none;}
                .hist-hero-grid{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:1fr 260px;gap:40px;align-items:start;position:relative;z-index:2;}
                .hist-hero-inner{padding-top:10px;}
                .hist-breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:28px;}
                .hist-bc-sep{color:rgba(255,255,255,0.2);font-size:11px;}
                .hist-bc-current{font-size:11px;font-weight:700;color:#f57c15;letter-spacing:0.5px;}
                .hist-hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(245,124,21,0.08);border:1px solid rgba(245,124,21,0.2);border-radius:30px;padding:6px 16px;font-size:10.5px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:#f57c15;margin-bottom:28px;}
                .hist-tag-dot{width:5px;height:5px;border-radius:50%;background:#f57c15;flex-shrink:0;}
                .hist-hero-title{font-family:'Oswald',sans-serif;font-size:clamp(2.8rem,6vw,5.2rem);color:#fff;line-height:0.95;text-transform:uppercase;letter-spacing:-1px;margin:0 0 24px 0;}
                .hist-hero-em{color:#f57c15;font-style:italic;}
                .hist-hero-sub{font-size:14.5px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:520px;margin:0 0 36px 0;font-weight:400;}
                .hist-hero-actions{display:flex;flex-wrap:nowrap;gap:12px;margin-bottom:32px;align-items:center;}
                .hist-hero-actions .hist-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .hist-hero-actions .hist-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                .hist-trust-row{display:flex;flex-wrap:wrap;gap:8px;}
                .hist-trust-pill{font-size:11px;font-weight:700;color:rgba(255,255,255,0.45);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:6px 12px;letter-spacing:0.3px;}
                .hist-hero-sidebar{display:flex;flex-direction:column;gap:3px;padding-top:64px;}
                .hist-sidebar-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px 18px;display:flex;flex-direction:column;gap:4px;transition:border-color 0.3s;}
                .hist-sidebar-card:hover{border-color:rgba(245,124,21,0.25);}
                .hist-sc-val{font-family:'Oswald',sans-serif;font-size:28px;font-weight:700;color:#f57c15;line-height:1;}
                .hist-sc-label{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}
                .hist-intro{background:#fff;padding:90px 24px;border-bottom:1px solid rgba(0,0,0,0.06);}
                .hist-intro-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 340px;gap:70px;align-items:center;}
                .hist-visual-box{background:#060606;border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:32px 28px;position:relative;overflow:hidden;}
                .hist-vb-accent{position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#f57c15,rgba(245,124,21,0.3));}
                .hist-vb-line{position:absolute;top:0;left:28px;width:1px;bottom:0;background:rgba(245,124,21,0.08);}
                .hist-vb-content{display:flex;flex-direction:column;gap:4px;padding:16px 0 16px 20px;}
                .hist-vb-num{font-family:'Oswald',sans-serif;font-size:32px;font-weight:700;color:#f57c15;line-height:1;}
                .hist-vb-label{font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}
                .hist-vb-divider{height:1px;background:rgba(255,255,255,0.05);}
                .hist-features{background:#f9f8f7;padding:90px 24px;}
                .hist-features-inner{max-width:1200px;margin:0 auto;}
                .hist-features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
                .hist-feature-card{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;padding:32px 28px;transition:border-color 0.3s,box-shadow 0.3s,transform 0.3s;}
                .hist-feature-card:hover{border-color:rgba(245,124,21,0.25);box-shadow:0 10px 30px rgba(245,124,21,0.07);transform:translateY(-3px);}
                .hist-fc-num{display:block;font-family:'Oswald',sans-serif;font-size:36px;font-weight:700;color:rgba(245,124,21,0.12);line-height:1;margin-bottom:-6px;user-select:none;}
                .hist-fc-title{font-family:'Oswald',sans-serif;font-size:16px;font-weight:600;color:#111;text-transform:uppercase;letter-spacing:0.3px;margin:0 0 12px 0;}
                .hist-fc-desc{font-size:13px;color:#666;line-height:1.7;margin:0;}
                .hist-cats{background:#060606;padding:90px 24px;}
                .hist-cats-inner{max-width:1100px;margin:0 auto;}
                .hist-cats .hist-section-title{color:#fff;}
                .hist-cats-sub{font-size:13.5px;color:rgba(255,255,255,0.35);margin:0;}
                .hist-cats-grid{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;}
                .hist-cat-pill{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:6px;font-size:12.5px;font-weight:600;color:rgba(255,255,255,0.65);transition:all 0.25s;cursor:default;}
                .hist-cat-pill:hover{background:rgba(245,124,21,0.1);border-color:rgba(245,124,21,0.3);color:#f57c15;}
                .hist-cp-icon{color:#f57c15;font-size:8px;}
                .hist-process{background:#fff;padding:90px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .hist-process-inner{max-width:900px;margin:0 auto;}
                .hist-steps{display:flex;flex-direction:column;}
                .hist-step-row{display:flex;gap:24px;align-items:stretch;}
                .hist-step-row:hover .hist-step-node{background:#f57c15;}
                .hist-step-row:hover .hist-step-num{color:#fff;}
                .hist-step-left{display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:52px;}
                .hist-step-node{width:52px;height:52px;border-radius:50%;background:#fff;border:2px solid #f57c15;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background 0.3s;}
                .hist-step-num{font-family:'Oswald',sans-serif;font-size:14px;font-weight:700;color:#f57c15;transition:color 0.3s;}
                .hist-step-vline{width:2px;flex:1;background:rgba(245,124,21,0.15);min-height:24px;}
                .hist-step-body{padding:10px 0 36px;flex:1;}
                .hist-step-title{font-family:'Oswald',sans-serif;font-size:17px;font-weight:600;color:#111;text-transform:uppercase;margin:0 0 8px 0;}
                .hist-step-desc{font-size:13.5px;color:#666;line-height:1.65;margin:0;}
                .hist-faq{background:#f9f8f7;padding:90px 24px;}
                .hist-faq-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:320px 1fr;gap:70px;align-items:start;}
                .hist-faq-item{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;margin-bottom:6px;overflow:hidden;transition:border-color 0.25s;}
                .hist-faq-item[open]{border-color:rgba(245,124,21,0.25);}
                .hist-faq-q{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 20px;font-family:'Raleway',sans-serif;font-size:13.5px;font-weight:700;color:#111;cursor:pointer;list-style:none;user-select:none;}
                .hist-faq-q::-webkit-details-marker{display:none;}
                .hist-faq-icon{font-size:20px;font-weight:300;color:#f57c15;flex-shrink:0;line-height:1;transition:transform 0.25s;}
                .hist-faq-item[open] .hist-faq-icon{transform:rotate(45deg);}
                .hist-faq-a{padding:14px 20px 18px;font-size:13px;color:#666;line-height:1.7;margin:0;border-top:1px solid rgba(0,0,0,0.04);}
                .hist-related{background:#fff;padding:70px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .hist-related-inner{max-width:1200px;margin:0 auto;}
                .hist-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
                .hist-cta{background:#060606;padding:110px 24px;text-align:center;position:relative;overflow:hidden;}
                .hist-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(245,124,21,0.07) 0%,transparent 70%);pointer-events:none;}
                .hist-cta-inner{position:relative;z-index:2;}
                .hist-cta-title{font-family:'Oswald',sans-serif;font-size:clamp(2.5rem,5vw,4.2rem);color:#fff;text-transform:uppercase;line-height:1.05;margin:8px 0 20px 0;letter-spacing:-0.5px;}
                .hist-cta-sub{font-size:14.5px;color:rgba(255,255,255,0.38);max-width:460px;margin:0 auto 36px;line-height:1.7;}
                .hist-cta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:nowrap;align-items:center;}
                .hist-cta .hist-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .hist-cta .hist-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                @media (max-width:1024px){
                    .hist-hero-grid{grid-template-columns:1fr;}
                    .hist-hero-sidebar{padding-top:0;display:grid;grid-template-columns:repeat(4,1fr);}
                    .hist-intro-inner{grid-template-columns:1fr;gap:40px;}
                    .hist-faq-inner{grid-template-columns:1fr;gap:40px;}
                }
                @media (max-width:768px){
                    .hist-features-grid{grid-template-columns:1fr;}
                    .hist-related-grid{grid-template-columns:repeat(2,1fr);}
                    .hist-hero-sidebar{grid-template-columns:repeat(2,1fr);}
                }
                @media (max-width:520px){
                    .hist-related-grid{grid-template-columns:1fr;}
                    .hist-cta-btns{flex-wrap:wrap;}
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