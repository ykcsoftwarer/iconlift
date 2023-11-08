import React from 'react';

import BrandOne from '../components/brand/BrandOne';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import FooterOne from '../common/footer/FooterOne';
import SingleGeneralContracting from '../components/single-service/SingleGeneralContracting';

const GeneralContracting = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                heading="Vizyonumuz"
                currentPage="Asansör sektöründe varolan çetin rekabet koşulları ve bilinç düzeyi artmış müşterilerin değişen istek ve beklentileri; gerek ürünlerin ve gerekse sunulan hizmetlerin sürekli geliştirilmesini, iyileştirilmesini zorunlu kılmaktadır. Iconlift Asansör, asansör sektöründeki talep ve beklentileri, tecrübeli ve konuya uzman bakışıyla objektif biçimde değerlendirmektedir. Dinamik, modern, yenilikçi, gelişmeci bir yaklaşımla müşteri memnuniyeti sağlayarak günlük değil, sürekli müşteriler ve en üst düzeyde zamanında teslim ile müşteri memnuniyetini oluşturmaya çalışmaktadır. “Kalitede Süreklilik”, “Uygun Fiyat”, “Karşılıklı Güven” ve “Dürüstlük” vizyonumuzu oluşturan temel ilke ve vazgeçilmeyecek değerlerimizdir. Iconlift Asansör, bu ilke ve değerlere bağlı kalarak; asansör sektörünün en iyileri arasında yerini almak istemektedir." 
            />
            <SingleGeneralContracting />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default GeneralContracting;