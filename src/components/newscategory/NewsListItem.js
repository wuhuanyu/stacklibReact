import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const NewsListItem = (props) => {
    let {title,img}= props;
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
                        float: 'left',
                        width: '100%'
                    }}>
                        <Typography>
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
}


export default NewsListItem;