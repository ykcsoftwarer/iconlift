import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useIconContext } from "../context/Context";
import HeaderThree from "../common/header/HeaderThree";
import CategoryProduct from "../components/product/CategoryProduct";
import FooterOne from "../common/footer/FooterOne";

const ProductDetail = () => {
  const { slug } = useParams();
  const { fetchPageData, page, lang, productPath } = useIconContext();

  useEffect(() => {
    fetchPageData(slug);
  }, [lang, slug]);
  

  const modulPage = page?.filter(
    (page) => page?.modulName === "categoriesmenu"
  );

  const data = modulPage[0]?.data;
  const menu = modulPage[0]?.menu;
  
  return (
    <>
      <HeaderThree />
      <section className="blog-list-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <h1 style={{ textTransform: "uppercase" }}>{slug}</h1>

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
                        <div
                          className="col-xl-5"
                          style={{
                            boxShadow:
                              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                          }}
                        >
                          <div className="blog-list__single-img">
                            <img src={item?.image} alt="#" />
                          </div>
                        </div>

                        <div className="col-xl-7">
                          <div className="blog-list__single-content">
                            <h2>
                              <Link
                                to={`/${productPath}/${slug}/${item?.slug}`}
                              >
                                {item?.title}
                              </Link>
                            </h2>
                            <p>{item?.content1}</p>
                            {/* <div className="btn-box">
                              <Link
                                to={`/${productPath}/${slug}/${item?.slug}`}
                              >
                                Read More{" "}
                                <span className="icon-plus-sign"></span>
                              </Link>
                            </div> */}
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
                <CategoryProduct menu={menu} />
              </div>
            </div>
            {/* End Sidebar */}
          </div>
        </div>
      </section>
      <FooterOne />
    </>
  );
};

export default ProductDetail;
