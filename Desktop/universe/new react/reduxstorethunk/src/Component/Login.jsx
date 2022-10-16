import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { signIn } from "../Store/Slice/Authslice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const state = useSelector((state)=>state.auth)
  const initialState = {
    email: "",
    password: "",
  };
  const [formData, setformData] = useState(initialState);
  const { email, password } = formData;

const Dispatch = useDispatch()
const Navigate = useNavigate()

const onInputChange=(e)=>{
const Name = e.target.name;
const Value = e.target.value;
setformData({...formData,[Name]:Value})
}

const submitData=(e)=>{
e.preventDefault()
if(email && password){
  console.log("sign_in Dispatching...");
Dispatch(signIn({formData,Navigate}))

}
}
  return (
    <div>
      <section className="sign-in">
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img
                  className="sign-in"
                  src="https://static.vecteezy.com/system/resources/previews/001/340/138/original/man-working-at-home-using-laptop-free-vector.jpg"
                  alt="sing up image"
                />
              </figure>
              <NavLink to={"/sign-up"} className="signup-image-link">
                Create an account
              </NavLink>
            </div>
            <div className="signin-form">
              <h2 className="form-title">Sign In</h2>
            

              <span>{state?.loading}</span>
              <span style={{color:'red'}}>{state?.error}</span>
            
              <form method="POST" className="register-form" id="login-form">
              <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email" />
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    id="email"
                    placeholder="Your Email"
                    onChange={onInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="your_pass">
                    <i className="zmdi zmdi-lock" />
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    id="your_pass"
                    placeholder="Password"
                    onChange={onInputChange}
                  />
                </div>
                <div onClick={submitData} className="btn btn-primary btn-lg">Log In</div>
              </form>

              <div className="social-login">
                <span className="social-label">Or login with</span>
                <ul className="socials">
                  <li>
                    <a href="#">
                      <i className="display-flex-center zmdi zmdi-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="display-flex-center zmdi zmdi-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="display-flex-center zmdi zmdi-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
