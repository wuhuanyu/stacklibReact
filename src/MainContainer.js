import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Guide from './components/news/Guide';
import Blogs from './components/blog/Blogs';
import BookList from './components/books/BookList';
import {ProgressHint} from './components/ProgressHint';
class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            source: props.source,
            isFetching: false
        }
    }

    disableHint() {
        this.setState({isFetching: false});
    }

    enableHint() {
        this.setState({isFetching: true});
    }

    renderContent(source) {
        let content;
        switch (source) {
            case 'bbc':
            case 'cnn':
            case 'reuters':
                content = <Guide
                    source={source}
                    disableHintHandler={this
                    .disableHint
                    .bind(this)}
                    enableHintHandler={this
                    .enableHint
                    .bind(this)}/>;
                break;
            case 'medium':
                content = <Blogs/>;
                break;
            case 'mbook':
                content = <BookList/>;
                break;
            default:
                content = null;
                break;
        }
        return content;
    }
    render() {
        let {source} = this.props;
        console.log(source);
        let {isFetching} = this.state;
        return (
            <div style={{position:'relative'}}>
            {this.renderContent(source)}
            <ProgressHint show={isFetching}/>
            </div>
        )
    }
}
MainContainer.PropTypes = {
    source: PropTypes
        .oneOf(['bbc', 'cnn', 'reuters', 'medium', 'book'])
        .isRequired
}
export
default
MainContainer;