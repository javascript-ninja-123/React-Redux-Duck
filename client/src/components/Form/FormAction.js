
import {
	CLICK_TO_UPLOAD
} from './type';



export const uploadfile = file => async (dispatch) => {
	dispatch({
		type:CLICK_TO_UPLOAD,
		payload:file
	})
}

