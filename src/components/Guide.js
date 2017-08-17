import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header, {NewsList, ListCard} from "./CommonItems";
import MockRep from '../repository/MockRep';
import noPic from '../repository/nopic.jpg';
import {connect} from 'react-redux';
import ToggleFetching from '../actions/ToggleFetching';
import fetchBBC from '../actions/BBCActions';
class Guide extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let {dispatch} = this.props;
        dispatch(fetchBBC());
    }

    render() {
        let {entities} = this.props;
        let bbc = entities.bbc;
        let headerData=bbc[0];
        return (
            <div>
                <Header
                    id={headerData && headerData._id}
                    title={headerData && headerData.title}
                    summary={headerData&&headerData.summary}
                    img={headerData && headerData.image_urls[0]}/>
                <NewsList newss={bbc}/>
            </div>
        )
    }
}

Guide.propTypes = {
    source: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    entites: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    const {dispatch, isFetching, entities} = state;
    return {dispatch, isFetching, entities}
}
export default connect(mapStateToProps)(Guide);
