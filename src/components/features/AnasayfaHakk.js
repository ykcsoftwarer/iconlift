import React from 'react';
import {Link} from 'react-router-dom';

export default class FeatureFour extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                {/* Start  */}
                <section className="feature-four">
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sec-title__tagline">
                                <span className="left"></span>
                                <h6>İCONLİFT ASANSÖR SİSTEMLERİ</h6> <span className="right"></span>
                            </div>
                            <h2 className="sec-title__title">YENİ NESİL ASANSÖR TEKNOLOJİLERİ</h2>
                        </div>
                        <div className="row">
                            {/* Start Feature Four Single */}
                            <div className="col-xl-4">
                                <div className="feature-four__single">
                                    <div className="feature-four__single-img">
                                        <img src={publicUrl+"assets/images/update1.0/feature-v3-img1.jpg"} alt="#" />
                                    </div>
                                </div>
                            </div>
                            {/* End Feature Four Single */}

                            {/* Start Feature Four Single */}
                            <div className="col-xl-4">
                                <div className="feature-four__single style2 text-center">
                                    <div className="feature-four__single-icon">
                                        <span className="icon-interior-design-1"></span>
                                    </div>
                                    <div className="feature-four__single-content">
                                        <span>İCONLİFT ASANSÖR</span>
                                        <h2><Link to={`/kurumsal/hakkimizdan`}>HAKKIMIZDA</Link></h2>
                                        <p>İconlift Asansör, Konya'da kurulmuş, asansör sektöründe kaliteli
              ve güvenli ürünler tedarik eden ve ihraç eden bir firmadır.
              </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Feature Four Single */}

                            {/* Start Feature Four Single */}
                            <div className="col-xl-4">
                                <div className="feature-four__single">
                                    <div className="feature-four__single-img">
                                        <img src={publicUrl+"assets/images/update1.0/feature-v3-img2.jpg"} alt="#" />
                                    </div>
                                </div>
                            </div>
                            {/* End Feature Four Single */}

                            {/* Start Feature Four Single */}
                            <div className="col-xl-4">
                                <div className="feature-four__single style2 text-center">
                                    <div className="feature-four__single-icon">
                                        <span className="icon-crane"></span>
                                    </div>
                                    <div className="feature-four__single-content">
                                         <span>İCONLİFT ASANSÖR</span>
                                        <h2><Link to={`/kurumsal/vizyonumuz`}>VİZYONUMUZ</Link></h2>
                                        <p>Asansör sektöründe varolan rekabet koşulları ve bilinç düzeyi artmış müşterilerin değişen istek ve beklentilerini  sürekli geliştirilmesinizorunlu kılmaktadır. </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Feature Four Single */}

                            {/* Start Feature Four Single */}
                            <div className="col-xl-4">
                                <div className="feature-four__single">
                                    <div className="feature-four__single-img">
                                        <img src={publicUrl+"assets/images/update1.0/feature-v3-img3.jpg"} alt="#" />
                                    </div>
                                </div>
                            </div>
                            {/* End Feature Four Single */}

                            {/* Start Feature Four Single */}
                            <div className="col-xl-4">
                                <div className="feature-four__single style2 text-center">
                                    <div className="feature-four__single-icon">
                                        <span className="icon-painting"></span>
                                    </div>
                                    <div className="feature-four__single-content">
                                    <span>İCONLİFT ASANSÖR</span>
                                        <h2><Link to={`/kurumsal/misyonumuz`}>MİSYONUMUZ</Link></h2>
                                        <p>Müşteri beklentilerini aşan yüksek kaliteli hizmeti alım imkanı sağlamak, Müşteri sadakatini temin etmek, Müşterilerine zamanında ve yaratıcı çözümler önermekteyiz. </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Feature Four Single */}
                        </div>
                    </div>
                </section>
                {/* End Feature Four */}
            </>
        )
    }
}