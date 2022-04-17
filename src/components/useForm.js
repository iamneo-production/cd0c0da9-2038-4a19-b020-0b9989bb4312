import {useState, useEffect} from 'react';
import Signup from './Signup';
import {useNavigate} from 'react-router-dom';
const useForm = (callback,Auth) => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        adminuser: '',
        email: '',
        username: '',
        mobileNumber: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting]=useState(false);
   // const [success, setSuccess] = useState(false);
    //const [login, setLogin] = useState(false);
    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(Auth(values));
        //setIsSubmitting(true);
        if(!(errors.email && errors.username && errors.mobileNumber && errors.password && errors.confirmPassword)){
            const email = values.email;
            const username = values.username;
            const password = values.password;
            const mobileNumber = values.mobileNumber;
            const userRole = values.adminuser;

            const user = {email,username,password,mobileNumber,userRole};
            if(userRole.toLowerCase() ==="admin"){
                fetch("http://localhost:8080/admin/signup",{
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(user)
                  }).then((res)=>{
                    //console.log(res.ok);
                    if(!res.ok){
                        console.log("Email id already exist");
                        alert("This email id already exist.Please try with another email id...");
                    }
                    else{
                      //  setSuccess(true);
                        console.log("Admin data successfully added");
                        alert("Successfully registered as admin!!!");
                      
                        
                    }
                  })
            }else if(userRole.toLowerCase() === "user"){
                fetch("http://localhost:8080/user/signup",{
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(user)
                  }).then((res)=>{
                    if(!res.ok){
                        console.log("Email id already exist.");
                        alert("This email id already exist.Please try with another email id...");
                    }
                    else{
                       // setSuccess(true);
                        console.log("User data successfully added");
                        alert("Successfully registered as user!!!");
                        navigate("/user/dashboard");
                    }
                  })
            }
        }
       
    };
    
    const handleSubmitLogin = e => {
        e.preventDefault();
        const email = values.email;
        const password = values.password;
        const user = {email,password};
        fetch("http://localhost:8080/user/login",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        }).then((res)=>{
            if(res.ok){
                alert("Logged in succesfully...");
                navigate("/user/dashboard");
            }else{
                //setLogin(true);
                fetch("http://localhost:8080/admin/login",{
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(user)
                }).then((res)=>{
                    if(res.ok){
                        alert("Logged in succesfully...");
                        navigate("/admin/addVehicle");
                    }else{
                        alert("Please check you email id and password...");
                    }
                })
            }
        })
       
    }


    
  /*  useEffect(() =>{
        if(Object.keys(errors).length === 0 &&
        isSubmitting){
            callback();
        };
    },
    [errors]
    );*/
    return { handleChange, values, handleSubmit, errors,handleSubmitLogin};
};

export default useForm;