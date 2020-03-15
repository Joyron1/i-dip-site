import React from 'react';

import centerImage from '../../../Pages/Images/center_image.png';
import smallSquares from '../../../Pages/Images/small_squars.png';
import VideoModal from '../VideoModal/video_modal';
import Woman from '../../../Pages/Images/bitch.png';

import styled from 'styled-components';

const AssistantFont = styled.div`
font-family: 'Assistant', sans-serif;
`

const RalewayFont = styled.div`
font-family: 'Raleway', sans-serif;
`

const Opener = (props) => {
    console.log("OPENER COMPONENT")
    console.log("props:", props)


    return (
        <div>

            {/* COMPUTER VIEW */}
            <div id="computer">
                <div className="row pl-5" style={{ zIndex: "2" }}>
                    <div className="col-6 mt-5 p-5">
                        <AssistantFont>
                            <h2 style={{ color: "#164B99", fontWeight: "bold" }}> TAKE CONTROL OF YOUR DIGITAL IDENTITY </h2>
                        </AssistantFont>
                        <RalewayFont><p style={{ color: "#164B99", marginTop: "20px", fontSize: "18px" }}> Dip is a mobile application that empowers users in their quest to manage their digital identity. </p></RalewayFont>
                        <div className="row mt-4">
                            <div className="col-6">
                                <button type="button" id="GetStarted_computer" className="btn" onClick={() => props.OpenApp()}>Get Started</button>
                            </div>
                            {/* <div className="col-6">
                                <VideoModal></VideoModal>
                            </div> */}
                        </div>
                        <img src={smallSquares} style={{ marginTop: "20px" }} />
                    </div>
                    <div className="col-6 pl-1 mt-2">
                        <img src={centerImage} style={{ height: "550px" }} />
                    </div>
                </div>
            </div>


            {/* MOBILE VIEW */}
            <div id="mobile">
                <div className="row">
                    <div className="col-12 mt-5">
                        <AssistantFont> <h3 style={{ color: "#164B99", fontWeight: "bold" }}> TAKE CONTROL OF YOUR DIGITAL IDENTITY </h3> </AssistantFont>
                        <RalewayFont><p style={{ color: "#164B99", marginTop: "20px", fontSize: "20px" }}> Dip is a mobile application that empowers users in their quest to manage their digital identity. </p></RalewayFont>
                        <div className="row mt-3">
                            <div className="col-12">
                                <button type="button" id="GetStarted_mobile" className="btn" onClick={() => props.OpenApp()}>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col- my-4">
                    <img style={{ width: "190px" }} src={Woman} />
                </div>

            </div>
        </div>
    );
}

export default Opener;