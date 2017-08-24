import React, {Component} from 'react';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import List, {ListItem} from 'material-ui/List';
import Card,{CardContent, CardMedia,CardHeader,CardActions} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import NewsListItem from './NewsListItem';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import ButtonBase from 'material-ui/ButtonBase';
import IconButton from 'material-ui/IconButton';


const CSS = theme=>{

}

class BlogItem extends Component{
    constructor(props){
        super(props);
    }


    render(){
        let {title,crawled_at,img_url,summary}=this.props;
        return (
            <div>
                <Card>
                    <CardHeader avatar={
                        <Avatar>{title[0].toUppperCase()}</Avatar>
                    }
                    title={title}
                    subheader={crawled_at}
                    />
                <CardContent>
                    <Typography component="p">
                        {summary}
                    </Typography>
                </CardContent>
                <CardActions disableActionSpacing>
                   <IconButton aria-label="Add to favorites">
                       <FavoriteIcon/>
                   </IconButton>
                   <IconButton aria-label="Share">
                       <ShareIcon/>
                   </IconButton>
                </CardActions>

                </Card>
            </div>
        )
    }
}



BlogItem.PropTypes={
    title:PropTypes.string.isRequrired,
    crawled_at:PropTypes.string.isRequrired,
    img_url:PropTypes.string.isRequrired,
    summary:PropTypes.string.isRequrired,
}



