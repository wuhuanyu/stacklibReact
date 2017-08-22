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

const img_url = "/imgs/politics.jpg";
const CSS = theme => ({
    root: {
        marginTop: theme.spacing.unit * 4,
        display: 'flex',
        width: '100%',
        margin:'5px auto'
    },
    image: {
        position: 'relative',
        height: 200,
        [
            theme
                .breakpoints
                .down('sm')
        ]: {
            width: '100% !important', // Overrides inline-style
            height: 100
        },
        '&:hover': {
            zIndex: 1
        },
        '&:hover $imageBackdrop': {
            opacity: 0.15
        },
        '&:hover $imageMarked': {
            opacity: 0
        },
        '&:hover $imageTitle': {
            border: '4px solid currentColor'
        }
    },
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%'
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: theme.palette.common.black,
        opacity: 0.4,
        transition: theme
            .transitions
            .create('opacity')
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`
    },
    imageMarked: {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme
            .transitions
            .create('opacity')
    }
})

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
            .getNewsRecent(source, tag, 3, ['_id', 'title', 'image_urls'])
            .then(data => {
                console.log('[ListCard] feteched data:' + data);
                _this.setState({data: data.data})
            })
    }

    render() {
        let {data} = this.state;
        let {tag, classes} = this.props;

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
            <div style={{marginTop:'10px',marginLeft:'5px',marginRight:'5px'}}>
                <ButtonBase
                    focusRipple
                    className={classes.image}
                    style={{
                    width: '100%'
                }}>
                    <div
                        className={classes.imageSrc}
                        style={{
                        backgroundImage: `url(${img_url})`
                    }}/>
                    <div className={classes.imageBackdrop}/>
                    <div className={classes.imageButton}>
                        <Typography
                            component="h1"
                            type="headline"
                            color="inherit"
                            className={classes.imageTitle}>
                            {tag}
                            <div className={classes.imageMarked}/>
                        </Typography>
                    </div>
                </ButtonBase>
                    {items}
            
            </div>

        );
    }
}

NewsByTag.PropTypes = {
    source: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
}

export default withStyles(CSS)(NewsByTag);