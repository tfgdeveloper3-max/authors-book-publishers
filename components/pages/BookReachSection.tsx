import Image from "next/image";

const BookReachSection: React.FC = () => {
    return (
        <section className="reach-section">
            <div className="reach-inner">
                <div className="reach-left">
                    <h2 className="reach-heading">
                        Your E-Book Reaches Readers Worldwide with Effortless Multi-Platform
                        Publishing
                    </h2>
                    <p className="reach-para">
                        Most e-books stall on a single platform, leaving half the market
                        untapped and authors wondering why sales drop. With Authors Book
                        Publishing, your title isn&apos;t boxed into one store. We position
                        your book where overlooked readers actually exist, like Kobo for
                        international commuters, Apple Books for loyal iOS users, and
                        IngramSpark for library systems across the globe. While others compete
                        in Amazon&apos;s overcrowded lane, your story spreads wider, capturing
                        niches competitors don&apos;t even know exist.
                    </p>
                    <p className="reach-para">
                        At Authors Book Publishing, we handle those differences for you, thus
                        making sure your e-book never gets sidelined or lost in the shuffle.
                        The result is broader discoverability, multiple revenue streams, and a
                        book built to navigate the complex digital landscape all while catching
                        up with global readers.
                    </p>
                    <div className="reach-btns">
                        <button className="btn-dark">Get Started</button>
                        <button className="btn-orange">Live Chat</button>
                    </div>
                </div>

                <div className="reach-right">
                    <div className="dots-bg" />
                    <div className="book-wrap">
                        <Image
                            src="/images/book-2.webp"
                            alt="Beyond Snake Book"
                            width={500}
                            height={440}
                            style={{ width: "100%", height: "auto", position: "relative", zIndex: 1 }}
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .reach-section {
                    background: #fff;
                    font-family: "Nunito Sans", sans-serif;
                    padding: 70px 60px;
                }
                .reach-inner {
                    display: flex;
                    align-items: center;
                    gap: 60px;
                    max-width: 1300px;
                    margin: 0 auto;
                }
                .reach-left {
                    flex: 1;
                    min-width: 0;
                    padding-left: 50px;
                }
                .reach-heading {
                    font-size: clamp(22px, 2.2vw, 34px);
                    font-weight: 600;
                    color: #111;
                    line-height: 1.25;
                    margin-bottom: 20px;
                }
                .reach-para {
                    font-size: 14.5px;
                    color: #444;
                    line-height: 1.85;
                    margin-bottom: 18px;
                    max-width: 540px;
                }
                .reach-btns {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    flex-wrap: wrap;
                    margin-top: 10px;
                }
                .btn-dark {
                    background: #111;
                    color: #fff;
                    border: none;
                    padding: 13px 30px;
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
                    padding: 13px 30px;
                    border-radius: 4px;
                    font-size: 14px;
                    font-weight: 700;
                    cursor: pointer;
                    font-family: "Nunito Sans", sans-serif;
                    transition: background 0.2s;
                }
                .btn-orange:hover { background: #d96a0a; }
                .reach-right {
                    width: 46%;
                    flex-shrink: 0;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 500px;
                }
                .dots-bg {
                    position: absolute;
                    width: 88%;
                    height: 88%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-image: radial-gradient(circle, #f57c15 1.5px, transparent 1.5px);
                    background-size: 20px 20px;
                    border-radius: 50%;
                    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 55%, transparent 100%);
                    -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 55%, transparent 100%);
                    z-index: 0;
                }
                .book-wrap {
                    position: relative;
                    z-index: 1;
                    width: 90%;
                }
                @media (max-width: 820px) {
                    .reach-section { padding: 50px 24px; }
                    .reach-inner { flex-direction: column-reverse; gap: 36px; }
                    .reach-right { width: 100%; min-height: 300px; }
                }
            `}</style>
        </section>
    );
};

export default BookReachSection;