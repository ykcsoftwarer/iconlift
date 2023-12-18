import React, { useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';

import CategoryAsansor from './CategoryAsansor';
import { useIconContext } from '../../context/Context';



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
    
    const content1 = data?.content1;
    const parser = new DOMParser();
    const cleanHtml = parser.parseFromString(content1, "text/html")?.body
      .textContent;
    const dangerouslyHtml = { __html: cleanHtml };

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
                                        <div className="title text-center">
                                            <h2 style={{textTransform:"uppercase"}}>
                                            {data?.title1}

                                            </h2>
                                        </div>
                                        {/* <p className="text-1">{data?.content1}</p> */}
                                        <p
                    className="text-[14px] lg:text-[16px] text-center xl:px-4 w-full"
                    dangerouslySetInnerHTML={dangerouslyHtml}
                  ></p>
                                        
                                        
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