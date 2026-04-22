import Image from "next/image";

const DiscountBannerSection: React.FC = () => {
    return (
        <section className="disc-section">
            <div className="disc-bg">
                <Image
                    src="/images/book-promotion-bannar.webp"
                    alt="Book Promotion Banner"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>

            <div className="disc-inner">
                <div className="disc-badge">
                    <Image
                        src="/images/discount.webp"
                        alt="35% Off"
                        width={180}
                        height={180}
                        style={{ width: "180px", height: "180px", objectFit: "contain" }}
                    />
                </div>

                <div className="disc-content">
                    <h2 className="disc-heading">
                        PROFESSIONAL USA AUTHOR&apos;S BOOK PUBLISHERS TO HELP YOU!
                    </h2>
                    <p className="disc-desc">
                        A team of best professional book publishers to navigate you through
                        all the complications in your author journey, hire the best book
                        publishers online.
                    </p>
                    <div className="disc-btns">
                        <button className="btn-dark">Get Started</button>
                        <button className="btn-orange">Live Chat</button>
                        <button className="btn-phone">(646) 298 6438</button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .disc-section {
                    position: relative;
                    overflow: hidden;
                    font-family: "Nunito Sans", sans-serif;
                    min-height: 340px;
                    display: flex;
                    align-items: center;
                }

                .disc-bg {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                }

                .disc-inner {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    gap: 50px;
                    padding: 60px 70px;
                    max-width: 1300px;
                    margin: 0 auto;
                    width: 100%;
                }

                .disc-badge {
                    flex-shrink: 0;
                }

                .disc-content {
                    flex: 1;
                }

                .disc-heading {
                    font-size: clamp(18px, 2.2vw, 32px);
                    font-weight: 900;
                    color: #fff;
                    line-height: 1.2;
                    margin-bottom: 14px;
                    text-transform: uppercase;
                }

                .disc-desc {
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.85);
                    line-height: 1.75;
                    margin-bottom: 28px;
                    max-width: 480px;
                }

                .disc-btns {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    flex-wrap: wrap;
                }

                .btn-dark {
                    background: #111;
                    color: #fff;
                    border: none;
                    padding: 13px 28px;
                    border-radius: 4px;
                    font-size: 13px;
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
                    padding: 13px 28px;
                    border-radius: 4px;
                    font-size: 13px;
                    font-weight: 700;
                    cursor: pointer;
                    font-family: "Nunito Sans", sans-serif;
                    transition: background 0.2s;
                }
                .btn-orange:hover { background: #d96a0a; }

                .btn-phone {
                    background: #111;
                    color: #fff;
                    border: 1px solid rgba(255,255,255,0.2);
                    padding: 13px 28px;
                    border-radius: 4px;
                    font-size: 13px;
                    font-weight: 700;
                    cursor: pointer;
                    font-family: "Nunito Sans", sans-serif;
                    transition: background 0.2s;
                }
                .btn-phone:hover { background: #333; }

                @media (max-width: 820px) {
                    .disc-inner {
                        flex-direction: column;
                        padding: 50px 24px;
                        gap: 28px;
                        text-align: center;
                    }
                    .disc-btns { justify-content: center; }
                    .disc-desc { max-width: 100%; }
                }
            `}</style>
        </section>
    );
};

export default DiscountBannerSection;