import React from 'react';
import useForm from './useForm';
import Auth from './Auth';
import './Form.css';


const Login = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors}= useForm(submitForm,Auth);
    return (
        <div className="auth-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="auth-inputs">
                    <label htmlFor="email" className="form-label">    
                    </label>
                    <input id="email" type="email" name="email" className="form-input"
                    placeholder="Enter email"
                    value={values.email}
                    onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="auth-inputs">
                    <label htmlFor="password" className="form-label">
                    </label>
                    <input id="password" type="password" name="password" className="form-input"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div><br></br>
                <button className="form-input-btn" type="submit" id="loginButton">Login</button><br></br>
                <span className="form-input-login" id="signupLink">New User/admin? <a href="/signup">Sign Up</a></span>
            </form>
        </div>
    );
};

export default Login;
