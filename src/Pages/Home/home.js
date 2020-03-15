import React, { Component } from 'react';

import { Route, Link, BrowserRouter } from 'react-router-dom';

import './home.css'

import Opener from '../../Components/Body_Components/Opener/opener';
import BodyCol from '../../Components/Body_Components/BodyCol/bodyCol';
import Proprietary from '../../Components/Body_Components/Propri/proprietary';
import Privacy from '../../Components/Body_Components/Privacy/privacy';
import BotUsers from '../../Components/Body_Components/BotUsers/users';

import Background1 from '../../Pages/Images/up.png';
import Background2 from '../../Pages/Images/down.png';

class Home extends Component {

    OpenApp = () => {
        let a = document.createElement('a');
        a.target = '_blank';
        a.href = "https://app.i-dip.com/app";
        a.click();
    }

    render() {

        return (

            <div>
                <div id="computer">
                    <div className="container">
                        <img src={Background1} style={{ zIndex: "-1", position: "absolute", top: "-100px", right: "70px", width: "570px" }} />

                        {/* Opener */}
                        <Opener OpenApp={this.OpenApp}> </Opener>

                        {/* Three columns on Body */}
                        <BodyCol> </BodyCol>

                        {/*  Proprietary  */}
                        <Proprietary></Proprietary>

                        {/* Privacy */}
                        <Privacy OpenApp={this.OpenApp}></Privacy>

                        {/* Bottom Users */}
                        <BotUsers></BotUsers>

                        {/* Privacy Policy */}
                        <Link to="/privacypolicy"><div className="row justify-content-center" style={{ marginTop: "140px" }}>
                            <h5>Privacy Policy</h5>
                        </div></Link>

                        <img src={Background2} style={{ zIndex: "-1", position: "absolute", top: "1050px", left: "70px", width: "550px" }} />
                    </div >
                </div>


                <div id="mobile">
                    <div className="container">

                        {/* Opener */}
                        <Opener OpenApp={this.OpenApp}> </Opener>

                        {/* Privacy */}
                        <Privacy OpenApp={this.OpenApp}></Privacy>

                        {/*  Proprietary  */}
                        <Proprietary></Proprietary>

                        {/* Bottom Users */}
                        <BotUsers></BotUsers>

                        {/* Privacy Policy */}
                        <Link to="/privacypolicy"><div className="row justify-content-center mt-5">
                            <h5>Privacy Policy</h5>
                        </div></Link>

                    </div >
                </div>
            </div>



        )
    }
}

export default Home;