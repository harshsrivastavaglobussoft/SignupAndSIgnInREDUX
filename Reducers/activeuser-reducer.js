import{addUser,getArray} from './user-reducer';

export default function(state=null,action){

   switch (action.type) {
     case "LOGNIN_ACTION":
          console.log('payload for log in user:*-*-*-*'+action.payload.emailid);
          let array = getArray();
          console.log("=======Arrrayyy"+array);
          for (var i = 0; i < array.length; i++) {
             if (array[i].emailid === action.payload.emailid) {
                if(array[i].password === action.payload.password){
                    return {code:200, user:array[i]};
                }
                else {
                  return state
                }
             }
          }
          return state
          break;
      case "LOG_OUT_ACTION":
             console.log("===LOG OUT++++++++",action);
             action.payload.props.navigation.goBack();
             return null;
             break;
   }
   return state;
}
