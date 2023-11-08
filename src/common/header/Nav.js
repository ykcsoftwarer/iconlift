import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className="main-menu text-center">
            <nav>
                <ul className="main-menu__list">
                    <li className="dropdown current">
                        <Link to={process.env.PUBLIC_URL + `/`}>AnaSayfa</Link>
                        
                    </li>
           
                   
                    <li className="dropdown">
                        <Link to={process.env.PUBLIC_URL + `/asansör`}>Asansör Çeşitleri</Link>
                        <ul>
                            <li><Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Makine Daireli Asansör</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Makine Dairesiz Asansör</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Akıllı/Yapay Zekalı AsansörLer</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Hidrolik Asansörler</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Yük Asansörler</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Yolcu Asansörler</Link></li>
                            <li className="dropdown">
                                <Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Lüks Asansörler</Link>
                                <ul>
                                    <li><Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Panoramik</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Diğerleri</Link></li>
                                 
                                </ul>
                            </li>
                            <li><Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Diğer Asansörler</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link to={process.env.PUBLIC_URL + `/ürünler`}>Ürünler</Link>
                        <ul>
                            <li><Link to={process.env.PUBLIC_URL + `/kabin`}>Kabinler</Link></li>
                            <li className="dropdown">
                                <Link to={process.env.PUBLIC_URL + `/multistory-build`}>Kapılar</Link>
                                <ul>
                                    <li><Link to={process.env.PUBLIC_URL + `/architecture-design`}>Tam Otom. Kapılar</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + `/architecture-design`}>Yarı Otom. Kapılar</Link></li>
                                 
                                </ul>
                            </li>
                            <li className="dropdown">
                                <Link to={process.env.PUBLIC_URL + `/multistory-build`}>Makine Motor</Link>
                                <ul>
                                    <li><Link to={process.env.PUBLIC_URL + `/architecture-design`}>Elektirikli</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + `/architecture-design`}>Hidrolik MOtor</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + `/architecture-design`}>Asansör Makine Motorları</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + `/architecture-design`}>Asansör Makine Dairesiz Motorları</Link></li>
                                 
                                </ul>
                            </li>
                            <li><Link to={process.env.PUBLIC_URL + `/portfolio-details`}>Kumanda Pano</Link></li>
                            <li className="dropdown">
                               <Link to={process.env.PUBLIC_URL + `/team`}>Buttonlar</Link>
                                <ul>
                                    <li><Link to={process.env.PUBLIC_URL + `/architecture-design`}>Kat Buttonlar</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + `/architecture-design`}>Kabin Buttonlar</Link></li>
                                   
                                 
                                </ul>
                            </li>
                            <li><Link to={process.env.PUBLIC_URL + `/team`}>Mekanik Aksamlar</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/team-details`}>Aksesuarlar</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/testimonials`}>Raylar</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/pricing`}>Halatlar</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/faq`}>Diger Asansör Aksamları</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link to={process.env.PUBLIC_URL + `#`}>Kurumsal</Link>
                        <ul>
                            <li><Link to={process.env.PUBLIC_URL + `/hakkimizda`}>Hakımzda</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/vizyonumuz`}>Vizyon</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/misyonmuz`}>Misyon</Link></li>
                            
                            
                        </ul>
                    </li>
                    <li><Link to={process.env.PUBLIC_URL + `/iletisim`}>İletişim</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;