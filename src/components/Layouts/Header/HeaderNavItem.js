import React from "react";
import { Link } from "react-router-dom";

export default function HeaderNavItem({ headerItem }) {

  const scrollToBottom = () => {
    window.scrollTo({
      Bottom: 9999,
      behavior: 'smooth'
    })
  }

  const renderNavItem = () => {
    return headerItem.map((item, index) => {
      return (
        <li className="header__nav-item" key={index}>
          {item.name === 'GIỚI THIỆU' ?
            <a href="#footer" className="header__nav-link" onClick={scrollToBottom}>Giới Thiệu</a>
            :
            <Link className="header__nav-link" to={item.link}>
              {item.name}
            </Link>
          }
        </li >
      );
    });
  };

  return <>{renderNavItem()}</>;
}
