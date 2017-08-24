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
            currentTab: 'BBC',
            sources: [
                'BBC', 'REUTERS', 'MEDIUM'
            ],
            isFetching: true
        };

    }

    handleSwitchTag(e, index) {
        this.setState({currentTab: this.state.sources[index]});
    }

    toggleisFetching(fetched) {
        this.setState({
            isFetching: !fetched
        })
    }
    componentDidMount() {}
    render() {
        const state = this.state;
        let {isFetching} = this.state;
        const {classes} = this.props;
        return (
            <div>
                <ScrollableTab sources={state.sources} handleChange={this.handleSwitchTag.bind(this)}/>
                <MainContainer source={state.currentTab.toLowerCase()}/>
            </div>

        )
    }
}

export default withStyles(styles)(App);
