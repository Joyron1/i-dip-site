import React from 'react';

import centerImage from '../../../Pages/Images/center_image.png';
import smallSquares from '../../../Pages/Images/small_squars.png';
import VideoModal from '../VideoModal/video_modal';

const Opener = (props) => {
    console.log("OPENER COMPONENT")
    console.log("props:", props)

    return (
        <div>
            <div className="row p-5" style={{ zIndex: "2" }}>
                <div className="col-6 mt-5">
                    <h2 style={{ color: "#164B99" }}> TAKE CONTROL OF YOUR DIGITAL FOOTPRINTS </h2>
                    <p style={{ color: "#164B99", marginTop: "20px", fontSize: "18px" }}> Dip is a mobile application that empowers users in their quest to manage their digital identity. </p>
                    <div className="row mt-4">
                        <div className="col-6">
                            <button type="button" id="GetStarted" className="btn" onClick={() => props.OpenApp()}>Get Started</button>
                        </div>
                        <div className="col-6">
                            <VideoModal></VideoModal>
                        </div>
                    </div>
                    <img src={smallSquares} style={{ marginTop: "30px" }} />
                </div>
                <div className="col-6 pl-5">
                    <img src={centerImage} style={{ height: "550px" }} />
                </div>
            </div>
        </div>
    );
}

export default Opener;