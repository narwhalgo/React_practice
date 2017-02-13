import React from 'react';
import ProductPopup from './productpopup';
import Upvote from './upvote';


class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productPopupStatus: false
    };
  }

  showPopup = () => {
    this.setState({productPopupStatus: true});
  };

  hidePopup = () => {
    this.setState({productPopupStatus: false});
  };

    renderExternal(){
      return (
        <a className="product-item-link" target="_blank" href={this.props.link}>
          <span>
            <i className="fa fa-external-link"></i>
          </span>
        </a>
      );
    }

    renderInfo(){
      return (
        <div className='product-item-info'>
          <a href='#' onClick={this.showPopup}>
            <h2>{this.props.name}</h2>
          </a>
          <p>{this.props.description}</p>
          <a href='#'>
            <img className="small-avatar" src={this.props.maker.avatar} />
          </a>
        </div>
      );
    }

  render() {
    return (
      <li className='product-item'>
        <Upvote {...this.props} />
        <img className="product-item-media" src={this.props.media} />
        {this.renderInfo()}
        {this.renderExternal()}
        <ProductPopup {...this.props} status={this.state.productPopupStatus} hidePopup={this.hidePopup}/>
      </li>
    );
  }
}

export default ProductItem;
