"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ContactFormSection from "@/components/pages/ContactFormSection";


const services = [
    { href: "/services/ghostwriting", icon: "✍️", title: "Ghostwriting", desc: "Professional ghostwriters who capture your unique voice and transform your ideas into a compelling, publish-ready manuscript.", features: ["Chapter-by-chapter drafts", "Voice matching", "Research & fact-checking", "Unlimited revisions"] },
    { href: "/services/editing", icon: "📝", title: "Book Editing", desc: "Comprehensive editing and proofreading that polishes your manuscript to professional publishing standards across all genres.", features: ["Developmental editing", "Copy editing", "Proofreading", "Formatting review"] },
    { href: "/services/cover-design", icon: "🎨", title: "Cover Design", desc: "Eye-catching, genre-appropriate book covers designed by professional artists to make your book stand out on every platform.", features: ["Front & back cover", "Spine design", "Print & digital formats", "Multiple concepts"] },
    { href: "/services/publishing", icon: "📦", title: "Publishing", desc: "End-to-end publishing support including ISBN registration, formatting, and distribution to all major global platforms.", features: ["ISBN registration", "Print & e-book formatting", "Multi-platform distribution", "400+ stores worldwide"] },
    { href: "/services/marketing", icon: "📢", title: "Book Marketing", desc: "Results-driven marketing campaigns that build your author brand, grow your audience, and drive real book sales.", features: ["Social media campaigns", "PPC advertising", "Email marketing", "Author website"] },
];

export default function ServicesPage() {
    return (
        <>
            <Navbar />

            {/* 1 — HERO: DARK */}
            <section className="pg-hero">
                <div className="pg-hero-bg">
                    <Image src="/images/hero.jpg" alt="Services" fill priority style={{ objectFit: "cover" }} />
                    <div className="pg-overlay" />
                </div>
                <div className="pg-hero-inner">
                    <p className="pg-crumb">Home / Services</p>
                    <h1 className="pg-h1">Our Services</h1>
                    <p className="pg-hero-sub">Everything You Need To Publish Your Book — Under One Roof</p>
                </div>
            </section>

            {/* 2 — INTRO: LIGHT */}
            <section className="sec light">
                <div className="two-col">
                    <div className="col-text">
                        <span className="badge">What We Do</span>
                        <h2 className="hdg dark">Full-Service Book Publishing Solutions</h2>
                        <div className="odiv" />
                        <p className="para dk">From the moment you have an idea to the day your book goes live on Amazon, Apple Books, and bookstores worldwide, we handle every step of the publishing journey. Our team of experts works as an extension of your creative vision.</p>
                        <p className="para dk">We don't offer generic packages — every author gets a tailored approach that fits their genre, audience, goals, and budget. Whether you're a first-time author or an established writer looking to expand your reach, we have the right solution for you.</p>
                        <div style={{ display: "flex", gap: "12px", marginTop: "8px", flexWrap: "wrap" }}>
                            <button style={{ background: "#f57c15", color: "#fff", border: "none", padding: "13px 28px", borderRadius: "6px", fontSize: "13px", fontWeight: 700, cursor: "pointer", fontFamily: "Raleway,Arial,sans-serif", boxShadow: "0 4px 18px rgba(245,124,21,0.35)" }}>Get Started</button>
                            <button style={{ background: "#111", color: "#fff", border: "1px solid rgba(0,0,0,0.15)", padding: "13px 28px", borderRadius: "6px", fontSize: "13px", fontWeight: 700, cursor: "pointer", fontFamily: "Raleway,Arial,sans-serif" }}>Live Chat</button>
                        </div>
                    </div>
                    <div className="col-img">
                        <Image src="/images/Marketing.png" alt="Services" width={520} height={460} style={{ width: "100%", height: "auto", display: "block", borderRadius: "16px" }} />
                    </div>
                </div>
            </section>

            {/* 3 — SERVICES GRID: DARK */}
            <section className="sec dark">
                <div className="sec-grid" /><div className="blob tl" />
                <div className="center-head">
                    <span className="badge">All Services</span>
                    <h2 className="hdg white">Choose Your Publishing Solution</h2>
                    <div className="odiv mx" />
                </div>
                <div className="svc-grid">
                    {services.map(s => (
                        <Link href={s.href} key={s.title} className="svc-card">
                            <div className="svc-icon-wrap">{s.icon}</div>
                            <h3 className="svc-title">{s.title}</h3>
                            <p className="svc-desc">{s.desc}</p>
                            <ul className="svc-features">
                                {s.features.map(f => (
                                    <li key={f}><span className="feat-dot" />{f}</li>
                                ))}
                            </ul>
                            <div className="svc-link">Learn More →</div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* 4 — PROCESS: LIGHT */}
            <section className="sec light">
                <div className="center-head">
                    <span className="badge">How It Works</span>
                    <h2 className="hdg dark">Our Simple 5-Step Process</h2>
                    <div className="odiv mx" />
                </div>
                <div className="steps-row">
                    {[
                        { n: "01", t: "Consultation", d: "Free call to understand your book, goals, and the best publishing path." },
                        { n: "02", t: "Manuscript", d: "Editing, ghostwriting, or reviewing your manuscript to publishing standard." },
                        { n: "03", t: "Design", d: "Cover design and interior formatting tailored to your genre and audience." },
                        { n: "04", t: "Publish", d: "Upload, distribute and list on 400+ stores globally with your ISBN." },
                        { n: "05", t: "Market", d: "Promote your book with targeted campaigns to reach real readers." },
                    ].map((step, i) => (
                        <div key={step.n} className="step-item">
                            <div className="step-num">{step.n}</div>
                            {i < 4 && <div className="step-line" />}
                            <h4 className="step-title">{step.t}</h4>
                            <p className="step-desc">{step.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5 — CTA: ORANGE */}
            <section className="service-banner">
                <h2 className="sb-h2">Ready To Start Your Publishing Journey?</h2>
                <p className="sb-p">Get a free consultation today and find out exactly what it takes to get your book published and in front of readers worldwide.</p>
                <div className="sb-btns">
                    <button className="btn-white">Get Free Consultation</button>
                    <button className="btn-dark-o">(646) 298 6438</button>
                </div>
            </section>

            <ContactFormSection />
            <FooterSection />
            <style jsx global>{SHARED_STYLES}</style>
            <style jsx>{`
                .svc-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; position:relative; z-index:2; max-width:1200px; margin:0 auto; }
                .svc-card { display:flex; flex-direction:column; background:rgba(255,255,255,0.04); backdrop-filter:blur(12px); border:1px solid rgba(245,124,21,0.18); border-radius:20px; padding:36px 28px; text-decoration:none; transition:transform 0.28s,box-shadow 0.28s,border-color 0.28s; position:relative; overflow:hidden; }
                .svc-card::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,#f57c15,transparent); opacity:0; transition:opacity 0.3s; }
                .svc-card:hover { transform:translateY(-8px); box-shadow:0 16px 48px rgba(245,124,21,0.20); border-color:rgba(245,124,21,0.40); }
                .svc-card:hover::before { opacity:1; }
                .svc-icon-wrap { font-size:36px; margin-bottom:18px; }
                .svc-title { font-family:Oswald,Arial,sans-serif; font-size:1.3rem; font-weight:700; color:#fff; text-transform:uppercase; letter-spacing:1px; margin-bottom:12px; }
                .svc-desc { font-size:13.5px; color:rgba(255,255,255,0.55); line-height:1.8; margin-bottom:18px; flex:1; }
                .svc-features { list-style:none; margin:0 0 20px; padding:0; display:flex; flex-direction:column; gap:8px; }
                .svc-features li { display:flex; align-items:center; gap:8px; font-size:13px; color:rgba(255,255,255,0.65); }
                .feat-dot { width:6px; height:6px; border-radius:50%; background:#f57c15; flex-shrink:0; }
                .svc-link { font-size:13px; font-weight:700; color:#f57c15; letter-spacing:0.3px; }
                .steps-row { display:flex; gap:0; position:relative; z-index:2; max-width:1100px; margin:0 auto; }
                .step-item { flex:1; text-align:center; padding:0 16px; position:relative; }
                .step-num { font-family:Oswald,Arial,sans-serif; font-size:2.2rem; font-weight:900; color:#f57c15; line-height:1; margin-bottom:12px; }
                .step-line { position:absolute; top:20px; left:calc(50% + 30px); right:calc(-50% + 30px); height:2px; background:linear-gradient(90deg,rgba(245,124,21,0.40),rgba(245,124,21,0.10)); }
                .step-title { font-family:Oswald,Arial,sans-serif; font-size:1rem; font-weight:700; color:#111; text-transform:uppercase; margin-bottom:8px; }
                .step-desc { font-size:13px; color:#666; line-height:1.7; }
                @media (max-width: 900px) { .svc-grid { grid-template-columns:1fr; } .steps-row { flex-direction:column; gap:28px; } .step-line { display:none; } }
                @media (max-width: 600px) { .svc-grid { grid-template-columns:1fr; } }
            `}</style>
        </>
    );
}

const SHARED_STYLES = `
    .pg-hero{position:relative;min-height:380px;display:flex;align-items:center;overflow:hidden;}
    .pg-hero-bg{position:absolute;inset:0;z-index:0;}
    .pg-overlay{position:absolute;inset:0;background:rgba(0,0,0,0.80);z-index:1;}
    .pg-hero-inner{position:relative;z-index:2;padding:80px 60px;max-width:1300px;margin:0 auto;width:100%;}
    .pg-crumb{font-size:12px;color:rgba(255,255,255,0.45);margin-bottom:12px;font-family:Raleway,Arial,sans-serif;}
    .pg-h1{font-family:Oswald,Arial,sans-serif;font-size:clamp(2.5rem,5vw,5rem);font-weight:900;color:#fff;text-transform:uppercase;letter-spacing:2px;line-height:1;margin-bottom:14px;}
    .pg-hero-sub{font-size:15px;color:rgba(255,255,255,0.60);font-family:Raleway,Arial,sans-serif;}
    .sec{position:relative;padding:80px 60px;overflow:hidden;font-family:Raleway,Arial,sans-serif;}
    .sec.dark{background:#1a1a1a;}
    .sec.light{background:#f5f5f0;}
    .sec-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(245,124,21,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(245,124,21,0.04) 1px,transparent 1px);background-size:48px 48px;pointer-events:none;z-index:0;}
    .blob{position:absolute;border-radius:50%;pointer-events:none;z-index:0;}
    .blob.tl{top:-100px;left:-80px;width:420px;height:420px;background:radial-gradient(circle,rgba(245,124,21,0.14) 0%,transparent 65%);}
    .blob.br{bottom:-80px;right:-60px;width:360px;height:360px;background:radial-gradient(circle,rgba(245,124,21,0.10) 0%,transparent 65%);}
    .two-col{display:flex;align-items:center;gap:64px;position:relative;z-index:2;max-width:1200px;margin:0 auto;}
    .two-col.rev{flex-direction:row-reverse;}
    .col-text{flex:1;min-width:0;}
    .col-img{flex:0 0 44%;}
    .three-col{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;position:relative;z-index:2;max-width:1200px;margin:0 auto;}
    .center-head{text-align:center;max-width:700px;margin:0 auto 40px;position:relative;z-index:2;}
    .badge{display:inline-block;background:rgba(245,124,21,0.10);border:1px solid rgba(245,124,21,0.22);color:#f57c15;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:5px 14px;border-radius:20px;margin-bottom:14px;}
    .hdg{font-family:Oswald,Arial,sans-serif;font-size:clamp(1.5rem,2.8vw,2.8rem);font-weight:700;text-transform:uppercase;letter-spacing:1px;line-height:1.15;margin-bottom:14px;}
    .hdg.white{color:#fff;}
    .hdg.dark{color:#111;}
    .odiv{width:48px;height:3px;background:linear-gradient(90deg,#f57c15,#ffb347);border-radius:3px;margin-bottom:20px;}
    .odiv.mx{margin:0 auto 20px;}
    .para{font-size:14.5px;line-height:1.88;margin-bottom:14px;}
    .para.muted{color:rgba(255,255,255,0.55);}
    .para.dk{color:#555;}
    .service-banner{background:#f57c15;padding:60px;text-align:center;position:relative;overflow:hidden;}
    .service-banner::before{content:'';position:absolute;top:-60px;left:50%;transform:translateX(-50%);width:400px;height:300px;border-radius:50%;background:rgba(255,255,255,0.08);pointer-events:none;}
    .sb-h2{font-family:Oswald,Arial,sans-serif;font-size:clamp(1.5rem,2.5vw,2.5rem);font-weight:900;color:#fff;text-transform:uppercase;letter-spacing:1px;margin-bottom:16px;position:relative;z-index:1;}
    .sb-p{font-size:14.5px;color:rgba(255,255,255,0.85);max-width:600px;margin:0 auto 28px;line-height:1.8;position:relative;z-index:1;}
    .sb-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative;z-index:1;}
    .btn-white{background:#fff;color:#f57c15;border:none;padding:13px 32px;border-radius:6px;font-size:13px;font-weight:700;cursor:pointer;font-family:Raleway,Arial,sans-serif;}
    .btn-dark-o{background:#111;color:#fff;border:1px solid rgba(255,255,255,0.20);padding:13px 32px;border-radius:6px;font-size:13px;font-weight:700;cursor:pointer;font-family:Raleway,Arial,sans-serif;}
    @media(max-width:900px){.sec{padding:56px 24px;}.two-col,.two-col.rev{flex-direction:column;gap:36px;}.col-img{width:100%;flex:unset;}.three-col{grid-template-columns:1fr;}.pg-hero-inner{padding:60px 24px;}.service-banner{padding:50px 24px;}}
`;