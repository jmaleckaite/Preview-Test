import React from 'react';
import { Button, Header, Icon, Message, Checkbox, Form, Modal, 
Segment, Menu, Grid, Image, Input, Table, Search } from 'semantic-ui-react';
import { BrowserRouter, Switch, Route, NavLink, Link } from 'react-router-dom'; 
import 'semantic-ui-css/semantic.min.css';

interface IState {
	ch1: boolean;
	ch2: boolean;
	ch3: boolean;
}

class SendForm extends React.Component<{}, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			ch1: false,
			ch2: false,
			ch3: false,
		};
		
		this.handleChange = this.handleChange.bind(this);
		
	}
	
	handleChange(event) {
		this.setState({value: event.target.value})
	}
	
	checkboxChangeHandler = (event: React.FormEvent<HTMLInputElement>, data) => {
		const value = data.checked;
		console.log(data);
		this.setState({ [data.name]: data.checked });
		console.log(value);
	};
	
	handleSubmit = event => {
		alert('Form submitted');
		event.preventDefault();
		console.log(this.state);
		}
	
	render() {
		const {
			ch1,
			ch2,
			ch3
		} = this.state
		
		return (
		<div>

		<Table basic='very' celled collapsing>
		<Table.Header>
		<Header as='h1' color="blue">Invia un nuovo messaggio agli utenti</Header>
        <div className="searchbar">
		<Search
		placeholder="Cerca un canale"
		onSearchChange={this.handleChange}
		type='text'
		value={this.state.value}
		/>
		</div>
		<Table.Row>
		<Table.HeaderCell>Channel</Table.HeaderCell>
		</Table.Row>
		</Table.Header>
		<Table.Body>
		<Table.Row>
		<Table.Cell>
		
		<div className="field">
		<div className="checkbox">
		<Checkbox
		label="Le Notizie del Portale"
		name="ch1"
		checked={this.state.ch1}
		onChange={this.checkboxChangeHandler}
		/>
		 </div>
		  </div>
		  </Table.Cell>
		  </Table.Row>
		  <Table.Row>
		  <Table.Cell>
		  <div className="field">
		  <div className="ui checkbox">
		  <Checkbox
		  label="Gli eventi e le Notizie della Cultura"
		  name="ch2"
		  checked={this.state.ch2}
		  onChange={this.checkboxChangeHandler}
		  />
		  </div>
		  </div>
		  </Table.Cell>
		  </Table.Row>
		  <Table.Row>
		  <Table.Cell>
		  <div className="field">
		  <div className="ui checkbox">
		  <Checkbox
		  label="Gli eventi e le notizie del centro per le famiglie"
		  name="ch3"
		  checked={this.state.ch3}
		  onChange={this.checkboxChangeHandler}
		  />
		  </div>
		  </div>
		  </Table.Cell>
		  </Table.Row>
		  </Table.Body>
		  
		  <Table.Footer>
		  <Table.Row>
		  <Table.HeaderCell />
		  <Table.HeaderCell>
		  <Button size='small' type='submit' color='blue' 
		  floated='left' onClick={this.handleSubmit}>Invia ai canali selezionati</Button>
		  </Table.HeaderCell>
		  </Table.Row>
		  </Table.Footer>
		</Table>
		
		</div>
		);
	}
}

export default SendForm;