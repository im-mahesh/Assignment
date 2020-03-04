import { combineReducers } from 'redux';
import assignmentReducer from './assignmentReducer'

const rootReducer = combineReducers({
    assignmentList: assignmentReducer,
})

export default rootReducer;