import React from 'react';

import styled from 'styled-components';

const AssistantFont = styled.div`
font-family: 'Assistant', sans-serif;
`

const RalewayFont = styled.div`
font-family: 'Raleway', sans-serif;
`

const BodyCol = (props) => {
    console.log("BodyCol COMPONENT")
    console.log("props:", props)

    return (
        <div>

            <div className="row ml-3" style={{ zIndex: "1", color: " #164B99" }}>
                <div className="col-4">
                    <div className="card text-center" style={{ width: "18rem", borderTop: "none", boxShadow: "3px 2px 10px lavender" }}>
                        <div className="card-body">
                            <h5 className="card-title">A Smaller Teaser</h5>
                            <RalewayFont><p className="card-text">Dip provides peace of mind and freedom by consolidating and monitoring the digital footprints and notifying for suspicious behavior in real-time.</p> </RalewayFont>
                            <a id="LearnMore" className="btn mt-5">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card text-center" style={{ width: "18rem", borderTop: "none", boxShadow: "3px 2px 10px lavender" }}>
                        <div className="card-body">
                            <h5 className="card-title">Easy To Use</h5>
                            <RalewayFont> <p className="card-text">It's never been easier, a quick login through Google or Facebook.</p></RalewayFont>
                            <a id="LearnMore" className="btn mt-5">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card text-center" style={{ width: "18rem", borderTop: "none", boxShadow: "3px 2px 10px lavender" }}>
                        <div className="card-body">
                            <h5 className="card-title">Tailor Made</h5>
                            <RalewayFont> <p className="card-text">Dip was made exactly to fit your need. After a deep study, we adapted the information to make it most relevant to you.</p></RalewayFont>
                            <a id="LearnMore" className="btn mt-5">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default BodyCol;