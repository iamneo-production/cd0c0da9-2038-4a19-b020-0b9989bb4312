export default function Auth(values) {
    let errors = {};
    
    if(!values.email){
        errors.email = "Email required";
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email is invalid";
    }
    if(!values.username.trim()){
        errors.username = "Username required";
    }
    if(!values.mobileNumber){
        errors.mobileNumber= "mobileNumber required";
    }else if(!/^[6-9]\d{9}$/i.test(values.mobileNumber)){
        errors.mobileNumber = "mobile number is invalid";
    }
    if(!values.password){
        errors.password = "Password required";
    }else if(values.password.length<6){
        errors.password = 'Password should be more than 6 characters';
    }
    if(!values.confirmPassword){
        errors.confirmPassword = "Password required";
    }else if(values.confirmPassword !== values.password){
        errors.confirmPassword = 'Passwords donot match';
    }
    return errors;
}