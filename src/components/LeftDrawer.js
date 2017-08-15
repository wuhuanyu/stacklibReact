import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';
import drawerStore from '../utility/redux';

const styleSheet=theme=>({
    list:{
        width:250,
        flex:'initial',
    }
});

class LeftDrawer extends Component{

    constructor(props) {
        super(props);
    }
    render(){
        const classes= this.props.classes;
        const props = this.props;
        return(
            <div>
                <Drawer
                    anchor="left"
                    open={props.open}
                    onRequestClose={props.onRequestClose}>
                    <div>
                        <List disablePadding className={classes.list}>
                            <div>
                                <ListItem button>
                                    <ListItemIcon>
                                        <InboxIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Inbox"/>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <StarIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Starred" />
                                </ListItem>
                            </div>
                        </List>
                        <Divider/>
                        <List disablePadding className={classes.list}/>
                        <div>
                            <ListItem button>
                                <ListItemIcon>
                                    <MailIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Mail"/>
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon>
                                    <DeleteIcon />
                                </ListItemIcon>
                                <ListItemText primary="Delete" />
                            </ListItem>
                        </div>
                    </div>
                </Drawer>
            </div>
        )
    }
    componentDidMount(){

    }

    componentWillUnmount(){
    }
}

LeftDrawer.propTypes={
    classes:PropTypes.object.isRequired,
};
export default withStyles(styleSheet)(LeftDrawer);