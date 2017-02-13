import React, { Component } from 'react';
import Actions from '../../actions';

class ProfileMenu extends Component {
  constructor(){
    super();
    this.state = {
      showProfileNav: false
    }
  }

  showNav = () => {
    if(!this.state.showProfileNav){
      this.setState({showProfileNav: true});
    }
    else{
      this.setState({showProfileNav: false});
    }
  };

  hideNav = (e) => {
    if(e.target != this.refs.profileBtn){
      this.setState({showProfileNav: false});
    }
  };

  handleLogout = (e) =>{
    e.preventDefault();
    Actions.logout();
  };

  componentWillMount() {
    window.addEventListener("click", this.hideNav, false);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.hideNav, false);
  }



  renderProfileNav(){
    return (
      <nav className='profile-nav' ref='profile-nav'>
        <a href='#'>My Profile</a>
        <a href='#' onClick={this.handleLogout}>Logout</a>
      </nav>
    );
  }

  render(){
    return(
      <div className='profile-menu'>
        <img
          onClick={this.showNav}
          src={this.props.user.avatar}
          className='profile-btn medium-avatar'
          ref='profileBtn'
        />
        {
          this.state.showProfileNav ? this.renderProfileNav() : null
        }
      </div>
    );
  }
}

export default ProfileMenu;
