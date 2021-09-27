import React from "react";

export default function ButtonCustom({ name, linkIcon, isTransparent }) {
  let style =
    isTransparent === 1
      ? " header__button-service"
      : isTransparent === 2
      ? "header__button-search"
      : "section-area__btn";

  return (
    <button type="submit" className={style}>
      {name}
      <img src={linkIcon} alt="LogoIcon" />
    </button>
  );
}
