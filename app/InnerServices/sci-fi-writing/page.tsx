"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const relatedServices = [
    { label: "Book Writing", slug: "book-writing" },
    { label: "Ghostwriting", slug: "ghostwriting" },
    { label: "Fiction Writing", slug: "fiction-writing" },
    { label: "Fantasy Writing", slug: "fantasy-writing" },
    { label: "Book Editing", slug: "book-editing" },
    { label: "Book Publishing", slug: "book-publishing" },
];

const categories = [
    { icon: "✦", label: "Hard Science Fiction" },
    { icon: "✦", label: "Space Opera" },
    { icon: "✦", label: "Cyberpunk" },
    { icon: "✦", label: "Military Sci-Fi" },
    { icon: "✦", label: "First Contact" },
    { icon: "✦", label: "Dystopian Fiction" },
    { icon: "✦", label: "Time Travel" },
    { icon: "✦", label: "Biopunk & Transhumanism" },
    { icon: "✦", label: "Solarpunk" },
    { icon: "✦", label: "Post-Apocalyptic" },
    { icon: "✦", label: "Alien Civilizations" },
    { icon: "✦", label: "AI & Robotics" },
];

const features = [
    { num: "01", title: "World-Building Expertise", desc: "Our writers construct entire universes — physics, biology, sociology, politics, and history — that feel internally consistent and richly detailed." },
    { num: "02", title: "Scientific Accuracy", desc: "We research real science, technology, and emerging fields to ground your fiction in plausibility, giving readers the satisfying click of believability." },
    { num: "03", title: "Complex Characters", desc: "Great sci-fi lives in its characters. We craft protagonists with depth, moral complexity, and authentic emotional arcs that anchor the grandest narratives." },
    { num: "04", title: "Sub-Genre Mastery", desc: "From cyberpunk to biopunk, space opera to solarpunk — our writers specialize across all major sci-fi sub-genres with genuine passion and expertise." },
    { num: "05", title: "Full Copyright Ownership", desc: "Every world, character, and concept belongs entirely to you. Full IP transfer upon delivery with no royalties or credits." },
    { num: "06", title: "Series Development", desc: "We build scalable universes designed for multi-book series — with consistent lore bibles, character arcs, and narrative threads that span volumes." },
];

const steps = [
    { num: "01", title: "Concept & Vision Call", desc: "We explore your world, premise, scientific concepts, and the kind of sci-fi experience you want to create." },
    { num: "02", title: "World-Building Bible", desc: "A comprehensive document covering your universe's science, history, factions, and technology is built and approved." },
    { num: "03", title: "Outline & Structure", desc: "A detailed chapter-by-chapter plot outline is drafted and signed off before writing begins." },
    { num: "04", title: "Manuscript Drafting", desc: "Your sci-fi novel is written chapter by chapter with regular milestones and your feedback shaping every revision." },
    { num: "05", title: "Final Delivery", desc: "A polished, publish-ready manuscript with full copyright transfer — ready for agents, publishers, or self-publishing." },
];

const faqs = [
    { q: "Do I need to know science to write sci-fi?", a: "Not at all. You bring the vision — our writers handle all research, scientific grounding, and technical accuracy." },
    { q: "Can you write hard sci-fi with real scientific accuracy?", a: "Yes. Our team includes writers with backgrounds in physics, biology, computer science, and engineering who write rigorously accurate hard sci-fi." },
    { q: "How do you handle complex world-building?", a: "We create a comprehensive world-building bible before writing begins — covering science, history, politics, and technology. This ensures consistency across every chapter." },
    { q: "Can you write a sci-fi series?", a: "Absolutely. We specialize in series development, building scalable universes with consistent lore and character arcs across multiple volumes." },
    { q: "What length should my sci-fi novel be?", a: "Most sci-fi novels run 80,000–120,000 words. We recommend the ideal length based on your story's scope and target market." },
];

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="scifi-page">

                {/* HERO */}
                <section className="scifi-hero">
                    <div className="scifi-hero-bg" />
                    <div className="scifi-hero-grid">
                        <div className="scifi-hero-inner">
                            <nav className="scifi-breadcrumb">
                                <Link href="/" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Home</Link>
                                <span className="scifi-bc-sep">›</span>
                                <Link href="/services" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Services</Link>
                                <span className="scifi-bc-sep">›</span>
                                <span className="scifi-bc-current">Sci-Fi Writing</span>
                            </nav>
                            <div className="scifi-hero-tag"><span className="scifi-tag-dot" />Writing Services</div>
                            <h1 className="scifi-hero-title">Professional<br /><em className="scifi-hero-em">Sci-Fi Writing</em><br />Services</h1>
                            <p className="scifi-hero-sub">From hard science fiction to space opera — our specialist sci-fi authors build immersive worlds, groundbreaking technology, and unforgettable characters that push the boundaries of imagination.</p>
                            <div className="scifi-hero-actions">
                                <button className="scifi-btn-orange">Get A Free Quote</button>
                                <button className="scifi-btn-outline">(646) 298 6438</button>
                            </div>
                            <div className="scifi-trust-row">
                                <span className="scifi-trust-pill">✓ 100% Confidential</span>
                                <span className="scifi-trust-pill">✓ Full Copyright Yours</span>
                                <span className="scifi-trust-pill">✓ Unlimited Revisions</span>
                                <span className="scifi-trust-pill">✓ NDA Signed</span>
                            </div>
                        </div>
                        <div className="scifi-hero-sidebar">
                            <div className="scifi-sidebar-card"><span className="scifi-sc-val">5,000+</span><span className="scifi-sc-label">Projects Delivered</span></div>
                            <div className="scifi-sidebar-card"><span className="scifi-sc-val">400+</span><span className="scifi-sc-label">Publishing Platforms</span></div>
                            <div className="scifi-sidebar-card"><span className="scifi-sc-val">98%</span><span className="scifi-sc-label">Client Satisfaction</span></div>
                            <div className="scifi-sidebar-card"><span className="scifi-sc-val">15+</span><span className="scifi-sc-label">Years Experience</span></div>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="scifi-intro">
                    <div className="scifi-intro-inner">
                        <div className="scifi-intro-text">
                            <span className="scifi-eyebrow">What We Do</span>
                            <h2 className="scifi-section-title">Where Science Meets<br /><span className="scifi-hl">Infinite Imagination</span></h2>
                            <p className="scifi-body-text">Science fiction is the literature of ideas. It asks 'what if' and then follows that question to its logical, terrifying, or awe-inspiring conclusion. Our sci-fi writers are passionate genre specialists who understand the delicate balance between scientific plausibility and creative freedom.</p>
                            <p className="scifi-body-text">Whether your vision is a hard sci-fi novel grounded in real physics, a sweeping space opera with galactic civilizations, or a near-future thriller exploring AI and transhumanism, our team delivers manuscripts that rival the genre's greatest works.</p>
                            <button className="scifi-btn-orange" style={{ marginTop: "8px" }}>Start Your Sci-Fi Novel</button>
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
                <section className="scifi-features">
                    <div className="scifi-features-inner">
                        <div className="scifi-section-head">
                            <span className="scifi-eyebrow">Why Choose Us</span>
                            <h2 className="scifi-section-title">The Belmont <span className="scifi-hl">Difference</span></h2>
                        </div>
                        <div className="scifi-features-grid">
                            {features.map((f) => (
                                <div key={f.num} className="scifi-feature-card">
                                    <span className="scifi-fc-num">{f.num}</span>
                                    <h3 className="scifi-fc-title">{f.title}</h3>
                                    <p className="scifi-fc-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CATEGORIES */}
                <section className="scifi-cats">
                    <div className="scifi-cats-inner">
                        <div className="scifi-section-head scifi-head-center">
                            <span className="scifi-eyebrow">Sub-Genres We Cover</span>
                            <h2 className="scifi-section-title">We Write Across All <span className="scifi-hl">Sci-Fi Sub-Genres</span></h2>
                            <p className="scifi-cats-sub">Our writers are passionate genre specialists with deep expertise across every corner of science fiction.</p>
                        </div>
                        <div className="scifi-cats-grid">
                            {categories.map((c) => (
                                <div key={c.label} className="scifi-cat-pill">
                                    <span className="scifi-cp-icon">{c.icon}</span>{c.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="scifi-process">
                    <div className="scifi-process-inner">
                        <div className="scifi-section-head scifi-head-center">
                            <span className="scifi-eyebrow">How It Works</span>
                            <h2 className="scifi-section-title">Our <span className="scifi-hl">Writing Process</span></h2>
                        </div>
                        <div className="scifi-steps">
                            {steps.map((s, i) => (
                                <div key={s.num} className="scifi-step-row">
                                    <div className="scifi-step-left">
                                        <div className="scifi-step-node"><span className="scifi-step-num">{s.num}</span></div>
                                        {i < steps.length - 1 && <div className="scifi-step-vline" />}
                                    </div>
                                    <div className="scifi-step-body">
                                        <h3 className="scifi-step-title">{s.title}</h3>
                                        <p className="scifi-step-desc">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="scifi-faq">
                    <div className="scifi-faq-inner">
                        <div className="scifi-faq-left">
                            <span className="scifi-eyebrow">FAQ</span>
                            <h2 className="scifi-section-title">Common <span className="scifi-hl">Questions</span></h2>
                            <p className="scifi-body-text" style={{ marginTop: "16px" }}>Still have questions? Our team is available 24/7 for a free consultation.</p>
                            <button className="scifi-btn-orange" style={{ marginTop: "24px" }}>Talk To An Expert</button>
                        </div>
                        <div className="scifi-faq-right">
                            {faqs.map((item, i) => (
                                <details key={i} className="scifi-faq-item">
                                    <summary className="scifi-faq-q">{item.q}<span className="scifi-faq-icon">+</span></summary>
                                    <p className="scifi-faq-a">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED */}
                <section className="scifi-related">
                    <div className="scifi-related-inner">
                        <span className="scifi-eyebrow">Explore More</span>
                        <h2 className="scifi-section-title" style={{ marginBottom: "32px" }}>Related <span className="scifi-hl">Services</span></h2>
                        <div className="scifi-related-grid">
                            {relatedServices.map((rs) => (
                                <Link key={rs.slug} href={`/InnerServices/${rs.slug}`}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "#fafafa", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "8px", textDecoration: "none", transition: "all 0.25s" }}
                                    onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "#f57c15"; el.style.background = "rgba(245,124,21,0.03)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 6px 18px rgba(245,124,21,0.08)"; const a = el.querySelector(".scifi-rca") as HTMLElement; if (a) { a.style.opacity = "1"; a.style.transform = "translate(0,0)"; } }}
                                    onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "rgba(0,0,0,0.07)"; el.style.background = "#fafafa"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; const a = el.querySelector(".scifi-rca") as HTMLElement; if (a) { a.style.opacity = "0"; a.style.transform = "translate(-4px,4px)"; } }}
                                >
                                    <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: "13px", fontWeight: 700, color: "#222" }}>{rs.label}</span>
                                    <span className="scifi-rca" style={{ fontSize: "16px", color: "#f57c15", opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.25s", display: "inline-block" }}>↗</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="scifi-cta">
                    <div className="scifi-cta-inner">
                        <span className="scifi-eyebrow" style={{ color: "rgba(245,124,21,0.8)" }}>Get Started Today</span>
                        <h2 className="scifi-cta-title">Ready To Build Your<br /><span className="scifi-hl">Universe?</span></h2>
                        <p className="scifi-cta-sub">Schedule a free consultation with our sci-fi writing specialists. Your world is waiting to be written.</p>
                        <div className="scifi-cta-btns">
                            <button className="scifi-btn-orange scifi-btn-lg">Get A Free Quote</button>
                            <button className="scifi-btn-outline scifi-btn-lg">(646) 298 6438</button>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                .scifi-page{font-family:'Raleway',sans-serif;color:#111;background:#fff;}
                .scifi-eyebrow{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#f57c15;margin-bottom:14px;}
                .scifi-section-title{font-family:'Oswald',sans-serif;font-size:clamp(1.9rem,3.5vw,2.8rem);color:#111;text-transform:uppercase;line-height:1.1;margin:0 0 20px 0;letter-spacing:-0.3px;}
                .scifi-hl{color:#f57c15;}
                .scifi-body-text{font-size:14px;color:#555;line-height:1.75;margin:0 0 16px 0;}
                .scifi-section-head{margin-bottom:52px;}
                .scifi-head-center{text-align:center;}
                .scifi-btn-orange{display:inline-flex;align-items:center;gap:8px;background:#f57c15;color:#fff;border:none;padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background 0.25s,transform 0.2s,box-shadow 0.25s;box-shadow:0 5px 18px rgba(245,124,21,0.28);}
                .scifi-btn-orange:hover{background:#d96c0d;transform:translateY(-2px);box-shadow:0 8px 24px rgba(245,124,21,0.35);}
                .scifi-btn-outline{display:inline-flex;align-items:center;background:transparent;color:#333;border:1.5px solid rgba(0,0,0,0.18);padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:border-color 0.25s,color 0.25s;}
                .scifi-btn-outline:hover{border-color:#f57c15;color:#f57c15;}
                .scifi-btn-lg{padding:15px 36px;font-size:12.5px;}
                .scifi-hero{background:#060606;padding:60px 24px 80px;position:relative;overflow:hidden;width:100%;}
                .scifi-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 55% 50% at 30% 50%,rgba(245,124,21,0.07) 0%,transparent 65%),radial-gradient(ellipse 40% 60% at 80% 20%,rgba(245,124,21,0.04) 0%,transparent 60%);pointer-events:none;}
                .scifi-hero-grid{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:1fr 260px;gap:40px;align-items:start;position:relative;z-index:2;}
                .scifi-hero-inner{padding-top:10px;}
                .scifi-breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:28px;}
                .scifi-bc-sep{color:rgba(255,255,255,0.2);font-size:11px;}
                .scifi-bc-current{font-size:11px;font-weight:700;color:#f57c15;letter-spacing:0.5px;}
                .scifi-hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(245,124,21,0.08);border:1px solid rgba(245,124,21,0.2);border-radius:30px;padding:6px 16px;font-size:10.5px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:#f57c15;margin-bottom:28px;}
                .scifi-tag-dot{width:5px;height:5px;border-radius:50%;background:#f57c15;flex-shrink:0;}
                .scifi-hero-title{font-family:'Oswald',sans-serif;font-size:clamp(2.8rem,6vw,5.2rem);color:#fff;line-height:0.95;text-transform:uppercase;letter-spacing:-1px;margin:0 0 24px 0;}
                .scifi-hero-em{color:#f57c15;font-style:italic;}
                .scifi-hero-sub{font-size:14.5px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:520px;margin:0 0 36px 0;font-weight:400;}
                .scifi-hero-actions{display:flex;flex-wrap:nowrap;gap:12px;margin-bottom:32px;align-items:center;}
                .scifi-hero-actions .scifi-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .scifi-hero-actions .scifi-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                .scifi-trust-row{display:flex;flex-wrap:wrap;gap:8px;}
                .scifi-trust-pill{font-size:11px;font-weight:700;color:rgba(255,255,255,0.45);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:6px 12px;letter-spacing:0.3px;}
                .scifi-hero-sidebar{display:flex;flex-direction:column;gap:3px;padding-top:64px;}
                .scifi-sidebar-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px 18px;display:flex;flex-direction:column;gap:4px;transition:border-color 0.3s;}
                .scifi-sidebar-card:hover{border-color:rgba(245,124,21,0.25);}
                .scifi-sc-val{font-family:'Oswald',sans-serif;font-size:28px;font-weight:700;color:#f57c15;line-height:1;}
                .scifi-sc-label{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}
                .scifi-intro{background:#fff;padding:90px 24px;border-bottom:1px solid rgba(0,0,0,0.06);}
                .scifi-intro-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 340px;gap:70px;align-items:center;}
                .scifi-visual-box{background:#060606;border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:32px 28px;position:relative;overflow:hidden;}
                .scifi-vb-accent{position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#f57c15,rgba(245,124,21,0.3));}
                .scifi-vb-line{position:absolute;top:0;left:28px;width:1px;bottom:0;background:rgba(245,124,21,0.08);}
                .scifi-vb-content{display:flex;flex-direction:column;gap:4px;padding:16px 0 16px 20px;}
                .scifi-vb-num{font-family:'Oswald',sans-serif;font-size:32px;font-weight:700;color:#f57c15;line-height:1;}
                .scifi-vb-label{font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}
                .scifi-vb-divider{height:1px;background:rgba(255,255,255,0.05);}
                .scifi-features{background:#f9f8f7;padding:90px 24px;}
                .scifi-features-inner{max-width:1200px;margin:0 auto;}
                .scifi-features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
                .scifi-feature-card{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;padding:32px 28px;transition:border-color 0.3s,box-shadow 0.3s,transform 0.3s;}
                .scifi-feature-card:hover{border-color:rgba(245,124,21,0.25);box-shadow:0 10px 30px rgba(245,124,21,0.07);transform:translateY(-3px);}
                .scifi-fc-num{display:block;font-family:'Oswald',sans-serif;font-size:36px;font-weight:700;color:rgba(245,124,21,0.12);line-height:1;margin-bottom:-6px;user-select:none;}
                .scifi-fc-title{font-family:'Oswald',sans-serif;font-size:16px;font-weight:600;color:#111;text-transform:uppercase;letter-spacing:0.3px;margin:0 0 12px 0;}
                .scifi-fc-desc{font-size:13px;color:#666;line-height:1.7;margin:0;}
                .scifi-cats{background:#060606;padding:90px 24px;}
                .scifi-cats-inner{max-width:1100px;margin:0 auto;}
                .scifi-cats .scifi-section-title{color:#fff;}
                .scifi-cats-sub{font-size:13.5px;color:rgba(255,255,255,0.35);margin:0;}
                .scifi-cats-grid{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;}
                .scifi-cat-pill{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:6px;font-size:12.5px;font-weight:600;color:rgba(255,255,255,0.65);transition:all 0.25s;cursor:default;}
                .scifi-cat-pill:hover{background:rgba(245,124,21,0.1);border-color:rgba(245,124,21,0.3);color:#f57c15;}
                .scifi-cp-icon{color:#f57c15;font-size:8px;}
                .scifi-process{background:#fff;padding:90px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .scifi-process-inner{max-width:900px;margin:0 auto;}
                .scifi-steps{display:flex;flex-direction:column;}
                .scifi-step-row{display:flex;gap:24px;align-items:stretch;}
                .scifi-step-row:hover .scifi-step-node{background:#f57c15;}
                .scifi-step-row:hover .scifi-step-num{color:#fff;}
                .scifi-step-left{display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:52px;}
                .scifi-step-node{width:52px;height:52px;border-radius:50%;background:#fff;border:2px solid #f57c15;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background 0.3s;}
                .scifi-step-num{font-family:'Oswald',sans-serif;font-size:14px;font-weight:700;color:#f57c15;transition:color 0.3s;}
                .scifi-step-vline{width:2px;flex:1;background:rgba(245,124,21,0.15);min-height:24px;}
                .scifi-step-body{padding:10px 0 36px;flex:1;}
                .scifi-step-title{font-family:'Oswald',sans-serif;font-size:17px;font-weight:600;color:#111;text-transform:uppercase;margin:0 0 8px 0;}
                .scifi-step-desc{font-size:13.5px;color:#666;line-height:1.65;margin:0;}
                .scifi-faq{background:#f9f8f7;padding:90px 24px;}
                .scifi-faq-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:320px 1fr;gap:70px;align-items:start;}
                .scifi-faq-item{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;margin-bottom:6px;overflow:hidden;transition:border-color 0.25s;}
                .scifi-faq-item[open]{border-color:rgba(245,124,21,0.25);}
                .scifi-faq-q{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 20px;font-family:'Raleway',sans-serif;font-size:13.5px;font-weight:700;color:#111;cursor:pointer;list-style:none;user-select:none;}
                .scifi-faq-q::-webkit-details-marker{display:none;}
                .scifi-faq-icon{font-size:20px;font-weight:300;color:#f57c15;flex-shrink:0;line-height:1;transition:transform 0.25s;}
                .scifi-faq-item[open] .scifi-faq-icon{transform:rotate(45deg);}
                .scifi-faq-a{padding:14px 20px 18px;font-size:13px;color:#666;line-height:1.7;margin:0;border-top:1px solid rgba(0,0,0,0.04);}
                .scifi-related{background:#fff;padding:70px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .scifi-related-inner{max-width:1200px;margin:0 auto;}
                .scifi-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
                .scifi-cta{background:#060606;padding:110px 24px;text-align:center;position:relative;overflow:hidden;}
                .scifi-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(245,124,21,0.07) 0%,transparent 70%);pointer-events:none;}
                .scifi-cta-inner{position:relative;z-index:2;}
                .scifi-cta-title{font-family:'Oswald',sans-serif;font-size:clamp(2.5rem,5vw,4.2rem);color:#fff;text-transform:uppercase;line-height:1.05;margin:8px 0 20px 0;letter-spacing:-0.5px;}
                .scifi-cta-sub{font-size:14.5px;color:rgba(255,255,255,0.38);max-width:460px;margin:0 auto 36px;line-height:1.7;}
                .scifi-cta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:nowrap;align-items:center;}
                .scifi-cta .scifi-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .scifi-cta .scifi-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                @media (max-width:1024px){
                    .scifi-hero-grid{grid-template-columns:1fr;}
                    .scifi-hero-sidebar{padding-top:0;display:grid;grid-template-columns:repeat(4,1fr);}
                    .scifi-intro-inner{grid-template-columns:1fr;gap:40px;}
                    .scifi-faq-inner{grid-template-columns:1fr;gap:40px;}
                }
                @media (max-width:768px){
                    .scifi-features-grid{grid-template-columns:1fr;}
                    .scifi-related-grid{grid-template-columns:repeat(2,1fr);}
                    .scifi-hero-sidebar{grid-template-columns:repeat(2,1fr);}
                }
                @media (max-width:520px){
                    .scifi-related-grid{grid-template-columns:1fr;}
                    .scifi-cta-btns{flex-wrap:wrap;}
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