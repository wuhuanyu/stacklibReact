import MockRep from '../repository/MockRep';
import * as types from './ActionConstants';

export default function fetchBBC(fields = ['title', 'summary', 'image_urls']) {
    return function (dispatch) {
        MockRep
            .withField(3, fields)
            .then((data) => {
                console.log(data);
                dispatch(receiveBBC(data));
            }).catch(e=>console.log(e));
    }
}

function receiveBBC(entities) {
    return {type: types.RECEIVE_BBC_NEWS, entities: entities}
}
