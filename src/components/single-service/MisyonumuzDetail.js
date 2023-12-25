import React from "react";


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
              <div className="col-xl-12 col-lg-12">
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
                      <h2>Temel değerlerimiz</h2>
                    </div>

                    <p className="text-1">
                      <span className="icon-tick"></span>
                      Dürüstlük,
                    </p>

                    <p className="text-2">
                      {" "}
                      <span className="icon-tick"></span>Güvenilirlik,
                    </p>
                    <p className="text-2">
                      {" "}
                      <span className="icon-tick"></span>Yasal ve Etik Çalışma,
                    </p>
                    <p className="text-2">
                      <span className="icon-tick"></span> Kalite,
                    </p>
                    <p className="text-2">
                      <span className="icon-tick"></span>
                      Sosyal Sorumluluk,
                    </p>
                    <p className="text-2">
                      <span className="icon-tick"></span> Kişisel Verilerin Gizliliğine önem vermek
                    </p>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </section>
      </>
    );
  }
}
