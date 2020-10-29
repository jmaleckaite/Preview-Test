import React from 'react';
import { Button, Header, Icon, Message, Checkbox, Form, Modal, 
Segment, Menu, Grid, Image } from 'semantic-ui-react';
import { BrowserRouter, Switch, Route, NavLink, Link, Redirect } from 'react-router-dom'; 
import logo from './img/1.jpg';
import 'semantic-ui-css/semantic.min.css';
import Preview from './Preview';
import Desktop from './Desktop';
import Mobile from './Mobile';
import Back from './Back';
import ContactForm from './ContactForm';
import SendForm from './SendForm';

//when the message is published, the message is in prewait state, with options
//to preview and test. Once it is send to test, then it is possible to send to users

class App extends React.Component {
	constructor(props) {
		super(props) 
		this.state = {
			selectedButton: false
		}
		
	}

	/*
	toggleButton = () => {
		console.log('submitted');
	} */
	
	handleItemClick = (e, { name }) => this.setState({ activeItem: name })
	
	render() {
const { activeItem } = this.state

		return (
		<div className="preview">
		<Form>
		<BrowserRouter>
		<Button as={Link} to="/#" icon='eye' size='large' />
		<Button as={Link} to="/test" icon='file' size='large' />
		<Button as={Link} to="/send" icon='plane' size='large' disabled/>
		<Button as={Link} to="/desktop" icon='desktop' size='large' />
		<Button as={Link} to="/mobile" icon='mobile alternate' size='large' />
		<Switch>
		<Route path="/back">
		</Route>
		<Route path="/test">
		<ContactForm />
		</Route>
		<Route path="/send">
			<SendForm />
		</Route>
		<Route path="/desktop">
			<Desktop />
		</Route>
		<Route path="/mobile">
			<Mobile />
		</Route>
		<Redirect to="/desktop" />
		</Switch>
		</BrowserRouter>
		</Form>
		
		</div>

		
		);
	}
}

	
	/*
	function NavigationBar() {
		return (
		<Menu pointing secondary>		
		<div className="ui center aligned container">
		<div className="ui compact item">

		<a className="item">
		<Menu.Item href='/back' icon="arrow left"/>
        </a>
			<a className="item">
				<Menu.Item href='/send' icon='plane' disabled/>
			</a>
			<a className="item">
				<Menu.Item href='/test' icon='file' />
			</a>
		<a className="item">
		<Menu.Item icon="desktop" href='/#'
		
		/>
		</a>
		<a className="item">
		<Menu.Item icon='mobile alternate' href='/mobile'/>
		</a>
		</div>
		</div>
		</Menu>
		);
	}
	*/
	
	
	function DesktopView() {
		return (
		<div className="templatePage">
		<Grid centered columns={2}>
		<Grid.Column>
		<Form>
		<Header>Template Preview</Header>
		<Image 
		src= {logo}
		/>
		</Form>
		</Grid.Column>
		</Grid>
		</div>
		);
	}
	
	function MobileView() {
		return (
		<div className="mobileTemplatePage">
		<h1>Test</h1>
		</div>
		);
	}

export default App;

