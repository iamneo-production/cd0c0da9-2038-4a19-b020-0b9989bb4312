import React from 'react';
import useForm from './useForm';
import Auth from './Auth';
import './Form.css';

const Signup = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors}= useForm(submitForm,Auth);
    return (
        <div className="auth-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className="auth-inputs">
                    <label htmlFor="adminuser" className="form-label">  
                    </label>
                    <input id="adminuser" type="text" name="adminuser" className="form-input"
                    placeholder="Enter admin/user"
                    value={values.adminuser}
                    onChange={handleChange}/>
                    {/* {errors.adminuser && <p>{errors.adminuser}</p>} */}
                </div>
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
                    <label htmlFor="username" className="form-label">
                    </label>
                    <input id="username" type="text" name="username" className="form-input"
                    placeholder="Enter Username"
                    value={values.username}
                    onChange={handleChange}/>
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="auth-inputs">
                    <label htmlFor="mobileNumber" className="form-label">
                    </label>
                    <input id="mobileNumber" type="text" name="mobileNumber" className="form-input"
                    placeholder="Enter Mobilenumber"
                    value={values.mobileNumber}
                    onChange={handleChange}/>
                    {errors.mobileNumber && <p>{errors.mobileNumber}</p>}
                </div>
                <div className="auth-inputs">
                    <label htmlFor="password" className="form-label">
                    </label>
                    <input id="password" type="password" name="password" className="form-input"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="auth-inputs">
                    <label htmlFor="confirmPassword" className="form-label">
                    </label>
                    <input id="confirmPassword" type="password" name="confirmPassword" className="form-input"
                    placeholder="Confirm Password"
                    value={values.confirmPassword}
                    onChange={handleChange}/>
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}<br></br>
                </div>
                <button className="form-input-btn" type="submit" id="submitButton">Submit</button><br></br>
                <span className="form-input-login" id="signinLink">Already a user?<a href="/login">Login</a></span>
            </form>
        </div>
    );
};

export default Signup;
