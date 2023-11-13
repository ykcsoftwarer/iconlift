import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import MisyonumuzinDetail from '../components/single-service/MisyonumuzinDetail';
import MisyonumuzDetail from '../components/single-service/MisyonumuzDetail';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';


const MetrialManagment = () => {
    return (
        <>
            <HeaderThree />
            
            <MisyonumuzinDetail />
            <MisyonumuzDetail />
            {/* <BrandOne /> */}
            <FooterOne />
        </>
    )
}

export default MetrialManagment;