import React, {Component} from 'react';
import Card, {CardContent, CardMedia} from 'material-ui/Card';
import PropType from 'prop-types';
import {ListItem} from 'material-ui/List';
import Typography from 'material-ui/Typography';

const BookItem = ({_id, crawled_at, title, img_url, summary}) => {
    return (
        <div>
            <ListItem>
                <Card>
                    <CardMedia>
                        <img src={img_url && img_url[0]} alt={"Eh,Something happened"}/>
                    </CardMedia>
                    <CardContent>
                        <Typography>
                            {title}
                        </Typography>
                        <Typography>
                            {summary}
                        </Typography>
                    </CardContent>
                </Card>
            </ListItem>
        </div>
    )
};

BookItem.PropType = {
    _id: PropType.string.isRequired,
    crawled_at: PropType.number.isRequired,
    title: PropType.string.isRequired,
    img_url: PropType.array.isRequired,
    summary: PropType.array.isRequired
}

export default BookItem;