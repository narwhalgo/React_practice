import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './homePage';
import Navbar from './navbar';
import connectToStores from 'alt-utils/lib/connectToStores';
import ProductStore from '../stores/productsstore';
import Actions from '../actions';

@connectToStores
class App extends React.Component {
  constructor() {
    super();
    Actions.initSession();
  }

  static getStores(){
    return [ProductStore];
  }

  static getPropsFromStores(){
    return ProductStore.getState();
  }

  render(){
    return(
      <div>
        <Navbar user={this.props.user}/>
        <HomePage />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
