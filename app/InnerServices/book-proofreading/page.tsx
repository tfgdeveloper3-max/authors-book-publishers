"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const relatedServices = [
    { label: "Book Editing", slug: "book-editing" },
    { label: "Book Formatting", slug: "book-formatting" },
    { label: "Book Publishing", slug: "book-publishing" },
    { label: "Book Writing", slug: "book-writing" },
    { label: "Ebook Creation", slug: "ebook-creation" },
    { label: "Children's Book Editing", slug: "childrens-book-editing" },
];

const categories = [
    { icon: "✦", label: "Fiction Novels" },
    { icon: "✦", label: "Non-Fiction Books" },
    { icon: "✦", label: "Memoirs & Biographies" },
    { icon: "✦", label: "Children's Books" },
    { icon: "✦", label: "Academic Papers" },
    { icon: "✦", label: "Business Books" },
    { icon: "✦", label: "Self-Help Guides" },
    { icon: "✦", label: "Poetry Collections" },
    { icon: "✦", label: "Short Story Anthologies" },
    { icon: "✦", label: "Screenplays & Scripts" },
    { icon: "✦", label: "E-Books" },
    { icon: "✦", label: "Print-On-Demand Files" },
];

const features = [
    { num: "01", title: "Spelling & Grammar", desc: "Every spelling error, grammatical mistake, and typographical slip is identified and corrected — including homophones and context-dependent errors spell-checkers miss." },
    { num: "02", title: "Punctuation Precision", desc: "Commas, semicolons, apostrophes, em dashes — every punctuation mark is reviewed for correct usage and consistent application throughout the manuscript." },
    { num: "03", title: "Style Consistency", desc: "Character name spellings, hyphenation conventions, capitalisation rules, and numerical formatting are audited for total consistency from page one to the last." },
    { num: "04", title: "Formatting Review", desc: "Paragraph spacing, indentation, chapter heading formats, and page layout irregularities are identified and flagged for correction." },
    { num: "05", title: "Tracked Changes Delivery", desc: "Every correction is delivered with tracked changes in Microsoft Word or Google Docs — giving you full visibility and approval over every amendment made." },
    { num: "06", title: "Fast Turnaround Options", desc: "Standard delivery in 3–5 business days. Rush 48-hour service available for time-sensitive projects. We never compromise accuracy for speed." },
];

const steps = [
    { num: "01", title: "Manuscript Submission", desc: "You upload your manuscript in Word, PDF, or Google Docs format along with any style guide or specific instructions." },
    { num: "02", title: "First Pass — Errors", desc: "Our proofreader conducts a thorough line-by-line review, catching all spelling, grammar, and punctuation errors." },
    { num: "03", title: "Second Pass — Consistency", desc: "A dedicated consistency pass audits character names, formatting, capitalisation, and house style throughout the entire document." },
    { num: "04", title: "Tracked Changes Delivery", desc: "The corrected manuscript is returned with all changes tracked and a proofreading report summarising patterns found." },
    { num: "05", title: "Query Resolution", desc: "Any queries or ambiguous corrections are flagged for your decision — ensuring you retain full editorial control." },
];

const faqs = [
    { q: "What is the difference between proofreading and editing?", a: "Proofreading is the final stage — correcting errors in spelling, grammar, punctuation, and formatting in an otherwise complete manuscript. Editing is a deeper process that addresses structure, clarity, pacing, and content. Proofreading always comes last." },
    { q: "Do you work with tracked changes?", a: "Yes. All corrections are delivered with tracked changes in Microsoft Word or as comments in Google Docs, so you can review and accept or reject every amendment." },
    { q: "How long does proofreading take?", a: "A standard manuscript of 80,000 words takes 3–5 business days. Rush 48-hour service is available. We provide a firm delivery date before work begins." },
    { q: "Do I need to proofread if I have already self-edited?", a: "Yes. Authors are the worst proofreaders of their own work — your brain reads what it intended to write, not what is actually on the page. A professional proofreader brings fresh eyes that catch errors invisible to the author." },
    { q: "What file formats do you accept?", a: "We accept Microsoft Word (.doc/.docx), Google Docs, PDF, and plain text files. We return all corrections in Word with tracked changes unless otherwise requested." },
];

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="bkpf-page">

                {/* HERO */}
                <section className="bkpf-hero">
                    <div className="bkpf-hero-bg" />
                    <div className="bkpf-hero-grid">
                        <div className="bkpf-hero-inner">
                            <nav className="bkpf-breadcrumb">
                                <Link href="/" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Home</Link>
                                <span className="bkpf-bc-sep">›</span>
                                <Link href="/services" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Services</Link>
                                <span className="bkpf-bc-sep">›</span>
                                <span className="bkpf-bc-current">Book Proofreading</span>
                            </nav>
                            <div className="bkpf-hero-tag"><span className="bkpf-tag-dot" />Editing & Publishing</div>
                            <h1 className="bkpf-hero-title">Professional<br /><em className="bkpf-hero-em">Book Proofreading</em><br />Services</h1>
                            <p className="bkpf-hero-sub">Every typo removed. Every inconsistency caught. Every sentence polished to perfection. Our professional proofreaders deliver the final layer of precision your manuscript deserves before it meets the world.</p>
                            <div className="bkpf-hero-actions">
                                <button className="bkpf-btn-orange">Get A Free Quote</button>
                                <button className="bkpf-btn-outline">(646) 298 6438</button>
                            </div>
                            <div className="bkpf-trust-row">
                                <span className="bkpf-trust-pill">✓ Line-by-Line Review</span>
                                <span className="bkpf-trust-pill">✓ Style Consistency</span>
                                <span className="bkpf-trust-pill">✓ Fast Turnaround</span>
                                <span className="bkpf-trust-pill">✓ Track Changes Delivery</span>
                            </div>
                        </div>
                        <div className="bkpf-hero-sidebar">
                            <div className="bkpf-sidebar-card"><span className="bkpf-sc-val">50K+</span><span className="bkpf-sc-label">Pages Proofread</span></div>
                            <div className="bkpf-sidebar-card"><span className="bkpf-sc-val">48–72hr</span><span className="bkpf-sc-label">Rush Turnaround</span></div>
                            <div className="bkpf-sidebar-card"><span className="bkpf-sc-val">99.9%</span><span className="bkpf-sc-label">Error Detection Rate</span></div>
                            <div className="bkpf-sidebar-card"><span className="bkpf-sc-val">All</span><span className="bkpf-sc-label">Genres & Formats</span></div>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="bkpf-intro">
                    <div className="bkpf-intro-inner">
                        <div className="bkpf-intro-text">
                            <span className="bkpf-eyebrow">What We Do</span>
                            <h2 className="bkpf-section-title">One Typo Can Cost You<br /><span className="bkpf-hl">A Reader's Trust Forever.</span></h2>
                            <p className="bkpf-body-text">Proofreading is the final defence between your manuscript and the reader. It is the stage where every remaining spelling error, punctuation inconsistency, grammatical slip, and formatting irregularity is caught and corrected — before they appear in print and undermine your credibility as an author.</p>
                            <p className="bkpf-body-text">Our professional proofreaders work with a meticulous, multi-pass system that catches what spell-checkers miss and what exhausted authors overlook after months of writing. We deliver clean, consistent, error-free manuscripts with tracked changes so you see and approve every correction.</p>
                            <button className="bkpf-btn-orange" style={{ marginTop: "8px" }}>Get A Free Sample Proofread</button>
                        </div>
                        <div className="bkpf-intro-visual">
                            <div className="bkpf-visual-box">
                                <div className="bkpf-vb-accent" />
                                <div className="bkpf-vb-line" />
                                <div className="bkpf-vb-content">
                                    <span className="bkpf-vb-num">Multi-pass</span>
                                    <span className="bkpf-vb-label">Review system</span>
                                </div>
                                <div className="bkpf-vb-divider" />
                                <div className="bkpf-vb-content">
                                    <span className="bkpf-vb-num">48–72hr</span>
                                    <span className="bkpf-vb-label">Standard delivery</span>
                                </div>
                                <div className="bkpf-vb-divider" />
                                <div className="bkpf-vb-content">
                                    <span className="bkpf-vb-num">Track</span>
                                    <span className="bkpf-vb-label">Changes included</span>
                                </div>
                                <div className="bkpf-vb-divider" />
                                <div className="bkpf-vb-content">
                                    <span className="bkpf-vb-num">All</span>
                                    <span className="bkpf-vb-label">Formats accepted</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section className="bkpf-features">
                    <div className="bkpf-features-inner">
                        <div className="bkpf-section-head">
                            <span className="bkpf-eyebrow">Why Choose Us</span>
                            <h2 className="bkpf-section-title">The Belmont <span className="bkpf-hl">Difference</span></h2>
                        </div>
                        <div className="bkpf-features-grid">
                            {features.map((f) => (
                                <div key={f.num} className="bkpf-feature-card">
                                    <span className="bkpf-fc-num">{f.num}</span>
                                    <h3 className="bkpf-fc-title">{f.title}</h3>
                                    <p className="bkpf-fc-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CATEGORIES */}
                <section className="bkpf-cats">
                    <div className="bkpf-cats-inner">
                        <div className="bkpf-section-head bkpf-head-center">
                            <span className="bkpf-eyebrow">Document Types We Proofread</span>
                            <h2 className="bkpf-section-title">We Proofread Every <span className="bkpf-hl">Format & Genre</span></h2>
                            <p className="bkpf-cats-sub">From literary novels to academic papers — our proofreaders are specialists across every written format.</p>
                        </div>
                        <div className="bkpf-cats-grid">
                            {categories.map((c) => (
                                <div key={c.label} className="bkpf-cat-pill">
                                    <span className="bkpf-cp-icon">{c.icon}</span>{c.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="bkpf-process">
                    <div className="bkpf-process-inner">
                        <div className="bkpf-section-head bkpf-head-center">
                            <span className="bkpf-eyebrow">How It Works</span>
                            <h2 className="bkpf-section-title">Our <span className="bkpf-hl">Proofreading Process</span></h2>
                        </div>
                        <div className="bkpf-steps">
                            {steps.map((s, i) => (
                                <div key={s.num} className="bkpf-step-row">
                                    <div className="bkpf-step-left">
                                        <div className="bkpf-step-node"><span className="bkpf-step-num">{s.num}</span></div>
                                        {i < steps.length - 1 && <div className="bkpf-step-vline" />}
                                    </div>
                                    <div className="bkpf-step-body">
                                        <h3 className="bkpf-step-title">{s.title}</h3>
                                        <p className="bkpf-step-desc">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="bkpf-faq">
                    <div className="bkpf-faq-inner">
                        <div className="bkpf-faq-left">
                            <span className="bkpf-eyebrow">FAQ</span>
                            <h2 className="bkpf-section-title">Common <span className="bkpf-hl">Questions</span></h2>
                            <p className="bkpf-body-text" style={{ marginTop: "16px" }}>Still have questions? Our team is available 24/7 for a free consultation.</p>
                            <button className="bkpf-btn-orange" style={{ marginTop: "24px" }}>Talk To An Expert</button>
                        </div>
                        <div className="bkpf-faq-right">
                            {faqs.map((item, i) => (
                                <details key={i} className="bkpf-faq-item">
                                    <summary className="bkpf-faq-q">{item.q}<span className="bkpf-faq-icon">+</span></summary>
                                    <p className="bkpf-faq-a">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED */}
                <section className="bkpf-related">
                    <div className="bkpf-related-inner">
                        <span className="bkpf-eyebrow">Explore More</span>
                        <h2 className="bkpf-section-title" style={{ marginBottom: "32px" }}>Related <span className="bkpf-hl">Services</span></h2>
                        <div className="bkpf-related-grid">
                            {relatedServices.map((rs) => (
                                <Link key={rs.slug} href={`/InnerServices/${rs.slug}`}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "#fafafa", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "8px", textDecoration: "none", transition: "all 0.25s" }}
                                    onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "#f57c15"; el.style.background = "rgba(245,124,21,0.03)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 6px 18px rgba(245,124,21,0.08)"; const a = el.querySelector(".bkpf-rca") as HTMLElement; if (a) { a.style.opacity = "1"; a.style.transform = "translate(0,0)"; } }}
                                    onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "rgba(0,0,0,0.07)"; el.style.background = "#fafafa"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; const a = el.querySelector(".bkpf-rca") as HTMLElement; if (a) { a.style.opacity = "0"; a.style.transform = "translate(-4px,4px)"; } }}
                                >
                                    <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: "13px", fontWeight: 700, color: "#222" }}>{rs.label}</span>
                                    <span className="bkpf-rca" style={{ fontSize: "16px", color: "#f57c15", opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.25s", display: "inline-block" }}>↗</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bkpf-cta">
                    <div className="bkpf-cta-inner">
                        <span className="bkpf-eyebrow" style={{ color: "rgba(245,124,21,0.8)" }}>Get Started Today</span>
                        <h2 className="bkpf-cta-title">Ready For A Flawless<br /><span className="bkpf-hl">Manuscript?</span></h2>
                        <p className="bkpf-cta-sub">Upload your manuscript for a free sample proofread of the first 1,000 words. See the difference professional proofreading makes.</p>
                        <div className="bkpf-cta-btns">
                            <button className="bkpf-btn-orange bkpf-btn-lg">Get A Free Quote</button>
                            <button className="bkpf-btn-outline bkpf-btn-lg">(646) 298 6438</button>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                .bkpf-page{font-family:'Raleway',sans-serif;color:#111;background:#fff;}
                .bkpf-eyebrow{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#f57c15;margin-bottom:14px;}
                .bkpf-section-title{font-family:'Oswald',sans-serif;font-size:clamp(1.9rem,3.5vw,2.8rem);color:#111;text-transform:uppercase;line-height:1.1;margin:0 0 20px 0;letter-spacing:-0.3px;}
                .bkpf-hl{color:#f57c15;}
                .bkpf-body-text{font-size:14px;color:#555;line-height:1.75;margin:0 0 16px 0;}
                .bkpf-section-head{margin-bottom:52px;}
                .bkpf-head-center{text-align:center;}
                .bkpf-btn-orange{display:inline-flex;align-items:center;gap:8px;background:#f57c15;color:#fff;border:none;padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background 0.25s,transform 0.2s,box-shadow 0.25s;box-shadow:0 5px 18px rgba(245,124,21,0.28);}
                .bkpf-btn-orange:hover{background:#d96c0d;transform:translateY(-2px);box-shadow:0 8px 24px rgba(245,124,21,0.35);}
                .bkpf-btn-outline{display:inline-flex;align-items:center;background:transparent;color:#333;border:1.5px solid rgba(0,0,0,0.18);padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:border-color 0.25s,color 0.25s;}
                .bkpf-btn-outline:hover{border-color:#f57c15;color:#f57c15;}
                .bkpf-btn-lg{padding:15px 36px;font-size:12.5px;}
                .bkpf-hero{background:#060606;padding:60px 24px 80px;position:relative;overflow:hidden;width:100%;}
                .bkpf-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 55% 50% at 30% 50%,rgba(245,124,21,0.07) 0%,transparent 65%),radial-gradient(ellipse 40% 60% at 80% 20%,rgba(245,124,21,0.04) 0%,transparent 60%);pointer-events:none;}
                .bkpf-hero-grid{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:1fr 260px;gap:40px;align-items:start;position:relative;z-index:2;}
                .bkpf-hero-inner{padding-top:10px;}
                .bkpf-breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:28px;}
                .bkpf-bc-sep{color:rgba(255,255,255,0.2);font-size:11px;}
                .bkpf-bc-current{font-size:11px;font-weight:700;color:#f57c15;letter-spacing:0.5px;}
                .bkpf-hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(245,124,21,0.08);border:1px solid rgba(245,124,21,0.2);border-radius:30px;padding:6px 16px;font-size:10.5px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:#f57c15;margin-bottom:28px;}
                .bkpf-tag-dot{width:5px;height:5px;border-radius:50%;background:#f57c15;flex-shrink:0;}
                .bkpf-hero-title{font-family:'Oswald',sans-serif;font-size:clamp(2.8rem,6vw,5.2rem);color:#fff;line-height:0.95;text-transform:uppercase;letter-spacing:-1px;margin:0 0 24px 0;}
                .bkpf-hero-em{color:#f57c15;font-style:italic;}
                .bkpf-hero-sub{font-size:14.5px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:520px;margin:0 0 36px 0;font-weight:400;}
                .bkpf-hero-actions{display:flex;flex-wrap:nowrap;gap:12px;margin-bottom:32px;align-items:center;}
                .bkpf-hero-actions .bkpf-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .bkpf-hero-actions .bkpf-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                .bkpf-trust-row{display:flex;flex-wrap:wrap;gap:8px;}
                .bkpf-trust-pill{font-size:11px;font-weight:700;color:rgba(255,255,255,0.45);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:6px 12px;letter-spacing:0.3px;}
                .bkpf-hero-sidebar{display:flex;flex-direction:column;gap:3px;padding-top:64px;}
                .bkpf-sidebar-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px 18px;display:flex;flex-direction:column;gap:4px;transition:border-color 0.3s;}
                .bkpf-sidebar-card:hover{border-color:rgba(245,124,21,0.25);}
                .bkpf-sc-val{font-family:'Oswald',sans-serif;font-size:28px;font-weight:700;color:#f57c15;line-height:1;}
                .bkpf-sc-label{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}


                /* ══ INTRO ══ */
                .bkpf-intro { background: #fff; padding: 90px 24px; border-bottom: 1px solid rgba(0,0,0,0.06); }
                .bkpf-intro-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 340px; gap: 70px; align-items: center; }
                .bkpf-intro-visual { display: flex; flex-direction: column; }
                .bkpf-visual-box { background: #060606; border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 32px 28px; position: relative; overflow: hidden; }
                .bkpf-vb-accent { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #f57c15, rgba(245,124,21,0.3)); }
                .bkpf-vb-line { position: absolute; top: 0; left: 28px; width: 1px; bottom: 0; background: rgba(245,124,21,0.08); }
                .bkpf-vb-content { display: flex; flex-direction: column; gap: 4px; padding: 16px 0 16px 20px; }
                .bkpf-vb-num { font-family: 'Oswald', sans-serif; font-size: 32px; font-weight: 700; color: #f57c15; line-height: 1; }
                .bkpf-vb-label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.3); }
                .bkpf-vb-divider { height: 1px; background: rgba(255,255,255,0.05); }


                .bkpf-features{background:#f9f8f7;padding:90px 24px;}
                .bkpf-features-inner{max-width:1200px;margin:0 auto;}
                .bkpf-features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
                .bkpf-feature-card{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;padding:32px 28px;transition:border-color 0.3s,box-shadow 0.3s,transform 0.3s;}
                .bkpf-feature-card:hover{border-color:rgba(245,124,21,0.25);box-shadow:0 10px 30px rgba(245,124,21,0.07);transform:translateY(-3px);}
                .bkpf-fc-num{display:block;font-family:'Oswald',sans-serif;font-size:36px;font-weight:700;color:rgba(245,124,21,0.12);line-height:1;margin-bottom:-6px;user-select:none;}
                .bkpf-fc-title{font-family:'Oswald',sans-serif;font-size:16px;font-weight:600;color:#111;text-transform:uppercase;letter-spacing:0.3px;margin:0 0 12px 0;}
                .bkpf-fc-desc{font-size:13px;color:#666;line-height:1.7;margin:0;}
                .bkpf-cats{background:#060606;padding:90px 24px;}
                .bkpf-cats-inner{max-width:1100px;margin:0 auto;}
                .bkpf-cats .bkpf-section-title{color:#fff;}
                .bkpf-cats-sub{font-size:13.5px;color:rgba(255,255,255,0.35);margin:0;}
                .bkpf-cats-grid{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;}
                .bkpf-cat-pill{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:6px;font-size:12.5px;font-weight:600;color:rgba(255,255,255,0.65);transition:all 0.25s;cursor:default;}
                .bkpf-cat-pill:hover{background:rgba(245,124,21,0.1);border-color:rgba(245,124,21,0.3);color:#f57c15;}
                .bkpf-cp-icon{color:#f57c15;font-size:8px;}
                .bkpf-process{background:#fff;padding:90px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .bkpf-process-inner{max-width:900px;margin:0 auto;}
                .bkpf-steps{display:flex;flex-direction:column;}
                .bkpf-step-row{display:flex;gap:24px;align-items:stretch;}
                .bkpf-step-row:hover .bkpf-step-node{background:#f57c15;}
                .bkpf-step-row:hover .bkpf-step-num{color:#fff;}
                .bkpf-step-left{display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:52px;}
                .bkpf-step-node{width:52px;height:52px;border-radius:50%;background:#fff;border:2px solid #f57c15;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background 0.3s;}
                .bkpf-step-num{font-family:'Oswald',sans-serif;font-size:14px;font-weight:700;color:#f57c15;transition:color 0.3s;}
                .bkpf-step-vline{width:2px;flex:1;background:rgba(245,124,21,0.15);min-height:24px;}
                .bkpf-step-body{padding:10px 0 36px;flex:1;}
                .bkpf-step-title{font-family:'Oswald',sans-serif;font-size:17px;font-weight:600;color:#111;text-transform:uppercase;margin:0 0 8px 0;}
                .bkpf-step-desc{font-size:13.5px;color:#666;line-height:1.65;margin:0;}
                .bkpf-faq{background:#f9f8f7;padding:90px 24px;}
                .bkpf-faq-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:320px 1fr;gap:70px;align-items:start;}
                .bkpf-faq-item{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;margin-bottom:6px;overflow:hidden;transition:border-color 0.25s;}
                .bkpf-faq-item[open]{border-color:rgba(245,124,21,0.25);}
                .bkpf-faq-q{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 20px;font-family:'Raleway',sans-serif;font-size:13.5px;font-weight:700;color:#111;cursor:pointer;list-style:none;user-select:none;}
                .bkpf-faq-q::-webkit-details-marker{display:none;}
                .bkpf-faq-icon{font-size:20px;font-weight:300;color:#f57c15;flex-shrink:0;line-height:1;transition:transform 0.25s;}
                .bkpf-faq-item[open] .bkpf-faq-icon{transform:rotate(45deg);}
                .bkpf-faq-a{padding:14px 20px 18px;font-size:13px;color:#666;line-height:1.7;margin:0;border-top:1px solid rgba(0,0,0,0.04);}
                .bkpf-related{background:#fff;padding:70px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .bkpf-related-inner{max-width:1200px;margin:0 auto;}
                .bkpf-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
                .bkpf-cta{background:#060606;padding:110px 24px;text-align:center;position:relative;overflow:hidden;}
                .bkpf-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(245,124,21,0.07) 0%,transparent 70%);pointer-events:none;}
                .bkpf-cta-inner{position:relative;z-index:2;}
                .bkpf-cta-title{font-family:'Oswald',sans-serif;font-size:clamp(2.5rem,5vw,4.2rem);color:#fff;text-transform:uppercase;line-height:1.05;margin:8px 0 20px 0;letter-spacing:-0.5px;}
                .bkpf-cta-sub{font-size:14.5px;color:rgba(255,255,255,0.38);max-width:460px;margin:0 auto 36px;line-height:1.7;}
                .bkpf-cta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:nowrap;align-items:center;}
                .bkpf-cta .bkpf-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .bkpf-cta .bkpf-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                @media (max-width:1024px){
                    .bkpf-hero-grid{grid-template-columns:1fr;}
                    .bkpf-hero-sidebar{padding-top:0;display:grid;grid-template-columns:repeat(4,1fr);}
                    .bkpf-intro-inner{grid-template-columns:1fr;gap:40px;}
                    .bkpf-faq-inner{grid-template-columns:1fr;gap:40px;}
                }
                @media (max-width:768px){
                    .bkpf-features-grid{grid-template-columns:1fr;}
                    .bkpf-related-grid{grid-template-columns:repeat(2,1fr);}
                    .bkpf-hero-sidebar{grid-template-columns:repeat(2,1fr);}
                }
                @media (max-width:520px){
                    .bkpf-related-grid{grid-template-columns:1fr;}
                    .bkpf-cta-btns{flex-wrap:wrap;}
                }
            `}</style>
            </main>
            <FooterSection />
        </>
    );
}