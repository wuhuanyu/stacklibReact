import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import Header, {NewsList, ListCard} from "./CommonItems";
import MockRep from '../..//repository/MockRep';
import noPic from '../../repository/nopic.jpg';
import NewsByTag from './NewsByTag';
import Header from './Header';

class Guide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerData: '',
            listData: ''
        }
    }

    componentDidMount() {
        MockRep
            .withId('da')
            .then(data => {
                console.log(data);
                this.setState({headerData: data})
            });
        MockRep
            .withField(3, ['title', '_id', 'image_urls', 'summary'])
            .then(data => {
                this.setState({listData: data})
            });
    }

    render() {
        const props = this.props;
        const state = this.state;

        let newsbytags = [['Politics','politics.jpg'],['Tech','tech.jpg']].map(([t,url])=>{
            return (<NewsByTag source={'bbc'} tag={t} tag_img_url={'http://localhost:3001/imgs/'+url}/>);
        })
        return (
            <div>
                <Header
                    id={state.headerData && state.headerData._id}
                    title={state.headerData && state.headerData.title}
                    summary={state.headerData.summary}
                    img={state.headerData && state.headerData.image_urls[0]}/>
                    {newsbytags}
                {/* <NewsByTag source={'bbc'} tag={'Politics'} ta/> */}
            </div>
        )
    }
}

Guide.propTypes = {
    source: PropTypes.string.isRequired
};

export default Guide;
