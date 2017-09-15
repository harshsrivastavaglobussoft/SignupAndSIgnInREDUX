import React,{Component} from 'react';
import {
  AppRegistry,
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {logout} from '../Actions/index';

var self
 class Home extends Component {
   static navigationOptions = {
     gesturesEnabled: false,
     headerLeft: (
      <Button
        title='Log Out'
        onPress={()=>self.props.logout(self)}
      />
    )
   }
   render(){
     self=this;
     return(
       <View style={styles.viewConainer}>
         {this._conditionalRender()}
       </View>
     )
   }

   _conditionalRender=()=>{
     if(this.props.ActiveUser){
       return(
         <View>
         <Text style={styles.headerText}>UserDetails</Text>
         <Text style={styles.textContainer}>Name: {this.props.ActiveUser.name}</Text>
         <Text style={styles.textContainer}>EmailId: {this.props.ActiveUser.emailid}</Text>
         </View>
       )
     }else{
       return(
         <View/>
       ) ;
     }
   }
}
//calling Reducers
function mapStateToProps(state){
  return {
    ActiveUser: state.ActiveUser
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({logout : logout},dispatch);
}

const styles = StyleSheet.create({
  viewConainer : {
    flex : 1,
    backgroundColor : 'white',
  },
  headerText : {
    marginLeft: 10,
    padding: 10,
    fontSize: 22,
    height: 60,
  },
  textContainer : {
    marginLeft : 10,
    padding: 10,
    fontSize: 18,
    height: 44,
  }
});
export default connect(mapStateToProps,matchDispatchToProps)(Home);
