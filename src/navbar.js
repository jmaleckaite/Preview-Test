import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom';

extend default class Menu extends Component {
	state = { activeItem: 'desktop' }
	
	handleItemClick = (e, { name }) => {
		this.setState({ activeItem: name })
	}
	
	render() {
		const { activeItem } = this.state
		
		return (
		<Menu secondary>
		<Menu.Item
		as={NavLink} to="/desktop"
		name='desktop'
		active={activeItem === 'desktop'}
		onClick={this.handleItemClick}
		/>
		<Menu.Item
		as={NavLink} to="/mobile"
		name='mobile'
		active={activeItem === 'mobile'}
		onClick={this.handleItemClick}
		/>
		</Menu.Menu>
		</Menu>
		);
	}
}