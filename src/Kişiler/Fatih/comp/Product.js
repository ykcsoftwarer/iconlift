import React from "react";

import { Link } from "react-router-dom";
import HeaderThree from "../../../common/header/HeaderThree";

const Product = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <>
    <HeaderThree/>
      <section className="blog-one-sec blog-one-sec--two blog-one-sec--two--blog">
        <div className="container">
          <div className="row">
            {/* Start Blog One Single */}
            <div
              className="col-xl-4 col-lg-4 wow animated fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <div className="inner">
                    <img
                      src={publicUrl + "assets/images/site planlaması/lüks asansör kabinleri/Tac Mahal.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="blog-one__single-content">
                    <div className="inner-content">
                      <h2>
                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>
                          Kabinler
                        </Link>
                      </h2>
                      <div className="btn-box">
                        <Link
                          to={process.env.PUBLIC_URL + `/blog-details`}
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
            {/* End Blog One Single */}

            {/* Start Blog One Single */}
            <div
              className="col-xl-4 col-lg-4 wow animated fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <div className="inner">
                    <img
                      src={publicUrl + "assets/images/site planlaması/Motor Çeşitleri/1562577795.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="blog-one__single-content">
                    <div className="inner-content">
                      <h2>
                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>
                          Motor
                        </Link>
                      </h2>
                      <div className="btn-box">
                        <Link
                          to={process.env.PUBLIC_URL + `/blog-details`}
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
            {/* End Blog One Single */}

            {/* Start Blog One Single */}
            <div
              className="col-xl-4 col-lg-4 wow animated fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <div className="inner">
                    <img
                      src={publicUrl + "assets/images/site planlaması/kumanda panosu/wf sürücülü asansör kumanda panosu.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="blog-one__single-content">
                    <div className="inner-content">
                      <h2>
                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>
                          Kumanda Panosu
                        </Link>
                      </h2>
                      <div className="btn-box">
                        <Link
                          to={process.env.PUBLIC_URL + `/blog-details`}
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
            {/* End Blog One Single */}

            {/* Start Blog One Single */}
            <div
              className="col-xl-4 col-lg-4 wow animated fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <div className="inner">
                    <img
                      src={publicUrl + "assets/images/site planlaması/asansör butonu/asansör buton yerleri/gtn-serisi-cam-dokunmatik-kabin-butonyeri-bsb-asansor-42943-7382947106.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="blog-one__single-content">
                    <div className="inner-content">
                      <h2>
                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>
                          Butonlar
                        </Link>
                      </h2>
                      <div className="btn-box">
                        <Link
                          to={process.env.PUBLIC_URL + `/blog-details`}
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
            {/* End Blog One Single */}

            {/* Start Blog One Single */}
            <div
              className="col-xl-4 col-lg-4 wow animated fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <div className="inner">
                    <img
                      src={publicUrl + "assets/images/site planlaması/Halatlar/asanhalat.jpeg"}
                      alt=""
                    />
                  </div>
                  <div className="blog-one__single-content">
                    <div className="inner-content">
                      <h2>
                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>
                          Halatlar
                        </Link>
                      </h2>
                      <div className="btn-box">
                        <Link
                          to={process.env.PUBLIC_URL + `/blog-details`}
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
            {/* End Blog One Single */}

            {/* Start Blog One Single */}
            <div
              className="col-xl-4 col-lg-4 wow animated fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <div className="inner">
                    <img
                      src={publicUrl + "assets/images/site planlaması/asansör rayları/asanray.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="blog-one__single-content">
                    <div className="inner-content">
                      <h2>
                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>
                          Raylar
                        </Link>
                      </h2>
                      <div className="btn-box">
                        <Link
                          to={process.env.PUBLIC_URL + `/blog-details`}
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
            {/* End Blog One Single */}
            {/* Start Blog One Single */}
            <div
              className="col-xl-4 col-lg-4 wow animated fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <div className="inner">
                    <img
                      src={publicUrl + "assets/images/blog/blog-v2-img6.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="blog-one__single-content">
                    <div className="inner-content">
                      <h2>
                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>
                          Mekanik Aksanlar
                        </Link>
                      </h2>
                      <div className="btn-box">
                        <Link
                          to={process.env.PUBLIC_URL + `/blog-details`}
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
            {/* End Blog One Single */}
            {/* Start Blog One Single */}
            <div
              className="col-xl-4 col-lg-4 wow animated fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <div className="inner">
                    <img
                      src={publicUrl + "assets/images/blog/blog-v2-img6.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="blog-one__single-content">
                    <div className="inner-content">
                      <h2>
                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>
                          Bağkantı Parçaları
                        </Link>
                      </h2>
                      <div className="btn-box">
                        <Link
                          to={process.env.PUBLIC_URL + `/blog-details`}
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
            {/* End Blog One Single */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
