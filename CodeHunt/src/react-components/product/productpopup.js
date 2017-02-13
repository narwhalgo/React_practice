import React from 'react';
import Popup from '../navbar/popup';
import Upvote from './upvote';
import Actions from '../../actions';
import connectToStores from 'alt-utils/lib/connectToStores';
import ProductStore from '../../stores/productsstore';

@connectToStores
class ProductPopup extends React.Component {
  constructor() {
    super();
  }

  static getStores(){
    return [ProductStore];
  }

  static getPropsFromStores(){
    return ProductStore.getState();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.status && this.props.status != nextProps.status) {
      Actions.getComments(this.props.pid);
    }
    return true;
  }

    renderHeader(){
      return (
        <header style={{backgroundImage: 'url(' + this.props.media + ')'}}>
          <div className='header-shadow'>
            <h1>{this.props.name}</h1>
            <p>{this.props.description}</p>
            <div>
              <Upvote {...this.props}/>
              <a className='getit-btn' href={this.props.link} target='_blank'>Get It!</a>
            </div>
          </div>
        </header>
      );
    }


  handleComment = (e) =>{
      if(e.keyCode === 13 && e.target.value.length > 0){
        var comment = {
          content: e.target.value,
          name: this.props.user.name,
          avatar: this.props.user.avatar
        };
        Actions.addComment(this.props.pid, comment);
        e.target.value = null;
      }
    };

  renderBodyDiscussion() {
    return (
      <div className='discussion'>
        <h2>Discussion</h2>
        {
          this.props.user
          ?
            <div className='post-comment'>
              <img className='medium-avatar' src={this.props.user.avatar}/>
              <input placeholder='What do you think of this product?' onKeyUp={this.handleComment}/>
            </div>
          :
          null
        }
        {this.renderComments()}
      </div>
    );
  }

  renderBody() {
    return (
      <div className='product-popup-body'>
        <main>
          {this.renderBodyDiscussion()}
        </main>
      </div>
    );
  }

renderComments() {
  return (
    <ul className='comment-list'>
      {
        this.props.comments.map(function(comment, idx){
          return (
            <li key={idx}>
              <img className='medium-avatar' src={comment.avatar} />
              <div>
                <strong>{comment.name}</strong>
                <p>{comment.content}</p>
              </div>
            </li>
          );
        })
      }
    </ul>
  );
}

  render() {
    return (
      <Popup {...this.props} style='product-popup'>
        {this.renderHeader()}
        {this.renderBody()}
      </Popup>
    );
  }

}

export default ProductPopup;
