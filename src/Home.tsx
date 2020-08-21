import React, { Component } from 'react'
import fractisWriting from './Images/Fractis_Writing.png'
import apple from './Images/appleappstore.png'
import google from './Images/googleplay.png'

export default class Home extends Component {
    render() {
        return (
            <div className="main">
                <img className="main-image" src={fractisWriting} alt="logo" /> 
                <div className="main-sub-text">The first mobile game</div>
                <div className="main-sub-text-small-top">with fractals</div>
                <div className="main-sub-text-small">Available now</div>

                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "18em", paddingTop: "3em"}}>
                    <a href="https://apps.apple.com/us/app/id1515159485"> 
                    <img 
                        className="app-store-logo" 
                        src={apple} 
                        alt="logo"
                    /> 
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.FractalGaming.Fractris&hl=de">
                    <img 
                        className="app-store-logo"
                        src={google}
                        alt="logo" 
                    /> 
                    </a>
                </div>
                {/* <img className="main-image-2" src={backgroundFractal} alt="logo" />  */}
            </div>
        )
    }
}
