export const signup =(name,emailid,password)=>{
  console.log("selected User is :",emailid);
  return {
     type: "SIGNUP_ACTION",
     payload: {name : name,emailid : emailid,password : password}
  }
};
export const login =(emailid,password)=>{
  console.log("selected User is :",emailid);
  return {
     type: "LOGNIN_ACTION",
     payload: {emailid : emailid , password : password}
  }
};
export const logout = (pointer)=>{
  return {
    type: 'LOG_OUT_ACTION',
    payload : pointer
  }
};
