import React, {Component} from 'react';
import Card, {CardContent, CardMedia} from 'material-ui/Card';
import PropType from 'prop-types';
import {ListItem} from 'material-ui/List';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';
import Divider from 'material-ui/Divider';
const CSS = theme=>({
    root:{
        display:'flex',
    },

    image:{
        width:'40%',
        height:'auto',
        // position:'relative'
    },
    image_content:{
        width:'100%',
        height:'auto',
    },

    detail:{
        width:'60%',
        display:'flex',
        flexDirection:'column',
    },
    title:{
        flex:1
    },

    summary:{
        flex:4
    }

});



const BookItem = ({_id, crawled_at, title, img_url, summary,classes}) => {
    return (
        <div>
                <Card className={classes.root}>
                    <CardMedia className={classes.image}>
                        <img src={img_url && img_url[0]} alt={"Eh,Something happened"} className={classes.image_content}/>
                    </CardMedia>
                    <CardContent className={classes.detail}>
                        <Typography className={classes.title}>
                            {title}
                        </Typography>
                        <Divider/>
                        <Typography className={classes.summary}>
                            {summary}
                        </Typography>
                    </CardContent>
                </Card>
        </div>
    )
};

BookItem.PropType = {
    _id: PropType.string.isRequired,
    crawled_at: PropType.number.isRequired,
    title: PropType.string.isRequired,
    img_url: PropType.array.isRequired,
    summary: PropType.array.isRequired,
    classes:PropType.object.isRequired,
}

export default withStyles(CSS)(BookItem);