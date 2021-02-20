import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Welcome from './Welcome';
import Study from './Study';
import Quiz from './Quiz';

class Home extends Component {

    render(){
        return (
            <Router>
                <div className="p-3">
                    <Welcome></Welcome>
                </div>
                <div className="p-3">
                    <Route path="/study" component={Study}></Route>
                    <Route path="/quiz" component={Quiz}></Route>
                </div>
            </Router>
        )
    }
}

export default Home;