import React from "react";
import { Link } from "react-router-dom";
import { useIconContext } from "../../../context/Context";

const DenemeNav = () => {
  const { menü } = useIconContext();

  return (
    <div className="main-menu text-center">
      <nav>
          <ul className="main-menu__list" >
        {menü.map((k, index) => (
            <li className="dropdown" key={index}>
              <Link to={process.env.PUBLIC_URL + `/${k.slug}`}>
                {k.title}
              </Link>
              {k["sub-menu"] && k["sub-menu"].length > 0 && (
                <ul>
                  {k["sub-menu"].map((subMenuItem, subIndex) => (
                    <li key={subIndex}>
                      <Link to={process.env.PUBLIC_URL + `/${subMenuItem.slug}`}>
                        {subMenuItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
        ))}
          </ul>
      </nav>
    </div>
  );
};

export default DenemeNav;
