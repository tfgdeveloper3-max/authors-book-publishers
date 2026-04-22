"use client";

import { useState } from "react";

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        id: 1,
        question: "What are manuscript editing and formatting services?",
        answer:
            "Manuscript editing and formatting refine your story from first draft to polished work. This includes improving clarity, flow, grammar, and structural consistency. Formatting ensures your book meets both print and e-book standards, presenting your literary work professionally so readers may engage with it effortlessly.",
    },
    {
        id: 2,
        question: "What is included in e-book ghostwriting services?",
        answer:
            "Our e-book ghostwriting services include full manuscript writing, research, chapter outlines, revisions, and final proofreading. We capture your voice and vision, delivering a publish-ready manuscript that feels authentically yours across all genres and topics.",
    },
    {
        id: 3,
        question: "How does online book publishing work?",
        answer:
            "Online book publishing involves formatting your manuscript, designing a cover, converting to digital formats, and distributing to platforms like Amazon Kindle, Apple Books, and Barnes & Noble. We handle every step, ensuring your book is properly listed and discoverable by readers worldwide.",
    },
    {
        id: 4,
        question: "What book marketing and promotion services do you offer?",
        answer:
            "We offer comprehensive book marketing including social media campaigns, email marketing, PPC advertising, book launch planning, press releases, and author website development. Our strategies are tailored to your genre and target audience to maximize visibility and sales.",
    },
    {
        id: 5,
        question: "Why should I choose Authors Book Publishing?",
        answer:
            "Authors Book Publishing offers end-to-end publishing solutions under one roof. With over 1,200 published titles, awards-winning editors, and a global distribution network spanning 400+ stores in 100+ countries, we provide unmatched expertise, transparency, and dedication to every author's journey.",
    },
];

const FAQSection: React.FC = () => {
    const [openId, setOpenId] = useState<number>(1);

    const toggle = (id: number): void => {
        setOpenId(openId === id ? 0 : id);
    };

    return (
        <section className="faq-section">
            <h2 className="faq-heading">FAQs</h2>

            <div className="faq-list">
                {faqs.map((faq) => (
                    <div key={faq.id} className="faq-item">
                        <button
                            className={`faq-question${openId === faq.id ? " open" : ""}`}
                            onClick={() => toggle(faq.id)}
                        >
                            <span>{faq.question}</span>
                            <span className="faq-icon">{openId === faq.id ? "▲" : "▶"}</span>
                        </button>
                        {openId === faq.id && (
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <style jsx>{`
                .faq-section {
                    background: #fff;
                    font-family: "Nunito Sans", sans-serif;
                    padding: 70px 60px;
                }
                .faq-heading {
                    text-align: center;
                    font-size: clamp(22px, 2.2vw, 32px);
                    font-weight: 700;
                    color: #111;
                    margin-bottom: 36px;
                }
                .faq-list {
                    max-width: 860px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .faq-item {
                    border-radius: 6px;
                    overflow: hidden;
                }
                .faq-question {
                    width: 100%;
                    background: #f57c15;
                    color: #fff;
                    border: none;
                    padding: 16px 20px;
                    font-size: 14.5px;
                    font-weight: 600;
                    font-family: "Nunito Sans", sans-serif;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                    text-align: left;
                    transition: background 0.2s;
                }
                .faq-question:hover {
                    background: #d96a0a;
                }
                .faq-icon {
                    font-size: 11px;
                    flex-shrink: 0;
                }
                .faq-answer {
                    background: #fff;
                    border: 1px solid #f0f0f0;
                    border-top: none;
                    padding: 20px 22px;
                }
                .faq-answer p {
                    font-size: 14px;
                    color: #444;
                    line-height: 1.8;
                    margin: 0;
                }
                @media (max-width: 768px) {
                    .faq-section { padding: 50px 20px; }
                }
            `}</style>
        </section>
    );
};

export default FAQSection;