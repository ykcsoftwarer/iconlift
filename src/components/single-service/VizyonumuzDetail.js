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
            </div>
          </div>
        </section>
      </>
    );
  }
}
