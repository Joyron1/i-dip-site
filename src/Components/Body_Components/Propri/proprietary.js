import React from 'react';

import purpleSquares from '../../../Pages/Images/purple_squre.png';

import styled from 'styled-components';

const AssistantFont = styled.div`
font-family: 'Assistant', sans-serif;
`

const Proprietary = (props) => {
    console.log("BodyCol COMPONENT")
    console.log("props:", props)

    return (
        <div>


            {/* COMPUTER VIEW */}
            <div id="computer">
                <div className="row" style={{ zIndex: "2" }}>
                    <div className="col-7 ml-5 mt-5">
                        <img src={purpleSquares} style={{ marginLeft: "230px", zIndex: "1" }} />
                        <div className="mt-5 offset-2">
                            <h4 style={{ color: "#164B99" }}> Our proprietary </h4>
                            <AssistantFont> <p style={{ color: "#164B99", marginTop: "20px", fontSize: "17px", lineHeight: "1.7" }}>
                                Dip is a permissions-based app that uses Artificial Intelligence and Deep Learning Algorithms to browse social media, the web, and the dark web.
                                It will let you know for suspicious or unusual behaviors in real-time,
                            with actionable data that lets you understand who has access to your data and what you can do about it - <strong>all on your device! In your hand!</strong> </p></AssistantFont>
                        </div>
                    </div>
                </div>
            </div>


            {/* MOBILE VIEW */}
            <div id="mobile">
                <div className="row">
                    <div className="col-12">
                        <div className="mt-2">
                            <AssistantFont>
                                <p style={{ color: "#164B99", marginTop: "20px", fontSize: "20px", lineHeight: "1.9" }}>
                                    Dip is a permissions-based app that uses Artificial Intelligence and Deep Learning Algorithms to browse social media, the web, and the dark web.
                                    It will let you know for suspicious or unusual behaviors in real-time,
                            with actionable data that lets you understand who has access to your data and what you can do about it - <strong>all on your device! In your hand!</strong> </p>
                            </AssistantFont>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Proprietary;