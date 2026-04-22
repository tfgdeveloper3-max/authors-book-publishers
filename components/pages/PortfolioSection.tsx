import Image from "next/image";

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

const PortfolioSection: React.FC = () => {
    return (
        <section className="port-section">
            <h2 className="port-heading">Our Portfolio</h2>

            <div className="port-grid">
                {books.map((book) => (
                    <div key={book.alt} className="port-item">
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

            <style jsx>{`
                .port-section {
                    background: #fff;
                    font-family: "Nunito Sans", sans-serif;
                    padding: 70px 60px;
                }
                .port-heading {
                    text-align: center;
                    font-size: clamp(22px, 2.2vw, 32px);
                    font-weight: 700;
                    color: #111;
                    margin-bottom: 40px;
                }
                .port-grid {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 10px;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .port-item {
                    border-radius: 6px;
                    overflow: hidden;
                    aspect-ratio: 2/3;
                    cursor: pointer;
                    transition: transform 0.25s, box-shadow 0.25s;
                }
                .port-item:hover {
                    transform: translateY(-5px) scale(1.03);
                    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);
                }
                @media (max-width: 1024px) {
                    .port-grid { grid-template-columns: repeat(4, 1fr); }
                }
                @media (max-width: 640px) {
                    .port-section { padding: 50px 20px; }
                    .port-grid { grid-template-columns: repeat(3, 1fr); }
                }
            `}</style>
        </section>
    );
};

export default PortfolioSection;