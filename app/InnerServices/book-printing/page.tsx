"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const relatedServices = [
    { label: "Book Cover Design", slug: "book-cover-design" },
    { label: "Book Formatting", slug: "book-formatting" },
    { label: "Book Publishing", slug: "book-publishing" },
    { label: "Book Marketing", slug: "book-marketing" },
    { label: "Book Editing", slug: "book-editing" },
    { label: "Ebook Creation", slug: "ebook-creation" },
];

const categories = [
    { icon: "✦", label: "Paperback (Perfect Bind)" },
    { icon: "✦", label: "Hardcover (Case Wrap)" },
    { icon: "✦", label: "Dust Jackets" },
    { icon: "✦", label: "Matte & Glossy Finish" },
    { icon: "✦", label: "Large Print Editions" },
    { icon: "✦", label: "Coil & Comb Binding" },
    { icon: "✦", label: "Saddle Stitched" },
    { icon: "✦", label: "Full-Color Interior" },
    { icon: "✦", label: "Black & White Interior" },
    { icon: "✦", label: "Premium Paper Stocks" },
    { icon: "✦", label: "Foil Stamping" },
    { icon: "✦", label: "Embossing & Debossing" },
];

const features = [
    { num: "01", title: "Premium Print Quality", desc: "We use commercial-grade, high-resolution printing presses — delivering crisp text, vibrant color reproduction, and professional-grade covers that rival traditional publishing houses." },
    { num: "02", title: "No Minimum Orders", desc: "Print one copy or ten thousand. Our print-on-demand infrastructure means you never have to pay for a large print run upfront or store unsold inventory in your garage." },
    { num: "03", title: "Wide Format Options", desc: "From standard paperbacks and hardcovers to large print and landscape formats — we offer every binding style, trim size, and interior format your book requires." },
    { num: "04", title: "Premium Paper Stocks", desc: "Choose from a range of acid-free, archival-quality paper stocks — including cream, white, matte, and glossy finishes that give your book the weight and feel of a bestseller." },
    { num: "05", title: "Fast Turnaround", desc: "Print-on-demand copies are produced and shipped within days. Bulk orders are printed, bound, and delivered on aggressive timelines to meet your launch deadlines." },
    { num: "06", title: "Global Fulfillment", desc: "We print and ship from facilities located worldwide — meaning your readers get fast, affordable delivery no matter where they live, without expensive international shipping fees." },
];

const steps = [
    { num: "01", title: "Print Spec Selection", desc: "We help you select the ideal trim size, binding style, paper stock, and finish — balancing aesthetics, durability, and unit cost to meet your goals." },
    { num: "02", title: "File Pre-Flight Check", desc: "Our pre-press team reviews your interior and cover files for correct bleed, color profiles, spine width, and resolution — ensuring zero rejections at the press." },
    { num: "03", title: "Physical Proof Copy", desc: "Before any mass production, we print and ship a single proof copy to you for final review — ensuring the physical book matches your exact expectations." },
    { num: "04", title: "Mass Production", desc: "Once approved, your book goes into production. Whether it's a single POD order or a bulk offset run, every copy is printed to the same rigorous quality standards." },
    { num: "05", title: "Delivery & Warehousing", desc: "Books are shipped directly to you, your distributor, or your readers. We also offer warehousing solutions for authors who need bulk inventory managed and fulfilled." },
];

const faqs = [
    { q: "What is the minimum number of books I can print?", a: "With our print-on-demand service, you can print just one copy at a time. There is no minimum order. For bulk offset printing, minimums typically start around 250–500 copies." },
    { q: "What paper options are available?", a: "We offer a variety of premium paper stocks including standard white, natural cream, and glossy finishes. We'll recommend the best weight and color based on your book's genre and page count." },
    { q: "How long does it take to print my books?", a: "Print-on-demand copies are typically printed and shipped within 3–5 business days. Bulk offset orders generally take 2–3 weeks depending on the quantity and complexity of the finish." },
    { q: "Can I get a proof copy before ordering in bulk?", a: "Absolutely. We always recommend ordering a physical proof copy to review the paper quality, color accuracy, and binding before committing to a large print run." },
    { q: "Do you offer wholesale printing for bookstores?", a: "Yes. We can produce bulk quantities at significant wholesale discounts, formatted and shipped to distributors or directly to brick-and-mortar bookstores on your behalf." },
];

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="bkpr-page">

                {/* HERO */}
                <section className="bkpr-hero">
                    <div className="bkpr-hero-bg" />
                    <div className="bkpr-hero-grid">
                        <div className="bkpr-hero-inner">
                            <nav className="bkpr-breadcrumb">
                                <Link href="/" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Home</Link>
                                <span className="bkpr-bc-sep">›</span>
                                <Link href="/services" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Services</Link>
                                <span className="bkpr-bc-sep">›</span>
                                <span className="bkpr-bc-current">Book Printing</span>
                            </nav>
                            <div className="bkpr-hero-tag"><span className="bkpr-tag-dot" />Design, Printing & Marketing</div>
                            <h1 className="bkpr-hero-title">Professional<br /><em className="bkpr-hero-em">Book Printing</em><br />Services</h1>
                            <p className="bkpr-hero-sub">Premium book printing with no minimums — from single print-on-demand copies to bulk offset runs. Professional paper stocks, binding, and global delivery.</p>
                            <div className="bkpr-hero-actions">
                                <button className="bkpr-btn-orange">Get A Free Quote</button>
                                <button className="bkpr-btn-outline">(646) 298 6438</button>
                            </div>
                            <div className="bkpr-trust-row">
                                <span className="bkpr-trust-pill">✓ Print On Demand</span>
                                <span className="bkpr-trust-pill">✓ No Minimums</span>
                                <span className="bkpr-trust-pill">✓ Premium Paper</span>
                                <span className="bkpr-trust-pill">✓ Global Delivery</span>
                            </div>
                        </div>
                        <div className="bkpr-hero-sidebar">
                            <div className="bkpr-sidebar-card"><span className="bkpr-sc-val">1 to 100K</span><span className="bkpr-sc-label">Copies Printed</span></div>
                            <div className="bkpr-sidebar-card"><span className="bkpr-sc-val">POD</span><span className="bkpr-sc-label">Zero Inventory Risk</span></div>
                            <div className="bkpr-sidebar-card"><span className="bkpr-sc-val">Premium</span><span className="bkpr-sc-label">Paper & Binding</span></div>
                            <div className="bkpr-sidebar-card"><span className="bkpr-sc-val">Global</span><span className="bkpr-sc-label">Fulfillment Network</span></div>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="bkpr-intro">
                    <div className="bkpr-intro-inner">
                        <div className="bkpr-intro-text">
                            <span className="bkpr-eyebrow">What We Do</span>
                            <h2 className="bkpr-section-title">Premium Printing,<br /><span className="bkpr-hl">Zero Inventory Risk.</span></h2>
                            <p className="bkpr-body-text">A beautifully designed book deserves a beautifully printed book. Poor printing quality, thin paper, and weak binding ruin the reader's experience and damage your professional reputation. Your book should feel as substantial as the words inside it.</p>
                            <p className="bkpr-body-text">Our book printing service offers the best of both worlds — the flexibility of print-on-demand with zero inventory risk, and the premium quality of traditional offset printing for larger runs. Whether you need a single proof copy or 10,000 books for a launch, we ensure every page, cover, and binding meets the highest industry standards.</p>
                            <button className="bkpr-btn-orange" style={{ marginTop: "8px" }}>Print My Book</button>
                        </div>
                        <div className="bkpr-intro-visual">
                            <div className="bkpr-visual-box">
                                <div className="bkpr-vb-accent" />
                                <div className="bkpr-vb-line" />
                                <div className="bkpr-vb-content">
                                    <span className="bkpr-vb-num">Print 1+</span>
                                    <span className="bkpr-vb-label">No minimum order</span>
                                </div>
                                <div className="bkpr-vb-divider" />
                                <div className="bkpr-vb-content">
                                    <span className="bkpr-vb-num">Premium</span>
                                    <span className="bkpr-vb-label">Paper stocks</span>
                                </div>
                                <div className="bkpr-vb-divider" />
                                <div className="bkpr-vb-content">
                                    <span className="bkpr-vb-num">Global</span>
                                    <span className="bkpr-vb-label">Shipping & delivery</span>
                                </div>
                                <div className="bkpr-vb-divider" />
                                <div className="bkpr-vb-content">
                                    <span className="bkpr-vb-num">100%</span>
                                    <span className="bkpr-vb-label">Quality guaranteed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section className="bkpr-features">
                    <div className="bkpr-features-inner">
                        <div className="bkpr-section-head">
                            <span className="bkpr-eyebrow">Why Choose Us</span>
                            <h2 className="bkpr-section-title">The Belmont <span className="bkpr-hl">Difference</span></h2>
                        </div>
                        <div className="bkpr-features-grid">
                            {features.map((f) => (
                                <div key={f.num} className="bkpr-feature-card">
                                    <span className="bkpr-fc-num">{f.num}</span>
                                    <h3 className="bkpr-fc-title">{f.title}</h3>
                                    <p className="bkpr-fc-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CATEGORIES */}
                <section className="bkpr-cats">
                    <div className="bkpr-cats-inner">
                        <div className="bkpr-section-head bkpr-head-center">
                            <span className="bkpr-eyebrow">Formats We Print</span>
                            <h2 className="bkpr-section-title">Printing For Every <span className="bkpr-hl">Format & Finish</span></h2>
                            <p className="bkpr-cats-sub">From standard paperbacks to premium hardcovers with dust jackets, we print every format.</p>
                        </div>
                        <div className="bkpr-cats-grid">
                            {categories.map((c) => (
                                <div key={c.label} className="bkpr-cat-pill">
                                    <span className="bkpr-cp-icon">{c.icon}</span>{c.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="bkpr-process">
                    <div className="bkpr-process-inner">
                        <div className="bkpr-section-head bkpr-head-center">
                            <span className="bkpr-eyebrow">How It Works</span>
                            <h2 className="bkpr-section-title">Our <span className="bkpr-hl">Printing Process</span></h2>
                        </div>
                        <div className="bkpr-steps">
                            {steps.map((s, i) => (
                                <div key={s.num} className="bkpr-step-row">
                                    <div className="bkpr-step-left">
                                        <div className="bkpr-step-node"><span className="bkpr-step-num">{s.num}</span></div>
                                        {i < steps.length - 1 && <div className="bkpr-step-vline" />}
                                    </div>
                                    <div className="bkpr-step-body">
                                        <h3 className="bkpr-step-title">{s.title}</h3>
                                        <p className="bkpr-step-desc">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="bkpr-faq">
                    <div className="bkpr-faq-inner">
                        <div className="bkpr-faq-left">
                            <span className="bkpr-eyebrow">FAQ</span>
                            <h2 className="bkpr-section-title">Common <span className="bkpr-hl">Questions</span></h2>
                            <p className="bkpr-body-text" style={{ marginTop: "16px" }}>Still have questions? Our team is available 24/7 for a free consultation.</p>
                            <button className="bkpr-btn-orange" style={{ marginTop: "24px" }}>Talk To An Expert</button>
                        </div>
                        <div className="bkpr-faq-right">
                            {faqs.map((item, i) => (
                                <details key={i} className="bkpr-faq-item">
                                    <summary className="bkpr-faq-q">{item.q}<span className="bkpr-faq-icon">+</span></summary>
                                    <p className="bkpr-faq-a">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED */}
                <section className="bkpr-related">
                    <div className="bkpr-related-inner">
                        <span className="bkpr-eyebrow">Explore More</span>
                        <h2 className="bkpr-section-title" style={{ marginBottom: "32px" }}>Related <span className="bkpr-hl">Services</span></h2>
                        <div className="bkpr-related-grid">
                            {relatedServices.map((rs) => (
                                <Link key={rs.slug} href={`/InnerServices/${rs.slug}`}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "#fafafa", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "8px", textDecoration: "none", transition: "all 0.25s" }}
                                    onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "#f57c15"; el.style.background = "rgba(245,124,21,0.03)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 6px 18px rgba(245,124,21,0.08)"; const a = el.querySelector(".bkpr-rca") as HTMLElement; if (a) { a.style.opacity = "1"; a.style.transform = "translate(0,0)"; } }}
                                    onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "rgba(0,0,0,0.07)"; el.style.background = "#fafafa"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; const a = el.querySelector(".bkpr-rca") as HTMLElement; if (a) { a.style.opacity = "0"; a.style.transform = "translate(-4px,4px)"; } }}
                                >
                                    <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: "13px", fontWeight: 700, color: "#222" }}>{rs.label}</span>
                                    <span className="bkpr-rca" style={{ fontSize: "16px", color: "#f57c15", opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.25s", display: "inline-block" }}>↗</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bkpr-cta">
                    <div className="bkpr-cta-inner">
                        <span className="bkpr-eyebrow" style={{ color: "rgba(245,124,21,0.8)" }}>Get Started Today</span>
                        <h2 className="bkpr-cta-title">Ready To Print<br /><span className="bkpr-hl">Your Book?</span></h2>
                        <p className="bkpr-cta-sub">Get a free printing quote and spec consultation. We will ensure your book looks and feels like a bestseller on every shelf.</p>
                        <div className="bkpr-cta-btns">
                            <button className="bkpr-btn-orange bkpr-btn-lg">Get A Free Quote</button>
                            <button className="bkpr-btn-outline bkpr-btn-lg">(646) 298 6438</button>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                .bkpr-page{font-family:'Raleway',sans-serif;color:#111;background:#fff;}
                .bkpr-eyebrow{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#f57c15;margin-bottom:14px;}
                .bkpr-section-title{font-family:'Oswald',sans-serif;font-size:clamp(1.9rem,3.5vw,2.8rem);color:#111;text-transform:uppercase;line-height:1.1;margin:0 0 20px 0;letter-spacing:-0.3px;}
                .bkpr-hl{color:#f57c15;}
                .bkpr-body-text{font-size:14px;color:#555;line-height:1.75;margin:0 0 16px 0;}
                .bkpr-section-head{margin-bottom:52px;}
                .bkpr-head-center{text-align:center;}
                .bkpr-btn-orange{display:inline-flex;align-items:center;gap:8px;background:#f57c15;color:#fff;border:none;padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background 0.25s,transform 0.2s,box-shadow 0.25s;box-shadow:0 5px 18px rgba(245,124,21,0.28);}
                .bkpr-btn-orange:hover{background:#d96c0d;transform:translateY(-2px);box-shadow:0 8px 24px rgba(245,124,21,0.35);}
                .bkpr-btn-outline{display:inline-flex;align-items:center;background:transparent;color:#333;border:1.5px solid rgba(0,0,0,0.18);padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:border-color 0.25s,color 0.25s;}
                .bkpr-btn-outline:hover{border-color:#f57c15;color:#f57c15;}
                .bkpr-btn-lg{padding:15px 36px;font-size:12.5px;}
                .bkpr-hero{background:#060606;padding:60px 24px 80px;position:relative;overflow:hidden;width:100%;}
                .bkpr-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 55% 50% at 30% 50%,rgba(245,124,21,0.07) 0%,transparent 65%),radial-gradient(ellipse 40% 60% at 80% 20%,rgba(245,124,21,0.04) 0%,transparent 60%);pointer-events:none;}
                .bkpr-hero-grid{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:1fr 260px;gap:40px;align-items:start;position:relative;z-index:2;}
                .bkpr-hero-inner{padding-top:10px;}
                .bkpr-breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:28px;}
                .bkpr-bc-sep{color:rgba(255,255,255,0.2);font-size:11px;}
                .bkpr-bc-current{font-size:11px;font-weight:700;color:#f57c15;letter-spacing:0.5px;}
                .bkpr-hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(245,124,21,0.08);border:1px solid rgba(245,124,21,0.2);border-radius:30px;padding:6px 16px;font-size:10.5px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:#f57c15;margin-bottom:28px;}
                .bkpr-tag-dot{width:5px;height:5px;border-radius:50%;background:#f57c15;flex-shrink:0;}
                .bkpr-hero-title{font-family:'Oswald',sans-serif;font-size:clamp(2.8rem,6vw,5.2rem);color:#fff;line-height:0.95;text-transform:uppercase;letter-spacing:-1px;margin:0 0 24px 0;}
                .bkpr-hero-em{color:#f57c15;font-style:italic;}
                .bkpr-hero-sub{font-size:14.5px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:520px;margin:0 0 36px 0;font-weight:400;}
                .bkpr-hero-actions{display:flex;flex-wrap:nowrap;gap:12px;margin-bottom:32px;align-items:center;}
                .bkpr-hero-actions .bkpr-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .bkpr-hero-actions .bkpr-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                .bkpr-trust-row{display:flex;flex-wrap:wrap;gap:8px;}
                .bkpr-trust-pill{font-size:11px;font-weight:700;color:rgba(255,255,255,0.45);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:6px 12px;letter-spacing:0.3px;}
                .bkpr-hero-sidebar{display:flex;flex-direction:column;gap:3px;padding-top:64px;}
                .bkpr-sidebar-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px 18px;display:flex;flex-direction:column;gap:4px;transition:border-color 0.3s;}
                .bkpr-sidebar-card:hover{border-color:rgba(245,124,21,0.25);}
                .bkpr-sc-val{font-family:'Oswald',sans-serif;font-size:28px;font-weight:700;color:#f57c15;line-height:1;}
                .bkpr-sc-label{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}

                /* ══ INTRO VISUAL BOX ══ */
                .bkpr-intro { background: #fff; padding: 90px 24px; border-bottom: 1px solid rgba(0,0,0,0.06); }
                .bkpr-intro-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 340px; gap: 70px; align-items: center; }
                .bkpr-intro-visual { display: flex; flex-direction: column; }
                .bkpr-visual-box { background: #060606; border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 32px 28px; position: relative; overflow: hidden; }
                .bkpr-vb-accent { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #f57c15, rgba(245,124,21,0.3)); }
                .bkpr-vb-line { position: absolute; top: 0; left: 28px; width: 1px; bottom: 0; background: rgba(245,124,21,0.08); }
                .bkpr-vb-content { display: flex; flex-direction: column; gap: 4px; padding: 16px 0 16px 20px; position: relative; }
                .bkpr-vb-num { font-family: 'Oswald', sans-serif; font-size: 32px; font-weight: 700; color: #f57c15; line-height: 1; }
                .bkpr-vb-label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.3); }
                .bkpr-vb-divider { height: 1px; background: rgba(255,255,255,0.05); margin-left: 20px; }

                .bkpr-features{background:#f9f8f7;padding:90px 24px;}
                .bkpr-features-inner{max-width:1200px;margin:0 auto;}
                .bkpr-features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
                .bkpr-feature-card{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;padding:32px 28px;transition:border-color 0.3s,box-shadow 0.3s,transform 0.3s;}
                .bkpr-feature-card:hover{border-color:rgba(245,124,21,0.25);box-shadow:0 10px 30px rgba(245,124,21,0.07);transform:translateY(-3px);}
                .bkpr-fc-num{display:block;font-family:'Oswald',sans-serif;font-size:36px;font-weight:700;color:rgba(245,124,21,0.12);line-height:1;margin-bottom:-6px;user-select:none;}
                .bkpr-fc-title{font-family:'Oswald',sans-serif;font-size:16px;font-weight:600;color:#111;text-transform:uppercase;letter-spacing:0.3px;margin:0 0 12px 0;}
                .bkpr-fc-desc{font-size:13px;color:#666;line-height:1.7;margin:0;}
                .bkpr-cats{background:#060606;padding:90px 24px;}
                .bkpr-cats-inner{max-width:1100px;margin:0 auto;}
                .bkpr-cats .bkpr-section-title{color:#fff;}
                .bkpr-cats-sub{font-size:13.5px;color:rgba(255,255,255,0.35);margin:0;}
                .bkpr-cats-grid{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;}
                .bkpr-cat-pill{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:6px;font-size:12.5px;font-weight:600;color:rgba(255,255,255,0.65);transition:all 0.25s;cursor:default;}
                .bkpr-cat-pill:hover{background:rgba(245,124,21,0.1);border-color:rgba(245,124,21,0.3);color:#f57c15;}
                .bkpr-cp-icon{color:#f57c15;font-size:8px;}
                .bkpr-process{background:#fff;padding:90px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .bkpr-process-inner{max-width:900px;margin:0 auto;}
                .bkpr-steps{display:flex;flex-direction:column;}
                .bkpr-step-row{display:flex;gap:24px;align-items:stretch;}
                .bkpr-step-row:hover .bkpr-step-node{background:#f57c15;}
                .bkpr-step-row:hover .bkpr-step-num{color:#fff;}
                .bkpr-step-left{display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:52px;}
                .bkpr-step-node{width:52px;height:52px;border-radius:50%;background:#fff;border:2px solid #f57c15;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background 0.3s;}
                .bkpr-step-num{font-family:'Oswald',sans-serif;font-size:14px;font-weight:700;color:#f57c15;transition:color 0.3s;}
                .bkpr-step-vline{width:2px;flex:1;background:rgba(245,124,21,0.15);min-height:24px;}
                .bkpr-step-body{padding:10px 0 36px;flex:1;}
                .bkpr-step-title{font-family:'Oswald',sans-serif;font-size:17px;font-weight:600;color:#111;text-transform:uppercase;margin:0 0 8px 0;}
                .bkpr-step-desc{font-size:13.5px;color:#666;line-height:1.65;margin:0;}
                .bkpr-faq{background:#f9f8f7;padding:90px 24px;}
                .bkpr-faq-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:320px 1fr;gap:70px;align-items:start;}
                .bkpr-faq-item{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;margin-bottom:6px;overflow:hidden;transition:border-color 0.25s;}
                .bkpr-faq-item[open]{border-color:rgba(245,124,21,0.25);}
                .bkpr-faq-q{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 20px;font-family:'Raleway',sans-serif;font-size:13.5px;font-weight:700;color:#111;cursor:pointer;list-style:none;user-select:none;}
                .bkpr-faq-q::-webkit-details-marker{display:none;}
                .bkpr-faq-icon{font-size:20px;font-weight:300;color:#f57c15;flex-shrink:0;line-height:1;transition:transform 0.25s;}
                .bkpr-faq-item[open] .bkpr-faq-icon{transform:rotate(45deg);}
                .bkpr-faq-a{padding:14px 20px 18px;font-size:13px;color:#666;line-height:1.7;margin:0;border-top:1px solid rgba(0,0,0,0.04);}
                .bkpr-related{background:#fff;padding:70px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .bkpr-related-inner{max-width:1200px;margin:0 auto;}
                .bkpr-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
                .bkpr-cta{background:#060606;padding:110px 24px;text-align:center;position:relative;overflow:hidden;}
                .bkpr-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(245,124,21,0.07) 0%,transparent 70%);pointer-events:none;}
                .bkpr-cta-inner{position:relative;z-index:2;}
                .bkpr-cta-title{font-family:'Oswald',sans-serif;font-size:clamp(2.5rem,5vw,4.2rem);color:#fff;text-transform:uppercase;line-height:1.05;margin:8px 0 20px 0;letter-spacing:-0.5px;}
                .bkpr-cta-sub{font-size:14.5px;color:rgba(255,255,255,0.38);max-width:460px;margin:0 auto 36px;line-height:1.7;}
                .bkpr-cta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:nowrap;align-items:center;}
                .bkpr-cta .bkpr-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .bkpr-cta .bkpr-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                @media (max-width:1024px){
                    .bkpr-hero-grid{grid-template-columns:1fr;}
                    .bkpr-hero-sidebar{padding-top:0;display:grid;grid-template-columns:repeat(4,1fr);}
                    .bkpr-intro-inner{grid-template-columns:1fr;gap:40px;}
                    .bkpr-faq-inner{grid-template-columns:1fr;gap:40px;}
                }
                @media (max-width:768px){
                    .bkpr-features-grid{grid-template-columns:1fr;}
                    .bkpr-related-grid{grid-template-columns:repeat(2,1fr);}
                    .bkpr-hero-sidebar{grid-template-columns:repeat(2,1fr);}
                }
                @media (max-width:520px){
                    .bkpr-related-grid{grid-template-columns:1fr;}
                    .bkpr-cta-btns{flex-wrap:wrap;}
                }
            `}</style>
            </main>
            <FooterSection />
        </>
    );
}