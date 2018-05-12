import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import authReducer from '../Reducers/auth';
import contentReducer from '../Reducers/content';
import thunk from 'redux-thunk';
// import { sessionReducer, sessionService } from 'redux-react-session';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    //STORE_CREATION
    const store = createStore(
        combineReducers({
            auth: authReducer,
            content: contentReducer
        }),
        composeEnhancer(applyMiddleware(thunk))
    );
    // sessionService.initSessionService(store)
    return store;
}
