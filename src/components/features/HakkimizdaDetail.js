import React from 'react';
import {Link} from 'react-router-dom';

export default class FeatureTwo extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="feature-two-sec">
                    <div className="feature-two__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/benefits-v1-bg.jpg)'}}></div>
                    <div className="shape3 float-bob-y"><img src={publicUrl+"assets/images/shapes/feature-v2-shape1.png"} alt="" /></div>
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sec-title__tagline">
                                
                                <h1>HAKKIMIZDA</h1> 
                            </div>
                            <h5>"İconlift Asansör, Konya'da kurulmuş, asansör sektöründe kaliteli ve güvenli ürünler tedarik eden ve ihraç eden bir firmadır. Müşterilerimizin can ve mal güvenliğini sağlamak, yaşam kalitesini arttırmak ve ülke ekonomisine katkıda bulunmak vizyonumuzun temelini oluşturmaktadır. Koşulsuz müşteri memnuniyeti ilkesiyle çalışan tecrübeli ve profesyonel ekibimiz, yurtiçi ve yurtdışında asansör hizmeti vermektedir. " </h5>
                        </div>
                        
                    </div>
                </section>
            </>
        )
    }
}