"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";

// ── Data ──
const stats = [
    { value: "1,200+", label: "Books Published" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "100+", label: "Countries Reached" },
    { value: "50+", label: "Industry Awards" },
];

const coreValues = [
    { icon: "✍️", title: "Author-First Approach", desc: "Your vision, our expertise. We craft your narrative without stealing your voice." },
    { icon: "🛡️", title: "Uncompromised Quality", desc: "Rigorous editing and pixel-perfect design that meets global standards." },
    { icon: "🌐", title: "Global Distribution", desc: "Seamless access to 400+ retailers and libraries worldwide." },
    { icon: "🤝", title: "Full Transparency", desc: "Real-time tracking, clear contracts, and no hidden royalty fees." },
];

const journeyPoints = [
    { year: "2015", title: "The Genesis", desc: "Started with a mission to democratize publishing for indie authors." },
    { year: "2018", title: "Going Global", desc: "Expanded distribution to international markets, crossing 500 titles." },
    { year: "2021", title: "Full-Service Hub", desc: "Launched in-house ghostwriting, cinematic trailers, and SEO marketing." },
    { year: "2024", title: "Industry Leaders", desc: "Recognized as a top-tier publishing partner with 1000+ success stories." },
];

const teamMembers = [
    { name: "Sarah Jenkins", role: "Chief Editor", img: "/images/Testimonials/pic-01.jpg" },
    { name: "Michael Torres", role: "Lead Designer", img: "/images/Testimonials/pic-02.jpg" },
    { name: "Emily Chen", role: "Marketing Head", img: "/images/Testimonials/pic-03.jpg" },
    { name: "David Ross", role: "Publishing Director", img: "/images/Testimonials/pic-04.jpg" },
    { name: "Ana Martinez", role: "Ghostwriter Lead", img: "/images/Testimonials/pic-05.jpg" },
    { name: "Chris Taylor", role: "Distribution Manager", img: "/images/Testimonials/pic-06.jpg" },
];

// Animation Variants
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const }
    }),
};

const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { transition: { staggerChildren: 0.2 } },
};

export default function AboutPage() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    // ── 1. SWIPER INITIALIZATION FOR TEAM ──
    useEffect(() => {
        if (!document.querySelector("#swiper-css-about")) {
            const link = document.createElement("link");
            link.id = "swiper-css-about";
            link.rel = "stylesheet";
            link.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
            document.head.appendChild(link);
        }
        const initSwiper = (): void => {
            new (window as any).Swiper(".team-swiper", {
                slidesPerView: 1,
                spaceBetween: 24,
                loop: true,
                speed: 700,
                autoplay: { delay: 3000, disableOnInteraction: false },
                breakpoints: {
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                },
            });
        };
        if (!(window as any).Swiper) {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
            script.onload = initSwiper;
            document.body.appendChild(script);
        } else { initSwiper(); }
    }, []);

    // ── 2. GSAP CUSTOM CURSOR ──
    useEffect(() => {
        gsap.fromTo(".about-page", { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.1 });

        if (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches) {
            const cursor = document.createElement("div");
            cursor.id = "custom-cursor";
            cursor.innerHTML = `<div class="cursor-dot"></div><div class="cursor-ring"></div>`;
            document.body.appendChild(cursor);

            const dot = cursor.querySelector(".cursor-dot") as HTMLDivElement;
            const ring = cursor.querySelector(".cursor-ring") as HTMLDivElement;

            gsap.set(dot, { xPercent: -50, yPercent: -50 });
            gsap.set(ring, { xPercent: -50, yPercent: -50 });

            const onMouseMove = (e: MouseEvent) => {
                gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1 });
                gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.3 });
            };
            window.addEventListener("mousemove", onMouseMove);

            const interactives = document.querySelectorAll("a, button, input, textarea, .val-card, .tl-content, .swiper-slide");
            interactives.forEach((el) => {
                el.addEventListener("mouseenter", () => {
                    gsap.to(ring, { scale: 2, duration: 0.3, ease: "power2.out" });
                    gsap.to(dot, { scale: 0, duration: 0.3 });
                });
                el.addEventListener("mouseleave", () => {
                    gsap.to(ring, { scale: 1, duration: 0.3, ease: "power2.out" });
                    gsap.to(dot, { scale: 1, duration: 0.3 });
                });
            });

            return () => {
                window.removeEventListener("mousemove", onMouseMove);
                const cursorEl = document.getElementById("custom-cursor");
                if (cursorEl) cursorEl.remove();
            };
        }
    }, []);

    return (
        <main className="about-page">

            <Navbar />

            {/* ── 1. CINEMATIC HERO ── */}
            <section className="about-hero">
                <div className="hero-grid" />
                <div className="hero-glow" />

                <div className="hero-marquee-wrap">
                    <div className="hero-marquee-track">
                        {[...Array(2)].map((_, i) => (
                            <span key={i} className="marquee-text">PUBLISHING &nbsp;&nbsp; EXCELLENCE &nbsp;&nbsp; STORYTELLING &nbsp;&nbsp; GLOBAL REACH &nbsp;&nbsp; LEGACY &nbsp;&nbsp;</span>
                        ))}
                    </div>
                </div>

                <motion.div className="hero-content" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                    <div className="section-pill"><span className="pill-dot" />Our Story</div>
                    <h1 className="hero-h1">We Don’t Just Publish Books.<br />We Build <span className="hl">Legacies.</span></h1>
                    <p className="hero-desc">From raw manuscripts to global bestsellers, Belmont Publishing transforms untold stories into unforgettable journeys.</p>
                    <div className="hero-btns">
                        <button className="btn-primary">Start Your Journey</button>
                        <button className="btn-outline-light">View Portfolio</button>
                    </div>
                </motion.div>
            </section>

            {/* ── 2. VISION & MISSION ── */}
            <section className="about-vision" ref={targetRef}>
                <div className="vision-inner">
                    <div className="vision-left">
                        <motion.div style={{ y }} className="vision-img-wrap">
                            <Image src="/images/give-story-img.webp" alt="Publishing Vision" width={600} height={500} className="vision-img" />
                            <div className="vision-img-border" />
                        </motion.div>
                    </div>
                    <div className="vision-right">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                            <motion.div className="section-pill" variants={fadeUp} custom={0}><span className="pill-dot" />Who We Are</motion.div>
                            <motion.h2 className="section-heading" variants={fadeUp} custom={1}>Transforming Manuscripts Into <span className="hl">Global Sensations</span></motion.h2>
                            <motion.div className="heading-divider" variants={fadeUp} custom={2} />
                            <motion.p className="section-para" variants={fadeUp} custom={3}>Belmont Publishing was born from a refusal to accept the status quo. We saw talented writers turned away by rigid traditional gates and scammed by vanity presses. We built a sanctuary where quality meets accessibility.</motion.p>
                            <motion.p className="section-para" variants={fadeUp} custom={4}>Today, we are a full-service powerhouse. From the first edit to the final marketing push, we stand as your partners, ensuring your story doesn't just get published—it gets discovered, loved, and remembered.</motion.p>
                            <motion.button className="btn-primary" variants={fadeUp} custom={5}>Get Started</motion.button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── 3. ANIMATED STATS ── */}
            <section className="about-stats">
                <div className="stats-inner">
                    {stats.map((stat, i) => {
                        const ref = useRef(null);
                        const isInView = useInView(ref, { once: true, amount: 0.5 });
                        return (
                            <motion.div key={i} ref={ref} className="stat-card" initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: i * 0.15, type: "spring", stiffness: 100 }}>
                                <h3 className="stat-value">{stat.value}</h3>
                                <p className="stat-label">{stat.label}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ── 4. CORE VALUES ── */}
            <section className="about-values">
                <div className="values-inner">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="val-head">
                        <motion.div className="section-pill center-pill" variants={fadeUp} custom={0}><span className="pill-dot" />The Belmont Difference</motion.div>
                        <motion.h2 className="section-heading center" variants={fadeUp} custom={1}>Why Authors <span className="hl">Trust Us</span></motion.h2>
                        <motion.div className="heading-divider center" variants={fadeUp} custom={2} />
                    </motion.div>
                    <div className="val-grid">
                        {coreValues.map((v, i) => (
                            <motion.div key={i} className="val-card" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                                <div className="val-icon-wrap"><span className="val-icon">{v.icon}</span></div>
                                <h3 className="val-title">{v.title}</h3>
                                <p className="val-desc">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 5. INTERACTIVE TIMELINE ── */}
            <section className="about-timeline">
                <div className="timeline-grid" />
                <div className="timeline-inner">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="val-head">
                        <motion.div className="section-pill center-pill dark-pill" variants={fadeUp} custom={0}><span className="pill-dot" />Our Evolution</motion.div>
                        <motion.h2 className="section-heading center light" variants={fadeUp} custom={1}><span style={{ color: "#fff" }}>A Legacy Of</span> <span className="hl">Milestones</span></motion.h2>
                        <motion.div className="heading-divider center" variants={fadeUp} custom={2} />
                    </motion.div>
                    <div className="timeline-track">
                        <div className="timeline-line" />
                        {journeyPoints.map((t, i) => (
                            <motion.div key={i} className={`tl-item ${i % 2 === 0 ? 'left' : 'right'}`} initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 }}>
                                <div className="tl-marker"><span className="tl-dot" /></div>
                                <div className="tl-content">
                                    <span className="tl-year">{t.year}</span>
                                    <h4 className="tl-title">{t.title}</h4>
                                    <p className="tl-desc">{t.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 6. THE TEAM (SWIPER SLIDER) ── */}
            <section className="about-team">
                <div className="team-inner">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="val-head">
                        <motion.div className="section-pill center-pill" variants={fadeUp} custom={0}><span className="pill-dot" />The Minds Behind</motion.div>
                        <motion.h2 className="section-heading center" variants={fadeUp} custom={1}>Meet Our <span className="hl">Experts</span></motion.h2>
                        <motion.div className="heading-divider center" variants={fadeUp} custom={2} />
                    </motion.div>

                    <div className="swiper team-swiper">
                        <div className="swiper-wrapper">
                            {teamMembers.map((m, i) => (
                                <div className="swiper-slide" key={i}>
                                    <div className="team-card">
                                        <div className="team-img-wrap">
                                            <Image src={m.img} alt={m.name} width={400} height={450} className="team-img" />
                                        </div>
                                        <div className="team-info-overlay"></div>
                                        <div className="team-info">
                                            <h4 className="team-name">{m.name}</h4>
                                            <p className="team-role">{m.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 7. MEGA CTA ── */}
            <section className="about-cta">
                <div className="cta-noise" />
                <motion.div className="cta-inner" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, type: "spring" }}>
                    <div className="section-pill center-pill dark-pill"><span className="pill-dot" />Let's Connect</div>
                    <h2 className="cta-heading">Ready To Write Your <span className="hl">Success Story?</span></h2>
                    <p className="cta-desc">Join the ranks of bestselling authors who trusted Belmont Publishing to bring their visions to life.</p>
                    <div className="cta-btns">
                        <button className="btn-primary">Get Started</button>
                        <button className="btn-outline-light">Contact Us</button>
                    </div>
                </motion.div>
            </section>

            <FooterSection />

            {/* FIX: Merged both styles into a single global style tag to prevent NextJS Nested Styled-JSX Error */}
            <style jsx global>{`
                /* ── Custom Cursor Styles ── */
                #custom-cursor { position: fixed; top: 0; left: 0; pointer-events: none; z-index: 99999; mix-blend-mode: difference; }
                .cursor-dot { position: fixed; width: 6px; height: 6px; background: #f57c15; border-radius: 50%; pointer-events: none; }
                .cursor-ring { position: fixed; width: 36px; height: 36px; border: 1.5px solid rgba(245, 124, 21, 0.5); border-radius: 50%; pointer-events: none; }
                @media (pointer: coarse) { #custom-cursor { display: none !important; } }
                ::selection { background: rgba(245, 124, 21, 0.3); color: #fff; }

                /* ── Page Styles ── */
                .about-page { font-family: Raleway, Arial, sans-serif; overflow-x: hidden; background: #fff; }
                .section-heading { font-size: clamp(28px, 4vw, 46px); font-weight: 700; color: #111; line-height: 1.2; margin-bottom: 18px; }
                .section-heading.center { text-align: center; }
                .section-heading.light { color: #fff; }
                .hl { color: #f57c15; }
                .heading-divider { width: 60px; height: 4px; background: #f57c15; margin-bottom: 28px; border-radius: 2px; }
                .heading-divider.center { margin: 0 auto 28px; }
                .section-para { font-size: 16px; color: #555; line-height: 1.9; margin-bottom: 18px; }
                
                .section-pill { display: inline-flex; align-items: center; gap: 8px; background: #fff; border: 1px solid rgba(245, 124, 21, 0.3); color: #f57c15; font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; padding: 6px 20px; border-radius: 30px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(245,124,21,0.08); }
                .center-pill { display: flex; width: fit-content; margin-left: auto; margin-right: auto; }
                .dark-pill { background: rgba(245, 124, 21, 0.1); }
                .pill-dot { width: 6px; height: 6px; border-radius: 50%; background: #f57c15; animation: pulse 2s infinite; }
                @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(245, 124, 21, 0.7); } 70% { box-shadow: 0 0 0 8px rgba(245, 124, 21, 0); } 100% { box-shadow: 0 0 0 0 rgba(245, 124, 21, 0); } }
                
                .btn-primary { background: #f57c15; color: #fff; border: 2px solid #f57c15; padding: 14px 32px; border-radius: 4px; font-size: 14px; font-weight: 700; cursor: pointer; transition: all 0.3s; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 4px 14px rgba(245, 124, 21, 0.25); font-family: Raleway, sans-serif; }
                .btn-primary:hover { background: #d96a0a; border-color: #d96a0a; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(245, 124, 21, 0.4); }
                .btn-outline-light { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,0.4); padding: 14px 32px; border-radius: 4px; font-size: 14px; font-weight: 700; cursor: pointer; transition: all 0.3s; text-transform: uppercase; letter-spacing: 0.5px; font-family: Raleway, sans-serif; }
                .btn-outline-light:hover { border-color: #f57c15; color: #f57c15; transform: translateY(-2px); }

                /* ── Hero ── */
                .about-hero { background: #0a0a0a; min-height: 90vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
                .hero-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px); background-size: 60px 60px; pointer-events: none; z-index: 1; }
                .hero-glow { position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%); width: 800px; height: 800px; background: radial-gradient(circle, rgba(245, 124, 21, 0.15) 0%, transparent 60%); pointer-events: none; z-index: 1; }
                .hero-marquee-wrap { position: absolute; top: 50%; left: 0; width: 100%; overflow: hidden; z-index: 1; transform: translateY(-50%); }
                .hero-marquee-track { display: flex; width: max-content; animation: marquee 25s linear infinite; }
                .marquee-text { font-family: Oswald, Arial, sans-serif; font-size: 8vw; font-weight: 900; color: rgba(255,255,255,0.07); text-transform: uppercase; white-space: nowrap; line-height: 1; letter-spacing: 10px; }
                @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                .hero-content { position: relative; z-index: 2; text-align: center; padding: 0 20px; max-width: 900px; }
                .hero-h1 { font-size: clamp(36px, 6vw, 68px); font-family: Oswald, Arial, sans-serif; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 2px; line-height: 1.1; margin-bottom: 30px; }
                .hero-desc { font-size: 18px; color: rgba(255,255,255,0.7); line-height: 1.8; max-width: 650px; margin: 0 auto 40px; }
                .hero-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

                /* ── Vision ── */
                .about-vision { background: #fff; padding: 100px 60px; }
                .vision-inner { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; gap: 80px; }
                .vision-left { flex: 0 0 45%; position: relative; perspective: 1000px; }
                .vision-img-wrap { position: relative; border-radius: 4px; overflow: visible; }
                .vision-img { width: 100%; height: auto; display: block; border-radius: 4px; position: relative; z-index: 2; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
                .vision-img-border { position: absolute; top: 20px; left: 20px; right: -20px; bottom: -20px; border: 3px solid #f57c15; border-radius: 4px; z-index: 1; }
                .vision-right { flex: 1; }

                /* ── Stats ── */
                .about-stats { background: #111; padding: 80px 40px; border-top: 1px solid rgba(245,124,21,0.2); border-bottom: 1px solid rgba(245,124,21,0.2); }
                .stats-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; text-align: center; }
                .stat-card { background: rgba(255,255,255,0.03); padding: 40px 20px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1); transition: all 0.3s; }
                .stat-card:hover { border-color: #f57c15; background: rgba(245,124,21,0.05); transform: translateY(-5px); }
                .stat-value { font-size: clamp(36px, 4vw, 52px); font-weight: 800; color: #f57c15; margin-bottom: 8px; font-family: Oswald, Arial, sans-serif; }
                .stat-label { font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 1.5px; }

                /* ── Values ── */
                .about-values { background: #f9f9f9; padding: 100px 60px; position: relative; overflow: hidden; }
                .values-inner { max-width: 1200px; margin: 0 auto; }
                .val-head { margin-bottom: 60px; }
                .val-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
                .val-card { background: #fff; border: 1px solid #eee; border-radius: 28px; padding: 38px 26px 32px; display: flex; flex-direction: column; align-items: center; text-align: center; transition: all 0.4s ease; position: relative; overflow: hidden; cursor: default; box-shadow: 0 4px 6px rgba(0,0,0,0.02); }
                .val-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, #f57c15, transparent); opacity: 0; transition: opacity 0.3s; }
                .val-card:hover { background: rgba(26, 26, 26, 0.95); backdrop-filter: blur(14px); transform: translateY(-8px) scale(1.03); box-shadow: 0 16px 48px rgba(245, 124, 21, 0.18), 0 0 0 1px rgba(245, 124, 21, 0.28); border-color: rgba(245, 124, 21, 0.38); }
                .val-card:hover::before { opacity: 1; }
                .val-icon-wrap { width: 70px; height: 70px; border-radius: 18px; background: #f5f5f0; border: 1px solid rgba(245, 124, 21, 0.24); display: flex; align-items: center; justify-content: center; margin-bottom: 20px; transition: all 0.4s ease; }
                .val-card:hover .val-icon-wrap { background: rgba(245, 124, 21, 0.10); box-shadow: 0 0 24px rgba(245, 124, 21, 0.16); transform: scale(1.08); }
                .val-icon { font-size: 28px; line-height: 1; }
                .val-title { font-size: 17px; font-weight: 700; color: #111; margin-bottom: 12px; line-height: 1.3; transition: color 0.4s; }
                .val-card:hover .val-title { color: #fff; }
                .val-desc { font-size: 13px; color: #666; line-height: 1.8; margin: 0; transition: color 0.4s; }
                .val-card:hover .val-desc { color: rgba(255, 255, 255, 0.50); }

                /* ── Timeline ── */
                .about-timeline { background: #0a0a0a; padding: 100px 60px; position: relative; overflow: hidden; }
                .timeline-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(245, 124, 21, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 124, 21, 0.04) 1px, transparent 1px); background-size: 48px 48px; pointer-events: none; z-index: 0; }
                .timeline-inner { position: relative; z-index: 2; max-width: 900px; margin: 0 auto; }
                .timeline-track { position: relative; padding: 40px 0; display: flex; flex-direction: column; }
                .timeline-line { position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: rgba(255,255,255,0.1); transform: translateX(-50%); }
                .tl-item { position: relative; width: 50%; padding-bottom: 40px; }
                .tl-item.left { align-self: flex-start; padding-right: 50px; text-align: right; }
                .tl-item.right { align-self: flex-end; margin-left: 50%; padding-left: 50px; text-align: left; }
                .tl-marker { position: absolute; top: 5px; width: 16px; height: 16px; z-index: 2; }
                .tl-item.left .tl-marker { right: -8px; }
                .tl-item.right .tl-marker { left: -8px; }
                .tl-dot { width: 16px; height: 16px; background: #0a0a0a; border: 3px solid #f57c15; border-radius: 50%; display: block; transition: all 0.3s; }
                .tl-item:hover .tl-dot { background: #f57c15; box-shadow: 0 0 15px rgba(245,124,21,0.6); }
                .tl-content { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); padding: 24px; border-radius: 4px; backdrop-filter: blur(10px); transition: all 0.3s; }
                .tl-item:hover .tl-content { border-color: rgba(245,124,21,0.4); background: rgba(245,124,21,0.05); transform: translateY(-3px); }
                .tl-year { font-family: Oswald, Arial, sans-serif; font-size: 14px; font-weight: 700; color: #f57c15; letter-spacing: 1px; margin-bottom: 6px; display: block; }
                .tl-title { font-size: 18px; font-weight: 700; color: #fff; margin-bottom: 8px; }
                .tl-desc { font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.6; margin: 0; }

                /* ── Team (Swiper) ── */
                .about-team { background: #fff; padding: 100px 60px; }
                .team-inner { max-width: 1200px; margin: 0 auto; }
                .team-card { position: relative; border-radius: 4px; overflow: hidden; cursor: pointer; height: 400px; }
                .team-img-wrap { width: 100%; height: 100%; background: #ddd; }
                .team-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
                .team-card:hover .team-img { transform: scale(1.1); }
                .team-info-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%); pointer-events: none; }
                .team-info { position: absolute; bottom: 0; left: 0; right: 0; padding: 24px; z-index: 2; transition: transform 0.3s; }
                .team-card:hover .team-info { transform: translateY(-5px); }
                .team-name { color: #fff; font-size: 20px; font-weight: 700; margin-bottom: 6px; }
                .team-role { color: #f57c15; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }

                /* ── CTA ── */
                .about-cta { background: #111; padding: 120px 60px; position: relative; overflow: hidden; text-align: center; }
                .cta-noise { position: absolute; inset: 0; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E"); pointer-events: none; z-index: 1; }
                .cta-inner { position: relative; z-index: 2; max-width: 800px; margin: 0 auto; background: rgba(245, 124, 21, 0.03); border: 1px solid rgba(245,124,21,0.2); padding: 60px 40px; border-radius: 4px; backdrop-filter: blur(20px); }
                .cta-heading { font-size: clamp(28px, 4vw, 42px); font-weight: 800; color: #fff; margin-bottom: 20px; line-height: 1.2; text-transform: uppercase; }
                .cta-desc { font-size: 16px; color: rgba(255,255,255,0.7); line-height: 1.8; margin-bottom: 40px; }
                .cta-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

                @media (max-width: 1024px) { .val-grid { grid-template-columns: repeat(2, 1fr); } }
                @media (max-width: 820px) {
                    .about-hero { min-height: 70vh; }
                    .about-vision, .about-values, .about-timeline, .about-team, .about-cta { padding: 60px 24px; }
                    .vision-inner { flex-direction: column; gap: 40px; }
                    .vision-img-border { display: none; }
                    .stats-inner { grid-template-columns: repeat(2, 1fr); gap: 20px; }
                    .val-grid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; }
                    .timeline-line { left: 10px; }
                    .tl-item, .tl-item.left, .tl-item.right { width: 100%; align-self: flex-start; margin-left: 0; padding-left: 40px; padding-right: 0; text-align: left; }
                    .tl-item.left .tl-marker, .tl-item.right .tl-marker { left: 2px; right: auto; }
                }
            `}</style>
        </main>
    );
}