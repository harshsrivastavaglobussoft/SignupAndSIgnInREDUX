import React,{Component} from 'react';
import {
  AppRegistry,
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {signup} from '../Actions/index';

 class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      name : '',
      email :'',
      password : '',
    };
  }

  render(){
    this._handleResponse();
    return(
      <View style={styles.viewConainer}>
       <View style={styles.TextView}>
       <TextInput
         style={styles.TextInputView}
         placeholder="Name"
         onChangeText={(name) => this.setState({name})}
         value={this.state.name}
       />

       <TextInput
         style={styles.TextInputView}
         placeholder="Email"
         onChangeText={(email) => this.setState({email})}
         value={this.state.email}
       />
       <TextInput
         style={styles.TextInputView}
         placeholder="Password"
         onChangeText={(password) => this.setState({password})}
         value={this.state.password}
         secureTextEntry={true}
       />
       </View>

       <TouchableOpacity
        onPress={() =>this.props.signup(this.state.name,this.state.email,this.state.password)}>
       <View style={styles.ButtonContainer}>
         <Text style={styles.textStyle}>Sign Up</Text>
       </View>
       </TouchableOpacity>

       <TouchableOpacity
        onPress={() => this._signInAction()}>
       <View style={styles.ButtonContainer}>
         <Text style={styles.textStyle}>Sign In</Text>
       </View>
       </TouchableOpacity>
      </View>
    )
  }
  _signInAction=()=>{
    this.props.navigation.navigate('SignInScreen');
  }
  _handleResponse=()=>{
    if(this.props.AuthUser){
      if(this.props.AuthUser.code === 200){
          this.props.AuthUser=null;
       this.props.navigation.navigate('SignInScreen');
      }
    }
  }
}
function mapStateToProps(state){
  return {
    InputData: state.InputData,
    AuthUser: state.AuthUser
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({signup : signup},dispatch);
}
const styles = StyleSheet.create({
  viewConainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  TextView :{
    height: 250,
    backgroundColor: 'skyblue',
    justifyContent: 'space-around',
  },
  TextInputView:{
    height: 60,
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  ButtonContainer: {
    marginTop:20,
    height: 60,
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: 'rgba(59,162,252,1)',
  },
  textStyle: {
    padding: 10,
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  }
});

export default connect(mapStateToProps,matchDispatchToProps)(SignUp);
