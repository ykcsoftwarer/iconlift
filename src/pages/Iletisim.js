import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import IletisimDetail from '../components/features/IletisimDetail';
import IletisimMap from '../components/contact/IletisimMap';
import IletisimForm from '../components/contact/IletisimForm';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';


const ContactPage = () => {
    return (
        <>
            <HeaderThree />
         <IletisimDetail/>
            <IletisimMap />
            <IletisimForm />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default ContactPage;