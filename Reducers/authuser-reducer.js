import{addUser,getArray} from './user-reducer';

export var initialstate ={
  name: '',
  emailid: '',
  password : '',
  error : ''
};

export default function(state=initialstate,action){
   switch (action.type) {

     case "SIGNUP_ACTION":
          console.log('payload for sign up user: +++++++++++++' + action.payload.emailid);
          addUser(action.payload);
          return {code:200,name:action.payload.name,emailid:action.payload.emailid
           ,password:action.payload.password,error:""};
          break;
    case "NAME":
         return{name:action.payload ,error:""};
         break;
    case "EMAIL":
         return{emailid:action.payload, error:""};
         break;
    case "PASSWORD":
         return{password:action.payload,error:""};
         break;
   }
   return state;
}
