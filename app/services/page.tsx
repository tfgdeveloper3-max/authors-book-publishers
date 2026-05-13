"use client";

import { useEffect } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { registerGSAP } from "@/lib/gsapSetup";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ServicesProcess from "@/components/services/ServicesProcess";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
    useSmoothScroll();

    useEffect(() => {
        registerGSAP();

        const onResize = () => ScrollTrigger.refresh();
        window.addEventListener("load", onResize);
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("load", onResize);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <>
            <Navbar />
            <ServicesHero />
            <ServicesList />
            <ServicesProcess />
            <ServicesCTA />
            <FooterSection />
        </>
    );
}