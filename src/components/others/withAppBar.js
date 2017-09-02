import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';

export default(WrappedComponent, title) => {
    return class extends Component {
        render() {
            return (
                    <div>
                        <AppBar
                            elevation={1}
                            position="static"
                            style={{
                            width: '100%'
                        }}
                            color="default">
                            <Toolbar disableGutters>
                                <IconButton color="default" aria-label="Menu">
                                    <MenuIcon/>
                                </IconButton>
                                <Typography type="title" color="default">
                                    {title}
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        {/* <div style={{position:'absolute',top:0,left:0,right:0,}}> */}
                        <WrappedComponent {...this.props}/>
                        {/* </div> */}
                    </div>
                // </div>
            )
        }
    }
}
