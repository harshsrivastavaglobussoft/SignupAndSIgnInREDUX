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
import {login} from '../Actions/index';

 class Login extends Component {
  constructor(props){
     super(props);
     this.state = {
       email : '',
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
         placeholder="Email"
         onChangeText={(email) => this.setState({email})}
         value={this.state.emailid}
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
        onPress={() => this.props.login(this.state.email,this.state.password)}>
       <View style={styles.ButtonContainer}>
         <Text style={styles.textStyle}>Sign In</Text>
       </View>
       </TouchableOpacity>
      </View>
    )
  }
  _handleResponse=()=>{
    console.log('--===---LOG IN-===----'+this.props.ActiveUser);
    if(this.props.ActiveUser){

      if(this.props.ActiveUser.code === 200){
       this.props.ActiveUser=null;
       this.props.navigation.navigate('Home');

      }
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
  return bindActionCreators({login : login},dispatch);
}


const styles = StyleSheet.create({
  viewConainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  TextView :{
    height: 200,
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
});
export default connect(mapStateToProps,matchDispatchToProps)(Login);
