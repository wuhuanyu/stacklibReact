import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from './App';
import About from './components/others/About';
import Feedback from './components/others/Feedback';
import TaggedNewsContainer from './components/news/TaggedNewssContainer';
import Article from './components/news/Article';
const RouterEntry = (props) => {
    return (
        <Router>
            <div>
                <Route path={"/"} exact component={App}/>
                <Route path={"/about"} exact component={About}/>
                <Route path={"/feedback"} exact component={Feedback}/>
                <Route path={"/tagged/:source/:tag"} exact component={TaggedNewsContainer}/>
                <Route path={"/news/:source/:id"} exact component={Article}/>
            </div>
        </Router>
    )
}

export default RouterEntry;