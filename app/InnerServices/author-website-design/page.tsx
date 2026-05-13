"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const relatedServices = [
    { label: "Book Marketing", slug: "book-marketing" },
    { label: "Book Cover Design", slug: "book-cover-design" },
    { label: "Book Publishing", slug: "book-publishing" },
    { label: "Ebook Creation", slug: "ebook-creation" },
    { label: "Book Formatting", slug: "book-formatting" },
    { label: "Book Editing", slug: "book-editing" },
];

const categories = [
    { icon: "✦", label: "WordPress Design" },
    { icon: "✦", label: "Squarespace Design" },
    { icon: "✦", label: "Wix Design" },
    { icon: "✦", label: "Custom HTML/CSS" },
    { icon: "✦", label: "Landing Pages" },
    { icon: "✦", label: "E-Commerce Stores" },
    { icon: "✦", label: "Portfolio Sites" },
    { icon: "✦", label: "Blog-Focused Sites" },
    { icon: "✦", label: "Author Brand Hubs" },
    { icon: "✦", label: "Book Launch Pages" },
    { icon: "✦", label: "Membership Sites" },
    { icon: "✦", label: "Multi-Author Sites" },
];

const features = [
    { num: "01", title: "Custom Brand Identity", desc: "Your website is your digital home. We design a bespoke online presence that reflects your genre, tone, and personal brand — ensuring visitors instantly feel the world of your books." },
    { num: "02", title: "Mobile-First Responsive", desc: "Over 60% of web traffic is mobile. Every site we build is optimized for smartphones, tablets, and desktops — ensuring a flawless experience no matter how readers find you." },
    { num: "03", title: "Direct Book Sales Integration", desc: "Sell your books directly to readers without middlemen. We integrate seamless e-commerce solutions that let you keep higher royalties and build your customer list." },
    { num: "04", title: "Mailing List & Lead Magnets", desc: "Your email list is your most valuable marketing asset. We build high-converting sign-up forms, pop-ups, and lead magnet delivery systems to grow your audience on autopilot." },
    { num: "05", title: "SEO & Speed Optimization", desc: "A beautiful site that no one can find is useless. We optimize your site's structure, speed, and metadata so you rank higher on Google and keep readers engaged." },
    { num: "06", title: "Ongoing Support & Maintenance", desc: "We don't just build and disappear. Our team provides ongoing technical support, content updates, and security monitoring so you can focus entirely on writing your next book." },
];

const steps = [
    { num: "01", title: "Strategy & Architecture", desc: "We define your website's goals, map out the user journey, and create a sitemap that guides readers from discovery to purchase — ensuring every page has a purpose." },
    { num: "02", title: "Visual Design Mockups", desc: "Our designers create custom mockups tailored to your author brand. You review and revise until the visual direction perfectly captures your style and genre." },
    { num: "03", title: "Development & Integration", desc: "We build your site with clean, fast code — integrating your book catalogue, mailing list, social feeds, and e-commerce functionality seamlessly." },
    { num: "04", title: "Content & SEO Setup", desc: "We populate your site with optimized content, set up metadata, configure analytics, and ensure every page is indexed and ready to rank on search engines." },
    { num: "05", title: "Launch & Handover", desc: "After rigorous testing, your site goes live. We provide full training, hand over all credentials, and offer ongoing support to keep your site running smoothly." },
];

const faqs = [
    { q: "Do I really need an author website if I have Amazon and social media?", a: "Yes. Social media platforms change their algorithms constantly, and Amazon owns your product page. Your website is the only platform you fully own and control — a permanent hub where readers, media, and publishers can always find you." },
    { q: "Can I sell my books directly from the website?", a: "Absolutely. We integrate secure e-commerce solutions that allow you to sell ebooks, audiobooks, and even signed paperbacks directly — keeping a much higher percentage of royalties than through retailers alone." },
    { q: "Will my website work well on mobile phones?", a: "Yes, guaranteed. Every site we design is built mobile-first. We test across all devices and screen sizes to ensure your site loads fast and looks perfect for every reader." },
    { q: "Can I update the site myself after it's built?", a: "Of course. We build on user-friendly platforms like WordPress and Squarespace, and we provide full training so you can easily update your blog, add new books, and change content without needing a developer." },
    { q: "How long does the website design process take?", a: "A standard author website takes 3–4 weeks from strategy to launch, depending on the complexity of features and how quickly we receive your content and feedback." },
];

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="awd-page">

                {/* HERO */}
                <section className="awd-hero">
                    <div className="awd-hero-bg" />
                    <div className="awd-hero-grid">
                        <div className="awd-hero-inner">
                            <nav className="awd-breadcrumb">
                                <Link href="/" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Home</Link>
                                <span className="awd-bc-sep">›</span>
                                <Link href="/services" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Services</Link>
                                <span className="awd-bc-sep">›</span>
                                <span className="awd-bc-current">Author Website Design</span>
                            </nav>
                            <div className="awd-hero-tag"><span className="awd-tag-dot" />Design & Marketing</div>
                            <h1 className="awd-hero-title">Professional<br /><em className="awd-hero-em">Author Website</em><br />Design</h1>
                            <p className="awd-hero-sub">Custom author websites designed to showcase your books, grow your mailing list, and sell directly to readers — your permanent home on the internet that no algorithm can take away.</p>
                            <div className="awd-hero-actions">
                                <button className="awd-btn-orange">Get A Free Quote</button>
                                <button className="awd-btn-outline">(646) 298 6438</button>
                            </div>
                            <div className="awd-trust-row">
                                <span className="awd-trust-pill">✓ 100% Custom Design</span>
                                <span className="awd-trust-pill">✓ Mobile Responsive</span>
                                <span className="awd-trust-pill">✓ SEO Optimized</span>
                                <span className="awd-trust-pill">✓ Direct Sales Ready</span>
                            </div>
                        </div>
                        <div className="awd-hero-sidebar">
                            <div className="awd-sidebar-card"><span className="awd-sc-val">Custom</span><span className="awd-sc-label">Brand Design</span></div>
                            <div className="awd-sidebar-card"><span className="awd-sc-val">Mobile</span><span className="awd-sc-label">First Responsive</span></div>
                            <div className="awd-sidebar-card"><span className="awd-sc-val">Built-In</span><span className="awd-sc-label">SEO & Analytics</span></div>
                            <div className="awd-sidebar-card"><span className="awd-sc-val">Direct</span><span className="awd-sc-label">Sales Integration</span></div>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="awd-intro">
                    <div className="awd-intro-inner">
                        <div className="awd-intro-text">
                            <span className="awd-eyebrow">What We Do</span>
                            <h2 className="awd-section-title">Your Author Platform,<br /><span className="awd-hl">Built To Sell Books.</span></h2>
                            <p className="awd-body-text">Social media followers are rented audiences. Amazon product pages are owned by retailers. Your website is the only platform you truly own and control — a permanent hub where readers, media, and publishers can always find you, without algorithm interference.</p>
                            <p className="awd-body-text">Our author website design service builds more than just a pretty page. We engineer a strategic author platform designed to capture emails, showcase your catalogue, sell books directly, and establish the professional credibility that turns casual browsers into lifelong readers.</p>
                            <button className="awd-btn-orange" style={{ marginTop: "8px" }}>Build My Website</button>
                        </div>
                        <div className="awd-intro-visual">
                            <div className="awd-visual-box">
                                <div className="awd-vb-accent" />
                                <div className="awd-vb-line" />
                                <div className="awd-vb-content">
                                    <span className="awd-vb-num">Custom</span>
                                    <span className="awd-vb-label">Original design</span>
                                </div>
                                <div className="awd-vb-divider" />
                                <div className="awd-vb-content">
                                    <span className="awd-vb-num">Mobile</span>
                                    <span className="awd-vb-label">First responsive</span>
                                </div>
                                <div className="awd-vb-divider" />
                                <div className="awd-vb-content">
                                    <span className="awd-vb-num">SEO</span>
                                    <span className="awd-vb-label">Optimized for readers</span>
                                </div>
                                <div className="awd-vb-divider" />
                                <div className="awd-vb-content">
                                    <span className="awd-vb-num">Direct</span>
                                    <span className="awd-vb-label">Book sales integration</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section className="awd-features">
                    <div className="awd-features-inner">
                        <div className="awd-section-head">
                            <span className="awd-eyebrow">Why Choose Us</span>
                            <h2 className="awd-section-title">The Belmont <span className="awd-hl">Difference</span></h2>
                        </div>
                        <div className="awd-features-grid">
                            {features.map((f) => (
                                <div key={f.num} className="awd-feature-card">
                                    <span className="awd-fc-num">{f.num}</span>
                                    <h3 className="awd-fc-title">{f.title}</h3>
                                    <p className="awd-fc-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CATEGORIES */}
                <section className="awd-cats">
                    <div className="awd-cats-inner">
                        <div className="awd-section-head awd-head-center">
                            <span className="awd-eyebrow">Platforms We Build On</span>
                            <h2 className="awd-section-title">Website Design For Every <span className="awd-hl">Platform & Need</span></h2>
                            <p className="awd-cats-sub">From simple landing pages to full e-commerce author hubs, we build on the platform that fits your goals.</p>
                        </div>
                        <div className="awd-cats-grid">
                            {categories.map((c) => (
                                <div key={c.label} className="awd-cat-pill">
                                    <span className="awd-cp-icon">{c.icon}</span>{c.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="awd-process">
                    <div className="awd-process-inner">
                        <div className="awd-section-head awd-head-center">
                            <span className="awd-eyebrow">How It Works</span>
                            <h2 className="awd-section-title">Our <span className="awd-hl">Design Process</span></h2>
                        </div>
                        <div className="awd-steps">
                            {steps.map((s, i) => (
                                <div key={s.num} className="awd-step-row">
                                    <div className="awd-step-left">
                                        <div className="awd-step-node"><span className="awd-step-num">{s.num}</span></div>
                                        {i < steps.length - 1 && <div className="awd-step-vline" />}
                                    </div>
                                    <div className="awd-step-body">
                                        <h3 className="awd-step-title">{s.title}</h3>
                                        <p className="awd-step-desc">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="awd-faq">
                    <div className="awd-faq-inner">
                        <div className="awd-faq-left">
                            <span className="awd-eyebrow">FAQ</span>
                            <h2 className="awd-section-title">Common <span className="awd-hl">Questions</span></h2>
                            <p className="awd-body-text" style={{ marginTop: "16px" }}>Still have questions? Our team is available 24/7 for a free consultation.</p>
                            <button className="awd-btn-orange" style={{ marginTop: "24px" }}>Talk To An Expert</button>
                        </div>
                        <div className="awd-faq-right">
                            {faqs.map((item, i) => (
                                <details key={i} className="awd-faq-item">
                                    <summary className="awd-faq-q">{item.q}<span className="awd-faq-icon">+</span></summary>
                                    <p className="awd-faq-a">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED */}
                <section className="awd-related">
                    <div className="awd-related-inner">
                        <span className="awd-eyebrow">Explore More</span>
                        <h2 className="awd-section-title" style={{ marginBottom: "32px" }}>Related <span className="awd-hl">Services</span></h2>
                        <div className="awd-related-grid">
                            {relatedServices.map((rs) => (
                                <Link key={rs.slug} href={`/InnerServices/${rs.slug}`}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "#fafafa", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "8px", textDecoration: "none", transition: "all 0.25s" }}
                                    onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "#f57c15"; el.style.background = "rgba(245,124,21,0.03)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 6px 18px rgba(245,124,21,0.08)"; const a = el.querySelector(".awd-rca") as HTMLElement; if (a) { a.style.opacity = "1"; a.style.transform = "translate(0,0)"; } }}
                                    onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "rgba(0,0,0,0.07)"; el.style.background = "#fafafa"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; const a = el.querySelector(".awd-rca") as HTMLElement; if (a) { a.style.opacity = "0"; a.style.transform = "translate(-4px,4px)"; } }}
                                >
                                    <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: "13px", fontWeight: 700, color: "#222" }}>{rs.label}</span>
                                    <span className="awd-rca" style={{ fontSize: "16px", color: "#f57c15", opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.25s", display: "inline-block" }}>↗</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="awd-cta">
                    <div className="awd-cta-inner">
                        <span className="awd-eyebrow" style={{ color: "rgba(245,124,21,0.8)" }}>Get Started Today</span>
                        <h2 className="awd-cta-title">Ready To Build Your<br /><span className="awd-hl">Author Website?</span></h2>
                        <p className="awd-cta-sub">Schedule a free design consultation. We will build a custom author platform that grows your audience, captures emails, and sells your books on autopilot.</p>
                        <div className="awd-cta-btns">
                            <button className="awd-btn-orange awd-btn-lg">Get A Free Quote</button>
                            <button className="awd-btn-outline awd-btn-lg">(646) 298 6438</button>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                .awd-page{font-family:'Raleway',sans-serif;color:#111;background:#fff;}
                .awd-eyebrow{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#f57c15;margin-bottom:14px;}
                .awd-section-title{font-family:'Oswald',sans-serif;font-size:clamp(1.9rem,3.5vw,2.8rem);color:#111;text-transform:uppercase;line-height:1.1;margin:0 0 20px 0;letter-spacing:-0.3px;}
                .awd-hl{color:#f57c15;}
                .awd-body-text{font-size:14px;color:#555;line-height:1.75;margin:0 0 16px 0;}
                .awd-section-head{margin-bottom:52px;}
                .awd-head-center{text-align:center;}
                .awd-btn-orange{display:inline-flex;align-items:center;gap:8px;background:#f57c15;color:#fff;border:none;padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background 0.25s,transform 0.2s,box-shadow 0.25s;box-shadow:0 5px 18px rgba(245,124,21,0.28);}
                .awd-btn-orange:hover{background:#d96c0d;transform:translateY(-2px);box-shadow:0 8px 24px rgba(245,124,21,0.35);}
                .awd-btn-outline{display:inline-flex;align-items:center;background:transparent;color:#333;border:1.5px solid rgba(0,0,0,0.18);padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:border-color 0.25s,color 0.25s;}
                .awd-btn-outline:hover{border-color:#f57c15;color:#f57c15;}
                .awd-btn-lg{padding:15px 36px;font-size:12.5px;}
                .awd-hero{background:#060606;padding:60px 24px 80px;position:relative;overflow:hidden;width:100%;}
                .awd-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 55% 50% at 30% 50%,rgba(245,124,21,0.07) 0%,transparent 65%),radial-gradient(ellipse 40% 60% at 80% 20%,rgba(245,124,21,0.04) 0%,transparent 60%);pointer-events:none;}
                .awd-hero-grid{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:1fr 260px;gap:40px;align-items:start;position:relative;z-index:2;}
                .awd-hero-inner{padding-top:10px;}
                .awd-breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:28px;}
                .awd-bc-sep{color:rgba(255,255,255,0.2);font-size:11px;}
                .awd-bc-current{font-size:11px;font-weight:700;color:#f57c15;letter-spacing:0.5px;}
                .awd-hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(245,124,21,0.08);border:1px solid rgba(245,124,21,0.2);border-radius:30px;padding:6px 16px;font-size:10.5px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:#f57c15;margin-bottom:28px;}
                .awd-tag-dot{width:5px;height:5px;border-radius:50%;background:#f57c15;flex-shrink:0;}
                .awd-hero-title{font-family:'Oswald',sans-serif;font-size:clamp(2.8rem,6vw,5.2rem);color:#fff;line-height:0.95;text-transform:uppercase;letter-spacing:-1px;margin:0 0 24px 0;}
                .awd-hero-em{color:#f57c15;font-style:italic;}
                .awd-hero-sub{font-size:14.5px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:520px;margin:0 0 36px 0;font-weight:400;}
                .awd-hero-actions{display:flex;flex-wrap:nowrap;gap:12px;margin-bottom:32px;align-items:center;}
                .awd-hero-actions .awd-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .awd-hero-actions .awd-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                .awd-trust-row{display:flex;flex-wrap:wrap;gap:8px;}
                .awd-trust-pill{font-size:11px;font-weight:700;color:rgba(255,255,255,0.45);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:6px 12px;letter-spacing:0.3px;}
                .awd-hero-sidebar{display:flex;flex-direction:column;gap:3px;padding-top:64px;}
                .awd-sidebar-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px 18px;display:flex;flex-direction:column;gap:4px;transition:border-color 0.3s;}
                .awd-sidebar-card:hover{border-color:rgba(245,124,21,0.25);}
                .awd-sc-val{font-family:'Oswald',sans-serif;font-size:28px;font-weight:700;color:#f57c15;line-height:1;}
                .awd-sc-label{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}

                /* ══ INTRO VISUAL BOX ══ */
                .awd-intro { background: #fff; padding: 90px 24px; border-bottom: 1px solid rgba(0,0,0,0.06); }
                .awd-intro-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 340px; gap: 70px; align-items: center; }
                .awd-intro-visual { display: flex; flex-direction: column; }
                .awd-visual-box { background: #060606; border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 32px 28px; position: relative; overflow: hidden; }
                .awd-vb-accent { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #f57c15, rgba(245,124,21,0.3)); }
                .awd-vb-line { position: absolute; top: 0; left: 28px; width: 1px; bottom: 0; background: rgba(245,124,21,0.08); }
                .awd-vb-content { display: flex; flex-direction: column; gap: 4px; padding: 16px 0 16px 20px; position: relative; }
                .awd-vb-num { font-family: 'Oswald', sans-serif; font-size: 32px; font-weight: 700; color: #f57c15; line-height: 1; }
                .awd-vb-label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.3); }
                .awd-vb-divider { height: 1px; background: rgba(255,255,255,0.05); margin-left: 20px; }

                .awd-features{background:#f9f8f7;padding:90px 24px;}
                .awd-features-inner{max-width:1200px;margin:0 auto;}
                .awd-features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
                .awd-feature-card{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;padding:32px 28px;transition:border-color 0.3s,box-shadow 0.3s,transform 0.3s;}
                .awd-feature-card:hover{border-color:rgba(245,124,21,0.25);box-shadow:0 10px 30px rgba(245,124,21,0.07);transform:translateY(-3px);}
                .awd-fc-num{display:block;font-family:'Oswald',sans-serif;font-size:36px;font-weight:700;color:rgba(245,124,21,0.12);line-height:1;margin-bottom:-6px;user-select:none;}
                .awd-fc-title{font-family:'Oswald',sans-serif;font-size:16px;font-weight:600;color:#111;text-transform:uppercase;letter-spacing:0.3px;margin:0 0 12px 0;}
                .awd-fc-desc{font-size:13px;color:#666;line-height:1.7;margin:0;}
                .awd-cats{background:#060606;padding:90px 24px;}
                .awd-cats-inner{max-width:1100px;margin:0 auto;}
                .awd-cats .awd-section-title{color:#fff;}
                .awd-cats-sub{font-size:13.5px;color:rgba(255,255,255,0.35);margin:0;}
                .awd-cats-grid{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;}
                .awd-cat-pill{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:6px;font-size:12.5px;font-weight:600;color:rgba(255,255,255,0.65);transition:all 0.25s;cursor:default;}
                .awd-cat-pill:hover{background:rgba(245,124,21,0.1);border-color:rgba(245,124,21,0.3);color:#f57c15;}
                .awd-cp-icon{color:#f57c15;font-size:8px;}
                .awd-process{background:#fff;padding:90px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .awd-process-inner{max-width:900px;margin:0 auto;}
                .awd-steps{display:flex;flex-direction:column;}
                .awd-step-row{display:flex;gap:24px;align-items:stretch;}
                .awd-step-row:hover .awd-step-node{background:#f57c15;}
                .awd-step-row:hover .awd-step-num{color:#fff;}
                .awd-step-left{display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:52px;}
                .awd-step-node{width:52px;height:52px;border-radius:50%;background:#fff;border:2px solid #f57c15;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background 0.3s;}
                .awd-step-num{font-family:'Oswald',sans-serif;font-size:14px;font-weight:700;color:#f57c15;transition:color 0.3s;}
                .awd-step-vline{width:2px;flex:1;background:rgba(245,124,21,0.15);min-height:24px;}
                .awd-step-body{padding:10px 0 36px;flex:1;}
                .awd-step-title{font-family:'Oswald',sans-serif;font-size:17px;font-weight:600;color:#111;text-transform:uppercase;margin:0 0 8px 0;}
                .awd-step-desc{font-size:13.5px;color:#666;line-height:1.65;margin:0;}
                .awd-faq{background:#f9f8f7;padding:90px 24px;}
                .awd-faq-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:320px 1fr;gap:70px;align-items:start;}
                .awd-faq-item{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;margin-bottom:6px;overflow:hidden;transition:border-color 0.25s;}
                .awd-faq-item[open]{border-color:rgba(245,124,21,0.25);}
                .awd-faq-q{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 20px;font-family:'Raleway',sans-serif;font-size:13.5px;font-weight:700;color:#111;cursor:pointer;list-style:none;user-select:none;}
                .awd-faq-q::-webkit-details-marker{display:none;}
                .awd-faq-icon{font-size:20px;font-weight:300;color:#f57c15;flex-shrink:0;line-height:1;transition:transform 0.25s;}
                .awd-faq-item[open] .awd-faq-icon{transform:rotate(45deg);}
                .awd-faq-a{padding:14px 20px 18px;font-size:13px;color:#666;line-height:1.7;margin:0;border-top:1px solid rgba(0,0,0,0.04);}
                .awd-related{background:#fff;padding:70px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .awd-related-inner{max-width:1200px;margin:0 auto;}
                .awd-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
                .awd-cta{background:#060606;padding:110px 24px;text-align:center;position:relative;overflow:hidden;}
                .awd-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(245,124,21,0.07) 0%,transparent 70%);pointer-events:none;}
                .awd-cta-inner{position:relative;z-index:2;}
                .awd-cta-title{font-family:'Oswald',sans-serif;font-size:clamp(2.5rem,5vw,4.2rem);color:#fff;text-transform:uppercase;line-height:1.05;margin:8px 0 20px 0;letter-spacing:-0.5px;}
                .awd-cta-sub{font-size:14.5px;color:rgba(255,255,255,0.38);max-width:460px;margin:0 auto 36px;line-height:1.7;}
                .awd-cta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:nowrap;align-items:center;}
                .awd-cta .awd-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .awd-cta .awd-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                @media (max-width:1024px){
                    .awd-hero-grid{grid-template-columns:1fr;}
                    .awd-hero-sidebar{padding-top:0;display:grid;grid-template-columns:repeat(4,1fr);}
                    .awd-intro-inner{grid-template-columns:1fr;gap:40px;}
                    .awd-faq-inner{grid-template-columns:1fr;gap:40px;}
                }
                @media (max-width:768px){
                    .awd-features-grid{grid-template-columns:1fr;}
                    .awd-related-grid{grid-template-columns:repeat(2,1fr);}
                    .awd-hero-sidebar{grid-template-columns:repeat(2,1fr);}
                }
                @media (max-width:520px){
                    .awd-related-grid{grid-template-columns:1fr;}
                    .awd-cta-btns{flex-wrap:wrap;}
                }
            `}</style>
            </main>
            <FooterSection />
        </>
    );
}