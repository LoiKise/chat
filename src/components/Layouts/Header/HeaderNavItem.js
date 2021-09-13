import React from "react";
import { Link } from "react-router-dom";

export default function HeaderNavItem({ headerItem }) {
  const renderNavItem = () => {
    return headerItem.map((item, index) => {
      return (
        <li className="header__nav-item" key={index}>
          <Link className="header__nav-link" to={item.link}>
            {item.name}
          </Link>
        </li>
      );
    });
  };

  return <>{renderNavItem()}</>;
}
