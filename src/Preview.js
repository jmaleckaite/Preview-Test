import React, { Component } from 'react';
import { Button, Header, Icon, Message, Checkbox, Form, Modal, 
Segment, Menu, Grid, Image } from 'semantic-ui-react';
import { BrowserRouter, Switch, Route, NavLink, Link, Redirect } from 'react-router-dom'; 
import 'semantic-ui-css/semantic.min.css';
import Desktop from './Desktop';
import Mobile from './Mobile';






const Preview = () => (
		<BrowserRouter>
		<Switch>
		<Route exact path="/desktop" component={Desktop} />
		<Route exact path="/mobile" component={Mobile} />
		<Redirect to="/desktop" />
		</Switch>
		</BrowserRouter>
		
		);
		
export default Preview;