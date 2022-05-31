const signupDataInLS = localStorage.getItem("userSignupData")
export const validation = (data, form) => {


  const errors = {};
  const regex = /^[a-zA-Z0-9._]{3,25}@\w{5}\.[a-z]{3}$/;


 
  if (form === "login"){

    if (!data.email) {
      errors.email = "email is empty !!!";
    } else if (data.email.length < 6) {
      errors.email = "Email must be at least 6 characters long!!!";
    } else if (!regex.test(data.email)) {
      errors.email = "Email is invalid !!!";
    } else if (!data.email.indexOf(" ") === -1) {
      errors.email = "write Email whitout space!!!";
    } else if (signupDataInLS) {
      if(JSON.parse(signupDataInLS).email !== data.email){
        errors.email = "No registration was made with this email"
      }
    } else if (!data.email.indexOf("@") === -1) {
      errors.email = "Email must be has @  !!!";
    } else {
      delete errors.email;
    }
  
    if (!data.password) {
      errors.password = "password is empty !!!";
    } else if (data.password.length < 8) {
      errors.password = "password must be at least 8 characters !!!";
    } else if (JSON.parse(signupDataInLS).password !== data.password) {
      errors.password = "You are not registered with this password"
    } else {
      delete errors.password;
    }
  }
  if (form === "signup") {

    if (!data.email) {
      errors.email = "email is empty!!!";
    } else if (data.email.length < 6) {
      errors.email = "Email must be at least 6 characters long!!!";
    } else if (!regex.test(data.email)) {
      errors.email = "Email is invalid !!!";
    } else if (!data.email.indexOf(" ") === -1) {
      errors.email = "write Email whitout space!!!";
    } else if (!data.email.indexOf("@") === -1) {
      errors.email = "Email must be has @  !!!";
    } else {
      delete errors.email;
    }
  

    if (!data.password) {
      errors.password = "password is empty !!!";
    } else if (data.password.length < 8) {
      errors.password = "password must be at least 8 characters !!!";
    } else {
      delete errors.password;
    }


    if (!data.confirmpassword) {
      errors.confirmPassword = "confirm password is empty !!!";
    } else if (data.confirmpassword.length < 8) {
      errors.confirmPassword = "password must be at least 8 characters !!!";
    } else if (data.confirmpassword !== data.password) {
      errors.confirmPassword = "passwords not match !!!";
    } else {
      delete errors.confirmPassword;
    }

    if (!data.isAccepted) {
      errors.isAccepted = "You do not agree with our rules !!!";
    } else {
      delete errors.isAccepted;
    }
    
  }
  if(form === "contactus"){

    if(!data.name){
      errors.name = "enter your name please !";
    }else if(data.name.length < 5){
      errors.name = "name must be 5 letter atleast !";
    }else{
      delete errors.name ;
    }

    if(!data.email){
      errors.email = "enter your email please !";
    }else if(!regex.test(data.email)){
      errors.email = "email is invalid !";
    }else{
      delete errors.email ;
    }

    if(!data.subject){
      errors.subject = "enter a subject !";
    }else{
      delete errors.subject ;
    }

    if(!data.message){
      errors.message = "write your message !";
    }else if(data.message.length < 10){
      errors.message = "type atleast 10 letter !"
    }else{
      delete errors.message ;
    }
  }

  return errors;
}
