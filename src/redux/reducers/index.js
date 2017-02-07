import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import home from '../home/reducer';

const appReducer = combineReducers({
    home,
    routing
})

const rootReducer = (state, action)=>{
    if(action.type === 'CLEAR_STORE'){
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer;
