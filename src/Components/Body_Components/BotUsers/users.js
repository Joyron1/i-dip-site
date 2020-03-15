import React from 'react';

import Rotem from '../../../Pages/Images/rotem.jpeg';
import Uzan from '../../../Pages/Images/uzan.jpg';
import Sol from '../../../Pages/Images/sol.jpeg';
import Max from '../../../Pages/Images/max.jpg';

import styled from 'styled-components';

const AssistantFont = styled.div`
font-family: 'Assistant', sans-serif;
`

const Users = (props) => {
    console.log("BodyCol COMPONENT")
    console.log("props:", props)

    return (
        <div>


            {/* COMPUTER VIEW */}
            <div id="computer">
                <AssistantFont>
                    <div className="Users row ml-5" style={{ zIndex: "2", marginTop: "90px" }}>
                        <div className="col-3">
                            <img src={Rotem} class="card-img-top" alt="Rotem" style={{ width: "100%", height: "220px", borderRadius: "10px", boxShadow: "2px 4px 4px gray" }} />
                            <div class="userCard card text-center" >
                                <div className="User card-body">
                                    <h5 className="card-title">Rotem D.</h5>
                                    <h5 className="card-title">Model</h5>
                                    <p className="card-title">"Incredible! I found 3 fake accounts that uploaded photos of me"</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <img src={Uzan} class="card-img-top" alt="Uzan" style={{ width: "100%", height: "220px", borderRadius: "10px", boxShadow: "2px 4px 4px gray" }} />
                            <div className="userCard card text-center" >
                                <div className="User card-body">
                                    <h5 className="card-title">Amit U.</h5>
                                    <h5 className="card-title"> Contact Manager</h5>
                                    <p className="card-title">"In the content business, you must control who is exposed to your content. Dip answers the need!"</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <img src={Sol} class="card-img-top" alt="Sol" style={{ width: "100%", height: "220px", borderRadius: "10px", boxShadow: "2px 4px 4px gray" }} />
                            <div className="userCard card text-center" >
                                <div className="User card-body">
                                    <h5 className="card-title">Sol P.</h5>
                                    <h5 className="card-title">Travel Blogger</h5>
                                    <p className="card-title">"For the first time I can manage the services I signed up for, I finally feel calm"</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <img src={Max} class="card-img-top" alt="Max" style={{ width: "100%", height: "220px", borderRadius: "10px", boxShadow: "2px 4px 4px gray" }} />
                            <div className="userCard card text-center" >
                                <div className="User card-body">
                                    <h5 className="card-title">Max C.</h5>
                                    <h5 className="card-title">PM and Traveler</h5>
                                    <p className="card-title">"Dip allows me to live as I want and still be in control of what's going on with my digital Identity"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AssistantFont>
            </div>


            {/* MOBILE VIEW */}
            <div id="mobile">
                <AssistantFont>
                    <div className="Users row mt-5">
                        <div className="col-12 my-5">
                            <img src={Sol} class="card-img-top" alt="Sol" style={{ width: "50%", height: "50%", borderRadius: "10px", boxShadow: "2px 4px 4px gray" }} />
                            <div className="userCard card text-center" >
                                <div className="User card-body">
                                    <h6 className="card-title">Sol P.</h6>
                                    <h6 className="card-title">Travel Blogger</h6>
                                    <p className="card-title">"For the first time I can manage the services I signed up for, I finally feel calm"</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <img src={Max} class="card-img-top" alt="Max" style={{ width: "50%", height: "50%", borderRadius: "10px", boxShadow: "2px 4px 4px gray" }} />
                            <div className="userCard card text-center" >
                                <div className="User card-body">
                                    <h5 className="card-title">Max C.</h5>
                                    <h5 className="card-title">PM and Traveler</h5>
                                    <p className="card-title">"Dip allows me to live as I want and still be in control of what's going on with my digital Identity"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AssistantFont>
            </div>


        </div>
    );
}

export default Users;