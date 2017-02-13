import React, { Component } from 'react';
import LoginPopup from './login-popup';
import PostPopup from './post-popup';
import ProfileMenu from './profilemenu';



class Navbar extends Component {
  constructor(){
    super();
    this.state={
      popupStatus: false
    }
  }

  showPopup = () => {
    this.setState({popupStatus: true})
  };

  hidePopup = () => {
    this.setState({popupStatus: false})
  };

  renderSearch(){
    return(
      <div className='left-side'>
        <input className='product-search' placeholder='SEARCH'/>
      </div>
    );
  }

  renderLogo(){
    return (
      <a href='#'>
        <img src='img/favicon.ico'/>
      </a>
    );
  }

  renderUser(){
    return (
      <div className="right-side">
        {
          this.props.user
          ?
            <div>
              <span>
                <a
                  href='#'
                  className='login-btn'
                  onClick={this.showPopup}>
                  POST
                </a>
                <ProfileMenu user={this.props.user}/>
              </span>
              <PostPopup user={this.props.user} status ={this.state.popupStatus} hidePopup={this.hidePopup}/>
            </div>
            :
          <div>
            <span>
              <a
                href='#'
                className='login-btn'
                onClick={this.showPopup}>
                LOGIN
              </a>
            </span>
            <LoginPopup status ={this.state.popupStatus} hidePopup={this.hidePopup}/>

          </div>

          }
          </div>
    );
  }
  renderPopup(){
    return <Popup />
  }

  render() {
    return (
      <div>
        <div className='navbar'>
          {this.renderSearch()}
          {this.renderLogo()}
          {this.renderUser()}
        </div>
      </div>
    );
  }
}

export default Navbar;
