"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ContactFormSection from "@/components/pages/ContactFormSection";


const S = `
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
    .center-head{text-align:center;max-width:720px;margin:0 auto 40px;position:relative;z-index:2;}
    .badge{display:inline-block;background:rgba(245,124,21,0.10);border:1px solid rgba(245,124,21,0.22);color:#f57c15;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:5px 14px;border-radius:20px;margin-bottom:14px;}
    .hdg{font-family:Oswald,Arial,sans-serif;font-size:clamp(1.5rem,2.8vw,2.8rem);font-weight:700;text-transform:uppercase;letter-spacing:1px;line-height:1.15;margin-bottom:14px;}
    .hdg.white{color:#fff;}
    .hdg.dark{color:#111;}
    .odiv{width:48px;height:3px;background:linear-gradient(90deg,#f57c15,#ffb347);border-radius:3px;margin-bottom:20px;}
    .odiv.mx{margin:0 auto 20px;}
    .para{font-size:14.5px;line-height:1.88;margin-bottom:14px;}
    .para.muted{color:rgba(255,255,255,0.55);}
    .para.dk{color:#555;}
    .light-card{background:#fff;border:1.5px solid #f0f0f0;border-radius:18px;padding:32px 24px;text-align:center;position:relative;overflow:hidden;transition:transform 0.28s,box-shadow 0.28s,border-color 0.28s;}
    .light-card:hover{transform:translateY(-6px);box-shadow:0 12px 40px rgba(245,124,21,0.14);border-color:rgba(245,124,21,0.30);}
    .light-card::after{content:"";position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#f57c15,#ffb347);opacity:0;transition:opacity 0.28s;border-radius:0 0 18px 18px;}
    .light-card:hover::after{opacity:1;}
    .lc-icon{font-size:32px;margin-bottom:14px;}
    .lc-title{font-family:Oswald,Arial,sans-serif;font-size:1rem;font-weight:700;color:#111;text-transform:uppercase;margin-bottom:8px;}
    .lc-text{font-size:13px;color:#666;line-height:1.75;margin:0;}
    .img-frame{position:relative;border-radius:24px;overflow:hidden;border:1px solid rgba(245,124,21,0.20);box-shadow:0 0 60px rgba(245,124,21,0.12),0 24px 64px rgba(0,0,0,0.55);}
    .img-frame::after{content:"";position:absolute;inset:0;background:linear-gradient(135deg,rgba(245,124,21,0.06) 0%,transparent 55%);pointer-events:none;}
    .c-tl,.c-br{position:absolute;width:56px;height:56px;z-index:2;display:block;}
    .c-tl{top:-1px;left:-1px;border-top:3px solid #f57c15;border-left:3px solid #f57c15;border-radius:24px 0 0 0;}
    .c-br{bottom:-1px;right:-1px;border-bottom:3px solid #f57c15;border-right:3px solid #f57c15;border-radius:0 0 24px 0;}
    .why-row{display:flex;align-items:flex-start;gap:14px;margin-bottom:16px;}
    .why-ck{width:24px;height:24px;border-radius:50%;background:rgba(245,124,21,0.15);border:1px solid rgba(245,124,21,0.35);display:flex;align-items:center;justify-content:center;font-size:10px;color:#f57c15;font-weight:700;flex-shrink:0;margin-top:2px;}
    .why-t{font-size:14px;font-weight:700;color:#fff;display:block;margin-bottom:3px;}
    .why-d{font-size:13px;color:rgba(255,255,255,0.52);line-height:1.7;margin:0;}
    .service-banner{background:#f57c15;padding:60px;text-align:center;position:relative;overflow:hidden;}
    .service-banner::before{content:"";position:absolute;top:-60px;left:50%;transform:translateX(-50%);width:400px;height:300px;border-radius:50%;background:rgba(255,255,255,0.08);pointer-events:none;}
    .sb-h2{font-family:Oswald,Arial,sans-serif;font-size:clamp(1.5rem,2.5vw,2.5rem);font-weight:900;color:#fff;text-transform:uppercase;letter-spacing:1px;margin-bottom:16px;position:relative;z-index:1;}
    .sb-p{font-size:14.5px;color:rgba(255,255,255,0.85);max-width:600px;margin:0 auto 28px;line-height:1.8;position:relative;z-index:1;}
    .sb-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative;z-index:1;}
    .btn-white{background:#fff;color:#f57c15;border:none;padding:13px 32px;border-radius:6px;font-size:13px;font-weight:700;cursor:pointer;font-family:Raleway,Arial,sans-serif;}
    .btn-dark-o{background:#111;color:#fff;border:1px solid rgba(255,255,255,0.20);padding:13px 32px;border-radius:6px;font-size:13px;font-weight:700;cursor:pointer;font-family:Raleway,Arial,sans-serif;}
    @media(max-width:900px){.sec{padding:56px 24px;}.two-col,.two-col.rev{flex-direction:column;gap:36px;}.col-img{width:100%;flex:unset;}.three-col{grid-template-columns:1fr;}.pg-hero-inner{padding:60px 24px;}.service-banner{padding:50px 24px;}}
`;

export default function Page() {
    return (
        <>
            <Navbar />

            {/* 1 — HERO: DARK */}
            <section className="pg-hero">
                <div className="pg-hero-bg">
                    <Image src="/images/hero.jpg" alt="Ghostwriting Services" fill priority style={{ objectFit: "cover" }} />
                    <div className="pg-overlay" />
                </div>
                <div className="pg-hero-inner">
                    <p className="pg-crumb">Home / Services / Ghostwriting</p>
                    <h1 className="pg-h1">Ghostwriting Services</h1>
                    <p className="pg-hero-sub">Your Story, Your Voice — Written By Experts</p>
                </div>
            </section>

            {/* 2 — OVERVIEW: LIGHT */}
            <section className="sec light">
                <div className="two-col">
                    <div className="col-text">
                        <span className="badge">Ghostwriting</span>
                        <h2 className="hdg dark">Professional Ghostwriting That Captures Your Voice</h2>
                        <div className="odiv" />
                        <p className="para dk">Our team of professional ghostwriters specializes in capturing your unique voice and transforming your ideas into a compelling, polished manuscript. Whether you have a full outline or just a general idea, we work with you every step of the way.</p>
                        <p className="para dk">From chapter-by-chapter collaboration to full manuscript development, our ghostwriters are experienced across all genres — fiction, non-fiction, memoir, business, self-help, and more. Every draft goes through multiple revision rounds until it sounds exactly like you.</p>
                        <div style={{ display: "flex", gap: "12px", marginTop: "12px", flexWrap: "wrap" }}>
                            <button style={{ background: "#f57c15", color: "#fff", border: "none", padding: "13px 28px", borderRadius: "6px", fontSize: "13px", fontWeight: 700, cursor: "pointer", fontFamily: "Raleway,Arial,sans-serif", boxShadow: "0 4px 18px rgba(245,124,21,0.35)" }}>Get Started</button>
                            <button style={{ background: "transparent", color: "#f57c15", border: "1.5px solid #f57c15", padding: "13px 28px", borderRadius: "6px", fontSize: "13px", fontWeight: 700, cursor: "pointer", fontFamily: "Raleway,Arial,sans-serif" }}>Live Chat</button>
                        </div>
                    </div>
                    <div className="col-img">
                        <div className="img-frame">
                            <Image src="/images/home-img-1.webp" alt="Ghostwriting Services" width={520} height={460} style={{ width: "100%", height: "auto", display: "block" }} />
                            <span className="c-tl" /><span className="c-br" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 — WHY US: DARK */}
            <section className="sec dark">
                <div className="sec-grid" /><div className="blob tl" />
                <div className="two-col rev">
                    <div className="col-img">
                        <Image src="/images/give-story-img.webp" alt="Why Choose Us" width={500} height={460} style={{ width: "100%", height: "auto", borderRadius: "20px", display: "block", filter: "drop-shadow(0 16px 48px rgba(0,0,0,0.6))" }} />
                    </div>
                    <div className="col-text">
                        <span className="badge">Why Choose Us</span>
                        <h2 className="hdg white">Why Authors Choose Us</h2>
                        <div className="odiv" />
                        <div className="why-row"><span className="why-ck">&#10003;</span><div><strong className="why-t">100% Confidentiality</strong><p className="why-d">Your name goes on the cover. We never disclose authorship arrangements.</p></div></div>
                        <div className="why-row"><span className="why-ck">&#10003;</span><div><strong className="why-t">Voice Matching</strong><p className="why-d">We study your style to write in your authentic voice.</p></div></div>
                        <div className="why-row"><span className="why-ck">&#10003;</span><div><strong className="why-t">Any Genre</strong><p className="why-d">Fiction, memoir, business, self-help, children's books — we cover them all.</p></div></div>
                        <div className="why-row"><span className="why-ck">&#10003;</span><div><strong className="why-t">Structured Timeline</strong><p className="why-d">Chapter drafts delivered on schedule so you always know progress.</p></div></div>
                        <div className="why-row"><span className="why-ck">&#10003;</span><div><strong className="why-t">Unlimited Revisions</strong><p className="why-d">We revise until the manuscript feels completely and authentically yours.</p></div></div>
                    </div>
                </div>
            </section>

            {/* 4 — INCLUDED: LIGHT */}
            <section className="sec light">
                <div className="center-head">
                    <span className="badge">What&apos;s Included</span>
                    <h2 className="hdg dark">Everything Included In This Service</h2>
                    <div className="odiv mx" />
                </div>
                <div className="three-col">
                    <div className="light-card"><div className="lc-icon">✍️</div><h3 className="lc-title">Fiction Ghostwriting</h3><p className="lc-text">Novels, short stories, and literary fiction written in your voice.</p></div>
                    <div className="light-card"><div className="lc-icon">📝</div><h3 className="lc-title">Memoir & Biography</h3><p className="lc-text">Life stories capturing your authentic experiences and journey.</p></div>
                    <div className="light-card"><div className="lc-icon">💼</div><h3 className="lc-title">Business Books</h3><p className="lc-text">Authority-building books positioning you as an industry expert.</p></div>
                    <div className="light-card"><div className="lc-icon">🧒</div><h3 className="lc-title">Children's Books</h3><p className="lc-text">Engaging, age-appropriate stories with the right tone and vocabulary.</p></div>
                    <div className="light-card"><div className="lc-icon">💪</div><h3 className="lc-title">Self-Help Books</h3><p className="lc-text">Motivational books that inspire and guide your target readers.</p></div>
                    <div className="light-card"><div className="lc-icon">🎓</div><h3 className="lc-title">Academic Writing</h3><p className="lc-text">Research-backed educational books written to publication standards.</p></div>
                </div>
            </section>

            {/* 5 — PROCESS: DARK */}
            <section className="sec dark">
                <div className="sec-grid" /><div className="blob br" />
                <div className="center-head">
                    <span className="badge">How It Works</span>
                    <h2 className="hdg white">Our Step-By-Step Process</h2>
                    <div className="odiv mx" />
                </div>
                <div className="process-row">
                    <div className="p-step"><div className="p-num">01</div><div className="p-title">Discovery Call</div><p className="p-desc">We learn about your story, goals, and vision in a free consultation.</p></div>
                    <div className="p-step"><div className="p-num">02</div><div className="p-title">Outline & Plan</div><p className="p-desc">We create a detailed chapter-by-chapter outline for your approval.</p></div>
                    <div className="p-step"><div className="p-num">03</div><div className="p-title">Writing Drafts</div><p className="p-desc">Chapters delivered on schedule for your review and feedback.</p></div>
                    <div className="p-step"><div className="p-num">04</div><div className="p-title">Revisions</div><p className="p-desc">We revise each chapter until it sounds exactly like you.</p></div>
                    <div className="p-step"><div className="p-num">05</div><div className="p-title">Final Manuscript</div><p className="p-desc">A polished, publish-ready manuscript in your preferred format.</p></div>
                </div>
            </section>

            {/* 6 — CTA: ORANGE */}
            <section className="service-banner">
                <h2 className="sb-h2">Ready To See Your Story In Print?</h2>
                <p className="sb-p">Get a free consultation and find out how our ghostwriting team can bring your book to life.</p>
                <div className="sb-btns">
                    <button className="btn-white">Get Started</button>
                    <button className="btn-dark-o">Free Consultation</button>
                </div>
            </section>

            <ContactFormSection />
            <FooterSection />
            <style jsx global>{S}</style>
            <style jsx>{`
                .process-row { display:flex; gap:20px; position:relative; z-index:2; max-width:1200px; margin:0 auto; flex-wrap:wrap; }
                .p-step { flex:1; min-width:160px; background:rgba(255,255,255,0.04); border:1px solid rgba(245,124,21,0.18); border-radius:16px; padding:28px 20px; text-align:center; }
                .p-num { font-family:Oswald,Arial,sans-serif; font-size:2rem; font-weight:900; color:#f57c15; line-height:1; margin-bottom:12px; }
                .p-title { font-family:Oswald,Arial,sans-serif; font-size:0.9rem; font-weight:700; color:#fff; text-transform:uppercase; margin-bottom:8px; }
                .p-desc { font-size:13px; color:rgba(255,255,255,0.50); line-height:1.7; margin:0; }
            `}</style>
        </>
    );
}