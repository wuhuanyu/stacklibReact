import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BlogItem from './BlogItem';
import Divider from 'material-ui/Divider';
import {withStyles} from 'material-ui/styles';
import {mockClient} from '../../repository/client';
import {capitalize, num2Time} from '../../utility/Utils';

const CSS = theme => ({});

class Blogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogsData: []
        }
    }

    componentDidMount() {
        console.log('Blog mounted');
        let client = window.client;
        let _this = this;
        client
            .getMediumRecent(5, ['title', 'id', 'summary', 'image_urls', 'crawled_at'])
            .then(res => {
                console.log(res.length);
                _this.setState({blogsData: res});
            });
    }

    componentWillUnmount() {
        console.log('Blog umount');
    }

    render() {
        let {blogsData} = this.state;
        
        console.log(blogsData.length);
        let blogItems = blogsData.map((blog, idx) => {
            return <div>
                <BlogItem
                    key={blog._id}
                    title={blog.title}
                    crawled_at={num2Time(blog.crawled_at)}
                    img_urls={blog.image_urls}
                    summary={blog.summary}/>
                <Divider
                    key={idx}
                    style={{
                    marginTop: '2px'
                }}/>
            </div>
        });
        return <div>
            {blogItems}
        </div>;
    }
}

export default Blogs;

// Blogs.PropTypes = {     blogs: PropTypes.array.isRequired }