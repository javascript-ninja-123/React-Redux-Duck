
import {
	CLICK_TO_UPLOAD
} from './type';



export const uploadfile = file => async (dispatch) => {
	dispatch({
		type:CLICK_TO_UPLOAD,
		payload:file
	})
}

export const failValidation = obj => async(dispatch) => {
	console.log(obj,'failed')
}


export const successValidation = obj => async(dispatch) => {
	console.log(obj,'success')
}


export const err = err => async(dispatch) => {
	console.log(err)
}

export const success = data => async(dispatch) => {
	console.log(data)
}
