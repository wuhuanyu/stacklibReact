import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ScrollableTab from './components/ScrollBar'
import MockRep from './repository/MockRep';
import Header from './components/CommonItems';
import pic from './repository/mockPic.jpg';
import {NewsList} from "./components/CommonItems"
import {CircularProgress} from 'material-ui/Progress';
import BlogItem from './components/blog/BlogItem';
import MainContainer from './MainContainer';

import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    progress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%) translateY(-50%)'
    }
})

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current:0,
            sources: [
               'MEDIUM','BBC', 'REUTERS','CNN'
            ],
        };

    }

    handleSwitchTag(e,index) {
        this.setState({current:index});
        this.forceUpdate();
    }

    
    componentDidMount() {}
    render() {
        let {isFetching,sources,current} = this.state;
        return (
            <div>
                <ScrollableTab sources={sources} handleChange={this.handleSwitchTag.bind(this)} current={current}/>
                <MainContainer source={sources[current].toLowerCase()}/>
            </div>

        )
    }
}

export default withStyles(styles)(App);
