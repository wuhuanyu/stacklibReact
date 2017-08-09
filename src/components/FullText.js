import React,{Component} from   'react';
import PropTypes from   'prop-types';
import MockRep from '../repository/MockRep';

class NewsFullTextCon extends Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            title:'',
            sum:'',
            imgs:[],
            ps:[],
        }
    }

    componentDidMount(){
        MockRep.withId(this.props.id).then(data=>
            this.setState({
                id:data._id,
                title:data._title,
                sum:data.summary,
                imgs:data.image_urls,
                ps:data.text,
            })
        )
    }

    render(){
        let {id,title,sum,imgs,ps}=this.state;
        return (
            <NewsFullText title={title} id={id} sum={sum} imgs={imgs} ps={ps}/>
        )
    }
}

const NewsFullText=(props)=>{
    return (
        <div>

        </div>
    )

};

NewsFullText.propTypes={
    id:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    sum:PropTypes.string.isRequired,
    imgs:PropTypes.array.isRequired,
    ps:PropTypes.array.isRequired,
};

// class NewsFullText extends Component{
//
//
//     render(){
//         return(
//             <div>
//                 <h1>This is full Screen</h1>
//                 <h1>{this.props.match.params.id}</h1>
//             </div>
//         )
//     }
// }

NewsFullTextCon.propTypes={
    id: PropTypes.string.isRequired,
};
export default NewsFullText;