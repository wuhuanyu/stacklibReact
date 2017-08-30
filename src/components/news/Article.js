import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import {CardHeader, CardActions} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Chip from 'material-ui/Chip';
import Spider from '../../repository/spider.png';
import Schedule from 'material-ui-icons/Schedule';
const CSS = theme => ({
    root: {
        marginTop: '5px',
        marginLeft: '2px',
        marginRight:'2px',
        position:'relative',
        height:'100%',
    },
    title: {
        marginTop:'3px',
        marginLeft:'3px',
    },
    imgContainer: {
        
    },
    img: {
        width:'100%',
        height:'auto',
    }
})

const Text = ({t}) => (
    <Typography paragraph style={{marginLeft:'3px',marginRight:'3px'}}>{t}</Typography>
)
const Article = ({article, source, tag, classes}) => {
    let texts = null;
    if (article.text) {
        texts = article
            .text
            .map((t, idx) => {
                return <Text key={idx + article._id} t={t}/>
            })
    }
    return (
        <Paper elevation={2} className={classes.root}>
            
            {/* <CardActions disableActionSpacing>
                <IconButton aria-label="Like">
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="Share">
                    <ShareIcon/>
                </IconButton>
            </CardActions> */}

            <Typography type="headline" component="h3" gutterBottom className={classes.title}>
                {article.title}
            </Typography>
            <Typography style={{float:'right'}} type="caption" gutterBottom>
                {article.timestamp}
            </Typography>
            
            <Typography type="subheading" gutterBottom style={{clear:'right'}}>
                {"Summary: "+article.summary}
            </Typography>
            <div className={classes.imgContainer}>
                <img src={article.image_urls && article.image_urls[0]} className={classes.img}/>
            </div>
            {texts}
        </Paper>
    )
}

Article.PropTypes = {
    source: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    article: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
        crawled_at: PropTypes.number.isRequired,
        image_urls: PropTypes.array.isRequired,
        text: PropTypes.array.isRequired,
        url: PropTypes.string.isRequired,
        tag:PropTypes.string.isRequired,
    })
}

export default withStyles(CSS)(Article);