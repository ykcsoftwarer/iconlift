import React from "react";
import { Link } from "react-router-dom";
import { useIconContext } from "../../context/Context";

const Nav = () => {
  const { menü } = useIconContext();

  return (
    <div className="main-menu text-center">
      <nav>
        <ul className="main-menu__list">
          {menü.map((k, index) => (
            <li className="dropdown" key={index}>
              <Link to={`/${k.slug}`}>{k.title}</Link>
              {k["sub-menu"] && k["sub-menu"].length > 0 && (
                <ul>
                  {k["sub-menu"].map((subMenuItem, subIndex) => (
                    <li key={subIndex}>
                      <Link to={`/${k.slug}/${subMenuItem.slug}`}>
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

export default Nav;
