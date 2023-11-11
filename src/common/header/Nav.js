import React from "react";
import { Link } from "react-router-dom";
import liftApi from "../../data/data";

const Nav = () => {
  const api = liftApi;
    console.log(api[0].altcat);
  return (
    <div className="main-menu text-center">
      <nav>
        <ul className="main-menu__list">
          <li className="dropdown current">
            <Link to={process.env.PUBLIC_URL + `/`}>AnaSayfa</Link>
          </li>

          <li className="dropdown">
            <Link to={process.env.PUBLIC_URL + `/asansör`}>
              Asansör Çeşitleri
            </Link>
            <ul>
              <li>
                <Link to={process.env.PUBLIC_URL + `/asansörDetail`}>
                  Makine Daireli Asansör
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + `/asansörDetail`}>
                  Makine Dairesiz Asansör
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + `/asansörDetail`}>
                  Akıllı/Yapay Zekalı AsansörLer
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + `/asansörDetail`}>
                  Hidrolik Asansörler
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + `/asansörDetail`}>
                  Yük Asansörler
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + `/asansörDetail`}>
                  Yolcu Asansörler
                </Link>
              </li>
              <li className="dropdown">
                <Link to={process.env.PUBLIC_URL + `/asansörDetail`}>
                  Lüks Asansörler
                </Link>
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/asansörDetail`}>
                      Panoramik
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/asansörDetail`}>
                      Diğerleri
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + `/asansörDetail`}>
                  Diğer Asansörler
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to={process.env.PUBLIC_URL + `/ürünler`}>Ürünler</Link>

            <ul>
              {api.map((item) => {
                const altcat= item.altcat
                return (
                  <>
                    <li>
                      <Link to={process.env.PUBLIC_URL + `/ürünler/${item.type}`}>
                        {item.type}
                      </Link>
                      {altcat ? <></> : altcat?.map(items =>{
                        return (
                            <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/architecture-design`}>
                     {items}
                    </Link>
                  </li></ul>
                        )
                      })}
                    </li>
                  
                  </>
                );
              })}
             
            </ul>
          </li>
          <li className="dropdown">
            <Link to={process.env.PUBLIC_URL + `/ürünler`}>Yedek Parça</Link>
            <ul>
              <li className="dropdown">
                <Link to={process.env.PUBLIC_URL + `/multistory-build`}>
                  Bağlantı Parçaları
                </Link>
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/architecture-design`}>
                      Asansör Kapısı Bağlantı Seti{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/architecture-design`}>
                      Eksentrik Kapı Pateni (H) Model
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/architecture-design`}>
                      Eksentrik Kapı Pateni (X) Model{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/architecture-design`}>
                      Kanca Kilit Açma Seti Metal
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/architecture-design`}>
                      Kanca Kilit Açma Seti Plastik{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/architecture-design`}>
                      Kapı Metal Demiri Düz
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/architecture-design`}>
                      Kılıç Mandal Plastiği{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/architecture-design`}>
                      Kramer Ayağı
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/architecture-design`}>
                      Kramer Kapı ??????{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/architecture-design`}>
                      Panel Askı Seti Uzun
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/architecture-design`}>
                      Plastik Rampa
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/architecture-design`}>
                      Plastik Tampon
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/architecture-design`}>
                      Plastik Paten (X) Model
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/architecture-design`}>
                      Acil Kilit AÇma Halatı(1.5mm)
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/architecture-design`}>
                      Acil Kilit AÇma Halatı(3mm)
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/architecture-design`}>
                      Kurma Yay
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to={process.env.PUBLIC_URL + `#`}>Kurumsal</Link>
            <ul>
              <li>
                <Link to={process.env.PUBLIC_URL + `/hakkimizda`}>
                  Hakımzda
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + `/vizyonumuz`}>Vizyon</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + `/misyonmuz`}>Misyon</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + `/iletisim`}>İletişim</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
