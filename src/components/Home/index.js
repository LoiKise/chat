import React, { Component } from 'react'
import AboutUs from './AboutUs/AboutUs'
import Members from './Members/Members'
import Order from './Order/Order'
import Service from './Service/Service'
import SliderBar from './SliderBar/SliderBar'
import News from './News/News'

export default function index(props) {
    return (
        <>
            <SliderBar />
            <div className='main'>
                <AboutUs />
                <Service />
                <Order />
                <Members />
                <News />
            </div>
        </>

    )
}

