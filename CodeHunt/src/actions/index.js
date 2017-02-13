import Alt from "../alt";
import Firebase from 'firebase';
import _ from 'lodash';

var config = {
    apiKey: "AIzaSyCv5RLkLOJ_J2sW9vMLdHtmqft8_B6AfrA",
    authDomain: "product-hunt-clone-1ea41.firebaseapp.com",
    databaseURL: "https://product-hunt-clone-1ea41.firebaseio.com",
    storageBucket: "product-hunt-clone-1ea41.appspot.com",
    messagingSenderId: "736089656353"
  };

Firebase.initializeApp(config);


class Actions {

  initSession(){
    return(dispatch) =>{
      Firebase.auth().onAuthStateChanged(function(result){
        var profile = null;

        if(result){
          profile = {
            id: result.uid,
            name: result.providerData[0].displayName,
            avatar: result.providerData[0].photoURL
          }
        }
        setTimeout(() => dispatch(profile));
      });
    }
  }

  login() {
    return (dispatch) => {
      var provider = new Firebase.auth.FacebookAuthProvider();
      Firebase.auth().signInWithPopup(provider).then(function(result) {
        var user = result.user;

        var profile = {
          id: user.uid,
          name: user.providerData[0].displayName,
          avatar: user.providerData[0].photoURL
        }

        Firebase.database().ref('/users/'+user.uid).set(profile);
        dispatch(profile);

      }).catch(function(error) {
        console.log('Failed!', error);
      });
    }
  }

  logout(){
    return (dispatch) =>{
      Firebase.auth().signOut().then(function(){
        setTimeout(() => dispatch(null));
      }, function(error){
        console.log(error);
      })
    }
  }

  getProducts(){
    return (dispatch) =>{
      Firebase.database().ref('products').on('value', (snapshot) => {
        var productsVal = snapshot.val();
        var productArr = _(productsVal).keys().map((productKey) =>{
          var item = _.clone(productsVal[productKey]);
          item.key = productKey;
          return item;
        })
        .value();
        dispatch(productArr);
      });
    }
  }

  addProduct(product) {
    return (dispatch) =>{
      Firebase.database().ref('products').push(product);
    }
  }

  addVote(productId, userId){
    return (dispatch) => {
      var voteRef = Firebase.database().ref('votes/'+productId+'/'+userId);
      var upvoteRef = Firebase.database().ref('products/'+productId+'/upvote');

      voteRef.on('value', (snapshot)=>{
        if(snapshot.val() === null){
          voteRef.set(true);

          var vote = 0;
          upvoteRef.on('value', (snapshot) =>{
            vote = snapshot.val();
          });
          upvoteRef.set(vote+1);
        }
      });
    }
  }

  addComment(productId, comment){
    return (dispatch) =>{
      Firebase.database().ref('/comments/'+productId).push(comment);
    }
  }

  getComments(productId){
    return (dispatch) =>{
      var commentRef = Firebase.database().ref('comments/'+productId);

      commentRef.on('value', (snapshot)=>{
        var commentsValue = snapshot.val();
        var comments = _(commentsValue).keys().map((commentKey) =>{
          var item = _.clone(commentsValue[commentKey]);
          item.key = commentKey;
          return item;
        })
        .value();
        dispatch(comments);
      });
    }
  }

}

export default Alt.createActions(Actions);
