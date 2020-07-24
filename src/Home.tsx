import React, { Component } from 'react'
import fractisWriting from './Images/Fractis_Writing.png'

export default class Home extends Component {
    render() {
        return (
            <div className="main">
                <img className="main-image" src={fractisWriting} alt="logo" /> 
                <div className="main-sub-text">The first mobile game</div>
                <div className="main-sub-text-small-top">with fractals</div>
                <div className="main-sub-text-small">Available soon</div>
                {/* <img className="main-image-2" src={backgroundFractal} alt="logo" />  */}
            </div>
        )
    }
}
