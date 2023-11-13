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
              <h1>VİZYONUMUZ</h1>
            </div>

            <h5>
              "Asansör sektöründe varolan çetin rekabet koşulları ve bilinç
              düzeyi artmış müşterilerin değişen istek ve beklentileri; gerek
              ürünlerin ve gerekse sunulan hizmetlerin sürekli geliştirilmesini,
              iyileştirilmesini zorunlu kılmaktadır. Iconlift Asansör, asansör
              sektöründeki talep ve beklentileri, tecrübeli ve konuya uzman
              bakışıyla objektif biçimde değerlendirmektedir. Dinamik, modern,
              yenilikçi, gelişmeci bir yaklaşımla müşteri memnuniyeti sağlayarak
              günlük değil, sürekli müşteriler ve en üst düzeyde zamanında
              teslim ile müşteri memnuniyetini oluşturmaya çalışmaktadır.
              “Kalitede Süreklilik”, “Uygun Fiyat”, “Karşılıklı Güven” ve
              “Dürüstlük” vizyonumuzu oluşturan temel ilke ve vazgeçilmeyecek
              değerlerimizdir. Iconlift Asansör, bu ilke ve değerlere bağlı
              kalarak; asansör sektörünün en iyileri arasında yerini almak
              istemektedir."{" "}
            </h5>
          </div>
        </section>
      </>
    );
  }
}
