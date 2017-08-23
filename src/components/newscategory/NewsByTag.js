import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import List, {ListItem} from 'material-ui/List';
import {CardContent, CardMedia} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import NewsListItem from './NewsListItem';
import {mockClient} from '../../repository/client';
import Chip from 'material-ui/Chip';
import ButtonBase from 'material-ui/ButtonBase';
import Tag from './Tag';

class NewsByTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const _this = this;
        let {source, tag} = this.props;
        mockClient
            .getNewsRecent(source, tag, 2, ['_id', 'title', 'image_urls'])
            .then(data => {
                console.log('[ListCard] feteched data:' + data);
                _this.setState({data: data.data})
            })
    }

    render() {
        let {data} = this.state;
        let {tag, classes, tag_img_url} = this.props;

        let items = data.map(d =>< NewsListItem title = {
            d.title
        }
        img = {
            d.image_urls[0]
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
    tag: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    tag_img_url: PropTypes.string.isRequired
}

export default NewsByTag;
// export default withStyles(CSS)(NewsByTag);