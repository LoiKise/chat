import React from 'react'
import { Link } from 'react-router-dom'


export default function ButtonCustom({ name, linkIcon, isTransparent, to}) {
    let style = isTransparent === 1 ? ' header__button-service' : isTransparent === 2 ? 'header__button-search' : 'section-area__btn'

    return (
        <Link className={style} to={to}>
            {name}
            <img src={linkIcon} alt="LogoIcon" />
        </Link>
    )

}



