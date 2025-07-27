import { useTheme } from "@/components/theme-provider"
import { useEffect } from "react";
import HeroSection from "./home-sections/hero-section";
import { Element } from 'react-scroll'
import AboutSection from "./home-sections/about-section";
import ServicesSection from "./home-sections/services-section";
import ContactSection from "./home-sections/contact-section";

const HomePage = () => {
    const { setTheme } = useTheme();

    useEffect(() => setTheme('dark'), []);

    return (
        <div className="flex flex-col">
            <Element name="home">
                <HeroSection />
            </Element>
            <Element name="about">
                <AboutSection />
            </Element>
            <Element name="services">
                <ServicesSection />
            </Element>
            <Element name="contact">
                <ContactSection />
            </Element>
            <div className="h-[5rem]" />
        </div>
    )
}

export default HomePage