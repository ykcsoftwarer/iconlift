import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import WhyChooseFour from '../components/why-choose-us/WhyChooseFour';
import FeatureTwo from '../components/features/FeatureTwo';
import ProjectOne from '../components/project/ProjectOne';
import ServiceFour from '../components/services/ServiceFour';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';


const ServicesPage = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                heading="Hakkımızda"
                currentPage="İconlift Asansör, Konya'da kurulmuş, asansör sektöründe kaliteli ve güvenli ürünler tedarik eden ve ihraç eden bir firmadır. Müşterilerimizin can ve mal güvenliğini sağlamak, yaşam kalitesini arttırmak ve ülke ekonomisine katkıda bulunmak vizyonumuzun temelini oluşturmaktadır. Koşulsuz müşteri memnuniyeti ilkesiyle çalışan tecrübeli ve profesyonel ekibimiz, yurtiçi ve yurtdışında asansör hizmeti vermektedir. " 
            />
            <WhyChooseFour />
            <FeatureTwo />
            <ProjectOne />
            <ServiceFour />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default ServicesPage;