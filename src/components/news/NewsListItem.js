import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Card,{CardContent,CardMedia} from 'material-ui/Card';
import {withLink} from '../withLink';
import {Link} from 'react-router-dom'
const NewsListItem = (props) => {
    let {title,img}= props;
    return (
        // <Link to={'/'}>
        <div >
            <ListItem
                style={{
                marginTop: '5dp',
                paddingLeft: '5px',
                paddingRight: '5px',
                paddingBottom: '5px',
                paddingTop: '5px'
            }}>
                <Card
                    elevation={0}
                    style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: 0
                }}>

                    <CardContent
                        style={{
                        width: '100%'
                    }}>
                        <Typography type="subheading">
                            {title}
                        </Typography>
                    </CardContent>

                    <CardMedia
                        style={{
                        float: 'left',
                        marginRight: '5px',
                        marginTop: '5px'
                    }}>
                        <img
                            alt={"Eh,Something fails"}
                            src={img}
                            style={{

                            width: '80px',
                            height: 'auto'
                        }}/>
                    </CardMedia>
                </Card>
            </ListItem>
            <Divider/>
        </div>
    );

}

NewsListItem.PropTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    time:PropTypes.string.isRequired,
}

NewsListItem.to="/";


export default withLink(NewsListItem);