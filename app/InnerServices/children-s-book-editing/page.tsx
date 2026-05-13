"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const relatedServices = [
    { label: "Book Editing", slug: "book-editing" },
    { label: "Book Formatting", slug: "book-formatting" },
    { label: "Book Cover Design", slug: "book-cover-design" },
    { label: "Illustration Services", slug: "illustration-services" },
    { label: "Book Publishing", slug: "book-publishing" },
    { label: "Ebook Creation", slug: "ebook-creation" },
];

const categories = [
    { icon: "✦", label: "Picture Books (0–5)" },
    { icon: "✦", label: "Early Readers (5–7)" },
    { icon: "✦", label: "Chapter Books (6–9)" },
    { icon: "✦", label: "Middle Grade (8–12)" },
    { icon: "✦", label: "Young Adult (12+)" },
    { icon: "✦", label: "Board Books" },
    { icon: "✦", label: "Rhyming Books" },
    { icon: "✦", label: "Interactive Books" },
    { icon: "✦", label: "Educational Non-Fiction" },
    { icon: "✦", label: "Fairy Tales & Fables" },
    { icon: "✦", label: "Activity Books" },
    { icon: "✦", label: "Bedtime Stories" },
];

const features = [
    { num: "01", title: "Age-Appropriate Language", desc: "We refine vocabulary, sentence structure, and complexity to ensure the text resonates perfectly with the target age group — whether it's a toddler's picture book or a middle grade adventure." },
    { num: "02", title: "Pacing & Rhythm", desc: "Children's books demand perfect pacing. We ensure page turns land with impact, read-aloud rhythm flows naturally, and the story keeps young readers engaged from start to finish." },
    { num: "03", title: "Rhyme & Meter Check", desc: "For rhyming picture books, we analyze every stanza for consistent meter, natural phrasing, and avoid forced rhymes — ensuring the story is a joy to read aloud night after night." },
    { num: "04", title: "Sensitivity & Inclusivity", desc: "We review your manuscript for cultural accuracy, representation, and age-appropriate themes — ensuring your story is safe, inclusive, and positive for all young readers." },
    { num: "05", title: "Illustration Notes Guidance", desc: "We help refine your art notes and page breaks so the text leaves the perfect amount of room for illustrations, creating a seamless partnership between words and pictures." },
    { num: "06", title: "Developmental Focus", desc: "We analyze character arcs, emotional resonance, and plot clarity to ensure the story not only entertains but also imparts values and lessons appropriate for young minds." },
];

const steps = [
    { num: "01", title: "Manuscript Assessment", desc: "We evaluate your manuscript's target age group, word count, reading level, and overall structure to determine the precise editing approach required." },
    { num: "02", title: "Developmental Edit", desc: "We shape the narrative arc, refine character voices, adjust pacing, and ensure the story structure works perfectly within the specific conventions of children's literature." },
    { num: "03", title: "Line Editing", desc: "We refine the language, tighten the prose, check rhyme and rhythm, and ensure every sentence is engaging and accessible for the intended reader." },
    { num: "04", title: "Proofreading", desc: "A final meticulous pass to catch any grammatical, punctuation, or spelling errors — ensuring the text is completely polished before publication." },
    { num: "05", title: "Final Review & Delivery", desc: "You receive the fully edited manuscript with tracked changes, a detailed editorial letter, and all illustration notes formatted and ready for the design phase." },
];

const faqs = [
    { q: "Do you edit picture books with very few words?", a: "Yes. In picture books, every single word carries weight. We focus heavily on rhythm, pacing, page turns, and word choice to ensure the text reads aloud perfectly and leaves room for the illustrations." },
    { q: "How do you determine the target reading level?", a: "We analyze vocabulary complexity, sentence length, and thematic elements, aligning them with industry standards for picture books, early readers, chapter books, and middle grade novels." },
    { q: "Can you help fix my rhyming book?", a: "Absolutely. Rhyme and meter require specialized editing. We check for forced rhymes, inconsistent meter, and awkward phrasing, ensuring the rhythm flows naturally for read-aloud sessions." },
    { q: "Do you check illustration notes?", a: "Yes. We review your art notes to ensure they guide the illustrator effectively without restricting their creativity, and we format page breaks to ensure the text and visuals will align perfectly." },
    { q: "What's the difference between middle grade and YA editing?", a: "Middle grade editing focuses on simpler plots, internal themes, and vocabulary suitable for ages 8-12. Young Adult (YA) editing addresses mature themes, complex relationships, and older vocabulary for ages 12+." },
];

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="cbed-page">

                {/* HERO */}
                <section className="cbed-hero">
                    <div className="cbed-hero-bg" />
                    <div className="cbed-hero-grid">
                        <div className="cbed-hero-inner">
                            <nav className="cbed-breadcrumb">
                                <Link href="/" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Home</Link>
                                <span className="cbed-bc-sep">›</span>
                                <Link href="/services" style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>Services</Link>
                                <span className="cbed-bc-sep">›</span>
                                <span className="cbed-bc-current">Children's Book Editing</span>
                            </nav>
                            <div className="cbed-hero-tag"><span className="cbed-tag-dot" />Editing & Publishing</div>
                            <h1 className="cbed-hero-title">Professional<br /><em className="cbed-hero-em">Children's Book Editing</em><br />Services</h1>
                            <p className="cbed-hero-sub">Expert editing for picture books, chapter books, and middle grade novels — shaping stories that captivate young readers, perfect read-aloud rhythm, and meet the exacting standards of traditional and self-publishing.</p>
                            <div className="cbed-hero-actions">
                                <button className="cbed-btn-orange">Get A Free Quote</button>
                                <button className="cbed-btn-outline">(646) 298 6438</button>
                            </div>
                            <div className="cbed-trust-row">
                                <span className="cbed-trust-pill">✓ Age-Appropriate</span>
                                <span className="cbed-trust-pill">✓ Rhyme & Meter</span>
                                <span className="cbed-trust-pill">✓ Sensitivity Read</span>
                                <span className="cbed-trust-pill">✓ Read-Aloud Ready</span>
                            </div>
                        </div>
                        <div className="cbed-hero-sidebar">
                            <div className="cbed-sidebar-card"><span className="cbed-sc-val">Ages 0–12+</span><span className="cbed-sc-label">Target Age Groups</span></div>
                            <div className="cbed-sidebar-card"><span className="cbed-sc-val">Lexile</span><span className="cbed-sc-label">Reading Level Check</span></div>
                            <div className="cbed-sidebar-card"><span className="cbed-sc-val">Read-Aloud</span><span className="cbed-sc-label">Pacing Assured</span></div>
                            <div className="cbed-sidebar-card"><span className="cbed-sc-val">100%</span><span className="cbed-sc-label">Inclusivity Reviewed</span></div>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="cbed-intro">
                    <div className="cbed-intro-inner">
                        <div className="cbed-intro-text">
                            <span className="cbed-eyebrow">What We Do</span>
                            <h2 className="cbed-section-title">Your Story, Perfected For<br /><span className="cbed-hl">Young Readers.</span></h2>
                            <p className="cbed-body-text">Children are the most honest critics. If a story drags, they put it down. If a rhyme is forced, they stumble. Writing for children requires an entirely different set of rules — from vocabulary constraints and sentence rhythm to emotional resonance and page-turning suspense.</p>
                            <p className="cbed-body-text">Our children's book editing service pairs your manuscript with editors who specialize in early readers, picture books, and middle grade fiction. We refine your prose, tighten your pacing, check your rhymes, and ensure your story hits the exact right note for its target age group.</p>
                            <button className="cbed-btn-orange" style={{ marginTop: "8px" }}>Edit My Children's Book</button>
                        </div>
                        <div className="cbed-intro-visual">
                            <div className="cbed-visual-box">
                                <div className="cbed-vb-accent" />
                                <div className="cbed-vb-line" />
                                <div className="cbed-vb-content">
                                    <span className="cbed-vb-num">3 levels</span>
                                    <span className="cbed-vb-label">Of editing offered</span>
                                </div>
                                <div className="cbed-vb-divider" />
                                <div className="cbed-vb-content">
                                    <span className="cbed-vb-num">Detailed</span>
                                    <span className="cbed-vb-label">Edit letter included</span>
                                </div>
                                <div className="cbed-vb-divider" />
                                <div className="cbed-vb-content">
                                    <span className="cbed-vb-num">Track</span>
                                    <span className="cbed-vb-label">Changes delivery</span>
                                </div>
                                <div className="cbed-vb-divider" />
                                <div className="cbed-vb-content">
                                    <span className="cbed-vb-num">∞</span>
                                    <span className="cbed-vb-label">Query rounds included</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section className="cbed-features">
                    <div className="cbed-features-inner">
                        <div className="cbed-section-head">
                            <span className="cbed-eyebrow">Why Choose Us</span>
                            <h2 className="cbed-section-title">The Belmont <span className="cbed-hl">Difference</span></h2>
                        </div>
                        <div className="cbed-features-grid">
                            {features.map((f) => (
                                <div key={f.num} className="cbed-feature-card">
                                    <span className="cbed-fc-num">{f.num}</span>
                                    <h3 className="cbed-fc-title">{f.title}</h3>
                                    <p className="cbed-fc-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CATEGORIES */}
                <section className="cbed-cats">
                    <div className="cbed-cats-inner">
                        <div className="cbed-section-head cbed-head-center">
                            <span className="cbed-eyebrow">Ages We Edit</span>
                            <h2 className="cbed-section-title">Editing For Every <span className="cbed-hl">Age Group & Genre</span></h2>
                            <p className="cbed-cats-sub">Our children's editors specialize across every reading level, from board books to young adult.</p>
                        </div>
                        <div className="cbed-cats-grid">
                            {categories.map((c) => (
                                <div key={c.label} className="cbed-cat-pill">
                                    <span className="cbed-cp-icon">{c.icon}</span>{c.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="cbed-process">
                    <div className="cbed-process-inner">
                        <div className="cbed-section-head cbed-head-center">
                            <span className="cbed-eyebrow">How It Works</span>
                            <h2 className="cbed-section-title">Our <span className="cbed-hl">Editing Process</span></h2>
                        </div>
                        <div className="cbed-steps">
                            {steps.map((s, i) => (
                                <div key={s.num} className="cbed-step-row">
                                    <div className="cbed-step-left">
                                        <div className="cbed-step-node"><span className="cbed-step-num">{s.num}</span></div>
                                        {i < steps.length - 1 && <div className="cbed-step-vline" />}
                                    </div>
                                    <div className="cbed-step-body">
                                        <h3 className="cbed-step-title">{s.title}</h3>
                                        <p className="cbed-step-desc">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="cbed-faq">
                    <div className="cbed-faq-inner">
                        <div className="cbed-faq-left">
                            <span className="cbed-eyebrow">FAQ</span>
                            <h2 className="cbed-section-title">Common <span className="cbed-hl">Questions</span></h2>
                            <p className="cbed-body-text" style={{ marginTop: "16px" }}>Still have questions? Our team is available 24/7 for a free consultation.</p>
                            <button className="cbed-btn-orange" style={{ marginTop: "24px" }}>Talk To An Expert</button>
                        </div>
                        <div className="cbed-faq-right">
                            {faqs.map((item, i) => (
                                <details key={i} className="cbed-faq-item">
                                    <summary className="cbed-faq-q">{item.q}<span className="cbed-faq-icon">+</span></summary>
                                    <p className="cbed-faq-a">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED */}
                <section className="cbed-related">
                    <div className="cbed-related-inner">
                        <span className="cbed-eyebrow">Explore More</span>
                        <h2 className="cbed-section-title" style={{ marginBottom: "32px" }}>Related <span className="cbed-hl">Services</span></h2>
                        <div className="cbed-related-grid">
                            {relatedServices.map((rs) => (
                                <Link key={rs.slug} href={`/InnerServices/${rs.slug}`}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "#fafafa", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "8px", textDecoration: "none", transition: "all 0.25s" }}
                                    onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "#f57c15"; el.style.background = "rgba(245,124,21,0.03)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 6px 18px rgba(245,124,21,0.08)"; const a = el.querySelector(".cbed-rca") as HTMLElement; if (a) { a.style.opacity = "1"; a.style.transform = "translate(0,0)"; } }}
                                    onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "rgba(0,0,0,0.07)"; el.style.background = "#fafafa"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; const a = el.querySelector(".cbed-rca") as HTMLElement; if (a) { a.style.opacity = "0"; a.style.transform = "translate(-4px,4px)"; } }}
                                >
                                    <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: "13px", fontWeight: 700, color: "#222" }}>{rs.label}</span>
                                    <span className="cbed-rca" style={{ fontSize: "16px", color: "#f57c15", opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.25s", display: "inline-block" }}>↗</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="cbed-cta">
                    <div className="cbed-cta-inner">
                        <span className="cbed-eyebrow" style={{ color: "rgba(245,124,21,0.8)" }}>Get Started Today</span>
                        <h2 className="cbed-cta-title">Ready To Perfect Your<br /><span className="cbed-hl">Children's Book?</span></h2>
                        <p className="cbed-cta-sub">Get a free manuscript review and quote. We will match your story with the perfect editor and ensure it captivates young readers from the very first page.</p>
                        <div className="cbed-cta-btns">
                            <button className="cbed-btn-orange cbed-btn-lg">Get A Free Quote</button>
                            <button className="cbed-btn-outline cbed-btn-lg">(646) 298 6438</button>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                .cbed-page{font-family:'Raleway',sans-serif;color:#111;background:#fff;}
                .cbed-eyebrow{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#f57c15;margin-bottom:14px;}
                .cbed-section-title{font-family:'Oswald',sans-serif;font-size:clamp(1.9rem,3.5vw,2.8rem);color:#111;text-transform:uppercase;line-height:1.1;margin:0 0 20px 0;letter-spacing:-0.3px;}
                .cbed-hl{color:#f57c15;}
                .cbed-body-text{font-size:14px;color:#555;line-height:1.75;margin:0 0 16px 0;}
                .cbed-section-head{margin-bottom:52px;}
                .cbed-head-center{text-align:center;}
                .cbed-btn-orange{display:inline-flex;align-items:center;gap:8px;background:#f57c15;color:#fff;border:none;padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background 0.25s,transform 0.2s,box-shadow 0.25s;box-shadow:0 5px 18px rgba(245,124,21,0.28);}
                .cbed-btn-orange:hover{background:#d96c0d;transform:translateY(-2px);box-shadow:0 8px 24px rgba(245,124,21,0.35);}
                .cbed-btn-outline{display:inline-flex;align-items:center;background:transparent;color:#333;border:1.5px solid rgba(0,0,0,0.18);padding:13px 28px;border-radius:4px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:border-color 0.25s,color 0.25s;}
                .cbed-btn-outline:hover{border-color:#f57c15;color:#f57c15;}
                .cbed-btn-lg{padding:15px 36px;font-size:12.5px;}
                .cbed-hero{background:#060606;padding:60px 24px 80px;position:relative;overflow:hidden;width:100%;}
                .cbed-hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 55% 50% at 30% 50%,rgba(245,124,21,0.07) 0%,transparent 65%),radial-gradient(ellipse 40% 60% at 80% 20%,rgba(245,124,21,0.04) 0%,transparent 60%);pointer-events:none;}
                .cbed-hero-grid{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:1fr 260px;gap:40px;align-items:start;position:relative;z-index:2;}
                .cbed-hero-inner{padding-top:10px;}
                .cbed-breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:28px;}
                .cbed-bc-sep{color:rgba(255,255,255,0.2);font-size:11px;}
                .cbed-bc-current{font-size:11px;font-weight:700;color:#f57c15;letter-spacing:0.5px;}
                .cbed-hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(245,124,21,0.08);border:1px solid rgba(245,124,21,0.2);border-radius:30px;padding:6px 16px;font-size:10.5px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:#f57c15;margin-bottom:28px;}
                .cbed-tag-dot{width:5px;height:5px;border-radius:50%;background:#f57c15;flex-shrink:0;}
                .cbed-hero-title{font-family:'Oswald',sans-serif;font-size:clamp(2.8rem,6vw,5.2rem);color:#fff;line-height:0.95;text-transform:uppercase;letter-spacing:-1px;margin:0 0 24px 0;}
                .cbed-hero-em{color:#f57c15;font-style:italic;}
                .cbed-hero-sub{font-size:14.5px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:520px;margin:0 0 36px 0;font-weight:400;}
                .cbed-hero-actions{display:flex;flex-wrap:nowrap;gap:12px;margin-bottom:32px;align-items:center;}
                .cbed-hero-actions .cbed-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .cbed-hero-actions .cbed-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                .cbed-trust-row{display:flex;flex-wrap:wrap;gap:8px;}
                .cbed-trust-pill{font-size:11px;font-weight:700;color:rgba(255,255,255,0.45);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:6px 12px;letter-spacing:0.3px;}
                .cbed-hero-sidebar{display:flex;flex-direction:column;gap:3px;padding-top:64px;}
                .cbed-sidebar-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px 18px;display:flex;flex-direction:column;gap:4px;transition:border-color 0.3s;}
                .cbed-sidebar-card:hover{border-color:rgba(245,124,21,0.25);}
                .cbed-sc-val{font-family:'Oswald',sans-serif;font-size:28px;font-weight:700;color:#f57c15;line-height:1;}
                .cbed-sc-label{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3);}

                /* ══ INTRO VISUAL BOX ══ */
                .cbed-intro { background: #fff; padding: 90px 24px; border-bottom: 1px solid rgba(0,0,0,0.06); }
                .cbed-intro-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 340px; gap: 70px; align-items: center; }
                .cbed-intro-visual { display: flex; flex-direction: column; }
                .cbed-visual-box { background: #060606; border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 32px 28px; position: relative; overflow: hidden; }
                .cbed-vb-accent { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #f57c15, rgba(245,124,21,0.3)); }
                .cbed-vb-line { position: absolute; top: 0; left: 28px; width: 1px; bottom: 0; background: rgba(245,124,21,0.08); }
                .cbed-vb-content { display: flex; flex-direction: column; gap: 4px; padding: 16px 0 16px 20px; position: relative; }
                .cbed-vb-num { font-family: 'Oswald', sans-serif; font-size: 32px; font-weight: 700; color: #f57c15; line-height: 1; }
                .cbed-vb-label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.3); }
                .cbed-vb-divider { height: 1px; background: rgba(255,255,255,0.05); margin-left: 20px; }

                .cbed-features{background:#f9f8f7;padding:90px 24px;}
                .cbed-features-inner{max-width:1200px;margin:0 auto;}
                .cbed-features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
                .cbed-feature-card{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;padding:32px 28px;transition:border-color 0.3s,box-shadow 0.3s,transform 0.3s;}
                .cbed-feature-card:hover{border-color:rgba(245,124,21,0.25);box-shadow:0 10px 30px rgba(245,124,21,0.07);transform:translateY(-3px);}
                .cbed-fc-num{display:block;font-family:'Oswald',sans-serif;font-size:36px;font-weight:700;color:rgba(245,124,21,0.12);line-height:1;margin-bottom:-6px;user-select:none;}
                .cbed-fc-title{font-family:'Oswald',sans-serif;font-size:16px;font-weight:600;color:#111;text-transform:uppercase;letter-spacing:0.3px;margin:0 0 12px 0;}
                .cbed-fc-desc{font-size:13px;color:#666;line-height:1.7;margin:0;}
                .cbed-cats{background:#060606;padding:90px 24px;}
                .cbed-cats-inner{max-width:1100px;margin:0 auto;}
                .cbed-cats .cbed-section-title{color:#fff;}
                .cbed-cats-sub{font-size:13.5px;color:rgba(255,255,255,0.35);margin:0;}
                .cbed-cats-grid{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;}
                .cbed-cat-pill{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:6px;font-size:12.5px;font-weight:600;color:rgba(255,255,255,0.65);transition:all 0.25s;cursor:default;}
                .cbed-cat-pill:hover{background:rgba(245,124,21,0.1);border-color:rgba(245,124,21,0.3);color:#f57c15;}
                .cbed-cp-icon{color:#f57c15;font-size:8px;}
                .cbed-process{background:#fff;padding:90px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .cbed-process-inner{max-width:900px;margin:0 auto;}
                .cbed-steps{display:flex;flex-direction:column;}
                .cbed-step-row{display:flex;gap:24px;align-items:stretch;}
                .cbed-step-row:hover .cbed-step-node{background:#f57c15;}
                .cbed-step-row:hover .cbed-step-num{color:#fff;}
                .cbed-step-left{display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:52px;}
                .cbed-step-node{width:52px;height:52px;border-radius:50%;background:#fff;border:2px solid #f57c15;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background 0.3s;}
                .cbed-step-num{font-family:'Oswald',sans-serif;font-size:14px;font-weight:700;color:#f57c15;transition:color 0.3s;}
                .cbed-step-vline{width:2px;flex:1;background:rgba(245,124,21,0.15);min-height:24px;}
                .cbed-step-body{padding:10px 0 36px;flex:1;}
                .cbed-step-title{font-family:'Oswald',sans-serif;font-size:17px;font-weight:600;color:#111;text-transform:uppercase;margin:0 0 8px 0;}
                .cbed-step-desc{font-size:13.5px;color:#666;line-height:1.65;margin:0;}
                .cbed-faq{background:#f9f8f7;padding:90px 24px;}
                .cbed-faq-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:320px 1fr;gap:70px;align-items:start;}
                .cbed-faq-item{background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:8px;margin-bottom:6px;overflow:hidden;transition:border-color 0.25s;}
                .cbed-faq-item[open]{border-color:rgba(245,124,21,0.25);}
                .cbed-faq-q{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 20px;font-family:'Raleway',sans-serif;font-size:13.5px;font-weight:700;color:#111;cursor:pointer;list-style:none;user-select:none;}
                .cbed-faq-q::-webkit-details-marker{display:none;}
                .cbed-faq-icon{font-size:20px;font-weight:300;color:#f57c15;flex-shrink:0;line-height:1;transition:transform 0.25s;}
                .cbed-faq-item[open] .cbed-faq-icon{transform:rotate(45deg);}
                .cbed-faq-a{padding:14px 20px 18px;font-size:13px;color:#666;line-height:1.7;margin:0;border-top:1px solid rgba(0,0,0,0.04);}
                .cbed-related{background:#fff;padding:70px 24px;border-top:1px solid rgba(0,0,0,0.05);}
                .cbed-related-inner{max-width:1200px;margin:0 auto;}
                .cbed-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
                .cbed-cta{background:#060606;padding:110px 24px;text-align:center;position:relative;overflow:hidden;}
                .cbed-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(245,124,21,0.07) 0%,transparent 70%);pointer-events:none;}
                .cbed-cta-inner{position:relative;z-index:2;}
                .cbed-cta-title{font-family:'Oswald',sans-serif;font-size:clamp(2.5rem,5vw,4.2rem);color:#fff;text-transform:uppercase;line-height:1.05;margin:8px 0 20px 0;letter-spacing:-0.5px;}
                .cbed-cta-sub{font-size:14.5px;color:rgba(255,255,255,0.38);max-width:460px;margin:0 auto 36px;line-height:1.7;}
                .cbed-cta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:nowrap;align-items:center;}
                .cbed-cta .cbed-btn-outline{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15);}
                .cbed-cta .cbed-btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.04);}
                @media (max-width:1024px){
                    .cbed-hero-grid{grid-template-columns:1fr;}
                    .cbed-hero-sidebar{padding-top:0;display:grid;grid-template-columns:repeat(4,1fr);}
                    .cbed-intro-inner{grid-template-columns:1fr;gap:40px;}
                    .cbed-faq-inner{grid-template-columns:1fr;gap:40px;}
                }
                @media (max-width:768px){
                    .cbed-features-grid{grid-template-columns:1fr;}
                    .cbed-related-grid{grid-template-columns:repeat(2,1fr);}
                    .cbed-hero-sidebar{grid-template-columns:repeat(2,1fr);}
                }
                @media (max-width:520px){
                    .cbed-related-grid{grid-template-columns:1fr;}
                    .cbed-cta-btns{flex-wrap:wrap;}
                }
            `}</style>
            </main>
            <FooterSection />
        </>
    );
}