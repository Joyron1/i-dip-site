import React from 'react';

import blueSquares from '../../../Pages/Images/blue_squre.png';
import smallSquares from '../../../Pages/Images/small_squars.png';
import Woman from '../../../Pages/Images/bitch.png';

import styled from 'styled-components';

const AssistantFont = styled.div`
font-family: 'Assistant', sans-serif;
`

const Privacy = (props) => {
    console.log("BodyCol COMPONENT")
    console.log("props:", props)

    return (
        <div>

            {/* COMPUTER VIEW */}
            <div id="computer">
                <div className="row pl-5" style={{ zIndex: "2" }}>
                    <div className="col-6 my-5 pl-4">
                        <img src={Woman} />
                    </div>
                    <div className="col-6" style={{ marginTop: "180px", paddingRight: "100px" }}>
                        <h4 style={{ color: "#164B99", paddingLeft: "40px" }}> Your privacy comes first. </h4>
                        <ul style={{ color: "#164B99", fontSize: "17px", lineHeight: "1.7" }}>
                            <li>All processing on your device.</li>
                            <li>No ads. No passwords.</li>
                            <li>No user data processing on our servers</li>
                        </ul>
                        <div className="row ml-5" style={{ marginTop: "70px" }}>
                            <button type="button" id="GetStarted_computer" className="btn" onClick={() => props.OpenApp()}>Get Started</button>
                        </div>
                        <img src={blueSquares} style={{ float: "right", marginTop: "40px" }} />
                    </div>
                </div>
            </div>


            {/* MOBILE VIEW */}
            <div id="mobile">
                <div className="row">
                    <div className="col-12 ">
                        <AssistantFont>
                            <ul style={{ color: "#164B99", fontSize: "20px", lineHeight: "1.9", textAlign: "left" }}>
                                <li>All processing on your device.</li>
                                <li>No ads. No passwords.</li>
                                <li>No user data processing on our servers</li>
                            </ul>
                        </AssistantFont>
                        <div className="row">
                            <div className="col-12 my-2">
                                <button type="button" id="GetStarted_mobile" className="btn" onClick={() => props.OpenApp()}>Get Started</button>
                            </div>

                        </div>
                        <img src={smallSquares} style={{ float: "right", marginTop: "30px", width: "45%" }} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Privacy;