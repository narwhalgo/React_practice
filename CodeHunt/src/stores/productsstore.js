import Alt from '../alt';
import Actions from '../actions';
import { decorate, bind } from 'alt-utils/lib/decorators';


@decorate(Alt)
class ProductStore{
  constructor(props) {
    this.state = {
      user: null,
      products: [],
      comments: []
    };
  }

  @bind(Actions.login, Actions.initSession, Actions.logout)
  setUser(user){
    this.setState({
      user:user
    });
  }

  @bind(Actions.getProducts)
  getProducts(products){
    this.setState({
      products:products
    });
  }

  @bind(Actions.getComments)
  getComments(comments){
    this.setState({
      comments:comments
    });
  }
}

export default Alt.createStore(ProductStore);
