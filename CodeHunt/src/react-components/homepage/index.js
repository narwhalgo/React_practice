import React from 'react';
import ProductList from '../Product/product-list';

import connectToStores from 'alt-utils/lib/connectToStores';
import ProductStore from '../../stores/productsstore';
import Actions from '../../actions';

@connectToStores
class HomePage extends React.Component {
  constructor(){
    super();
    Actions.getProducts();
  }

  static getStores() {
    return [ProductStore];
  }

  static getPropsFromStores() {
    return ProductStore.getState();
  }

  render(){
    return (
      <div>
        <header>
          <img src='/img/banner.jpeg' width='100%' />
        </header>

        <div>
          <div className='container'>
            {
                this.props.products
              ?
                <ProductList productList={this.props.products} />
              :
            "Loading....."
          }
        </div>
      </div>
    </div>
    );
  }
}

export default HomePage;
