import React from 'react'

export default function SliderBar(props) {
    return (
        <div>
            <div class="header__slogan">
                <p class="header__slogan-text">
                    THƯƠNG HIỆU<br />
                    <span>LOGISTICS</span> <br />HÀNG ĐẦU VIỆT NAM
                </p>
                <img
                    src="./asset/img/icon/package.png"
                    alt=""
                    class="header__slogan-icon"
                />
            </div>
            <div class="header__button">
                <a href="#" class="header__button-search--link">
                    <button class="header__button-search">
                        Tra cứu <img src="./asset/img/icon/planes.png" alt="" />
                    </button>
                </a>
                <button class="header__button-service">
                    Dịch vụ<img src="./asset/img/icon/planes.png" alt="" />
                </button>
            </div>
        </div>

    )
}
