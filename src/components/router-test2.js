import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';


const RouterEntry=()=>{
    return(
        <Router>
            <Route component={Config}/>
        </Router>
    )
};

const Config=()=>{
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route  path="/another" component={Another}/>
        </div>
    )
};

const Another=()=>{
    return (
        <div>
            this is another
        </div>
    )
}
const Home=()=>{
    return (
        <div>
            this is home
            <Link to="/another">To another</Link>
        </div>
    )
};

export default RouterEntry;