import React, { Component } from 'react';
import Popup from './popup';
import Actions from '../../actions';

class LoginPopup extends Component {

	handleLogin = () => {
      Actions.login();
			this.props.hidePopup();
  };

	render() {
		return (
			<Popup {...this.props} style='login-popup'>
				<img src='/img/kitty.png' />
				<h1>Login to join our Community</h1>
				<p>CodeHunt is a community to share and geek out about the latest code and news!</p>
				<button className='fb-btn' onClick={this.handleLogin}>Login with Facebook</button>
				<p>We will never post to Facebook without your permission</p>
			</Popup>
		);
	}
}

export default LoginPopup;
