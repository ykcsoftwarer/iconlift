import React, { useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import HeaderThree from "../../../../common/header/HeaderThree";
import liftApi from "../../../../data/data";
import FooterOne from "../../../../common/footer/FooterOne";
import { useIconContext } from "../../../../context/Context";

const Product = () => {
  
  const {slug}= useParams()
  const {fetchPageData, page ,lang}= useIconContext()
  useEffect(() => {
      if(lang === "tr"){

          fetchPageData("urunler")
      }else if(lang === "en"){
          fetchPageData("products")
      }
  },[lang,slug])

  console.log("product",page);

  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <>
      <HeaderThree />
      <section className="blog-one-sec blog-one-sec--two blog-one-sec--two--blog">
        <div className="container">
          <div className="row">

          {page?.map((k,index)=>{
            const e=k?.data
            
            console.log("deeeee",e)
            return(
              <div
              className="col-xl-4 col-lg-4 wow animated fadeInUp"
              data-wow-delay="0.1s"
              key={index}
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <div className="inner">
                    <img
                      src={
                        
                        e?.image
                      }
                      alt=""
                    />
                  </div>
                  <div className="blog-one__single-content">
                    <div className="inner-content">
                      <h2>
                        <Link to={`/urunler/${e?.title2}`}>
                          {e?.title1}
                        </Link>
                      </h2>
                      <div className="btn-box">
                        <Link
                          to={`/urunler/${e?.title2}`}
                          className="thm-btn"
                          data-text= {e?.button}
                        >
                         {e?.button}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          })}
            {/* Start Blog One Single */}
            
            {/* End Blog One Single */}
          </div>
        </div>
      </section>
      <FooterOne />
    </>
  );
};

export default Product;
