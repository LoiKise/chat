import React from 'react'


export default function ButtonCustom({ name, linkIcon, isTransparent }) {
    let style = isTransparent ? ' header__button-service' : 'header__button-search'


    return (
        <button className={style}>
            {name}
            <img src={linkIcon} alt="LogoIcon" />
        </button>   
    )

}



