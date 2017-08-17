import React, { Component } from 'react';
import Guide from './components/Guide';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import ScrollableTab from './components/ScrollBar'
import MockRep from './repository/MockRep';
import Header from './components/CommonItems';
import pic from './repository/mockPic.jpg';
import { NewsList } from "./components/CommonItems"
import { CircularProgress } from 'material-ui/Progress';
import configureStore from './store/configStore';
import { withStyles } from 'material-ui/styles';
import PropType from 'prop-types';
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
        };

        this.handleSwitchTag = this
            .handleSwitchTag
            .bind(this);
    }

    handleSwitchTag(e, index) {
        console.log('app handleSwitchTag', index);
        this.setState({ currentTab: this.state.sources[index] });
    }

    componentDidMount() { }
    render() {
        const state= this.state;
        const { classes,isFetching } = this.props;
        let circularProgress = isFetching
            ? <CircularProgress className={classes.progress} />
            : null;
        return (
            <div>
                <ScrollableTab sources={state.sources} handleChange={this.handleSwitchTag} />
                <Guide
                    source={state.currentTab}
                    />

                {circularProgress}
            </div>

        )
    }
}

App.PropType={
    classes:PropType.object.isRequired,
    isFetching:PropType.bool.isRequired,
    dispatch:PropType.func.isRequired,
}


function mapStateToProps(state) {
    console.log('-----from App');
    console.log(state);
    const { isFetching } = state;
    return {
        isFetching
    }
}

export default connect(
    mapStateToProps
)(withStyles(styles)(App));



// export default withStyles(styles)(App);

