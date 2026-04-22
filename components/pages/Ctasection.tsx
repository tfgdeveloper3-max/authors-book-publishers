"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CTASection: React.FC = () => {
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
        <section className="cta-section" ref={sectionRef}>
            <div className="cta-bg">

            </div>

            <div className="cta-inner">
                <div className={`cta-left${visible ? " slide-in-left" : ""}`}>
                    <div className="cta-img-wrap">
                        <Image
                            src="/images/cta-sec-img-1.webp"
                            alt="Book Publishing"
                            width={500}
                            height={400}
                            style={{
                                width: "500px",
                                maxWidth: "100%",
                                height: "auto",
                                position: "relative",
                                zIndex: 99,
                                display: "block",
                            }}
                        />
                    </div>
                </div>

                <div className={`cta-right${visible ? " slide-in-right" : ""}`}>
                    <h2 className="cta-heading">
                        You Knit Narratives, Weave Dreams, Think New Ideas. We Bring Your
                        Make-Believe Worlds to Reality.
                    </h2>

                    <h3 className="cta-subheading">
                        Publishing Isn&apos;t Just Catching Readers; It&apos;s About
                        Connecting with People
                    </h3>

                    <p className="cta-desc">
                        Authors Book Publishing helps you share stories that matter, so
                        people feel your message, understand your heart, and remember your
                        words long after they finish reading.
                    </p>

                    <div className="cta-btns">
                        <button className="btn-dark">Get Started</button>
                        <button className="btn-orange">Live Chat</button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .cta-section {
                    position: relative;
                    overflow: hidden;
                    font-family: "Nunito Sans", sans-serif;
                    min-height: 480px;
                    display: flex;
                    align-items: center;
                    background-color: #393939ff;
                }

                .cta-bg {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                }

                .cta-inner {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    gap: 60px;
                    padding: 60px 70px;
                    max-width: 1400px;
                    margin: 0 auto;
                    width: 100%;
                }

                /* Left: starts off-screen left, slides in */
                .cta-left {
                    width: 42%;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transform: translateX(-120px);
                    transition: opacity 0.8s ease, transform 0.8s ease;
                }
                .cta-left.slide-in-left {
                    opacity: 1;
                    transform: translateX(0);
                }

                /* Right: starts off-screen right, slides in */
                .cta-right {
                    flex: 1;
                    min-width: 0;
                    opacity: 0;
                    transform: translateX(120px);
                    transition: opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s;
                }
                .cta-right.slide-in-right {
                    opacity: 1;
                    transform: translateX(0);
                }

                .cta-img-wrap {
                    animation: updown2 3s ease-in-out infinite;
                }

                @keyframes updown2 {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-18px); }
                }

                .cta-heading {
                    font-size: clamp(20px, 2vw, 30px);
                    font-weight: 600;
                    color: #fff;
                    line-height: 1.3;
                    margin-bottom: 18px;
                }

                .cta-subheading {
                    font-size: clamp(14px, 1.5vw, 20px);
                    font-weight: 600;
                    color: #f57c15;
                    line-height: 1.4;
                    margin-bottom: 16px;
                }

                .cta-desc {
                    font-size: 14.5px;
                    color: rgba(255, 255, 255, 0.82);
                    line-height: 1.8;
                    margin-bottom: 32px;
                    max-width: 520px;
                }

                .cta-btns {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    flex-wrap: wrap;
                }

                .btn-dark {
                    background: #111;
                    color: #fff;
                    border: 1px solid rgba(255, 255, 255, 0.18);
                    padding: 14px 34px;
                    border-radius: 4px;
                    font-size: 14px;
                    font-weight: 700;
                    cursor: pointer;
                    font-family: "Nunito Sans", sans-serif;
                    transition: background 0.2s;
                }
                .btn-dark:hover { background: #222; }

                .btn-orange {
                    background: #f57c15;
                    color: #fff;
                    border: none;
                    padding: 14px 34px;
                    border-radius: 4px;
                    font-size: 14px;
                    font-weight: 700;
                    cursor: pointer;
                    font-family: "Nunito Sans", sans-serif;
                    transition: background 0.2s;
                }
                .btn-orange:hover { background: #d96a0a; }

                @media (max-width: 820px) {
                    .cta-inner {
                        flex-direction: column;
                        padding: 50px 24px;
                        gap: 32px;
                    }
                    .cta-left { width: 100%; }
                }
            `}</style>
        </section>
    );
};

export default CTASection;