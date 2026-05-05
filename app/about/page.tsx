"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ContactFormSection from "@/components/pages/ContactFormSection";


export default function AboutPage() {
    return (
        <>
            <Navbar />

            {/* 1 — HERO: DARK */}
            <section className="pg-hero">
                <div className="pg-hero-bg">
                    <Image src="/images/hero.jpg" alt="About" fill priority style={{ objectFit: "cover" }} />
                    <div className="pg-overlay" />
                </div>
                <div className="pg-hero-inner">
                    <p className="pg-crumb">Home / About</p>
                    <h1 className="pg-h1">About Us</h1>
                    <p className="pg-hero-sub">Your Trusted Book Publishing Partner Since Day One</p>
                </div>
            </section>

            {/* 2 — WHO WE ARE: DARK */}
            <section className="sec dark">
                <div className="sec-grid" /><div className="blob tl" />
                <div className="two-col">
                    <div className="col-text">
                        <span className="badge">Who We Are</span>
                        <h2 className="hdg white">We Are More Than A Publishing Company</h2>
                        <div className="odiv" />
                        <p className="para muted">Authors Book Publishing is a full-service book publishing company based in New York, dedicated to helping authors bring their stories to life. We offer end-to-end solutions — from ghostwriting and manuscript editing to cover design, formatting, global distribution, and marketing campaigns.</p>
                        <p className="para muted">Our team of experienced editors, designers, and publishing specialists work closely with every author to ensure their vision is perfectly executed. We believe every story deserves to be told, and every author deserves a partner who truly cares about their success.</p>
                        <div className="stats-row">
                            {[["500+", "Books Published"], ["98%", "Happy Authors"], ["50+", "Countries"]].map(([n, l], i) => (
                                <div key={l} className="stat-wrap">
                                    {i > 0 && <div className="stat-sep" />}
                                    <div className="stat-item">
                                        <span className="stat-n">{n}</span>
                                        <span className="stat-l">{l}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-img">
                        <div className="img-frame">
                            <Image src="/images/home-img-1.webp" alt="About" width={520} height={480} style={{ width: "100%", height: "auto", display: "block" }} />
                            <span className="c-tl" /><span className="c-br" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 — MISSION/VISION: LIGHT */}
            <section className="sec light">
                <div className="center-head">
                    <span className="badge">Our Foundation</span>
                    <h2 className="hdg dark">Mission, Vision & Values</h2>
                    <div className="odiv mx" />
                </div>
                <div className="three-col">
                    {[
                        { icon: "🎯", t: "Our Mission", p: "To empower authors worldwide by providing professional, affordable, and transparent publishing services that transform manuscripts into polished, globally distributed books that readers love and remember." },
                        { icon: "🔭", t: "Our Vision", p: "To become the world's most trusted book publishing partner — where every author finds the support, expertise, and platform they need to share their story with the world." },
                        { icon: "💎", t: "Our Values", p: "Quality, integrity, and author-first thinking drive everything we do. We believe in honest communication, creative excellence, and building long-term relationships with every author." },
                    ].map(c => (
                        <div className="light-card" key={c.t}>
                            <div className="lc-icon">{c.icon}</div>
                            <h3 className="lc-title">{c.t}</h3>
                            <p className="lc-text">{c.p}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4 — WHY CHOOSE US: DARK */}
            <section className="sec dark">
                <div className="sec-grid" /><div className="blob br" />
                <div className="two-col rev">
                    <div className="col-img">
                        <Image src="/images/cta-sec-img-1.webp" alt="Why Choose Us" width={520} height={460} style={{ width: "100%", height: "auto", borderRadius: "20px", display: "block", filter: "drop-shadow(0 16px 48px rgba(0,0,0,0.6))" }} />
                    </div>
                    <div className="col-text">
                        <span className="badge">Why Choose Us</span>
                        <h2 className="hdg white">The Authors Book Publishing Difference</h2>
                        <div className="odiv" />
                        {[
                            { t: "End-to-End Service", d: "From first draft to final distribution — everything under one roof so you never juggle multiple vendors." },
                            { t: "Expert Team", d: "Our editors, designers, and marketers bring decades of publishing industry experience to every project." },
                            { t: "Global Reach", d: "We distribute to 400+ stores in 100+ countries including Amazon, Apple Books, Kobo, and IngramSpark." },
                            { t: "Transparent Pricing", d: "No hidden fees. No surprises. You know exactly what you're paying for before we begin." },
                            { t: "You Keep Your Rights", d: "You retain full ownership. We simply help you get published and earning royalties." },
                        ].map(item => (
                            <div className="why-row" key={item.t}>
                                <span className="why-ck">✔</span>
                                <div>
                                    <strong className="why-t">{item.t}</strong>
                                    <p className="why-d">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5 — TEAM: LIGHT */}
            <section className="sec light">
                <div className="center-head">
                    <span className="badge">Our Team</span>
                    <h2 className="hdg dark">The People Behind Your Book</h2>
                    <div className="odiv mx" />
                    <p className="para dk center-p">A passionate team of editors, designers, marketers, and publishing specialists committed to making your book the best it can be.</p>
                </div>
                <div className="four-col">
                    {[
                        { name: "James Whitfield", role: "Head of Publishing", img: "/images/Testimonials/pic-01.jpg" },
                        { name: "Sarah Mitchell", role: "Lead Editor", img: "/images/Testimonials/pic-05.jpg" },
                        { name: "David Perez", role: "Cover Design Director", img: "/images/Testimonials/pic-02.jpg" },
                        { name: "Vicki Baker", role: "Marketing Strategist", img: "/images/Testimonials/pic-03.jpg" },
                    ].map(m => (
                        <div className="team-card" key={m.name}>
                            <div className="team-img"><Image src={m.img} alt={m.name} width={100} height={100} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div>
                            <h4 className="team-name">{m.name}</h4>
                            <p className="team-role">{m.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            <ContactFormSection />
            <FooterSection />
            <style jsx global>{SHARED_STYLES}</style>
            <style jsx>{`
                .stats-row { display:flex; align-items:center; margin-top:28px; flex-wrap:wrap; }
                .stat-wrap { display:flex; align-items:center; }
                .stat-item { display:flex; flex-direction:column; gap:4px; }
                .stat-n { font-family:Oswald,Arial,sans-serif; font-size:2rem; font-weight:700; color:#f57c15; line-height:1; }
                .stat-l { font-size:11px; color:rgba(255,255,255,0.45); text-transform:uppercase; letter-spacing:0.5px; }
                .stat-sep { width:1px; height:40px; background:rgba(255,255,255,0.12); margin:0 24px; }
                .why-row { display:flex; align-items:flex-start; gap:14px; margin-bottom:18px; }
                .why-ck { width:26px; height:26px; border-radius:50%; background:rgba(245,124,21,0.15); border:1px solid rgba(245,124,21,0.35); display:flex; align-items:center; justify-content:center; font-size:11px; color:#f57c15; font-weight:700; flex-shrink:0; margin-top:2px; }
                .why-t { font-size:15px; font-weight:700; color:#fff; display:block; margin-bottom:4px; }
                .why-d { font-size:13.5px; color:rgba(255,255,255,0.52); line-height:1.7; margin:0; }
                .team-card { background:#fff; border-radius:16px; padding:28px 20px; text-align:center; border:1.5px solid #f0f0f0; transition:transform 0.28s,box-shadow 0.28s,border-color 0.28s; }
                .team-card:hover { transform:translateY(-6px); box-shadow:0 12px 32px rgba(245,124,21,0.12); border-color:rgba(245,124,21,0.28); }
                .team-img { width:100px; height:100px; border-radius:50%; overflow:hidden; margin:0 auto 16px; border:3px solid rgba(245,124,21,0.30); box-shadow:0 0 24px rgba(245,124,21,0.15); }
                .team-name { font-family:Oswald,Arial,sans-serif; font-size:1rem; font-weight:700; color:#111; text-transform:uppercase; margin-bottom:6px; }
                .team-role { font-size:12.5px; color:#f57c15; font-weight:600; letter-spacing:0.3px; margin:0; }
            `}</style>
        </>
    );
}

const SHARED_STYLES = `
    .pg-hero { position:relative; min-height:380px; display:flex; align-items:center; overflow:hidden; }
    .pg-hero-bg { position:absolute; inset:0; z-index:0; }
    .pg-overlay { position:absolute; inset:0; background:rgba(0,0,0,0.80); z-index:1; }
    .pg-hero-inner { position:relative; z-index:2; padding:80px 60px; max-width:1300px; margin:0 auto; width:100%; }
    .pg-crumb { font-size:12px; color:rgba(255,255,255,0.45); margin-bottom:12px; letter-spacing:0.5px; font-family:Raleway,Arial,sans-serif; }
    .pg-h1 { font-family:Oswald,Arial,sans-serif; font-size:clamp(2.5rem,5vw,5rem); font-weight:900; color:#fff; text-transform:uppercase; letter-spacing:2px; line-height:1; margin-bottom:14px; }
    .pg-hero-sub { font-size:15px; color:rgba(255,255,255,0.60); font-family:Raleway,Arial,sans-serif; }

    .sec { position:relative; padding:80px 60px; overflow:hidden; font-family:Raleway,Arial,sans-serif; }
    .sec.dark { background:#1a1a1a; }
    .sec.light { background:#f5f5f0; }
    .sec-grid { position:absolute; inset:0; background-image:linear-gradient(rgba(245,124,21,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(245,124,21,0.04) 1px,transparent 1px); background-size:48px 48px; pointer-events:none; z-index:0; }
    .blob { position:absolute; border-radius:50%; pointer-events:none; z-index:0; }
    .blob.tl { top:-100px; left:-80px; width:420px; height:420px; background:radial-gradient(circle,rgba(245,124,21,0.14) 0%,transparent 65%); }
    .blob.br { bottom:-80px; right:-60px; width:360px; height:360px; background:radial-gradient(circle,rgba(245,124,21,0.10) 0%,transparent 65%); }

    .two-col { display:flex; align-items:center; gap:64px; position:relative; z-index:2; max-width:1200px; margin:0 auto; }
    .two-col.rev { flex-direction:row-reverse; }
    .col-text { flex:1; min-width:0; }
    .col-img { flex:0 0 44%; }
    .three-col { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; position:relative; z-index:2; max-width:1200px; margin:0 auto; }
    .four-col { display:grid; grid-template-columns:repeat(4,1fr); gap:24px; max-width:1200px; margin:0 auto; }
    .center-head { text-align:center; max-width:700px; margin:0 auto 40px; position:relative; z-index:2; }
    .center-p { max-width:600px; margin:0 auto; }

    .badge { display:inline-block; background:rgba(245,124,21,0.10); border:1px solid rgba(245,124,21,0.22); color:#f57c15; font-size:11px; font-weight:700; letter-spacing:1px; text-transform:uppercase; padding:5px 14px; border-radius:20px; margin-bottom:14px; }
    .hdg { font-family:Oswald,Arial,sans-serif; font-size:clamp(1.5rem,2.8vw,2.8rem); font-weight:700; text-transform:uppercase; letter-spacing:1px; line-height:1.15; margin-bottom:14px; }
    .hdg.white { color:#fff; }
    .hdg.dark { color:#111; }
    .odiv { width:48px; height:3px; background:linear-gradient(90deg,#f57c15,#ffb347); border-radius:3px; margin-bottom:20px; }
    .odiv.mx { margin:0 auto 20px; }
    .para { font-size:14.5px; line-height:1.88; margin-bottom:14px; }
    .para.muted { color:rgba(255,255,255,0.55); }
    .para.dk { color:#555; }

    .img-frame { position:relative; border-radius:24px; overflow:hidden; border:1px solid rgba(245,124,21,0.20); box-shadow:0 0 60px rgba(245,124,21,0.12),0 24px 64px rgba(0,0,0,0.55); }
    .img-frame::after { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(245,124,21,0.06) 0%,transparent 55%); pointer-events:none; }
    .c-tl,.c-br { position:absolute; width:56px; height:56px; z-index:2; display:block; }
    .c-tl { top:-1px; left:-1px; border-top:3px solid #f57c15; border-left:3px solid #f57c15; border-radius:24px 0 0 0; }
    .c-br { bottom:-1px; right:-1px; border-bottom:3px solid #f57c15; border-right:3px solid #f57c15; border-radius:0 0 24px 0; }

    .light-card { background:#fff; border:1.5px solid #f0f0f0; border-radius:18px; padding:36px 28px; text-align:center; position:relative; overflow:hidden; transition:transform 0.28s,box-shadow 0.28s,border-color 0.28s; }
    .light-card:hover { transform:translateY(-6px); box-shadow:0 12px 40px rgba(245,124,21,0.14); border-color:rgba(245,124,21,0.30); }
    .light-card::after { content:''; position:absolute; bottom:0; left:0; right:0; height:3px; background:linear-gradient(90deg,#f57c15,#ffb347); opacity:0; transition:opacity 0.28s; border-radius:0 0 18px 18px; }
    .light-card:hover::after { opacity:1; }
    .lc-icon { font-size:36px; margin-bottom:16px; }
    .lc-title { font-family:Oswald,Arial,sans-serif; font-size:1.1rem; font-weight:700; color:#111; text-transform:uppercase; margin-bottom:10px; }
    .lc-text { font-size:14px; color:#666; line-height:1.8; margin:0; }

    .dark-card { background:rgba(255,255,255,0.04); backdrop-filter:blur(12px); border:1px solid rgba(245,124,21,0.18); border-radius:18px; padding:32px 24px; text-align:center; transition:transform 0.28s,box-shadow 0.28s,border-color 0.28s; position:relative; overflow:hidden; }
    .dark-card::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,#f57c15,transparent); opacity:0; transition:opacity 0.3s; }
    .dark-card:hover { transform:translateY(-6px); box-shadow:0 16px 48px rgba(245,124,21,0.18); border-color:rgba(245,124,21,0.38); }
    .dark-card:hover::before { opacity:1; }
    .dc-icon { width:64px; height:64px; border-radius:14px; background:rgba(245,124,21,0.10); border:1px solid rgba(245,124,21,0.24); display:flex; align-items:center; justify-content:center; margin:0 auto 18px; font-size:26px; box-shadow:0 0 20px rgba(245,124,21,0.15); }
    .dc-title { font-family:Oswald,Arial,sans-serif; font-size:1rem; font-weight:700; color:#fff; text-transform:uppercase; margin-bottom:10px; }
    .dc-text { font-size:13px; color:rgba(255,255,255,0.50); line-height:1.8; margin:0; }

    .service-banner { background:#f57c15; padding:60px; text-align:center; position:relative; overflow:hidden; }
    .service-banner::before { content:''; position:absolute; top:-60px; left:50%; transform:translateX(-50%); width:400px; height:300px; border-radius:50%; background:rgba(255,255,255,0.08); pointer-events:none; }
    .sb-h2 { font-family:Oswald,Arial,sans-serif; font-size:clamp(1.5rem,2.5vw,2.5rem); font-weight:900; color:#fff; text-transform:uppercase; letter-spacing:1px; margin-bottom:16px; }
    .sb-p { font-size:14.5px; color:rgba(255,255,255,0.85); max-width:600px; margin:0 auto 28px; line-height:1.8; }
    .sb-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
    .btn-white { background:#fff; color:#f57c15; border:none; padding:13px 32px; border-radius:6px; font-size:13px; font-weight:700; cursor:pointer; font-family:Raleway,Arial,sans-serif; transition:background 0.2s,box-shadow 0.2s; box-shadow:0 4px 18px rgba(0,0,0,0.15); }
    .btn-white:hover { background:#f5f5f0; }
    .btn-dark-o { background:#111; color:#fff; border:1px solid rgba(255,255,255,0.20); padding:13px 32px; border-radius:6px; font-size:13px; font-weight:700; cursor:pointer; font-family:Raleway,Arial,sans-serif; transition:background 0.2s; }
    .btn-dark-o:hover { background:#333; }

    @media (max-width: 900px) {
        .sec { padding:56px 24px; }
        .two-col,.two-col.rev { flex-direction:column; gap:36px; }
        .col-img { width:100%; flex:unset; }
        .three-col { grid-template-columns:1fr; }
        .four-col { grid-template-columns:repeat(2,1fr); }
        .pg-hero-inner { padding:60px 24px; }
        .service-banner { padding:50px 24px; }
    }
    @media (max-width: 540px) {
        .four-col { grid-template-columns:1fr; }
    }
`;