"use client";

import Image from "next/image";
import { useEffect } from "react";

interface ProcedureCard {
    icon: string;
    title: string;
    description: string;
}

const cards: ProcedureCard[] = [
    {
        icon: "/images/icons/Formatting.png",
        title: "Formating",
        description:
            "The formatting of your book is important as different publishing platforms have their respective policies and they don't accept files that do not match their formatting requirements.",
    },
    {
        icon: "/images/icons/Book-Publishing-2.png",
        title: "Book Publishing",
        description:
            "We prioritize global distribution for your book, eliminating all the limitations of your manuscript. Publishing is not a daunting task and to help you with that our book publishers are diversely experienced.",
    },
    {
        icon: "/images/icons/Editing.png",
        title: "Editing/Proofreading",
        description:
            "The editing phase is an obligatory step to follow even if you are a writer yourself, our editing and proofreading services are exactly designed to cater to you through all the complexities of your publishing journey.",
    },
    {
        icon: "/images/icons/Global-Distribution.png",
        title: "Global Distribution",
        description:
            "We distribute your book across 400+ stores in 100+ countries, ensuring it reaches a global audience through every major platform and retailer, maximizing your book's visibility and potential reach.",
    },
    {
        icon: "/images/icons/Book-Promotions-2.png",
        title: "Book Promotions",
        description:
            "Our marketing specialists create targeted promotional campaigns to boost your book's visibility, drive sales, and build a loyal reader base across digital and traditional channels worldwide.",
    },
];

const ProcedureSection: React.FC = () => {
    useEffect(() => {
        if (!document.querySelector("#swiper-css")) {
            const link = document.createElement("link");
            link.id = "swiper-css";
            link.rel = "stylesheet";
            link.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
            document.head.appendChild(link);
        }

        const initSwiper = (): void => {
            new (window as any).Swiper(".procedure-swiper", {
                slidesPerView: 3,
                centeredSlides: true,
                spaceBetween: 24,
                loop: true,
                speed: 700,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                },
            });
        };

        if (!(window as any).Swiper) {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
            script.onload = initSwiper;
            document.body.appendChild(script);
        } else {
            initSwiper();
        }
    }, []);

    return (
        <>
            <style jsx global>{`
                .procedure-swiper {
                    width: 100%;
                    overflow: visible !important;
                    padding: 30px 0 50px !important;
                }
                .procedure-swiper .swiper-slide-active .proc-card {
                    transform: scale(1.08);
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);
                    z-index: 2;
                }
                .procedure-swiper .swiper-slide:not(.swiper-slide-active) .proc-card {
                    transform: scale(0.93);
                    opacity: 0.85;
                }
            `}</style>

            <section className="proc-section">
                <h2 className="proc-heading">
                    Our Simplest Procedure To Serve Your Author Needs!
                </h2>

                <div className="swiper procedure-swiper">
                    <div className="swiper-wrapper">
                        {cards.map((card) => (
                            <div className="swiper-slide" key={card.title}>
                                <div className="proc-card">
                                    <div className="proc-icon">
                                        <Image
                                            src={card.icon}
                                            alt={card.title}
                                            width={72}
                                            height={72}
                                            style={{
                                                width: "72px",
                                                height: "72px",
                                                objectFit: "contain",
                                                filter: "brightness(0) invert(1)",
                                            }}
                                        />
                                    </div>
                                    <h3 className="proc-card-title">{card.title}</h3>
                                    <p className="proc-card-desc">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .proc-section {
                    background: #fff;
                    font-family: "Nunito Sans", sans-serif;
                    padding: 60px 0 30px;
                    overflow: hidden;
                    width: 100%;
                }

                .proc-heading {
                    text-align: center;
                    font-size: clamp(18px, 2vw, 26px);
                    font-weight: 700;
                    color: #111;
                    margin-bottom: 10px;
                    padding: 0 20px;
                }

                .proc-card {
                    background: #f57c15;
                    padding: 50px;
                    border-radius: 50px;
                    text-align: center;
                    min-height: 390px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    color: #fff;
                    transition: transform 0.4s ease, box-shadow 0.4s ease, opacity 0.4s ease;
                }

                .proc-icon {
                    margin-bottom: 20px;
                }

                .proc-card-title {
                    font-size: 22px;
                    font-weight: 700;
                    color: #fff;
                    margin-bottom: 14px;
                }

                .proc-card-desc {
                    font-size: 17.5px;
                    color: rgba(255, 255, 255, 0.92);
                    line-height: 1.75;
                }
            `}</style>
        </>
    );
};

export default ProcedureSection;