import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useIconContext } from "../../context/Context";


const ElevatorOne = () => {
  const { slug } = useParams();
  const { fetchPageData, page, lang, asansorPath } = useIconContext();
  useEffect(() => {
    if (lang === "tr") {
      fetchPageData("asansor-cesitleri");
    } else if (lang === "en") {
      fetchPageData("elevator-types");
    }
  }, [lang, slug]);

  const modulPage = page?.filter(
    (page) => page?.modulName === "categoriesmenu"
  );
  const pageData = modulPage.map((page) => page?.data);

  console.log("product", pageData);

  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <>
      <section className="services-one-sec">
        <div className="container">
          <div className="sec-title text-center">
            <div className="sec-title__tagline">
              {/* <span className="left"></span>
                  <h6>Our Services</h6> <span className="right"></span> */}
            </div>
            <h2 className="sec-title__title">{slug}</h2>
          </div>

          <div className="row">
            {/* Start Services One Single */}
            {pageData?.map((e, index) => {
              console.log("deeeee", e);

              const cards = e?.map((item, itemIndex) => (
                <div key={itemIndex} className="col-xl-4 col-lg-4">
                  <div className="services-one__single">
                    <div className="services-one__single-img">
                      <img src={item?.image} alt="" />
                    </div>
                    <div className="services-one__single-content">
                      <div className="services-one__single-content-title">
                        <h2>
                          <Link to={`/${asansorPath}/${item?.slug}`}>
                            {item?.title}
                          </Link>
                        </h2>
                      </div>
                      <div className="services-one__single-content-bottom">
                        <p></p>
                        <div className="services-one__single-btn">
                          <Link
                            to={`/${asansorPath}/${item?.slug}`}
                            className="thm-btn"
                            data-text={item?.title}
                          >
                            {item?.title}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ));

              return cards;
            })}
            {/* End Services One Single */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ElevatorOne;
