import React, { Component } from 'react';
import { Button, Header, Icon, Message, Checkbox, Form, Modal, 
Segment, Menu, Grid, Image } from 'semantic-ui-react';
import { BrowserRouter, Switch, Route, NavLink, Link } from 'react-router-dom'; 
import 'semantic-ui-css/semantic.min.css';




const Back = () => (
		<div className="templatePage">
		<Grid centered columns={2}>
		<Grid.Column>
		<Form>
		<Button as={ Link } to='/Preview' icon='eye' size='extra large' />
		</Form>
		</Grid.Column>
		</Grid>
		</div>
		);
		
export default Back;