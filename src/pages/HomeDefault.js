import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import HeroOne from "../components/hero/HeroOne";
import AnasayfaVideo from '../components/about/AnasayfaVideo';
import ProjectThree from "../components/project/ProjectThree";
import ServiceThree from "../components/services/ServiceThree";
import AnasayfaHakk from "../components/features/AnasayfaHakk";
import FeatureThree from "../components/features/FeatureThree";
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