"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ContactFormSection from "@/components/pages/ContactFormSection";
import TestimonialsSection2 from "@/components/pages/TestimonialSection";


const featured = [
    { name: "Rene B. Brown", role: "Fiction Author", img: "/images/Testimonials/pic-01.jpg", review: "Authors Book Publishing brought my manuscript to life. Their editing team understood my voice and the cover design was beyond what I imagined. My book went live on Amazon, Apple Books, and Kobo within 3 weeks.", rating: 5 },
    { name: "James D. Perez", role: "Business Writer", img: "/images/Testimonials/pic-02.jpg", review: "After struggling with self-publishing for two years, I found Authors Book Publishing. They handled everything — formatting, distribution, and marketing. My book hit #1 in its category on Amazon within the first month.", rating: 5 },
    { name: "Vicki R. Baker", role: "Memoir Author", img: "/images/Testimonials/pic-03.jpg", review: "The ghostwriting team captured my story better than I ever could have written it myself. They delivered chapter drafts every 2 weeks, and the final manuscript was absolutely perfect. Highly recommended.", rating: 5 },
];

const logos = [
    { src: "/images/platforms/amazon.png", alt: "Amazon" },
    { src: "/images/platforms/apple-books.png", alt: "Apple Books" },
    { src: "/images/platforms/rakuten-kobo.png", alt: "Kobo" },
    { src: "/images/platforms/barnes-noble.png", alt: "Barnes & Noble" },
];

export default function TestimonialsPage() {
    return (
        <>
            <Navbar />

            {/* 1 — HERO: DARK */}
            <section className="pg-hero">
                <div className="pg-hero-bg">
                    <Image src="/images/hero.jpg" alt="Testimonials" fill priority style={{ objectFit: "cover" }} />
                    <div className="pg-overlay" />
                </div>
                <div className="pg-hero-inner">
                    <p className="pg-crumb">Home / Testimonials</p>
                    <h1 className="pg-h1">Testimonials</h1>
                    <p className="pg-hero-sub">Real Authors. Real Stories. Real Results.</p>
                </div>
            </section>

            {/* 2 — STATS: LIGHT */}
            <section className="sec light">
                <div className="four-col" style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    {[["500+", "Authors Served"], ["98%", "Satisfaction Rate"], ["4.9★", "Average Rating"], ["50+", "Countries"]].map(([n, l]) => (
                        <div key={l} style={{ textAlign: "center", padding: "20px" }}>
                            <span style={{ fontFamily: "Oswald,Arial,sans-serif", fontSize: "2.6rem", fontWeight: 900, color: "#f57c15", display: "block", lineHeight: 1, marginBottom: "8px" }}>{n}</span>
                            <span style={{ fontSize: "13px", color: "#555", textTransform: "uppercase", letterSpacing: "0.5px", fontWeight: 600 }}>{l}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3 — FEATURED TESTIMONIALS: DARK */}
            <section className="sec dark">
                <div className="sec-grid" /><div className="blob tl" />
                <div className="center-head">
                    <span className="badge">Featured Reviews</span>
                    <h2 className="hdg white">What Our Authors Say</h2>
                    <div className="odiv mx" />
                </div>
                <div className="three-col">
                    {featured.map(t => (
                        <div className="dark-card" key={t.name}>
                            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "18px" }}>
                                <div style={{ width: "56px", height: "56px", borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(245,124,21,0.35)", flexShrink: 0 }}>
                                    <Image src={t.img} alt={t.name} width={56} height={56} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                                </div>
                                <div>
                                    <div style={{ fontFamily: "Oswald,Arial,sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#fff", textTransform: "uppercase" }}>{t.name}</div>
                                    <div style={{ fontSize: "12px", color: "#f57c15", fontWeight: 600 }}>{t.role}</div>
                                    <div style={{ color: "#f5a623", fontSize: "13px", letterSpacing: "2px" }}>{"★".repeat(t.rating)}</div>
                                </div>
                            </div>
                            <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.60)", lineHeight: "1.8", margin: 0 }}>"{t.review}"</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4 — SWIPER TESTIMONIALS: LIGHT */}
            <section className="sec light" style={{ padding: "80px 0" }}>
                <div className="center-head" style={{ padding: "0 60px" }}>
                    <span className="badge">All Reviews</span>
                    <h2 className="hdg dark">More Author Experiences</h2>
                    <div className="odiv mx" />
                </div>
                <TestimonialsSection2 />
            </section>

            {/* 5 — PLATFORMS: DARK */}
            <section className="sec dark">
                <div className="sec-grid" /><div className="blob br" />
                <div className="center-head">
                    <span className="badge">Where We Publish</span>
                    <h2 className="hdg white">Our Authors&apos; Books Are Available On</h2>
                    <div className="odiv mx" />
                    <p className="para muted">We distribute to 400+ stores globally so your book reaches every reader, everywhere.</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", position: "relative", zIndex: 2 }}>
                    {["📖 Amazon Kindle", "🍎 Apple Books", "📚 Kobo", "🌐 IngramSpark", "📕 Barnes & Noble", "🔖 Scribd"].map(p => (
                        <div key={p} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(245,124,21,0.20)", borderRadius: "10px", padding: "14px 24px", color: "#f57c15", fontWeight: 700, fontSize: "13px", letterSpacing: "0.3px" }}>{p}</div>
                    ))}
                </div>
            </section>

            {/* 6 — CTA: ORANGE */}
            <section className="service-banner">
                <h2 className="sb-h2">Join 500+ Happy Authors Today</h2>
                <p className="sb-p">Get a free consultation and discover how we can help you publish your book professionally and distribute it worldwide.</p>
                <div className="sb-btns">
                    <button className="btn-white">Get Started</button>
                    <button className="btn-dark-o">Live Chat</button>
                </div>
            </section>

            <ContactFormSection />
            <FooterSection />
            <style jsx global>{SHARED_STYLES}</style>
        </>
    );
}

const SHARED_STYLES = `
    .pg-hero{position:relative;min-height:380px;display:flex;align-items:center;overflow:hidden;}
    .pg-hero-bg{position:absolute;inset:0;z-index:0;}
    .pg-overlay{position:absolute;inset:0;background:rgba(0,0,0,0.80);z-index:1;}
    .pg-hero-inner{position:relative;z-index:2;padding:80px 60px;max-width:1300px;margin:0 auto;width:100%;}
    .pg-crumb{font-size:12px;color:rgba(255,255,255,0.45);margin-bottom:12px;letter-spacing:0.5px;font-family:Raleway,Arial,sans-serif;}
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
    .four-col{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;}
    .center-head{text-align:center;max-width:700px;margin:0 auto 40px;position:relative;z-index:2;}
    .center-p{max-width:600px;margin:0 auto;}
    .badge{display:inline-block;background:rgba(245,124,21,0.10);border:1px solid rgba(245,124,21,0.22);color:#f57c15;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:5px 14px;border-radius:20px;margin-bottom:14px;}
    .hdg{font-family:Oswald,Arial,sans-serif;font-size:clamp(1.5rem,2.8vw,2.8rem);font-weight:700;text-transform:uppercase;letter-spacing:1px;line-height:1.15;margin-bottom:14px;}
    .hdg.white{color:#fff;}
    .hdg.dark{color:#111;}
    .odiv{width:48px;height:3px;background:linear-gradient(90deg,#f57c15,#ffb347);border-radius:3px;margin-bottom:20px;}
    .odiv.mx{margin:0 auto 20px;}
    .para{font-size:14.5px;line-height:1.88;margin-bottom:14px;}
    .para.muted{color:rgba(255,255,255,0.55);}
    .para.dk{color:#555;}
    .dark-card{background:rgba(255,255,255,0.04);backdrop-filter:blur(12px);border:1px solid rgba(245,124,21,0.18);border-radius:18px;padding:32px 24px;transition:transform 0.28s,box-shadow 0.28s,border-color 0.28s;position:relative;overflow:hidden;}
    .dark-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,#f57c15,transparent);opacity:0;transition:opacity 0.3s;}
    .dark-card:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(245,124,21,0.18);border-color:rgba(245,124,21,0.38);}
    .dark-card:hover::before{opacity:1;}
    .service-banner{background:#f57c15;padding:60px;text-align:center;position:relative;overflow:hidden;}
    .service-banner::before{content:'';position:absolute;top:-60px;left:50%;transform:translateX(-50%);width:400px;height:300px;border-radius:50%;background:rgba(255,255,255,0.08);pointer-events:none;}
    .sb-h2{font-family:Oswald,Arial,sans-serif;font-size:clamp(1.5rem,2.5vw,2.5rem);font-weight:900;color:#fff;text-transform:uppercase;letter-spacing:1px;margin-bottom:16px;position:relative;z-index:1;}
    .sb-p{font-size:14.5px;color:rgba(255,255,255,0.85);max-width:600px;margin:0 auto 28px;line-height:1.8;position:relative;z-index:1;}
    .sb-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative;z-index:1;}
    .btn-white{background:#fff;color:#f57c15;border:none;padding:13px 32px;border-radius:6px;font-size:13px;font-weight:700;cursor:pointer;font-family:Raleway,Arial,sans-serif;transition:background 0.2s;}
    .btn-white:hover{background:#f5f5f0;}
    .btn-dark-o{background:#111;color:#fff;border:1px solid rgba(255,255,255,0.20);padding:13px 32px;border-radius:6px;font-size:13px;font-weight:700;cursor:pointer;font-family:Raleway,Arial,sans-serif;transition:background 0.2s;}
    .btn-dark-o:hover{background:#333;}
    .light-card{background:#fff;border:1.5px solid #f0f0f0;border-radius:18px;padding:36px 28px;text-align:center;position:relative;overflow:hidden;transition:transform 0.28s,box-shadow 0.28s,border-color 0.28s;}
    .light-card:hover{transform:translateY(-6px);box-shadow:0 12px 40px rgba(245,124,21,0.14);border-color:rgba(245,124,21,0.30);}
    .light-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#f57c15,#ffb347);opacity:0;transition:opacity 0.28s;border-radius:0 0 18px 18px;}
    .light-card:hover::after{opacity:1;}
    .lc-icon{font-size:36px;margin-bottom:16px;}
    .lc-title{font-family:Oswald,Arial,sans-serif;font-size:1.1rem;font-weight:700;color:#111;text-transform:uppercase;margin-bottom:10px;}
    .lc-text{font-size:14px;color:#666;line-height:1.8;margin:0;}
    @media(max-width:900px){.sec{padding:56px 24px;}.two-col,.two-col.rev{flex-direction:column;gap:36px;}.col-img{width:100%;flex:unset;}.three-col{grid-template-columns:1fr;}.four-col{grid-template-columns:repeat(2,1fr);}.pg-hero-inner{padding:60px 24px;}.service-banner{padding:50px 24px;}}
    @media(max-width:540px){.four-col{grid-template-columns:1fr;}}
`;