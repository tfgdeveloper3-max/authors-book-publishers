"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

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
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    /* ── Dropdown: delayed close so gap between trigger & menu doesn't close it ── */
    const handleMouseEnter = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setServicesOpen(true);
    };

    const handleMouseLeave = () => {
        closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
    };

    return (
        <nav className="navbar">
            <div className="nav-glow-line" />

            <div className="nav-inner">
                <Link href="/" className="nav-logo">
                    <Image
                        src="/images/logos/logo.png"
                        alt="Belmont Publishing"
                        width={570}
                        height={200}
                        style={{ height: "150px", width: "300px" }}
                    />
                </Link>

                <ul className="nav-links">
                    <li><Link href="/">HOME</Link></li>
                    <li><Link href="/about">ABOUT</Link></li>
                    <li><Link href="/portfolio">PORTFOLIO</Link></li>
                    <li><Link href="/testimonials">TESTIMONIALS</Link></li>

                    {/* ── Services dropdown ── */}
                    <li
                        className="nav-dropdown"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Clicking "SERVICES" goes to /services page */}
                        <Link href="/services" className="nav-services-trigger">
                            SERVICES <span className="caret">&#9660;</span>
                        </Link>

                        {/* Dropdown stays open as long as mouse is over trigger OR menu */}
                        <ul
                            className={`dropdown-menu${servicesOpen ? " open" : ""}`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {serviceLinks.map((s) => (
                                <li key={s.href}>
                                    <Link
                                        href={s.href}
                                        onClick={() => setServicesOpen(false)}
                                    >
                                        {s.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li className="nav-cta-li">
                        <Link href="/contact" className="nav-cta-link">CONTACT US</Link>
                    </li>
                </ul>

                <button
                    className="hamburger"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                </button>
            </div>

            {mobileOpen && (
                <ul className="mobile-menu">
                    <li><Link href="/" onClick={() => setMobileOpen(false)}>HOME</Link></li>
                    <li><Link href="/about" onClick={() => setMobileOpen(false)}>ABOUT</Link></li>
                    <li><Link href="/portfolio" onClick={() => setMobileOpen(false)}>PORTFOLIO</Link></li>
                    <li><Link href="/testimonials" onClick={() => setMobileOpen(false)}>TESTIMONIALS</Link></li>
                    <li><Link href="/services" onClick={() => setMobileOpen(false)}>SERVICES</Link></li>
                    {serviceLinks.map((s) => (
                        <li key={s.href} className="mobile-sub">
                            <Link href={s.href} onClick={() => setMobileOpen(false)}>
                                {s.label}
                            </Link>
                        </li>
                    ))}
                    <li><Link href="/contact" onClick={() => setMobileOpen(false)}>CONTACT US</Link></li>
                </ul>
            )}

            <style jsx>{`
                .navbar {
                    background: rgba(20, 20, 20, 0.92);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    width: 100%;
                    height: 80px;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    border-bottom: 1px solid rgba(245, 124, 21, 0.15);
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4),
                                0 1px 0 rgba(245, 124, 21, 0.08);
                    font-family: Raleway, Arial, sans-serif;
                }

                .nav-glow-line {
                    position: absolute;
                    bottom: -1px; left: 50%;
                    transform: translateX(-50%);
                    width: 420px; height: 2px;
                    background: linear-gradient(
                        90deg, transparent, rgba(245, 124, 21, 0.55), transparent
                    );
                    pointer-events: none;
                    z-index: 1;
                }

                .nav-inner {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 40px;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    position: relative;
                    z-index: 2;
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
                    gap: 4px;
                    list-style: none;
                    margin: 0;
                    padding: 0 20px 0 0;
                }
                .nav-links li { position: relative; }

                .nav-links :global(a) {
                    color: rgba(255, 255, 255, 0.75) !important;
                    font-size: 12px;
                    font-weight: 700;
                    text-decoration: none;
                    letter-spacing: 0.7px;
                    padding: 8px 12px;
                    border-radius: 6px;
                    transition: color 0.2s, background 0.2s;
                    font-family: Raleway, Arial, sans-serif;
                    white-space: nowrap;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
                .nav-links :global(a:hover) {
                    color: #f57c15 !important;
                    background: rgba(245, 124, 21, 0.08);
                }

                /* Services trigger — now a real Link */
                :global(.nav-services-trigger) {
                    color: rgba(255, 255, 255, 0.75) !important;
                    font-size: 12px !important;
                    font-weight: 700 !important;
                    letter-spacing: 0.7px !important;
                    padding: 8px 12px !important;
                    border-radius: 6px !important;
                    display: flex !important;
                    align-items: center !important;
                    gap: 5px !important;
                    white-space: nowrap !important;
                    text-decoration: none !important;
                    transition: color 0.2s, background 0.2s !important;
                    font-family: Raleway, Arial, sans-serif !important;
                }
                :global(.nav-services-trigger:hover) {
                    color: #f57c15 !important;
                    background: rgba(245, 124, 21, 0.08) !important;
                }

                .caret {
                    font-size: 7px;
                    opacity: 0.7;
                    transition: transform 0.2s;
                }

                .nav-dropdown { position: relative; cursor: pointer; }

                /* CTA */
                .nav-cta-li :global(.nav-cta-link) {
                    background: #f57c15 !important;
                    color: #fff !important;
                    border-radius: 6px !important;
                    padding: 9px 20px !important;
                    box-shadow: 0 4px 16px rgba(245, 124, 21, 0.35);
                    transition: background 0.2s, box-shadow 0.2s !important;
                    letter-spacing: 0.7px !important;
                }
                .nav-cta-li :global(.nav-cta-link:hover) {
                    background: #d96a0a !important;
                    box-shadow: 0 6px 24px rgba(245, 124, 21, 0.52) !important;
                }

                /* ── Dropdown menu ── */
                .dropdown-menu {
                    position: absolute;
                    top: calc(100% + 8px);
                    left: 50%;
                    transform: translateX(-50%) translateY(-6px);
                    background: rgba(18, 18, 18, 0.97);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid rgba(245, 124, 21, 0.18);
                    border-radius: 10px;
                    list-style: none;
                    min-width: 190px;
                    padding: 6px;
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.55),
                                0 0 24px rgba(245, 124, 21, 0.06);
                    z-index: 999;
                    margin: 0;
                    pointer-events: none;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
                }
                .dropdown-menu.open {
                    opacity: 1;
                    visibility: visible;
                    pointer-events: all;
                    transform: translateX(-50%) translateY(0);
                }

                /* Bridge gap so mouse moving from trigger to menu doesn't close it */
                .dropdown-menu::before {
                    content: '';
                    position: absolute;
                    top: -10px;
                    left: 0; right: 0;
                    height: 10px;
                }

                .dropdown-menu li :global(a) {
                    display: block !important;
                    padding: 9px 14px !important;
                    font-size: 12px !important;
                    font-weight: 600 !important;
                    color: rgba(255, 255, 255, 0.70) !important;
                    border-radius: 6px !important;
                    letter-spacing: 0.3px;
                    background: transparent !important;
                    transition: background 0.15s, color 0.15s !important;
                    white-space: nowrap;
                    justify-content: flex-start !important;
                }
                .dropdown-menu li :global(a:hover) {
                    background: rgba(245, 124, 21, 0.12) !important;
                    color: #f57c15 !important;
                }

                /* Hamburger */
                .hamburger {
                    display: none;
                    flex-direction: column;
                    gap: 5px;
                    background: none;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 6px;
                    cursor: pointer;
                    padding: 8px;
                    transition: border-color 0.2s;
                }
                .hamburger:hover { border-color: rgba(245, 124, 21, 0.4); }
                .bar {
                    display: block;
                    width: 20px; height: 2px;
                    background: rgba(255, 255, 255, 0.75);
                    border-radius: 2px;
                    transition: background 0.2s;
                }
                .hamburger:hover .bar { background: #f57c15; }

                /* Mobile menu */
                .mobile-menu {
                    list-style: none;
                    margin: 0;
                    padding: 8px 0;
                    background: rgba(14, 14, 14, 0.97);
                    backdrop-filter: blur(16px);
                    border-top: 1px solid rgba(245, 124, 21, 0.12);
                }
                .mobile-menu li :global(a) {
                    display: block;
                    padding: 12px 24px;
                    color: rgba(255, 255, 255, 0.75) !important;
                    font-size: 12px;
                    font-weight: 700;
                    text-decoration: none;
                    letter-spacing: 0.7px;
                    transition: color 0.2s, background 0.2s;
                    border-left: 2px solid transparent;
                }
                .mobile-menu li :global(a:hover) {
                    color: #f57c15 !important;
                    background: rgba(245, 124, 21, 0.07);
                    border-left-color: #f57c15;
                }
                /* Sub-links indented on mobile */
                .mobile-sub :global(a) {
                    padding-left: 40px !important;
                    font-size: 11px !important;
                    color: rgba(255, 255, 255, 0.50) !important;
                    font-weight: 600 !important;
                    border-left-color: transparent !important;
                }
                .mobile-sub :global(a:hover) {
                    color: #f57c15 !important;
                    border-left-color: #f57c15 !important;
                }

                @media (max-width: 768px) {
                    .nav-links { display: none; }
                    .hamburger { display: flex; }
                    .nav-inner { padding: 0 20px; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;