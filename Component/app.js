import React,{Component} from 'react';
import {
  AppRegistry,
} from 'react-native';
import {StackNavigator,} from 'react-navigation';
import Home from '../Containers/home';
import Login from '../Containers/login';
import Signup from '../Containers/signup';

class reactNavigationSample extends Component {
  render(){
    const { navigation } = this.props;
    return (
      <App navigation={ navigation }/>
    );
  }
}

const App = StackNavigator({
  SignUpScreen: {
    screen: Signup,
    navigationOptions:{
      title: 'Sign Up',
    }
  },
  SignInScreen : {
    screen: Login,
    navigationOptions:{
      title: 'Sign In',
    }
  },
  Home: { screen: Home,
  navigationOptions:{
    title: 'Home Screen',
    }
  },
});

export default App;

AppRegistry.registerComponent('NotePadApp',() => App);
