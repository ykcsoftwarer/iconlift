import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import HeroOne from "../components/hero/HeroOne";
import AnasayfaVideo from '../components/about/AnasayfaVideo';
import ProjectThree from "../components/project/ProjectThree";
import ServiceThree from "../components/services/ServiceThree";
import AnasayfaHakk from "../components/features/AnasayfaHakk";
import FeatureThree from "../components/features/FeatureThree";
// import FaqOne from "../components/faq/FaqOne";
// import TestimonialThree from "../components/testimonial/TestimonialThree";
// import PricingOne from "../components/pricing/PricingOne";
// import WorkPerformanceOne from "../components/work-performance/WorkPerformanceOne";
// import BrandOne from "../components/brand/BrandOne";
// import BlogOne from "../components/blog/BlogOne";
import FooterOne from "../common/footer/FooterOne";

const HomeDefault = () => {
    return (
        <>
            <HeaderOne />
            <HeroOne />
            <ServiceThree />
            <AnasayfaVideo />
            <ProjectThree />
            <AnasayfaHakk />
            <FeatureThree />
        
            <FooterOne />
        </>
    )
}

export default HomeDefault;