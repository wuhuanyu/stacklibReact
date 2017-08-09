import React,{Component} from 'react';
import {withStyles,createStyleSheet} from 'material-ui/styles';
import Card,{CardActions,CardContent,CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import PropTypes from   'prop-types';
import Divider from 'material-ui/Divider';
import List,{ListItem} from 'material-ui/List';
import noPic from '../repository/nopic.jpg';
import noPic1 from '../repository/noPic1.jpg';
import classNames from  'classnames';
import {
    BrowserRouter as Router,
    Link,
    Route,
    NavLink
} from 'react-router-dom';


const CSS=createStyleSheet({
    card:{
        // width:'100%',
        maxWidth:'100%',
        marginTop:10,
        marginLeft:5,
        marginRight:5,

    },
    flex:{
        flex:1
    },
    img:{
        display:'block',
        marginLeft:'auto',
        marginRight:'auto',
        // width:'70%',
        maxWidth:'80%',
        maxHeight:'70%',
    }

});

const Header=(props)=>{
    const classes = props.classes;
    return(
        <div>
            <NavLink style={{textDecoration:'none'}} to={"/bbc/"+props.id}>
            <Card className={classes.card}>
                <CardMedia style={{marginLeft:'auto',marginRight:'auto'}}>
                    <div style={{marginLeft:'auto',marginRight:'auto'}}>
                        <img src={props.img} className={classes.img} alt="Header"/>

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
            </NavLink>
        </div>
    )
};

Header.propTypes={
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    img:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
};


/**
 * todo horizontal screen problem
 * @param props
 * @returns {XML}
 * @constructor
 */
const ListCard=(props)=>{
    const classes=props.classes;
    return(
        <div >
            <NavLink style={{textDecoration:'none'}} to={"/bbc/"+props.id}>
            <ListItem style={{marginTop:'5dp',paddingLeft:'5px',paddingRight:'5px',paddingBottom:'5px',paddingTop:'5px'}}>
                <Card style={{width:'100%',display:'flex',alignItems:'center',marginLeft:0}}>

                    <CardContent style={{display:'flex',alignItems:'center'}}>
                        <Typography  component="h5" style={{}}>
                            {props.title}
                            {/*short*/}
                            {/*this is long long long long long long long text*/}
                        </Typography>
                    </CardContent>

                    <CardMedia style={{float:'right',marginRight:'5px',marginTop:'5px'}}>
                        <img src={props.img} style={{width:'80px',height:'70px'}}/>
                    </CardMedia>
                </Card>
            </ListItem>
            </NavLink>
            {/*<Route path="/bbc/:id" component={FullTextDemo}/>*/}
            <Divider/>
        </div>
         // </Router>
    );
};

ListCard.propTypes={
    title:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
};




const NewsList=(props)=>{
    const data=props.newss;
    if(data.length>0)
    return(
        <div>
            <List>
                {data.map(
                    (d)=><ListCard title={d.title} key={d._id} img={d.image_urls[0]} id={d._id}/>
                )
                }
            </List>
        </div>

    );
    return(
        <div></div>
    )
};

NewsList.propTypes={
    newss:PropTypes.array.isRequired,
};

export {NewsList,ListCard}
// export default {withStyles(CSS)(Header)}
export default withStyles(CSS)(Header);