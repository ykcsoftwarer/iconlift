import React, { useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import { useIconContext } from '../../../context/Context';
import CategoryAsansor from './CategoryAsansor';



const SingleAsansörContracting = () => {
    useEffect(() => {
      const $ = window.$;
  
      if ($(".tabs-box").length) {
        $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
          e.preventDefault();
          var target = $($(this).attr("data-tab"));
  
          if ($(target).is(":visible")) {
            return false;
          } else {
            target
              .parents(".tabs-box")
              .find(".tab-buttons")
              .find(".tab-btn")
              .removeClass("active-btn");
            $(this).addClass("active-btn");
            target
              .parents(".tabs-box")
              .find(".tabs-content")
              .find(".tab")
              .fadeOut(0);
            target
              .parents(".tabs-box")
              .find(".tabs-content")
              .find(".tab")
              .removeClass("active-tab");
            $(target).fadeIn(300);
            $(target).addClass("active-tab");
          }
        });
      }
    }, []);

    const {slug}= useParams()
    const {fetchPageData, page ,lang,asansorPath}= useIconContext()
    useEffect(() => {
        
            fetchPageData(slug)
    
    },[lang,slug])

    const modulPage = page?.filter((page) => page?.modulName === "categoriesmenu");
    const pageData= modulPage.map((page) => page?.data );
    const menu = modulPage[0]?.menu;

    const modulPages = page?.filter((page) => page?.modulName === "productdetailsmenu")
    console.log("veee",modulPages)
    const data = modulPages[0]?.data;
    


    console.log("modulPage", menu);
    
    console.log("product",pageData);
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="services-details-page">
                    <div className="container">
                        <div className="row">
                            {/* Start Services Details Content */}
                            <div className="col-xl-7 col-lg-7">
                                <div className="services-details__content">
                                    <div className="services-details__img1">
                                        <img src={data?.image} alt="" />
                                    </div>
                                    <div className="services-details__text-box1">
                                        <div className="title">
                                            <h2 style={{textTransform:"uppercase"}}>
                                            {slug}

                                            </h2>
                                        </div>
                                        <p className="text-1">{data?.content1}</p>

                                        
                                        
                                    </div>

                       
                                </div>
                            </div>
                            {/* End Services Details Content */}

                            {/* Start Services Details Sidebar */}
                            <div className="col-xl-5 col-lg-5">
                                <div className="services-details__sidebar">
                                    {/* <ServiceSearch /> */}

                                    {/* Start Services Details Sidebar Single */}
                                   
                                     <CategoryAsansor menu={menu} />
                                    {/* End Services Details Sidebar Single */}

                                    {/* <ButtonBox />
                                    <ServiceContactBox /> */}
                                </div>
                            </div>
                            {/* End Services Details Sidebar */}
                        </div>
                    </div>
                </section>
                </>
  );
};

export default SingleAsansörContracting;