"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface StatItem {
    icon: string;
    target: number;
    suffix: string;
    label: string;
}

const stats: StatItem[] = [
    { icon: "/images/icons/counter-img-1.png", target: 1235, suffix: "", label: "Project Completed" },
    { icon: "/images/icons/counter-img-2.png", target: 78, suffix: "", label: "Awards Won" },
    { icon: "/images/icons/counter-img-3.png", target: 186, suffix: "", label: "Hours of work" },
    { icon: "/images/icons/counter-img-4.png", target: 890, suffix: "", label: "Satisfied Clients" },
];

const useCountUp = (target: number, duration: number, start: boolean): number => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        if (!start) return;
        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target, duration, start]);

    return count;
};

interface CountCardProps {
    stat: StatItem;
    started: boolean;
}

const CountCard: React.FC<CountCardProps> = ({ stat, started }) => {
    const count = useCountUp(stat.target, 2000, started);
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div
            className={`stat-card${hovered ? " hovered" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="stat-img-wrap">
                <Image
                    src={stat.icon}
                    alt={stat.label}
                    width={100}
                    height={90}
                    style={{
                        width: "auto",
                        height: "80px",
                        objectFit: "contain",
                        display: "block",
                        position: "relative",
                        zIndex: 1,
                    }}
                />
            </div>
            <div className="stat-number">
                {count}
                {stat.suffix}
            </div>
            <div className="stat-label">{stat.label}</div>

            <style jsx>{`
                .stat-card {
                    background: #fff;
                    border: 1px solid #e8e8e8;
                    border-radius: 8px;
                    padding: 32px 24px 24px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    flex: 1;
                    min-width: 180px;
                    cursor: pointer;
                    transition: background 0.3s ease, border-color 0.3s ease,
                        transform 0.25s ease, box-shadow 0.25s ease;
                }
                .stat-card.hovered {
                    background: #111;
                    border-color: #111;
                    transform: translateY(-5px);
                    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
                }

                .stat-img-wrap {
                    width: 100px;
                    height: 100px;
                    border-radius: 0%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 16px;
                    background: transparent;
                    transition: background 0.3s ease, border-color 0.3s ease;
                    overflow: hidden;
                }
                .stat-card.hovered .stat-img-wrap {
                    background: rgba(255, 255, 255, 0.1);
                    
                }

                .stat-number {
                    font-size: 36px;
                    font-weight: 800;
                    color: #111;
                    margin-bottom: 6px;
                    font-family: "Nunito Sans", sans-serif;
                    transition: color 0.3s ease;
                }
                .stat-card.hovered .stat-number {
                    color: #fff;
                }

                .stat-label {
                    font-size: 13px;
                    color: #666;
                    font-family: "Nunito Sans", sans-serif;
                    transition: color 0.3s ease;
                }
                .stat-card.hovered .stat-label {
                    color: rgba(255, 255, 255, 0.75);
                }
            `}</style>
        </div>
    );
};

const CounterSection: React.FC = () => {
    const [started, setStarted] = useState<boolean>(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setStarted(true);
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="counter-section" ref={sectionRef}>
            <div className="counter-inner">
                {stats.map((stat) => (
                    <CountCard key={stat.label} stat={stat} started={started} />
                ))}
            </div>

            <style jsx>{`
                .counter-section {
                    background: #f9f9f9;
                    font-family: "Nunito Sans", sans-serif;
                    padding: 60px 60px;
                }
                .counter-inner {
                    display: flex;
                    gap: 24px;
                    max-width: 1100px;
                    margin: 0 auto;
                    flex-wrap: wrap;
                }
                @media (max-width: 768px) {
                    .counter-section { padding: 50px 20px; }
                    .counter-inner { gap: 16px; }
                }
            `}</style>
        </section>
    );
};

export default CounterSection;