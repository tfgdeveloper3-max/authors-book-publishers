"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const relatedServices = [
    { label: "Author Website Design", slug: "author-website-design" },
    { label: "Book Cover Design", slug: "book-cover-design" },
    { label: "Book Publishing", slug: "book-publishing" },
    { label: "Book Formatting", slug: "book-formatting" },
    { label: "Book Editing", slug: "book-editing" },
    { label: "Book Printing", slug: "book-printing" },
];

const categories = [
    { icon: "✦", label: "Amazon Ads" },
    { icon: "✦", label: "Facebook & Instagram Ads" },
    { icon: "✦", label: "BookBub Ads" },
    { icon: "✦", label: "Email Marketing" },
    { icon: "✦", label: "Social Media Management" },
    { icon: "✦", label: "Influencer Outreach" },
    { icon: "✦", label: "PR & Media Kits" },
    { icon: "✦", label: "Book Launch Campaigns" },
    { icon: "✦", label: "Goodreads Optimization" },
    { icon: "✦", label: "SEO & Content Marketing" },
    { icon: "✦", label: "Author Branding" },
    { icon: "✦", label: "Retailer Promotions" },
];

const features = [
    { num: "01", title: "Data-Driven Ad Campaigns", desc: "We build and manage precision-targeted advertising campaigns on Amazon, Facebook, and BookBub — optimizing keywords, audiences, and bids to maximize your ROI and drive consistent sales." },
    { num: "02", title: "Email List Growth & Automation", desc: "Your email list is your most profitable marketing asset. We build high-converting funnels, lead magnets, and automated sequences that turn casual readers into lifelong fans." },
    { num: "03", title: "Strategic Book Launches", desc: "A successful launch sets the trajectory for your book's entire lifespan. We orchestrate coordinated launch campaigns that spike early sales, generate reviews, and trigger algorithm momentum." },
    { num: "04", title: "PR & Influencer Outreach", desc: "We connect your book with podcast hosts, bookstagrammers, booktokers, and media outlets — securing organic coverage that builds credibility and drives authentic word-of-mouth." },
    { num: "05", title: "Retailer Algorithm Optimization", desc: "We optimize your metadata, categories, and keywords on Amazon and other retailers to improve organic visibility — ensuring your book ranks higher and gets recommended more often." },
    { num: "06", title: "Transparent ROI Reporting", desc: "No vanity metrics. We provide clear, detailed reporting on ad spend, sales generated, email growth, and overall ROI — so you always know exactly what your marketing dollars are doing." },
];

const steps = [
    { num: "01", title: "Market & Audience Research", desc: "We analyze your genre, competitors, and target readers to identify the most profitable keywords, categories, and audience segments for your marketing campaigns." },
    { num: "02", title: "Strategy Development", desc: "We craft a custom marketing plan tailored to your budget and goals — selecting the right mix of ads, email marketing, PR, and organic strategies for maximum impact." },
    { num: "03", title: "Campaign Setup & Creative", desc: "Our team writes ad copy, designs graphics, sets up tracking pixels, and configures your campaigns across all platforms — ready to launch with precision targeting." },
    { num: "04", title: "Launch & Optimization", desc: "Campaigns go live and we monitor performance daily. We A/B test creatives, adjust bids, and reallocate budget to the highest-performing audiences and keywords." },
    { num: "05", title: "Reporting & Scaling", desc: "You receive detailed ROI reports, and we continuously scale what works while cutting what doesn't — ensuring your marketing engine becomes more profitable over time." },
];

const faqs = [
    { q: "How soon will I see results from marketing?", a: "Paid advertising campaigns can generate sales within the first 24–48 hours. Organic strategies like SEO and email marketing build momentum over weeks and months. We typically recommend a 90-day runway for best results." },
    { q: "How much should I budget for book marketing?", a: "We work with a range of budgets. We recommend a minimum of $500–$1,000/month for paid advertising to see meaningful ROI. During your free consultation, we'll recommend a budget tailored to your specific goals and genre." },
    { q: "Do you guarantee bestseller status?", a: "No ethical marketer can guarantee a bestseller. What we guarantee is a data-driven, professionally executed marketing strategy that maximizes your book's visibility, sales potential, and long-term discoverability." },
    { q: "What platforms do you advertise on?", a: "We specialize in Amazon Ads, Facebook/Instagram Ads, and BookBub Ads — the three platforms that consistently deliver the highest ROI for authors. We also manage Google Ads and Goodreads campaigns when appropriate." },
    { q: "Do you write the ad copy and create the graphics?", a: "Yes, our service is fully managed. Our copywriters and designers create all ad copy, graphics, and landing pages. You simply approve the creatives before they go live." },
];

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="bkmk-page">

                {/* HERO */}
                <section className="bkmk-hero">
                    <div className="bkmk-hero-bg" />
                    <div className="bkmk-hero-grid">
                        <div className="bkmk-hero-inner">
                            <nav className="bkmk-breadcrumb">
                                <Link href="/" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Home</Link>
                                <span className="bkmk-bc-sep">›</span>
                                <Link href="/services" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Services</Link>
                                <span className="bkmk-bc-sep">›</span>
                                <span className="bkmk-bc-current">Book Marketing</span>
                            </nav>
                            <div className="bkmk-hero-tag"><span className="bkmk-tag-dot" />Marketing & Promotion</div>
                            <h1 className="bkmk-hero-title">Professional<br /><em className="bkmk-hero-em">Book Marketing</em><br />Services</h1>
                            <p className="bkmk-hero-sub">Data-driven book marketing campaigns — from Amazon ads and email funnels to PR and launch strategy. We put your book in front of readers who are ready to buy.</p>
                            <div className="bkmk-hero-actions">
                                <button className="bkmk-btn-orange">Get A Free Quote</button>
                                <button className="bkmk-btn-outline">(646) 298 6438</button>
                            </div>
                            <div className="bkmk-trust-row">
                                <span className="bkmk-trust-pill">✓ Amazon Ads Experts</span>
                                <span className="bkmk-trust-pill">✓ Email Funnels</span>
                                <span className="bkmk-trust-pill">✓ Launch Strategy</span>
                                <span className="bkmk-trust-pill">✓ ROI Focused</span>
                            </div>
                        </div>
                        <div className="bkmk-hero-sidebar">
                            <div className="bkmk-sidebar-card"><span className="bkmk-sc-val">Amazon</span><span className="bkmk-sc-label">Ads Management</span></div>
                            <div className="bkmk-sidebar-card"><span className="bkmk-sc-val">Facebook</span><span className="bkmk-sc-label">& Instagram Ads</span></div>
                            <div className="bkmk-sidebar-card"><span className="bkmk-sc-val">Email</span><span className="bkmk-sc-label">Funnel Automation</span></div>
                            <div className="bkmk-sidebar-card"><span className="bkmk-sc-val">ROI</span><span className="bkmk-sc-label">Focused Reporting</span></div>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="bkmk-intro">
                    <div className="bkmk-intro-inner">
                        <div className="bkmk-intro-text">
                            <span className="bkmk-eyebrow">What We Do</span>
                            <h2 className="bkmk-section-title">Your Book, Discovered By<br /><span className="bkmk-hl">Thousands Of New Readers.</span></h2>
                            <p className="bkmk-body-text">Writing a great book is only half the battle. Without strategic marketing, even the best books disappear into the void of millions of titles competing for attention on Amazon and other retailers. Visibility is not accidental — it's engineered.</p>
                            <p className="bkmk-body-text">Our book marketing service takes the guesswork out of promotion. We build data-driven advertising campaigns, grow your email list, optimize your retailer pages, and orchestrate launch strategies that drive real sales. Every dollar you spend is tracked, optimized, and aimed at one thing: putting your book in front of readers who are ready to buy.</p>
                            <button className="bkmk-btn-orange" style={{ marginTop: "8px" }}>Market My Book</button>
                        </div>
                        <div className="bkmk-intro-visual">
                            <div className="bkmk-visual-box">
                                <div className="bkmk-vb-accent" />
                                <div className="bkmk-vb-line" />
                                <div className="bkmk-vb-content">
                                    <span className="bkmk-vb-num">Custom</span>
                                    <span className="bkmk-vb-label">Marketing strategy</span>
                                </div>
                                <div className="bkmk-vb-divider" />
                                <div className="bkmk-vb-content">
                                    <span className="bkmk-vb-num">Amazon</span>
                                    <span className="bkmk-vb-label">& Facebook Ads</span>
                                </div>
                                <div className="bkmk-vb-divider" />
                                <div className="bkmk-vb-content">
                                    <span className="bkmk-vb-num">ROI</span>
                                    <span className="bkmk-vb-label">Focused campaigns</span>
                                </div>
                                <div className="bkmk-vb-divider" />
                                <div className="bkmk-vb-content">
                                    <span className="bkmk-vb-num">Full</span>
                                    <span className="bkmk-vb-label">Launch support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section className="bkmk-features">
                    <div className="bkmk-features-inner">
                        <div className="bkmk-section-head">
                            <span className="bkmk-eyebrow">Why Choose Us</span>
                            <h2 className="bkmk-section-title">The Belmont <span className="bkmk-hl">Difference</span></h2>
                        </div>
                        <div className="bkmk-features-grid">
                            {features.map((f) => (
                                <div key={f.num} className="bkmk-feature-card">
                                    <span className="bkmk-fc-num">{f.num}</span>
                                    <h3 className="bkmk-fc-title">{f.title}</h3>
                                    <p className="bkmk-fc-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CATEGORIES */}
                <section className="bkmk-cats">
                    <div className="bkmk-cats-inner">
                        <div className="bkmk-section-head bkmk-head-center">
                            <span className="bkmk-eyebrow">Channels We Manage</span>
                            <h2 className="bkmk-section-title">Marketing For Every <span className="bkmk-hl">Channel & Platform</span></h2>
                            <p className="bkmk-cats-sub">From paid advertising to organic PR, we execute across every channel that drives book sales.</p>
                        </div>
                        <div className="bkmk-cats-grid">
                            {categories.map((c) => (
                                <div key={c.label} className="bkmk-cat-pill">
                                    <span className="bkmk-cp-icon">{c.icon}</span>{c.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="bkmk-process">
                    <div className="bkmk-process-inner">
                        <div className="bkmk-section-head bkmk-head-center">
                            <span className="bkmk-eyebrow">How It Works</span>
                            <h2 className="bkmk-section-title">Our <span className="bkmk-hl">Marketing Process</span></h2>
                        </div>
                        <div className="bkmk-steps">
                            {steps.map((s, i) => (
                                <div key={s.num} className="bkmk-step-row">
                                    <div className="bkmk-step-left">
                                        <div className="bkmk-step-node"><span className="bkmk-step-num">{s.num}</span></div>
                                        {i < steps.length - 1 && <div className="bkmk-step-vline" />}
                                    </div>
                                    <div className="bkmk-step-body">
                                        <h3 className="bkmk-step-title">{s.title}</h3>
                                        <p className="bkmk-step-desc">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="bkmk-faq">
                    <div className="bkmk-faq-inner">
                        <div className="bkmk-faq-left">
                            <span className="bkmk-eyebrow">FAQ</span>
                            <h2 className="bkmk-section-title">Common <span className="bkmk-hl">Questions</span></h2>
                            <p className="bkmk-body-text" style={{ marginTop: "16px" }}>Still have questions? Our team is available 24/7 for a free consultation.</p>
                            <button className="bkmk-btn-orange" style={{ marginTop: "24px" }}>Talk To An Expert</button>
                        </div>
                        <div className="bkmk-faq-right">
                            {faqs.map((item, i) => (
                                <details key={i} className="bkmk-faq-item">
                                    <summary className="bkmk-faq-q">{item.q}<span className="bkmk-faq-icon">+</span></summary>
                                    <p className="bkmk-faq-a">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED */}
                <section className="bkmk-related">
                    <div className="bkmk-related-inner">
                        <span className="bkmk-eyebrow">Explore More</span>
                        <h2 className="bkmk-section-title" style={{ marginBottom: "32px" }}>Related <span className="bkmk-hl">Services</span></h2>
                        <div className="bkmk-related-grid">
                            {relatedServices.map((rs) => (
                                <Link key={rs.slug} href={`/InnerServices/${rs.slug}`}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "#fafafa", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "8px", textDecoration: "none", transition: "all 0.25s" }}
                                    onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "#f57c15"; el.style.background = "rgba(245,124,21,0.03)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 6px 18px rgba(245,124,21,0.08)"; const a = el.querySelector(".bkmk-rca") as HTMLElement; if (a) { a.style.opacity = "1"; a.style.transform = "translate(0,0)"; } }}
                                    onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "rgba(0,0,0,0.07)"; el.style.background = "#fafafa"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; const a = el.querySelector(".bkmk-rca") as HTMLElement; if (a) { a.style.opacity = "0"; a.style.transform = "translate(-4px,4px)"; } }}
                                >
                                    <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: "13px", fontWeight: 700, color: "#222" }}>{rs.label}</span>
                                    <span className="bkmk-rca" style={{ fontSize: "16px", color: "#f57c15", opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.25s", display: "inline-block" }}>↗</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bkmk-cta">
                    <div className="bkmk-cta-inner">
                        <span className="bkmk-eyebrow" style={{ color: "rgba(245,124,21,0.8)" }}>Get Started Today</span>
                        <h2 className="bkmk-cta-title">Ready To Launch<br /><span className="bkmk-hl">Your Book?</span></h2>
                        <p className="bkmk-cta-sub">Schedule a free marketing consultation. We will analyze your book, map out your audience, and build a campaign that drives real sales.</p>
                        <div className="bkmk-cta-btns">
                            <button className="bkmk-btn-orange bkmk-btn-lg">Get A Free Quote</button>
                            <button className="bkmk-btn-outline bkmk-btn-lg">(646) 298 6438</button>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                .bkmk-page{font-family:'Raleway',sans-serif;color:#111;background:#fff;}
                .bkmk-eyebrow{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#f57c15;margin-bottom:14px;}
                .bkmk-section-title{font-family:'Oswald',sans-serif;font-size:clamp(1.9rem,3.5vw,2.8rem);color:#111;text-transform:uppercase;line-height:1.1;margin:0 0 20px 0;letter-spacing:-0.3px;}
                .bkmk-hl{color:#f57c15;}
                .bkmk-body-text{font-size:14px;color:#555;line-height:1.75;margin:0 0 16px 0;}
                .bkmk-section-head{margin-bottom:52px;}
                .bkmk-head-center{text-align:center;}
                .bkmk-btn-orange{display:inline-flex;align-items:center;gap:8px;background:#f57c15;color:#fff;border:none;padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background 0.25s,transform 0.2s,box-shadow 0.25s;box-shadow:0 5px 18px rgba(245,124,21,0.28);}
                .bkmk-btn-orange:hover{background:#d96c0d;transform:translateY(-2px);box-shadow:0 8px 24px rgba(245,124,21,0.35);}
                .bkmk-btn-outline{display:inline-flex;align-items:center;background:transparent;color:#333;border:1.5px solid rgba(0,0,0,0.18);padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:border-color 0.25s,color 0.25s;}
                .bkmk-btn-outline:hover{border-color:#f57c15;color:#f57c15;}
                .bkmk-btn-lg{padding:15px 36px;font-size:12.5px;}
                .bkmk-hero{background:#060606;padding:60px 24px 80px;position:relative;overflow:hidden;width:100%;}
                .bkmk-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 55% 50% at 30% 50%,rgba(245,124,21,0.07) 0%,transparent 65%),radial-gradient(ellipse 40% 60% at 80% 20%,rgba(245,124,21,0.04) 0%,transparent 60%);pointer-events:none;}
                .bkmk-hero-grid{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:1fr 260px;gap:40px;align-items:start;position:relative;z-index:2;}
                .bkmk-hero-inner{padding-top:10px;}
                .bkmk-breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:28px;}
                .bkmk-bc-sep{color:rgba(255,255,255,0.2);font-size:11px;}
                .bkmk-bc-current{font-size:11px;font-weight:700;color:#f57c15;letter-spacing:0.5px;}
                .bkmk-hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(245,124,21,0.08);border:1px solid rgba(245,124,21,0.2);border-radius:30px;padding:6px 16px;font-size:10.5px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:#f57c15;margin-bottom:28px;}
                .bkmk-tag-dot{width:5px;height:5px;border-radius:50%;background:#f57c15;flex-shrink:0;}
                .bkmk-hero-title{font-family:'Oswald',sans-serif;font-size:clamp(2.8rem,6vw,5.2rem);color:#fff;line-height:0.95;text-transform:uppercase;letter-spacing:-1px;margin:0 0 24px 0;}
                .bkmk-hero-em{color:#f57c15;font-style:italic;}
                .bkmk-hero-sub{font-size:14.5px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:520px;margin:0 0 36px 0;font-weight:400;}
                .bkmk-hero-actions{display:flex;flex-wrap:nowrap;gap:12px;margin-bottom:32px;align-items:center;}
                .bkmk-hero-actions .bkmk-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .bkmk-hero-actions .bkmk-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                .bkmk-trust-row{display:flex;flex-wrap:wrap;gap:8px;}
                .bkmk-trust-pill{font-size:11px;font-weight:700;color:rgba(255,255,255,0.45);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:6px 12px;letter-spacing:0.3px;}
                .bkmk-hero-sidebar{display:flex;flex-direction:column;gap:3px;padding-top:64px;}
                .bkmk-sidebar-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px 18px;display:flex;flex-direction:column;gap:4px;transition:border-color 0.3s;}
                .bkmk-sidebar-card:hover{border-color:rgba(245,124,21,0.25);}
                .bkmk-sc-val{font-family:'Oswald',sans-serif;font-size:28px;font-weight:700;color:#f57c15;line-height:1;}
                .bkmk-sc-label{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}

                /* ══ INTRO VISUAL BOX ══ */
                .bkmk-intro { background: #fff; padding: 90px 24px; border-bottom: 1px solid rgba(0,0,0,0.06); }
                .bkmk-intro-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 340px; gap: 70px; align-items: center; }
                .bkmk-intro-visual { display: flex; flex-direction: column; }
                .bkmk-visual-box { background: #060606; border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 32px 28px; position: relative; overflow: hidden; }
                .bkmk-vb-accent { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #f57c15, rgba(245,124,21,0.3)); }
                .bkmk-vb-line { position: absolute; top: 0; left: 28px; width: 1px; bottom: 0; background: rgba(245,124,21,0.08); }
                .bkmk-vb-content { display: flex; flex-direction: column; gap: 4px; padding: 16px 0 16px 20px; position: relative; }
                .bkmk-vb-num { font-family: 'Oswald', sans-serif; font-size: 32px; font-weight: 700; color: #f57c15; line-height: 1; }
                .bkmk-vb-label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.3); }
                .bkmk-vb-divider { height: 1px; background: rgba(255,255,255,0.05); margin-left: 20px; }

                .bkmk-features{background:#f9f8f7;padding:90px 24px;}
                .bkmk-features-inner{max-width:1200px;margin:0 auto;}
                .bkmk-features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
                .bkmk-feature-card{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;padding:32px 28px;transition:border-color 0.3s,box-shadow 0.3s,transform 0.3s;}
                .bkmk-feature-card:hover{border-color:rgba(245,124,21,0.25);box-shadow:0 10px 30px rgba(245,124,21,0.07);transform:translateY(-3px);}
                .bkmk-fc-num{display:block;font-family:'Oswald',sans-serif;font-size:36px;font-weight:700;color:rgba(245,124,21,0.12);line-height:1;margin-bottom:-6px;user-select:none;}
                .bkmk-fc-title{font-family:'Oswald',sans-serif;font-size:16px;font-weight:600;color:#111;text-transform:uppercase;letter-spacing:0.3px;margin:0 0 12px 0;}
                .bkmk-fc-desc{font-size:13px;color:#666;line-height:1.7;margin:0;}
                .bkmk-cats{background:#060606;padding:90px 24px;}
                .bkmk-cats-inner{max-width:1100px;margin:0 auto;}
                .bkmk-cats .bkmk-section-title{color:#fff;}
                .bkmk-cats-sub{font-size:13.5px;color:rgba(255,255,255,0.35);margin:0;}
                .bkmk-cats-grid{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;}
                .bkmk-cat-pill{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:6px;font-size:12.5px;font-weight:600;color:rgba(255,255,255,0.65);transition:all 0.25s;cursor:default;}
                .bkmk-cat-pill:hover{background:rgba(245,124,21,0.1);border-color:rgba(245,124,21,0.3);color:#f57c15;}
                .bkmk-cp-icon{color:#f57c15;font-size:8px;}
                .bkmk-process{background:#fff;padding:90px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .bkmk-process-inner{max-width:900px;margin:0 auto;}
                .bkmk-steps{display:flex;flex-direction:column;}
                .bkmk-step-row{display:flex;gap:24px;align-items:stretch;}
                .bkmk-step-row:hover .bkmk-step-node{background:#f57c15;}
                .bkmk-step-row:hover .bkmk-step-num{color:#fff;}
                .bkmk-step-left{display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:52px;}
                .bkmk-step-node{width:52px;height:52px;border-radius:50%;background:#fff;border:2px solid #f57c15;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background 0.3s;}
                .bkmk-step-num{font-family:'Oswald',sans-serif;font-size:14px;font-weight:700;color:#f57c15;transition:color 0.3s;}
                .bkmk-step-vline{width:2px;flex:1;background:rgba(245,124,21,0.15);min-height:24px;}
                .bkmk-step-body{padding:10px 0 36px;flex:1;}
                .bkmk-step-title{font-family:'Oswald',sans-serif;font-size:17px;font-weight:600;color:#111;text-transform:uppercase;margin:0 0 8px 0;}
                .bkmk-step-desc{font-size:13.5px;color:#666;line-height:1.65;margin:0;}
                .bkmk-faq{background:#f9f8f7;padding:90px 24px;}
                .bkmk-faq-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:320px 1fr;gap:70px;align-items:start;}
                .bkmk-faq-item{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;margin-bottom:6px;overflow:hidden;transition:border-color 0.25s;}
                .bkmk-faq-item[open]{border-color:rgba(245,124,21,0.25);}
                .bkmk-faq-q{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 20px;font-family:'Raleway',sans-serif;font-size:13.5px;font-weight:700;color:#111;cursor:pointer;list-style:none;user-select:none;}
                .bkmk-faq-q::-webkit-details-marker{display:none;}
                .bkmk-faq-icon{font-size:20px;font-weight:300;color:#f57c15;flex-shrink:0;line-height:1;transition:transform 0.25s;}
                .bkmk-faq-item[open] .bkmk-faq-icon{transform:rotate(45deg);}
                .bkmk-faq-a{padding:14px 20px 18px;font-size:13px;color:#666;line-height:1.7;margin:0;border-top:1px solid rgba(0,0,0,0.04);}
                .bkmk-related{background:#fff;padding:70px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .bkmk-related-inner{max-width:1200px;margin:0 auto;}
                .bkmk-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
                .bkmk-cta{background:#060606;padding:110px 24px;text-align:center;position:relative;overflow:hidden;}
                .bkmk-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(245,124,21,0.07) 0%,transparent 70%);pointer-events:none;}
                .bkmk-cta-inner{position:relative;z-index:2;}
                .bkmk-cta-title{font-family:'Oswald',sans-serif;font-size:clamp(2.5rem,5vw,4.2rem);color:#fff;text-transform:uppercase;line-height:1.05;margin:8px 0 20px 0;letter-spacing:-0.5px;}
                .bkmk-cta-sub{font-size:14.5px;color:rgba(255,255,255,0.38);max-width:460px;margin:0 auto 36px;line-height:1.7;}
                .bkmk-cta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:nowrap;align-items:center;}
                .bkmk-cta .bkmk-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .bkmk-cta .bkmk-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                @media (max-width:1024px){
                    .bkmk-hero-grid{grid-template-columns:1fr;}
                    .bkmk-hero-sidebar{padding-top:0;display:grid;grid-template-columns:repeat(4,1fr);}
                    .bkmk-intro-inner{grid-template-columns:1fr;gap:40px;}
                    .bkmk-faq-inner{grid-template-columns:1fr;gap:40px;}
                }
                @media (max-width:768px){
                    .bkmk-features-grid{grid-template-columns:1fr;}
                    .bkmk-related-grid{grid-template-columns:repeat(2,1fr);}
                    .bkmk-hero-sidebar{grid-template-columns:repeat(2,1fr);}
                }
                @media (max-width:520px){
                    .bkmk-related-grid{grid-template-columns:1fr;}
                    .bkmk-cta-btns{flex-wrap:wrap;}
                }
            `}</style>
            </main>
            <FooterSection />
        </>
    );
}