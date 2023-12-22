import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useIconContext } from "../context/Context";
import HeaderThree from "../common/header/HeaderThree";
import FooterOne from "../common/footer/FooterOne";
import CategorySpare from "../components/spare/CategorySpare.jsx";

const SpareDetail = () => {
  const { slug } = useParams();
  const { fetchPageData, page, lang } = useIconContext();
  useEffect(() => {
    fetchPageData(slug);
  }, [lang,slug]);
  const modulPage = page?.filter(
    (page) => page?.modulName === "categoriesmenu"
  );

  const menu = modulPage[0]?.menu;

  const modulPages = page?.filter(
    (page) => page?.modulName === "image"
  );
  const data = modulPages[0]?.data;


  return (
    <>
      <HeaderThree />

      <section className="services-details-page">
        <div className="container">
          <div className="row">
            {/* Start Services Details Content */}
            <div className="col-xl-7 col-lg-7">
              <div className="row">
                {modulPages?.map((modul, modulIndex) => (
                  <div className="col-md-6 mb-4" key={modulIndex}>
                    <div className="card" style={{  transition: "transform 0.5s, box-shadow 0.5s",}}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                    >
                      <img
                        src={modul?.data?.images[0]}
                        alt={`Image ${modulIndex + 1}`}
                        className="card-img-top"
                        style={{ height: "250px"}}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{modul?.data?.title1}</h5>
                      
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* End Services Details Content */}

            {/* Start Services Details Sidebar */}
            <div className="col-xl-5 col-lg-5">
              <div className="services-details__sidebar">
                <CategorySpare menu={menu} />
              </div>
            </div>

   

          </div>
        </div>
      </section>

      <FooterOne />
    </>
  );
};

export default SpareDetail;
