import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import List, {ListItem} from 'material-ui/List';
import noPic from '../repository/nopic.jpg';
import noPic1 from '../repository/noPic1.jpg';
import classNames from 'classnames';
import {BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom';

const CSS = (theme) => ({
    card: {
        maxWidth: '100%',
        // marginTop: 10,
        marginLeft: 5,
        marginRight: 5
    },
    flex: {
        flex: 1
    },
    img: {
        display: 'block',
        paddingTop:'5px',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '90%',
        height: 'auto'
    }

});

const Header = (props) => {

    const renderContent = function (props) {
        let {classes} = props;
        return (
            <Card className={classes.card} elevation={1}>
                <CardMedia
                    style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop:'5px',
                }}>
                    <div
                        style={{
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                        <img src={props.img} className={classes.img}/>
                    </div>
                </CardMedia>

                <CardContent>
                    <Typography type="headline" component="h3">
                        {props.title}
                    </Typography>
                    <Typography component="p">
                        {props.summary}
                    </Typography>
                </CardContent>
            </Card>
        );

    }

    const classes = props.classes;
    let content;
    if (props.title || props.summary) 
        content = renderContent(props);
    
    return (

        <div>
            {content}

        </div>
    )
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

/**
 * todo horizontal screen problem
 * @param props
 * @returns {XML}
 * @constructor
 */
const ListCard = (props) => {
    const classes = props.classes;
    return (
        <div >
            <ListItem
                style={{
                marginTop: '5dp',
                paddingLeft: '5px',
                paddingRight: '5px',
                paddingBottom: '5px',
                paddingTop: '5px'
            }}>
                <Card elevation={0}
                    style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: 0
                }}>

                    <CardContent
                        style={{
                        float: 'left',
                        width: '100%'
                    }}>
                        <Typography>
                            {props.title}
                        </Typography>
                    </CardContent>

                    <CardMedia
                        style={{
                        float: 'left',
                        marginRight: '5px',
                        marginTop: '5px'
                    }}>
                        <img
                            src={props.img}
                            style={{
                            width: '80px',
                            height: 'auto'
                        }}/>
                    </CardMedia>
                </Card>
            </ListItem>
            <Divider/>
        </div>
    // </Router>
    );
};

ListCard.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

const NewsList = (props) => {
    const data = props.newss;
    if (data.length > 0) 
        return (
            <div>
                <List>
                    {data.map((d) =>< ListCard title = {
                        d.title
                    }
                    key = {
                        d._id
                    }
                    img = {
                        d.image_urls[0]
                    }
                    id = {
                        d._id
                    } />)
}
                </List>
            </div>

        );
    return (
        <div></div>
    )
};

NewsList.propTypes = {
    newss: PropTypes.array.isRequired
};



// const NewsListWithTag=(prop)=>{

// }






export {NewsList, ListCard}
export default withStyles(CSS)(Header);