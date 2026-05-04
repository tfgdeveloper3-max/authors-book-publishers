'use client';

import Image from "next/image";
import { useState } from "react";

interface BookCover {
    src: string;
    alt: string;
}

const books: BookCover[] = [
    { src: "/images/Portfolio/1.webp", alt: "Beyond The Snake" },
    { src: "/images/Portfolio/2.webp", alt: "Escape From The Black Hole" },
    { src: "/images/Portfolio/3.webp", alt: "The Tavern Files" },
    { src: "/images/Portfolio/4.webp", alt: "The Theory Of Becoming" },
    { src: "/images/Portfolio/5.webp", alt: "Tailormade By God" },
    { src: "/images/Portfolio/6.webp", alt: "The Bristol Bombers" },
    { src: "/images/Portfolio/7.webp", alt: "Inner Harmony" },
    { src: "/images/Portfolio/8.webp", alt: "Fall From Grace Rise To Faith" },
    { src: "/images/Portfolio/9.webp", alt: "Coaching For Life" },
    { src: "/images/Portfolio/10.webp", alt: "Gravity" },
    { src: "/images/Portfolio/11.webp", alt: "Ted The Grocer" },
    { src: "/images/Portfolio/12.webp", alt: "Milford Mouse Private Ear" },
];

// Duplicate books for seamless marquee effect
const duplicatedBooks = [...books, ...books, ...books];

const PortfolioSection: React.FC = () => {
    const [selectedBook, setSelectedBook] = useState<BookCover | null>(null);

    return (
        <section className="port-section">
            <h2 className="port-heading">Our Portfolio</h2>

            <div className="port-marquee-container">
                <div className="port-marquee">
                    {duplicatedBooks.map((book, index) => (
                        <div
                            key={`${book.alt}-${index}`}
                            className="port-item"
                            onMouseEnter={() => setSelectedBook(book)}
                        >
                            <Image
                                src={book.src}
                                alt={book.alt}
                                width={200}
                                height={280}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            {selectedBook && (
                <div
                    className="modal-overlay"
                    onClick={() => setSelectedBook(null)}
                >
                    <div
                        className="modal-image-wrapper"
                        onMouseLeave={() => setSelectedBook(null)}
                    >
                        <Image
                            src={selectedBook.src}
                            alt={selectedBook.alt}
                            width={400}
                            height={560}
                            priority
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }

                .port-section {
                    background: #fff;
                    font-family: "Nunito Sans", sans-serif;
                    padding: 70px 60px;
                    position: relative;
                }

                .port-heading {
                    text-align: center;
                    font-size: clamp(22px, 2.2vw, 32px);
                    font-weight: 700;
                    color: #111;
                    margin-bottom: 40px;
                }

                .port-marquee-container {
                    overflow: hidden;
                    width: 100%;
                    background: #fff;
                }

                .port-marquee {
                    display: flex;
                    gap: 10px;
                    animation: marquee 40s linear infinite;
                    width: fit-content;
                    will-change: transform;
                }

                .port-item {
                    border-radius: 6px;
                    overflow: hidden;
                    aspect-ratio: 2/3;
                    width: 250px;
                    flex-shrink: 0;
                    cursor: pointer;
                    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
                    transform-origin: center;
                }

                .port-item:hover {
                    transform: translateY(-5px) scale(1.08);
                    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25);
                }

                /* Modal Overlay */
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.6);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    animation: fadeIn 0.3s ease-in-out;
                    backdrop-filter: blur(3px);
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes zoomIn {
                    from {
                        transform: scale(0.8);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }

                .modal-image-wrapper {
                    width: 400px;
                    height: auto;
                    border-radius: 8px;
                    overflow: hidden;
                    animation: zoomIn 0.4s ease-out;
                    cursor: pointer;
                    will-change: transform;
                }

                @keyframes zoomOut {
                    from {
                        transform: scale(1);
                        opacity: 1;
                    }
                    to {
                        transform: scale(0.8);
                        opacity: 0;
                    }
                }

                .modal-image-wrapper:not(:hover) {
                    animation: zoomOut 0.4s ease-out forwards;
                }

                @media (max-width: 640px) {
                    .port-section { 
                        padding: 50px 20px; 
                    }
                    .port-marquee-container {
                        width: calc(100vw - 40px);
                    }
                    .port-item {
                        width: 120px;
                    }
                    .modal-content {
                        padding: 20px;
                    }
                }
            `}</style>
        </section>
    );
};

export default PortfolioSection;
