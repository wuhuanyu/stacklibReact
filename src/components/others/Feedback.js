import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import withAppBar from './withAppBar';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Menu, {MenuItem} from 'material-ui/Menu';

const postApi = "";

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            el: undefined,
            category:'',
            text:'',
        }
    }

    componentDidMount() {
        this.setState({
            el: findDOMNode(this.categoryAnchor)
        })
    }

    closeMenu(){

    }
    onCategoryClick() {
        this.setState({

        })
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
                        <Menu open={this.state.open} anchorEl={this.state.el} onRequestClose={this.onCategoryClick.bind(this)}>

                        </Menu>
                        <TextField id={"category"} label={"Text"}/>
                    </form>
                </Paper>
            </div>
        )
    }
}

Feedback.PropTypes={
    
}


export default withAppBar(Feedback, "吐槽");
