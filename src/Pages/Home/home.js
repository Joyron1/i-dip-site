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

        let TopText = <Opener OpenApp={this.OpenApp}> </Opener>;
        let BodyColumns = <BodyCol> </BodyCol>;
        let Propri = <Proprietary></Proprietary>;
        let PrivacyText = <Privacy OpenApp={this.OpenApp}></Privacy>;
        let Users = <BotUsers></BotUsers>;

        return (


            <div className="container">
                <img src={Background1} style={{ zIndex: "-1", position: "absolute", top: "0px", right: "70px", width: "600px" }} />

                {/* Opener */}
                {TopText}

                {/* Three columns on Body */}
                {BodyColumns}

                {/*  Proprietary  */}
                {Propri}

                {/* Privacy */}
                {PrivacyText}

                {/* Bottom Users */}
                {Users}

                {/* Privacy Policy */}
                <Link to="/privacypolicy"><div className="row justify-content-center mt-5">
                    <h4>Privacy Policy</h4>
                </div></Link>


                <img src={Background2} style={{ zIndex: "-1", position: "absolute", top: "1235px", left: "70px", width: "600px", height: "1500px" }} />
            </div >

        )
    }
}

export default Home;