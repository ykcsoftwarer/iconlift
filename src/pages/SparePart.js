import React from 'react'
import HeaderThree from '../common/header/HeaderThree'
import Breadcrumb from '../common/breadcrumb/Breadcrumb'
import FooterOne from '../common/footer/FooterOne'
import Spare from '../Kişiler/Hümeyra/yedek/Spare'
import { useParams } from 'react-router-dom'
import BreadcrumbSpare from '../common/breadcrumb/BreadcrumbSpare'

const SparePart = () => {
  const { categorySlug,slug} = useParams();
  console.log("yy",categorySlug)

  return (
    <>
        <HeaderThree />
        <BreadcrumbSpare
                heading="Yedek Parça Çeşitleri"  
            />
            <Spare/>
              <FooterOne />
    </>
  )
}

export default SparePart
