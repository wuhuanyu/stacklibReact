import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyle} from 'material-ui/styles';

const CSS = theme => {}

const Article = ({
    article,source,tag
}) => {
    
}

Article.PropTypes = {
    source: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    article: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
        crawled_at: PropTypes.number.isRequired,
        img_urls: PropTypes.array.isRequired,
        text: PropTypes.array.isRequired
    })
}

export default withStyle(CSS)(Article);