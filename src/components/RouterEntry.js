import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import App from '../App';
import FullText from '../components/FullText';

const RouterEntry=()=>(
    <Router>
        <Route component={Config}/>
    </Router>
);

const Config=()=>{
    return (
        <div>
            <Route exact path="/" component={App}/>
            <Route exact path="/bbc/:id" component={FullText}/>
        </div>
    )
};

export default RouterEntry;


