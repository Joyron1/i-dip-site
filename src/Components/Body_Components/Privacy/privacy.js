import React from 'react';

import blueSquares from '../../../Pages/Images/blue_squre.png';
import Woman from '../../../Pages/Images/bitch.png';

const Opener = (props) => {
    console.log("BodyCol COMPONENT")
    console.log("props:", props)

    return (
        <div>
            <div className="row p-5" style={{ zIndex: "2" }}>
                <div className="col-7">
                    <img src={Woman} />
                </div>
                <div className="col-5 mt-5">
                    <h4 style={{ color: "#164B99", paddingLeft: "40px" }}> Your privacy comes first. </h4>
                    <ul style={{ color: "#164B99", marginTop: "20px", fontSize: "17px", lineHeight: "1.7" }}>
                        <li>All processing on your device.</li>
                        <li>No ads. No passwords.</li>
                        <li>No user data processing on our servers</li>
                    </ul>
                    <div className="row" style={{ justifyContent: "center", marginTop: "100px" }}>
                        <button type="button" id="GetStarted" className="btn" onClick={() => props.OpenApp()}>Get Started</button>
                    </div>
                    <img src={blueSquares} style={{ float: "right", marginTop: "40px" }} />
                </div>
            </div>
        </div>
    );
}

export default Opener;