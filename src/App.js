import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import currentUser from './redux/user/user.action';

//firebase import
import {auth, firestore, createUserProfile} from './firebase/firebase.utils';


//Router Import
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';

//COmponent import
import SignIn from './pages/sign-in/sign-in.component';
import SignUp from './pages/sign-up/sign-up.component';
import {Footer} from './components/footer/footer.component';
import Homepage from './pages/homepage/homepage.component';
//import Header from './components/header/header.component';

//Test Component
//import HeaderMod from './components/header-mod/header-mod.component';

class App extends React.Component {
  constructor() {
    super();
  }
  unsubscribe = null;
  componentDidMount() {
    const {currentUser} = this.props;
    this.unsubscribe = auth.onAuthStateChanged(async (user) => {
      if(user) {
        const userRef = await createUserProfile(user);
        userRef.onSnapshot(snapshot => {
          console.log(snapshot.data());
          currentUser({
            id:snapshot.id,
          ...snapshot.data()
          }); 
        })
      } else {
        currentUser(null);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const {currentUserr} = this.props;
    return (
      <div className="App">
        <Switch>
          <Route exact path='/signin' render={() => currentUserr? (<Redirect to='/' />): <SignIn />} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Homepage} />
        </Switch>
        <Footer />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  currentUserr: state.user.currentUser 
});
const mapDispatchToProps = (dispatch) => ({
  currentUser: user => dispatch(currentUser(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));



// To push app on heroku heroku create app-name --buildpack https://github.com/mars/create-react-app-buildpack.git
// to deploy -> git push heroku master



//Things to fix 
// 1 Footer and displaying of components
// 2 Poduct section
// 3


// Things to do 10-2-21
//Refactor products section

//1 Register page
//2 Error logging and showing
//3 if time then work on products section too



// whats left to do
// adding pages for specific category
// add to cart for them
// displaying items on cart
// checkout
// payment