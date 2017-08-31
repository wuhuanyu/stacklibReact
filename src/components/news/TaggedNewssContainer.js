import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import NavBar from '../NavBar';
import {mockClient} from '../../repository/client';
import {AllNewsFields} from '../../constants/Constants';
import {TaggedLifeNewss, TaggedCommonNewss} from './TaggedNewss';
import {withStyles} from 'material-ui/styles';

const CSS = {
    root: {
       
    },
    tagged: {
        marginTop: "5px",
        height: '100%'
    }
}

class TaggedNewssContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sources: [
                'BBC', 'REUTERS', 'CNN'
            ],
            tags: [
                'LIFE', 'CHINA', 'POLITICS'
            ],
            cS: 0,
            cT: 0,
            data: []
        }
    }

    fetchData(source, tag, count, fields) {
        mockClient.getNewsRecent(source.toLowerCase(), tag.toLowerCase(), count, AllNewsFields).then(res => this.setState({data: res.data}));
    }

    componentDidMount = () => {
        let {sources, tags, cS, cT} = this.state;
        this.fetchData(sources[cS], tags[cT], 3, AllNewsFields);
    }

    componentWillReceiveProps(nextProps) {}
    /**
     *
     * TODO: potential bug
     * @param {*} e
     * @param {*} idx
     */

    onSMenuItemClick(e, idx) {
        if (idx !== this.state.cS) {
            this.setState({cS: idx})
            let {sources, tags, cS, cT} = this.state;
            this.fetchData(sources[idx], tags[cT], 5, AllNewsFields);
        }

    }
    onTMenuItemClick(e, idx) {
        if (idx !== this.state.cT) {
            this.setState({cT: idx})
            let {sources, tags, cS, cT} = this.state;
            this.fetchData(sources[cS], tags[idx], 5, AllNewsFields);
        }
    }

    render() {
        let {classes} = this.props;

        let taggedNews = null;

        if (this.state.tags[this.state.cT].toLowerCase() === 'life') {
            taggedNews = <TaggedLifeNewss
                source={this.state.sources[this.state.cS]}
                tag={this.state.tags[this.state.cT]}
                newss={this.state.data}/>;
        } else 
            taggedNews = <TaggedCommonNewss
                source={this
                .state
                .sources[this.state.cS]
                .toLowerCase()}
                tag={this
                .state
                .tags[this.state.cT]
                .toLowerCase()}
                newss={this.state.data}/>

        return (
            <div className={classes.root}>
                <NavBar
                    sources={this.state.sources}
                    tags={this.state.tags}
                    cSIdx={this.state.cS}
                    cTIdx={this.state.cT}
                    handleSourceItemClick={this
                    .onSMenuItemClick
                    .bind(this)}
                    handleTagItemClick={this
                    .onTMenuItemClick
                    .bind(this)}/>
                <div className={classes.tagged}></div>
                {taggedNews}
            </div>
        )
    }
}

export default withStyles(CSS)(TaggedNewssContainer);