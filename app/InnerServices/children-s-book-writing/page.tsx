"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const relatedServices = [
    { label: "Book Writing", slug: "book-writing" },
    { label: "Ghostwriting", slug: "ghostwriting" },
    { label: "Children's Book Editing", slug: "childrens-book-editing" },
    { label: "Book Illustration", slug: "illustrations-graphics" },
    { label: "Book Cover Design", slug: "book-cover-design" },
    { label: "Book Publishing", slug: "book-publishing" },
];

const ageGroups = [
    { icon: "✦", label: "Board Books (0–2 years)" },
    { icon: "✦", label: "Picture Books (3–8 years)" },
    { icon: "✦", label: "Early Readers (5–8 years)" },
    { icon: "✦", label: "Chapter Books (6–10 years)" },
    { icon: "✦", label: "Middle Grade (8–12 years)" },
    { icon: "✦", label: "Young Adult (12–18 years)" },
    { icon: "✦", label: "Educational & Learning" },
    { icon: "✦", label: "Bedtime & Lullaby Stories" },
    { icon: "✦", label: "Holiday & Seasonal Books" },
    { icon: "✦", label: "Religious & Moral Stories" },
    { icon: "✦", label: "Adventure & Fantasy" },
    { icon: "✦", label: "Diversity & Inclusion" },
];

const features = [
    {
        num: "01",
        title: "Age-Appropriate Writing",
        desc: "Every manuscript is crafted with precise vocabulary, sentence structure, and themes tailored to your target age group — from toddler board books to young adult novels.",
    },
    {
        num: "02",
        title: "Engaging Storylines",
        desc: "Our children's authors create stories that captivate young imaginations — filled with relatable characters, gentle conflict, and meaningful resolutions kids will love.",
    },
    {
        num: "03",
        title: "Educational Integration",
        desc: "Whether it's counting, colors, empathy, or life lessons — we seamlessly weave learning objectives into entertaining narratives that parents and teachers appreciate.",
    },
    {
        num: "04",
        title: "Illustration-Ready Format",
        desc: "Every manuscript is written with illustration in mind — structured to pair perfectly with artwork, with clear scene descriptions and visual pacing built in.",
    },
    {
        num: "05",
        title: "Full Copyright Ownership",
        desc: "The story, characters, and world are entirely yours. We transfer full intellectual property rights upon delivery, with no royalty claims or credits.",
    },
    {
        num: "06",
        title: "Publisher-Ready Delivery",
        desc: "Receive a fully formatted, proofread manuscript aligned with major children's publishing house submission guidelines — ready for agents or self-publishing.",
    },
];

const steps = [
    { num: "01", title: "Concept Discovery", desc: "We explore your story idea, target age group, core message, and any characters or themes you have in mind." },
    { num: "02", title: "Character & World Building", desc: "Our writers develop lovable, memorable characters and the world they inhabit — reviewed and approved by you." },
    { num: "03", title: "Manuscript Draft", desc: "The full story is written with age-appropriate language, pacing, and illustration cues woven throughout." },
    { num: "04", title: "Review & Refinement", desc: "You review the draft and we revise until every page delights — no limit on feedback rounds." },
    { num: "05", title: "Final Delivery", desc: "A polished, publish-ready manuscript formatted to industry standards, yours with full copyright." },
];

const faqs = [
    {
        q: "How long should a children's book be?",
        a: "It depends on the age group. Picture books are typically 500–1,000 words, early readers 2,000–10,000 words, chapter books 10,000–30,000 words, and middle grade novels 20,000–50,000 words. We'll recommend the right length for your target audience.",
    },
    {
        q: "Do you provide illustrations as well?",
        a: "Our writing service delivers the manuscript. We also offer a separate illustration service and can connect you with our in-house illustrators for a seamless end-to-end experience.",
    },
    {
        q: "Can I base the book on my own child or family?",
        a: "Absolutely — many of our most heartfelt projects are inspired by real children, families, and personal experiences. Share your story with us and we'll bring it to life.",
    },
    {
        q: "Will the book be suitable for school or library submission?",
        a: "Yes. Our manuscripts follow curriculum-aligned language standards and can be written to meet specific educational objectives, making them suitable for school and library distribution.",
    },
    {
        q: "How many revisions are included?",
        a: "Unlimited. We revise until you are completely satisfied with every word. Children's books require a particular magic — we won't stop until we've found it.",
    },
    {
        q: "Can you write a series, not just a single book?",
        a: "Yes — series development is one of our specialties. We create consistent characters, world-building bibles, and narrative arcs that span multiple books cohesively.",
    },
];

export default function ChildrensBookWritingPage() {
    return (
        <>
            <Navbar />
            <main className="cb-page">

                {/* ══════════════════════════════════════
                HERO
            ══════════════════════════════════════ */}
                <section className="cb-hero">
                    <div className="cb-hero-bg" />
                    <div className="cb-hero-grid">
                        <div className="cb-hero-inner">

                            {/* Breadcrumb */}
                            <nav className="cb-breadcrumb">
                                <Link href="/"
                                    style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none", letterSpacing: "0.5px" }}
                                    onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")}
                                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>
                                    Home
                                </Link>
                                <span className="cb-bc-sep">›</span>
                                <Link href="/services"
                                    style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textDecoration: "none", letterSpacing: "0.5px" }}
                                    onMouseEnter={e => (e.currentTarget.style.color = "#f57c15")}
                                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>
                                    Services
                                </Link>
                                <span className="cb-bc-sep">›</span>
                                <span className="cb-bc-current">Children's Book Writing</span>
                            </nav>

                            <div className="cb-hero-tag">
                                <span className="cb-tag-dot" />
                                Writing Services
                            </div>

                            <h1 className="cb-hero-title">
                                Professional<br />
                                <em className="cb-hero-em">Children's Book</em><br />
                                Writing Services
                            </h1>

                            <p className="cb-hero-sub">
                                From whimsical picture books to gripping middle-grade adventures —
                                our specialist children's authors craft stories that spark imagination,
                                nurture curiosity, and stay with young readers forever.
                            </p>

                            <div className="cb-hero-actions">
                                <button className="cb-btn-orange">Get A Free Quote</button>
                                <button className="cb-btn-outline">(646) 298 6438</button>
                            </div>

                            <div className="cb-trust-row">
                                <span className="cb-trust-pill">✓ Age-Appropriate Writing</span>
                                <span className="cb-trust-pill">✓ Full Copyright Yours</span>
                                <span className="cb-trust-pill">✓ Unlimited Revisions</span>
                                <span className="cb-trust-pill">✓ Publisher-Ready</span>
                            </div>

                        </div>

                        {/* Sidebar stats */}
                        <div className="cb-hero-sidebar">
                            <div className="cb-sidebar-card">
                                <span className="cb-sc-val">800+</span>
                                <span className="cb-sc-label">Children's Books Written</span>
                            </div>
                            <div className="cb-sidebar-card">
                                <span className="cb-sc-val">6</span>
                                <span className="cb-sc-label">Age Groups Covered</span>
                            </div>
                            <div className="cb-sidebar-card">
                                <span className="cb-sc-val">98%</span>
                                <span className="cb-sc-label">Client Satisfaction</span>
                            </div>
                            <div className="cb-sidebar-card">
                                <span className="cb-sc-val">∞</span>
                                <span className="cb-sc-label">Revisions Included</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
                INTRO
            ══════════════════════════════════════ */}
                <section className="cb-intro">
                    <div className="cb-intro-inner">
                        <div className="cb-intro-text">
                            <span className="cb-eyebrow">What We Do</span>
                            <h2 className="cb-section-title">
                                Every Child Deserves A Story<br />
                                <span className="cb-hl">Written Just For Them</span>
                            </h2>
                            <p className="cb-body-text">
                                Children's books are among the most technically demanding writing disciplines.
                                Every word must earn its place. Every sentence must sing at the right reading
                                level. Every page turn must feel earned. Our specialist children's authors
                                understand this craft deeply — having written hundreds of published books
                                across every age category.
                            </p>
                            <p className="cb-body-text">
                                Whether you want to publish a timeless bedtime story, a curriculum-aligned
                                educational book, a holiday classic, or the first book in a beloved series —
                                we deliver manuscripts that parents reach for again and again, and kids
                                never want to put down.
                            </p>
                            <button className="cb-btn-orange" style={{ marginTop: "8px" }}>Start Your Story</button>
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

                {/* ══════════════════════════════════════
                FEATURES
            ══════════════════════════════════════ */}
                <section className="cb-features">
                    <div className="cb-features-inner">
                        <div className="cb-section-head">
                            <span className="cb-eyebrow">Why Choose Us</span>
                            <h2 className="cb-section-title">
                                The Belmont <span className="cb-hl">Difference</span>
                            </h2>
                        </div>
                        <div className="cb-features-grid">
                            {features.map((f) => (
                                <div key={f.num} className="cb-feature-card">
                                    <span className="cb-fc-num">{f.num}</span>
                                    <h3 className="cb-fc-title">{f.title}</h3>
                                    <p className="cb-fc-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
                AGE GROUPS
            ══════════════════════════════════════ */}
                <section className="cb-ages">
                    <div className="cb-ages-inner">
                        <div className="cb-section-head cb-head-center">
                            <span className="cb-eyebrow">Age Groups & Categories</span>
                            <h2 className="cb-section-title">
                                We Write For <span className="cb-hl">Every Young Reader</span>
                            </h2>
                            <p className="cb-ages-sub">
                                From first words to first novels — our writers are specialists at every reading level.
                            </p>
                        </div>
                        <div className="cb-ages-grid">
                            {ageGroups.map((g) => (
                                <div key={g.label} className="cb-age-pill">
                                    <span className="cb-ap-icon">{g.icon}</span>
                                    {g.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
                PROCESS
            ══════════════════════════════════════ */}
                <section className="cb-process">
                    <div className="cb-process-inner">
                        <div className="cb-section-head cb-head-center">
                            <span className="cb-eyebrow">How It Works</span>
                            <h2 className="cb-section-title">
                                Our <span className="cb-hl">Writing Process</span>
                            </h2>
                        </div>
                        <div className="cb-steps">
                            {steps.map((s, i) => (
                                <div key={s.num} className="cb-step-row">
                                    <div className="cb-step-left">
                                        <div className="cb-step-node">
                                            <span className="cb-step-num">{s.num}</span>
                                        </div>
                                        {i < steps.length - 1 && <div className="cb-step-vline" />}
                                    </div>
                                    <div className="cb-step-body">
                                        <h3 className="cb-step-title">{s.title}</h3>
                                        <p className="cb-step-desc">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
                FAQ
            ══════════════════════════════════════ */}
                <section className="cb-faq">
                    <div className="cb-faq-inner">
                        <div className="cb-faq-left">
                            <span className="cb-eyebrow">FAQ</span>
                            <h2 className="cb-section-title">
                                Common <span className="cb-hl">Questions</span>
                            </h2>
                            <p className="cb-body-text" style={{ marginTop: "16px" }}>
                                Have more questions? Our children's book specialists are available for a free, no-obligation consultation.
                            </p>
                            <button className="cb-btn-orange" style={{ marginTop: "24px" }}>
                                Talk To A Specialist
                            </button>
                        </div>
                        <div className="cb-faq-right">
                            {faqs.map((item, i) => (
                                <details key={i} className="cb-faq-item">
                                    <summary className="cb-faq-q">
                                        {item.q}
                                        <span className="cb-faq-icon">+</span>
                                    </summary>
                                    <p className="cb-faq-a">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
                RELATED SERVICES
            ══════════════════════════════════════ */}
                <section className="cb-related">
                    <div className="cb-related-inner">
                        <span className="cb-eyebrow">Explore More</span>
                        <h2 className="cb-section-title" style={{ marginBottom: "32px" }}>
                            Related <span className="cb-hl">Services</span>
                        </h2>
                        <div className="cb-related-grid">
                            {relatedServices.map((rs) => (
                                <Link
                                    key={rs.slug}
                                    href={`/InnerServices/${rs.slug}`}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: "18px 20px",
                                        background: "#fafafa",
                                        border: "1px solid rgba(0,0,0,0.07)",
                                        borderRadius: "8px",
                                        textDecoration: "none",
                                        transition: "all 0.25s",
                                    }}
                                    onMouseEnter={e => {
                                        const el = e.currentTarget;
                                        el.style.borderColor = "#f57c15";
                                        el.style.background = "rgba(245,124,21,0.03)";
                                        el.style.transform = "translateY(-2px)";
                                        el.style.boxShadow = "0 6px 18px rgba(245,124,21,0.08)";
                                        const arrow = el.querySelector(".cb-rc-arrow") as HTMLElement;
                                        if (arrow) { arrow.style.opacity = "1"; arrow.style.transform = "translate(0,0)"; }
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget;
                                        el.style.borderColor = "rgba(0,0,0,0.07)";
                                        el.style.background = "#fafafa";
                                        el.style.transform = "translateY(0)";
                                        el.style.boxShadow = "none";
                                        const arrow = el.querySelector(".cb-rc-arrow") as HTMLElement;
                                        if (arrow) { arrow.style.opacity = "0"; arrow.style.transform = "translate(-4px,4px)"; }
                                    }}
                                >
                                    <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: "13px", fontWeight: 700, color: "#222", letterSpacing: "0.2px" }}>{rs.label}</span>
                                    <span className="cb-rc-arrow" style={{ fontSize: "16px", color: "#f57c15", opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.25s", display: "inline-block" }}>↗</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
                BOTTOM CTA
            ══════════════════════════════════════ */}
                <section className="cb-cta">
                    <div className="cb-cta-inner">
                        <span className="cb-eyebrow" style={{ color: "rgba(245,124,21,0.8)" }}>Get Started Today</span>
                        <h2 className="cb-cta-title">
                            Ready To Create A Story<br />
                            <span className="cb-hl">They'll Never Forget?</span>
                        </h2>
                        <p className="cb-cta-sub">
                            Schedule a free consultation with our children's book writing team.
                            No obligation — just your story, brought to life.
                        </p>
                        <div className="cb-cta-btns">
                            <button className="cb-btn-orange cb-btn-lg">Get A Free Quote</button>
                            <button className="cb-btn-outline cb-btn-lg">(646) 298 6438</button>
                        </div>
                    </div>
                </section>

                <style jsx>{`

                .cb-page { font-family: 'Raleway', sans-serif; color: #111; background: #fff; }

                /* ── Shared tokens ── */
                .cb-eyebrow { display: inline-block; font-size: 10.5px; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; color: #f57c15; margin-bottom: 14px; }
                .cb-section-title { font-family: 'Oswald', sans-serif; font-size: clamp(1.9rem, 3.5vw, 2.8rem); color: #111; text-transform: uppercase; line-height: 1.1; margin: 0 0 20px 0; letter-spacing: -0.3px; }
                .cb-hl { color: #f57c15; }
                .cb-body-text { font-size: 14px; color: #555; line-height: 1.75; margin: 0 0 16px 0; }
                .cb-section-head { margin-bottom: 52px; }
                .cb-head-center { text-align: center; }

                /* ── Buttons ── */
                .cb-btn-orange { display: inline-flex; align-items: center; gap: 8px; background: #f57c15; color: #fff; border: none; padding: 13px 28px; border-radius: 4px; font-family: 'Raleway', sans-serif; font-size: 12px; font-weight: 800; letter-spacing: 1.2px; text-transform: uppercase; cursor: pointer; white-space: nowrap; transition: background 0.25s, transform 0.2s, box-shadow 0.25s; box-shadow: 0 5px 18px rgba(245,124,21,0.28); }
                .cb-btn-orange:hover { background: #d96c0d; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(245,124,21,0.35); }
                .cb-btn-outline { display: inline-flex; align-items: center; background: transparent; color: #333; border: 1.5px solid rgba(0,0,0,0.18); padding: 13px 28px; border-radius: 4px; font-family: 'Raleway', sans-serif; font-size: 12px; font-weight: 800; letter-spacing: 1.2px; text-transform: uppercase; cursor: pointer; white-space: nowrap; transition: border-color 0.25s, color 0.25s; }
                .cb-btn-outline:hover { border-color: #f57c15; color: #f57c15; }
                .cb-btn-lg { padding: 15px 36px; font-size: 12.5px; }

                /* ══ HERO ══ */
                .cb-hero { background: #060606; padding: 60px 24px 80px; position: relative; overflow: hidden; width: 100%; }
                .cb-hero-bg { position: absolute; inset: 0; background: radial-gradient(ellipse 55% 50% at 30% 50%, rgba(245,124,21,0.07) 0%, transparent 65%), radial-gradient(ellipse 40% 60% at 80% 20%, rgba(245,124,21,0.04) 0%, transparent 60%); pointer-events: none; }
                .cb-hero-grid { max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: 1fr 260px; gap: 40px; align-items: start; position: relative; z-index: 2; }
                .cb-hero-inner { padding-top: 10px; }

                .cb-breadcrumb { display: flex; align-items: center; gap: 8px; margin-bottom: 28px; }
                .cb-bc-sep { color: rgba(255,255,255,0.2); font-size: 11px; }
                .cb-bc-current { font-size: 11px; font-weight: 700; color: #f57c15; letter-spacing: 0.5px; }

                .cb-hero-tag { display: inline-flex; align-items: center; gap: 8px; background: rgba(245,124,21,0.08); border: 1px solid rgba(245,124,21,0.2); border-radius: 30px; padding: 6px 16px; font-size: 10.5px; font-weight: 800; letter-spacing: 2.5px; text-transform: uppercase; color: #f57c15; margin-bottom: 28px; }
                .cb-tag-dot { width: 5px; height: 5px; border-radius: 50%; background: #f57c15; flex-shrink: 0; }

                .cb-hero-title { font-family: 'Oswald', sans-serif; font-size: clamp(2.8rem, 6vw, 5.2rem); color: #fff; line-height: 0.95; text-transform: uppercase; letter-spacing: -1px; margin: 0 0 24px 0; }
                .cb-hero-em { color: #f57c15; font-style: italic; }
                .cb-hero-sub { font-size: 14.5px; color: rgba(255,255,255,0.45); line-height: 1.7; max-width: 520px; margin: 0 0 36px 0; font-weight: 400; }

                .cb-hero-actions { display: flex; flex-wrap: nowrap; gap: 12px; margin-bottom: 32px; align-items: center; }
                .cb-hero-actions .cb-btn-outline { color: rgba(255,255,255,0.6); border-color: rgba(255,255,255,0.15); }
                .cb-hero-actions .cb-btn-outline:hover { color: #fff; border-color: rgba(255,255,255,0.4); background: rgba(255,255,255,0.04); }

                .cb-trust-row { display: flex; flex-wrap: wrap; gap: 8px; }
                .cb-trust-pill { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.45); background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 4px; padding: 6px 12px; letter-spacing: 0.3px; }

                .cb-hero-sidebar { display: flex; flex-direction: column; gap: 3px; padding-top: 64px; }
                .cb-sidebar-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 8px; padding: 20px 18px; display: flex; flex-direction: column; gap: 4px; transition: border-color 0.3s; }
                .cb-sidebar-card:hover { border-color: rgba(245,124,21,0.25); }
                .cb-sc-val { font-family: 'Oswald', sans-serif; font-size: 28px; font-weight: 700; color: #f57c15; line-height: 1; }
                .cb-sc-label { font-size: 10.5px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.3); }

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

                /* ══ FEATURES ══ */
                .cb-features { background: #f9f8f7; padding: 90px 24px; }
                .cb-features-inner { max-width: 1200px; margin: 0 auto; }
                .cb-features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3px; }
                .cb-feature-card { background: #fff; border: 1px solid rgba(0,0,0,0.06); border-radius: 8px; padding: 32px 28px; transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s; }
                .cb-feature-card:hover { border-color: rgba(245,124,21,0.25); box-shadow: 0 10px 30px rgba(245,124,21,0.07); transform: translateY(-3px); }
                .cb-fc-num { display: block; font-family: 'Oswald', sans-serif; font-size: 36px; font-weight: 700; color: rgba(245,124,21,0.12); line-height: 1; margin-bottom: -6px; user-select: none; }
                .cb-fc-title { font-family: 'Oswald', sans-serif; font-size: 16px; font-weight: 600; color: #111; text-transform: uppercase; letter-spacing: 0.3px; margin: 0 0 12px 0; }
                .cb-fc-desc { font-size: 13px; color: #666; line-height: 1.7; margin: 0; }

                /* ══ AGE GROUPS ══ */
                .cb-ages { background: #060606; padding: 90px 24px; }
                .cb-ages-inner { max-width: 1100px; margin: 0 auto; }
                .cb-ages .cb-section-title { color: #fff; }
                .cb-ages-sub { font-size: 13.5px; color: rgba(255,255,255,0.35); margin: 0; }
                .cb-ages-grid { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
                .cb-age-pill { display: inline-flex; align-items: center; gap: 8px; padding: 11px 20px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09); border-radius: 6px; font-size: 12.5px; font-weight: 600; color: rgba(255,255,255,0.65); letter-spacing: 0.3px; transition: all 0.25s; cursor: default; }
                .cb-age-pill:hover { background: rgba(245,124,21,0.1); border-color: rgba(245,124,21,0.3); color: #f57c15; }
                .cb-ap-icon { color: #f57c15; font-size: 8px; }

                /* ══ PROCESS ══ */
                .cb-process { background: #fff; padding: 90px 24px; border-top: 1px solid rgba(0,0,0,0.05); }
                .cb-process-inner { max-width: 900px; margin: 0 auto; }
                .cb-steps { display: flex; flex-direction: column; }
                .cb-step-row { display: flex; gap: 24px; align-items: stretch; }
                .cb-step-row:hover .cb-step-node { background: #f57c15; }
                .cb-step-row:hover .cb-step-num { color: #fff; }
                .cb-step-left { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; width: 52px; }
                .cb-step-node { width: 52px; height: 52px; border-radius: 50%; background: #fff; border: 2px solid #f57c15; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background 0.3s; }
                .cb-step-num { font-family: 'Oswald', sans-serif; font-size: 14px; font-weight: 700; color: #f57c15; transition: color 0.3s; }
                .cb-step-vline { width: 2px; flex: 1; background: rgba(245,124,21,0.15); min-height: 24px; }
                .cb-step-body { padding: 10px 0 36px; flex: 1; }
                .cb-step-title { font-family: 'Oswald', sans-serif; font-size: 17px; font-weight: 600; color: #111; text-transform: uppercase; margin: 0 0 8px 0; }
                .cb-step-desc { font-size: 13.5px; color: #666; line-height: 1.65; margin: 0; }

                /* ══ FAQ ══ */
                .cb-faq { background: #f9f8f7; padding: 90px 24px; }
                .cb-faq-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 320px 1fr; gap: 70px; align-items: start; }
                .cb-faq-item { background: #fff; border: 1px solid rgba(0,0,0,0.06); border-radius: 8px; margin-bottom: 6px; overflow: hidden; transition: border-color 0.25s; }
                .cb-faq-item[open] { border-color: rgba(245,124,21,0.25); }
                .cb-faq-q { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 18px 20px; font-family: 'Raleway', sans-serif; font-size: 13.5px; font-weight: 700; color: #111; cursor: pointer; list-style: none; user-select: none; }
                .cb-faq-q::-webkit-details-marker { display: none; }
                .cb-faq-icon { font-size: 20px; font-weight: 300; color: #f57c15; flex-shrink: 0; line-height: 1; transition: transform 0.25s; }
                .cb-faq-item[open] .cb-faq-icon { transform: rotate(45deg); }
                .cb-faq-a { padding: 14px 20px 18px; font-size: 13px; color: #666; line-height: 1.7; margin: 0; border-top: 1px solid rgba(0,0,0,0.04); }

                /* ══ RELATED ══ */
                .cb-related { background: #fff; padding: 70px 24px; border-top: 1px solid rgba(0,0,0,0.05); }
                .cb-related-inner { max-width: 1200px; margin: 0 auto; }
                .cb-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }

                /* ══ CTA ══ */
                .cb-cta { background: #060606; padding: 110px 24px; text-align: center; position: relative; overflow: hidden; }
                .cb-cta::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 60% at 50% 50%, rgba(245,124,21,0.07) 0%, transparent 70%); pointer-events: none; }
                .cb-cta-inner { position: relative; z-index: 2; }
                .cb-cta-title { font-family: 'Oswald', sans-serif; font-size: clamp(2.5rem, 5vw, 4.2rem); color: #fff; text-transform: uppercase; line-height: 1.05; margin: 8px 0 20px 0; letter-spacing: -0.5px; }
                .cb-cta-sub { font-size: 14.5px; color: rgba(255,255,255,0.38); max-width: 460px; margin: 0 auto 36px; line-height: 1.7; }
                .cb-cta-btns { display: flex; justify-content: center; gap: 14px; flex-wrap: nowrap; align-items: center; }
                .cb-cta .cb-btn-outline { color: rgba(255,255,255,0.6); border-color: rgba(255,255,255,0.15); }
                .cb-cta .cb-btn-outline:hover { color: #fff; border-color: rgba(255,255,255,0.4); background: rgba(255,255,255,0.04); }

                /* ══ RESPONSIVE ══ */
                @media (max-width: 1024px) {
                    .cb-hero-grid { grid-template-columns: 1fr; }
                    .cb-hero-sidebar { padding-top: 0; display: grid; grid-template-columns: repeat(4, 1fr); }
                    .cb-intro-inner { grid-template-columns: 1fr; gap: 40px; }
                    .cb-faq-inner { grid-template-columns: 1fr; gap: 40px; }
                }
                @media (max-width: 768px) {
                    .cb-features-grid { grid-template-columns: 1fr; }
                    .cb-related-grid { grid-template-columns: repeat(2, 1fr); }
                    .cb-hero-sidebar { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 520px) {
                    .cb-related-grid { grid-template-columns: 1fr; }
                    .cb-cta-btns { flex-wrap: wrap; }
                }
            `}</style>
            </main>
            <FooterSection />
        </>
    );
}