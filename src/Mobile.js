import React, { Component } from 'react';
import { Button, Header, Icon, Message, Checkbox, Form, Modal, 
Segment, Menu, Grid, Image } from 'semantic-ui-react';
import { BrowserRouter, Switch, Route, NavLink, Link } from 'react-router-dom'; 
import logo from './img/1.jpg';
import 'semantic-ui-css/semantic.min.css';




const Mobile = () => (
		<div className="templatePage">
		<Grid centered columns={4}>
		<Grid.Column>
		<Form>
		<Header>Template Preview on Mobile Devices</Header>
		<Image 
		src= {logo}
		/>
		</Form>
		</Grid.Column>
		</Grid>
		</div>
		);
		
export default Mobile;