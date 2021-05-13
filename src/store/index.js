import { createStore, combineReducers } from 'redux';
import { authReducer } from './reducers/authReducers';
import { partnerReducer } from './reducers/partnerReducer';

const rootReducer = combineReducers({
    partner: partnerReducer,
    auth: authReducer,
});

export default createStore(rootReducer);


