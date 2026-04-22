import Image from "next/image";

const services: string[] = [
    "Ghostwriting Services",
    "Expert Publishing Services",
    "Editing/Proofreading Services",
    "Book Promotion Services",
];

const GiveStorySection: React.FC = () => {
    return (
        <section className="give-section">
            <div className="give-inner">
                <div className="give-left">
                    <Image
                        src="/images/give-story-img.webp"
                        alt="Book Publishing"
                        width={520}
                        height={480}
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>

                <div className="give-right">
                    <h2 className="give-heading">
                        Top Online Book Publishers In USA, And Professional Authors Book
                        Publishing Services, In One Place!
                    </h2>

                    <p className="give-desc">
                        Serving you with expert assistance is what our professional book
                        publishing team aspires to. Increase the chances of your book to
                        outshine the publishing industry and get our expert services
                        comprising:
                    </p>

                    <div className="give-services">
                        {services.map((s) => (
                            <div key={s} className="give-service-item">
                                <span className="give-check">✔</span>
                                <span>{s}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .give-section {
                    background: #f5f5f5;
                    font-family: "Nunito Sans", sans-serif;
                    padding: 70px 60px;
                }
                .give-inner {
                    display: flex;
                    align-items: center;
                    gap: 60px;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .give-left {
                    width: 44%;
                    flex-shrink: 0;
                }
                .give-right {
                    flex: 1;
                }
                .give-heading {
                    font-size: clamp(20px, 2.2vw, 32px);
                    font-weight: 700;
                    color: #111;
                    line-height: 1.3;
                    margin-bottom: 18px;
                }
                .give-desc {
                    font-size: 14.5px;
                    color: #444;
                    line-height: 1.8;
                    margin-bottom: 24px;
                }
                .give-services {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px 24px;
                }
                .give-service-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 14px;
                    color: #222;
                    font-weight: 600;
                }
                .give-check {
                    color: #f57c15;
                    font-size: 15px;
                    flex-shrink: 0;
                }
                @media (max-width: 820px) {
                    .give-section { padding: 50px 20px; }
                    .give-inner { flex-direction: column; gap: 32px; }
                    .give-left { width: 100%; }
                    .give-services { grid-template-columns: 1fr; }
                }
            `}</style>
        </section>
    );
};

export default GiveStorySection;