import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import List, { ListItem } from 'material-ui/List';
import { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import NewsListItem from './NewsListItem';
import { mockClient } from '../../repository/client';

class ListCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        const _this = this;
        let { source, tag } = this.props;
        mockClient.getNewsRecent(source, tag, 3, ['_id', 'title', 'image_urls'])
            .then(data => {
                console.log('[ListCard] feteched data:'+data);
                _this.setState({
                    data: data.data
                })
            })
    }

    render(){

        let {data}=this.state;
        // if(data.length==0){
        //     return null;
        // }
        
    }
}


ListCard.PropTypes = {
    source: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
}
// const ListCard = (props) => {
//     const classes = props.classes;
//     let {tag} = prop.tag;
//     if (data.length > 0) {
//         let items = data.map(d=><NewsListItem title={d.title} img={d.image_urls[0]} id={d._id}/>);

//         return (

//             <div>
//                 <List>
//                     {items}
//                 </List>
//             </div>

//         );
//     }
// };
