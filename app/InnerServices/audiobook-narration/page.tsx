"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const relatedServices = [
    { label: "Ebook Creation", slug: "ebook-creation" },
    { label: "Book Publishing", slug: "book-publishing" },
    { label: "Book Formatting", slug: "book-formatting" },
    { label: "Book Marketing", slug: "book-marketing" },
    { label: "Book Cover Design", slug: "book-cover-design" },
    { label: "Book Editing", slug: "book-editing" },
];

const categories = [
    { icon: "✦", label: "Fiction Audiobooks" },
    { icon: "✦", label: "Non-Fiction Audiobooks" },
    { icon: "✦", label: "Business & Leadership" },
    { icon: "✦", label: "Self-Help & Personal Development" },
    { icon: "✦", label: "Memoir & Biography" },
    { icon: "✦", label: "Children's Audiobooks" },
    { icon: "✦", label: "Thriller & Mystery" },
    { icon: "✦", label: "Fantasy & Sci-Fi" },
    { icon: "✦", label: "Romance" },
    { icon: "✦", label: "Health & Wellness" },
    { icon: "✦", label: "Academic & Educational" },
    { icon: "✦", label: "Spiritual & Religious" },
];

const features = [
    { num: "01", title: "Narrator Matching", desc: "We curate a shortlist of narrators matched to your genre, tone, and target audience — providing audition samples so you choose the perfect voice for your book." },
    { num: "02", title: "Professional Studio Recording", desc: "All narration is recorded in soundproofed, acoustically treated studio environments — delivering the clean, broadcast-quality audio that platform algorithms and listeners demand." },
    { num: "03", title: "Audio Editing & Mastering", desc: "Every file is edited for mistakes, mouth noise, and pacing issues, then mastered to meet ACX technical specifications — including RMS levels, peak decibels, and noise floor requirements." },
    { num: "04", title: "Quality Control Review", desc: "A dedicated QC pass compares the audio against your manuscript, catching any mispronunciations, skipped lines, or pacing irregularities before delivery." },
    { num: "05", title: "Multi-Platform Delivery", desc: "Finished files are delivered in all required formats for ACX (Audible), Findaway Voices, Authors Republic, and direct distribution — ready for immediate upload." },
    { num: "06", title: "Full Audio Rights Transfer", desc: "All master recordings, session files, and audio rights transfer entirely to you upon completion. No royalty splits, no ongoing fees." },
];

const steps = [
    { num: "01", title: "Manuscript Preparation", desc: "We review your manuscript for audiobook-specific considerations — pronunciations, character voices, and any text that requires adaptation for the audio format." },
    { num: "02", title: "Narrator Auditions", desc: "A curated shortlist of matched narrators record a sample from your manuscript — you listen and select the voice that best brings your book to life." },
    { num: "03", title: "Full Narration Recording", desc: "The selected narrator records the complete manuscript in professional studio sessions, with direction available throughout the process." },
    { num: "04", title: "Editing & Mastering", desc: "Audio engineers edit all recordings for quality, master to platform specifications, and conduct a full QC pass against your manuscript." },
    { num: "05", title: "Delivery & Distribution", desc: "Final files are delivered in all required formats with upload guides — and we can submit directly to ACX, Findaway Voices, and other platforms on your behalf." },
];

const faqs = [
    { q: "How do I choose the right narrator?", a: "We provide a curated shortlist of narrators matched to your genre and tone, each recording a 3–5 minute audition from your manuscript. You listen and choose — we handle everything from there." },
    { q: "How long does audiobook production take?", a: "Production timeline depends on manuscript length. A standard 80,000-word novel takes 3–5 hours of finished audio, with a full production timeline of 3–6 weeks including recording, editing, mastering, and QC." },
    { q: "What platforms will my audiobook be available on?", a: "We deliver files compatible with ACX (Audible/iTunes), Findaway Voices (Spotify, libraries, international retailers), and Authors Republic. Combined, these platforms cover every major audiobook marketplace worldwide." },
    { q: "Do I own the master recordings?", a: "Yes — entirely. All master recordings, session files, and audio rights transfer to you upon delivery. There are no royalty splits or ongoing licensing fees of any kind." },
    { q: "Can you produce audiobooks for children's illustrated books?", a: "Yes. Children's audiobooks require specialist narrators with the ability to create distinct voices for multiple characters. We have dedicated children's narrators with extensive experience in the format." },
];

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="audb-page">

                {/* HERO */}
                <section className="audb-hero">
                    <div className="audb-hero-bg" />
                    <div className="audb-hero-grid">
                        <div className="audb-hero-inner">
                            <nav className="audb-breadcrumb">
                                <Link href="/" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Home</Link>
                                <span className="audb-bc-sep">›</span>
                                <Link href="/services" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Services</Link>
                                <span className="audb-bc-sep">›</span>
                                <span className="audb-bc-current">Audiobook Narration</span>
                            </nav>
                            <div className="audb-hero-tag"><span className="audb-tag-dot" />Editing & Publishing</div>
                            <h1 className="audb-hero-title">Professional<br /><em className="audb-hero-em">Audiobook Narration</em><br />Services</h1>
                            <p className="audb-hero-sub">Professional audiobook narration, production, and delivery — voiced by experienced narrators, engineered to ACX and Findaway Voices standards, and ready for distribution on Audible, iTunes, Spotify, and every major audio platform worldwide.</p>
                            <div className="audb-hero-actions">
                                <button className="audb-btn-orange">Get A Free Quote</button>
                                <button className="audb-btn-outline">(646) 298 6438</button>
                            </div>
                            <div className="audb-trust-row">
                                <span className="audb-trust-pill">✓ ACX & Findaway Ready</span>
                                <span className="audb-trust-pill">✓ Pro Studio Quality</span>
                                <span className="audb-trust-pill">✓ All Genres & Voices</span>
                                <span className="audb-trust-pill">✓ Full Audio Rights Yours</span>
                            </div>
                        </div>
                        <div className="audb-hero-sidebar">
                            <div className="audb-sidebar-card"><span className="audb-sc-val">ACX/AAX</span><span className="audb-sc-label">Audible Ready Format</span></div>
                            <div className="audb-sidebar-card"><span className="audb-sc-val">44.1kHz</span><span className="audb-sc-label">Studio Quality Audio</span></div>
                            <div className="audb-sidebar-card"><span className="audb-sc-val">500+</span><span className="audb-sc-label">Audiobooks Produced</span></div>
                            <div className="audb-sidebar-card"><span className="audb-sc-val">Worldwide</span><span className="audb-sc-label">Distribution Ready</span></div>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="audb-intro">
                    <div className="audb-intro-inner">
                        <div className="audb-intro-text">
                            <span className="audb-eyebrow">What We Do</span>
                            <h2 className="audb-section-title">Your Book, Heard By<br /><span className="audb-hl">Millions Of New Listeners.</span></h2>
                            <p className="audb-body-text">The audiobook market is the fastest-growing segment of the publishing industry. Listeners consume books during commutes, workouts, and daily routines — reaching audiences that never sit down with a printed page. A professionally produced audiobook does not just expand your reach — it creates an entirely new, intimate relationship between your words and your audience.</p>
                            <p className="audb-body-text">Our audiobook production service pairs your manuscript with a professionally vetted narrator whose voice, style, and tone are matched to your book's genre and character. Every recording is produced in a professional studio environment, edited to broadcast quality, mastered to platform specifications, and delivered ready for submission to Audible, iTunes, Spotify, and every major audio distribution platform.</p>
                            <button className="audb-btn-orange" style={{ marginTop: "8px" }}>Start Your Audiobook</button>
                        </div>
                        <div className="audb-intro-visual">
                            <div className="audb-visual-box">
                                <div className="audb-vb-accent" />
                                <div className="audb-vb-line" />
                                <div className="audb-vb-content">
                                    <span className="audb-vb-num">Studio</span>
                                    <span className="audb-vb-label">Quality recording</span>
                                </div>
                                <div className="audb-vb-divider" />
                                <div className="audb-vb-content">
                                    <span className="audb-vb-num">ACX & Findaway</span>
                                    <span className="audb-vb-label">Platform standards</span>
                                </div>
                                <div className="audb-vb-divider" />
                                <div className="audb-vb-content">
                                    <span className="audb-vb-num">2–6 weeks</span>
                                    <span className="audb-vb-label">Production timeline</span>
                                </div>
                                <div className="audb-vb-divider" />
                                <div className="audb-vb-content">
                                    <span className="audb-vb-num">Full rights</span>
                                    <span className="audb-vb-label">Transferred to you</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section className="audb-features">
                    <div className="audb-features-inner">
                        <div className="audb-section-head">
                            <span className="audb-eyebrow">Why Choose Us</span>
                            <h2 className="audb-section-title">The Belmont <span className="audb-hl">Difference</span></h2>
                        </div>
                        <div className="audb-features-grid">
                            {features.map((f) => (
                                <div key={f.num} className="audb-feature-card">
                                    <span className="audb-fc-num">{f.num}</span>
                                    <h3 className="audb-fc-title">{f.title}</h3>
                                    <p className="audb-fc-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CATEGORIES */}
                <section className="audb-cats">
                    <div className="audb-cats-inner">
                        <div className="audb-section-head audb-head-center">
                            <span className="audb-eyebrow">Genres We Produce</span>
                            <h2 className="audb-section-title">Audiobooks For Every <span className="audb-hl">Genre & Audience</span></h2>
                            <p className="audb-cats-sub">Our narrator roster spans every voice type, accent, and genre specialism — matched precisely to your book.</p>
                        </div>
                        <div className="audb-cats-grid">
                            {categories.map((c) => (
                                <div key={c.label} className="audb-cat-pill">
                                    <span className="audb-cp-icon">{c.icon}</span>{c.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="audb-process">
                    <div className="audb-process-inner">
                        <div className="audb-section-head audb-head-center">
                            <span className="audb-eyebrow">How It Works</span>
                            <h2 className="audb-section-title">Our <span className="audb-hl">Production Process</span></h2>
                        </div>
                        <div className="audb-steps">
                            {steps.map((s, i) => (
                                <div key={s.num} className="audb-step-row">
                                    <div className="audb-step-left">
                                        <div className="audb-step-node"><span className="audb-step-num">{s.num}</span></div>
                                        {i < steps.length - 1 && <div className="audb-step-vline" />}
                                    </div>
                                    <div className="audb-step-body">
                                        <h3 className="audb-step-title">{s.title}</h3>
                                        <p className="audb-step-desc">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="audb-faq">
                    <div className="audb-faq-inner">
                        <div className="audb-faq-left">
                            <span className="audb-eyebrow">FAQ</span>
                            <h2 className="audb-section-title">Common <span className="audb-hl">Questions</span></h2>
                            <p className="audb-body-text" style={{ marginTop: "16px" }}>Still have questions? Our team is available 24/7 for a free consultation.</p>
                            <button className="audb-btn-orange" style={{ marginTop: "24px" }}>Talk To An Expert</button>
                        </div>
                        <div className="audb-faq-right">
                            {faqs.map((item, i) => (
                                <details key={i} className="audb-faq-item">
                                    <summary className="audb-faq-q">{item.q}<span className="audb-faq-icon">+</span></summary>
                                    <p className="audb-faq-a">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED */}
                <section className="audb-related">
                    <div className="audb-related-inner">
                        <span className="audb-eyebrow">Explore More</span>
                        <h2 className="audb-section-title" style={{ marginBottom: "32px" }}>Related <span className="audb-hl">Services</span></h2>
                        <div className="audb-related-grid">
                            {relatedServices.map((rs) => (
                                <Link key={rs.slug} href={`/InnerServices/${rs.slug}`}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "#fafafa", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "8px", textDecoration: "none", transition: "all 0.25s" }}
                                    onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "#f57c15"; el.style.background = "rgba(245,124,21,0.03)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 6px 18px rgba(245,124,21,0.08)"; const a = el.querySelector(".audb-rca") as HTMLElement; if (a) { a.style.opacity = "1"; a.style.transform = "translate(0,0)"; } }}
                                    onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "rgba(0,0,0,0.07)"; el.style.background = "#fafafa"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; const a = el.querySelector(".audb-rca") as HTMLElement; if (a) { a.style.opacity = "0"; a.style.transform = "translate(-4px,4px)"; } }}
                                >
                                    <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: "13px", fontWeight: 700, color: "#222" }}>{rs.label}</span>
                                    <span className="audb-rca" style={{ fontSize: "16px", color: "#f57c15", opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.25s", display: "inline-block" }}>↗</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="audb-cta">
                    <div className="audb-cta-inner">
                        <span className="audb-eyebrow" style={{ color: "rgba(245,124,21,0.8)" }}>Get Started Today</span>
                        <h2 className="audb-cta-title">Ready To Launch Your<br /><span className="audb-hl">Audiobook?</span></h2>
                        <p className="audb-cta-sub">Schedule a free consultation with our audiobook production team. We will match you with the perfect narrator and have your book reaching listeners worldwide.</p>
                        <div className="audb-cta-btns">
                            <button className="audb-btn-orange audb-btn-lg">Get A Free Quote</button>
                            <button className="audb-btn-outline audb-btn-lg">(646) 298 6438</button>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                .audb-page{font-family:'Raleway',sans-serif;color:#111;background:#fff;}
                .audb-eyebrow{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#f57c15;margin-bottom:14px;}
                .audb-section-title{font-family:'Oswald',sans-serif;font-size:clamp(1.9rem,3.5vw,2.8rem);color:#111;text-transform:uppercase;line-height:1.1;margin:0 0 20px 0;letter-spacing:-0.3px;}
                .audb-hl{color:#f57c15;}
                .audb-body-text{font-size:14px;color:#555;line-height:1.75;margin:0 0 16px 0;}
                .audb-section-head{margin-bottom:52px;}
                .audb-head-center{text-align:center;}
                .audb-btn-orange{display:inline-flex;align-items:center;gap:8px;background:#f57c15;color:#fff;border:none;padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background 0.25s,transform 0.2s,box-shadow 0.25s;box-shadow:0 5px 18px rgba(245,124,21,0.28);}
                .audb-btn-orange:hover{background:#d96c0d;transform:translateY(-2px);box-shadow:0 8px 24px rgba(245,124,21,0.35);}
                .audb-btn-outline{display:inline-flex;align-items:center;background:transparent;color:#333;border:1.5px solid rgba(0,0,0,0.18);padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:border-color 0.25s,color 0.25s;}
                .audb-btn-outline:hover{border-color:#f57c15;color:#f57c15;}
                .audb-btn-lg{padding:15px 36px;font-size:12.5px;}
                .audb-hero{background:#060606;padding:60px 24px 80px;position:relative;overflow:hidden;width:100%;}
                .audb-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 55% 50% at 30% 50%,rgba(245,124,21,0.07) 0%,transparent 65%),radial-gradient(ellipse 40% 60% at 80% 20%,rgba(245,124,21,0.04) 0%,transparent 60%);pointer-events:none;}
                .audb-hero-grid{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:1fr 260px;gap:40px;align-items:start;position:relative;z-index:2;}
                .audb-hero-inner{padding-top:10px;}
                .audb-breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:28px;}
                .audb-bc-sep{color:rgba(255,255,255,0.2);font-size:11px;}
                .audb-bc-current{font-size:11px;font-weight:700;color:#f57c15;letter-spacing:0.5px;}
                .audb-hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(245,124,21,0.08);border:1px solid rgba(245,124,21,0.2);border-radius:30px;padding:6px 16px;font-size:10.5px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:#f57c15;margin-bottom:28px;}
                .audb-tag-dot{width:5px;height:5px;border-radius:50%;background:#f57c15;flex-shrink:0;}
                .audb-hero-title{font-family:'Oswald',sans-serif;font-size:clamp(2.8rem,6vw,5.2rem);color:#fff;line-height:0.95;text-transform:uppercase;letter-spacing:-1px;margin:0 0 24px 0;}
                .audb-hero-em{color:#f57c15;font-style:italic;}
                .audb-hero-sub{font-size:14.5px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:520px;margin:0 0 36px 0;font-weight:400;}
                .audb-hero-actions{display:flex;flex-wrap:nowrap;gap:12px;margin-bottom:32px;align-items:center;}
                .audb-hero-actions .audb-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .audb-hero-actions .audb-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                .audb-trust-row{display:flex;flex-wrap:wrap;gap:8px;}
                .audb-trust-pill{font-size:11px;font-weight:700;color:rgba(255,255,255,0.45);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:6px 12px;letter-spacing:0.3px;}
                .audb-hero-sidebar{display:flex;flex-direction:column;gap:3px;padding-top:64px;}
                .audb-sidebar-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px 18px;display:flex;flex-direction:column;gap:4px;transition:border-color 0.3s;}
                .audb-sidebar-card:hover{border-color:rgba(245,124,21,0.25);}
                .audb-sc-val{font-family:'Oswald',sans-serif;font-size:28px;font-weight:700;color:#f57c15;line-height:1;}
                .audb-sc-label{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}

                
                /* ══ INTRO VISUAL BOX ══ */
                .audb-intro { background: #fff; padding: 90px 24px; border-bottom: 1px solid rgba(0,0,0,0.06); }
                .audb-intro-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 340px; gap: 70px; align-items: center; }
                .audb-intro-visual { display: flex; flex-direction: column; }
                .audb-visual-box { background: #060606; border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 32px 28px; position: relative; overflow: hidden; }
                .audb-vb-accent { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #f57c15, rgba(245,124,21,0.3)); }
                .audb-vb-line { position: absolute; top: 0; left: 28px; width: 1px; bottom: 0; background: rgba(245,124,21,0.08); }
                .audb-vb-content { display: flex; flex-direction: column; gap: 4px; padding: 16px 0 16px 20px; position: relative; }
                .audb-vb-num { font-family: 'Oswald', sans-serif; font-size: 32px; font-weight: 700; color: #f57c15; line-height: 1; }
                .audb-vb-label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.3); }
                .audb-vb-divider { height: 1px; background: rgba(255,255,255,0.05); margin-left: 20px; }


                .audb-features{background:#f9f8f7;padding:90px 24px;}
                .audb-features-inner{max-width:1200px;margin:0 auto;}
                .audb-features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
                .audb-feature-card{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;padding:32px 28px;transition:border-color 0.3s,box-shadow 0.3s,transform 0.3s;}
                .audb-feature-card:hover{border-color:rgba(245,124,21,0.25);box-shadow:0 10px 30px rgba(245,124,21,0.07);transform:translateY(-3px);}
                .audb-fc-num{display:block;font-family:'Oswald',sans-serif;font-size:36px;font-weight:700;color:rgba(245,124,21,0.12);line-height:1;margin-bottom:-6px;user-select:none;}
                .audb-fc-title{font-family:'Oswald',sans-serif;font-size:16px;font-weight:600;color:#111;text-transform:uppercase;letter-spacing:0.3px;margin:0 0 12px 0;}
                .audb-fc-desc{font-size:13px;color:#666;line-height:1.7;margin:0;}
                .audb-cats{background:#060606;padding:90px 24px;}
                .audb-cats-inner{max-width:1100px;margin:0 auto;}
                .audb-cats .audb-section-title{color:#fff;}
                .audb-cats-sub{font-size:13.5px;color:rgba(255,255,255,0.35);margin:0;}
                .audb-cats-grid{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;}
                .audb-cat-pill{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:6px;font-size:12.5px;font-weight:600;color:rgba(255,255,255,0.65);transition:all 0.25s;cursor:default;}
                .audb-cat-pill:hover{background:rgba(245,124,21,0.1);border-color:rgba(245,124,21,0.3);color:#f57c15;}
                .audb-cp-icon{color:#f57c15;font-size:8px;}
                .audb-process{background:#fff;padding:90px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .audb-process-inner{max-width:900px;margin:0 auto;}
                .audb-steps{display:flex;flex-direction:column;}
                .audb-step-row{display:flex;gap:24px;align-items:stretch;}
                .audb-step-row:hover .audb-step-node{background:#f57c15;}
                .audb-step-row:hover .audb-step-num{color:#fff;}
                .audb-step-left{display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:52px;}
                .audb-step-node{width:52px;height:52px;border-radius:50%;background:#fff;border:2px solid #f57c15;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background 0.3s;}
                .audb-step-num{font-family:'Oswald',sans-serif;font-size:14px;font-weight:700;color:#f57c15;transition:color 0.3s;}
                .audb-step-vline{width:2px;flex:1;background:rgba(245,124,21,0.15);min-height:24px;}
                .audb-step-body{padding:10px 0 36px;flex:1;}
                .audb-step-title{font-family:'Oswald',sans-serif;font-size:17px;font-weight:600;color:#111;text-transform:uppercase;margin:0 0 8px 0;}
                .audb-step-desc{font-size:13.5px;color:#666;line-height:1.65;margin:0;}
                .audb-faq{background:#f9f8f7;padding:90px 24px;}
                .audb-faq-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:320px 1fr;gap:70px;align-items:start;}
                .audb-faq-item{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;margin-bottom:6px;overflow:hidden;transition:border-color 0.25s;}
                .audb-faq-item[open]{border-color:rgba(245,124,21,0.25);}
                .audb-faq-q{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 20px;font-family:'Raleway',sans-serif;font-size:13.5px;font-weight:700;color:#111;cursor:pointer;list-style:none;user-select:none;}
                .audb-faq-q::-webkit-details-marker{display:none;}
                .audb-faq-icon{font-size:20px;font-weight:300;color:#f57c15;flex-shrink:0;line-height:1;transition:transform 0.25s;}
                .audb-faq-item[open] .audb-faq-icon{transform:rotate(45deg);}
                .audb-faq-a{padding:14px 20px 18px;font-size:13px;color:#666;line-height:1.7;margin:0;border-top:1px solid rgba(0,0,0,0.04);}
                .audb-related{background:#fff;padding:70px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .audb-related-inner{max-width:1200px;margin:0 auto;}
                .audb-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
                .audb-cta{background:#060606;padding:110px 24px;text-align:center;position:relative;overflow:hidden;}
                .audb-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(245,124,21,0.07) 0%,transparent 70%);pointer-events:none;}
                .audb-cta-inner{position:relative;z-index:2;}
                .audb-cta-title{font-family:'Oswald',sans-serif;font-size:clamp(2.5rem,5vw,4.2rem);color:#fff;text-transform:uppercase;line-height:1.05;margin:8px 0 20px 0;letter-spacing:-0.5px;}
                .audb-cta-sub{font-size:14.5px;color:rgba(255,255,255,0.38);max-width:460px;margin:0 auto 36px;line-height:1.7;}
                .audb-cta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:nowrap;align-items:center;}
                .audb-cta .audb-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .audb-cta .audb-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                @media (max-width:1024px){
                    .audb-hero-grid{grid-template-columns:1fr;}
                    .audb-hero-sidebar{padding-top:0;display:grid;grid-template-columns:repeat(4,1fr);}
                    .audb-intro-inner{grid-template-columns:1fr;gap:40px;}
                    .audb-faq-inner{grid-template-columns:1fr;gap:40px;}
                }
                @media (max-width:768px){
                    .audb-features-grid{grid-template-columns:1fr;}
                    .audb-related-grid{grid-template-columns:repeat(2,1fr);}
                    .audb-hero-sidebar{grid-template-columns:repeat(2,1fr);}
                }
                @media (max-width:520px){
                    .audb-related-grid{grid-template-columns:1fr;}
                    .audb-cta-btns{flex-wrap:wrap;}
                }
            `}</style>
            </main>
            <FooterSection />
        </>
    );
}