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
import {signup,nametext,emailtext,passwordtext} from '../Actions/index';

 class SignUp extends Component {
   constructor(){
     super();
   }

    _onNameChanged = (text) => {
      this.props.AuthUser.name= text;
     this.props.nametext(text);
   }
    _onEmailChanged = (text) =>{
      this.props.AuthUser.emailid=text;
      this.props.emailtext(text);
    }
    _onPasswordChanged = (text)=>{
      this.props.AuthUser.password=text;
      this.props.passwordtext(text);
    }

  render(){
    this._handleResponse();
    return(
      <View style={styles.viewConainer}>
       <View style={styles.TextView}>
       <TextInput
         style={styles.TextInputView}
         placeholder="Name"
         onChangeText={(text) => this._onNameChanged(text)}
         value={this.props.AuthUser.name}
       />

       <TextInput
         style={styles.TextInputView}
         placeholder="Email"
         onChangeText={(emailid)=>this._onEmailChanged(emailid)}
         value={this.props.AuthUser.emailid}
       />

       <TextInput
         style={styles.TextInputView}
         placeholder="Password"
         onChangeText={(password)=>this._onPasswordChanged(password)}
         value={this.props.AuthUser.password}
         secureTextEntry={true}
       />
       <View style={styles.errorContainer}>
          {this._handleValidation()}
       </View>
       </View>

       <TouchableOpacity
        onPress={() =>this.props.signup(this.props.AuthUser.name,this.props.AuthUser.emailid,this.props.AuthUser.password)}>
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
       this.props.navigation.navigate('SignInScreen');
     }
    }
  }

  _handleValidation=()=>{
    if(this.props.AuthUser.error!==""){
      return(
      <View>
       <Text style={styles.errorText}>{this.props.AuthUser.error}</Text>
      </View>
    );
    }
  }
}
function mapStateToProps(state){
  return {
    AuthUser: state.AuthUser,
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    signup : signup,
    nametext : nametext,
    emailtext : emailtext,
    passwordtext : passwordtext,
  },dispatch);
}

const styles = StyleSheet.create({
  viewConainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  TextView :{
    height: 350,
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

export default connect(mapStateToProps,matchDispatchToProps)(SignUp);
