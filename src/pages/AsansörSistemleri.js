import React from 'react'
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';
import AsansorOne from '../Kişiler/Hümeyra/asansor/AsansorOne';
import { useParams } from 'react-router-dom';

const AsansörSistemleri = () => {
  const { categorySlug,slug} = useParams();
  return (
    <>
     <HeaderThree />
     <Breadcrumb
                heading={slug}
                currentPage= "Asansör Çeşitleri"  
            />
            <AsansorOne />
            {/* <BrandOne /> */}
            <FooterOne />
    </>
  )
}

export default AsansörSistemleri