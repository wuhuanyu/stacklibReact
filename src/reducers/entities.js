import merge from 'lodash/merge';
import * as types from '../actions/ActionConstants';

const initialState={
    bbc:{},
    medium:{},
    routers:{},
};


export default function entites(state=initialState,action){
    if(action.type===types.RECEIVE_BBC_NEWS){
        console.log('----from entities');
        let newState= merge({},state,{bbc:action.entities});
        console.log(newState);
        return newState;
    }
    return state;
}