import React, { Component } from 'react';
import Guide from './components/Guide';
import logo from './logo.svg';
import './App.css';
import ScrollableTab from './components/ScrollBar'
import MockRep from './repository/MockRep';
import Header from  './components/CommonItems';
import pic from './repository/mockPic.jpg';
import {NewsList} from "./components/CommonItems"
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            // cardData:MockRep.withId().then((data)=>data),
            currentTab:'BBC',
            sources:['BBC','REUTERS','MEDIUM'],
        };

        this.handleSwitchTag=this.handleSwitchTag.bind(this);
    }

    handleSwitchTag(e,index){
        console.log('app handleSwitchTag',index);
        this.setState({
            currentTab:this.state.sources[index],
        });
    }
    componentDidMount(){
    }
    render() {
        const state= this.state;
        return (
            <div>
                <ScrollableTab sources={state.sources} handleChange={this.handleSwitchTag}/>
                <Guide source={state.currentTab}/>
                {/*<Header title={card.title} summary={card.summary} img={pic}/>*/}
                {/*<NewsList newss={MockRep.withField(3,['summary','title','_id','image_urls'])}/>*/}
            </div>
        )
    }
}

export default App;
