export const signup =(name,emailid,password)=>{
  return {
     type: "SIGNUP_ACTION",
     payload: {name : name,emailid : emailid,password : password}
  }
};
export const login =(emailid,password)=>{
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

export const nametext  = (name)=>{

  return {
    type : 'NAME',
    payload : name
  }
};

export const emailtext = (emailid)=>{
  return{
    type : "EMAIL",
    payload : emailid
  }
};
export const passwordtext = (password)=>{
  return{
    type : 'PASSWORD',
    payload : password
  }
};

export const emaillogin = (emailid)=>{
  return{
    type : "EMAIL_LOGIN",
    payload : emailid
  }
};
export const passwordlogin = (password)=>{
  return{
    type : 'PASSWORD_LOGIN',
    payload : password
  }
};
