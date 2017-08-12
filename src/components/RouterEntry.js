import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import App from '../App';
import FullText from '../components/FullText';
import Splash from '../components/Splash'

const RouterEntry=()=>(
    <Router>
        <Route component={Config}/>
    </Router>
);

const Config=()=>{
    return (
        <div>
            <Route exact path="/splash" component={Splash}/>
            <Route exact path="/" component={App}/>
            <Route exact path="/bbc/:id" component={FullText}/>

        </div>
    )
};

export default RouterEntry;


