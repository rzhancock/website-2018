import React, { Component } from 'react';
import './Reverse.css';

export default class Reverse extends React.Component {
	constructor (props) {
	  super(props);

	  this.state = {
	    text: ''
	  }

	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}

	

	handleChange(e) {
		this.setState({ text: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();

		if (!this.state.text) {
			this.setState({ text: "You can't reverse nothing" });

		} else {
		
		let str = this.state.text;
		let reversed = str.split(' ').map(x => x.split('').reverse().join('')).join(' ');

		this.setState({ text: reversed });
		};

	}
		
	

	render() {
		return (
		<div className="word-reverse">  
          <h1 className="word-rev-title">Word Reverse</h1>
			<form onSubmit={this.handleSubmit}>
				<input 
					className='input' 
					type='text' 
					placeholder="Enter a word, string, or phrase"
					value={this.state.text}
					onChange={this.handleChange} />

				<button type='submit'> Reverse! </button>
			</form>
		</div>
		)

			
		}
	}
