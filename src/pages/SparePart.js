import React from 'react'
import HeaderThree from '../common/header/HeaderThree'
import Breadcrumb from '../common/breadcrumb/Breadcrumb'
import FooterOne from '../common/footer/FooterOne'
import Spare from '../Kişiler/Hümeyra/yedek/Spare'

const SparePart = () => {
  return (
    <>
        <HeaderThree />
        <Breadcrumb
                heading="Yedek Parcalar"
                currentPage= "Yedek Parçalar"  
            />
            <Spare/>
              <FooterOne />
    </>
  )
}

export default SparePart
