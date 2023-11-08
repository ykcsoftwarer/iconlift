import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="services-details__sidebar-single services-details-category">
      <div className="title">
        <h2>Ürünler Category</h2>
      </div>
      <ul className="services-details-category-list">
        <li>
          <Link to={process.env.PUBLIC_URL + `/general-contracting`}>
            Kabinler
            <span className="icon-right-arrow"></span>
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + `/metrial-managment`}>
            Motor
            <span className="icon-right-arrow"></span>
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + `/building-renovation`}>
            Kumanda Panosu
            <span className="icon-right-arrow"></span>
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + `/architecture-design`}>
            Buttonlar
            <span className="icon-right-arrow"></span>
          </Link>
        </li>
        <li>
          <Link
            to={process.env.PUBLIC_URL + `/multistory-build`}
            className="active"
          >
            Halatlar
            <span className="icon-right-arrow"></span>
          </Link>
        </li>
        <li>
          <Link
            to={process.env.PUBLIC_URL + `/multistory-build`}
            className="active"
          >
            Raylar
            <span className="icon-right-arrow"></span>
          </Link>
        </li>
        <li>
          <Link
            to={process.env.PUBLIC_URL + `/multistory-build`}
            className="active"
          >
            Mekanik Aksanlar
            <span className="icon-right-arrow"></span>
          </Link>
        </li>
        <li>
          <Link
            to={process.env.PUBLIC_URL + `/multistory-build`}
            className="active"
          >
            Bağlantı Paraçaları
            <span className="icon-right-arrow"></span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Category;
