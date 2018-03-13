
import {
	CLICK_TO_UPLOAD
} from './type';


const INITIAL_STATE = {
	file:null
}


export default (state = INITIAL_STATE, action) => {
	switch(action.type){
		case CLICK_TO_UPLOAD:
		return {...state, file:action.payload};
		default:
		return state;
	}
}