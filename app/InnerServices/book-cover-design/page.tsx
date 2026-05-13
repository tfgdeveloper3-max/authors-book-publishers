"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const relatedServices = [
    { label: "Book Formatting", slug: "book-formatting" },
    { label: "Book Publishing", slug: "book-publishing" },
    { label: "Book Marketing", slug: "book-marketing" },
    { label: "Book Editing", slug: "book-editing" },
    { label: "Ebook Creation", slug: "ebook-creation" },
    { label: "Illustration Services", slug: "illustration-services" },
];

const categories = [
    { icon: "✦", label: "Minimalist Design" },
    { icon: "✦", label: "Typography-Driven" },
    { icon: "✦", label: "Illustrated Covers" },
    { icon: "✦", label: "Photographic Covers" },
    { icon: "✦", label: "Fantasy & Sci-Fi" },
    { icon: "✦", label: "Romance & Erotica" },
    { icon: "✦", label: "Thriller & Mystery" },
    { icon: "✦", label: "Non-Fiction & Business" },
    { icon: "✦", label: "Children's Books" },
    { icon: "✦", label: "Young Adult" },
    { icon: "✦", label: "Custom 3D Mockups" },
    { icon: "✦", label: "Print & Ebook Combo" },
];

const features = [
    { num: "01", title: "Custom Original Artwork", desc: "No templates, no stock shortcuts. Every cover begins as a blank canvas — hand-illustrated, digitally painted, or photo-composited to create a one-of-a-kind visual identity for your book." },
    { num: "02", title: "Full Print Wrap Design", desc: "We design the complete cover package — front, spine, and back — with precise bleed dimensions and barcode placement, ready for KDP, IngramSpark, or any offset printer." },
    { num: "03", title: "Genre-Specific Typography", desc: "Font pairing, kerning, and hierarchy are tailored to your genre. Thrillers demand sharp, tight type; romances require elegant scripts; non-fiction needs clean, authoritative fonts." },
    { num: "04", title: "Unlimited Revisions", desc: "We iterate until you are completely satisfied. Your dedicated designer works with you to refine every detail — from color grading to font weight to image placement." },
    { num: "05", title: "Print & Ebook Files", desc: "You receive high-resolution print-ready PDFs and optimized ebook JPG/PNG files sized exactly for Amazon, Apple Books, and every major retailer's specifications." },
    { num: "06", title: "3D Mockups & Marketing Assets", desc: "Beyond the cover, we provide stunning 3D renderings and social media-ready graphics — perfect for pre-launch campaigns, author websites, and ad creatives." },
];

const steps = [
    { num: "01", title: "Creative Brief & Research", desc: "We study your manuscript, analyze top-performing covers in your genre, and define the visual strategy — ensuring your cover resonates with your exact target audience." },
    { num: "02", title: "Concept Sketches", desc: "Our designers create 2–3 distinct visual concepts for your review. You choose the direction that best captures the tone, theme, and promise of your book." },
    { num: "03", title: "Design Development", desc: "The chosen concept is developed into a high-fidelity design — refining color palettes, imagery, textures, and lighting to create a striking, professional finish." },
    { num: "04", title: "Typography & Layout", desc: "We layer in genre-perfect typography, balancing the title, subtitle, and author name for maximum readability and shelf impact — even at thumbnail size." },
    { num: "05", title: "Final Delivery", desc: "You receive all final files — print-ready PDF, ebook JPG, 3D mockups, and source files — along with a complete handover of all commercial rights." },
];

const faqs = [
    { q: "Do you use templates or stock images?", a: "Never. Every cover we design is 100% custom. We either hand-illustrate, digitally paint, or create bespoke photo-composites. Your cover will be entirely unique to your book." },
    { q: "What if I don't like the initial concepts?", a: "That's exactly why we offer unlimited revisions. If the initial concepts don't hit the mark, we pivot directions until we land on a design you absolutely love." },
    { q: "Will my cover meet Amazon and IngramSpark specs?", a: "Yes, guaranteed. We calculate precise spine widths based on your page count, set exact bleed margins, and embed all required color profiles and barcodes." },
    { q: "Do I own the final artwork?", a: "Yes, 100%. Upon final delivery, all commercial rights to the artwork and design transfer entirely to you. We retain no ownership or licensing rights." },
    { q: "Can you design a cover for an illustrated children's book?", a: "Absolutely. Children's books require vibrant, expressive illustrations that capture a child's imagination. Our illustrators specialize in character-driven covers for every age group." },
];

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="bkcd-page">

                {/* HERO */}
                <section className="bkcd-hero">
                    <div className="bkcd-hero-bg" />
                    <div className="bkcd-hero-grid">
                        <div className="bkcd-hero-inner">
                            <nav className="bkcd-breadcrumb">
                                <Link href="/" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Home</Link>
                                <span className="bkcd-bc-sep">›</span>
                                <Link href="/services" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Services</Link>
                                <span className="bkcd-bc-sep">›</span>
                                <span className="bkcd-bc-current">Book Cover Design</span>
                            </nav>
                            <div className="bkcd-hero-tag"><span className="bkcd-tag-dot" />Design & Marketing</div>
                            <h1 className="bkcd-hero-title">Professional<br /><em className="bkcd-hero-em">Book Cover Design</em><br />Services</h1>
                            <p className="bkcd-hero-sub">Custom book cover design by professional designers — crafted to stop scrollers, hook readers, and meet exact retailer specifications for both print and ebook.</p>
                            <div className="bkcd-hero-actions">
                                <button className="bkcd-btn-orange">Get A Free Quote</button>
                                <button className="bkcd-btn-outline">(646) 298 6438</button>
                            </div>
                            <div className="bkcd-trust-row">
                                <span className="bkcd-trust-pill">✓ 100% Custom Artwork</span>
                                <span className="bkcd-trust-pill">✓ Unlimited Revisions</span>
                                <span className="bkcd-trust-pill">✓ Print & Ebook Ready</span>
                                <span className="bkcd-trust-pill">✓ Full Rights Yours</span>
                            </div>
                        </div>
                        <div className="bkcd-hero-sidebar">
                            <div className="bkcd-sidebar-card"><span className="bkcd-sc-val">100%</span><span className="bkcd-sc-label">Custom Artwork</span></div>
                            <div className="bkcd-sidebar-card"><span className="bkcd-sc-val">KDP</span><span className="bkcd-sc-label">& Ingram Ready</span></div>
                            <div className="bkcd-sidebar-card"><span className="bkcd-sc-val">Front & Back</span><span className="bkcd-sc-label">Full Print Wrap</span></div>
                            <div className="bkcd-sidebar-card"><span className="bkcd-sc-val">3D Mockups</span><span className="bkcd-sc-label">Marketing Assets</span></div>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="bkcd-intro">
                    <div className="bkcd-intro-inner">
                        <div className="bkcd-intro-text">
                            <span className="bkcd-eyebrow">What We Do</span>
                            <h2 className="bkcd-section-title">A Cover Designed To<br /><span className="bkcd-hl">Sell Your Book.</span></h2>
                            <p className="bkcd-body-text">Readers do judge a book by its cover. In a marketplace flooded with millions of titles, your cover is your single most important marketing asset. An amateur cover tells readers the content inside is amateur too. A professional cover stops the scroll, builds trust, and compels them to click.</p>
                            <p className="bkcd-body-text">Our book cover design service pairs your book with a professional designer who specializes in your genre. We don't use templates or stock shortcuts. Every cover is custom-built from scratch — from concept sketches and typography pairing to final print-ready files — ensuring your book looks like a bestseller from day one.</p>
                            <button className="bkcd-btn-orange" style={{ marginTop: "8px" }}>Design My Cover</button>
                        </div>
                        <div className="bkcd-intro-visual">
                            <div className="bkcd-visual-box">
                                <div className="bkcd-vb-accent" />
                                <div className="bkcd-vb-line" />
                                <div className="bkcd-vb-content">
                                    <span className="bkcd-vb-num">Custom</span>
                                    <span className="bkcd-vb-label">Original artwork</span>
                                </div>
                                <div className="bkcd-vb-divider" />
                                <div className="bkcd-vb-content">
                                    <span className="bkcd-vb-num">Front, Back</span>
                                    <span className="bkcd-vb-label">& Spine design</span>
                                </div>
                                <div className="bkcd-vb-divider" />
                                <div className="bkcd-vb-content">
                                    <span className="bkcd-vb-num">Print + Ebook</span>
                                    <span className="bkcd-vb-label">Formats included</span>
                                </div>
                                <div className="bkcd-vb-divider" />
                                <div className="bkcd-vb-content">
                                    <span className="bkcd-vb-num">∞</span>
                                    <span className="bkcd-vb-label">Revisions until approved</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section className="bkcd-features">
                    <div className="bkcd-features-inner">
                        <div className="bkcd-section-head">
                            <span className="bkcd-eyebrow">Why Choose Us</span>
                            <h2 className="bkcd-section-title">The Belmont <span className="bkcd-hl">Difference</span></h2>
                        </div>
                        <div className="bkcd-features-grid">
                            {features.map((f) => (
                                <div key={f.num} className="bkcd-feature-card">
                                    <span className="bkcd-fc-num">{f.num}</span>
                                    <h3 className="bkcd-fc-title">{f.title}</h3>
                                    <p className="bkcd-fc-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CATEGORIES */}
                <section className="bkcd-cats">
                    <div className="bkcd-cats-inner">
                        <div className="bkcd-section-head bkcd-head-center">
                            <span className="bkcd-eyebrow">Styles We Design</span>
                            <h2 className="bkcd-section-title">Cover Design For Every <span className="bkcd-hl">Genre & Style</span></h2>
                            <p className="bkcd-cats-sub">From minimalist typography to full-illustration, our designers specialize across every genre.</p>
                        </div>
                        <div className="bkcd-cats-grid">
                            {categories.map((c) => (
                                <div key={c.label} className="bkcd-cat-pill">
                                    <span className="bkcd-cp-icon">{c.icon}</span>{c.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="bkcd-process">
                    <div className="bkcd-process-inner">
                        <div className="bkcd-section-head bkcd-head-center">
                            <span className="bkcd-eyebrow">How It Works</span>
                            <h2 className="bkcd-section-title">Our <span className="bkcd-hl">Design Process</span></h2>
                        </div>
                        <div className="bkcd-steps">
                            {steps.map((s, i) => (
                                <div key={s.num} className="bkcd-step-row">
                                    <div className="bkcd-step-left">
                                        <div className="bkcd-step-node"><span className="bkcd-step-num">{s.num}</span></div>
                                        {i < steps.length - 1 && <div className="bkcd-step-vline" />}
                                    </div>
                                    <div className="bkcd-step-body">
                                        <h3 className="bkcd-step-title">{s.title}</h3>
                                        <p className="bkcd-step-desc">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="bkcd-faq">
                    <div className="bkcd-faq-inner">
                        <div className="bkcd-faq-left">
                            <span className="bkcd-eyebrow">FAQ</span>
                            <h2 className="bkcd-section-title">Common <span className="bkcd-hl">Questions</span></h2>
                            <p className="bkcd-body-text" style={{ marginTop: "16px" }}>Still have questions? Our team is available 24/7 for a free consultation.</p>
                            <button className="bkcd-btn-orange" style={{ marginTop: "24px" }}>Talk To An Expert</button>
                        </div>
                        <div className="bkcd-faq-right">
                            {faqs.map((item, i) => (
                                <details key={i} className="bkcd-faq-item">
                                    <summary className="bkcd-faq-q">{item.q}<span className="bkcd-faq-icon">+</span></summary>
                                    <p className="bkcd-faq-a">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED */}
                <section className="bkcd-related">
                    <div className="bkcd-related-inner">
                        <span className="bkcd-eyebrow">Explore More</span>
                        <h2 className="bkcd-section-title" style={{ marginBottom: "32px" }}>Related <span className="bkcd-hl">Services</span></h2>
                        <div className="bkcd-related-grid">
                            {relatedServices.map((rs) => (
                                <Link key={rs.slug} href={`/InnerServices/${rs.slug}`}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "#fafafa", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "8px", textDecoration: "none", transition: "all 0.25s" }}
                                    onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "#f57c15"; el.style.background = "rgba(245,124,21,0.03)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 6px 18px rgba(245,124,21,0.08)"; const a = el.querySelector(".bkcd-rca") as HTMLElement; if (a) { a.style.opacity = "1"; a.style.transform = "translate(0,0)"; } }}
                                    onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "rgba(0,0,0,0.07)"; el.style.background = "#fafafa"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; const a = el.querySelector(".bkcd-rca") as HTMLElement; if (a) { a.style.opacity = "0"; a.style.transform = "translate(-4px,4px)"; } }}
                                >
                                    <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: "13px", fontWeight: 700, color: "#222" }}>{rs.label}</span>
                                    <span className="bkcd-rca" style={{ fontSize: "16px", color: "#f57c15", opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.25s", display: "inline-block" }}>↗</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bkcd-cta">
                    <div className="bkcd-cta-inner">
                        <span className="bkcd-eyebrow" style={{ color: "rgba(245,124,21,0.8)" }}>Get Started Today</span>
                        <h2 className="bkcd-cta-title">Ready To Design Your<br /><span className="bkcd-hl">Book Cover?</span></h2>
                        <p className="bkcd-cta-sub">Schedule a free design consultation. We will match your book with the perfect designer and create a cover that stops readers in their tracks.</p>
                        <div className="bkcd-cta-btns">
                            <button className="bkcd-btn-orange bkcd-btn-lg">Get A Free Quote</button>
                            <button className="bkcd-btn-outline bkcd-btn-lg">(646) 298 6438</button>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                .bkcd-page{font-family:'Raleway',sans-serif;color:#111;background:#fff;}
                .bkcd-eyebrow{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#f57c15;margin-bottom:14px;}
                .bkcd-section-title{font-family:'Oswald',sans-serif;font-size:clamp(1.9rem,3.5vw,2.8rem);color:#111;text-transform:uppercase;line-height:1.1;margin:0 0 20px 0;letter-spacing:-0.3px;}
                .bkcd-hl{color:#f57c15;}
                .bkcd-body-text{font-size:14px;color:#555;line-height:1.75;margin:0 0 16px 0;}
                .bkcd-section-head{margin-bottom:52px;}
                .bkcd-head-center{text-align:center;}
                .bkcd-btn-orange{display:inline-flex;align-items:center;gap:8px;background:#f57c15;color:#fff;border:none;padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background 0.25s,transform 0.2s,box-shadow 0.25s;box-shadow:0 5px 18px rgba(245,124,21,0.28);}
                .bkcd-btn-orange:hover{background:#d96c0d;transform:translateY(-2px);box-shadow:0 8px 24px rgba(245,124,21,0.35);}
                .bkcd-btn-outline{display:inline-flex;align-items:center;background:transparent;color:#333;border:1.5px solid rgba(0,0,0,0.18);padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:border-color 0.25s,color 0.25s;}
                .bkcd-btn-outline:hover{border-color:#f57c15;color:#f57c15;}
                .bkcd-btn-lg{padding:15px 36px;font-size:12.5px;}
                .bkcd-hero{background:#060606;padding:60px 24px 80px;position:relative;overflow:hidden;width:100%;}
                .bkcd-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 55% 50% at 30% 50%,rgba(245,124,21,0.07) 0%,transparent 65%),radial-gradient(ellipse 40% 60% at 80% 20%,rgba(245,124,21,0.04) 0%,transparent 60%);pointer-events:none;}
                .bkcd-hero-grid{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:1fr 260px;gap:40px;align-items:start;position:relative;z-index:2;}
                .bkcd-hero-inner{padding-top:10px;}
                .bkcd-breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:28px;}
                .bkcd-bc-sep{color:rgba(255,255,255,0.2);font-size:11px;}
                .bkcd-bc-current{font-size:11px;font-weight:700;color:#f57c15;letter-spacing:0.5px;}
                .bkcd-hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(245,124,21,0.08);border:1px solid rgba(245,124,21,0.2);border-radius:30px;padding:6px 16px;font-size:10.5px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:#f57c15;margin-bottom:28px;}
                .bkcd-tag-dot{width:5px;height:5px;border-radius:50%;background:#f57c15;flex-shrink:0;}
                .bkcd-hero-title{font-family:'Oswald',sans-serif;font-size:clamp(2.8rem,6vw,5.2rem);color:#fff;line-height:0.95;text-transform:uppercase;letter-spacing:-1px;margin:0 0 24px 0;}
                .bkcd-hero-em{color:#f57c15;font-style:italic;}
                .bkcd-hero-sub{font-size:14.5px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:520px;margin:0 0 36px 0;font-weight:400;}
                .bkcd-hero-actions{display:flex;flex-wrap:nowrap;gap:12px;margin-bottom:32px;align-items:center;}
                .bkcd-hero-actions .bkcd-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .bkcd-hero-actions .bkcd-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                .bkcd-trust-row{display:flex;flex-wrap:wrap;gap:8px;}
                .bkcd-trust-pill{font-size:11px;font-weight:700;color:rgba(255,255,255,0.45);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:6px 12px;letter-spacing:0.3px;}
                .bkcd-hero-sidebar{display:flex;flex-direction:column;gap:3px;padding-top:64px;}
                .bkcd-sidebar-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px 18px;display:flex;flex-direction:column;gap:4px;transition:border-color 0.3s;}
                .bkcd-sidebar-card:hover{border-color:rgba(245,124,21,0.25);}
                .bkcd-sc-val{font-family:'Oswald',sans-serif;font-size:28px;font-weight:700;color:#f57c15;line-height:1;}
                .bkcd-sc-label{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}

                /* ══ INTRO VISUAL BOX ══ */
                .bkcd-intro { background: #fff; padding: 90px 24px; border-bottom: 1px solid rgba(0,0,0,0.06); }
                .bkcd-intro-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 340px; gap: 70px; align-items: center; }
                .bkcd-intro-visual { display: flex; flex-direction: column; }
                .bkcd-visual-box { background: #060606; border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 32px 28px; position: relative; overflow: hidden; }
                .bkcd-vb-accent { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #f57c15, rgba(245,124,21,0.3)); }
                .bkcd-vb-line { position: absolute; top: 0; left: 28px; width: 1px; bottom: 0; background: rgba(245,124,21,0.08); }
                .bkcd-vb-content { display: flex; flex-direction: column; gap: 4px; padding: 16px 0 16px 20px; position: relative; }
                .bkcd-vb-num { font-family: 'Oswald', sans-serif; font-size: 32px; font-weight: 700; color: #f57c15; line-height: 1; }
                .bkcd-vb-label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.3); }
                .bkcd-vb-divider { height: 1px; background: rgba(255,255,255,0.05); margin-left: 20px; }

                .bkcd-features{background:#f9f8f7;padding:90px 24px;}
                .bkcd-features-inner{max-width:1200px;margin:0 auto;}
                .bkcd-features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
                .bkcd-feature-card{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;padding:32px 28px;transition:border-color 0.3s,box-shadow 0.3s,transform 0.3s;}
                .bkcd-feature-card:hover{border-color:rgba(245,124,21,0.25);box-shadow:0 10px 30px rgba(245,124,21,0.07);transform:translateY(-3px);}
                .bkcd-fc-num{display:block;font-family:'Oswald',sans-serif;font-size:36px;font-weight:700;color:rgba(245,124,21,0.12);line-height:1;margin-bottom:-6px;user-select:none;}
                .bkcd-fc-title{font-family:'Oswald',sans-serif;font-size:16px;font-weight:600;color:#111;text-transform:uppercase;letter-spacing:0.3px;margin:0 0 12px 0;}
                .bkcd-fc-desc{font-size:13px;color:#666;line-height:1.7;margin:0;}
                .bkcd-cats{background:#060606;padding:90px 24px;}
                .bkcd-cats-inner{max-width:1100px;margin:0 auto;}
                .bkcd-cats .bkcd-section-title{color:#fff;}
                .bkcd-cats-sub{font-size:13.5px;color:rgba(255,255,255,0.35);margin:0;}
                .bkcd-cats-grid{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;}
                .bkcd-cat-pill{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:6px;font-size:12.5px;font-weight:600;color:rgba(255,255,255,0.65);transition:all 0.25s;cursor:default;}
                .bkcd-cat-pill:hover{background:rgba(245,124,21,0.1);border-color:rgba(245,124,21,0.3);color:#f57c15;}
                .bkcd-cp-icon{color:#f57c15;font-size:8px;}
                .bkcd-process{background:#fff;padding:90px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .bkcd-process-inner{max-width:900px;margin:0 auto;}
                .bkcd-steps{display:flex;flex-direction:column;}
                .bkcd-step-row{display:flex;gap:24px;align-items:stretch;}
                .bkcd-step-row:hover .bkcd-step-node{background:#f57c15;}
                .bkcd-step-row:hover .bkcd-step-num{color:#fff;}
                .bkcd-step-left{display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:52px;}
                .bkcd-step-node{width:52px;height:52px;border-radius:50%;background:#fff;border:2px solid #f57c15;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background 0.3s;}
                .bkcd-step-num{font-family:'Oswald',sans-serif;font-size:14px;font-weight:700;color:#f57c15;transition:color 0.3s;}
                .bkcd-step-vline{width:2px;flex:1;background:rgba(245,124,21,0.15);min-height:24px;}
                .bkcd-step-body{padding:10px 0 36px;flex:1;}
                .bkcd-step-title{font-family:'Oswald',sans-serif;font-size:17px;font-weight:600;color:#111;text-transform:uppercase;margin:0 0 8px 0;}
                .bkcd-step-desc{font-size:13.5px;color:#666;line-height:1.65;margin:0;}
                .bkcd-faq{background:#f9f8f7;padding:90px 24px;}
                .bkcd-faq-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:320px 1fr;gap:70px;align-items:start;}
                .bkcd-faq-item{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;margin-bottom:6px;overflow:hidden;transition:border-color 0.25s;}
                .bkcd-faq-item[open]{border-color:rgba(245,124,21,0.25);}
                .bkcd-faq-q{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 20px;font-family:'Raleway',sans-serif;font-size:13.5px;font-weight:700;color:#111;cursor:pointer;list-style:none;user-select:none;}
                .bkcd-faq-q::-webkit-details-marker{display:none;}
                .bkcd-faq-icon{font-size:20px;font-weight:300;color:#f57c15;flex-shrink:0;line-height:1;transition:transform 0.25s;}
                .bkcd-faq-item[open] .bkcd-faq-icon{transform:rotate(45deg);}
                .bkcd-faq-a{padding:14px 20px 18px;font-size:13px;color:#666;line-height:1.7;margin:0;border-top:1px solid rgba(0,0,0,0.04);}
                .bkcd-related{background:#fff;padding:70px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .bkcd-related-inner{max-width:1200px;margin:0 auto;}
                .bkcd-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
                .bkcd-cta{background:#060606;padding:110px 24px;text-align:center;position:relative;overflow:hidden;}
                .bkcd-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(245,124,21,0.07) 0%,transparent 70%);pointer-events:none;}
                .bkcd-cta-inner{position:relative;z-index:2;}
                .bkcd-cta-title{font-family:'Oswald',sans-serif;font-size:clamp(2.5rem,5vw,4.2rem);color:#fff;text-transform:uppercase;line-height:1.05;margin:8px 0 20px 0;letter-spacing:-0.5px;}
                .bkcd-cta-sub{font-size:14.5px;color:rgba(255,255,255,0.38);max-width:460px;margin:0 auto 36px;line-height:1.7;}
                .bkcd-cta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:nowrap;align-items:center;}
                .bkcd-cta .bkcd-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .bkcd-cta .bkcd-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                @media (max-width:1024px){
                    .bkcd-hero-grid{grid-template-columns:1fr;}
                    .bkcd-hero-sidebar{padding-top:0;display:grid;grid-template-columns:repeat(4,1fr);}
                    .bkcd-intro-inner{grid-template-columns:1fr;gap:40px;}
                    .bkcd-faq-inner{grid-template-columns:1fr;gap:40px;}
                }
                @media (max-width:768px){
                    .bkcd-features-grid{grid-template-columns:1fr;}
                    .bkcd-related-grid{grid-template-columns:repeat(2,1fr);}
                    .bkcd-hero-sidebar{grid-template-columns:repeat(2,1fr);}
                }
                @media (max-width:520px){
                    .bkcd-related-grid{grid-template-columns:1fr;}
                    .bkcd-cta-btns{flex-wrap:wrap;}
                }
            `}</style>
            </main>
            <FooterSection />
        </>
    );
}