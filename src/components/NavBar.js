import React, {Component} from 'react';
import Menu, {MenuItem} from 'material-ui/Menu';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {withStyles} from 'material-ui/styles';
import Book from 'material-ui-icons/Book';
import IconButton from 'material-ui/IconButton';
import ToolBar from 'material-ui/Toolbar';
const CSS = {
    root: {
        width: '100%'
    },

    content: {
        display: 'flex',
        alignItems: 'center',
    },
    source: {
        display: 'inline-block',
    },
    tag: {
        display: 'inline-block',
    }

}

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sMenu: false,
            tMenu: false,
            sources: [
                'BBC', 'REUTERS', 'CNN'
            ],
            tags: [
                'LIFE', 'CHINA', 'POLITICS'
            ],
            cS: 0,
            cT: 0
        }
    }

    onSourceClick() {
        let {sMenu} = this.state;
        this.setState({sMenu: true})
    }
    onTagClick() {
        let {tMenu} = this.state;
        this.setState({tMenu: true})
    }
    onSMenuClose() {
        this.setState({sMenu: false})
    }
    onTMenuClose() {
        this.setState({tMenu: false})
    }
    onSMenuItemClick(e, idx) {
        this.setState({cS: idx})
    }
    onTMenuItemClick(e, idx) {
        this.setState({cT: idx})
    }
    render() {
        let {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar color="default">
                    <div className={classes.content}>
                        <IconButton>
                            <Book/>
                        </IconButton>
                        <Button
                            onClick={this
                            .onSourceClick
                            .bind(this)}
                            ref={node=>this.sMenuB=node}
                            className={classes.source}Button >
                            {this.state.sources[this.state.cS]}
                        </Button>
                        <Button
                            onClick={this
                            .onTagClick
                            .bind(this)}
                            ref={node=>this.tMenuB=node}
                            className={classes.tag}>
                            {this.state.tags[this.state.cT]}
                        </Button>

                    </div>
                    <Menu
                        open={this.state.sMenu}
                        anchorEl={findDOMNode(this.sMenuB)}
                        onRequestClose={this
                        .onSMenuClose
                        .bind(this)}>
                        {this
                            .state
                            .sources
                            .map((s, idx) => (
                                <MenuItem
                                    key={s}
                                    selected={idx === this.state.cS}
                                    onClick={event => this.onSMenuItemClick(event, idx)}>
                                    {s}
                                </MenuItem >
                            ))}
                    </Menu>
                    <Menu
                        open={this.state.tMenu}
                        anchorEl={findDOMNode(this.tMenuB)}
                        onRequestClose={this
                        .onTMenuClose
                        .bind(this)}>
                        {this
                            .state
                            .tags
                            .map((t, idx) => (
                                <MenuItem
                                    key={t}
                                    selected={idx === this.state.cT}
                                    onClick={event => this.onTMenuItemClick(event, idx)}>
                                    {t}
                                </MenuItem >
                            ))}
                    </Menu>
                </AppBar>
            </div>
        )
    }
}
NavBar.PropTypes = {
    category: PropTypes.oneOf(['news', 'blog', 'book'])
}


export default withStyles(CSS)(NavBar);