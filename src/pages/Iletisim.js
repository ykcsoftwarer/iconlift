import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import IletisimMap from '../components/contact/IletisimMap';
import CIletisimForm from '../components/contact/IletisimForm';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';


const ContactPage = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                heading=""
                currentPage="Tüm Talep ve Şikayetleriniz için 7/24 Hizmetinizdeyiz." 
            />
            <IletisimMap />
            <CIletisimForm />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default ContactPage;