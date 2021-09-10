import React from 'react'
import { Link } from 'react-router-dom'

export default function SliderBar(props) {
    return (
        <div className='slider'>
            <div className="header__slogan">
                <p className="header__slogan-text">
                    THƯƠNG HIỆU<br />
                    <span>LOGISTICS</span> <br />HÀNG ĐẦU VIỆT NAM
                </p>
                <img
                    src="./assets/img/icon/package.png"
                    alt=""
                    className="header__slogan-icon"
                />
            </div>
            <div className="header__button">
                <Link to="/" className="header__button-search--link">
                    <button className="header__button-search">
                        Tra cứu <img src="./assets/img/icon/planes.png" alt="" />
                    </button>
                </Link>
                <button className="header__button-service">
                    Dịch Vụ <img src="./assets/img/icon/planes.png" alt="" />
                </button>
            </div>
        </div>

    )
}
