"use client";

import { useEffect } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { registerGSAP } from "@/lib/gsapSetup";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import FeaturedBook from "@/components/portfolio/FeaturedBook";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

export default function PortfolioPage() {
    useSmoothScroll();

    useEffect(() => {
        registerGSAP();
    }, []);

    return (
        <>
            <Navbar />
            <PortfolioHero />
            <PortfolioGrid />
            <FeaturedBook />
            <PortfolioCTA />
            <FooterSection />
        </>
    );
}