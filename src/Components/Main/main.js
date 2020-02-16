import React, { Component } from 'react';
import './main.css';

import Home from '../../Pages/Home/home';

import { Route, Link, BrowserRouter } from 'react-router-dom';
import PrivacyPolicy from '../../Pages/PrivacyPolicy/privacyPolicy';




class Main extends Component {

    state = {

    }

    render() {
        return (
            <div className="container">
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/privacypolicy" exact component={PrivacyPolicy} />
                </div>
            </div>

        );
    }
}

export default Main;











