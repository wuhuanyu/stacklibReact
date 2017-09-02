import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import withAppBar from './withAppBar';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';

const postApi = "";

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            el: undefined,
            category: '',
            text: '',
            cT: 0,
        }
    }

    componentDidMount() {
        this.setState({
            el: findDOMNode(this.categoryAnchor)
        })
    }

    closeMenu() {
        this.setState({
            open:false,
        })
    }
    openMenu(){
        this.setState({
            open:true
        })

    }
    onCategoryClick() {
        this.setState({
        })
    }

    onCategoryItemClick(idx) {
        this.setState({
            cT: idx,
            open:false,
        })
    }
    
    submitFB(){

    }
    render() {
        return (
            <div>
                <Paper>
                    <Typography
                        type="title"
                        gutterBottom
                        style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                        {"来，工作人员递上话筒"}
                    </Typography>
                    <form noValidate>
                        <Button
                            ref={node => this.categoryAnchor = node}
                            onClick={this
                                .onCategoryClick
                                .bind(this)}>{"tucao"}</Button>
                        <Menu open={this.state.open} anchorEl={this.state.el} onRequestClose={this.closeMenu.bind(this)}>
                            {
                                this.props.categories.map((cat, idx) => {
                                    return <MenuItem key={cat} selected={idx === this.state.cT} onClick={event => this.onCategoryItemClick(idx)} />
                                })
                            }
                        </Menu>
                        <TextField id={"category"} label={"Text"} multiLine />
                        <Button onClick={this.submitFB.bind(this)}>
                            {"Submit"}
                        </Button>

                    </form>
                </Paper>
            </div>
        )
    }
}

Feedback.PropTypes = {
    categories: PropTypes.array.isRequired,
}


export default withAppBar(Feedback, "吐槽");
