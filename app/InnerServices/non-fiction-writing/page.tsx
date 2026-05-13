"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const relatedServices = [
    { label: "Book Writing", slug: "book-writing" },
    { label: "Ghostwriting", slug: "ghostwriting" },
    { label: "Memoir Writing", slug: "memoir-writing" },
    { label: "SEO Content Writing", slug: "seo-content-writing" },
    { label: "Book Editing", slug: "book-editing" },
    { label: "Book Publishing", slug: "book-publishing" },
];

const categories = [
    { icon: "✦", label: "Business & Leadership" },
    { icon: "✦", label: "Self-Help & Personal Development" },
    { icon: "✦", label: "Health & Wellness" },
    { icon: "✦", label: "Investigative Journalism" },
    { icon: "✦", label: "True Crime" },
    { icon: "✦", label: "Science & Technology" },
    { icon: "✦", label: "Politics & Current Affairs" },
    { icon: "✦", label: "Psychology & Behaviour" },
    { icon: "✦", label: "Spirituality & Mindfulness" },
    { icon: "✦", label: "Education & Academic" },
    { icon: "✦", label: "Finance & Investing" },
    { icon: "✦", label: "Biography & Profile" },
];

const features = [
    { num: "01", title: "Expertise Extraction", desc: "We conduct structured interviews to draw out your deepest knowledge, frameworks, and insights — transforming what is in your head into compelling, organized prose." },
    { num: "02", title: "Research & Fact-Checking", desc: "Every claim is supported. Our writers conduct thorough research, cite credible sources, and ensure your book can withstand expert scrutiny." },
    { num: "03", title: "Narrative Non-Fiction Craft", desc: "Great non-fiction reads like a novel. We apply storytelling techniques — scene-setting, character, tension — to make even complex ideas gripping and accessible." },
    { num: "04", title: "Platform & Brand Alignment", desc: "Your book is your most powerful positioning tool. We align tone, messaging, and content with your existing brand, platform, and audience." },
    { num: "05", title: "Full Copyright Ownership", desc: "All research, writing, and intellectual property transfers entirely to you. The ideas are yours — the book is yours." },
    { num: "06", title: "Publisher & Agent Ready", desc: "We deliver manuscripts formatted to the submission standards of top publishers and agents — with proposal writing support available." },
];

const steps = [
    { num: "01", title: "Discovery & Strategy", desc: "We define your book's core thesis, target audience, competitive positioning, and the transformation you want to create in your readers." },
    { num: "02", title: "Expertise Interview Series", desc: "We conduct structured recorded interviews to extract your knowledge, frameworks, stories, and insights — the raw material of your book." },
    { num: "03", title: "Outline & Chapter Structure", desc: "A detailed chapter-by-chapter outline is built, organizing your ideas into a compelling, logical narrative arc approved by you." },
    { num: "04", title: "Research & Drafting", desc: "The manuscript is written with your expertise at the centre, supplemented by thorough research and cited sources." },
    { num: "05", title: "Final Delivery", desc: "A polished, publish-ready non-fiction book delivered with full copyright — ready for agents, publishers, or self-publishing." },
];

const faqs = [
    { q: "Do I need to be a recognized expert to write a non-fiction book?", a: "No — but you need a valuable perspective, experience, or body of knowledge. Many of the best non-fiction books come from practitioners, not academics. We help you identify and articulate your unique authority." },
    { q: "How much of the content do I need to provide?", a: "As much or as little as you have. Some clients arrive with detailed outlines and research; others start with a concept and their expertise. We extract and develop content through our interview process." },
    { q: "Can you help me position my book to build my platform?", a: "Yes. We think strategically about how your book fits into your broader personal brand, speaking career, consulting practice, or business — ensuring it serves your platform goals." },
    { q: "Will the book be ready to submit to literary agents?", a: "Yes. We deliver manuscripts polished to submission standards, and can assist with book proposal writing, synopsis creation, and query letter development." },
    { q: "Can you include research, statistics, and citations?", a: "Absolutely. We conduct thorough research and deliver manuscripts with full citations, footnotes, and bibliography formatted to your preferred style guide." },
];

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="nonfic-page">

                {/* HERO */}
                <section className="nonfic-hero">
                    <div className="nonfic-hero-bg" />
                    <div className="nonfic-hero-grid">
                        <div className="nonfic-hero-inner">
                            <nav className="nonfic-breadcrumb">
                                <Link href="/" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Home</Link>
                                <span className="nonfic-bc-sep">›</span>
                                <Link href="/services" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Services</Link>
                                <span className="nonfic-bc-sep">›</span>
                                <span className="nonfic-bc-current">Non-Fiction Writing</span>
                            </nav>
                            <div className="nonfic-hero-tag"><span className="nonfic-tag-dot" />Writing Services</div>
                            <h1 className="nonfic-hero-title">Professional<br /><em className="nonfic-hero-em">Non-Fiction Writing</em><br />Services</h1>
                            <p className="nonfic-hero-sub">From business books and self-help guides to investigative journalism and academic works — our non-fiction specialists transform your expertise, research, and ideas into authoritative, compelling books that establish your voice and build your legacy.</p>
                            <div className="nonfic-hero-actions">
                                <button className="nonfic-btn-orange">Get A Free Quote</button>
                                <button className="nonfic-btn-outline">(646) 298 6438</button>
                            </div>
                            <div className="nonfic-trust-row">
                                <span className="nonfic-trust-pill">✓ 100% Confidential</span>
                                <span className="nonfic-trust-pill">✓ Full Copyright Yours</span>
                                <span className="nonfic-trust-pill">✓ Unlimited Revisions</span>
                                <span className="nonfic-trust-pill">✓ NDA Signed</span>
                            </div>
                        </div>
                        <div className="nonfic-hero-sidebar">
                            <div className="nonfic-sidebar-card"><span className="nonfic-sc-val">5,000+</span><span className="nonfic-sc-label">Projects Delivered</span></div>
                            <div className="nonfic-sidebar-card"><span className="nonfic-sc-val">400+</span><span className="nonfic-sc-label">Publishing Platforms</span></div>
                            <div className="nonfic-sidebar-card"><span className="nonfic-sc-val">98%</span><span className="nonfic-sc-label">Client Satisfaction</span></div>
                            <div className="nonfic-sidebar-card"><span className="nonfic-sc-val">15+</span><span className="nonfic-sc-label">Years Experience</span></div>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="nonfic-intro">
                    <div className="nonfic-intro-inner">
                        <div className="nonfic-intro-text">
                            <span className="nonfic-eyebrow">What We Do</span>
                            <h2 className="nonfic-section-title">Your Expertise Deserves<br /><span className="nonfic-hl">A Book That Commands Authority.</span></h2>
                            <p className="nonfic-body-text">Non-fiction is the genre of ideas, expertise, and truth. A great non-fiction book does not just inform — it challenges, inspires, and reshapes how readers think. Our non-fiction writers are skilled researchers, expert interviewers, and masterful prose stylists who know how to take complex ideas and make them irresistibly readable.</p>
                            <p className="nonfic-body-text">Whether you are a business leader with a methodology to share, an expert with a lifetime of knowledge to distill, a journalist with a story the world needs to hear, or a thought leader building a platform — we deliver books that position you at the top of your field.</p>
                            <button className="nonfic-btn-orange" style={{ marginTop: "8px" }}>Write Your Authority Book</button>
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
                <section className="nonfic-features">
                    <div className="nonfic-features-inner">
                        <div className="nonfic-section-head">
                            <span className="nonfic-eyebrow">Why Choose Us</span>
                            <h2 className="nonfic-section-title">The Belmont <span className="nonfic-hl">Difference</span></h2>
                        </div>
                        <div className="nonfic-features-grid">
                            {features.map((f) => (
                                <div key={f.num} className="nonfic-feature-card">
                                    <span className="nonfic-fc-num">{f.num}</span>
                                    <h3 className="nonfic-fc-title">{f.title}</h3>
                                    <p className="nonfic-fc-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CATEGORIES */}
                <section className="nonfic-cats">
                    <div className="nonfic-cats-inner">
                        <div className="nonfic-section-head nonfic-head-center">
                            <span className="nonfic-eyebrow">Non-Fiction Categories</span>
                            <h2 className="nonfic-section-title">We Write Across All <span className="nonfic-hl">Non-Fiction Genres</span></h2>
                            <p className="nonfic-cats-sub">Our non-fiction writers bring deep subject expertise and masterful prose to every category.</p>
                        </div>
                        <div className="nonfic-cats-grid">
                            {categories.map((c) => (
                                <div key={c.label} className="nonfic-cat-pill">
                                    <span className="nonfic-cp-icon">{c.icon}</span>{c.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="nonfic-process">
                    <div className="nonfic-process-inner">
                        <div className="nonfic-section-head nonfic-head-center">
                            <span className="nonfic-eyebrow">How It Works</span>
                            <h2 className="nonfic-section-title">Our <span className="nonfic-hl">Writing Process</span></h2>
                        </div>
                        <div className="nonfic-steps">
                            {steps.map((s, i) => (
                                <div key={s.num} className="nonfic-step-row">
                                    <div className="nonfic-step-left">
                                        <div className="nonfic-step-node"><span className="nonfic-step-num">{s.num}</span></div>
                                        {i < steps.length - 1 && <div className="nonfic-step-vline" />}
                                    </div>
                                    <div className="nonfic-step-body">
                                        <h3 className="nonfic-step-title">{s.title}</h3>
                                        <p className="nonfic-step-desc">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="nonfic-faq">
                    <div className="nonfic-faq-inner">
                        <div className="nonfic-faq-left">
                            <span className="nonfic-eyebrow">FAQ</span>
                            <h2 className="nonfic-section-title">Common <span className="nonfic-hl">Questions</span></h2>
                            <p className="nonfic-body-text" style={{ marginTop: "16px" }}>Still have questions? Our team is available 24/7 for a free consultation.</p>
                            <button className="nonfic-btn-orange" style={{ marginTop: "24px" }}>Talk To An Expert</button>
                        </div>
                        <div className="nonfic-faq-right">
                            {faqs.map((item, i) => (
                                <details key={i} className="nonfic-faq-item">
                                    <summary className="nonfic-faq-q">{item.q}<span className="nonfic-faq-icon">+</span></summary>
                                    <p className="nonfic-faq-a">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED */}
                <section className="nonfic-related">
                    <div className="nonfic-related-inner">
                        <span className="nonfic-eyebrow">Explore More</span>
                        <h2 className="nonfic-section-title" style={{ marginBottom: "32px" }}>Related <span className="nonfic-hl">Services</span></h2>
                        <div className="nonfic-related-grid">
                            {relatedServices.map((rs) => (
                                <Link key={rs.slug} href={`/InnerServices/${rs.slug}`}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "#fafafa", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "8px", textDecoration: "none", transition: "all 0.25s" }}
                                    onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "#f57c15"; el.style.background = "rgba(245,124,21,0.03)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 6px 18px rgba(245,124,21,0.08)"; const a = el.querySelector(".nonfic-rca") as HTMLElement; if (a) { a.style.opacity = "1"; a.style.transform = "translate(0,0)"; } }}
                                    onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "rgba(0,0,0,0.07)"; el.style.background = "#fafafa"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; const a = el.querySelector(".nonfic-rca") as HTMLElement; if (a) { a.style.opacity = "0"; a.style.transform = "translate(-4px,4px)"; } }}
                                >
                                    <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: "13px", fontWeight: 700, color: "#222" }}>{rs.label}</span>
                                    <span className="nonfic-rca" style={{ fontSize: "16px", color: "#f57c15", opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.25s", display: "inline-block" }}>↗</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="nonfic-cta">
                    <div className="nonfic-cta-inner">
                        <span className="nonfic-eyebrow" style={{ color: "rgba(245,124,21,0.8)" }}>Get Started Today</span>
                        <h2 className="nonfic-cta-title">Ready To Write Your<br /><span className="nonfic-hl">Authority Book?</span></h2>
                        <p className="nonfic-cta-sub">Schedule a free consultation with our non-fiction specialists. Your expertise deserves a book that commands the attention it has earned.</p>
                        <div className="nonfic-cta-btns">
                            <button className="nonfic-btn-orange nonfic-btn-lg">Get A Free Quote</button>
                            <button className="nonfic-btn-outline nonfic-btn-lg">(646) 298 6438</button>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                .nonfic-page{font-family:'Raleway',sans-serif;color:#111;background:#fff;}
                .nonfic-eyebrow{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#f57c15;margin-bottom:14px;}
                .nonfic-section-title{font-family:'Oswald',sans-serif;font-size:clamp(1.9rem,3.5vw,2.8rem);color:#111;text-transform:uppercase;line-height:1.1;margin:0 0 20px 0;letter-spacing:-0.3px;}
                .nonfic-hl{color:#f57c15;}
                .nonfic-body-text{font-size:14px;color:#555;line-height:1.75;margin:0 0 16px 0;}
                .nonfic-section-head{margin-bottom:52px;}
                .nonfic-head-center{text-align:center;}
                .nonfic-btn-orange{display:inline-flex;align-items:center;gap:8px;background:#f57c15;color:#fff;border:none;padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background 0.25s,transform 0.2s,box-shadow 0.25s;box-shadow:0 5px 18px rgba(245,124,21,0.28);}
                .nonfic-btn-orange:hover{background:#d96c0d;transform:translateY(-2px);box-shadow:0 8px 24px rgba(245,124,21,0.35);}
                .nonfic-btn-outline{display:inline-flex;align-items:center;background:transparent;color:#333;border:1.5px solid rgba(0,0,0,0.18);padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:border-color 0.25s,color 0.25s;}
                .nonfic-btn-outline:hover{border-color:#f57c15;color:#f57c15;}
                .nonfic-btn-lg{padding:15px 36px;font-size:12.5px;}
                .nonfic-hero{background:#060606;padding:60px 24px 80px;position:relative;overflow:hidden;width:100%;}
                .nonfic-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 55% 50% at 30% 50%,rgba(245,124,21,0.07) 0%,transparent 65%),radial-gradient(ellipse 40% 60% at 80% 20%,rgba(245,124,21,0.04) 0%,transparent 60%);pointer-events:none;}
                .nonfic-hero-grid{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:1fr 260px;gap:40px;align-items:start;position:relative;z-index:2;}
                .nonfic-hero-inner{padding-top:10px;}
                .nonfic-breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:28px;}
                .nonfic-bc-sep{color:rgba(255,255,255,0.2);font-size:11px;}
                .nonfic-bc-current{font-size:11px;font-weight:700;color:#f57c15;letter-spacing:0.5px;}
                .nonfic-hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(245,124,21,0.08);border:1px solid rgba(245,124,21,0.2);border-radius:30px;padding:6px 16px;font-size:10.5px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:#f57c15;margin-bottom:28px;}
                .nonfic-tag-dot{width:5px;height:5px;border-radius:50%;background:#f57c15;flex-shrink:0;}
                .nonfic-hero-title{font-family:'Oswald',sans-serif;font-size:clamp(2.8rem,6vw,5.2rem);color:#fff;line-height:0.95;text-transform:uppercase;letter-spacing:-1px;margin:0 0 24px 0;}
                .nonfic-hero-em{color:#f57c15;font-style:italic;}
                .nonfic-hero-sub{font-size:14.5px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:520px;margin:0 0 36px 0;font-weight:400;}
                .nonfic-hero-actions{display:flex;flex-wrap:nowrap;gap:12px;margin-bottom:32px;align-items:center;}
                .nonfic-hero-actions .nonfic-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .nonfic-hero-actions .nonfic-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                .nonfic-trust-row{display:flex;flex-wrap:wrap;gap:8px;}
                .nonfic-trust-pill{font-size:11px;font-weight:700;color:rgba(255,255,255,0.45);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:6px 12px;letter-spacing:0.3px;}
                .nonfic-hero-sidebar{display:flex;flex-direction:column;gap:3px;padding-top:64px;}
                .nonfic-sidebar-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px 18px;display:flex;flex-direction:column;gap:4px;transition:border-color 0.3s;}
                .nonfic-sidebar-card:hover{border-color:rgba(245,124,21,0.25);}
                .nonfic-sc-val{font-family:'Oswald',sans-serif;font-size:28px;font-weight:700;color:#f57c15;line-height:1;}
                .nonfic-sc-label{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}
                .nonfic-intro{background:#fff;padding:90px 24px;border-bottom:1px solid rgba(0,0,0,0.06);}
                .nonfic-intro-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 340px;gap:70px;align-items:center;}
                .nonfic-visual-box{background:#060606;border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:32px 28px;position:relative;overflow:hidden;}
                .nonfic-vb-accent{position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#f57c15,rgba(245,124,21,0.3));}
                .nonfic-vb-line{position:absolute;top:0;left:28px;width:1px;bottom:0;background:rgba(245,124,21,0.08);}
                .nonfic-vb-content{display:flex;flex-direction:column;gap:4px;padding:16px 0 16px 20px;}
                .nonfic-vb-num{font-family:'Oswald',sans-serif;font-size:32px;font-weight:700;color:#f57c15;line-height:1;}
                .nonfic-vb-label{font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}
                .nonfic-vb-divider{height:1px;background:rgba(255,255,255,0.05);}
                .nonfic-features{background:#f9f8f7;padding:90px 24px;}
                .nonfic-features-inner{max-width:1200px;margin:0 auto;}
                .nonfic-features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
                .nonfic-feature-card{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;padding:32px 28px;transition:border-color 0.3s,box-shadow 0.3s,transform 0.3s;}
                .nonfic-feature-card:hover{border-color:rgba(245,124,21,0.25);box-shadow:0 10px 30px rgba(245,124,21,0.07);transform:translateY(-3px);}
                .nonfic-fc-num{display:block;font-family:'Oswald',sans-serif;font-size:36px;font-weight:700;color:rgba(245,124,21,0.12);line-height:1;margin-bottom:-6px;user-select:none;}
                .nonfic-fc-title{font-family:'Oswald',sans-serif;font-size:16px;font-weight:600;color:#111;text-transform:uppercase;letter-spacing:0.3px;margin:0 0 12px 0;}
                .nonfic-fc-desc{font-size:13px;color:#666;line-height:1.7;margin:0;}
                .nonfic-cats{background:#060606;padding:90px 24px;}
                .nonfic-cats-inner{max-width:1100px;margin:0 auto;}
                .nonfic-cats .nonfic-section-title{color:#fff;}
                .nonfic-cats-sub{font-size:13.5px;color:rgba(255,255,255,0.35);margin:0;}
                .nonfic-cats-grid{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;}
                .nonfic-cat-pill{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:6px;font-size:12.5px;font-weight:600;color:rgba(255,255,255,0.65);transition:all 0.25s;cursor:default;}
                .nonfic-cat-pill:hover{background:rgba(245,124,21,0.1);border-color:rgba(245,124,21,0.3);color:#f57c15;}
                .nonfic-cp-icon{color:#f57c15;font-size:8px;}
                .nonfic-process{background:#fff;padding:90px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .nonfic-process-inner{max-width:900px;margin:0 auto;}
                .nonfic-steps{display:flex;flex-direction:column;}
                .nonfic-step-row{display:flex;gap:24px;align-items:stretch;}
                .nonfic-step-row:hover .nonfic-step-node{background:#f57c15;}
                .nonfic-step-row:hover .nonfic-step-num{color:#fff;}
                .nonfic-step-left{display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:52px;}
                .nonfic-step-node{width:52px;height:52px;border-radius:50%;background:#fff;border:2px solid #f57c15;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background 0.3s;}
                .nonfic-step-num{font-family:'Oswald',sans-serif;font-size:14px;font-weight:700;color:#f57c15;transition:color 0.3s;}
                .nonfic-step-vline{width:2px;flex:1;background:rgba(245,124,21,0.15);min-height:24px;}
                .nonfic-step-body{padding:10px 0 36px;flex:1;}
                .nonfic-step-title{font-family:'Oswald',sans-serif;font-size:17px;font-weight:600;color:#111;text-transform:uppercase;margin:0 0 8px 0;}
                .nonfic-step-desc{font-size:13.5px;color:#666;line-height:1.65;margin:0;}
                .nonfic-faq{background:#f9f8f7;padding:90px 24px;}
                .nonfic-faq-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:320px 1fr;gap:70px;align-items:start;}
                .nonfic-faq-item{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;margin-bottom:6px;overflow:hidden;transition:border-color 0.25s;}
                .nonfic-faq-item[open]{border-color:rgba(245,124,21,0.25);}
                .nonfic-faq-q{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 20px;font-family:'Raleway',sans-serif;font-size:13.5px;font-weight:700;color:#111;cursor:pointer;list-style:none;user-select:none;}
                .nonfic-faq-q::-webkit-details-marker{display:none;}
                .nonfic-faq-icon{font-size:20px;font-weight:300;color:#f57c15;flex-shrink:0;line-height:1;transition:transform 0.25s;}
                .nonfic-faq-item[open] .nonfic-faq-icon{transform:rotate(45deg);}
                .nonfic-faq-a{padding:14px 20px 18px;font-size:13px;color:#666;line-height:1.7;margin:0;border-top:1px solid rgba(0,0,0,0.04);}
                .nonfic-related{background:#fff;padding:70px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .nonfic-related-inner{max-width:1200px;margin:0 auto;}
                .nonfic-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
                .nonfic-cta{background:#060606;padding:110px 24px;text-align:center;position:relative;overflow:hidden;}
                .nonfic-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(245,124,21,0.07) 0%,transparent 70%);pointer-events:none;}
                .nonfic-cta-inner{position:relative;z-index:2;}
                .nonfic-cta-title{font-family:'Oswald',sans-serif;font-size:clamp(2.5rem,5vw,4.2rem);color:#fff;text-transform:uppercase;line-height:1.05;margin:8px 0 20px 0;letter-spacing:-0.5px;}
                .nonfic-cta-sub{font-size:14.5px;color:rgba(255,255,255,0.38);max-width:460px;margin:0 auto 36px;line-height:1.7;}
                .nonfic-cta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:nowrap;align-items:center;}
                .nonfic-cta .nonfic-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .nonfic-cta .nonfic-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                @media (max-width:1024px){
                    .nonfic-hero-grid{grid-template-columns:1fr;}
                    .nonfic-hero-sidebar{padding-top:0;display:grid;grid-template-columns:repeat(4,1fr);}
                    .nonfic-intro-inner{grid-template-columns:1fr;gap:40px;}
                    .nonfic-faq-inner{grid-template-columns:1fr;gap:40px;}
                }
                @media (max-width:768px){
                    .nonfic-features-grid{grid-template-columns:1fr;}
                    .nonfic-related-grid{grid-template-columns:repeat(2,1fr);}
                    .nonfic-hero-sidebar{grid-template-columns:repeat(2,1fr);}
                }
                @media (max-width:520px){
                    .nonfic-related-grid{grid-template-columns:1fr;}
                    .nonfic-cta-btns{flex-wrap:wrap;}
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