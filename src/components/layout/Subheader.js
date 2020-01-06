import React, {Component} from 'react';

class SubHeader extends Component{
	render(){
		return (
			<ul style = {ulStyle}>
				<li style ={liStyle} onClick = {this.props.allTodo}>All</li>
				<li style ={liStyle} onClick = {this.props.completedTodo}>Completed</li>
				<li style ={liStyle} onClick = {this.props.remainingTodo}>Remaining</li>
			</ul>
			)
	}
}
let ulStyle = {
	listStyle : 'none',
	display : 'flex'
}
let liStyle = {
	float : 'right',
	flex : '3',
	textAlign : 'center',
	cursor : 'pointer',
	background : '#eee',
	margin : '10px 5px',
	padding : '10px 0'
}

export default SubHeader;