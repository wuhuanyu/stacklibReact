import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Guide from './components/news/Guide';

class MainContainer extends Component {

    constructor(props) {
        super(props);
    }

    renderContent(source) {
        console.log('---------- from main container');
        console.log('----rendering'+source);
        switch (source) {
            case 'bbc':
                return (<Guide source={source}/>);
                break;
            case 'cnn':
                return (<Guide source={source}/>);
                break;
            case 'reuters':
                return (<Guide source={source}/>);
                break;
            default:
                return null;
                break;
        }
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
