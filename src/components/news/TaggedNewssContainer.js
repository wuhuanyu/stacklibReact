import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import NavBar from '../NavBar';


class TaggedNewssContainer extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <NavBar category={'news'} source={'BBC'} tag={'china'}/>
        )
    }
}

export default TaggedNewssContainer;