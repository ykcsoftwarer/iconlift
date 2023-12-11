import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Category from "../Kişiler/Fatih/comp/Category";
import HeaderThree from "../common/header/HeaderThree";
import liftApi from "../data/data";
import { useIconContext } from "../context/Context";

const ProductDetail = () => {
  const { slug } = useParams();
  const { fetchPageData, page, lang } = useIconContext();
  useEffect(() => {
    fetchPageData(slug);
  }, [lang, slug]);
  console.log("product", page);

  const modulPage = page?.filter((page) => page?.modulName === "categoriesmenu")

  const data = modulPage[0]?.data;
const menu = modulPage[0]?.menu;
  console.log("modulPage", menu);
  return (
    <>
      <HeaderThree />
      <section className="blog-list-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
            <h1 style={{textTransform:"uppercase"}}>{slug}</h1>

              
              <div className="blog-list__left">
                {/* Start Blog List Single */}
                {data?.map((item, index) => {
                  
                  return (
                    <div
                      className="blog-list__single wow animated fadeInUp"
                      data-wow-delay="0.1s"
                      key={index}
                    >
                      <div className="row">
                        <div className="col-xl-5">
                          <div className="blog-list__single-img">
                            <img src={item?.image} alt="#" />
                          </div>
                        </div>

                        <div className="col-xl-7">
                          <div className="blog-list__single-content">
                            <h2>
                              <Link to={`/urunler/${slug}/${item?.slug}`}>
                                {item?.title}
                              </Link>
                            </h2>
                            <p>{item?.content1}</p>
                            <div className="btn-box">
                              <Link to={`/urunler/${slug}/${item?.slug}`}>
                                Read More{" "}
                                <span className="icon-plus-sign"></span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* End Blog List Single */}

                {/* End Blog List Single */}

               
              </div>
            </div>

            {/* Start Sidebar */}
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar sidebar__blog-list">
                <Category menu={menu} />
              </div>
            </div>
            {/* End Sidebar */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
