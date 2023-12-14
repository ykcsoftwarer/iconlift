import React, { useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import { useIconContext } from '../context/Context';
import HeaderThree from '../common/header/HeaderThree';
import FooterOne from '../common/footer/FooterOne';
import CategorySpare from '../Kişiler/Hümeyra/yedek/CategorySpare';

const SpareDetail = () => {
 
 
    const {slug}= useParams()
    const {fetchPageData, page ,lang}= useIconContext()
    useEffect(() => {
        fetchPageData(slug)
    },[lang ,slug])
    const modulPage = page?.filter((page) => page?.modulName === "categoriesmenu")
  
    const menu = modulPage[0]?.menu;

    const modulPages = page?.filter((page) => page?.modulName === "productdetails")
      const data = modulPages[0]?.data;

    
  console.log("modulll", menu);
    console.log("xx",data)
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
             <HeaderThree />
           
   
                           
                         
             <section className="services-details-page">
                    <div className="container">
                        <div className="row">
                            {/* Start Services Details Content */}
                            <div className="col-xl-7 col-lg-7">
                                <div className="services-details__content" >
                                   
                                    <div className="services-details__text-box1">
                                        <div className="title">
                                            <h2 style={{textTransform:"uppercase"}}>
                                            {slug}

                                            </h2>
                                        </div>
                                        <p className="text-1">{data?.content1}</p>

                                        
                                        
                                    </div>
 <div className="services-details__img1"

 >
                                        <img src={data?.image} alt="" />
                                    </div>
                       
                                </div>
                            </div>
                            {/* End Services Details Content */}

                            {/* Start Services Details Sidebar */}
                            <div className="col-xl-5 col-lg-5">
                                <div className="services-details__sidebar">
                                 
                                   
                                     <CategorySpare menu={menu} />
                                  
                                </div>
                            </div>
                        
                            <div className="row">
  {data?.images &&
    data?.images?.map((image, index) => (
      <div className="services-details__content col-md-4" key={index}>
        <img 
        src={image} alt="" style={{ height: '250px' }} />
      </div>
    ))}
</div>
                        </div>
                    </div>
                </section>
                          
           


                <FooterOne />
            </>
        )
  
}

export default SpareDetail
