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
                                
                                <h1>Misyonumuz</h1> 
                            </div>
                            <h5>"Müşteri beklentilerini aşan yüksek kaliteli hizmeti alım imkanı sağlamak, Müşteri sadakatini temin etmek, Müşterilerine zamanında ve yaratıcı çözümler önermek, Bugünün ve yarının gereksinimlerini tespit ederek şirket kaynaklarını bunları karşılayacak şekilde yönlendirmek, İç ve Dış tedarikçilerden temin edilen ürün ve hizmetlere mutlaka değer ekleyerek müşterimize sunmak, Çalışanlarımıza fırsatlar ve kendilerini ispatlayacakları görevler vermek, yaratıcılığa teşvik etmek,  İconlift Asansör ailesi olarak toplumun refahı ve mutluluğu için çalışmak. 
                İconlift Asansör'ü tercih ettiğiniz için teşekkür ederiz."   </h5>
                        </div>
                        
                    </div>
                </section>
            </>
        )
    }
}