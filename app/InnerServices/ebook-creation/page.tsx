"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const relatedServices = [
    { label: "Book Formatting", slug: "book-formatting" },
    { label: "Book Publishing", slug: "book-publishing" },
    { label: "Book Proofreading", slug: "book-proofreading" },
    { label: "Book Cover Design", slug: "book-cover-design" },
    { label: "Audiobook Narration", slug: "audiobook-narration" },
    { label: "Book Marketing", slug: "book-marketing" },
];

const categories = [
    { icon: "✦", label: "Amazon Kindle (KDP)" },
    { icon: "✦", label: "Apple Books" },
    { icon: "✦", label: "Kobo Writing Life" },
    { icon: "✦", label: "Barnes & Noble Press" },
    { icon: "✦", label: "Draft2Digital" },
    { icon: "✦", label: "Smashwords" },
    { icon: "✦", label: "IngramSpark" },
    { icon: "✦", label: "Google Play Books" },
    { icon: "✦", label: "Scribd" },
    { icon: "✦", label: "OverDrive & Libraries" },
    { icon: "✦", label: "Payhip & Direct Sales" },
    { icon: "✦", label: "International Platforms" },
];

const features = [
    { num: "01", title: "Multi-Format Delivery", desc: "We produce all formats your distribution strategy requires — EPUB 3.0, MOBI, KFX (Kindle), and PDF — each optimised for its target platform and device." },
    { num: "02", title: "Professional Interior Design", desc: "Clean typography, consistent heading styles, properly formatted front and back matter, and a reading experience that feels professional on every screen size." },
    { num: "03", title: "Functional Table of Contents", desc: "A fully linked, NCX and HTML table of contents is built into every ebook — enabling seamless navigation on all devices and meeting platform submission requirements." },
    { num: "04", title: "Metadata Embedding", desc: "Title, author, ISBN, description, categories, and keywords are embedded directly into the file — ensuring correct display and discoverability across all platforms." },
    { num: "05", title: "Image & Cover Optimisation", desc: "All images are sized, compressed, and formatted for ebook standards. Your cover is embedded correctly and optimised for thumbnail display in online stores." },
    { num: "06", title: "Platform Upload Support", desc: "We provide platform-specific upload guides and can upload directly to KDP, Draft2Digital, or IngramSpark on your behalf — ensuring a smooth, error-free submission." },
];

const steps = [
    { num: "01", title: "Manuscript Review", desc: "We assess your manuscript and cover files, identify any formatting issues, and confirm the scope and timeline of production." },
    { num: "02", title: "Interior Formatting", desc: "Your manuscript is converted and styled — typography, spacing, headings, and all front and back matter formatted to professional standards." },
    { num: "03", title: "TOC & Navigation Build", desc: "A fully functional linked table of contents and navigation structure is built and tested across multiple devices and applications." },
    { num: "04", title: "Metadata & Cover Integration", desc: "All metadata is embedded, your cover is optimised and integrated, and the files are validated against platform requirements." },
    { num: "05", title: "File Delivery & Upload Support", desc: "All requested formats are delivered, with platform-specific upload guides and optional direct upload service included." },
];

const faqs = [
    { q: "What file formats do you deliver?", a: "We deliver EPUB 3.0 (for Apple Books, Kobo, and most platforms), MOBI and KFX (for Amazon Kindle), and PDF (for direct sales and print-on-demand). We produce whichever combination your distribution plan requires." },
    { q: "Do I need to provide a formatted manuscript?", a: "No. We work from a clean Word document or any text file. The more consistently formatted your source document, the smoother the conversion — but we handle all formatting as part of the service." },
    { q: "How long does ebook creation take?", a: "Standard turnaround is 48–72 hours for a typical novel-length manuscript. More complex projects with heavy image content or intricate formatting may take 3–5 business days." },
    { q: "Can you format a children's book with illustrations?", a: "Yes. Fixed-layout ebooks for illustrated children's books require specialist formatting — which we provide. These ensure illustrations display correctly at all screen sizes." },
    { q: "Do you upload the ebook to platforms for me?", a: "Yes. We offer a full upload service to KDP, Draft2Digital, IngramSpark, and other major platforms — completing the submission process on your behalf with your account credentials." },
];

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="ebk-page">

                {/* HERO */}
                <section className="ebk-hero">
                    <div className="ebk-hero-bg" />
                    <div className="ebk-hero-grid">
                        <div className="ebk-hero-inner">
                            <nav className="ebk-breadcrumb">
                                <Link href="/" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Home</Link>
                                <span className="ebk-bc-sep">›</span>
                                <Link href="/services" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Services</Link>
                                <span className="ebk-bc-sep">›</span>
                                <span className="ebk-bc-current">Ebook Creation</span>
                            </nav>
                            <div className="ebk-hero-tag"><span className="ebk-tag-dot" />Editing & Publishing</div>
                            <h1 className="ebk-hero-title">Professional<br /><em className="ebk-hero-em">Ebook Creation</em><br />Services</h1>
                            <p className="ebk-hero-sub">From manuscript to beautifully formatted ebook — we convert, design, and deliver professional ebook files in all major formats, ready for instant distribution across Amazon Kindle, Apple Books, Kobo, and 400+ global platforms.</p>
                            <div className="ebk-hero-actions">
                                <button className="ebk-btn-orange">Get A Free Quote</button>
                                <button className="ebk-btn-outline">(646) 298 6438</button>
                            </div>
                            <div className="ebk-trust-row">
                                <span className="ebk-trust-pill">✓ All Major Formats</span>
                                <span className="ebk-trust-pill">✓ Device-Optimised</span>
                                <span className="ebk-trust-pill">✓ KDP & Draft2Digital Ready</span>
                                <span className="ebk-trust-pill">✓ Fast Delivery</span>
                            </div>
                        </div>
                        <div className="ebk-hero-sidebar">
                            <div className="ebk-sidebar-card"><span className="ebk-sc-val">400+</span><span className="ebk-sc-label">Distribution Platforms</span></div>
                            <div className="ebk-sidebar-card"><span className="ebk-sc-val">EPUB/MOBI/</span><span className="ebk-sc-label">PDF & KFX Formats</span></div>
                            <div className="ebk-sidebar-card"><span className="ebk-sc-val">48hr</span><span className="ebk-sc-label">Standard Delivery</span></div>
                            <div className="ebk-sidebar-card"><span className="ebk-sc-val">5,000+</span><span className="ebk-sc-label">Ebooks Created</span></div>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="ebk-intro">
                    <div className="ebk-intro-inner">
                        <div className="ebk-intro-text">
                            <span className="ebk-eyebrow">What We Do</span>
                            <h2 className="ebk-section-title">Your Book, Perfectly Formatted<br /><span className="ebk-hl">For Every Screen & Device.</span></h2>
                            <p className="ebk-body-text">A poorly formatted ebook destroys the reading experience. Broken paragraph spacing, missing chapter links, unresponsive images, and inconsistent fonts signal to readers — and algorithms — that a book was produced unprofessionally. Our ebook creation service ensures your book looks and functions flawlessly on every device, from Kindle Paperwhite to iPad to smartphone.</p>
                            <p className="ebk-body-text">We handle every stage of ebook production: converting your manuscript to industry-standard formats, designing a clean interior layout, building a fully functional table of contents, embedding metadata, and delivering files ready for direct upload to KDP, IngramSpark, Draft2Digital, Smashwords, and every major platform.</p>
                            <button className="ebk-btn-orange" style={{ marginTop: "8px" }}>Create My Ebook</button>
                        </div>
                        <div className="ebk-intro-visual">
                            <div className="ebk-visual-box">
                                <div className="ebk-vb-accent" />
                                <div className="ebk-vb-line" />
                                <div className="ebk-vb-content">
                                    <span className="ebk-vb-num">EPUB, MOBI</span>
                                    <span className="ebk-vb-label">KFX & PDF formats</span>
                                </div>
                                <div className="ebk-vb-divider" />
                                <div className="ebk-vb-content">
                                    <span className="ebk-vb-num">400+</span>
                                    <span className="ebk-vb-label">Platforms compatible</span>
                                </div>
                                <div className="ebk-vb-divider" />
                                <div className="ebk-vb-content">
                                    <span className="ebk-vb-num">48hr</span>
                                    <span className="ebk-vb-label">Standard turnaround</span>
                                </div>
                                <div className="ebk-vb-divider" />
                                <div className="ebk-vb-content">
                                    <span className="ebk-vb-num">∞</span>
                                    <span className="ebk-vb-label">Revision rounds</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section className="ebk-features">
                    <div className="ebk-features-inner">
                        <div className="ebk-section-head">
                            <span className="ebk-eyebrow">Why Choose Us</span>
                            <h2 className="ebk-section-title">The Belmont <span className="ebk-hl">Difference</span></h2>
                        </div>
                        <div className="ebk-features-grid">
                            {features.map((f) => (
                                <div key={f.num} className="ebk-feature-card">
                                    <span className="ebk-fc-num">{f.num}</span>
                                    <h3 className="ebk-fc-title">{f.title}</h3>
                                    <p className="ebk-fc-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CATEGORIES */}
                <section className="ebk-cats">
                    <div className="ebk-cats-inner">
                        <div className="ebk-section-head ebk-head-center">
                            <span className="ebk-eyebrow">Platforms We Format For</span>
                            <h2 className="ebk-section-title">Compatible With All <span className="ebk-hl">Major Ebook Platforms</span></h2>
                            <p className="ebk-cats-sub">Every file we deliver meets the technical specifications of every major global distribution platform.</p>
                        </div>
                        <div className="ebk-cats-grid">
                            {categories.map((c) => (
                                <div key={c.label} className="ebk-cat-pill">
                                    <span className="ebk-cp-icon">{c.icon}</span>{c.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="ebk-process">
                    <div className="ebk-process-inner">
                        <div className="ebk-section-head ebk-head-center">
                            <span className="ebk-eyebrow">How It Works</span>
                            <h2 className="ebk-section-title">Our <span className="ebk-hl">Ebook Production Process</span></h2>
                        </div>
                        <div className="ebk-steps">
                            {steps.map((s, i) => (
                                <div key={s.num} className="ebk-step-row">
                                    <div className="ebk-step-left">
                                        <div className="ebk-step-node"><span className="ebk-step-num">{s.num}</span></div>
                                        {i < steps.length - 1 && <div className="ebk-step-vline" />}
                                    </div>
                                    <div className="ebk-step-body">
                                        <h3 className="ebk-step-title">{s.title}</h3>
                                        <p className="ebk-step-desc">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="ebk-faq">
                    <div className="ebk-faq-inner">
                        <div className="ebk-faq-left">
                            <span className="ebk-eyebrow">FAQ</span>
                            <h2 className="ebk-section-title">Common <span className="ebk-hl">Questions</span></h2>
                            <p className="ebk-body-text" style={{ marginTop: "16px" }}>Still have questions? Our team is available 24/7 for a free consultation.</p>
                            <button className="ebk-btn-orange" style={{ marginTop: "24px" }}>Talk To An Expert</button>
                        </div>
                        <div className="ebk-faq-right">
                            {faqs.map((item, i) => (
                                <details key={i} className="ebk-faq-item">
                                    <summary className="ebk-faq-q">{item.q}<span className="ebk-faq-icon">+</span></summary>
                                    <p className="ebk-faq-a">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED */}
                <section className="ebk-related">
                    <div className="ebk-related-inner">
                        <span className="ebk-eyebrow">Explore More</span>
                        <h2 className="ebk-section-title" style={{ marginBottom: "32px" }}>Related <span className="ebk-hl">Services</span></h2>
                        <div className="ebk-related-grid">
                            {relatedServices.map((rs) => (
                                <Link key={rs.slug} href={`/InnerServices/${rs.slug}`}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "#fafafa", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "8px", textDecoration: "none", transition: "all 0.25s" }}
                                    onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "#f57c15"; el.style.background = "rgba(245,124,21,0.03)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 6px 18px rgba(245,124,21,0.08)"; const a = el.querySelector(".ebk-rca") as HTMLElement; if (a) { a.style.opacity = "1"; a.style.transform = "translate(0,0)"; } }}
                                    onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "rgba(0,0,0,0.07)"; el.style.background = "#fafafa"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; const a = el.querySelector(".ebk-rca") as HTMLElement; if (a) { a.style.opacity = "0"; a.style.transform = "translate(-4px,4px)"; } }}
                                >
                                    <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: "13px", fontWeight: 700, color: "#222" }}>{rs.label}</span>
                                    <span className="ebk-rca" style={{ fontSize: "16px", color: "#f57c15", opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.25s", display: "inline-block" }}>↗</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="ebk-cta">
                    <div className="ebk-cta-inner">
                        <span className="ebk-eyebrow" style={{ color: "rgba(245,124,21,0.8)" }}>Get Started Today</span>
                        <h2 className="ebk-cta-title">Ready To Publish Your<br /><span className="ebk-hl">Ebook?</span></h2>
                        <p className="ebk-cta-sub">Send us your manuscript and we will have a professionally formatted ebook ready for global distribution within 48 hours.</p>
                        <div className="ebk-cta-btns">
                            <button className="ebk-btn-orange ebk-btn-lg">Get A Free Quote</button>
                            <button className="ebk-btn-outline ebk-btn-lg">(646) 298 6438</button>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                .ebk-page{font-family:'Raleway',sans-serif;color:#111;background:#fff;}
                .ebk-eyebrow{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#f57c15;margin-bottom:14px;}
                .ebk-section-title{font-family:'Oswald',sans-serif;font-size:clamp(1.9rem,3.5vw,2.8rem);color:#111;text-transform:uppercase;line-height:1.1;margin:0 0 20px 0;letter-spacing:-0.3px;}
                .ebk-hl{color:#f57c15;}
                .ebk-body-text{font-size:14px;color:#555;line-height:1.75;margin:0 0 16px 0;}
                .ebk-section-head{margin-bottom:52px;}
                .ebk-head-center{text-align:center;}
                .ebk-btn-orange{display:inline-flex;align-items:center;gap:8px;background:#f57c15;color:#fff;border:none;padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background 0.25s,transform 0.2s,box-shadow 0.25s;box-shadow:0 5px 18px rgba(245,124,21,0.28);}
                .ebk-btn-orange:hover{background:#d96c0d;transform:translateY(-2px);box-shadow:0 8px 24px rgba(245,124,21,0.35);}
                .ebk-btn-outline{display:inline-flex;align-items:center;background:transparent;color:#333;border:1.5px solid rgba(0,0,0,0.18);padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:border-color 0.25s,color 0.25s;}
                .ebk-btn-outline:hover{border-color:#f57c15;color:#f57c15;}
                .ebk-btn-lg{padding:15px 36px;font-size:12.5px;}
                .ebk-hero{background:#060606;padding:60px 24px 80px;position:relative;overflow:hidden;width:100%;}
                .ebk-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 55% 50% at 30% 50%,rgba(245,124,21,0.07) 0%,transparent 65%),radial-gradient(ellipse 40% 60% at 80% 20%,rgba(245,124,21,0.04) 0%,transparent 60%);pointer-events:none;}
                .ebk-hero-grid{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:1fr 260px;gap:40px;align-items:start;position:relative;z-index:2;}
                .ebk-hero-inner{padding-top:10px;}
                .ebk-breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:28px;}
                .ebk-bc-sep{color:rgba(255,255,255,0.2);font-size:11px;}
                .ebk-bc-current{font-size:11px;font-weight:700;color:#f57c15;letter-spacing:0.5px;}
                .ebk-hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(245,124,21,0.08);border:1px solid rgba(245,124,21,0.2);border-radius:30px;padding:6px 16px;font-size:10.5px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:#f57c15;margin-bottom:28px;}
                .ebk-tag-dot{width:5px;height:5px;border-radius:50%;background:#f57c15;flex-shrink:0;}
                .ebk-hero-title{font-family:'Oswald',sans-serif;font-size:clamp(2.8rem,6vw,5.2rem);color:#fff;line-height:0.95;text-transform:uppercase;letter-spacing:-1px;margin:0 0 24px 0;}
                .ebk-hero-em{color:#f57c15;font-style:italic;}
                .ebk-hero-sub{font-size:14.5px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:520px;margin:0 0 36px 0;font-weight:400;}
                .ebk-hero-actions{display:flex;flex-wrap:nowrap;gap:12px;margin-bottom:32px;align-items:center;}
                .ebk-hero-actions .ebk-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .ebk-hero-actions .ebk-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                .ebk-trust-row{display:flex;flex-wrap:wrap;gap:8px;}
                .ebk-trust-pill{font-size:11px;font-weight:700;color:rgba(255,255,255,0.45);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:6px 12px;letter-spacing:0.3px;}
                .ebk-hero-sidebar{display:flex;flex-direction:column;gap:3px;padding-top:64px;}
                .ebk-sidebar-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px 18px;display:flex;flex-direction:column;gap:4px;transition:border-color 0.3s;}
                .ebk-sidebar-card:hover{border-color:rgba(245,124,21,0.25);}
                .ebk-sc-val{font-family:'Oswald',sans-serif;font-size:28px;font-weight:700;color:#f57c15;line-height:1;}
                .ebk-sc-label{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}

                
                .ebk-intro { background: #fff; padding: 90px 24px; border-bottom: 1px solid rgba(0,0,0,0.06); }
                .ebk-intro-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 340px; gap: 70px; align-items: center; }
                .ebk-intro-visual { display: flex; flex-direction: column; }
                .ebk-visual-box { background: #060606; border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 32px 28px; position: relative; overflow: hidden; }
                .ebk-vb-accent { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #f57c15, rgba(245,124,21,0.3)); }
                .ebk-vb-line { position: absolute; top: 0; left: 28px; width: 1px; bottom: 0; background: rgba(245,124,21,0.08); }
                .ebk-vb-content { display: flex; flex-direction: column; gap: 4px; padding: 16px 0 16px 20px; position: relative; }
                .ebk-vb-num { font-family: 'Oswald', sans-serif; font-size: 32px; font-weight: 700; color: #f57c15; line-height: 1; }
                .ebk-vb-label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,               255,0.3); }
                .ebk-vb-divider { height: 1px; background: rgba(255,255,255,0.05); margin-left: 20px; }


                .ebk-features{background:#f9f8f7;padding:90px 24px;}
                .ebk-features-inner{max-width:1200px;margin:0 auto;}
                .ebk-features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
                .ebk-feature-card{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;padding:32px 28px;transition:border-color 0.3s,box-shadow 0.3s,transform 0.3s;}
                .ebk-feature-card:hover{border-color:rgba(245,124,21,0.25);box-shadow:0 10px 30px rgba(245,124,21,0.07);transform:translateY(-3px);}
                .ebk-fc-num{display:block;font-family:'Oswald',sans-serif;font-size:36px;font-weight:700;color:rgba(245,124,21,0.12);line-height:1;margin-bottom:-6px;user-select:none;}
                .ebk-fc-title{font-family:'Oswald',sans-serif;font-size:16px;font-weight:600;color:#111;text-transform:uppercase;letter-spacing:0.3px;margin:0 0 12px 0;}
                .ebk-fc-desc{font-size:13px;color:#666;line-height:1.7;margin:0;}
                .ebk-cats{background:#060606;padding:90px 24px;}
                .ebk-cats-inner{max-width:1100px;margin:0 auto;}
                .ebk-cats .ebk-section-title{color:#fff;}
                .ebk-cats-sub{font-size:13.5px;color:rgba(255,255,255,0.35);margin:0;}
                .ebk-cats-grid{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;}
                .ebk-cat-pill{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:6px;font-size:12.5px;font-weight:600;color:rgba(255,255,255,0.65);transition:all 0.25s;cursor:default;}
                .ebk-cat-pill:hover{background:rgba(245,124,21,0.1);border-color:rgba(245,124,21,0.3);color:#f57c15;}
                .ebk-cp-icon{color:#f57c15;font-size:8px;}
                .ebk-process{background:#fff;padding:90px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .ebk-process-inner{max-width:900px;margin:0 auto;}
                .ebk-steps{display:flex;flex-direction:column;}
                .ebk-step-row{display:flex;gap:24px;align-items:stretch;}
                .ebk-step-row:hover .ebk-step-node{background:#f57c15;}
                .ebk-step-row:hover .ebk-step-num{color:#fff;}
                .ebk-step-left{display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:52px;}
                .ebk-step-node{width:52px;height:52px;border-radius:50%;background:#fff;border:2px solid #f57c15;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background 0.3s;}
                .ebk-step-num{font-family:'Oswald',sans-serif;font-size:14px;font-weight:700;color:#f57c15;transition:color 0.3s;}
                .ebk-step-vline{width:2px;flex:1;background:rgba(245,124,21,0.15);min-height:24px;}
                .ebk-step-body{padding:10px 0 36px;flex:1;}
                .ebk-step-title{font-family:'Oswald',sans-serif;font-size:17px;font-weight:600;color:#111;text-transform:uppercase;margin:0 0 8px 0;}
                .ebk-step-desc{font-size:13.5px;color:#666;line-height:1.65;margin:0;}
                .ebk-faq{background:#f9f8f7;padding:90px 24px;}
                .ebk-faq-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:320px 1fr;gap:70px;align-items:start;}
                .ebk-faq-item{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;margin-bottom:6px;overflow:hidden;transition:border-color 0.25s;}
                .ebk-faq-item[open]{border-color:rgba(245,124,21,0.25);}
                .ebk-faq-q{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 20px;font-family:'Raleway',sans-serif;font-size:13.5px;font-weight:700;color:#111;cursor:pointer;list-style:none;user-select:none;}
                .ebk-faq-q::-webkit-details-marker{display:none;}
                .ebk-faq-icon{font-size:20px;font-weight:300;color:#f57c15;flex-shrink:0;line-height:1;transition:transform 0.25s;}
                .ebk-faq-item[open] .ebk-faq-icon{transform:rotate(45deg);}
                .ebk-faq-a{padding:14px 20px 18px;font-size:13px;color:#666;line-height:1.7;margin:0;border-top:1px solid rgba(0,0,0,0.04);}
                .ebk-related{background:#fff;padding:70px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .ebk-related-inner{max-width:1200px;margin:0 auto;}
                .ebk-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
                .ebk-cta{background:#060606;padding:110px 24px;text-align:center;position:relative;overflow:hidden;}
                .ebk-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(245,124,21,0.07) 0%,transparent 70%);pointer-events:none;}
                .ebk-cta-inner{position:relative;z-index:2;}
                .ebk-cta-title{font-family:'Oswald',sans-serif;font-size:clamp(2.5rem,5vw,4.2rem);color:#fff;text-transform:uppercase;line-height:1.05;margin:8px 0 20px 0;letter-spacing:-0.5px;}
                .ebk-cta-sub{font-size:14.5px;color:rgba(255,255,255,0.38);max-width:460px;margin:0 auto 36px;line-height:1.7;}
                .ebk-cta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:nowrap;align-items:center;}
                .ebk-cta .ebk-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .ebk-cta .ebk-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                @media (max-width:1024px){
                    .ebk-hero-grid{grid-template-columns:1fr;}
                    .ebk-hero-sidebar{padding-top:0;display:grid;grid-template-columns:repeat(4,1fr);}
                    .ebk-intro-inner{grid-template-columns:1fr;gap:40px;}
                    .ebk-faq-inner{grid-template-columns:1fr;gap:40px;}
                }
                @media (max-width:768px){
                    .ebk-features-grid{grid-template-columns:1fr;}
                    .ebk-related-grid{grid-template-columns:repeat(2,1fr);}
                    .ebk-hero-sidebar{grid-template-columns:repeat(2,1fr);}
                }
                @media (max-width:520px){
                    .ebk-related-grid{grid-template-columns:1fr;}
                    .ebk-cta-btns{flex-wrap:wrap;}
                }
            `}</style>
            </main>
            <FooterSection />
        </>
    );
}