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
import {login,emaillogin,passwordlogin} from '../Actions/index';

 class Login extends Component {
  _onPasswordChanged = (text) =>{
    this.props.passwordlogin(text);
  }
  _onEmailChanged = (text) =>{
    this.props.emaillogin(text);
  }
  render(){
    this._handleResponse();
    return(
      <View style={styles.viewConainer}>
       <View style={styles.TextView}>
       <TextInput
         style={styles.TextInputView}
         placeholder="Email"
         onChangeText={(email) => this._onEmailChanged(email)}
         value={this.props.ActiveUser.emailid}
       />
       <TextInput
         style={styles.TextInputView}
         placeholder="Password"
         onChangeText={(password) => this._onPasswordChanged(password)}
         value={this.props.ActiveUser.password}
         secureTextEntry={true}
       />
       <View style={styles.errorContainer}>
          {this._handleValidation()}
       </View>
       </View>

       <TouchableOpacity
        onPress={() => this.props.login(this.props.ActiveUser.emailid,this.props.ActiveUser.password)}>
       <View style={styles.ButtonContainer}>
         <Text style={styles.textStyle}>Sign In</Text>
       </View>
       </TouchableOpacity>
      </View>
    )
  }
  _handleResponse=()=>{
    if(this.props.ActiveUser){

      if(this.props.ActiveUser.code === 200){
       this.props.navigation.navigate('Home');

      }
    }
  }
  _handleValidation=()=>{
    if(this.props.ActiveUser.error!==""){
      return(
      <View>
       <Text style={styles.errorText}>{this.props.ActiveUser.error}</Text>
      </View>
    );
    }
  }
}

//calling Reducers
function mapStateToProps(state){
  return {
    LoginData: state.LoginData,
    ActiveUser: state.ActiveUser
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
                           login : login,
                            emaillogin:emaillogin,
                            passwordlogin:passwordlogin,
                                  },dispatch);
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
  },
  errorContainer:{
    height: 60,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  errorText : {
    padding: 10,
    fontSize: 15,
    color: 'red',
    alignSelf: 'center',
  },
});
export default connect(mapStateToProps,matchDispatchToProps)(Login);
