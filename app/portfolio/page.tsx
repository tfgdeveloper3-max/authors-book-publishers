"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ContactFormSection from "@/components/pages/ContactFormSection";
import PortfolioSection from "@/components/pages/PortfolioSection";


const genres = ["All", "Fiction", "Non-Fiction", "Children's", "Biography", "Self-Help", "Fantasy", "Poetry"];
const stats = [["500+", "Books Published"], ["50+", "Genres Covered"], ["100+", "Countries Reached"], ["98%", "Author Satisfaction"]];

export default function PortfolioPage() {
    return (
        <>
            <Navbar />

            {/* 1 — HERO: DARK */}
            <section className="pg-hero">
                <div className="pg-hero-bg">
                    <Image src="/images/hero.jpg" alt="Portfolio" fill priority style={{ objectFit: "cover" }} />
                    <div className="pg-overlay" />
                </div>
                <div className="pg-hero-inner">
                    <p className="pg-crumb">Home / Portfolio</p>
                    <h1 className="pg-h1">Our Portfolio</h1>
                    <p className="pg-hero-sub">500+ Published Books Across Every Genre Imaginable</p>
                </div>
            </section>

            {/* 2 — STATS: LIGHT */}
            <section className="sec light">
                <div className="four-col" style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    {stats.map(([n, l]) => (
                        <div className="stat-block" key={l}>
                            <span className="sb-n">{n}</span>
                            <span className="sb-l">{l}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3 — MARQUEE PORTFOLIO: DARK */}
            <section className="sec dark" style={{ padding: "80px 0" }}>
                <div className="sec-grid" />
                <div className="blob tl" />
                <div style={{ position: "relative", zIndex: 2 }}>
                    <div className="center-head" style={{ padding: "0 60px", marginBottom: "32px" }}>
                        <span className="badge">Our Work</span>
                        <h2 className="hdg white">Books We&apos;ve Helped Publish</h2>
                        <div className="odiv mx" />
                        <p className="para muted">Hover over any book to see it up close. Each title represents an author whose story we helped bring to life.</p>
                    </div>
                    <PortfolioSection />
                </div>
            </section>

            {/* 4 — GENRES: LIGHT */}
            <section className="sec light">
                <div className="center-head">
                    <span className="badge">What We Publish</span>
                    <h2 className="hdg dark">We Publish Every Genre</h2>
                    <div className="odiv mx" />
                    <p className="para dk center-p">From heartfelt memoirs to thrilling sci-fi, our team has the expertise to publish any genre to the highest standard.</p>
                </div>
                <div className="genre-grid" style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    {[
                        { icon: "📖", g: "Fiction", d: "Novels, short stories, literary fiction, and contemporary reads." },
                        { icon: "📚", g: "Non-Fiction", d: "Memoirs, self-help, business, and educational titles." },
                        { icon: "🧒", g: "Children's Books", d: "Picture books, middle grade, and young adult titles." },
                        { icon: "🌌", g: "Fantasy & Sci-Fi", d: "World-building, epic fantasy, and science fiction adventures." },
                        { icon: "💪", g: "Self-Help", d: "Motivational, wellness, personal development, and coaching books." },
                        { icon: "🎭", g: "Biography", d: "Life stories, autobiographies, and historical accounts." },
                        { icon: "🍳", g: "Cookbook", d: "Recipe collections, culinary guides, and food memoirs." },
                        { icon: "✍️", g: "Poetry", d: "Collections, anthologies, and spoken word publications." },
                    ].map(c => (
                        <div className="genre-card" key={c.g}>
                            <div className="genre-icon">{c.icon}</div>
                            <h3 className="genre-title">{c.g}</h3>
                            <p className="genre-desc">{c.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5 — CTA BANNER: ORANGE */}
            <section className="service-banner">
                <h2 className="sb-h2">Ready To Add Your Book To Our Portfolio?</h2>
                <p className="sb-p">Join 500+ authors who trusted us to publish their story. Get started today with a free consultation.</p>
                <div className="sb-btns">
                    <button className="btn-white">Get Started</button>
                    <button className="btn-dark-o">Live Chat</button>
                </div>
            </section>

            <ContactFormSection />
            <FooterSection />
            <style jsx global>{SHARED_STYLES}</style>
            <style jsx>{`
                .stat-block { text-align:center; padding:28px 20px; }
                .sb-n { font-family:Oswald,Arial,sans-serif; font-size:2.8rem; font-weight:900; color:#f57c15; display:block; line-height:1; margin-bottom:8px; }
                .sb-l { font-size:13px; color:#555; text-transform:uppercase; letter-spacing:0.5px; font-weight:600; }
                .genre-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
                .genre-card { background:#fff; border:1.5px solid #f0f0f0; border-radius:16px; padding:28px 22px; text-align:center; transition:transform 0.28s,box-shadow 0.28s,border-color 0.28s; }
                .genre-card:hover { transform:translateY(-6px); box-shadow:0 12px 36px rgba(245,124,21,0.14); border-color:rgba(245,124,21,0.30); }
                .genre-icon { font-size:32px; margin-bottom:12px; }
                .genre-title { font-family:Oswald,Arial,sans-serif; font-size:1rem; font-weight:700; color:#111; text-transform:uppercase; margin-bottom:8px; }
                .genre-desc { font-size:13px; color:#777; line-height:1.7; margin:0; }
                @media (max-width: 900px) { .genre-grid { grid-template-columns:repeat(2,1fr); } }
                @media (max-width: 540px) { .genre-grid { grid-template-columns:1fr; } }
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
    .four-col { display:grid; grid-template-columns:repeat(4,1fr); gap:24px; }
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
    .sb-h2 { font-family:Oswald,Arial,sans-serif; font-size:clamp(1.5rem,2.5vw,2.5rem); font-weight:900; color:#fff; text-transform:uppercase; letter-spacing:1px; margin-bottom:16px; position:relative; z-index:1; }
    .sb-p { font-size:14.5px; color:rgba(255,255,255,0.85); max-width:600px; margin:0 auto 28px; line-height:1.8; position:relative; z-index:1; }
    .sb-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; position:relative; z-index:1; }
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
    @media (max-width: 540px) { .four-col { grid-template-columns:1fr; } }
`;