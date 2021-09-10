import React from 'react'
import { Link } from 'react-router-dom'

export default function NewItem(props) {

    const renderNewItem = () => {
        return props.newItem.map((item, index) => {
            return (
                <div className="col-md-4" key={index}>
                    <Link href="/" className="newandsale-link">
                        <div className="newandsale-item">
                            <img
                                className="newandsale-item__img"
                                src={item.img}
                                alt="ship"
                            />
                            <div className="newandsale-item__content">
                                <div className="newandsale-item__content-overlay"></div>
                                <h3 className="newandsale-item__content-header">
                                    {item.info}
                                </h3>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        })
    }

    return (
        <>
            {renderNewItem()}
        </>
    )
}
