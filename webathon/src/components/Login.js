import React, { useState } from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Login() {
    let navigate = useNavigate();
    let [error, setError] = useState('');
    const { register: signInRegister, handleSubmit: signInHandleSubmit, formState: { errors: signInErrors } } = useForm();
    const { register: signUpRegister, handleSubmit: signUpHandleSubmit, formState: { errors: signUpErrors } } = useForm();

    const submitSignInForm = (userobj) => {
        console.log(userobj, 'customer');
        localStorage.setItem('loggedInUser', JSON.stringify(userobj));
        navigate('/Upload')
    };
    

    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };
    const submitSignUpForm=(userobj)=>{
        console.log(userobj)
       setIsSignUp(false)
       setError("Please Login Again!!")

    }

    

    return (
        <div className='login-con1'>
            <div className={`login-container ${isSignUp ? 'right-panel-active' : ''}`}>
                <div className="form-container sign-up-container">
                    {error?.length !== 0 && (
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '40px',
                            marginTop: '25px'
                        }}>
                            <div style={{
                                width: 'fit-content',
                                border: '1px solid #333',
                                paddingLeft: '6px',
                                paddingRight: '6px'
                            }}>
                                <p className=''>{error}</p>
                            </div>
                        </div>
                    )}

                    <form onSubmit={signUpHandleSubmit(submitSignUpForm)} className='form1'>
                        <input
                            type="text"
                            id="username2"
                            className="form-control mb-3 input1"
                            placeholder="username"
                            {...signUpRegister("username", { required: "*Username is required" })}
                        />
                        {signUpErrors.username?.type === "required" && <p className='text-danger'>{signUpErrors.username?.message}</p>}
                        <input
                            type="email"
                            className="form-control mb-3 input1"
                            placeholder="Email"
                            {...signUpRegister("emailid", { required: true })}
                        />
                        {signUpErrors.emailid?.type === "required" && <p className='text-danger'>*Please Enter your Email-id</p>}
                        <input
                            type="tel"
                            id="phone2"
                            name="phone"
                            placeholder="Mobile Number"
                            className="form-control mb-3 input1"
                            pattern="[0-9]{10}"
                            title='Please enter a valid phone number consisting of 10 digits'
                            {...signUpRegister("mobile", { required: true })}
                        />
                        {signUpErrors.mobile?.type === "required" && <p className='text-danger'>*Please Enter your Mobile Number</p>}
                        <input type="password"
                            id="password2"
                            className="form-control mb-3 input1"
                            placeholder='Password'
                            
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                            {...signUpRegister("password", { required: "*Password is required" })}
                        />
                        {signUpErrors.password?.type === "required" && <p className='text-danger'>{signUpErrors.password?.message}</p>}
                        <input
                            type="text"
                            id="address1"
                            className="form-control mb-3 input1"
                            placeholder="Address"
                            {...signUpRegister("address", { required: true })}
                        />
                        {signUpErrors.address?.type === "required" && <p className='text-danger'>*Please Enter your Address</p>}
                        <button type="submit" className=" login-button">
                            Register
                        </button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    {error?.length !== 0 && (
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '40px',
                            marginTop: '25px'
                        }}>
                            <div style={{
                                width: 'fit-content',
                                border: '1px solid #333',
                                paddingLeft: '6px',
                                paddingRight: '6px'
                            }}>
                                <p className=''>{error}</p>
                            </div>
                        </div>
                    )}
                    <form onSubmit={signInHandleSubmit(submitSignInForm)} className='form1'>
                        <input
                            type="text"
                            id="username"
                            className="form-control mb-3 input1"
                            placeholder="username"
                            {...signInRegister("username", { required: "*Username is required" })}
                        />
                        {signInErrors.username?.type === "required" && <p className='text-danger'>{signInErrors.username?.message}</p>}
                        <input
                            type="password"
                            id='password'
                            className="form-control mb-3 input1"
                            placeholder="password"
                            {...signInRegister("password", { required: "*Password is required" })}
                        />
                        {signInErrors.password?.type === "required" && <p className='text-danger'>{signInErrors.password?.message}</p>}
                        <button type="submit" className=" mt-4 login-button">Login</button>
                    </form>
                    <a href="https://www.youtube.com/watch?v=mUdo6w87rh4">Forgot your password?</a>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className='text-center login-h1 ms-5'>Welcome Back!</h1>
                            <p className='text-center login-p ms-5'>To keep connected with us please <br />login with your personal info</p>
                            <button className="ghost login-button" onClick={toggleForm}>
                                Sign In
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right ms-5">
                            <h1 className='text-center login-h1 ms-5'>Hello, Friend!</h1>
                            <p className='text-center login-p ms-5'>Enter your personal details and <br />start the journey with us</p>
                            <button className="ghost login-button" onClick={toggleForm}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
