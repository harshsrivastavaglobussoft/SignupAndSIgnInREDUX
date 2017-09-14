import{addUser,getArray} from './user-reducer';

export default function(state=null,action){

   switch (action.type) {

     case "SIGNUP_ACTION":
          console.log('payload for sign up user: +++++++++++++' + action.payload.emailid);
          addUser(action.payload);
          return {code:200,user:action.payload};
          break;
   }
   return state;
}
