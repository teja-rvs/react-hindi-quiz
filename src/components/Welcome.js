import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class Welcome extends Component{

    render(){
        return (
            <ul className="nav nav-justified nav-pills">
                <li className="nav-item"><NavLink to="/study" className="nav-link">Study</NavLink></li>
                <li className="nav-item"><NavLink to="/quiz" className="nav-link">Quiz</NavLink></li>
            </ul>
        )}
}

export default Welcome;