import Image from "next/image";
import Link from "next/link";

const publishingServices: string[] = [
    "Self Book Publishing",
    "Amazon Book Publishing",
    "Global Publishing",
    "E-book Publishing",
    "Cookbook Publishing",
    "Science Fiction Publishing",
    "Poetry Publishing",
    "Children's Book Publishing",
];

const writingServices: string[] = [
    "Ghostwriting",
    "Editing & Proofreading",
    "Editorial Services",
    "Book Cover Designing",
    "Illustrations & Graphics",
    "Book Translation",
];

const marketingServices: string[] = [
    "Book Marketing Services",
    "Author Website Development",
    "Book Video Trailer",
    "Audio Book Services",
    "Audiobook Narration",
];

const FooterSection: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <Image
                            src="/images/logos/logo.png"
                            alt="Authors Book Publishing"
                            width={200}
                            height={50}
                            style={{ height: "44px", width: "auto" }}
                        />
                    </div>
                    <div className="footer-contact">
                        <p>info@authorsbookpublishing.com</p>
                        <p>(646) 298 6438</p>
                        <p>140 Broadway, 46th floor, New York,<br />NY, 10005</p>
                    </div>
                </div>

                <div className="footer-col">
                    <h4 className="footer-col-title">Publishing Services</h4>
                    <ul>
                        {publishingServices.map((s) => (
                            <li key={s}>
                                <span className="footer-arrow">&#9658;</span>
                                <Link href="#">{s}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-col-title">Writing Services</h4>
                    <ul>
                        {writingServices.map((s) => (
                            <li key={s}>
                                <span className="footer-arrow">&#9658;</span>
                                <Link href="#">{s}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-col-title">Marketing & Audio</h4>
                    <ul>
                        {marketingServices.map((s) => (
                            <li key={s}>
                                <span className="footer-arrow">&#9658;</span>
                                <Link href="#">{s}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-copy">
                    Copyright © Authors Book Publishing<br />
                    All Rights Reserved 2026
                </p>

                <div className="footer-social">
                    <Link href="#" className="social-icon" aria-label="Facebook">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                    </Link>
                    <Link href="#" className="social-icon" aria-label="Instagram">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <circle cx="12" cy="12" r="4" />
                            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                        </svg>
                    </Link>
                    <Link href="#" className="social-icon" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </Link>
                    <Link href="#" className="social-icon" aria-label="X / Twitter">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </Link>
                </div>

                <div className="footer-links">
                    <Link href="#">Terms &amp; Conditions</Link>
                    <Link href="#">Privacy &amp; Policy</Link>
                </div>
            </div>

            <style jsx>{`
                .footer {
                    background: #1a1a1a;
                    font-family: "Nunito Sans", sans-serif;
                    padding: 60px 60px 0;
                }
                .footer-inner {
                    display: flex;
                    gap: 40px;
                    max-width: 1300px;
                    margin: 0 auto;
                    padding-bottom: 50px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                    flex-wrap: wrap;
                }
                .footer-brand {
                    width: 220px;
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                .footer-contact p {
                    font-size: 13px;
                    color: rgba(255, 255, 255, 0.7);
                    line-height: 1.7;
                    margin: 0 0 4px;
                }
                .footer-col {
                    flex: 1;
                    min-width: 160px;
                }
                .footer-col-title {
                    font-size: 15px;
                    font-weight: 700;
                    color: #fff;
                    margin-bottom: 18px;
                    letter-spacing: 0.3px;
                }
                .footer-col ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .footer-col li {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .footer-arrow {
                    color: #f57c15;
                    font-size: 9px;
                    flex-shrink: 0;
                }
                .footer-col :global(a) {
                    font-size: 13px;
                    color: rgba(255, 255, 255, 0.7);
                    text-decoration: none;
                    transition: color 0.2s;
                }
                .footer-col :global(a:hover) {
                    color: #f57c15;
                }
                .footer-bottom {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 24px 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 16px;
                }
                .footer-copy {
                    font-size: 12.5px;
                    color: rgba(255, 255, 255, 0.55);
                    line-height: 1.6;
                    margin: 0;
                }
                .footer-social {
                    display: flex;
                    gap: 10px;
                }
                .footer-social :global(.social-icon) {
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.08);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #f5c518;
                    text-decoration: none;
                    transition: background 0.2s, color 0.2s, transform 0.2s;
                }
                .footer-social :global(.social-icon:hover) {
                    background: #f5c518;
                    color: #111;
                    transform: translateY(-3px);
                }
                .footer-links {
                    display: flex;
                    gap: 20px;
                }
                .footer-links :global(a) {
                    font-size: 13px;
                    color: rgba(255, 255, 255, 0.6);
                    text-decoration: none;
                    transition: color 0.2s;
                }
                .footer-links :global(a:hover) {
                    color: #f57c15;
                }
                @media (max-width: 768px) {
                    .footer { padding: 50px 20px 0; }
                    .footer-brand { width: 100%; }
                    .footer-bottom { flex-direction: column; align-items: flex-start; }
                }
            `}</style>
        </footer>
    );
};

export default FooterSection;