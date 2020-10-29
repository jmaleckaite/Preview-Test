import React from 'react';
import { Button, Header, Icon, Message, Checkbox, Form, Modal, 
Segment, Menu, Grid, Image, Input } from 'semantic-ui-react';
import { BrowserRouter, Switch, Route, NavLink, Link } from 'react-router-dom'; 
import 'semantic-ui-css/semantic.min.css';


//assign different functions to buttons

class ContactForm extends React.Component {
	state = {}
	
	handleChange = (e, { name, value }) =>
	this.setState({ [name]: value })
	
	handleSubmit = () => this.setState({ email: '', message: '' })
	
	
	handleSubmit = e => {
		alert('Form submitted');
		e.preventDefault();
		console.log(this.state);
	}

		/*
		
		axios({
			method: "POST",
			url: "http://localhost:3002/send", 
			data: this.state
		}).then((response)=>{
			if(response.data.status === 'success') {
				alert("Email Sent.");
				this.resetForm()
			} else if(response.data.status === 'fail') {
				alert("Email failed to send");
			}
		})
	
	}
	**/
	
	render() {
		const { email, message } = this.state
		return (
	<div className="messageForm">
	<Grid centered columns={2}>
    <Grid.Column> 
	<div class="ui fluid form segment">
	<Form onSubmit={this.handleSubmit} method="POST">
	<Header color='blue'>Prova un messaggio</Header>
	<Form.Input
	placeholder='Email'
	label='Invia a'
	name='email'
	value={email}
	onChange={this.handleChange} 
	/>
	<Form.Input 
	label='Il messaggio' 
	placeholder='Message'
	value={message}
	onChange={this.handleChange}
	/>
	<div className="inline fields">
    <div className="field">
	<Form.Button color='blue' type="submit" primary>Submit</Form.Button>
	</div>
	<div className="field">
	<Form.Button secondary type="cancel">Cancel</Form.Button>
	</div>
	<div className="field" position="left">
	<Form.Button>Privacy & Terms</Form.Button>
	</div>
	</div>
	</Form>
	</div>
	</Grid.Column>
	</Grid>
	</div>
		);
	}
	
	onNameChange = e => {
		this.setState({email: e.target.value})
	}
	
	onMessageChange = e => {
		this.setState({message: e.target.value})
	}
	
	
}




	
	
	







export default ContactForm;
