import Image from "next/image";

interface ServiceCard {
    icon: string;
    title: string;
    description: string;
}

const services: ServiceCard[] = [
    {
        icon: "/images/icons/Book-Formatting.png",
        title: "Ideation & Brainstorming",
        description:
            "Authors Book Publishing helps you generate story concepts, plot twists, and character arcs. Structured brainstorming sessions refine ideas, align themes, and uncover unique angles that make your book stand out before writing begins.",
    },
    {
        icon: "/images/icons/Book-Cover-Design.png",
        title: "Book Cover Designing",
        description:
            "Our design team creates covers that reflect your story's essence. Typography, color science, imagery, and layout combine to attract readers, convey genre, and make your book memorable on digital and print platforms.",
    },
    {
        icon: "/images/icons/book-publishing.png",
        title: "Publishing & Platform Distribution",
        description:
            "We handle e-book conversion, print-on-demand formatting, and distribution to Kindle, Apple Books, Barnes & Noble, and global retailers. Your book reaches multiple channels efficiently, maximizing visibility and accessibility.",
    },
    {
        icon: "/images/icons/Book-Promotions.png",
        title: "Marketing & Promotions",
        description:
            "From social media campaigns to PPC ads and email blasts, Authors Book Publishing positions your book in front of the right readers, building awareness, engagement, and lasting audience connections to boost sales.",
    },
    {
        icon: "/images/icons/Book-vedio-tailor.png",
        title: "Video Trailers & Websites",
        description:
            "Custom video trailers highlight your story visually while professional author websites showcase portfolios, blogs, and online bookstores. Integrated SEO and multimedia elements engage readers and enhance discoverability across platforms.",
    },
    {
        icon: "/images/icons/Book-Sales-Portal.png",
        title: "Book Sales & Royalties",
        description:
            "We track sales, manage royalty calculations, and provide insights on revenue streams across platforms. Transparent reporting helps authors understand performance, optimize pricing, and maximize earnings globally.",
    },
];

const ConsultantsSection: React.FC = () => {
    return (
        <section className="consult-section">
            {/* Ambient background blobs */}
            <div className="blob blob-1" />
            <div className="blob blob-2" />
            <div className="blob blob-3" />

            <div className="consult-inner">
                <div className="consult-head">
                    <span className="consult-badge">Our Services</span>
                    <h2 className="consult-heading">
                        Connect with Our Professional{" "}
                        <span className="heading-highlight">E-Book Publishing</span>{" "}
                        Consultants Today
                    </h2>
                    <div className="heading-divider" />
                    <p className="consult-subtext">
                        Get expert guidance at every step, from manuscript refinement and
                        professional editing to multi-platform e-book publishing and global
                        distribution. We make the process straightforward and streamlined, so
                        your book reaches readers efficiently worldwide, hassle-free.
                    </p>
                </div>

                <div className="cards-grid">
                    {services.map((service) => (
                        <div key={service.title} className="service-card">
                            <div className="card-icon-wrap">
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    width={64}
                                    height={64}
                                    style={{ width: "34px", height: "34px", objectFit: "contain" }}
                                />
                            </div>
                            <h3 className="card-title">{service.title}</h3>
                            <p className="card-desc">{service.description}</p>
                            <div className="card-bottom-bar" />
                        </div>
                    ))}
                </div>

                <div className="consult-btns">
                    <button className="btn-dark">Get Started</button>
                    <button className="btn-orange">Live Chat</button>
                </div>
            </div>

            <style jsx>{`
                .consult-section {
                    background: #fff;
                    font-family: Raleway, Arial, sans-serif;
                    padding: 72px 60px;
                    position: relative;
                    overflow: hidden;
                }

                /* Ambient blobs */
                .blob {
                    position: absolute;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 0;
                }
                .blob-1 {
                    top: -100px;
                    left: -100px;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(
                        circle,
                        rgba(245, 124, 21, 0.10) 0%,
                        transparent 70%
                    );
                }
                .blob-2 {
                    bottom: -80px;
                    right: -80px;
                    width: 350px;
                    height: 350px;
                    background: radial-gradient(
                        circle,
                        rgba(245, 124, 21, 0.09) 0%,
                        transparent 70%
                    );
                }
                .blob-3 {
                    top: 45%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 520px;
                    height: 280px;
                    border-radius: 50%;
                    background: radial-gradient(
                        ellipse,
                        rgba(245, 124, 21, 0.05) 0%,
                        transparent 65%
                    );
                }

                .consult-inner {
                    position: relative;
                    z-index: 1;
                }

                /* Header */
                .consult-head {
                    text-align: center;
                    max-width: 820px;
                    margin: 0 auto 52px;
                }
                .consult-badge {
                    display: inline-block;
                    background: rgba(245, 124, 21, 0.10);
                    color: #f57c15;
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 1.2px;
                    text-transform: uppercase;
                    padding: 6px 16px;
                    border-radius: 20px;
                    margin-bottom: 16px;
                    border: 1px solid rgba(245, 124, 21, 0.22);
                }
                .consult-heading {
                    font-size: clamp(1.5rem, 3.5vw, 3.2rem);
                    font-weight: 700;
                    color: #111;
                    line-height: 1.35;
                    margin-bottom: 16px;
                }
                .heading-highlight {
                    color: #f57c15;
                }
                .heading-divider {
                    width: 52px;
                    height: 4px;
                    background: linear-gradient(90deg, #f57c15, #ffb347);
                    border-radius: 4px;
                    margin: 0 auto 18px;
                }
                .consult-subtext {
                    font-size: 14.5px;
                    color: #777;
                    line-height: 1.9;
                }

                /* Cards grid */
                .cards-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 22px;
                    max-width: 1200px;
                    margin: 0 auto 52px;
                }

                /* Card */
                .service-card {
                    background: #fff;
                    border: 1.5px solid #f0f0f0;
                    border-radius: 18px;
                    padding: 32px 24px 28px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    transition: transform 0.28s ease, box-shadow 0.28s ease,
                        border-color 0.28s ease;
                }
                .service-card:hover {
                    transform: translateY(-7px);
                    box-shadow: 0 12px 40px rgba(245, 124, 21, 0.14),
                        0 4px 16px rgba(0, 0, 0, 0.06);
                    border-color: rgba(245, 124, 21, 0.30);
                }

                /* Orange bottom bar that slides up on hover */
                .card-bottom-bar {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #f57c15, #ffb347);
                    border-radius: 0 0 18px 18px;
                    opacity: 0;
                    transition: opacity 0.28s ease;
                }
                .service-card:hover .card-bottom-bar {
                    opacity: 1;
                }

                /* Icon */
                .card-icon-wrap {
                    width: 68px;
                    height: 68px;
                    border-radius: 16px;
                    background: linear-gradient(
                        135deg,
                        rgba(245, 124, 21, 0.12) 0%,
                        rgba(245, 124, 21, 0.05) 100%
                    );
                    border: 1.5px solid rgba(245, 124, 21, 0.20);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 20px;
                    box-shadow: 0 4px 16px rgba(245, 124, 21, 0.12);
                    transition: box-shadow 0.28s ease, transform 0.28s ease;
                }
                .service-card:hover .card-icon-wrap {
                    box-shadow: 0 6px 24px rgba(245, 124, 21, 0.28);
                    transform: scale(1.07);
                }

                .card-title {
                    font-size: 17px;
                    font-weight: 700;
                    color: #111;
                    margin-bottom: 10px;
                    line-height: 1.3;
                }
                .card-desc {
                    font-size: 14px;
                    color: #888;
                    line-height: 1.8;
                }

                /* Buttons */
                .consult-btns {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 14px;
                    flex-wrap: wrap;
                }
                .btn-dark {
                    background: #111;
                    color: #fff;
                    border: none;
                    padding: 14px 38px;
                    border-radius: 6px;
                    font-size: 14px;
                    font-weight: 700;
                    cursor: pointer;
                    font-family: Raleway, Arial, sans-serif;
                    transition: background 0.2s, box-shadow 0.2s;
                    letter-spacing: 0.3px;
                }
                .btn-dark:hover {
                    background: #333;
                    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.18);
                }
                .btn-orange {
                    background: #f57c15;
                    color: #fff;
                    border: none;
                    padding: 14px 38px;
                    border-radius: 6px;
                    font-size: 14px;
                    font-weight: 700;
                    cursor: pointer;
                    font-family: Raleway, Arial, sans-serif;
                    transition: background 0.2s, box-shadow 0.2s;
                    letter-spacing: 0.3px;
                    box-shadow: 0 4px 20px rgba(245, 124, 21, 0.38);
                }
                .btn-orange:hover {
                    background: #d96a0a;
                    box-shadow: 0 6px 28px rgba(245, 124, 21, 0.52);
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .cards-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 580px) {
                    .consult-section {
                        padding: 50px 20px;
                    }
                    .cards-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default ConsultantsSection;