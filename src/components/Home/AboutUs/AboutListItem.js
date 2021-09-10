import React from 'react'

export default function AboutListItem(props) {

    const renderAboutListItem = () => {
        return props.aboutListItem.map((item, index) => {
            return (
                <li className="content-text__item" key={{ index }}>
                    <img
                        src={item.img}
                        alt=""
                        className="content-text__icon"
                    />
                    <div className="content-text__text">
                        <h3 className="content-text__text-header">
                            {item.title}
                        </h3>
                        <p>
                            {item.content}
                        </p>
                    </div>
                </li>
            )
        })
    }

    return (
        <>
            {renderAboutListItem()}
        </>
    )
}
