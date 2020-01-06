import React, {Component} from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component{
	marking =()=> {
		return ({textDecoration : this.props.todo.completed ? 'line-through' : 'none'});
		}
	render(){
		const {id, title} = this.props.todo;
  	return (
  		<div style = {this.marking()} className = 'todos'>
  			<p style = {{display:'inline', cursor:'pointer'}} onClick = {this.props.markComplete.bind(this , id)}>
  			{title}
  			</p>
  			<button onClick = {this.props.delTodo.bind(this, id)} style ={btnstyle}>X</button>
  		</div>
  		)
	}
}
let btnstyle = {
	background:'#ff0000',
	color : '#fff',
	border : 'none',
	padding : '5px 8px',
	borderRadius : '50%',
	float : 'right',
	cursor : 'pointer'
}
TodoItem.propTypes = {
	todo : PropTypes.object.isRequired
}
// let itemStyle ={
// 	background : '#f4f4f4',
// }
export default TodoItem;