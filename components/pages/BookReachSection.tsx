"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const BookReachSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="reach-section" ref={sectionRef}>
            {/* Subtle grid pattern */}
            <div className="reach-grid" />

            {/* Ambient glows */}
            <div className="reach-glow reach-glow-tr" />
            <div className="reach-glow reach-glow-bl" />

            <div className="reach-inner">

                {/* ── LEFT: content ── */}
                <div className={`reach-left${visible ? " slide-in-left" : ""}`}>
                    {/* Animated badge */}
                    <div className="reach-badge">
                        <span className="badge-dot" />
                        Global Distribution
                    </div>

                    <h2 className="reach-heading">
                        Your E-Book Reaches Readers{" "}
                        <span className="hl">Worldwide</span> with Effortless
                        Multi-Platform Publishing
                    </h2>

                    <div className="reach-divider" />

                    <p className="reach-para">
                        Most e-books stall on a single platform, leaving half the market
                        untapped and authors wondering why sales drop. With Belmont
                        Publishing, your title isn&apos;t boxed into one store. We position
                        your book where overlooked readers actually exist, like Kobo for
                        international commuters, Apple Books for loyal iOS users, and
                        IngramSpark for library systems across the globe. While others compete
                        in Amazon&apos;s overcrowded lane, your story spreads wider, capturing
                        niches competitors don&apos;t even know exist.
                    </p>
                    <p className="reach-para">
                        At Belmont Publishing, we handle those differences for you, thus
                        making sure your e-book never gets sidelined or lost in the shuffle.
                        The result is broader discoverability, multiple revenue streams, and a
                        book built to navigate the complex digital landscape all while catching
                        up with global readers.
                    </p>

                    {/* Platform chips */}
                    <div className="reach-chips">
                        {["Amazon Kindle", "Apple Books", "Kobo", "IngramSpark", "Barnes & Noble"].map((p) => (
                            <div key={p} className="chip">
                                <span className="chip-dot" />
                                {p}
                            </div>
                        ))}
                    </div>

                    <div className="reach-btns">
                        <button className="btn-dark">Get Started</button>
                        <button className="btn-orange">Live Chat</button>
                    </div>
                </div>

                {/* ── RIGHT: image + orbit ── */}
                <div className={`reach-right${visible ? " fade-in" : ""}`}>
                    {/* Rotating dashed ring with orbit dots */}
                    <div className="ring-rotate">
                        <span className="orbit-dot od-1" />
                        <span className="orbit-dot od-2" />
                        <span className="orbit-dot od-3" />
                    </div>

                    {/* Static glowing ring */}
                    <div className="ring-solid" />

                    {/* Animated dots background */}
                    <div className="dots-bg" />

                    {/* Platform badges */}
                    <div className="platform-badge badge-kindle">📖 Kindle</div>
                    <div className="platform-badge badge-apple">🍎 Apple Books</div>
                    <div className="platform-badge badge-kobo">📚 Kobo</div>
                    <div className="platform-badge badge-ingram">🌐 IngramSpark</div>

                    {/* Book image */}
                    <div className="book-wrap">
                        <Image
                            src="/images/book-2.webp"
                            alt="Beyond Snake Book"
                            width={500}
                            height={440}
                            style={{
                                width: "100%",
                                height: "auto",
                                position: "relative",
                                zIndex: 1,
                                display: "block",
                            }}
                        />
                    </div>
                </div>

            </div>

            <style jsx>{`
                .reach-section {
                    background: #1a1a1a;
                    font-family: "Nunito Sans", sans-serif;
                    padding: 72px 60px;
                    position: relative;
                    overflow: hidden;
                }

                /* Grid */
                .reach-grid {
                    position: absolute; inset: 0;
                    background-image:
                        linear-gradient(rgba(245, 124, 21, 0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(245, 124, 21, 0.04) 1px, transparent 1px);
                    background-size: 48px 48px;
                    pointer-events: none;
                    z-index: 0;
                }

                /* Glows */
                .reach-glow {
                    position: absolute;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 0;
                }
                .reach-glow-tr {
                    top: -100px; right: -60px;
                    width: 440px; height: 440px;
                    background: radial-gradient(circle, rgba(245, 124, 21, 0.15) 0%, transparent 65%);
                }
                .reach-glow-bl {
                    bottom: -80px; left: -60px;
                    width: 340px; height: 340px;
                    background: radial-gradient(circle, rgba(245, 124, 21, 0.08) 0%, transparent 65%);
                }

                /* Layout */
                .reach-inner {
                    position: relative; z-index: 2;
                    display: flex;
                    align-items: center;
                    gap: 64px;
                    max-width: 1300px;
                    margin: 0 auto;
                }

                /* ── RIGHT ── */
                .reach-right {
                    flex: 0 0 44%;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 480px;
                    opacity: 0;
                    transform: translateX(80px);
                    transition: opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s;
                }
                .reach-right.fade-in {
                    opacity: 1;
                    transform: translateX(0);
                }

                /* Rotating dashed ring */
                .ring-rotate {
                    position: absolute;
                    top: 50%; left: 50%;
                    width: 380px; height: 380px;
                    margin-top: -190px; margin-left: -190px;
                    border-radius: 50%;
                    border: 1.5px dashed rgba(245, 124, 21, 0.22);
                    animation: spin 18s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }

                /* Orbit dots */
                .orbit-dot {
                    position: absolute;
                    width: 8px; height: 8px;
                    border-radius: 50%;
                    background: #f57c15;
                    box-shadow: 0 0 10px rgba(245, 124, 21, 0.9);
                    top: 50%; left: 50%;
                }
                .od-1 { transform: translate(-50%, -50%) rotate(0deg)   translateX(190px); }
                .od-2 { transform: translate(-50%, -50%) rotate(120deg) translateX(190px); }
                .od-3 { transform: translate(-50%, -50%) rotate(240deg) translateX(190px); }

                /* Static inner ring */
                .ring-solid {
                    position: absolute;
                    top: 50%; left: 50%;
                    width: 300px; height: 300px;
                    margin-top: -150px; margin-left: -150px;
                    border-radius: 50%;
                    border: 1px solid rgba(245, 124, 21, 0.18);
                    box-shadow: 0 0 60px rgba(245, 124, 21, 0.10),
                                inset 0 0 60px rgba(245, 124, 21, 0.04);
                }

                /* Animated dots */
                .dots-bg {
                    position: absolute;
                    width: 80%; height: 80%;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    background-image: radial-gradient(
                        circle, rgba(245, 124, 21, 0.35) 1.5px, transparent 1.5px
                    );
                    background-size: 22px 22px;
                    border-radius: 50%;
                    mask-image: radial-gradient(
                        ellipse 80% 80% at 50% 50%, black 50%, transparent 100%
                    );
                    -webkit-mask-image: radial-gradient(
                        ellipse 80% 80% at 50% 50%, black 50%, transparent 100%
                    );
                    animation: pulse-dots 3s ease-in-out infinite;
                }
                @keyframes pulse-dots {
                    0%, 100% { opacity: 0.55; transform: translate(-50%, -50%) scale(1); }
                    50%       { opacity: 1;    transform: translate(-50%, -50%) scale(1.05); }
                }

                /* Platform badges */
                .platform-badge {
                    position: absolute;
                    background: rgba(26, 26, 26, 0.92);
                    border: 1px solid rgba(245, 124, 21, 0.30);
                    border-radius: 8px;
                    padding: 6px 12px;
                    font-size: 11px;
                    font-weight: 700;
                    color: #f57c15;
                    letter-spacing: 0.4px;
                    white-space: nowrap;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.45),
                                0 0 12px rgba(245, 124, 21, 0.10);
                    z-index: 3;
                    animation: badge-float 3s ease-in-out infinite;
                    backdrop-filter: blur(8px);
                }
                .badge-kindle { top: 6%;   left: 50%; transform: translateX(-50%); animation-delay: 0s; }
                .badge-apple  { top: 42%;  right: -2%; animation-delay: 0.5s; }
                .badge-kobo   { bottom: 6%; left: 50%; transform: translateX(-50%); animation-delay: 1s; }
                .badge-ingram { top: 42%;  left: -2%; animation-delay: 1.5s; }

                @keyframes badge-float {
                    0%, 100% { transform: translateY(0px); }
                    50%       { transform: translateY(-7px); }
                }
                /* Override for centered badges */
                .badge-kindle, .badge-kobo {
                    left: 50%;
                }
                @keyframes badge-float-center {
                    0%, 100% { transform: translateX(-50%) translateY(0px); }
                    50%       { transform: translateX(-50%) translateY(-7px); }
                }
                .badge-kindle { animation-name: badge-float-center; }
                .badge-kobo   { animation-name: badge-float-center; }

                /* Book */
                .book-wrap {
                    position: relative; z-index: 2;
                    width: 72%;
                    animation: float-book 3.5s ease-in-out infinite;
                    filter: drop-shadow(0 16px 48px rgba(0, 0, 0, 0.65))
                            drop-shadow(0 0 30px rgba(245, 124, 21, 0.12));
                }
                @keyframes float-book {
                    0%, 100% { transform: translateY(0px)  rotate(-1deg); }
                    50%       { transform: translateY(-14px) rotate(1deg); }
                }

                /* ── LEFT ── */
                .reach-left {
                    flex: 1; min-width: 0;
                    opacity: 0;
                    transform: translateX(-80px);
                    transition: opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s;
                }
                .reach-left.slide-in-left {
                    opacity: 1;
                    transform: translateX(0);
                }

                /* Badge */
                .reach-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(245, 124, 21, 0.10);
                    border: 1px solid rgba(245, 124, 21, 0.22);
                    color: #f57c15;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    padding: 5px 14px;
                    border-radius: 20px;
                    margin-bottom: 18px;
                }
                .badge-dot {
                    width: 6px; height: 6px;
                    border-radius: 50%;
                    background: #f57c15;
                    flex-shrink: 0;
                    animation: blink 1.5s ease-in-out infinite;
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50%       { opacity: 0.2; }
                }

                .reach-heading {
                    font-size: clamp(20px, 2.2vw, 30px);
                    font-weight: 700;
                    color: #fff;
                    line-height: 1.35;
                    margin-bottom: 18px;
                }
                .hl { color: #f57c15; }

                .reach-divider {
                    width: 48px; height: 3px;
                    background: linear-gradient(90deg, #f57c15, #ffb347);
                    border-radius: 3px;
                    margin-bottom: 20px;
                }

                .reach-para {
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.52);
                    line-height: 1.88;
                    margin-bottom: 16px;
                    max-width: 540px;
                }

                /* Platform chips */
                .reach-chips {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin: 20px 0 28px;
                }
                .chip {
                    display: flex; align-items: center; gap: 6px;
                    background: rgba(245, 124, 21, 0.08);
                    border: 1px solid rgba(245, 124, 21, 0.18);
                    color: rgba(255, 255, 255, 0.72);
                    font-size: 12px;
                    font-weight: 600;
                    padding: 6px 14px;
                    border-radius: 20px;
                    transition: background 0.2s, border-color 0.2s;
                }
                .chip:hover {
                    background: rgba(245, 124, 21, 0.15);
                    border-color: rgba(245, 124, 21, 0.35);
                }
                .chip-dot {
                    width: 5px; height: 5px;
                    border-radius: 50%;
                    background: #f57c15;
                    flex-shrink: 0;
                }

                /* Buttons */
                .reach-btns {
                    display: flex; align-items: center;
                    gap: 14px; flex-wrap: wrap;
                }
                .btn-dark {
                    background: rgba(255, 255, 255, 0.08);
                    color: #fff;
                    border: 1px solid rgba(255, 255, 255, 0.16);
                    padding: 13px 32px; border-radius: 6px;
                    font-size: 14px; font-weight: 700; cursor: pointer;
                    font-family: Raleway, Arial, sans-serif;
                    transition: background 0.2s, box-shadow 0.2s;
                    backdrop-filter: blur(8px);
                }
                .btn-dark:hover { background: rgba(255, 255, 255, 0.14); }
                .btn-orange {
                    background: #f57c15; color: #fff; border: none;
                    padding: 13px 32px; border-radius: 6px;
                    font-size: 14px; font-weight: 700; cursor: pointer;
                    font-family: Raleway, Arial, sans-serif;
                    transition: background 0.2s, box-shadow 0.2s;
                    box-shadow: 0 4px 22px rgba(245, 124, 21, 0.40);
                }
                .btn-orange:hover {
                    background: #d96a0a;
                    box-shadow: 0 6px 30px rgba(245, 124, 21, 0.58);
                }

                /* Responsive */
                @media (max-width: 820px) {
                    .reach-section { padding: 50px 24px; }
                    .reach-inner { flex-direction: column; gap: 40px; }
                    .reach-right { width: 100%; flex: unset; }
                    .platform-badge { display: none; }
                }
            `}</style>
        </section>
    );
};

export default BookReachSection;