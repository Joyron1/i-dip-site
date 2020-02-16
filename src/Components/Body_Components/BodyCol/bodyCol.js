import React from 'react';

const Opener = (props) => {
    console.log("BodyCol COMPONENT")
    console.log("props:", props)

    return (
        <div>
            <div className="Body row p-5" style={{ zIndex: "1" }}>
                <div className="col-4">
                    <div className="card text-center" style={{ width: "18rem", borderTop: "none", boxShadow: "3px 2px 10px lavender" }}>
                        <div className="card-body">
                            <h5 className="card-title">A Smaller Teaser</h5>
                            <p className="card-text">Dip provides peace of mind and freedom by consolidating and monitoring the digital footprints and notifying for suspicious behavior in real-time.</p>
                            <a id="LearnMore" className="btn">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card text-center" style={{ width: "18rem", borderTop: "none", boxShadow: "3px 2px 10px lavender" }}>
                        <div className="card-body">
                            <h5 className="card-title">Easy To Use</h5>
                            <p className="card-text">It's never been easier, a quick login through Google or Facebook.</p>
                            <a id="LearnMore" className="btn">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card text-center" style={{ width: "18rem", borderTop: "none", boxShadow: "3px 2px 10px lavender" }}>
                        <div className="card-body">
                            <h5 className="card-title">Tailor Made</h5>
                            <p className="card-text">Dip was made exactly to fit your need. After a deep study, we adapted the information to make it most relevant to you.</p>
                            <a id="LearnMore" className="btn">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Opener;