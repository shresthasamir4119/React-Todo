import React from 'react';

class Search extends React.Component{
	title = '';

	onChange = (e) => {
		this.title = e.target.value;
		this.props.search(this.title);

	}

	render(){
			return (
				<form style={formStyle}>
					<input 
					type='text'
					placeholder = 'search'
					style = {inputStyle}
					onKeyUp = {this.onChange}
					/>
				</form>
			)
	}
}
let formStyle = {
	display:'flex', 
	padding:'10px 0px', 
	background : '#777'
}

let inputStyle = {
	padding : '5px',
	flex :'10'

}

export default Search;