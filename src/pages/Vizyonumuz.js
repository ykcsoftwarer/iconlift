import React from 'react';

import BrandOne from '../components/brand/BrandOne';
import HeaderThree from '../common/header/HeaderThree';
import FooterOne from '../common/footer/FooterOne';
import VizyonumuzDetail from '../components/single-service/VizyonumuzDetail';
import VizyonumuzinDetail from '../components/single-service/VizyonumuzinDetail';

const GeneralContracting = () => {
    return (
        <>
            <HeaderThree />
            <VizyonumuzinDetail/>
            <VizyonumuzDetail />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default GeneralContracting;