import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <div className="dot-bg" />
        <div className="book-wrap">
          <Image
            src="/images/home-img-1.webp"
            alt="Book Publishing"
            width={500}
            height={600}
            style={{ width: "100%", height: "auto", position: "relative", zIndex: 1 }}
          />
        </div>
      </div>

      <div className="hero-right">
        <p className="hero-tagline">
          USA&apos;S RELIABLE BOOK PUBLISHING COMPANY ONLINE
        </p>

        <h2 className="hero-heading">
          You Believe In Your Story; Our Publishers Believe In The Process
        </h2>

        <p className="hero-para">
          At Belmont Publishing, we don&apos;t just look at your manuscript
          like it&apos;s a bunch of words on a screen, we see the heart behind
          it, the effort it took to get even one chapter finished, and that&apos;s
          why we walk with you through everything, from making edits that feel
          right, to handling all the technical stuff like getting your ISBN,
          formatting your book for paperback and e-book, and making sure
          it&apos;s ready for the legit book platforms out there.
        </p>

        <p className="hero-para">
          We know publishing isn&apos;t just about uploading a file and hoping it
          works out. It&apos;s about the little things, like choosing the right
          trim size so your print book looks clean and professional, or writing a
          book description with the right keywords so readers can actually find
          it. We guide you through all that, answering your questions, offering
          honest feedback, and making sure you never feel overwhelmed.
        </p>

        <p className="hero-para">
          Your story matters, and when it&apos;s time to publish, we don&apos;t
          just click a button and leave it there. We double-check your e-book
          formatting, adjust your cover for proper print bleed, help with
          metadata optimization, and make sure your book is fully prepared for
          multi-platform distribution, from Amazon to IngramSpark. When it goes
          live, it&apos;s polished, discoverable, and ready for real readers.
        </p>

        <button className="hero-btn">
          Start Your Next Best Seller
          <span className="hero-btn-icon">&#8594;</span>
        </button>
      </div>

      <style jsx>{`
        .hero-section {
          display: flex;
          align-items: center;
          gap: 60px;
          padding: 60px 60px 60px 40px;
          background: #f5f5f0;
          max-width: 1400px;
          margin: 0 auto;
          font-family: Raleway, Arial, sans-serif;
        }
        .hero-left {
          width: 48%;
          flex-shrink: 0;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 580px;
        }
        .dot-bg {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #f57c15 1.5px, transparent 1.5px);
          background-size: 22px 22px;
          border-radius: 50%;
          width: 85%;
          height: 85%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 60%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 60%, transparent 100%);
          z-index: 0;
        }
        .book-wrap {
          position: relative;
          z-index: 1;
          width: 75%;
        }
        .hero-right {
          flex: 1;
        }
        .hero-tagline {
          font-size: 13px;
          font-weight: 600;
          color: #555;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
          text-transform: uppercase;
        }
        .hero-heading {
          font-size: calc(20px + (40 - 20) * (100vw - 320px) / (1920 - 320));
          font-family: Raleway, Arial, sans-serif;
          font-weight: 600;
          color: #f57c15;
          margin-bottom: 15px;
          line-height: 40px;
          text-transform: capitalize;
        }
        .hero-para {
          font-size: 15px;
          color: #444;
          line-height: 1.8;
          margin-bottom: 18px;
        }
        .hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          background: #f57c15;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          border: none;
          border-radius: 6px;
          padding: 16px 28px;
          cursor: pointer;
          margin-top: 10px;
          transition: background 0.2s;
          font-family: Raleway, Arial, sans-serif;
        }
        .hero-btn:hover {
          background: #d96a0a;
        }
        .hero-btn-icon {
          background: #fff;
          color: #f57c15;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 900;
          flex-shrink: 0;
        }
        @media (max-width: 900px) {
          .hero-section {
            flex-direction: column;
            padding: 40px 24px;
            gap: 40px;
          }
          .hero-left {
            width: 100%;
            min-height: 380px;
          }
          .book-wrap {
            width: 60%;
          }
          .hero-heading {
            line-height: 1.3;
            font-family: Raleway, Arial, sans-serif;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;