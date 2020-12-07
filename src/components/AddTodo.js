import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

class AddTodo extends React.Component {
	render() {
		return <p>this is AddTodo Component</p>
	}
}
export default connect(
	null,
	{ addTodo }
)(AddTodo)