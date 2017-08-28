import React, { Component } from 'react';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { mockClient } from '../../repository/client';
import BookItem from './BookItem';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookData: []
        }
    }

    componentDidMount() {
        mockClient
            .getBookRecent(3, ['_id', 'crawled_at', 'title', 'image_urls', 'summary'])
            .then(res => {
                this.setState({ bookData: res.data })
            })
    }

    render() {
        let { bookData } = this.state;
        let bookItems = bookData.map((book,idx) => {
            let { _id, crawled_at, title, image_urls, summary } = book;
            return (
                <BookItem
                    key={_id+idx}
                    crawled_at={crawled_at}
                    title={title}
                    img_url={image_urls}
                    summary={summary} />

            );
        });

        console.log(bookItems.length);
        
        return (
            <List>
                {bookItems}
            </List>
        )
    }
}

export default BookList;