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
            <div className="consult-head">
                <h2 className="consult-heading">
                    Connect with Our Professional E-Book Publishing Consultants Today
                </h2>
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
                        <div className="card-icon">
                            <Image
                                src={service.icon}
                                alt={service.title}
                                width={64}
                                height={64}
                                style={{ width: "64px", height: "64px", objectFit: "contain" }}
                            />
                        </div>
                        <h3 className="card-title">{service.title}</h3>
                        <p className="card-desc">{service.description}</p>
                    </div>
                ))}
            </div>

            <div className="consult-btns">
                <button className="btn-dark">Get Started</button>
                <button className="btn-orange">Live Chat</button>
            </div>

            <style jsx>{`
                .consult-section {
                    background: #fff;
                    font-family: "Nunito Sans", sans-serif;
                    padding: 70px 60px;
                }
                .consult-head {
                    text-align: center;
                    max-width: 860px;
                    margin: 0 auto 50px;
                }
                .consult-heading {
                    font-size: clamp(20px, 2vw, 30px);
                    font-weight: 700;
                    color: #111;
                    line-height: 1.3;
                    margin-bottom: 16px;
                }
                .consult-subtext {
                    font-size: 14.5px;
                    color: #555;
                    line-height: 1.8;
                }
                .cards-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                    max-width: 1200px;
                    margin: 0 auto 50px;
                }
                .service-card {
                    background: #f7f7f7;
                    border-radius: 10px;
                    padding: 36px 28px 30px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    transition: box-shadow 0.25s, transform 0.25s;
                }
                .service-card:hover {
                    box-shadow: 0 8px 32px rgba(245, 124, 21, 0.13);
                    transform: translateY(-4px);
                }
                .card-icon {
                    margin-bottom: 18px;
                }
                .card-title {
                    font-size: 20px;
                    font-weight: 700;
                    color: #111;
                    margin-bottom: 12px;
                    line-height: 1.3;
                }
                .card-desc {
                    font-size: 15.5px;
                    color: #555;
                    line-height: 1.75;
                }
                .consult-btns {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 16px;
                    flex-wrap: wrap;
                }
                .btn-dark {
                    background: #111;
                    color: #fff;
                    border: none;
                    padding: 14px 36px;
                    border-radius: 4px;
                    font-size: 14px;
                    font-weight: 700;
                    cursor: pointer;
                    font-family: "Nunito Sans", sans-serif;
                    transition: background 0.2s;
                }
                .btn-dark:hover { background: #333; }
                .btn-orange {
                    background: #f57c15;
                    color: #fff;
                    border: none;
                    padding: 14px 36px;
                    border-radius: 4px;
                    font-size: 14px;
                    font-weight: 700;
                    cursor: pointer;
                    font-family: "Nunito Sans", sans-serif;
                    transition: background 0.2s;
                }
                .btn-orange:hover { background: #d96a0a; }
                @media (max-width: 900px) {
                    .cards-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 580px) {
                    .consult-section { padding: 50px 20px; }
                    .cards-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </section>
    );
};

export default ConsultantsSection;