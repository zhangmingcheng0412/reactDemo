import {createStore,combineReducers} from 'redux';
import topics from "./reducer/topics";
import topic from "./reducer/topic";
export default createStore(combineReducers({
    topics,
    topic
}))
