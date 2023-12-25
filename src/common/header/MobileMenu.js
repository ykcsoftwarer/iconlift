import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import { CgChevronDown, CgChevronLeft } from "react-icons/cg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useIconContext } from "../../context/Context";

const menuData = [
  {
    title: "Ana Sayfa",
    path: "/index",
  },
  {
    title: "Asansör Çeşitleri",
    path: "/asansor-cesitleri",
    iconClosed: <CgChevronLeft />,
    iconOpened: <CgChevronDown />,

    subNav: [
      {
        title: "Makine Daireli Asansörler",
        path: "/asansor-cesitleri/makine-daireli-asansorler",
      },
      {
        title: "Makine Dairesiz Asansör",
        path: "/asansor-cesitleri/makine-dairesiz-asansor",
      },
      {
        title: "Hidrolik Asansörler",
        path: "/asansor-cesitleri/hidrolik-asansorler",
      },
      {
        title: "Yolcu Asansörler",
        path: "/asansor-cesitleri/yolcu-asansorler",
      },
      {
        title: "Yük Asansörler",
        path: "/asansor-cesitleri/yuk-asansorleri",
      },
      {
        title: "Lüks Asansörle",
        path: "/asansor-cesitleri/luks-asansorler",
      },
      {
        title: "Engelli Asansörler",
        path: "/asansor-cesitleri/engelli-asansorler",
      },
      {
        title: "Diğer Asansör Çeşitleri",
        path: '/asansor-cesitleri/diger-asansor-cesitleri"',
      },
    ],
  },

  {
    title: "Ürünler",
    path: "/urunler",

    iconClosed: <CgChevronLeft />,
    iconOpened: <CgChevronDown />,

    subNav: [
      {
        title: "Kabinler",
        path: "/urunler/kabinler",
        cName: "sub-nav",
      },
      {
        title: "Kapılar",
        path: "/urunler/kapilar",
        cName: "sub-nav",
      },
      {
        title: "Butonlar",
        path: "/urunler/butonlar",
        cName: "sub-nav",
      },
      {
        title: "Kumanda Panoları",
        path: "/urunler/kumanda-panolari",
        cName: "sub-nav",
      },
      {
        title: "Motorlar",
        path: "/urunler/motorlar",
        cName: "sub-nav",
      },
      {
        title: "Halatlar",
        path: "/urunler/halatlar",
        cName: "sub-nav",
      },
      {
        title: "Raylar",
        path: "/urunler/raylar",
        cName: "sub-nav",
      },
      {
        title: "Mekanik Aksamlar",
        path: "/urunler/mekanik-aksamlar",
        cName: "sub-nav",
      },
    ],
  },

  {
    title: "Yedek Parça",
    path: "/yedek-parca",

    iconClosed: <CgChevronLeft />,
    iconOpened: <CgChevronDown />,

    subNav: [
      {
        title: "Kabin Grubu Yedek Parça Çeşitleri",
        path: "/kabin-grubu-yedek-parca-cesitleri",
        cName: "sub-nav",
      },
      {
        title: "Kapı Grubu Yedek Parça Çeşitleri ",
        path: "/yedek-parca/kapi-grubu-yedek-parca-cesitleri",
        cName: "sub-nav",
      },

      {
        title: "Motor Grubu Yedek Parça Çeşitleri ",
        path: "/yedek-parca/motor-grubu-yedek-parca-cesitleri",
      },
      {
        title: "Buton Grubu Yedek Parça Çeşitleri ",
        path: "/yedek-parca/buton-grubu-yedek-parca-cesitleri",
      },
      {
        title: "Kumanda Pano Grubu Yedek Parça Çeşitleri ",
        path: "/yedek-parca/kumanda-pano-grubu-yedek-parca-cesitleri",
      },
      {
        title: "Halat Grubu Yedek Parça Çeşitleri ",
        path: "/yedek-parca/halat-grubu-yedek-parca-cesitleri",
      },
      {
        title: "Ray Grubu Yedek Parça Çeşitleri ",
        path: "/yedek-parca/ray-grubu-yedek-parca-cesitleri",
      },
      {
        title: "Diğer Aksesuarların Grubu ",
        path: "/yedek-parca/diger-aksesuarlarin-grubu",
      },
    ],
  },

  {
    title: "Kurumsal",
    path: "/kurumsal",

    iconClosed: <CgChevronLeft />,
    iconOpened: <CgChevronDown />,

    subNav: [
      {
        title: "Hakkımızda",
        path: "/kurumsal/hakkimizdan",
        cName: "sub-nav",
      },
      {
        title: "Misyonumuz",
        path: "/kurumsal/misyonumuz",
        cName: "sub-nav",
      },
      {
        title: "Vizyonumuz",
        path: "/kurumsal/vizyonumuz",
        cName: "sub-nav",
      },
    ],
  },

  {
    title: "İletişim",
    path: "/iletisim",
  },
];

const SidebarLink = styled(Link)`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 50px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  &:hover {
    background: #c70039;
    color: #fff;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  color: #fff;
  font-weight: 400;
`;

const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  &:hover,
  &:active {
    background: #c70039;
    cursor: pointer;
    color: #fff;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={`${item.path}`} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((data, index) => (
          <DropdownLink to={`${data.path}`} key={index}>
            {item.icon}
            <SidebarLabel>{data.title}</SidebarLabel>
          </DropdownLink>
        ))}
    </>
  );
};

const NavIcon = styled(Link)`
  color: #c70039;
  font-size: 2rem;
  height: 50px;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const SidebarNav = styled.nav`
  background-color: #001659;
  width: 300px;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
  scroll-behavior: smooth;
  -webkit-scroll-behavior: smooth;
  box-shadow: 0 13px 35px -12px rgba(35, 35, 35, 0.15);
  top: 0;
  right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 99999;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const MobileMenu = () => {
  const { about } = useIconContext();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const siteData = about?.data;
  const logo = siteData?.logo01;
  const socialMedia= siteData?.socialMedia
  return (
    <>
      <>
        <NavIcon to="#" style={{ justifyContent: "flex-end" }}>
          <AiOutlineBars onClick={showSidebar} />
        </NavIcon>

        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <div className="mobile-nav__content">
              <div className="logo-box">
                <Link to={`/`} aria-label="logo image">
                  <img src={logo} width="155" alt="" />
                </Link>
              </div>
              <NavIcon to="#">
                <AiIcons.AiOutlineClose
                  style={{
                    color: "white",
                    fontSize: "18px",
                    justifyContent: "flex-start",
                  }}
                  onClick={showSidebar}
                />
              </NavIcon>
              {menuData.map((item, index) => (
                <SubMenu item={item} key={index} />
              ))}
              <ul className="mobile-nav__contact list-unstyled">
                <li>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <a href="mailto:needhelp@packageName__.com">
                    {siteData?.email}
                  </a>
                </li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <a href={`tel:${siteData?.phone02}`}>{siteData?.phone02}</a>
                </li>
              </ul>
              <div className="mobile-nav__top">
                <div className="mobile-nav__social">
                  
                  <a href={socialMedia?.facebook}>
                    <span className="fab fa-facebook-square"></span>
                  </a>
                  <a href={`https://wa.me/${siteData?.whatsapp}`}>
                    <span className="fa fa-whatsapp"></span>
                  </a>
                  <a href={socialMedia?.instagram}>
                    <span className="fab fa-instagram"></span>
                  </a>
                </div>
              </div>
            </div>
          </SidebarWrap>
        </SidebarNav>
      </>
    </>
  );
};

export default MobileMenu;
