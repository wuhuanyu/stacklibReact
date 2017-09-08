import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import List, {ListItem} from 'material-ui/List';
import {CardContent, CardMedia} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import NewsListItem from './NewsListItem';
import Chip from 'material-ui/Chip';
import ButtonBase from 'material-ui/ButtonBase';
import Tag from './Tag';
import {host,port} from '../../constants/Constants';
const tag_img_url= `http://${host}:${port}/static/images/`;
class NewsByTag extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {newss,classes,tag_img_url,tag}=this.props;
        let items = newss.map((d,idx) =>< NewsListItem key={d._id+idx} title = {
            d.title
        }
        img = {
            d.image_urls?d.image_urls[0]:null
        }
        id = {
            d._id
        } />);
        return (
            <div
                style={{
                marginTop: '10px',
                marginLeft: '5px',
                marginRight: '5px'
            }}>
                <Tag tag={tag} tag_img_url={tag_img_url}/> 
                {items}
            </div>

        );
    }
}

NewsByTag.PropTypes = {
    source: PropTypes.string.isRequired,
    newss:PropTypes.array.isRequired,
    tag_img_url:PropTypes.object.isRequired,
    tag:PropTypes.string.isRequired,
}

export default NewsByTag;