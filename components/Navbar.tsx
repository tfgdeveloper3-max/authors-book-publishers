"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const serviceLinks = [
    { href: "/services/ghostwriting", label: "Ghostwriting" },
    { href: "/services/editing", label: "Book Editing" },
    { href: "/services/cover-design", label: "Cover Design" },
    { href: "/services/publishing", label: "Publishing" },
    { href: "/services/marketing", label: "Book Marketing" },
];

const Navbar: React.FC = () => {
    const [servicesOpen, setServicesOpen] = useState<boolean>(false);
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);

    return (
        <nav className="navbar">
            <div className="nav-inner">
                <Link href="/" className="nav-logo px-20">
                    <Image
                        src="/images/logos/logo.png"
                        alt="Authors Book Publishing"
                        width={220}
                        height={55}
                        style={{ height: "40px", width: "auto" }}
                    />
                </Link>

                <ul className="nav-links">
                    <li><Link href="/">HOME</Link></li>
                    <li><Link href="/about">ABOUT</Link></li>
                    <li><Link href="/portfolio">PORTFOLIO</Link></li>
                    <li><Link href="/testimonials">TESTIMONIALS</Link></li>
                    <li
                        className="nav-dropdown"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <span className="nav-services-trigger">
                            SERVICES <span className="caret">&#9660;</span>
                        </span>
                        <ul className={`dropdown-menu${servicesOpen ? " open" : ""}`}>
                            {serviceLinks.map((s) => (
                                <li key={s.href}>
                                    <Link href={s.href} onClick={() => setServicesOpen(false)}>
                                        {s.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li><Link href="/contact">CONTACT US</Link></li>
                </ul>

                <button
                    className="hamburger"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {mobileOpen && (
                <ul className="mobile-menu">
                    <li><Link href="/" onClick={() => setMobileOpen(false)}>HOME</Link></li>
                    <li><Link href="/about" onClick={() => setMobileOpen(false)}>ABOUT</Link></li>
                    <li><Link href="/portfolio" onClick={() => setMobileOpen(false)}>PORTFOLIO</Link></li>
                    <li><Link href="/testimonials" onClick={() => setMobileOpen(false)}>TESTIMONIALS</Link></li>
                    <li><Link href="/services" onClick={() => setMobileOpen(false)}>SERVICES</Link></li>
                    <li><Link href="/contact" onClick={() => setMobileOpen(false)}>CONTACT US</Link></li>
                </ul>
            )}

            <style jsx>{`
                .navbar {
                    background: #1a1a1a;
                    width: 100%;
                    height: 100px;
                    position: sticky;
                    align-item: center;
                    justify-content: center;
                    top: 0;
                    z-index: 1000;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                }

                .nav-inner {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 40px;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .nav-logo {
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                    flex-shrink: 0;
                }

                .nav-links {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    padding-right: 50px;
                }

                .nav-links li {
                    position: relative;
                }

                .nav-links :global(a) {
                    color: #ffffff !important;
                    font-size: 13px;
                    font-weight: 700;
                    text-decoration: none;
                    letter-spacing: 0.6px;
                    cursor: pointer;
                    transition: color 0.2s;
                    font-family: "Nunito Sans", sans-serif;
                    white-space: nowrap;
                }

                .nav-links :global(a:hover) {
                    color: #f57c15 !important;
                }

                .nav-services-trigger {
                    color: #ffffff;
                    font-size: 13px;
                    font-weight: 700;
                    letter-spacing: 0.6px;
                    cursor: pointer;
                    transition: color 0.2s;
                    font-family: "Nunito Sans", sans-serif;
                    white-space: nowrap;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    user-select: none;
                }

                .nav-services-trigger:hover {
                    color: #f57c15;
                }

                .caret {
                    font-size: 8px;
                    margin-top: 1px;
                    transition: transform 0.2s;
                }

                .nav-dropdown {
                    position: relative;
                    cursor: pointer;
                }

                .dropdown-menu {
                    position: absolute;
                    top: calc(100% + 18px);
                    left: 50%;
                    transform: translateX(-50%);
                    background: #1a1a1a;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 6px;
                    list-style: none;
                    min-width: 190px;
                    padding: 8px 0;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
                    z-index: 999;
                    margin: 0;
                    pointer-events: none;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.2s ease, visibility 0.2s ease;
                }

                .dropdown-menu.open {
                    opacity: 1;
                    visibility: visible;
                    pointer-events: all;
                }

                .dropdown-menu li :global(a) {
                    display: block;
                    padding: 10px 18px;
                    font-size: 13px;
                    font-weight: 600;
                    color: #dddddd !important;
                    letter-spacing: 0.3px;
                    transition: background 0.15s, color 0.15s;
                }

                .dropdown-menu li :global(a:hover) {
                    background: rgba(245, 124, 21, 0.12);
                    color: #f57c15 !important;
                }

                .hamburger {
                    display: none;
                    flex-direction: column;
                    gap: 5px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 4px;
                }

                .hamburger span {
                    display: block;
                    width: 24px;
                    height: 2px;
                    background: #fff;
                    border-radius: 2px;
                }

                .hamburger:hover span {
                    background: #f57c15;
                }

                .mobile-menu {
                    list-style: none;
                    margin: 0;
                    padding: 12px 0;
                    background: #111;
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                }

                .mobile-menu li :global(a) {
                    display: block;
                    padding: 12px 24px;
                    color: #ffffff !important;
                    font-size: 13px;
                    font-weight: 700;
                    text-decoration: none;
                    letter-spacing: 0.6px;
                    transition: color 0.2s, background 0.2s;
                }

                .mobile-menu li :global(a:hover) {
                    color: #f57c15 !important;
                    background: rgba(245, 124, 21, 0.08);
                }

                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    .hamburger {
                        display: flex;
                    }
                    .nav-inner {
                        padding: 0 20px;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;