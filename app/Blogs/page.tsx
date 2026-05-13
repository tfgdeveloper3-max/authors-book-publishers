"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const categories = ["All", "Publishing Tips", "Writing Craft", "Author Marketing", "Industry News", "Success Stories"];

const blogs = [
    {
        id: 1,
        category: "Publishing Tips",
        title: "Self-Publishing vs. Traditional Publishing: Which Path Is Right for Your Book in 2025?",
        excerpt: "The publishing landscape has shifted dramatically. We break down the real economics, timelines, and creative trade-offs of both routes so you can make the decision that is right for your book.",
        author: "Belmont Editorial Team",
        date: "December 12, 2024",
        readTime: "8 min read",
        featured: true,
        tag: "Must Read",
    },
    {
        id: 2,
        category: "Writing Craft",
        title: "The First Chapter Formula: How to Hook Every Reader in the Opening 500 Words",
        excerpt: "Literary agents, publishers, and readers all make their decision in the first few pages. Here is the exact structure our ghostwriters use to open a book with maximum impact.",
        author: "Sarah Mitchell",
        date: "December 8, 2024",
        readTime: "6 min read",
        featured: false,
        tag: "Writing",
    },
    {
        id: 3,
        category: "Author Marketing",
        title: "How to Build an Author Platform Before Your Book Is Even Finished",
        excerpt: "The authors who sell the most books start building their audience years before publication. Here is the exact platform-building roadmap we share with every client.",
        author: "James Harlow",
        date: "December 4, 2024",
        readTime: "10 min read",
        featured: false,
        tag: "Marketing",
    },
    {
        id: 4,
        category: "Industry News",
        title: "The Audiobook Boom: Why Every Author Needs an Audio Strategy in 2025",
        excerpt: "Audiobook revenue has grown 400% in five years. We examine what the numbers mean for independent authors and exactly how to capitalise on the format's explosive growth.",
        author: "Belmont Editorial Team",
        date: "November 28, 2024",
        readTime: "7 min read",
        featured: false,
        tag: "Industry",
    },
    {
        id: 5,
        category: "Success Stories",
        title: "From Idea to Amazon Bestseller: How One Client Sold 40,000 Copies in 90 Days",
        excerpt: "We share the full story of how a first-time author worked with our team to write, design, publish, and market a business book that reached number one in three categories.",
        author: "Belmont Editorial Team",
        date: "November 21, 2024",
        readTime: "12 min read",
        featured: false,
        tag: "Case Study",
    },
    {
        id: 6,
        category: "Writing Craft",
        title: "The Truth About Writer's Block (And the Professional Techniques That Actually Cure It)",
        excerpt: "Writer's block is not a creativity problem — it is a clarity problem. Professional authors almost never get blocked because they follow systems. Here are theirs.",
        author: "Elena Vasquez",
        date: "November 15, 2024",
        readTime: "5 min read",
        featured: false,
        tag: "Writing",
    },
    {
        id: 7,
        category: "Publishing Tips",
        title: "Book Cover Design Psychology: The Visual Signals That Make Readers Buy",
        excerpt: "A cover has 0.3 seconds to communicate genre, quality, and emotional promise. We analyse the design principles behind bestselling covers across every major genre.",
        author: "Marcus Webb",
        date: "November 10, 2024",
        readTime: "9 min read",
        featured: false,
        tag: "Design",
    },
    {
        id: 8,
        category: "Author Marketing",
        title: "Amazon Algorithm Decoded: How to Get Your Book Recommended to Thousands of Readers",
        excerpt: "Amazon's recommendation engine drives the majority of book discoveries. Understanding how it works — and how to optimise for it — is the single highest-leverage marketing activity for any author.",
        author: "James Harlow",
        date: "November 5, 2024",
        readTime: "11 min read",
        featured: false,
        tag: "Marketing",
    },
    {
        id: 9,
        category: "Success Stories",
        title: "The Memoir That Changed a Family: A Client's Journey from Memory to Published Book",
        excerpt: "A daughter wanted to preserve her father's life story before it was lost. Here is how a simple family memoir became a deeply moving published book — and a legacy that will endure for generations.",
        author: "Sarah Mitchell",
        date: "October 29, 2024",
        readTime: "8 min read",
        featured: false,
        tag: "Case Study",
    },
];

const tagColors: Record<string, string> = {
    "Must Read": "#f57c15",
    "Writing": "#3b82f6",
    "Marketing": "#10b981",
    "Industry": "#8b5cf6",
    "Case Study": "#f59e0b",
    "Design": "#ec4899",
};

export default function BlogsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const featured = blogs.find(b => b.featured)!;
    const filtered = blogs.filter(b =>
        !b.featured && (activeCategory === "All" || b.category === activeCategory)
    );

    return (
        <>
            <Navbar />
            <main className="bl-page">

                {/* ══ HERO ══ */}
                <section className="bl-hero">
                    <div className="bl-hero-bg" />
                    <div className="bl-hero-inner">
                        <div className="bl-hero-text">
                            <span className="bl-eyebrow">The Belmont Journal</span>
                            <h1 className="bl-hero-title">
                                Insights For<br />
                                <em className="bl-hero-em">Authors & Publishers</em>
                            </h1>
                            <p className="bl-hero-sub">
                                Expert advice on writing craft, publishing strategy, author marketing,
                                and the business of books — from the team behind 5,000+ published titles.
                            </p>
                        </div>
                        <div className="bl-hero-stats">
                            <div className="bl-hs-item"><span className="bl-hs-val">50+</span><span className="bl-hs-label">Articles Published</span></div>
                            <div className="bl-hs-sep" />
                            <div className="bl-hs-item"><span className="bl-hs-val">12K+</span><span className="bl-hs-label">Monthly Readers</span></div>
                            <div className="bl-hs-sep" />
                            <div className="bl-hs-item"><span className="bl-hs-val">5</span><span className="bl-hs-label">Expert Contributors</span></div>
                        </div>
                    </div>
                </section>

                {/* ══ FEATURED POST ══ */}
                <section className="bl-featured-wrap">
                    <div className="bl-featured-inner">
                        <div className="bl-featured-label">
                            <span className="bl-fl-line" />
                            <span className="bl-fl-text">Featured Article</span>
                            <span className="bl-fl-line" />
                        </div>
                        <article className="bl-featured-card">
                            <div className="bl-featured-img">
                                <div className="bl-fi-pattern" />
                                <span className="bl-fi-tag" style={{ background: tagColors[featured.tag] || "#f57c15" }}>
                                    {featured.tag}
                                </span>
                            </div>
                            <div className="bl-featured-body">
                                <span className="bl-post-cat">{featured.category}</span>
                                <h2 className="bl-featured-title">{featured.title}</h2>
                                <p className="bl-featured-excerpt">{featured.excerpt}</p>
                                <div className="bl-post-meta">
                                    <div className="bl-meta-author">
                                        <div className="bl-avatar">{featured.author.charAt(0)}</div>
                                        <span>{featured.author}</span>
                                    </div>
                                    <span className="bl-meta-sep">·</span>
                                    <span className="bl-meta-date">{featured.date}</span>
                                    <span className="bl-meta-sep">·</span>
                                    <span className="bl-meta-read">{featured.readTime}</span>
                                </div>
                                <Link
                                    href={`/Blogs/${featured.id}`}
                                    style={{ textDecoration: "none" }}
                                    onMouseEnter={e => {
                                        const el = e.currentTarget.querySelector(".bl-read-btn") as HTMLElement;
                                        if (el) { el.style.background = "#d96c0d"; el.style.transform = "translateY(-2px)"; }
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget.querySelector(".bl-read-btn") as HTMLElement;
                                        if (el) { el.style.background = "#f57c15"; el.style.transform = "translateY(0)"; }
                                    }}
                                >
                                    <button className="bl-read-btn">
                                        Read Article
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </article>
                    </div>
                </section>

                {/* ══ FILTER + GRID ══ */}
                <section className="bl-grid-section">
                    <div className="bl-grid-inner">

                        {/* Category Filter */}
                        <div className="bl-filter-row">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`bl-filter-btn ${activeCategory === cat ? "active" : ""}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Posts Grid */}
                        <div className="bl-grid">
                            {filtered.map(post => (
                                <article key={post.id} className="bl-card">
                                    <div className="bl-card-img">
                                        <div className="bl-ci-pattern" />
                                        <span className="bl-ci-tag" style={{ background: tagColors[post.tag] || "#f57c15" }}>
                                            {post.tag}
                                        </span>
                                    </div>
                                    <div className="bl-card-body">
                                        <span className="bl-post-cat">{post.category}</span>
                                        <h3 className="bl-card-title">{post.title}</h3>
                                        <p className="bl-card-excerpt">{post.excerpt}</p>
                                        <div className="bl-card-footer">
                                            <div className="bl-post-meta">
                                                <div className="bl-avatar bl-avatar-sm">{post.author.charAt(0)}</div>
                                                <span className="bl-meta-date">{post.date}</span>
                                                <span className="bl-meta-sep">·</span>
                                                <span className="bl-meta-read">{post.readTime}</span>
                                            </div>
                                            <Link
                                                href={`/Blogs/${post.id}`}
                                                style={{
                                                    display: "inline-flex", alignItems: "center", gap: "5px",
                                                    fontSize: "11.5px", fontWeight: 700, color: "#f57c15",
                                                    textDecoration: "none", letterSpacing: "0.5px",
                                                    transition: "gap 0.2s",
                                                }}
                                                onMouseEnter={e => { e.currentTarget.style.gap = "8px"; }}
                                                onMouseLeave={e => { e.currentTarget.style.gap = "5px"; }}
                                            >
                                                Read More
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {filtered.length === 0 && (
                            <div className="bl-empty">No articles in this category yet. Check back soon.</div>
                        )}
                    </div>
                </section>

                {/* ══ NEWSLETTER CTA ══ */}
                <section className="bl-newsletter">
                    <div className="bl-nl-inner">
                        <div className="bl-nl-text">
                            <span className="bl-eyebrow" style={{ color: "rgba(245,124,21,0.8)" }}>Stay Informed</span>
                            <h2 className="bl-nl-title">
                                Get Expert Publishing<br />
                                <span className="bl-hl">Insights Every Week</span>
                            </h2>
                            <p className="bl-nl-sub">
                                Join 12,000+ authors and publishing professionals receiving
                                our weekly dispatch — no spam, unsubscribe anytime.
                            </p>
                        </div>
                        <div className="bl-nl-form">
                            <div className="bl-input-row">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="bl-input"
                                />
                                <button className="bl-nl-btn">Subscribe</button>
                            </div>
                            <p className="bl-nl-note">✓ Weekly insights &nbsp;·&nbsp; ✓ No spam &nbsp;·&nbsp; ✓ Unsubscribe anytime</p>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                .bl-page { font-family: 'Raleway', sans-serif; color: #111; background: #fff; }
                .bl-eyebrow { display:inline-block; font-size:10.5px; font-weight:800; letter-spacing:3px; text-transform:uppercase; color:#f57c15; margin-bottom:14px; }
                .bl-hl { color:#f57c15; }

                /* ══ HERO ══ */
                .bl-hero { background:#060606; padding:80px 24px 70px; position:relative; overflow:hidden; }
                .bl-hero-bg { position:absolute; inset:0; background:radial-gradient(ellipse 60% 70% at 20% 50%, rgba(245,124,21,0.07) 0%, transparent 60%),radial-gradient(ellipse 40% 50% at 80% 30%, rgba(245,124,21,0.04) 0%, transparent 60%); pointer-events:none; }
                .bl-hero-inner { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:1fr auto; gap:60px; align-items:center; position:relative; z-index:2; }
                .bl-hero-title { font-family:'Oswald',sans-serif; font-size:clamp(2.8rem,5.5vw,4.8rem); color:#fff; line-height:0.95; text-transform:uppercase; letter-spacing:-1px; margin:0 0 20px 0; }
                .bl-hero-em { color:#f57c15; font-style:italic; }
                .bl-hero-sub { font-size:14px; color:rgba(255,255,255,0.42); line-height:1.7; max-width:480px; margin:0; }
                .bl-hero-stats { display:flex; align-items:center; gap:24px; white-space:nowrap; }
                .bl-hs-item { display:flex; flex-direction:column; align-items:center; gap:4px; }
                .bl-hs-val { font-family:'Oswald',sans-serif; font-size:26px; font-weight:700; color:#f57c15; line-height:1; }
                .bl-hs-label { font-size:10px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:rgba(255,255,255,0.3); }
                .bl-hs-sep { width:1px; height:40px; background:rgba(255,255,255,0.08); }

                /* ══ FEATURED ══ */
                .bl-featured-wrap { background:#fff; padding:72px 24px 0; }
                .bl-featured-inner { max-width:1200px; margin:0 auto; }
                .bl-featured-label { display:flex; align-items:center; gap:16px; margin-bottom:32px; }
                .bl-fl-line { flex:1; height:1px; background:rgba(0,0,0,0.07); }
                .bl-fl-text { font-size:10.5px; font-weight:800; letter-spacing:3px; text-transform:uppercase; color:#f57c15; white-space:nowrap; }
                .bl-featured-card { display:grid; grid-template-columns:420px 1fr; border:1px solid rgba(0,0,0,0.07); border-radius:12px; overflow:hidden; transition:box-shadow 0.3s; }
                .bl-featured-card:hover { box-shadow:0 20px 50px rgba(0,0,0,0.08); }
                .bl-featured-img { position:relative; background:#0c0c0c; min-height:340px; overflow:hidden; }
                .bl-fi-pattern {
                    position:absolute; inset:0;
                    background: repeating-linear-gradient(45deg, rgba(245,124,21,0.03) 0px, rgba(245,124,21,0.03) 1px, transparent 1px, transparent 40px),
                                radial-gradient(ellipse 80% 60% at 50% 50%, rgba(245,124,21,0.08) 0%, transparent 70%);
                }
                .bl-fi-tag { position:absolute; top:20px; left:20px; font-size:10px; font-weight:800; letter-spacing:2px; text-transform:uppercase; color:#fff; padding:5px 12px; border-radius:3px; }
                .bl-featured-body { padding:44px 40px; display:flex; flex-direction:column; justify-content:center; }
                .bl-post-cat { font-size:10px; font-weight:800; letter-spacing:2.5px; text-transform:uppercase; color:rgba(245,124,21,0.7); margin-bottom:14px; display:block; }
                .bl-featured-title { font-family:'Oswald',sans-serif; font-size:clamp(1.6rem,2.5vw,2.1rem); color:#111; text-transform:uppercase; line-height:1.15; margin:0 0 16px 0; letter-spacing:-0.3px; }
                .bl-featured-excerpt { font-size:13.5px; color:#666; line-height:1.7; margin:0 0 28px 0; }
                .bl-post-meta { display:flex; align-items:center; gap:8px; margin-bottom:28px; flex-wrap:wrap; }
                .bl-meta-author { display:flex; align-items:center; gap:8px; }
                .bl-avatar { width:28px; height:28px; border-radius:50%; background:#f57c15; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:800; color:#fff; flex-shrink:0; }
                .bl-avatar-sm { width:22px; height:22px; font-size:9px; }
                .bl-meta-author span { font-size:12px; font-weight:700; color:#333; }
                .bl-meta-sep { color:#ccc; font-size:12px; }
                .bl-meta-date { font-size:11.5px; color:#888; }
                .bl-meta-read { font-size:11.5px; color:#888; }
                .bl-read-btn { display:inline-flex; align-items:center; gap:8px; background:#f57c15; color:#fff; border:none; padding:12px 24px; border-radius:4px; font-family:'Raleway',sans-serif; font-size:12px; font-weight:800; letter-spacing:1.2px; text-transform:uppercase; cursor:pointer; transition:background 0.25s,transform 0.2s,box-shadow 0.25s; box-shadow:0 5px 18px rgba(245,124,21,0.28); }

                /* ══ GRID SECTION ══ */
                .bl-grid-section { background:#fff; padding:56px 24px 90px; }
                .bl-grid-inner { max-width:1200px; margin:0 auto; }

                /* Filter */
                .bl-filter-row { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:48px; padding-bottom:24px; border-bottom:1px solid rgba(0,0,0,0.06); }
                .bl-filter-btn { font-family:'Raleway',sans-serif; font-size:11.5px; font-weight:700; letter-spacing:0.5px; padding:8px 18px; border-radius:30px; border:1.5px solid rgba(0,0,0,0.1); background:transparent; color:#555; cursor:pointer; transition:all 0.2s; }
                .bl-filter-btn:hover { border-color:#f57c15; color:#f57c15; }
                .bl-filter-btn.active { background:#f57c15; border-color:#f57c15; color:#fff; }

                /* Grid */
                .bl-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
                .bl-card { border:1px solid rgba(0,0,0,0.07); border-radius:10px; overflow:hidden; transition:border-color 0.3s,box-shadow 0.3s,transform 0.3s; }
                .bl-card:hover { border-color:rgba(245,124,21,0.25); box-shadow:0 12px 32px rgba(0,0,0,0.07); transform:translateY(-4px); }
                .bl-card-img { position:relative; height:160px; background:#0c0c0c; overflow:hidden; }
                .bl-ci-pattern {
                    position:absolute; inset:0;
                    background: repeating-linear-gradient(-45deg, rgba(245,124,21,0.03) 0px, rgba(245,124,21,0.03) 1px, transparent 1px, transparent 32px),
                                radial-gradient(ellipse 70% 60% at 50% 50%, rgba(245,124,21,0.07) 0%, transparent 70%);
                }
                .bl-ci-tag { position:absolute; top:14px; left:14px; font-size:9.5px; font-weight:800; letter-spacing:1.8px; text-transform:uppercase; color:#fff; padding:4px 10px; border-radius:3px; }
                .bl-card-body { padding:22px 22px 18px; display:flex; flex-direction:column; flex:1; }
                .bl-card-title { font-family:'Oswald',sans-serif; font-size:16px; font-weight:600; color:#111; text-transform:uppercase; line-height:1.25; margin:0 0 10px 0; }
                .bl-card-excerpt { font-size:12.5px; color:#777; line-height:1.65; margin:0 0 18px 0; flex:1; }
                .bl-card-footer { display:flex; align-items:center; justify-content:space-between; padding-top:14px; border-top:1px solid rgba(0,0,0,0.05); gap:12px; flex-wrap:wrap; }
                .bl-empty { text-align:center; padding:60px 24px; font-size:14px; color:#999; }

                /* ══ NEWSLETTER ══ */
                .bl-newsletter { background:#060606; padding:90px 24px; position:relative; overflow:hidden; }
                .bl-newsletter::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse 60% 80% at 50% 50%, rgba(245,124,21,0.06) 0%, transparent 70%); pointer-events:none; }
                .bl-nl-inner { max-width:1100px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; position:relative; z-index:2; }
                .bl-nl-title { font-family:'Oswald',sans-serif; font-size:clamp(2rem,3.5vw,2.8rem); color:#fff; text-transform:uppercase; line-height:1.1; margin:0 0 16px 0; letter-spacing:-0.3px; }
                .bl-nl-sub { font-size:13.5px; color:rgba(255,255,255,0.38); line-height:1.7; margin:0; }
                .bl-input-row { display:flex; gap:0; margin-bottom:12px; }
                .bl-input { flex:1; background:rgba(255,255,255,0.06); border:1.5px solid rgba(255,255,255,0.1); border-right:none; border-radius:4px 0 0 4px; padding:13px 18px; font-family:'Raleway',sans-serif; font-size:13px; color:#fff; outline:none; transition:border-color 0.25s; }
                .bl-input::placeholder { color:rgba(255,255,255,0.3); }
                .bl-input:focus { border-color:rgba(245,124,21,0.5); }
                .bl-nl-btn { background:#f57c15; color:#fff; border:none; padding:13px 24px; border-radius:0 4px 4px 0; font-family:'Raleway',sans-serif; font-size:12px; font-weight:800; letter-spacing:1.2px; text-transform:uppercase; cursor:pointer; white-space:nowrap; transition:background 0.25s; }
                .bl-nl-btn:hover { background:#d96c0d; }
                .bl-nl-note { font-size:11px; color:rgba(255,255,255,0.25); margin:0; letter-spacing:0.3px; }

                /* ══ RESPONSIVE ══ */
                @media (max-width:1024px) {
                    .bl-hero-inner { grid-template-columns:1fr; }
                    .bl-hero-stats { justify-content:flex-start; }
                    .bl-featured-card { grid-template-columns:1fr; }
                    .bl-featured-img { min-height:220px; }
                    .bl-nl-inner { grid-template-columns:1fr; gap:40px; }
                }
                @media (max-width:768px) {
                    .bl-grid { grid-template-columns:1fr; }
                }
                @media (max-width:520px) {
                    .bl-input-row { flex-direction:column; }
                    .bl-input { border-right:1.5px solid rgba(255,255,255,0.1); border-radius:4px; border-bottom:none; }
                    .bl-nl-btn { border-radius:4px; }
                }
            `}</style>
            </main>
            <FooterSection />
        </>
    );
}