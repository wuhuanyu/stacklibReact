import React, {Component} from 'react';
import PropTypes from 'prop-types';
import noPic from '../../repository/nopic.jpg';
import NewsByTag from './NewsByTag';
import Header from './Header';
import {NewsTags, NewsListItemFields} from '../../constants/Constants';
import {domain,host,port} from '../../constants/Constants';
import {capitalize} from '../../utility/Utils';
const cloneDeep = require('clone-deep');
const tag_img__base = `http://${host}:${port}/static/images/`;
class Guide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerData: {},
            listData: {}
        }
    }

    static get component() {
        return "[Guide]";
    }
    componentWillUnmount() {}

    fetchData(source) {
        let client = window.client;
        NewsTags.forEach(tag => client.getNewsRecent(source, tag, 2, NewsListItemFields).then(datas => {
            let newListData = cloneDeep(this.state.listData);
            newListData[tag] = datas
            this.setState({listData: newListData})
        }))
        client
            .getNewsRecent(source, 'tech', 1, NewsListItemFields)
            .then(data => {
                this.setState({headerData: data[0]});
            })

    }
    componentWillReceiveProps(nextProps) {
        let {source} = nextProps;
        let oldSource = this.props.Source;
        if (source !== oldSource) {
           this.fetchData(source); 
        }
    }

    componentDidMount() {
        this.fetchData(this.props.source);
    }

    render() {
        let {listData} = this.state;
        let state = this.state;
        let {source} = this.props;
        let newsbytags = Object
            .getOwnPropertyNames(listData)
            .map(tag => {
                let dataByTag = listData[tag];
                return (<NewsByTag
                    key={tag}
                    source={source}
                    tag={capitalize(tag)}
                    newss={dataByTag}
                    tag_img_url={tag_img__base + tag + ".jpg"}/>)
            });
        return (
            <div>
                <Header
                    id={state.headerData && state.headerData._id}
                    title={state.headerData && state.headerData.title}
                    summary={state.headerData&&state.headerData.summary}
                    img={state.headerData.image_urls && state.headerData.image_urls[0]}/> 

                {newsbytags}
            </div>
        )
    }
}

Guide.propTypes = {
    source: PropTypes.string.isRequired
};

export default Guide;
