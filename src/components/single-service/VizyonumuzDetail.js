import React from "react";
import { Link } from "react-router-dom";
import ButtonBox from "./ButtonBox";
import ServiceContactBox from "./ServiceContactBox";
import ServiceSearch from "./ServiceSearch";

export default class SingleGeneralContracting extends React.Component {
  componentDidMount() {
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
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <section className="services-details-page">
          <div className="container">
            <div className="row">
              {/* Start Services Details Content */}
              <div className="col-xl-7 col-lg-7">
                <div className="services-details__content">
                  <div className="services-details__img1">
                    <img
                      src={
                        publicUrl +
                        "assets/images/services/services-details-img1.jpg"
                      }
                      alt=""
                    />
                  </div>
                  <div className="services-details__text-box1">
                    <div className="title">
                      <h2>İlkelerimiz</h2>
                    </div>

                    <p className="text-1">
                      <span className="icon-tick"></span>
                      Çalışan personelimizin yetenek, güç ve yaratıcılıklarını
                      geliştirmek, onlardan azami fayda ve verimi sağlayarak
                      birlikte gelişmek, devamlılığımızı sağlamak,
                    </p>

                    <p className="text-2">
                      {" "}
                      <span className="icon-tick"></span>Kaliteli hizmet sunmak,
                    </p>
                    <p className="text-2">
                      {" "}
                      <span className="icon-tick"></span>İş ilişkilerimizde en
                      iyi olmak,
                    </p>
                    <p className="text-2">
                      <span className="icon-tick"></span> Hizmette sürekliliği
                      sağlamak için devamlı büyümek, büyümek için yatırım
                      yapmak, yatırım yapmak için kaynak yaratmak,
                    </p>
                    <p className="text-2">
                      <span className="icon-tick"></span>
                      Çalışanlarımızla, taşeronlarımızla, yan sanayi ve
                      tedarikçilerimizle olan ilişkilerimizde adil olmak,
                      karşılıklı fayda sağlamak,
                    </p>
                    <p className="text-2">
                      <span className="icon-tick"></span> Yasalara, çevreye ve
                      ahlaki değerlere saygılı olmak.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Services Details Content */}

              {/* Start Services Details Sidebar */}
              <div className="col-xl-5 col-lg-5">
                <div className="services-details__sidebar">
                  <ServiceSearch />

                  {/* Start Services Details Sidebar Single */}
                  <div className="services-details__sidebar-single services-details-category">
                    <div className="title">
                      <h2>Services Category</h2>
                    </div>
                    <ul className="services-details-category-list">
                      <li>
                        <Link
                          to={process.env.PUBLIC_URL + `/general-contracting`}
                          className="active"
                        >
                          General Contracting
                          <span className="icon-right-arrow"></span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={process.env.PUBLIC_URL + `/metrial-managment`}
                        >
                          Metrial Managment
                          <span className="icon-right-arrow"></span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={process.env.PUBLIC_URL + `/building-renovation`}
                        >
                          Building Renovation
                          <span className="icon-right-arrow"></span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={process.env.PUBLIC_URL + `/architecture-design`}
                        >
                          Architecture Design
                          <span className="icon-right-arrow"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to={process.env.PUBLIC_URL + `/multistory-build`}>
                          Multistory Build
                          <span className="icon-right-arrow"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* End Services Details Sidebar Single */}
                </div>
              </div>
              {/* End Services Details Sidebar */}
            </div>
          </div>
        </section>
      </>
    );
  }
}
