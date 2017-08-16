import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header, {NewsList, ListCard} from "./CommonItems";
import MockRep from '../repository/MockRep';
import noPic from '../repository/nopic.jpg';

class Guide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerData: '',
            listData: ''
        }
    }

    componentDidMount() {
        let {fetchedHandler} = this.props;
        MockRep
            .withId('da')
            .then(data => {
                console.log(data);
                this.setState({headerData: data})
            });
        MockRep
            .withField(3, ['title', '_id', 'image_urls', 'summary'])
            .then(data => {
                fetchedHandler(true);
                this.setState({listData: data})
            });
    }

    render() {
        const props = this.props;
        const state = this.state;
        return (
            <div>
                <Header
                    id={state.headerData && state.headerData._id || ''}
                    title={state.headerData && state.headerData.title || ''}
                    summary={state.headerData.summary}
                    img={state.headerData && state.headerData.image_urls[0] || noPic}/>
                <NewsList newss={state.listData && state.listData || []}/>
            </div>
        )
    }
}

Guide.propTypes = {
    source: PropTypes.string.isRequired
};

export default Guide;
