import React from "react";
import { Link } from "react-router-dom";

export default class FeatureTwo extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <section className="feature-two-sec">
          <div
            className="feature-two__bg"
            style={{
              backgroundImage:
                "url(" +
                publicUrl +
                "assets/images/backgrounds/benefits-v1-bg.jpg)",
            }}
          ></div>


          <div className="shape3 float-bob-y">
            <img
              src={publicUrl + "assets/images/shapes/feature-v2-shape1.png"}
              alt=""
            />
          </div>
          <div className="container">
            <div className="sec-title text-center">
              <h1>Tüm Talep ve Şikayetleriniz için 7/24 Hizmetinizdeyiz.</h1>
            </div>
            
          </div>
        </section>
      </>
    );
  }
}
