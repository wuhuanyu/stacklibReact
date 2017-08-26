import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Guide from './components/news/Guide';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            source:props.source
        }
    }

    renderContent(source) {
        let content;
        switch (source) {
            case 'bbc':
                content = <Guide  source={source}/>;
                break;
            case 'cnn':
                content = <Guide  source={source}/>;
                break;
            case 'reuters':
                content = <Guide  source={source}/>;
                break;
            default:
                content = null;
                break;
        }

        return content;
    }
    render() {
        let {source} = this.props;
        return this.renderContent(source);

    }
}

MainContainer.PropTypes = {
    source: PropTypes
        .oneOf(['bbc', 'cnn', 'reuters', 'medium', 'book'])
        .isRequired
}

export default MainContainer;
