import React from 'react'
import { Link } from 'react-router-dom'

export default function ServiceItem(props) {

    const renderServiceItem = () => {
        return props.serviceItem.map((item, index) => {
            return (
                <div className="col-md-4" key={index}>
                    <Link to='/' class="ourservices-link">
                        <div className="ourservices-item">
                            <img
                                class="ourservices-item__img"
                                src={item.img}
                                alt="ship"
                            />
                            <div className="ourservices-item__content">
                                <div className="ourservices-item__content-overlay"></div>
                                <h3 class="ourservices-item__content-header">
                                    {item.title}
                                    <br />
                                    {item.title1}
                                </h3>
                                <img
                                    src={item.iconImg}
                                    alt=""
                                    class="ourservices-item__content-icon"
                                />
                            </div>
                        </div>
                    </Link>
                </div>
            )
        })
    }


    return (
        <>
            {renderServiceItem()}
        </>
    )
}

