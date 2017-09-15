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
          var array = getArray();
          for (var i = 0; i < array.length; i++) {
            if(array[i].emailid === action.payload.emailid){
              return { ...state, code:400,name:action.payload.name,emailid:action.payload.emailid
               ,password:action.payload.password,error:"Already Registered"};
            }
          }
          addUser(action.payload);
          return {code:200};
          break;
    case "NAME":
         if (action.payload.length <8) {
           return {...state,name:action.payload,error:"Name should be minimum of 8 characters"}
         }
         return{ ...state, name:action.payload ,error:""};
         break;
    case "EMAIL":
         let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
         if(reg.test(action.payload) === false)
         {
          return{...state, emailid:action.payload, error:"Enter a valid Email Id"};
         }
         return{...state, emailid:action.payload, error:""};
         break;
    case "PASSWORD":
         let val = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ ;
         if(val.test(action.payload) === false)
         {
            return{...state, password:action.payload, error:"Password must have min 8 characters,1 uppercase, 1 lowercase letter and 1 number"};
         }
         return{...state, password:action.payload,error:""};
         break;
   }
   return state;
}
