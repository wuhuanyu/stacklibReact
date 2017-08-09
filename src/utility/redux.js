import {createStore} from   'redux';

const drawerReducer =(pre,action)=>{
    if(action.type==='open'){
        return Object.assign({},pre,{open:action.type});
    }
    if(action.type==='close'){
        return Object.assign({},pre,{open:action.type});
    }
    else
        return pre;
};

const DrawerStore=createStore(drawerReducer);

export default DrawerStore;