import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MockRep from '../..//repository/MockRep';
import noPic from '../../repository/nopic.jpg';
import NewsByTag from './NewsByTag';
import Header from './Header';
import {mockClient} from '../../repository/client';
import {NewsTags, NewsListItemFields} from '../../constants/Constants';

const cloneDeep = require('clone-deep');
const tag_img__base = "http://localhost:3001/imgs/";
class Guide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerData: [],
            listData: {}
        }
    }
    componentWillUnmount() {
      console.log('----------from guide component will umount');
    }
    

    componentDidMount() {

        let {source} = this.props;
        NewsTags.forEach(tag => mockClient.getNewsRecent(source, tag, 1, NewsListItemFields).then(data => {
            let newListData = cloneDeep(this.state.listData);
            newListData[tag] = data.data;
            console.log(newListData);
            this.setState({listData: newListData})
        }));
        mockClient
            .getNewsRecent(source, 'world', 1, NewsListItemFields)
            .then(data => {
                console.log('headerData');
                console.log(data);
                this.setState({headerData: data.data[0]});
            })
    }

    render() {
        let {listData} = this.state;
        let state = this.state;
        console.log(state);
        let {source} = this.props;
        let newsbytags = Object
            .getOwnPropertyNames(listData)
            .map(tag => {
                console.log(tag);
                let dataByTag = listData[tag];
                console.log(dataByTag);
                return (<NewsByTag
                    source={source}
                    tag={tag}
                    newss={dataByTag}
                    tag_img_url={tag_img__base+tag+".jpg"}/>)
            });
        return (
            <div>
                <Header
                    id={state.headerData && state.headerData._id}
                    title={state.headerData && state.headerData.title}
                    summary={state.headerData.summary||"this is summary"}
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
