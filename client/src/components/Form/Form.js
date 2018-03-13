import React, {Component} from 'react';
import {uploadfile} from './FormAction';
import {connect} from 'react-redux';
import { Button, Checkbox, Form } from 'semantic-ui-react'


class FORM extends Component {

	state = {

	}

	onClick = () => {
		this.props.uploadfile('yes')
	}

	render() {
		console.log(this.props.file)
		return (
			<div className='Form'>
				 <Form>
				    <Form.Field>
				      <label>First Name</label>
				      <input placeholder='First Name' />
				    </Form.Field>
				    <Form.Field>
				      <label>Last Name</label>
				      <input placeholder='Last Name' />
				    </Form.Field>
				    <Button type='submit' onClick={this.onClick}>Submit</Button>
				  </Form>
			</div>
		);
	}
}


function mapStateToProps({form}){
  const  {file} = form;
  return {file}
}



export default connect(mapStateToProps,{uploadfile})(FORM);
