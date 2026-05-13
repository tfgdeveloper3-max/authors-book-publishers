"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const relatedServices = [
    { label: "Book Editing", slug: "book-editing" },
    { label: "Book Formatting", slug: "book-formatting" },
    { label: "Book Cover Design", slug: "book-cover-design" },
    { label: "Book Marketing", slug: "book-marketing" },
    { label: "Ebook Creation", slug: "ebook-creation" },
    { label: "Audiobook Narration", slug: "audiobook-narration" },
];

const categories = [
    { icon: "✦", label: "Fiction Publishing" },
    { icon: "✦", label: "Non-Fiction Publishing" },
    { icon: "✦", label: "Memoir & Biography" },
    { icon: "✦", label: "Self-Help & Wellness" },
    { icon: "✦", label: "Sci-Fi & Fantasy" },
    { icon: "✦", label: "Romance" },
    { icon: "✦", label: "Thriller & Mystery" },
    { icon: "✦", label: "Business & Leadership" },
    { icon: "✦", label: "Children's Books" },
    { icon: "✦", label: "Poetry & Anthologies" },
    { icon: "✦", label: "Cookbooks" },
    { icon: "✦", label: "Coffee Table Books" },
];

const features = [
    { num: "01", title: "ISBN & Barcode Provision", desc: "We provide and register your unique ISBNs and barcodes — ensuring your book is identifiable and trackable across every retailer, library, and distribution database worldwide." },
    { num: "02", title: "Global Distribution Setup", desc: "Your book is made available to over 40,000 retailers, libraries, and online stores globally — including Amazon, Barnes & Noble, Ingram, and independent bookshops." },
    { num: "03", title: "Copyright Registration", desc: "We handle the formal copyright registration process on your behalf, establishing legal proof of ownership and protecting your intellectual property from infringement." },
    { num: "04", title: "KDP & Ingram Optimization", desc: "We set up and optimize your accounts on Amazon KDP and IngramSpark — configuring pricing, territories, and print-on-demand settings to maximize your reach and profit margins." },
    { num: "05", title: "Print-On-Demand Management", desc: "No inventory costs. We configure your book for global print-on-demand, meaning copies are printed and shipped automatically only when a reader places an order." },
    { num: "06", title: "100% Royalties Retained", desc: "Unlike traditional or vanity presses, you keep 100% of your royalties and all rights to your book. We work for you, not the other way around." },
];

const steps = [
    { num: "01", title: "Publishing Strategy", desc: "We assess your manuscript, define your target audience, and build a customized publishing strategy — choosing the right platforms, formats, and pricing for your genre." },
    { num: "02", title: "Pre-Publication Setup", desc: "We assign ISBNs, register copyright, prepare your book’s metadata, and format your interior and cover files to meet the strict specifications of each platform." },
    { num: "03", title: "Distribution Configuration", desc: "We set up your title across KDP, IngramSpark, and expanded distribution networks — configuring print-on-demand, pricing, and global territory rights." },
    { num: "04", title: "Quality Assurance", desc: "Before launch, we conduct a final review of your product page, metadata, and file submissions to ensure everything is optimized for maximum visibility and zero rejections." },
    { num: "05", title: "Global Launch & Support", desc: "Your book goes live worldwide. We provide ongoing support for sales reporting, royalty tracking, and any adjustments needed as your book reaches readers." },
];

const faqs = [
    { q: "Do I keep the rights to my book?", a: "Yes, 100%. You retain all intellectual property rights, copyright, and royalties. We are a publishing service — we work for you, unlike traditional publishers who take ownership of your rights." },
    { q: "How do royalties work?", a: "Because you own the ISBNs and distribution accounts, all royalties are paid directly to you by the platforms (Amazon, Ingram, etc.). We take zero cut of your ongoing sales." },
    { q: "Where will my book be available?", a: "Your book will be distributed globally through Amazon (KDP), IngramSpark (40,000+ retailers and libraries), Barnes & Noble, Apple Books, Kobo, and more — available in both print and ebook formats." },
    { q: "What is Print-On-Demand?", a: "Print-On-Demand means your book is printed only when a reader orders it. This eliminates the need for upfront inventory, warehousing, or financial risk — you never pay for unsold copies." },
    { q: "How long does the publishing process take?", a: "Once your manuscript and cover are finalized, the technical publishing setup takes 1–2 weeks. Your book will typically be live and available for purchase globally within 3–5 business days after submission." },
];

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="bkpb-page">

                {/* HERO */}
                <section className="bkpb-hero">
                    <div className="bkpb-hero-bg" />
                    <div className="bkpb-hero-grid">
                        <div className="bkpb-hero-inner">
                            <nav className="bkpb-breadcrumb">
                                <Link href="/" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Home</Link>
                                <span className="bkpb-bc-sep">›</span>
                                <Link href="/services" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Services</Link>
                                <span className="bkpb-bc-sep">›</span>
                                <span className="bkpb-bc-current">Book Publishing</span>
                            </nav>
                            <div className="bkpb-hero-tag"><span className="bkpb-tag-dot" />Publishing & Distribution</div>
                            <h1 className="bkpb-hero-title">Professional<br /><em className="bkpb-hero-em">Book Publishing</em><br />Services</h1>
                            <p className="bkpb-hero-sub">Full-service book publishing — from ISBN registration and copyright to global distribution on Amazon, Ingram, and 40,000+ retailers. You keep 100% of your rights and royalties.</p>
                            <div className="bkpb-hero-actions">
                                <button className="bkpb-btn-orange">Get A Free Quote</button>
                                <button className="bkpb-btn-outline">(646) 298 6438</button>
                            </div>
                            <div className="bkpb-trust-row">
                                <span className="bkpb-trust-pill">✓ 100% Rights Yours</span>
                                <span className="bkpb-trust-pill">✓ Global Distribution</span>
                                <span className="bkpb-trust-pill">✓ ISBN Included</span>
                                <span className="bkpb-trust-pill">✓ No Inventory Cost</span>
                            </div>
                        </div>
                        <div className="bkpb-hero-sidebar">
                            <div className="bkpb-sidebar-card"><span className="bkpb-sc-val">40,000+</span><span className="bkpb-sc-label">Retailers Worldwide</span></div>
                            <div className="bkpb-sidebar-card"><span className="bkpb-sc-val">100%</span><span className="bkpb-sc-label">Royalties Kept</span></div>
                            <div className="bkpb-sidebar-card"><span className="bkpb-sc-val">KDP</span><span className="bkpb-sc-label">& IngramSpark Setup</span></div>
                            <div className="bkpb-sidebar-card"><span className="bkpb-sc-val">POD</span><span className="bkpb-sc-label">Zero Inventory Risk</span></div>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="bkpb-intro">
                    <div className="bkpb-intro-inner">
                        <div className="bkpb-intro-text">
                            <span className="bkpb-eyebrow">What We Do</span>
                            <h2 className="bkpb-section-title">Publish Globally, Keep<br /><span className="bkpb-hl">100% Of Your Rights.</span></h2>
                            <p className="bkpb-body-text">Traditional publishers take your rights and a massive cut of your royalties. Vanity presses charge you thousands and leave you with a garage full of unsold books. Our publishing model is different — we provide the full infrastructure of a traditional publisher, but you retain complete ownership and control.</p>
                            <p className="bkpb-body-text">We handle everything from ISBN assignment and copyright registration to global distribution setup and metadata optimization. Your book becomes available on Amazon, Barnes & Noble, Ingram, and thousands of independent bookstores — without you ever touching a single technical setting or paying for inventory.</p>
                            <button className="bkpb-btn-orange" style={{ marginTop: "8px" }}>Publish My Book</button>
                        </div>
                        <div className="bkpb-intro-visual">
                            <div className="bkpb-visual-box">
                                <div className="bkpb-vb-accent" />
                                <div className="bkpb-vb-line" />
                                <div className="bkpb-vb-content">
                                    <span className="bkpb-vb-num">ISBN & Barcode</span>
                                    <span className="bkpb-vb-label">Included in package</span>
                                </div>
                                <div className="bkpb-vb-divider" />
                                <div className="bkpb-vb-content">
                                    <span className="bkpb-vb-num">100%</span>
                                    <span className="bkpb-vb-label">Royalties kept by you</span>
                                </div>
                                <div className="bkpb-vb-divider" />
                                <div className="bkpb-vb-content">
                                    <span className="bkpb-vb-num">Global</span>
                                    <span className="bkpb-vb-label">Distribution network</span>
                                </div>
                                <div className="bkpb-vb-divider" />
                                <div className="bkpb-vb-content">
                                    <span className="bkpb-vb-num">Full</span>
                                    <span className="bkpb-vb-label">Copyright ownership</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section className="bkpb-features">
                    <div className="bkpb-features-inner">
                        <div className="bkpb-section-head">
                            <span className="bkpb-eyebrow">Why Choose Us</span>
                            <h2 className="bkpb-section-title">The Belmont <span className="bkpb-hl">Difference</span></h2>
                        </div>
                        <div className="bkpb-features-grid">
                            {features.map((f) => (
                                <div key={f.num} className="bkpb-feature-card">
                                    <span className="bkpb-fc-num">{f.num}</span>
                                    <h3 className="bkpb-fc-title">{f.title}</h3>
                                    <p className="bkpb-fc-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CATEGORIES */}
                <section className="bkpb-cats">
                    <div className="bkpb-cats-inner">
                        <div className="bkpb-section-head bkpb-head-center">
                            <span className="bkpb-eyebrow">Genres We Publish</span>
                            <h2 className="bkpb-section-title">Publishing For Every <span className="bkpb-hl">Genre & Format</span></h2>
                            <p className="bkpb-cats-sub">From fiction to academic, our distribution network supports every category and genre.</p>
                        </div>
                        <div className="bkpb-cats-grid">
                            {categories.map((c) => (
                                <div key={c.label} className="bkpb-cat-pill">
                                    <span className="bkpb-cp-icon">{c.icon}</span>{c.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="bkpb-process">
                    <div className="bkpb-process-inner">
                        <div className="bkpb-section-head bkpb-head-center">
                            <span className="bkpb-eyebrow">How It Works</span>
                            <h2 className="bkpb-section-title">Our <span className="bkpb-hl">Publishing Process</span></h2>
                        </div>
                        <div className="bkpb-steps">
                            {steps.map((s, i) => (
                                <div key={s.num} className="bkpb-step-row">
                                    <div className="bkpb-step-left">
                                        <div className="bkpb-step-node"><span className="bkpb-step-num">{s.num}</span></div>
                                        {i < steps.length - 1 && <div className="bkpb-step-vline" />}
                                    </div>
                                    <div className="bkpb-step-body">
                                        <h3 className="bkpb-step-title">{s.title}</h3>
                                        <p className="bkpb-step-desc">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="bkpb-faq">
                    <div className="bkpb-faq-inner">
                        <div className="bkpb-faq-left">
                            <span className="bkpb-eyebrow">FAQ</span>
                            <h2 className="bkpb-section-title">Common <span className="bkpb-hl">Questions</span></h2>
                            <p className="bkpb-body-text" style={{ marginTop: "16px" }}>Still have questions? Our team is available 24/7 for a free consultation.</p>
                            <button className="bkpb-btn-orange" style={{ marginTop: "24px" }}>Talk To An Expert</button>
                        </div>
                        <div className="bkpb-faq-right">
                            {faqs.map((item, i) => (
                                <details key={i} className="bkpb-faq-item">
                                    <summary className="bkpb-faq-q">{item.q}<span className="bkpb-faq-icon">+</span></summary>
                                    <p className="bkpb-faq-a">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED */}
                <section className="bkpb-related">
                    <div className="bkpb-related-inner">
                        <span className="bkpb-eyebrow">Explore More</span>
                        <h2 className="bkpb-section-title" style={{ marginBottom: "32px" }}>Related <span className="bkpb-hl">Services</span></h2>
                        <div className="bkpb-related-grid">
                            {relatedServices.map((rs) => (
                                <Link key={rs.slug} href={`/InnerServices/${rs.slug}`}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "#fafafa", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "8px", textDecoration: "none", transition: "all 0.25s" }}
                                    onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "#f57c15"; el.style.background = "rgba(245,124,21,0.03)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 6px 18px rgba(245,124,21,0.08)"; const a = el.querySelector(".bkpb-rca") as HTMLElement; if (a) { a.style.opacity = "1"; a.style.transform = "translate(0,0)"; } }}
                                    onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "rgba(0,0,0,0.07)"; el.style.background = "#fafafa"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; const a = el.querySelector(".bkpb-rca") as HTMLElement; if (a) { a.style.opacity = "0"; a.style.transform = "translate(-4px,4px)"; } }}
                                >
                                    <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: "13px", fontWeight: 700, color: "#222" }}>{rs.label}</span>
                                    <span className="bkpb-rca" style={{ fontSize: "16px", color: "#f57c15", opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.25s", display: "inline-block" }}>↗</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bkpb-cta">
                    <div className="bkpb-cta-inner">
                        <span className="bkpb-eyebrow" style={{ color: "rgba(245,124,21,0.8)" }}>Get Started Today</span>
                        <h2 className="bkpb-cta-title">Ready To Publish<br /><span className="bkpb-hl">Your Book?</span></h2>
                        <p className="bkpb-cta-sub">Schedule a free consultation with our publishing team. We will handle the entire process so you can focus on what matters most — your writing.</p>
                        <div className="bkpb-cta-btns">
                            <button className="bkpb-btn-orange bkpb-btn-lg">Get A Free Quote</button>
                            <button className="bkpb-btn-outline bkpb-btn-lg">(646) 298 6438</button>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                .bkpb-page{font-family:'Raleway',sans-serif;color:#111;background:#fff;}
                .bkpb-eyebrow{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#f57c15;margin-bottom:14px;}
                .bkpb-section-title{font-family:'Oswald',sans-serif;font-size:clamp(1.9rem,3.5vw,2.8rem);color:#111;text-transform:uppercase;line-height:1.1;margin:0 0 20px 0;letter-spacing:-0.3px;}
                .bkpb-hl{color:#f57c15;}
                .bkpb-body-text{font-size:14px;color:#555;line-height:1.75;margin:0 0 16px 0;}
                .bkpb-section-head{margin-bottom:52px;}
                .bkpb-head-center{text-align:center;}
                .bkpb-btn-orange{display:inline-flex;align-items:center;gap:8px;background:#f57c15;color:#fff;border:none;padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background 0.25s,transform 0.2s,box-shadow 0.25s;box-shadow:0 5px 18px rgba(245,124,21,0.28);}
                .bkpb-btn-orange:hover{background:#d96c0d;transform:translateY(-2px);box-shadow:0 8px 24px rgba(245,124,21,0.35);}
                .bkpb-btn-outline{display:inline-flex;align-items:center;background:transparent;color:#333;border:1.5px solid rgba(0,0,0,0.18);padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:border-color 0.25s,color 0.25s;}
                .bkpb-btn-outline:hover{border-color:#f57c15;color:#f57c15;}
                .bkpb-btn-lg{padding:15px 36px;font-size:12.5px;}
                .bkpb-hero{background:#060606;padding:60px 24px 80px;position:relative;overflow:hidden;width:100%;}
                .bkpb-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 55% 50% at 30% 50%,rgba(245,124,21,0.07) 0%,transparent 65%),radial-gradient(ellipse 40% 60% at 80% 20%,rgba(245,124,21,0.04) 0%,transparent 60%);pointer-events:none;}
                .bkpb-hero-grid{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:1fr 260px;gap:40px;align-items:start;position:relative;z-index:2;}
                .bkpb-hero-inner{padding-top:10px;}
                .bkpb-breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:28px;}
                .bkpb-bc-sep{color:rgba(255,255,255,0.2);font-size:11px;}
                .bkpb-bc-current{font-size:11px;font-weight:700;color:#f57c15;letter-spacing:0.5px;}
                .bkpb-hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(245,124,21,0.08);border:1px solid rgba(245,124,21,0.2);border-radius:30px;padding:6px 16px;font-size:10.5px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:#f57c15;margin-bottom:28px;}
                .bkpb-tag-dot{width:5px;height:5px;border-radius:50%;background:#f57c15;flex-shrink:0;}
                .bkpb-hero-title{font-family:'Oswald',sans-serif;font-size:clamp(2.8rem,6vw,5.2rem);color:#fff;line-height:0.95;text-transform:uppercase;letter-spacing:-1px;margin:0 0 24px 0;}
                .bkpb-hero-em{color:#f57c15;font-style:italic;}
                .bkpb-hero-sub{font-size:14.5px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:520px;margin:0 0 36px 0;font-weight:400;}
                .bkpb-hero-actions{display:flex;flex-wrap:nowrap;gap:12px;margin-bottom:32px;align-items:center;}
                .bkpb-hero-actions .bkpb-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .bkpb-hero-actions .bkpb-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                .bkpb-trust-row{display:flex;flex-wrap:wrap;gap:8px;}
                .bkpb-trust-pill{font-size:11px;font-weight:700;color:rgba(255,255,255,0.45);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:6px 12px;letter-spacing:0.3px;}
                .bkpb-hero-sidebar{display:flex;flex-direction:column;gap:3px;padding-top:64px;}
                .bkpb-sidebar-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px 18px;display:flex;flex-direction:column;gap:4px;transition:border-color 0.3s;}
                .bkpb-sidebar-card:hover{border-color:rgba(245,124,21,0.25);}
                .bkpb-sc-val{font-family:'Oswald',sans-serif;font-size:28px;font-weight:700;color:#f57c15;line-height:1;}
                .bkpb-sc-label{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}

                /* ══ INTRO VISUAL BOX ══ */
                .bkpb-intro { background: #fff; padding: 90px 24px; border-bottom: 1px solid rgba(0,0,0,0.06); }
                .bkpb-intro-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 340px; gap: 70px; align-items: center; }
                .bkpb-intro-visual { display: flex; flex-direction: column; }
                .bkpb-visual-box { background: #060606; border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 32px 28px; position: relative; overflow: hidden; }
                .bkpb-vb-accent { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #f57c15, rgba(245,124,21,0.3)); }
                .bkpb-vb-line { position: absolute; top: 0; left: 28px; width: 1px; bottom: 0; background: rgba(245,124,21,0.08); }
                .bkpb-vb-content { display: flex; flex-direction: column; gap: 4px; padding: 16px 0 16px 20px; position: relative; }
                .bkpb-vb-num { font-family: 'Oswald', sans-serif; font-size: 32px; font-weight: 700; color: #f57c15; line-height: 1; }
                .bkpb-vb-label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.3); }
                .bkpb-vb-divider { height: 1px; background: rgba(255,255,255,0.05); margin-left: 20px; }

                .bkpb-features{background:#f9f8f7;padding:90px 24px;}
                .bkpb-features-inner{max-width:1200px;margin:0 auto;}
                .bkpb-features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
                .bkpb-feature-card{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;padding:32px 28px;transition:border-color 0.3s,box-shadow 0.3s,transform 0.3s;}
                .bkpb-feature-card:hover{border-color:rgba(245,124,21,0.25);box-shadow:0 10px 30px rgba(245,124,21,0.07);transform:translateY(-3px);}
                .bkpb-fc-num{display:block;font-family:'Oswald',sans-serif;font-size:36px;font-weight:700;color:rgba(245,124,21,0.12);line-height:1;margin-bottom:-6px;user-select:none;}
                .bkpb-fc-title{font-family:'Oswald',sans-serif;font-size:16px;font-weight:600;color:#111;text-transform:uppercase;letter-spacing:0.3px;margin:0 0 12px 0;}
                .bkpb-fc-desc{font-size:13px;color:#666;line-height:1.7;margin:0;}
                .bkpb-cats{background:#060606;padding:90px 24px;}
                .bkpb-cats-inner{max-width:1100px;margin:0 auto;}
                .bkpb-cats .bkpb-section-title{color:#fff;}
                .bkpb-cats-sub{font-size:13.5px;color:rgba(255,255,255,0.35);margin:0;}
                .bkpb-cats-grid{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;}
                .bkpb-cat-pill{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:6px;font-size:12.5px;font-weight:600;color:rgba(255,255,255,0.65);transition:all 0.25s;cursor:default;}
                .bkpb-cat-pill:hover{background:rgba(245,124,21,0.1);border-color:rgba(245,124,21,0.3);color:#f57c15;}
                .bkpb-cp-icon{color:#f57c15;font-size:8px;}
                .bkpb-process{background:#fff;padding:90px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .bkpb-process-inner{max-width:900px;margin:0 auto;}
                .bkpb-steps{display:flex;flex-direction:column;}
                .bkpb-step-row{display:flex;gap:24px;align-items:stretch;}
                .bkpb-step-row:hover .bkpb-step-node{background:#f57c15;}
                .bkpb-step-row:hover .bkpb-step-num{color:#fff;}
                .bkpb-step-left{display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:52px;}
                .bkpb-step-node{width:52px;height:52px;border-radius:50%;background:#fff;border:2px solid #f57c15;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background 0.3s;}
                .bkpb-step-num{font-family:'Oswald',sans-serif;font-size:14px;font-weight:700;color:#f57c15;transition:color 0.3s;}
                .bkpb-step-vline{width:2px;flex:1;background:rgba(245,124,21,0.15);min-height:24px;}
                .bkpb-step-body{padding:10px 0 36px;flex:1;}
                .bkpb-step-title{font-family:'Oswald',sans-serif;font-size:17px;font-weight:600;color:#111;text-transform:uppercase;margin:0 0 8px 0;}
                .bkpb-step-desc{font-size:13.5px;color:#666;line-height:1.65;margin:0;}
                .bkpb-faq{background:#f9f8f7;padding:90px 24px;}
                .bkpb-faq-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:320px 1fr;gap:70px;align-items:start;}
                .bkpb-faq-item{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;margin-bottom:6px;overflow:hidden;transition:border-color 0.25s;}
                .bkpb-faq-item[open]{border-color:rgba(245,124,21,0.25);}
                .bkpb-faq-q{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 20px;font-family:'Raleway',sans-serif;font-size:13.5px;font-weight:700;color:#111;cursor:pointer;list-style:none;user-select:none;}
                .bkpb-faq-q::-webkit-details-marker{display:none;}
                .bkpb-faq-icon{font-size:20px;font-weight:300;color:#f57c15;flex-shrink:0;line-height:1;transition:transform 0.25s;}
                .bkpb-faq-item[open] .bkpb-faq-icon{transform:rotate(45deg);}
                .bkpb-faq-a{padding:14px 20px 18px;font-size:13px;color:#666;line-height:1.7;margin:0;border-top:1px solid rgba(0,0,0,0.04);}
                .bkpb-related{background:#fff;padding:70px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .bkpb-related-inner{max-width:1200px;margin:0 auto;}
                .bkpb-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
                .bkpb-cta{background:#060606;padding:110px 24px;text-align:center;position:relative;overflow:hidden;}
                .bkpb-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(245,124,21,0.07) 0%,transparent 70%);pointer-events:none;}
                .bkpb-cta-inner{position:relative;z-index:2;}
                .bkpb-cta-title{font-family:'Oswald',sans-serif;font-size:clamp(2.5rem,5vw,4.2rem);color:#fff;text-transform:uppercase;line-height:1.05;margin:8px 0 20px 0;letter-spacing:-0.5px;}
                .bkpb-cta-sub{font-size:14.5px;color:rgba(255,255,255,0.38);max-width:460px;margin:0 auto 36px;line-height:1.7;}
                .bkpb-cta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:nowrap;align-items:center;}
                .bkpb-cta .bkpb-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .bkpb-cta .bkpb-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                @media (max-width:1024px){
                    .bkpb-hero-grid{grid-template-columns:1fr;}
                    .bkpb-hero-sidebar{padding-top:0;display:grid;grid-template-columns:repeat(4,1fr);}
                    .bkpb-intro-inner{grid-template-columns:1fr;gap:40px;}
                    .bkpb-faq-inner{grid-template-columns:1fr;gap:40px;}
                }
                @media (max-width:768px){
                    .bkpb-features-grid{grid-template-columns:1fr;}
                    .bkpb-related-grid{grid-template-columns:repeat(2,1fr);}
                    .bkpb-hero-sidebar{grid-template-columns:repeat(2,1fr);}
                }
                @media (max-width:520px){
                    .bkpb-related-grid{grid-template-columns:1fr;}
                    .bkpb-cta-btns{flex-wrap:wrap;}
                }
            `}</style>
            </main>
            <FooterSection />
        </>
    );
}