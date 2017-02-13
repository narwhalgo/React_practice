import React, { Component } from 'react';


class Popup extends Component {
  renderPopupContent(){
    return (
      <div className='popup'>
        <div className='popup-wrap'>
          <img src='/img/close.png' onClick ={this.props.hidePopup} />
        </div>
        <div className={'popup-content ' + this.props.style}>
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }

 render() {
   return (
     <div>
       {
         this.props.status
         ?
         this.renderPopupContent()
         :
         null
       }
     </div>
   );
 }
}

export default Popup;
