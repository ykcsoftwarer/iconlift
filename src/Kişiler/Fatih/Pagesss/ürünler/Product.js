import React from "react";

import { Link } from "react-router-dom";
import HeaderThree from "../../../../common/header/HeaderThree";
import liftApi from "../../../../data/data";
import FooterOne from "../../../../common/footer/FooterOne";

const Product = () => {
  const api = liftApi;

 

  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <>
      <HeaderThree />
      <section className="blog-one-sec blog-one-sec--two blog-one-sec--two--blog">
        <div className="container">
          <div className="row">

          {api.map((e)=>{
            return(
              <div
              className="col-xl-4 col-lg-4 wow animated fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <div className="inner">
                    <img
                      src={
                        publicUrl +
                        e.image
                      }
                      alt=""
                    />
                  </div>
                  <div className="blog-one__single-content">
                    <div className="inner-content">
                      <h2>
                        <Link to={process.env.PUBLIC_URL + `/ürünler/${e.type}`}>
                          {e.type}
                        </Link>
                      </h2>
                      <div className="btn-box">
                        <Link
                          to={process.env.PUBLIC_URL + `/ürünler/${e.type}`}
                          className="thm-btn"
                          data-text="Read More +"
                        >
                          Read More +
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
