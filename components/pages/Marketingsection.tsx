import Image from "next/image";

interface PlatformLogo {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const platformLogos: PlatformLogo[] = [
    { src: "/images/platforms/baker-taylor.png", alt: "Baker & Taylor", width: 160, height: 40 },
    { src: "/images/platforms/odilo.png", alt: "Odilo", width: 100, height: 36 },
    { src: "/images/platforms/hoopla.png", alt: "Hoopla", width: 100, height: 36 },
    { src: "/images/platforms/apple-books.png", alt: "Apple Books", width: 120, height: 36 },
    { src: "/images/platforms/ireader.png", alt: "iReader", width: 100, height: 36 },
    { src: "/images/platforms/barnes-noble.png", alt: "Barnes & Noble", width: 130, height: 36 },
    { src: "/images/platforms/google-play.png", alt: "Google Play", width: 110, height: 36 },
    { src: "/images/platforms/overdrive.png", alt: "OverDrive", width: 120, height: 36 },
    { src: "/images/platforms/amazon.png", alt: "Amazon", width: 100, height: 36 },
    { src: "/images/platforms/rakuten-kobo.png", alt: "Rakuten Kobo", width: 120, height: 36 },
    { src: "/images/platforms/perlego.png", alt: "Perlego", width: 90, height: 36 },
    { src: "/images/platforms/bookmate.png", alt: "Bookmate", width: 110, height: 36 },
    { src: "/images/platforms/ciando.png", alt: "Ciando eBooks", width: 100, height: 36 },
    { src: "/images/platforms/scribd.png", alt: "Scribd", width: 90, height: 36 },
    { src: "/images/platforms/eletoltes.png", alt: "Eletoltes.hu", width: 120, height: 36 },
    { src: "/images/platforms/tolino.png", alt: "Tolino", width: 90, height: 36 },
    { src: "/images/platforms/bibliotheca.png", alt: "Bibliotheca", width: 120, height: 36 },
];

const MarketingSection: React.FC = () => {
    return (
        <section className="mkt-section">
            <div className="mkt-inner">
                <div className="mkt-left">
                    <Image
                        src="/images/Marketing.png"
                        alt="Publishing Platforms"
                        width={560}
                        height={500}
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>

                <div className="mkt-right">
                    <h2 className="mkt-heading">
                        Affordable E-Book Publishing Packages and Custom Book Marketing
                        Services Designed for Passionate Writers
                    </h2>

                    <p className="mkt-para">
                        From print-ready manuscripts to online storefronts, our packages cover
                        formatting, cover design, proofreading, and conversion. Authors Book
                        Publishing makes sure your work shines on Amazon, Barnes &amp; Noble,
                        Kobo, and more while staying true to your creative vision and budget.
                    </p>

                    <p className="mkt-para">
                        Remember that marketing isn&apos;t an afterthought; it&apos;s real so
                        you have to work fast to keep up with the promotional ad posts/stunts…
                        and chaos. Well, good on you that we handle the latter… better. We boost
                        visibility with social media campaigns, book launch promotions, and
                        tried-and-tested discoverability tactics. Every title gets the push it
                        deserves, every audience is reached, and your story lands exactly where
                        it was meant to—alive, raw, and unforgettable.
                    </p>
                </div>
            </div>

            <style jsx>{`
                .mkt-section {
                    background: #fff;
                    font-family: "Nunito Sans", sans-serif;
                    padding: 70px 50px;
                }

                .mkt-inner {
                    display: flex;
                    align-items: center;
                    gap: 60px;
                    max-width: 1300px;
                    margin: 0 auto;
                }

                .mkt-left {
                    width: 45%;
                    flex-shrink: 0;
                }

                .mkt-right {
                    flex: 1;
                    min-width: 0;
                }

                .mkt-heading {
                    font-size: clamp(22px, 2.4vw, 36px);
                    font-weight: 700;
                    color: #111;
                    line-height: 1.25;
                    margin-bottom: 22px;
                }

                .mkt-para {
                    font-size: 14.5px;
                    color: #444;
                    line-height: 1.85;
                    margin-bottom: 18px;
                }

                @media (max-width: 820px) {
                    .mkt-section {
                        padding: 50px 24px;
                    }
                    .mkt-inner {
                        flex-direction: column;
                        gap: 36px;
                    }
                    .mkt-left {
                        width: 100%;
                    }
                }
            `}</style>
        </section>
    );
};

export default MarketingSection;