"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const relatedServices = [
    { label: "Book Writing", slug: "book-writing" },
    { label: "Ghostwriting", slug: "ghostwriting" },
    { label: "Non-Fiction Writing", slug: "non-fiction-writing" },
    { label: "Fiction Writing", slug: "fiction-writing" },
    { label: "Book Editing", slug: "book-editing" },
    { label: "Book Publishing", slug: "book-publishing" },
];

const categories = [
    { icon: "✦", label: "Personal Memoir" },
    { icon: "✦", label: "Celebrity Memoir" },
    { icon: "✦", label: "Business & Entrepreneurship" },
    { icon: "✦", label: "Survivor & Recovery Stories" },
    { icon: "✦", label: "Family & Generational Sagas" },
    { icon: "✦", label: "Political & Leadership Memoir" },
    { icon: "✦", label: "Military & Service Stories" },
    { icon: "✦", label: "Immigrant & Cultural Identity" },
    { icon: "✦", label: "Spiritual & Faith Journeys" },
    { icon: "✦", label: "Coming-of-Age Stories" },
    { icon: "✦", label: "Legacy & Heritage Books" },
    { icon: "✦", label: "Travel & Adventure Memoir" },
];

const features = [
    { num: "01", title: "Deep Interview Process", desc: "We conduct extensive recorded interviews to draw out the stories, emotions, and details that bring a memoir to life — even memories you thought were long forgotten." },
    { num: "02", title: "Your Voice, Perfected", desc: "We do not write in our voice — we write in yours. Every sentence is crafted to sound authentically like you: your cadence, your humour, your perspective." },
    { num: "03", title: "Narrative Architecture", desc: "Raw memories become a shaped story with structure, tension, and emotional arc. We find the throughline that gives your experiences meaning and momentum." },
    { num: "04", title: "Emotional Authenticity", desc: "A memoir lives or dies on emotional truth. Our writers handle vulnerability, trauma, joy, and complexity with sensitivity and craft." },
    { num: "05", title: "Full Confidentiality", desc: "Everything shared in the writing process is protected by strict NDA. Your story, every memory, every detail — completely safe with us." },
    { num: "06", title: "Publish-Ready Manuscript", desc: "Receive a fully proofread, formatted memoir ready for submission to literary agents, publishers, or self-publishing platforms worldwide." },
];

const steps = [
    { num: "01", title: "Life Story Consultation", desc: "A private, in-depth call to understand your story, the experiences you want to capture, and the legacy you want to leave." },
    { num: "02", title: "Interview Series", desc: "We conduct multiple deep-dive recorded interviews, drawing out vivid memories, emotions, and the details that make your story unique." },
    { num: "03", title: "Narrative Outline", desc: "Your life's events are structured into a compelling arc — with a clear beginning, emotional journey, and resonant conclusion." },
    { num: "04", title: "Draft & Refine", desc: "The memoir is written chapter by chapter. You review, share feedback, and we revise until every word rings true." },
    { num: "05", title: "Final Manuscript", desc: "A polished, emotionally powerful memoir delivered with full copyright — ready for the world to read." },
];

const faqs = [
    { q: "What is the difference between a memoir and an autobiography?", a: "An autobiography covers your entire life chronologically. A memoir focuses on a specific period or theme — making it more narrative-driven and reader-friendly." },
    { q: "Do I need to have lived an extraordinary life?", a: "Absolutely not. The most compelling memoirs are often about ordinary people navigating extraordinary internal journeys. Emotional truth matters more than fame." },
    { q: "How do you capture my voice so accurately?", a: "Through multiple recorded interviews, analysis of existing writing, and a voice profiling process that maps your unique cadence and tone before writing begins." },
    { q: "What if I am concerned about naming other people?", a: "We have extensive experience navigating the legal and ethical dimensions of memoir — including how to handle living subjects and sensitive disclosures with care." },
    { q: "Can I include photographs or family documents?", a: "Yes. We structure the manuscript to incorporate photos and documents — and our design team can integrate them beautifully in the final published book." },
];

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="memoir-page">

                {/* HERO */}
                <section className="memoir-hero">
                    <div className="memoir-hero-bg" />
                    <div className="memoir-hero-grid">
                        <div className="memoir-hero-inner">
                            <nav className="memoir-breadcrumb">
                                <Link href="/" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Home</Link>
                                <span className="memoir-bc-sep">›</span>
                                <Link href="/services" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Services</Link>
                                <span className="memoir-bc-sep">›</span>
                                <span className="memoir-bc-current">Memoir Writing</span>
                            </nav>
                            <div className="memoir-hero-tag"><span className="memoir-tag-dot" />Writing Services</div>
                            <h1 className="memoir-hero-title">Professional<br /><em className="memoir-hero-em">Memoir Writing</em><br />Services</h1>
                            <p className="memoir-hero-sub">Your life is a story worth telling. Our specialist memoir writers transform your personal experiences, memories, and lessons into a compelling, emotionally resonant narrative that moves, inspires, and endures.</p>
                            <div className="memoir-hero-actions">
                                <button className="memoir-btn-orange">Get A Free Quote</button>
                                <button className="memoir-btn-outline">(646) 298 6438</button>
                            </div>
                            <div className="memoir-trust-row">
                                <span className="memoir-trust-pill">✓ 100% Confidential</span>
                                <span className="memoir-trust-pill">✓ Full Copyright Yours</span>
                                <span className="memoir-trust-pill">✓ Unlimited Revisions</span>
                                <span className="memoir-trust-pill">✓ NDA Signed</span>
                            </div>
                        </div>
                        <div className="memoir-hero-sidebar">
                            <div className="memoir-sidebar-card"><span className="memoir-sc-val">5,000+</span><span className="memoir-sc-label">Projects Delivered</span></div>
                            <div className="memoir-sidebar-card"><span className="memoir-sc-val">400+</span><span className="memoir-sc-label">Publishing Platforms</span></div>
                            <div className="memoir-sidebar-card"><span className="memoir-sc-val">98%</span><span className="memoir-sc-label">Client Satisfaction</span></div>
                            <div className="memoir-sidebar-card"><span className="memoir-sc-val">15+</span><span className="memoir-sc-label">Years Experience</span></div>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="memoir-intro">
                    <div className="memoir-intro-inner">
                        <div className="memoir-intro-text">
                            <span className="memoir-eyebrow">What We Do</span>
                            <h2 className="memoir-section-title">Your Story Is More<br /><span className="memoir-hl">Powerful Than You Know</span></h2>
                            <p className="memoir-body-text">A memoir is not simply a record of events — it is a carefully crafted emotional journey that invites readers into your inner world. It requires honesty, vulnerability, narrative structure, and a prose style that makes your specific life feel universal. These are skills our memoir writers have spent careers developing.</p>
                            <p className="memoir-body-text">Whether you lived through extraordinary circumstances, built something from nothing, overcame the unimaginable, or simply want to leave your story for the next generation — we help you find the narrative thread that makes your memoir impossible to put down.</p>
                            <button className="memoir-btn-orange" style={{ marginTop: "8px" }}>Tell Your Story</button>
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
                <section className="memoir-features">
                    <div className="memoir-features-inner">
                        <div className="memoir-section-head">
                            <span className="memoir-eyebrow">Why Choose Us</span>
                            <h2 className="memoir-section-title">The Belmont <span className="memoir-hl">Difference</span></h2>
                        </div>
                        <div className="memoir-features-grid">
                            {features.map((f) => (
                                <div key={f.num} className="memoir-feature-card">
                                    <span className="memoir-fc-num">{f.num}</span>
                                    <h3 className="memoir-fc-title">{f.title}</h3>
                                    <p className="memoir-fc-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CATEGORIES */}
                <section className="memoir-cats">
                    <div className="memoir-cats-inner">
                        <div className="memoir-section-head memoir-head-center">
                            <span className="memoir-eyebrow">Memoir Types We Write</span>
                            <h2 className="memoir-section-title">Every Life Story <span className="memoir-hl">Deserves To Be Told</span></h2>
                            <p className="memoir-cats-sub">Our memoir writers bring sensitivity and expertise to every kind of personal narrative.</p>
                        </div>
                        <div className="memoir-cats-grid">
                            {categories.map((c) => (
                                <div key={c.label} className="memoir-cat-pill">
                                    <span className="memoir-cp-icon">{c.icon}</span>{c.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="memoir-process">
                    <div className="memoir-process-inner">
                        <div className="memoir-section-head memoir-head-center">
                            <span className="memoir-eyebrow">How It Works</span>
                            <h2 className="memoir-section-title">Our <span className="memoir-hl">Writing Process</span></h2>
                        </div>
                        <div className="memoir-steps">
                            {steps.map((s, i) => (
                                <div key={s.num} className="memoir-step-row">
                                    <div className="memoir-step-left">
                                        <div className="memoir-step-node"><span className="memoir-step-num">{s.num}</span></div>
                                        {i < steps.length - 1 && <div className="memoir-step-vline" />}
                                    </div>
                                    <div className="memoir-step-body">
                                        <h3 className="memoir-step-title">{s.title}</h3>
                                        <p className="memoir-step-desc">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="memoir-faq">
                    <div className="memoir-faq-inner">
                        <div className="memoir-faq-left">
                            <span className="memoir-eyebrow">FAQ</span>
                            <h2 className="memoir-section-title">Common <span className="memoir-hl">Questions</span></h2>
                            <p className="memoir-body-text" style={{ marginTop: "16px" }}>Still have questions? Our team is available 24/7 for a free consultation.</p>
                            <button className="memoir-btn-orange" style={{ marginTop: "24px" }}>Talk To An Expert</button>
                        </div>
                        <div className="memoir-faq-right">
                            {faqs.map((item, i) => (
                                <details key={i} className="memoir-faq-item">
                                    <summary className="memoir-faq-q">{item.q}<span className="memoir-faq-icon">+</span></summary>
                                    <p className="memoir-faq-a">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED */}
                <section className="memoir-related">
                    <div className="memoir-related-inner">
                        <span className="memoir-eyebrow">Explore More</span>
                        <h2 className="memoir-section-title" style={{ marginBottom: "32px" }}>Related <span className="memoir-hl">Services</span></h2>
                        <div className="memoir-related-grid">
                            {relatedServices.map((rs) => (
                                <Link key={rs.slug} href={`/InnerServices/${rs.slug}`}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "#fafafa", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "8px", textDecoration: "none", transition: "all 0.25s" }}
                                    onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "#f57c15"; el.style.background = "rgba(245,124,21,0.03)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 6px 18px rgba(245,124,21,0.08)"; const a = el.querySelector(".memoir-rca") as HTMLElement; if (a) { a.style.opacity = "1"; a.style.transform = "translate(0,0)"; } }}
                                    onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "rgba(0,0,0,0.07)"; el.style.background = "#fafafa"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; const a = el.querySelector(".memoir-rca") as HTMLElement; if (a) { a.style.opacity = "0"; a.style.transform = "translate(-4px,4px)"; } }}
                                >
                                    <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: "13px", fontWeight: 700, color: "#222" }}>{rs.label}</span>
                                    <span className="memoir-rca" style={{ fontSize: "16px", color: "#f57c15", opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.25s", display: "inline-block" }}>↗</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="memoir-cta">
                    <div className="memoir-cta-inner">
                        <span className="memoir-eyebrow" style={{ color: "rgba(245,124,21,0.8)" }}>Get Started Today</span>
                        <h2 className="memoir-cta-title">Ready To Tell<br /><span className="memoir-hl">Your Story?</span></h2>
                        <p className="memoir-cta-sub">Schedule a confidential consultation with our memoir writing team. Your story matters — let us make sure it is told the way it deserves.</p>
                        <div className="memoir-cta-btns">
                            <button className="memoir-btn-orange memoir-btn-lg">Get A Free Quote</button>
                            <button className="memoir-btn-outline memoir-btn-lg">(646) 298 6438</button>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                .memoir-page{font-family:'Raleway',sans-serif;color:#111;background:#fff;}
                .memoir-eyebrow{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#f57c15;margin-bottom:14px;}
                .memoir-section-title{font-family:'Oswald',sans-serif;font-size:clamp(1.9rem,3.5vw,2.8rem);color:#111;text-transform:uppercase;line-height:1.1;margin:0 0 20px 0;letter-spacing:-0.3px;}
                .memoir-hl{color:#f57c15;}
                .memoir-body-text{font-size:14px;color:#555;line-height:1.75;margin:0 0 16px 0;}
                .memoir-section-head{margin-bottom:52px;}
                .memoir-head-center{text-align:center;}
                .memoir-btn-orange{display:inline-flex;align-items:center;gap:8px;background:#f57c15;color:#fff;border:none;padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background 0.25s,transform 0.2s,box-shadow 0.25s;box-shadow:0 5px 18px rgba(245,124,21,0.28);}
                .memoir-btn-orange:hover{background:#d96c0d;transform:translateY(-2px);box-shadow:0 8px 24px rgba(245,124,21,0.35);}
                .memoir-btn-outline{display:inline-flex;align-items:center;background:transparent;color:#333;border:1.5px solid rgba(0,0,0,0.18);padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:border-color 0.25s,color 0.25s;}
                .memoir-btn-outline:hover{border-color:#f57c15;color:#f57c15;}
                .memoir-btn-lg{padding:15px 36px;font-size:12.5px;}
                .memoir-hero{background:#060606;padding:60px 24px 80px;position:relative;overflow:hidden;width:100%;}
                .memoir-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 55% 50% at 30% 50%,rgba(245,124,21,0.07) 0%,transparent 65%),radial-gradient(ellipse 40% 60% at 80% 20%,rgba(245,124,21,0.04) 0%,transparent 60%);pointer-events:none;}
                .memoir-hero-grid{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:1fr 260px;gap:40px;align-items:start;position:relative;z-index:2;}
                .memoir-hero-inner{padding-top:10px;}
                .memoir-breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:28px;}
                .memoir-bc-sep{color:rgba(255,255,255,0.2);font-size:11px;}
                .memoir-bc-current{font-size:11px;font-weight:700;color:#f57c15;letter-spacing:0.5px;}
                .memoir-hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(245,124,21,0.08);border:1px solid rgba(245,124,21,0.2);border-radius:30px;padding:6px 16px;font-size:10.5px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:#f57c15;margin-bottom:28px;}
                .memoir-tag-dot{width:5px;height:5px;border-radius:50%;background:#f57c15;flex-shrink:0;}
                .memoir-hero-title{font-family:'Oswald',sans-serif;font-size:clamp(2.8rem,6vw,5.2rem);color:#fff;line-height:0.95;text-transform:uppercase;letter-spacing:-1px;margin:0 0 24px 0;}
                .memoir-hero-em{color:#f57c15;font-style:italic;}
                .memoir-hero-sub{font-size:14.5px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:520px;margin:0 0 36px 0;font-weight:400;}
                .memoir-hero-actions{display:flex;flex-wrap:nowrap;gap:12px;margin-bottom:32px;align-items:center;}
                .memoir-hero-actions .memoir-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .memoir-hero-actions .memoir-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                .memoir-trust-row{display:flex;flex-wrap:wrap;gap:8px;}
                .memoir-trust-pill{font-size:11px;font-weight:700;color:rgba(255,255,255,0.45);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:6px 12px;letter-spacing:0.3px;}
                .memoir-hero-sidebar{display:flex;flex-direction:column;gap:3px;padding-top:64px;}
                .memoir-sidebar-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px 18px;display:flex;flex-direction:column;gap:4px;transition:border-color 0.3s;}
                .memoir-sidebar-card:hover{border-color:rgba(245,124,21,0.25);}
                .memoir-sc-val{font-family:'Oswald',sans-serif;font-size:28px;font-weight:700;color:#f57c15;line-height:1;}
                .memoir-sc-label{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}
                .memoir-intro{background:#fff;padding:90px 24px;border-bottom:1px solid rgba(0,0,0,0.06);}
                .memoir-intro-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 340px;gap:70px;align-items:center;}
                .memoir-visual-box{background:#060606;border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:32px 28px;position:relative;overflow:hidden;}
                .memoir-vb-accent{position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#f57c15,rgba(245,124,21,0.3));}
                .memoir-vb-line{position:absolute;top:0;left:28px;width:1px;bottom:0;background:rgba(245,124,21,0.08);}
                .memoir-vb-content{display:flex;flex-direction:column;gap:4px;padding:16px 0 16px 20px;}
                .memoir-vb-num{font-family:'Oswald',sans-serif;font-size:32px;font-weight:700;color:#f57c15;line-height:1;}
                .memoir-vb-label{font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}
                .memoir-vb-divider{height:1px;background:rgba(255,255,255,0.05);}
                .memoir-features{background:#f9f8f7;padding:90px 24px;}
                .memoir-features-inner{max-width:1200px;margin:0 auto;}
                .memoir-features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
                .memoir-feature-card{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;padding:32px 28px;transition:border-color 0.3s,box-shadow 0.3s,transform 0.3s;}
                .memoir-feature-card:hover{border-color:rgba(245,124,21,0.25);box-shadow:0 10px 30px rgba(245,124,21,0.07);transform:translateY(-3px);}
                .memoir-fc-num{display:block;font-family:'Oswald',sans-serif;font-size:36px;font-weight:700;color:rgba(245,124,21,0.12);line-height:1;margin-bottom:-6px;user-select:none;}
                .memoir-fc-title{font-family:'Oswald',sans-serif;font-size:16px;font-weight:600;color:#111;text-transform:uppercase;letter-spacing:0.3px;margin:0 0 12px 0;}
                .memoir-fc-desc{font-size:13px;color:#666;line-height:1.7;margin:0;}
                .memoir-cats{background:#060606;padding:90px 24px;}
                .memoir-cats-inner{max-width:1100px;margin:0 auto;}
                .memoir-cats .memoir-section-title{color:#fff;}
                .memoir-cats-sub{font-size:13.5px;color:rgba(255,255,255,0.35);margin:0;}
                .memoir-cats-grid{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;}
                .memoir-cat-pill{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:6px;font-size:12.5px;font-weight:600;color:rgba(255,255,255,0.65);transition:all 0.25s;cursor:default;}
                .memoir-cat-pill:hover{background:rgba(245,124,21,0.1);border-color:rgba(245,124,21,0.3);color:#f57c15;}
                .memoir-cp-icon{color:#f57c15;font-size:8px;}
                .memoir-process{background:#fff;padding:90px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .memoir-process-inner{max-width:900px;margin:0 auto;}
                .memoir-steps{display:flex;flex-direction:column;}
                .memoir-step-row{display:flex;gap:24px;align-items:stretch;}
                .memoir-step-row:hover .memoir-step-node{background:#f57c15;}
                .memoir-step-row:hover .memoir-step-num{color:#fff;}
                .memoir-step-left{display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:52px;}
                .memoir-step-node{width:52px;height:52px;border-radius:50%;background:#fff;border:2px solid #f57c15;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background 0.3s;}
                .memoir-step-num{font-family:'Oswald',sans-serif;font-size:14px;font-weight:700;color:#f57c15;transition:color 0.3s;}
                .memoir-step-vline{width:2px;flex:1;background:rgba(245,124,21,0.15);min-height:24px;}
                .memoir-step-body{padding:10px 0 36px;flex:1;}
                .memoir-step-title{font-family:'Oswald',sans-serif;font-size:17px;font-weight:600;color:#111;text-transform:uppercase;margin:0 0 8px 0;}
                .memoir-step-desc{font-size:13.5px;color:#666;line-height:1.65;margin:0;}
                .memoir-faq{background:#f9f8f7;padding:90px 24px;}
                .memoir-faq-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:320px 1fr;gap:70px;align-items:start;}
                .memoir-faq-item{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;margin-bottom:6px;overflow:hidden;transition:border-color 0.25s;}
                .memoir-faq-item[open]{border-color:rgba(245,124,21,0.25);}
                .memoir-faq-q{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 20px;font-family:'Raleway',sans-serif;font-size:13.5px;font-weight:700;color:#111;cursor:pointer;list-style:none;user-select:none;}
                .memoir-faq-q::-webkit-details-marker{display:none;}
                .memoir-faq-icon{font-size:20px;font-weight:300;color:#f57c15;flex-shrink:0;line-height:1;transition:transform 0.25s;}
                .memoir-faq-item[open] .memoir-faq-icon{transform:rotate(45deg);}
                .memoir-faq-a{padding:14px 20px 18px;font-size:13px;color:#666;line-height:1.7;margin:0;border-top:1px solid rgba(0,0,0,0.04);}
                .memoir-related{background:#fff;padding:70px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .memoir-related-inner{max-width:1200px;margin:0 auto;}
                .memoir-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
                .memoir-cta{background:#060606;padding:110px 24px;text-align:center;position:relative;overflow:hidden;}
                .memoir-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(245,124,21,0.07) 0%,transparent 70%);pointer-events:none;}
                .memoir-cta-inner{position:relative;z-index:2;}
                .memoir-cta-title{font-family:'Oswald',sans-serif;font-size:clamp(2.5rem,5vw,4.2rem);color:#fff;text-transform:uppercase;line-height:1.05;margin:8px 0 20px 0;letter-spacing:-0.5px;}
                .memoir-cta-sub{font-size:14.5px;color:rgba(255,255,255,0.38);max-width:460px;margin:0 auto 36px;line-height:1.7;}
                .memoir-cta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:nowrap;align-items:center;}
                .memoir-cta .memoir-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .memoir-cta .memoir-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                @media (max-width:1024px){
                    .memoir-hero-grid{grid-template-columns:1fr;}
                    .memoir-hero-sidebar{padding-top:0;display:grid;grid-template-columns:repeat(4,1fr);}
                    .memoir-intro-inner{grid-template-columns:1fr;gap:40px;}
                    .memoir-faq-inner{grid-template-columns:1fr;gap:40px;}
                }
                @media (max-width:768px){
                    .memoir-features-grid{grid-template-columns:1fr;}
                    .memoir-related-grid{grid-template-columns:repeat(2,1fr);}
                    .memoir-hero-sidebar{grid-template-columns:repeat(2,1fr);}
                }
                @media (max-width:520px){
                    .memoir-related-grid{grid-template-columns:1fr;}
                    .memoir-cta-btns{flex-wrap:wrap;}
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