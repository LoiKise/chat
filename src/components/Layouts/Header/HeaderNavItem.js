import React from 'react'
import { Link } from 'react-router-dom'


export default function HeaderNavItem(props) {

    console.log('tên item', props.headerItem);

    const renderNavItem = () => {
        return props.headerItem.map((item, index) => {
            return (
                <li className="header__nav-item" key={{index}}>
                    <Link className="header__nav-link" to="index.html">
                        {item.name}
                    </Link>
                </li>
            )
        })
    }

    return (

        <>
            {renderNavItem()}
        </>

    )
}
