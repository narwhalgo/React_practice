import React, { Component } from 'react';
import Popup from './popup';
import Actions from '../../actions';

class PostPopup extends Component {

  handlePost = () => {
    var newProduct = {
      name: this.refs.name.value,
      link: this.refs.link.value,
      description: this.refs.description.value,
      media: this.refs.media.value,
      upvote: 0,
      maker: {
        name: this.props.user.name,
        avatar: this.props.user.avatar
      }
    }
    console.log(this.props.user.name);
    Actions.addProduct(newProduct);
  };


  render() {
    return (
      <Popup {...this.props} style='post-popup'>
        <header className='post-header'>Share a new product</header>
        <div>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  <input placeholder="Enter Product's Name" ref='name'></input>
                </td>
              </tr>
              <tr>
                <td>Description</td>
                <td>
                  <input placeholder="Enter Product's description" ref='description'></input>
                </td>
              </tr>
              <tr>
                <td>Link</td>
                <td>
                  <input placeholder="http://www..." ref='link'></input>
                </td>
              </tr>
              <tr>
                <td>Media</td>
                <td>
                  <input placeholder="Paste a direct image link" ref='media'></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <footer className='post-footer'>
          <button onClick={this.handlePost} className='post-btn'>Hunt it!</button>
        </footer>
      </Popup>
    );
  }
}

export default PostPopup;
