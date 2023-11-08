import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleMetrialManagment from '../components/single-service/SingleMetrialManagment';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';


const MetrialManagment = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                heading="Misyonumuz"
                currentPage="Müşteri beklentilerini aşan yüksek kaliteli hizmeti alım imkanı sağlamak, Müşteri sadakatini temin etmek, Müşterilerine zamanında ve yaratıcı çözümler önermek, Bugünün ve yarının gereksinimlerini tespit ederek şirket kaynaklarını bunları karşılayacak şekilde yönlendirmek, İç ve Dış tedarikçilerden temin edilen ürün ve hizmetlere mutlaka değer ekleyerek müşterimize sunmak, Çalışanlarımıza fırsatlar ve kendilerini ispatlayacakları görevler vermek, yaratıcılığa teşvik etmek,  İconlift Asansör ailesi olarak toplumun refahı ve mutluluğu için çalışmak. 
                İconlift Asansör'ü tercih ettiğiniz için teşekkür ederiz." 
            />
            <SingleMetrialManagment />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default MetrialManagment;