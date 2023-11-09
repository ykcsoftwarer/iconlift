import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import WhyChooseFour from '../components/why-choose-us/WhyChooseFour';
import HakkimizdaDetail from '../components/features/HakkimizdaDetail';
import ProjectOne from '../components/project/ProjectOne';
import ServiceFour from '../components/services/ServiceFour';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';


const ServicesPage = () => {
    return (
        <>
            <HeaderThree />
            <HakkimizdaDetail />
            <WhyChooseFour />
            {/* <ProjectOne /> */}
            {/* <ServiceFour /> */}
            {/* <BrandOne /> */}
            <FooterOne />
        </>
    )
}

export default ServicesPage;