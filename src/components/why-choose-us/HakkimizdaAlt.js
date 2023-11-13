import React from "react";

export default class WhyChooseFour extends React.Component {
  componentDidMount() {
    const $ = window.$;

    if ($(".count-bar").length) {
      $(".count-bar").appear(
        function () {
          var el = $(this);
          var percent = el.data("percent");
          $(el).css("width", percent).addClass("counted");
        },
        {
          accY: -50,
        }
      );
    }

    if ($(".circle-progress").length) {
      $(".circle-progress").appear(function () {
        let circleProgress = $(".circle-progress");
        circleProgress.each(function () {
          let progress = $(this);
          let progressOptions = progress.data("options");
          progress.circleProgress(progressOptions);
        });
      });
    }
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <section className="why-choose-two-sec why-choose-two-sec--services">
          <div
            className="shape1 wow slideInLeft"
            data-wow-delay="100ms"
            data-wow-duration="2500ms"
          >
            <img
              src={publicUrl + "assets/images/shapes/why-choose-v2-shape1.png"}
              alt=""
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="why-choose-two__content">
                  <div className="sec-title">
                    <div className="sec-title__tagline">
                      <h6>Kalİteden Ödün Vermeden</h6>
                    </div>
                    <h2 className="sec-title__title">Sizler İçin buradayız </h2>
                  </div>

                  <div className="why-choose-two__content-progress">
                    <div className="why-choose-two__content-progress-single">
                      <div className="top">
                        <h3>Müşteri Memnuniyeti </h3>
                        <div className="count-text">100%</div>
                      </div>
                      <div className="bar">
                        <div
                          className="bar-inner count-bar"
                          data-percent="100%"
                        ></div>
                      </div>
                    </div>

                    <div className="why-choose-two__content-progress-single">
                      <div className="top">
                        <h3>En Hızlı Teslimat </h3>
                        <div className="count-text">100</div>
                      </div>
                      <div className="bar">
                        <div
                          className="bar-inner count-bar"
                          data-percent="100%"
                        ></div>
                      </div>
                    </div>

                    <div className="why-choose-two__content-progress-single mar0">
                      <div className="top">
                        <h3>En Hızlı Teslimat </h3>
                        <div className="count-text">100%</div>
                      </div>
                      <div className="bar">
                        <div
                          className="bar-inner count-bar"
                          data-percent="100%"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6">
                <div
                  className="why-choose-two__img"
                  style={{
                    backgroundImage:
                      "url(" +
                      publicUrl +
                      "assets/images/resources/why-choose-v2-bg.jpg)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
