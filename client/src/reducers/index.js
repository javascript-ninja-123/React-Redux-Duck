import { combineReducers } from 'redux';
import FormReducer from '../components/Form/FormReducer';


const rootReducer = combineReducers({
	form:FormReducer
});

export default rootReducer;
