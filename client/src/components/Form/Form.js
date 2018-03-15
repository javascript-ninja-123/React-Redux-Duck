import React, {Component} from 'react';
import {uploadfile} from './FormAction';
import {connect} from 'react-redux';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import {failValidation, successValidation,err,success} from './FormAction';
import {Right, Left,fetchCallNullable} from './util';

class FORM extends Component {

	state = {
		firstName:'',
		lastName:''
	}

	componentDidMount() {
		const {err,success} = this.props;
		fetchCallNullable('https://jsonplaceholder.typicode.com/posts')
		.then(data => data.fold(err,success))
	}

	onClick = () => {
		const {failValidation,successValidation} = this.props;
		const stateNullable = obj => obj.firstName !== '' || obj.lastName !== ''
		? Right(this.state) : Left(null);

		const validateForm = state =>
		stateNullable(state)
		.fold(failValidation,successValidation)

		validateForm(this.state)

	}

	onChange = (e,text)=> this.setState({[text]:e.target.value})

	render() {
		return (
			<div className='Form'>
				 <Form>
				    <Form.Field>
				      <label>First Name</label>
				      <input placeholder='First Name'
								value={this.state.firstName}
								onChange={e => this.onChange(e,'firstName')}
							 />
				    </Form.Field>
				    <Form.Field>
				      <label>Last Name</label>
				      <input placeholder='Last Name'
							value={this.state.lastName}
							onChange={e => this.onChange(e,'lastName')}
							/>
				    </Form.Field>
				    <Button type='submit' onClick={this.onClick}>Submit</Button>
				  </Form>
			</div>
		);
	}
}






export default connect(null,{err,success,failValidation,successValidation})(FORM);
